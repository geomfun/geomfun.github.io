JXG.Options = JXG.merge(JXG.Options, {

    axisScaleX: 1,
    axisScaleY: 1,
    device: 'tablet',
    opacityLevel: 0.5,
    sensitive_area: 20,
    lastRegPolCorners: 4,

    angle: {
        fillColor: '#ddd',
        strokeColor: '#000',
        orthotype: 'sectordot'
    },

    axis: {
        ticks: {
            strokeColor: '#666666',
            strokeOpacity: 0.4,
            label: {
                fontSize: 14
            }
        },
        label: {
            position: 'urt',
            offset: [-15, 30]
        }
    },

    glider : {
        fillColor: '#ff0',
        strokeColor: '#000'
    },

    intersection: {
        fillColor: '#fff'
    },

    point: {
        size: 4,
        fillColor:   '#c00',
        strokeColor: '#000',

        // snap on majorTicks

        snapX: -1,
        snapY: -1
    },

    polygon: {
        fillColor: '#ffff00',
        highlightFillColor: '#ffff00',
        hasInnerPoints: false
    },

    precision: {
        touchMax: Infinity
    },

    segment: {
        label: {
            position: 'bot',
            offsets: [0,-12]
        }
    },
    
    text: {
        fontSize: 18
    }
});

if (JXG.isAndroid() || JXG.isApple()) {
    JXG.Options.curve.RDPsmoothing = false;
    JXG.Options.curve.numberPointsHigh = 600;
    JXG.Options.curve.numberPointsLow = 100;
    JXG.Options.curve.doAdvancedPlot = false;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Array.prototype.find = function (func) {
  for (var i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
}

JXG.extend(String, {
  contains: function (pattern) {
    return this.indexOf(pattern) >= 0;
  },

  startsWith: function (pattern) {
    return this.indexOf(pattern) === 0;
  },

  endsWith: function (pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.lastIndexOf(pattern) === d;
  }
});

// ensure GUI is really a global symbol
var GUI = GUI || {};
window.GUI = GUI;

JXG.extend(GUI, {
  loadjscssfile: function(filename) {
    if (filename.endsWith(".js")) {
      var fileref = document.createElement('script');
      fileref.setAttribute("type", "text/javascript");
      fileref.setAttribute("src", filename);
    } else if (filename.endsWith(".css")) {
      var fileref = document.createElement('link');
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined") {
      document.getElementsByTagName("head")[0].appendChild(fileref);
    }
  }
});
