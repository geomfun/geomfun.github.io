s = board.create('slider',[[1,4],[4,4],[0,2,5]],{snapWidth:0.5});
board.create('functiongraph', [function(t) {
  return Math.pow(Math.E,t-s.Value());
}]);
board.create('text',[1,4.5, function() {
  return '$f(x) = e^{x-'+s.Value()+'}$';
}]);