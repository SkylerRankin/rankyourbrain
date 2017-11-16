var robot = require('robotjs');
console.log('solver init');
for (var i=0; i<10000; ++i) {
  solve();
  var init = performance.now();
  while (performance.now() - init < 100 ) {  }
}

function solve() {
  var q = document.getElementById('beforeAnswer');
  var _a = q.innerHTML.split(' ');
  var a = 'error';
  switch (_a[1]) {
    case '*':
      a = _a[0] * _a[2];
      console.log(_a[0]+'*'+_a[2]+'='+a);
      break;
    case '+':
      a = Number(_a[0]) + Number(_a[2]);
      console.log(_a[0]+'+'+_a[2]+'='+a);
      break;
    case '-':
      a = _a[0] - _a[2];
      console.log(_a[0]+'-'+_a[2]+'='+a);
      break;
    case '/':
      a = _a[0] / _a[2];
      console.log(_a[0]+'/'+_a[2]+'='+a);
      break;
    default:
      console.log('unidentified math operation');
  }
  document.getElementById('answer').value = a;
  document.getElementById('answer').focus();

  var element = document.getElementById("solve");
  element.parentNode.removeChild(element);
  robot.tap('enter');
}
