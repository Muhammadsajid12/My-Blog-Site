import { connectDatabase, insertDocument } from "../../lib/db-util";

async function handler(req, res) {
  console.log("dfasdfasdf");
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    console.log(email, name, message);
    if (
      !email ||
      !email.includes("@") ||
      name.trim() === "" ||
      !name ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json("Data is Invalid", { message: message });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      const result = await insertDocument(client, "Messages", newMessage);
      // Here we getting id form backend id auto generated...
      newMessage.id = result.insertedId;
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res
      .status(201)
      .json({ newMessage: newMessage, response: "message submited" });
  }
}

export default handler;
