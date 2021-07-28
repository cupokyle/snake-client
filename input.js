let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === "w") {
    // console.log("Going Up")
      connection.write("Move: up");
    } else if (key === "s") {
    // console.log("Going Down")
      connection.write("Move: down");
    } else if (key === "a") {
    // console.log("Going Left")
      connection.write("Move: left");
    } else if (key === "d") {
    // console.log("Going Right")
      connection.write("Move: right");
    } else if (key === "z") {
      connection.write("Say: YO!");
    } else if (key === "x") {
      connection.write("Say: Move it!");
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};