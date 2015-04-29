var i, lines = ['Math.sin(x)', 'Math.cos(x)', 'Math.tan(x)'],
    colors = ['pink', 'blue', 'green'],
    funcs = {}, fname, curve;

for (i = 0; i < lines.length; i++) {
  fname = 'f_' + i;
  funcs[fname] = (function (fun) {
    return new Function ('x', 'return (' + fun + ');');
  })(lines[i]);
  curve = board.create('functiongraph', [funcs[fname]],{
    strokeWidth: 2, strokeColor: colors[i], doAdvancedPlot:false});
  board.create('glider', [curve], {name: lines[i].substr(5, 3)});
}