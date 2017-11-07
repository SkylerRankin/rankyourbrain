javascript:(function() {
  if (!document.getElementById("solve")) {
    var solve = document.createElement('script');
    solve.src = 'http://localhost:3000/solve.js';
    solve.id = 'solve';
    document.body.appendChild(solve);
  }
})();

// id = answer
// id = beforeAnswer
