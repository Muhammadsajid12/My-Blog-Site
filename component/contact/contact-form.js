import React, { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import { useRef } from "react";
import Notification from "../ui/notification";
// we can add the function outof component function
async function sendMessage(dataDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(dataDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "something went Wrong");
  }
  return data;
}

function ContactForm() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();
  const [reqStatus, setReqStatus] = useState(); // success/ pending/error
  const [RequestError, setRequestError] = useState();
  // Here some logic to disapare the notificaiton

  if (reqStatus === "success" || reqStatus === "error") {
    setTimeout(() => {
      setReqStatus(null);
    }, 3000);
  }

  // Time to extract data from ref...
  async function sendMessageHandler(event) {
    event.preventDefault();
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const message = inputMessage.current.value;
    // Here call the fn to get the data..
    setReqStatus("pending");
    try {
      const data = await sendMessage({
        email: email,
        name: name,
        message: message,
      });
      console.log(data);
      setReqStatus("success");
    } catch (error) {
      setRequestError(error.message);
      setReqStatus("error");
    }
  }
  // Here i create a variable will have obj in future on conditions.....
  let notification;
  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Message is sending",
      message: "your message on the way",
    };
  }

  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message have send successfully",
    };
  }

  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: RequestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How i can help you</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Enter your Email </label>
            <input type="email" id="email" required ref={inputEmail}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="email"> Enter your Name </label>
            <input type="text" id="email" required ref={inputName}></input>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="textarea"> Enter your Message </label>
          <textarea
            type="text"
            id="textarea"
            rows="5"
            required
            ref={inputMessage}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
