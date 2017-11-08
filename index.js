javascript:(function() {
  if (!document.getElementById("solve")) {
    var solve = document.createElement('script');
    solve.src = 'https://github.com/SkylerRankin/rankyourbrain/blob/master/solve.js';
    solve.id = 'solve';
    document.body.appendChild(solve);
  }
})();
