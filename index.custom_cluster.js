process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
// is file being executed in master mode?
if(cluster.isMaster) {
  // cause index.js to be executed again in 
  // slave mode
  cluster.fork();
  cluster.fork();
  //cluster.fork();
} else {
  // Im slave , Im going to act like a server
  // and do nothing else
  const express = require("express");
  const app = express();
  const crypto = require("crypto");

  app.get("/", (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
       res.send("Hi there!");
    });
  });

  app.get("/fast", (req, res) => {
     res.send("fast and furious");
  });

  app.listen(3000, console.log("app listening on port 3000"))
}
