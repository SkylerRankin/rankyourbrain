var robot = require('robotjs');
var key = require('keypress');
var interval  =  null;

//520, 80 bookmarklet
//767, 386 input box

key(process.stdin);

process.stdin.on('keypress', function (ch, key) {
  if (key && key.name == 'escape') {
    console.log('killing process');
    process.exit();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

function loop() {
  robot.moveMouse(520, 80);
  robot.mouseClick();
  robot.moveMouse(767, 386);
  robot.mouseClick();
  robot.keyTap('enter');
  //console.log(robot.getMousePos().x+', '+robot.getMousePos().y);
}

interval = setInterval(loop, 500);
