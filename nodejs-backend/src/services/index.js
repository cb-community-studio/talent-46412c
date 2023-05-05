const users = require("./users/users.service.js");
const admin = require("./admin/admin.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(admin);
  // ~cb-add-configure-service-name~
};
