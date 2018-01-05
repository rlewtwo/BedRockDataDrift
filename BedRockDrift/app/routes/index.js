
const noteRoutes = require('./note_routes');
module.exports = function(app) {

  noteRoutes(app);
    console.log(app)
  // Other route groups could go here, in the future
};  
