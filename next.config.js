const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
//  This syntax  is equllent to export.defualHome as common ract component.;
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sajid",
        mongodb_password: "TSDqzNuOx7M9GRRl",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "sajid",
      mongodb_password: "TSDqzNuOx7M9GRRl",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
