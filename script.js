function drawTree(n) {
  for (var i = 0; i < n; i++) {
    var star = '@';
    for (var j = 0; j < n - i; j++) {
      star += '_';
    }
    for (var k = 0; k <= i; k++) {
      star += '$ ';
    }

    console.log(star);

  }
}