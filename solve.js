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
