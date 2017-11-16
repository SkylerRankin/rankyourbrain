javascript:(function() {
  if (!document.getElementById("solve")) {
    var solve = document.createElement('script');
    solve.src = 'https://cdn.rawgit.com/SkylerRankin/rankyourbrain/9278a1c6/solve.js';
    solve.id = 'solve';
    document.body.appendChild(solve);
  }
})();
