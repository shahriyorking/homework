const Publisher = require("../../db/models/Publisher.js");

function addPublisher(data) {
 return Publisher.create(data)
    .then((publisher) => {
      return publisher;
    })
    .catch((err) => {
      console.log("Error creating publisher:", err);
    });
}
module.exports = addPublisher