xaxis = board.create('axis', [[0, 0], [1, 0]], {
  name: '数量/个', withLabel: true,
  label: {position: 'rt',   // possible values are 'lft'|'rt'|'top'|'bot'|'ulft'|'urt'|'llft'|'lrt'
    offset: [-60, 20]       // (in pixels)
  }
});
yaxis = board.create('axis', [[0, 0], [0, 1]], {
  name: '总价/元', withLabel: true,
  label: { position: 'rt', offset: [-70, 0] }
});

var total = board.create('slider', [[1, 46], [5, 46], [0, 25, 70]], {
  precision:1, snapWidth: 0.1, name: '总价', strokeColor: 'red'
});
var count = board.create('slider', [[1, 42], [5, 42], [0, 5, 10]], {
  precision:0, snapWidth: 1, name: '数量', strokeColor: 'red'
});
var price = board.create('slider', [[1, 38], [5, 38], [0, 5, 7]], {
  precision:1, snapWidth: 0.1, name: '单价', strokeColor: 'red'
});

var f = board.create('functiongraph', [function(x) { return x * price.Value();}]);
board.create('point',
  [ function() { return count.Value(); },
    function() { return count.Value() * price.Value(); }],
  { withLabel: false }
);

var totalChanged = function(){
  if (price.Value() > 0.01) {
    var n = Math.round(total.Value() / price.Value());
    count.position = (n - count._smin) / (count._smax - count._smin);
  }
};

var countChanged = function(){
  var value = count.Value() * price.Value();
  total.position = (value - total._smin) / (total._smax - total._smin);
};

total.on('drag', totalChanged);
count.on('drag', countChanged);
price.on('drag', countChanged);
