var q = document.getElementById('beforeAnswer');
var _a = q.innerHTML.split(' ');
var a = 'error';
switch (_a[1]) {
  case '*':
    a = _a[0] * _a[2];
    break;
  case '+':
    a = 0 + _a[0] + _a[2];
    break;
  case '-':
    a = _a[0] - _a[2];
    break;
  case '/':
    a = _a[0] / _a[2];
    break;
}
document.getElementById('answer').value = a;
document.getElementById('answer').click();
console.log(a);
