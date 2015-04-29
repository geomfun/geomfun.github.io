(function () {
  var bottom = board.create('image', ['bottom.png', [0, 0.3], [2, 1]], {layer: 1, fixed: true}),
      muzzle = board.create('image', ['muzzle.png', [0, 1.05], [3, 0.75]], {layer: 0, fixed: true}),
      shoot = board.create('text', [8, 6, '<button id="shoot">发射</button>']),
      reset = board.create('text', [9.2, 6, '<button id="reset">重来</button>']),
      rot, rp, cp, cc, cannonball, cbanim, solution, velocity,

      animTime = function () {
        return 3000;
      },

      fAngle = function () {
        return Math.atan2(cp.Y()-rp.Y(),cp.X()-rp.X());
      },

      fSolution = function (x) {
        var b = fAngle(),
            g = 9.81/2;

        return Math.tan(b)*(x - cannonball.X()) - g*(Math.pow((x - cannonball.X())/(velocity.Value()*Math.cos(b)), 2)) + cannonball.Y();
      },

      fAnim = function (t) {
        var i = Math.floor(solution.points.length*t/animTime())/*3 + 17*t/animTime()*/,
            s = NaN;

        if (JXG.exists(solution.points[i]) && solution.points[i].usrCoords[2] > 0) {
          s = solution.points[i].usrCoords.slice(1);
        }

        return s;
      };

  board.options.animationDelay = 50;

  velocity = board.create('slider', [[0, 6], [5, 6], [0, 5, 15]], {name: '加速度'});

  cp = board.create('point', [1.4, 1.4], {fixed: true, visible: false});
  cc = board.create('circle', [cp, 1.25], {visible: false});
  rp = board.create('glider', [0, 1.4, cc], {withLabel: false, showInfobox: false, color: 'black'});

  rot = board.create('transform', [fAngle, cp], {type: 'rotate'});
  rot.bindTo(muzzle);

  board.create('line', [[0,0], [1,0]], { strokeWidth:1});
  cannonball = board.create('point', [3, 1.4], {size: 8, strokeColor: 'black', fillColor: 'gray', withLabel: false, fixed: true});
  cbanim = board.create('point', [3, 1.4], {size: 8, strokeColor: 'black', fillColor: 'gray', withLabel: false, fixed: true, visible: false});
  rot.bindTo(cannonball);
  solution = board.create('plot', [fSolution, function () { return cannonball.X(); }, 20], {visible: true, doAdvancedPlot: false});


  JXG.addEvent(document.getElementById('shoot'), 'mouseup', function () {
    cannonball.setProperty({
      visible: false
    });
    cbanim.setProperty({
      visible: true
    });
    cbanim.moveTo([cannonball.X(), cannonball.Y()]);

    cbanim.moveAlong(fAnim, animTime(), {
      callback: function () {
        // this is executed when the animation is finished
      }
    });
  }, this);

  JXG.addEvent(document.getElementById('reset'), 'mouseup', function () {
    board.stopAllAnimation();
    cbanim.setProperty({visible: false});
    cannonball.setProperty({visible: true});
  }, this);
})();