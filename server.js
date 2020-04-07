var appFile = require("./app.js");
const server = appFile.app;
const port = 7777;
server.listen(port, () => {
    console.log('Server is up and running on port : ' + port);
});

exports.server = server;