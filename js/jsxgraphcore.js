/*
 JSXGraph 0.99.3

 Copyright 2008-2014
 Matthias Ehmann,
 Michael Gerhaeuser,
 Carsten Miller,
 Bianca Valentin,
 Alfred Wassermann,
 Peter Wilfahrt

 JSXGraph is free software dual licensed under the GNU LGPL or MIT License.
 */
(function() {
  var requirejs, require, define;
  (function(t) {
    function e(t, e) {return g.call(t, e)}

    function i(t, e) {
      var i, r, s, o, n, a, h, l, c, d, u = e && e.split("/"), p = m.map, f = p && p["*"] || {};
      if (t && "." === t.charAt(0))if (e) {
        for (u = u.slice(0, u.length - 1), t = u.concat(t.split("/")), l = 0; t.length > l; l += 1)if (d = t[l], "." === d)t.splice(l, 1), l -= 1; else if (".." === d) {
          if (1 === l && (".." === t[2] || ".." === t[0]))break;
          l > 0 && (t.splice(l - 1, 2), l -= 2)
        }
        t = t.join("/")
      } else 0 === t.indexOf("./") && (t = t.substring(2));
      if ((u || f) && p) {
        for (i = t.split("/"), l = i.length; l > 0; l -= 1) {
          if (r = i.slice(0, l).join("/"), u)for (c = u.length; c > 0; c -= 1)if (s = p[u.slice(0, c).join("/")], s && (s = s[r])) {
            o = s, n = l;
            break
          }
          if (o)break;
          !a && f && f[r] && (a = f[r], h = l)
        }
        !o && a && (o = a, n = h), o && (i.splice(0, n, o), t = i.join("/"))
      }
      return t
    }

    function r(e, i) {return function() {return c.apply(t, v.call(arguments, 0).concat([e, i]))}}

    function s(t) {return function(e) {return i(e, t)}}

    function o(t) {return function(e) {p[t] = e}}

    function n(i) {
      if (e(f, i)) {
        var r = f[i];
        delete f[i], b[i] = !0, l.apply(t, r)
      }
      if (!e(p, i) && !e(b, i))throw Error("No " + i);
      return p[i]
    }

    function a(t) {
      var e, i = t ? t.indexOf("!") : -1;
      return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
    }

    function h(t) {return function() {return m && m.config && m.config[t] || {}}}

    var l, c, d, u, p = {}, f = {}, m = {}, b = {}, g = Object.prototype.hasOwnProperty, v = [].slice;
    d = function(t, e) {
      var r, o = a(t), h = o[0];
      return t = o[1], h && (h = i(h, e), r = n(h)), h ? t = r && r.normalize ? r.normalize(t, s(e)) : i(t, e) : (t = i(t, e), o = a(t), h = o[0], t = o[1], h && (r = n(h))), {f: h ? h + "!" + t : t, n: t, pr: h, p: r}
    }, u = {require: function(t) {return r(t)}, exports: function(t) {
      var e = p[t];
      return e !== void 0 ? e : p[t] = {}
    }, module: function(t) {return{id: t, uri: "", exports: p[t], config: h(t)}}}, l = function(i, s, a, h) {
      var l, c, m, g, v, y, C = [];
      if (h = h || i, "function" == typeof a) {
        for (s = !s.length && a.length ? ["require", "exports", "module"] : s, v = 0; s.length > v; v += 1)if (g = d(s[v], h), c = g.f, "require" === c)C[v] = u.require(i); else if ("exports" === c)C[v] = u.exports(i), y = !0; else if ("module" === c)l = C[v] = u.module(i); else if (e(p, c) || e(f, c) || e(b, c))C[v] = n(c); else {
          if (!g.p)throw Error(i + " missing " + c);
          g.p.load(g.n, r(h, !0), o(c), {}), C[v] = p[c]
        }
        m = a.apply(p[i], C), i && (l && l.exports !== t && l.exports !== p[i] ? p[i] = l.exports : m === t && y || (p[i] = m))
      } else i && (p[i] = a)
    }, requirejs = require = c = function(e, i, r, s, o) {return"string" == typeof e ? u[e] ? u[e](i) : n(d(e, i).f) : (e.splice || (m = e, i.splice ? (e = i, i = r, r = null) : e = t), i = i || function() {}, "function" == typeof r && (r = s, s = o), s ? l(t, e, i, r) : setTimeout(function() {l(t, e, i, r)}, 4), c)}, c.config = function(t) {return m = t, m.deps && c(m.deps, m.callback), c}, define = function(t, i, r) {i.splice || (r = i, i = []), e(p, t) || e(f, t) || (f[t] = [t, i, r])}, define.amd = {jQuery: !0}
  })(), define("../node_modules/almond/almond", function() {}), define("jxg", [], function() {
    var t = {};
    return"object" != typeof JXG || JXG.extend || (t = JXG), t.extend = function(t, e, i, r) {
      var s, o;
      i = i || !1, r = r || !1;
      for (s in e)(!i || i && e.hasOwnProperty(s)) && (o = r ? s.toLowerCase() : s, t[o] = e[s])
    }, t.extend(t, {boards: {}, readers: {}, elements: {}, registerElement: function(t, e) {t = t.toLowerCase(), this.elements[t] = e}, registerReader: function(t, e) {
      var i, r;
      for (i = 0; e.length > i; i++)r = e[i].toLowerCase(), "function" != typeof this.readers[r] && (this.readers[r] = t)
    }, shortcut: function(t, e) {return function() {return t[e].apply(this, arguments)}}, getRef: function(t, e) {return t.select(e)}, getReference: function(t, e) {return t.select(e)}, debugInt: function() {
      var t, e;
      for (t = 0; arguments.length > t; t++)e = arguments[t], "object" == typeof window && window.console && console.log ? console.log(e) : "object" == typeof document && document.getElementById("debug") && (document.getElementById("debug").innerHTML += e + "<br/>")
    }, debugWST: function() {
      var e = Error();
      t.debugInt.apply(this, arguments), e && e.stack && (t.debugInt("stacktrace"), t.debugInt(e.stack.split("\n").slice(1).join("\n")))
    }, debugLine: function() {
      var e = Error();
      t.debugInt.apply(this, arguments), e && e.stack && t.debugInt("Called from", e.stack.split("\n").slice(2, 3).join("\n"))
    }, debug: function() {t.debugInt.apply(this, arguments)}}), t
  }), define("base/constants", ["jxg"], function(t) {
    var e, i = 0, r = 99, s = 4, o = "dev", n = i + "." + r + "." + s + (o ? "-" + o : "");
    return e = {version: n, licenseText: "JSXGraph v" + n + " Copyright (C) see http://jsxgraph.org", COORDS_BY_USER: 1, COORDS_BY_SCREEN: 2, OBJECT_TYPE_ARC: 1, OBJECT_TYPE_ARROW: 2, OBJECT_TYPE_AXIS: 3, OBJECT_TYPE_AXISPOINT: 4, OBJECT_TYPE_TICKS: 5, OBJECT_TYPE_CIRCLE: 6, OBJECT_TYPE_CONIC: 7, OBJECT_TYPE_CURVE: 8, OBJECT_TYPE_GLIDER: 9, OBJECT_TYPE_IMAGE: 10, OBJECT_TYPE_LINE: 11, OBJECT_TYPE_POINT: 12, OBJECT_TYPE_SLIDER: 13, OBJECT_TYPE_CAS: 14, OBJECT_TYPE_GXTCAS: 15, OBJECT_TYPE_POLYGON: 16, OBJECT_TYPE_SECTOR: 17, OBJECT_TYPE_TEXT: 18, OBJECT_TYPE_ANGLE: 19, OBJECT_TYPE_INTERSECTION: 20, OBJECT_TYPE_TURTLE: 21, OBJECT_TYPE_VECTOR: 22, OBJECT_TYPE_OPROJECT: 23, OBJECT_TYPE_GRID: 24, OBJECT_TYPE_TANGENT: 25, OBJECT_TYPE_HTMLSLIDER: 26, OBJECT_TYPE_CHECKBOX: 27, OBJECT_TYPE_INPUT: 28, OBJECT_TYPE_BUTTON: 29, OBJECT_CLASS_POINT: 1, OBJECT_CLASS_LINE: 2, OBJECT_CLASS_CIRCLE: 3, OBJECT_CLASS_CURVE: 4, OBJECT_CLASS_AREA: 5, OBJECT_CLASS_OTHER: 6, OBJECT_CLASS_TEXT: 7, GENTYPE_ABC: 1, GENTYPE_AXIS: 2, GENTYPE_MID: 3, GENTYPE_REFLECTION: 4, GENTYPE_MIRRORPOINT: 5, GENTYPE_TANGENT: 6, GENTYPE_PARALLEL: 7, GENTYPE_BISECTORLINES: 8, GENTYPE_BOARDIMG: 9, GENTYPE_BISECTOR: 10, GENTYPE_NORMAL: 11, GENTYPE_POINT: 12, GENTYPE_GLIDER: 13, GENTYPE_INTERSECTION: 14, GENTYPE_CIRCLE: 15, GENTYPE_CIRCLE2POINTS: 16, GENTYPE_LINE: 17, GENTYPE_TRIANGLE: 18, GENTYPE_QUADRILATERAL: 19, GENTYPE_TEXT: 20, GENTYPE_POLYGON: 21, GENTYPE_REGULARPOLYGON: 22, GENTYPE_SECTOR: 23, GENTYPE_ANGLE: 24, GENTYPE_PLOT: 25, GENTYPE_SLIDER: 26, GENTYPE_TRUNCATE: 27, GENTYPE_JCODE: 28, GENTYPE_MOVEMENT: 29, GENTYPE_COMBINED: 30, GENTYPE_RULER: 31, GENTYPE_SLOPETRIANGLE: 32, GENTYPE_PERPSEGMENT: 33, GENTYPE_LABELMOVEMENT: 34, GENTYPE_VECTOR: 35, GENTYPE_DELETE: 41, GENTYPE_COPY: 42, GENTYPE_MIRROR: 43, GENTYPE_ROTATE: 44, GENTYPE_ABLATION: 45, GENTYPE_MIGRATE: 46, GENTYPE_VECTORCOPY: 47, GENTYPE_CTX_TYPE_G: 51, GENTYPE_CTX_TYPE_P: 52, GENTYPE_CTX_TRACE: 53, GENTYPE_CTX_VISIBILITY: 54, GENTYPE_CTX_CCVISIBILITY: 55, GENTYPE_CTX_MPVISIBILITY: 56, GENTYPE_CTX_WITHLABEL: 57, GENTYPE_CTX_LABEL: 58, GENTYPE_CTX_FIXED: 59, GENTYPE_CTX_STROKEWIDTH: 60, GENTYPE_CTX_LABELSIZE: 61, GENTYPE_CTX_SIZE: 62, GENTYPE_CTX_FACE: 63, GENTYPE_CTX_STRAIGHT: 64, GENTYPE_CTX_ARROW: 65, GENTYPE_CTX_COLOR: 66, GENTYPE_CTX_RADIUS: 67, GENTYPE_CTX_COORDS: 68, GENTYPE_CTX_TEXT: 69, GENTYPE_CTX_ANGLERADIUS: 70, GENTYPE_CTX_DOTVISIBILITY: 71, GENTYPE_CTX_FILLOPACITY: 72, GENTYPE_CTX_PLOT: 73, GENTYPE_CTX_SCALE: 74, GENTYPE_CTX_INTVAL: 75, GENTYPE_CTX_POINT1: 76, GENTYPE_CTX_POINT2: 77, GENTYPE_CTX_LABELSTICKY: 78, GENTYPE_CTX_TYPE_I: 79, GENTYPE_CTX_HASINNERPOINTS: 80, GENTYPE_CTX_SNAPWIDTH: 81}, t.extend(t, e), e
  }), define("utils/type", ["jxg", "base/constants"], function(t, e) {
    return t.extend(t, {isId: function(t, e) {return"string" == typeof e && !!t.objects[e]}, isName: function(t, e) {return"string" == typeof e && !!t.elementsByName[e]}, isGroup: function(t, e) {return"string" == typeof e && !!t.groups[e]}, isString: function(t) {return"string" == typeof t}, isNumber: function(t) {return"number" == typeof t || "[Object Number]" === Object.prototype.toString.call(t)}, isFunction: function(t) {return"function" == typeof t}, isArray: function(t) {
      var e;
      return e = Array.isArray ? Array.isArray(t) : null !== t && "object" == typeof t && "function" == typeof t.splice && "function" == typeof t.join
    }, isObject: function(e) {return"object" == typeof e && !t.isArray(e)}, isPoint: function(t) {return"object" == typeof t ? t.elementClass === e.OBJECT_CLASS_POINT : !1}, isPointType: function(t, e) {
      var i;
      return t = e.select(t), this.isArray(t) ? !0 : this.isFunction(t) && (i = t(), this.isArray(i) && i.length > 1) ? !0 : this.isPoint(t)
    }, exists: function(t) {return function(e) {return!(e === t || null === e)}}(), def: function(e, i) {return t.exists(e) ? e : i}, str2Bool: function(e) {return t.exists(e) ? "boolean" == typeof e ? e : t.isString(e) ? "true" === e.toLowerCase() : !1 : !0}, createEvalFunction: function(e, i, r) {
      var s, o = [];
      for (s = 0; r > s; s++)o[s] = t.createFunction(i[s], e, "", !0);
      return function(t) {return o[t]()}
    }, createFunction: function(e, i, r, s) {
      var o = null;
      return t.exists(s) && !s || !t.isString(e) ? t.isFunction(e) ? o = e : t.isNumber(e) ? o = function() {return e} : t.isString(e) && (o = function() {return e}) : o = i.jc.snippet(e, !0, r, !0), null !== o && (o.origin = e), o
    }, providePoints: function(e, i, r, s, o) {
      var n, a, h, l, c, d = 0, u = [];
      for (this.isArray(i) || (i = [i]), h = i.length, t.exists(o) && (d = o.length), 0 === d && (l = this.copyAttributes(r, e.options, s)), n = 0; h > n; ++n)if (d > 0 && (a = Math.min(n, d - 1), l = this.copyAttributes(r, e.options, s, o[a])), this.isArray(i[n]) && i[n].length > 1 ? u.push(e.create("point", i[n], l)) : this.isFunction(i[n]) ? (c = i[n](), this.isArray(c) && c.length > 1 && u.push(e.create("point", [i[n]], l))) : u.push(e.select(i[n])), !this.isPoint(u[n]))return!1;
      return u
    }, bind: function(t, e) {return function() {return t.apply(e, arguments)}}, evaluate: function(e) {return t.isFunction(e) ? e() : e}, indexOf: function(e, i, r) {
      var s, o = t.exists(r);
      if (Array.indexOf && !o)return e.indexOf(i);
      for (s = 0; e.length > s; s++)if (o && e[s][r] === i || !o && e[s] === i)return s;
      return-1
    }, eliminateDuplicates: function(t) {
      var e, i = t.length, r = [], s = {};
      for (e = 0; i > e; e++)s[t[e]] = 0;
      for (e in s)s.hasOwnProperty(e) && r.push(e);
      return r
    }, swap: function(t, e, i) {
      var r;
      return r = t[e], t[e] = t[i], t[i] = r, t
    }, uniqueArray: function(e) {
      var i, r, s, o = [];
      if (0 === e.length)return[];
      for (i = 0; e.length > i; i++)for (s = t.isArray(e[i]), r = i + 1; e.length > r; r++)s && t.cmpArrays(e[i], e[r]) ? e[i] = [] : s || e[i] !== e[r] || (e[i] = "");
      for (r = 0, i = 0; e.length > i; i++)s = t.isArray(e[i]), s || "" === e[i] ? s && 0 !== e[i].length && (o[r] = e[i].slice(0), r += 1) : (o[r] = e[i], r += 1);
      return e = o, o
    }, isInArray: function(e, i) {return t.indexOf(e, i) > -1}, coordsArrayToMatrix: function(t, e) {
      var i, r = [], s = [];
      for (i = 0; t.length > i; i++)e ? (r.push(t[i].usrCoords[1]), s.push(t[i].usrCoords[2])) : s.push([t[i].usrCoords[1], t[i].usrCoords[2]]);
      return e && (s = [r, s]), s
    }, cmpArrays: function(t, e) {
      var i;
      if (t === e)return!0;
      if (t.length !== e.length)return!1;
      for (i = 0; t.length > i; i++)if (t[i] !== e[i])return!1;
      return!0
    }, removeElementFromArray: function(t, e) {
      var i;
      for (i = 0; t.length > i; i++)if (t[i] === e)return t.splice(i, 1), t;
      return t
    }, trunc: function(e, i) {return i = t.def(i, 0), e = e.toFixed(i)}, autoDigits: function(t) {
      var e = Math.abs(t);
      return e = e > .1 ? t.toFixed(2) : e >= .01 ? t.toFixed(4) : e >= 1e-4 ? t.toFixed(6) : t
    }, keys: function(t, e) {
      var i, r = [];
      for (i in t)e ? t.hasOwnProperty(i) && r.push(i) : r.push(i);
      return r
    }, clone: function(t) {
      var e = {};
      return e.prototype = t, e
    }, cloneAndCopy: function(t, e) {
      var i, r = function() {};
      r.prototype = t;
      for (i in e)r[i] = e[i];
      return r
    }, merge: function(t, e) {
      var i, r;
      for (i in e)if (e.hasOwnProperty(i))if (this.isArray(e[i]))for (t[i] || (t[i] = []), r = 0; e[i].length > r; r++)t[i][r] = "object" == typeof e[i][r] ? this.merge(t[i][r], e[i][r]) : e[i][r]; else"object" == typeof e[i] ? (t[i] || (t[i] = {}), t[i] = this.merge(t[i], e[i])) : t[i] = e[i];
      return t
    }, deepCopy: function(e, i, r) {
      var s, o, n, a;
      if (r = r || !1, "object" != typeof e || null === e)return e;
      if (this.isArray(e))for (s = [], o = 0; e.length > o; o++)n = e[o], s[o] = "object" == typeof n ? this.deepCopy(n) : n; else {
        s = {};
        for (o in e)a = r ? o.toLowerCase() : o, n = e[o], s[a] = "object" == typeof n ? this.deepCopy(n) : n;
        for (o in i)a = r ? o.toLowerCase() : o, n = i[o], s[a] = "object" == typeof n ? t.isArray(n) || !t.exists(s[a]) ? this.deepCopy(n) : this.deepCopy(s[a], n, r) : n
      }
      return s
    }, copyAttributes: function(e, i, r) {
      var s, o, n, a, h, l = {circle: 1, curve: 1, image: 1, line: 1, point: 1, polygon: 1, text: 1, ticks: 1, integral: 1};
      for (n = arguments.length, s = 3 > n || l[r] ? t.deepCopy(i.elements, null, !0) : {}, 4 > n && this.exists(r) && this.exists(i.layer[r]) && (s.layer = i.layer[r]), a = i, h = !0, o = 2; n > o; o++) {
        if (!t.exists(a[arguments[o]])) {
          h = !1;
          break
        }
        a = a[arguments[o]]
      }
      for (h && (s = t.deepCopy(s, a, !0)), a = e, h = !0, o = 3; n > o; o++) {
        if (!t.exists(a[arguments[o]])) {
          h = !1;
          break
        }
        a = a[arguments[o]]
      }
      for (h && this.extend(s, a, null, !0), a = i, h = !0, o = 2; n > o; o++) {
        if (!t.exists(a[arguments[o]])) {
          h = !1;
          break
        }
        a = a[arguments[o]]
      }
      return h && t.exists(a.label) && (s.label = t.deepCopy(a.label, s.label)), s.label = t.deepCopy(i.label, s.label), s
    }, copyPrototypeMethods: function(t, e, i) {
      var r;
      t.prototype[i] = e.prototype.constructor;
      for (r in e.prototype)t.prototype[r] = e.prototype[r]
    }, toJSON: function(e, i) {
      var r, s, o, n, a;
      if (i = t.def(i, !1), JSON.stringify && !i)try {
        return n = JSON.stringify(e)
      } catch (h) {
      }
      switch (typeof e) {
        case"object":
          if (e) {
            if (r = [], t.isArray(e)) {
              for (o = 0; e.length > o; o++)r.push(t.toJSON(e[o], i));
              return"[" + r.join(",") + "]"
            }
            for (s in e)if (e.hasOwnProperty(s)) {
              try {
                a = t.toJSON(e[s], i)
              } catch (l) {
                a = ""
              }
              i ? r.push(s + ":" + a) : r.push('"' + s + '":' + a)
            }
            return"{" + r.join(",") + "} "
          }
          return"null";
        case"string":
          return"'" + e.replace(/(["'])/g, "\\$1") + "'";
        case"number":
        case"boolean":
          return"" + e
      }
      return"0"
    }, clearVisPropOld: function(t) {return t.visPropOld = {strokecolor: "", strokeopacity: "", strokewidth: "", fillcolor: "", fillopacity: "", shadow: !1, firstarrow: !1, lastarrow: !1, cssclass: "", fontsize: -1, left: -1e5, top: -1e5}, t}, isInObject: function(t, e) {
      var i;
      for (i in t)if (t.hasOwnProperty(i) && t[i] === e)return!0;
      return!1
    }, escapeHTML: function(t) {return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}, unescapeHTML: function(t) {return t.replace(/<\/?[^>]+>/gi, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")}, capitalize: function(t) {return t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()}, trimNumber: function(t) {return t = t.replace(/^0+/, ""), t = t.replace(/0+$/, ""), ("." === t[t.length - 1] || "," === t[t.length - 1]) && (t = t.slice(0, -1)), ("." === t[0] || "," === t[0]) && (t = "0" + t), t}, filterElements: function(t, e) {
      var i, r, s, o, n, a, h, l = t.length, c = [];
      if ("function" != typeof e && "object" != typeof e)return c;
      for (i = 0; l > i; i++) {
        if (h = !0, s = t[i], "object" == typeof e) {
          for (r in e)if (e.hasOwnProperty(r) && (o = r.toLowerCase(), n = "function" == typeof s[r] ? s[r]() : s[r], a = s.visProp && "function" == typeof s.visProp[o] ? s.visProp[o]() : s.visProp && s.visProp[o], h = "function" == typeof e[r] ? e[r](n) || e[r](a) : n === e[r] || a === e[r], !h))break
        } else"function" == typeof e && (h = e(s));
        h && c.push(s)
      }
      return c
    }, trim: function(t) {return t = t.replace(/^\s+/, ""), t = t.replace(/\s+$/, "")}, sanitizeHTML: function(t, e) {return"function" == typeof html_sanitize && e ? html_sanitize(t, function() {}, function(t) {return t}) : (t && (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;")), t)}, evalSlider: function(t) {return t && t.type === e.OBJECT_TYPE_GLIDER && "function" == typeof t.Value && (t = t.Value()), t}}), t
  }), define("utils/env", ["jxg", "utils/type"], function(t, e) {
    return t.extend(t, {touchProperty: "touches", isBrowser: "object" == typeof window && "object" == typeof document, supportsVML: function() {return this.isBrowser && !!document.namespaces}, supportsSVG: function() {return this.isBrowser && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")}, supportsCanvas: function() {
      var t, e = !1;
      if (this.isNode())try {
        t = "object" == typeof module ? module.require("canvas") : require("canvas"), e = !0
      } catch (i) {
      }
      return e || this.isBrowser && !!document.createElement("canvas").getContext
    }, isNode: function() {return!this.isBrowser && ("object" == typeof module && !!module.exports || "object" == typeof global && global.requirejsVars && !global.requirejsVars.isBrowser)}, isWebWorker: function() {return!this.isBrowser && "object" == typeof self && "function" == typeof self.postMessage}, supportsPointerEvents: function() {return t.isBrowser && window.navigator && (window.navigator.msPointerEnabled || window.navigator.pointerEnabled)}, isTouchDevice: function() {return this.isBrowser && void 0 !== window.ontouchstart}, isAndroid: function() {return e.exists(navigator) && navigator.userAgent.toLowerCase().indexOf("android") > -1}, isWebkitAndroid: function() {return this.isAndroid() && navigator.userAgent.indexOf(" AppleWebKit/") > -1}, isApple: function() {return e.exists(navigator) && (navigator.userAgent.indexOf("iPad") > -1 || navigator.userAgent.indexOf("iPhone") > -1)}, isWebkitApple: function() {return this.isApple() && navigator.userAgent.search(/Mobile\/[0-9A-Za-z\.]*Safari/) > -1}, isMetroApp: function() {return"object" == typeof window && window.clientInformation && window.clientInformation.appVersion && window.clientInformation.appVersion.indexOf("MSAppHost") > -1}, isMozilla: function() {return e.exists(navigator) && navigator.userAgent.toLowerCase().indexOf("mozilla") > -1 && -1 === navigator.userAgent.toLowerCase().indexOf("apple")}, isFirefoxOS: function() {return e.exists(navigator) && -1 === navigator.userAgent.toLowerCase().indexOf("android") && -1 === navigator.userAgent.toLowerCase().indexOf("apple") && navigator.userAgent.toLowerCase().indexOf("mobile") > -1 && navigator.userAgent.toLowerCase().indexOf("mozilla") > -1}, ieVersion: function() {
      var t, e, i, r = 3;
      if ("object" != typeof document)return 0;
      e = document.createElement("div"), i = e.getElementsByTagName("i");
      do e.innerHTML = "<!--[if gt IE " + ++r + "]><" + "i><" + "/i><![endif]-->"; while (i[0]);
      return r > 4 ? r : t
    }(), getDimensions: function(i, r) {
      var s, o, n, a, h, l, c, d, u, p = /\d+(\.\d*)?px/;
      if (!t.isBrowser || null === i)return{width: 500, height: 500};
      if (r = r || document, s = r.getElementById(i), !e.exists(s))throw Error("\nJSXGraph: HTML container element '" + i + "' not found.");
      return o = s.style.display, "none" !== o && null !== o ? s.offsetWidth > 0 && s.offsetHeight > 0 ? {width: s.offsetWidth, height: s.offsetHeight} : (u = window.getComputedStyle ? window.getComputedStyle(s) : s.style, {width: p.test(u.width) ? parseFloat(u.width) : 0, height: p.test(u.height) ? parseFloat(u.height) : 0}) : (n = s.style, a = n.visibility, h = n.position, l = n.display, n.visibility = "hidden", n.position = "absolute", n.display = "block", c = s.clientWidth, d = s.clientHeight, n.display = l, n.position = h, n.visibility = a, {width: c, height: d})
    }, addEvent: function(t, i, r, s) {
      var o = function() {return r.apply(s, arguments)};
      o.origin = r, s["x_internal" + i] = s["x_internal" + i] || [], s["x_internal" + i].push(o), e.exists(t) && e.exists(t.addEventListener) && t.addEventListener(i, o, !1), e.exists(t) && e.exists(t.attachEvent) && t.attachEvent("on" + i, o)
    }, removeEvent: function(i, r, s, o) {
      var n;
      if (!e.exists(o))return t.debug("no such owner"), void 0;
      if (!e.exists(o["x_internal" + r]))return t.debug("no such type: " + r), void 0;
      if (!e.isArray(o["x_internal" + r]))return t.debug("owner[x_internal + " + r + "] is not an array"), void 0;
      if (n = e.indexOf(o["x_internal" + r], s, "origin"), -1 === n)return t.debug("no such event function in internal list: " + s), void 0;
      try {
        e.exists(i) && e.exists(i.removeEventListener) && i.removeEventListener(r, o["x_internal" + r][n], !1), e.exists(i) && e.exists(i.detachEvent) && i.detachEvent("on" + r, o["x_internal" + r][n])
      } catch (a) {
        t.debug("event not registered in browser: (" + r + " -- " + s + ")")
      }
      o["x_internal" + r].splice(n, 1)
    }, removeAllEvents: function(e, i, r) {
      var s, o;
      if (r["x_internal" + i]) {
        for (o = r["x_internal" + i].length, s = o - 1; s >= 0; s--)t.removeEvent(e, i, r["x_internal" + i][s].origin, r);
        r["x_internal" + i].length > 0 && t.debug("removeAllEvents: Not all events could be removed.")
      }
    }, getPosition: function(i, r, s) {
      var o, n, a, h = 0, l = 0;
      if (i || (i = window.event), s = s || document, a = i[t.touchProperty], e.exists(a) && 0 === a.length && (a = i.changedTouches), e.exists(r) && e.exists(a))if (-1 === r) {
        for (n = a.length, o = 0; n > o; o++)if (a[o]) {
          i = a[o];
          break
        }
      } else i = a[r];
      return i.pageX || i.pageY ? (h = i.pageX, l = i.pageY) : (i.clientX || i.clientY) && (h = i.clientX + s.body.scrollLeft + s.documentElement.scrollLeft, l = i.clientY + s.body.scrollTop + s.documentElement.scrollTop), [h, l]
    }, getOffset: function(t) {
      var e, i = t, r = t, s = i.offsetLeft - i.scrollLeft, o = i.offsetTop - i.scrollTop;
      for (e = this.getCSSTransform([s, o], i), s = e[0], o = e[1], i = i.offsetParent; i;) {
        for (s += i.offsetLeft, o += i.offsetTop, i.offsetParent && (s += i.clientLeft - i.scrollLeft, o += i.clientTop - i.scrollTop), e = this.getCSSTransform([s, o], i), s = e[0], o = e[1], r = r.parentNode; r !== i;)s += r.clientLeft - r.scrollLeft, o += r.clientTop - r.scrollTop, e = this.getCSSTransform([s, o], r), s = e[0], o = e[1], r = r.parentNode;
        i = i.offsetParent
      }
      return[s, o]
    }, getStyle: function(e, i) {
      var r, s;
      return s = e.ownerDocument, window.getComputedStyle ? r = s.defaultView.getComputedStyle(e, null).getPropertyValue(i) : e.currentStyle && t.ieVersion >= 9 ? r = e.currentStyle[i] : e.style && (i = i.replace(/-([a-z]|[0-9])/gi, function(t, e) {return e.toUpperCase()}), r = e.style[i]), r
    }, getProp: function(t, e) {
      var i = parseInt(this.getStyle(t, e), 10);
      return isNaN(i) ? 0 : i
    }, getCSSTransform: function(t, i) {
      var r, s, o, n, a, h, l, c, d = ["transform", "webkitTransform", "MozTransform", "msTransform", "oTransform"];
      for (h = d.length, r = 0, o = ""; h > r; r++)if (e.exists(i.style[d[r]])) {
        o = i.style[d[r]];
        break
      }
      if ("" !== o && (a = o.indexOf("("), a > 0)) {
        for (h = o.length, n = o.substring(a + 1, h - 1), c = n.split(","), s = 0, l = c.length; l > s; s++)c[s] = parseFloat(c[s]);
        0 === o.indexOf("matrix") ? (t[0] += c[4], t[1] += c[5]) : 0 === o.indexOf("translateX") ? t[0] += c[0] : 0 === o.indexOf("translateY") ? t[1] += c[0] : 0 === o.indexOf("translate") && (t[0] += c[0], t[1] += c[1])
      }
      return t
    }, getCSSTransformMatrix: function(t) {
      var i, r, s, o, n, a, h, l, c = ["transform", "webkitTransform", "MozTransform", "msTransform", "oTransform"], d = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ];
      for (a = c.length, i = 0, s = ""; a > i; i++)if (e.exists(t.style[c[i]])) {
        s = t.style[c[i]];
        break
      }
      if ("" !== s && (n = s.indexOf("("), n > 0)) {
        for (a = s.length, o = s.substring(n + 1, a - 1), l = o.split(","), r = 0, h = l.length; h > r; r++)l[r] = parseFloat(l[r]);
        0 === s.indexOf("matrix") ? d = [
          [1, 0, 0],
          [0, l[0], l[1]],
          [0, l[2], l[3]]
        ] : 0 === s.indexOf("scaleX") ? d[1][1] = l[0] : 0 === s.indexOf("scaleY") ? d[2][2] = l[0] : 0 === s.indexOf("scale") && (d[1][1] = l[0], d[2][2] = l[1])
      }
      return d
    }, timedChunk: function(t, e, i, r) {
      var s = t.concat(), o = function() {
        var n = +new Date;
        do e.call(i, s.shift()); while (s.length > 0 && 300 > +new Date - n);
        s.length > 0 ? window.setTimeout(o, 1) : r(t)
      };
      window.setTimeout(o, 1)
    }}), t
  }), define("utils/xml", ["jxg", "utils/type"], function(t, e) {
    return t.XML = {cleanWhitespace: function(t) {for (var i = t.firstChild; e.exists(i);)3 !== i.nodeType || /\S/.test(i.nodeValue) ? 1 === i.nodeType && this.cleanWhitespace(i) : t.removeChild(i), i = i.nextSibling}, parse: function(t) {
      var e, i, r;
      return r = "function" == typeof DOMParser || "object" == typeof DOMParser ? DOMParser : function() {
        this.parseFromString = function(t) {
          var e;
          return"function" == typeof ActiveXObject && (e = new ActiveXObject("MSXML.DomDocument"), e.loadXML(t)), e
        }
      }, e = new r, i = e.parseFromString(t, "text/xml"), this.cleanWhitespace(i), i
    }}, t.XML
  }), define("utils/event", ["jxg", "utils/type"], function(t, e) {
    return t.EventEmitter = {eventHandlers: {}, suspended: {}, trigger: function(t, e) {
      var i, r, s, o, n, a;
      for (n = t.length, r = 0; n > r; r++)if (o = this.eventHandlers[t[r]], !this.suspended[t[r]]) {
        if (this.suspended[t[r]] = !0, o)for (a = o.length, i = 0; a > i; i++)s = o[i], s.handler.apply(s.context, e);
        this.suspended[t[r]] = !1
      }
      return this
    }, on: function(t, i, r) {return e.isArray(this.eventHandlers[t]) || (this.eventHandlers[t] = []), r = e.def(r, this), this.eventHandlers[t].push({handler: i, context: r}), this}, off: function(t, i) {
      var r;
      return t && e.isArray(this.eventHandlers[t]) ? (i ? (r = e.indexOf(this.eventHandlers[t], i, "handler"), r > -1 && this.eventHandlers[t].splice(r, 1), 0 === this.eventHandlers[t].length && delete this.eventHandlers[t]) : delete this.eventHandlers[t], this) : this
    }, eventify: function(t) {t.eventHandlers = {}, t.on = this.on, t.off = this.off, t.triggerEventHandlers = this.trigger, t.trigger = this.trigger, t.suspended = {}}}, t.EventEmitter
  }), define("math/math", ["jxg", "utils/type"], function(t, e) {
    var i, r = function(t) {
      var e, r;
      return t.memo ? t.memo : (e = {}, r = Array.prototype.join, t.memo = function() {
        var s = r.call(arguments);
        return e[s] !== i ? e[s] : e[s] = t.apply(this, arguments)
      }, t.memo)
    };
    return t.Math = {eps: 1e-6, mod: function(t, e) {return t - Math.floor(t / e) * e}, vector: function(t, e) {
      var i, r;
      for (e = e || 0, i = [], r = 0; t > r; r++)i[r] = e;
      return i
    }, matrix: function(t, e, i) {
      var r, s, o;
      for (i = i || 0, e = e || t, r = [], s = 0; t > s; s++)for (r[s] = [], o = 0; e > o; o++)r[s][o] = i;
      return r
    }, identity: function(t, e) {
      var r, s;
      for (e === i && "number" != typeof e && (e = t), r = this.matrix(t, e), s = 0; Math.min(t, e) > s; s++)r[s][s] = 1;
      return r
    }, frustum: function(t, e, i, r, s, o) {
      var n = this.matrix(4, 4);
      return n[0][0] = 2 * s / (e - t), n[0][1] = 0, n[0][2] = (e + t) / (e - t), n[0][3] = 0, n[1][0] = 0, n[1][1] = 2 * s / (r - i), n[1][2] = (r + i) / (r - i), n[1][3] = 0, n[2][0] = 0, n[2][1] = 0, n[2][2] = -(o + s) / (o - s), n[2][3] = -(2 * o * s) / (o - s), n[3][0] = 0, n[3][1] = 0, n[3][2] = -1, n[3][3] = 0, n
    }, projection: function(t, e, i, r) {
      var s = i * Math.tan(t / 2), o = s * e;
      return this.frustum(-o, o, -s, s, i, r)
    }, matVecMult: function(t, e) {
      var i, r, s, o = t.length, n = e.length, a = [];
      if (3 === n)for (i = 0; o > i; i++)a[i] = t[i][0] * e[0] + t[i][1] * e[1] + t[i][2] * e[2]; else for (i = 0; o > i; i++) {
        for (r = 0, s = 0; n > s; s++)r += t[i][s] * e[s];
        a[i] = r
      }
      return a
    }, matMatMult: function(t, e) {
      var i, r, s, o, n = t.length, a = n > 0 ? e[0].length : 0, h = e.length, l = this.matrix(n, a);
      for (i = 0; n > i; i++)for (r = 0; a > r; r++) {
        for (s = 0, o = 0; h > o; o++)s += t[i][o] * e[o][r];
        l[i][r] = s
      }
      return l
    }, transpose: function(t) {
      var e, i, r, s, o;
      for (s = t.length, o = t.length > 0 ? t[0].length : 0, e = this.matrix(o, s), i = 0; o > i; i++)for (r = 0; s > r; r++)e[i][r] = t[r][i];
      return e
    }, inverse: function(t) {
      var e, i, r, s, o, n, a, h = t.length, l = [], c = [], d = [];
      for (e = 0; h > e; e++) {
        for (l[e] = [], i = 0; h > i; i++)l[e][i] = t[e][i];
        c[e] = e
      }
      for (i = 0; h > i; i++) {
        for (o = Math.abs(l[i][i]), n = i, e = i + 1; h > e; e++)Math.abs(l[e][i]) > o && (o = Math.abs(l[e][i]), n = e);
        if (this.eps >= o)return[];
        if (n > i) {
          for (r = 0; h > r; r++)a = l[i][r], l[i][r] = l[n][r], l[n][r] = a;
          a = c[i], c[i] = c[n], c[n] = a
        }
        for (s = 1 / l[i][i], e = 0; h > e; e++)l[e][i] *= s;
        for (l[i][i] = s, r = 0; h > r; r++)if (r !== i) {
          for (e = 0; h > e; e++)e !== i && (l[e][r] -= l[e][i] * l[i][r]);
          l[i][r] = -s * l[i][r]
        }
      }
      for (e = 0; h > e; e++) {
        for (r = 0; h > r; r++)d[c[r]] = l[e][r];
        for (r = 0; h > r; r++)l[e][r] = d[r]
      }
      return l
    }, innerProduct: function(t, e, r) {
      var s, o = 0;
      for ((r === i || "number" != typeof r) && (r = t.length), s = 0; r > s; s++)o += t[s] * e[s];
      return o
    }, crossProduct: function(t, e) {return[t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]}, factorial: r(function(t) {return 0 > t ? 0 / 0 : (t = Math.floor(t), 0 === t || 1 === t ? 1 : t * this.factorial(t - 1))}), binomial: r(function(t, e) {
      var i, r;
      if (e > t || 0 > e)return 0 / 0;
      if (e = Math.round(e), t = Math.round(t), 0 === e || e === t)return 1;
      for (i = 1, r = 0; e > r; r++)i *= t - r, i /= r + 1;
      return i
    }), cosh: function(t) {return.5 * (Math.exp(t) + Math.exp(-t))}, sinh: function(t) {return.5 * (Math.exp(t) - Math.exp(-t))}, pow: function(t, e) {return 0 === t ? 0 === e ? 1 : 0 : Math.floor(e) === e ? Math.pow(t, e) : t > 0 ? Math.exp(e * Math.log(Math.abs(t))) : 0 / 0}, log10: function(t) {return Math.log(t) / Math.log(10)}, log2: function(t) {return Math.log(t) / Math.log(2)}, log: function(t, i) {return i !== void 0 && e.isNumber(i) ? Math.log(t) / Math.log(i) : Math.log(t)}, squampow: function(t, e) {
      var i;
      if (Math.floor(e) === e) {
        for (i = 1, 0 > e && (t = 1 / t, e *= -1); 0 !== e;)1 & e && (i *= t), e >>= 1, t *= t;
        return i
      }
      return this.pow(t, e)
    }, normalize: function(t) {
      var e, i, r = 2 * t[3], s = t[4] / r;
      return t[5] = s, t[6] = -t[1] / r, t[7] = -t[2] / r, isFinite(s) ? Math.abs(s) >= 1 ? (t[0] = (t[6] * t[6] + t[7] * t[7] - s * s) / (2 * s), t[1] = -t[6] / s, t[2] = -t[7] / s, t[3] = 1 / (2 * s), t[4] = 1) : (i = 0 >= s ? -1 : 1, t[0] = .5 * i * (t[6] * t[6] + t[7] * t[7] - s * s), t[1] = -i * t[6], t[2] = -i * t[7], t[3] = i / 2, t[4] = i * s) : (e = Math.sqrt(t[1] * t[1] + t[2] * t[2]), t[0] /= e, t[1] /= e, t[2] /= e, t[3] = 0, t[4] = 1), t
    }, toGL: function(t) {
      var e, i, r;
      if (e = "function" == typeof Float32Array ? new Float32Array(16) : Array(16), 4 !== t.length && 4 !== t[0].length)return e;
      for (i = 0; 4 > i; i++)for (r = 0; 4 > r; r++)e[i + 4 * r] = t[i][r];
      return e
    }}, t.Math
  }), define("base/coords", ["jxg", "base/constants", "utils/event", "utils/type", "math/math"], function(t, e, i, r, s) {
    return t.Coords = function(t, e, s, o) {this.board = s, this.usrCoords = [], this.scrCoords = [], this.emitter = !r.exists(o) || o, this.emitter && i.eventify(this), this.setCoordinates(t, e, !0, !0)}, t.extend(t.Coords.prototype, {normalizeUsrCoords: function() {
      var t = s.eps;
      Math.abs(this.usrCoords[0]) > t && (this.usrCoords[1] /= this.usrCoords[0], this.usrCoords[2] /= this.usrCoords[0], this.usrCoords[0] = 1)
    }, usr2screen: function(t) {
      var e = Math.round, i = this.board, r = this.usrCoords, s = i.origin.scrCoords;
      t === !1 ? (this.scrCoords[0] = r[0], this.scrCoords[1] = r[0] * s[1] + r[1] * i.unitX, this.scrCoords[2] = r[0] * s[2] - r[2] * i.unitY) : (this.scrCoords[0] = e(r[0]), this.scrCoords[1] = e(r[0] * s[1] + r[1] * i.unitX), this.scrCoords[2] = e(r[0] * s[2] - r[2] * i.unitY))
    }, screen2usr: function() {
      var t = this.board.origin.scrCoords, e = this.scrCoords, i = this.board;
      this.usrCoords[0] = 1, this.usrCoords[1] = (e[1] - t[1]) / i.unitX, this.usrCoords[2] = (t[2] - e[2]) / i.unitY
    }, distance: function(t, i) {
      var r, o, n = 0, a = this.usrCoords, h = this.scrCoords;
      if (t === e.COORDS_BY_USER) {
        if (r = i.usrCoords, o = a[0] - r[0], n = o * o, n > s.eps)return Number.POSITIVE_INFINITY;
        o = a[1] - r[1], n += o * o, o = a[2] - r[2], n += o * o
      } else r = i.scrCoords, o = h[1] - r[1], n += o * o, o = h[2] - r[2], n += o * o;
      return Math.sqrt(n)
    }, setCoordinates: function(t, i, r, s) {
      var o = this.usrCoords, n = this.scrCoords, a = [o[0], o[1], o[2]], h = [n[0], n[1], n[2]];
      return t === e.COORDS_BY_USER ? (2 === i.length ? (o[0] = 1, o[1] = i[0], o[2] = i[1]) : (o[0] = i[0], o[1] = i[1], o[2] = i[2], this.normalizeUsrCoords()), this.usr2screen(r)) : (n[1] = i[0], n[2] = i[1], this.screen2usr()), !this.emitter || s || h[1] === n[1] && h[2] === n[2] || this.triggerEventHandlers(["update"], [a, h]), this
    }, copy: function(t, e) {return e === void 0 && (e = 0), this[t].slice(e)}, __evt__update: function() {}, __evt: function() {}}), t.Coords
  }), define("utils/color", ["jxg", "utils/type", "math/math"], function(t, e, i) {
    var r = {aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32"}, s = [
      {re: /^\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d\.]{1,3})\s*\)\s*$/, example: ["rgba(123, 234, 45, 0.5)", "rgba(255,234,245,1.0)"], process: function(t) {return[parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10)]}},
      {re: /^\s*rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(t) {return[parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10)]}},
      {re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(t) {return[parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]}},
      {re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(t) {return[parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]}}
    ];
    return t.rgbParser = function(t, i, o) {
      var n, a, h, l, c, d, u, p, f, m = t, b = !1;
      if (!e.exists(t))return[];
      if (e.exists(i) && e.exists(o) && (m = [t, i, o]), n = m, e.isArray(n)) {
        for (d = 0; 3 > d; d++)b = b || /\./.test("" + m[d]);
        for (d = 0; 3 > d; d++)b = b && m[d] >= 0 && 1 >= m[d];
        return b ? [Math.ceil(255 * m[0]), Math.ceil(255 * m[1]), Math.ceil(255 * m[2])] : m
      }
      for ("string" == typeof m && (n = m), "#" === n.charAt(0) && (n = n.substr(1, 6)), n = n.replace(/ /g, "").toLowerCase(), n = r[n] || n, d = 0; s.length > d; d++)h = s[d].re, l = s[d].process, c = h.exec(n), c && (a = l(c), u = a[0], p = a[1], f = a[2]);
      return isNaN(u) || isNaN(p) || isNaN(f) ? [] : (u = 0 > u || isNaN(u) ? 0 : u > 255 ? 255 : u, p = 0 > p || isNaN(p) ? 0 : p > 255 ? 255 : p, f = 0 > f || isNaN(f) ? 0 : f > 255 ? 255 : f, [u, p, f])
    }, t.rgb2css = function(e, i, r) {
      var s;
      return s = t.rgbParser(e, i, r), "rgb(" + s[0] + ", " + s[1] + ", " + s[2] + ")"
    }, t.rgb2hex = function(e, i, r) {
      var s, o, n;
      return s = t.rgbParser(e, i, r), o = s[1], n = s[2], s = s[0], s = s.toString(16), o = o.toString(16), n = n.toString(16), 1 === s.length && (s = "0" + s), 1 === o.length && (o = "0" + o), 1 === n.length && (n = "0" + n), "#" + s + o + n
    }, t.hex2rgb = function(e) {
      var i;
      return i = t.rgbParser(e), "rgb(" + i[0] + ", " + i[1] + ", " + i[2] + ")"
    }, t.hsv2rgb = function(t, e, r) {
      var s, o, n, a, h, l, c, d, u;
      if (t = (t % 360 + 360) % 360, 0 === e) {
        if (!(isNaN(t) || i.eps > t))return"#ffffff";
        s = r, o = r, n = r
      } else switch (l = t >= 360 ? 0 : t, l /= 60, h = Math.floor(l), a = l - h, c = r * (1 - e), d = r * (1 - e * a), u = r * (1 - e * (1 - a)), h) {
        case 0:
          s = r, o = u, n = c;
          break;
        case 1:
          s = d, o = r, n = c;
          break;
        case 2:
          s = c, o = r, n = u;
          break;
        case 3:
          s = c, o = d, n = r;
          break;
        case 4:
          s = u, o = c, n = r;
          break;
        case 5:
          s = r, o = c, n = d
      }
      return s = Math.round(255 * s).toString(16), s = 2 === s.length ? s : 1 === s.length ? "0" + s : "00", o = Math.round(255 * o).toString(16), o = 2 === o.length ? o : 1 === o.length ? "0" + o : "00", n = Math.round(255 * n).toString(16), n = 2 === n.length ? n : 1 === n.length ? "0" + n : "00", ["#", s, o, n].join("")
    }, t.rgb2hsv = function(e, i, r) {
      var s, o, n, a, h, l, c, d, u, p, f, m, b;
      return s = t.rgbParser(e, i, r), o = s[1], n = s[2], s = s[0], a = s / 255, h = o / 255, l = n / 255, m = Math.max(s, o, n), b = Math.min(s, o, n), c = m / 255, d = b / 255, f = c, p = 0, f > 0 && (p = (f - d) / f), u = 1 / (c - d), p > 0 && (u = m === s ? (h - l) * u : m === o ? 2 + (l - a) * u : 4 + (a - h) * u), u *= 60, 0 > u && (u += 360), m === b && (u = 0), [u, p, f]
    }, t.rgb2LMS = function(e, i, r) {
      var s, o, n, a, h, l, c, d = [
        [.05059983, .08585369, .0095242],
        [.01893033, .08925308, .01370054],
        [.00292202, .00975732, .07145979]
      ];
      return s = t.rgbParser(e, i, r), o = s[1], n = s[2], s = s[0], s = Math.pow(s, .476190476), o = Math.pow(o, .476190476), n = Math.pow(n, .476190476), a = s * d[0][0] + o * d[0][1] + n * d[0][2], h = s * d[1][0] + o * d[1][1] + n * d[1][2], l = s * d[2][0] + o * d[2][1] + n * d[2][2], c = [a, h, l], c.l = a, c.m = h, c.s = l, c
    }, t.LMS2rgb = function(t, e, i) {
      var r, s, o, n, a = [
        [30.830854, -29.832659, 1.610474],
        [-6.481468, 17.715578, -2.532642],
        [-.37569, -1.199062, 14.273846]
      ], h = function(t) {
        for (var e = 127, i = 64; i > 0;) {
          if (Math.pow(e, .476190476) > t)e -= i; else {
            if (Math.pow(e + 1, .476190476) > t)return e;
            e += i
          }
          i /= 2
        }
        return 254 === e && t > 13.994955247 ? 255 : e
      };
      return r = t * a[0][0] + e * a[0][1] + i * a[0][2], s = t * a[1][0] + e * a[1][1] + i * a[1][2], o = t * a[2][0] + e * a[2][1] + i * a[2][2], r = h(r), s = h(s), o = h(o), n = [r, s, o], n.r = r, n.g = s, n.b = o, n
    }, t.rgba2rgbo = function(t) {
      var e;
      return 9 === t.length && "#" === t.charAt(0) ? (e = parseInt(t.substr(7, 2).toUpperCase(), 16) / 255, t = t.substr(0, 7)) : e = 1, [t, e]
    }, t.rgbo2rgba = function(t, e) {
      var i;
      return"none" === t ? t : (i = Math.round(255 * e).toString(16), 1 === i.length && (i = "0" + i), t + i)
    }, t.rgb2bw = function(e) {
      var i, r, s, o = "0123456789ABCDEF";
      return"none" === e ? e : (s = t.rgbParser(e), i = Math.floor(.3 * s[0] + .59 * s[1] + .11 * s[2]), r = o.charAt(15 & i >> 4) + o.charAt(15 & i), e = "#" + r + r + r)
    }, t.rgb2cb = function(e, i) {
      var r, s, o, n, a, h, l, c, d, u, p, f, m, b = "0123456789ABCDEF";
      if ("none" === e)return e;
      switch (a = t.rgb2LMS(e), s = a[0], o = a[1], n = a[2], i = i.toLowerCase()) {
        case"protanopia":
          l = -.06150039994295001, c = .08277001656812001, d = -.013200141220000003, u = .05858939668799999, p = -.07934519995360001, f = .013289415272000003, m = .6903216543277437, h = n / o, s = m > h ? -(c * o + d * n) / l : -(p * o + f * n) / u;
          break;
        case"tritanopia":
          l = -.00058973116217, c = .007690316482, d = -.01011703519052, u = .025495080838999994, p = -.0422740347, f = .017005316784, m = .8349489908460004, h = o / s, n = m > h ? -(l * s + c * o) / d : -(u * s + p * o) / f;
          break;
        default:
          l = -.06150039994295001, c = .08277001656812001, d = -.013200141220000003, u = .05858939668799999, p = -.07934519995360001, f = .013289415272000003, m = .5763833686400911, h = n / s, o = m > h ? -(l * s + d * n) / c : -(u * s + f * n) / p
      }
      return r = t.LMS2rgb(s, o, n), h = b.charAt(15 & r[0] >> 4) + b.charAt(15 & r[0]), e = "#" + h, h = b.charAt(15 & r[1] >> 4) + b.charAt(15 & r[1]), e += h, h = b.charAt(15 & r[2] >> 4) + b.charAt(15 & r[2]), e += h
    }, t.autoHighlight = function(e) {
      var i = t.rgba2rgbo(e), r = i[0], s = i[1];
      return"#" === e.charAt(0) ? (s *= .3 > s ? 1.8 : .4, t.rgbo2rgba(r, s)) : e
    }, t
  }), define("options", ["jxg", "base/constants", "math/math", "utils/color", "utils/type"], function(t, e, i, r, s) {
    return t.Options = {jc: {enabled: !0, compile: !0}, board: {boundingBox: [-5, 5, 5, -5], zoomFactor: 1, zoomX: 1, zoomY: 1, showCopyright: !0, axis: !1, showNavigation: !0, showReload: !1, showClearTraces: !1, keepAspectRatio: !1, ignoreLabels: !0, maxNameLength: 1, document: !1, takeFirst: !1, takeSizeFromFile: !1, renderer: "svg", animationDelay: 35, registerEvents: !0, minimizeReflow: "svg", offsetX: 0, offsetY: 0, zoom: {factorX: 1.25, factorY: 1.25, wheel: !1, needshift: !1, eps: .1}, pan: {needShift: !0, needTwoFingers: !0, enabled: !0}}, navbar: {strokeColor: "#333333", fillColor: "transparent", highlightFillColor: "#aaaaaa", padding: "2px", position: "absolute", fontSize: "14px", cursor: "pointer", zIndex: "100", right: "5px", bottom: "5px"}, elements: {strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", fillColor: "red", highlightFillColor: "none", strokeOpacity: 1, highlightStrokeOpacity: 1, fillOpacity: 1, highlightFillOpacity: 1, strokeWidth: 2, highlightStrokeWidth: 2, fixed: !1, frozen: !1, withLabel: !1, visible: !0, priv: !1, layer: 0, dash: 0, shadow: !1, trace: !1, traceAttributes: {}, highlight: !0, needsRegularUpdate: !0, snapToGrid: !1, scalable: !0, draft: {draft: !1, strokeColor: "#565656", fillColor: "#565656", strokeOpacity: .8, fillOpacity: .8, strokeWidth: 1}, isLabel: !1}, ticks: {generateLabelText: null, generateLabelValue: null, drawLabels: !1, label: {}, useUnicodeMinus: !0, anchor: "left", drawZero: !1, insertTicks: !1, minTicksDistance: 10, minorHeight: 4, majorHeight: 10, tickEndings: [1, 1], minorTicks: 4, scale: 1, scaleSymbol: "", labels: [], maxLabelLength: 5, precision: 3, ticksDistance: 1, strokeOpacity: 1, strokeWidth: 1, strokeColor: "black", highlightStrokeColor: "#888888", includeBoundaries: !1}, hatch: {drawLabels: !1, drawZero: !0, majorHeight: 20, anchor: "middle", strokeWidth: 2, strokeColor: "blue", ticksDistance: .2}, precision: {touch: 30, touchMax: 100, mouse: 4, epsilon: 1e-4, hasPoint: 4}, layer: {numlayers: 20, text: 9, point: 9, glider: 9, arc: 8, line: 7, circle: 6, curve: 5, turtle: 5, polygon: 3, sector: 3, angle: 3, integral: 3, axis: 2, ticks: 2, grid: 1, image: 0, trace: 0}, angle: {withLabel: !0, radius: .5, type: "sector", orthoType: "square", orthoSensitivity: 1, fillColor: "#FF7F00", highlightFillColor: "#FF7F00", strokeColor: "#FF7F00", fillOpacity: .3, highlightFillOpacity: .3, radiuspoint: {withLabel: !1, visible: !1, name: ""}, pointsquare: {withLabel: !1, visible: !1, name: ""}, dot: {visible: !1, strokeColor: "none", fillColor: "black", size: 2, face: "o", withLabel: !1, name: ""}, label: {position: "top", offset: [0, 0], strokeColor: "#0000FF"}, arc: {visible: !1}}, arc: {label: {}, firstArrow: !1, lastArrow: !1, fillColor: "none", highlightFillColor: "none", strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", useDirection: !1}, axis: {name: "", needsRegularUpdate: !1, strokeWidth: 1, strokeColor: "#666666", highlightStrokeWidth: 1, highlightStrokeColor: "#888888", withTicks: !0, straightFirst: !0, straightLast: !0, lastArrow: !0, withLabel: !1, scalable: !1, ticks: {label: {offset: [4, -9], parse: !1, needsRegularUpdate: !1}, needsRegularUpdate: !1, strokeWidth: 1, strokeColor: "#666666", highlightStrokeColor: "#888888", drawLabels: !0, drawZero: !1, insertTicks: !0, minTicksDistance: 5, minorHeight: 10, majorHeight: -1, tickEndings: [0, 1], minorTicks: 4, ticksDistance: 1, strokeOpacity: .25}, point1: {needsRegularUpdate: !1}, point2: {needsRegularUpdate: !1}, label: {position: "lft", offset: [10, 10]}}, bisector: {strokeColor: "#000000", point: {visible: !1, fixed: !1, withLabel: !1, name: ""}}, bisectorlines: {line1: {strokeColor: "black"}, line2: {strokeColor: "black"}}, chart: {chartStyle: "line", colors: ["#B02B2C", "#3F4C6B", "#C79810", "#D15600", "#FFFF88", "#C3D9FF", "#4096EE", "#008C00"], highlightcolors: null, fillcolor: null, highlightonsector: !1, highlightbysize: !1, label: {}}, circle: {hasInnerPoints: !1, fillColor: "none", highlightFillColor: "none", strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", center: {visible: !1, withLabel: !1, fixed: !1, name: ""}, label: {position: "urt"}}, circumcircle: {fillColor: "none", highlightFillColor: "none", strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", center: {visible: !1, fixed: !1, withLabel: !1, name: ""}}, circumcirclearc: {fillColor: "none", highlightFillColor: "none", strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", center: {visible: !1, withLabel: !1, fixed: !1, name: ""}}, circumcirclesector: {useDirection: !0, fillColor: "#00FF00", highlightFillColor: "#00FF00", fillOpacity: .3, highlightFillOpacity: .3, strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", point: {visible: !1, fixed: !1, withLabel: !1, name: ""}}, conic: {fillColor: "none", highlightFillColor: "none", strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", foci: {fixed: !1, visible: !1, withLabel: !1, name: ""}}, curve: {strokeWidth: 1, strokeColor: "#0000ff", fillColor: "none", fixed: !0, useQDT: !1, handDrawing: !1, curveType: null, RDPsmoothing: !1, numberPointsHigh: 1600, numberPointsLow: 400, doAdvancedPlot: !0, doAdvancedPlotOld: !1, label: {position: "lft"}}, glider: {label: {}}, grid: {needsRegularUpdate: !1, hasGrid: !1, gridX: 1, gridY: 1, strokeColor: "#C0C0C0", strokeOpacity: .5, strokeWidth: 1, dash: 0, snapToGrid: !1, snapSizeX: 10, snapSizeY: 10}, group: {needsRegularUpdate: !0}, htmlslider: {widthRange: 100, widthOut: 34, step: .01, frozen: !0, isLabel: !1, strokeColor: "black", display: "html", anchorX: "left", anchorY: "middle", withLabel: !1}, image: {imageString: null, fillOpacity: 1, cssClass: "JXGimage", highlightCssClass: "JXGimageHighlight", rotate: 0, snapSizeX: 1, snapSizeY: 1, attractors: []}, incircle: {fillColor: "none", highlightFillColor: "none", strokeColor: "#0000ff", highlightStrokeColor: "#C3D9FF", center: {visible: !1, fixed: !1, withLabel: !1, name: ""}}, inequality: {fillColor: "red", fillOpacity: .2, strokeColor: "none", inverse: !1}, infobox: {fontSize: 12, isLabel: !1, strokeColor: "#bbbbbb", display: "html", anchorX: "left", anchorY: "middle", cssClass: "JXGinfobox", rotate: 0, visible: !0, parse: !1, needsRegularUpdate: !1}, integral: {axis: "x", withLabel: !0, strokeWidth: 0, strokeOpacity: 0, fillOpacity: .8, curveLeft: {visible: !0, withLabel: !1, layer: 9}, baseLeft: {visible: !1, fixed: !1, withLabel: !1, name: ""}, curveRight: {visible: !0, withLabel: !1, layer: 9}, baseRight: {visible: !1, fixed: !1, withLabel: !1, name: ""}, label: {fontSize: 20}}, intersection: {alwaysIntersect: !0}, label: {strokeColor: "black", strokeOpacity: 1, highlightStrokeOpacity: .666666, highlightStrokeColor: "black", fixed: !0, position: "urt", offset: [10, 10]}, legend: {style: "vertical", labels: ["1", "2", "3", "4", "5", "6", "7", "8"], colors: ["#B02B2C", "#3F4C6B", "#C79810", "#D15600", "#FFFF88", "#C3D9FF", "#4096EE", "#008C00"]}, line: {firstArrow: !1, lastArrow: !1, straightFirst: !0, straightLast: !0, fillColor: "none", highlightFillColor: "none", strokeColor: "#0000ff", highlightStrokeColor: "#888888", withTicks: !1, point1: {visible: !1, withLabel: !1, fixed: !1, name: ""}, point2: {visible: !1, withLabel: !1, fixed: !1, name: ""}, ticks: {drawLabels: !0, label: {offset: [4, -9]}, drawZero: !1, insertTicks: !1, minTicksDistance: 50, minorHeight: 4, majorHeight: -1, minorTicks: 4, defaultDistance: 1, strokeOpacity: .3}, label: {position: "llft"}, snapToGrid: !1, snapSizeX: 1, snapSizeY: 1, touchFirstPoint: !1, touchLastPoint: !1}, locus: {translateToOrigin: !1, translateTo10: !1, stretch: !1, toOrigin: null, to10: null}, normal: {strokeColor: "#000000", point: {visible: !1, fixed: !1, withLabel: !1, name: ""}}, orthogonalprojection: {}, parallel: {strokeColor: "#000000", point: {visible: !1, fixed: !1, withLabel: !1, name: ""}, label: {position: "llft"}}, perpendicular: {strokeColor: "#000000", straightFirst: !0, straightLast: !0}, perpendicularsegment: {strokeColor: "#000000", straightFirst: !1, straightLast: !1, point: {visible: !1, fixed: !0, withLabel: !1, name: ""}}, point: {withLabel: !0, label: {}, style: 5, face: "o", size: 3, fillColor: "#ff0000", highlightFillColor: "#EEEEEE", strokeWidth: 2, strokeColor: "#ff0000", highlightStrokeColor: "#C3D9FF", zoom: !1, showInfobox: !0, infoboxDigits: "auto", draft: !1, attractors: [], attractorUnit: "user", attractorDistance: 0, snatchDistance: 0, snapToGrid: !1, snapSizeX: 1, snapSizeY: 1, snapToPoints: !1, ignoredSnapToPoints: []}, polygon: {hasInnerPoints: !1, fillColor: "#00FF00", highlightFillColor: "#00FF00", fillOpacity: .3, highlightFillOpacity: .3, withLines: !0, borders: {withLabel: !1, strokeWidth: 1, highlightStrokeWidth: 1, layer: 5, label: {position: "top"}}, vertices: {layer: 9, withLabel: !1, name: "", strokeColor: "#ff0000", fillColor: "#ff0000", fixed: !1}, label: {offset: [0, 0]}}, prescribedangle: {anglepoint: {size: 2, visible: !1, withLabel: !1}}, regularpolygon: {hasInnerPoints: !1, fillColor: "#00FF00", highlightFillColor: "#00FF00", fillOpacity: .3, highlightFillOpacity: .3, withLines: !0, borders: {withLabel: !1, strokeWidth: 1, highlightStrokeWidth: 1, layer: 5, label: {position: "top"}}, vertices: {layer: 9, withLabel: !0, strokeColor: "#ff0000", fillColor: "#ff0000", fixed: !1}, label: {offset: [0, 0]}}, riemannsum: {withLabel: !1, fillOpacity: .3, fillColor: "#ffff00"}, sector: {fillColor: "#00FF00", highlightFillColor: "#00FF00", fillOpacity: .3, highlightFillOpacity: .3, highlightOnSector: !1, highlightStrokeWidth: 0, arc: {visible: !1, fillColor: "none"}, radiuspoint: {visible: !1, withLabel: !1}, center: {visible: !1, withLabel: !1}, anglepoint: {visible: !1, withLabel: !1}, label: {offset: [0, 0]}}, segment: {label: {position: "top"}}, semicircle: {midpoint: {visible: !1, withLabel: !1, fixed: !1, name: ""}}, slider: {snapWidth: -1, precision: 2, firstArrow: !1, lastArrow: !1, withTicks: !0, withLabel: !0, layer: 9, showInfobox: !1, name: "", visible: !0, strokeColor: "#000000", highlightStrokeColor: "#888888", fillColor: "#ffffff", highlightFillColor: "none", size: 6, point1: {needsRegularUpdate: !1, showInfobox: !1, withLabel: !1, visible: !1, fixed: !0, name: ""}, point2: {needsRegularUpdate: !1, showInfobox: !1, withLabel: !1, visible: !1, fixed: !0, name: ""}, baseline: {needsRegularUpdate: !1, fixed: !0, name: "", strokeWidth: 1, strokeColor: "#000000", highlightStrokeColor: "#888888"}, ticks: {needsRegularUpdate: !1, fixed: !0, drawLabels: !1, drawZero: !0, insertTicks: !0, minorHeight: 4, majorHeight: 5, minorTicks: 0, defaultDistance: 1, strokeOpacity: 1, strokeWidth: 1, tickEndings: [0, 1], strokeColor: "#000000"}, highline: {strokeWidth: 3, fixed: !0, name: "", strokeColor: "#000000", highlightStrokeColor: "#888888"}, label: {strokeColor: "#000000"}}, slopetriangle: {fillColor: "red", fillOpacity: .4, highlightFillColor: "red", highlightFillOpacity: .3, glider: {fixed: !0, visible: !1, withLabel: !1}, baseline: {visible: !1, withLabel: !1, name: ""}, basepoint: {visible: !1, withLabel: !1, name: ""}, toppoint: {visible: !1, withLabel: !1, name: ""}, label: {visible: !0}}, stepfunction: {}, tapemeasure: {strokeColor: "#000000", strokeWidth: 2, highlightStrokeColor: "#000000", withTicks: !0, withLabel: !0, precision: 2, point1: {strokeColor: "#000000", fillColor: "#ffffff", fillOpacity: 0, highlightFillOpacity: .1, size: 6, snapToPoints: !0, attractorUnit: "screen", attractorDistance: 20, showInfobox: !1, withLabel: !1, name: ""}, point2: {strokeColor: "#000000", fillColor: "#ffffff", fillOpacity: 0, highlightFillOpacity: .1, size: 6, snapToPoints: !0, attractorUnit: "screen", attractorDistance: 20, showInfobox: !1, withLabel: !1, name: ""}, ticks: {drawLabels: !1, drawZero: !0, insertTicks: !0, minorHeight: 8, majorHeight: 16, minorTicks: 4, tickEndings: [0, 1], defaultDistance: .1, strokeOpacity: 1, strokeWidth: 1, strokeColor: "#000000"}, label: {position: "top"}}, text: {fontSize: 12, digits: 2, parse: !0, useCaja: !1, isLabel: !1, strokeColor: "black", highlightStrokeColor: "black", highlightStrokeOpacity: .666666, useASCIIMathML: !1, useMathJax: !1, display: "html", anchor: null, anchorX: "left", anchorY: "middle", cssClass: "JXGtext", highlightCssClass: "JXGtext", dragArea: "all", withLabel: !1, rotate: 0, visible: !0, snapSizeX: 1, snapSizeY: 1, attractors: []}, tracecurve: {strokeColor: "#000000", fillColor: "none", numberPoints: 100}, turtle: {strokeWidth: 1, fillColor: "none", strokeColor: "#000000", arrow: {strokeWidth: 2, withLabel: !1, strokeColor: "#ff0000"}}, checkbox: {}, input: {}, button: {}, shortcuts: {color: ["strokeColor", "fillColor"], opacity: ["strokeOpacity", "fillOpacity"], highlightColor: ["highlightStrokeColor", "highlightFillColor"], highlightOpacity: ["highlightStrokeOpacity", "highlightFillOpacity"], strokeWidth: ["strokeWidth", "highlightStrokeWidth"]}}, t.Validator = function() {
      var e, r = function(t) {return/^[0-9]+px$/.test(t)}, o = function(t) {return"html" === t || "internal" === t}, n = function(t) {return s.isString(t)}, a = function(e) {return s.exists(t.normalizePointFace(e))}, h = function(t) {return Math.abs(t - Math.round(t)) < i.eps}, l = function(t) {return h(t) && t > 0}, c = function(t) {return"vml" === t || "svg" === t || "canvas" === t || "no" === t}, d = function(t) {return t > 0}, u = function(t) {return t >= 0}, p = {}, f = {attractorDistance: u, color: n, defaultDistance: s.isNumber, display: o, doAdvancedPlot: !1, draft: !1, drawLabels: !1, drawZero: !1, face: a, factor: s.isNumber, fillColor: n, fillOpacity: s.isNumber, firstArrow: !1, fontSize: h, dash: h, gridX: s.isNumber, gridY: s.isNumber, hasGrid: !1, highlightFillColor: n, highlightFillOpacity: s.isNumber, highlightStrokeColor: n, highlightStrokeOpacity: s.isNumber, insertTicks: !1, lastArrow: !1, majorHeight: h, minorHeight: h, minorTicks: u, minTicksDistance: l, numberPointsHigh: l, numberPointsLow: l, opacity: s.isNumber, radius: s.isNumber, RDPsmoothing: !1, renderer: c, right: r, showCopyright: !1, showInfobox: !1, showNavigation: !1, size: h, snapSizeX: d, snapSizeY: d, snapWidth: s.isNumber, snapToGrid: !1, snatchDistance: u, straightFirst: !1, straightLast: !1, stretch: !1, strokeColor: n, strokeOpacity: s.isNumber, strokeWidth: h, takeFirst: !1, takeSizeFromFile: !1, to10: !1, toOrigin: !1, translateTo10: !1, translateToOrigin: !1, useASCIIMathML: !1, useDirection: !1, useMathJax: !1, withLabel: !1, withTicks: !1, zoom: !1};
      for (e in f)f.hasOwnProperty(e) && (p[e.toLowerCase()] = f[e]);
      return p
    }(), t.normalizePointFace = function(t) {
      var e = {cross: "x", x: "x", circle: "o", o: "o", square: "[]", "[]": "[]", plus: "+", "+": "+", diamond: "<>", "<>": "<>", triangleup: "^", a: "^", "^": "^", triangledown: "v", v: "v", triangleleft: "<", "<": "<", triangleright: ">", ">": ">"};
      return e[t]
    }, t.useStandardOptions = function(i) {
      var r, s, o, n, a = t.Options, h = i.hasGrid;
      i.options.grid.hasGrid = a.grid.hasGrid, i.options.grid.gridX = a.grid.gridX, i.options.grid.gridY = a.grid.gridY, i.options.grid.gridColor = a.grid.gridColor, i.options.grid.gridOpacity = a.grid.gridOpacity, i.options.grid.gridDash = a.grid.gridDash, i.options.grid.snapToGrid = a.grid.snapToGrid, i.options.grid.snapSizeX = a.grid.SnapSizeX, i.options.grid.snapSizeY = a.grid.SnapSizeY, i.takeSizeFromFile = a.takeSizeFromFile, n = function(t, e) {t.visProp.fillcolor = e.fillColor, t.visProp.highlightfillcolor = e.highlightFillColor, t.visProp.strokecolor = e.strokeColor, t.visProp.highlightstrokecolor = e.highlightStrokeColor};
      for (r in i.objects)if (i.objects.hasOwnProperty(r))if (o = i.objects[r], o.elementClass === e.OBJECT_CLASS_POINT)n(o, a.point); else if (o.elementClass === e.OBJECT_CLASS_LINE)for (n(o, a.line), s = 0; o.ticks.length > s; s++)o.ticks[s].majorTicks = a.line.ticks.majorTicks, o.ticks[s].minTicksDistance = a.line.ticks.minTicksDistance, o.ticks[s].visProp.minorheight = a.line.ticks.minorHeight, o.ticks[s].visProp.majorheight = a.line.ticks.majorHeight; else o.elementClass === e.OBJECT_CLASS_CIRCLE ? n(o, a.circle) : o.type === e.OBJECT_TYPE_ANGLE ? n(o, a.angle) : o.type === e.OBJECT_TYPE_ARC ? n(o, a.arc) : o.type === e.OBJECT_TYPE_POLYGON ? n(o, a.polygon) : o.type === e.OBJECT_TYPE_CONIC ? n(o, a.conic) : o.type === e.OBJECT_TYPE_CURVE ? n(o, a.curve) : o.type === e.OBJECT_TYPE_SECTOR && (o.arc.visProp.fillcolor = a.sector.fillColor, o.arc.visProp.highlightfillcolor = a.sector.highlightFillColor, o.arc.visProp.fillopacity = a.sector.fillOpacity, o.arc.visProp.highlightfillopacity = a.sector.highlightFillOpacity);
      i.fullUpdate(), h && !i.hasGrid ? i.removeGrids(i) : !h && i.hasGrid && i.create("grid", [])
    }, t.useBlackWhiteOptions = function(e) {
      var i = t.Options;
      i.point.fillColor = r.rgb2bw(i.point.fillColor), i.point.highlightFillColor = r.rgb2bw(i.point.highlightFillColor), i.point.strokeColor = r.rgb2bw(i.point.strokeColor), i.point.highlightStrokeColor = r.rgb2bw(i.point.highlightStrokeColor), i.line.fillColor = r.rgb2bw(i.line.fillColor), i.line.highlightFillColor = r.rgb2bw(i.line.highlightFillColor), i.line.strokeColor = r.rgb2bw(i.line.strokeColor), i.line.highlightStrokeColor = r.rgb2bw(i.line.highlightStrokeColor), i.circle.fillColor = r.rgb2bw(i.circle.fillColor), i.circle.highlightFillColor = r.rgb2bw(i.circle.highlightFillColor), i.circle.strokeColor = r.rgb2bw(i.circle.strokeColor), i.circle.highlightStrokeColor = r.rgb2bw(i.circle.highlightStrokeColor), i.arc.fillColor = r.rgb2bw(i.arc.fillColor), i.arc.highlightFillColor = r.rgb2bw(i.arc.highlightFillColor), i.arc.strokeColor = r.rgb2bw(i.arc.strokeColor), i.arc.highlightStrokeColor = r.rgb2bw(i.arc.highlightStrokeColor), i.polygon.fillColor = r.rgb2bw(i.polygon.fillColor), i.polygon.highlightFillColor = r.rgb2bw(i.polygon.highlightFillColor), i.sector.fillColor = r.rgb2bw(i.sector.fillColor), i.sector.highlightFillColor = r.rgb2bw(i.sector.highlightFillColor), i.curve.strokeColor = r.rgb2bw(i.curve.strokeColor), i.grid.gridColor = r.rgb2bw(i.grid.gridColor), t.useStandardOptions(e)
    }, t.Options.normalizePointFace = t.normalizePointFace, t.Options
  }), define("math/numerics", ["utils/type", "math/math"], function(t, e) {
    var i = {rk4: {s: 4, A: [
      [0, 0, 0, 0],
      [.5, 0, 0, 0],
      [0, .5, 0, 0],
      [0, 0, 1, 0]
    ], b: [1 / 6, 1 / 3, 1 / 3, 1 / 6], c: [0, .5, .5, 1]}, heun: {s: 2, A: [
      [0, 0],
      [1, 0]
    ], b: [.5, .5], c: [0, 1]}, euler: {s: 1, A: [
      [0]
    ], b: [1], c: [0]}};
    return e.Numerics = {Gauss: function(i, r) {
      var s, o, n, a, h, l = e.eps, c = i.length > 0 ? i[0].length : 0;
      if (c !== r.length || c !== i.length)throw Error("JXG.Math.Numerics.Gauss: Dimensions don't match. A must be a square matrix and b must be of the same length as A.");
      for (a = [], h = r.slice(0, c), s = 0; c > s; s++)a[s] = i[s].slice(0, c);
      for (o = 0; c > o; o++) {
        for (s = c - 1; s > o; s--)if (Math.abs(a[s][o]) > l)if (l > Math.abs(a[o][o]))t.swap(a, s, o), t.swap(h, s, o); else for (a[s][o] /= a[o][o], h[s] -= a[s][o] * h[o], n = o + 1; c > n; n++)a[s][n] -= a[s][o] * a[o][n];
        if (l > Math.abs(a[o][o]))throw Error("JXG.Math.Numerics.Gauss(): The given matrix seems to be singular.")
      }
      return this.backwardSolve(a, h, !0), h
    }, backwardSolve: function(t, e, i) {
      var r, s, o, n, a;
      for (r = i ? e : e.slice(0, e.length), s = t.length, o = t.length > 0 ? t[0].length : 0, n = s - 1; n >= 0; n--) {
        for (a = o - 1; a > n; a--)r[n] -= t[n][a] * r[a];
        r[n] /= t[n][n]
      }
      return r
    }, gaussBareiss: function(t) {
      var i, r, s, o, n, a, h, l, c, d = e.eps;
      if (h = t.length, 0 >= h)return 0;
      for (h > t[0].length && (h = t[0].length), l = [], o = 0; h > o; o++)l[o] = t[o].slice(0, h);
      for (r = 1, s = 1, i = 0; h - 1 > i; i++) {
        if (a = l[i][i], d > Math.abs(a)) {
          for (o = i + 1; h > o && !(Math.abs(l[o][i]) >= d); o++);
          if (o === h)return 0;
          for (n = i; h > n; n++)c = l[o][n], l[o][n] = l[i][n], l[i][n] = c;
          s = -s, a = l[i][i]
        }
        for (o = i + 1; h > o; o++)for (n = i + 1; h > n; n++)c = a * l[o][n] - l[o][i] * l[i][n], l[o][n] = c / r;
        r = a
      }
      return s * l[h - 1][h - 1]
    }, det: function(t) {
      var e = t.length;
      return 2 === e && 2 === t[0].length ? t[0][0] * t[1][1] - t[1][0] * t[0][1] : this.gaussBareiss(t)
    }, Jacobi: function(t) {
      var i, r, s, o, n, a, h, l, c, d = e.eps, u = 0, p = t.length, f = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ], m = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ], b = 0;
      for (i = 0; p > i; i++) {
        for (r = 0; p > r; r++)f[i][r] = 0, m[i][r] = t[i][r], u += Math.abs(m[i][r]);
        f[i][i] = 1
      }
      if (1 === p)return[m, f];
      if (0 >= u)return[m, f];
      u /= p * p;
      do {
        for (l = 0, c = 0, r = 1; p > r; r++)for (i = 0; r > i; i++)if (o = Math.abs(m[i][r]), o > c && (c = o), l += o, o >= d) {
          for (o = .5 * Math.atan2(2 * m[i][r], m[i][i] - m[r][r]), n = Math.sin(o), a = Math.cos(o), s = 0; p > s; s++)h = m[s][i], m[s][i] = a * h + n * m[s][r], m[s][r] = -n * h + a * m[s][r], h = f[s][i], f[s][i] = a * h + n * f[s][r], f[s][r] = -n * h + a * f[s][r];
          for (m[i][i] = a * m[i][i] + n * m[r][i], m[r][r] = -n * m[i][r] + a * m[r][r], m[i][r] = 0, s = 0; p > s; s++)m[i][s] = m[s][i], m[r][s] = m[s][r]
        }
        b += 1
      } while (Math.abs(l) / u > d && 2e3 > b);
      return[m, f]
    }, NewtonCotes: function(t, e, i) {
      var r, s, o, n = 0, a = i && "number" == typeof i.number_of_nodes ? i.number_of_nodes : 28, h = {trapez: !0, simpson: !0, milne: !0}, l = i && i.integration_type && h.hasOwnProperty(i.integration_type) && h[i.integration_type] ? i.integration_type : "milne", c = (t[1] - t[0]) / a;
      switch (l) {
        case"trapez":
          for (n = .5 * (e(t[0]) + e(t[1])), r = t[0], s = 0; a - 1 > s; s++)r += c, n += e(r);
          n *= c;
          break;
        case"simpson":
          if (a % 2 > 0)throw Error("JSXGraph:  INT_SIMPSON requires config.number_of_nodes dividable by 2.");
          for (o = a / 2, n = e(t[0]) + e(t[1]), r = t[0], s = 0; o - 1 > s; s++)r += 2 * c, n += 2 * e(r);
          for (r = t[0] - c, s = 0; o > s; s++)r += 2 * c, n += 4 * e(r);
          n *= c / 3;
          break;
        default:
          if (a % 4 > 0)throw Error("JSXGraph: Error in INT_MILNE: config.number_of_nodes must be a multiple of 4");
          for (o = .25 * a, n = 7 * (e(t[0]) + e(t[1])), r = t[0], s = 0; o - 1 > s; s++)r += 4 * c, n += 14 * e(r);
          for (r = t[0] - 3 * c, s = 0; o > s; s++)r += 4 * c, n += 32 * (e(r) + e(r + 2 * c));
          for (r = t[0] - 2 * c, s = 0; o > s; s++)r += 4 * c, n += 12 * e(r);
          n *= 2 * c / 45
      }
      return n
    }, Romberg: function(t, e, i) {
      var r, s, o, n, a, h, l, c, d = [], u = 0, p = 1 / 0, f = i && "number" == typeof i.max_iterations ? i.max_iterations : 20, m = i && "number" == typeof i.eps ? i.eps : i.eps || 1e-7;
      for (r = t[0], s = t[1], o = s - r, a = 1, d[0] = .5 * o * (e(r) + e(s)), h = 0; f > h; ++h) {
        for (n = 0, o *= .5, a *= 2, c = 1, l = 1; a > l; l += 2)n += e(r + l * o);
        for (d[h + 1] = .5 * d[h] + n * o, u = d[h + 1], l = h - 1; l >= 0; --l)c *= 4, d[l] = d[l + 1] + (d[l + 1] - d[l]) / (c - 1), u = d[l];
        if (Math.abs(u - p) < m * Math.abs(u))break;
        p = u
      }
      return u
    }, GaussLegendre: function(t, e, i) {
      var r, s, o, n, a, h, l, c, d = 0, u = [], p = [], f = i && "number" == typeof i.n ? i.n : 12;
      if (f > 18 && (f = 18), u[2] = [.5773502691896257], p[2] = [1], u[4] = [.33998104358485626, .8611363115940526], p[4] = [.6521451548625461, .34785484513745385], u[6] = [.2386191860831969, .6612093864662645, .932469514203152], p[6] = [.46791393457269104, .3607615730481386, .17132449237917036], u[8] = [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363], p[8] = [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626], u[10] = [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717], p[10] = [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814], u[12] = [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192], p[12] = [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183], u[14] = [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123], p[14] = [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186], u[16] = [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499], p[16] = [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096], u[18] = [.0847750130417353, .2518862256915055, .41175116146284263, .5597708310739475, .6916870430603532, .8037049589725231, .8926024664975557, .9558239495713977, .9915651684209309], p[18] = [.1691423829631436, .16427648374583273, .15468467512626524, .14064291467065065, .12255520671147846, .10094204410628717, .07642573025488905, .0497145488949698, .02161601352648331], u[3] = [0, .7745966692414834], p[3] = [.8888888888888888, .5555555555555556], u[5] = [0, .5384693101056831, .906179845938664], p[5] = [.5688888888888889, .47862867049936647, .23692688505618908], u[7] = [0, .4058451513773972, .7415311855993945, .9491079123427585], p[7] = [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697], u[9] = [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261], p[9] = [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441], u[11] = [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057], p[11] = [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366], u[13] = [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881], p[13] = [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588], u[15] = [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854], p[15] = [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727], u[17] = [0, .17848418149584785, .3512317634538763, .5126905370864769, .6576711592166907, .7815140038968014, .8802391537269859, .9506755217687678, .9905754753144174], p[17] = [.17944647035620653, .17656270536699264, .16800410215645004, .15404576107681028, .13513636846852548, .11188384719340397, .08503614831717918, .0554595293739872, .02414830286854793], r = t[0], s = t[1], n = f + 1 >> 1, l = u[f], c = p[f], h = .5 * (s - r), a = .5 * (s + r), true & f)for (d = c[0] * e(a), o = 1; n > o; ++o)d += c[o] * (e(a + h * l[o]) + e(a - h * l[o])); else for (d = 0, o = 0; n > o; ++o)d += c[o] * (e(a + h * l[o]) + e(a - h * l[o]));
      return h * d
    }, _rescale_error: function(t, e, i) {
      var r, s, o = 2.2250738585072014e-308, n = 2.220446049250313e-16;
      return t = Math.abs(t), 0 != i && 0 != t && (r = Math.pow(200 * t / i, 1.5), t = 1 > r ? i * r : i), e > o / (50 * n) && (s = 50 * n * e, s > t && (t = s)), t
    }, _gaussKronrod: function(t, e, i, r, s, o, n) {
      var a, h, l, c, d, u, p, f, m, b = t[0], g = t[1], v = .5 * (b + g), y = .5 * (g - b), C = Math.abs(y), P = e(v), _ = 0, E = P * o[i - 1], S = Math.abs(E), x = 0, O = 0, T = 0, w = [], M = [];
      for (0 == i % 2 && (_ = P * s[i / 2 - 1]), a = Math.floor((i - 1) / 2), l = 0; a > l; l++)c = 2 * l + 1, d = y * r[c], u = e(v - d), p = e(v + d), f = u + p, w[c] = u, M[c] = p, _ += s[l] * f, E += o[c] * f, S += o[c] * (Math.abs(u) + Math.abs(p));
      for (a = Math.floor(i / 2), l = 0; a > l; l++)m = 2 * l, d = y * r[m], u = e(v - d), p = e(v + d), w[m] = u, M[m] = p, E += o[m] * (u + p), S += o[m] * (Math.abs(u) + Math.abs(p));
      for (O = .5 * E, x = o[i - 1] * Math.abs(P - O), l = 0; i - 1 > l; l++)x += o[l] * (Math.abs(w[l] - O) + Math.abs(M[l] - O));
      return T = (E - _) * y, E *= y, S *= C, x *= C, h = E, n.abserr = this._rescale_error(T, S, x), n.resabs = S, n.resasc = x, h
    }, GaussKronrod15: function(t, e, i) {
      var r = [.9914553711208126, .9491079123427585, .8648644233597691, .7415311855993945, .5860872354676911, .4058451513773972, .20778495500789848, 0], s = [.1294849661688697, .27970539148927664, .3818300505051189, .4179591836734694], o = [.022935322010529224, .06309209262997856, .10479001032225019, .14065325971552592, .1690047266392679, .19035057806478542, .20443294007529889, .20948214108472782];
      return this._gaussKronrod(t, e, 8, r, s, o, i)
    }, GaussKronrod21: function(t, e, i) {
      var r = [.9956571630258081, .9739065285171717, .9301574913557082, .8650633666889845, .7808177265864169, .6794095682990244, .5627571346686047, .4333953941292472, .2943928627014602, .14887433898163122, 0], s = [.06667134430868814, .1494513491505806, .21908636251598204, .26926671930999635, .29552422471475287], o = [.011694638867371874, .032558162307964725, .054755896574351995, .07503967481091996, .0931254545836976, .10938715880229764, .12349197626206584, .13470921731147334, .14277593857706009, .14773910490133849, .1494455540029169];
      return this._gaussKronrod(t, e, 11, r, s, o, i)
    }, GaussKronrod31: function(t, e, i) {
      var r = [.9980022986933971, .9879925180204854, .9677390756791391, .937273392400706, .8972645323440819, .8482065834104272, .790418501442466, .7244177313601701, .650996741297417, .5709721726085388, .4850818636402397, .3941513470775634, .29918000715316884, .20119409399743451, .1011420669187175, 0], s = [.03075324199611727, .07036604748810812, .10715922046717194, .13957067792615432, .16626920581699392, .1861610000155622, .19843148532711158, .2025782419255613], o = [.005377479872923349, .015007947329316122, .02546084732671532, .03534636079137585, .04458975132476488, .05348152469092809, .06200956780067064, .06985412131872826, .07684968075772038, .08308050282313302, .08856444305621176, .09312659817082532, .09664272698362368, .09917359872179196, .10076984552387559, .10133000701479154];
      return this._gaussKronrod(t, e, 16, r, s, o, i)
    }, _workspace: function(t, e) {
      return{limit: e, size: 0, nrmax: 0, i: 0, alist: [t[0]], blist: [t[1]], rlist: [0], elist: [0], order: [0], level: [0], qpsrt: function() {
        var t, e, i, r, s, o = this.size - 1, n = this.limit, a = this.nrmax, h = this.order[a];
        if (2 > o)return this.order[0] = 0, this.order[1] = 1, this.i = h, void 0;
        for (t = this.elist[h]; a > 0 && t > this.elist[order[a - 1]];)this.order[a] = this.order[a - 1], a--;
        for (s = n / 2 + 2 > o ? o : n - o + 1, i = a + 1; s > i && this.elist[this.order[i]] > t;)this.order[i - 1] = this.order[i], i++;
        for (this.order[i - 1] = h, e = this.elist[o], r = s - 1; r > i - 2 && e >= this.elist[this.order[r]];)this.order[r + 1] = this.order[r], r--;
        this.order[r + 1] = o, h = this.order[a], this.i = h, this.nrmax = a
      }, set_initial_result: function(t, e) {this.size = 1, this.rlist[0] = t, this.elist[0] = e}, update: function(t, e, i, r, s, o, n, a) {
        var h = this.i, l = this.size, c = this.level[this.i] + 1;
        a > r ? (this.alist[h] = s, this.rlist[h] = n, this.elist[h] = a, this.level[h] = c, this.alist[l] = t, this.blist[l] = e, this.rlist[l] = i, this.elist[l] = r, this.level[l] = c) : (this.blist[h] = e, this.rlist[h] = i, this.elist[h] = r, this.level[h] = c, this.alist[l] = s, this.blist[l] = o, this.rlist[l] = n, this.elist[l] = a, this.level[l] = c), this.size++, c > this.maximum_level && (this.maximum_level = c), this.qpsrt()
      }, retrieve: function() {
        var t = this.i;
        return{a: this.alist[t], b: this.blist[t], r: this.rlist[t], e: this.elist[t]}
      }, sum_results: function() {
        var t, e = this.size, i = 0;
        for (t = 0; e > t; t++)i += this.rlist[t];
        return i
      }, subinterval_too_small: function(t, e, i) {
        var r = 2.220446049250313e-16, s = 2.2250738585072014e-308, o = (1 + 100 * r) * (Math.abs(e) + 1e3 * s), n = o >= Math.abs(t) && o >= Math.abs(i);
        return n
      }}
    }, Qag: function(t, i, r) {
      var s, o, n, a, h, l, c, d, u, p, f = 2.220446049250313e-16, m = this._workspace(t, 1e3), b = r && "number" == typeof r.limit ? r.limit : 15, g = r && "number" == typeof r.epsrel ? r.epsrel : 1e-7, v = r && "number" == typeof r.epsabs ? r.epsabs : 1e-7, y = r && "function" == typeof r.q ? r.q : this.GaussKronrod15, C = {}, P = 0, _ = 0, E = 0, S = 0;
      if (b > m.limit && console.log("iteration limit exceeds available workspace"), 0 >= v && (50 * e.eps > g || 5e-29 > g) && console.log("tolerance cannot be acheived with given epsabs and epsrel"), n = y.apply(this, [t, i, C]), a = C.abserr, h = C.resabs, l = C.resasc, m.set_initial_result(n, a), u = Math.max(v, g * Math.abs(n)), p = 50 * f * h, p >= a && a > u)return c = n, d = a, console.log("cannot reach tolerance because of roundoff error on first attempt"), -1 / 0;
      if (u >= a && a != l || 0 == a)return c = n, d = a, c;
      if (1 == b)return c = n, d = a, console.log("a maximum of one iteration was insufficient"), -1 / 0;
      s = n, o = a, P = 1;
      do {
        var x, O, T, w, M, A, N, k, R, L, B, Y, j, D, I = 0, X = 0, U = 0, G = 0, J = 0, F = 0;
        j = m.retrieve(), M = j.a, A = j.b, N = j.r, k = j.e, x = M, O = .5 * (M + A), T = O, w = A, I = y.apply(this, [
          [x, O],
          i,
          C
        ]), G = C.abserr, B = C.resabs, R = C.resasc, X = y.apply(this, [
          [T, w],
          i,
          C
        ]), J = C.abserr, Y = C.resabs, L = C.resasc, U = I + X, F = G + J, o += F - k, s += U - N, R != G && L != J && (D = N - U, Math.abs(D) <= 1e-5 * Math.abs(U) && F >= .99 * k && _++, P >= 10 && F > k && E++), u = Math.max(v, g * Math.abs(s)), o > u && ((_ >= 6 || E >= 20) && (S = 2), m.subinterval_too_small(x, T, w) && (S = 3)), m.update(x, O, I, G, T, w, X, J), j = m.retrieve(), M = j.a_i, A = j.b_i, N = j.r_i, k = j.e_i, P++
      } while (b > P && !S && o > u);
      return c = m.sum_results(), d = o, c
    }, I: function(t, e) {return this.Qag(t, e, {q: this.GaussKronrod15, limit: 15, epsrel: 1e-7, epsabs: 1e-7})}, Newton: function(i, r, s) {
      var o, n = 0, a = e.eps, h = i.apply(s, [r]), l = 1;
      for (t.isArray(r) && (r = r[0]); 50 > n && Math.abs(h) > a;)o = this.D(i, s)(r), l += 2, Math.abs(o) > a ? r -= h / o : r += .2 * Math.random() - 1, h = i.apply(s, [r]), l += 1, n += 1;
      return r
    }, root: function(t, e, i) {return this.fzero(t, e, i)}, generalizedNewton: function(t, i, r, s) {
      var o, n, a, h, l, c, d, u, p, f, m, b, g, v, y = 0;
      for (this.generalizedNewton.t1memo ? (o = this.generalizedNewton.t1memo, n = this.generalizedNewton.t2memo) : (o = r, n = s), u = t.X(o) - i.X(n), p = t.Y(o) - i.Y(n), f = u * u + p * p, m = this.D(t.X, t), b = this.D(i.X, i), g = this.D(t.Y, t), v = this.D(i.Y, i); f > e.eps && 10 > y;)a = m(o), h = -b(n), l = g(o), c = -v(n), d = a * c - h * l, o -= (c * u - h * p) / d, n -= (a * p - l * u) / d, u = t.X(o) - i.X(n), p = t.Y(o) - i.Y(n), f = u * u + p * p, y += 1;
      return this.generalizedNewton.t1memo = o, this.generalizedNewton.t2memo = n, Math.abs(o) < Math.abs(n) ? [t.X(o), t.Y(o)] : [i.X(n), i.Y(n)]
    }, Neville: function(t) {
      var i = [], r = function(r) {
        return function(s, o) {
          var n, a, h, l = e.binomial, c = t.length, d = c - 1, u = 0, p = 0;
          if (!o)for (h = 1, n = 0; c > n; n++)i[n] = l(d, n) * h, h *= -1;
          for (a = s, n = 0; c > n; n++) {
            if (0 === a)return t[n][r]();
            h = i[n] / a, a -= 1, u += t[n][r]() * h, p += h
          }
          return u / p
        }
      }, s = r("X"), o = r("Y");
      return[s, o, 0, function() {return t.length - 1}]
    }, splineDef: function(t, e) {
      var i, r, s, o = Math.min(t.length, e.length), n = [], a = [], h = [], l = [], c = [], d = [];
      if (2 === o)return[0, 0];
      for (r = 0; o > r; r++)i = {X: t[r], Y: e[r]}, h.push(i);
      for (h.sort(function(t, e) {return t.X - e.X}), r = 0; o > r; r++)t[r] = h[r].X, e[r] = h[r].Y;
      for (r = 0; o - 1 > r; r++)l.push(t[r + 1] - t[r]);
      for (r = 0; o - 2 > r; r++)c.push(6 * (e[r + 2] - e[r + 1]) / l[r + 1] - 6 * (e[r + 1] - e[r]) / l[r]);
      for (n.push(2 * (l[0] + l[1])), a.push(c[0]), r = 0; o - 3 > r; r++)s = l[r + 1] / n[r], n.push(2 * (l[r + 1] + l[r + 2]) - s * l[r + 1]), a.push(c[r + 1] - s * a[r]);
      for (d[o - 3] = a[o - 3] / n[o - 3], r = o - 4; r >= 0; r--)d[r] = (a[r] - l[r + 1] * d[r + 1]) / n[r];
      for (r = o - 3; r >= 0; r--)d[r + 1] = d[r];
      return d[0] = 0, d[o - 1] = 0, d
    }, splineEval: function(e, i, r, s) {
      var o, n, a, h, l, c, d, u = Math.min(i.length, r.length), p = 1, f = !1, m = [];
      for (t.isArray(e) ? (p = e.length, f = !0) : e = [e], o = 0; p > o; o++) {
        if (e[o] < i[0] || i[o] > i[u - 1])return 0 / 0;
        for (n = 1; u > n && !(e[o] <= i[n]); n++);
        n -= 1, a = r[n], h = (r[n + 1] - r[n]) / (i[n + 1] - i[n]) - (i[n + 1] - i[n]) / 6 * (s[n + 1] + 2 * s[n]), l = s[n] / 2, c = (s[n + 1] - s[n]) / (6 * (i[n + 1] - i[n])), d = e[o] - i[n], m.push(a + (h + (l + c * d) * d) * d)
      }
      return f ? m : m[0]
    }, generatePolynomialTerm: function(t, e, i, r) {
      var s, o = [];
      for (s = e; s >= 0; s--)o = o.concat(["(", t[s].toPrecision(r), ")"]), s > 1 ? o = o.concat(["*", i, "<sup>", s, "<", "/sup> + "]) : 1 === s && (o = o.concat(["*", i, " + "]));
      return o.join("")
    }, lagrangePolynomial: function(t) {
      var e = [], i = function(i, r) {
        var s, o, n, a, h, l, c = t.length, d = 0, u = 0;
        if (!r) {
          for (s = 0; c > s; s++) {
            for (e[s] = 1, a = t[s].X(), n = 0; c > n; n++)n !== s && (e[s] *= a - t[n].X());
            e[s] = 1 / e[s]
          }
          for (l = [], o = 0; c > o; o++)l.push([1])
        }
        for (s = 0; c > s; s++) {
          if (a = t[s].X(), i === a)return t[s].Y();
          h = e[s] / (i - a), u += h, d += h * t[s].Y()
        }
        return d / u
      };
      return i.getTerm = function() {return""}, i
    }, CardinalSpline: function(e, i) {
      var r, s, o, n = [], a = {}, h = {};
      return o = t.isFunction(i) ? i : function() {return i}, s = function(t) {
        return function(i, s) {
          var l, c, d = e.length, u = o();
          if (2 > d)return 0 / 0;
          if (!s)for (a[t] = function() {return 2 * e[0][t]() - e[1][t]()}, h[t] = function() {return 2 * e[d - 1][t]() - e[d - 2][t]()}, r = [a].concat(e, [h]), n[t] = [], l = 0; d - 1 > l; l++)n[t][l] = [1 / u * r[l + 1][t](), -r[l][t]() + r[l + 2][t](), 2 * r[l][t]() + (-3 / u + 1) * r[l + 1][t]() + (3 / u - 2) * r[l + 2][t]() - r[l + 3][t](), -r[l][t]() + (2 / u - 1) * r[l + 1][t]() + (-2 / u + 1) * r[l + 2][t]() + r[l + 3][t]()];
          return d += 2, isNaN(i) ? 0 / 0 : 0 >= i ? r[1][t]() : i >= d - 3 ? r[d - 2][t]() : (l = Math.floor(i), l === i ? r[l][t]() : (i -= l, c = n[t][l], u * (((c[3] * i + c[2]) * i + c[1]) * i + c[0])))
        }
      }, [s("X"), s("Y"), 0, function() {return e.length - 1}]
    }, CatmullRomSpline: function(t) {return this.CardinalSpline(t, .5)}, regressionPolynomial: function(i, r, s) {
      var o, n, a, h, l, c, d = "";
      if (t.isPoint(i) && "function" == typeof i.Value)n = function() {return i.Value()}; else if (t.isFunction(i))n = i; else {
        if (!t.isNumber(i))throw Error("JSXGraph: Can't create regressionPolynomial from degree of type'" + typeof i + "'.");
        n = function() {return i}
      }
      if (3 === arguments.length && t.isArray(r) && t.isArray(s))l = 0; else if (2 === arguments.length && t.isArray(r) && r.length > 0 && t.isPoint(r[0]))l = 1; else {
        if (!(2 === arguments.length && t.isArray(r) && r.length > 0 && r[0].usrCoords && r[0].scrCoords))throw Error("JSXGraph: Can't create regressionPolynomial. Wrong parameters.");
        l = 2
      }
      return c = function(i, c) {
        var u, p, f, m, b, g, v, y, C, P = r.length;
        if (C = Math.floor(n()), !c) {
          if (1 === l)for (a = [], h = [], u = 0; P > u; u++)a[u] = r[u].X(), h[u] = r[u].Y();
          if (2 === l)for (a = [], h = [], u = 0; P > u; u++)a[u] = r[u].usrCoords[1], h[u] = r[u].usrCoords[2];
          if (0 === l)for (a = [], h = [], u = 0; P > u; u++)t.isFunction(r[u]) ? a.push(r[u]()) : a.push(r[u]), t.isFunction(s[u]) ? h.push(s[u]()) : h.push(s[u]);
          for (f = [], p = 0; P > p; p++)f.push([1]);
          for (u = 1; C >= u; u++)for (p = 0; P > p; p++)f[p][u] = f[p][u - 1] * a[p];
          b = h, m = e.transpose(f), g = e.matMatMult(m, f), v = e.matVecMult(m, b), o = e.Numerics.Gauss(g, v), d = e.Numerics.generatePolynomialTerm(o, C, "x", 3)
        }
        for (y = o[C], u = C - 1; u >= 0; u--)y = y * i + o[u];
        return y
      }, c.getTerm = function() {return d}, c
    }, bezier: function(t) {
      var e, i, r = function(r) {
        return function(s, o) {
          var n = 3 * Math.floor(s), a = s % 1, h = 1 - a;
          return o || (i = 3 * Math.floor((t.length - 1) / 3), e = Math.floor(i / 3)), 0 > s ? t[0][r]() : s >= e ? t[i][r]() : isNaN(s) ? 0 / 0 : h * h * (h * t[n][r]() + 3 * a * t[n + 1][r]()) + (3 * h * t[n + 2][r]() + a * t[n + 3][r]()) * a * a
        }
      };
      return[r("X"), r("Y"), 0, function() {return Math.floor(t.length / 3)}]
    }, bspline: function(t, e) {
      var i, r = [], s = function(t, e) {
        var i, r = [];
        for (i = 0; t + e + 1 > i; i++)r[i] = e > i ? 0 : t >= i ? i - e + 1 : t - e + 2;
        return r
      }, o = function(t, e, i, r, s) {
        var o, n, a, h, l, c = [];
        for (c[s] = t >= e[s] && e[s + 1] > t ? 1 : 0, o = 2; r >= o; o++)for (n = s - o + 1; s >= n; n++)a = s - o + 1 >= n || 0 > n ? 0 : c[n], h = n >= s ? 0 : c[n + 1], l = e[n + o - 1] - e[n], c[n] = 0 === l ? 0 : (t - e[n]) / l * a, l = e[n + o] - e[n + 1], 0 !== l && (c[n] += (e[n + o] - t) / l * h);
        return c
      }, n = function(n) {
        return function(a) {
          var h, l, c, d = t.length, u = d - 1, p = e;
          if (0 >= u)return 0 / 0;
          if (p >= u + 2 && (p = u + 1), 0 >= a)return t[0][n]();
          if (a >= u - p + 2)return t[u][n]();
          for (c = Math.floor(a) + p - 1, i = s(u, p), r = o(a, i, u, p, c), h = 0, l = c - p + 1; c >= l; l++)d > l && l >= 0 && (h += t[l][n]() * r[l]);
          return h
        }
      };
      return[n("X"), n("Y"), 0, function() {return t.length - 1}]
    }, D: function(e, i) {
      var r = 1e-5, s = 1 / (2 * r);
      return t.exists(i) ? function(t, o) {return(e.apply(i, [t + r, o]) - e.apply(i, [t - r, o])) * s} : function(t, i) {return(e(t + r, i) - e(t - r, i)) * s}
    }, riemann: function(t, e, i, r, s) {
      var o, n, a, h, l, c, d = [], u = [], p = 0, f = r, m = 0;
      if (e = Math.round(e), d[p] = f, u[p] = 0, e > 0)for (l = (s - r) / e, h = .01 * l, o = 0; e > o; o++) {
        if ("right" === i)c = t(f + l); else if ("middle" === i)c = t(f + .5 * l); else if ("left" === i || "trapezoidal" === i)c = t(f); else if ("lower" === i) {
          for (c = t(f), n = f + h; f + l >= n; n += h)a = t(n), c > a && (c = a);
          a = t(f + l), c > a && (c = a)
        } else if ("upper" === i) {
          for (c = t(f), n = f + h; f + l >= n; n += h)a = t(n), a > c && (c = a);
          a = t(f + l), a > c && (c = a)
        } else c = "random" === i ? t(f + l * Math.random()) : "simpson" === i ? (t(f) + 4 * t(f + .5 * l) + t(f + l)) / 6 : t(f);
        p += 1, d[p] = f, u[p] = c, p += 1, f += l, "trapezoidal" === i && (c = t(f)), d[p] = f, u[p] = c, p += 1, d[p] = f, u[p] = 0, m += c * l
      }
      return[d, u, m]
    }, riemannsum: function(t, e, i, r, s) {
      var o, n, a, h, l, c, d = 0, u = r;
      if (e = Math.floor(e), e > 0)for (l = (s - r) / e, h = .01 * l, o = 0; e > o; o++) {
        if ("right" === i)c = t(u + l); else if ("middle" === i)c = t(u + .5 * l); else if ("trapezoidal" === i)c = .5 * (t(u + l) + t(u)); else if ("left" === i)c = t(u); else if ("lower" === i) {
          for (c = t(u), n = u + h; u + l >= n; n += h)a = t(n), c > a && (c = a);
          a = t(u + l), c > a && (c = a)
        } else if ("upper" === i) {
          for (c = t(u), n = u + h; u + l >= n; n += h)a = t(n), a > c && (c = a);
          a = t(u + l), a > c && (c = a)
        } else c = "random" === i ? t(u + l * Math.random()) : "simpson" === i ? (t(u) + 4 * t(u + .5 * l) + t(u + l)) / 6 : t(u);
        d += l * c, u += l
      }
      return d
    }, rungeKutta: function(e, r, s, o, n) {
      var a, h, l, c, d, u, p = [], f = [], m = (s[1] - s[0]) / o, b = s[0], g = r.length, v = [], y = 0;
      for (t.isString(e) && (e = i[e] || i.euler), u = e.s, a = 0; g > a; a++)p[a] = r[a];
      for (h = 0; o > h; h++) {
        for (v[y] = [], a = 0; g > a; a++)v[y][a] = p[a];
        for (y += 1, c = [], l = 0; u > l; l++) {
          for (a = 0; g > a; a++)f[a] = 0;
          for (d = 0; l > d; d++)for (a = 0; g > a; a++)f[a] += e.A[l][d] * m * c[d][a];
          for (a = 0; g > a; a++)f[a] += p[a];
          c.push(n(b + e.c[l] * m, f))
        }
        for (a = 0; g > a; a++)f[a] = 0;
        for (d = 0; u > d; d++)for (a = 0; g > a; a++)f[a] += e.b[d] * c[d][a];
        for (a = 0; g > a; a++)p[a] = p[a] + m * f[a];
        b += m
      }
      return v
    }, maxIterationsRoot: 80, maxIterationsMinimize: 500, fzero: function(i, r, s) {
      var o, n, a, h, l, c, d, u, p, f, m, b, g, v, y, C, P, _, E, S, x = e.eps, O = this.maxIterationsRoot, T = 0, w = 0;
      if (t.isArray(r)) {
        if (2 > r.length)throw Error("JXG.Math.Numerics.fzero: length of array x0 has to be at least two.");
        o = r[0], h = i.call(s, o), w += 1, n = r[1], l = i.call(s, n), w += 1
      } else {
        for (o = r, h = i.call(s, o), w += 1, d = 0 === o ? 1 : o, u = [.9 * d, 1.1 * d, d - 1, d + 1, .5 * d, 1.5 * d, -d, 2 * d, -10 * d, 10 * d], f = u.length, p = 0; f > p && (n = u[p], l = i.call(s, n), w += 1, !(0 >= h * l)); p++);
        o > n && (m = o, o = n, n = m, b = h, h = l, l = b)
      }
      if (h * l > 0)return t.isArray(r) ? this.fminbr(i, [o, n], s) : this.Newton(i, o, s);
      for (a = o, c = h; O > T;) {
        if (g = n - o, Math.abs(c) < Math.abs(l) && (o = n, n = a, a = o, h = l, l = c, c = h), P = 2 * x * Math.abs(n) + .5 * x, S = .5 * (a - n), P >= Math.abs(S) && x >= Math.abs(l))return n;
        Math.abs(g) >= P && Math.abs(h) > Math.abs(l) && (y = a - n, o === a ? (v = l / h, _ = y * v, E = 1 - v) : (E = h / c, v = l / c, C = l / h, _ = C * (y * E * (E - v) - (n - o) * (v - 1)), E = (E - 1) * (v - 1) * (C - 1)), _ > 0 ? E = -E : _ = -_, .75 * y * E - .5 * Math.abs(P * E) > _ && Math.abs(.5 * g * E) > _ && (S = _ / E)), P > Math.abs(S) && (S = S > 0 ? P : -P), o = n, h = l, n += S, l = i.call(s, n), w += 1, (l > 0 && c > 0 || 0 > l && 0 > c) && (a = o, c = h), T++
      }
      return n
    }, fminbr: function(i, r, s) {
      var o, n, a, h, l, c, d, u, p, f, m, b, g, v, y, C, P = .5 * (3 - Math.sqrt(5)), _ = e.eps, E = e.eps, S = this.maxIterationsMinimize, x = 0, O = 0;
      if (!t.isArray(r) || 2 > r.length)throw Error("JXG.Math.Numerics.fminbr: length of array x0 has to be at least two.");
      for (o = r[0], n = r[1], h = o + P * (n - o), d = i.call(s, h), O += 1, a = h, l = h, c = d, u = d; S > x;) {
        if (p = n - o, f = .5 * (o + n), m = E * Math.abs(a) + _ / 3, 2 * m >= Math.abs(a - f) + .5 * p)return a;
        b = P * (f > a ? n - a : o - a), Math.abs(a - l) >= m && (y = (a - l) * (c - d), v = (a - h) * (c - u), g = (a - h) * v - (a - l) * y, v = 2 * (v - y), v > 0 ? g = -g : v = -v, Math.abs(g) < Math.abs(b * v) && g > v * (o - a + 2 * m) && v * (n - a - 2 * m) > g && (b = g / v)), m > Math.abs(b) && (b = b > 0 ? m : -m), y = a + b, C = i.call(s, y), O += 1, c >= C ? (a > y ? n = a : o = a, h = l, l = a, a = y, d = u, u = c, c = C) : (a > y ? o = y : n = y, u >= C || l === a ? (h = l, l = y, d = u, u = C) : (d >= C || h === a || h === l) && (h = y, d = C)), x += 1
      }
      return a
    }, RamerDouglasPeucker: function(t, i) {
      var r, s, o, n = [], a = function(t, i, r) {
        var s, o, n, a, h, l, c, d, u, p, f, m = 0, b = i;
        if (2 > r - i)return[-1, 0];
        if (n = t[i].scrCoords, a = t[r].scrCoords, isNaN(n[1] + n[2]))return[0 / 0, i];
        if (isNaN(a[1] + a[2]))return[0 / 0, r];
        for (o = i + 1; r > o; o++) {
          if (h = t[o].scrCoords, isNaN(h[1] + h[2]))return[0 / 0, o];
          l = h[1] - n[1], c = h[2] - n[2], d = a[1] - n[1], u = a[2] - n[2], p = d * d + u * u, p >= e.eps ? (f = (l * d + c * u) / p, 0 > f ? f = 0 : f > 1 && (f = 1), l -= f * d, c -= f * u, s = l * l + c * c) : (f = 0, s = l * l + c * c), s > m && (m = s, b = o)
        }
        return[Math.sqrt(m), b]
      }, h = function(t, e, i, r, s) {
        var o = a(t, e, i), n = o[1];
        if (isNaN(o[0])) {
          h(t, e, n - 1, r, s), s.push(t[n]);
          do++n; while (i >= n && isNaN(t[n].scrCoords[1] + t[n].scrCoords[2]));
          i >= n && s.push(t[n]), h(t, n + 1, i, r, s)
        } else o[0] > r ? (h(t, e, n, r, s), h(t, n, i, r, s)) : s.push(t[i])
      };
      for (o = t.length, r = 0; o > r && isNaN(t[r].scrCoords[1] + t[r].scrCoords[2]);)r += 1;
      for (s = o - 1; s > r && isNaN(t[s].scrCoords[1] + t[s].scrCoords[2]);)s -= 1;
      return r > s || r === o || (n[0] = t[r], h(t, r, s, i, n)), n
    }, RamerDouglasPeuker: function(t, e) {return this.RamerDouglasPeucker(t, e)}}, e.Numerics
  }), define("math/geometry", ["jxg", "base/constants", "base/coords", "math/math", "math/numerics", "utils/type", "utils/expect"], function(t, e, i, r, s, o, n) {
    return r.Geometry = {}, t.extend(r.Geometry, {angle: function(t, e, i) {
      var r, s, o, n, a = [], h = [], l = [];
      return t.coords ? (a[0] = t.coords.usrCoords[1], a[1] = t.coords.usrCoords[2]) : (a[0] = t[0], a[1] = t[1]), e.coords ? (h[0] = e.coords.usrCoords[1], h[1] = e.coords.usrCoords[2]) : (h[0] = e[0], h[1] = e[1]), i.coords ? (l[0] = i.coords.usrCoords[1], l[1] = i.coords.usrCoords[2]) : (l[0] = i[0], l[1] = i[1]), r = a[0] - h[0], s = a[1] - h[1], o = l[0] - h[0], n = l[1] - h[1], Math.atan2(r * n - s * o, r * o + s * n)
    }, trueAngle: function(t, e, i) {return 57.29577951308232 * this.rad(t, e, i)}, rad: function(t, e, i) {
      var r, s, o, n, a, h, l;
      return t.coords ? (r = t.coords.usrCoords[1], s = t.coords.usrCoords[2]) : (r = t[0], s = t[1]), e.coords ? (o = e.coords.usrCoords[1], n = e.coords.usrCoords[2]) : (o = e[0], n = e[1]), i.coords ? (a = i.coords.usrCoords[1], h = i.coords.usrCoords[2]) : (a = i[0], h = i[1]), l = Math.atan2(h - n, a - o) - Math.atan2(s - n, r - o), 0 > l && (l += 6.283185307179586), l
    }, angleBisector: function(t, r, s, n) {
      var a, h, l, c, d, u = t.coords.usrCoords, p = r.coords.usrCoords, f = s.coords.usrCoords;
      return o.exists(n) || (n = t.board), 0 === p[0] ? new i(e.COORDS_BY_USER, [1, .5 * (u[1] + f[1]), .5 * (u[2] + f[2])], n) : (c = u[1] - p[1], d = u[2] - p[2], a = Math.atan2(d, c), c = f[1] - p[1], d = f[2] - p[2], h = Math.atan2(d, c), l = .5 * (a + h), a > h && (l += Math.PI), c = Math.cos(l) + p[1], d = Math.sin(l) + p[2], new i(e.COORDS_BY_USER, [1, c, d], n))
    }, reflection: function(t, r, s) {
      var n, a, h, l, c, d, u, p = r.coords.usrCoords, f = t.point1.coords.usrCoords, m = t.point2.coords.usrCoords;
      return o.exists(s) || (s = r.board), c = m[1] - f[1], d = m[2] - f[2], n = p[1] - f[1], a = p[2] - f[2], u = (c * a - d * n) / (c * c + d * d), h = p[1] + 2 * u * d, l = p[2] - 2 * u * c, new i(e.COORDS_BY_USER, [h, l], s)
    }, rotation: function(t, r, s, n) {
      var a, h, l, c, d, u, p = r.coords.usrCoords, f = t.coords.usrCoords;
      return o.exists(n) || (n = r.board), a = p[1] - f[1], h = p[2] - f[2], l = Math.cos(s), c = Math.sin(s), d = a * l - h * c + f[1], u = a * c + h * l + f[2], new i(e.COORDS_BY_USER, [d, u], n)
    }, perpendicular: function(t, s, n) {
      var a, h, l, c, d, u = t.point1.coords.usrCoords, p = t.point2.coords.usrCoords, f = s.coords.usrCoords;
      return o.exists(n) || (n = s.board), s === t.point1 ? (a = u[1] + p[2] - u[2], h = u[2] - p[1] + u[1], d = u[0] * p[0], Math.abs(d) < r.eps && (a = p[2], h = -p[1]), c = [d, a, h], l = !0) : s === t.point2 ? (a = p[1] + u[2] - p[2], h = p[2] - u[1] + p[1], d = u[0] * p[0], Math.abs(d) < r.eps && (a = u[2], h = -u[1]), c = [d, a, h], l = !1) : Math.abs(r.innerProduct(f, t.stdform, 3)) < r.eps ? (a = f[1] + p[2] - f[2], h = f[2] - p[1] + f[1], d = p[0], Math.abs(d) < r.eps && (a = p[2], h = -p[1]), l = !0, Math.abs(d) > r.eps && Math.abs(a - f[1]) < r.eps && Math.abs(h - f[2]) < r.eps && (a = f[1] + u[2] - f[2], h = f[2] - u[1] + f[1], l = !1), c = [d, a, h]) : (c = [0, t.stdform[1], t.stdform[2]], c = r.crossProduct(c, f), c = r.crossProduct(c, t.stdform), l = !0), [new i(e.COORDS_BY_USER, c, n), l]
    }, circumcenterMidpoint: t.shortcut(r.Geometry, "circumcenter"), circumcenter: function(t, s, n, a) {
      var h, l, c, d, u = t.coords.usrCoords, p = s.coords.usrCoords, f = n.coords.usrCoords;
      return o.exists(a) || (a = t.board), h = [p[0] - u[0], -p[2] + u[2], p[1] - u[1]], l = [.5 * (u[0] + p[0]), .5 * (u[1] + p[1]), .5 * (u[2] + p[2])], c = r.crossProduct(h, l), h = [f[0] - p[0], -f[2] + p[2], f[1] - p[1]], l = [.5 * (p[0] + f[0]), .5 * (p[1] + f[1]), .5 * (p[2] + f[2])], d = r.crossProduct(h, l), new i(e.COORDS_BY_USER, r.crossProduct(c, d), a)
    }, distance: function(t, e, i) {
      var r, s = 0;
      for (i || (i = Math.min(t.length, e.length)), r = 0; i > r; r++)s += (t[r] - e[r]) * (t[r] - e[r]);
      return Math.sqrt(s)
    }, affineDistance: function(t, e, i) {
      var s;
      return s = this.distance(t, e, i), s > r.eps && (Math.abs(t[0]) < r.eps || Math.abs(e[0]) < r.eps) ? 1 / 0 : s
    }, sortVertices: function(t) {
      var e, i, s = n.each(t, n.coordsArray), a = s.length;
      for (e = 1; a > e; e++)(s[e][2] < s[0][2] || Math.abs(s[e][2] - s[0][2]) < r.eps && s[e][1] < s[0][1]) && (s = o.swap(s, e, 0));
      return i = s.shift(), s.sort(function(t, e) {
        var r = Math.atan2(t[2] - i[2], t[1] - i[1]), s = Math.atan2(e[2] - i[2], e[1] - i[1]);
        return r - s
      }), s.unshift(i), s.unshift(s[s.length - 1]), s
    }, signedTriangle: function(t, e, i) {
      var r = n.coordsArray(t), s = n.coordsArray(e), o = n.coordsArray(i);
      return.5 * ((s[1] - r[1]) * (o[2] - r[2]) - (s[2] - r[2]) * (o[1] - r[1]))
    }, signedPolygon: function(t, e) {
      var i, r, s = 0, o = n.each(t, n.coordsArray);
      for (e ? o.unshift(o[o.length - 1]) : o = this.sortVertices(o), r = o.length, i = 1; r > i; i++)s += o[i - 1][1] * o[i][2] - o[i][1] * o[i - 1][2];
      return.5 * s
    }, GrahamScan: function(t) {
      var e, i = 1, r = n.each(t, n.coordsArray), s = r.length;
      for (r = this.sortVertices(r), s = r.length, e = 2; s > e; e++) {
        for (; 0 >= this.signedTriangle(r[i - 1], r[i], r[e]);)if (i > 1)i -= 1; else {
          if (e === s - 1)break;
          e += 1
        }
        i += 1, r = o.swap(r, i, e)
      }
      return r.slice(0, i)
    }, calcStraight: function(t, i, s, n) {
      var a, h, l, c, d, u, p, f, m, b;
      if (o.exists(n) || (n = 10), u = t.visProp.straightfirst, p = t.visProp.straightlast, Math.abs(i.scrCoords[0]) < r.eps && (u = !0), Math.abs(s.scrCoords[0]) < r.eps && (p = !0), (u || p) && (f = [], f[0] = t.stdform[0] - t.stdform[1] * t.board.origin.scrCoords[1] / t.board.unitX + t.stdform[2] * t.board.origin.scrCoords[2] / t.board.unitY, f[1] = t.stdform[1] / t.board.unitX, f[2] = -t.stdform[2] / t.board.unitY, !isNaN(f[0] + f[1] + f[2]))) {
        if (a = !1, h = !1, a = !u && Math.abs(i.usrCoords[0]) >= r.eps && i.scrCoords[1] >= 0 && i.scrCoords[1] <= t.board.canvasWidth && i.scrCoords[2] >= 0 && i.scrCoords[2] <= t.board.canvasHeight, h = !p && Math.abs(s.usrCoords[0]) >= r.eps && s.scrCoords[1] >= 0 && s.scrCoords[1] <= t.board.canvasWidth && s.scrCoords[2] >= 0 && s.scrCoords[2] <= t.board.canvasHeight, l = this.meetLineBoard(f, t.board, n), c = l[0], d = l[1], !a && !h) {
          if (!u && p && !this.isSameDirection(i, s, c) && !this.isSameDirection(i, s, d))return;
          if (u && !p && !this.isSameDirection(s, i, c) && !this.isSameDirection(s, i, d))return
        }
        a ? h || (b = this.isSameDir(i, s, c, d) ? d : c) : h ? m = this.isSameDir(i, s, c, d) ? c : d : this.isSameDir(i, s, c, d) ? (m = c, b = d) : (b = c, m = d), m && i.setCoordinates(e.COORDS_BY_USER, m.usrCoords), b && s.setCoordinates(e.COORDS_BY_USER, b.usrCoords)
      }
    }, calcLineDelimitingPoints: function(t, i, s) {
      var o, n, a, h, l, c, d, u, p, f, m = !1, b = !1;
      if (c = t.visProp.straightfirst, d = t.visProp.straightlast, Math.abs(i.scrCoords[0]) < r.eps && (c = !0), Math.abs(s.scrCoords[0]) < r.eps && (d = !0), u = [], u[0] = t.stdform[0] - t.stdform[1] * t.board.origin.scrCoords[1] / t.board.unitX + t.stdform[2] * t.board.origin.scrCoords[2] / t.board.unitY, u[1] = t.stdform[1] / t.board.unitX, u[2] = -t.stdform[2] / t.board.unitY, !isNaN(u[0] + u[1] + u[2])) {
        if (m = !c, b = !d, n = t.board.getBoundingBox(), a = t.getSlope(), a >= 0 ? (h = this.projectPointToLine({coords: {usrCoords: [1, n[2], n[1]]}}, t, t.board), l = this.projectPointToLine({coords: {usrCoords: [1, n[0], n[3]]}}, t, t.board)) : (h = this.projectPointToLine({coords: {usrCoords: [1, n[0], n[1]]}}, t, t.board), l = this.projectPointToLine({coords: {usrCoords: [1, n[2], n[3]]}}, t, t.board)), !m && !b) {
          if (!c && !d) {
            if (o = i.distance(e.COORDS_BY_USER, s), Math.abs(i.distance(e.COORDS_BY_USER, h) + h.distance(e.COORDS_BY_USER, s) - o) > r.eps)return;
            if (Math.abs(i.distance(e.COORDS_BY_USER, l) + l.distance(e.COORDS_BY_USER, s) - o) > r.eps)return
          }
          if (!c && d && !this.isSameDirection(i, s, h) && !this.isSameDirection(i, s, l))return;
          if (c && !d && !this.isSameDirection(s, i, h) && !this.isSameDirection(s, i, l))return
        }
        m ? b || (f = this.isSameDir(i, s, h, l) ? l : h) : b ? p = this.isSameDir(i, s, h, l) ? h : l : this.isSameDir(i, s, h, l) ? (p = h, f = l) : (f = h, p = l), p && i.setCoordinates(e.COORDS_BY_USER, p.usrCoords), f && s.setCoordinates(e.COORDS_BY_USER, f.usrCoords)
      }
    }, isSameDir: function(t, e, i, s) {
      var o = e.usrCoords[1] - t.usrCoords[1], n = e.usrCoords[2] - t.usrCoords[2], a = s.usrCoords[1] - i.usrCoords[1], h = s.usrCoords[2] - i.usrCoords[2];
      return Math.abs(e.usrCoords[0]) < r.eps && (o = e.usrCoords[1], n = e.usrCoords[2]), Math.abs(t.usrCoords[0]) < r.eps && (o = -t.usrCoords[1], n = -t.usrCoords[2]), o * a + n * h >= 0
    }, isSameDirection: function(t, e, i) {
      var s, o, n, a, h = !1;
      return s = e.usrCoords[1] - t.usrCoords[1], o = e.usrCoords[2] - t.usrCoords[2], n = i.usrCoords[1] - t.usrCoords[1], a = i.usrCoords[2] - t.usrCoords[2], Math.abs(s) < r.eps && (s = 0), Math.abs(o) < r.eps && (o = 0), Math.abs(n) < r.eps && (n = 0), Math.abs(a) < r.eps && (a = 0), s >= 0 && n >= 0 ? h = o >= 0 && a >= 0 || 0 >= o && 0 >= a : 0 >= s && 0 >= n && (h = o >= 0 && a >= 0 || 0 >= o && 0 >= a), h
    }, intersectionFunction: function(t, r, s, o, n, a) {
      var h, l = this;
      return h = r.elementClass === e.OBJECT_CLASS_CURVE && s.elementClass === e.OBJECT_CLASS_CURVE ? function() {return l.meetCurveCurve(r, s, o, n, r.board)} : r.elementClass === e.OBJECT_CLASS_CURVE && s.elementClass === e.OBJECT_CLASS_LINE || s.elementClass === e.OBJECT_CLASS_CURVE && r.elementClass === e.OBJECT_CLASS_LINE ? function() {return l.meetCurveLine(r, s, o, r.board, a)} : r.elementClass === e.OBJECT_CLASS_LINE && s.elementClass === e.OBJECT_CLASS_LINE ? function() {
        var t, n, h = r.visProp.straightfirst, c = s.visProp.straightfirst, d = r.visProp.straightlast, u = s.visProp.straightlast;
        return a || h && d && c && u ? l.meet(r.stdform, s.stdform, o, r.board) : (t = l.meetSegmentSegment(r.point1.coords.usrCoords, r.point2.coords.usrCoords, s.point1.coords.usrCoords, s.point2.coords.usrCoords, r.board), n = !h && 0 > t[1] || !d && t[1] > 1 || !c && 0 > t[2] || !u && t[2] > 1 ? [0, 0 / 0, 0 / 0] : t[0], new i(e.COORDS_BY_USER, n, r.board))
      } : function() {return l.meet(r.stdform, s.stdform, o, r.board)}
    }, meet: function(t, e, i, s) {
      var o, n = r.eps;
      return o = n > Math.abs(t[3]) && n > Math.abs(e[3]) ? this.meetLineLine(t, e, i, s) : Math.abs(t[3]) >= n && n > Math.abs(e[3]) ? this.meetLineCircle(e, t, i, s) : n > Math.abs(t[3]) && Math.abs(e[3]) >= n ? this.meetLineCircle(t, e, i, s) : this.meetCircleCircle(t, e, i, s)
    }, meetLineBoard: function(t, s, n) {
      var a, h, l, c, d = [];
      for (o.exists(n) || (n = 0), d[0] = r.crossProduct(t, [n, 0, 1]), d[1] = r.crossProduct(t, [n, 1, 0]), d[2] = r.crossProduct(t, [-n - s.canvasHeight, 0, 1]), d[3] = r.crossProduct(t, [-n - s.canvasWidth, 1, 0]), l = 0; 4 > l; l++)if (Math.abs(d[l][0]) > r.eps) {
        for (c = 2; c > 0; c--)d[l][c] /= d[l][0];
        d[l][0] = 1
      }
      return Math.abs(d[1][0]) < r.eps ? (a = d[0], h = d[2]) : Math.abs(d[0][0]) < r.eps ? (a = d[1], h = d[3]) : 0 > d[1][2] ? (a = d[0], h = d[3][2] > s.canvasHeight ? d[2] : d[3]) : d[1][2] > s.canvasHeight ? (a = d[2], h = 0 > d[3][2] ? d[0] : d[3]) : (a = d[1], h = 0 > d[3][2] ? d[0] : d[3][2] > s.canvasHeight ? d[2] : d[3]), a = new i(e.COORDS_BY_SCREEN, a.slice(1), s), h = new i(e.COORDS_BY_SCREEN, h.slice(1), s), [a, h]
    }, meetLineLine: function(t, s, o, n) {
      var a = isNaN(t[5] + s[5]) ? [0, 0, 0] : r.crossProduct(t, s);
      return new i(e.COORDS_BY_USER, a, n)
    }, meetLineCircle: function(t, s, o, n) {
      var a, h, l, c, d, u, p, f, m, b;
      return s[4] < r.eps ? Math.abs(r.innerProduct([1, s[6], s[7]], t, 3)) < r.eps ? new i(e.COORDS_BY_USER, s.slice(6, 8), n) : new i(e.COORDS_BY_USER, [0 / 0, 0 / 0], n) : (l = s[0], h = s.slice(1, 3), a = s[3], c = t[0], d = t.slice(1, 3), u = a, p = h[0] * d[1] - h[1] * d[0], f = a * c * c - (h[0] * d[0] + h[1] * d[1]) * c + l, m = p * p - 4 * u * f, m >= 0 ? (m = Math.sqrt(m), b = [(-p + m) / (2 * u), (-p - m) / (2 * u)], 0 === o ? new i(e.COORDS_BY_USER, [-b[0] * -d[1] - c * d[0], -b[0] * d[0] - c * d[1]], n) : new i(e.COORDS_BY_USER, [-b[1] * -d[1] - c * d[0], -b[1] * d[0] - c * d[1]], n)) : new i(e.COORDS_BY_USER, [0, 0, 0], n))
    }, meetCircleCircle: function(t, s, o, n) {
      var a;
      return t[4] < r.eps ? Math.abs(this.distance(t.slice(6, 2), s.slice(6, 8)) - s[4]) < r.eps ? new i(e.COORDS_BY_USER, t.slice(6, 8), n) : new i(e.COORDS_BY_USER, [0, 0, 0], n) : s[4] < r.eps ? Math.abs(this.distance(s.slice(6, 2), t.slice(6, 8)) - t[4]) < r.eps ? new i(e.COORDS_BY_USER, s.slice(6, 8), n) : new i(e.COORDS_BY_USER, [0, 0, 0], n) : (a = [s[3] * t[0] - t[3] * s[0], s[3] * t[1] - t[3] * s[1], s[3] * t[2] - t[3] * s[2], 0, 1, 1 / 0, 1 / 0, 1 / 0], a = r.normalize(a), this.meetLineCircle(a, t, o, n))
    }, meetCurveCurve: function(t, r, n, a, h, l) {
      var c;
      return c = o.exists(l) && "newton" === l ? s.generalizedNewton(t, r, n, a) : 3 === t.bezierDegree && 3 === r.bezierDegree ? this.meetBezierCurveRedBlueSegments(t, r, n) : this.meetCurveRedBlueSegments(t, r, n), new i(e.COORDS_BY_USER, c, h)
    }, meetCurveLine: function(t, i, r, s, n) {
      var a, h, l = [0, 0 / 0, 0 / 0];
      return o.exists(s) || (s = t.board), t.elementClass === e.OBJECT_CLASS_CURVE ? (a = t, h = i) : (a = i, h = t), l = "plot" === a.visProp.curvetype ? this.meetCurveLineDiscrete(a, h, r, s, !n) : this.meetCurveLineContinuous(a, h, r, s)
    }, meetCurveLineContinuous: function(t, o, n, a, h) {
      var l, c, d, u, p, f, m, b = 10 * r.eps;
      return u = this.meetCurveLineDiscrete(t, o, n, a, h), p = u.usrCoords[1], f = u.usrCoords[2], c = function(e) {
        var i = p - t.X(e), r = f - t.Y(e);
        return Math.sqrt(i * i + r * r)
      }, d = function(e) {
        var i = o.stdform[0] + o.stdform[1] * t.X(e) + o.stdform[2] * t.Y(e);
        return i * i
      }, l = s.root(c, [t.minX(), t.maxX()]), l = s.root(d, [l - 2 * b, l + 2 * b]), m = Math.abs(d(l)) > b ? 0 / 0 : 1, new i(e.COORDS_BY_USER, [m, t.X(l), t.Y(l)], a)
    }, meetCurveLineContinuousOld: function(t, o, n, a) {
      var h, l, c, d, u, p, f, m, b, g, v, y, C = 10 * r.eps;
      if (d = function(e) {
        var i = o.stdform[0] + o.stdform[1] * t.X(e) + o.stdform[2] * t.Y(e);
        return i * i
      }, this.meetCurveLineContinuous.t1memo ? (b = this.meetCurveLineContinuous.t1memo, h = s.root(d, b)) : (b = t.minX(), g = t.maxX(), h = s.root(d, [b, g])), this.meetCurveLineContinuous.t1memo = h, v = t.X(h), y = t.Y(h), 1 === n) {
        if (this.meetCurveLineContinuous.t2memo && (b = this.meetCurveLineContinuous.t2memo), l = s.root(d, b), !(Math.abs(l - h) > .1 && Math.abs(v - t.X(l)) > .1 && Math.abs(y - t.Y(l)) > .1))for (f = 20, m = (t.maxX() - t.minX()) / f, p = t.minX(), c = 0; f > c && (l = s.root(d, [p, p + m]), !(C >= Math.abs(d(l)) && Math.abs(l - h) > .1 && Math.abs(v - t.X(l)) > .1 && Math.abs(y - t.Y(l)) > .1)); c++)p += m;
        h = l, this.meetCurveLineContinuous.t2memo = h
      }
      return u = Math.abs(d(h)) > C ? 0 / 0 : 1, new i(e.COORDS_BY_USER, [u, t.X(h), t.Y(h)], a)
    }, meetCurveLineDiscrete: function(t, s, o, n, a) {
      var h, l, c, d, u, p, f, m, b = s.point1.coords.usrCoords, g = s.point2.coords.usrCoords, v = 0, y = t.numberPoints;
      for (p = new i(e.COORDS_BY_USER, [0, 0 / 0, 0 / 0], n), 0 === b[0] ? b = [1, g[1] + s.stdform[2], g[2] - s.stdform[1]] : 0 === g[0] && (g = [1, b[1] + s.stdform[2], b[2] - s.stdform[1]]), d = t.points[0].usrCoords, h = 1; y > h; h++)if (c = d.slice(0), d = t.points[h].usrCoords, f = this.distance(c, d), f > r.eps)for (3 === t.bezierDegree ? (m = this.meetBeziersegmentBeziersegment([t.points[h - 1].usrCoords.slice(1), t.points[h].usrCoords.slice(1), t.points[h + 1].usrCoords.slice(1), t.points[h + 2].usrCoords.slice(1)], [b.slice(1), g.slice(1)], a), h += 2) : m = [this.meetSegmentSegment(c, d, b, g)], l = 0; m.length > l; l++)if (u = m[l], u[1] >= 0 && 1 >= u[1]) {
        if (v === o)return a && (!s.visProp.straightfirst && 0 > u[2] || !s.visProp.straightlast && u[2] > 1) ? p : p = new i(e.COORDS_BY_USER, u[0], n);
        v += 1
      }
      return p
    }, meetCurveRedBlueSegments: function(t, e, i) {
      var r, s, o, n, a, h, l, c, d, u = 0, p = e.points.length, f = t.points.length;
      if (1 >= p || 1 >= f)return[0, 0 / 0, 0 / 0];
      for (r = 1; f > r; r++)for (o = t.points[r - 1].usrCoords, n = t.points[r].usrCoords, c = Math.min(o[1], n[1]), d = Math.max(o[1], n[1]), h = e.points[0].usrCoords, s = 1; p > s; s++)if (a = h, h = e.points[s].usrCoords, d > Math.min(a[1], h[1]) && Math.max(a[1], h[1]) > c && (l = this.meetSegmentSegment(o, n, a, h), l[1] >= 0 && l[2] >= 0 && (1 > l[1] && 1 > l[2] || r === f - 1 && 1 === l[1] || s === p - 1 && 1 === l[2]))) {
        if (u === i)return l[0];
        u++
      }
      return[0, 0 / 0, 0 / 0]
    }, meetSegmentSegment: function(t, e, i, s) {
      var o, n, a, h = r.crossProduct(t, e), l = r.crossProduct(i, s), c = r.crossProduct(h, l), d = c[0];
      return Math.abs(d) < r.eps ? [c, 1 / 0, 1 / 0] : (a = [i[1] - t[1], i[2] - t[2]], o = (a[0] * (s[2] - i[2]) - a[1] * (s[1] - i[1])) / d, n = (a[0] * (e[2] - t[2]) - a[1] * (e[1] - t[1])) / d, [c, o, n])
    }, _bezierSplit: function(t) {
      var e, i, r, s, o, n;
      return e = [.5 * (t[0][0] + t[1][0]), .5 * (t[0][1] + t[1][1])], i = [.5 * (t[1][0] + t[2][0]), .5 * (t[1][1] + t[2][1])], r = [.5 * (t[2][0] + t[3][0]), .5 * (t[2][1] + t[3][1])], s = [.5 * (e[0] + i[0]), .5 * (e[1] + i[1])], o = [.5 * (i[0] + r[0]), .5 * (i[1] + r[1])], n = [.5 * (s[0] + o[0]), .5 * (s[1] + o[1])], [
        [t[0], e, s, n],
        [n, o, r, t[3]]
      ]
    }, _bezierBbox: function(t) {
      var e = [];
      return 4 === t.length ? (e[0] = Math.min(t[0][0], t[1][0], t[2][0], t[3][0]), e[1] = Math.max(t[0][1], t[1][1], t[2][1], t[3][1]), e[2] = Math.max(t[0][0], t[1][0], t[2][0], t[3][0]), e[3] = Math.min(t[0][1], t[1][1], t[2][1], t[3][1])) : (e[0] = Math.min(t[0][0], t[1][0]), e[1] = Math.max(t[0][1], t[1][1]), e[2] = Math.max(t[0][0], t[1][0]), e[3] = Math.min(t[0][1], t[1][1])), e
    }, _bezierOverlap: function(t, e) {return t[2] >= e[0] && t[0] <= e[2] && t[1] >= e[3] && t[3] <= e[1]}, _bezierListConcat: function(t, e, i, r) {
      var s, n = o.exists(r), a = 0, h = e.length, l = t.length;
      for (l > 0 && h > 0 && (1 === t[l - 1][1] && 0 === e[0][1] || n && 1 === t[l - 1][2] && 0 === e[0][2]) && (a = 1), s = a; h > s; s++)n && (e[s][2] *= .5, e[s][2] += r), e[s][1] *= .5, e[s][1] += i, t.push(e[s])
    }, _bezierMeetSubdivision: function(t, e, i) {
      var r, s, o, n, a, h, l, c, d, u, p, f, m = [], b = 5;
      return s = this._bezierBbox(e), r = this._bezierBbox(t), this._bezierOverlap(s, r) ? b > i ? (o = this._bezierSplit(t), h = o[0], l = o[1], o = this._bezierSplit(e), n = o[0], a = o[1], this._bezierListConcat(m, this._bezierMeetSubdivision(h, n, i + 1), 0, 0), this._bezierListConcat(m, this._bezierMeetSubdivision(h, a, i + 1), 0, .5), this._bezierListConcat(m, this._bezierMeetSubdivision(l, n, i + 1), .5, 0), this._bezierListConcat(m, this._bezierMeetSubdivision(l, a, i + 1), .5, .5), m) : (p = [1].concat(t[0]), f = [1].concat(t[3]), d = [1].concat(e[0]), u = [1].concat(e[3]), c = this.meetSegmentSegment(p, f, d, u), c[1] >= 0 && c[2] >= 0 && 1 >= c[1] && 1 >= c[2] ? [c] : []) : []
    }, _bezierLineMeetSubdivision: function(t, e, i, r) {
      var s, o, n, a, h, l, c, d, u, p, f = [], m = 5;
      return s = this._bezierBbox(e), o = this._bezierBbox(t), r && !this._bezierOverlap(o, s) ? [] : m > i ? (n = this._bezierSplit(t), a = n[0], h = n[1], this._bezierListConcat(f, this._bezierLineMeetSubdivision(a, e, i + 1), 0), this._bezierListConcat(f, this._bezierLineMeetSubdivision(h, e, i + 1), .5), f) : (u = [1].concat(t[0]), p = [1].concat(t[3]), c = [1].concat(e[0]), d = [1].concat(e[1]), l = this.meetSegmentSegment(u, p, c, d), l[1] >= 0 && 1 >= l[1] && (!r || l[2] >= 0 && 1 >= l[2]) ? [l] : [])
    }, meetBeziersegmentBeziersegment: function(t, e, i) {
      var r, s, o;
      for (r = 4 === t.length && 4 === e.length ? this._bezierMeetSubdivision(t, e, 0) : this._bezierLineMeetSubdivision(t, e, 0, i), r.sort(function(t, e) {return 1e7 * (t[1] - e[1]) + (t[2] - e[2])}), s = [], o = 0; r.length > o; o++)(0 === o || r[o][1] !== r[o - 1][1] || r[o][2] !== r[o - 1][2]) && s.push(r[o]);
      return s
    }, meetBezierCurveRedBlueSegments: function(t, e, i) {
      var r, s, o, n, a, h, l, c = e.points.length, d = t.points.length, u = [];
      if (4 > c || 4 > d)return[0, 0 / 0, 0 / 0];
      for (s = 0; d - 3 > s; s += 3)for (r = t.points, n = [
        [r[s].usrCoords[1], r[s].usrCoords[2]],
        [r[s + 1].usrCoords[1], r[s + 1].usrCoords[2]],
        [r[s + 2].usrCoords[1], r[s + 2].usrCoords[2]],
        [r[s + 3].usrCoords[1], r[s + 3].usrCoords[2]]
      ], h = this._bezierBbox(n), o = 0; c - 3 > o; o += 3)if (r = e.points, a = [
        [r[o].usrCoords[1], r[o].usrCoords[2]],
        [r[o + 1].usrCoords[1], r[o + 1].usrCoords[2]],
        [r[o + 2].usrCoords[1], r[o + 2].usrCoords[2]],
        [r[o + 3].usrCoords[1], r[o + 3].usrCoords[2]]
      ], l = this._bezierBbox(a), this._bezierOverlap(h, l) && (u = u.concat(this.meetBeziersegmentBeziersegment(n, a)), u.length > i))return u[i][0];
      return u.length > i ? u[i][0] : [0, 0 / 0, 0 / 0]
    }, bezierSegmentEval: function(t, e) {
      var i, r, s, o = 1 - t;
      return r = 0, s = 0, i = o * o * o, r += i * e[0][0], s += i * e[0][1], i = 3 * t * o * o, r += i * e[1][0], s += i * e[1][1], i = 3 * t * t * o, r += i * e[2][0], s += i * e[2][1], i = t * t * t, r += i * e[3][0], s += i * e[3][1], [1, r, s]
    }, bezierArc: function(t, e, i, s, o) {
      var n, a, h, l, c, d, u, p, f, m, b, g, v, y, C, P, _, E = .5 * Math.PI, S = e[1], x = e[2], O = e[0], T = [], w = [];
      for (c = this.distance(e, t), S /= O, x /= O, d = this.rad(t.slice(1), e.slice(1), i.slice(1)), -1 === o && (d = 2 * Math.PI - d), n = t, n[1] /= n[0], n[2] /= n[0], n[0] /= n[0], l = n.slice(0), s ? (T = [S, S + .333 * (n[1] - S), S + .666 * (n[1] - S), n[1]], w = [x, x + .333 * (n[2] - x), x + .666 * (n[2] - x), n[2]]) : (T = [n[1]], w = [n[2]]); d > r.eps;)d > E ? (u = E, d -= E) : (u = d, d = 0), p = Math.cos(o * u), f = Math.sin(o * u), _ = [
        [1, 0, 0],
        [S * (1 - p) + x * f, p, -f],
        [x * (1 - p) - S * f, f, p]
      ], C = r.matVecMult(_, n), l = [C[0] / C[0], C[1] / C[0], C[2] / C[0]], m = n[1] - S, b = n[2] - x, g = l[1] - S, v = l[2] - x, P = Math.sqrt((m + g) * (m + g) + (b + v) * (b + v)), y = Math.abs(v - b) > r.eps ? 8 * ((m + g) * (c / P - .5) / (v - b)) / 3 : 8 * ((b + v) * (c / P - .5) / (m - g)) / 3, a = [1, n[1] - y * b, n[2] + y * m], h = [1, l[1] + y * v, l[2] - y * g], T = T.concat([a[1], h[1], l[1]]), w = w.concat([a[2], h[2], l[2]]), n = l.slice(0);
      return s && (T = T.concat([l[1] + .333 * (S - l[1]), l[1] + .666 * (S - l[1]), S]), w = w.concat([l[2] + .333 * (x - l[2]), l[2] + .666 * (x - l[2]), x])), [T, w]
    }, projectPointToCircle: function(t, s, n) {
      var a, h, l, c, d, u = s.center.coords.usrCoords;
      return o.exists(n) || (n = t.board), o.isPoint(t) ? (a = t.coords.distance(e.COORDS_BY_USER, s.center.coords), h = t.coords.usrCoords) : (a = t.distance(e.COORDS_BY_USER, s.center.coords), h = t.usrCoords), Math.abs(a) < r.eps && (a = r.eps), d = s.Radius() / a, l = u[1] + d * (h[1] - u[1]), c = u[2] + d * (h[2] - u[2]), new i(e.COORDS_BY_USER, [l, c], n)
    }, projectPointToLine: function(t, s, n) {
      var a = [0, s.stdform[1], s.stdform[2]];
      return o.exists(n) || (n = t.board), a = r.crossProduct(a, t.coords.usrCoords), new i(e.COORDS_BY_USER, r.crossProduct(a, s.stdform), n)
    }, projectCoordsToSegment: function(t, e, i) {
      var s, o, n = [i[1] - e[1], i[2] - e[2]], a = [t[1] - e[1], t[2] - e[2]];
      return Math.abs(n[0]) < r.eps && Math.abs(n[1]) < r.eps ? [e, 0] : (s = r.innerProduct(a, n), o = r.innerProduct(n, n), s /= o, [
        [1, s * n[0] + e[1], s * n[1] + e[2]],
        s
      ])
    }, projectCoordsToBeziersegment: function(e, i, r) {
      var s, o = function(t) {
        var s = [1, i.X(r + t), i.Y(r + t)];
        return s[1] -= e[1], s[2] -= e[2], s[1] * s[1] + s[2] * s[2]
      };
      return s = t.Math.Numerics.fminbr(o, [0, 1]), [
        [1, i.X(s + r), i.Y(s + r)],
        s
      ]
    }, projectPointToCurve: function(t, e, i) {
      o.exists(i) || (i = t.board);
      var r = t.X(), s = t.Y(), n = t.position || 0, a = this.projectCoordsToCurve(r, s, n, e, i);
      return t.position = a[1], a[0]
    }, projectCoordsToCurve: function(t, r, n, a, h) {
      var l, c, d, u, p, f, m, b, g, v, y, C, P, _, E, S, x, O, T, w = Number.POSITIVE_INFINITY;
      if (o.exists(h) || (h = a.board), "plot" === a.visProp.curvetype) {
        if (n = 0, p = w, l = 0 === a.numberPoints ? [0, 1, 1] : [a.Z(0), a.X(0), a.Y(0)], a.numberPoints > 1)for (b = [1, t, r], 3 === a.bezierDegree ? u = 0 : y = [a.Z(0), a.X(0), a.Y(0)], d = 0; a.numberPoints - 1 > d; d++)3 === a.bezierDegree ? P = this.projectCoordsToBeziersegment(b, a, u) : (C = [a.Z(d + 1), a.X(d + 1), a.Y(d + 1)], P = this.projectCoordsToSegment(b, y, C)), m = P[1], g = P[0], m >= 0 && 1 >= m ? (f = this.distance(g, b), v = d + m) : 0 > m ? (g = y, f = this.distance(y, b), v = d) : m > 1 && d === a.numberPoints - 2 && (g = C, f = this.distance(g, b), v = a.numberPoints - 1), p > f && (p = f, n = v, l = g), 3 === a.bezierDegree ? (u++, d += 2) : y = C;
        c = new i(e.COORDS_BY_USER, l, h)
      } else {
        for (_ = function(e) {
          var i = t - a.X(e), s = r - a.Y(e);
          return i * i + s * s
        }, x = _(n), T = 50, O = (a.maxX() - a.minX()) / T, E = a.minX(), d = 0; T > d; d++)S = _(E), x > S && (n = E, x = S), E += O;
        n = s.fminbr(_, [n - O, n + O]), a.minX() > n && (n = a.maxX() + n - a.minX()), n > a.maxX() && (n = a.minX() + n - a.maxX()), c = new i(e.COORDS_BY_USER, [a.X(n), a.Y(n)], h)
      }
      return[a.updateTransform(c), n]
    }, projectCoordsToPolygon: function(e, i) {
      var r, s, o, n, a = i.vertices.length, h = 1 / 0;
      for (r = 0; a > r; r++)o = t.Math.Geometry.projectCoordsToSegment(e, i.vertices[r].coords.usrCoords, i.vertices[(r + 1) % a].coords.usrCoords), s = t.Math.Geometry.distance(o[0], e, 3), o[1] >= 0 && 1 >= o[1] && h > s && (n = o[0].slice(0), h = s);
      return n
    }, projectPointToTurtle: function(t, r, s) {
      var n, a, h, l, c, d, u, p, f = 0, m = 0, b = Number.POSITIVE_INFINITY, g = r.objects.length;
      for (o.exists(s) || (s = t.board), c = 0; g > c; c++)u = r.objects[c], u.elementClass === e.OBJECT_CLASS_CURVE && (n = this.projectPointToCurve(t, u), d = this.distance(n.usrCoords, t.coords.usrCoords), b > d && (h = n.usrCoords[1], l = n.usrCoords[2], a = t.position, b = d, p = u, m = f), f += u.numberPoints);
      return n = new i(e.COORDS_BY_USER, [h, l], s), t.position = a + m, p.updateTransform(n)
    }, projectPointToPoint: function(t, e) {return e.coords}, projectPointToBoard: function(t, e) {
      var i, s, o, n = e || t.board, a = [
        [1, 1, 0, 0, 3, 0, 1],
        [-1, 2, 1, 0, 1, 2, 1],
        [-1, 1, 2, 2, 1, 2, 3],
        [1, 2, 3, 0, 3, 2, 3]
      ], h = t.coords || t, l = n.getBoundingBox();
      for (i = 0; 4 > i; i++)o = a[i], o[0] * h.usrCoords[o[1]] < o[0] * l[o[2]] && (s = r.crossProduct([1, l[o[3]], l[o[4]]], [1, l[o[5]], l[o[6]]]), s[3] = 0, s = r.normalize(s), h = this.projectPointToLine({coords: h}, {stdform: s}, n));
      return h
    }, distPointLine: function(t, e) {
      var i, s = e[1], o = e[2], n = e[0];
      return Math.abs(s) + Math.abs(o) < r.eps ? Number.POSITIVE_INFINITY : (i = s * t[1] + o * t[2] + n, s *= s, o *= o, Math.abs(i) / Math.sqrt(s + o))
    }, reuleauxPolygon: function(t, e) {
      var i, s = 2 * Math.PI, o = s / e, n = (e - 1) / 2, a = 0, h = function(h, l) {
        return function(c, d) {
          var u = (c % s + s) % s, p = Math.floor(u / o) % e;
          return d || (a = t[0].Dist(t[n]), i = r.Geometry.rad([t[0].X() + 1, t[0].Y()], t[0], t[n % e])), isNaN(p) ? p : (u = .5 * u + .5 * p * o + i, t[p][h]() + a * Math[l](u))
        }
      };
      return[h("X", "cos"), h("Y", "sin"), 0, s]
    }}), r.Geometry
  }), define("math/statistics", ["jxg", "base/constants", "math/math", "utils/type"], function(t, e, i, r) {
    return i.Statistics = {sum: function(t) {
      var e, i = t.length, r = 0;
      for (e = 0; i > e; e++)r += t[e];
      return r
    }, prod: function(t) {
      var e, i = t.length, r = 1;
      for (e = 0; i > e; e++)r *= t[e];
      return r
    }, mean: function(t) {return t.length > 0 ? this.sum(t) / t.length : 0}, median: function(t) {
      var e, i;
      return t.length > 0 ? (e = t.slice(0), e.sort(function(t, e) {return t - e}), i = e.length, 1 === i % 2 ? e[parseInt(.5 * i, 10)] : .5 * (e[.5 * i - 1] + e[.5 * i])) : 0
    }, variance: function(t) {
      var e, i, r, s = t.length;
      if (s > 1) {
        for (e = this.mean(t), i = 0, r = 0; s > r; r++)i += (t[r] - e) * (t[r] - e);
        return i / (t.length - 1)
      }
      return 0
    }, sd: function(t) {return Math.sqrt(this.variance(t))}, weightedMean: function(t, e) {
      if (t.length !== e.length)throw Error("JSXGraph error (Math.Statistics.weightedMean): Array dimension mismatch.");
      return t.length > 0 ? this.mean(this.multiply(t, e)) : 0
    }, max: function(t) {return Math.max.apply(this, t)}, min: function(t) {return Math.min.apply(this, t)}, range: function(t) {return[this.min(t), this.max(t)]}, abs: function(t) {
      var e, i, s;
      if (r.isArray(t))for (i = t.length, s = [], e = 0; i > e; e++)s[e] = Math.abs(t[e]); else s = Math.abs(t);
      return s
    }, add: function(t, e) {
      var i, s, o = [];
      if (t = r.evalSlider(t), e = r.evalSlider(e), r.isArray(t) && r.isNumber(e))for (s = t.length, i = 0; s > i; i++)o[i] = t[i] + e; else if (r.isNumber(t) && r.isArray(e))for (s = e.length, i = 0; s > i; i++)o[i] = t + e[i]; else if (r.isArray(t) && r.isArray(e))for (s = Math.min(t.length, e.length), i = 0; s > i; i++)o[i] = t[i] + e[i]; else o = t + e;
      return o
    }, div: function(t, e) {
      var i, s, o = [];
      if (t = r.evalSlider(t), e = r.evalSlider(e), r.isArray(t) && r.isNumber(e))for (s = t.length, i = 0; s > i; i++)o[i] = t[i] / e; else if (r.isNumber(t) && r.isArray(e))for (s = e.length, i = 0; s > i; i++)o[i] = t / e[i]; else if (r.isArray(t) && r.isArray(e))for (s = Math.min(t.length, e.length), i = 0; s > i; i++)o[i] = t[i] / e[i]; else o = t / e;
      return o
    }, divide: t.shortcut(i.Statistics, "div"), mod: function(t, e, s) {
      var o, n, a = [], h = function(t, e) {return t % e};
      if (s = r.def(s, !1), s && (h = i.mod), t = r.evalSlider(t), e = r.evalSlider(e), r.isArray(t) && r.isNumber(e))for (n = t.length, o = 0; n > o; o++)a[o] = h(t[o], e); else if (r.isNumber(t) && r.isArray(e))for (n = e.length, o = 0; n > o; o++)a[o] = h(t, e[o]); else if (r.isArray(t) && r.isArray(e))for (n = Math.min(t.length, e.length), o = 0; n > o; o++)a[o] = h(t[o], e[o]); else a = h(t, e);
      return a
    }, multiply: function(t, e) {
      var i, s, o = [];
      if (t = r.evalSlider(t), e = r.evalSlider(e), r.isArray(t) && r.isNumber(e))for (s = t.length, i = 0; s > i; i++)o[i] = t[i] * e; else if (r.isNumber(t) && r.isArray(e))for (s = e.length, i = 0; s > i; i++)o[i] = t * e[i]; else if (r.isArray(t) && r.isArray(e))for (s = Math.min(t.length, e.length), i = 0; s > i; i++)o[i] = t[i] * e[i]; else o = t * e;
      return o
    }, subtract: function(t, e) {
      var i, s, o = [];
      if (t = r.evalSlider(t), e = r.evalSlider(e), r.isArray(t) && r.isNumber(e))for (s = t.length, i = 0; s > i; i++)o[i] = t[i] - e; else if (r.isNumber(t) && r.isArray(e))for (s = e.length, i = 0; s > i; i++)o[i] = t - e[i]; else if (r.isArray(t) && r.isArray(e))for (s = Math.min(t.length, e.length), i = 0; s > i; i++)o[i] = t[i] - e[i]; else o = t - e;
      return o
    }, TheilSenRegression: function(t) {
      var e, r, s = [], o = [], n = [];
      for (e = 0; t.length > e; e++) {
        for (o.length = 0, r = 0; t.length > r; r++)Math.abs(t[r].usrCoords[1] - t[e].usrCoords[1]) > i.eps && (o[r] = (t[r].usrCoords[2] - t[e].usrCoords[2]) / (t[r].usrCoords[1] - t[e].usrCoords[1]));
        s[e] = this.median(o), n.push(t[e].usrCoords[2] - s[e] * t[e].usrCoords[1])
      }
      return[this.median(n), this.median(s), -1]
    }}, i.Statistics
  }), define("parser/geonext", ["jxg", "base/constants", "utils/type"], function(t, e, i) {
    return t.GeonextParser = {replacePow: function(t) {
      var e, i, r, s, o, n, a, h, l, c, d;
      for (t = t.replace(/(\s*)\^(\s*)/g, "^"), l = t.indexOf("^"); l >= 0;) {
        if (h = t.slice(0, l), c = t.slice(l + 1), ")" === h.charAt(h.length - 1)) {
          for (e = 1, i = h.length - 2; i >= 0 && e > 0;)r = h.charAt(i), ")" === r ? e++ : "(" === r && (e -= 1), i -= 1;
          if (0 !== e)throw Error("JSXGraph: Missing '(' in expression");
          for (s = "", n = h.substring(0, i + 1), a = i; a >= 0 && n.substr(a, 1).match(/([\w\.]+)/);)s = RegExp.$1 + s, a -= 1;
          s += h.substring(i + 1, h.length), s = s.replace(/([\(\)\+\*\%\^\-\/\]\[])/g, "\\$1")
        } else s = "[\\w\\.]+";
        if (c.match(/^([\w\.]*\()/)) {
          for (e = 1, i = RegExp.$1.length; c.length > i && e > 0;)r = c.charAt(i), ")" === r ? e -= 1 : "(" === r && (e += 1), i += 1;
          if (0 !== e)throw Error("JSXGraph: Missing ')' in expression");
          o = c.substring(0, i), o = o.replace(/([\(\)\+\*\%\^\-\/\[\]])/g, "\\$1")
        } else o = "[\\w\\.]+";
        d = RegExp("(" + s + ")\\^(" + o + ")"), t = t.replace(d, "pow($1,$2)"), l = t.indexOf("^")
      }
      return t
    }, replaceIf: function(t) {
      var e, i, r, s, o, n, a, h, l, c = "", d = null, u = null, p = null;
      if (r = t.indexOf("If("), 0 > r)return t;
      for (t = t.replace(/""/g, "0"); r >= 0;) {
        for (e = t.slice(0, r), i = t.slice(r + 3), o = 1, s = 0, n = -1, a = -1; i.length > s && o > 0;)h = i.charAt(s), ")" === h ? o -= 1 : "(" === h ? o += 1 : "," === h && 1 === o && (0 > n ? n = s : a = s), s += 1;
        if (l = i.slice(0, s - 1), i = i.slice(s), 0 > n)return"";
        if (0 > a)return"";
        d = l.slice(0, n), u = l.slice(n + 1, a), p = l.slice(a + 1), d = this.replaceIf(d), u = this.replaceIf(u), p = this.replaceIf(p), c += e + "((" + d + ")?" + "(" + u + "):(" + p + "))", t = i, d = null, u = null, r = t.indexOf("If(")
      }
      return c += i
    }, replaceNameById: function(t, e, i) {
      var r, s, o, n, a = 0, h = ["X", "Y", "L", "V"], l = function(t) {return i ? "$('" + t + "')" : t};
      for (n = 0; h.length > n; n++)for (a = t.indexOf(h[n] + "("); a >= 0;)a >= 0 && (r = t.indexOf(")", a + 2), r >= 0 && (s = t.slice(a + 2, r), s = s.replace(/\\(['"])?/g, "$1"), o = e.elementsByName[s], o && (t = t.slice(0, a + 2) + (i ? "$('" : "") + l(o.id) + t.slice(r)))), r = t.indexOf(")", a + 2), a = t.indexOf(h[n] + "(", r);
      for (a = t.indexOf("Dist("); a >= 0;)a >= 0 && (r = t.indexOf(",", a + 5), r >= 0 && (s = t.slice(a + 5, r), s = s.replace(/\\(['"])?/g, "$1"), o = e.elementsByName[s], o && (t = t.slice(0, a + 5) + l(o.id) + t.slice(r)))), r = t.indexOf(",", a + 5), a = t.indexOf(",", r), r = t.indexOf(")", a + 1), r >= 0 && (s = t.slice(a + 1, r), s = s.replace(/\\(['"])?/g, "$1"), o = e.elementsByName[s], o && (t = t.slice(0, a + 1) + l(o.id) + t.slice(r))), r = t.indexOf(")", a + 1), a = t.indexOf("Dist(", r);
      for (h = ["Deg", "Rad"], n = 0; h.length > n; n++)for (a = t.indexOf(h[n] + "("); a >= 0;)a >= 0 && (r = t.indexOf(",", a + 4), r >= 0 && (s = t.slice(a + 4, r), s = s.replace(/\\(['"])?/g, "$1"), o = e.elementsByName[s], o && (t = t.slice(0, a + 4) + l(o.id) + t.slice(r)))), r = t.indexOf(",", a + 4), a = t.indexOf(",", r), r = t.indexOf(",", a + 1), r >= 0 && (s = t.slice(a + 1, r), s = s.replace(/\\(['"])?/g, "$1"), o = e.elementsByName[s], o && (t = t.slice(0, a + 1) + l(o.id) + t.slice(r))), r = t.indexOf(",", a + 1), a = t.indexOf(",", r), r = t.indexOf(")", a + 1), r >= 0 && (s = t.slice(a + 1, r), s = s.replace(/\\(['"])?/g, "$1"), o = e.elementsByName[s], o && (t = t.slice(0, a + 1) + l(o.id) + t.slice(r))), r = t.indexOf(")", a + 1), a = t.indexOf(h[n] + "(", r);
      return t
    }, replaceIdByObj: function(t) {
      var e = /(X|Y|L)\(([\w_]+)\)/g;
      return t = t.replace(e, "$('$2').$1()"), e = /(V)\(([\w_]+)\)/g, t = t.replace(e, "$('$2').Value()"), e = /(Dist)\(([\w_]+),([\w_]+)\)/g, t = t.replace(e, "dist($('$2'), $('$3'))"), e = /(Deg)\(([\w_]+),([ \w\[\w_]+),([\w_]+)\)/g, t = t.replace(e, "deg($('$2'),$('$3'),$('$4'))"), e = /Rad\(([\w_]+),([\w_]+),([\w_]+)\)/g, t = t.replace(e, "rad($('$1'),$('$2'),$('$3'))"), e = /N\((.+)\)/g, t = t.replace(e, "($1)")
    }, geonext2JS: function(t, e) {
      var i, r, s, o = ["Abs", "ACos", "ASin", "ATan", "Ceil", "Cos", "Exp", "Factorial", "Floor", "Log", "Max", "Min", "Random", "Round", "Sin", "Sqrt", "Tan", "Trunc"], n = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "factorial", "floor", "log", "max", "min", "random", "round", "sin", "sqrt", "tan", "ceil"];
      for (t = t.replace(/&lt;/g, "<"), t = t.replace(/&gt;/g, ">"), t = t.replace(/&amp;/g, "&"), r = t, r = this.replaceNameById(r, e), r = this.replaceIf(r), r = this.replacePow(r), r = this.replaceIdByObj(r), s = 0; o.length > s; s++)i = RegExp(["(\\W|^)(", o[s], ")"].join(""), "ig"), r = r.replace(i, ["$1", n[s]].join(""));
      return r = r.replace(/True/g, "true"), r = r.replace(/False/g, "false"), r = r.replace(/fasle/g, "false"), r = r.replace(/Pi/g, "PI"), r = r.replace(/"/g, "'")
    }, findDependencies: function(t, r, s) {
      var o, n, a, h;
      i.exists(s) || (s = t.board), o = s.elementsByName;
      for (n in o)o.hasOwnProperty(n) && n !== t.name && (o[n].elementClass === e.OBJECT_CLASS_TEXT ? o[n].visProp.islabel || (h = n.replace(/\[/g, "\\["), h = h.replace(/\]/g, "\\]"), a = RegExp("\\(([\\w\\[\\]'_ ]+,)*(" + h + ")(,[\\w\\[\\]'_ ]+)*\\)", "g"), r.search(a) >= 0 && o[n].addChild(t)) : (h = n.replace(/\[/g, "\\["), h = h.replace(/\]/g, "\\]"), a = RegExp("\\(([\\w\\[\\]'_ ]+,)*(" + h + ")(,[\\w\\[\\]'_ ]+)*\\)", "g"), r.search(a) >= 0 && o[n].addChild(t)))
    }, gxt2jc: function(t, e) {
      var i;
      return t = t.replace(/&lt;/g, "<"), t = t.replace(/&gt;/g, ">"), t = t.replace(/&amp;/g, "&"), i = t, i = this.replaceNameById(i, e, !0), i = i.replace(/True/g, "true"), i = i.replace(/False/g, "false"), i = i.replace(/fasle/g, "false")
    }}, t.GeonextParser
  }), define("base/element", ["jxg", "base/constants", "base/coords", "math/math", "math/statistics", "options", "parser/geonext", "utils/event", "utils/color", "utils/type"], function(t, e, i, r, s, o, n, a, h, l) {
    return t.GeometryElement = function(t, i, r, s) {
      var o, n, h;
      if (this.needsUpdate = !0, this.isDraggable = !1, this.isReal = !0, this.childElements = {}, this.hasLabel = !1, this.highlighted = !1, this.notExistingParents = {}, this.traces = {}, this.numTraces = 0, this.transformations = [], this.baseElement = null, this.descendants = {}, this.ancestors = {}, this.parents = [], this.symbolic = {}, this.rendNode = null, this.elType = "", this.dump = !0, this.subs = {}, this._pos = -1, this.stdform = [1, 0, 0, 0, 1, 1, 0, 0], this.methodMap = {setLabel: "setLabel", label: "label", setName: "setName", getName: "getName", addTransform: "addTransform", setProperty: "setAttribute", setAttribute: "setAttribute", addChild: "addChild", animate: "animate", on: "on", off: "off", trigger: "trigger"}, this.quadraticform = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ], this.visProp = {}, a.eventify(this), this.mouseover = !1, this.lastDragTime = new Date, arguments.length > 0) {
        this.board = t, this.type = r, this._org_type = r, this.elementClass = s || e.OBJECT_CLASS_OTHER, this.id = i.id, o = i.name, l.exists(o) || (o = this.board.generateName(this)), "" !== o && (this.board.elementsByName[o] = this), this.name = o, this.needsRegularUpdate = i.needsregularupdate, l.clearVisPropOld(this), h = this.resolveShortcuts(i);
        for (n in h)h.hasOwnProperty(n) && this._set(n, h[n]);
        this.visProp.draft = h.draft && h.draft.draft, this.visProp.gradientangle = "270", this.visProp.gradientsecondopacity = this.visProp.fillopacity, this.visProp.gradientpositionx = .5, this.visProp.gradientpositiony = .5
      }
    }, t.extend(t.GeometryElement.prototype, {addChild: function(t) {
      var e, i;
      this.childElements[t.id] = t, this.addDescendants(t), t.ancestors[this.id] = this;
      for (e in this.descendants)if (this.descendants.hasOwnProperty(e)) {
        this.descendants[e].ancestors[this.id] = this;
        for (i in this.ancestors)this.ancestors.hasOwnProperty(i) && (this.descendants[e].ancestors[this.ancestors[i].id] = this.ancestors[i])
      }
      for (e in this.ancestors)if (this.ancestors.hasOwnProperty(e))for (i in this.descendants)this.descendants.hasOwnProperty(i) && (this.ancestors[e].descendants[this.descendants[i].id] = this.descendants[i]);
      return this
    }, addDescendants: function(t) {
      var e;
      this.descendants[t.id] = t;
      for (e in t.childElements)t.childElements.hasOwnProperty(e) && this.addDescendants(t.childElements[e]);
      return this
    }, addParents: function(t) {
      var e, i, r;
      for (r = l.isArray(t) ? t : arguments, i = r.length, e = 0; i > e; ++e)l.isId(r[e]) ? this.parents.push(r[e]) : l.exists(r[e].id) && this.parents.push(r[e].id);
      this.parents = l.uniqueArray(this.parents)
    }, removeChild: function(t) {return delete this.childElements[t.id], this.removeDescendants(t), delete t.ancestors[this.id], this}, removeDescendants: function(t) {
      var e;
      delete this.descendants[t.id];
      for (e in t.childElements)t.childElements.hasOwnProperty(e) && this.removeDescendants(t.childElements[e]);
      return this
    }, countChildren: function() {
      var t, e, i = 0;
      e = this.childElements;
      for (t in e)e.hasOwnProperty(t) && 0 > t.indexOf("Label") && i++;
      return i
    }, getName: function() {return this.name}, addTransform: function() {return this}, draggable: function() {return this.isDraggable && !this.visProp.fixed && !this.visProp.frozen && this.type !== e.OBJECT_TYPE_GLIDER}, setPosition: function(i, r) {
      var s, o, n, a, h = [];
      if (!t.exists(this.parents))return this;
      for (n = this.parents.length, o = 0; n > o; ++o)if (s = this.board.select(this.parents[o]), l.isPoint(s)) {
        if (!s.draggable())return this;
        h.push(s)
      }
      for (3 === r.length && (r = r.slice(1)), a = this.board.create("transform", r, {type: "translate"}), n = h.length, n > 0 ? a.applyOnce(h) : this.transformations.length > 0 && this.transformations[this.transformations.length - 1].isNumericMatrix ? this.transformations[this.transformations.length - 1].melt(a) : this.addTransform(a), o = 0; n > o; ++o)h[o].type === e.OBJECT_TYPE_GLIDER && h[o].updateGlider();
      return this
    }, setPositionDirectly: function(t, r, o) {
      var n = new i(t, r, this.board, !1), a = new i(t, o, this.board, !1), h = s.subtract(n.usrCoords, a.usrCoords);
      return this.setPosition(e.COORDS_BY_USER, h), this
    }, generatePolynomial: function() {return[]}, animate: function(t, e, i) {
      i = i || {};
      var r, s, o, n = this.board.attr.animationdelay, a = Math.ceil(e / n), c = this, d = function(t, e, i) {
        var r, s, n, l, d;
        for (r = h.rgb2hsv(t), s = h.rgb2hsv(e), n = (s[0] - r[0]) / a, l = (s[1] - r[1]) / a, d = (s[2] - r[2]) / a, c.animationData[i] = [], o = 0; a > o; o++)c.animationData[i][a - o - 1] = h.hsv2rgb(r[0] + (o + 1) * n, r[1] + (o + 1) * l, r[2] + (o + 1) * d)
      }, u = function(t, e, i, r) {
        var s, n;
        if (t = parseFloat(t), e = parseFloat(e), !isNaN(t) && !isNaN(e))for (n = (e - t) / a, c.animationData[i] = [], o = 0; a > o; o++)s = t + (o + 1) * n, c.animationData[i][a - o - 1] = r ? Math.floor(s) : s
      };
      this.animationData = {};
      for (r in t)if (t.hasOwnProperty(r))switch (s = r.toLowerCase()) {
        case"strokecolor":
        case"fillcolor":
          d(this.visProp[s], t[r], s);
          break;
        case"size":
          if (!l.isPoint(this))break;
          u(this.visProp[s], t[r], s, !0);
          break;
        case"strokeopacity":
        case"strokewidth":
        case"fillopacity":
          u(this.visProp[s], t[r], s, !1)
      }
      return this.animationCallback = i.callback, this.board.addAnimation(this), this
    }, update: function() {return this.visProp.trace && this.cloneToBackground(), this}, updateRenderer: function() {return this}, hideElement: function() {return this.visProp.visible = !1, this.board.renderer.hide(this), l.exists(this.label) && this.hasLabel && (this.label.hiddenByParent = !0, this.label.visProp.visible && this.label.hideElement()), this}, showElement: function() {return this.visProp.visible = !0, this.board.renderer.show(this), l.exists(this.label) && this.hasLabel && this.label.hiddenByParent && (this.label.hiddenByParent = !1, this.label.visProp.visible || this.label.showElement().updateRenderer()), this}, _set: function(t, e) {t = t.toLocaleLowerCase(), this.visProp.hasOwnProperty(t) && t.indexOf("color") >= 0 && l.isString(e) && 9 === e.length && "#" === e.charAt(0) ? (e = h.rgba2rgbo(e), this.visProp[t] = e[0], this.visProp[t.replace("color", "opacity")] = e[1]) : this.visProp[t] = e}, resolveShortcuts: function(t) {
      var e, i;
      for (e in o.shortcuts)if (o.shortcuts.hasOwnProperty(e) && l.exists(t[e]))for (i = 0; o.shortcuts[e].length > i; i++)l.exists(t[o.shortcuts[e][i]]) || (t[o.shortcuts[e][i]] = t[e]);
      return t
    }, setLabel: function(t) {this.hasLabel || this.setAttribute({withlabel: !0}), this.setLabelText(t)}, setLabelText: function(t) {return l.exists(this.label) && (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), this.label.setText(t)), this}, setName: function(t) {t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), "slider" !== this.elType && this.setLabelText(t), this.setAttribute({name: t})}, setProperty: t.shortcut(t.GeometryElement.prototype, "setAttribute"), setAttribute: function() {
      var i, r, s, o, n, a, c, d = {}, u = function(t) {return function() {return t}};
      for (i = 0; arguments.length > i; i++)o = arguments[i], l.isString(o) ? (a = o.split(":"), d[l.trim(a[0])] = l.trim(a[1])) : l.isArray(o) ? d[o[0]] = o[1] : t.extend(d, o);
      d = this.resolveShortcuts(d);
      for (i in d)if (d.hasOwnProperty(i)) {
        switch (r = i.replace(/\s+/g, "").toLowerCase(), s = d[i], c = this.visProp[r], r) {
          case"name":
            c = this.name, delete this.board.elementsByName[this.name], this.name = s, this.board.elementsByName[this.name] = this;
            break;
          case"needsregularupdate":
            this.needsRegularUpdate = !("false" === s || s === !1), this.board.renderer.setBuffering(this, this.needsRegularUpdate ? "auto" : "static");
            break;
          case"labelcolor":
            s = h.rgba2rgbo(s), n = s[1], s = s[0], 0 === n && l.exists(this.label) && this.hasLabel && this.label.hideElement(), l.exists(this.label) && this.hasLabel && (this.label.visProp.strokecolor = s, this.board.renderer.setObjectStrokeColor(this.label, s, n)), this.elementClass === e.OBJECT_CLASS_TEXT && (this.visProp.strokecolor = s, this.visProp.strokeopacity = n, this.board.renderer.setObjectStrokeColor(this, this.visProp.strokecolor, this.visProp.strokeopacity));
            break;
          case"infoboxtext":
            this.infoboxText = "string" == typeof s ? s : !1;
            break;
          case"visible":
            "false" === s || s === !1 ? (this.visProp.visible = !1, this.hideElement()) : ("true" === s || s === !0) && (this.visProp.visible = !0, this.showElement());
            break;
          case"face":
            l.isPoint(this) && (this.visProp.face = s, this.board.renderer.changePointStyle(this));
            break;
          case"trace":
            "false" === s || s === !1 ? (this.clearTrace(), this.visProp.trace = !1) : this.visProp.trace = !0;
            break;
          case"gradient":
            this.visProp.gradient = s, this.board.renderer.setGradient(this);
            break;
          case"gradientsecondcolor":
            s = h.rgba2rgbo(s), this.visProp.gradientsecondcolor = s[0], this.visProp.gradientsecondopacity = s[1], this.board.renderer.updateGradient(this);
            break;
          case"gradientsecondopacity":
            this.visProp.gradientsecondopacity = s, this.board.renderer.updateGradient(this);
            break;
          case"withlabel":
            this.visProp.withlabel = s, s ? this.label ? this.visProp.visible && this.label.showElement() : (this.createLabel(), this.visProp.visible || this.label.hideElement()) : this.label && this.hasLabel && this.label.hideElement(), this.hasLabel = s;
            break;
          case"radius":
            (this.type === e.OBJECT_TYPE_ANGLE || this.type === e.OBJECT_TYPE_SECTOR) && this.setRadius(s);
            break;
          case"rotate":
            (this.elementClass === e.OBJECT_CLASS_TEXT && "internal" === this.visProp.display || this.type === e.OBJECT_TYPE_IMAGE) && this.addRotation(s);
            break;
          case"ticksdistance":
            this.type === e.OBJECT_TYPE_TICKS && "number" == typeof s && (this.ticksFunction = u(s));
            break;
          case"generatelabelvalue":
            this.type === e.OBJECT_TYPE_TICKS && "function" == typeof s && (this.generateLabelValue = s);
            break;
          case"onpolygon":
            this.type === e.OBJECT_TYPE_GLIDER && (this.onPolygon = !!s);
            break;
          default:
            l.exists(this.visProp[r]) && (!t.Validator[r] || t.Validator[r] && t.Validator[r](s) || t.Validator[r] && l.isFunction(s) && t.Validator[r](s())) && (s = s.toLowerCase && "false" === s.toLowerCase() ? !1 : s, this._set(r, s))
        }
        this.triggerEventHandlers(["attribute:" + r], [c, s, this])
      }
      return this.triggerEventHandlers(["attribute"], [d, this]), this.visProp.needsregularupdate ? this.board.update(this) : this.board.fullUpdate(), this
    }, getProperty: t.shortcut(t.GeometryElement.prototype, "getAttribute"), getAttribute: function(t) {
      var e;
      switch (t = t.toLowerCase()) {
        case"needsregularupdate":
          e = this.needsRegularUpdate;
          break;
        case"labelcolor":
          e = this.label.visProp.strokecolor;
          break;
        case"infoboxtext":
          e = this.infoboxText;
          break;
        case"withlabel":
          e = this.hasLabel;
          break;
        default:
          e = this.visProp[t]
      }
      return e
    }, setDash: function(t) {return this.setAttribute({dash: t}), this}, prepareUpdate: function() {return this.needsUpdate = !0, this}, remove: function() {return this.board.renderer.remove(this.board.renderer.getElementById(this.id)), this.hasLabel && this.board.renderer.remove(this.board.renderer.getElementById(this.label.id)), this}, getTextAnchor: function() {return new i(e.COORDS_BY_USER, [0, 0], this.board)}, getLabelAnchor: function() {return new i(e.COORDS_BY_USER, [0, 0], this.board)}, setArrow: function(t, e) {return this.visProp.firstarrow = t, this.visProp.lastarrow = e, this.prepareUpdate().update(), this}, createGradient: function() {("linear" === this.visProp.gradient || "radial" === this.visProp.gradient) && this.board.renderer.setGradient(this)}, createLabel: function() {
      var e, i = this;
      return t.elements.text ? (e = l.deepCopy(this.visProp.label, null), e.id = this.id + "Label", e.isLabel = !0, e.visible = this.visProp.visible, e.anchor = this, e.priv = this.visProp.priv, this.visProp.withlabel && (this.label = t.elements.text(this.board, [0, 0, function() {return"function" == typeof i.name ? i.name() : i.name}], e), this.label.needsUpdate = !0, this.label.update(), this.label.dump = !1, this.visProp.visible || (this.label.hiddenByParent = !0, this.label.visProp.visible = !1), this.hasLabel = !0)) : t.debug("JSXGraph: Can't create label: text element is not available. Make sure you include base/text"), this
    }, highlight: function(t) {return t = l.def(t, !1), !this.visProp.highlight || this.highlighted && !t || (this.highlighted = !0, this.board.highlightedObjects[this.id] = this, this.board.renderer.highlight(this)), this}, noHighlight: function() {return this.highlighted && (this.highlighted = !1, delete this.board.highlightedObjects[this.id], this.board.renderer.noHighlight(this)), this}, clearTrace: function() {
      var t;
      for (t in this.traces)this.traces.hasOwnProperty(t) && this.board.renderer.remove(this.traces[t]);
      return this.numTraces = 0, this
    }, cloneToBackground: function() {return this}, bounds: function() {return[0, 0, 0, 0]}, normalize: function() {return this.stdform = r.normalize(this.stdform), this}, toJSON: function() {
      var t, e, i = ['{"name":', this.name];
      i.push(', "id":' + this.id), t = [];
      for (e in this.visProp)this.visProp.hasOwnProperty(e) && l.exists(this.visProp[e]) && t.push('"' + e + '":' + this.visProp[e]);
      return i.push(', "visProp":{' + ("" + t) + "}"), i.push("}"), i.join("")
    }, addRotation: function(t) {
      var i, r, s, o, n, a = this;
      return(this.elementClass === e.OBJECT_CLASS_TEXT && "internal" === this.visProp.display || this.type === e.OBJECT_TYPE_IMAGE) && 0 !== t && (i = this.board.create("transform", [function() {return-a.X()}, function() {return-a.Y()}], {type: "translate"}), r = this.board.create("transform", [function() {return a.X()}, function() {return a.Y()}], {type: "translate"}), s = this.board.create("transform", [function() {return a.board.unitX / a.board.unitY}, function() {return 1}], {type: "scale"}), o = this.board.create("transform", [function() {return a.board.unitY / a.board.unitX}, function() {return 1}], {type: "scale"}), n = this.board.create("transform", [t * Math.PI / 180], {type: "rotate"}), i.bindTo(this), s.bindTo(this), n.bindTo(this), o.bindTo(this), r.bindTo(this)), this
    }, highlightStrokeColor: function(t) {return this.setAttribute({highlightStrokeColor: t}), this}, strokeColor: function(t) {return this.setAttribute({strokeColor: t}), this}, strokeWidth: function(t) {return this.setAttribute({strokeWidth: t}), this}, fillColor: function(t) {return this.setAttribute({fillColor: t}), this}, highlightFillColor: function(t) {return this.setAttribute({highlightFillColor: t}), this}, labelColor: function(t) {return this.setAttribute({labelColor: t}), this}, dash: function(t) {return this.setAttribute({dash: t}), this}, visible: function(t) {return this.setAttribute({visible: t}), this}, shadow: function(t) {return this.setAttribute({shadow: t}), this}, getType: function() {return this.elType}, getParents: function() {return l.isArray(this.parents) ? this.parents : []}, snapToGrid: function() {return this}, snapToPoints: function() {return this}, getAttributes: function() {
      var t, e = l.deepCopy(this.visProp), i = ["attractors", "snatchdistance", "traceattributes", "frozen", "shadow", "gradientangle", "gradientsecondopacity", "gradientpositionx", "gradientpositiony", "needsregularupdate", "zoom", "layer", "offset"];
      for (e.id = this.id, e.name = this.name, t = 0; i.length > t; t++)delete e[i[t]];
      return e
    }, hasPoint: function() {return!1}, handleSnapToGrid: function(i) {
      var r, s, o, n, a = !1, h = this.visProp.snapsizex, l = this.visProp.snapsizey;
      return t.exists(this.coords) ? (a = this.visProp.snaptogrid || i === !0, a && (r = this.coords.usrCoords[1], s = this.coords.usrCoords[2], 0 >= h && this.board.defaultAxes && this.board.defaultAxes.x.defaultTicks && (o = this.board.defaultAxes.x.defaultTicks, h = o.ticksDelta * (o.visProp.minorticks + 1)), 0 >= l && this.board.defaultAxes && this.board.defaultAxes.y.defaultTicks && (o = this.board.defaultAxes.y.defaultTicks, l = o.ticksDelta * (o.visProp.minorticks + 1)), h > 0 && l > 0 && (n = this.board.getBoundingBox(), r = Math.round(r / h) * h, s = Math.round(s / l) * l, n[0] > r ? r += h : r > n[2] && (r -= h), n[3] > s ? s += l : s > n[1] && (s -= l), this.coords.setCoordinates(e.COORDS_BY_USER, [r, s]))), this) : this
    }, addEvent: t.shortcut(t.GeometryElement.prototype, "on"), removeEvent: t.shortcut(t.GeometryElement.prototype, "off"), __evt__over: function() {}, __evt__mouseover: function() {}, __evt__out: function() {}, __evt__mouseout: function() {}, __evt__move: function() {}, __evt__mousemove: function() {}, __evt__drag: function() {}, __evt__mousedrag: function() {}, __evt__touchdrag: function() {}, __evt__down: function() {}, __evt__mousedown: function() {}, __evt__touchdown: function() {}, __evt__up: function() {}, __evt__mouseup: function() {}, __evt__touchup: function() {}, __evt__attribute: function() {}, __evt__attribute_: function() {}, __evt: function() {}}), t.GeometryElement
  }), define("base/transformation", ["jxg", "base/constants", "math/math", "utils/type"], function(t, e, i, r) {
    return t.Transformation = function(t, i, r) {
      this.elementClass = e.OBJECT_CLASS_OTHER, this.matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ], this.board = t, this.isNumericMatrix = !1, this.setMatrix(t, i, r), this.methodMap = {apply: "apply", applyOnce: "applyOnce", bindTo: "bindTo", bind: "bind", melt: "melt"}
    }, t.Transformation.prototype = {}, t.extend(t.Transformation.prototype, {update: function() {return this}, setMatrix: function(t, e, s) {
      var o;
      for (this.isNumericMatrix = !0, o = 0; s.length > o; o++)if ("number" != typeof s[o]) {
        this.isNumericMatrix = !1;
        break
      }
      if ("translate" === e) {
        if (2 !== s.length)throw Error("JSXGraph: translate transformation needs 2 parameters.");
        this.evalParam = r.createEvalFunction(t, s, 2), this.update = function() {this.matrix[1][0] = this.evalParam(0), this.matrix[2][0] = this.evalParam(1)}
      } else if ("scale" === e) {
        if (2 !== s.length)throw Error("JSXGraph: scale transformation needs 2 parameters.");
        this.evalParam = r.createEvalFunction(t, s, 2), this.update = function() {this.matrix[1][1] = this.evalParam(0), this.matrix[2][2] = this.evalParam(1)}
      } else if ("reflect" === e)4 > s.length && (s[0] = t.select(s[0])), 2 === s.length && (s[1] = t.select(s[1])), 4 === s.length && (this.evalParam = r.createEvalFunction(t, s, 4)), this.update = function() {
        var t, e, r, o, n, a, h, l;
        1 === s.length ? h = s[0].stdform : 2 === s.length ? h = i.crossProduct(s[1].coords.usrCoords, s[0].coords.usrCoords) : 4 === s.length && (h = i.crossProduct([1, this.evalParam(2), this.evalParam(3)], [1, this.evalParam(0), this.evalParam(1)])), t = h[1], e = h[2], r = h[0], l = [-r * t, -r * e, t * t + e * e], a = l[2], o = l[0] / l[2], n = l[1] / l[2], t = -h[2], e = h[1], this.matrix[1][1] = (t * t - e * e) / a, this.matrix[1][2] = 2 * t * e / a, this.matrix[2][1] = this.matrix[1][2], this.matrix[2][2] = -this.matrix[1][1], this.matrix[1][0] = o * (1 - this.matrix[1][1]) - n * this.matrix[1][2], this.matrix[2][0] = n * (1 - this.matrix[2][2]) - o * this.matrix[2][1]
      }; else if ("rotate" === e)3 === s.length ? this.evalParam = r.createEvalFunction(t, s, 3) : s.length > 0 && 2 >= s.length && (this.evalParam = r.createEvalFunction(t, s, 1), 2 === s.length && (s[1] = t.select(s[1]))), this.update = function() {
        var t, e, i = this.evalParam(0), r = Math.cos(i), o = Math.sin(i);
        this.matrix[1][1] = r, this.matrix[1][2] = -o, this.matrix[2][1] = o, this.matrix[2][2] = r, s.length > 1 && (3 === s.length ? (t = this.evalParam(1), e = this.evalParam(2)) : (t = s[1].X(), e = s[1].Y()), this.matrix[1][0] = t * (1 - r) + e * o, this.matrix[2][0] = e * (1 - r) - t * o)
      }; else if ("shear" === e) {
        if (2 !== s.length)throw Error("JSXGraph: shear transformation needs 2 parameters.");
        this.evalParam = r.createEvalFunction(t, s, 2), this.update = function() {this.matrix[1][2] = this.evalParam(0), this.matrix[2][1] = this.evalParam(1)}
      } else if ("generic" === e) {
        if (9 !== s.length)throw Error("JSXGraph: generic transformation needs 9 parameters.");
        this.evalParam = r.createEvalFunction(t, s, 9), this.update = function() {this.matrix[0][0] = this.evalParam(0), this.matrix[0][1] = this.evalParam(1), this.matrix[0][2] = this.evalParam(2), this.matrix[1][0] = this.evalParam(3), this.matrix[1][1] = this.evalParam(4), this.matrix[1][2] = this.evalParam(5), this.matrix[2][0] = this.evalParam(6), this.matrix[2][1] = this.evalParam(7), this.matrix[2][2] = this.evalParam(8)}
      }
    }, apply: function(t, e) {return this.update(), r.exists(e) ? i.matVecMult(this.matrix, t.initialCoords.usrCoords) : i.matVecMult(this.matrix, t.coords.usrCoords)}, applyOnce: function(t) {
      var s, o, n;
      for (r.isArray(t) || (t = [t]), o = t.length, n = 0; o > n; n++)this.update(), s = i.matVecMult(this.matrix, t[n].coords.usrCoords), t[n].coords.setCoordinates(e.COORDS_BY_USER, s)
    }, bindTo: function(t) {
      var e, i;
      if (r.isArray(t))for (i = t.length, e = 0; i > e; e++)t[e].transformations.push(this); else t.transformations.push(this)
    }, setProperty: function() {}, setAttribute: function() {}, melt: function(t) {
      var e, i, r, s, o, n, a = [];
      for (i = t.matrix.length, r = this.matrix[0].length, e = 0; i > e; e++)a[e] = [];
      for (this.update(), t.update(), e = 0; i > e; e++)for (n = 0; r > n; n++) {
        for (o = 0, s = 0; i > s; s++)o += t.matrix[e][s] * this.matrix[s][n];
        a[e][n] = o
      }
      return this.update = function() {
        var t = this.matrix.length, i = this.matrix[0].length;
        for (e = 0; t > e; e++)for (n = 0; i > n; n++)this.matrix[e][n] = a[e][n]
      }, this
    }}), t.createTransform = function(e, i, r) {return new t.Transformation(e, r.type, i)}, t.registerElement("transform", t.createTransform), {Transformation: t.Transformation, createTransform: t.createTransform}
  }), define("base/coordselement", ["jxg", "options", "math/math", "math/geometry", "math/numerics", "math/statistics", "base/coords", "base/constants", "base/element", "parser/geonext", "utils/type", "base/transformation"], function(t, e, i, r, s, o, n, a, h, l, c) {
    return t.CoordsElement = function(t, e) {
      var i;
      for (c.exists(t) || (t = [1, 0, 0]), i = 0; t.length > i; ++i)t[i] = parseFloat(t[i]);
      this.coords = new n(a.COORDS_BY_USER, t, this.board), this.initialCoords = new n(a.COORDS_BY_USER, t, this.board), this.position = null, this.onPolygon = !1, this.slideObject = null, this.slideObjects = [], this.needsUpdateFromParent = !0, this.updateConstraint = function() {return this}, this.groups = [], this.Xjc = null, this.Yjc = null, this.methodMap = c.deepCopy(this.methodMap, {move: "moveTo", moveTo: "moveTo", moveAlong: "moveAlong", visit: "visit", glide: "makeGlider", makeGlider: "makeGlider", intersect: "makeIntersection", makeIntersection: "makeIntersection", X: "X", Y: "Y", free: "free", setPosition: "setGliderPosition", setGliderPosition: "setGliderPosition", addConstraint: "addConstraint", dist: "Dist", onPolygon: "onPolygon"}), c.exists(this.element) && this.addAnchor(t, e), this.isDraggable = !0
    }, t.extend(t.CoordsElement.prototype, {updateCoords: function(t) {return this.needsUpdate ? (c.exists(t) || (t = !1), this.type === a.OBJECT_TYPE_GLIDER && (t ? this.updateGliderFromParent() : this.updateGlider()), this.visProp.frozen || this.updateConstraint(), this.updateTransform(), this) : this}, updateGlider: function() {
      var t, e, s, o, h, l, d, u, p, f, m, b, g, v, y, C, P, _ = 2 * Math.PI, E = !1, S = this.slideObject;
      if (this.needsUpdateFromParent = !1, S.elementClass === a.OBJECT_CLASS_CIRCLE)this.visProp.isgeonext && (_ = 1), C = r.projectPointToCircle(this, S, this.board), P = r.rad([S.center.X() + 1, S.center.Y()], S.center, this) / _; else if (S.elementClass === a.OBJECT_CLASS_LINE) {
        if (this.onPolygon) {
          if (e = S.point1.coords.usrCoords, s = S.point2.coords.usrCoords, t = 1, o = s[t] - e[t], Math.abs(o) < i.eps && (t = 2, o = s[t] - e[t]), d = r.projectPointToLine(this, S, this.board), u = (d.usrCoords[t] - e[t]) / o, l = S.parentPolygon, 0 > u) {
            for (t = 0; l.borders.length > t; t++)if (S === l.borders[t]) {
              S = l.borders[(t - 1 + l.borders.length) % l.borders.length];
              break
            }
          } else if (u > 1)for (t = 0; l.borders.length > t; t++)if (S === l.borders[t]) {
            S = l.borders[(t + 1 + l.borders.length) % l.borders.length];
            break
          }
          S.id !== this.slideObject.id && (this.slideObject = S)
        }
        e = S.point1.coords, s = S.point2.coords, o = e.distance(a.COORDS_BY_USER, s), i.eps > o ? (C = e, E = !0, P = 0) : (C = r.projectPointToLine(this, S, this.board), e = e.usrCoords.slice(0), s = s.usrCoords.slice(0), Math.abs(s[0]) < i.eps ? (t = 1, o = s[t], Math.abs(o) < i.eps && (t = 2, o = s[t]), o = (C.usrCoords[t] - e[t]) / o, p = o >= 0 ? 1 : -1, o = Math.abs(o), P = p * o / (o + 1)) : Math.abs(e[0]) < i.eps ? (t = 1, o = e[t], Math.abs(o) < i.eps && (t = 2, o = e[t]), o = (C.usrCoords[t] - s[t]) / o, P = 0 > o ? (1 - 2 * o) / (1 - o) : 1 / (o + 1)) : (t = 1, o = s[t] - e[t], Math.abs(o) < i.eps && (t = 2, o = s[t] - e[t]), P = (C.usrCoords[t] - e[t]) / o)), this.visProp.snapwidth > 0 && Math.abs(this._smax - this._smin) >= i.eps && (P = Math.max(Math.min(P, 1), 0), h = P * (this._smax - this._smin) + this._smin, h = Math.round(h / this.visProp.snapwidth) * this.visProp.snapwidth, P = (h - this._smin) / (this._smax - this._smin), this.update(!0)), e = S.point1.coords, !S.visProp.straightfirst && Math.abs(e.usrCoords[0]) > i.eps && 0 > P && (C = e, E = !0, P = 0), s = S.point2.coords, !S.visProp.straightlast && Math.abs(s.usrCoords[0]) > i.eps && P > 1 && (C = s, E = !0, P = 1)
      } else S.type === a.OBJECT_TYPE_TURTLE ? (this.updateConstraint(), C = r.projectPointToTurtle(this, S, this.board), P = this.position) : S.elementClass === a.OBJECT_CLASS_CURVE ? S.type === a.OBJECT_TYPE_ARC || S.type === a.OBJECT_TYPE_SECTOR ? (C = r.projectPointToCircle(this, S, this.board), b = r.rad(S.radiuspoint, S.center, this), f = 0, m = r.rad(S.radiuspoint, S.center, S.anglepoint), P = b, ("minor" === S.visProp.selection && m > Math.PI || "major" === S.visProp.selection && Math.PI > m) && (f = m, m = 2 * Math.PI), (f > b || b > m) && (P = m, (f > b && b > .5 * f || b > m && b > .5 * m + Math.PI) && (P = f), this.needsUpdateFromParent = !0, this.updateGliderFromParent()), _ = m - f, this.visProp.isgeonext && (_ = 1), Math.abs(_) > i.eps && (P /= _)) : (this.updateConstraint(), S.transformations.length > 0 ? (S.updateTransformMatrix(), y = i.inverse(S.transformMat), v = i.matVecMult(y, this.coords.usrCoords), g = new n(a.COORDS_BY_USER, v, this.board).usrCoords, v = r.projectCoordsToCurve(g[1], g[2], this.position || 0, S, this.board), C = v[0], P = v[1]) : (C = r.projectPointToCurve(this, S, this.board), P = this.position)) : c.isPoint(S) && (C = r.projectPointToPoint(this, S, this.board), P = this.position);
      this.coords.setCoordinates(a.COORDS_BY_USER, C.usrCoords, E), this.position = P
    }, updateGliderFromParent: function() {
      var t, e, s, o, n, h, l, d, u, p = this.slideObject, f = 2 * Math.PI;
      return this.needsUpdateFromParent ? (p.elementClass === a.OBJECT_CLASS_CIRCLE ? (s = p.Radius(), this.visProp.isgeonext && (f = 1), n = [p.center.X() + s * Math.cos(this.position * f), p.center.Y() + s * Math.sin(this.position * f)]) : p.elementClass === a.OBJECT_CLASS_LINE ? (t = p.point1.coords.usrCoords, e = p.point2.coords.usrCoords, Math.abs(e[0]) < i.eps ? (o = Math.min(Math.abs(this.position), 1 - i.eps), o /= 1 - o, 0 > this.position && (o = -o), n = [t[0] + o * e[0], t[1] + o * e[1], t[2] + o * e[2]]) : Math.abs(t[0]) < i.eps ? (o = Math.max(this.position, i.eps), o = Math.min(o, 2 - i.eps), o = o > 1 ? (o - 1) / (o - 2) : (1 - o) / o, n = [e[0] + o * t[0], e[1] + o * t[1], e[2] + o * t[2]]) : (o = this.position, n = [t[0] + o * (e[0] - t[0]), t[1] + o * (e[1] - t[1]), t[2] + o * (e[2] - t[2])])) : p.type === a.OBJECT_TYPE_TURTLE ? (this.coords.setCoordinates(a.COORDS_BY_USER, [p.Z(this.position), p.X(this.position), p.Y(this.position)]), this.updateConstraint(), n = r.projectPointToTurtle(this, p, this.board).usrCoords) : p.elementClass === a.OBJECT_CLASS_CURVE ? (this.coords.setCoordinates(a.COORDS_BY_USER, [p.Z(this.position), p.X(this.position), p.Y(this.position)]), p.type === a.OBJECT_TYPE_ARC || p.type === a.OBJECT_TYPE_SECTOR ? (h = r.rad([p.center.X() + 1, p.center.Y()], p.center, p.radiuspoint), l = 0, u = r.rad(p.radiuspoint, p.center, p.anglepoint), ("minor" === p.visProp.selection && u > Math.PI || "major" === p.visProp.selection && Math.PI > u) && (l = u, u = 2 * Math.PI), f = u - l, this.visProp.isgeonext && (f = 1), d = this.position * f, (l > d || d > u) && (d = u, (l > d && d > .5 * l || d > u && d > .5 * u + Math.PI) && (d = l), this.position = d, Math.abs(f) > i.eps && (this.position /= f)), s = p.Radius(), n = [p.center.X() + s * Math.cos(this.position * f + h), p.center.Y() + s * Math.sin(this.position * f + h)]) : (this.updateConstraint(), n = r.projectPointToCurve(this, p, this.board).usrCoords)) : c.isPoint(p) && (n = r.projectPointToPoint(this, p, this.board).usrCoords), this.coords.setCoordinates(a.COORDS_BY_USER, n, !1), void 0) : (this.needsUpdateFromParent = !0, void 0)
    }, updateRendererGeneric: function(t) {
      var e;
      return this.needsUpdate ? (this.visProp.visible && (e = this.isReal, this.isReal = !isNaN(this.coords.usrCoords[1] + this.coords.usrCoords[2]), this.isReal = Math.abs(this.coords.usrCoords[0]) > i.eps ? this.isReal : !1, this.isReal ? (e !== this.isReal && (this.board.renderer.show(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.show(this.label)), this.board.renderer[t](this)) : e !== this.isReal && (this.board.renderer.hide(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.hide(this.label))), this.hasLabel && this.visProp.visible && this.label && this.label.visProp.visible && this.isReal && (this.label.update(), this.board.renderer.updateText(this.label)), this.needsUpdate = !1, this) : this
    }, X: function() {return this.coords.usrCoords[1]}, Y: function() {return this.coords.usrCoords[2]}, Z: function() {return this.coords.usrCoords[0]}, XEval: function() {return this.coords.usrCoords[1]}, YEval: function() {return this.coords.usrCoords[2]}, ZEval: function() {return this.coords.usrCoords[0]}, Dist: function(t) {return this.isReal && t.isReal ? this.coords.distance(a.COORDS_BY_USER, t.coords) : 0 / 0}, snapToGrid: function(t) {return this.handleSnapToGrid(t)}, handleSnapToPoints: function(t) {
      var e, i, s, o, n, h, l = 0, d = 1 / 0, u = null, p = !1;
      if (o = this.board.objectsList.length, this.visProp.ignoredsnaptopoints && (n = this.visProp.ignoredsnaptopoints.length), this.visProp.snaptopoints || t) {
        for (e = 0; o > e; e++) {
          if (i = this.board.objectsList[e], this.visProp.ignoredsnaptopoints) {
            for (p = !1, h = 0; n > h; h++)if (i == this.visProp.ignoredsnaptopoints[h]) {
              p = !0;
              break
            }
            if (p)continue
          }
          c.isPoint(i) && i !== this && i.visProp.visible && (s = r.projectPointToPoint(this, i, this.board), l = "screen" === this.visProp.attractorunit ? s.distance(a.COORDS_BY_SCREEN, this.coords) : s.distance(a.COORDS_BY_USER, this.coords), this.visProp.attractordistance > l && d > l && (d = l, u = s))
        }
        null !== u && this.coords.setCoordinates(a.COORDS_BY_USER, u.usrCoords)
      }
      return this
    }, snapToPoints: function(t) {return this.handleSnapToPoints(t)}, handleAttractors: function() {
      var t, e, i, s = 0, o = this.visProp.attractors.length;
      if (0 !== this.visProp.attractordistance) {
        for (t = 0; o > t; t++)if (e = this.board.select(this.visProp.attractors[t]), c.exists(e) && e !== this) {
          if (c.isPoint(e) ? i = r.projectPointToPoint(this, e, this.board) : e.elementClass === a.OBJECT_CLASS_LINE ? i = r.projectPointToLine(this, e, this.board) : e.elementClass === a.OBJECT_CLASS_CIRCLE ? i = r.projectPointToCircle(this, e, this.board) : e.elementClass === a.OBJECT_CLASS_CURVE ? i = r.projectPointToCurve(this, e, this.board) : e.type === a.OBJECT_TYPE_TURTLE && (i = r.projectPointToTurtle(this, e, this.board)), s = "screen" === this.visProp.attractorunit ? i.distance(a.COORDS_BY_SCREEN, this.coords) : i.distance(a.COORDS_BY_USER, this.coords), this.visProp.attractordistance > s) {
            (this.type !== a.OBJECT_TYPE_GLIDER || this.slideObject !== e) && this.makeGlider(e);
            break
          }
          e === this.slideObject && s >= this.visProp.snatchdistance && this.popSlideObject()
        }
        return this
      }
    }, setPositionDirectly: function(t, e) {
      var r, s, h, l, c = this.coords;
      if (this.relativeCoords)return s = new n(t, e, this.board), this.visProp.islabel ? (h = o.subtract(s.scrCoords, c.scrCoords), this.relativeCoords.scrCoords[1] += h[1], this.relativeCoords.scrCoords[2] += h[2]) : (h = o.subtract(s.usrCoords, c.usrCoords), this.relativeCoords.usrCoords[1] += h[1], this.relativeCoords.usrCoords[2] += h[2]), this;
      for (this.coords.setCoordinates(t, e), this.handleSnapToGrid(), this.handleSnapToPoints(), this.handleAttractors(), r = this.transformations.length - 1; r >= 0; r--)t === a.COORDS_BY_SCREEN ? l = new n(t, e, this.board).usrCoords : (2 === e.length && (e = [1].concat(e)), l = e), this.initialCoords.setCoordinates(a.COORDS_BY_USER, i.matVecMult(i.inverse(this.transformations[r].matrix), l));
      return this.prepareUpdate().update(), this.board.isSuspendedUpdate && this.type === a.OBJECT_TYPE_GLIDER && this.updateGlider(), this
    }, setPositionByTransform: function(t, e) {
      var i;
      return e = new n(t, e, this.board), i = this.board.create("transform", e.usrCoords.slice(1), {type: "translate"}), this.transformations.length > 0 && this.transformations[this.transformations.length - 1].isNumericMatrix ? this.transformations[this.transformations.length - 1].melt(i) : this.addTransform(this, i), this.prepareUpdate().update(), this
    }, setPosition: function(t, e) {return this.setPositionDirectly(t, e)}, setGliderPosition: function(t) {return this.type === a.OBJECT_TYPE_GLIDER && (this.position = t, this.board.update()), this}, makeGlider: function(e) {
      var i, r, s, o = this.board.select(e), n = !1;
      if (o.type === a.OBJECT_TYPE_POLYGON) {
        for (i = Number.MAX_VALUE, r = 0; o.borders.length > r; r++)s = t.Math.Geometry.distPointLine(this.coords.usrCoords, o.borders[r].stdform), i > s && (i = s, e = o.borders[r]);
        o = this.board.select(e), n = !0
      }
      if (!c.exists(o))throw Error("JSXGraph: slide object undefined.");
      if (o.type === a.OBJECT_TYPE_TICKS)throw Error("JSXGraph: gliders on ticks are not possible.");
      return this.slideObject = this.board.select(e), this.slideObjects.push(this.slideObject), this.addParents(e), this.type = a.OBJECT_TYPE_GLIDER, this.elType = "glider", this.visProp.snapwidth = -1, this.slideObject.addChild(this), this.isDraggable = !0, this.onPolygon = n, this.generatePolynomial = function() {return this.slideObject.generatePolynomial(this)}, this.updateGlider(), this.needsUpdateFromParent = !0, this.updateGliderFromParent(), this
    }, popSlideObject: function() {this.slideObjects.length > 0 && (this.slideObjects.pop(), this.slideObject.removeChild(this), 0 === this.slideObjects.length ? (this.type = this._org_type, this.type === a.OBJECT_TYPE_POINT ? this.elType = "point" : this.elementClass === a.OBJECT_CLASS_TEXT ? this.elType = "text" : this.type === a.OBJECT_TYPE_IMAGE && (this.elType = "image"), this.slideObject = null) : this.slideObject = this.slideObjects[this.slideObjects.length - 1])}, free: function() {
      var t, e;
      if (this.type !== a.OBJECT_TYPE_GLIDER) {
        if (this.transformations.length = 0, this.isDraggable)return;
        this.isDraggable = !0, this.elementClass === a.OBJECT_CLASS_POINT && (this.type = a.OBJECT_TYPE_POINT, this.elType = "point"), this.XEval = function() {return this.coords.usrCoords[1]}, this.YEval = function() {return this.coords.usrCoords[2]}, this.ZEval = function() {return this.coords.usrCoords[0]}, this.Xjc = null, this.Yjc = null
      }
      for (t in this.board.objects)this.board.objects.hasOwnProperty(t) && (e = this.board.objects[t], e.descendants && (delete e.descendants[this.id], delete e.childElements[this.id], this.hasLabel && (delete e.descendants[this.label.id], delete e.childElements[this.label.id])));
      this.ancestors = {}, this.slideObject = null, this.slideObjects = [], this.elementClass === a.OBJECT_CLASS_POINT ? (this.type = a.OBJECT_TYPE_POINT, this.elType = "point") : this.elementClass === a.OBJECT_CLASS_TEXT ? (this.type = this._org_type, this.elType = "text") : this.elementClass === a.OBJECT_CLASS_OTHER && (this.type = this._org_type, this.elType = "image")
    }, addConstraint: function(t) {
      var e, i, r = [], s = ["X", "Y"], o = function(t) {return function() {return t}}, n = function(t) {return function() {return t.Value()}};
      for (this.elementClass === a.OBJECT_CLASS_POINT && (this.type = a.OBJECT_TYPE_CAS), this.isDraggable = !1, e = 0; t.length > e; e++)i = t[e], "string" == typeof i ? (r[e] = this.board.jc.snippet(i, !0, null, !0), 2 === t.length && (this[s[e] + "jc"] = t[e])) : "function" == typeof i ? r[e] = i : "number" == typeof i ? r[e] = o(i) : "object" == typeof i && "function" == typeof i.Value && (r[e] = n(i)), r[e].origin = i;
      return 1 === t.length ? this.updateConstraint = function() {
        var t = r[0]();
        c.isArray(t) ? this.coords.setCoordinates(a.COORDS_BY_USER, t) : this.coords = t
      } : 2 === t.length ? (this.XEval = r[0], this.YEval = r[1], this.parents = [r[0].origin, r[1].origin], this.updateConstraint = function() {this.coords.setCoordinates(a.COORDS_BY_USER, [this.XEval(), this.YEval()])}) : (this.ZEval = r[0], this.XEval = r[1], this.YEval = r[2], this.parents = [r[0].origin, r[1].origin, r[2].origin], this.updateConstraint = function() {this.coords.setCoordinates(a.COORDS_BY_USER, [this.ZEval(), this.XEval(), this.YEval()])}), this.prepareUpdate().update(), this.board.isSuspendedUpdate || this.updateRenderer(), this
    }, addAnchor: function(t, e) {
      this.relativeCoords = e ? new n(a.COORDS_BY_SCREEN, t.slice(0, 2), this.board) : new n(a.COORDS_BY_USER, t, this.board), this.element.addChild(this), this.addParents(this.element), this.XEval = function() {
        var t, e, i;
        return this.visProp.islabel ? (t = parseFloat(this.visProp.offset[0]), i = this.element.getLabelAnchor(), e = new n(a.COORDS_BY_SCREEN, [t + this.relativeCoords.scrCoords[1] + i.scrCoords[1], 0], this.board), e.usrCoords[1]) : (i = this.element.getTextAnchor(), this.relativeCoords.usrCoords[1] + i.usrCoords[1])
      }, this.YEval = function() {
        var t, e, i;
        return this.visProp.islabel ? (t = -parseFloat(this.visProp.offset[1]), i = this.element.getLabelAnchor(), e = new n(a.COORDS_BY_SCREEN, [0, t + this.relativeCoords.scrCoords[2] + i.scrCoords[2]], this.board), e.usrCoords[2]) : (i = this.element.getTextAnchor(), this.relativeCoords.usrCoords[2] + i.usrCoords[2])
      }, this.ZEval = c.createFunction(1, this.board, ""), this.updateConstraint = function() {this.coords.setCoordinates(a.COORDS_BY_USER, [this.ZEval(), this.XEval(), this.YEval()])}, this.coords = new n(a.COORDS_BY_SCREEN, [0, 0], this.board)
    }, updateTransform: function() {
      var t;
      if (0 === this.transformations.length)return this;
      for (t = 0; this.transformations.length > t; t++)this.transformations[t].update();
      return this
    }, addTransform: function(t, e) {
      var i, r = c.isArray(e) ? e : [e], s = r.length;
      for (0 === this.transformations.length && (this.baseElement = t), i = 0; s > i; i++)this.transformations.push(r[i]);
      return this
    }, startAnimation: function(t, e) {
      var i = this;
      return this.type !== a.OBJECT_TYPE_GLIDER || c.exists(this.intervalCode) || (this.intervalCode = window.setInterval(function() {i._anim(t, e)}, 250), c.exists(this.intervalCount) || (this.intervalCount = 0)), this
    }, stopAnimation: function() {return c.exists(this.intervalCode) && (window.clearInterval(this.intervalCode), delete this.intervalCode), this}, moveAlong: function(t, e, i) {
      i = i || {};
      var r, o, n = [], h = [], l = this.board.attr.animationdelay, d = e / l, u = function(e, i) {return function() {return t[e][i]}};
      if (c.isArray(t)) {
        for (r = 0; t.length > r; r++)h[r] = c.isPoint(t[r]) ? t[r] : {elementClass: a.OBJECT_CLASS_POINT, X: u(r, 0), Y: u(r, 1)};
        if (e = e || 0, 0 === e)return this.setPosition(a.COORDS_BY_USER, [h[h.length - 1].X(), h[h.length - 1].Y()]), this.board.update(this);
        if (!c.exists(i.interpolate) || i.interpolate)for (o = s.Neville(h), r = 0; d > r; r++)n[r] = [], n[r][0] = o[0]((d - r) / d * o[3]()), n[r][1] = o[1]((d - r) / d * o[3]()); else for (r = 0; d > r; r++)n[r] = [], n[r][0] = t[Math.floor((d - r) / d * (t.length - 1))][0], n[r][1] = t[Math.floor((d - r) / d * (t.length - 1))][1];
        this.animationPath = n
      } else c.isFunction(t) && (this.animationPath = t, this.animationStart = (new Date).getTime());
      return this.animationCallback = i.callback, this.board.addAnimation(this), this
    }, moveTo: function(t, e, r) {
      r = r || {}, t = new n(a.COORDS_BY_USER, t, this.board);
      var s, o = this.board.attr.animationdelay, h = Math.ceil(e / o), l = [], d = this.coords.usrCoords[1], u = this.coords.usrCoords[2], p = t.usrCoords[1] - d, f = t.usrCoords[2] - u, m = function(t) {return r.effect && "<>" === r.effect ? Math.pow(Math.sin(t / h * Math.PI / 2), 2) : t / h};
      if (!c.exists(e) || 0 === e || Math.abs(t.usrCoords[0] - this.coords.usrCoords[0]) > i.eps)return this.setPosition(a.COORDS_BY_USER, t.usrCoords), this.board.update(this);
      if (!c.exists(r.callback) && Math.abs(p) < i.eps && Math.abs(f) < i.eps)return this;
      for (s = h; s >= 0; s--)l[h - s] = [t.usrCoords[0], d + p * m(s), u + f * m(s)];
      return this.animationPath = l, this.animationCallback = r.callback, this.board.addAnimation(this), this
    }, visit: function(t, e, i) {
      t = new n(a.COORDS_BY_USER, t, this.board);
      var r, s, o, h = this.board.attr.animationdelay, l = [], d = this.coords.usrCoords[1], u = this.coords.usrCoords[2], p = t.usrCoords[1] - d, f = t.usrCoords[2] - u, m = function(t) {
        var e = o / 2 > t ? 2 * t / o : 2 * (o - t) / o;
        return i.effect && "<>" === i.effect ? Math.pow(Math.sin(e * Math.PI / 2), 2) : e
      };
      for ("number" == typeof i ? i = {repeat: i} : (i = i || {}, c.exists(i.repeat) || (i.repeat = 1)), o = Math.ceil(e / (h * i.repeat)), s = 0; i.repeat > s; s++)for (r = o; r >= 0; r--)l[s * (o + 1) + o - r] = [t.usrCoords[0], d + p * m(r), u + f * m(r)];
      return this.animationPath = l, this.animationCallback = i.callback, this.board.addAnimation(this), this
    }, _anim: function(t, e) {
      var i, s, o, n, h, l, c, d, u = 1;
      return this.intervalCount += 1, this.intervalCount > e && (this.intervalCount = 0), this.slideObject.elementClass === a.OBJECT_CLASS_LINE ? (i = this.slideObject.point1.coords.distance(a.COORDS_BY_SCREEN, this.slideObject.point2.coords), s = this.slideObject.getSlope(), 1 / 0 !== s ? (h = Math.atan(s), o = Math.round(this.intervalCount / e * i * Math.cos(h)), n = Math.round(this.intervalCount / e * i * Math.sin(h))) : (o = 0, n = Math.round(this.intervalCount / e * i)), 0 > t ? (l = this.slideObject.point2, this.slideObject.point2.coords.scrCoords[1] - this.slideObject.point1.coords.scrCoords[1] > 0 ? u = -1 : 0 === this.slideObject.point2.coords.scrCoords[1] - this.slideObject.point1.coords.scrCoords[1] && this.slideObject.point2.coords.scrCoords[2] - this.slideObject.point1.coords.scrCoords[2] > 0 && (u = -1)) : (l = this.slideObject.point1, this.slideObject.point1.coords.scrCoords[1] - this.slideObject.point2.coords.scrCoords[1] > 0 ? u = -1 : 0 === this.slideObject.point1.coords.scrCoords[1] - this.slideObject.point2.coords.scrCoords[1] && this.slideObject.point1.coords.scrCoords[2] - this.slideObject.point2.coords.scrCoords[2] > 0 && (u = -1)), this.coords.setCoordinates(a.COORDS_BY_SCREEN, [l.coords.scrCoords[1] + u * o, l.coords.scrCoords[2] + u * n])) : this.slideObject.elementClass === a.OBJECT_CLASS_CURVE ? (c = t > 0 ? Math.round(this.intervalCount / e * this.board.canvasWidth) : Math.round((e - this.intervalCount) / e * this.board.canvasWidth), this.coords.setCoordinates(a.COORDS_BY_SCREEN, [c, 0]), this.coords = r.projectPointToCurve(this, this.slideObject, this.board)) : this.slideObject.elementClass === a.OBJECT_CLASS_CIRCLE && (h = 0 > t ? 2 * (this.intervalCount / e) * Math.PI : 2 * ((e - this.intervalCount) / e) * Math.PI, d = this.slideObject.Radius(), this.coords.setCoordinates(a.COORDS_BY_USER, [this.slideObject.center.coords.usrCoords[1] + d * Math.cos(h), this.slideObject.center.coords.usrCoords[2] + d * Math.sin(h)])), this.board.update(this), this
    }, getTextAnchor: function() {return this.coords}, getLabelAnchor: function() {return this.coords}, getParents: function() {
      var t = [this.Z(), this.X(), this.Y()];
      return 0 !== this.parents.length && (t = this.parents), this.type === a.OBJECT_TYPE_GLIDER && (t = [this.X(), this.Y(), this.slideObject.id]), t
    }}), t.CoordsElement.create = function(t, e, i, r, s, o) {
      var n, a, h = !1;
      for (a = 0; i.length > a; a++)("function" == typeof i[a] || "string" == typeof i[a]) && (h = !0);
      if (h)n = new t(e, [0, 0], r, s, o), n.addConstraint(i); else if (c.isNumber(i[0]) && c.isNumber(i[1]))n = new t(e, i, r, s, o), c.exists(r.slideobject) ? n.makeGlider(r.slideobject) : n.baseElement = n, n.isDraggable = !0; else {
        if ("object" != typeof i[0] || "object" != typeof i[1])return!1;
        n = new t(e, [0, 0], r, s, o), n.addTransform(i[0], i[1]), n.isDraggable = !1
      }
      return n.handleSnapToGrid(), n.handleSnapToPoints(), n.handleAttractors(), n.addParents(i), n
    }, t.CoordsElement
  }), define("base/point", ["jxg", "options", "math/math", "math/geometry", "math/numerics", "base/coords", "base/constants", "base/element", "parser/geonext", "utils/type", "base/transformation", "base/coordselement"], function(t, e, i, r, s, o, n, a, h, l, c, d) {
    return t.Point = function(t, e, i) {this.constructor(t, i, n.OBJECT_TYPE_POINT, n.OBJECT_CLASS_POINT), this.element = this.board.select(i.anchor), this.coordsConstructor(e), this.elType = "point", this.id = this.board.setId(this, "P"), this.board.renderer.drawPoint(this), this.board.finalizeAdding(this), this.createLabel()}, t.Point.prototype = new a, l.copyPrototypeMethods(t.Point, d, "coordsConstructor"), t.extend(t.Point.prototype, {hasPoint: function(t, e) {
      var i, r = this.coords.scrCoords;
      return i = parseFloat(this.visProp.size) + .5 * parseFloat(this.visProp.strokewidth), this.board.options.precision.hasPoint > i && (i = this.board.options.precision.hasPoint), i + 2 > Math.abs(r[1] - t) && i + 2 > Math.abs(r[2] - e)
    }, update: function(t) {return this.needsUpdate ? (this.updateCoords(t), this.visProp.trace && this.cloneToBackground(!0), this) : this}, updateTransform: function() {
      var t, e;
      if (0 === this.transformations.length || null === this.baseElement)return this;
      for (t = this === this.baseElement ? this.transformations[0].apply(this.baseElement, "self") : this.transformations[0].apply(this.baseElement), this.coords.setCoordinates(n.COORDS_BY_USER, t), e = 1; this.transformations.length > e; e++)this.coords.setCoordinates(n.COORDS_BY_USER, this.transformations[e].apply(this));
      return this
    }, updateRenderer: function() {return this.visProp.size > 0 && this.updateRendererGeneric("updatePoint"), this}, bounds: function() {return this.coords.usrCoords.slice(1).concat(this.coords.usrCoords.slice(1))}, makeIntersection: function(t, e, i, s) {
      var o;
      t = this.board.select(t), e = this.board.select(e), o = r.intersectionFunction(this.board, t, e, i, s, this.visProp.alwaysintersect), this.addConstraint([o]);
      try {
        t.addChild(this), e.addChild(this)
      } catch (a) {
        throw Error("JSXGraph: Can't create 'intersection' with parent types '" + typeof t + "' and '" + typeof e + "'.")
      }
      this.type = n.OBJECT_TYPE_INTERSECTION, this.elType = "intersection", this.parents = [t.id, e.id, i, s], this.generatePolynomial = function() {
        var i = t.generatePolynomial(this), r = e.generatePolynomial(this);
        return 0 === i.length || 0 === r.length ? [] : [i[0], r[0]]
      }, this.prepareUpdate().update()
    }, setStyle: function(t) {
      var e = ["cross", "cross", "cross", "circle", "circle", "circle", "circle", "square", "square", "square", "plus", "plus", "plus"], i = [2, 3, 4, 1, 2, 3, 4, 2, 3, 4, 2, 3, 4];
      return this.visProp.face = e[t], this.visProp.size = i[t], this.board.renderer.changePointStyle(this), this
    }, normalizeFace: function(t) {return e.normalizePointFace(t)}, face: function(t) {this.setAttribute({face: t})}, size: function(t) {this.setAttribute({size: t})}, cloneToBackground: function() {
      var t = {};
      return t.id = this.id + "T" + this.numTraces, this.numTraces += 1, t.coords = this.coords, t.visProp = l.deepCopy(this.visProp, this.visProp.traceattributes, !0), t.visProp.layer = this.board.options.layer.trace, t.elementClass = n.OBJECT_CLASS_POINT, t.board = this.board, l.clearVisPropOld(t), this.board.renderer.drawPoint(t), this.traces[t.id] = t.rendNode, this
    }}), t.createPoint = function(e, i, r) {
      var s, o;
      if (o = l.copyAttributes(r, e.options, "point"), s = d.create(t.Point, e, i, o), !s)throw Error("JSXGraph: Can't create point with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [x,y], [z,x,y], [element,transformation]");
      return s
    }, t.createGlider = function(t, e, i) {
      var r, s, o = l.copyAttributes(i, t.options, "glider");
      return s = 1 === e.length ? [0, 0] : e.slice(0, 2), r = t.create("point", s, o), r.makeGlider(e[e.length - 1]), r
    }, t.createIntersectionPoint = function(t, e, i) {
      var s, o, a, h, c, d, u = l.copyAttributes(i, t.options, "intersection");
      e.push(0, 0), o = t.select(e[0]), a = t.select(e[1]), c = e[2] || 0, d = e[3] || 0, s = t.create("point", [0, 0, 0], u), h = r.intersectionFunction(t, o, a, c, d, s.visProp.alwaysintersect), s.addConstraint([h]);
      try {
        o.addChild(s), a.addChild(s)
      } catch (p) {
        throw Error("JSXGraph: Can't create 'intersection' with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'.")
      }
      return s.type = n.OBJECT_TYPE_INTERSECTION, s.elType = "intersection", s.parents = [o.id, a.id, c, d], s.generatePolynomial = function() {
        var t = o.generatePolynomial(s), e = a.generatePolynomial(s);
        return 0 === t.length || 0 === e.length ? [] : [t[0], e[0]]
      }, s
    }, t.createOtherIntersectionPoint = function(t, e, s) {
      var o, a, h, c;
      if (3 !== e.length || !l.isPoint(e[2]) || e[0].elementClass !== n.OBJECT_CLASS_LINE && e[0].elementClass !== n.OBJECT_CLASS_CIRCLE || e[1].elementClass !== n.OBJECT_CLASS_LINE && e[1].elementClass !== n.OBJECT_CLASS_CIRCLE)throw Error("JSXGraph: Can't create 'other intersection point' with parent types '" + typeof e[0] + "',  '" + typeof e[1] + "'and  '" + typeof e[2] + "'." + "\nPossible parent types: [circle|line,circle|line,point]");
      return a = t.select(e[0]), h = t.select(e[1]), c = t.select(e[2]), o = t.create("point", [function() {
        var t = r.meet(a.stdform, h.stdform, 0, a.board);
        return Math.abs(c.X() - t.usrCoords[1]) > i.eps || Math.abs(c.Y() - t.usrCoords[2]) > i.eps || Math.abs(c.Z() - t.usrCoords[0]) > i.eps ? t : r.meet(a.stdform, h.stdform, 1, a.board)
      }], s), o.type = n.OBJECT_TYPE_INTERSECTION, o.elType = "otherintersection", o.parents = [a.id, h.id, c], a.addChild(o), h.addChild(o), o.generatePolynomial = function() {
        var t = a.generatePolynomial(o), e = h.generatePolynomial(o);
        return 0 === t.length || 0 === e.length ? [] : [t[0], e[0]]
      }, o
    }, t.createPolePoint = function(e, i, r) {
      var s, o, a, h, l, c, d;
      if (i.length > 1 && (h = i[0].type === n.OBJECT_TYPE_CONIC || i[0].elementClass === n.OBJECT_CLASS_CIRCLE, l = i[1].type === n.OBJECT_TYPE_CONIC || i[1].elementClass === n.OBJECT_CLASS_CIRCLE, c = i[0].elementClass === n.OBJECT_CLASS_LINE, d = i[1].elementClass === n.OBJECT_CLASS_LINE), 2 !== i.length || !(h && d || c && l))throw Error("JSXGraph: Can't create 'pole point' with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent type: [conic|circle,line], [line,conic|circle]");
      return d ? (o = e.select(i[0]), a = e.select(i[1])) : (o = e.select(i[1]), a = e.select(i[0])), s = e.create("point", [function() {
        var e = o.quadraticform, i = a.stdform.slice(0, 3);
        return[t.Math.Numerics.det([i, e[1], e[2]]), t.Math.Numerics.det([e[0], i, e[2]]), t.Math.Numerics.det([e[0], e[1], i])]
      }], r), s.elType = "polepoint", s.parents = [o.id, a.id], o.addChild(s), a.addChild(s), s
    }, t.registerElement("point", t.createPoint), t.registerElement("glider", t.createGlider), t.registerElement("intersection", t.createIntersectionPoint), t.registerElement("otherintersection", t.createOtherIntersectionPoint), t.registerElement("polepoint", t.createPolePoint), {Point: t.Point, createPoint: t.createPoint, createGlider: t.createGlider, createIntersection: t.createIntersectionPoint, createOtherIntersection: t.createOtherIntersectionPoint, createPolePoint: t.createPolePoint}
  }), define("utils/expect", ["jxg", "utils/type", "base/constants", "base/coords", "base/point"], function(t, e, i, r) {
    var s = {each: function(t, e, i) {
      var r, s = [];
      for (r = 0; t.length > r; r++)s.push(e.call(this, t[r], i));
      return s
    }, coords: function(t, e) {
      var s = t;
      return t && t.elementClass === i.OBJECT_CLASS_POINT ? s = t.coords : t.usrCoords && t.scrCoords && t.usr2screen && (s = t), e && (s = new r(i.COORDS_BY_USER, s.usrCoords, s.board)), s
    }, coordsArray: function(t, i) {
      var r;
      return r = e.isArray(t) ? t : this.coords(t).usrCoords, 3 > r.length && r.unshift(1), i && (r = [r[0], r[1], r[2]]), r
    }};
    return t.Expect = s, s
  }), define("math/qdt", ["math/math", "utils/type"], function(t, e) {
    var i = function(t) {this.capacity = 10, this.points = [], this.xlb = t[0], this.xub = t[2], this.ylb = t[3], this.yub = t[1], this.northWest = null, this.northEast = null, this.southEast = null, this.southWest = null};
    return e.extend(i.prototype, {contains: function(t, e) {return t > this.xlb && this.xub >= t && e > this.ylb && this.yub >= e}, insert: function(t) {return this.contains(t.usrCoords[1], t.usrCoords[2]) ? this.points.length < this.capacity ? (this.points.push(t), !0) : (null === this.northWest && this.subdivide(), this.northWest.insert(t) ? !0 : this.northEast.insert(t) ? !0 : this.southEast.insert(t) ? !0 : this.southWest.insert(t) ? !0 : !1) : !1}, subdivide: function() {
      var t, e = this.points.length, r = this.xlb + (this.xub - this.xlb) / 2, s = this.ylb + (this.yub - this.ylb) / 2;
      for (this.northWest = new i([this.xlb, this.yub, r, s]), this.northEast = new i([r, this.yub, this.xub, s]), this.southEast = new i([this.xlb, s, r, this.ylb]), this.southWest = new i([r, s, this.xub, this.ylb]), t = 0; e > t; t += 1)this.northWest.insert(this.points[t]), this.northEast.insert(this.points[t]), this.southEast.insert(this.points[t]), this.southWest.insert(this.points[t])
    }, _query: function(t, e) {
      var i;
      if (this.contains(t, e)) {
        if (null === this.northWest)return this;
        if (i = this.northWest._query(t, e))return i;
        if (i = this.northEast._query(t, e))return i;
        if (i = this.southEast._query(t, e))return i;
        if (i = this.southWest._query(t, e))return i
      }
      return!1
    }, query: function(t, i) {
      var r, s;
      return e.exists(i) ? (r = t, s = i) : (r = t.usrCoords[1], s = t.usrCoords[2]), this._query(r, s)
    }}), t.Quadtree = i, i
  }), define("utils/zip", ["jxg"], function(t) {
    var e = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255], i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], r = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], o = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], n = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], a = 256;
    return t.Util = t.Util || {}, t.Util.Unzip = function(h) {
      function l() {return j += 8, L > B ? h[B++] : -1}

      function c() {Y = 1}

      function d() {
        var t;
        try {
          return j++, t = 1 & Y, Y >>= 1, 0 === Y && (Y = l(), t = 1 & Y, Y = 128 | Y >> 1), t
        } catch (e) {
          throw e
        }
      }

      function u(t) {
        var i = 0, r = t;
        try {
          for (; r--;)i = i << 1 | d();
          t && (i = e[i] >> 8 - t)
        } catch (s) {
          throw s
        }
        return i
      }

      function p() {k = 0}

      function f(t) {E++, N[k++] = t, w.push(String.fromCharCode(t)), 32768 === k && (k = 0)}

      function m() {this.b0 = 0, this.b1 = 0, this.jump = null, this.jumppos = -1}

      function b() {
        for (; ;) {
          if (J[G] >= O)return-1;
          if (x[J[G]] === G)return J[G]++;
          J[G]++
        }
      }

      function g() {
        var t, e = U[X];
        if (17 === G)return-1;
        if (X++, G++, t = b(), t >= 0)e.b0 = t; else if (e.b0 = 32768, g())return-1;
        if (t = b(), t >= 0)e.b1 = t, e.jump = null; else if (e.b1 = 32768, e.jump = U[X], e.jumppos = X, g())return-1;
        return G--, 0
      }

      function v(t, e, i) {
        var r;
        for (U = t, X = 0, x = i, O = e, r = 0; 17 > r; r++)J[r] = 0;
        return G = 0, g() ? -1 : 0
      }

      function y(t) {
        for (var e, i, r, s = 0, o = t[s]; ;)if (r = d()) {
          if (!(32768 & o.b1))return o.b1;
          for (o = o.jump, e = t.length, i = 0; e > i; i++)if (t[i] === o) {
            s = i;
            break
          }
        } else {
          if (!(32768 & o.b0))return o.b0;
          s++, o = t[s]
        }
      }

      function C() {
        var a, h, b, g, C, P, _, E, S, x, O, T, w, M, A, R, L;
        do if (a = d(), b = u(2), 0 === b)for (c(), x = l(), x |= l() << 8, T = l(), T |= l() << 8, 65535 & (x ^ ~T) && t.debug("BlockLen checksum mismatch\n"); x--;)h = l(), f(h); else if (1 === b)for (; ;)if (C = e[u(7)] >> 1, C > 23 ? (C = C << 1 | d(), C > 199 ? (C -= 128, C = C << 1 | d()) : (C -= 48, C > 143 && (C += 136))) : C += 256, 256 > C)f(C); else {
          if (256 === C)break;
          for (C -= 257, S = u(r[C]) + i[C], C = e[u(5)] >> 3, o[C] > 8 ? (O = u(8), O |= u(o[C] - 8) << 8) : O = u(o[C]), O += s[C], C = 0; S > C; C++)h = N[32767 & k - O], f(h)
        } else if (2 === b) {
          for (_ = Array(320), M = 257 + u(5), A = 1 + u(5), R = 4 + u(4), C = 0; 19 > C; C++)_[C] = 0;
          for (C = 0; R > C; C++)_[n[C]] = u(3);
          for (S = I.length, g = 0; S > g; g++)I[g] = new m;
          if (v(I, 19, _, 0))return p(), 1;
          for (w = M + A, g = 0, L = -1; w > g;)if (L++, C = y(I), 16 > C)_[g++] = C; else if (16 === C) {
            if (C = 3 + u(2), g + C > w)return p(), 1;
            for (P = g ? _[g - 1] : 0; C--;)_[g++] = P
          } else {
            if (C = 17 === C ? 3 + u(3) : 11 + u(7), g + C > w)return p(), 1;
            for (; C--;)_[g++] = 0
          }
          for (S = D.length, g = 0; S > g; g++)D[g] = new m;
          if (v(D, M, _, 0))return p(), 1;
          for (S = D.length, g = 0; S > g; g++)I[g] = new m;
          for (E = [], g = M; _.length > g; g++)E[g - M] = _[g];
          if (v(I, A, E, 0))return p(), 1;
          for (; ;)if (C = y(D), C >= 256) {
            if (C -= 256, 0 === C)break;
            for (C -= 1, S = u(r[C]) + i[C], C = y(I), o[C] > 8 ? (O = u(8), O |= u(o[C] - 8) << 8) : O = u(o[C]), O += s[C]; S--;)h = N[32767 & k - O], f(h)
          } else f(C)
        } while (!a);
        return p(), c(), 0
      }

      function P() {
        var t, e, i, r, s, o, n, h, c = [];
        try {
          if (w = [], R = !1, c[0] = l(), c[1] = l(), 120 === c[0] && 218 === c[1] && (C(), A[M] = [w.join(""), "geonext.gxt"], M++), 31 === c[0] && 139 === c[1] && (T(), A[M] = [w.join(""), "file"], M++), 80 === c[0] && 75 === c[1] && (R = !0, c[2] = l(), c[3] = l(), 3 === c[2] && 4 === c[3])) {
            for (c[0] = l(), c[1] = l(), _ = l(), _ |= l() << 8, h = l(), h |= l() << 8, l(), l(), l(), l(), n = l(), n |= l() << 8, n |= l() << 16, n |= l() << 24, o = l(), o |= l() << 8, o |= l() << 16, o |= l() << 24, s = l(), s |= l() << 8, s |= l() << 16, s |= l() << 24, r = l(), r |= l() << 8, i = l(), i |= l() << 8, t = 0, F = []; r--;)e = l(), "/" === e | ":" === e ? t = 0 : a - 1 > t && (F[t++] = String.fromCharCode(e));
            for (S || (S = F), t = 0; i > t;)e = l(), t++;
            E = 0, 8 === h && (C(), A[M] = Array(2), A[M][0] = w.join(""), A[M][1] = F.join(""), M++), T()
          }
        } catch (d) {
          throw d
        }
      }

      var _, E, S, x, O, T, w = [], M = 0, A = [], N = Array(32768), k = 0, R = !1, L = h.length, B = 0, Y = 1, j = 0, D = Array(288), I = Array(32), X = 0, U = null, G = (Array(64), Array(64), 0), J = Array(17), F = [];
      J[0] = 0, T = function() {
        var t, e, i, r, s, o, n = [];
        if (8 & _ && (n[0] = l(), n[1] = l(), n[2] = l(), n[3] = l(), 80 === n[0] && 75 === n[1] && 7 === n[2] && 8 === n[3] ? (t = l(), t |= l() << 8, t |= l() << 16, t |= l() << 24) : t = n[0] | n[1] << 8 | n[2] << 16 | n[3] << 24, e = l(), e |= l() << 8, e |= l() << 16, e |= l() << 24, i = l(), i |= l() << 8, i |= l() << 16, i |= l() << 24), R && P(), n[0] = l(), 8 === n[0]) {
          if (_ = l(), l(), l(), l(), l(), l(), r = l(), 4 & _)for (n[0] = l(), n[2] = l(), G = n[0] + 256 * n[1], s = 0; G > s; s++)l();
          if (8 & _)for (s = 0, F = [], o = l(); o;)("7" === o || ":" === o) && (s = 0), a - 1 > s && (F[s++] = o), o = l();
          if (16 & _)for (o = l(); o;)o = l();
          2 & _ && (l(), l()), C(), t = l(), t |= l() << 8, t |= l() << 16, t |= l() << 24, i = l(), i |= l() << 8, i |= l() << 16, i |= l() << 24, R && P()
        }
      }, t.Util.Unzip.prototype.unzipFile = function(t) {
        var e;
        for (this.unzip(), e = 0; A.length > e; e++)if (A[e][1] === t)return A[e][0];
        return""
      }, t.Util.Unzip.prototype.unzip = function() {return P(), A}
    }, t.Util
  }), define("utils/encoding", ["jxg"], function(t) {
    var e = 0, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 11, 6, 6, 6, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 12, 24, 36, 60, 96, 84, 12, 12, 12, 48, 72, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 0, 12, 0, 12, 12, 12, 24, 12, 12, 12, 12, 12, 24, 12, 24, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24, 12, 12, 12, 12, 12, 24, 12, 12, 12, 12, 12, 12, 12, 24, 12, 12, 12, 12, 12, 12, 12, 12, 12, 36, 12, 36, 12, 12, 12, 36, 12, 12, 12, 12, 12, 36, 12, 36, 12, 12, 12, 36, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12];
    return t.Util = t.Util || {}, t.Util.UTF8 = {encode: function(t) {
      var e, i, r = "", s = t.length;
      if (t = t.replace(/\r\n/g, "\n"), "function" == typeof unescape && "function" == typeof encodeURIComponent)return unescape(encodeURIComponent(t));
      for (e = 0; s > e; e++)i = t.charCodeAt(e), 128 > i ? r += String.fromCharCode(i) : i > 127 && 2048 > i ? (r += String.fromCharCode(192 | i >> 6), r += String.fromCharCode(128 | 63 & i)) : (r += String.fromCharCode(224 | i >> 12), r += String.fromCharCode(128 | 63 & i >> 6), r += String.fromCharCode(128 | 63 & i));
      return r
    }, decode: function(t) {
      var r, s, o, n = 0, a = 0, h = e, l = [], c = t.length, d = [];
      for (r = 0; c > r; r++)s = t.charCodeAt(r), o = i[s], a = h !== e ? 63 & s | a << 6 : 255 >> o & s, h = i[256 + h + o], h === e && (a > 65535 ? l.push(55232 + (a >> 10), 56320 + (1023 & a)) : l.push(a), n++, 0 === n % 1e4 && (d.push(String.fromCharCode.apply(null, l)), l = []));
      return d.push(String.fromCharCode.apply(null, l)), d.join("")
    }, asciiCharCodeAt: function(t, e) {
      var i = t.charCodeAt(e);
      if (i > 255)switch (i) {
        case 8364:
          i = 128;
          break;
        case 8218:
          i = 130;
          break;
        case 402:
          i = 131;
          break;
        case 8222:
          i = 132;
          break;
        case 8230:
          i = 133;
          break;
        case 8224:
          i = 134;
          break;
        case 8225:
          i = 135;
          break;
        case 710:
          i = 136;
          break;
        case 8240:
          i = 137;
          break;
        case 352:
          i = 138;
          break;
        case 8249:
          i = 139;
          break;
        case 338:
          i = 140;
          break;
        case 381:
          i = 142;
          break;
        case 8216:
          i = 145;
          break;
        case 8217:
          i = 146;
          break;
        case 8220:
          i = 147;
          break;
        case 8221:
          i = 148;
          break;
        case 8226:
          i = 149;
          break;
        case 8211:
          i = 150;
          break;
        case 8212:
          i = 151;
          break;
        case 732:
          i = 152;
          break;
        case 8482:
          i = 153;
          break;
        case 353:
          i = 154;
          break;
        case 8250:
          i = 155;
          break;
        case 339:
          i = 156;
          break;
        case 382:
          i = 158;
          break;
        case 376:
          i = 159;
          break;
        default:
      }
      return i
    }}, t.Util.UTF8
  }), define("utils/base64", ["jxg", "utils/encoding"], function(t, e) {
    function i(t, e) {return 255 & t.charCodeAt(e)}

    function r(t, e) {
      var i = s.indexOf(t.charAt(e));
      if (-1 === i)throw Error("JSXGraph/utils/base64: Can't decode string (invalid character).");
      return i
    }

    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = "=";
    return t.Util = t.Util || {}, t.Util.Base64 = {encode: function(t) {
      var r, n, a, h, l, c = [];
      for (l = e.encode(t), a = l.length, h = a % 3, r = 0; a - h > r; r += 3)n = i(l, r) << 16 | i(l, r + 1) << 8 | i(l, r + 2), c.push(s.charAt(n >> 18), s.charAt(63 & n >> 12), s.charAt(63 & n >> 6), s.charAt(63 & n));
      switch (h) {
        case 1:
          n = i(l, a - 1), c.push(s.charAt(n >> 2), s.charAt(63 & n << 4), o, o);
          break;
        case 2:
          n = i(l, a - 2) << 8 | i(l, a - 1), c.push(s.charAt(n >> 10), s.charAt(63 & n >> 4), s.charAt(63 & n << 2), o)
      }
      return c.join("")
    }, decode: function(t, i) {
      var s, n, a, h, l, c, d = [], u = [];
      if (s = t.replace(/[^A-Za-z0-9\+\/=]/g, ""), a = s.length, 0 !== a % 4)throw Error("JSXGraph/utils/base64: Can't decode string (invalid input length).");
      for (s.charAt(a - 1) === o && (h = 1, s.charAt(a - 2) === o && (h = 2), a -= 4), n = 0; a > n; n += 4)l = r(s, n) << 18 | r(s, n + 1) << 12 | r(s, n + 2) << 6 | r(s, n + 3), u.push(l >> 16, 255 & l >> 8, 255 & l), 0 === n % 1e4 && (d.push(String.fromCharCode.apply(null, u)), u = []);
      switch (h) {
        case 1:
          l = r(s, a) << 12 | r(s, a + 1) << 6 | r(s, a + 2), u.push(l >> 10, 255 & l >> 2);
          break;
        case 2:
          l = r(s, n) << 6 | r(s, n + 1), u.push(l >> 4)
      }
      return d.push(String.fromCharCode.apply(null, u)), c = d.join(""), i && (c = e.decode(c)), c
    }, decodeAsArray: function(t) {
      var e, i = this.decode(t), r = [], s = i.length;
      for (e = 0; s > e; e++)r[e] = i.charCodeAt(e);
      return r
    }}, t.Util.Base64
  }), define("server/server", ["jxg", "utils/zip", "utils/base64", "utils/type"], function(t, e, i, r) {
    return t.Server = {modules: {}, runningCalls: {}, handleError: function(e) {t.debug("error occured, server says: " + e.message)}, callServer: function(s, o, n, a) {
      var h, l, c, d, u, p, f;
      a = a || !1, d = "";
      for (f in n)n.hasOwnProperty(f) && (d += "&" + escape(f) + "=" + escape(n[f]));
      p = r.toJSON(n);
      do u = s + Math.floor(4096 * Math.random()); while (r.exists(this.runningCalls[u]));
      return this.runningCalls[u] = {action: s}, r.exists(n.module) && (this.runningCalls[u].module = n.module), h = t.serverBase + "JXGServer.py", l = "action=" + escape(s) + "&id=" + u + "&dataJSON=" + escape(i.encode(p)), this.cbp = function(t) {
        var s, n, a, h, l, c, d, u;
        if (s = new e.Unzip(i.decodeAsArray(t)).unzip(), r.isArray(s) && s.length > 0 && (s = s[0][0]), r.exists(s))if (n = window.JSON && window.JSON.parse ? window.JSON.parse(s) : Function("return " + s)(), "error" === n.type)this.handleError(n); else if ("response" === n.type) {
          for (c = n.id, d = 0; n.fields.length > d; d++)a = n.fields[d], h = a.namespace + ("object" == typeof Function("return " + a.namespace)() ? "." : ".prototype.") + a.name + " = " + a.value, Function(h)();
          for (d = 0; n.handler.length > d; d++) {
            for (a = n.handler[d], l = [], u = 0; a.parameters.length > u; u++)l[u] = '"' + a.parameters[u] + '": ' + a.parameters[u];
            h = "if(typeof JXG.Server.modules." + this.runningCalls[c].module + ' == "undefined")' + "JXG.Server.modules." + this.runningCalls[c].module + " = {};", h += "JXG.Server.modules." + this.runningCalls[c].module + "." + a.name + "_cb = " + a.callback + ";", h += "JXG.Server.modules." + this.runningCalls[c].module + "." + a.name + " = function (" + a.parameters.join(",") + ", __JXGSERVER_CB__, __JXGSERVER_SYNC) {" + 'if(typeof __JXGSERVER_CB__ == "undefined") __JXGSERVER_CB__ = JXG.Server.modules.' + this.runningCalls[c].module + "." + a.name + "_cb;" + "var __JXGSERVER_PAR__ = {" + l.join(",") + ', "module": "' + this.runningCalls[c].module + '", "handler": "' + a.name + '" };' + 'JXG.Server.callServer("exec", __JXGSERVER_CB__, __JXGSERVER_PAR__, __JXGSERVER_SYNC);' + "};", Function(h)()
          }
          delete this.runningCalls[c], o(n.data)
        }
      }, this.cb = t.bind(this.cbp, this), window.XMLHttpRequest ? (c = new XMLHttpRequest, c.overrideMimeType("text/plain; charset=iso-8859-1")) : c = new ActiveXObject("Microsoft.XMLHTTP"), c && (c.open("POST", h, !a), c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a || (c.onreadystatechange = function(t) {return function() {return 4 === c.readyState && 200 === c.status ? (t(c.responseText), !0) : !1}}(this.cb)), c.send(l), a) ? (this.cb(c.responseText), !0) : !1
    }, loadModule_cb: function(e) {
      var i;
      for (i = 0; e.length > i; i++)t.debug(e[i].name + ": " + e[i].value)
    }, loadModule: function(e) {return t.Server.callServer("load", t.Server.loadModule_cb, {module: e}, !0)}}, t.Server.load = t.Server.loadModule, t.Server
  }), define("math/symbolic", ["jxg", "base/constants", "base/coords", "math/math", "math/geometry", "server/server", "utils/type"], function(t, e, i, r, s, o, n) {
    var a;
    return r.Symbolic = {generateSymbolicCoordinatesPartial: function(t, e, i, r) {
      var s, o, a, h = e.ancestors, l = 0, c = function(t) {
        var e;
        return e = "underscore" === r ? i + "_{" + t + "}" : "brace" === r ? i + "[" + t + "]" : i + t
      };
      t.listOfFreePoints = [], t.listOfDependantPoints = [];
      for (o in h)if (h.hasOwnProperty(o) && (s = 0, n.isPoint(h[o]))) {
        for (a in h[o].ancestors)h[o].ancestors.hasOwnProperty(a) && s++;
        0 === s ? (h[o].symbolic.x = h[o].coords.usrCoords[1], h[o].symbolic.y = h[o].coords.usrCoords[2], t.listOfFreePoints.push(h[o])) : (l += 1, h[o].symbolic.x = c(l), l += 1, h[o].symbolic.y = c(l), t.listOfDependantPoints.push(h[o]))
      }
      return n.isPoint(e) && (e.symbolic.x = "x", e.symbolic.y = "y"), l
    }, clearSymbolicCoordinates: function(t) {
      var e = function(t) {
        var e, i = t && t.length || 0;
        for (e = 0; i > e; e++)n.isPoint(t[e]) && (t[e].symbolic.x = "", t[e].symbolic.y = "")
      };
      e(t.listOfFreePoints), e(t.listOfDependantPoints), delete t.listOfFreePoints, delete t.listOfDependantPoints
    }, generatePolynomials: function(t, e, i) {
      var r, s, o, a, h = e.ancestors, l = [], c = [];
      i && this.generateSymbolicCoordinatesPartial(t, e, "u", "brace"), h[e.id] = e;
      for (r in h)if (h.hasOwnProperty(r) && (a = 0, l = [], n.isPoint(h[r]))) {
        for (s in h[r].ancestors)h[r].ancestors.hasOwnProperty(s) && a++;
        if (a > 0)for (l = h[r].generatePolynomial(), o = 0; l.length > o; o++)c.push(l[o])
      }
      return i && this.clearSymbolicCoordinates(t), c
    }, geometricLocusByGroebnerBase: function(t, h) {
      var l, c, d, u, p, f, m, b, g, v, y, C, P, _ = t.options.locus, E = {}, S = this.generateSymbolicCoordinatesPartial(t, h, "u", "brace"), x = new i(e.COORDS_BY_USR, [0, 0], t), O = new i(e.COORDS_BY_USR, [t.canvasWidth, t.canvasHeight], t), T = 1, w = 0, M = 0, A = 0;
      if (o.modules.geoloci === a && o.loadModule("geoloci"), o.modules.geoloci === a)throw Error("JSXGraph: Unable to load JXG.Server module 'geoloci.py'.");
      if (m = x.usrCoords[1], b = O.usrCoords[1], g = O.usrCoords[2], v = x.usrCoords[2], _.translateToOrigin && t.listOfFreePoints.length > 0) {
        for (u = _.toOrigin !== a && null !== _.toOrigin && n.isInArray(t.listOfFreePoints, _.toOrigin.id) ? _.toOrigin : t.listOfFreePoints[0], w = u.symbolic.x, M = u.symbolic.y, f = 0; t.listOfFreePoints.length > f; f++)t.listOfFreePoints[f].symbolic.x -= w, t.listOfFreePoints[f].symbolic.y -= M;
        if (m -= w, b -= w, g -= M, v -= M, _.translateTo10 && t.listOfFreePoints.length > 1) {
          for (p = _.to10 !== a && null !== _.to10 && _.to10.id !== _.toOrigin.id && n.isInArray(t.listOfFreePoints, _.to10.id) ? _.to10 : t.listOfFreePoints[0].id === u.id ? t.listOfFreePoints[1] : t.listOfFreePoints[0], A = s.rad([1, 0], [0, 0], [p.symbolic.x, p.symbolic.y]), y = Math.cos(-A), C = Math.sin(-A), f = 0; t.listOfFreePoints.length > f; f++)P = t.listOfFreePoints[f].symbolic.x, t.listOfFreePoints[f].symbolic.x = y * t.listOfFreePoints[f].symbolic.x - C * t.listOfFreePoints[f].symbolic.y, t.listOfFreePoints[f].symbolic.y = C * P + y * t.listOfFreePoints[f].symbolic.y;
          if (p.symbolic.y = 0, P = m, m = y * m - C * g, g = C * P + y * g, P = b, b = y * b - C * v, v = C * P + y * v, _.stretch && Math.abs(p.symbolic.x) > r.eps) {
            for (T = p.symbolic.x, f = 0; t.listOfFreePoints.length > f; f++)t.listOfFreePoints[f].symbolic.x /= T, t.listOfFreePoints[f].symbolic.y /= T;
            for (f = 0; t.objectsList.length > f; f++)t.objectsList[f].elementClass === e.OBJECT_CLASS_CIRCLE && "pointRadius" === t.objectsList[f].method && (E[f] = t.objectsList[f].radius, t.objectsList[f].radius /= T);
            m /= T, b /= T, g /= T, v /= T, p.symbolic.x = 1
          }
        }
        for (f = 0; t.listOfFreePoints.length > f; f++)P = t.listOfFreePoints[f].symbolic.x, Math.abs(P) < r.eps && (t.listOfFreePoints[f].symbolic.x = 0), Math.abs(P - Math.round(P)) < r.eps && (t.listOfFreePoints[f].symbolic.x = Math.round(P)), P = t.listOfFreePoints[f].symbolic.y, Math.abs(P) < r.eps && (t.listOfFreePoints[f].symbolic.y = 0), Math.abs(P - Math.round(P)) < r.eps && (t.listOfFreePoints[f].symbolic.y = Math.round(P))
      }
      l = this.generatePolynomials(t, h), c = l.join(","), this.cbp = function(t) {d = t}, this.cb = n.bind(this.cbp, this), o.modules.geoloci.lociCoCoA(m, b, g, v, S, c, T, A, w, M, this.cb, !0), this.clearSymbolicCoordinates(t);
      for (f in E)E.hasOwnProperty(f) && (t.objects[f].radius = E[f]);
      return d
    }}, r.Symbolic
  }), define("math/poly", ["jxg", "math/math", "utils/type"], function(t, e, i) {
    return e.Poly = {}, e.Poly.Ring = function(t) {this.vars = t}, t.extend(e.Poly.Ring.prototype, {}), e.Poly.Monomial = function(t, e, r) {
      var s;
      if (!i.exists(t))throw Error("JSXGraph error: In JXG.Math.Poly.monomial missing parameter 'ring'.");
      for (i.isArray(r) || (r = []), r = r.slice(0, t.vars.length), s = r.length; t.vars.length > s; s++)r.push(0);
      this.ring = t, this.coefficient = e || 0, this.exponents = i.deepCopy(r)
    }, t.extend(e.Poly.Monomial.prototype, {copy: function() {return new e.Poly.Monomial(this.ring, this.coefficient, this.exponents)}, print: function() {
      var t, e = [];
      for (t = 0; this.ring.vars.length > t; t++)e.push(this.ring.vars[t] + "^" + this.exponents[t]);
      return this.coefficient + "*" + e.join("*")
    }}), e.Poly.Polynomial = function(t, e) {
      var r, s = function() {};
      if (!i.exists(t))throw Error("JSXGraph error: In JXG.Math.Poly.polynomial missing parameter 'ring'.");
      r = i.exists(e) && "string" == typeof e ? s(e) : [], this.ring = t, this.monomials = r
    }, t.extend(e.Poly.Polynomial.prototype, {findSignature: function(t) {
      var e;
      for (e = 0; this.monomials.length > e; e++)if (i.cmpArrays(this.monomials[e].exponents, t))return e;
      return-1
    }, addSubMonomial: function(t, e) {
      var i;
      i = this.findSignature(t.exponents), i > -1 ? this.monomials[i].coefficient += e * t.coefficient : (t.coefficient *= e, this.monomials.push(t))
    }, add: function(t) {
      var e;
      if (!i.exists(t) || t.ring !== this.ring)throw Error("JSXGraph error: In JXG.Math.Poly.polynomial.add either summand is undefined or rings don't match.");
      if (i.isArray(t.exponents))this.addSubMonomial(t, 1); else for (e = 0; t.monomials.length > e; e++)this.addSubMonomial(t.monomials[e], 1)
    }, sub: function(t) {
      var e;
      if (!i.exists(t) || t.ring !== this.ring)throw Error("JSXGraph error: In JXG.Math.Poly.polynomial.sub either summand is undefined or rings don't match.");
      if (i.isArray(t.exponents))this.addSubMonomial(t, -1); else for (e = 0; t.monomials.length > e; e++)this.addSubMonomial(t.monomials[e], -1)
    }, copy: function() {
      var t, i;
      for (i = new e.Poly.Polynomial(this.ring), t = 0; this.monomials.length > t; t++)i.monomials.push(this.monomials[t].copy());
      return i
    }, print: function() {
      var t, e = [];
      for (t = 0; this.monomials.length > t; t++)e.push("(" + this.monomials[t].print() + ")");
      return e.join("+")
    }}), e.Poly
  }), define("math/complex", ["jxg", "math/math"], function(t) {
    return t.Complex = function(t, e) {this.isComplex = !0, t && t.isComplex && (e = t.imaginary, t = t.real), this.real = t || 0, this.imaginary = e || 0, this.absval = 0, this.angle = 0}, t.extend(t.Complex.prototype, {toString: function() {return this.real + " + " + this.imaginary + "i"}, add: function(t) {return"number" == typeof t ? this.real += t : (this.real += t.real, this.imaginary += t.imaginary), this}, sub: function(t) {return"number" == typeof t ? this.real -= t : (this.real -= t.real, this.imaginary -= t.imaginary), this}, mult: function(t) {
      var e, i;
      return"number" == typeof t ? (this.real *= t, this.imaginary *= t) : (e = this.real, i = this.imaginary, this.real = e * t.real - i * t.imaginary, this.imaginary = e * t.imaginary + i * t.real), this
    }, div: function(t) {
      var e, i, r;
      if ("number" == typeof t) {
        if (Math.abs(t) < Math.eps)return this.real = 1 / 0, this.imaginary = 1 / 0, this;
        this.real /= t, this.imaginary /= t
      } else {
        if (Math.abs(t.real) < Math.eps && Math.abs(t.imaginary) < Math.eps)return this.real = 1 / 0, this.imaginary = 1 / 0, this;
        e = t.real * t.real + t.imaginary * t.imaginary, r = this.real, i = this.imaginary, this.real = (r * t.real + i * t.imaginary) / e, this.imaginary = (i * t.real - r * t.imaginary) / e
      }
      return this
    }, conj: function() {return this.imaginary *= -1, this}}), t.C = {}, t.C.add = function(e, i) {
      var r = new t.Complex(e);
      return r.add(i), r
    }, t.C.sub = function(e, i) {
      var r = new t.Complex(e);
      return r.sub(i), r
    }, t.C.mult = function(e, i) {
      var r = new t.Complex(e);
      return r.mult(i), r
    }, t.C.div = function(e, i) {
      var r = new t.Complex(e);
      return r.div(i), r
    }, t.C.conj = function(e) {
      var i = new t.Complex(e);
      return i.conj(), i
    }, t.C.abs = function(e) {
      var i = new t.Complex(e);
      return i.conj(), i.mult(e), Math.sqrt(i.real)
    }, t.Complex.C = t.C, t.Complex
  }), define("renderer/abstract", ["jxg", "options", "base/coords", "base/constants", "math/math", "math/geometry", "utils/type", "utils/env"], function(t, e, i, r, s, o, n, a) {
    return t.AbstractRenderer = function() {this.vOffsetText = 0, this.enhancedRendering = !0, this.container = null, this.type = ""}, t.extend(t.AbstractRenderer.prototype, {_updateVisual: function(t, e, i) {(i || this.enhancedRendering) && (e = e || {}, t.visProp.draft ? this.setDraft(t) : (e.stroke || (this.setObjectStrokeColor(t, t.visProp.strokecolor, t.visProp.strokeopacity), this.setObjectStrokeWidth(t, t.visProp.strokewidth)), e.fill || this.setObjectFillColor(t, t.visProp.fillcolor, t.visProp.fillopacity), e.dash || this.setDashStyle(t, t.visProp), e.shadow || this.setShadow(t), e.gradient || this.setShadow(t)))}, drawPoint: function(t) {
      var i, r = e.normalizePointFace(t.visProp.face);
      i = "o" === r ? "ellipse" : "[]" === r ? "rect" : "path", t.rendNode = this.appendChildPrim(this.createPrim(i, t.id), t.visProp.layer), this.appendNodesToElement(t, i), this._updateVisual(t, {dash: !0, shadow: !0}, !0), this.updatePoint(t)
    }, updatePoint: function(t) {
      var i = t.visProp.size, r = e.normalizePointFace(t.visProp.face);
      isNaN(t.coords.scrCoords[2] + t.coords.scrCoords[1]) || (this._updateVisual(t, {dash: !1, shadow: !1}), i *= t.board && t.board.options.point.zoom ? Math.sqrt(t.board.zoomX * t.board.zoomY) : 1, "o" === r ? this.updateEllipsePrim(t.rendNode, t.coords.scrCoords[1], t.coords.scrCoords[2], i + 1, i + 1) : "[]" === r ? this.updateRectPrim(t.rendNode, t.coords.scrCoords[1] - i, t.coords.scrCoords[2] - i, 2 * i, 2 * i) : this.updatePathPrim(t.rendNode, this.updatePathStringPoint(t, i, r), t.board), this.setShadow(t))
    }, changePointStyle: function(t) {
      var e = this.getElementById(t.id);
      n.exists(e) && this.remove(e), this.drawPoint(t), n.clearVisPropOld(t), t.visProp.visible || this.hide(t), t.visProp.draft && this.setDraft(t)
    }, drawLine: function(t) {t.rendNode = this.appendChildPrim(this.createPrim("line", t.id), t.visProp.layer), this.appendNodesToElement(t, "lines"), this.updateLine(t)}, updateLine: function(t) {
      var e, s, n, a, h, l, c, d, u = new i(r.COORDS_BY_USER, t.point1.coords.usrCoords, t.board), p = new i(r.COORDS_BY_USER, t.point2.coords.usrCoords, t.board), f = 10, m = null;
      (t.visProp.firstarrow || t.visProp.lastarrow) && (m = -4), o.calcStraight(t, u, p, m), h = l = c = d = 0, (t.visProp.lastarrow || t.visProp.firstarrow) && (s = t.point1.visProp.size, n = t.point2.visProp.size, e = s + n, t.visProp.lastarrow && t.visProp.touchlastpoint && (a = u.distance(r.COORDS_BY_SCREEN, p), a > e && (c = (p.scrCoords[1] - u.scrCoords[1]) * n / a, d = (p.scrCoords[2] - u.scrCoords[2]) * n / a, p = new i(r.COORDS_BY_SCREEN, [p.scrCoords[1] - c, p.scrCoords[2] - d], t.board))), t.visProp.firstarrow && t.visProp.touchfirstpoint && (a = u.distance(r.COORDS_BY_SCREEN, p), a > e && (h = (p.scrCoords[1] - u.scrCoords[1]) * s / a, l = (p.scrCoords[2] - u.scrCoords[2]) * s / a, u = new i(r.COORDS_BY_SCREEN, [u.scrCoords[1] + h, u.scrCoords[2] + l], t.board))), e = Math.max(3 * parseInt(t.visProp.strokewidth, 10), f), a = u.distance(r.COORDS_BY_SCREEN, p), t.visProp.lastarrow && "vml" !== t.board.renderer.type && a >= f && (c = (p.scrCoords[1] - u.scrCoords[1]) * e / a, d = (p.scrCoords[2] - u.scrCoords[2]) * e / a), t.visProp.firstarrow && "vml" !== t.board.renderer.type && a >= f && (h = (p.scrCoords[1] - u.scrCoords[1]) * e / a, l = (p.scrCoords[2] - u.scrCoords[2]) * e / a)), this.updateLinePrim(t.rendNode, u.scrCoords[1] + h, u.scrCoords[2] + l, p.scrCoords[1] - c, p.scrCoords[2] - d, t.board), this.makeArrows(t), this._updateVisual(t)
    }, drawTicks: function(t) {t.rendNode = this.appendChildPrim(this.createPrim("path", t.id), t.visProp.layer), this.appendNodesToElement(t, "path")}, updateTicks: function() {}, drawCurve: function(t) {t.rendNode = this.appendChildPrim(this.createPrim("path", t.id), t.visProp.layer), this.appendNodesToElement(t, "path"), this._updateVisual(t, {shadow: !0}, !0), this.updateCurve(t)}, updateCurve: function(t) {this._updateVisual(t), t.visProp.handdrawing ? this.updatePathPrim(t.rendNode, this.updatePathStringBezierPrim(t), t.board) : this.updatePathPrim(t.rendNode, this.updatePathStringPrim(t), t.board), t.numberPoints > 1 && this.makeArrows(t)}, drawEllipse: function(t) {t.rendNode = this.appendChildPrim(this.createPrim("ellipse", t.id), t.visProp.layer), this.appendNodesToElement(t, "ellipse"), this.updateEllipse(t)}, updateEllipse: function(t) {
      this._updateVisual(t);
      var e = t.Radius();
      e > 0 && Math.abs(t.center.coords.usrCoords[0]) > s.eps && !isNaN(e + t.center.coords.scrCoords[1] + t.center.coords.scrCoords[2]) && 2e6 > e * t.board.unitX && this.updateEllipsePrim(t.rendNode, t.center.coords.scrCoords[1], t.center.coords.scrCoords[2], e * t.board.unitX, e * t.board.unitY)
    }, drawPolygon: function(t) {t.rendNode = this.appendChildPrim(this.createPrim("polygon", t.id), t.visProp.layer), this.appendNodesToElement(t, "polygon"), this.updatePolygon(t)}, updatePolygon: function(t) {
      var e, i, r;
      for (this._updateVisual(t, {stroke: !0, dash: !0}), this.updatePolygonPrim(t.rendNode, t), i = t.vertices.length, r = !0, e = 0; i > e; ++e)if (!t.vertices[e].isReal) {
        r = !1;
        break
      }
      for (i = t.borders.length, e = 0; i > e; ++e)r && t.borders[e].visProp.visible ? this.show(t.borders[e]) : this.hide(t.borders[e])
    }, displayCopyright: function() {}, drawInternalText: function() {}, updateInternalText: function() {}, drawText: function(t) {
      var e, i;
      "html" === t.visProp.display && a.isBrowser ? (e = this.container.ownerDocument.createElement("div"), e.style.position = "absolute", e.className = t.visProp.cssclass, i = "" === this.container.style.zIndex ? 0 : parseInt(this.container.style.zIndex, 10), e.style.zIndex = i + t.board.options.layer.text, this.container.appendChild(e), e.setAttribute("id", this.container.id + "_" + t.id)) : e = this.drawInternalText(t), t.rendNode = e, t.htmlStr = "", this.updateText(t)
    }, updateText: function(t) {
      var e, i, r, s = t.plaintext;
      if (t.visProp.visible)if (this.updateTextStyle(t, !1), "html" === t.visProp.display) {
        if (isNaN(t.coords.scrCoords[1] + t.coords.scrCoords[2]) || (i = t.coords.scrCoords[1], i = 1e6 > Math.abs(i) ? i : 1e6, e = "right" === t.visProp.anchorx ? Math.floor(t.board.canvasWidth - i) : "middle" === t.visProp.anchorx ? Math.floor(i - .5 * t.size[0]) : Math.floor(i), t.visPropOld.left !== t.visProp.anchorx + e && ("right" === t.visProp.anchorx ? (t.rendNode.style.right = e + "px", t.rendNode.style.left = "auto") : (t.rendNode.style.left = e + "px", t.rendNode.style.right = "auto"), t.visPropOld.left = t.visProp.anchorx + e), i = t.coords.scrCoords[2] + this.vOffsetText, i = 1e6 > Math.abs(i) ? i : 1e6, e = "bottom" === t.visProp.anchory ? Math.floor(t.board.canvasHeight - i) : "middle" === t.visProp.anchory ? Math.floor(i - .5 * t.size[1]) : Math.floor(i), t.visPropOld.top !== t.visProp.anchory + e && ("bottom" === t.visProp.anchory ? (t.rendNode.style.top = "auto", t.rendNode.style.bottom = e + "px") : (t.rendNode.style.bottom = "auto", t.rendNode.style.top = e + "px"), t.visPropOld.top = t.visProp.anchory + e)), t.htmlStr !== s) {
          try {
            t.rendNode.innerHTML = s
          } catch (o) {
            r = t.rendNode.parentNode, t.rendNode.parentNode.removeChild(t.rendNode), t.rendNode.innerHTML = s, r.appendChild(t.rendNode)
          }
          t.htmlStr = s, t.visProp.usemathjax ? MathJax.Hub.Queue(["Typeset", MathJax.Hub, t.rendNode]) : t.visProp.useasciimathml && AMprocessNode(t.rendNode, !1)
        }
        this.transformImage(t, t.transformations)
      } else this.updateInternalText(t)
    }, updateTextStyle: function(t, e) {
      var i, r, s, o, h = t.visProp, l = a.isBrowser ? h.display : "internal";
      if (e ? (s = h.highlightstrokecolor, r = h.highlightstrokeopacity, o = h.highlightcssclass) : (s = h.strokecolor, r = h.strokeopacity, o = h.cssclass), ("html" === l || "canvas" !== this.type && "no" !== this.type) && (i = n.evaluate(t.visProp.fontsize), t.visPropOld.fontsize !== i)) {
        t.needsSizeUpdate = !0;
        try {
          t.rendNode.style.fontSize = i + "px"
        } catch (c) {
          t.rendNode.style.fontSize = i
        }
        t.visPropOld.fontsize = i
      }
      return"html" === l ? (t.visPropOld.cssclass !== o && (t.rendNode.className = o, t.visPropOld.cssclass = o, t.needsSizeUpdate = !0), this.setObjectStrokeColor(t, s, r)) : this.updateInternalTextStyle(t, s, r), this
    }, updateInternalTextStyle: function(t, e, i) {this.setObjectStrokeColor(t, e, i)}, drawImage: function() {}, updateImage: function(t) {this.updateRectPrim(t.rendNode, t.coords.scrCoords[1], t.coords.scrCoords[2] - t.size[1], t.size[0], t.size[1]), this.updateImageURL(t), this.transformImage(t, t.transformations), this._updateVisual(t, {stroke: !0, dash: !0}, !0)}, joinTransforms: function(t, e) {
      var i, r = t.board.origin.scrCoords[1], o = t.board.origin.scrCoords[2], n = t.board.unitX, a = t.board.unitY, h = e.length, l = [
        [1, 0, 0],
        [-r / n, 1 / n, 0],
        [o / a, 0, -1 / a]
      ];
      for (i = 0; h > i; i++)l = s.matMatMult(e[i].matrix, l);
      return l = s.matMatMult([
        [1, 0, 0],
        [r, n, 0],
        [o, 0, -a]
      ], l)
    }, transformImage: function() {}, updateImageURL: function() {}, updateImageStyle: function(t, e) {t.rendNode.className = e ? t.visProp.highlightcssclass : t.visProp.cssclass}, appendChildPrim: function() {}, appendNodesToElement: function() {}, createPrim: function() {return null}, remove: function() {}, makeArrows: function() {}, updateEllipsePrim: function() {}, updateLinePrim: function() {}, updatePathPrim: function() {}, updatePathStringPoint: function() {}, updatePathStringPrim: function() {}, updatePathStringBezierPrim: function() {}, updatePolygonPrim: function() {}, updateRectPrim: function() {}, setPropertyPrim: function() {}, show: function() {}, hide: function() {}, setBuffering: function() {}, setDashStyle: function() {}, setDraft: function(t) {
      if (t.visProp.draft) {
        var e = t.board.options.elements.draft.color, i = t.board.options.elements.draft.opacity;
        t.type === r.OBJECT_TYPE_POLYGON ? this.setObjectFillColor(t, e, i) : (t.elementClass === r.OBJECT_CLASS_POINT ? this.setObjectFillColor(t, e, i) : this.setObjectFillColor(t, "none", 0), this.setObjectStrokeColor(t, e, i), this.setObjectStrokeWidth(t, t.board.options.elements.draft.strokeWidth))
      }
    }, removeDraft: function(t) {t.type === r.OBJECT_TYPE_POLYGON ? this.setObjectFillColor(t, t.visProp.fillcolor, t.visProp.fillopacity) : (t.type === r.OBJECT_CLASS_POINT && this.setObjectFillColor(t, t.visProp.fillcolor, t.visProp.fillopacity), this.setObjectStrokeColor(t, t.visProp.strokecolor, t.visProp.strokeopacity), this.setObjectStrokeWidth(t, t.visProp.strokewidth))}, setGradient: function() {}, updateGradient: function() {}, setObjectFillColor: function() {}, setObjectStrokeColor: function() {}, setObjectStrokeWidth: function() {}, setShadow: function() {}, highlight: function(t) {
      var e, i = t.visProp;
      if (!i.draft) {
        if (t.type === r.OBJECT_TYPE_POLYGON)for (this.setObjectFillColor(t, i.highlightfillcolor, i.highlightfillopacity), e = 0; t.borders.length > e; e++)this.setObjectStrokeColor(t.borders[e], t.borders[e].visProp.highlightstrokecolor, t.borders[e].visProp.highlightstrokeopacity); else t.elementClass === r.OBJECT_CLASS_TEXT ? this.updateTextStyle(t, !0) : t.type === r.OBJECT_TYPE_IMAGE ? this.updateImageStyle(t, !0) : (this.setObjectStrokeColor(t, i.highlightstrokecolor, i.highlightstrokeopacity), this.setObjectFillColor(t, i.highlightfillcolor, i.highlightfillopacity));
        i.highlightstrokewidth && this.setObjectStrokeWidth(t, Math.max(i.highlightstrokewidth, i.strokewidth))
      }
      return this
    }, noHighlight: function(t) {
      var e, i = t.visProp;
      if (!t.visProp.draft) {
        if (t.type === r.OBJECT_TYPE_POLYGON)for (this.setObjectFillColor(t, i.fillcolor, i.fillopacity), e = 0; t.borders.length > e; e++)this.setObjectStrokeColor(t.borders[e], t.borders[e].visProp.strokecolor, t.borders[e].visProp.strokeopacity); else t.elementClass === r.OBJECT_CLASS_TEXT ? this.updateTextStyle(t, !1) : t.type === r.OBJECT_TYPE_IMAGE ? this.updateImageStyle(t, !1) : (this.setObjectStrokeColor(t, i.strokecolor, i.strokeopacity), this.setObjectFillColor(t, i.fillcolor, i.fillopacity));
        this.setObjectStrokeWidth(t, i.strokewidth)
      }
      return this
    }, suspendRedraw: function() {}, unsuspendRedraw: function() {}, drawZoomBar: function(t) {
      var e, i, r = function(t) {t || (t = window.event), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0}, s = function(s, o) {
        var n;
        n = e.createElement("span"), i.appendChild(n), n.appendChild(e.createTextNode(s)), a.addEvent(n, "mouseover", function() {this.style.backgroundColor = t.options.navbar.highlightFillColor}, n), a.addEvent(n, "mouseover", function() {this.style.backgroundColor = t.options.navbar.highlightFillColor}, n), a.addEvent(n, "mouseout", function() {this.style.backgroundColor = t.options.navbar.fillColor}, n), a.addEvent(n, "click", o, t), a.addEvent(n, "mouseup", r, t), a.addEvent(n, "mousedown", r, t), a.addEvent(n, "touchend", r, t), a.addEvent(n, "touchstart", r, t)
      };
      a.isBrowser && (e = t.containerObj.ownerDocument, i = e.createElement("div"), i.setAttribute("id", t.containerObj.id + "_navigationbar"), i.style.color = t.options.navbar.strokeColor, i.style.backgroundColor = t.options.navbar.fillColor, i.style.padding = t.options.navbar.padding, i.style.position = t.options.navbar.position, i.style.fontSize = t.options.navbar.fontSize, i.style.cursor = t.options.navbar.cursor, i.style.zIndex = t.options.navbar.zIndex, t.containerObj.appendChild(i), i.style.right = t.options.navbar.right, i.style.bottom = t.options.navbar.bottom, t.attr.showreload && s(" ↻ ", function() {t.reload()}), t.attr.showcleartraces && s(" ⊗ ", function() {t.clearTraces()}), t.attr.shownavigation && (s(" – ", t.zoomOut), s(" o ", t.zoom100), s(" + ", t.zoomIn), s(" ← ", t.clickLeftArrow), s(" ↓ ", t.clickUpArrow), s(" ↑ ", t.clickDownArrow), s(" → ", t.clickRightArrow)))
    }, getElementById: function(t) {return this.container.ownerDocument.getElementById(this.container.id + "_" + t)}, removeToInsertLater: function(t) {
      var e = t.parentNode, i = t.nextSibling;
      return e.removeChild(t), function() {i ? e.insertBefore(t, i) : e.appendChild(t)}
    }, resize: function() {}, createTouchpoints: function() {}, showTouchpoint: function() {}, hideTouchpoint: function() {}, updateTouchpoint: function() {}}), t.AbstractRenderer
  }), define("renderer/no", ["jxg", "renderer/abstract"], function(t, e) {return t.NoRenderer = function() {this.enhancedRendering = !1, this.type = "no"}, t.extend(t.NoRenderer.prototype, {drawPoint: function() {}, updatePoint: function() {}, changePointStyle: function() {}, drawLine: function() {}, updateLine: function() {}, drawTicks: function() {}, updateTicks: function() {}, drawCurve: function() {}, updateCurve: function() {}, drawEllipse: function() {}, updateEllipse: function() {}, drawPolygon: function() {}, updatePolygon: function() {}, displayCopyright: function() {}, drawInternalText: function() {}, updateInternalText: function() {}, drawText: function() {}, updateText: function() {}, updateTextStyle: function() {}, updateInternalTextStyle: function() {}, drawImage: function() {}, updateImage: function() {}, transformImage: function() {}, updateImageURL: function() {}, appendChildPrim: function() {}, appendNodesToElement: function() {}, createPrim: function() {return null}, remove: function() {}, makeArrows: function() {}, updateEllipsePrim: function() {}, updateLinePrim: function() {}, updatePathPrim: function() {}, updatePathStringPoint: function() {}, updatePathStringPrim: function() {}, updatePathStringBezierPrim: function() {}, updatePolygonPrim: function() {}, updateRectPrim: function() {}, setPropertyPrim: function() {}, show: function() {}, hide: function() {}, setBuffering: function() {}, setDashStyle: function() {}, setDraft: function() {}, removeDraft: function() {}, setGradient: function() {}, updateGradient: function() {}, setObjectFillColor: function() {}, setObjectStrokeColor: function() {}, setObjectStrokeWidth: function() {}, setShadow: function() {}, highlight: function() {}, noHighlight: function() {}, suspendRedraw: function() {}, unsuspendRedraw: function() {}, drawZoomBar: function() {}, getElementById: function() {return null}, resize: function() {}, removeToInsertLater: function() {return function() {}}}), t.NoRenderer.prototype = new e, t.NoRenderer}), define("reader/file", ["jxg", "utils/env", "utils/type", "utils/encoding", "utils/base64"], function(t, e, i, r, s) {
    return t.FileReader = {parseFileContent: function(e, o, n, a, h) {
      var l = !1;
      i.exists(a) || (a = !0);
      try {
        l = new XMLHttpRequest, "raw" === n.toLowerCase() ? l.overrideMimeType("text/plain; charset=iso-8859-1") : l.overrideMimeType("text/xml; charset=iso-8859-1")
      } catch (c) {
        try {
          l = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {
          try {
            l = new ActiveXObject("Microsoft.XMLHTTP")
          } catch (u) {
            l = !1
          }
        }
      }
      if (!l)return t.debug("AJAX not activated!"), void 0;
      l.open("GET", e, a), this.cbp = "raw" === n.toLowerCase() ? function() {
        var t = l;
        4 === t.readyState && o(t.responseText)
      } : function() {
        var t = l, e = "";
        4 === t.readyState && (e = !i.exists(t.responseStream) || "PK" !== t.responseText.slice(0, 2) && 31 !== r.asciiCharCodeAt(t.responseText.slice(0, 1), 0) ? t.responseText : s.decode(jxgBinFileReader(t)), this.parseString(e, o, n, h))
      }, this.cb = i.bind(this.cbp, this), l.onreadystatechange = this.cb;
      try {
        l.send(null)
      } catch (p) {
        throw Error("JSXGraph: A problem occurred while trying to read '" + e + "'.")
      }
    }, parseString: function(e, r, s, o) {
      var n, a;
      if (s = s.toLowerCase(), n = t.readers[s], !i.exists(n))throw Error("JSXGraph: There is no reader available for '" + s + "'.");
      a = new n(r, e), a.read(), "function" == typeof o && o(r)
    }}, !e.isMetroApp() && e.isBrowser && "object" == typeof navigator && /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) && document && document.write && document.write('<script type="text/vbscript">\nFunction Base64Encode(inData)\n  Const Base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"\n  Dim cOut, sOut, I\n  For I = 1 To LenB(inData) Step 3\n    Dim nGroup, pOut, sGroup\n    nGroup = &H10000 * AscB(MidB(inData, I, 1)) + _\n      &H100 * MyASC(MidB(inData, I + 1, 1)) + MyASC(MidB(inData, I + 2, 1))\n    nGroup = Oct(nGroup)\n    nGroup = String(8 - Len(nGroup), "0") & nGroup\n    pOut = Mid(Base64, CLng("&o" & Mid(nGroup, 1, 2)) + 1, 1) + _\n      Mid(Base64, CLng("&o" & Mid(nGroup, 3, 2)) + 1, 1) + _\n      Mid(Base64, CLng("&o" & Mid(nGroup, 5, 2)) + 1, 1) + _\n      Mid(Base64, CLng("&o" & Mid(nGroup, 7, 2)) + 1, 1)\n    sOut = sOut + pOut\n  Next\n  Select Case LenB(inData) Mod 3\n    Case 1: \'8 bit final\n      sOut = Left(sOut, Len(sOut) - 2) + "=="\n    Case 2: \'16 bit final\n      sOut = Left(sOut, Len(sOut) - 1) + "="\n  End Select\n  Base64Encode = sOut\nEnd Function\n\nFunction MyASC(OneChar)\n  If OneChar = "" Then MyASC = 0 Else MyASC = AscB(OneChar)\nEnd Function\n\nFunction jxgBinFileReader(xhr)\n    Dim byteString\n    Dim b64String\n    Dim i\n    byteString = xhr.responseBody\n    ReDim byteArray(LenB(byteString))\n    For i = 1 To LenB(byteString)\n        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n    Next\n    b64String = Base64Encode(byteString)\n    jxgBinFileReader = b64String\nEnd Function\n</script>\n'), t.FileReader
  }), define("base/text", ["jxg", "base/constants", "base/coords", "base/element", "parser/geonext", "math/statistics", "utils/env", "utils/type", "math/math", "base/coordselement"], function(t, e, i, r, s, o, n, a, h, l) {
    var c = {HTMLSliderInputEventHandler: function() {this._val = parseFloat(this.rendNodeRange.value), this.rendNodeOut.value = this.rendNodeRange.value, this.board.update()}};
    return t.Text = function(t, i, r, s) {this.constructor(t, r, e.OBJECT_TYPE_TEXT, e.OBJECT_CLASS_TEXT), this.element = this.board.select(r.anchor), this.coordsConstructor(i, this.visProp.islabel), this.content = "", this.plaintext = "", this.plaintextOld = null, this.orgText = "", this.needsSizeUpdate = !1, this.hiddenByParent = !1, this.size = [1, 1], this.id = this.board.setId(this, "T"), this._setUpdateText(s), this.updateText(), this.board.renderer.drawText(this), this.board.finalizeAdding(this), "string" == typeof this.content && this.notifyParents(this.content), this.elType = "text", this.methodMap = a.deepCopy(this.methodMap, {setText: "setTextJessieCode", move: "setCoords"})}, t.Text.prototype = new r, a.copyPrototypeMethods(t.Text, l, "coordsConstructor"), t.extend(t.Text.prototype, {hasPoint: function(t, e) {
      var i, r, s, o, n = this.board.options.precision.hasPoint;
      return this.transformations.length > 0 && (i = h.matVecMult(h.inverse(this.board.renderer.joinTransforms(this, this.transformations)), [1, t, e]), t = i[1], e = i[2]), i = "right" === this.visProp.anchorx ? this.coords.scrCoords[1] - this.size[0] : "middle" === this.visProp.anchorx ? this.coords.scrCoords[1] - .5 * this.size[0] : this.coords.scrCoords[1], r = i + this.size[0], o = "top" === this.visProp.anchory ? this.coords.scrCoords[2] + this.size[1] : "middle" === this.visProp.anchory ? this.coords.scrCoords[2] + .5 * this.size[1] : this.coords.scrCoords[2], s = o - this.size[1], "all" === this.visProp.dragarea ? t >= i - n && r + n > t && e >= s - n && o + n >= e : e >= s - n && o + n >= e && (t >= i - n && i + 2 * n >= t || t >= r - 2 * n && r + n >= t)
    }, _setUpdateText: function(t) {
      var e;
      this.orgText = t, "function" == typeof t ? this.updateText = function() {this.plaintext = this.visProp.parse && !this.visProp.usemathjax ? this.replaceSub(this.replaceSup(this.convertGeonext2CSS(t()))) : t()} : a.isString(t) && !this.visProp.parse ? this.updateText = function() {this.plaintext = t} : (this.content = a.isNumber(t) ? t.toFixed(this.visProp.digits) : this.visProp.useasciimathml ? "'`" + t + "`'" : this.visProp.usemathjax ? "'" + t + "'" : this.generateTerm(t, !0), e = this.board.jc.snippet(this.content, !0, "", !1), this.updateText = function() {
        this.plaintext = e()
      })
    }, _setText: function(t) {return this._setUpdateText(t), this.updateText(), this.prepareUpdate().update().updateRenderer(), this.board.infobox && this.id === this.board.infobox.id || this.updateSize(), this}, setTextJessieCode: function(t) {
      var e;
      return this.visProp.castext = t, e = "function" == typeof t ? function() {return a.sanitizeHTML(t())} : a.isNumber(t) ? t : a.sanitizeHTML(t), this._setText(e)
    }, setText: function(t) {return this._setText(t)}, updateSize: function() {
      var e, i, r;
      if (!n.isBrowser || "no" === this.board.renderer.type)return this;
      if ("html" === this.visProp.display || "vml" === this.board.renderer.type)t.exists(this.rendNode.offsetWidth) ? (i = [this.rendNode.offsetWidth, this.rendNode.offsetHeight], 0 === i[0] && 0 === i[1] ? (r = this, window.setTimeout(function() {r.size = [r.rendNode.offsetWidth, r.rendNode.offsetHeight]}, 0)) : this.size = i) : this.size = this.crudeSizeEstimate(); else if ("internal" === this.visProp.display)if ("svg" === this.board.renderer.type)try {
        e = this.rendNode.getBBox(), this.size = [e.width, e.height]
      } catch (s) {
      } else"canvas" === this.board.renderer.type && (this.size = this.crudeSizeEstimate());
      return this
    }, crudeSizeEstimate: function() {return[.45 * parseFloat(this.visProp.fontsize) * this.plaintext.length, .9 * parseFloat(this.visProp.fontsize)]}, utf8_decode: function(t) {return t.replace(/&#x(\w+);/g, function(t, e) {return String.fromCharCode(parseInt(e, 16))})}, replaceSub: function(t) {
      if (!t.indexOf)return t;
      for (var e, i = t.indexOf("_{"); i >= 0;)t = t.substr(0, i) + t.substr(i).replace(/_\{/, "<sub>"), e = t.substr(i).indexOf("}"), e >= 0 && (t = t.substr(0, e) + t.substr(e).replace(/\}/, "</sub>")), i = t.indexOf("_{");
      for (i = t.indexOf("_"); i >= 0;)t = t.substr(0, i) + t.substr(i).replace(/_(.?)/, "<sub>$1</sub>"), i = t.indexOf("_");
      return t
    }, replaceSup: function(t) {
      if (!t.indexOf)return t;
      for (var e, i = t.indexOf("^{"); i >= 0;)t = t.substr(0, i) + t.substr(i).replace(/\^\{/, "<sup>"), e = t.substr(i).indexOf("}"), e >= 0 && (t = t.substr(0, e) + t.substr(e).replace(/\}/, "</sup>")), i = t.indexOf("^{");
      for (i = t.indexOf("^"); i >= 0;)t = t.substr(0, i) + t.substr(i).replace(/\^(.?)/, "<sup>$1</sup>"), i = t.indexOf("^");
      return t
    }, getSize: function() {return this.size}, setCoords: function(t, i) {
      var r, s, o;
      return a.isArray(t) && t.length > 1 && (i = t[1], t = t[0]), this.visProp.islabel && a.exists(this.element) ? (r = this.element.getLabelAnchor(), s = (t - r.usrCoords[1]) * this.board.unitX, o = -(i - r.usrCoords[2]) * this.board.unitY, this.relativeCoords.setCoordinates(e.COORDS_BY_SCREEN, [s, o])) : this.coords.setCoordinates(e.COORDS_BY_USER, [t, i]), this.prepareUpdate().update().updateRenderer(), this
    }, update: function(t) {return this.needsUpdate ? (this.updateCoords(t), this.updateText(), "internal" === this.visProp.display && (this.plaintext = this.utf8_decode(this.plaintext)), this.checkForSizeUpdate(), this.needsSizeUpdate && this.updateSize(), this) : this}, checkForSizeUpdate: function() {this.board.infobox && this.id === this.board.infobox.id ? this.needsSizeUpdate = !1 : (this.needsSizeUpdate = this.plaintextOld !== this.plaintext, this.needsSizeUpdate && (this.plaintextOld = this.plaintext))}, updateRenderer: function() {return this.updateRendererGeneric("updateText")}, expandShortMath: function(t) {
      var e = /([\)0-9\.])\s*([\(a-zA-Z_])/g;
      return t.replace(e, "$1*$2")
    }, generateTerm: function(t, e) {
      var i, r, o, n, h = '""';
      if (t = t || "", t = t.replace(/\r/g, ""), t = t.replace(/\n/g, ""), t = t.replace(/"/g, "'"), t = t.replace(/'/g, "\\'"), t = t.replace(/&amp;arc;/g, "&ang;"), t = t.replace(/<arc\s*\/>/g, "&ang;"), t = t.replace(/&lt;arc\s*\/&gt;/g, "&ang;"), t = t.replace(/&lt;sqrt\s*\/&gt;/g, "&radic;"), t = t.replace(/&lt;value&gt;/g, "<value>"), t = t.replace(/&lt;\/value&gt;/g, "</value>"), o = t.indexOf("<value>"), n = t.indexOf("</value>"), o >= 0)for (; o >= 0;)h += ' + "' + this.replaceSub(this.replaceSup(t.slice(0, o))) + '"', r = t.slice(o + 7, n), e === !0 && (r = this.expandShortMath(r)), i = s.geonext2JS(r, this.board), i = i.replace(/\\"/g, "'"), i = i.replace(/\\'/g, "'"), h += 0 > i.indexOf("toFixed") ? a.isNumber(a.bind(this.board.jc.snippet(i, !0, "", !1), this)()) ? "+(" + i + ").toFixed(" + this.visProp.digits + ")" : "+(" + i + ")" : "+(" + i + ")", t = t.slice(n + 8), o = t.indexOf("<value>"), n = t.indexOf("</value>");
      return h += ' + "' + this.replaceSub(this.replaceSup(t)) + '"', h = this.convertGeonext2CSS(h), h = h.replace(/&amp;/g, "&"), h = h.replace(/"/g, "'")
    }, convertGeonext2CSS: function(t) {return"string" == typeof t && (t = t.replace(/<overline>/g, "<span style=text-decoration:overline>"), t = t.replace(/&lt;overline&gt;/g, "<span style=text-decoration:overline>"), t = t.replace(/<\/overline>/g, "</span>"), t = t.replace(/&lt;\/overline&gt;/g, "</span>"), t = t.replace(/<arrow>/g, "<span style=text-decoration:overline>"), t = t.replace(/&lt;arrow&gt;/g, "<span style=text-decoration:overline>"), t = t.replace(/<\/arrow>/g, "</span>"), t = t.replace(/&lt;\/arrow&gt;/g, "</span>")), t}, notifyParents: function(t) {
      var e, i = null;
      t = t.replace(/&lt;value&gt;/g, "<value>"), t = t.replace(/&lt;\/value&gt;/g, "</value>");
      do e = /<value>([\w\s\*\/\^\-\+\(\)\[\],<>=!]+)<\/value>/, i = e.exec(t), null !== i && (s.findDependencies(this, i[1], this.board), t = t.substr(i.index), t = t.replace(e, "")); while (null !== i);
      return this
    }, bounds: function() {
      var t = this.coords.usrCoords;
      return this.visProp.islabel || 0 == this.board.unitY || 0 == this.board.unitX ? [0, 0, 0, 0] : [t[1], t[2] + this.size[1] / this.board.unitY, t[1] + this.size[0] / this.board.unitX, t[2]]
    }}), t.createText = function(e, i, r) {
      var s, o = a.copyAttributes(r, e.options, "text"), n = i.slice(0, -1), h = i[i.length - 1];
      if (o.anchor = o.parent || o.anchor, s = l.create(t.Text, e, n, o, h), !s)throw Error("JSXGraph: Can't create text with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [x,y], [z,x,y], [element,transformation]");
      return 0 !== a.evaluate(o.rotate) && "internal" === o.display && s.addRotation(a.evaluate(o.rotate)), s
    }, t.registerElement("text", t.createText), t.createHTMLSlider = function(e, i, r) {
      var s, o, h = a.copyAttributes(r, e.options, "htmlslider");
      if (2 !== i.length || 2 !== i[0].length || 3 !== i[1].length)throw Error("JSXGraph: Can't create htmlslider with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parents are: [[x,y], [min, start, max]]");
      return h.anchor = h.parent || h.anchor, h.fixed = h.fixed || !0, o = [i[0][0], i[0][1], '<form style="display:inline"><input type="range" /><span></span><input type="text" /></form>'], s = t.createText(e, o, h), s.type = a.OBJECT_TYPE_HTMLSLIDER, s.rendNodeForm = s.rendNode.childNodes[0], s.rendNodeForm.id = s.rendNode.id + "_form", s.rendNodeRange = s.rendNodeForm.childNodes[0], s.rendNodeRange.id = s.rendNode.id + "_range", s.rendNodeRange.min = i[1][0], s.rendNodeRange.max = i[1][2], s.rendNodeRange.step = h.step, s.rendNodeRange.value = i[1][1], s.rendNodeLabel = s.rendNodeForm.childNodes[1], s.rendNodeLabel.id = s.rendNode.id + "_label", h.withlabel && (s.rendNodeLabel.innerHTML = s.name + "="), s.rendNodeOut = s.rendNodeForm.childNodes[2], s.rendNodeOut.id = s.rendNode.id + "_out", s.rendNodeOut.value = i[1][1], s.rendNodeRange.style.width = h.widthrange + "px", s.rendNodeRange.style.verticalAlign = "middle", s.rendNodeOut.style.width = h.widthout + "px", s._val = i[1][1], t.supportsVML() ? n.addEvent(s.rendNodeForm, "change", c.HTMLSliderInputEventHandler, s) : n.addEvent(s.rendNodeForm, "input", c.HTMLSliderInputEventHandler, s), s.Value = function() {return this._val}, s
    }, t.registerElement("htmlslider", t.createHTMLSlider), {Text: t.Text, createText: t.createText, createHTMLSlider: t.createHTMLSlider}
  }), define("utils/uuid", ["jxg"], function(t) {
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", i = e.split("");
    return t.Util = t.Util || {}, t.Util.genUUID = function() {
      var t, e, r = [], s = 0;
      for (e = 0; 36 > e; e++)8 === e || 13 === e || 18 === e || 23 === e ? r[e] = "-" : 14 === e ? r[e] = "4" : (2 >= s && (s = 0 | 33554432 + 16777216 * Math.random()), t = 15 & s, s >>= 4, r[e] = i[19 === e ? 8 | 3 & t : t]);
      return r.join("")
    }, t.Util
  }), define("parser/jessiecode", ["jxg", "base/constants", "base/text", "math/math", "math/geometry", "math/statistics", "utils/type", "utils/uuid", "utils/env"], function(JXG, Const, Text, Mat, Geometry, Statistics, Type, UUID, Env) {
    var priv = {modules: {math: Mat, "math/geometry": Geometry, "math/statistics": Statistics, "math/numerics": Mat.Numerics}};
    JXG.JessieCode = function(t, e) {
      this.scope = {id: 0, hasChild: !0, args: [], locals: {}, context: null, previous: null}, this.scopes = [], this.scopes.push(this.scope), this.dpstack = [
        []
      ], this.pscope = 0, this.propstack = [
        {}
      ], this.propscope = 0, this.lhs = [], this.isLHS = !1, this.warnLog = "jcwarn", this.$log = [], this.builtIn = this.defineBuiltIn(), this.board = null, this.lineToElement = {}, this.parCurLine = 1, this.parCurColumn = 0, this.line = 1, this.col = 1, this.code = "", "string" == typeof t && this.parse(t, e)
    }, JXG.extend(JXG.JessieCode.prototype, {node: function(t, e, i) {return{type: t, value: e, children: i}}, createNode: function(t, e) {
      var i, r = this.node(t, e, []);
      for (i = 2; arguments.length > i; i++)r.children.push(arguments[i]);
      return r.line = this.parCurLine, r.col = this.parCurColumn, r
    }, pushScope: function(t) {
      var e = {args: t, locals: {}, context: null, previous: this.scope};
      return this.scope.hasChild = !0, this.scope = e, e.id = this.scopes.push(e) - 1, e
    }, popScope: function() {
      var t = this.scope.previous;
      return this.scope = null !== t ? t : this.scope, this.scope
    }, getElementById: function(t) {return this.board.objects[t]}, log: function() {this.$log.push(arguments), "object" == typeof console && console.log && console.log.apply(console, arguments)}, creator: function() {
      var t, e = {};
      return t = function(t) {
        var i;
        return"function" == typeof e[this.board.id + t] ? i = e[this.board.id + t] : (i = function(e) {
          return function(i, r) {
            var s;
            return s = Type.exists(r) ? r : {name: 0 !== e.lhs[e.scope] ? e.lhs[e.scope] : ""}, e.board.create(t, i, s)
          }
        }(this), i.creator = !0, e[this.board.id + t] = i), i
      }, t.clearCache = function() {e = {}}, t
    }(), letvar: function(t, e) {this.builtIn[t] && this._warn('"' + t + '" is a predefined value.'), this.scope.locals[t] = e}, isLocalVariable: function(t) {
      for (var e = this.scope; null !== e;) {
        if (Type.exists(e.locals[t]))return e;
        e = e.previous
      }
      return null
    }, isParameter: function(t) {
      for (var e = this.scope; null !== e;) {
        if (Type.indexOf(e.args, t) > -1)return e;
        e = e.previous
      }
      return null
    }, isCreator: function(t) {return!!JXG.elements[t]}, isMathMethod: function(t) {return"E" !== t && !!Math[t]}, isBuiltIn: function(t) {return!!this.builtIn[t]}, getvar: function(t, e) {
      var i, r;
      return e = Type.def(e, !1), i = this.isLocalVariable(t), null !== i ? i.locals[t] : this.isCreator(t) ? this.creator(t) : this.isBuiltIn(t) ? this.builtIn[t] : this.isMathMethod(t) ? Math[t] : e || (i = this.board.select(t), i === t) ? r : i
    }, resolve: function(t) {
      for (var e = this.scope; null !== e;) {
        if (Type.exists(e.locals[t]))return e.locals[t];
        e = e.previous
      }
    }, getvarJS: function(t, e, i) {
      var r, s = "";
      return e = Type.def(e, !1), i = Type.def(i, !1), r = this.isParameter(t), null !== r ? t : (r = this.isLocalVariable(t), null === r || i ? this.isCreator(t) ? "(function () { var a = Array.prototype.slice.call(arguments, 0), props = " + (i ? "a.pop()" : "{}") + "; return $jc$.board.create.apply($jc$.board, ['" + t + "'].concat([a, props])); })" : (i && this._error("Syntax error (attribute values are allowed with element creators only)"), this.isBuiltIn(t) ? this.builtIn[t].src || this.builtIn[t] : this.isMathMethod(t) ? "Math." + t : e ? "" : (Type.isId(this.board, t) ? s = "$jc$.board.objects['" + t + "']" : Type.isName(this.board, t) ? s = "$jc$.board.elementsByName['" + t + "']" : Type.isGroup(this.board, t) && (s = "$jc$.board.groups['" + t + "']"), s)) : "$jc$.resolve('" + t + "')")
    }, makeMap: function(t) {return t.isMap = !0, t}, functionCodeJS: function(t) {
      var e = t.children[0].join(", "), i = "", r = "";
      return"op_map" === t.value && (i = "{ return  ", r = " }"), "function (" + e + ") {\n" + "var $oldscope$ = $jc$.scope;\n" + "$jc$.scope = $jc$.scopes[" + this.scope.id + "];\n" + "var r = (function () " + i + this.compile(t.children[1], !0) + r + ")();\n" + "$jc$.scope = $oldscope$;\n" + "return r;\n" + "}"
    }, defineFunction: function(node) {
      var fun, i, bo = "", bc = "", list = node.children[0], scope = this.pushScope(list);
      if (this.board.options.jc.compile) {
        for (this.isLHS = !1, i = 0; list.length > i; i++)scope.locals[list[i]] = list[i];
        this.replaceNames(node.children[1]), fun = function($jc$, list) {
          var fun, p = list.join(", "), str = "var f = " + $jc$.functionCodeJS(node) + "; f;";
          try {
            return fun = eval(str)
          } catch (e) {
            return $jc$._warn("error compiling function\n\n" + str + "\n\n" + ("" + e)), function() {}
          }
        }(this, list), this.popScope()
      } else fun = function(t, e, i) {
        return function() {
          var r, s;
          for (s = e.scope, e.scope = e.scopes[i], r = 0; t.length > r; r++)e.scope.locals[t[r]] = arguments[r];
          return r = e.execute(node.children[1]), e.scope = s, r
        }
      }(list, this, scope.id);
      return fun.node = node, fun.scope = scope, fun.toJS = fun.toString, fun.toString = function(t) {return function() {return t.compile(t.replaceIDs(Type.deepCopy(node)))}}(this), fun.deps = {}, this.collectDependencies(node.children[1], fun.deps), fun
    }, mergeAttributes: function() {
      var t, e = {};
      for (t = 0; arguments.length > t; t++)e = Type.deepCopy(e, arguments[t], !0);
      return e
    }, setProp: function(t, e, i) {
      var r, s, o = {};
      t.elementClass !== Const.OBJECT_CLASS_POINT || "X" !== e && "Y" !== e ? t.elementClass !== Const.OBJECT_CLASS_TEXT || "X" !== e && "Y" !== e ? t.type && t.elementClass && t.visProp ? Type.exists(t[t.methodMap[e]]) && "function" != typeof t[t.methodMap[e]] ? t[t.methodMap[e]] = i : (o[e] = i, t.setProperty(o)) : t[e] = i : ("number" == typeof i ? t[e] = function() {return i} : "function" == typeof i ? (t.isDraggable = !1, t[e] = i) : "string" == typeof i && (t.isDraggable = !1, t[e] = Type.createFunction(i, this.board, null, !0), t[e + "jc"] = i), t[e].origin = i, this.board.update()) : (e = e.toLowerCase(), t.isDraggable && "number" == typeof i ? (r = "x" === e ? i : t.X(), s = "y" === e ? i : t.Y(), t.setPosition(Const.COORDS_BY_USER, [r, s])) : !t.isDraggable || "function" != typeof i && "string" != typeof i ? t.isDraggable || (r = "x" === e ? i : t.XEval.origin, s = "y" === e ? i : t.YEval.origin, t.addConstraint([r, s])) : (r = "x" === e ? i : t.coords.usrCoords[1], s = "y" === e ? i : t.coords.usrCoords[2], t.addConstraint([r, s])), this.board.update())
    }, parse: function(t, e, i) {
      var r, s, o, n, a = t.replace(/\r\n/g, "\n").split("\n"), h = [];
      i || (this.code += t + "\n"), Text && (s = Text.Text.prototype.setText, Text.Text.prototype.setText = Text.Text.prototype.setTextJessieCode);
      try {
        for (Type.exists(e) || (e = !1), r = 0; a.length > r; r++)e && (a[r] = JXG.GeonextParser.geonext2JS(a[r], this.board)), h.push(a[r]);
        t = h.join("\n"), o = parser.parse(t), n = this.execute(o)
      } finally {
        Text && (Text.Text.prototype.setText = s)
      }
      return n
    }, snippet: function(t, e, i, r) {
      var s;
      return e = Type.def(e, !0), i = Type.def(i, ""), r = Type.def(r, !1), s = (e ? " function (" + i + ") { return " : "") + t + (e ? "; }" : "") + ";", this.parse(s, r, !0)
    }, replaceIDs: function(t) {
      var e, i;
      if (t.replaced && (i = this.board.objects[t.children[1][0].value], Type.exists(i) && "" !== i.name && (t.type = "node_var", t.value = i.name, t.children.length = 0, delete t.replaced)), t.children)for (e = t.children.length; e > 0; e--)Type.exists(t.children[e - 1]) && (t.children[e - 1] = this.replaceIDs(t.children[e - 1]));
      return t
    }, replaceNames: function(t) {
      var e, i;
      if (i = t.value, "node_op" === t.type && "op_lhs" === i && 1 === t.children.length ? this.isLHS = !0 : "node_var" === t.type && (this.isLHS ? this.letvar(i, !0) : !Type.exists(this.getvar(i, !0)) && Type.exists(this.board.elementsByName[i]) && (t = this.createReplacementNode(t))), t.children)for (e = t.children.length; e > 0; e--)Type.exists(t.children[e - 1]) && (t.children[e - 1] = this.replaceNames(t.children[e - 1]));
      return"node_op" === t.type && "op_lhs" === t.value && 1 === t.children.length && (this.isLHS = !1), t
    }, createReplacementNode: function(t) {
      var e = t.value, i = this.board.elementsByName[e];
      return t = this.createNode("node_op", "op_execfun", this.createNode("node_var", "$"), [this.createNode("node_str", i.id)]), t.replaced = !0, t
    }, collectDependencies: function(t, e) {
      var i, r, s;
      if (r = t.value, "node_var" === t.type && (s = this.getvar(r), s && s.visProp && s.type && s.elementClass && s.id && (e[s.id] = s)), "node_op" === t.type && "op_execfun" === t.value && t.children.length > 1 && "$" === t.children[0].value && t.children[1].length > 0 && (s = t.children[1][0].value, e[s] = this.board.objects[s]), t.children)for (i = t.children.length; i > 0; i--)Type.exists(t.children[i - 1]) && this.collectDependencies(t.children[i - 1], e)
    }, resolveProperty: function(t, e, i) {return i = Type.def(i, !1), t && t.methodMap && (Type.exists(t.subs) && Type.exists(t.subs[e]) ? t = t.subs : Type.exists(t.methodMap[e]) ? e = t.methodMap[e] : (t = t.visProp, e = e.toLowerCase())), Type.exists(t) || this._error(t + " is not an object"), Type.exists(t[e]) || this._error("unknown property " + e), i && "function" == typeof t[e] ? function() {return t[e].apply(t, arguments)} : t[e]}, getLHS: function(t) {
      var e;
      if ("node_var" === t.type)e = {o: this.scope.locals, what: t.value}; else if ("node_op" === t.type && "op_property" === t.value)e = {o: this.execute(t.children[0]), what: t.children[1]}; else {
        if ("node_op" !== t.type || "op_extvalue" !== t.value)throw Error("Syntax error: Invalid left-hand side of assignment.");
        e = {o: this.execute(t.children[0]), what: this.execute(t.children[1])}
      }
      return e
    }, getLHSCompiler: function(t, e) {
      var i;
      if ("node_var" === t.type)i = t.value; else if ("node_op" === t.type && "op_property" === t.value)i = [this.compile(t.children[0], e), "'" + t.children[1] + "'"]; else {
        if ("node_op" !== t.type || "op_extvalue" !== t.value)throw Error("Syntax error: Invalid left-hand side of assignment.");
        i = [this.compile(t.children[0]), "node_const" === t.children[1].type ? t.children[1].value : this.compile(t.children[1], e)]
      }
      return i
    }, execute: function(t) {
      var e, i, r, s, o, n, a, h, l, c, d, u = [];
      if (e = 0, !t)return e;
      switch (this.line = t.line, this.col = t.col, t.type) {
        case"node_op":
          switch (t.value) {
            case"op_none":
              t.children[0] && this.execute(t.children[0]), t.children[1] && (e = this.execute(t.children[1]));
              break;
            case"op_assign":
              i = this.getLHS(t.children[0]), this.lhs[this.scope.id] = i[1], i.o.type && i.o.elementClass && i.o.methodMap && "label" === i.what && this._error("Left-hand side of assignment is read-only."), e = this.execute(t.children[1]), i.o !== this.scope.locals || Type.isArray(i.o) && "number" == typeof i.what ? this.setProp(i.o, i.what, e) : this.letvar(i.what, e), this.lhs[this.scope.id] = 0;
              break;
            case"op_if":
              this.execute(t.children[0]) && (e = this.execute(t.children[1]));
              break;
            case"op_conditional":
            case"op_if_else":
              e = this.execute(t.children[0]) ? this.execute(t.children[1]) : this.execute(t.children[2]);
              break;
            case"op_while":
              for (; this.execute(t.children[0]);)this.execute(t.children[1]);
              break;
            case"op_do":
              do this.execute(t.children[0]); while (this.execute(t.children[1]));
              break;
            case"op_for":
              for (this.execute(t.children[0]); this.execute(t.children[1]); this.execute(t.children[2]))this.execute(t.children[3]);
              break;
            case"op_proplst":
              t.children[0] && this.execute(t.children[0]), t.children[1] && this.execute(t.children[1]);
              break;
            case"op_emptyobject":
              e = {};
              break;
            case"op_proplst_val":
              this.propstack.push({}), this.propscope++, this.execute(t.children[0]), e = this.propstack[this.propscope], this.propstack.pop(), this.propscope--;
              break;
            case"op_prop":
              this.propstack[this.propscope][t.children[0]] = this.execute(t.children[1]);
              break;
            case"op_array":
              for (e = [], o = t.children[0].length, r = 0; o > r; r++)e.push(this.execute(t.children[0][r]));
              break;
            case"op_extvalue":
              e = this.execute(t.children[0]), r = this.execute(t.children[1]), e = "number" == typeof r && Math.abs(Math.round(r) - r) < Mat.eps ? e[r] : n;
              break;
            case"op_return":
              if (0 !== this.scope)return this.execute(t.children[0]);
              this._error("Unexpected return.");
              break;
            case"op_map":
              t.children[1].isMath || this._error("In a map only function calls and mathematical expressions are allowed."), l = this.defineFunction(t), l.isMap = !0, e = l;
              break;
            case"op_function":
              l = this.defineFunction(t), l.isMap = !1, e = l;
              break;
            case"op_execfun":
              if (this.dpstack.push([]), this.pscope++, a = t.children[1], Type.exists(t.children[2]))if (t.children[3])for (h = t.children[2], c = {}, r = 0; h.length > r; r++)c = Type.deepCopy(c, this.execute(h[r]), !0); else c = this.execute(t.children[2]);
              for (l = this.execute(t.children[0]), d = l && l.sc ? l.sc : this, !l.creator && Type.exists(t.children[2]) && this._error("Unexpected value. Only element creators are allowed to have a value after the function call."), r = 0; a.length > r; r++)u[r] = this.execute(a[r]), this.dpstack[this.pscope].push({line: t.children[1][r].line, col: t.children[1][r].ecol});
              if ("function" != typeof l || l.creator)if ("function" == typeof l && l.creator) {
                s = this.line;
                try {
                  for (e = l(u, c), e.jcLineStart = s, e.jcLineEnd = t.eline, r = s; t.line >= r; r++)this.lineToElement[r] = e;
                  e.debugParents = this.dpstack[this.pscope]
                } catch (p) {
                  this._error("" + p)
                }
              } else this._error("Function '" + l + "' is undefined."); else e = l.apply(d, u);
              this.dpstack.pop(), this.pscope--;
              break;
            case"op_property":
              s = this.execute(t.children[0]), i = t.children[1], e = this.resolveProperty(s, i, !1), Type.exists(e) && (e.sc = s);
              break;
            case"op_use":
              this._warn("Use of the 'use' operator is deprecated."), this.use("" + t.children[0]);
              break;
            case"op_delete":
              this._warn("Use of the 'delete' operator is deprecated. Please use the remove() function."), i = this.getvar(t.children[0]), e = this.del(i);
              break;
            case"op_equ":
              e = this.execute(t.children[0]) == this.execute(t.children[1]);
              break;
            case"op_neq":
              e = this.execute(t.children[0]) != this.execute(t.children[1]);
              break;
            case"op_approx":
              e = Math.abs(this.execute(t.children[0]) - this.execute(t.children[1])) < Mat.eps;
              break;
            case"op_grt":
              e = this.execute(t.children[0]) > this.execute(t.children[1]);
              break;
            case"op_lot":
              e = this.execute(t.children[0]) < this.execute(t.children[1]);
              break;
            case"op_gre":
              e = this.execute(t.children[0]) >= this.execute(t.children[1]);
              break;
            case"op_loe":
              e = this.execute(t.children[0]) <= this.execute(t.children[1]);
              break;
            case"op_or":
              e = this.execute(t.children[0]) || this.execute(t.children[1]);
              break;
            case"op_and":
              e = this.execute(t.children[0]) && this.execute(t.children[1]);
              break;
            case"op_not":
              e = !this.execute(t.children[0]);
              break;
            case"op_add":
              e = this.add(this.execute(t.children[0]), this.execute(t.children[1]));
              break;
            case"op_sub":
              e = this.sub(this.execute(t.children[0]), this.execute(t.children[1]));
              break;
            case"op_div":
              e = this.div(this.execute(t.children[0]), this.execute(t.children[1]));
              break;
            case"op_mod":
              e = this.mod(this.execute(t.children[0]), this.execute(t.children[1]), !0);
              break;
            case"op_mul":
              e = this.mul(this.execute(t.children[0]), this.execute(t.children[1]));
              break;
            case"op_exp":
              e = this.pow(this.execute(t.children[0]), this.execute(t.children[1]));
              break;
            case"op_neg":
              e = -1 * this.execute(t.children[0])
          }
          break;
        case"node_var":
          e = this.getvar(t.value);
          break;
        case"node_const":
          e = Number(t.value);
          break;
        case"node_const_bool":
          e = t.value;
          break;
        case"node_str":
          e = t.value.replace(/\\(.)/, "$1")
      }
      return e
    }, compile: function(t, e) {
      var i, r, s, o, n = "";
      if (Type.exists(e) || (e = !1), !t)return n;
      switch (t.type) {
        case"node_op":
          switch (t.value) {
            case"op_none":
              t.children[0] && (n = this.compile(t.children[0], e)), t.children[1] && (n += this.compile(t.children[1], e));
              break;
            case"op_assign":
              e ? (i = this.getLHSCompiler(t.children[0]), Type.isArray(i) ? n = "$jc$.setProp(" + i[0] + ", " + i[1] + ", " + this.compile(t.children[1], e) + ");\n" : (this.isLocalVariable(i) !== this.scope && (this.scope.locals[i] = !0), n = "$jc$.scopes[" + this.scope.id + "].locals['" + i + "'] = " + this.compile(t.children[1], e) + ";\n")) : (i = this.compile(t.children[0]), n = i + " = " + this.compile(t.children[1], e) + ";\n");
              break;
            case"op_if":
              n = " if (" + this.compile(t.children[0], e) + ") " + this.compile(t.children[1], e);
              break;
            case"op_if_else":
              n = " if (" + this.compile(t.children[0], e) + ")" + this.compile(t.children[1], e), n += " else " + this.compile(t.children[2], e);
              break;
            case"op_conditional":
              n = "((" + this.compile(t.children[0], e) + ")?(" + this.compile(t.children[1], e), n += "):(" + this.compile(t.children[2], e) + "))";
              break;
            case"op_while":
              n = " while (" + this.compile(t.children[0], e) + ") {\n" + this.compile(t.children[1], e) + "}\n";
              break;
            case"op_do":
              n = " do {\n" + this.compile(t.children[0], e) + "} while (" + this.compile(t.children[1], e) + ");\n";
              break;
            case"op_for":
              n = " for (" + this.compile(t.children[0], e) + "; " + this.compile(t.children[1], e) + "; " + this.compile(t.children[2], e) + ") {\n" + this.compile(t.children[3], e) + "\n}\n";
              break;
            case"op_proplst":
              t.children[0] && (n = this.compile(t.children[0], e) + ", "), n += this.compile(t.children[1], e);
              break;
            case"op_prop":
              n = t.children[0] + ": " + this.compile(t.children[1], e);
              break;
            case"op_emptyobject":
              n = e ? "{}" : "<< >>";
              break;
            case"op_proplst_val":
              n = this.compile(t.children[0], e);
              break;
            case"op_array":
              for (s = [], r = 0; t.children[0].length > r; r++)s.push(this.compile(t.children[0][r]), e);
              n = "[" + s.join(", ") + "]";
              break;
            case"op_extvalue":
              n = this.compile(t.children[0], e) + "[" + this.compile(t.children[1], e) + "]";
              break;
            case"op_return":
              n = " return " + this.compile(t.children[0], e) + ";\n";
              break;
            case"op_map":
              t.children[1].isMath || this._error("In a map only function calls and mathematical expressions are allowed."), s = t.children[0], n = e ? " $jc$.makeMap(function (" + s.join(", ") + ") { return " + this.compile(t.children[1], e) + "; })" : "map (" + s.join(", ") + ") -> " + this.compile(t.children[1], e);
              break;
            case"op_function":
              s = t.children[0], o = this.pushScope(s), n = e ? this.functionCodeJS(t) : " function (" + s.join(", ") + ") " + this.compile(t.children[1], e), this.popScope();
              break;
            case"op_execfunmath":
              console.log("TODO"), n = "-1";
              break;
            case"op_execfun":
              if (t.children[2]) {
                for (s = [], r = 0; t.children[2].length > r; r++)s.push(this.compile(t.children[2][r], e));
                e && (i = "$jc$.mergeAttributes(" + s.join(", ") + ")")
              }
              for (t.children[0].withProps = !!t.children[2], s = [], r = 0; t.children[1].length > r; r++)s.push(this.compile(t.children[1][r], e));
              n = this.compile(t.children[0], e) + "(" + s.join(", ") + (t.children[2] && e ? ", " + i : "") + ")" + (t.children[2] && !e ? i : ""), e && "$" === t.children[0].value && (n = "$jc$.board.objects[" + this.compile(t.children[1][0], e) + "]");
              break;
            case"op_property":
              n = e && "X" !== t.children[1] && "Y" !== t.children[1] ? "$jc$.resolveProperty(" + this.compile(t.children[0], e) + ", '" + t.children[1] + "', true)" : this.compile(t.children[0], e) + "." + t.children[1];
              break;
            case"op_use":
              this._warn("Use of the 'use' operator is deprecated."), n = e ? "$jc$.use('" : "use('", n += "" + t.children[0] + "');";
              break;
            case"op_delete":
              this._warn("Use of the 'delete' operator is deprecated. Please use the remove() function."), n = e ? "$jc$.del(" : "remove(", n += this.compile(t.children[0], e) + ")";
              break;
            case"op_equ":
              n = "(" + this.compile(t.children[0], e) + " == " + this.compile(t.children[1], e) + ")";
              break;
            case"op_neq":
              n = "(" + this.compile(t.children[0], e) + " != " + this.compile(t.children[1], e) + ")";
              break;
            case"op_approx":
              n = "(" + this.compile(t.children[0], e) + " ~= " + this.compile(t.children[1], e) + ")";
              break;
            case"op_grt":
              n = "(" + this.compile(t.children[0], e) + " > " + this.compile(t.children[1], e) + ")";
              break;
            case"op_lot":
              n = "(" + this.compile(t.children[0], e) + " < " + this.compile(t.children[1], e) + ")";
              break;
            case"op_gre":
              n = "(" + this.compile(t.children[0], e) + " >= " + this.compile(t.children[1], e) + ")";
              break;
            case"op_loe":
              n = "(" + this.compile(t.children[0], e) + " <= " + this.compile(t.children[1], e) + ")";
              break;
            case"op_or":
              n = "(" + this.compile(t.children[0], e) + " || " + this.compile(t.children[1], e) + ")";
              break;
            case"op_and":
              n = "(" + this.compile(t.children[0], e) + " && " + this.compile(t.children[1], e) + ")";
              break;
            case"op_not":
              n = "!(" + this.compile(t.children[0], e) + ")";
              break;
            case"op_add":
              n = e ? "$jc$.add(" + this.compile(t.children[0], e) + ", " + this.compile(t.children[1], e) + ")" : "(" + this.compile(t.children[0], e) + " + " + this.compile(t.children[1], e) + ")";
              break;
            case"op_sub":
              n = e ? "$jc$.sub(" + this.compile(t.children[0], e) + ", " + this.compile(t.children[1], e) + ")" : "(" + this.compile(t.children[0], e) + " - " + this.compile(t.children[1], e) + ")";
              break;
            case"op_div":
              n = e ? "$jc$.div(" + this.compile(t.children[0], e) + ", " + this.compile(t.children[1], e) + ")" : "(" + this.compile(t.children[0], e) + " / " + this.compile(t.children[1], e) + ")";
              break;
            case"op_mod":
              n = e ? "$jc$.mod(" + this.compile(t.children[0], e) + ", " + this.compile(t.children[1], e) + ", true)" : "(" + this.compile(t.children[0], e) + " % " + this.compile(t.children[1], e) + ")";
              break;
            case"op_mul":
              n = e ? "$jc$.mul(" + this.compile(t.children[0], e) + ", " + this.compile(t.children[1], e) + ")" : "(" + this.compile(t.children[0], e) + " * " + this.compile(t.children[1], e) + ")";
              break;
            case"op_exp":
              n = e ? "$jc$.pow(" + this.compile(t.children[0], e) + ", " + this.compile(t.children[1], e) + ")" : "(" + this.compile(t.children[0], e) + "^" + this.compile(t.children[1], e) + ")";
              break;
            case"op_neg":
              n = "(-" + this.compile(t.children[0], e) + ")"
          }
          break;
        case"node_var":
          n = e ? this.getvarJS(t.value, !1, t.withProps) : t.value;
          break;
        case"node_const":
          n = t.value;
          break;
        case"node_const_bool":
          n = t.value;
          break;
        case"node_str":
          n = "'" + t.value + "'"
      }
      return t.needsBrackets && (n = "{\n" + n + "}\n"), n
    }, X: function(t) {return t.X()}, Y: function(t) {return t.Y()}, V: function(t) {return t.Value()}, L: function(t) {return t.L()}, dist: function(t, e) {return Type.exists(t) && Type.exists(t.Dist) || this._error("Error: Can't calculate distance."), t.Dist(e)}, add: function(t, e) {
      var i, r, s;
      if (t = Type.evalSlider(t), e = Type.evalSlider(e), Type.isArray(t) && Type.isArray(e))for (r = Math.min(t.length, e.length), s = [], i = 0; r > i; i++)s[i] = t[i] + e[i]; else Type.isNumber(t) && Type.isNumber(e) ? s = t + e : Type.isString(t) || Type.isString(e) ? s = "" + t + ("" + e) : this._error("Operation + not defined on operands " + typeof t + " and " + typeof e);
      return s
    }, sub: function(t, e) {
      var i, r, s;
      if (t = Type.evalSlider(t), e = Type.evalSlider(e), Type.isArray(t) && Type.isArray(e))for (r = Math.min(t.length, e.length), s = [], i = 0; r > i; i++)s[i] = t[i] - e[i]; else Type.isNumber(t) && Type.isNumber(e) ? s = t - e : this._error("Operation - not defined on operands " + typeof t + " and " + typeof e);
      return s
    }, mul: function(t, e) {
      var i, r, s;
      if (t = Type.evalSlider(t), e = Type.evalSlider(e), Type.isArray(t) && Type.isNumber(e) && (i = t, t = e, e = t), Type.isArray(t) && Type.isArray(e))r = Math.min(t.length, e.length), s = Mat.innerProduct(t, e, r); else if (Type.isNumber(t) && Type.isArray(e))for (r = e.length, s = [], i = 0; r > i; i++)s[i] = t * e[i]; else Type.isNumber(t) && Type.isNumber(e) ? s = t * e : this._error("Operation * not defined on operands " + typeof t + " and " + typeof e);
      return s
    }, div: function(t, e) {
      var i, r, s;
      if (t = Type.evalSlider(t), e = Type.evalSlider(e), Type.isArray(t) && Type.isNumber(e))for (r = t.length, s = [], i = 0; r > i; i++)s[i] = t[i] / e; else Type.isNumber(t) && Type.isNumber(e) ? s = t / e : this._error("Operation * not defined on operands " + typeof t + " and " + typeof e);
      return s
    }, mod: function(t, e) {
      var i, r, s;
      if (t = Type.evalSlider(t), e = Type.evalSlider(e), Type.isArray(t) && Type.isNumber(e))for (r = t.length, s = [], i = 0; r > i; i++)s[i] = Mat.mod(t[i], e, !0); else Type.isNumber(t) && Type.isNumber(e) ? s = Mat.mod(t, e, !0) : this._error("Operation * not defined on operands " + typeof t + " and " + typeof e);
      return s
    }, pow: function(t, e) {return t = Type.evalSlider(t), e = Type.evalSlider(e), Math.pow(t, e)}, ifthen: function(t, e, i) {return t ? e : i}, del: function(t) {"object" == typeof t && JXG.exists(t.type) && JXG.exists(t.elementClass) && this.board.removeObject(t)}, use: function(t) {
      var e, i, r = !1;
      if ("string" == typeof t) {
        for (e in JXG.boards)if (JXG.boards.hasOwnProperty(e) && JXG.boards[e].container === t) {
          i = JXG.boards[e], r = !0;
          break
        }
      } else i = t, r = !0;
      r ? (this.board = i, this.builtIn.$board = i, this.builtIn.$board.src = "$jc$.board") : this._error("Board '" + t + "' not found!")
    }, findSymbol: function(t, e) {
      var i, r;
      for (e = Type.def(e, -1), r = -1 === e ? this.scope : this.scopes[e]; null !== r;) {
        for (i in r.locals)if (r.locals.hasOwnProperty(i) && r.locals[i] === t)return[i, r];
        r = r.previous
      }
      return[]
    }, importModule: function(t) {return priv.modules[t.toLowerCase()]}, defineBuiltIn: function() {
      var t = this, e = {PI: Math.PI, EULER: Math.E, X: t.X, Y: t.Y, V: t.V, L: t.L, dist: t.dist, rad: Geometry.rad, deg: Geometry.trueAngle, factorial: Mat.factorial, trunc: Type.trunc, log: Mat.log, ln: Math.log, log10: Mat.log10, lg: Mat.log10, log2: Mat.log2, lb: Mat.log2, ld: Mat.log2, cosh: Mat.cosh, sinh: Mat.sinh, IfThen: t.ifthen, "import": t.importModule, use: t.use, remove: t.del, $: t.getElementById, $board: t.board, $log: t.log};
      return e.rad.sc = Geometry, e.deg.sc = Geometry, e.factorial.sc = Mat, e.X.src = "$jc$.X", e.Y.src = "$jc$.Y", e.V.src = "$jc$.V", e.L.src = "$jc$.L", e.dist.src = "$jc$.dist", e.rad.src = "JXG.Math.Geometry.rad", e.deg.src = "JXG.Math.Geometry.trueAngle", e.factorial.src = "JXG.Math.factorial", e.trunc.src = "JXG.trunc", e.ln.src = "Math.log", e.log10.src = "JXG.Math.log10", e.lg.src = "JXG.Math.log10", e.log2.src = "JXG.Math.log2", e.lb.src = "JXG.Math.log2", e.ld.src = "JXG.Math.log2", e.cosh.src = "JXG.Math.cosh", e.sinh.src = "JXG.Math.sinh", e["import"].src = "$jc$.importModule", e.use.src = "$jc$.use", e.remove.src = "$jc$.del", e.IfThen.src = "$jc$.ifthen", e.$.src = "(function (n) { return $jc$.board.select(n); })", e.$board && (e.$board.src = "$jc$.board"), e.$log.src = "$jc$.log", e
    }, _debug: function(t) {"object" == typeof console ? console.log(t) : Env.isBrowser && document && null !== document.getElementById("debug") && (document.getElementById("debug").innerHTML += t + "<br />")}, _error: function(t) {
      var e = Error("Error(" + this.line + "): " + t);
      throw e.line = this.line, e
    }, _warn: function(t) {"object" == typeof console ? console.log("Warning(" + this.line + "): " + t) : Env.isBrowser && document && null !== document.getElementById(this.warnLog) && (document.getElementById(this.warnLog).innerHTML += "Warning(" + this.line + "): " + t + "<br />")}, _log: function(t) {"object" != typeof window && "object" == typeof self && self.postMessage ? self.postMessage({type: "log", msg: "Log: " + ("" + t)}) : console.log("Log: ", arguments)}});
    var parser = function() {
      function t() {this.yy = {}}

      var e = {trace: function() {}, yy: {}, symbols_: {error: 2, Program: 3, StatementList: 4, EOF: 5, IfStatement: 6, IF: 7, "(": 8, Expression: 9, ")": 10, Statement: 11, ELSE: 12, LoopStatement: 13, WHILE: 14, FOR: 15, ";": 16, DO: 17, UnaryStatement: 18, USE: 19, IDENTIFIER: 20, DELETE: 21, ReturnStatement: 22, RETURN: 23, EmptyStatement: 24, StatementBlock: 25, "{": 26, "}": 27, ExpressionStatement: 28, AssignmentExpression: 29, ConditionalExpression: 30, LeftHandSideExpression: 31, "=": 32, LogicalORExpression: 33, "?": 34, ":": 35, LogicalANDExpression: 36, "||": 37, EqualityExpression: 38, "&&": 39, RelationalExpression: 40, "==": 41, "!=": 42, "~=": 43, AdditiveExpression: 44, "<": 45, ">": 46, "<=": 47, ">=": 48, MultiplicativeExpression: 49, "+": 50, "-": 51, UnaryExpression: 52, "*": 53, "/": 54, "%": 55, ExponentExpression: 56, "^": 57, "!": 58, MemberExpression: 59, CallExpression: 60, PrimaryExpression: 61, FunctionExpression: 62, MapExpression: 63, ".": 64, "[": 65, "]": 66, BasicLiteral: 67, ObjectLiteral: 68, ArrayLiteral: 69, NullLiteral: 70, BooleanLiteral: 71, StringLiteral: 72, NumberLiteral: 73, NULL: 74, TRUE: 75, FALSE: 76, STRING: 77, NUMBER: 78, NAN: 79, INFINITY: 80, ElementList: 81, "<<": 82, ">>": 83, PropertyList: 84, Property: 85, ",": 86, PropertyName: 87, Arguments: 88, AttributeList: 89, Attribute: 90, FUNCTION: 91, ParameterDefinitionList: 92, MAP: 93, "->": 94, $accept: 0, $end: 1}, terminals_: {2: "error", 5: "EOF", 7: "IF", 8: "(", 10: ")", 12: "ELSE", 14: "WHILE", 15: "FOR", 16: ";", 17: "DO", 19: "USE", 20: "IDENTIFIER", 21: "DELETE", 23: "RETURN", 26: "{", 27: "}", 32: "=", 34: "?", 35: ":", 37: "||", 39: "&&", 41: "==", 42: "!=", 43: "~=", 45: "<", 46: ">", 47: "<=", 48: ">=", 50: "+", 51: "-", 53: "*", 54: "/", 55: "%", 57: "^", 58: "!", 64: ".", 65: "[", 66: "]", 74: "NULL", 75: "TRUE", 76: "FALSE", 77: "STRING", 78: "NUMBER", 79: "NAN", 80: "INFINITY", 82: "<<", 83: ">>", 86: ",", 91: "FUNCTION", 93: "MAP", 94: "->"}, productions_: [0, [3, 2], [6, 5], [6, 7], [13, 5], [13, 9], [13, 7], [18, 2], [18, 2], [22, 2], [22, 3], [24, 1], [25, 3], [4, 2], [4, 0], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [28, 2], [9, 1], [29, 1], [29, 3], [30, 1], [30, 5], [33, 1], [33, 3], [36, 1], [36, 3], [38, 1], [38, 3], [38, 3], [38, 3], [40, 1], [40, 3], [40, 3], [40, 3], [40, 3], [44, 1], [44, 3], [44, 3], [49, 1], [49, 3], [49, 3], [49, 3], [56, 1], [56, 3], [52, 1], [52, 2], [52, 2], [52, 2], [31, 1], [31, 1], [59, 1], [59, 1], [59, 1], [59, 3], [59, 4], [61, 1], [61, 1], [61, 1], [61, 1], [61, 3], [67, 1], [67, 1], [67, 1], [67, 1], [70, 1], [71, 1], [71, 1], [72, 1], [73, 1], [73, 1], [73, 1], [69, 2], [69, 3], [68, 2], [68, 3], [84, 1], [84, 3], [85, 3], [87, 1], [87, 1], [87, 1], [60, 2], [60, 3], [60, 2], [60, 4], [60, 3], [88, 2], [88, 3], [89, 1], [89, 3], [90, 1], [90, 1], [81, 1], [81, 3], [62, 4], [62, 5], [63, 6], [92, 1], [92, 3]], performAction: function(t, e, s, o, n, a, h) {
        var l = a.length - 1;
        switch (n) {
          case 1:
            return a[l - 1];
          case 2:
            this.$ = i.createNode(r(h[l - 4]), "node_op", "op_if", a[l - 2], a[l]);
            break;
          case 3:
            this.$ = i.createNode(r(h[l - 6]), "node_op", "op_if_else", a[l - 4], a[l - 2], a[l]);
            break;
          case 4:
            this.$ = i.createNode(r(h[l - 4]), "node_op", "op_while", a[l - 2], a[l]);
            break;
          case 5:
            this.$ = i.createNode(r(h[l - 8]), "node_op", "op_for", a[l - 6], a[l - 4], a[l - 2], a[l]);
            break;
          case 6:
            this.$ = i.createNode(r(h[l - 6]), "node_op", "op_do", a[l - 5], a[l - 2]);
            break;
          case 7:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_use", a[l]);
            break;
          case 8:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_delete", a[l]);
            break;
          case 9:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_return", void 0);
            break;
          case 10:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_return", a[l - 1]);
            break;
          case 11:
            this.$ = i.createNode(r(h[l]), "node_op", "op_none");
            break;
          case 12:
            this.$ = a[l - 1], this.$.needsBrackets = !0;
            break;
          case 13:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_none", a[l - 1], a[l]);
            break;
          case 14:
            this.$ = i.createNode(r(h[l]), "node_op", "op_none");
            break;
          case 15:
            this.$ = a[l];
            break;
          case 16:
            this.$ = a[l];
            break;
          case 17:
            this.$ = a[l];
            break;
          case 18:
            this.$ = a[l];
            break;
          case 19:
            this.$ = a[l];
            break;
          case 20:
            this.$ = a[l];
            break;
          case 21:
            this.$ = a[l];
            break;
          case 22:
            this.$ = a[l - 1];
            break;
          case 23:
            this.$ = a[l];
            break;
          case 24:
            this.$ = a[l];
            break;
          case 25:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_assign", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 26:
            this.$ = a[l];
            break;
          case 27:
            this.$ = i.createNode(r(h[l - 4]), "node_op", "op_conditional", a[l - 4], a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 28:
            this.$ = a[l];
            break;
          case 29:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_or", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 30:
            this.$ = a[l];
            break;
          case 31:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_and", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 32:
            this.$ = a[l];
            break;
          case 33:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_equ", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 34:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_neq", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 35:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_approx", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 36:
            this.$ = a[l];
            break;
          case 37:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_lot", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 38:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_grt", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 39:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_loe", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 40:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_gre", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 41:
            this.$ = a[l];
            break;
          case 42:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_add", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 43:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_sub", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 44:
            this.$ = a[l];
            break;
          case 45:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_mul", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 46:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_div", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 47:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_mod", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 48:
            this.$ = a[l];
            break;
          case 49:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_exp", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 50:
            this.$ = a[l];
            break;
          case 51:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_not", a[l]), this.$.isMath = !1;
            break;
          case 52:
            this.$ = a[l];
            break;
          case 53:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_neg", a[l]), this.$.isMath = !0;
            break;
          case 54:
            this.$ = a[l];
            break;
          case 55:
            this.$ = a[l];
            break;
          case 56:
            this.$ = a[l];
            break;
          case 57:
            this.$ = a[l], this.$.isMath = !1;
            break;
          case 58:
            this.$ = a[l];
            break;
          case 59:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_property", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 60:
            this.$ = i.createNode(r(h[l - 3]), "node_op", "op_extvalue", a[l - 3], a[l - 1]), this.$.isMath = !0;
            break;
          case 61:
            this.$ = i.createNode(r(h[l]), "node_var", a[l]);
            break;
          case 62:
            this.$ = a[l];
            break;
          case 63:
            this.$ = a[l], this.$.isMath = !1;
            break;
          case 64:
            this.$ = a[l], this.$.isMath = !1;
            break;
          case 65:
            this.$ = a[l - 1];
            break;
          case 66:
            this.$ = a[l], this.$.isMath = !1;
            break;
          case 67:
            this.$ = a[l], this.$.isMath = !1;
            break;
          case 68:
            this.$ = a[l], this.$.isMath = !1;
            break;
          case 69:
            this.$ = a[l], this.$.isMath = !0;
            break;
          case 70:
            this.$ = i.createNode(r(h[l]), "node_const", null);
            break;
          case 71:
            this.$ = i.createNode(r(h[l]), "node_const_bool", !0);
            break;
          case 72:
            this.$ = i.createNode(r(h[l]), "node_const_bool", !1);
            break;
          case 73:
            this.$ = i.createNode(r(h[l]), "node_str", a[l].substring(1, a[l].length - 1));
            break;
          case 74:
            this.$ = i.createNode(r(h[l]), "node_const", parseFloat(a[l]));
            break;
          case 75:
            this.$ = i.createNode(r(h[l]), "node_const", 0 / 0);
            break;
          case 76:
            this.$ = i.createNode(r(h[l]), "node_const", 1 / 0);
            break;
          case 77:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_array", []);
            break;
          case 78:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_array", a[l - 1]);
            break;
          case 79:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_emptyobject", {});
            break;
          case 80:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_proplst_val", a[l - 1]);
            break;
          case 81:
            this.$ = a[l];
            break;
          case 82:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_proplst", a[l - 2], a[l]);
            break;
          case 83:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_prop", a[l - 2], a[l]);
            break;
          case 84:
            this.$ = a[l];
            break;
          case 85:
            this.$ = a[l];
            break;
          case 86:
            this.$ = a[l];
            break;
          case 87:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_execfun", a[l - 1], a[l]), this.$.isMath = !0;
            break;
          case 88:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_execfun", a[l - 2], a[l - 1], a[l], !0), this.$.isMath = !1;
            break;
          case 89:
            this.$ = i.createNode(r(h[l - 1]), "node_op", "op_execfun", a[l - 1], a[l]), this.$.isMath = !0;
            break;
          case 90:
            this.$ = i.createNode(r(h[l - 3]), "node_op", "op_extvalue", a[l - 3], a[l - 1]), this.$.isMath = !0;
            break;
          case 91:
            this.$ = i.createNode(r(h[l - 2]), "node_op", "op_property", a[l - 2], a[l]), this.$.isMath = !0;
            break;
          case 92:
            this.$ = [];
            break;
          case 93:
            this.$ = a[l - 1];
            break;
          case 94:
            this.$ = [a[l]];
            break;
          case 95:
            this.$ = a[l - 2].concat(a[l]);
            break;
          case 96:
            this.$ = i.createNode(r(h[l]), "node_var", a[l]), this.$.isMath = !0;
            break;
          case 97:
            this.$ = a[l], this.$.isMath = !1;
            break;
          case 98:
            this.$ = [a[l]];
            break;
          case 99:
            this.$ = a[l - 2].concat(a[l]);
            break;
          case 100:
            this.$ = i.createNode(r(h[l - 3]), "node_op", "op_function", [], a[l]), this.$.isMath = !1;
            break;
          case 101:
            this.$ = i.createNode(r(h[l - 4]), "node_op", "op_function", a[l - 2], a[l]), this.$.isMath = !1;
            break;
          case 102:
            this.$ = i.createNode(r(h[l - 5]), "node_op", "op_map", a[l - 3], a[l]);
            break;
          case 103:
            this.$ = [a[l]];
            break;
          case 104:
            this.$ = a[l - 2].concat(a[l])
        }
      }, table: [
        {3: 1, 4: 2, 5: [2, 14], 7: [2, 14], 8: [2, 14], 14: [2, 14], 15: [2, 14], 16: [2, 14], 17: [2, 14], 19: [2, 14], 20: [2, 14], 21: [2, 14], 23: [2, 14], 26: [2, 14], 50: [2, 14], 51: [2, 14], 58: [2, 14], 65: [2, 14], 74: [2, 14], 75: [2, 14], 76: [2, 14], 77: [2, 14], 78: [2, 14], 79: [2, 14], 80: [2, 14], 82: [2, 14], 91: [2, 14], 93: [2, 14]},
        {1: [3]},
        {5: [1, 3], 6: 6, 7: [1, 13], 8: [1, 37], 9: 20, 11: 4, 13: 7, 14: [1, 14], 15: [1, 15], 16: [1, 21], 17: [1, 16], 18: 8, 19: [1, 17], 20: [1, 33], 21: [1, 18], 22: 9, 23: [1, 19], 24: 11, 25: 5, 26: [1, 12], 28: 10, 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {1: [2, 1]},
        {5: [2, 13], 7: [2, 13], 8: [2, 13], 14: [2, 13], 15: [2, 13], 16: [2, 13], 17: [2, 13], 19: [2, 13], 20: [2, 13], 21: [2, 13], 23: [2, 13], 26: [2, 13], 27: [2, 13], 50: [2, 13], 51: [2, 13], 58: [2, 13], 65: [2, 13], 74: [2, 13], 75: [2, 13], 76: [2, 13], 77: [2, 13], 78: [2, 13], 79: [2, 13], 80: [2, 13], 82: [2, 13], 91: [2, 13], 93: [2, 13]},
        {5: [2, 15], 7: [2, 15], 8: [2, 15], 12: [2, 15], 14: [2, 15], 15: [2, 15], 16: [2, 15], 17: [2, 15], 19: [2, 15], 20: [2, 15], 21: [2, 15], 23: [2, 15], 26: [2, 15], 27: [2, 15], 50: [2, 15], 51: [2, 15], 58: [2, 15], 65: [2, 15], 74: [2, 15], 75: [2, 15], 76: [2, 15], 77: [2, 15], 78: [2, 15], 79: [2, 15], 80: [2, 15], 82: [2, 15], 91: [2, 15], 93: [2, 15]},
        {5: [2, 16], 7: [2, 16], 8: [2, 16], 12: [2, 16], 14: [2, 16], 15: [2, 16], 16: [2, 16], 17: [2, 16], 19: [2, 16], 20: [2, 16], 21: [2, 16], 23: [2, 16], 26: [2, 16], 27: [2, 16], 50: [2, 16], 51: [2, 16], 58: [2, 16], 65: [2, 16], 74: [2, 16], 75: [2, 16], 76: [2, 16], 77: [2, 16], 78: [2, 16], 79: [2, 16], 80: [2, 16], 82: [2, 16], 91: [2, 16], 93: [2, 16]},
        {5: [2, 17], 7: [2, 17], 8: [2, 17], 12: [2, 17], 14: [2, 17], 15: [2, 17], 16: [2, 17], 17: [2, 17], 19: [2, 17], 20: [2, 17], 21: [2, 17], 23: [2, 17], 26: [2, 17], 27: [2, 17], 50: [2, 17], 51: [2, 17], 58: [2, 17], 65: [2, 17], 74: [2, 17], 75: [2, 17], 76: [2, 17], 77: [2, 17], 78: [2, 17], 79: [2, 17], 80: [2, 17], 82: [2, 17], 91: [2, 17], 93: [2, 17]},
        {5: [2, 18], 7: [2, 18], 8: [2, 18], 12: [2, 18], 14: [2, 18], 15: [2, 18], 16: [2, 18], 17: [2, 18], 19: [2, 18], 20: [2, 18], 21: [2, 18], 23: [2, 18], 26: [2, 18], 27: [2, 18], 50: [2, 18], 51: [2, 18], 58: [2, 18], 65: [2, 18], 74: [2, 18], 75: [2, 18], 76: [2, 18], 77: [2, 18], 78: [2, 18], 79: [2, 18], 80: [2, 18], 82: [2, 18], 91: [2, 18], 93: [2, 18]},
        {5: [2, 19], 7: [2, 19], 8: [2, 19], 12: [2, 19], 14: [2, 19], 15: [2, 19], 16: [2, 19], 17: [2, 19], 19: [2, 19], 20: [2, 19], 21: [2, 19], 23: [2, 19], 26: [2, 19], 27: [2, 19], 50: [2, 19], 51: [2, 19], 58: [2, 19], 65: [2, 19], 74: [2, 19], 75: [2, 19], 76: [2, 19], 77: [2, 19], 78: [2, 19], 79: [2, 19], 80: [2, 19], 82: [2, 19], 91: [2, 19], 93: [2, 19]},
        {5: [2, 20], 7: [2, 20], 8: [2, 20], 12: [2, 20], 14: [2, 20], 15: [2, 20], 16: [2, 20], 17: [2, 20], 19: [2, 20], 20: [2, 20], 21: [2, 20], 23: [2, 20], 26: [2, 20], 27: [2, 20], 50: [2, 20], 51: [2, 20], 58: [2, 20], 65: [2, 20], 74: [2, 20], 75: [2, 20], 76: [2, 20], 77: [2, 20], 78: [2, 20], 79: [2, 20], 80: [2, 20], 82: [2, 20], 91: [2, 20], 93: [2, 20]},
        {5: [2, 21], 7: [2, 21], 8: [2, 21], 12: [2, 21], 14: [2, 21], 15: [2, 21], 16: [2, 21], 17: [2, 21], 19: [2, 21], 20: [2, 21], 21: [2, 21], 23: [2, 21], 26: [2, 21], 27: [2, 21], 50: [2, 21], 51: [2, 21], 58: [2, 21], 65: [2, 21], 74: [2, 21], 75: [2, 21], 76: [2, 21], 77: [2, 21], 78: [2, 21], 79: [2, 21], 80: [2, 21], 82: [2, 21], 91: [2, 21], 93: [2, 21]},
        {4: 61, 7: [2, 14], 8: [2, 14], 14: [2, 14], 15: [2, 14], 16: [2, 14], 17: [2, 14], 19: [2, 14], 20: [2, 14], 21: [2, 14], 23: [2, 14], 26: [2, 14], 27: [2, 14], 50: [2, 14], 51: [2, 14], 58: [2, 14], 65: [2, 14], 74: [2, 14], 75: [2, 14], 76: [2, 14], 77: [2, 14], 78: [2, 14], 79: [2, 14], 80: [2, 14], 82: [2, 14], 91: [2, 14], 93: [2, 14]},
        {8: [1, 62]},
        {8: [1, 63]},
        {8: [1, 64]},
        {6: 6, 7: [1, 13], 8: [1, 37], 9: 20, 11: 65, 13: 7, 14: [1, 14], 15: [1, 15], 16: [1, 21], 17: [1, 16], 18: 8, 19: [1, 17], 20: [1, 33], 21: [1, 18], 22: 9, 23: [1, 19], 24: 11, 25: 5, 26: [1, 12], 28: 10, 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {20: [1, 66]},
        {20: [1, 67]},
        {8: [1, 37], 9: 69, 16: [1, 68], 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {16: [1, 70]},
        {5: [2, 11], 7: [2, 11], 8: [2, 11], 12: [2, 11], 14: [2, 11], 15: [2, 11], 16: [2, 11], 17: [2, 11], 19: [2, 11], 20: [2, 11], 21: [2, 11], 23: [2, 11], 26: [2, 11], 27: [2, 11], 50: [2, 11], 51: [2, 11], 58: [2, 11], 65: [2, 11], 74: [2, 11], 75: [2, 11], 76: [2, 11], 77: [2, 11], 78: [2, 11], 79: [2, 11], 80: [2, 11], 82: [2, 11], 91: [2, 11], 93: [2, 11]},
        {8: [2, 23], 10: [2, 23], 16: [2, 23], 32: [2, 23], 34: [2, 23], 35: [2, 23], 37: [2, 23], 39: [2, 23], 41: [2, 23], 42: [2, 23], 43: [2, 23], 45: [2, 23], 46: [2, 23], 47: [2, 23], 48: [2, 23], 50: [2, 23], 51: [2, 23], 53: [2, 23], 54: [2, 23], 55: [2, 23], 57: [2, 23], 64: [2, 23], 65: [2, 23], 66: [2, 23], 83: [2, 23], 86: [2, 23]},
        {8: [2, 24], 10: [2, 24], 16: [2, 24], 32: [2, 24], 34: [2, 24], 35: [2, 24], 37: [2, 24], 39: [2, 24], 41: [2, 24], 42: [2, 24], 43: [2, 24], 45: [2, 24], 46: [2, 24], 47: [2, 24], 48: [2, 24], 50: [2, 24], 51: [2, 24], 53: [2, 24], 54: [2, 24], 55: [2, 24], 57: [2, 24], 64: [2, 24], 65: [2, 24], 66: [2, 24], 83: [2, 24], 86: [2, 24]},
        {8: [2, 48], 10: [2, 48], 16: [2, 48], 32: [1, 71], 34: [2, 48], 35: [2, 48], 37: [2, 48], 39: [2, 48], 41: [2, 48], 42: [2, 48], 43: [2, 48], 45: [2, 48], 46: [2, 48], 47: [2, 48], 48: [2, 48], 50: [2, 48], 51: [2, 48], 53: [2, 48], 54: [2, 48], 55: [2, 48], 57: [1, 72], 64: [2, 48], 65: [2, 48], 66: [2, 48], 83: [2, 48], 86: [2, 48]},
        {8: [2, 26], 10: [2, 26], 16: [2, 26], 32: [2, 26], 34: [1, 73], 35: [2, 26], 37: [1, 74], 39: [2, 26], 41: [2, 26], 42: [2, 26], 43: [2, 26], 45: [2, 26], 46: [2, 26], 47: [2, 26], 48: [2, 26], 50: [2, 26], 51: [2, 26], 53: [2, 26], 54: [2, 26], 55: [2, 26], 57: [2, 26], 64: [2, 26], 65: [2, 26], 66: [2, 26], 83: [2, 26], 86: [2, 26]},
        {8: [1, 78], 10: [2, 54], 16: [2, 54], 32: [2, 54], 34: [2, 54], 35: [2, 54], 37: [2, 54], 39: [2, 54], 41: [2, 54], 42: [2, 54], 43: [2, 54], 45: [2, 54], 46: [2, 54], 47: [2, 54], 48: [2, 54], 50: [2, 54], 51: [2, 54], 53: [2, 54], 54: [2, 54], 55: [2, 54], 57: [2, 54], 64: [1, 75], 65: [1, 76], 66: [2, 54], 83: [2, 54], 86: [2, 54], 88: 77},
        {8: [1, 78], 10: [2, 55], 16: [2, 55], 32: [2, 55], 34: [2, 55], 35: [2, 55], 37: [2, 55], 39: [2, 55], 41: [2, 55], 42: [2, 55], 43: [2, 55], 45: [2, 55], 46: [2, 55], 47: [2, 55], 48: [2, 55], 50: [2, 55], 51: [2, 55], 53: [2, 55], 54: [2, 55], 55: [2, 55], 57: [2, 55], 64: [1, 81], 65: [1, 80], 66: [2, 55], 83: [2, 55], 86: [2, 55], 88: 79},
        {8: [2, 28], 10: [2, 28], 16: [2, 28], 32: [2, 28], 34: [2, 28], 35: [2, 28], 37: [2, 28], 39: [1, 82], 41: [2, 28], 42: [2, 28], 43: [2, 28], 45: [2, 28], 46: [2, 28], 47: [2, 28], 48: [2, 28], 50: [2, 28], 51: [2, 28], 53: [2, 28], 54: [2, 28], 55: [2, 28], 57: [2, 28], 64: [2, 28], 65: [2, 28], 66: [2, 28], 83: [2, 28], 86: [2, 28]},
        {8: [2, 56], 10: [2, 56], 16: [2, 56], 32: [2, 56], 34: [2, 56], 35: [2, 56], 37: [2, 56], 39: [2, 56], 41: [2, 56], 42: [2, 56], 43: [2, 56], 45: [2, 56], 46: [2, 56], 47: [2, 56], 48: [2, 56], 50: [2, 56], 51: [2, 56], 53: [2, 56], 54: [2, 56], 55: [2, 56], 57: [2, 56], 64: [2, 56], 65: [2, 56], 66: [2, 56], 83: [2, 56], 86: [2, 56]},
        {8: [2, 57], 10: [2, 57], 16: [2, 57], 32: [2, 57], 34: [2, 57], 35: [2, 57], 37: [2, 57], 39: [2, 57], 41: [2, 57], 42: [2, 57], 43: [2, 57], 45: [2, 57], 46: [2, 57], 47: [2, 57], 48: [2, 57], 50: [2, 57], 51: [2, 57], 53: [2, 57], 54: [2, 57], 55: [2, 57], 57: [2, 57], 64: [2, 57], 65: [2, 57], 66: [2, 57], 83: [2, 57], 86: [2, 57]},
        {8: [2, 58], 10: [2, 58], 16: [2, 58], 32: [2, 58], 34: [2, 58], 35: [2, 58], 37: [2, 58], 39: [2, 58], 41: [2, 58], 42: [2, 58], 43: [2, 58], 45: [2, 58], 46: [2, 58], 47: [2, 58], 48: [2, 58], 50: [2, 58], 51: [2, 58], 53: [2, 58], 54: [2, 58], 55: [2, 58], 57: [2, 58], 64: [2, 58], 65: [2, 58], 66: [2, 58], 83: [2, 58], 86: [2, 58]},
        {8: [2, 30], 10: [2, 30], 16: [2, 30], 32: [2, 30], 34: [2, 30], 35: [2, 30], 37: [2, 30], 39: [2, 30], 41: [1, 83], 42: [1, 84], 43: [1, 85], 45: [2, 30], 46: [2, 30], 47: [2, 30], 48: [2, 30], 50: [2, 30], 51: [2, 30], 53: [2, 30], 54: [2, 30], 55: [2, 30], 57: [2, 30], 64: [2, 30], 65: [2, 30], 66: [2, 30], 83: [2, 30], 86: [2, 30]},
        {8: [2, 61], 10: [2, 61], 16: [2, 61], 32: [2, 61], 34: [2, 61], 35: [2, 61], 37: [2, 61], 39: [2, 61], 41: [2, 61], 42: [2, 61], 43: [2, 61], 45: [2, 61], 46: [2, 61], 47: [2, 61], 48: [2, 61], 50: [2, 61], 51: [2, 61], 53: [2, 61], 54: [2, 61], 55: [2, 61], 57: [2, 61], 64: [2, 61], 65: [2, 61], 66: [2, 61], 83: [2, 61], 86: [2, 61]},
        {8: [2, 62], 10: [2, 62], 16: [2, 62], 32: [2, 62], 34: [2, 62], 35: [2, 62], 37: [2, 62], 39: [2, 62], 41: [2, 62], 42: [2, 62], 43: [2, 62], 45: [2, 62], 46: [2, 62], 47: [2, 62], 48: [2, 62], 50: [2, 62], 51: [2, 62], 53: [2, 62], 54: [2, 62], 55: [2, 62], 57: [2, 62], 64: [2, 62], 65: [2, 62], 66: [2, 62], 83: [2, 62], 86: [2, 62]},
        {8: [2, 63], 10: [2, 63], 16: [2, 63], 32: [2, 63], 34: [2, 63], 35: [2, 63], 37: [2, 63], 39: [2, 63], 41: [2, 63], 42: [2, 63], 43: [2, 63], 45: [2, 63], 46: [2, 63], 47: [2, 63], 48: [2, 63], 50: [2, 63], 51: [2, 63], 53: [2, 63], 54: [2, 63], 55: [2, 63], 57: [2, 63], 64: [2, 63], 65: [2, 63], 66: [2, 63], 83: [2, 63], 86: [2, 63]},
        {8: [2, 64], 10: [2, 64], 16: [2, 64], 32: [2, 64], 34: [2, 64], 35: [2, 64], 37: [2, 64], 39: [2, 64], 41: [2, 64], 42: [2, 64], 43: [2, 64], 45: [2, 64], 46: [2, 64], 47: [2, 64], 48: [2, 64], 50: [2, 64], 51: [2, 64], 53: [2, 64], 54: [2, 64], 55: [2, 64], 57: [2, 64], 64: [2, 64], 65: [2, 64], 66: [2, 64], 83: [2, 64], 86: [2, 64]},
        {8: [1, 37], 9: 86, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 87]},
        {8: [1, 88]},
        {8: [2, 32], 10: [2, 32], 16: [2, 32], 32: [2, 32], 34: [2, 32], 35: [2, 32], 37: [2, 32], 39: [2, 32], 41: [2, 32], 42: [2, 32], 43: [2, 32], 45: [1, 89], 46: [1, 90], 47: [1, 91], 48: [1, 92], 50: [2, 32], 51: [2, 32], 53: [2, 32], 54: [2, 32], 55: [2, 32], 57: [2, 32], 64: [2, 32], 65: [2, 32], 66: [2, 32], 83: [2, 32], 86: [2, 32]},
        {8: [2, 66], 10: [2, 66], 16: [2, 66], 32: [2, 66], 34: [2, 66], 35: [2, 66], 37: [2, 66], 39: [2, 66], 41: [2, 66], 42: [2, 66], 43: [2, 66], 45: [2, 66], 46: [2, 66], 47: [2, 66], 48: [2, 66], 50: [2, 66], 51: [2, 66], 53: [2, 66], 54: [2, 66], 55: [2, 66], 57: [2, 66], 64: [2, 66], 65: [2, 66], 66: [2, 66], 83: [2, 66], 86: [2, 66]},
        {8: [2, 67], 10: [2, 67], 16: [2, 67], 32: [2, 67], 34: [2, 67], 35: [2, 67], 37: [2, 67], 39: [2, 67], 41: [2, 67], 42: [2, 67], 43: [2, 67], 45: [2, 67], 46: [2, 67], 47: [2, 67], 48: [2, 67], 50: [2, 67], 51: [2, 67], 53: [2, 67], 54: [2, 67], 55: [2, 67], 57: [2, 67], 64: [2, 67], 65: [2, 67], 66: [2, 67], 83: [2, 67], 86: [2, 67]},
        {8: [2, 68], 10: [2, 68], 16: [2, 68], 32: [2, 68], 34: [2, 68], 35: [2, 68], 37: [2, 68], 39: [2, 68], 41: [2, 68], 42: [2, 68], 43: [2, 68], 45: [2, 68], 46: [2, 68], 47: [2, 68], 48: [2, 68], 50: [2, 68], 51: [2, 68], 53: [2, 68], 54: [2, 68], 55: [2, 68], 57: [2, 68], 64: [2, 68], 65: [2, 68], 66: [2, 68], 83: [2, 68], 86: [2, 68]},
        {8: [2, 69], 10: [2, 69], 16: [2, 69], 32: [2, 69], 34: [2, 69], 35: [2, 69], 37: [2, 69], 39: [2, 69], 41: [2, 69], 42: [2, 69], 43: [2, 69], 45: [2, 69], 46: [2, 69], 47: [2, 69], 48: [2, 69], 50: [2, 69], 51: [2, 69], 53: [2, 69], 54: [2, 69], 55: [2, 69], 57: [2, 69], 64: [2, 69], 65: [2, 69], 66: [2, 69], 83: [2, 69], 86: [2, 69]},
        {20: [1, 97], 72: 98, 73: 99, 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 83: [1, 93], 84: 94, 85: 95, 87: 96},
        {8: [1, 37], 20: [1, 33], 29: 102, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 66: [1, 100], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 81: 101, 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 36], 10: [2, 36], 16: [2, 36], 32: [2, 36], 34: [2, 36], 35: [2, 36], 37: [2, 36], 39: [2, 36], 41: [2, 36], 42: [2, 36], 43: [2, 36], 45: [2, 36], 46: [2, 36], 47: [2, 36], 48: [2, 36], 50: [1, 103], 51: [1, 104], 53: [2, 36], 54: [2, 36], 55: [2, 36], 57: [2, 36], 64: [2, 36], 65: [2, 36], 66: [2, 36], 83: [2, 36], 86: [2, 36]},
        {8: [2, 70], 10: [2, 70], 16: [2, 70], 32: [2, 70], 34: [2, 70], 35: [2, 70], 37: [2, 70], 39: [2, 70], 41: [2, 70], 42: [2, 70], 43: [2, 70], 45: [2, 70], 46: [2, 70], 47: [2, 70], 48: [2, 70], 50: [2, 70], 51: [2, 70], 53: [2, 70], 54: [2, 70], 55: [2, 70], 57: [2, 70], 64: [2, 70], 65: [2, 70], 66: [2, 70], 83: [2, 70], 86: [2, 70]},
        {8: [2, 71], 10: [2, 71], 16: [2, 71], 32: [2, 71], 34: [2, 71], 35: [2, 71], 37: [2, 71], 39: [2, 71], 41: [2, 71], 42: [2, 71], 43: [2, 71], 45: [2, 71], 46: [2, 71], 47: [2, 71], 48: [2, 71], 50: [2, 71], 51: [2, 71], 53: [2, 71], 54: [2, 71], 55: [2, 71], 57: [2, 71], 64: [2, 71], 65: [2, 71], 66: [2, 71], 83: [2, 71], 86: [2, 71]},
        {8: [2, 72], 10: [2, 72], 16: [2, 72], 32: [2, 72], 34: [2, 72], 35: [2, 72], 37: [2, 72], 39: [2, 72], 41: [2, 72], 42: [2, 72], 43: [2, 72], 45: [2, 72], 46: [2, 72], 47: [2, 72], 48: [2, 72], 50: [2, 72], 51: [2, 72], 53: [2, 72], 54: [2, 72], 55: [2, 72], 57: [2, 72], 64: [2, 72], 65: [2, 72], 66: [2, 72], 83: [2, 72], 86: [2, 72]},
        {8: [2, 73], 10: [2, 73], 16: [2, 73], 32: [2, 73], 34: [2, 73], 35: [2, 73], 37: [2, 73], 39: [2, 73], 41: [2, 73], 42: [2, 73], 43: [2, 73], 45: [2, 73], 46: [2, 73], 47: [2, 73], 48: [2, 73], 50: [2, 73], 51: [2, 73], 53: [2, 73], 54: [2, 73], 55: [2, 73], 57: [2, 73], 64: [2, 73], 65: [2, 73], 66: [2, 73], 83: [2, 73], 86: [2, 73]},
        {8: [2, 74], 10: [2, 74], 16: [2, 74], 32: [2, 74], 34: [2, 74], 35: [2, 74], 37: [2, 74], 39: [2, 74], 41: [2, 74], 42: [2, 74], 43: [2, 74], 45: [2, 74], 46: [2, 74], 47: [2, 74], 48: [2, 74], 50: [2, 74], 51: [2, 74], 53: [2, 74], 54: [2, 74], 55: [2, 74], 57: [2, 74], 64: [2, 74], 65: [2, 74], 66: [2, 74], 83: [2, 74], 86: [2, 74]},
        {8: [2, 75], 10: [2, 75], 16: [2, 75], 32: [2, 75], 34: [2, 75], 35: [2, 75], 37: [2, 75], 39: [2, 75], 41: [2, 75], 42: [2, 75], 43: [2, 75], 45: [2, 75], 46: [2, 75], 47: [2, 75], 48: [2, 75], 50: [2, 75], 51: [2, 75], 53: [2, 75], 54: [2, 75], 55: [2, 75], 57: [2, 75], 64: [2, 75], 65: [2, 75], 66: [2, 75], 83: [2, 75], 86: [2, 75]},
        {8: [2, 76], 10: [2, 76], 16: [2, 76], 32: [2, 76], 34: [2, 76], 35: [2, 76], 37: [2, 76], 39: [2, 76], 41: [2, 76], 42: [2, 76], 43: [2, 76], 45: [2, 76], 46: [2, 76], 47: [2, 76], 48: [2, 76], 50: [2, 76], 51: [2, 76], 53: [2, 76], 54: [2, 76], 55: [2, 76], 57: [2, 76], 64: [2, 76], 65: [2, 76], 66: [2, 76], 83: [2, 76], 86: [2, 76]},
        {8: [2, 41], 10: [2, 41], 16: [2, 41], 32: [2, 41], 34: [2, 41], 35: [2, 41], 37: [2, 41], 39: [2, 41], 41: [2, 41], 42: [2, 41], 43: [2, 41], 45: [2, 41], 46: [2, 41], 47: [2, 41], 48: [2, 41], 50: [2, 41], 51: [2, 41], 53: [1, 105], 54: [1, 106], 55: [1, 107], 57: [2, 41], 64: [2, 41], 65: [2, 41], 66: [2, 41], 83: [2, 41], 86: [2, 41]},
        {8: [2, 44], 10: [2, 44], 16: [2, 44], 32: [2, 44], 34: [2, 44], 35: [2, 44], 37: [2, 44], 39: [2, 44], 41: [2, 44], 42: [2, 44], 43: [2, 44], 45: [2, 44], 46: [2, 44], 47: [2, 44], 48: [2, 44], 50: [2, 44], 51: [2, 44], 53: [2, 44], 54: [2, 44], 55: [2, 44], 57: [2, 44], 64: [2, 44], 65: [2, 44], 66: [2, 44], 83: [2, 44], 86: [2, 44]},
        {8: [2, 50], 10: [2, 50], 16: [2, 50], 32: [2, 50], 34: [2, 50], 35: [2, 50], 37: [2, 50], 39: [2, 50], 41: [2, 50], 42: [2, 50], 43: [2, 50], 45: [2, 50], 46: [2, 50], 47: [2, 50], 48: [2, 50], 50: [2, 50], 51: [2, 50], 53: [2, 50], 54: [2, 50], 55: [2, 50], 57: [2, 50], 64: [2, 50], 65: [2, 50], 66: [2, 50], 83: [2, 50], 86: [2, 50]},
        {8: [1, 37], 20: [1, 33], 31: 109, 50: [1, 59], 51: [1, 60], 52: 108, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 50: [1, 59], 51: [1, 60], 52: 110, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 50: [1, 59], 51: [1, 60], 52: 111, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {6: 6, 7: [1, 13], 8: [1, 37], 9: 20, 11: 4, 13: 7, 14: [1, 14], 15: [1, 15], 16: [1, 21], 17: [1, 16], 18: 8, 19: [1, 17], 20: [1, 33], 21: [1, 18], 22: 9, 23: [1, 19], 24: 11, 25: 5, 26: [1, 12], 27: [1, 112], 28: 10, 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 9: 113, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 9: 114, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 9: 115, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {14: [1, 116]},
        {5: [2, 7], 7: [2, 7], 8: [2, 7], 12: [2, 7], 14: [2, 7], 15: [2, 7], 16: [2, 7], 17: [2, 7], 19: [2, 7], 20: [2, 7], 21: [2, 7], 23: [2, 7], 26: [2, 7], 27: [2, 7], 50: [2, 7], 51: [2, 7], 58: [2, 7], 65: [2, 7], 74: [2, 7], 75: [2, 7], 76: [2, 7], 77: [2, 7], 78: [2, 7], 79: [2, 7], 80: [2, 7], 82: [2, 7], 91: [2, 7], 93: [2, 7]},
        {5: [2, 8], 7: [2, 8], 8: [2, 8], 12: [2, 8], 14: [2, 8], 15: [2, 8], 16: [2, 8], 17: [2, 8], 19: [2, 8], 20: [2, 8], 21: [2, 8], 23: [2, 8], 26: [2, 8], 27: [2, 8], 50: [2, 8], 51: [2, 8], 58: [2, 8], 65: [2, 8], 74: [2, 8], 75: [2, 8], 76: [2, 8], 77: [2, 8], 78: [2, 8], 79: [2, 8], 80: [2, 8], 82: [2, 8], 91: [2, 8], 93: [2, 8]},
        {5: [2, 9], 7: [2, 9], 8: [2, 9], 12: [2, 9], 14: [2, 9], 15: [2, 9], 16: [2, 9], 17: [2, 9], 19: [2, 9], 20: [2, 9], 21: [2, 9], 23: [2, 9], 26: [2, 9], 27: [2, 9], 50: [2, 9], 51: [2, 9], 58: [2, 9], 65: [2, 9], 74: [2, 9], 75: [2, 9], 76: [2, 9], 77: [2, 9], 78: [2, 9], 79: [2, 9], 80: [2, 9], 82: [2, 9], 91: [2, 9], 93: [2, 9]},
        {16: [1, 117]},
        {5: [2, 22], 7: [2, 22], 8: [2, 22], 12: [2, 22], 14: [2, 22], 15: [2, 22], 16: [2, 22], 17: [2, 22], 19: [2, 22], 20: [2, 22], 21: [2, 22], 23: [2, 22], 26: [2, 22], 27: [2, 22], 50: [2, 22], 51: [2, 22], 58: [2, 22], 65: [2, 22], 74: [2, 22], 75: [2, 22], 76: [2, 22], 77: [2, 22], 78: [2, 22], 79: [2, 22], 80: [2, 22], 82: [2, 22], 91: [2, 22], 93: [2, 22]},
        {8: [1, 37], 20: [1, 33], 29: 118, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 50: [1, 59], 51: [1, 60], 52: 119, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 29: 120, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 36: 121, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {20: [1, 122]},
        {8: [1, 37], 9: 123, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 87], 10: [2, 87], 16: [2, 87], 20: [1, 126], 32: [2, 87], 34: [2, 87], 35: [2, 87], 37: [2, 87], 39: [2, 87], 41: [2, 87], 42: [2, 87], 43: [2, 87], 45: [2, 87], 46: [2, 87], 47: [2, 87], 48: [2, 87], 50: [2, 87], 51: [2, 87], 53: [2, 87], 54: [2, 87], 55: [2, 87], 57: [2, 87], 64: [2, 87], 65: [2, 87], 66: [2, 87], 68: 127, 82: [1, 45], 83: [2, 87], 86: [2, 87], 89: 124, 90: 125},
        {8: [1, 37], 10: [1, 128], 20: [1, 33], 29: 102, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 81: 129, 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 89], 10: [2, 89], 16: [2, 89], 32: [2, 89], 34: [2, 89], 35: [2, 89], 37: [2, 89], 39: [2, 89], 41: [2, 89], 42: [2, 89], 43: [2, 89], 45: [2, 89], 46: [2, 89], 47: [2, 89], 48: [2, 89], 50: [2, 89], 51: [2, 89], 53: [2, 89], 54: [2, 89], 55: [2, 89], 57: [2, 89], 64: [2, 89], 65: [2, 89], 66: [2, 89], 83: [2, 89], 86: [2, 89]},
        {8: [1, 37], 9: 130, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {20: [1, 131]},
        {8: [1, 37], 20: [1, 33], 31: 109, 38: 132, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 40: 133, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 40: 134, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 40: 135, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {10: [1, 136]},
        {10: [1, 137], 20: [1, 139], 92: 138},
        {20: [1, 139], 92: 140},
        {8: [1, 37], 20: [1, 33], 31: 109, 44: 141, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 44: 142, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 44: 143, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 44: 144, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 79], 10: [2, 79], 16: [2, 79], 32: [2, 79], 34: [2, 79], 35: [2, 79], 37: [2, 79], 39: [2, 79], 41: [2, 79], 42: [2, 79], 43: [2, 79], 45: [2, 79], 46: [2, 79], 47: [2, 79], 48: [2, 79], 50: [2, 79], 51: [2, 79], 53: [2, 79], 54: [2, 79], 55: [2, 79], 57: [2, 79], 64: [2, 79], 65: [2, 79], 66: [2, 79], 83: [2, 79], 86: [2, 79]},
        {83: [1, 145], 86: [1, 146]},
        {83: [2, 81], 86: [2, 81]},
        {35: [1, 147]},
        {35: [2, 84]},
        {35: [2, 85]},
        {35: [2, 86]},
        {8: [2, 77], 10: [2, 77], 16: [2, 77], 32: [2, 77], 34: [2, 77], 35: [2, 77], 37: [2, 77], 39: [2, 77], 41: [2, 77], 42: [2, 77], 43: [2, 77], 45: [2, 77], 46: [2, 77], 47: [2, 77], 48: [2, 77], 50: [2, 77], 51: [2, 77], 53: [2, 77], 54: [2, 77], 55: [2, 77], 57: [2, 77], 64: [2, 77], 65: [2, 77], 66: [2, 77], 83: [2, 77], 86: [2, 77]},
        {66: [1, 148], 86: [1, 149]},
        {10: [2, 98], 66: [2, 98], 86: [2, 98]},
        {8: [1, 37], 20: [1, 33], 31: 109, 49: 150, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 49: 151, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 50: [1, 59], 51: [1, 60], 52: 152, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 50: [1, 59], 51: [1, 60], 52: 153, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 31: 109, 50: [1, 59], 51: [1, 60], 52: 154, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 51], 10: [2, 51], 16: [2, 51], 32: [2, 51], 34: [2, 51], 35: [2, 51], 37: [2, 51], 39: [2, 51], 41: [2, 51], 42: [2, 51], 43: [2, 51], 45: [2, 51], 46: [2, 51], 47: [2, 51], 48: [2, 51], 50: [2, 51], 51: [2, 51], 53: [2, 51], 54: [2, 51], 55: [2, 51], 57: [2, 51], 64: [2, 51], 65: [2, 51], 66: [2, 51], 83: [2, 51], 86: [2, 51]},
        {8: [2, 48], 10: [2, 48], 16: [2, 48], 32: [2, 48], 34: [2, 48], 35: [2, 48], 37: [2, 48], 39: [2, 48], 41: [2, 48], 42: [2, 48], 43: [2, 48], 45: [2, 48], 46: [2, 48], 47: [2, 48], 48: [2, 48], 50: [2, 48], 51: [2, 48], 53: [2, 48], 54: [2, 48], 55: [2, 48], 57: [1, 72], 64: [2, 48], 65: [2, 48], 66: [2, 48], 83: [2, 48], 86: [2, 48]},
        {8: [2, 52], 10: [2, 52], 16: [2, 52], 32: [2, 52], 34: [2, 52], 35: [2, 52], 37: [2, 52], 39: [2, 52], 41: [2, 52], 42: [2, 52], 43: [2, 52], 45: [2, 52], 46: [2, 52], 47: [2, 52], 48: [2, 52], 50: [2, 52], 51: [2, 52], 53: [2, 52], 54: [2, 52], 55: [2, 52], 57: [2, 52], 64: [2, 52], 65: [2, 52], 66: [2, 52], 83: [2, 52], 86: [2, 52]},
        {8: [2, 53], 10: [2, 53], 16: [2, 53], 32: [2, 53], 34: [2, 53], 35: [2, 53], 37: [2, 53], 39: [2, 53], 41: [2, 53], 42: [2, 53], 43: [2, 53], 45: [2, 53], 46: [2, 53], 47: [2, 53], 48: [2, 53], 50: [2, 53], 51: [2, 53], 53: [2, 53], 54: [2, 53], 55: [2, 53], 57: [2, 53], 64: [2, 53], 65: [2, 53], 66: [2, 53], 83: [2, 53], 86: [2, 53]},
        {5: [2, 12], 7: [2, 12], 8: [2, 12], 10: [2, 12], 12: [2, 12], 14: [2, 12], 15: [2, 12], 16: [2, 12], 17: [2, 12], 19: [2, 12], 20: [2, 12], 21: [2, 12], 23: [2, 12], 26: [2, 12], 27: [2, 12], 32: [2, 12], 34: [2, 12], 35: [2, 12], 37: [2, 12], 39: [2, 12], 41: [2, 12], 42: [2, 12], 43: [2, 12], 45: [2, 12], 46: [2, 12], 47: [2, 12], 48: [2, 12], 50: [2, 12], 51: [2, 12], 53: [2, 12], 54: [2, 12], 55: [2, 12], 57: [2, 12], 58: [2, 12], 64: [2, 12], 65: [2, 12], 66: [2, 12], 74: [2, 12], 75: [2, 12], 76: [2, 12], 77: [2, 12], 78: [2, 12], 79: [2, 12], 80: [2, 12], 82: [2, 12], 83: [2, 12], 86: [2, 12], 91: [2, 12], 93: [2, 12]},
        {10: [1, 155]},
        {10: [1, 156]},
        {16: [1, 157]},
        {8: [1, 158]},
        {5: [2, 10], 7: [2, 10], 8: [2, 10], 12: [2, 10], 14: [2, 10], 15: [2, 10], 16: [2, 10], 17: [2, 10], 19: [2, 10], 20: [2, 10], 21: [2, 10], 23: [2, 10], 26: [2, 10], 27: [2, 10], 50: [2, 10], 51: [2, 10], 58: [2, 10], 65: [2, 10], 74: [2, 10], 75: [2, 10], 76: [2, 10], 77: [2, 10], 78: [2, 10], 79: [2, 10], 80: [2, 10], 82: [2, 10], 91: [2, 10], 93: [2, 10]},
        {8: [2, 25], 10: [2, 25], 16: [2, 25], 32: [2, 25], 34: [2, 25], 35: [2, 25], 37: [2, 25], 39: [2, 25], 41: [2, 25], 42: [2, 25], 43: [2, 25], 45: [2, 25], 46: [2, 25], 47: [2, 25], 48: [2, 25], 50: [2, 25], 51: [2, 25], 53: [2, 25], 54: [2, 25], 55: [2, 25], 57: [2, 25], 64: [2, 25], 65: [2, 25], 66: [2, 25], 83: [2, 25], 86: [2, 25]},
        {8: [2, 49], 10: [2, 49], 16: [2, 49], 32: [2, 49], 34: [2, 49], 35: [2, 49], 37: [2, 49], 39: [2, 49], 41: [2, 49], 42: [2, 49], 43: [2, 49], 45: [2, 49], 46: [2, 49], 47: [2, 49], 48: [2, 49], 50: [2, 49], 51: [2, 49], 53: [2, 49], 54: [2, 49], 55: [2, 49], 57: [2, 49], 64: [2, 49], 65: [2, 49], 66: [2, 49], 83: [2, 49], 86: [2, 49]},
        {35: [1, 159]},
        {8: [2, 29], 10: [2, 29], 16: [2, 29], 32: [2, 29], 34: [2, 29], 35: [2, 29], 37: [2, 29], 39: [1, 82], 41: [2, 29], 42: [2, 29], 43: [2, 29], 45: [2, 29], 46: [2, 29], 47: [2, 29], 48: [2, 29], 50: [2, 29], 51: [2, 29], 53: [2, 29], 54: [2, 29], 55: [2, 29], 57: [2, 29], 64: [2, 29], 65: [2, 29], 66: [2, 29], 83: [2, 29], 86: [2, 29]},
        {8: [2, 59], 10: [2, 59], 16: [2, 59], 32: [2, 59], 34: [2, 59], 35: [2, 59], 37: [2, 59], 39: [2, 59], 41: [2, 59], 42: [2, 59], 43: [2, 59], 45: [2, 59], 46: [2, 59], 47: [2, 59], 48: [2, 59], 50: [2, 59], 51: [2, 59], 53: [2, 59], 54: [2, 59], 55: [2, 59], 57: [2, 59], 64: [2, 59], 65: [2, 59], 66: [2, 59], 83: [2, 59], 86: [2, 59]},
        {66: [1, 160]},
        {8: [2, 88], 10: [2, 88], 16: [2, 88], 32: [2, 88], 34: [2, 88], 35: [2, 88], 37: [2, 88], 39: [2, 88], 41: [2, 88], 42: [2, 88], 43: [2, 88], 45: [2, 88], 46: [2, 88], 47: [2, 88], 48: [2, 88], 50: [2, 88], 51: [2, 88], 53: [2, 88], 54: [2, 88], 55: [2, 88], 57: [2, 88], 64: [2, 88], 65: [2, 88], 66: [2, 88], 83: [2, 88], 86: [1, 161]},
        {8: [2, 94], 10: [2, 94], 16: [2, 94], 32: [2, 94], 34: [2, 94], 35: [2, 94], 37: [2, 94], 39: [2, 94], 41: [2, 94], 42: [2, 94], 43: [2, 94], 45: [2, 94], 46: [2, 94], 47: [2, 94], 48: [2, 94], 50: [2, 94], 51: [2, 94], 53: [2, 94], 54: [2, 94], 55: [2, 94], 57: [2, 94], 64: [2, 94], 65: [2, 94], 66: [2, 94], 83: [2, 94], 86: [2, 94]},
        {8: [2, 96], 10: [2, 96], 16: [2, 96], 32: [2, 96], 34: [2, 96], 35: [2, 96], 37: [2, 96], 39: [2, 96], 41: [2, 96], 42: [2, 96], 43: [2, 96], 45: [2, 96], 46: [2, 96], 47: [2, 96], 48: [2, 96], 50: [2, 96], 51: [2, 96], 53: [2, 96], 54: [2, 96], 55: [2, 96], 57: [2, 96], 64: [2, 96], 65: [2, 96], 66: [2, 96], 83: [2, 96], 86: [2, 96]},
        {8: [2, 97], 10: [2, 97], 16: [2, 97], 32: [2, 97], 34: [2, 97], 35: [2, 97], 37: [2, 97], 39: [2, 97], 41: [2, 97], 42: [2, 97], 43: [2, 97], 45: [2, 97], 46: [2, 97], 47: [2, 97], 48: [2, 97], 50: [2, 97], 51: [2, 97], 53: [2, 97], 54: [2, 97], 55: [2, 97], 57: [2, 97], 64: [2, 97], 65: [2, 97], 66: [2, 97], 83: [2, 97], 86: [2, 97]},
        {8: [2, 92], 10: [2, 92], 16: [2, 92], 20: [2, 92], 32: [2, 92], 34: [2, 92], 35: [2, 92], 37: [2, 92], 39: [2, 92], 41: [2, 92], 42: [2, 92], 43: [2, 92], 45: [2, 92], 46: [2, 92], 47: [2, 92], 48: [2, 92], 50: [2, 92], 51: [2, 92], 53: [2, 92], 54: [2, 92], 55: [2, 92], 57: [2, 92], 64: [2, 92], 65: [2, 92], 66: [2, 92], 82: [2, 92], 83: [2, 92], 86: [2, 92]},
        {10: [1, 162], 86: [1, 149]},
        {66: [1, 163]},
        {8: [2, 91], 10: [2, 91], 16: [2, 91], 32: [2, 91], 34: [2, 91], 35: [2, 91], 37: [2, 91], 39: [2, 91], 41: [2, 91], 42: [2, 91], 43: [2, 91], 45: [2, 91], 46: [2, 91], 47: [2, 91], 48: [2, 91], 50: [2, 91], 51: [2, 91], 53: [2, 91], 54: [2, 91], 55: [2, 91], 57: [2, 91], 64: [2, 91], 65: [2, 91], 66: [2, 91], 83: [2, 91], 86: [2, 91]},
        {8: [2, 31], 10: [2, 31], 16: [2, 31], 32: [2, 31], 34: [2, 31], 35: [2, 31], 37: [2, 31], 39: [2, 31], 41: [1, 83], 42: [1, 84], 43: [1, 85], 45: [2, 31], 46: [2, 31], 47: [2, 31], 48: [2, 31], 50: [2, 31], 51: [2, 31], 53: [2, 31], 54: [2, 31], 55: [2, 31], 57: [2, 31], 64: [2, 31], 65: [2, 31], 66: [2, 31], 83: [2, 31], 86: [2, 31]},
        {8: [2, 33], 10: [2, 33], 16: [2, 33], 32: [2, 33], 34: [2, 33], 35: [2, 33], 37: [2, 33], 39: [2, 33], 41: [2, 33], 42: [2, 33], 43: [2, 33], 45: [1, 89], 46: [1, 90], 47: [1, 91], 48: [1, 92], 50: [2, 33], 51: [2, 33], 53: [2, 33], 54: [2, 33], 55: [2, 33], 57: [2, 33], 64: [2, 33], 65: [2, 33], 66: [2, 33], 83: [2, 33], 86: [2, 33]},
        {8: [2, 34], 10: [2, 34], 16: [2, 34], 32: [2, 34], 34: [2, 34], 35: [2, 34], 37: [2, 34], 39: [2, 34], 41: [2, 34], 42: [2, 34], 43: [2, 34], 45: [1, 89], 46: [1, 90], 47: [1, 91], 48: [1, 92], 50: [2, 34], 51: [2, 34], 53: [2, 34], 54: [2, 34], 55: [2, 34], 57: [2, 34], 64: [2, 34], 65: [2, 34], 66: [2, 34], 83: [2, 34], 86: [2, 34]},
        {8: [2, 35], 10: [2, 35], 16: [2, 35], 32: [2, 35], 34: [2, 35], 35: [2, 35], 37: [2, 35], 39: [2, 35], 41: [2, 35], 42: [2, 35], 43: [2, 35], 45: [1, 89], 46: [1, 90], 47: [1, 91], 48: [1, 92], 50: [2, 35], 51: [2, 35], 53: [2, 35], 54: [2, 35], 55: [2, 35], 57: [2, 35], 64: [2, 35], 65: [2, 35], 66: [2, 35], 83: [2, 35], 86: [2, 35]},
        {8: [2, 65], 10: [2, 65], 16: [2, 65], 32: [2, 65], 34: [2, 65], 35: [2, 65], 37: [2, 65], 39: [2, 65], 41: [2, 65], 42: [2, 65], 43: [2, 65], 45: [2, 65], 46: [2, 65], 47: [2, 65], 48: [2, 65], 50: [2, 65], 51: [2, 65], 53: [2, 65], 54: [2, 65], 55: [2, 65], 57: [2, 65], 64: [2, 65], 65: [2, 65], 66: [2, 65], 83: [2, 65], 86: [2, 65]},
        {25: 164, 26: [1, 12]},
        {10: [1, 165], 86: [1, 166]},
        {10: [2, 103], 86: [2, 103]},
        {10: [1, 167], 86: [1, 166]},
        {8: [2, 37], 10: [2, 37], 16: [2, 37], 32: [2, 37], 34: [2, 37], 35: [2, 37], 37: [2, 37], 39: [2, 37], 41: [2, 37], 42: [2, 37], 43: [2, 37], 45: [2, 37], 46: [2, 37], 47: [2, 37], 48: [2, 37], 50: [1, 103], 51: [1, 104], 53: [2, 37], 54: [2, 37], 55: [2, 37], 57: [2, 37], 64: [2, 37], 65: [2, 37], 66: [2, 37], 83: [2, 37], 86: [2, 37]},
        {8: [2, 38], 10: [2, 38], 16: [2, 38], 32: [2, 38], 34: [2, 38], 35: [2, 38], 37: [2, 38], 39: [2, 38], 41: [2, 38], 42: [2, 38], 43: [2, 38], 45: [2, 38], 46: [2, 38], 47: [2, 38], 48: [2, 38], 50: [1, 103], 51: [1, 104], 53: [2, 38], 54: [2, 38], 55: [2, 38], 57: [2, 38], 64: [2, 38], 65: [2, 38], 66: [2, 38], 83: [2, 38], 86: [2, 38]},
        {8: [2, 39], 10: [2, 39], 16: [2, 39], 32: [2, 39], 34: [2, 39], 35: [2, 39], 37: [2, 39], 39: [2, 39], 41: [2, 39], 42: [2, 39], 43: [2, 39], 45: [2, 39], 46: [2, 39], 47: [2, 39], 48: [2, 39], 50: [1, 103], 51: [1, 104], 53: [2, 39], 54: [2, 39], 55: [2, 39], 57: [2, 39], 64: [2, 39], 65: [2, 39], 66: [2, 39], 83: [2, 39], 86: [2, 39]},
        {8: [2, 40], 10: [2, 40], 16: [2, 40], 32: [2, 40], 34: [2, 40], 35: [2, 40], 37: [2, 40], 39: [2, 40], 41: [2, 40], 42: [2, 40], 43: [2, 40], 45: [2, 40], 46: [2, 40], 47: [2, 40], 48: [2, 40], 50: [1, 103], 51: [1, 104], 53: [2, 40], 54: [2, 40], 55: [2, 40], 57: [2, 40], 64: [2, 40], 65: [2, 40], 66: [2, 40], 83: [2, 40], 86: [2, 40]},
        {8: [2, 80], 10: [2, 80], 16: [2, 80], 32: [2, 80], 34: [2, 80], 35: [2, 80], 37: [2, 80], 39: [2, 80], 41: [2, 80], 42: [2, 80], 43: [2, 80], 45: [2, 80], 46: [2, 80], 47: [2, 80], 48: [2, 80], 50: [2, 80], 51: [2, 80], 53: [2, 80], 54: [2, 80], 55: [2, 80], 57: [2, 80], 64: [2, 80], 65: [2, 80], 66: [2, 80], 83: [2, 80], 86: [2, 80]},
        {20: [1, 97], 72: 98, 73: 99, 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 85: 168, 87: 96},
        {8: [1, 37], 20: [1, 33], 29: 169, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 78], 10: [2, 78], 16: [2, 78], 32: [2, 78], 34: [2, 78], 35: [2, 78], 37: [2, 78], 39: [2, 78], 41: [2, 78], 42: [2, 78], 43: [2, 78], 45: [2, 78], 46: [2, 78], 47: [2, 78], 48: [2, 78], 50: [2, 78], 51: [2, 78], 53: [2, 78], 54: [2, 78], 55: [2, 78], 57: [2, 78], 64: [2, 78], 65: [2, 78], 66: [2, 78], 83: [2, 78], 86: [2, 78]},
        {8: [1, 37], 20: [1, 33], 29: 170, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 42], 10: [2, 42], 16: [2, 42], 32: [2, 42], 34: [2, 42], 35: [2, 42], 37: [2, 42], 39: [2, 42], 41: [2, 42], 42: [2, 42], 43: [2, 42], 45: [2, 42], 46: [2, 42], 47: [2, 42], 48: [2, 42], 50: [2, 42], 51: [2, 42], 53: [1, 105], 54: [1, 106], 55: [1, 107], 57: [2, 42], 64: [2, 42], 65: [2, 42], 66: [2, 42], 83: [2, 42], 86: [2, 42]},
        {8: [2, 43], 10: [2, 43], 16: [2, 43], 32: [2, 43], 34: [2, 43], 35: [2, 43], 37: [2, 43], 39: [2, 43], 41: [2, 43], 42: [2, 43], 43: [2, 43], 45: [2, 43], 46: [2, 43], 47: [2, 43], 48: [2, 43], 50: [2, 43], 51: [2, 43], 53: [1, 105], 54: [1, 106], 55: [1, 107], 57: [2, 43], 64: [2, 43], 65: [2, 43], 66: [2, 43], 83: [2, 43], 86: [2, 43]},
        {8: [2, 45], 10: [2, 45], 16: [2, 45], 32: [2, 45], 34: [2, 45], 35: [2, 45], 37: [2, 45], 39: [2, 45], 41: [2, 45], 42: [2, 45], 43: [2, 45], 45: [2, 45], 46: [2, 45], 47: [2, 45], 48: [2, 45], 50: [2, 45], 51: [2, 45], 53: [2, 45], 54: [2, 45], 55: [2, 45], 57: [2, 45], 64: [2, 45], 65: [2, 45], 66: [2, 45], 83: [2, 45], 86: [2, 45]},
        {8: [2, 46], 10: [2, 46], 16: [2, 46], 32: [2, 46], 34: [2, 46], 35: [2, 46], 37: [2, 46], 39: [2, 46], 41: [2, 46], 42: [2, 46], 43: [2, 46], 45: [2, 46], 46: [2, 46], 47: [2, 46], 48: [2, 46], 50: [2, 46], 51: [2, 46], 53: [2, 46], 54: [2, 46], 55: [2, 46], 57: [2, 46], 64: [2, 46], 65: [2, 46], 66: [2, 46], 83: [2, 46], 86: [2, 46]},
        {8: [2, 47], 10: [2, 47], 16: [2, 47], 32: [2, 47], 34: [2, 47], 35: [2, 47], 37: [2, 47], 39: [2, 47], 41: [2, 47], 42: [2, 47], 43: [2, 47], 45: [2, 47], 46: [2, 47], 47: [2, 47], 48: [2, 47], 50: [2, 47], 51: [2, 47], 53: [2, 47], 54: [2, 47], 55: [2, 47], 57: [2, 47], 64: [2, 47], 65: [2, 47], 66: [2, 47], 83: [2, 47], 86: [2, 47]},
        {6: 6, 7: [1, 13], 8: [1, 37], 9: 20, 11: 171, 13: 7, 14: [1, 14], 15: [1, 15], 16: [1, 21], 17: [1, 16], 18: 8, 19: [1, 17], 20: [1, 33], 21: [1, 18], 22: 9, 23: [1, 19], 24: 11, 25: 5, 26: [1, 12], 28: 10, 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {6: 6, 7: [1, 13], 8: [1, 37], 9: 20, 11: 172, 13: 7, 14: [1, 14], 15: [1, 15], 16: [1, 21], 17: [1, 16], 18: 8, 19: [1, 17], 20: [1, 33], 21: [1, 18], 22: 9, 23: [1, 19], 24: 11, 25: 5, 26: [1, 12], 28: 10, 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 9: 173, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 9: 174, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 20: [1, 33], 29: 175, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [2, 60], 10: [2, 60], 16: [2, 60], 32: [2, 60], 34: [2, 60], 35: [2, 60], 37: [2, 60], 39: [2, 60], 41: [2, 60], 42: [2, 60], 43: [2, 60], 45: [2, 60], 46: [2, 60], 47: [2, 60], 48: [2, 60], 50: [2, 60], 51: [2, 60], 53: [2, 60], 54: [2, 60], 55: [2, 60], 57: [2, 60], 64: [2, 60], 65: [2, 60], 66: [2, 60], 83: [2, 60], 86: [2, 60]},
        {20: [1, 126], 68: 127, 82: [1, 45], 90: 176},
        {8: [2, 93], 10: [2, 93], 16: [2, 93], 20: [2, 93], 32: [2, 93], 34: [2, 93], 35: [2, 93], 37: [2, 93], 39: [2, 93], 41: [2, 93], 42: [2, 93], 43: [2, 93], 45: [2, 93], 46: [2, 93], 47: [2, 93], 48: [2, 93], 50: [2, 93], 51: [2, 93], 53: [2, 93], 54: [2, 93], 55: [2, 93], 57: [2, 93], 64: [2, 93], 65: [2, 93], 66: [2, 93], 82: [2, 93], 83: [2, 93], 86: [2, 93]},
        {8: [2, 90], 10: [2, 90], 16: [2, 90], 32: [2, 90], 34: [2, 90], 35: [2, 90], 37: [2, 90], 39: [2, 90], 41: [2, 90], 42: [2, 90], 43: [2, 90], 45: [2, 90], 46: [2, 90], 47: [2, 90], 48: [2, 90], 50: [2, 90], 51: [2, 90], 53: [2, 90], 54: [2, 90], 55: [2, 90], 57: [2, 90], 64: [2, 90], 65: [2, 90], 66: [2, 90], 83: [2, 90], 86: [2, 90]},
        {8: [2, 100], 10: [2, 100], 16: [2, 100], 32: [2, 100], 34: [2, 100], 35: [2, 100], 37: [2, 100], 39: [2, 100], 41: [2, 100], 42: [2, 100], 43: [2, 100], 45: [2, 100], 46: [2, 100], 47: [2, 100], 48: [2, 100], 50: [2, 100], 51: [2, 100], 53: [2, 100], 54: [2, 100], 55: [2, 100], 57: [2, 100], 64: [2, 100], 65: [2, 100], 66: [2, 100], 83: [2, 100], 86: [2, 100]},
        {25: 177, 26: [1, 12]},
        {20: [1, 178]},
        {94: [1, 179]},
        {83: [2, 82], 86: [2, 82]},
        {83: [2, 83], 86: [2, 83]},
        {10: [2, 99], 66: [2, 99], 86: [2, 99]},
        {5: [2, 2], 7: [2, 2], 8: [2, 2], 12: [1, 180], 14: [2, 2], 15: [2, 2], 16: [2, 2], 17: [2, 2], 19: [2, 2], 20: [2, 2], 21: [2, 2], 23: [2, 2], 26: [2, 2], 27: [2, 2], 50: [2, 2], 51: [2, 2], 58: [2, 2], 65: [2, 2], 74: [2, 2], 75: [2, 2], 76: [2, 2], 77: [2, 2], 78: [2, 2], 79: [2, 2], 80: [2, 2], 82: [2, 2], 91: [2, 2], 93: [2, 2]},
        {5: [2, 4], 7: [2, 4], 8: [2, 4], 12: [2, 4], 14: [2, 4], 15: [2, 4], 16: [2, 4], 17: [2, 4], 19: [2, 4], 20: [2, 4], 21: [2, 4], 23: [2, 4], 26: [2, 4], 27: [2, 4], 50: [2, 4], 51: [2, 4], 58: [2, 4], 65: [2, 4], 74: [2, 4], 75: [2, 4], 76: [2, 4], 77: [2, 4], 78: [2, 4], 79: [2, 4], 80: [2, 4], 82: [2, 4], 91: [2, 4], 93: [2, 4]},
        {16: [1, 181]},
        {10: [1, 182]},
        {8: [2, 27], 10: [2, 27], 16: [2, 27], 32: [2, 27], 34: [2, 27], 35: [2, 27], 37: [2, 27], 39: [2, 27], 41: [2, 27], 42: [2, 27], 43: [2, 27], 45: [2, 27], 46: [2, 27], 47: [2, 27], 48: [2, 27], 50: [2, 27], 51: [2, 27], 53: [2, 27], 54: [2, 27], 55: [2, 27], 57: [2, 27], 64: [2, 27], 65: [2, 27], 66: [2, 27], 83: [2, 27], 86: [2, 27]},
        {8: [2, 95], 10: [2, 95], 16: [2, 95], 32: [2, 95], 34: [2, 95], 35: [2, 95], 37: [2, 95], 39: [2, 95], 41: [2, 95], 42: [2, 95], 43: [2, 95], 45: [2, 95], 46: [2, 95], 47: [2, 95], 48: [2, 95], 50: [2, 95], 51: [2, 95], 53: [2, 95], 54: [2, 95], 55: [2, 95], 57: [2, 95], 64: [2, 95], 65: [2, 95], 66: [2, 95], 83: [2, 95], 86: [2, 95]},
        {8: [2, 101], 10: [2, 101], 16: [2, 101], 32: [2, 101], 34: [2, 101], 35: [2, 101], 37: [2, 101], 39: [2, 101], 41: [2, 101], 42: [2, 101], 43: [2, 101], 45: [2, 101], 46: [2, 101], 47: [2, 101], 48: [2, 101], 50: [2, 101], 51: [2, 101], 53: [2, 101], 54: [2, 101], 55: [2, 101], 57: [2, 101], 64: [2, 101], 65: [2, 101], 66: [2, 101], 83: [2, 101], 86: [2, 101]},
        {10: [2, 104], 86: [2, 104]},
        {8: [1, 37], 9: 183, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {6: 6, 7: [1, 13], 8: [1, 37], 9: 20, 11: 184, 13: 7, 14: [1, 14], 15: [1, 15], 16: [1, 21], 17: [1, 16], 18: 8, 19: [1, 17], 20: [1, 33], 21: [1, 18], 22: 9, 23: [1, 19], 24: 11, 25: 5, 26: [1, 12], 28: 10, 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {8: [1, 37], 9: 185, 20: [1, 33], 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {16: [1, 186]},
        {8: [2, 102], 10: [2, 102], 16: [2, 102], 32: [2, 102], 34: [2, 102], 35: [2, 102], 37: [2, 102], 39: [2, 102], 41: [2, 102], 42: [2, 102], 43: [2, 102], 45: [2, 102], 46: [2, 102], 47: [2, 102], 48: [2, 102], 50: [2, 102], 51: [2, 102], 53: [2, 102], 54: [2, 102], 55: [2, 102], 57: [2, 102], 64: [2, 102], 65: [2, 102], 66: [2, 102], 83: [2, 102], 86: [2, 102]},
        {5: [2, 3], 7: [2, 3], 8: [2, 3], 12: [2, 3], 14: [2, 3], 15: [2, 3], 16: [2, 3], 17: [2, 3], 19: [2, 3], 20: [2, 3], 21: [2, 3], 23: [2, 3], 26: [2, 3], 27: [2, 3], 50: [2, 3], 51: [2, 3], 58: [2, 3], 65: [2, 3], 74: [2, 3], 75: [2, 3], 76: [2, 3], 77: [2, 3], 78: [2, 3], 79: [2, 3], 80: [2, 3], 82: [2, 3], 91: [2, 3], 93: [2, 3]},
        {10: [1, 187]},
        {5: [2, 6], 7: [2, 6], 8: [2, 6], 12: [2, 6], 14: [2, 6], 15: [2, 6], 16: [2, 6], 17: [2, 6], 19: [2, 6], 20: [2, 6], 21: [2, 6], 23: [2, 6], 26: [2, 6], 27: [2, 6], 50: [2, 6], 51: [2, 6], 58: [2, 6], 65: [2, 6], 74: [2, 6], 75: [2, 6], 76: [2, 6], 77: [2, 6], 78: [2, 6], 79: [2, 6], 80: [2, 6], 82: [2, 6], 91: [2, 6], 93: [2, 6]},
        {6: 6, 7: [1, 13], 8: [1, 37], 9: 20, 11: 188, 13: 7, 14: [1, 14], 15: [1, 15], 16: [1, 21], 17: [1, 16], 18: 8, 19: [1, 17], 20: [1, 33], 21: [1, 18], 22: 9, 23: [1, 19], 24: 11, 25: 5, 26: [1, 12], 28: 10, 29: 22, 30: 23, 31: 24, 33: 25, 36: 28, 38: 32, 40: 40, 44: 47, 49: 55, 50: [1, 59], 51: [1, 60], 52: 56, 56: 57, 58: [1, 58], 59: 26, 60: 27, 61: 29, 62: 30, 63: 31, 65: [1, 46], 67: 34, 68: 35, 69: 36, 70: 41, 71: 42, 72: 43, 73: 44, 74: [1, 48], 75: [1, 49], 76: [1, 50], 77: [1, 51], 78: [1, 52], 79: [1, 53], 80: [1, 54], 82: [1, 45], 91: [1, 38], 93: [1, 39]},
        {5: [2, 5], 7: [2, 5], 8: [2, 5], 12: [2, 5], 14: [2, 5], 15: [2, 5], 16: [2, 5], 17: [2, 5], 19: [2, 5], 20: [2, 5], 21: [2, 5], 23: [2, 5], 26: [2, 5], 27: [2, 5], 50: [2, 5], 51: [2, 5], 58: [2, 5], 65: [2, 5], 74: [2, 5], 75: [2, 5], 76: [2, 5], 77: [2, 5], 78: [2, 5], 79: [2, 5], 80: [2, 5], 82: [2, 5], 91: [2, 5], 93: [2, 5]}
      ], defaultActions: {3: [2, 1], 97: [2, 84], 98: [2, 85], 99: [2, 86]}, parseError: function(t, e) {
        if (!e.recoverable)throw Error(t);
        this.trace(t)
      }, parse: function(t) {
        function e() {
          var t;
          return t = i.lexer.lex() || u, "number" != typeof t && (t = i.symbols_[t] || t), t
        }

        var i = this, r = [0], s = [null], o = [], n = this.table, a = "", h = 0, l = 0, c = 0, d = 2, u = 1, p = o.slice.call(arguments, 1);
        this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, this.lexer.yylloc === void 0 && (this.lexer.yylloc = {});
        var f = this.lexer.yylloc;
        o.push(f);
        var m = this.lexer.options && this.lexer.options.ranges;
        this.parseError = "function" == typeof this.yy.parseError ? this.yy.parseError : Object.getPrototypeOf(this).parseError;
        for (var b, g, v, y, C, P, _, E, S, x = {}; ;) {
          if (v = r[r.length - 1], this.defaultActions[v] ? y = this.defaultActions[v] : ((null === b || b === void 0) && (b = e()), y = n[v] && n[v][b]), y === void 0 || !y.length || !y[0]) {
            var O = "";
            S = [];
            for (P in n[v])this.terminals_[P] && P > d && S.push("'" + this.terminals_[P] + "'");
            O = this.lexer.showPosition ? "Parse error on line " + (h + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (h + 1) + ": Unexpected " + (b == u ? "end of input" : "'" + (this.terminals_[b] || b) + "'"), this.parseError(O, {text: this.lexer.match, token: this.terminals_[b] || b, line: this.lexer.yylineno, loc: f, expected: S})
          }
          if (y[0]instanceof Array && y.length > 1)throw Error("Parse Error: multiple actions possible at state: " + v + ", token: " + b);
          switch (y[0]) {
            case 1:
              r.push(b), s.push(this.lexer.yytext), o.push(this.lexer.yylloc), r.push(y[1]), b = null, g ? (b = g, g = null) : (l = this.lexer.yyleng, a = this.lexer.yytext, h = this.lexer.yylineno, f = this.lexer.yylloc, c > 0 && c--);
              break;
            case 2:
              if (_ = this.productions_[y[1]][1], x.$ = s[s.length - _], x._$ = {first_line: o[o.length - (_ || 1)].first_line, last_line: o[o.length - 1].last_line, first_column: o[o.length - (_ || 1)].first_column, last_column: o[o.length - 1].last_column}, m && (x._$.range = [o[o.length - (_ || 1)].range[0], o[o.length - 1].range[1]]), C = this.performAction.apply(x, [a, l, h, this.yy, y[1], s, o].concat(p)), C !== void 0)return C;
              _ && (r = r.slice(0, 2 * -1 * _), s = s.slice(0, -1 * _), o = o.slice(0, -1 * _)), r.push(this.productions_[y[1]][0]), s.push(x.$), o.push(x._$), E = n[r[r.length - 2]][r[r.length - 1]], r.push(E);
              break;
            case 3:
              return!0
          }
        }
        return!0
      }}, i = {node: function(t, e, i) {return{type: t, value: e, children: i}}, createNode: function(t, e, i) {
        var r, s = this.node(e, i, []);
        for (r = 3; arguments.length > r; r++)s.children.push(arguments[r]);
        return s.line = t[0], s.col = t[1], s.eline = t[2], s.ecol = t[3], s
      }}, r = function(t) {return[t.first_line, t.first_column, t.last_line, t.last_column]}, s = function() {
        var t = {EOF: 1, parseError: function(t, e) {
          if (!this.yy.parser)throw Error(t);
          this.yy.parser.parseError(t, e)
        }, setInput: function(t) {return this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this}, input: function() {
          var t = this._input[0];
          this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t;
          var e = t.match(/(?:\r\n?|\n).*/g);
          return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t
        }, unput: function(t) {
          var e = t.length, i = t.split(/(?:\r\n?|\n)/g);
          this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e - 1), this.offset -= e;
          var r = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i.length - 1 && (this.yylineno -= i.length - 1);
          var s = this.yylloc.range;
          return this.yylloc = {first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: i ? (i.length === r.length ? this.yylloc.first_column : 0) + r[r.length - i.length].length - i[0].length : this.yylloc.first_column - e}, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this
        }, more: function() {return this._more = !0, this}, reject: function() {return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {text: "", token: null, line: this.yylineno})}, less: function(t) {this.unput(this.match.slice(t))}, pastInput: function() {
          var t = this.matched.substr(0, this.matched.length - this.match.length);
          return(t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
        }, upcomingInput: function() {
          var t = this.match;
          return 20 > t.length && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
        }, showPosition: function() {
          var t = this.pastInput(), e = Array(t.length + 1).join("-");
          return t + this.upcomingInput() + "\n" + e + "^"
        }, test_match: function(t, e) {
          var i, r, s;
          if (this.options.backtrack_lexer && (s = {yylineno: this.yylineno, yylloc: {first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column}, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done}, this.options.ranges && (s.yylloc.range = this.yylloc.range.slice(0))), r = t[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], i = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), i)return i;
          if (this._backtrack) {
            for (var o in s)this[o] = s[o];
            return!1
          }
          return!1
        }, next: function() {
          if (this.done)return this.EOF;
          this._input || (this.done = !0);
          var t, e, i, r;
          this._more || (this.yytext = "", this.match = "");
          for (var s = this._currentRules(), o = 0; s.length > o; o++)if (i = this._input.match(this.rules[s[o]]), i && (!e || i[0].length > e[0].length)) {
            if (e = i, r = o, this.options.backtrack_lexer) {
              if (t = this.test_match(i, s[o]), t !== !1)return t;
              if (this._backtrack) {
                e = !1;
                continue
              }
              return!1
            }
            if (!this.options.flex)break
          }
          return e ? (t = this.test_match(e, s[r]), t !== !1 ? t : !1) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "", token: null, line: this.yylineno})
        }, lex: function() {
          var t = this.next();
          return t ? t : this.lex()
        }, begin: function(t) {this.conditionStack.push(t)}, popState: function() {
          var t = this.conditionStack.length - 1;
          return t > 0 ? this.conditionStack.pop() : this.conditionStack[0]
        }, _currentRules: function() {return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules}, topState: function(t) {return t = this.conditionStack.length - 1 - Math.abs(t || 0), t >= 0 ? this.conditionStack[t] : "INITIAL"}, pushState: function(t) {this.begin(t)}, stateStackSize: function() {return this.conditionStack.length}, options: {}, performAction: function(t, e, i, r) {
          switch (i) {
            case 0:
              break;
            case 1:
              return 78;
            case 2:
              return 78;
            case 3:
              return 77;
            case 4:
              return 77;
            case 5:
              break;
            case 6:
              break;
            case 7:
              return 7;
            case 8:
              return 12;
            case 9:
              return 14;
            case 10:
              return 17;
            case 11:
              return 15;
            case 12:
              return 91;
            case 13:
              return 93;
            case 14:
              return 19;
            case 15:
              return 23;
            case 16:
              return 21;
            case 17:
              return 75;
            case 18:
              return 76;
            case 19:
              return 74;
            case 20:
              return 80;
            case 21:
              return 94;
            case 22:
              return 82;
            case 23:
              return 83;
            case 24:
              return 26;
            case 25:
              return 27;
            case 26:
              return 16;
            case 27:
              return"#";
            case 28:
              return 34;
            case 29:
              return 35;
            case 30:
              return 79;
            case 31:
              return 64;
            case 32:
              return 65;
            case 33:
              return 66;
            case 34:
              return 8;
            case 35:
              return 10;
            case 36:
              return 58;
            case 37:
              return 57;
            case 38:
              return 53;
            case 39:
              return 54;
            case 40:
              return 55;
            case 41:
              return 50;
            case 42:
              return 51;
            case 43:
              return 47;
            case 44:
              return 45;
            case 45:
              return 48;
            case 46:
              return 46;
            case 47:
              return 41;
            case 48:
              return 43;
            case 49:
              return 42;
            case 50:
              return 39;
            case 51:
              return 37;
            case 52:
              return 32;
            case 53:
              return 86;
            case 54:
              return 5;
            case 55:
              return 20;
            case 56:
              return"INVALID"
          }
        }, rules: [/^(?:\s+)/, /^(?:[0-9]+\.[0-9]*|[0-9]*\.[0-9]+\b)/, /^(?:[0-9]+)/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:\/\/.*)/, /^(?:\/\*(.|\n|\r)*?\*\/)/, /^(?:if\b)/, /^(?:else\b)/, /^(?:while\b)/, /^(?:do\b)/, /^(?:for\b)/, /^(?:function\b)/, /^(?:map\b)/, /^(?:use\b)/, /^(?:return\b)/, /^(?:delete\b)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:Infinity\b)/, /^(?:->)/, /^(?:<<)/, /^(?:>>)/, /^(?:\{)/, /^(?:\})/, /^(?:;)/, /^(?:#)/, /^(?:\?)/, /^(?::)/, /^(?:NaN\b)/, /^(?:\.)/, /^(?:\[)/, /^(?:\])/, /^(?:\()/, /^(?:\))/, /^(?:!)/, /^(?:\^)/, /^(?:\*)/, /^(?:\/)/, /^(?:%)/, /^(?:\+)/, /^(?:-)/, /^(?:<=)/, /^(?:<)/, /^(?:>=)/, /^(?:>)/, /^(?:==)/, /^(?:~=)/, /^(?:!=)/, /^(?:&&)/, /^(?:\|\|)/, /^(?:=)/, /^(?:,)/, /^(?:$)/, /^(?:[A-Za-z_\$][A-Za-z0-9_]*)/, /^(?:.)/], conditions: {INITIAL: {rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56], inclusive: !0}}};
        return t
      }();
      return e.lexer = s, t.prototype = e, e.Parser = t, new t
    }();
    return require !== void 0 && "undefined" != typeof exports && (exports.parser = parser, exports.Parser = parser.Parser, exports.parse = function() {return parser.parse.apply(parser, arguments)}, exports.main = function commonjsMain(t) {
      t[1] || (console.log("Usage: " + t[0] + " FILE"), process.exit(1));
      var e = require("fs").readFileSync(require("path").normalize(t[1]), "utf8");
      return exports.parser.parse(e)
    }, "undefined" != typeof module && require.main === module && exports.main(process.argv.slice(1))), parser.yy.parseError = parser.parseError, JXG.JessieCode
  }), define("base/ticks", ["jxg", "math/math", "math/geometry", "base/constants", "base/element", "base/coords", "utils/type", "base/text"], function(t, e, i, r, s, o, n, a) {
    return t.Ticks = function(t, i, s) {
      if (this.constructor(t.board, s, r.OBJECT_TYPE_TICKS, r.OBJECT_CLASS_OTHER), this.line = t, this.board = this.line.board, this.ticksFunction = null, this.fixedTicks = null, this.equidistant = !1, n.isFunction(i))throw this.ticksFunction = i, Error("Function arguments are no longer supported.");
      n.isArray(i) ? this.fixedTicks = i : ((Math.abs(i) < e.eps || 0 > i) && (i = s.defaultdistance), this.ticksFunction = function() {
        var t, e, r;
        return this.visProp.insertticks ? (e = this.getLowerAndUpperBounds(this.getZeroCoordinates(), "ticksdistance"), r = e.upper - e.lower, t = Math.pow(10, Math.floor(Math.log(.6 * r) / Math.LN10)), 6 * t >= r && (t *= .5), t) : i
      }, this.equidistant = !0), this.minTicksDistance = s.minticksdistance, this.ticks = [], this.ticksDelta = 1, this.labels = [], this.labelsRepo = [], this.labelCounter = 0, this.id = this.line.addTicks(this), this.board.setId(this, "Ti")
    }, t.Ticks.prototype = new s, t.extend(t.Ticks.prototype, {hasPoint: function(t, i) {
      var s, o, n = this.ticks && this.ticks.length || 0, a = this.board.options.precision.hasPoint;
      if (!this.line.visProp.scalable)return!1;
      if (0 !== this.line.stdform[1] && 0 !== this.line.stdform[2] && this.line.type !== r.OBJECT_TYPE_AXIS)return!1;
      for (s = 0; n > s; s++)if (o = this.ticks[s], o[2] && !(0 === this.line.stdform[1] && Math.abs(o[0][0] - this.line.point1.coords.scrCoords[1]) < e.eps || 0 === this.line.stdform[2] && Math.abs(o[1][0] - this.line.point1.coords.scrCoords[2]) < e.eps) && (Math.abs(o[0][0] - o[0][1]) >= 1 || Math.abs(o[1][0] - o[1][1]) >= 1))if (0 === this.line.stdform[1]) {
        if (2 * a > Math.abs(i - .5 * (o[1][0] + o[1][1])) && t > o[0][0] - a && o[0][1] + a > t)return!0
      } else if (0 === this.line.stdform[2] && 2 * a > Math.abs(t - .5 * (o[0][0] + o[0][1])) && i > o[1][0] - a && o[1][1] + a > i)return!0;
      return!1
    }, setPositionDirectly: function(t, i, r) {
      var s, n, a = new o(t, i, this.board), h = new o(t, r, this.board), l = this.board.getBoundingBox();
      return this.line.visProp.scalable ? (Math.abs(this.line.stdform[1]) < e.eps && Math.abs(a.usrCoords[1] * h.usrCoords[1]) > e.eps ? (s = h.usrCoords[1] / a.usrCoords[1], l[0] *= s, l[2] *= s, this.board.setBoundingBox(l, !1)) : Math.abs(this.line.stdform[2]) < e.eps && Math.abs(a.usrCoords[2] * h.usrCoords[2]) > e.eps && (n = h.usrCoords[2] / a.usrCoords[2], l[3] *= n, l[1] *= n, this.board.setBoundingBox(l, !1)), this) : this
    }, calculateTicksCoordinates: function() {
      var t, i, r, s = this.labelsRepo.length;
      if (this.setTicksSizeVariables(), !(Math.abs(this.dx) < e.eps && Math.abs(this.dy) < e.eps))for (t = this.getZeroCoordinates(), i = this.getLowerAndUpperBounds(t), this.removeTickLabels(), this.ticks = [], this.labels = [], this.equidistant ? this.generateEquidistantTicks(t, i) : this.generateFixedTicks(t, i), r = s; this.labelsRepo.length > r; r++)this.labelsRepo[r].setAttribute({visible: !1})
    }, setTicksSizeVariables: function() {
      var t, e = .5 * this.visProp.majorheight, i = .5 * this.visProp.minorheight;
      this.dxMaj = this.line.stdform[1], this.dyMaj = this.line.stdform[2], this.dxMin = this.dxMaj, this.dyMin = this.dyMaj, this.dx = this.dxMaj, this.dy = this.dyMaj, t = Math.sqrt(this.dxMaj * this.dxMaj * this.board.unitX * this.board.unitX + this.dyMaj * this.dyMaj * this.board.unitY * this.board.unitY), this.dxMaj *= e / t * this.board.unitX, this.dyMaj *= e / t * this.board.unitY, this.dxMin *= i / t * this.board.unitX, this.dyMin *= i / t * this.board.unitY, this.minStyle = "finite", 0 > this.visProp.minorheight && (this.minStyle = "infinite"), this.majStyle = "finite", 0 > this.visProp.majorheight && (this.majStyle = "infinite")
    }, getZeroCoordinates: function() {return this.line.type === r.OBJECT_TYPE_AXIS ? i.projectPointToLine({coords: {usrCoords: [1, 0, 0]}}, this.line, this.board) : "right" === this.visProp.anchor ? this.line.point2.coords : "middle" === this.visProp.anchor ? new o(r.COORDS_BY_USER, [(this.line.point1.coords.usrCoords[1] + this.line.point2.coords.usrCoords[1]) / 2, (this.line.point1.coords.usrCoords[2] + this.line.point2.coords.usrCoords[2]) / 2], this.board) : this.line.point1.coords}, getLowerAndUpperBounds: function(s, n) {
      var a, h, l, c, d = new o(r.COORDS_BY_USER, this.line.point1.coords.usrCoords, this.board), u = new o(r.COORDS_BY_USER, this.line.point2.coords.usrCoords, this.board), p = Math.abs(d.usrCoords[0]) >= e.eps && d.scrCoords[1] >= 0 && d.scrCoords[1] <= this.board.canvasWidth && d.scrCoords[2] >= 0 && d.scrCoords[2] <= this.board.canvasHeight, f = Math.abs(u.usrCoords[0]) >= e.eps && u.scrCoords[1] >= 0 && u.scrCoords[1] <= this.board.canvasWidth && u.scrCoords[2] >= 0 && u.scrCoords[2] <= this.board.canvasHeight;
      return t.exists(n) || "tickdistance" === n ? i.calcStraight(this.line, d, u) : i.calcLineDelimitingPoints(this.line, d, u), l = this.getDistanceFromZero(s, d), c = this.getDistanceFromZero(s, u), c > l ? (a = l, this.line.visProp.straightfirst || !p || this.visProp.includeboundaries || (a += e.eps), h = c, this.line.visProp.straightlast || !f || this.visProp.includeboundaries || (h -= e.eps)) : l > c ? (a = c, this.line.visProp.straightlast || !f || this.visProp.includeboundaries || (a += e.eps), h = l, this.line.visProp.straightfirst || !p || this.visProp.includeboundaries || (h -= e.eps)) : (a = 0, h = 0), {lower: a, upper: h}
    }, getDistanceFromZero: function(t, s) {
      var o = e.eps * e.eps, n = t.distance(r.COORDS_BY_USER, s);
      return this.line.type === r.OBJECT_TYPE_AXIS ? (t.usrCoords[1] - s.usrCoords[1] > o || o > Math.abs(t.usrCoords[1] - s.usrCoords[1]) && t.usrCoords[2] - s.usrCoords[2] > o) && (n *= -1) : "right" === this.visProp.anchor ? i.isSameDirection(t, this.line.point1.coords, s) && (n *= -1) : i.isSameDirection(t, this.line.point2.coords, s) || (n *= -1), n
    }, generateEquidistantTicks: function(t, i) {
      var r, s = (this.line.point1, this.line.point2, this.getXandYdeltas()), o = this.equidistant ? this.ticksFunction(1) : this.ticksDelta;
      if (o *= this.visProp.scale, this.visProp.insertticks && this.minTicksDistance > e.eps ? (o = this.adjustTickDistance(o, t, s), o /= this.visProp.minorticks + 1) : this.visProp.insertticks || (o /= this.visProp.minorticks + 1), this.ticksDelta = o, !(e.eps > o)) {
        for (r = 0, this.visProp.drawzero || (r = o); i.upper >= r;)r >= i.lower && this.processTickPosition(t, r, o, s), r += o;
        for (r = -o; r >= i.lower;)i.upper >= r && this.processTickPosition(t, r, o, s), r -= o
      }
    }, adjustTickDistance: function(t, e, i) {
      var s, n, a, h, l, c = 1;
      for (a = this.getLowerAndUpperBounds(e, "ticksdistance"), s = e.usrCoords[1] + i.x * t, n = e.usrCoords[2] + i.y * t, h = e.distance(r.COORDS_BY_SCREEN, new o(r.COORDS_BY_USER, [s, n], this.board)), l = a.upper - a.lower; h / (this.visProp.minorticks + 1) < this.minTicksDistance;)t *= 1 === c ? 2 : 5, c *= -1, s = e.usrCoords[1] + i.x * t, n = e.usrCoords[2] + i.y * t, h = e.distance(r.COORDS_BY_SCREEN, new o(r.COORDS_BY_USER, [s, n], this.board));
      return t
    }, processTickPosition: function(t, e, i, s) {
      var n, a, h, l, c;
      n = t.usrCoords[1] + e * s.x, a = t.usrCoords[2] + e * s.y, h = new o(r.COORDS_BY_USER, [n, a], this.board), h.major = 0 === Math.round(e / i) % (this.visProp.minorticks + 1), l = this.tickEndings(h, h.major), 3 === l.length && (this.ticks.push(l), h.major && this.visProp.drawlabels ? (c = this.generateLabelText(h, t), this.labels.push(this.generateLabel(c, h, this.ticks.length))) : this.labels.push(null))
    }, generateFixedTicks: function(t, e) {
      var i, s, a, h, l, c, d = n.isArray(this.visProp.labels), u = this.getXandYdeltas();
      for (a = 0; this.fixedTicks.length > a; a++)l = t.usrCoords[1] + this.fixedTicks[a] * u.x, c = t.usrCoords[2] + this.fixedTicks[a] * u.y, i = new o(r.COORDS_BY_USER, [l, c], this.board), h = this.tickEndings(i, !0), 3 === h.length && this.fixedTicks[a] >= e.lower && this.fixedTicks[a] <= e.upper && (this.ticks.push(h), this.visProp.drawlabels && (d || n.exists(this.visProp.labels[a])) ? (s = d ? this.visProp.labels[a] : this.fixedTicks[a], this.labels.push(this.generateLabel(this.generateLabelText(i, t, s), i, a))) : this.labels.push(null))
    }, getXandYdeltas: function() {
      var t, i, s = this.line.point1.Dist(this.line.point2);
      return this.line.type === r.OBJECT_TYPE_AXIS ? (t = this.line.point1.coords.usrCoords, i = this.line.point2.coords.usrCoords, (t[1] > i[1] || Math.abs(t[1] - i[1]) < e.eps && t[2] > i[2]) && (t = this.line.point2.coords.usrCoords, i = this.line.point1.coords.usrCoords)) : (t = this.line.point1.coords.usrCoords, i = this.line.point2.coords.usrCoords), {x: (i[1] - t[1]) / s, y: (i[2] - t[2]) / s}
    }, tickEndings: function(t, e) {
      var r, s, o, n, a, h, l = this.board.canvasWidth, c = this.board.canvasHeight, d = [-1e3 * l, -1e3 * c], u = [-1e3 * l, -1e3 * c], p = !1;
      return r = t.scrCoords, e ? (n = this.dxMaj, a = this.dyMaj, h = this.majStyle) : (n = this.dxMin, a = this.dyMin, h = this.minStyle), s = [-a * r[1] - n * r[2], a, n], "infinite" === h ? (o = i.meetLineBoard(s, this.board), d[0] = o[0].scrCoords[1], d[1] = o[1].scrCoords[1], u[0] = o[0].scrCoords[2], u[1] = o[1].scrCoords[2]) : (d[0] = r[1] + n * this.visProp.tickendings[0], u[0] = r[2] - a * this.visProp.tickendings[0], d[1] = r[1] - n * this.visProp.tickendings[1], u[1] = r[2] + a * this.visProp.tickendings[1]), p = d[0] >= 0 && l >= d[0] && u[0] >= 0 && c >= u[0] || d[1] >= 0 && l >= d[1] && u[1] >= 0 && c >= u[1], p ? [d, u, e] : []
    }, generateLabelText: function(t, i, r) {
      var s, o = this.getDistanceFromZero(i, t);
      return Math.abs(o) < e.eps ? s = "0" : (n.exists(r) || (r = o / this.visProp.scale), s = "" + r, this.visProp.useunicodeminus && (s = s.replace(/-/g, "−")), n.isNumber(r) && ((s.length > this.visProp.maxlabellength || -1 !== s.indexOf("e")) && (s = "" + r.toPrecision(this.visProp.precision)), s.indexOf(".") > -1 && -1 === s.indexOf("e") && (s = s.replace(/0+$/, ""), s = s.replace(/\.$/, ""))), this.visProp.scalesymbol.length > 0 && ("1" === s ? s = this.visProp.scalesymbol : "-1" === s ? s = "-" + this.visProp.scalesymbol : "0" !== s && (s += this.visProp.scalesymbol))), s
    }, generateLabel: function(t, e, i) {
      var r, s = {isLabel: !0, layer: this.board.options.layer.line, highlightStrokeColor: this.board.options.text.strokeColor, highlightStrokeWidth: this.board.options.text.strokeWidth, highlightStrokeOpacity: this.board.options.text.strokeOpacity, visible: this.visProp.visible, priv: this.visProp.priv};
      return s = n.deepCopy(s, this.visProp.label), this.labelsRepo.length > 0 ? (r = this.labelsRepo.pop(), r.setText(t), r.setAttribute(s)) : (this.labelCounter += 1, s.id = this.id + i + "Label" + this.labelCounter, r = a.createText(this.board, [e.usrCoords[1], e.usrCoords[2], t], s)), r.isDraggable = !1, r.dump = !1, r.distanceX = this.visProp.label.offset[0], r.distanceY = this.visProp.label.offset[1], r.setCoords(e.usrCoords[1] + r.distanceX / this.board.unitX, e.usrCoords[2] + r.distanceY / this.board.unitY), r
    }, removeTickLabels: function() {
      var t;
      if (n.exists(this.labels) && (this.board.needsFullUpdate || this.needsRegularUpdate || this.needsUpdate) && ("canvas" !== this.board.renderer.type || "internal" !== this.board.options.text.display))for (t = 0; this.labels.length > t; t++)n.exists(this.labels[t]) && this.labelsRepo.push(this.labels[t])
    }, update: function() {return this.needsUpdate && 0 !== this.board.canvasWidth && 0 !== this.board.canvasHeight && this.calculateTicksCoordinates(), this}, updateRenderer: function() {return this.needsUpdate && (this.board.renderer.updateTicks(this), this.needsUpdate = !1), this}, hideElement: function() {
      var t;
      for (this.visProp.visible = !1, this.board.renderer.hide(this), t = 0; this.labels.length > t; t++)n.exists(this.labels[t]) && this.labels[t].hideElement();
      return this
    }, showElement: function() {
      var t;
      for (this.visProp.visible = !0, this.board.renderer.show(this), t = 0; this.labels.length > t; t++)n.exists(this.labels[t]) && this.labels[t].showElement();
      return this
    }}), t.createTicks = function(e, i, s) {
      var o, a, h = n.copyAttributes(s, e.options, "ticks");
      if (a = 2 > i.length ? h.ticksdistance : i[1], i[0].elementClass !== r.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create Ticks with parent types '" + typeof i[0] + "'.");
      return o = new t.Ticks(i[0], a, h), "function" == typeof h.generatelabelvalue && (o.generateLabelText = h.generatelabelvalue), "function" == typeof h.generatelabeltext && (o.generateLabelText = h.generatelabeltext), o.isDraggable = !0, o
    }, t.createHatchmark = function(t, e, i) {
      var s, o, a, h, l, c, d = [], u = n.copyAttributes(i, t.options, "hatch");
      if (e[0].elementClass !== r.OBJECT_CLASS_LINE || "number" != typeof e[1])throw Error("JSXGraph: Can't create Hatch mark with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'.");
      for (s = e[1], h = u.ticksdistance, l = (s - 1) * h, a = -l / 2, o = 0; s > o; o++)d[o] = a + o * h;
      c = t.create("ticks", [e[0], d], u), c.elType = "hatch"
    }, t.registerElement("ticks", t.createTicks), t.registerElement("hash", t.createHatchmark), t.registerElement("hatch", t.createHatchmark), {Ticks: t.Ticks, createTicks: t.createTicks, createHashmark: t.createHatchmark, createHatchmark: t.createHatchmark}
  }), define("base/line", ["jxg", "math/math", "math/geometry", "math/numerics", "math/statistics", "base/constants", "base/coords", "base/element", "utils/type", "base/transformation", "base/point", "base/ticks"], function(t, e, i, r, s, o, n, a, h, l, c) {
    return t.Line = function(e, i, r, s) {this.constructor(e, s, o.OBJECT_TYPE_LINE, o.OBJECT_CLASS_LINE), this.point1 = this.board.select(i), this.point2 = this.board.select(r), this.ticks = [], this.defaultTicks = null, this.parentPolygon = null, this.id = this.board.setId(this, "L"), this.board.renderer.drawLine(this), this.board.finalizeAdding(this), this.elType = "line", this.point1.addChild(this), this.point2.addChild(this), this.updateStdform(), this.createLabel(), this.methodMap = t.deepCopy(this.methodMap, {point1: "point1", point2: "point2", getSlope: "getSlope", getRise: "getRise", getYIntersect: "getRise", getAngle: "getAngle", L: "L", length: "L", addTicks: "addTicks", removeTicks: "removeTicks", removeAllTicks: "removeAllTicks"})}, t.Line.prototype = new a, t.extend(t.Line.prototype, {hasPoint: function(t, r) {
      var s, a, h, l, c, d, u, p = [], f = [1, t, r];
      return p[0] = this.stdform[0] - this.stdform[1] * this.board.origin.scrCoords[1] / this.board.unitX + this.stdform[2] * this.board.origin.scrCoords[2] / this.board.unitY, p[1] = this.stdform[1] / this.board.unitX, p[2] = this.stdform[2] / -this.board.unitY, s = i.distPointLine(f, p), isNaN(s) || s > this.board.options.precision.hasPoint ? !1 : this.visProp.straightfirst && this.visProp.straightlast ? !0 : (h = this.point1.coords, l = this.point2.coords, a = [0, p[1], p[2]], a = e.crossProduct(a, f), a = e.crossProduct(a, p), a[1] /= a[0], a[2] /= a[0], a[0] = 1, a = new n(o.COORDS_BY_SCREEN, a.slice(1), this.board).usrCoords, c = h.distance(o.COORDS_BY_USER, l), h = h.usrCoords.slice(0), l = l.usrCoords.slice(0), e.eps > c ? d = 0 : (c === Number.POSITIVE_INFINITY && (c = 1 / e.eps, Math.abs(l[0]) < e.eps ? (c /= i.distance([0, 0, 0], l), l = [1, h[1] + l[1] * c, h[2] + l[2] * c]) : (c /= i.distance([0, 0, 0], h), h = [1, l[1] + h[1] * c, l[2] + h[2] * c])), u = 1, c = l[u] - h[u], Math.abs(c) < e.eps && (u = 2, c = l[u] - h[u]), d = (a[u] - h[u]) / c), !this.visProp.straightfirst && 0 > d ? !1 : !this.visProp.straightlast && d > 1 ? !1 : !0)
    }, update: function() {
      var t;
      return this.needsUpdate ? (this.constrained && ("function" == typeof this.funps ? (t = this.funps(), t && t.length && 2 === t.length && (this.point1 = t[0], this.point2 = t[1])) : ("function" == typeof this.funp1 && (t = this.funp1(), h.isPoint(t) ? this.point1 = t : t && t.length && 2 === t.length && this.point1.setPositionDirectly(o.COORDS_BY_USER, t)), "function" == typeof this.funp2 && (t = this.funp2(), h.isPoint(t) ? this.point2 = t : t && t.length && 2 === t.length && this.point2.setPositionDirectly(o.COORDS_BY_USER, t)))), this.updateSegmentFixedLength(), this.updateStdform(), this.visProp.trace && this.cloneToBackground(!0), this) : this
    }, updateSegmentFixedLength: function() {
      var t, i, r, s, n, a, h, l;
      return this.hasFixedLength ? (t = this.point1.Dist(this.point2), i = this.fixedLength(), r = this.fixedLengthOldCoords[0].distance(o.COORDS_BY_USER, this.point1.coords), s = this.fixedLengthOldCoords[1].distance(o.COORDS_BY_USER, this.point2.coords), (r > e.eps || s > e.eps || t !== i) && (n = this.point1.isDraggable && this.point1.type !== o.OBJECT_TYPE_GLIDER && !this.point1.visProp.fixed, a = this.point2.isDraggable && this.point2.type !== o.OBJECT_TYPE_GLIDER && !this.point2.visProp.fixed, t > e.eps ? r > s && a || s >= r && a && !n ? (this.point2.setPositionDirectly(o.COORDS_BY_USER, [this.point1.X() + (this.point2.X() - this.point1.X()) * i / t, this.point1.Y() + (this.point2.Y() - this.point1.Y()) * i / t]), this.point2.prepareUpdate().updateRenderer()) : (s >= r && n || r > s && n && !a) && (this.point1.setPositionDirectly(o.COORDS_BY_USER, [this.point2.X() + (this.point1.X() - this.point2.X()) * i / t, this.point2.Y() + (this.point1.Y() - this.point2.Y()) * i / t]), this.point1.prepareUpdate().updateRenderer()) : (h = Math.random() - .5, l = Math.random() - .5, t = Math.sqrt(h * h + l * l), a ? (this.point2.setPositionDirectly(o.COORDS_BY_USER, [this.point1.X() + h * i / t, this.point1.Y() + l * i / t]), this.point2.prepareUpdate().updateRenderer()) : n && (this.point1.setPositionDirectly(o.COORDS_BY_USER, [this.point2.X() + h * i / t, this.point2.Y() + l * i / t]), this.point1.prepareUpdate().updateRenderer())), this.fixedLengthOldCoords[0].setCoordinates(o.COORDS_BY_USER, this.point1.coords.usrCoords), this.fixedLengthOldCoords[1].setCoordinates(o.COORDS_BY_USER, this.point2.coords.usrCoords)), this) : this
    }, updateStdform: function() {
      var t = e.crossProduct(this.point1.coords.usrCoords, this.point2.coords.usrCoords);
      this.stdform[0] = t[0], this.stdform[1] = t[1], this.stdform[2] = t[2], this.stdform[3] = 0, this.normalize()
    }, updateRenderer: function() {
      var t;
      return this.needsUpdate && this.visProp.visible && (t = this.isReal, this.isReal = !isNaN(this.point1.coords.usrCoords[1] + this.point1.coords.usrCoords[2] + this.point2.coords.usrCoords[1] + this.point2.coords.usrCoords[2]) && e.innerProduct(this.stdform, this.stdform, 3) >= e.eps * e.eps, this.isReal ? (t !== this.isReal && (this.board.renderer.show(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.show(this.label)), this.board.renderer.updateLine(this)) : t !== this.isReal && (this.board.renderer.hide(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.hide(this.label)), this.needsUpdate = !1), this.hasLabel && this.label.visProp.visible && this.isReal && (this.label.update(), this.board.renderer.updateText(this.label)), this
    }, generatePolynomial: function(t) {
      var e = this.point1.symbolic.x, i = this.point1.symbolic.y, r = this.point2.symbolic.x, s = this.point2.symbolic.y, o = t.symbolic.x, n = t.symbolic.y;
      return[["(", i, ")*(", o, ")-(", i, ")*(", r, ")+(", n, ")*(", r, ")-(", e, ")*(", n, ")+(", e, ")*(", s, ")-(", o, ")*(", s, ")"].join("")]
    }, getRise: function() {return Math.abs(this.stdform[2]) >= e.eps ? -this.stdform[0] / this.stdform[2] : 1 / 0}, getSlope: function() {return Math.abs(this.stdform[2]) >= e.eps ? -this.stdform[1] / this.stdform[2] : 1 / 0}, getAngle: function() {return Math.atan2(-this.stdform[1], this.stdform[2])}, setStraight: function(t, e) {return this.visProp.straightfirst = t, this.visProp.straightlast = e, this.board.renderer.updateLine(this), this}, getTextAnchor: function() {return new n(o.COORDS_BY_USER, [.5 * (this.point2.X() + this.point1.X()), .5 * (this.point2.Y() + this.point1.Y())], this.board)}, setLabelRelativeCoords: function(t) {h.exists(this.label) && (this.label.relativeCoords = new n(o.COORDS_BY_SCREEN, [t[0], -t[1]], this.board))}, getLabelAnchor: function() {
      var t, r, s = 0, a = new n(o.COORDS_BY_USER, this.point1.coords.usrCoords, this.board), l = new n(o.COORDS_BY_USER, this.point2.coords.usrCoords, this.board);
      if ((this.visProp.straightfirst || this.visProp.straightlast) && i.calcStraight(this, a, l, 0), a = a.scrCoords, l = l.scrCoords, !h.exists(this.label))return new n(o.COORDS_BY_SCREEN, [0 / 0, 0 / 0], this.board);
      switch (this.label.visProp.position) {
        case"lft":
        case"llft":
        case"ulft":
          a[1] <= l[1] ? (t = a[1], r = a[2]) : (t = l[1], r = l[2]);
          break;
        case"rt":
        case"lrt":
        case"urt":
          a[1] > l[1] ? (t = a[1], r = a[2]) : (t = l[1], r = l[2]);
          break;
        default:
          t = .5 * (a[1] + l[1]), r = .5 * (a[2] + l[2])
      }
      return(this.visProp.straightfirst || this.visProp.straightlast) && (h.exists(this.label) && (s = this.label.visProp.fontsize), Math.abs(t) < e.eps ? t = 0 : this.board.canvasWidth + e.eps > t && t > this.board.canvasWidth - s - e.eps && (t = this.board.canvasWidth - s), e.eps + s > r && r > -e.eps ? r = s : this.board.canvasHeight + e.eps > r && r > this.board.canvasHeight - s - e.eps && (r = this.board.canvasHeight)), new n(o.COORDS_BY_SCREEN, [t, r], this.board)
    }, cloneToBackground: function() {
      var t, e, i, r = {};
      return r.id = this.id + "T" + this.numTraces, r.elementClass = o.OBJECT_CLASS_LINE, this.numTraces++, r.point1 = this.point1, r.point2 = this.point2, r.stdform = this.stdform, r.board = this.board, r.visProp = h.deepCopy(this.visProp, this.visProp.traceattributes, !0), r.visProp.layer = this.board.options.layer.trace, h.clearVisPropOld(r), e = this.getSlope(), t = this.getRise(), r.getSlope = function() {return e}, r.getRise = function() {return t}, i = this.board.renderer.enhancedRendering, this.board.renderer.enhancedRendering = !0, this.board.renderer.drawLine(r), this.board.renderer.enhancedRendering = i, this.traces[r.id] = r.rendNode, this
    }, addTransform: function(t) {
      var e, i = h.isArray(t) ? t : [t], r = i.length;
      for (e = 0; r > e; e++)this.point1.transformations.push(i[e]), this.point2.transformations.push(i[e]);
      return this
    }, snapToGrid: function(e) {
      var r, a, h, l, c, d, u, p, f;
      return this.visProp.snaptogrid ? 3 > this.parents.length ? (this.point1.handleSnapToGrid(!0), this.point2.handleSnapToGrid(!0)) : t.exists(e) && (p = this.visProp.snapsizex, f = this.visProp.snapsizey, r = new n(o.COORDS_BY_SCREEN, [e.Xprev, e.Yprev], this.board), d = r.usrCoords[1], u = r.usrCoords[2], 0 >= p && this.board.defaultAxes && this.board.defaultAxes.x.defaultTicks && (c = this.board.defaultAxes.x.defaultTicks, p = c.ticksDelta * (c.visProp.minorticks + 1)), 0 >= f && this.board.defaultAxes && this.board.defaultAxes.y.defaultTicks && (c = this.board.defaultAxes.y.defaultTicks, f = c.ticksDelta * (c.visProp.minorticks + 1)), p > 0 && f > 0 && (a = i.projectPointToLine({coords: r}, this, this.board), h = s.subtract([1, Math.round(d / p) * p, Math.round(u / f) * f], a.usrCoords), l = this.board.create("transform", h.slice(1), {type: "translate"}), l.applyOnce([this.point1, this.point2]))) : (this.point1.snapToGrid(), this.point2.snapToGrid()), this
    }, snapToPoints: function() {
      var t = this.visProp.snaptopoints;
      return 3 > this.parents.length && (this.point1.handleSnapToPoints(t), this.point2.handleSnapToPoints(t)), this
    }, X: function(t) {
      var i, r = this.stdform[2];
      return i = Math.abs(this.point1.coords.usrCoords[0]) > e.eps ? this.point1.coords.usrCoords[1] : this.point2.coords.usrCoords[1], t = 2 * (t - .5), (1 - Math.abs(t)) * i - t * r
    }, Y: function(t) {
      var i, r = this.stdform[1];
      return i = Math.abs(this.point1.coords.usrCoords[0]) > e.eps ? this.point1.coords.usrCoords[2] : this.point2.coords.usrCoords[2], t = 2 * (t - .5), (1 - Math.abs(t)) * i + t * r
    }, Z: function(t) {
      var i = Math.abs(this.point1.coords.usrCoords[0]) > e.eps ? this.point1.coords.usrCoords[0] : this.point2.coords.usrCoords[0];
      return t = 2 * (t - .5), (1 - Math.abs(t)) * i
    }, L: function() {return this.point1.Dist(this.point2)}, minX: function() {return 0}, maxX: function() {return 1}, bounds: function() {
      var t = this.point1.coords.usrCoords, e = this.point2.coords.usrCoords;
      return[Math.min(t[1], e[1]), Math.max(t[2], e[2]), Math.max(t[1], e[1]), Math.min(t[2], e[2])]
    }, addTicks: function(t) {return"" !== t.id && h.exists(t.id) || (t.id = this.id + "_ticks_" + (this.ticks.length + 1)), this.board.renderer.drawTicks(t), this.ticks.push(t), t.id}, remove: function() {this.removeAllTicks(), a.prototype.remove.call(this)}, removeAllTicks: function() {
      var t;
      for (t = this.ticks.length; t > 0; t--)this.removeTicks(this.ticks[t - 1]);
      this.ticks = [], this.board.update()
    }, removeTicks: function(t) {
      var e, i;
      for (h.exists(this.defaultTicks) && this.defaultTicks === t && (this.defaultTicks = null), e = this.ticks.length; e > 0; e--)if (this.ticks[e - 1] === t) {
        if (this.board.removeObject(this.ticks[e - 1]), this.ticks[e - 1].ticks)for (i = 0; this.ticks[e - 1].ticks.length > i; i++)h.exists(this.ticks[e - 1].labels[i]) && this.board.removeObject(this.ticks[e - 1].labels[i]);
        delete this.ticks[e - 1];
        break
      }
    }, hideElement: function() {
      var t;
      for (a.prototype.hideElement.call(this), t = 0; this.ticks.length > t; t++)this.ticks[t].hideElement()
    }, showElement: function() {
      var t;
      for (a.prototype.showElement.call(this), t = 0; this.ticks.length > t; t++)this.ticks[t].showElement()
    }}), t.createLine = function(e, i, r) {
      var s, o, n, a, l, d, u, p = [], f = !1;
      if (2 === i.length) {
        if (h.isArray(i[0]) && i[0].length > 1)d = h.copyAttributes(r, e.options, "line", "point1"), n = e.create("point", i[0], d); else if (h.isString(i[0]) || h.isPoint(i[0]))n = e.select(i[0]); else if ("function" == typeof i[0] && h.isPoint(i[0]()))n = i[0](), f = !0; else {
          if ("function" != typeof i[0] || !i[0]().length || 2 !== i[0]().length)throw Error("JSXGraph: Can't create line with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]");
          d = h.copyAttributes(r, e.options, "line", "point1"), n = c.createPoint(e, i[0](), d), f = !0
        }
        if (h.isArray(i[1]) && i[1].length > 1)d = h.copyAttributes(r, e.options, "line", "point2"), a = e.create("point", i[1], d); else if (h.isString(i[1]) || h.isPoint(i[1]))a = e.select(i[1]); else if ("function" == typeof i[1] && h.isPoint(i[1]()))a = i[1](), f = !0; else {
          if ("function" != typeof i[1] || !i[1]().length || 2 !== i[1]().length)throw Error("JSXGraph: Can't create line with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]");
          d = h.copyAttributes(r, e.options, "line", "point2"), a = c.createPoint(e, i[1](), d), f = !0
        }
        d = h.copyAttributes(r, e.options, "line"), o = new t.Line(e, n, a, d), f ? (o.constrained = !0, o.funp1 = i[0], o.funp2 = i[1]) : o.isDraggable = !0, o.constrained || (o.parents = [n.id, a.id])
      } else if (3 === i.length) {
        for (u = !0, l = 0; 3 > l; l++)if ("number" == typeof i[l])p[l] = h.createFunction(i[l]); else {
          if ("function" != typeof i[l])throw Error("JSXGraph: Can't create line with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "' and '" + typeof i[2] + "'." + "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]");
          p[l] = i[l], u = !1
        }
        d = h.copyAttributes(r, e.options, "line", "point1"), n = u ? e.create("point", [p[2]() * p[2]() + p[1]() * p[1](), p[2]() - p[1]() * p[0]() + p[2](), -p[1]() - p[2]() * p[0]() - p[1]()], d) : e.create("point", [function() {return.5 * (p[2]() * p[2]() + p[1]() * p[1]())}, function() {return.5 * (p[2]() - p[1]() * p[0]() + p[2]())}, function() {return.5 * (-p[1]() - p[2]() * p[0]() - p[1]())}], d), d = h.copyAttributes(r, e.options, "line", "point2"), a = u ? e.create("point", [p[2]() * p[2]() + p[1]() * p[1](), -p[1]() * p[0]() + p[2](), -p[2]() * p[0]() - p[1]()], d) : e.create("point", [function() {return p[2]() * p[2]() + p[1]() * p[1]()}, function() {return-p[1]() * p[0]() + p[2]()}, function() {return-p[2]() * p[0]() - p[1]()}], d), n.prepareUpdate().update(), a.prepareUpdate().update(), d = h.copyAttributes(r, e.options, "line"), o = new t.Line(e, n, a, d), o.isDraggable = u, u && (o.parents = [p[0](), p[1](), p[2]()])
      } else if (1 === i.length && "function" == typeof i[0] && 2 === i[0]().length && h.isPoint(i[0]()[0]) && h.isPoint(i[0]()[1]))s = i[0](), d = h.copyAttributes(r, e.options, "line"), o = new t.Line(e, s[0], s[1], d), o.constrained = !0, o.funps = i[0]; else {
        if (1 !== i.length || "function" != typeof i[0] || 3 !== i[0]().length || "number" != typeof i[0]()[0] || "number" != typeof i[0]()[1] || "number" != typeof i[0]()[2])throw Error("JSXGraph: Can't create line with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]], [a,b,c]");
        s = i[0], d = h.copyAttributes(r, e.options, "line", "point1"), n = e.create("point", [function() {
          var t = s();
          return[.5 * (t[2] * t[2] + t[1] * t[1]), .5 * (t[2] - t[1] * t[0] + t[2]), .5 * (-t[1] - t[2] * t[0] - t[1])]
        }], d), d = h.copyAttributes(r, e.options, "line", "point2"), a = e.create("point", [function() {
          var t = s();
          return[t[2] * t[2] + t[1] * t[1], -t[1] * t[0] + t[2], -t[2] * t[0] - t[1]]
        }], d), d = h.copyAttributes(r, e.options, "line"), o = new t.Line(e, n, a, d), o.constrained = !0, o.funps = i[0]
      }
      return o
    }, t.registerElement("line", t.createLine), t.createSegment = function(t, e, i) {
      var r, s;
      if (i.straightFirst = !1, i.straightLast = !1, s = h.copyAttributes(i, t.options, "segment"), r = t.create("line", e.slice(0, 2), s), 3 === e.length) {
        if (r.hasFixedLength = !0, h.isNumber(e[2]))r.fixedLength = function() {return e[2]}; else {
          if (!h.isFunction(e[2]))throw Error("JSXGraph: Can't create segment with third parent type '" + typeof e[2] + "'." + "\nPossible third parent types: number or function");
          r.fixedLength = e[2]
        }
        r.fixedLengthOldCoords = [], r.fixedLengthOldCoords[0] = new n(o.COORDS_BY_USER, r.point1.coords.usrCoords.slice(1, 3), t), r.fixedLengthOldCoords[1] = new n(o.COORDS_BY_USER, r.point2.coords.usrCoords.slice(1, 3), t)
      }
      return r.elType = "segment", r
    }, t.registerElement("segment", t.createSegment), t.createArrow = function(t, e, i) {
      var r;
      return i.firstArrow = !1, i.lastArrow = !0, r = t.create("line", e, i).setStraight(!1, !1), r.type = o.OBJECT_TYPE_VECTOR, r.elType = "arrow", r
    }, t.registerElement("arrow", t.createArrow), t.createAxis = function(t, e, i) {
      var r, s, n, a;
      if (!h.isArray(e[0]) && !h.isPoint(e[0]) || !h.isArray(e[1]) && !h.isPoint(e[1]))throw Error("JSXGraph: Can't create axis with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [point,point], [[x1,y1],[x2,y2]]");
      r = h.copyAttributes(i, t.options, "axis"), s = t.create("line", e, r), s.type = o.OBJECT_TYPE_AXIS, s.isDraggable = !1, s.point1.isDraggable = !1, s.point2.isDraggable = !1;
      for (n in s.ancestors)s.ancestors.hasOwnProperty(n) && (s.ancestors[n].type = o.OBJECT_TYPE_AXISPOINT);
      return r = h.copyAttributes(i, t.options, "axis", "ticks"), a = h.exists(r.ticksdistance) ? r.ticksdistance : h.isArray(r.ticks) ? r.ticks : 1, s.defaultTicks = t.create("ticks", [s, a], r), s.defaultTicks.dump = !1, s.elType = "axis", s.subs = {ticks: s.defaultTicks}, s
    }, t.registerElement("axis", t.createAxis), t.createTangent = function(t, i, s) {
      var n, a, l, c, d, u, p, f;
      if (1 === i.length)n = i[0], a = n.slideObject; else {
        if (2 !== i.length)throw Error("JSXGraph: Can't create tangent with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [glider], [point,line|curve|circle|conic]");
        if (h.isPoint(i[0]))n = i[0], a = i[1]; else {
          if (!h.isPoint(i[1]))throw Error("JSXGraph: Can't create tangent with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [glider], [point,line|curve|circle|conic]");
          a = i[0], n = i[1]
        }
      }
      if (a.elementClass === o.OBJECT_CLASS_LINE ? (f = t.create("line", [a.point1, a.point2], s), f.glider = n) : a.elementClass === o.OBJECT_CLASS_CURVE && a.type !== o.OBJECT_TYPE_CONIC ? "plot" !== a.visProp.curvetype ? (l = a.X, c = a.Y, f = t.create("line", [function() {return-n.X() * r.D(c)(n.position) + n.Y() * r.D(l)(n.position)}, function() {return r.D(c)(n.position)}, function() {return-r.D(l)(n.position)}], s), n.addChild(f), f.glider = n) : (f = t.create("line", [function() {
        var t = Math.floor(n.position);
        return t === a.numberPoints - 1 && t--, 0 > t ? 1 : a.Y(t) * a.X(t + 1) - a.X(t) * a.Y(t + 1)
      }, function() {
        var t = Math.floor(n.position);
        return t === a.numberPoints - 1 && t--, 0 > t ? 0 : a.Y(t + 1) - a.Y(t)
      }, function() {
        var t = Math.floor(n.position);
        return t === a.numberPoints - 1 && t--, 0 > t ? 0 : a.X(t) - a.X(t + 1)
      }], s), n.addChild(f), f.glider = n) : a.type === o.OBJECT_TYPE_TURTLE ? (f = t.create("line", [function() {
        var t = Math.floor(n.position);
        for (u = 0; a.objects.length > u; u++)if (p = a.objects[u], p.type === o.OBJECT_TYPE_CURVE) {
          if (p.numberPoints > t)break;
          t -= p.numberPoints
        }
        return t === p.numberPoints - 1 && t--, 0 > t ? 1 : p.Y(t) * p.X(t + 1) - p.X(t) * p.Y(t + 1)
      }, function() {
        var t = Math.floor(n.position);
        for (u = 0; a.objects.length > u; u++)if (p = a.objects[u], p.type === o.OBJECT_TYPE_CURVE) {
          if (p.numberPoints > t)break;
          t -= p.numberPoints
        }
        return t === p.numberPoints - 1 && t--, 0 > t ? 0 : p.Y(t + 1) - p.Y(t)
      }, function() {
        var t = Math.floor(n.position);
        for (u = 0; a.objects.length > u; u++)if (p = a.objects[u], p.type === o.OBJECT_TYPE_CURVE) {
          if (p.numberPoints > t)break;
          t -= p.numberPoints
        }
        return t === p.numberPoints - 1 && t--, 0 > t ? 0 : p.X(t) - p.X(t + 1)
      }], s), n.addChild(f), f.glider = n) : (a.elementClass === o.OBJECT_CLASS_CIRCLE || a.type === o.OBJECT_TYPE_CONIC) && (f = t.create("line", [function() {return e.matVecMult(a.quadraticform, n.coords.usrCoords)[0]}, function() {return e.matVecMult(a.quadraticform, n.coords.usrCoords)[1]}, function() {return e.matVecMult(a.quadraticform, n.coords.usrCoords)[2]}], s), n.addChild(f), f.glider = n), !h.exists(f))throw Error("JSXGraph: Couldn't create tangent with the given parents.");
      for (f.elType = "tangent", f.type = o.OBJECT_TYPE_TANGENT, f.parents = [], d = 0; i.length > d; d++)f.parents.push(i[d].id);
      return f
    }, t.createRadicalAxis = function(t, i, r) {
      var s, n, a;
      if (2 !== i.length || i[0].elementClass !== o.OBJECT_CLASS_CIRCLE || i[1].elementClass !== o.OBJECT_CLASS_CIRCLE)throw Error("JSXGraph: Can't create 'radical axis' with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent type: [circle,circle]");
      return n = t.select(i[0]), a = t.select(i[1]), s = t.create("line", [function() {
        var t = n.stdform, i = a.stdform;
        return e.matVecMult(e.transpose([t.slice(0, 3), i.slice(0, 3)]), [i[3], -t[3]])
      }], r), s.elType = "radicalaxis", s.parents = [n.id, a.id], n.addChild(s), a.addChild(s), s
    }, t.createPolarLine = function(t, e, i) {
      var r, s, n, a, l, c, d;
      if (e.length > 1 && (a = e[0].type === o.OBJECT_TYPE_CONIC || e[0].elementClass === o.OBJECT_CLASS_CIRCLE, l = e[1].type === o.OBJECT_TYPE_CONIC || e[1].elementClass === o.OBJECT_CLASS_CIRCLE, c = h.isPoint(e[0]), d = h.isPoint(e[1])), 2 !== e.length || !(a && d || c && l))throw Error("JSXGraph: Can't create 'polar line' with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent type: [conic|circle,point], [point,conic|circle]");
      return d ? (s = t.select(e[0]), n = t.select(e[1])) : (s = t.select(e[1]), n = t.select(e[0])), r = t.create("tangent", [s, n], i), r.elType = "polarline", r
    }, t.registerElement("tangent", t.createTangent), t.registerElement("polar", t.createTangent), t.registerElement("radicalaxis", t.createRadicalAxis), t.registerElement("polarline", t.createPolarLine), {Line: t.Line, createLine: t.createLine, createTangent: t.createTangent, createPolar: t.createTangent, createSegment: t.createSegment, createAxis: t.createAxis, createArrow: t.createArrow, createRadicalAxis: t.createRadicalAxis, createPolarLine: t.createPolarLine}
  }), define("base/circle", ["jxg", "base/element", "base/coords", "base/constants", "parser/geonext", "math/geometry", "math/statistics", "utils/type", "base/transformation", "base/point"], function(t, e, i, r, s, o, n, a) {
    return t.Circle = function(t, e, i, s, o) {this.constructor(t, o, r.OBJECT_TYPE_CIRCLE, r.OBJECT_CLASS_CIRCLE), this.method = e, this.midpoint = this.board.select(i), this.center = this.board.select(i), this.point2 = null, this.radius = 0, this.line = null, this.circle = null, "twoPoints" === e ? (this.point2 = t.select(s), this.radius = this.Radius()) : "pointRadius" === e ? (this.gxtterm = s, this.updateRadius = a.createFunction(s, this.board, null, !0), this.updateRadius()) : "pointLine" === e ? (this.line = t.select(s), this.radius = this.line.point1.coords.distance(r.COORDS_BY_USER, this.line.point2.coords)) : "pointCircle" === e && (this.circle = t.select(s), this.radius = this.circle.Radius()), this.id = this.board.setId(this, "C"), this.board.renderer.drawEllipse(this), this.board.finalizeAdding(this), this.createGradient(), this.elType = "circle", this.createLabel(), this.center.addChild(this), "pointRadius" === e ? this.notifyParents(s) : "pointLine" === e ? this.line.addChild(this) : "pointCircle" === e ? this.circle.addChild(this) : "twoPoints" === e && this.point2.addChild(this), this.methodMap = a.deepCopy(this.methodMap, {setRadius: "setRadius", getRadius: "getRadius", Area: "Area", area: "Area", radius: "Radius", center: "center", line: "line", point2: "point2"})}, t.Circle.prototype = new e, t.extend(t.Circle.prototype, {hasPoint: function(t, e) {
      var s = this.board.options.precision.hasPoint / this.board.unitX, o = this.center.coords.usrCoords, n = new i(r.COORDS_BY_SCREEN, [t, e], this.board), a = this.Radius(), h = Math.sqrt((o[1] - n.usrCoords[1]) * (o[1] - n.usrCoords[1]) + (o[2] - n.usrCoords[2]) * (o[2] - n.usrCoords[2]));
      return this.visProp.hasinnerpoints ? a + s > h : s > Math.abs(h - a)
    }, generatePolynomial: function(t) {
      var e = this.center.symbolic.x, i = this.center.symbolic.y, r = t.symbolic.x, s = t.symbolic.y, o = this.generateRadiusSquared();
      return"" === o ? [] : ["((" + r + ")-(" + e + "))^2 + ((" + s + ")-(" + i + "))^2 - (" + o + ")"]
    }, generateRadiusSquared: function() {
      var t, e, i, r, s, o, n = "";
      return"twoPoints" === this.method ? (t = this.center.symbolic.x, e = this.center.symbolic.y, i = this.point2.symbolic.x, r = this.point2.symbolic.y, n = "((" + i + ")-(" + t + "))^2 + ((" + r + ")-(" + e + "))^2") : "pointRadius" === this.method ? "number" == typeof this.radius && (n = "" + this.radius * this.radius) : "pointLine" === this.method ? (i = this.line.point1.symbolic.x, r = this.line.point1.symbolic.y, s = this.line.point2.symbolic.x, o = this.line.point2.symbolic.y, n = "((" + i + ")-(" + s + "))^2 + ((" + r + ")-(" + o + "))^2") : "pointCircle" === this.method && (n = this.circle.Radius()), n
    }, update: function() {return this.needsUpdate && (this.visProp.trace && this.cloneToBackground(!0), "pointLine" === this.method ? this.radius = this.line.point1.coords.distance(r.COORDS_BY_USER, this.line.point2.coords) : "pointCircle" === this.method ? this.radius = this.circle.Radius() : "pointRadius" === this.method && (this.radius = this.updateRadius()), this.updateStdform(), this.updateQuadraticform()), this}, updateQuadraticform: function() {
      var t = this.center, e = t.X(), i = t.Y(), r = this.Radius();
      this.quadraticform = [
        [e * e + i * i - r * r, -e, -i],
        [-e, 1, 0],
        [-i, 0, 1]
      ]
    }, updateStdform: function() {this.stdform[3] = .5, this.stdform[4] = this.Radius(), this.stdform[1] = -this.center.coords.usrCoords[1], this.stdform[2] = -this.center.coords.usrCoords[2], isFinite(this.stdform[4]) || (this.stdform[0] = a.exists(this.point2) ? -(this.stdform[1] * this.point2.coords.usrCoords[1] + this.stdform[2] * this.point2.coords.usrCoords[2]) : 0), this.normalize()}, updateRenderer: function() {
      var t;
      this.needsUpdate && this.visProp.visible && (t = this.isReal, this.isReal = !isNaN(this.center.coords.usrCoords[1] + this.center.coords.usrCoords[2] + this.Radius()) && this.center.isReal, this.isReal ? (t !== this.isReal && (this.board.renderer.show(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.show(this.label)), this.board.renderer.updateEllipse(this)) : t !== this.isReal && (this.board.renderer.hide(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.hide(this.label)), this.needsUpdate = !1), this.hasLabel && this.label.visProp.visible && this.isReal && (this.label.update(), this.board.renderer.updateText(this.label))
    }, notifyParents: function(t) {"string" == typeof t && s.findDependencies(this, t, this.board)}, setRadius: function(t) {return this.updateRadius = a.createFunction(t, this.board, null, !0), this.board.update(), this}, Radius: function(t) {return a.exists(t) ? (this.setRadius(t), this.Radius()) : "twoPoints" === this.method ? a.cmpArrays(this.point2.coords.usrCoords, [0, 0, 0]) || a.cmpArrays(this.center.coords.usrCoords, [0, 0, 0]) ? 0 / 0 : this.center.Dist(this.point2) : "pointLine" === this.method || "pointCircle" === this.method ? this.radius : "pointRadius" === this.method ? this.updateRadius() : 0 / 0}, getRadius: function() {return this.Radius()}, getTextAnchor: function() {return this.center.coords}, getLabelAnchor: function() {
      var t, e, s = this.Radius(), o = this.center.coords.usrCoords;
      switch (this.visProp.label.position) {
        case"lft":
          t = o[1] - s, e = o[2];
          break;
        case"llft":
          t = o[1] - Math.sqrt(.5) * s, e = o[2] - Math.sqrt(.5) * s;
          break;
        case"rt":
          t = o[1] + s, e = o[2];
          break;
        case"lrt":
          t = o[1] + Math.sqrt(.5) * s, e = o[2] - Math.sqrt(.5) * s;
          break;
        case"urt":
          t = o[1] + Math.sqrt(.5) * s, e = o[2] + Math.sqrt(.5) * s;
          break;
        case"top":
          t = o[1], e = o[2] + s;
          break;
        case"bot":
          t = o[1], e = o[2] - s;
          break;
        default:
          t = o[1] - Math.sqrt(.5) * s, e = o[2] + Math.sqrt(.5) * s
      }
      return new i(r.COORDS_BY_USER, [t, e], this.board)
    }, cloneToBackground: function() {
      var t, e = this.Radius(), i = {id: this.id + "T" + this.numTraces, elementClass: r.OBJECT_CLASS_CIRCLE, center: {coords: this.center.coords}, Radius: function() {return e}, getRadius: function() {return e}, board: this.board, visProp: a.deepCopy(this.visProp, this.visProp.traceattributes, !0)};
      return i.visProp.layer = this.board.options.layer.trace, this.numTraces++, a.clearVisPropOld(i), t = this.board.renderer.enhancedRendering, this.board.renderer.enhancedRendering = !0, this.board.renderer.drawEllipse(i), this.board.renderer.enhancedRendering = t, this.traces[i.id] = i.rendNode, this
    }, addTransform: function(t) {
      var e, i = a.isArray(t) ? t : [t], r = i.length;
      for (e = 0; r > e; e++)this.center.transformations.push(i[e]), "twoPoints" === this.method && this.point2.transformations.push(i[e]);
      return this
    }, snapToGrid: function() {
      var t = this.visProp.snaptogrid;
      return this.center.snapToGrid(t), "twoPoints" === this.method && this.point2.snapToGrid(t), this
    }, snapToPoints: function() {
      var t = this.visProp.snaptopoints;
      return this.center.handleSnapToPoints(t), "twoPoints" === this.method && this.point2.handleSnapToPoints(t), this
    }, X: function(t) {return this.Radius() * Math.cos(2 * t * Math.PI) + this.center.coords.usrCoords[1]}, Y: function(t) {return this.Radius() * Math.sin(2 * t * Math.PI) + this.center.coords.usrCoords[2]}, Z: function() {return 1}, minX: function() {return 0}, maxX: function() {return 1}, Area: function() {
      var t = this.Radius();
      return t * t * Math.PI
    }, bounds: function() {
      var t = this.center.coords.usrCoords, e = this.Radius();
      return[t[1] - e, t[2] + e, t[1] + e, t[2] - e]
    }}), t.createCircle = function(e, i, s) {
      var o, n, h, l, c = !0;
      for (n = [], h = 0; i.length > h; h++)if (a.isPointType(i[h], e)) {
        if (n = n.concat(a.providePoints(e, [i[h]], s, "circle", ["center"])), n[n.length - 1] === !1)throw Error("JSXGraph: Can't create circle from this type. Please provide a point type.")
      } else n.push(i[h]);
      if (l = a.copyAttributes(s, e.options, "circle"), 2 === n.length && a.isPoint(n[0]) && a.isPoint(n[1]))o = new t.Circle(e, "twoPoints", n[0], n[1], l); else if ((a.isNumber(n[0]) || a.isFunction(n[0]) || a.isString(n[0])) && a.isPoint(n[1]))o = new t.Circle(e, "pointRadius", n[1], n[0], l); else if ((a.isNumber(n[1]) || a.isFunction(n[1]) || a.isString(n[1])) && a.isPoint(n[0]))o = new t.Circle(e, "pointRadius", n[0], n[1], l); else if (n[0].elementClass === r.OBJECT_CLASS_CIRCLE && a.isPoint(n[1]))o = new t.Circle(e, "pointCircle", n[1], n[0], l); else if (n[1].elementClass === r.OBJECT_CLASS_CIRCLE && a.isPoint(n[0]))o = new t.Circle(e, "pointCircle", n[0], n[1], l); else if (n[0].elementClass === r.OBJECT_CLASS_LINE && a.isPoint(n[1]))o = new t.Circle(e, "pointLine", n[1], n[0], l); else if (n[1].elementClass === r.OBJECT_CLASS_LINE && a.isPoint(n[0]))o = new t.Circle(e, "pointLine", n[0], n[1], l); else {
        if (!(3 === i.length && a.isPoint(n[0]) && a.isPoint(n[1]) && a.isPoint(n[2])))throw Error("JSXGraph: Can't create circle with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,point], [point,number], [point,function], [point,circle], [point,point,point]");
        if (!t.elements.circumcircle)throw Error("JSXGraph: Can't create circle with three points. Please include the circumcircle element (element/composition).");
        o = t.elements.circumcircle(e, n, l)
      }
      for (o.isDraggable = c, o.parents = [], h = 0; i.length > h; h++)i[h].id && o.parents.push(i[h].id);
      return o.elType = "circle", o
    }, t.registerElement("circle", t.createCircle), {Circle: t.Circle, createCircle: t.createCircle}
  }), define("base/composition", ["jxg", "utils/type"], function(t, e) {
    return t.Composition = function(t) {
      var i, r = this, s = ["setAttribute", "prepareUpdate", "updateRenderer", "update", "highlight", "noHighlight"], o = function(t) {
        return function() {
          var i;
          for (i in r.elements)r.elements.hasOwnProperty(i) && e.exists(r.elements[i][t]) && r.elements[i][t].apply(r.elements[i], arguments);
          return r
        }
      };
      for (i = 0; s.length > i; i++)this[s[i]] = o(s[i]);
      this.elements = {}, this.objects = this.elements, this.elementsByName = {}, this.objectsList = [], this.groups = {}, this.methodMap = {setAttribute: "setAttribute", setProperty: "setAttribute", add: "add", remove: "remove", select: "select"};
      for (i in t)t.hasOwnProperty(i) && this.add(i, t[i]);
      this.dump = !0, this.subs = {}
    }, t.extend(t.Composition.prototype, {add: function(t, i) {return!e.exists(this[t]) && e.exists(i) ? (e.exists(i.id) ? this.elements[i.id] = i : this.elements[t] = i, e.exists(i.name) && (this.elementsByName[i.name] = i), i.on("attribute:name", this.nameListener, this), this.objectsList.push(i), this[t] = i, this.methodMap[t] = i, !0) : !1}, remove: function(t) {
      var e, i = !1;
      for (e in this.elements)if (this.elements.hasOwnProperty(e) && this.elements[e].id === this[t].id) {
        i = !0;
        break
      }
      return i && (delete this.elements[this[t].id], delete this[t]), i
    }, nameListener: function(t, e, i) {delete this.elementsByName[t], this.elementsByName[e] = i}, select: function(i) {return e.exists(t.Board) ? t.Board.prototype.select.call(this, i) : new t.Composition}, getParents: function() {return this.parents}, getType: function() {return this.elType}, getAttributes: function() {
      var t, e = {};
      for (t in this.subs)this.subs.hasOwnProperty(t) && (e[t] = this.subs[t].visProp);
      return this.attr
    }}), t.Composition
  }), define("base/curve", ["jxg", "base/constants", "base/coords", "base/element", "math/math", "math/statistics", "math/numerics", "math/geometry", "parser/geonext", "utils/type", "base/transformation", "math/qdt"], function(t, e, i, r, s, o, n, a, h, l, c, d) {
    return t.Curve = function(t, i, r) {this.constructor(t, r, e.OBJECT_TYPE_CURVE, e.OBJECT_CLASS_CURVE), this.points = [], this.numberPoints = this.visProp.numberpointshigh, this.bezierDegree = 1, this.dataX = null, this.dataY = null, this.qdt = null, this.varname = l.exists(i[0]) ? i[0] : "x", this.xterm = i[1], this.yterm = i[2], this.generateTerm(this.varname, this.xterm, this.yterm, i[3], i[4]), this.updateCurve(), this.id = this.board.setId(this, "G"), this.board.renderer.drawCurve(this), this.board.finalizeAdding(this), this.createGradient(), this.elType = "curve", this.createLabel(), "string" == typeof this.xterm && this.notifyParents(this.xterm), "string" == typeof this.yterm && this.notifyParents(this.yterm), this.methodMap = l.deepCopy(this.methodMap, {generateTerm: "generateTerm", setTerm: "generateTerm"})}, t.Curve.prototype = new r, t.extend(t.Curve.prototype, {minX: function() {
      var t;
      return"polar" === this.visProp.curvetype ? 0 : (t = new i(e.COORDS_BY_SCREEN, [0, 0], this.board, !1), t.usrCoords[1])
    }, maxX: function() {
      var t;
      return"polar" === this.visProp.curvetype ? 2 * Math.PI : (t = new i(e.COORDS_BY_SCREEN, [this.board.canvasWidth, 0], this.board, !1), t.usrCoords[1])
    }, Z: function() {return 1}, hasPoint: function(t, r, o) {
      var n, h, c, d, u, p, f, m, b, g, v, y, C = this.visProp.numberpointslow, P = (this.maxX() - this.minX()) / C, _ = this.board.options.precision.hasPoint / this.board.unitX, E = 1 / 0, S = !0;
      if (h = new i(e.COORDS_BY_SCREEN, [t, r], this.board, !1), t = h.usrCoords[1], r = h.usrCoords[2], this.transformations.length > 0 && (this.updateTransformMatrix(), d = s.inverse(this.transformMat), u = s.matVecMult(d, [1, t, r]), t = u[1], r = u[2]), "parameter" === this.visProp.curvetype || "polar" === this.visProp.curvetype)for (_ *= _, p = 0, n = this.minX(); C > p; p++) {
        if (m = this.X(n, S), b = this.Y(n, S), E = (t - m) * (t - m) + (r - b) * (r - b), _ > E)return!0;
        n += P
      } else if ("plot" === this.visProp.curvetype || "functiongraph" === this.visProp.curvetype) {
        for ((!l.exists(o) || 0 > o) && (o = 0), l.exists(this.qdt) && this.visProp.useqdt && 3 !== this.bezierDegree ? (y = this.qdt.query(new i(e.COORDS_BY_USER, [t, r], this.board)), v = y.points, c = v.length) : (v = this.points, c = this.numberPoints - 1), p = o; c > p; p++)for (g = [], 3 === this.bezierDegree ? g.push(a.projectCoordsToBeziersegment([1, t, r], this, p)) : y ? (v[p].prev && g.push(a.projectCoordsToSegment([1, t, r], v[p].prev.usrCoords, v[p].usrCoords)), v[p].next && v[p + 1] !== v[p].next && g.push(a.projectCoordsToSegment([1, t, r], v[p].usrCoords, v[p].next.usrCoords))) : g.push(a.projectCoordsToSegment([1, t, r], v[p].usrCoords, v[p + 1].usrCoords)), f = 0; g.length > f; f++)if (g[f][1] >= 0 && 1 >= g[f][1] && _ >= a.distance([1, t, r], g[f][0], 3))return!0;
        return!1
      }
      return _ > E
    }, allocatePoints: function() {
      var t, r;
      if (r = this.numberPoints, this.points.length < this.numberPoints)for (t = this.points.length; r > t; t++)this.points[t] = new i(e.COORDS_BY_USER, [0, 0], this.board, !1)
    }, update: function() {return this.needsUpdate && (this.visProp.trace && this.cloneToBackground(!0), this.updateCurve()), this}, updateRenderer: function() {
      var t;
      return this.needsUpdate && this.visProp.visible && (t = this.isReal, this.checkReal(), (this.isReal || t) && this.board.renderer.updateCurve(this), this.isReal ? t !== this.isReal && (this.board.renderer.show(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.show(this.label)) : t !== this.isReal && (this.board.renderer.hide(this), this.hasLabel && this.label.visProp.visible && this.board.renderer.hide(this.label)), this.hasLabel && l.exists(this.label.visProp) && this.label.visProp.visible && (this.label.update(), this.board.renderer.updateText(this.label))), this.needsUpdate = !1, this
    }, updateDataArray: function() {}, updateCurve: function() {
      var t, i, r, s, o, a, h = !1;
      if (this.updateTransformMatrix(), this.updateDataArray(), i = this.minX(), r = this.maxX(), l.exists(this.dataX))for (this.numberPoints = this.dataX.length, t = this.numberPoints, this.allocatePoints(), a = 0; t > a; a++)s = a, l.exists(this.dataY) ? (o = a, this.points[a].setCoordinates(e.COORDS_BY_USER, [this.dataX[a], this.dataY[a]], !1)) : (o = this.X(s), this.points[a].setCoordinates(e.COORDS_BY_USER, [this.dataX[a], this.Y(o, h)], !1)), this.updateTransform(this.points[a]), h = !0; else {
        if (this.visProp.doadvancedplot ? this.updateParametricCurve(i, r, t) : this.visProp.doadvancedplotold ? this.updateParametricCurveOld(i, r, t) : (this.numberPoints = this.board.updateQuality === this.board.BOARD_QUALITY_HIGH ? this.visProp.numberpointshigh : this.visProp.numberpointslow, this.allocatePoints(), this.updateParametricCurveNaive(i, r, this.numberPoints)), t = this.numberPoints, this.visProp.useqdt && this.board.updateQuality === this.board.BOARD_QUALITY_HIGH)for (this.qdt = new d(this.board.getBoundingBox()), a = 0; this.points.length > a; a++)this.qdt.insert(this.points[a]), a > 0 && (this.points[a].prev = this.points[a - 1]), t - 1 > a && (this.points[a].next = this.points[a + 1]);
        for (a = 0; t > a; a++)this.updateTransform(this.points[a])
      }
      return"plot" !== this.visProp.curvetype && this.visProp.rdpsmoothing && (this.points = n.RamerDouglasPeucker(this.points, .2), this.numberPoints = this.points.length), this
    }, updateTransformMatrix: function() {
      var t, e, i = this.transformations.length;
      for (this.transformMat = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ], e = 0; i > e; e++)t = this.transformations[e], t.update(), this.transformMat = s.matMatMult(t.matrix, this.transformMat);
      return this
    }, checkReal: function() {
      var t, e, i = !1, r = this.numberPoints;
      for (t = 0; r > t; t++)if (e = this.points[t].usrCoords, !isNaN(e[1]) && !isNaN(e[2]) && Math.abs(e[0]) > s.eps) {
        i = !0;
        break
      }
      this.isReal = i
    }, updateParametricCurveNaive: function(t, i, r) {
      var s, o, n = !1, a = (i - t) / r;
      for (s = 0; r > s; s++)o = t + s * a, this.points[s].setCoordinates(e.COORDS_BY_USER, [this.X(o, n), this.Y(o, n)], !1), n = !0;
      return this
    }, updateParametricCurveOld: function(t, r) {
      var o, n, a, h, l, c, d, u, p, f, m, b, g, v = !1, y = new i(e.COORDS_BY_USER, [0, 0], this.board, !1), C = [], P = [], _ = [], E = [], S = !1, x = 0, O = function(t, e, i) {
        var r, o, n = i[1] - t[1], a = i[2] - t[2], h = e[0] - t[1], l = e[1] - t[2], c = h * h + l * l;
        return c >= s.eps && (r = (n * h + a * l) / c, r > 0 && (1 >= r ? (n -= r * h, a -= r * l) : (n -= h, a -= l))), o = n * n + a * a, Math.sqrt(o)
      };
      for (this.board.updateQuality === this.board.BOARD_QUALITY_LOW ? (m = 15, b = 10, g = 10) : (m = 21, b = .7, g = .7), E[0] = r - t, o = 1; m > o; o++)E[o] = .5 * E[o - 1];
      o = 1, C[0] = 1, P[0] = 0, n = t, y.setCoordinates(e.COORDS_BY_USER, [this.X(n, v), this.Y(n, v)], !1), v = !0, d = y.scrCoords[1], u = y.scrCoords[2], a = n, n = r, y.setCoordinates(e.COORDS_BY_USER, [this.X(n, v), this.Y(n, v)], !1), l = y.scrCoords[1], c = y.scrCoords[2], _[0] = [l, c], p = 1, f = 0, this.points = [], this.points[x++] = new i(e.COORDS_BY_SCREEN, [d, u], this.board, !1);
      do {
        for (S = this.isDistOK(l - d, c - u, b, g) || this.isSegmentOutside(d, u, l, c); m > f && (!S || 6 > f) && (7 >= f || this.isSegmentDefined(d, u, l, c));)C[p] = o, P[p] = f, _[p] = [l, c], p += 1, o = 2 * o - 1, f++, n = t + o * E[f], y.setCoordinates(e.COORDS_BY_USER, [this.X(n, v), this.Y(n, v)], !1, !0), l = y.scrCoords[1], c = y.scrCoords[2], S = this.isDistOK(l - d, c - u, b, g) || this.isSegmentOutside(d, u, l, c);
        x > 1 && (h = O(this.points[x - 2].scrCoords, [l, c], this.points[x - 1].scrCoords), .015 > h && (x -= 1)), this.points[x] = new i(e.COORDS_BY_SCREEN, [l, c], this.board, !1), x += 1, d = l, u = c, a = n, p -= 1, l = _[p][0], c = _[p][1], f = P[p] + 1, o = 2 * C[p]
      } while (p > 0 && 5e5 > x);
      return this.numberPoints = this.points.length, this
    }, isSegmentOutside: function(t, e, i, r) {return 0 > e && 0 > r || e > this.board.canvasHeight && r > this.board.canvasHeight || 0 > t && 0 > i || t > this.board.canvasWidth && i > this.board.canvasWidth}, isDistOK: function(t, e, i, r) {return i > Math.abs(t) && r > Math.abs(e) && !isNaN(t + e)}, isSegmentDefined: function(t, e, i, r) {return!(isNaN(t + e) && isNaN(i + r))}, _insertPoint: function(t) {
      var e = !isNaN(this._lastCrds[1] + this._lastCrds[2]), i = !isNaN(t.scrCoords[1] + t.scrCoords[2]), r = this.board.canvasWidth, s = this.board.canvasHeight, o = 20;
      i = i && t.scrCoords[1] > -o && t.scrCoords[2] > -o && r + o > t.scrCoords[1] && s + o > t.scrCoords[2], (!i && e || i && (!e || Math.abs(t.scrCoords[1] - this._lastCrds[1]) > .7 || Math.abs(t.scrCoords[2] - this._lastCrds[2]) > .7)) && (this.points.push(t), this._lastCrds = t.copy("scrCoords"))
    }, _borderCase: function(t, r, s, o, n, a, h) {
      var l, c, d, u, p, f = null, m = 5, b = 70, g = !1;
      if (this.smoothLevel > h) {
        if (c = new i(e.COORDS_BY_USER, [0, 0], this.board, !1), isNaN(t[1] + t[2]) && !isNaN(s[1] + s[2] + r[1] + r[2]))for (u = 0; b > u; ++u) {
          p = 0;
          do l = .5 * (o + a), c.setCoordinates(e.COORDS_BY_USER, [this.X(l, !0), this.Y(l, !0)], !1), d = c.scrCoords, g = isNaN(d[1] + d[2]), g && (o = l), ++p; while (g && m > p);
          if (!(m > p))break;
          a = l, f = d.slice()
        } else if (isNaN(r[1] + r[2]) && !isNaN(s[1] + s[2] + t[1] + t[2]))for (u = 0; b > u; ++u) {
          p = 0;
          do l = .5 * (a + n), c.setCoordinates(e.COORDS_BY_USER, [this.X(l, !0), this.Y(l, !0)], !1), d = c.scrCoords, g = isNaN(d[1] + d[2]), g && (n = l), ++p; while (g && m > p);
          if (!(m > p))break;
          a = l, f = d.slice()
        }
        if (null !== f)return this._insertPoint(new i(e.COORDS_BY_SCREEN, f.slice(1), this.board, !1)), !0
      }
      return!1
    }, _triangleDists: function(t, e, i) {
      var r, s, o, n, h;
      return r = [t[0] * e[0], .5 * (t[1] + e[1]), .5 * (t[2] + e[2])], s = a.distance(t, e, 3), o = a.distance(t, i, 3), n = a.distance(i, e, 3), h = a.distance(i, r, 3), [s, o, n, h]
    }, _isUndefined: function(t, r, s, o) {
      var n, a, h;
      if (!isNaN(t[1] + t[2]) || !isNaN(s[1] + s[2]))return!1;
      for (h = new i(e.COORDS_BY_USER, [0, 0], this.board, !1), a = 0; 20 > a; ++a)if (n = r + Math.random() * (o - r), h.setCoordinates(e.COORDS_BY_USER, [this.X(n, !0), this.Y(n, !0)], !1), !isNaN(h.scrCoords[0] + h.scrCoords[1] + h.scrCoords[2]))return!1;
      return!0
    }, _isOutside: function(t, e, i) {
      var r = 10, s = this.board.canvasWidth, o = this.board.canvasHeight;
      return-r > t[1] && -r > i[1] || -r > t[2] && -r > i[2] || t[1] > s + r && i[1] > s + r || t[2] > o + r && i[2] > o + r ? !0 : !1
    }, _plotRecursive: function(t, r, s, o, n, a) {
      var h, l, c, d, u, p, f = 0, m = .5, b = new i(e.COORDS_BY_USER, [0, 0], this.board, !1);
      if (!(this.numberPoints > 65536))return this.nanLevel > n && this._isUndefined(t, r, s, o) ? this : this.nanLevel > n && this._isOutside(t, r, s, o) ? this : (h = .5 * (r + o), b.setCoordinates(e.COORDS_BY_USER, [this.X(h, !0), this.Y(h, !0)], !1), l = b.scrCoords, this._borderCase(t, s, l, r, o, h, n) ? this : (c = this._triangleDists(t, s, l), d = this.smoothLevel > n && a > c[3], u = this.jumpLevel > n && (c[2] > .99 * c[0] || c[1] > .99 * c[0] || 1 / 0 === c[0] || 1 / 0 === c[1] || 1 / 0 === c[2]), p = this.smoothLevel + 2 > n && c[0] < m * (c[1] + c[2]), p && (f = 0, d = !1), --n, u ? this._insertPoint(new i(e.COORDS_BY_SCREEN, [0 / 0, 0 / 0], this.board, !1)) : f >= n || d ? this._insertPoint(b) : (this._plotRecursive(t, r, l, h, n, a), this._insertPoint(b), this._plotRecursive(l, h, s, o, n, a)), this))
    }, updateParametricCurve: function(t, r) {
      var s, o, n, a, h, l, c = !1, d = new i(e.COORDS_BY_USER, [0, 0], this.board, !1), u = new i(e.COORDS_BY_USER, [0, 0], this.board, !1);
      return this.board.updateQuality === this.board.BOARD_QUALITY_LOW ? (h = 12, l = 3, l = 2, this.smoothLevel = h - 5, this.jumpLevel = 5) : (h = 17, l = .9, l = 2, this.smoothLevel = h - 7, this.jumpLevel = 3), this.nanLevel = h - 4, this.points = [], this._lastCrds = [0, 0 / 0, 0 / 0], s = t, d.setCoordinates(e.COORDS_BY_USER, [this.X(s, c), this.Y(s, c)], !1), n = d.copy("scrCoords"), c = !0, o = r, u.setCoordinates(e.COORDS_BY_USER, [this.X(o, c), this.Y(o, c)], !1), a = u.copy("scrCoords"), this.points.push(d), this._plotRecursive(n, s, a, o, h, l), this.points.push(u), this.numberPoints = this.points.length, this
    }, updateTransform: function(t) {
      var i, r = this.transformations.length;
      return r > 0 && (i = s.matVecMult(this.transformMat, t.usrCoords), t.setCoordinates(e.COORDS_BY_USER, [i[1], i[2]], !1, !0)), t
    }, addTransform: function(t) {
      var e, i = l.isArray(t) ? t : [t], r = i.length;
      for (e = 0; r > e; e++)this.transformations.push(i[e]);
      return this
    }, interpolationFunctionFromArray: function(t) {
      var e = "data" + t;
      return function(t) {
        var i, r, s, o, n = this[e], a = n.length, h = [];
        if (isNaN(t))return 0 / 0;
        if (0 > t)return l.isFunction(n[0]) ? n[0]() : n[0];
        if (3 === this.bezierDegree) {
          if (a /= 3, t >= a)return l.isFunction(n[n.length - 1]) ? n[n.length - 1]() : n[n.length - 1];
          for (i = 3 * Math.floor(t), s = t % 1, o = 1 - s, r = 0; 4 > r; r++)h[r] = l.isFunction(n[i + r]) ? n[i + r]() : n[i + r];
          return o * o * (o * h[0] + 3 * s * h[1]) + (3 * o * h[2] + s * h[3]) * s * s
        }
        if (i = t > a - 2 ? a - 2 : parseInt(Math.floor(t), 10), i === t)return l.isFunction(n[i]) ? n[i]() : n[i];
        for (r = 0; 2 > r; r++)h[r] = l.isFunction(n[i + r]) ? n[i + r]() : n[i + r];
        return h[0] + (h[1] - h[0]) * (t - i)
      }
    }, generateTerm: function(t, e, i, r, s) {
      var o, n;
      l.isArray(e) ? (this.dataX = e, this.numberPoints = this.dataX.length, this.X = this.interpolationFunctionFromArray("X"), this.visProp.curvetype = "plot", this.isDraggable = !0) : (this.X = l.createFunction(e, this.board, t), l.isString(e) ? this.visProp.curvetype = "functiongraph" : (l.isFunction(e) || l.isNumber(e)) && (this.visProp.curvetype = "parameter"), this.isDraggable = !0), l.isArray(i) ? (this.dataY = i, this.Y = this.interpolationFunctionFromArray("Y")) : this.Y = l.createFunction(i, this.board, t), l.isFunction(e) && l.isArray(i) && (o = l.createFunction(i[0], this.board, ""), n = l.createFunction(i[1], this.board, ""), this.X = function(t) {
        return e(t) * Math.cos(t) + o()
      }, this.Y = function(t) {return e(t) * Math.sin(t) + n()}, this.visProp.curvetype = "polar"), l.exists(r) && (this.minX = l.createFunction(r, this.board, "")), l.exists(s) && (this.maxX = l.createFunction(s, this.board, ""))
    }, notifyParents: function(t) {
      var e, i, r = !1;
      for (e in{xterm: 1, yterm: 1})if (this.hasOwnProperty(e) && this[e].origin) {
        r = !0;
        for (i in this[e].origin.deps)this[e].origin.deps.hasOwnProperty(i) && this[e].origin.deps[i].addChild(this)
      }
      r || h.findDependencies(this, t, this.board)
    }, getLabelAnchor: function() {
      var t, r, s, o = .05 * this.board.canvasWidth, n = .05 * this.board.canvasHeight, h = .95 * this.board.canvasWidth, l = .95 * this.board.canvasHeight;
      switch (this.visProp.label.position) {
        case"ulft":
          r = o, s = n;
          break;
        case"llft":
          r = o, s = l;
          break;
        case"rt":
          r = h, s = .5 * l;
          break;
        case"lrt":
          r = h, s = l;
          break;
        case"urt":
          r = h, s = n;
          break;
        case"top":
          r = .5 * h, s = n;
          break;
        case"bot":
          r = .5 * h, s = l;
          break;
        default:
          r = o, s = .5 * l
      }
      return t = new i(e.COORDS_BY_SCREEN, [r, s], this.board, !1), a.projectCoordsToCurve(t.usrCoords[1], t.usrCoords[2], 0, this, this.board)[0]
    }, cloneToBackground: function() {
      var t, i = {id: this.id + "T" + this.numTraces, elementClass: e.OBJECT_CLASS_CURVE, points: this.points.slice(0), bezierDegree: this.bezierDegree, numberPoints: this.numberPoints, board: this.board, visProp: l.deepCopy(this.visProp, this.visProp.traceattributes, !0)};
      return i.visProp.layer = this.board.options.layer.trace, i.visProp.curvetype = this.visProp.curvetype, this.numTraces++, l.clearVisPropOld(i), t = this.board.renderer.enhancedRendering, this.board.renderer.enhancedRendering = !0, this.board.renderer.drawCurve(i), this.board.renderer.enhancedRendering = t, this.traces[i.id] = i.rendNode, this
    }, bounds: function() {
      var t, e = 1 / 0, i = -1 / 0, r = 1 / 0, s = -1 / 0, o = this.points.length;
      if (3 === this.bezierDegree) {
        for (t = 0; o > t; t++)this.points[t].X = l.bind(function() {return this.usrCoords[1]}, this.points[t]), this.points[t].Y = l.bind(function() {return this.usrCoords[2]}, this.points[t]);
        var a = n.bezier(this.points), h = a[3]();
        return e = n.fminbr(function(t) {return a[0](t)}, [0, h]), i = n.fminbr(function(t) {return-a[0](t)}, [0, h]), r = n.fminbr(function(t) {return a[1](t)}, [0, h]), s = n.fminbr(function(t) {return-a[1](t)}, [0, h]), e = a[0](e), i = a[0](i), r = a[1](r), s = a[1](s), [e, s, i, r]
      }
      for (t = 0; o > t; t++)e > this.points[t].usrCoords[1] && (e = this.points[t].usrCoords[1]), this.points[t].usrCoords[1] > i && (i = this.points[t].usrCoords[1]), r > this.points[t].usrCoords[2] && (r = this.points[t].usrCoords[2]), this.points[t].usrCoords[2] > s && (s = this.points[t].usrCoords[2]);
      return[e, s, i, r]
    }}), t.createCurve = function(e, i, r) {
      var s = l.copyAttributes(r, e.options, "curve");
      return new t.Curve(e, ["x"].concat(i), s)
    }, t.registerElement("curve", t.createCurve), t.createFunctiongraph = function(e, i, r) {
      var s, o = ["x", "x"].concat(i);
      return s = l.copyAttributes(r, e.options, "curve"), s.curvetype = "functiongraph", new t.Curve(e, o, s)
    }, t.registerElement("functiongraph", t.createFunctiongraph), t.registerElement("plot", t.createFunctiongraph), t.createSpline = function(t, e, i) {
      var r;
      return r = function() {
        var t, i = [], r = [];
        return function(s, o) {
          var a, h, c;
          if (!o) {
            if (i = [], r = [], 2 === e.length && l.isArray(e[0]) && l.isArray(e[1]) && e[0].length === e[1].length)for (a = 0; e[0].length > a; a++)"function" == typeof e[0][a] ? i.push(e[0][a]()) : i.push(e[0][a]), "function" == typeof e[1][a] ? r.push(e[1][a]()) : r.push(e[1][a]); else for (a = 0; e.length > a; a++)if (l.isPoint(e[a]))i.push(e[a].X()), r.push(e[a].Y()); else if (l.isArray(e[a]) && 2 === e[a].length)for (h = 0; e.length > h; h++)"function" == typeof e[h][0] ? i.push(e[h][0]()) : i.push(e[h][0]), "function" == typeof e[h][1] ? r.push(e[h][1]()) : r.push(e[h][1]); else l.isFunction(e[a]) && 2 === e[a]().length && (c = e[a](), i.push(c[0]), r.push(c[1]));
            t = n.splineDef(i, r)
          }
          return n.splineEval(s, i, r, t)
        }
      }, t.create("curve", ["x", r()], i)
    }, t.registerElement("spline", t.createSpline), t.createRiemannsum = function(t, e, i) {
      var r, s, o, a, h, c;
      if (c = l.copyAttributes(i, t.options, "riemannsum"), c.curvetype = "plot", o = e[0], r = l.createFunction(e[1], t, ""), !l.exists(r))throw Error("JSXGraph: JXG.createRiemannsum: argument '2' n has to be number or function.\nPossible parent types: [function,n:number|function,type,start:number|function,end:number|function]");
      if (s = l.createFunction(e[2], t, "", !1), !l.exists(s))throw Error("JSXGraph: JXG.createRiemannsum: argument 3 'type' has to be string or function.\nPossible parent types: [function,n:number|function,type,start:number|function,end:number|function]");
      return a = [
        [0],
        [0]
      ].concat(e.slice(3)), h = t.create("curve", a, c), h.sum = 0, h.Value = function() {return this.sum}, h.updateDataArray = function() {
        var t = n.riemann(o, r(), s(), this.minX(), this.maxX());
        this.dataX = t[0], this.dataY = t[1], this.sum = t[2]
      }, h
    }, t.registerElement("riemannsum", t.createRiemannsum), t.createTracecurve = function(t, i, r) {
      var s, o, n, a;
      if (2 !== i.length)throw Error("JSXGraph: Can't create trace curve with given parent'\nPossible parent types: [glider, point]");
      if (o = t.select(i[0]), n = t.select(i[1]), o.type !== e.OBJECT_TYPE_GLIDER || !l.isPoint(n))throw Error("JSXGraph: Can't create trace curve with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [glider, point]");
      return a = l.copyAttributes(r, t.options, "tracecurve"), a.curvetype = "plot", s = t.create("curve", [
        [0],
        [0]
      ], a), s.updateDataArray = function() {
        var t, i, r, s, h, l, c, d, u, p = a.numberpoints, f = o.position, m = o.slideObject, b = m.minX(), g = m.maxX();
        for (i = (g - b) / p, this.dataX = [], this.dataY = [], m.elementClass !== e.OBJECT_CLASS_CURVE && p++, t = 0; p > t; t++) {
          r = b + t * i, l = m.X(r) / m.Z(r), c = m.Y(r) / m.Z(r), o.setPositionDirectly(e.COORDS_BY_USER, [l, c]), d = !1;
          for (s in this.board.objects)if (this.board.objects.hasOwnProperty(s) && (h = this.board.objects[s], h === o && (d = !0), d && h.needsRegularUpdate && (u = h.visProp.trace, h.visProp.trace = !1, h.needsUpdate = !0, h.update(!0), h.visProp.trace = u, h === n)))break;
          this.dataX[t] = n.X(), this.dataY[t] = n.Y()
        }
        o.position = f, d = !1;
        for (s in this.board.objects)if (this.board.objects.hasOwnProperty(s) && (h = this.board.objects[s], h === o && (d = !0), d && h.needsRegularUpdate && (u = h.visProp.trace, h.visProp.trace = !1, h.needsUpdate = !0, h.update(!0), h.visProp.trace = u, h === n)))break
      }, s
    }, t.registerElement("tracecurve", t.createTracecurve), t.createStepfunction = function(t, e, i) {
      var r, s;
      if (2 !== e.length)throw Error("JSXGraph: Can't create step function with given parent'\nPossible parent types: [array, array|function]");
      return s = l.copyAttributes(i, t.options, "stepfunction"), r = t.create("curve", e, s), r.updateDataArray = function() {
        var t, e = 0, i = this.xterm.length;
        if (this.dataX = [], this.dataY = [], 0 !== i)for (this.dataX[e] = this.xterm[0], this.dataY[e] = this.yterm[0], ++e, t = 1; i > t; ++t)this.dataX[e] = this.xterm[t], this.dataY[e] = this.dataY[e - 1], ++e, this.dataX[e] = this.xterm[t], this.dataY[e] = this.yterm[t], ++e
      }, r
    }, t.registerElement("stepfunction", t.createStepfunction), {Curve: t.Curve, createCurve: t.createCurve, createFunctiongraph: t.createFunctiongraph, createPlot: t.createPlot, createSpline: t.createSpline, createRiemannsum: t.createRiemannsum, createTracecurve: t.createTracecurve, createStepfunction: t.createStepfunction}
  }), define("element/composition", ["jxg", "math/math", "math/geometry", "math/numerics", "math/statistics", "base/coords", "utils/type", "base/constants", "base/point", "base/line", "base/circle", "base/transformation", "base/composition", "base/curve", "base/text"], function(t, e, i, r, s, o, n, a, h, l, c, d, u) {
    return t.createOrthogonalProjection = function(t, e, r) {
      var s, o, h, l;
      if (e[0] = t.select(e[0]), e[1] = t.select(e[1]), n.isPointType(e[0], t) && e[1].elementClass === a.OBJECT_CLASS_LINE)o = n.providePoints(t, [e[0]], r, "point")[0], s = e[1]; else {
        if (!n.isPointType(e[1], t) || e[0].elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create perpendicular point with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [point,line]");
        o = n.providePoints(t, [e[1]], r, "point")[0], s = e[0]
      }
      return l = n.copyAttributes(r, t.options, "orthogonalprojection"), h = t.create("point", [function() {return i.projectPointToLine(o, s, t)}], l), o.addChild(h), s.addChild(h), h.elType = "orthogonalprojection", h.parents = [o.id, h.id], h.update(), h.generatePolynomial = function() {
        var t = s.point1.symbolic.x, e = s.point1.symbolic.y, i = s.point2.symbolic.x, r = s.point2.symbolic.y, n = o.symbolic.x, a = o.symbolic.y, l = h.symbolic.x, c = h.symbolic.y, d = "(" + e + ")*(" + l + ")-(" + e + ")*(" + i + ")+(" + c + ")*(" + i + ")-(" + t + ")*(" + c + ")+(" + t + ")*(" + r + ")-(" + l + ")*(" + r + ")", u = "(" + a + ")*(" + e + ")-(" + a + ")*(" + r + ")-(" + c + ")*(" + e + ")+(" + c + ")*(" + r + ")+(" + n + ")*(" + t + ")-(" + n + ")*(" + i + ")-(" + l + ")*(" + t + ")+(" + l + ")*(" + i + ")";
        return[d, u]
      }, h
    }, t.createPerpendicular = function(t, e, i) {
      var r, s, o, h;
      if (e[0] = t.select(e[0]), e[1] = t.select(e[1]), n.isPointType(e[0], t) && e[1].elementClass === a.OBJECT_CLASS_LINE)s = e[1], r = n.providePoints(t, [e[0]], i, "point")[0]; else {
        if (!n.isPointType(e[1], t) || e[0].elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create perpendicular with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [line,point]");
        s = e[0], r = n.providePoints(t, [e[1]], i, "point")[0]
      }
      return h = n.copyAttributes(i, t.options, "perpendicular"), o = l.createLine(t, [function() {return s.stdform[2] * r.X() - s.stdform[1] * r.Y()}, function() {return-s.stdform[2] * r.Z()}, function() {return s.stdform[1] * r.Z()}], h), o.elType = "perpendicular", o.parents = [s.id, r.id], o
    }, t.createPerpendicularPoint = function(t, e, r) {
      var s, o, h;
      if (e[0] = t.select(e[0]), e[1] = t.select(e[1]), n.isPointType(e[0], t) && e[1].elementClass === a.OBJECT_CLASS_LINE)o = n.providePoints(t, [e[0]], r, "point")[0], s = e[1]; else {
        if (!n.isPointType(e[1], t) || e[0].elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create perpendicular point with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [point,line]");
        o = n.providePoints(t, [e[1]], r, "point")[0], s = e[0]
      }
      return h = t.create("point", [function() {return i.perpendicular(s, o, t)[0]}], r), o.addChild(h), s.addChild(h), h.elType = "perpendicularpoint", h.parents = [o.id, s.id], h.update(), h.generatePolynomial = function() {
        var t = s.point1.symbolic.x, e = s.point1.symbolic.y, i = s.point2.symbolic.x, r = s.point2.symbolic.y, n = o.symbolic.x, a = o.symbolic.y, l = h.symbolic.x, c = h.symbolic.y, d = "(" + e + ")*(" + l + ")-(" + e + ")*(" + i + ")+(" + c + ")*(" + i + ")-(" + t + ")*(" + c + ")+(" + t + ")*(" + r + ")-(" + l + ")*(" + r + ")", u = "(" + a + ")*(" + e + ")-(" + a + ")*(" + r + ")-(" + c + ")*(" + e + ")+(" + c + ")*(" + r + ")+(" + n + ")*(" + t + ")-(" + n + ")*(" + i + ")-(" + l + ")*(" + t + ")+(" + l + ")*(" + i + ")";
        return[d, u]
      }, h
    }, t.createPerpendicularSegment = function(e, r, s) {
      var o, h, c, d, u;
      if (r[0] = e.select(r[0]), r[1] = e.select(r[1]), n.isPointType(r[0], e) && r[1].elementClass === a.OBJECT_CLASS_LINE)h = r[1], o = n.providePoints(e, [r[0]], s, "point")[0]; else {
        if (!n.isPointType(r[1], e) || r[0].elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create perpendicular with parent types '" + typeof r[0] + "' and '" + typeof r[1] + "'." + "\nPossible parent types: [line,point]");
        h = r[0], o = n.providePoints(e, [r[1]], s, "point")[0]
      }
      return u = n.copyAttributes(s, e.options, "perpendicularsegment", "point"), d = t.createPerpendicularPoint(e, [h, o], u), d.dump = !1, n.exists(s.layer) || (s.layer = e.options.layer.line), u = n.copyAttributes(s, e.options, "perpendicularsegment"), c = l.createLine(e, [function() {return i.perpendicular(h, o, e)[1] ? [d, o] : [o, d]}], u), c.point = d, c.elType = "perpendicularsegment", c.parents = [o.id, h.id], c.subs = {point: d}, c
    }, t.createMidpoint = function(t, i, r) {
      var s, o, h, l;
      for (l = 0; i.length > l; ++l)i[l] = t.select(i[l]);
      if (2 === i.length && n.isPointType(i[0], t) && n.isPointType(i[1], t))i = n.providePoints(t, i, r, "point"), s = i[0], o = i[1]; else {
        if (1 !== i.length || i[0].elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create midpoint.\nPossible parent types: [point,point], [line]");
        s = i[0].point1, o = i[0].point2
      }
      return h = t.create("point", [function() {
        var t = s.coords.usrCoords[1] + o.coords.usrCoords[1];
        return isNaN(t) || Math.abs(s.coords.usrCoords[0]) < e.eps || Math.abs(o.coords.usrCoords[0]) < e.eps ? 0 / 0 : .5 * t
      }, function() {
        var t = s.coords.usrCoords[2] + o.coords.usrCoords[2];
        return isNaN(t) || Math.abs(s.coords.usrCoords[0]) < e.eps || Math.abs(o.coords.usrCoords[0]) < e.eps ? 0 / 0 : .5 * t
      }], r), s.addChild(h), o.addChild(h), h.elType = "midpoint", h.parents = [s.id, o.id], h.prepareUpdate().update(), h.generatePolynomial = function() {
        var t = s.symbolic.x, e = s.symbolic.y, i = o.symbolic.x, r = o.symbolic.y, n = h.symbolic.x, a = h.symbolic.y, l = "(" + e + ")*(" + n + ")-(" + e + ")*(" + i + ")+(" + a + ")*(" + i + ")-(" + t + ")*(" + a + ")+(" + t + ")*(" + r + ")-(" + n + ")*(" + r + ")", c = "(" + t + ")^2 - 2*(" + t + ")*(" + n + ")+(" + e + ")^2-2*(" + e + ")*(" + a + ")-(" + i + ")^2+2*(" + i + ")*(" + n + ")-(" + r + ")^2+2*(" + r + ")*(" + a + ")";
        return[l, c]
      }, h
    }, t.createParallelPoint = function(t, e, i) {
      var r, s, o, h, l;
      for (l = 0; e.length > l; ++l)e[l] = t.select(e[l]);
      if (3 === e.length && n.isPointType(e[0], t) && n.isPointType(e[1], t) && n.isPointType(e[2], t))e = n.providePoints(t, e, i, "point"), r = e[0], s = e[1], o = e[2]; else if (n.isPointType(e[0], t) && e[1].elementClass === a.OBJECT_CLASS_LINE)o = n.providePoints(t, [e[0]], i, "point")[0], r = e[1].point1, s = e[1].point2; else {
        if (!n.isPointType(e[1], t) || e[0].elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create parallel point with parent types '" + typeof e[0] + "', '" + typeof e[1] + "' and '" + typeof e[2] + "'." + "\nPossible parent types: [line,point], [point,point,point]");
        o = n.providePoints(t, [e[1]], i, "point")[0], r = e[0].point1, s = e[0].point2
      }
      return h = t.create("point", [function() {return o.coords.usrCoords[1] + s.coords.usrCoords[1] - r.coords.usrCoords[1]}, function() {return o.coords.usrCoords[2] + s.coords.usrCoords[2] - r.coords.usrCoords[2]}], i), r.addChild(h), s.addChild(h), o.addChild(h), h.elType = "parallelpoint", h.parents = [r.id, s.id, o.id], h.prepareUpdate().update(), h.generatePolynomial = function() {
        var t = r.symbolic.x, e = r.symbolic.y, i = s.symbolic.x, n = s.symbolic.y, a = o.symbolic.x, l = o.symbolic.y, c = h.symbolic.x, d = h.symbolic.y, u = "(" + n + ")*(" + c + ")-(" + n + ")*(" + a + ")-(" + e + ")*(" + c + ")+(" + e + ")*(" + a + ")-(" + d + ")*(" + i + ")+(" + d + ")*(" + t + ")+(" + l + ")*(" + i + ")-(" + l + ")*(" + t + ")", p = "(" + d + ")*(" + t + ")-(" + d + ")*(" + a + ")-(" + n + ")*(" + t + ")+(" + n + ")*(" + a + ")-(" + c + ")*(" + e + ")+(" + c + ")*(" + l + ")+(" + i + ")*(" + e + ")-(" + i + ")*(" + l + ")";
        return[u, p]
      }, h
    }, t.createParallel = function(t, i, r) {
      var s, o, a, h, l, c;
      for (l = 0; i.length > l; ++l)i[l] = t.select(i[l]);
      return s = null, 3 === i.length ? (i = n.providePoints(t, i, r, "point"), s = i[2], h = function() {return e.crossProduct(i[0].coords.usrCoords, i[1].coords.usrCoords)}) : n.isPointType(i[0], t) ? (s = n.providePoints(t, [i[0]], r, "point")[0], h = function() {return i[1].stdform}) : n.isPointType(i[1], t) && (s = n.providePoints(t, [i[1]], r, "point")[0], h = function() {return i[0].stdform}), n.exists(r.layer) || (r.layer = t.options.layer.line), c = n.copyAttributes(r, t.options, "parallel", "point"), o = t.create("point", [function() {return e.crossProduct([1, 0, 0], h())}], c), o.isDraggable = !0, c = n.copyAttributes(r, t.options, "parallel"), a = t.create("line", [s, o], c), a.elType = "parallel", a.parents = [i[0].id, i[1].id], 3 === i.length && a.parents.push(i[2].id), a.point = o, a
    }, t.createArrowParallel = function(e, i, r) {
      var s;
      try {
        return r.firstArrow = !1, r.lastArrow = !0, s = t.createParallel(e, i, r).setAttribute({straightFirst: !1, straightLast: !1}), s.elType = "arrowparallel", s
      } catch (o) {
        throw Error("JSXGraph: Can't create arrowparallel with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [line,point], [point,point,point]")
      }
    }, t.createNormal = function(t, i, s) {
      var o, h, l, c, d, u, p, f, m;
      for (c = 0; i.length > c; ++c)i[c] = t.select(i[c]);
      if (1 === i.length)o = i[0], h = o.slideObject; else {
        if (2 !== i.length)throw Error("JSXGraph: Can't create normal with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,line], [point,circle], [glider]");
        if (n.isPointType(i[0], t))o = n.providePoints(t, [i[0]], s, "point")[0], h = i[1]; else {
          if (!n.isPointType(i[1], t))throw Error("JSXGraph: Can't create normal with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,line], [point,circle], [glider]");
          h = i[0], o = n.providePoints(t, [i[1]], s, "point")[0]
        }
      }
      if (p = n.copyAttributes(s, t.options, "normal"), h.elementClass === a.OBJECT_CLASS_LINE)m = n.copyAttributes(s, t.options, "normal", "point"), f = t.create("point", [function() {
        var t = e.crossProduct([1, 0, 0], h.stdform);
        return[t[0], -t[2], t[1]]
      }], m), f.isDraggable = !0, l = t.create("line", [o, f], p), l.point = f; else if (h.elementClass === a.OBJECT_CLASS_CIRCLE)l = t.create("line", [h.midpoint, o], p); else if (h.elementClass === a.OBJECT_CLASS_CURVE)"plot" !== h.visProp.curvetype ? (d = h.X, u = h.Y, l = t.create("line", [function() {return-o.X() * r.D(d)(o.position) - o.Y() * r.D(u)(o.position)}, function() {return r.D(d)(o.position)}, function() {return r.D(u)(o.position)}], p)) : l = t.create("line", [function() {
        var t = Math.floor(o.position), e = o.position - t;
        return t === h.numberPoints - 1 && (t -= 1, e = 1), 0 > t ? 1 : (h.Y(t) + e * (h.Y(t + 1) - h.Y(t))) * (h.Y(t) - h.Y(t + 1)) - (h.X(t) + e * (h.X(t + 1) - h.X(t))) * (h.X(t + 1) - h.X(t))
      }, function() {
        var t = Math.floor(o.position);
        return t === h.numberPoints - 1 && (t -= 1), 0 > t ? 0 : h.X(t + 1) - h.X(t)
      }, function() {
        var t = Math.floor(o.position);
        return t === h.numberPoints - 1 && (t -= 1), 0 > t ? 0 : h.Y(t + 1) - h.Y(t)
      }], p); else {
        if (h.type !== a.OBJECT_TYPE_TURTLE)throw Error("JSXGraph: Can't create normal with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,line], [point,circle], [glider]");
        l = t.create("line", [function() {
          var t, e, i = Math.floor(o.position), r = o.position - i;
          for (e = 0; h.objects.length > e; e++)if (t = h.objects[e], t.type === a.OBJECT_TYPE_CURVE) {
            if (t.numberPoints > i)break;
            i -= t.numberPoints
          }
          return i === t.numberPoints - 1 && (i -= 1, r = 1), 0 > i ? 1 : (t.Y(i) + r * (t.Y(i + 1) - t.Y(i))) * (t.Y(i) - t.Y(i + 1)) - (t.X(i) + r * (t.X(i + 1) - t.X(i))) * (t.X(i + 1) - t.X(i))
        }, function() {
          var t, e, i = Math.floor(o.position);
          for (e = 0; h.objects.length > e; e++)if (t = h.objects[e], t.type === a.OBJECT_TYPE_CURVE) {
            if (t.numberPoints > i)break;
            i -= t.numberPoints
          }
          return i === t.numberPoints - 1 && (i -= 1), 0 > i ? 0 : t.X(i + 1) - t.X(i)
        }, function() {
          var t, e, i = Math.floor(o.position);
          for (e = 0; h.objects.length > e; e++)if (t = h.objects[e], t.type === a.OBJECT_TYPE_CURVE) {
            if (t.numberPoints > i)break;
            i -= t.numberPoints
          }
          return i === t.numberPoints - 1 && (i -= 1), 0 > i ? 0 : t.Y(i + 1) - t.Y(i)
        }], p)
      }
      for (l.parents = [], c = 0; i.length > c; c++)l.parents.push(i[c].id);
      return l.elType = "normal", l
    }, t.createBisector = function(t, e, r) {
      var s, o, a, h;
      if (e = n.providePoints(t, e, r, "point"), n.isPoint(e[0]) && n.isPoint(e[1]) && n.isPoint(e[2])) {
        for (h = n.copyAttributes(r, t.options, "bisector", "point"), h.snapToGrid = !1, s = t.create("point", [function() {return i.angleBisector(e[0], e[1], e[2], t)}], h), s.dump = !1, a = 0; 3 > a; a++)e[a].addChild(s);
        return n.exists(r.layer) || (r.layer = t.options.layer.line), h = n.copyAttributes(r, t.options, "bisector"), o = l.createLine(t, [e[1], s], h), o.point = s, o.elType = "bisector", o.parents = [e[0].id, e[1].id, e[2].id], o.subs = {point: s}, o
      }
      throw Error("JSXGraph: Can't create angle bisector with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [point,point,point]")
    }, t.createAngularBisectorsOfTwoLines = function(t, e, i) {
      var r, s, o, h, l = t.select(e[0]), c = t.select(e[1]);
      if (l.elementClass !== a.OBJECT_CLASS_LINE || c.elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create angle bisectors of two lines with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [line,line]");
      return n.exists(i.layer) || (i.layer = t.options.layer.line), o = n.copyAttributes(i, t.options, "bisectorlines", "line1"), r = t.create("line", [function() {
        var t = Math.sqrt(l.stdform[1] * l.stdform[1] + l.stdform[2] * l.stdform[2]), e = Math.sqrt(c.stdform[1] * c.stdform[1] + c.stdform[2] * c.stdform[2]);
        return l.stdform[0] / t - c.stdform[0] / e
      }, function() {
        var t = Math.sqrt(l.stdform[1] * l.stdform[1] + l.stdform[2] * l.stdform[2]), e = Math.sqrt(c.stdform[1] * c.stdform[1] + c.stdform[2] * c.stdform[2]);
        return l.stdform[1] / t - c.stdform[1] / e
      }, function() {
        var t = Math.sqrt(l.stdform[1] * l.stdform[1] + l.stdform[2] * l.stdform[2]), e = Math.sqrt(c.stdform[1] * c.stdform[1] + c.stdform[2] * c.stdform[2]);
        return l.stdform[2] / t - c.stdform[2] / e
      }], o), n.exists(i.layer) || (i.layer = t.options.layer.line), o = n.copyAttributes(i, t.options, "bisectorlines", "line2"), s = t.create("line", [function() {
        var t = Math.sqrt(l.stdform[1] * l.stdform[1] + l.stdform[2] * l.stdform[2]), e = Math.sqrt(c.stdform[1] * c.stdform[1] + c.stdform[2] * c.stdform[2]);
        return l.stdform[0] / t + c.stdform[0] / e
      }, function() {
        var t = Math.sqrt(l.stdform[1] * l.stdform[1] + l.stdform[2] * l.stdform[2]), e = Math.sqrt(c.stdform[1] * c.stdform[1] + c.stdform[2] * c.stdform[2]);
        return l.stdform[1] / t + c.stdform[1] / e
      }, function() {
        var t = Math.sqrt(l.stdform[1] * l.stdform[1] + l.stdform[2] * l.stdform[2]), e = Math.sqrt(c.stdform[1] * c.stdform[1] + c.stdform[2] * c.stdform[2]);
        return l.stdform[2] / t + c.stdform[2] / e
      }], o), h = new u({line1: r, line2: s}), r.dump = !1, s.dump = !1, h.elType = "bisectorlines", h.parents = [l.id, c.id], h.subs = {line1: r, line2: s}, h
    }, t.createCircumcenter = function(t, e, r) {
      var s, o, a, l, c;
      if (e = n.providePoints(t, e, r, "point"), n.isPoint(e[0]) && n.isPoint(e[1]) && n.isPoint(e[2])) {
        for (a = e[0], l = e[1], c = e[2], s = h.createPoint(t, [function() {return i.circumcenter(a, l, c, t)}], r), o = 0; 3 > o; o++)e[o].addChild(s);
        return s.elType = "circumcenter", s.parents = [a.id, l.id, c.id], s.generatePolynomial = function() {
          var t = a.symbolic.x, e = a.symbolic.y, i = l.symbolic.x, r = l.symbolic.y, o = c.symbolic.x, n = c.symbolic.y, h = s.symbolic.x, d = s.symbolic.y, u = ["((", h, ")-(", t, "))^2+((", d, ")-(", e, "))^2-((", h, ")-(", i, "))^2-((", d, ")-(", r, "))^2"].join(""), p = ["((", h, ")-(", t, "))^2+((", d, ")-(", e, "))^2-((", h, ")-(", o, "))^2-((", d, ")-(", n, "))^2"].join("");
          return[u, p]
        }, s
      }
      throw Error("JSXGraph: Can't create circumcircle midpoint with parent types '" + typeof e[0] + "', '" + typeof e[1] + "' and '" + typeof e[2] + "'." + "\nPossible parent types: [point,point,point]")
    }, t.createIncenter = function(t, e, i) {
      var r, s, h, l;
      if (e = n.providePoints(t, e, i, "point"), !(e.length >= 3 && n.isPoint(e[0]) && n.isPoint(e[1]) && n.isPoint(e[2])))throw Error("JSXGraph: Can't create incenter with parent types '" + typeof e[0] + "', '" + typeof e[1] + "' and '" + typeof e[2] + "'." + "\nPossible parent types: [point,point,point]");
      return s = e[0], h = e[1], l = e[2], r = t.create("point", [function() {
        var e, i, r;
        return e = Math.sqrt((h.X() - l.X()) * (h.X() - l.X()) + (h.Y() - l.Y()) * (h.Y() - l.Y())), i = Math.sqrt((s.X() - l.X()) * (s.X() - l.X()) + (s.Y() - l.Y()) * (s.Y() - l.Y())), r = Math.sqrt((h.X() - s.X()) * (h.X() - s.X()) + (h.Y() - s.Y()) * (h.Y() - s.Y())), new o(a.COORDS_BY_USER, [(e * s.X() + i * h.X() + r * l.X()) / (e + i + r), (e * s.Y() + i * h.Y() + r * l.Y()) / (e + i + r)], t)
      }], i), r.elType = "incenter", r.parents = [e[0].id, e[1].id, e[2].id], r
    }, t.createCircumcircle = function(e, i, r) {
      var s, o, a;
      if (i = n.providePoints(e, i, r, "point"), i === !1)throw Error("JSXGraph: Can't create circumcircle with parent types '" + typeof i[0] + "', '" + typeof i[1] + "' and '" + typeof i[2] + "'." + "\nPossible parent types: [point,point,point]");
      try {
        a = n.copyAttributes(r, e.options, "circumcircle", "center"), s = t.createCircumcenter(e, i, a), s.dump = !1, n.exists(r.layer) || (r.layer = e.options.layer.circle), a = n.copyAttributes(r, e.options, "circumcircle"), o = c.createCircle(e, [s, i[0]], a), o.elType = "circumcircle", o.parents = [i[0].id, i[1].id, i[2].id], o.subs = {center: s}
      } catch (h) {
        throw Error("JSXGraph: Can't create circumcircle with parent types '" + typeof i[0] + "', '" + typeof i[1] + "' and '" + typeof i[2] + "'." + "\nPossible parent types: [point,point,point]")
      }
      return o
    }, t.createIncircle = function(e, i, r) {
      var s, o, a;
      if (i = n.providePoints(e, i, r, "point"), i === !1)throw Error("JSXGraph: Can't create circumcircle with parent types '" + typeof i[0] + "', '" + typeof i[1] + "' and '" + typeof i[2] + "'." + "\nPossible parent types: [point,point,point]");
      try {
        a = n.copyAttributes(r, e.options, "incircle", "center"), s = t.createIncenter(e, i, a), s.dump = !1, n.exists(r.layer) || (r.layer = e.options.layer.circle), a = n.copyAttributes(r, e.options, "incircle"), o = c.createCircle(e, [s, function() {
          var t = Math.sqrt((i[1].X() - i[2].X()) * (i[1].X() - i[2].X()) + (i[1].Y() - i[2].Y()) * (i[1].Y() - i[2].Y())), e = Math.sqrt((i[0].X() - i[2].X()) * (i[0].X() - i[2].X()) + (i[0].Y() - i[2].Y()) * (i[0].Y() - i[2].Y())), r = Math.sqrt((i[1].X() - i[0].X()) * (i[1].X() - i[0].X()) + (i[1].Y() - i[0].Y()) * (i[1].Y() - i[0].Y())), s = (t + e + r) / 2;
          return Math.sqrt((s - t) * (s - e) * (s - r) / s)
        }], a), o.elType = "incircle", o.parents = [i[0].id, i[1].id, i[2].id], o.center = s, o.subs = {center: s}
      } catch (h) {
        throw Error("JSXGraph: Can't create circumcircle with parent types '" + typeof i[0] + "', '" + typeof i[1] + "' and '" + typeof i[2] + "'." + "\nPossible parent types: [point,point,point]")
      }
      return o
    }, t.createReflection = function(t, e, i) {
      var r, s, o, l, c;
      for (c = 0; e.length > c; ++c)e[c] = t.select(e[c]);
      if (n.isPoint(e[0]) && e[1].elementClass === a.OBJECT_CLASS_LINE)s = n.providePoints(t, [e[0]], i, "point")[0], r = e[1]; else {
        if (!n.isPoint(e[1]) || e[0].elementClass !== a.OBJECT_CLASS_LINE)throw Error("JSXGraph: Can't create reflection point with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [line,point]");
        s = n.providePoints(t, [e[1]], i, "point")[0], r = e[0]
      }
      return l = d.createTransform(t, [r], {type: "reflect"}), o = h.createPoint(t, [s, l], i), s.addChild(o), r.addChild(o), o.elType = "reflection", o.parents = [e[0].id, e[1].id], o.prepareUpdate().update(), o.generatePolynomial = function() {
        var t = r.point1.symbolic.x, e = r.point1.symbolic.y, i = r.point2.symbolic.x, n = r.point2.symbolic.y, a = s.symbolic.x, h = s.symbolic.y, l = o.symbolic.x, c = o.symbolic.y, d = ["((", c, ")-(", h, "))*((", e, ")-(", n, "))+((", t, ")-(", i, "))*((", l, ")-(", a, "))"].join(""), u = ["((", l, ")-(", t, "))^2+((", c, ")-(", e, "))^2-((", a, ")-(", t, "))^2-((", h, ")-(", e, "))^2"].join("");
        return[d, u]
      }, o
    }, t.createMirrorPoint = function(t, e, r) {
      var s, o;
      if (e = n.providePoints(t, e, r, "point"), !n.isPoint(e[0]) || !n.isPoint(e[1]))throw Error("JSXGraph: Can't create mirror point with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [point,point]");
      for (s = h.createPoint(t, [function() {return i.rotation(e[0], e[1], Math.PI, t)}], r), o = 0; 2 > o; o++)e[o].addChild(s);
      return s.elType = "mirrorpoint", s.parents = [e[0].id, e[1].id], s.prepareUpdate().update(), s
    }, t.createIntegral = function(e, i, s) {
      var h, l, c, d, u, p, f, m, b, g, v, y, C, P, _ = null;
      if (n.isArray(i[0]) && i[1].elementClass === a.OBJECT_CLASS_CURVE)h = i[0], l = i[1]; else {
        if (!n.isArray(i[1]) || i[0].elementClass !== a.OBJECT_CLASS_CURVE)throw Error("JSXGraph: Can't create integral with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [[number|function,number|function],curve]");
        h = i[1], l = i[0]
      }
      return c = n.copyAttributes(s, e.options, "integral"), c.withLabel = !1, P = e.create("curve", [
        [0],
        [0]
      ], c), d = h[0], u = h[1], n.isFunction(d) ? (p = d, f = function() {return l.Y(p())}, d = p()) : (p = d, f = l.Y(d)), n.isFunction(u) ? (m = u, b = function() {return l.Y(m())}, u = m()) : (m = u, b = l.Y(u)), c = n.copyAttributes(s, e.options, "integral", "curveLeft"), g = e.create("glider", [p, f, l], c), n.isFunction(p) && g.hideElement(), c = n.copyAttributes(s, e.options, "integral", "baseLeft"), v = e.create("point", [function() {return"y" === P.visProp.axis ? 0 : g.X()}, function() {return"y" === P.visProp.axis ? g.Y() : 0}], c), c = n.copyAttributes(s, e.options, "integral", "curveRight"), y = e.create("glider", [m, b, l], c), n.isFunction(m) && y.hideElement(), c = n.copyAttributes(s, e.options, "integral", "baseRight"), C = e.create("point", [function() {return"y" === P.visProp.axis ? 0 : y.X()}, function() {return"y" === P.visProp.axis ? y.Y() : 0}], c), c = n.copyAttributes(s, e.options, "integral"), c.withlabel !== !1 && "y" !== c.axis && (c = n.copyAttributes(s, e.options, "integral", "label"), c = n.copyAttributes(c, e.options, "label"), _ = e.create("text", [function() {
        var t = new o(a.COORDS_BY_SCREEN, [this.visProp.offset[0] + this.board.origin.scrCoords[1], 0], this.board, !1), e = this.board.getBoundingBox(), i = .1 * (e[2] - e[0]), r = y.X();
        return e[0] > r ? r = e[0] + i : r > e[2] && (r = e[2] - i), r + t.usrCoords[1]
      }, function() {
        var t = new o(a.COORDS_BY_SCREEN, [0, this.visProp.offset[1] + this.board.origin.scrCoords[2]], this.board, !1), e = this.board.getBoundingBox(), i = .1 * (e[1] - e[3]), r = y.Y();
        return r > e[1] ? r = e[1] - i : e[3] > r && (r = e[3] + i), r + t.usrCoords[2]
      }, function() {
        var t = r.NewtonCotes([v.X(), C.X()], l.Y);
        return"&int; = " + t.toFixed(4)
      }], c), _.dump = !1, g.addChild(_), y.addChild(_)), g.dump = !1, v.dump = !1, y.dump = !1, C.dump = !1, P.elType = "integral", P.parents = [l.id, h], P.subs = {curveLeft: g, baseLeft: v, curveRight: y, baseRight: C}, c.withLabel && (P.subs.label = _), P.Value = function() {return r.I([v.X(), C.X()], l.Y)}, P.updateDataArray = function() {
        var t, e, i, r, s, o, n, a, h;
        if ("y" === this.visProp.axis) {
          for (g.Y() < y.Y() ? (o = g.X(), a = g.Y(), n = y.X(), h = y.Y()) : (o = y.X(), a = y.Y(), n = g.X(), h = g.Y()), r = Math.min(o, n), s = Math.max(o, n), t = [0, o], e = [a, a], i = 0; l.numberPoints > i; i++)l.points[i].usrCoords[2] >= a && l.points[i].usrCoords[1] >= r && h >= l.points[i].usrCoords[2] && s >= l.points[i].usrCoords[1] && (t.push(l.points[i].usrCoords[1]), e.push(l.points[i].usrCoords[2]));
          t.push(n), e.push(h), t.push(0), e.push(h), t.push(0), e.push(a)
        } else {
          for (v.X() < C.X() ? (r = v.X(), s = C.X()) : (r = C.X(), s = v.X()), t = [r, r], e = [0, l.Y(r)], i = 0; l.numberPoints > i; i++)l.points[i].usrCoords[1] >= r && s >= l.points[i].usrCoords[1] && (t.push(l.points[i].usrCoords[1]), e.push(l.points[i].usrCoords[2]));
          t.push(s), e.push(l.Y(s)), t.push(s), e.push(0), t.push(r), e.push(0)
        }
        this.dataX = t, this.dataY = e
      }, g.addChild(P), y.addChild(P), v.addChild(P), C.addChild(P), P.baseLeft = v, P.baseRight = C, P.curveLeft = g, P.curveRight = y, P.methodMap = t.deepCopy(P.methodMap, {curveLeft: "curveLeft", baseLeft: "baseLeft", curveRight: "curveRight", baseRight: "baseRight", Value: "Value"}), P.label = _, P
    }, t.createGrid = function(t, e, i) {
      var r, s;
      return s = n.copyAttributes(i, t.options, "grid"), r = t.create("curve", [
        [null],
        [null]
      ], s), r.elType = "grid", r.parents = [], r.type = a.OBJECT_TYPE_GRID, r.updateDataArray = function() {
        var e, i, s, h, l, c = this.visProp.gridx, d = this.visProp.gridy;
        for (h = n.isArray(this.visProp.topleft) ? new o(this.visProp.tltype || a.COORDS_BY_USER, this.visProp.topleft, t) : new o(a.COORDS_BY_SCREEN, [0, 0], t), l = n.isArray(this.visProp.bottomright) ? new o(this.visProp.brtype || a.COORDS_BY_USER, this.visProp.bottomright, t) : new o(a.COORDS_BY_SCREEN, [t.canvasWidth, t.canvasHeight], t), t.options.grid.hasGrid = !0, h.setCoordinates(a.COORDS_BY_USER, [Math.floor(h.usrCoords[1] / c) * c, Math.ceil(h.usrCoords[2] / d) * d]), l.setCoordinates(a.COORDS_BY_USER, [Math.ceil(l.usrCoords[1] / c) * c, Math.floor(l.usrCoords[2] / d) * d]), r.dataX = [], r.dataY = [], e = h.usrCoords[2], i = l.usrCoords[2], h.usrCoords[2] < l.usrCoords[2] && (e = l.usrCoords[2], i = h.usrCoords[2]), s = e; s > i - d; s -= d)r.dataX.push(h.usrCoords[1], l.usrCoords[1], 0 / 0), r.dataY.push(s, s, 0 / 0);
        for (e = h.usrCoords[1], i = l.usrCoords[1], h.usrCoords[1] > l.usrCoords[1] && (e = l.usrCoords[1], i = h.usrCoords[1]), s = e; i + c > s; s += c)r.dataX.push(s, s, 0 / 0), r.dataY.push(h.usrCoords[2], l.usrCoords[2], 0 / 0)
      }, r.hasPoint = function() {return!1}, t.grids.push(r), r
    }, t.createInequality = function(t, r, o) {
      var h, l, c;
      if (c = n.copyAttributes(o, t.options, "inequality"), r[0].elementClass === a.OBJECT_CLASS_LINE)l = t.create("curve", [
        [],
        []
      ], c), l.hasPoint = function() {return!1}, l.updateDataArray = function() {
        var o, n, h, l = t.getBoundingBox(), d = c.inverse ? -1 : 1, u = 1.5, p = u * Math.max(l[2] - l[0], l[1] - l[3]), f = {coords: {usrCoords: [1, (l[0] + l[2]) / 2, c.inverse ? l[1] : l[3]]}}, m = r[0].stdform.slice(1), b = m;
        m[1] > 0 && (m = s.multiply(m, -1), b = m), h = u * Math.max(i.perpendicular(r[0], f, t)[0].distance(a.COORDS_BY_USER, f.coords), p), h *= d, f = {coords: {usrCoords: [1, (l[0] + l[2]) / 2, (l[1] + l[3]) / 2]}}, f = Math.abs(e.innerProduct(f.coords.usrCoords, r[0].stdform, 3)) >= e.eps ? i.perpendicular(r[0], f, t)[0].usrCoords : f.coords.usrCoords, o = [1, f[1] + m[1] * p, f[2] - m[0] * p], n = [1, f[1] - b[1] * p, f[2] + b[0] * p], this.dataX = [o[1], o[1] + m[0] * h, n[1] + b[0] * h, n[1], o[1]], this.dataY = [o[2], o[2] + m[1] * h, n[2] + b[1] * h, n[2], o[2]]
      }; else if (h = n.createFunction(r[0]), !n.exists(h))throw Error("JSXGraph: Can't create area with the given parents.\nPossible parent types: [line], [function]");
      return l
    }, t.registerElement("arrowparallel", t.createArrowParallel), t.registerElement("bisector", t.createBisector), t.registerElement("bisectorlines", t.createAngularBisectorsOfTwoLines), t.registerElement("circumcircle", t.createCircumcircle), t.registerElement("circumcirclemidpoint", t.createCircumcenter), t.registerElement("circumcenter", t.createCircumcenter), t.registerElement("incenter", t.createIncenter), t.registerElement("incircle", t.createIncircle), t.registerElement("integral", t.createIntegral), t.registerElement("midpoint", t.createMidpoint), t.registerElement("mirrorpoint", t.createMirrorPoint), t.registerElement("normal", t.createNormal), t.registerElement("orthogonalprojection", t.createOrthogonalProjection), t.registerElement("parallel", t.createParallel), t.registerElement("parallelpoint", t.createParallelPoint), t.registerElement("perpendicular", t.createPerpendicular), t.registerElement("perpendicularpoint", t.createPerpendicularPoint), t.registerElement("perpendicularsegment", t.createPerpendicularSegment), t.registerElement("reflection", t.createReflection), t.registerElement("grid", t.createGrid), t.registerElement("inequality", t.createInequality), {createArrowParallel: t.createArrowParallel, createBisector: t.createBisector, createAngularBisectorOfTwoLines: t.createAngularBisectorsOfTwoLines, createCircumcircle: t.createCircumcircle, createCircumcenter: t.createCircumcenter, createIncenter: t.createIncenter, createIncircle: t.createIncircle, createIntegral: t.createIntegral, createMidpoint: t.createMidpoint, createMirrorPoint: t.createMirrorPoint, createNormal: t.createNormal, createOrthogonalProjection: t.createOrthogonalProjection, createParallel: t.createParallel, createParallelPoint: t.createParallelPoint, createPerpendicular: t.createPerpendicular, createPerpendicularPoint: t.createPerpendicularPoint, createPerpendicularSegmen: t.createPerpendicularSegment, createReflection: t.createReflection, createGrid: t.createGrid, createInequality: t.createInequality}
  }), define("base/board", ["jxg", "base/constants", "base/coords", "options", "math/numerics", "math/math", "math/geometry", "math/complex", "math/statistics", "parser/jessiecode", "parser/geonext", "utils/color", "utils/type", "utils/event", "utils/env", "base/transformation", "base/point", "base/line", "base/text", "element/composition", "base/composition"], function(t, e, i, r, s, o, n, a, h, l, c, d, u, p, f, m, b, g, v, y, C) {
    return t.Board = function(t, i, s, o, n, a, h, c, d, m, b) {
      if (this.BOARD_MODE_NONE = 0, this.BOARD_MODE_DRAG = 1, this.BOARD_MODE_MOVE_ORIGIN = 2, this.BOARD_QUALITY_LOW = 1, this.BOARD_QUALITY_HIGH = 2, this.BOARD_MODE_ZOOM = 17, u.exists(b.document) && b.document !== !1 ? this.document = b.document : "object" == typeof document && (this.document = document), this.container = t, this.containerObj = f.isBrowser ? this.document.getElementById(this.container) : null, f.isBrowser && null === this.containerObj)throw Error("\nJSXGraph: HTML container element '" + t + "' not found.");
      this.renderer = i, this.grids = [], this.options = u.deepCopy(r), this.attr = b, this.dimension = 2, this.jc = new l, this.jc.use(this), this.origin = {}, this.origin.usrCoords = [1, 0, 0], this.origin.scrCoords = [1, o[0], o[1]], this.zoomX = n, this.zoomY = a, this.unitX = h * this.zoomX, this.unitY = c * this.zoomY, this.keepaspectratio = !1, this.canvasWidth = d, this.canvasHeight = m, this.id = u.exists(s) && "" !== s && f.isBrowser && !u.exists(this.document.getElementById(s)) ? s : this.generateId(), p.eventify(this), this.hooks = [], this.dependentBoards = [], this.inUpdate = !1, this.objects = {}, this.objectsList = [], this.groups = {}, this.animationObjects = {}, this.highlightedObjects = {}, this.numObjects = 0, this.elementsByName = {}, this.mode = this.BOARD_MODE_NONE, this.updateQuality = this.BOARD_QUALITY_HIGH, this.isSuspendedRedraw = !1, this.calculateSnapSizes(), this.drag_dx = 0, this.drag_dy = 0, this.drag_position = [0, 0], this.mouse = {}, this.touches = [], this.xmlString = "", this.cPos = [], this.touchMoveLast = 0, this.positionAccessLast = 0, this.downObjects = [], this.attr.showcopyright && this.renderer.displayCopyright(e.licenseText, parseInt(this.options.text.fontSize, 10)), this.needsFullUpdate = !1, this.reducedUpdate = !1, this.currentCBDef = "none", this.geonextCompatibilityMode = !1, this.options.text.useASCIIMathML && translateASCIIMath ? init() : this.options.text.useASCIIMathML = !1, this.hasMouseHandlers = !1, this.hasTouchHandlers = !1, this.hasPointerHandlers = !1, this.hasGestureHandlers = !1, this.hasMouseUp = !1, this.hasTouchEnd = !1, this.hasPointerUp = !1, this._drag_offset = [0, 0], this.attr.registerevents && this.addEventHandlers(), this.methodMap = {update: "update", fullUpdate: "fullUpdate", on: "on", off: "off", trigger: "trigger", setView: "setBoundingBox", setBoundingBox: "setBoundingBox", migratePoint: "migratePoint", colorblind: "emulateColorblindness", suspendUpdate: "suspendUpdate", unsuspendUpdate: "unsuspendUpdate", clearTraces: "clearTraces", left: "clickLeftArrow", right: "clickRightArrow", up: "clickUpArrow", down: "clickDownArrow", zoomIn: "zoomIn", zoomOut: "zoomOut", zoom100: "zoom100", zoomElements: "zoomElements", remove: "removeObject", removeObject: "removeObject"}
    }, t.extend(t.Board.prototype, {generateName: function(t) {
      var i, r, s = this.attr.maxnamelength, o = "", n = "", a = [], h = "";
      if (t.type === e.OBJECT_TYPE_TICKS)return"";
      for (i = u.isPoint(t) ? ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] : t.type === e.OBJECT_TYPE_ANGLE ? ["", "&alpha;", "&beta;", "&gamma;", "&delta;", "&epsilon;", "&zeta;", "&eta;", "&theta;", "&iota;", "&kappa;", "&lambda;", "&mu;", "&nu;", "&xi;", "&omicron;", "&pi;", "&rho;", "&sigma;", "&tau;", "&upsilon;", "&phi;", "&chi;", "&psi;", "&omega;"] : ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], u.isPoint(t) || t.elementClass === e.OBJECT_CLASS_LINE || t.type === e.OBJECT_TYPE_ANGLE || (o = t.type === e.OBJECT_TYPE_POLYGON ? "P_{" : t.elementClass === e.OBJECT_CLASS_CIRCLE ? "k_{" : t.elementClass === e.OBJECT_CLASS_TEXT ? "t_{" : "s_{", n = "}"), r = 0; s > r; r++)a[r] = 0;
      for (; a[s - 1] < i.length;) {
        for (a[0] = 1; a[0] < i.length; a[0]++) {
          for (h = o, r = s; r > 0; r--)h += i[a[r - 1]];
          if (!u.exists(this.elementsByName[h + n]))return h + n
        }
        for (a[0] = i.length, r = 1; s > r; r++)a[r - 1] === i.length && (a[r - 1] = 1, a[r] += 1)
      }
      return""
    }, generateId: function() {
      for (var e = 1; u.exists(t.boards["jxgBoard" + e]);)e = Math.round(65535 * Math.random());
      return"jxgBoard" + e
    }, setId: function(t, e) {
      var i = this.numObjects, r = t.id;
      return this.numObjects += 1, "" !== r && u.exists(r) || (r = this.id + e + i), t.id = r, this.objects[r] = t, t._pos = this.objectsList.length, this.objectsList[this.objectsList.length] = t, r
    }, finalizeAdding: function(t) {t.visProp.visible || this.renderer.hide(t)}, finalizeLabel: function(t) {!t.hasLabel || t.label.visProp.islabel || t.label.visProp.visible || this.renderer.hide(t.label)}, getCoordsTopLeftCorner: function() {
      var t, e, i, r, s, o = this.document.documentElement || this.document.body.parentNode, n = this.document.body, a = this.containerObj;
      return this.cPos.length > 0 && (this.mode === this.BOARD_MODE_DRAG || this.mode === this.BOARD_MODE_MOVE_ORIGIN || 1e3 > (new Date).getTime() - this.positionAccessLast) ? this.cPos : (this.positionAccessLast = (new Date).getTime(), a.getBoundingClientRect ? (r = "number" == typeof window.pageXOffset ? window.pageXOffset : "number" === o.ScrollLeft ? o.ScrollLeft : this.document.body.scrollLeft, s = "number" == typeof window.pageYOffset ? window.pageYOffset : "number" === o.ScrollTop ? o.ScrollTop : this.document.body.scrollTop, i = a.getBoundingClientRect(), t = [i.left + r, i.top + s], t[0] += f.getProp(a, "border-left-width"), t[1] += f.getProp(a, "border-top-width"), "vml" !== this.renderer.type && (t[0] += f.getProp(a, "padding-left"), t[1] += f.getProp(a, "padding-top")), this.cPos = t.slice(), this.cPos) : (t = f.getOffset(a), e = this.document.documentElement.ownerDocument, !this.containerObj.currentStyle && e.defaultView && (t[0] += f.getProp(o, "margin-left"), t[1] += f.getProp(o, "margin-top"), t[0] += f.getProp(o, "border-left-width"), t[1] += f.getProp(o, "border-top-width"), t[0] += f.getProp(o, "padding-left"), t[1] += f.getProp(o, "padding-top")), n && (t[0] += f.getProp(n, "left"), t[1] += f.getProp(n, "top")), "object" == typeof google && google.translate && (t[0] += 10, t[1] += 25), t[0] += f.getProp(a, "border-left-width"), t[1] += f.getProp(a, "border-top-width"), "vml" !== this.renderer.type && (t[0] += f.getProp(a, "padding-left"), t[1] += f.getProp(a, "padding-top")), t[0] += this.attr.offsetx, t[1] += this.attr.offsety, this.cPos = t.slice(), this.Pos))
    }, getMousePosition: function(t, e) {
      var i, r, s = this.getCoordsTopLeftCorner();
      return i = f.getPosition(t, e, this.document), u.exists(this.cssTransMat) || this.updateCSSTransforms(), r = [1, i[0] - s[0], i[1] - s[1]], r = o.matVecMult(this.cssTransMat, r), r[1] /= r[0], r[2] /= r[0], [r[1], r[2]]
    }, initMoveOrigin: function(t, e) {this.drag_dx = t - this.origin.scrCoords[1], this.drag_dy = e - this.origin.scrCoords[2], this.mode = this.BOARD_MODE_MOVE_ORIGIN, this.updateQuality = this.BOARD_QUALITY_LOW}, initMoveObject: function(t, i, r, s) {
      var o, n, a, l = [], c = [], d = this.objectsList.length, p = {visProp: {layer: -1e4}};
      for (n = 0; d > n; n++)o = this.objectsList[n], a = o.hasPoint && o.hasPoint(t, i), o.visProp.visible && a && (o.triggerEventHandlers([s + "down", "down"], [r]), this.downObjects.push(o)), (this.geonextCompatibilityMode && (u.isPoint(o) || o.elementClass === e.OBJECT_CLASS_TEXT) || !this.geonextCompatibilityMode) && o.isDraggable && o.visProp.visible && !o.visProp.fixed && !o.visProp.frozen && a && (o.visProp.layer > p.visProp.layer || o.visProp.layer === p.visProp.layer && o.lastDragTime.getTime() >= p.lastDragTime.getTime()) && (this.attr.ignorelabels && u.exists(p.label) && o === p.label || (p = o, l.push(p), u.exists(p.coords) ? c.push(h.subtract(p.coords.scrCoords.slice(1), [t, i])) : c.push([0, 0])));
      return l.length > 0 && (this.mode = this.BOARD_MODE_DRAG), this.attr.takefirst ? (l.length = 1, this._drag_offset = c[0]) : (l = l.slice(-1), this._drag_offset = c[c.length - 1]), this._drag_offset || (this._drag_offset = [0, 0]), l
    }, moveObject: function(t, r, s, o, n) {
      var a, l = new i(e.COORDS_BY_SCREEN, this.getScrCoordsOfMouse(t, r), this);
      s && s.obj && (a = s.obj, this.drag_position = [l.scrCoords[1], l.scrCoords[2]], this.drag_position = h.add(this.drag_position, this._drag_offset), u.exists(a.coords) ? a.setPositionDirectly(e.COORDS_BY_SCREEN, this.drag_position) : (this.renderer.hide(this.infobox), isNaN(s.targets[0].Xprev + s.targets[0].Yprev) || a.setPositionDirectly(e.COORDS_BY_SCREEN, [l.scrCoords[1], l.scrCoords[2]], [s.targets[0].Xprev, s.targets[0].Yprev]), s.targets[0].Xprev = l.scrCoords[1], s.targets[0].Yprev = l.scrCoords[2]), a.prepareUpdate().update(!1).updateRenderer(), a.triggerEventHandlers([n + "drag", "drag"], [o]), this.updateInfobox(a), this.update(), a.highlight(!0), a.lastDragTime = new Date)
    }, twoFingerMove: function(t, r, s, o) {
      var n, a, h;
      u.exists(s) && u.exists(s.obj) && (h = s.obj, n = new i(e.COORDS_BY_SCREEN, this.getScrCoordsOfMouse(t[0], t[1]), this), a = new i(e.COORDS_BY_SCREEN, this.getScrCoordsOfMouse(r[0], r[1]), this), h.elementClass === e.OBJECT_CLASS_LINE || h.type === e.OBJECT_TYPE_POLYGON ? this.twoFingerTouchObject(n, a, s, h) : h.elementClass === e.OBJECT_CLASS_CIRCLE && this.twoFingerTouchCircle(n, a, s, h), h.triggerEventHandlers(["touchdrag", "drag"], [o]), s.targets[0].Xprev = n.scrCoords[1], s.targets[0].Yprev = n.scrCoords[2], s.targets[1].Xprev = a.scrCoords[1], s.targets[1].Yprev = a.scrCoords[2])
    }, twoFingerTouchObject: function(t, r, s, a) {
      var h, l, c, d, p, f, m, b, g, v, y, C, P, _, E, S;
      if (u.exists(s.targets[0]) && u.exists(s.targets[1]) && !isNaN(s.targets[0].Xprev + s.targets[0].Yprev + s.targets[1].Xprev + s.targets[1].Yprev)) {
        if (h = t.usrCoords, l = r.usrCoords, c = new i(e.COORDS_BY_SCREEN, [s.targets[0].Xprev, s.targets[0].Yprev], this).usrCoords, d = new i(e.COORDS_BY_SCREEN, [s.targets[1].Xprev, s.targets[1].Yprev], this).usrCoords, f = [1, .5 * (c[1] + d[1]), .5 * (c[2] + d[2])], p = [1, .5 * (h[1] + l[1]), .5 * (h[2] + l[2])], b = o.crossProduct(c, d), m = o.crossProduct(h, l), v = o.crossProduct(b, m), Math.abs(v[0]) < o.eps)return;
        v[1] /= v[0], v[2] /= v[0], y = n.rad(f.slice(1), v.slice(1), p.slice(1)), C = this.create("transform", [y, v[1], v[2]], {type: "rotate"}), C.update(), f = o.matVecMult(C.matrix, f), f[1] /= f[0], f[2] /= f[0], P = this.create("transform", [p[1] - f[1], p[2] - f[2]], {type: "translate"}), P.update(), C.melt(P), a.visProp.scalable && (g = n.distance(h, l) / n.distance(c, d), _ = this.create("transform", [-p[1], -p[2]], {type: "translate"}), E = this.create("transform", [g, g], {type: "scale"}), S = this.create("transform", [p[1], p[2]], {type: "translate"}), C.melt(_).melt(E).melt(S)), a.elementClass === e.OBJECT_CLASS_LINE ? C.applyOnce([a.point1, a.point2]) : a.type === e.OBJECT_TYPE_POLYGON && C.applyOnce(a.vertices.slice(0, -1)), this.update(), a.highlight(!0)
      }
    }, twoFingerTouchCircle: function(t, r, s, o) {
      var a, h, l, c, d, p, f, m, b, g, v;
      "pointCircle" !== o.method && "pointLine" !== o.method && u.exists(s.targets[0]) && u.exists(s.targets[1]) && !isNaN(s.targets[0].Xprev + s.targets[0].Yprev + s.targets[1].Xprev + s.targets[1].Yprev) && (a = t.usrCoords, h = r.usrCoords, l = new i(e.COORDS_BY_SCREEN, [s.targets[0].Xprev, s.targets[0].Yprev], this).usrCoords, c = new i(e.COORDS_BY_SCREEN, [s.targets[1].Xprev, s.targets[1].Yprev], this).usrCoords, f = this.create("transform", [a[1] - l[1], a[2] - l[2]], {type: "translate"}), p = n.rad(c.slice(1), a.slice(1), h.slice(1)), m = this.create("transform", [-a[1], -a[2]], {type: "translate"}), b = this.create("transform", [p], {type: "rotate"}), f.melt(m).melt(b), o.visProp.scalable && (d = n.distance(a, h) / n.distance(l, c), g = this.create("transform", [d, d], {type: "scale"}), f.melt(g)), v = this.create("transform", [a[1], a[2]], {type: "translate"}), f.melt(v), f.applyOnce([o.center]), "twoPoints" === o.method ? f.applyOnce([o.point2]) : "pointRadius" === o.method && u.isNumber(o.updateRadius.origin) && o.setRadius(o.radius * d), this.update(o.center), o.highlight(!0))
    }, highlightElements: function(t, e, i, r) {
      var s, o, n, a = {}, h = this.objectsList.length;
      for (s = 0; h > s; s++)o = this.objectsList[s], n = o.id, u.exists(o.hasPoint) && o.visProp.visible && o.hasPoint(t, e) && (this.updateInfobox(o), u.exists(this.highlightedObjects[n]) || (a[n] = o, o.highlight(), this.triggerEventHandlers(["mousehit", "hit"], [i, o, r])), o.mouseover ? o.triggerEventHandlers(["mousemove", "move"], [i]) : (o.triggerEventHandlers(["mouseover", "over"], [i]), o.mouseover = !0));
      for (s = 0; h > s; s++)o = this.objectsList[s], n = o.id, o.mouseover && (a[n] || (o.triggerEventHandlers(["mouseout", "out"], [i]), o.mouseover = !1))
    }, saveStartPos: function(i, r) {
      var s, o, n = [];
      if (i.type === e.OBJECT_TYPE_TICKS)n.push([1, 0 / 0, 0 / 0]); else if (i.elementClass === e.OBJECT_CLASS_LINE)n.push(i.point1.coords.usrCoords), n.push(i.point2.coords.usrCoords); else if (i.elementClass === e.OBJECT_CLASS_CIRCLE)n.push(i.center.coords.usrCoords), "twoPoints" === i.method && n.push(i.point2.coords.usrCoords); else if (i.type === e.OBJECT_TYPE_POLYGON)for (o = i.vertices.length - 1, s = 0; o > s; s++)n.push(i.vertices[s].coords.usrCoords); else if (i.type === e.OBJECT_TYPE_SECTOR)n.push(i.point1.coords.usrCoords), n.push(i.point2.coords.usrCoords), n.push(i.point3.coords.usrCoords); else if (u.isPoint(i) || i.type === e.OBJECT_TYPE_GLIDER)n.push(i.coords.usrCoords); else if (i.elementClass === e.OBJECT_CLASS_CURVE) {
        if (t.exists(i.parents))for (o = i.parents.length, s = 0; o > s; s++)n.push(this.select(i.parents[s]).coords.usrCoords)
      } else try {
        n.push(i.coords.usrCoords)
      } catch (a) {
        t.debug("JSXGraph+ saveStartPos: obj.coords.usrCoords not available: " + a)
      }
      for (o = n.length, s = 0; o > s; s++)r.Zstart.push(n[s][0]), r.Xstart.push(n[s][1]), r.Ystart.push(n[s][2])
    }, mouseOriginMoveStart: function(t) {
      var e, i = this.attr.pan.enabled && (!this.attr.pan.needshift || t.shiftKey);
      return i && (e = this.getMousePosition(t), this.initMoveOrigin(e[0], e[1])), i
    }, mouseOriginMove: function(t) {
      var e, i = this.mode === this.BOARD_MODE_MOVE_ORIGIN;
      return i && (e = this.getMousePosition(t), this.moveOrigin(e[0], e[1], !0)), i
    }, touchOriginMoveStart: function(e) {
      var i, r = e[t.touchProperty], s = 2 === r.length && 80 > n.distance([r[0].screenX, r[0].screenY], [r[1].screenX, r[1].screenY]), o = this.attr.pan.enabled && (!this.attr.pan.needtwofingers || s);
      return o && (i = this.getMousePosition(e, 0), this.initMoveOrigin(i[0], i[1])), o
    }, touchOriginMove: function(t) {
      var e, i = this.mode === this.BOARD_MODE_MOVE_ORIGIN;
      return i && (e = this.getMousePosition(t, 0), this.moveOrigin(e[0], e[1], !0)), i
    }, originMoveEnd: function() {this.updateQuality = this.BOARD_QUALITY_HIGH, this.mode = this.BOARD_MODE_NONE}, addEventHandlers: function() {f.supportsPointerEvents() ? this.addPointerEventHandlers() : (this.addMouseEventHandlers(), this.addTouchEventHandlers())}, addPointerEventHandlers: function() {!this.hasPointerHandlers && f.isBrowser && (window.navigator.pointerEnabled ? (f.addEvent(this.containerObj, "pointerdown", this.pointerDownListener, this), f.addEvent(this.containerObj, "pointermove", this.pointerMoveListener, this)) : (f.addEvent(this.containerObj, "MSPointerDown", this.pointerDownListener, this), f.addEvent(this.containerObj, "MSPointerMove", this.pointerMoveListener, this)), this.hasPointerHandlers = !0)}, addMouseEventHandlers: function() {!this.hasMouseHandlers && f.isBrowser && (f.addEvent(this.containerObj, "mousedown", this.mouseDownListener, this), f.addEvent(this.containerObj, "mousemove", this.mouseMoveListener, this), f.addEvent(this.containerObj, "mousewheel", this.mouseWheelListener, this), f.addEvent(this.containerObj, "DOMMouseScroll", this.mouseWheelListener, this), this.hasMouseHandlers = !0, this.containerObj.oncontextmenu = function(t) {return u.exists(t) && t.preventDefault(), !1})}, addTouchEventHandlers: function(t) {!this.hasTouchHandlers && f.isBrowser && (f.addEvent(this.containerObj, "touchstart", this.touchStartListener, this), f.addEvent(this.containerObj, "touchmove", this.touchMoveListener, this), (!u.exists(t) || t) && (f.addEvent(this.containerObj, "gesturestart", this.gestureStartListener, this), f.addEvent(this.containerObj, "gesturechange", this.gestureChangeListener, this), this.hasGestureHandlers = !0), this.hasTouchHandlers = !0)}, removePointerEventHandlers: function() {this.hasPointerHandlers && f.isBrowser && (window.navigator.pointerEnabled ? (f.removeEvent(this.containerObj, "pointerdown", this.pointerDownListener, this), f.removeEvent(this.containerObj, "pointermove", this.pointerMoveListener, this)) : (f.removeEvent(this.containerObj, "MSPointerDown", this.pointerDownListener, this), f.removeEvent(this.containerObj, "MSPointerMove", this.pointerMoveListener, this)), this.hasPointerUp && (window.navigator.pointerEnabled ? f.removeEvent(this.document, "pointerup", this.pointerUpListener, this) : f.removeEvent(this.document, "MSPointerUp", this.pointerUpListener, this), this.hasPointerUp = !1), this.hasPointerHandlers = !1)}, removeMouseEventHandlers: function() {this.hasMouseHandlers && f.isBrowser && (f.removeEvent(this.containerObj, "mousedown", this.mouseDownListener, this), f.removeEvent(this.containerObj, "mousemove", this.mouseMoveListener, this), this.hasMouseUp && (f.removeEvent(this.document, "mouseup", this.mouseUpListener, this), this.hasMouseUp = !1), f.removeEvent(this.containerObj, "mousewheel", this.mouseWheelListener, this), f.removeEvent(this.containerObj, "DOMMouseScroll", this.mouseWheelListener, this), this.hasMouseHandlers = !1)}, removeTouchEventHandlers: function() {this.hasTouchHandlers && f.isBrowser && (f.removeEvent(this.containerObj, "touchstart", this.touchStartListener, this), f.removeEvent(this.containerObj, "touchmove", this.touchMoveListener, this), this.hasTouchEnd && (f.removeEvent(this.document, "touchend", this.touchEndListener, this), this.hasTouchEnd = !1), this.hasGestureHandlers && (f.removeEvent(this.containerObj, "gesturestart", this.gestureStartListener, this), f.removeEvent(this.containerObj, "gesturechange", this.gestureChangeListener, this), this.hasGestureHandlers = !1), this.hasTouchHandlers = !1)}, removeEventHandlers: function() {this.removeMouseEventHandlers(), this.removeTouchEventHandlers(), this.removePointerEventHandlers()}, clickLeftArrow: function() {return this.moveOrigin(this.origin.scrCoords[1] + .1 * this.canvasWidth, this.origin.scrCoords[2]), !1}, clickRightArrow: function() {return this.moveOrigin(this.origin.scrCoords[1] - .1 * this.canvasWidth, this.origin.scrCoords[2]), !1}, clickUpArrow: function() {return this.moveOrigin(this.origin.scrCoords[1], this.origin.scrCoords[2] - .1 * this.canvasHeight), !1}, clickDownArrow: function() {return this.moveOrigin(this.origin.scrCoords[1], this.origin.scrCoords[2] + .1 * this.canvasHeight), !1}, gestureChangeListener: function(t) {
      var r, s = this.attr.zoom.factorx, o = this.attr.zoom.factory;
      return this.attr.zoom.wheel ? (t.preventDefault(), this.mode === this.BOARD_MODE_ZOOM && (r = new i(e.COORDS_BY_SCREEN, this.getMousePosition(t), this), this.attr.zoom.factorx = t.scale / this.prevScale, this.attr.zoom.factory = t.scale / this.prevScale, this.zoomIn(r.usrCoords[1], r.usrCoords[2]), this.prevScale = t.scale, this.attr.zoom.factorx = s, this.attr.zoom.factory = o), !1) : !0
    }, gestureStartListener: function(t) {return this.attr.zoom.wheel ? (t.preventDefault(), this.prevScale = 1, this.mode === this.BOARD_MODE_NONE && (this.mode = this.BOARD_MODE_ZOOM), !1) : !0}, pointerDownListener: function(e, i) {
      var r, s, o, n, a, h, l, c, d = this.options.precision.touch;
      if (this.hasPointerUp || (window.navigator.pointerEnabled ? f.addEvent(this.document, "pointerup", this.pointerUpListener, this) : f.addEvent(this.document, "MSPointerUp", this.pointerUpListener, this), this.hasPointerUp = !0), this.hasMouseHandlers && this.removeMouseEventHandlers(), this.hasTouchHandlers && this.removeTouchEventHandlers(), this.document.selection && "function" == typeof this.document.selection.empty ? this.document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges(), t.isBrowser && window.navigator.msMaxTouchPoints && window.navigator.msMaxTouchPoints > 1 && (this.options.precision.hasPoint = d), n = this.getMousePosition(e), i ? (a = [i], this.mode = this.BOARD_MODE_DRAG) : a = this.initMoveObject(n[0], n[1], e, "mouse"), a.length > 0) {
        for (l = a[a.length - 1], h = !1, r = 0; this.touches.length > r; r++)if (this.touches[r].obj === l) {
          s = r, o = this.touches[r].targets.push({num: e.pointerId, X: n[0], Y: n[1], Xprev: 0 / 0, Yprev: 0 / 0, Xstart: [], Ystart: [], Zstart: []}) - 1, h = !0;
          break
        }
        h || (o = 0, s = this.touches.push({obj: l, targets: [
          {num: e.pointerId, X: n[0], Y: n[1], Xprev: 0 / 0, Yprev: 0 / 0, Xstart: [], Ystart: [], Zstart: []}
        ]}) - 1), this.dehighlightAll(), l.highlight(!0), this.saveStartPos(l, this.touches[s].targets[o]), e && e.preventDefault ? e.preventDefault() : window.event && (window.event.returnValue = !1)
      }
      return this.touches.length > 0 && (e.preventDefault(), e.stopPropagation()), this.mode === this.BOARD_MODE_NONE && this.mouseOriginMoveStart(e) ? (this.triggerEventHandlers(["touchstart", "down", "pointerdown", "MSPointerDown"], [e]), !1) : (this.options.precision.hasPoint = this.options.precision.mouse, this.triggerEventHandlers(["touchstart", "down", "pointerdown", "MSPointerDown"], [e]), c)
    }, pointerMoveListener: function(e) {
      var i, r, s;
      if (e[t.touchProperty], this.mode !== this.BOARD_MODE_DRAG && (this.dehighlightAll(), this.renderer.hide(this.infobox)), this.mode !== this.BOARD_MODE_NONE && (e.preventDefault(), e.stopPropagation()), t.isBrowser && window.navigator.msMaxTouchPoints && window.navigator.msMaxTouchPoints > 1 && (this.options.precision.hasPoint = this.options.precision.touch), this.updateQuality = this.BOARD_QUALITY_LOW, !this.mouseOriginMove(e))if (this.mode === this.BOARD_MODE_DRAG) {
        for (i = 0; this.touches.length > i; i++)for (r = 0; this.touches[i].targets.length > r; r++)if (this.touches[i].targets[r].num === e.pointerId) {
          1 === this.touches[i].targets.length ? (this.touches[i].targets[r].X = e.pageX, this.touches[i].targets[r].Y = e.pageY, s = this.getMousePosition(e), this.moveObject(s[0], s[1], this.touches[i], e, "touch")) : 2 === this.touches[i].targets.length && this.touches[i].targets[0].num > -1 && this.touches[i].targets[1].num > -1 && (this.touches[i].targets[r].X = e.pageX, this.touches[i].targets[r].Y = e.pageY, this.twoFingerMove(this.getMousePosition({pageX: this.touches[i].targets[0].X, pageY: this.touches[i].targets[0].Y}), this.getMousePosition({pageX: this.touches[i].targets[1].X, pageY: this.touches[i].targets[1].Y}), this.touches[i], e));
          break
        }
      } else s = this.getMousePosition(e), this.highlightElements(s[0], s[1], e, -1);
      return this.options.precision.hasPoint = this.options.precision.mouse, this.triggerEventHandlers(["touchmove", "move", "pointermove", "MSPointerMove"], [e, this.mode]), this.mode === this.BOARD_MODE_NONE
    }, pointerUpListener: function(t) {
      var e, i, r;
      if (this.options.precision.touch, this.triggerEventHandlers(["touchend", "up", "pointerup", "MSPointerUp"], [t]), this.renderer.hide(this.infobox), t)for (e = 0; this.touches.length > e; e++)for (i = 0; this.touches[e].targets.length > i; i++)if (this.touches[e].targets[i].num === t.pointerId) {
        this.touches[e].targets.splice(i, 1), 0 === this.touches[e].targets.length && this.touches.splice(e, 1);
        break
      }
      for (e = this.downObjects.length - 1; e > -1; e--) {
        for (r = !1, i = 0; this.touches.length > i; i++)this.touches[i].obj.id === this.downObjects[e].id && (r = !0);
        r || (this.downObjects[e].triggerEventHandlers(["touchend", "up", "pointerup", "MSPointerUp"], [t]), this.downObjects[e].snapToGrid(), this.downObjects[e].snapToPoints(), this.downObjects.splice(e, 1))
      }
      return 0 === this.touches.length && (this.hasPointerUp && (window.navigator.pointerEnabled ? f.removeEvent(this.document, "pointerup", this.pointerUpListener, this) : f.removeEvent(this.document, "MSPointerUp", this.pointerUpListener, this), this.hasPointerUp = !1), this.dehighlightAll(), this.updateQuality = this.BOARD_QUALITY_HIGH, this.originMoveEnd(), this.update()), !0
    }, touchStartListener: function(i) {
      var s, o, n, a, h, l, c, d, p, m, b = this.options.precision.touch, g = i[t.touchProperty];
      for (this.hasTouchEnd || (f.addEvent(this.document, "touchend", this.touchEndListener, this), this.hasTouchEnd = !0), this.hasMouseHandlers && this.removeMouseEventHandlers(), this.document.selection && "function" == typeof this.document.selection.empty ? this.document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges(), this.options.precision.hasPoint = this.options.precision.touch, s = 0; g.length > s; s++)g[s].jxg_isused = !1;
      for (s = 0; this.touches.length > s; s++)for (a = 0; this.touches[s].targets.length > a; a++) {
        this.touches[s].targets[a].num = -1, b = this.options.precision.touch;
        do {
          for (h = 0; g.length > h; h++)if (b * b > Math.abs(Math.pow(g[h].screenX - this.touches[s].targets[a].X, 2) + Math.pow(g[h].screenY - this.touches[s].targets[a].Y, 2))) {
            this.touches[s].targets[a].num = h, this.touches[s].targets[a].X = g[h].screenX, this.touches[s].targets[a].Y = g[h].screenY, g[h].jxg_isused = !0;
            break
          }
          b *= 2
        } while (-1 === this.touches[s].targets[a].num && this.options.precision.touchMax > b);
        -1 === this.touches[s].targets[a].num && (t.debug("i couldn't find a targettouches for target no " + a + " on " + this.touches[s].obj.name + " (" + this.touches[s].obj.id + "). Removed the target."), t.debug("eps = " + b + ", touchMax = " + r.precision.touchMax), this.touches[s].targets.splice(s, 1))
      }
      for (s = 0; g.length > s; s++)if (!g[s].jxg_isused) {
        if (o = this.getMousePosition(i, s), n = this.initMoveObject(o[0], o[1], i, "touch"), 0 !== n.length)if (c = n[n.length - 1], u.isPoint(c) || c.elementClass === e.OBJECT_CLASS_TEXT || c.type === e.OBJECT_TYPE_TICKS || c.type === e.OBJECT_TYPE_IMAGE)p = [
          {num: s, X: g[s].screenX, Y: g[s].screenY, Xprev: 0 / 0, Yprev: 0 / 0, Xstart: [], Ystart: [], Zstart: []}
        ], this.saveStartPos(c, p[0]), this.touches.push({obj: c, targets: p}), c.highlight(!0); else if (c.elementClass === e.OBJECT_CLASS_LINE || c.elementClass === e.OBJECT_CLASS_CIRCLE || c.type === e.OBJECT_TYPE_POLYGON) {
          for (d = !1, a = 0; this.touches.length > a; a++)c.id === this.touches[a].obj.id && (d = !0, 1 === this.touches[a].targets.length && (m = {num: s, X: g[s].screenX, Y: g[s].screenY, Xprev: 0 / 0, Yprev: 0 / 0, Xstart: [], Ystart: [], Zstart: []}, this.saveStartPos(c, m), this.touches[a].targets.push(m)), g[s].jxg_isused = !0);
          d || (p = [
            {num: s, X: g[s].screenX, Y: g[s].screenY, Xprev: 0 / 0, Yprev: 0 / 0, Xstart: [], Ystart: [], Zstart: []}
          ], this.saveStartPos(c, p[0]), this.touches.push({obj: c, targets: p}), c.highlight(!0))
        }
        g[s].jxg_isused = !0
      }
      return this.touches.length > 0 && (i.preventDefault(), i.stopPropagation()), this.mode === this.BOARD_MODE_NONE && this.touchOriginMoveStart(i) ? (this.triggerEventHandlers(["touchstart", "down"], [i]), !1) : (f.isWebkitAndroid() && (l = new Date, this.touchMoveLast = l.getTime() - 200), this.options.precision.hasPoint = this.options.precision.mouse, this.triggerEventHandlers(["touchstart", "down"], [i]), this.touches.length > 0)
    }, touchMoveListener: function(e) {
      var i, r, s, o, n = e[t.touchProperty];
      if (this.mode !== this.BOARD_MODE_NONE && (e.preventDefault(), e.stopPropagation()), f.isWebkitAndroid()) {
        if (o = new Date, o = o.getTime(), 80 > o - this.touchMoveLast)return this.updateQuality = this.BOARD_QUALITY_HIGH, this.triggerEventHandlers(["touchmove", "move"], [e, this.mode]), !1;
        this.touchMoveLast = o
      }
      if (this.mode !== this.BOARD_MODE_DRAG && this.renderer.hide(this.infobox), this.options.precision.hasPoint = this.options.precision.touch, this.updateQuality = this.BOARD_QUALITY_LOW, !this.touchOriginMove(e) && this.mode === this.BOARD_MODE_DRAG)for (i = 0; this.touches.length > i; i++)if (1 === this.touches[i].targets.length) {
        if (n[this.touches[i].targets[0].num]) {
          if (r = this.getMousePosition(e, this.touches[i].targets[0].num), 0 > r[0] || r[0] > this.canvasWidth || 0 > r[1] || r[1] > this.canvasHeight)return;
          this.touches[i].targets[0].X = n[this.touches[i].targets[0].num].screenX, this.touches[i].targets[0].Y = n[this.touches[i].targets[0].num].screenY, this.moveObject(r[0], r[1], this.touches[i], e, "touch")
        }
      } else if (2 === this.touches[i].targets.length && this.touches[i].targets[0].num > -1 && this.touches[i].targets[1].num > -1 && n[this.touches[i].targets[0].num] && n[this.touches[i].targets[1].num]) {
        if (r = this.getMousePosition(e, this.touches[i].targets[0].num), s = this.getMousePosition(e, this.touches[i].targets[1].num), 0 > r[0] || r[0] > this.canvasWidth || 0 > r[1] || r[1] > this.canvasHeight || 0 > s[0] || s[0] > this.canvasWidth || 0 > s[1] || s[1] > this.canvasHeight)return;
        this.touches[i].targets[0].X = n[this.touches[i].targets[0].num].screenX, this.touches[i].targets[0].Y = n[this.touches[i].targets[0].num].screenY, this.touches[i].targets[1].X = n[this.touches[i].targets[1].num].screenX, this.touches[i].targets[1].Y = n[this.touches[i].targets[1].num].screenY, this.twoFingerMove(r, s, this.touches[i], e)
      }
      return this.mode !== this.BOARD_MODE_DRAG && this.renderer.hide(this.infobox), this.options.precision.hasPoint = this.options.precision.mouse, this.triggerEventHandlers(["touchmove", "move"], [e, this.mode]), this.mode === this.BOARD_MODE_NONE
    }, touchEndListener: function(i) {
      var r, s, o, n, a, h = this.options.precision.touch, l = [], c = i && i[t.touchProperty];
      if (this.triggerEventHandlers(["touchend", "up"], [i]), this.renderer.hide(this.infobox), c && c.length > 0) {
        for (r = 0; this.touches.length > r; r++)l[r] = this.touches[r];
        for (this.touches.length = 0, r = 0; c.length > r; r++)c[r].jxg_isused = !1;
        for (r = 0; l.length > r; r++) {
          for (n = !1, a = 0, s = 0; l[r].targets.length > s; s++)for (l[r].targets[s].found = !1, o = 0; c.length > o; o++)if (h * h > Math.abs(Math.pow(c[o].screenX - l[r].targets[s].X, 2) + Math.pow(c[o].screenY - l[r].targets[s].Y, 2))) {
            l[r].targets[s].found = !0, l[r].targets[s].num = o, l[r].targets[s].X = c[o].screenX, l[r].targets[s].Y = c[o].screenY, a += 1;
            break
          }
          if (u.isPoint(l[r].obj) ? n = l[r].targets[0] && l[r].targets[0].found : l[r].obj.elementClass === e.OBJECT_CLASS_LINE ? n = l[r].targets[0] && l[r].targets[0].found || l[r].targets[1] && l[r].targets[1].found : l[r].obj.elementClass === e.OBJECT_CLASS_CIRCLE && (n = 1 === a || 3 === a), n)for (this.touches.push({obj: l[r].obj, targets: []}), s = 0; l[r].targets.length > s; s++)l[r].targets[s].found && this.touches[this.touches.length - 1].targets.push({num: l[r].targets[s].num, X: l[r].targets[s].screenX, Y: l[r].targets[s].screenY, Xprev: 0 / 0, Yprev: 0 / 0, Xstart: l[r].targets[s].Xstart, Ystart: l[r].targets[s].Ystart, Zstart: l[r].targets[s].Zstart}); else l[r].obj.noHighlight()
        }
      } else this.touches.length = 0;
      for (r = this.downObjects.length - 1; r > -1; r--) {
        for (n = !1, s = 0; this.touches.length > s; s++)this.touches[s].obj.id === this.downObjects[r].id && (n = !0);
        n || (this.downObjects[r].triggerEventHandlers(["touchup", "up"], [i]), this.downObjects[r].snapToGrid(), this.downObjects[r].snapToPoints(), this.downObjects.splice(r, 1))
      }
      return c && 0 !== c.length || (this.hasTouchEnd && (f.removeEvent(this.document, "touchend", this.touchEndListener, this), this.hasTouchEnd = !1), this.dehighlightAll(), this.updateQuality = this.BOARD_QUALITY_HIGH, this.originMoveEnd(), this.update()), !0
    }, mouseDownListener: function(t) {
      var e, i, r;
      return this.document.selection && "function" == typeof this.document.selection.empty ? this.document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges(), this.hasMouseUp ? void 0 : (f.addEvent(this.document, "mouseup", this.mouseUpListener, this), this.hasMouseUp = !0, e = this.getMousePosition(t), i = this.initMoveObject(e[0], e[1], t, "mouse"), 0 === i.length ? (this.mode = this.BOARD_MODE_NONE, r = !0) : (this.mouse = {obj: null, targets: [
        {X: e[0], Y: e[1], Xprev: 0 / 0, Yprev: 0 / 0}
      ]}, this.mouse.obj = i[i.length - 1], this.dehighlightAll(), this.mouse.obj.highlight(!0), this.mouse.targets[0].Xstart = [], this.mouse.targets[0].Ystart = [], this.mouse.targets[0].Zstart = [], this.saveStartPos(this.mouse.obj, this.mouse.targets[0]), t && t.preventDefault ? t.preventDefault() : window.event && (window.event.returnValue = !1)), this.mode === this.BOARD_MODE_NONE && (r = this.mouseOriginMoveStart(t)), this.triggerEventHandlers(["mousedown", "down"], [t]), r)
    }, mouseUpListener: function(t) {
      var e;
      for (this.triggerEventHandlers(["mouseup", "up"], [t]), this.updateQuality = this.BOARD_QUALITY_HIGH, this.mouse && this.mouse.obj && (this.mouse.obj.snapToGrid(this.mouse.targets[0]), this.mouse.obj.snapToPoints()), this.originMoveEnd(), this.dehighlightAll(), this.update(), e = 0; this.downObjects.length > e; e++)this.downObjects[e].triggerEventHandlers(["mouseup", "up"], [t]);
      this.downObjects.length = 0, this.hasMouseUp && (f.removeEvent(this.document, "mouseup", this.mouseUpListener, this), this.hasMouseUp = !1), this.mouse = null
    }, mouseMoveListener: function(t) {
      var e;
      e = this.getMousePosition(t), this.updateQuality = this.BOARD_QUALITY_LOW, this.mode !== this.BOARD_MODE_DRAG && (this.dehighlightAll(), this.renderer.hide(this.infobox)), this.mouseOriginMove(t) || (this.mode === this.BOARD_MODE_DRAG ? this.moveObject(e[0], e[1], this.mouse, t, "mouse") : this.highlightElements(e[0], e[1], t, -1)), this.updateQuality = this.BOARD_QUALITY_HIGH, this.triggerEventHandlers(["mousemove", "move"], [t, this.mode])
    }, mouseWheelListener: function(t) {
      if (!this.attr.zoom.wheel || this.attr.zoom.needshift && !t.shiftKey)return!0;
      t = t || window.event;
      var r = t.detail ? -t.detail : t.wheelDelta / 40, s = new i(e.COORDS_BY_SCREEN, this.getMousePosition(t), this);
      return r > 0 ? this.zoomIn(s.usrCoords[1], s.usrCoords[2]) : this.zoomOut(s.usrCoords[1], s.usrCoords[2]), t.preventDefault(), !1
    }, updateInfobox: function(t) {
      var e, i, r, s;
      return t.visProp.showinfobox ? (u.isPoint(t) && (r = t.coords.usrCoords[1], s = t.coords.usrCoords[2], this.infobox.setCoords(r + this.infobox.distanceX / this.unitX, s + this.infobox.distanceY / this.unitY), "string" != typeof t.infoboxText ? ("auto" === t.visProp.infoboxdigits ? (e = u.autoDigits(r), i = u.autoDigits(s)) : u.isNumber(t.visProp.infoboxdigits) ? (e = r.toFixed(t.visProp.infoboxdigits), i = s.toFixed(t.visProp.infoboxdigits)) : (e = r, i = s), this.highlightInfobox(e, i, t)) : this.highlightCustomInfobox(t.infoboxText, t), this.renderer.show(this.infobox)), this) : this
    }, highlightCustomInfobox: function(t) {return this.infobox.setText(t), this}, highlightInfobox: function(t, e, i) {
      return this.highlightCustomInfobox("(" + t + ", " + e + ")", i), this
    }, dehighlightAll: function() {
      var t, e, i = !1;
      for (t in this.highlightedObjects)this.highlightedObjects.hasOwnProperty(t) && (e = this.highlightedObjects[t], (this.hasMouseHandlers || this.hasPointerHandlers) && e.noHighlight(), i = !0);
      return this.highlightedObjects = {}, "canvas" === this.renderer.type && i && (this.prepareUpdate(), this.renderer.suspendRedraw(this), this.updateRenderer(), this.renderer.unsuspendRedraw()), this
    }, getScrCoordsOfMouse: function(t, e) {return[t, e]}, getUsrCoordsOfMouse: function(t) {
      var r = this.getCoordsTopLeftCorner(), s = f.getPosition(t, null, this.document), o = s[0] - r[0], n = s[1] - r[1], a = new i(e.COORDS_BY_SCREEN, [o, n], this);
      return a.usrCoords.slice(1)
    }, getAllUnderMouse: function(t) {
      var e = this.getAllObjectsUnderMouse(t);
      return e.push(this.getUsrCoordsOfMouse(t)), e
    }, getAllObjectsUnderMouse: function(t) {
      var e, i, r = this.getCoordsTopLeftCorner(), s = f.getPosition(t, null, this.document), o = s[0] - r[0], n = s[1] - r[1], a = [], h = this.objectsList.length;
      for (e = 0; h > e; e++)i = this.objectsList[e], i.visProp.visible && i.hasPoint && i.hasPoint(o, n) && (a[a.length] = i);
      return a
    }, updateCoords: function() {
      var t, e, i = this.objectsList.length;
      for (e = 0; i > e; e++)t = this.objectsList[e], u.exists(t.coords) && (t.visProp.frozen ? t.coords.screen2usr() : t.coords.usr2screen());
      return this
    }, moveOrigin: function(t, e, i) {return u.exists(t) && u.exists(e) && (this.origin.scrCoords[1] = t, this.origin.scrCoords[2] = e, i && (this.origin.scrCoords[1] -= this.drag_dx, this.origin.scrCoords[2] -= this.drag_dy)), this.updateCoords().clearTraces().fullUpdate(), this.triggerEventHandlers(["boundingbox"]), this}, addConditions: function(i) {
      var r, s, o, n, a, h, l, c = [], p = "var el, x, y, c, rgbo;\n", f = i.indexOf("<data>"), m = i.indexOf("</data>"), b = function(t, i, r, s) {
        return function() {
          var o, n;
          o = t.select(i.id), n = o.coords.usrCoords[s], 2 === s ? o.setPositionDirectly(e.COORDS_BY_USER, [r(), n]) : o.setPositionDirectly(e.COORDS_BY_USER, [n, r()]), o.prepareUpdate().update()
        }
      }, g = function(t, e, i) {
        return function() {
          var r, s;
          r = t.select(e.id), s = i(), r.setAttribute({visible: s})
        }
      }, v = function(t, e, i, r) {
        return function() {
          var s, o;
          s = t.select(e.id), o = i(), "strokewidth" === r ? s.visProp.strokewidth = o : (o = d.rgba2rgbo(o), s.visProp[r + "color"] = o[0], s.visProp[r + "opacity"] = o[1])
        }
      }, y = function(t, e, i) {
        return function() {
          var r = t.select(e.id);
          r.position = i()
        }
      }, C = function(t, e, i) {
        return function() {
          var r = t.select(e.id);
          r.setStyle(i())
        }
      };
      if (!(0 > f)) {
        for (; f >= 0;) {
          if (r = i.slice(f + 6, m), s = r.indexOf("="), o = r.slice(0, s), n = r.slice(s + 1), s = o.indexOf("."), a = o.slice(0, s), h = this.elementsByName[u.unescapeHTML(a)], l = o.slice(s + 1).replace(/\s+/g, "").toLowerCase(), n = u.createFunction(n, this, "", !0), u.exists(this.elementsByName[a]))switch (p += 'el = this.objects["' + h.id + '"];\n', l) {
            case"x":
              c.push(b(this, h, n, 2));
              break;
            case"y":
              c.push(b(this, h, n, 1));
              break;
            case"visible":
              c.push(g(this, h, n));
              break;
            case"position":
              c.push(y(this, h, n));
              break;
            case"stroke":
              c.push(v(this, h, n, "stroke"));
              break;
            case"style":
              c.push(C(this, h, n));
              break;
            case"strokewidth":
              c.push(v(this, h, n, "strokewidth"));
              break;
            case"fill":
              c.push(v(this, h, n, "fill"));
              break;
            case"label":
              break;
            default:
              t.debug("property '" + l + "' in conditions not yet implemented:" + n)
          } else t.debug("debug conditions: |" + a + "| undefined");
          i = i.slice(m + 7), f = i.indexOf("<data>"), m = i.indexOf("</data>")
        }
        this.updateConditions = function() {
          var t;
          for (t = 0; c.length > t; t++)c[t]();
          return this.prepareUpdate().updateElements(), !0
        }, this.updateConditions()
      }
    }, updateConditions: function() {return!1}, calculateSnapSizes: function() {
      var t = new i(e.COORDS_BY_USER, [0, 0], this), r = new i(e.COORDS_BY_USER, [this.options.grid.gridX, this.options.grid.gridY], this), s = t.scrCoords[1] - r.scrCoords[1], o = t.scrCoords[2] - r.scrCoords[2];
      for (this.options.grid.snapSizeX = this.options.grid.gridX; Math.abs(s) > 25;)this.options.grid.snapSizeX *= 2, s /= 2;
      for (this.options.grid.snapSizeY = this.options.grid.gridY; Math.abs(o) > 25;)this.options.grid.snapSizeY *= 2, o /= 2;
      return this
    }, applyZoom: function() {return this.updateCoords().calculateSnapSizes().clearTraces().fullUpdate(), this}, zoomIn: function(t, e) {
      var i = this.getBoundingBox(), r = this.attr.zoom.factorx, s = this.attr.zoom.factory, o = (i[2] - i[0]) * (1 - 1 / r), n = (i[1] - i[3]) * (1 - 1 / s), a = .5, h = .5;
      return"number" == typeof t && "number" == typeof e && (a = (t - i[0]) / (i[2] - i[0]), h = (i[1] - e) / (i[1] - i[3])), this.setBoundingBox([i[0] + o * a, i[1] - n * h, i[2] - o * (1 - a), i[3] + n * (1 - h)], !1), this.zoomX *= r, this.zoomY *= s, this.applyZoom(), !1
    }, zoomOut: function(t, e) {
      var i = this.getBoundingBox(), r = this.attr.zoom.factorx, s = this.attr.zoom.factory, o = (i[2] - i[0]) * (1 - r), n = (i[1] - i[3]) * (1 - s), a = .5, h = .5;
      return this.zoomX < this.attr.zoom.eps || this.zoomY < this.attr.zoom.eps ? !1 : ("number" == typeof t && "number" == typeof e && (a = (t - i[0]) / (i[2] - i[0]), h = (i[1] - e) / (i[1] - i[3])), this.setBoundingBox([i[0] + o * a, i[1] - n * h, i[2] - o * (1 - a), i[3] + n * (1 - h)], !1), this.zoomX /= r, this.zoomY /= s, this.applyZoom(), !1)
    }, zoom100: function() {
      var t = this.getBoundingBox(), e = .5 * (t[2] - t[0]) * (1 - this.zoomX), i = .5 * (t[1] - t[3]) * (1 - this.zoomY);
      return this.setBoundingBox([t[0] + e, t[1] - i, t[2] - e, t[3] + i], !1), this.zoomX = 1, this.zoomY = 1, this.applyZoom(), !1
    }, zoomAllPoints: function() {
      var t, e, i, r, s, o = 0, n = 0, a = 0, h = 0, l = this.objectsList.length;
      for (t = 0; l > t; t++)s = this.objectsList[t], u.isPoint(s) && s.visProp.visible && (o > s.coords.usrCoords[1] ? o = s.coords.usrCoords[1] : s.coords.usrCoords[1] > n && (n = s.coords.usrCoords[1]), s.coords.usrCoords[2] > h ? h = s.coords.usrCoords[2] : a > s.coords.usrCoords[2] && (a = s.coords.usrCoords[2]));
      return e = 50, i = e / this.unitX, r = e / this.unitY, this.zoomX = 1, this.zoomY = 1, this.setBoundingBox([o - i, h + r, n + i, a - r], !0), this.applyZoom(), this
    }, zoomElements: function(t) {
      var e, i, r, s, o = [0, 0, 0, 0], n = [1, -1, -1, 1];
      if (!u.isArray(t) || 0 === t.length)return this;
      for (e = 0; t.length > e; e++)if (r = this.select(t[e]), s = r.bounds(), u.isArray(s))if (u.isArray(o))for (i = 0; 4 > i; i++)n[i] * s[i] < n[i] * o[i] && (o[i] = s[i]); else o = s;
      if (u.isArray(o)) {
        for (i = 0; 4 > i; i++)o[i] -= n[i];
        this.zoomX = 1, this.zoomY = 1, this.setBoundingBox(o, !0)
      }
      return this
    }, setZoom: function(t, e) {
      var i = this.attr.zoom.factorx, r = this.attr.zoom.factory;
      return this.attr.zoom.factorx = t / this.zoomX, this.attr.zoom.factory = e / this.zoomY, this.zoomIn(), this.attr.zoom.factorx = i, this.attr.zoom.factory = r, this
    }, removeObject: function(e) {
      var i, r;
      if (u.isArray(e)) {
        for (r = 0; e.length > r; r++)this.removeObject(e[r]);
        return this
      }
      if (e = this.select(e), !u.exists(e) || u.isString(e))return this;
      try {
        for (i in e.childElements)e.childElements.hasOwnProperty(i) && e.childElements[i].board.removeObject(e.childElements[i]);
        for (i in this.objects)this.objects.hasOwnProperty(i) && u.exists(this.objects[i].childElements) && (delete this.objects[i].childElements[e.id], delete this.objects[i].descendants[e.id]);
        if (e._pos > -1)for (this.objectsList.splice(e._pos, 1), i = e._pos; this.objectsList.length > i; i++)this.objectsList[i]._pos--; else t.debug("Board.removeObject: object " + e.id + " not found in list.");
        delete this.objects[e.id], delete this.elementsByName[e.name], e.visProp && e.visProp.trace && e.clearTrace(), u.exists(e.remove) && e.remove()
      } catch (s) {
        t.debug(e.id + ": Could not be removed: " + s)
      }
      return this.update(), this
    }, removeAncestors: function(t) {
      var e;
      for (e in t.ancestors)t.ancestors.hasOwnProperty(e) && this.removeAncestors(t.ancestors[e]);
      return this.removeObject(t), this
    }, initGeonextBoard: function() {
      var t, e, i;
      return t = this.create("point", [0, 0], {id: this.id + "g00e0", name: "Ursprung", withLabel: !1, visible: !1, fixed: !0}), e = this.create("point", [1, 0], {id: this.id + "gX0e0", name: "Punkt_1_0", withLabel: !1, visible: !1, fixed: !0}), i = this.create("point", [0, 1], {id: this.id + "gY0e0", name: "Punkt_0_1", withLabel: !1, visible: !1, fixed: !0}), this.create("line", [t, e], {id: this.id + "gXLe0", name: "X-Achse", withLabel: !1, visible: !1}), this.create("line", [t, i], {id: this.id + "gYLe0", name: "Y-Achse", withLabel: !1, visible: !1}), this
    }, initInfobox: function() {
      var t = u.copyAttributes({}, this.options, "infobox");
      return t.id = this.id + "_infobox", this.infobox = this.create("text", [0, 0, "0,0"], t), this.infobox.distanceX = -20, this.infobox.distanceY = 25, this.infobox.dump = !1, this.renderer.hide(this.infobox), this
    }, resizeContainer: function(t, e, i, r) {
      var s;
      return r || (s = this.getBoundingBox()), this.canvasWidth = parseInt(t, 10), this.canvasHeight = parseInt(e, 10), i || (this.containerObj.style.width = this.canvasWidth + "px", this.containerObj.style.height = this.canvasHeight + "px"), this.renderer.resize(this.canvasWidth, this.canvasHeight), r || this.setBoundingBox(s, this.keepaspectratio), this
    }, showDependencies: function() {
      var t, e, i, r, s;
      e = "<p>\n";
      for (t in this.objects)if (this.objects.hasOwnProperty(t)) {
        s = 0;
        for (i in this.objects[t].childElements)this.objects[t].childElements.hasOwnProperty(i) && (s += 1);
        s >= 0 && (e += "<strong>" + this.objects[t].id + ":<" + "/strong> ");
        for (i in this.objects[t].childElements)this.objects[t].childElements.hasOwnProperty(i) && (e += this.objects[t].childElements[i].id + "(" + this.objects[t].childElements[i].name + ")" + ", ");
        e += "<p>\n"
      }
      return e += "</p>\n", r = window.open(), r.document.open(), r.document.write(e), r.document.close(), this
    }, showXML: function() {
      var t = window.open("");
      return t.document.open(), t.document.write("<pre>" + u.escapeHTML(this.xmlString) + "<" + "/pre>"), t.document.close(), this
    }, prepareUpdate: function() {
      var t, e, i = this.objectsList.length;
      for (t = 0; i > t; t++)e = this.objectsList[t], e.needsUpdate = e.needsRegularUpdate || this.needsFullUpdate;
      for (t in this.groups)this.groups.hasOwnProperty(t) && (e = this.groups[t], e.needsUpdate = e.needsRegularUpdate || this.needsFullUpdate);
      return this
    }, updateElements: function(t) {
      var e, i;
      for (t = this.select(t), e = 0; this.objectsList.length > e; e++)i = this.objectsList[e], i.update(!u.exists(t) || i.id !== t.id);
      for (e in this.groups)this.groups.hasOwnProperty(e) && this.groups[e].update(t);
      return this
    }, updateRenderer: function() {
      var t, e, i = this.objectsList.length;
      if ("canvas" === this.renderer.type)this.updateRendererCanvas(); else for (t = 0; i > t; t++)e = this.objectsList[t], e.updateRenderer();
      return this
    }, updateRendererCanvas: function() {
      var t, e, i, r, s, o = this.objectsList.length, n = this.options.layer, a = this.options.layer.numlayers, h = Number.NEGATIVE_INFINITY;
      for (i = 0; a > i; i++) {
        r = Number.POSITIVE_INFINITY;
        for (s in n)n.hasOwnProperty(s) && n[s] > h && r > n[s] && (r = n[s]);
        for (h = r, t = 0; o > t; t++)e = this.objectsList[t], e.visProp.layer === r && e.prepareUpdate().updateRenderer()
      }
      return this
    }, addHook: function(t, e, i) {return e = u.def(e, "update"), i = u.def(i, this), this.hooks.push([e, t]), this.on(e, t, i), this.hooks.length - 1}, addEvent: t.shortcut(t.Board.prototype, "on"), removeHook: function(t) {return this.hooks[t] && (this.off(this.hooks[t][0], this.hooks[t][1]), this.hooks[t] = null), this}, removeEvent: t.shortcut(t.Board.prototype, "off"), updateHooks: function() {
      var t = Array.prototype.slice.call(arguments, 0);
      return t[0] = u.def(t[0], "update"), this.triggerEventHandlers([t[0]], arguments), this
    }, addChild: function(t) {return u.exists(t) && u.exists(t.containerObj) && (this.dependentBoards.push(t), this.update()), this}, removeChild: function(t) {
      var e;
      for (e = this.dependentBoards.length - 1; e >= 0; e--)this.dependentBoards[e] === t && this.dependentBoards.splice(e, 1);
      return this
    }, update: function(t) {
      var e, i, r, s;
      if (this.inUpdate || this.isSuspendedUpdate)return this;
      for (this.inUpdate = !0, "all" === this.attr.minimizereflow && this.containerObj && "vml" !== this.renderer.type && (s = this.renderer.removeToInsertLater(this.containerObj)), "svg" === this.attr.minimizereflow && "svg" === this.renderer.type && (s = this.renderer.removeToInsertLater(this.renderer.svgRoot)), this.prepareUpdate().updateElements(t).updateConditions(), this.renderer.suspendRedraw(this), this.updateRenderer(), this.renderer.unsuspendRedraw(), this.triggerEventHandlers(["update"], []), s && s(), i = this.dependentBoards.length, e = 0; i > e; e++)r = this.dependentBoards[e], u.exists(r) && r !== this && (r.updateQuality = this.updateQuality, r.prepareUpdate().updateElements().updateConditions(), r.renderer.suspendRedraw(), r.updateRenderer(), r.renderer.unsuspendRedraw(), r.triggerEventHandlers(["update"], []));
      return this.inUpdate = !1, this
    }, fullUpdate: function() {return this.needsFullUpdate = !0, this.update(), this.needsFullUpdate = !1, this}, addGrid: function() {return this.create("grid", []), this}, removeGrids: function() {
      var t;
      for (t = 0; this.grids.length > t; t++)this.removeObject(this.grids[t]);
      return this.grids.length = 0, this.update(), this
    }, create: function(e, i, r) {
      var s, o;
      for (e = e.toLowerCase(), u.exists(i) || (i = []), u.exists(r) || (r = {}), o = 0; i.length > o; o++)"string" != typeof i[o] || "text" === e && 2 === o || (i[o] = this.select(i[o]));
      if ("function" != typeof t.elements[e])throw Error("JSXGraph: create: Unknown element type given: " + e);
      return s = t.elements[e](this, i, r), u.exists(s) ? (s.prepareUpdate && s.update && s.updateRenderer && s.prepareUpdate().update().updateRenderer(), s) : (t.debug("JSXGraph: create: failure creating " + e), s)
    }, createElement: t.shortcut(t.Board.prototype, "create"), clearTraces: function() {
      var t;
      for (t = 0; this.objectsList.length > t; t++)this.objectsList[t].clearTrace();
      return this.numTraces = 0, this
    }, suspendUpdate: function() {return this.inUpdate || (this.isSuspendedUpdate = !0), this}, unsuspendUpdate: function() {return this.isSuspendedUpdate && (this.isSuspendedUpdate = !1, this.update()), this}, setBoundingBox: function(t, e) {
      var i, r, s = f.getDimensions(this.container, this.document);
      return u.isArray(t) ? (this.plainBB = t, this.canvasWidth = parseInt(s.width, 10), this.canvasHeight = parseInt(s.height, 10), r = this.canvasWidth, i = this.canvasHeight, e ? (this.unitX = r / (t[2] - t[0]), this.unitY = i / (t[1] - t[3]), Math.abs(this.unitX) < Math.abs(this.unitY) ? this.unitY = Math.abs(this.unitX) * this.unitY / Math.abs(this.unitY) : this.unitX = Math.abs(this.unitY) * this.unitX / Math.abs(this.unitX), this.keepaspectratio = !0) : (this.unitX = r / (t[2] - t[0]), this.unitY = i / (t[1] - t[3]), this.keepaspectratio = !1), this.moveOrigin(-this.unitX * t[0], this.unitY * t[1]), this) : this
    }, getBoundingBox: function() {
      var t = new i(e.COORDS_BY_SCREEN, [0, 0], this), r = new i(e.COORDS_BY_SCREEN, [this.canvasWidth, this.canvasHeight], this);
      return[t.usrCoords[1], t.usrCoords[2], r.usrCoords[1], r.usrCoords[2]]
    }, addAnimation: function(t) {
      var e = this;
      return this.animationObjects[t.id] = t, this.animationIntervalCode || (this.animationIntervalCode = window.setInterval(function() {e.animate()}, t.board.attr.animationdelay)), this
    }, stopAllAnimation: function() {
      var t;
      for (t in this.animationObjects)this.animationObjects.hasOwnProperty(t) && u.exists(this.animationObjects[t]) && (this.animationObjects[t] = null, delete this.animationObjects[t]);
      return window.clearInterval(this.animationIntervalCode), delete this.animationIntervalCode, this
    }, animate: function() {
      var t, i, r, s, o, n, a, h, l = 0, c = null;
      for (i in this.animationObjects)if (this.animationObjects.hasOwnProperty(i) && u.exists(this.animationObjects[i])) {
        if (l += 1, r = this.animationObjects[i], r.animationPath && (s = u.isFunction(r.animationPath) ? r.animationPath((new Date).getTime() - r.animationStart) : r.animationPath.pop(), !u.exists(s) || !u.isArray(s) && isNaN(s) ? delete r.animationPath : (r.setPositionDirectly(e.COORDS_BY_USER, s), r.prepareUpdate().update().updateRenderer(), c = r)), r.animationData) {
          a = 0;
          for (o in r.animationData)r.animationData.hasOwnProperty(o) && (n = r.animationData[o].pop(), u.exists(n) ? (a += 1, t = {}, t[o] = n, r.setAttribute(t)) : delete r.animationData[n]);
          0 === a && delete r.animationData
        }
        u.exists(r.animationData) || u.exists(r.animationPath) || (this.animationObjects[i] = null, delete this.animationObjects[i], u.exists(r.animationCallback) && (h = r.animationCallback, r.animationCallback = null, h()))
      }
      return 0 === l ? (window.clearInterval(this.animationIntervalCode), delete this.animationIntervalCode) : this.update(c), this
    }, migratePoint: function(e, i, r) {
      var s, o, n, a, h, l, c = !1;
      e = this.select(e), i = this.select(i), t.exists(e.label) && (l = e.label.id, c = !0, this.removeObject(e.label));
      for (o in e.childElements)if (e.childElements.hasOwnProperty(o)) {
        s = e.childElements[o], a = !1;
        for (n in s)s.hasOwnProperty(n) && s[n] === e && (s[n] = i, a = !0);
        for (a && delete e.childElements[o], h = 0; s.parents.length > h; h++)s.parents[h] === e.id && (s.parents[h] = i.id);
        i.addChild(s)
      }
      return r && (c && (delete i.childElements[l], delete i.descendants[l]), i.label && this.removeObject(i.label), delete this.elementsByName[i.name], i.name = e.name, c && i.createLabel()), this.removeObject(e), u.exists(i.name) && "" !== i.name && (this.elementsByName[i.name] = i), this.prepareUpdate().update().updateRenderer(), this
    }, emulateColorblindness: function(e) {
      var i, r;
      if (u.exists(e) || (e = "none"), this.currentCBDef === e)return this;
      for (i in this.objects)this.objects.hasOwnProperty(i) && (r = this.objects[i], "none" !== e ? ("none" === this.currentCBDef && (r.visPropOriginal = {strokecolor: r.visProp.strokecolor, fillcolor: r.visProp.fillcolor, highlightstrokecolor: r.visProp.highlightstrokecolor, highlightfillcolor: r.visProp.highlightfillcolor}), r.setAttribute({strokecolor: d.rgb2cb(r.visPropOriginal.strokecolor, e), fillcolor: d.rgb2cb(r.visPropOriginal.fillcolor, e), highlightstrokecolor: d.rgb2cb(r.visPropOriginal.highlightstrokecolor, e), highlightfillcolor: d.rgb2cb(r.visPropOriginal.highlightfillcolor, e)})) : u.exists(r.visPropOriginal) && t.extend(r.visProp, r.visPropOriginal));
      return this.currentCBDef = e, this.update(), this
    }, select: function(e) {
      var i, r, s, o, n = e;
      if (null === n)return n;
      if ("string" == typeof n && "" !== n)u.exists(this.objects[n]) ? n = this.objects[n] : u.exists(this.elementsByName[n]) ? n = this.elementsByName[n] : u.exists(this.groups[n]) && (n = this.groups[n]); else if ("function" == typeof n || "object" == typeof n && !t.isArray(n) && "function" != typeof n.setAttribute) {
        for (i = u.filterElements(this.objectsList, n), r = {}, o = i.length, s = 0; o > s; s++)r[i[s].id] = i[s];
        n = new C(r)
      } else"object" == typeof n && t.exists(n.id) && !t.exists(this.objects[n.id]) && (n = null);
      return n
    }, hasPoint: function(e, i) {
      var r = e, s = i, o = this.getBoundingBox();
      return t.exists(e) && t.isArray(e.usrCoords) && (r = e.usrCoords[1], s = e.usrCoords[2]), "number" == typeof r && "number" == typeof s && r > o[0] && o[2] > r && o[1] > s && s > o[3] ? !0 : !1
    }, updateCSSTransforms: function() {
      var t = this.containerObj, e = t, i = t;
      for (this.cssTransMat = f.getCSSTransformMatrix(e), e = e.offsetParent; e;) {
        for (this.cssTransMat = o.matMatMult(f.getCSSTransformMatrix(e), this.cssTransMat), i = i.parentNode; i !== e;)this.cssTransMat = o.matMatMult(f.getCSSTransformMatrix(e), this.cssTransMat), i = i.parentNode;
        e = e.offsetParent
      }
      return this.cssTransMat = o.inverse(this.cssTransMat), this
    }, __evt__down: function() {}, __evt__mousedown: function() {}, __evt__touchstart: function() {}, __evt__up: function() {}, __evt__mouseup: function() {}, __evt__touchend: function() {}, __evt__move: function() {}, __evt__mousemove: function() {}, __evt__touchmove: function() {}, __evt__hit: function() {}, __evt__mousehit: function() {}, __evt__update: function() {}, __evt__boundingbox: function() {}, __evt: function() {}, createRoulette: function(t, e, i, r, o, n, h) {
      var l = this, c = function() {
        var c, d = 0, u = 0, p = 0, f = i, m = s.root(function(i) {
          var r = t.X(f), s = t.Y(f), o = e.X(i), n = e.Y(i);
          return(r - o) * (r - o) + (s - n) * (s - n)
        }, [0, 2 * Math.PI]), b = 0, g = 0, v = l.create("transform", [function() {return d}], {type: "rotate"}), y = l.create("transform", [function() {return d}, function() {return t.X(f)}, function() {return t.Y(f)}], {type: "rotate"}), C = l.create("transform", [function() {return u}, function() {return p}], {type: "translate"}), P = function(t, e, i) {
          var r = s.D(t.X)(e), o = s.D(t.Y)(e), n = s.D(t.X)(i), a = s.D(t.Y)(i), h = s.D(t.X)(.5 * (e + i)), l = s.D(t.Y)(.5 * (e + i)), c = Math.sqrt(r * r + o * o), d = Math.sqrt(n * n + a * a), u = Math.sqrt(h * h + l * l);
          return(c + 4 * u + d) * (i - e) / 6
        }, _ = function(t) {return c - P(e, m, t)}, E = Math.PI / 18, S = 9 * E, x = null;
        return this.rolling = function() {
          var i, n, x, O, T;
          b = f + o * r, c = P(t, f, b), g = s.root(_, m), i = new a(t.X(b), t.Y(b)), n = new a(e.X(g), e.Y(g)), x = new a(s.D(t.X)(b), s.D(t.Y)(b)), O = new a(s.D(e.X)(g), s.D(e.Y)(g)), T = a.C.div(x, O), d = Math.atan2(T.imaginary, T.real), T.div(a.C.abs(T)), T.mult(n), u = i.real - T.real, p = i.imaginary - T.imaginary, -E > d && d > -S ? (d = -E, y.applyOnce(h)) : d > E && S > d ? (d = E, y.applyOnce(h)) : (v.applyOnce(h), C.applyOnce(h), f = b, m = g), l.update()
        }, this.start = function() {return n > 0 && (x = window.setInterval(this.rolling, n)), this}, this.stop = function() {return window.clearInterval(x), this}, this
      };
      return new c
    }}), t.Board
  }), define("renderer/svg", ["jxg", "options", "renderer/abstract", "base/constants", "utils/type", "utils/env", "utils/color", "math/numerics"], function(t, e, i, r, s, o, n, a) {
    return t.SVGRenderer = function(t, i) {
      var r;
      for (this.type = "svg", this.isIE = -1 !== navigator.appVersion.indexOf("MSIE") || navigator.userAgent.match(/Trident\//), this.svgRoot = null, this.svgNamespace = "http://www.w3.org/2000/svg", this.xlinkNamespace = "http://www.w3.org/1999/xlink", this.container = t, this.container.style.MozUserSelect = "none", this.container.style.overflow = "hidden", "" === this.container.style.position && (this.container.style.position = "relative"), this.svgRoot = this.container.ownerDocument.createElementNS(this.svgNamespace, "svg"), this.svgRoot.style.overflow = "hidden", this.svgRoot.style.width = i.width + "px", this.svgRoot.style.height = i.height + "px", this.container.appendChild(this.svgRoot), this.defs = this.container.ownerDocument.createElementNS(this.svgNamespace, "defs"), this.svgRoot.appendChild(this.defs), this.filter = this.container.ownerDocument.createElementNS(this.svgNamespace, "filter"), this.filter.setAttributeNS(null, "id", this.container.id + "_" + "f1"), this.filter.setAttributeNS(null, "width", "300%"), this.filter.setAttributeNS(null, "height", "300%"), this.filter.setAttributeNS(null, "filterUnits", "userSpaceOnUse"), this.feOffset = this.container.ownerDocument.createElementNS(this.svgNamespace, "feOffset"), this.feOffset.setAttributeNS(null, "result", "offOut"), this.feOffset.setAttributeNS(null, "in", "SourceAlpha"), this.feOffset.setAttributeNS(null, "dx", "5"), this.feOffset.setAttributeNS(null, "dy", "5"), this.filter.appendChild(this.feOffset), this.feGaussianBlur = this.container.ownerDocument.createElementNS(this.svgNamespace, "feGaussianBlur"), this.feGaussianBlur.setAttributeNS(null, "result", "blurOut"), this.feGaussianBlur.setAttributeNS(null, "in", "offOut"), this.feGaussianBlur.setAttributeNS(null, "stdDeviation", "3"), this.filter.appendChild(this.feGaussianBlur), this.feBlend = this.container.ownerDocument.createElementNS(this.svgNamespace, "feBlend"), this.feBlend.setAttributeNS(null, "in", "SourceGraphic"), this.feBlend.setAttributeNS(null, "in2", "blurOut"), this.feBlend.setAttributeNS(null, "mode", "normal"), this.filter.appendChild(this.feBlend), this.defs.appendChild(this.filter), this.layer = [], r = 0; e.layer.numlayers > r; r++)this.layer[r] = this.container.ownerDocument.createElementNS(this.svgNamespace, "g"), this.svgRoot.appendChild(this.layer[r]);
      this.dashArray = ["2, 2", "5, 5", "10, 10", "20, 20", "20, 10, 10, 10", "20, 5, 10, 5"]
    }, t.SVGRenderer.prototype = new i, t.extend(t.SVGRenderer.prototype, {_createArrowHead: function(t, e) {
      var i, r, o, n, a = t.id + "Triangle";
      return s.exists(e) && (a += e), i = this.createPrim("marker", a), i.setAttributeNS(null, "stroke", s.evaluate(t.visProp.strokecolor)), i.setAttributeNS(null, "stroke-opacity", s.evaluate(t.visProp.strokeopacity)), i.setAttributeNS(null, "fill", s.evaluate(t.visProp.strokecolor)), i.setAttributeNS(null, "fill-opacity", s.evaluate(t.visProp.strokeopacity)), i.setAttributeNS(null, "stroke-width", 0), i.setAttributeNS(null, "orient", "auto"), i.setAttributeNS(null, "markerUnits", "strokeWidth"), o = parseInt(t.visProp.strokewidth, 10), i.setAttributeNS(null, "viewBox", -o + " " + -o + " " + 10 * o + " " + 10 * o), n = Math.max(3 * o, 10), i.setAttributeNS(null, "markerHeight", n), i.setAttributeNS(null, "markerWidth", n), r = this.container.ownerDocument.createElementNS(this.svgNamespace, "path"), "End" === e ? (i.setAttributeNS(null, "refY", 5), i.setAttributeNS(null, "refX", 10), r.setAttributeNS(null, "d", "M 10 0 L 0 5 L 10 10 z")) : (i.setAttributeNS(null, "refY", 5), i.setAttributeNS(null, "refX", 0), r.setAttributeNS(null, "d", "M 0 0 L 10 5 L 0 10 z")), i.appendChild(r), i
    }, _setArrowAtts: function(t, e, i, r, s) {
      var o, n;
      t && (t.setAttributeNS(null, "stroke", e), t.setAttributeNS(null, "stroke-opacity", i), t.setAttributeNS(null, "fill", e), t.setAttributeNS(null, "fill-opacity", i), t.setAttributeNS(null, "stroke-width", 0), o = r, t.setAttributeNS(null, "viewBox", -o + " " + -o + " " + 10 * o + " " + 10 * o), n = Math.max(3 * o, 10), t.setAttributeNS(null, "markerHeight", n), t.setAttributeNS(null, "markerWidth", n), this.isIE && s.parentNode.insertBefore(s, s))
    }, updateTicks: function(t) {
      var e, i, r, o, n, a = "", h = t.ticks.length;
      for (e = 0; h > e; e++)i = t.ticks[e], o = i[0], n = i[1], "number" == typeof o[0] && "number" == typeof o[1] && (a += "M " + o[0] + " " + n[0] + " L " + o[1] + " " + n[1] + " ");
      r = t.rendNode, s.exists(r) || (r = this.createPrim("path", t.id), this.appendChildPrim(r, t.visProp.layer), t.rendNode = r), r.setAttributeNS(null, "stroke", t.visProp.strokecolor), r.setAttributeNS(null, "stroke-opacity", t.visProp.strokeopacity), r.setAttributeNS(null, "stroke-width", t.visProp.strokewidth), this.updatePathPrim(r, a, t.board)
    }, displayCopyright: function(t, e) {
      var i, r = this.createPrim("text", "licenseText");
      r.setAttributeNS(null, "x", "20px"), r.setAttributeNS(null, "y", 2 + e + "px"), r.setAttributeNS(null, "style", "font-family:Arial,Helvetica,sans-serif; font-size:" + e + "px; fill:#356AA0;  opacity:0.3;"), i = this.container.ownerDocument.createTextNode(t), r.appendChild(i), this.appendChildPrim(r, 0)
    }, drawInternalText: function(t) {
      var e = this.createPrim("text", t.id);
      return e.setAttributeNS(null, "class", t.visProp.cssclass), e.setAttributeNS("http://www.w3.org/XML/1998/namespace", "space", "preserve"), t.rendNodeText = this.container.ownerDocument.createTextNode(""), e.appendChild(t.rendNodeText), this.appendChildPrim(e, t.visProp.layer), e
    }, updateInternalText: function(t) {
      var e, i = t.plaintext;
      isNaN(t.coords.scrCoords[1] + t.coords.scrCoords[2]) || (e = t.coords.scrCoords[1], t.visPropOld.left !== t.visProp.anchorx + e && (t.rendNode.setAttributeNS(null, "x", e + "px"), "left" === t.visProp.anchorx ? t.rendNode.setAttributeNS(null, "text-anchor", "start") : "right" === t.visProp.anchorx ? t.rendNode.setAttributeNS(null, "text-anchor", "end") : "middle" === t.visProp.anchorx && t.rendNode.setAttributeNS(null, "text-anchor", "middle"), t.visPropOld.left = t.visProp.anchorx + e), e = t.coords.scrCoords[2], t.visPropOld.top !== t.visProp.anchory + e && (t.rendNode.setAttributeNS(null, "y", e + .5 * this.vOffsetText + "px"), "bottom" === t.visProp.anchory ? t.rendNode.setAttributeNS(null, "dominant-baseline", "text-after-edge") : "top" === t.visProp.anchory ? t.rendNode.setAttributeNS(null, "dominant-baseline", "text-before-edge") : "middle" === t.visProp.anchory && t.rendNode.setAttributeNS(null, "dominant-baseline", "middle"), t.visPropOld.top = t.visProp.anchory + e)), t.htmlStr !== i && (t.rendNodeText.data = i, t.htmlStr = i), this.transformImage(t, t.transformations)
    }, updateInternalTextStyle: function(t, e, i) {this.setObjectFillColor(t, e, i)}, drawImage: function(t) {
      var e = this.createPrim("image", t.id);
      e.setAttributeNS(null, "preserveAspectRatio", "none"), this.appendChildPrim(e, t.visProp.layer), t.rendNode = e, this.updateImage(t)
    }, transformImage: function(t, e) {
      var i, r, s = t.rendNode, o = "", n = e.length;
      n > 0 && (r = this.joinTransforms(t, e), i = [r[1][1], r[2][1], r[1][2], r[2][2], r[1][0], r[2][0]].join(","), o += " matrix(" + i + ") ", s.setAttributeNS(null, "transform", o))
    }, updateImageURL: function(t) {
      var e = s.evaluate(t.url);
      t.rendNode.setAttributeNS(this.xlinkNamespace, "xlink:href", e)
    }, updateImageStyle: function(t, e) {
      var i = e ? t.visProp.highlightcssclass : t.visProp.cssclass;
      t.rendNode.setAttributeNS(null, "class", i)
    }, appendChildPrim: function(t, i) {return s.exists(i) ? i >= e.layer.numlayers && (i = e.layer.numlayers - 1) : i = 0, this.layer[i].appendChild(t), t}, createPrim: function(t, e) {
      var i = this.container.ownerDocument.createElementNS(this.svgNamespace, t);
      return i.setAttributeNS(null, "id", this.container.id + "_" + e), i.style.position = "absolute", "path" === t && (i.setAttributeNS(null, "stroke-linecap", "round"), i.setAttributeNS(null, "stroke-linejoin", "round")), i
    }, remove: function(t) {s.exists(t) && s.exists(t.parentNode) && t.parentNode.removeChild(t)}, makeArrows: function(t) {
      var e;
      return t.visPropOld.firstarrow === t.visProp.firstarrow && t.visPropOld.lastarrow === t.visProp.lastarrow ? (this.isIE && t.visProp.visible && (t.visProp.firstarrow || t.visProp.lastarrow) && t.rendNode.parentNode.insertBefore(t.rendNode, t.rendNode), void 0) : (t.visProp.firstarrow ? (e = t.rendNodeTriangleStart, s.exists(e) ? this.defs.appendChild(e) : (e = this._createArrowHead(t, "End"), this.defs.appendChild(e), t.rendNodeTriangleStart = e, t.rendNode.setAttributeNS(null, "marker-start", "url(#" + this.container.id + "_" + t.id + "TriangleEnd)"))) : (e = t.rendNodeTriangleStart, s.exists(e) && this.remove(e)), t.visProp.lastarrow ? (e = t.rendNodeTriangleEnd, s.exists(e) ? this.defs.appendChild(e) : (e = this._createArrowHead(t, "Start"), this.defs.appendChild(e), t.rendNodeTriangleEnd = e, t.rendNode.setAttributeNS(null, "marker-end", "url(#" + this.container.id + "_" + t.id + "TriangleStart)"))) : (e = t.rendNodeTriangleEnd, s.exists(e) && this.remove(e)), t.visPropOld.firstarrow = t.visProp.firstarrow, t.visPropOld.lastarrow = t.visProp.lastarrow, void 0)
    }, updateEllipsePrim: function(t, e, i, r, s) {
      var o = 1e6;
      e = o > Math.abs(e) ? e : o * e / Math.abs(e), i = o > Math.abs(i) ? i : o * i / Math.abs(i), r = o > Math.abs(r) ? r : o * r / Math.abs(r), s = o > Math.abs(s) ? s : o * s / Math.abs(s), t.setAttributeNS(null, "cx", e), t.setAttributeNS(null, "cy", i), t.setAttributeNS(null, "rx", Math.abs(r)), t.setAttributeNS(null, "ry", Math.abs(s))
    }, updateLinePrim: function(t, e, i, r, s) {
      var o = 1e6;
      isNaN(e + i + r + s) || (e = o > Math.abs(e) ? e : o * e / Math.abs(e), i = o > Math.abs(i) ? i : o * i / Math.abs(i), r = o > Math.abs(r) ? r : o * r / Math.abs(r), s = o > Math.abs(s) ? s : o * s / Math.abs(s), t.setAttributeNS(null, "x1", e), t.setAttributeNS(null, "y1", i), t.setAttributeNS(null, "x2", r), t.setAttributeNS(null, "y2", s))
    }, updatePathPrim: function(t, e) {"" === e && (e = "M 0 0"), t.setAttributeNS(null, "d", e)}, updatePathStringPoint: function(t, e, i) {
      var r = "", s = t.coords.scrCoords, o = .5 * e * Math.sqrt(3), n = .5 * e;
      return"x" === i ? r = " M " + (s[1] - e) + " " + (s[2] - e) + " L " + (s[1] + e) + " " + (s[2] + e) + " M " + (s[1] + e) + " " + (s[2] - e) + " L " + (s[1] - e) + " " + (s[2] + e) : "+" === i ? r = " M " + (s[1] - e) + " " + s[2] + " L " + (s[1] + e) + " " + s[2] + " M " + s[1] + " " + (s[2] - e) + " L " + s[1] + " " + (s[2] + e) : "<>" === i ? r = " M " + (s[1] - e) + " " + s[2] + " L " + s[1] + " " + (s[2] + e) + " L " + (s[1] + e) + " " + s[2] + " L " + s[1] + " " + (s[2] - e) + " Z " : "^" === i ? r = " M " + s[1] + " " + (s[2] - e) + " L " + (s[1] - o) + " " + (s[2] + n) + " L " + (s[1] + o) + " " + (s[2] + n) + " Z " : "v" === i ? r = " M " + s[1] + " " + (s[2] + e) + " L " + (s[1] - o) + " " + (s[2] - n) + " L " + (s[1] + o) + " " + (s[2] - n) + " Z " : ">" === i ? r = " M " + (s[1] + e) + " " + s[2] + " L " + (s[1] - n) + " " + (s[2] - o) + " L " + (s[1] - n) + " " + (s[2] + o) + " Z " : "<" === i && (r = " M " + (s[1] - e) + " " + s[2] + " L " + (s[1] + n) + " " + (s[2] - o) + " L " + (s[1] + n) + " " + (s[2] + o) + " Z "), r
    }, updatePathStringPrim: function(t) {
      var e, i, r, s = " M ", o = " L ", n = " C ", a = s, h = 5e3, l = "";
      if (0 >= t.numberPoints)return"";
      if (r = Math.min(t.points.length, t.numberPoints), 1 === t.bezierDegree)for (e = 0; r > e; e++)i = t.points[e].scrCoords, isNaN(i[1]) || isNaN(i[2]) ? a = s : (i[1] = Math.max(Math.min(i[1], h), -h), i[2] = Math.max(Math.min(i[2], h), -h), l += a + i[1] + " " + i[2], a = o); else if (3 === t.bezierDegree)for (e = 0; r > e;)i = t.points[e].scrCoords, isNaN(i[1]) || isNaN(i[2]) ? a = s : (l += a + i[1] + " " + i[2], a === n && (e += 1, i = t.points[e].scrCoords, l += " " + i[1] + " " + i[2], e += 1, i = t.points[e].scrCoords, l += " " + i[1] + " " + i[2]), a = n), e += 1;
      return l
    }, updatePathStringBezierPrim: function(t) {
      var e, i, r, s, o, n, h, l = " M ", c = " C ", d = l, u = 5e3, p = "", f = t.visProp.strokewidth, m = "plot" !== t.visProp.curvetype;
      if (0 >= t.numberPoints)return"";
      for (m && t.board.options.curve.RDPsmoothing && (t.points = a.RamerDouglasPeucker(t.points, .5)), h = Math.min(t.points.length, t.numberPoints), i = 1; 3 > i; i++)for (d = l, e = 0; h > e; e++)s = t.points[e].scrCoords, isNaN(s[1]) || isNaN(s[2]) ? d = l : (s[1] = Math.max(Math.min(s[1], u), -u), s[2] = Math.max(Math.min(s[2], u), -u), d === l ? p += d + s[1] + " " + s[2] : (r = 2 * i, p += [d, o + .333 * (s[1] - o) + f * (r * Math.random() - i), " ", n + .333 * (s[2] - n) + f * (r * Math.random() - i), " ", o + .666 * (s[1] - o) + f * (r * Math.random() - i), " ", n + .666 * (s[2] - n) + f * (r * Math.random() - i), " ", s[1], " ", s[2]].join("")), d = c, o = s[1], n = s[2]);
      return p
    }, updatePolygonPrim: function(t, e) {
      var i, r, s = "", o = e.vertices.length;
      for (t.setAttributeNS(null, "stroke", "none"), i = 0; o - 1 > i; i++) {
        if (!e.vertices[i].isReal)return t.setAttributeNS(null, "points", ""), void 0;
        r = e.vertices[i].coords.scrCoords, s = s + r[1] + "," + r[2], o - 2 > i && (s += " ")
      }
      -1 === s.indexOf("NaN") && t.setAttributeNS(null, "points", s)
    }, updateRectPrim: function(t, e, i, r, s) {t.setAttributeNS(null, "x", e), t.setAttributeNS(null, "y", i), t.setAttributeNS(null, "width", r), t.setAttributeNS(null, "height", s)}, setPropertyPrim: function(t, e, i) {"stroked" !== e && t.setAttributeNS(null, e, i)}, show: function(t) {
      var e;
      t && t.rendNode && (e = t.rendNode, e.setAttributeNS(null, "display", "inline"), e.style.visibility = "inherit")
    }, hide: function(t) {
      var e;
      t && t.rendNode && (e = t.rendNode, e.setAttributeNS(null, "display", "none"), e.style.visibility = "hidden")
    }, setBuffering: function(t, e) {t.rendNode.setAttribute("buffered-rendering", e)}, setDashStyle: function(t) {
      var e = t.visProp.dash, i = t.rendNode;
      t.visProp.dash > 0 ? i.setAttributeNS(null, "stroke-dasharray", this.dashArray[e - 1]) : i.hasAttributeNS(null, "stroke-dasharray") && i.removeAttributeNS(null, "stroke-dasharray")
    }, setGradient: function(t) {
      var e, i, r, o, n, a, h, l, c, d = t.rendNode;
      i = s.evaluate(t.visProp.fillopacity), i = i > 0 ? i : 0, e = s.evaluate(t.visProp.fillcolor), "linear" === t.visProp.gradient ? (r = this.createPrim("linearGradient", t.id + "_gradient"), a = "0%", h = "100%", l = "0%", c = "0%", r.setAttributeNS(null, "x1", a), r.setAttributeNS(null, "x2", h), r.setAttributeNS(null, "y1", l), r.setAttributeNS(null, "y2", c), o = this.createPrim("stop", t.id + "_gradient1"), o.setAttributeNS(null, "offset", "0%"), o.setAttributeNS(null, "style", "stop-color:" + e + ";stop-opacity:" + i), n = this.createPrim("stop", t.id + "_gradient2"), n.setAttributeNS(null, "offset", "100%"), n.setAttributeNS(null, "style", "stop-color:" + t.visProp.gradientsecondcolor + ";stop-opacity:" + t.visProp.gradientsecondopacity), r.appendChild(o), r.appendChild(n), this.defs.appendChild(r), d.setAttributeNS(null, "style", "fill:url(#" + this.container.id + "_" + t.id + "_gradient)"), t.gradNode1 = o, t.gradNode2 = n) : "radial" === t.visProp.gradient ? (r = this.createPrim("radialGradient", t.id + "_gradient"), r.setAttributeNS(null, "cx", "50%"), r.setAttributeNS(null, "cy", "50%"), r.setAttributeNS(null, "r", "50%"), r.setAttributeNS(null, "fx", 100 * t.visProp.gradientpositionx + "%"), r.setAttributeNS(null, "fy", 100 * t.visProp.gradientpositiony + "%"), o = this.createPrim("stop", t.id + "_gradient1"), o.setAttributeNS(null, "offset", "0%"), o.setAttributeNS(null, "style", "stop-color:" + t.visProp.gradientsecondcolor + ";stop-opacity:" + t.visProp.gradientsecondopacity), n = this.createPrim("stop", t.id + "_gradient2"), n.setAttributeNS(null, "offset", "100%"), n.setAttributeNS(null, "style", "stop-color:" + e + ";stop-opacity:" + i), r.appendChild(o), r.appendChild(n), this.defs.appendChild(r), d.setAttributeNS(null, "style", "fill:url(#" + this.container.id + "_" + t.id + "_gradient)"), t.gradNode1 = o, t.gradNode2 = n) : d.removeAttributeNS(null, "style")
    }, updateGradient: function(t) {
      var e, i, r = t.gradNode1, o = t.gradNode2;
      s.exists(r) && s.exists(o) && (i = s.evaluate(t.visProp.fillopacity), i = i > 0 ? i : 0, e = s.evaluate(t.visProp.fillcolor), "linear" === t.visProp.gradient ? (r.setAttributeNS(null, "style", "stop-color:" + e + ";stop-opacity:" + i), o.setAttributeNS(null, "style", "stop-color:" + t.visProp.gradientsecondcolor + ";stop-opacity:" + t.visProp.gradientsecondopacity)) : "radial" === t.visProp.gradient && (r.setAttributeNS(null, "style", "stop-color:" + t.visProp.gradientsecondcolor + ";stop-opacity:" + t.visProp.gradientsecondopacity), o.setAttributeNS(null, "style", "stop-color:" + e + ";stop-opacity:" + i)))
    }, setObjectFillColor: function(e, i, r) {
      var o, a, h, l, c = s.evaluate(i), d = s.evaluate(r);
      d = d > 0 ? d : 0, (e.visPropOld.fillcolor !== c || e.visPropOld.fillopacity !== d) && (s.exists(c) && c !== !1 && (9 !== c.length ? (a = c, l = d) : (h = n.rgba2rgbo(c), a = h[0], l = d * h[1]), o = e.rendNode, "none" !== a ? o.setAttributeNS(null, "fill", a) : l = 0, e.type === t.OBJECT_TYPE_IMAGE ? o.setAttributeNS(null, "opacity", l) : o.setAttributeNS(null, "fill-opacity", l), s.exists(e.visProp.gradient) && this.updateGradient(e)), e.visPropOld.fillcolor = c, e.visPropOld.fillopacity = d)
    }, setObjectStrokeColor: function(t, e, i) {
      var o, a, h, l, c = s.evaluate(e), d = s.evaluate(i);
      d = d > 0 ? d : 0, (t.visPropOld.strokecolor !== c || t.visPropOld.strokeopacity !== d) && (s.exists(c) && c !== !1 && (9 !== c.length ? (o = c, h = d) : (a = n.rgba2rgbo(c), o = a[0], h = d * a[1]), l = t.rendNode, t.elementClass === r.OBJECT_CLASS_TEXT ? "html" === t.visProp.display ? (l.style.color = o, l.style.opacity = h) : (l.setAttributeNS(null, "style", "fill:" + o), l.setAttributeNS(null, "style", "fill-opacity:" + h)) : (l.setAttributeNS(null, "stroke", o), l.setAttributeNS(null, "stroke-opacity", h)), t.type === r.OBJECT_TYPE_ARROW ? this._setArrowAtts(t.rendNodeTriangle, o, h, t.visProp.strokewidth, t.rendNode) : (t.elementClass === r.OBJECT_CLASS_CURVE || t.elementClass === r.OBJECT_CLASS_LINE) && (t.visProp.firstarrow && this._setArrowAtts(t.rendNodeTriangleStart, o, h, t.visProp.strokewidth, t.rendNode), t.visProp.lastarrow && this._setArrowAtts(t.rendNodeTriangleEnd, o, h, t.visProp.strokewidth, t.rendNode))), t.visPropOld.strokecolor = c, t.visPropOld.strokeopacity = d)
    }, setObjectStrokeWidth: function(t, e) {
      var i, o = s.evaluate(e);
      isNaN(o) || t.visPropOld.strokewidth === o || (i = t.rendNode, this.setPropertyPrim(i, "stroked", "true"), s.exists(o) && (this.setPropertyPrim(i, "stroke-width", o + "px"), t.type === r.OBJECT_TYPE_ARROW ? this._setArrowAtts(t.rendNodeTriangle, t.visProp.strokecolor, t.visProp.strokeopacity, o, t.rendNode) : (t.elementClass === r.OBJECT_CLASS_CURVE || t.elementClass === r.OBJECT_CLASS_LINE) && (t.visProp.firstarrow && this._setArrowAtts(t.rendNodeTriangleStart, t.visProp.strokecolor, t.visProp.strokeopacity, o, t.rendNode), t.visProp.lastarrow && this._setArrowAtts(t.rendNodeTriangleEnd, t.visProp.strokecolor, t.visProp.strokeopacity, o, t.rendNode))), t.visPropOld.strokewidth = o)
    }, setShadow: function(t) {t.visPropOld.shadow !== t.visProp.shadow && (s.exists(t.rendNode) && (t.visProp.shadow ? t.rendNode.setAttributeNS(null, "filter", "url(#" + this.container.id + "_" + "f1)") : t.rendNode.removeAttributeNS(null, "filter")), t.visPropOld.shadow = t.visProp.shadow)}, suspendRedraw: function() {}, unsuspendRedraw: function() {}, resize: function(t, e) {this.svgRoot.style.width = parseFloat(t) + "px", this.svgRoot.style.height = parseFloat(e) + "px"}, createTouchpoints: function(t) {
      var e, i, r, s;
      for (this.touchpoints = [], e = 0; t > e; e++)i = "touchpoint1_" + e, s = this.createPrim("path", i), this.appendChildPrim(s, 19), s.setAttributeNS(null, "d", "M 0 0"), this.touchpoints.push(s), this.setPropertyPrim(s, "stroked", "true"), this.setPropertyPrim(s, "stroke-width", "1px"), s.setAttributeNS(null, "stroke", "#000000"), s.setAttributeNS(null, "stroke-opacity", 1), s.setAttributeNS(null, "display", "none"), r = "touchpoint2_" + e, s = this.createPrim("ellipse", r), this.appendChildPrim(s, 19), this.updateEllipsePrim(s, 0, 0, 0, 0), this.touchpoints.push(s), this.setPropertyPrim(s, "stroked", "true"), this.setPropertyPrim(s, "stroke-width", "1px"), s.setAttributeNS(null, "stroke", "#000000"), s.setAttributeNS(null, "stroke-opacity", 1), s.setAttributeNS(null, "fill", "#ffffff"), s.setAttributeNS(null, "fill-opacity", 0), s.setAttributeNS(null, "display", "none")
    }, showTouchpoint: function(t) {this.touchpoints && t >= 0 && this.touchpoints.length > 2 * t && (this.touchpoints[2 * t].setAttributeNS(null, "display", "inline"), this.touchpoints[2 * t + 1].setAttributeNS(null, "display", "inline"))}, hideTouchpoint: function(t) {this.touchpoints && t >= 0 && this.touchpoints.length > 2 * t && (this.touchpoints[2 * t].setAttributeNS(null, "display", "none"), this.touchpoints[2 * t + 1].setAttributeNS(null, "display", "none"))}, updateTouchpoint: function(t, e) {
      var i, r, s = 37;
      this.touchpoints && t >= 0 && this.touchpoints.length > 2 * t && (i = e[0], r = e[1], this.touchpoints[2 * t].setAttributeNS(null, "d", "M " + (i - s) + " " + r + " " + "L " + (i + s) + " " + r + " " + "M " + i + " " + (r - s) + " " + "L " + i + " " + (r + s)), this.updateEllipsePrim(this.touchpoints[2 * t + 1], e[0], e[1], 25, 25))
    }}), t.SVGRenderer
  }), define("renderer/vml", ["jxg", "renderer/abstract", "base/constants", "utils/type", "utils/color", "math/math", "math/numerics"], function(t, e, i, r, s, o, n) {
    return t.VMLRenderer = function(e) {
      this.type = "vml", this.container = e, this.container.style.overflow = "hidden", "" === this.container.style.position && (this.container.style.position = "relative"), this.container.onselectstart = function() {return!1}, this.resolution = 10, r.exists(t.vmlStylesheet) || (e.ownerDocument.namespaces.add("jxgvml", "urn:schemas-microsoft-com:vml"), t.vmlStylesheet = this.container.ownerDocument.createStyleSheet(), t.vmlStylesheet.addRule(".jxgvml", "behavior:url(#default#VML)"));
      try {
        e.ownerDocument.namespaces.jxgvml || e.ownerDocument.namespaces.add("jxgvml", "urn:schemas-microsoft-com:vml"), this.createNode = function(t) {return e.ownerDocument.createElement("<jxgvml:" + t + ' class="jxgvml">')}
      } catch (i) {
        this.createNode = function(t) {return e.ownerDocument.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="jxgvml">')}
      }
      this.dashArray = ["Solid", "1 1", "ShortDash", "Dash", "LongDash", "ShortDashDot", "LongDashDot"]
    }, t.VMLRenderer.prototype = new e, t.extend(t.VMLRenderer.prototype, {_setAttr: function(e, i, r, s) {
      try {
        8 === this.container.ownerDocument.documentMode ? e[i] = r : e.setAttribute(i, r, s)
      } catch (o) {
        t.debug("_setAttr: " + i + " " + r + "<br>\n")
      }
    }, updateTicks: function(t) {
      var e, i, s, o, n, a = this.resolution, h = [];
      for (i = t.ticks.length, e = 0; i > e; e++)s = t.ticks[e], o = s[0], n = s[1], "number" == typeof o[0] && "number" == typeof o[1] && h.push(" m " + Math.round(a * o[0]) + ", " + Math.round(a * n[0]) + " l " + Math.round(a * o[1]) + ", " + Math.round(a * n[1]) + " ");
      r.exists(t.rendNode) || (t.rendNode = this.createPrim("path", t.id), this.appendChildPrim(t.rendNode, t.visProp.layer)), this._setAttr(t.rendNode, "stroked", "true"), this._setAttr(t.rendNode, "strokecolor", t.visProp.strokecolor, 1), this._setAttr(t.rendNode, "strokeweight", t.visProp.strokewidth), this._setAttr(t.rendNodeStroke, "opacity", 100 * t.visProp.strokeopacity + "%"), this.updatePathPrim(t.rendNode, h, t.board)
    }, displayCopyright: function(t, e) {
      var i, r;
      i = this.createNode("textbox"), i.style.position = "absolute", this._setAttr(i, "id", this.container.id + "_" + "licenseText"), i.style.left = 20, i.style.top = 2, i.style.fontSize = e, i.style.color = "#356AA0", i.style.fontFamily = "Arial,Helvetica,sans-serif", this._setAttr(i, "opacity", "30%"), i.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11='1.0', sizingMethod='auto expand', enabled = false) progid:DXImageTransform.Microsoft.Alpha(opacity = 30, enabled = true)", r = this.container.ownerDocument.createTextNode(t), i.appendChild(r), this.appendChildPrim(i, 0)
    }, drawInternalText: function(t) {
      var e;
      return e = this.createNode("textbox"), e.style.position = "absolute", t.rendNodeText = this.container.ownerDocument.createTextNode(""), e.appendChild(t.rendNodeText), this.appendChildPrim(e, 9), e.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11='1.0', sizingMethod='auto expand', enabled = false) progid:DXImageTransform.Microsoft.Alpha(opacity = 100, enabled = false)", e
    }, updateInternalText: function(t) {
      var e, i, r, s, n, a, h = t.plaintext, l = this.joinTransforms(t, t.transformations), c = [0, 0], d = t.rendNode, u = [];
      if (!isNaN(t.coords.scrCoords[1] + t.coords.scrCoords[2])) {
        for ("right" === t.visProp.anchorx ? c[0] = 1 : "middle" === t.visProp.anchorx && (c[0] = .5), "bottom" === t.visProp.anchory ? c[1] = 1 : "middle" === t.visProp.anchory && (c[1] = .5), u[0] = o.matVecMult(l, [1, t.coords.scrCoords[1] - c[0] * t.size[0], t.coords.scrCoords[2] + (1 - c[1]) * t.size[1] + this.vOffsetText]), u[0][1] /= u[0][0], u[0][2] /= u[0][0], u[1] = o.matVecMult(l, [1, t.coords.scrCoords[1] + (1 - c[0]) * t.size[0], t.coords.scrCoords[2] + (1 - c[1]) * t.size[1] + this.vOffsetText]), u[1][1] /= u[1][0], u[1][2] /= u[1][0], u[2] = o.matVecMult(l, [1, t.coords.scrCoords[1] + (1 - c[0]) * t.size[0], t.coords.scrCoords[2] - c[1] * t.size[1] + this.vOffsetText]), u[2][1] /= u[2][0], u[2][2] /= u[2][0], u[3] = o.matVecMult(l, [1, t.coords.scrCoords[1] - c[0] * t.size[0], t.coords.scrCoords[2] - c[1] * t.size[1] + this.vOffsetText]), u[3][1] /= u[3][0], u[3][2] /= u[3][0], i = u[0][1], s = u[0][1], r = u[0][2], n = u[0][2], a = 1; 4 > a; a++)i = Math.max(i, u[a][1]), s = Math.min(s, u[a][1]), r = Math.max(r, u[a][2]), n = Math.min(n, u[a][2]);
        e = 1 === c[0] ? Math.floor(t.board.canvasWidth - i) : Math.floor(s), t.visPropOld.left !== t.visProp.anchorx + e && (1 === c[0] ? (t.rendNode.style.right = e + "px", t.rendNode.style.left = "auto") : (t.rendNode.style.left = e + "px", t.rendNode.style.right = "auto"), t.visPropOld.left = t.visProp.anchorx + e), e = 1 === c[1] ? Math.floor(t.board.canvasHeight - r) : Math.floor(n), t.visPropOld.top !== t.visProp.anchory + e && (1 === c[1] ? (t.rendNode.style.bottom = e + "px", t.rendNode.style.top = "auto") : (t.rendNode.style.top = e + "px", t.rendNode.style.bottom = "auto"), t.visPropOld.top = t.visProp.anchory + e)
      }
      t.htmlStr !== h && (t.rendNodeText.data = h, t.htmlStr = h), d.filters.item(0).M11 = l[1][1], d.filters.item(0).M12 = l[1][2], d.filters.item(0).M21 = l[2][1], d.filters.item(0).M22 = l[2][2], d.filters.item(0).enabled = !0
    }, drawImage: function(t) {
      var e;
      e = this.container.ownerDocument.createElement("img"), e.style.position = "absolute", this._setAttr(e, "id", this.container.id + "_" + t.id), this.container.appendChild(e), this.appendChildPrim(e, t.visProp.layer), e.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11='1.0', sizingMethod='auto expand') progid:DXImageTransform.Microsoft.Alpha(opacity = 100, enabled = false)", t.rendNode = e, this.updateImage(t)
    }, transformImage: function(t, e) {
      var i, r, s, n, a, h, l = t.rendNode, c = [], d = e.length;
      if (d > 0) {
        for (i = this.joinTransforms(t, e), c[0] = o.matVecMult(i, t.coords.scrCoords), c[0][1] /= c[0][0], c[0][2] /= c[0][0], c[1] = o.matVecMult(i, [1, t.coords.scrCoords[1] + t.size[0], t.coords.scrCoords[2]]), c[1][1] /= c[1][0], c[1][2] /= c[1][0], c[2] = o.matVecMult(i, [1, t.coords.scrCoords[1] + t.size[0], t.coords.scrCoords[2] - t.size[1]]), c[2][1] /= c[2][0], c[2][2] /= c[2][0], c[3] = o.matVecMult(i, [1, t.coords.scrCoords[1], t.coords.scrCoords[2] - t.size[1]]), c[3][1] /= c[3][0], c[3][2] /= c[3][0], r = c[0][1], n = c[0][1], s = c[0][2], a = c[0][2], h = 1; 4 > h; h++)r = Math.max(r, c[h][1]), n = Math.min(n, c[h][1]), s = Math.max(s, c[h][2]), a = Math.min(a, c[h][2]);
        l.style.left = Math.floor(n) + "px", l.style.top = Math.floor(a) + "px", l.filters.item(0).M11 = i[1][1], l.filters.item(0).M12 = i[1][2], l.filters.item(0).M21 = i[2][1], l.filters.item(0).M22 = i[2][2], l.filters.item(0).enabled = !0
      }
    }, updateImageURL: function(t) {
      var e = r.evaluate(t.url);
      this._setAttr(t.rendNode, "src", e)
    }, appendChildPrim: function(t, e) {return r.exists(e) || (e = 0), t.style.zIndex = e, this.container.appendChild(t), t}, appendNodesToElement: function(t, e) {("shape" === e || "path" === e || "polygon" === e) && (t.rendNodePath = this.getElementById(t.id + "_path")), t.rendNodeFill = this.getElementById(t.id + "_fill"), t.rendNodeStroke = this.getElementById(t.id + "_stroke"), t.rendNodeShadow = this.getElementById(t.id + "_shadow"), t.rendNode = this.getElementById(t.id)}, createPrim: function(t, e) {
      var i, r, s = this.createNode("fill"), o = this.createNode("stroke"), n = this.createNode("shadow");
      return this._setAttr(s, "id", this.container.id + "_" + e + "_fill"), this._setAttr(o, "id", this.container.id + "_" + e + "_stroke"), this._setAttr(n, "id", this.container.id + "_" + e + "_shadow"), "circle" === t || "ellipse" === t ? (i = this.createNode("oval"), i.appendChild(s), i.appendChild(o), i.appendChild(n)) : "polygon" === t || "path" === t || "shape" === t || "line" === t ? (i = this.createNode("shape"), i.appendChild(s), i.appendChild(o), i.appendChild(n), r = this.createNode("path"), this._setAttr(r, "id", this.container.id + "_" + e + "_path"), i.appendChild(r)) : (i = this.createNode(t), i.appendChild(s), i.appendChild(o), i.appendChild(n)), i.style.position = "absolute", i.style.left = "0px", i.style.top = "0px", this._setAttr(i, "id", this.container.id + "_" + e), i
    }, remove: function(t) {r.exists(t) && t.removeNode(!0)}, makeArrows: function(t) {
      var e;
      (t.visPropOld.firstarrow !== t.visProp.firstarrow || t.visPropOld.lastarrow !== t.visProp.lastarrow) && (t.visProp.firstarrow ? (e = t.rendNodeStroke, this._setAttr(e, "startarrow", "block"), this._setAttr(e, "startarrowlength", "long")) : (e = t.rendNodeStroke, r.exists(e) && this._setAttr(e, "startarrow", "none")), t.visProp.lastarrow ? (e = t.rendNodeStroke, this._setAttr(e, "id", this.container.id + "_" + t.id + "stroke"), this._setAttr(e, "endarrow", "block"), this._setAttr(e, "endarrowlength", "long")) : (e = t.rendNodeStroke, r.exists(e) && this._setAttr(e, "endarrow", "none")), t.visPropOld.firstarrow = t.visProp.firstarrow, t.visPropOld.lastarrow = t.visProp.lastarrow)
    }, updateEllipsePrim: function(t, e, i, r, s) {t.style.left = Math.floor(e - r) + "px", t.style.top = Math.floor(i - s) + "px", t.style.width = Math.floor(2 * Math.abs(r)) + "px", t.style.height = Math.floor(2 * Math.abs(s)) + "px"}, updateLinePrim: function(t, e, i, r, s, o) {
      var n, a = this.resolution;
      isNaN(e + i + r + s) || (n = ["m ", Math.floor(a * e), ", ", Math.floor(a * i), " l ", Math.floor(a * r), ", ", Math.floor(a * s)], this.updatePathPrim(t, n, o))
    }, updatePathPrim: function(t, e, i) {
      var r = i.canvasWidth, s = i.canvasHeight;
      0 >= e.length && (e = ["m 0,0"]), t.style.width = r, t.style.height = s, this._setAttr(t, "coordsize", [Math.floor(this.resolution * r), Math.floor(this.resolution * s)].join(",")), this._setAttr(t, "path", e.join(""))
    }, updatePathStringPoint: function(t, e, i) {
      var r = [], s = Math.round, o = t.coords.scrCoords, n = .5 * e * Math.sqrt(3), a = .5 * e, h = this.resolution;
      return"x" === i ? r.push([" m ", s(h * (o[1] - e)), ", ", s(h * (o[2] - e)), " l ", s(h * (o[1] + e)), ", ", s(h * (o[2] + e)), " m ", s(h * (o[1] + e)), ", ", s(h * (o[2] - e)), " l ", s(h * (o[1] - e)), ", ", s(h * (o[2] + e))].join("")) : "+" === i ? r.push([" m ", s(h * (o[1] - e)), ", ", s(h * o[2]), " l ", s(h * (o[1] + e)), ", ", s(h * o[2]), " m ", s(h * o[1]), ", ", s(h * (o[2] - e)), " l ", s(h * o[1]), ", ", s(h * (o[2] + e))].join("")) : "<>" === i ? r.push([" m ", s(h * (o[1] - e)), ", ", s(h * o[2]), " l ", s(h * o[1]), ", ", s(h * (o[2] + e)), " l ", s(h * (o[1] + e)), ", ", s(h * o[2]), " l ", s(h * o[1]), ", ", s(h * (o[2] - e)), " x e "].join("")) : "^" === i ? r.push([" m ", s(h * o[1]), ", ", s(h * (o[2] - e)), " l ", s(h * (o[1] - n)), ", ", s(h * (o[2] + a)), " l ", s(h * (o[1] + n)), ", ", s(h * (o[2] + a)), " x e "].join("")) : "v" === i ? r.push([" m ", s(h * o[1]), ", ", s(h * (o[2] + e)), " l ", s(h * (o[1] - n)), ", ", s(h * (o[2] - a)), " l ", s(h * (o[1] + n)), ", ", s(h * (o[2] - a)), " x e "].join("")) : ">" === i ? r.push([" m ", s(h * (o[1] + e)), ", ", s(h * o[2]), " l ", s(h * (o[1] - a)), ", ", s(h * (o[2] - n)), " l ", s(h * (o[1] - a)), ", ", s(h * (o[2] + n)), " l ", s(h * (o[1] + e)), ", ", s(h * o[2])].join("")) : "<" === i && r.push([" m ", s(h * (o[1] - e)), ", ", s(h * o[2]), " l ", s(h * (o[1] + a)), ", ", s(h * (o[2] - n)), " l ", s(h * (o[1] + a)), ", ", s(h * (o[2] + n)), " x e "].join("")), r
    }, updatePathStringPrim: function(t) {
      var e, i, r = [], s = this.resolution, o = Math.round, n = " m ", a = " l ", h = " c ", l = n, c = Math.min(t.numberPoints, 8192);
      if (0 >= t.numberPoints)return"";
      if (c = Math.min(c, t.points.length), 1 === t.bezierDegree)for (e = 0; c > e; e++)i = t.points[e].scrCoords, isNaN(i[1]) || isNaN(i[2]) ? l = n : (i[1] > 2e4 ? i[1] = 2e4 : -2e4 > i[1] && (i[1] = -2e4), i[2] > 2e4 ? i[2] = 2e4 : -2e4 > i[2] && (i[2] = -2e4), r.push([l, o(s * i[1]), ", ", o(s * i[2])].join("")), l = a); else if (3 === t.bezierDegree)for (e = 0; c > e;)i = t.points[e].scrCoords, isNaN(i[1]) || isNaN(i[2]) ? l = n : (r.push([l, o(s * i[1]), ", ", o(s * i[2])].join("")), l === h && (e += 1, i = t.points[e].scrCoords, r.push([" ", o(s * i[1]), ", ", o(s * i[2])].join("")), e += 1, i = t.points[e].scrCoords, r.push([" ", o(s * i[1]), ", ", o(s * i[2])].join(""))), l = h), e += 1;
      return r.push(" e"), r
    }, updatePathStringBezierPrim: function(t) {
      var e, i, r, s, o, a, h = [], l = t.visProp.strokewidth, c = this.resolution, d = Math.round, u = " m ", p = " c ", f = u, m = "plot" !== t.visProp.curvetype, b = Math.min(t.numberPoints, 8192);
      if (0 >= t.numberPoints)return"";
      for (m && t.board.options.curve.RDPsmoothing && (t.points = n.RamerDouglasPeucker(t.points, 1)), b = Math.min(b, t.points.length), i = 1; 3 > i; i++)for (f = u, e = 0; b > e; e++)s = t.points[e].scrCoords, isNaN(s[1]) || isNaN(s[2]) ? f = u : (s[1] > 2e4 ? s[1] = 2e4 : -2e4 > s[1] && (s[1] = -2e4), s[2] > 2e4 ? s[2] = 2e4 : -2e4 > s[2] && (s[2] = -2e4), f === u ? h.push([f, d(c * s[1]), " ", d(c * s[2])].join("")) : (r = 2 * i, h.push([f, d(c * (o + .333 * (s[1] - o) + l * (r * Math.random() - i))), " ", d(c * (a + .333 * (s[2] - a) + l * (r * Math.random() - i))), " ", d(c * (o + .666 * (s[1] - o) + l * (r * Math.random() - i))), " ", d(c * (a + .666 * (s[2] - a) + l * (r * Math.random() - i))), " ", d(c * s[1]), " ", d(c * s[2])].join(""))), f = p, o = s[1], a = s[2]);
      return h.push(" e"), h
    }, updatePolygonPrim: function(t, e) {
      var i, r, s = e.vertices.length, o = this.resolution, n = [];
      if (this._setAttr(t, "stroked", "false"), r = e.vertices[0].coords.scrCoords, !isNaN(r[1] + r[2])) {
        for (n.push(["m ", Math.floor(o * r[1]), ",", Math.floor(o * r[2]), " l "].join("")), i = 1; s - 1 > i; i++) {
          if (!e.vertices[i].isReal)return this.updatePathPrim(t, "", e.board), void 0;
          if (r = e.vertices[i].coords.scrCoords, isNaN(r[1] + r[2]))return;
          n.push(Math.floor(o * r[1]) + "," + Math.floor(o * r[2])), s - 2 > i && n.push(", ")
        }
        n.push(" x e"), this.updatePathPrim(t, n, e.board)
      }
    }, updateRectPrim: function(t, e, i, r, s) {t.style.left = Math.floor(e) + "px", t.style.top = Math.floor(i) + "px", r >= 0 && (t.style.width = r + "px"), s >= 0 && (t.style.height = s + "px")}, setPropertyPrim: function(t, e, i) {
      var s, o = "";
      switch (e) {
        case"stroke":
          o = "strokecolor";
          break;
        case"stroke-width":
          o = "strokeweight";
          break;
        case"stroke-dasharray":
          o = "dashstyle"
      }
      "" !== o && (s = r.evaluate(i), this._setAttr(t, o, s))
    }, show: function(t) {t && t.rendNode && (t.rendNode.style.visibility = "inherit")}, hide: function(t) {t && t.rendNode && (t.rendNode.style.visibility = "hidden")}, setDashStyle: function(t, e) {
      var i;
      e.dash >= 0 && (i = t.rendNodeStroke, this._setAttr(i, "dashstyle", this.dashArray[e.dash]))
    }, setGradient: function(t) {
      var e = t.rendNodeFill;
      "linear" === t.visProp.gradient ? (this._setAttr(e, "type", "gradient"), this._setAttr(e, "color2", t.visProp.gradientsecondcolor), this._setAttr(e, "opacity2", t.visProp.gradientsecondopacity), this._setAttr(e, "angle", t.visProp.gradientangle)) : "radial" === t.visProp.gradient ? (this._setAttr(e, "type", "gradientradial"), this._setAttr(e, "color2", t.visProp.gradientsecondcolor), this._setAttr(e, "opacity2", t.visProp.gradientsecondopacity), this._setAttr(e, "focusposition", 100 * t.visProp.gradientpositionx + "%," + 100 * t.visProp.gradientpositiony + "%"), this._setAttr(e, "focussize", "0,0")) : this._setAttr(e, "type", "solid")
    }, setObjectFillColor: function(t, e, o) {
      var n, a, h, l = r.evaluate(e), c = r.evaluate(o), d = t.rendNode;
      c = c > 0 ? c : 0, (t.visPropOld.fillcolor !== l || t.visPropOld.fillopacity !== c) && (r.exists(l) && l !== !1 && (9 !== l.length ? (n = l, h = c) : (a = s.rgba2rgbo(l), n = a[0], h = c * a[1]), "none" === n || n === !1 ? this._setAttr(t.rendNode, "filled", "false") : (this._setAttr(t.rendNode, "filled", "true"), this._setAttr(t.rendNode, "fillcolor", n), r.exists(h) && t.rendNodeFill && this._setAttr(t.rendNodeFill, "opacity", 100 * h + "%")), t.type === i.OBJECT_TYPE_IMAGE && d.filters.length > 1 && (d.filters.item(1).opacity = Math.round(100 * h), d.filters.item(1).enabled = !0)), t.visPropOld.fillcolor = l, t.visPropOld.fillopacity = c)
    }, setObjectStrokeColor: function(t, e, s) {
      var o, n, a, h, l = r.evaluate(e), c = r.evaluate(s), d = t.rendNode;
      c = c > 0 ? c : 0, (t.visPropOld.strokecolor !== l || t.visPropOld.strokeopacity !== c) && (r.exists(l) && l !== !1 && (9 !== l.length ? (o = l, a = c) : (n = e.rgba2rgbo(l), o = n[0], a = c * n[1]), t.elementClass === i.OBJECT_CLASS_TEXT ? (d.filters.length > 1 && (d.filters.item(1).opacity = Math.round(100 * a), d.filters.item(1).enabled = !0), d.style.color = o) : (o !== !1 && (this._setAttr(d, "stroked", "true"), this._setAttr(d, "strokecolor", o)), h = t.rendNodeStroke, r.exists(a) && t.type !== i.OBJECT_TYPE_IMAGE && this._setAttr(h, "opacity", 100 * a + "%"))), t.visPropOld.strokecolor = l, t.visPropOld.strokeopacity = c)
    }, setObjectStrokeWidth: function(t, e) {
      var i, s = r.evaluate(e);
      isNaN(s) || t.visPropOld.strokewidth === s || (i = t.rendNode, this.setPropertyPrim(i, "stroked", "true"), r.exists(s) && (this.setPropertyPrim(i, "stroke-width", s), 0 === s && r.exists(t.rendNodeStroke) && this._setAttr(i, "stroked", "false")), t.visPropOld.strokewidth = s)
    }, setShadow: function(t) {
      var e = t.rendNodeShadow;
      e && t.visPropOld.shadow !== t.visProp.shadow && (t.visProp.shadow ? (this._setAttr(e, "On", "True"), this._setAttr(e, "Offset", "3pt,3pt"), this._setAttr(e, "Opacity", "60%"), this._setAttr(e, "Color", "#aaaaaa")) : this._setAttr(e, "On", "False"), t.visPropOld.shadow = t.visProp.shadow)
    }, suspendRedraw: function() {this.container.style.display = "none"}, unsuspendRedraw: function() {this.container.style.display = ""}}), t.VMLRenderer
  }), define("renderer/canvas", ["jxg", "renderer/abstract", "base/constants", "utils/env", "utils/type", "utils/uuid", "utils/color", "base/coords", "math/math", "math/geometry", "math/numerics"], function(t, e, i, r, s, o, n, a, h, l, c) {
    return t.CanvasRenderer = function(t, e) {
      this.type = "canvas", this.canvasRoot = null, this.suspendHandle = null, this.canvasId = o.genUUID(), this.canvasNamespace = null, r.isBrowser ? (this.container = t, this.container.style.MozUserSelect = "none", this.container.style.overflow = "hidden", "" === this.container.style.position && (this.container.style.position = "relative"), this.container.innerHTML = ['<canvas id="', this.canvasId, '" width="', e.width, 'px" height="', e.height, 'px"><', "/canvas>"].join(""), this.canvasRoot = this.container.ownerDocument.getElementById(this.canvasId), this.context = this.canvasRoot.getContext("2d")) : r.isNode() && (this.canvasId = "object" == typeof module ? module.require("canvas") : require("canvas"), this.canvasRoot = new this.canvasId(500, 500), this.context = this.canvasRoot.getContext("2d")), this.dashArray = [
        [2, 2],
        [5, 5],
        [10, 10],
        [20, 20],
        [20, 10, 10, 10],
        [20, 5, 10, 5]
      ]
    }, t.CanvasRenderer.prototype = new e, t.extend(t.CanvasRenderer.prototype, {_drawFilledPolygon: function(t) {
      var e, i = t.length, r = this.context;
      if (i > 0) {
        for (r.beginPath(), r.moveTo(t[0][0], t[0][1]), e = 0; i > e; e++)e > 0 && r.lineTo(t[e][0], t[e][1]);
        r.lineTo(t[0][0], t[0][1]), r.fill()
      }
    }, _fill: function(t) {
      var e = this.context;
      e.save(), this._setColor(t, "fill") && e.fill(), e.restore()
    }, _rotatePoint: function(t, e, i) {return[e * Math.cos(t) - i * Math.sin(t), e * Math.sin(t) + i * Math.cos(t)]}, _rotateShape: function(t, e) {
      var i, r = [], s = t.length;
      if (0 >= s)return t;
      for (i = 0; s > i; i++)r.push(this._rotatePoint(e, t[i][0], t[i][1]));
      return r
    }, _setColor: function(t, e, i) {
      var r, o, a, h, l, c, d = !0, u = !1, p = t.visProp;
      return e = e || "stroke", i = i || e, s.exists(t.board) && s.exists(t.board.highlightedObjects) || (u = !0), r = !u && s.exists(t.board.highlightedObjects[t.id]) ? "highlight" : "", o = s.evaluate(p[r + e + "color"]), "none" !== o && o !== !1 ? (l = s.evaluate(p[r + e + "opacity"]), l = l > 0 ? l : 0, 9 !== o.length ? (h = o, c = l) : (a = n.rgba2rgbo(o), h = a[0], c = l * a[1]), this.context.globalAlpha = c, this.context[i + "Style"] = h) : d = !1, "stroke" !== e || isNaN(parseFloat(p.strokewidth)) || (0 === parseFloat(p.strokewidth) ? this.context.globalAlpha = 0 : this.context.lineWidth = parseFloat(p.strokewidth)), d
    }, _stroke: function(t) {
      var e = this.context;
      e.save(), t.visProp.dash > 0 ? e.setLineDash && e.setLineDash(this.dashArray[t.visProp.dash]) : this.context.lineDashArray = [], this._setColor(t, "stroke") && e.stroke(), e.restore()
    }, _translateShape: function(t, e, i) {
      var r, s = [], o = t.length;
      if (0 >= o)return t;
      for (r = 0; o > r; r++)s.push([t[r][0] + e, t[r][1] + i]);
      return s
    }, drawPoint: function(t) {
      var e = t.visProp.face, i = t.visProp.size, r = t.coords.scrCoords, s = .5 * i * Math.sqrt(3), o = .5 * i, n = parseFloat(t.visProp.strokewidth) / 2, a = this.context;
      if (t.visProp.visible)switch (e) {
        case"cross":
        case"x":
          a.beginPath(), a.moveTo(r[1] - i, r[2] - i), a.lineTo(r[1] + i, r[2] + i), a.moveTo(r[1] + i, r[2] - i), a.lineTo(r[1] - i, r[2] + i), a.lineCap = "round", a.lineJoin = "round", a.closePath(), this._stroke(t);
          break;
        case"circle":
        case"o":
          a.beginPath(), a.arc(r[1], r[2], i + 1 + n, 0, 2 * Math.PI, !1), a.closePath(), this._fill(t), this._stroke(t);
          break;
        case"square":
        case"[]":
          if (0 >= i)break;
          a.save(), this._setColor(t, "stroke", "fill") && a.fillRect(r[1] - i - n, r[2] - i - n, 2 * i + 3 * n, 2 * i + 3 * n), a.restore(), a.save(), this._setColor(t, "fill"), a.fillRect(r[1] - i + n, r[2] - i + n, 2 * i - n, 2 * i - n), a.restore();
          break;
        case"plus":
        case"+":
          a.beginPath(), a.moveTo(r[1] - i, r[2]), a.lineTo(r[1] + i, r[2]), a.moveTo(r[1], r[2] - i), a.lineTo(r[1], r[2] + i), a.lineCap = "round", a.lineJoin = "round", a.closePath(), this._stroke(t);
          break;
        case"diamond":
        case"<>":
          a.beginPath(), a.moveTo(r[1] - i, r[2]), a.lineTo(r[1], r[2] + i), a.lineTo(r[1] + i, r[2]), a.lineTo(r[1], r[2] - i), a.closePath(), this._fill(t), this._stroke(t);
          break;
        case"triangleup":
        case"a":
        case"^":
          a.beginPath(), a.moveTo(r[1], r[2] - i), a.lineTo(r[1] - s, r[2] + o), a.lineTo(r[1] + s, r[2] + o), a.closePath(), this._fill(t), this._stroke(t);
          break;
        case"triangledown":
        case"v":
          a.beginPath(), a.moveTo(r[1], r[2] + i), a.lineTo(r[1] - s, r[2] - o), a.lineTo(r[1] + s, r[2] - o), a.closePath(), this._fill(t), this._stroke(t);
          break;
        case"triangleleft":
        case"<":
          a.beginPath(), a.moveTo(r[1] - i, r[2]), a.lineTo(r[1] + o, r[2] - s), a.lineTo(r[1] + o, r[2] + s), a.closePath(), this.fill(t), this._stroke(t);
          break;
        case"triangleright":
        case">":
          a.beginPath(), a.moveTo(r[1] + i, r[2]), a.lineTo(r[1] - o, r[2] - s), a.lineTo(r[1] - o, r[2] + s), a.closePath(), this._fill(t), this._stroke(t)
      }
    }, updatePoint: function(t) {this.drawPoint(t)}, drawLine: function(t) {
      var e, r, s, o, n, c, d = new a(i.COORDS_BY_USER, t.point1.coords.usrCoords, t.board), u = new a(i.COORDS_BY_USER, t.point2.coords.usrCoords, t.board), p = null;
      t.visProp.visible && ((t.visProp.firstarrow || t.visProp.lastarrow) && (p = -4), l.calcStraight(t, d, u, p), s = o = n = c = 0, e = Math.max(3 * parseInt(t.visProp.strokewidth, 10), 10), t.visProp.lastarrow && (r = d.distance(i.COORDS_BY_SCREEN, u), r > h.eps && (n = (u.scrCoords[1] - d.scrCoords[1]) * e / r, c = (u.scrCoords[2] - d.scrCoords[2]) * e / r)), t.visProp.firstarrow && (r = d.distance(i.COORDS_BY_SCREEN, u), r > h.eps && (s = (u.scrCoords[1] - d.scrCoords[1]) * e / r, o = (u.scrCoords[2] - d.scrCoords[2]) * e / r)), this.context.beginPath(), this.context.moveTo(d.scrCoords[1] + s, d.scrCoords[2] + o), this.context.lineTo(u.scrCoords[1] - n, u.scrCoords[2] - c), this._stroke(t), this.makeArrows(t, d, u))
    }, updateLine: function(t) {this.drawLine(t)}, drawTicks: function() {}, updateTicks: function(t) {
      var e, i, r, s, o = t.ticks.length, n = this.context;
      for (n.beginPath(), e = 0; o > e; e++)i = t.ticks[e], r = i[0], s = i[1], n.moveTo(r[0], s[0]), n.lineTo(r[1], s[1]);
      for (e = 0; o > e; e++)i = t.ticks[e].scrCoords, t.ticks[e].major && (t.board.needsFullUpdate || t.needsRegularUpdate) && t.labels[e] && t.labels[e].visProp.visible && this.updateText(t.labels[e]);
      n.lineCap = "round", this._stroke(t)
    }, drawCurve: function(t) {t.visProp.handdrawing ? this.updatePathStringBezierPrim(t) : this.updatePathStringPrim(t)}, updateCurve: function(t) {this.drawCurve(t)}, drawEllipse: function(t) {
      var e = t.center.coords.scrCoords[1], i = t.center.coords.scrCoords[2], r = t.board.unitX, s = t.board.unitY, o = 2 * t.Radius(), n = 2 * t.Radius(), a = o * r, h = n * s, l = e - a / 2, c = i - h / 2, d = .5522848 * (a / 2), u = .5522848 * (h / 2), p = l + a, f = c + h, m = l + a / 2, b = c + h / 2, g = this.context;
      o > 0 && n > 0 && !isNaN(e + i) && (g.beginPath(), g.moveTo(l, b), g.bezierCurveTo(l, b - u, m - d, c, m, c), g.bezierCurveTo(m + d, c, p, b - u, p, b), g.bezierCurveTo(p, b + u, m + d, f, m, f), g.bezierCurveTo(m - d, f, l, b + u, l, b), g.closePath(), this._fill(t), this._stroke(t))
    }, updateEllipse: function(t) {return this.drawEllipse(t)}, displayCopyright: function(t, e) {
      var i = this.context;
      i.save(), i.font = e + "px Arial", i.fillStyle = "#aaa", i.lineWidth = .5, i.fillText(t, 10, 2 + e), i.restore()
    }, drawInternalText: function(t) {
      var e, i = this.context;
      return i.save(), this._setColor(t, "stroke", "fill") && !isNaN(t.coords.scrCoords[1] + t.coords.scrCoords[2]) && (t.visProp.fontsize && ("function" == typeof t.visProp.fontsize ? (e = t.visProp.fontsize(), i.font = (e > 0 ? e : 0) + "px Arial") : i.font = t.visProp.fontsize + "px Arial"), this.transformImage(t, t.transformations), "left" === t.visProp.anchorx ? i.textAlign = "left" : "right" === t.visProp.anchorx ? i.textAlign = "right" : "middle" === t.visProp.anchorx && (i.textAlign = "center"), "bottom" === t.visProp.anchory ? i.textBaseline = "bottom" : "top" === t.visProp.anchory ? i.textBaseline = "top" : "middle" === t.visProp.anchory && (i.textBaseline = "middle"), i.fillText(t.plaintext, t.coords.scrCoords[1], t.coords.scrCoords[2])), i.restore(), null
    }, updateInternalText: function(t) {this.drawInternalText(t)}, setObjectStrokeColor: function(t, e, r) {
      var o, a, h, l, c = s.evaluate(e), d = s.evaluate(r);
      d = d > 0 ? d : 0, (t.visPropOld.strokecolor !== c || t.visPropOld.strokeopacity !== d) && (s.exists(c) && c !== !1 && (9 !== c.length ? (o = c, h = d) : (a = n.rgba2rgbo(c), o = a[0], h = d * a[1]), l = t.rendNode, t.elementClass === i.OBJECT_CLASS_TEXT && "html" === t.visProp.display && (l.style.color = o, l.style.opacity = h)), t.visPropOld.strokecolor = c, t.visPropOld.strokeopacity = d)
    }, drawImage: function(t) {t.rendNode = new Image, t._src = "", this.updateImage(t)}, updateImage: function(t) {
      var e = this.context, i = s.evaluate(t.visProp.fillopacity), r = s.bind(function() {t.imgIsLoaded = !0, 0 >= t.size[0] || 0 >= t.size[1] || (e.save(), e.globalAlpha = i, this.transformImage(t, t.transformations), e.drawImage(t.rendNode, t.coords.scrCoords[1], t.coords.scrCoords[2] - t.size[1], t.size[0], t.size[1]), e.restore())}, this);
      this.updateImageURL(t) ? t.rendNode.onload = r : t.imgIsLoaded && r()
    }, transformImage: function(t, e) {
      var i, r = e.length, s = this.context;
      r > 0 && (i = this.joinTransforms(t, e), Math.abs(c.det(i)) >= h.eps && s.transform(i[1][1], i[2][1], i[1][2], i[2][2], i[1][0], i[2][0]))
    }, updateImageURL: function(t) {
      var e;
      return e = s.evaluate(t.url), t._src !== e ? (t.imgIsLoaded = !1, t.rendNode.src = e, t._src = e, !0) : !1
    }, remove: function(t) {s.exists(t) && s.exists(t.parentNode) && t.parentNode.removeChild(t)}, makeArrows: function(t, e, r) {
      var s, o, n, a, h, l = Math.max(3 * t.visProp.strokewidth, 10), c = [
        [-l, .5 * -l],
        [0, 0],
        [-l, .5 * l]
      ], d = [
        [l, .5 * -l],
        [0, 0],
        [l, .5 * l]
      ], u = this.context;
      if ("none" !== t.visProp.strokecolor && (t.visProp.lastarrow || t.visProp.firstarrow)) {
        if (t.elementClass !== i.OBJECT_CLASS_LINE)return;
        s = e.scrCoords[1], o = e.scrCoords[2], n = r.scrCoords[1], a = r.scrCoords[2], u.save(), this._setColor(t, "stroke", "fill") && (h = Math.atan2(a - o, n - s), t.visProp.lastarrow && this._drawFilledPolygon(this._translateShape(this._rotateShape(c, h), n, a)), t.visProp.firstarrow && this._drawFilledPolygon(this._translateShape(this._rotateShape(d, h), s, o))), u.restore()
      }
    }, updatePathStringPrim: function(t) {
      var e, i, r, s, o, n = "M", a = "L", h = "C", l = n, c = 5e3, d = this.context;
      if (!(0 >= t.numberPoints)) {
        if (o = Math.min(t.points.length, t.numberPoints), d.beginPath(), 1 === t.bezierDegree)for (e = 0; o > e; e++)i = t.points[e].scrCoords, isNaN(i[1]) || isNaN(i[2]) ? l = n : (i[1] > c ? i[1] = c : -c > i[1] && (i[1] = -c), i[2] > c ? i[2] = c : -c > i[2] && (i[2] = -c), l === n ? d.moveTo(i[1], i[2]) : d.lineTo(i[1], i[2]), l = a); else if (3 === t.bezierDegree)for (e = 0; o > e;)i = t.points[e].scrCoords, isNaN(i[1]) || isNaN(i[2]) ? l = n : (l === n ? d.moveTo(i[1], i[2]) : (e += 1, r = t.points[e].scrCoords, e += 1, s = t.points[e].scrCoords, d.bezierCurveTo(i[1], i[2], r[1], r[2], s[1], s[2])), l = h), e += 1;
        d.lineCap = "round", this._fill(t), this._stroke(t)
      }
    }, updatePathStringBezierPrim: function(t) {
      var e, i, r, s, o, n, a, h = "M", l = "C", d = h, u = 5e3, p = t.visProp.strokewidth, f = "plot" !== t.visProp.curvetype, m = this.context;
      if (!(0 >= t.numberPoints)) {
        for (f && t.board.options.curve.RDPsmoothing && (t.points = c.RamerDouglasPeucker(t.points, .5)), a = Math.min(t.points.length, t.numberPoints), m.beginPath(), i = 1; 3 > i; i++)for (d = h, e = 0; a > e; e++)s = t.points[e].scrCoords, isNaN(s[1]) || isNaN(s[2]) ? d = h : (s[1] > u ? s[1] = u : -u > s[1] && (s[1] = -u), s[2] > u ? s[2] = u : -u > s[2] && (s[2] = -u), d === h ? m.moveTo(s[1], s[2]) : (r = 2 * i, m.bezierCurveTo(o + .333 * (s[1] - o) + p * (r * Math.random() - i), n + .333 * (s[2] - n) + p * (r * Math.random() - i), o + .666 * (s[1] - o) + p * (r * Math.random() - i), n + .666 * (s[2] - n) + p * (r * Math.random() - i), s[1], s[2])), d = l, o = s[1], n = s[2]);
        m.lineCap = "round", this._fill(t), this._stroke(t)
      }
    }, updatePolygonPrim: function(t, e) {
      var i, r, s, o = e.vertices.length, n = this.context, a = !0;
      if (!(0 >= o) && e.visProp.visible) {
        for (n.beginPath(), r = 0; !e.vertices[r].isReal && o - 1 > r;)r++, a = !1;
        for (i = e.vertices[r].coords.scrCoords, n.moveTo(i[1], i[2]), s = r; o - 1 > s; s++)e.vertices[s].isReal || (a = !1), i = e.vertices[s].coords.scrCoords, n.lineTo(i[1], i[2]);
        n.closePath(), a && this._fill(e)
      }
    }, show: function(t) {s.exists(t.rendNode) && (t.rendNode.style.visibility = "inherit")}, hide: function(t) {s.exists(t.rendNode) && (t.rendNode.style.visibility = "hidden")}, setGradient: function(t) {
      var e, i;
      i = s.evaluate(t.visProp.fillopacity), i = i > 0 ? i : 0, e = s.evaluate(t.visProp.fillcolor)
    }, setShadow: function(t) {t.visPropOld.shadow !== t.visProp.shadow && (t.visPropOld.shadow = t.visProp.shadow)}, highlight: function(t) {return t.elementClass === i.OBJECT_CLASS_TEXT && "html" === t.visProp.display ? this.updateTextStyle(t, !0) : (t.board.prepareUpdate(), t.board.renderer.suspendRedraw(t.board), t.board.updateRenderer(), t.board.renderer.unsuspendRedraw()), this}, noHighlight: function(t) {return t.elementClass === i.OBJECT_CLASS_TEXT && "html" === t.visProp.display ? this.updateTextStyle(t, !1) : (t.board.prepareUpdate(), t.board.renderer.suspendRedraw(t.board), t.board.updateRenderer(), t.board.renderer.unsuspendRedraw()), this}, suspendRedraw: function(e) {this.context.save(), this.context.clearRect(0, 0, this.canvasRoot.width, this.canvasRoot.height), e && e.showCopyright && this.displayCopyright(t.licenseText, 12)}, unsuspendRedraw: function() {this.context.restore()}, resize: function(t, e) {this.container ? (this.canvasRoot.style.width = parseFloat(t) + "px", this.canvasRoot.style.height = parseFloat(e) + "px", this.canvasRoot.setAttribute("width", parseFloat(t) + "px"), this.canvasRoot.setAttribute("height", parseFloat(e) + "px")) : (this.canvasRoot.width = parseFloat(t), this.canvasRoot.height = parseFloat(e))}, removeToInsertLater: function() {return function() {}}}), t.CanvasRenderer
  }), define("jsxgraph", ["jxg", "utils/env", "utils/type", "base/board", "reader/file", "options", "renderer/svg", "renderer/vml", "renderer/canvas", "renderer/no"], function(t, e, i, r, s, o, n, a, h, l) {
    return t.JSXGraph = {rendererType: function() {
      return o.renderer = "no", e.supportsVML() && (o.renderer = "vml", document.onmousemove = function() {
        var t;
        return document.body && (t = document.body.scrollLeft, t += document.body.scrollTop), t
      }), e.supportsCanvas() && (o.renderer = "canvas"), e.supportsSVG() && (o.renderer = "svg"), e.isNode() && e.supportsCanvas() && (o.renderer = "canvas"), (e.isNode() || "no" === o.renderer) && (o.text.display = "internal", o.infobox.display = "internal"), o.renderer
    }(), initRenderer: function(t, e, r) {
      var s, c;
      if (i.exists(r) && r !== !1 || "object" != typeof document || (r = document), "object" == typeof r && null !== t)for (s = r.getElementById(t); s.firstChild;)s.removeChild(s.firstChild); else s = t;
      return c = "svg" === o.renderer ? new n(s, e) : "vml" === o.renderer ? new a(s) : "canvas" === o.renderer ? new h(s, e) : new l
    }, initBoard: function(s, n) {
      var a, h, l, c, d, u, p, f, m, b, g, v;
      return n = n || {}, b = i.copyAttributes(n, o, "board"), b.zoom = i.copyAttributes(b, o, "board", "zoom"), b.pan = i.copyAttributes(b, o, "board", "pan"), f = e.getDimensions(s, b.document), b.unitx || b.unity ? (a = i.def(b.originx, 150), h = i.def(b.originy, 150), l = i.def(b.unitx, 50), c = i.def(b.unity, 50)) : (m = b.boundingbox, u = parseInt(f.width, 10), p = parseInt(f.height, 10), b.keepaspectratio ? (l = u / (m[2] - m[0]), c = p / (m[1] - m[3]), Math.abs(l) < Math.abs(c) ? c = Math.abs(l) * c / Math.abs(c) : l = Math.abs(c) * l / Math.abs(l)) : (l = u / (m[2] - m[0]), c = p / (m[1] - m[3])), a = -l * m[0], h = c * m[1]), d = this.initRenderer(s, f, b.document), v = new r(s, d, b.id, [a, h], b.zoomfactor * b.zoomx, b.zoomfactor * b.zoomy, l, c, f.width, f.height, b), t.boards[v.id] = v, v.keepaspectratio = b.keepaspectratio, v.resizeContainer(f.width, f.height, !0, !0), v.suspendUpdate(), v.initInfobox(), b.axis && (g = "object" == typeof b.axis ? b.axis : {ticks: {drawZero: !0}}, v.defaultAxes = {}, v.defaultAxes.x = v.create("axis", [
        [0, 0],
        [1, 0]
      ], g), v.defaultAxes.y = v.create("axis", [
        [0, 0],
        [0, 1]
      ], g)), b.grid && v.create("grid", [], "object" == typeof b.grid ? b.grid : {}), v.renderer.drawZoomBar(v), v.unsuspendUpdate(), v
    }, loadBoardFromFile: function(n, a, h, l, c) {
      var d, u, p, f;
      return l = l || {}, d = i.copyAttributes(l, o, "board"), d.zoom = i.copyAttributes(l, o, "board", "zoom"), d.pan = i.copyAttributes(l, o, "board", "pan"), f = e.getDimensions(n, d.document), u = this.initRenderer(n, f, d.document), p = new r(n, u, "", [150, 150], 1, 1, 50, 50, f.width, f.height, d), p.initInfobox(), p.resizeContainer(f.width, f.height, !0, !0), s.parseFileContent(a, p, h, !0, c), p.renderer.drawZoomBar(p), t.boards[p.id] = p, p
    }, loadBoardFromString: function(n, a, h, l, c) {
      var d, u, p, f;
      return l = l || {}, d = i.copyAttributes(l, o, "board"), d.zoom = i.copyAttributes(l, o, "board", "zoom"), d.pan = i.copyAttributes(l, o, "board", "pan"), p = e.getDimensions(n, d.document), u = this.initRenderer(n, p, d.document), f = new r(n, u, "", [150, 150], 1, 1, 50, 50, p.width, p.height, d), f.initInfobox(), f.resizeContainer(p.width, p.height, !0, !0), s.parseString(a, f, h, !0, c), f.renderer.drawZoomBar(f), t.boards[f.id] = f, f
    }, freeBoard: function(e) {
      var i;
      "string" == typeof e && (e = t.boards[e]), e.removeEventHandlers(), e.suspendUpdate();
      for (i in e.objects)e.objects.hasOwnProperty(i) && e.objects[i].remove();
      for (; e.containerObj.firstChild;)e.containerObj.removeChild(e.containerObj.firstChild);
      for (i in e.objects)e.objects.hasOwnProperty(i) && delete e.objects[i];
      delete e.renderer, e.jc.creator.clearCache(), delete e.jc, delete t.boards[e.id]
    }, registerElement: function(e, i) {t.registerElement(e, i)}, unregisterElement: function() {throw Error("Unimplemented")}}, e.isBrowser && "object" == typeof window && "object" == typeof document && e.addEvent(window, "load", function() {
      var e, r, s, o, n, a, h, l, c, d, u, p, f = document.getElementsByTagName("script"), m = function(e, i, r) {
        var s = t.JSXGraph.initBoard(n, {boundingbox: r, keepaspectratio: !0, grid: u, axis: d, showReload: !0});
        if (i.toLowerCase().indexOf("script") > -1)s.construct(e); else try {
          s.jc.parse(e)
        } catch (o) {
          t.debug(o)
        }
        return s
      }, b = function(e, i, r, s) {
        return function() {
          var o;
          t.JSXGraph.freeBoard(e), o = m(i, r, s), o.reload = b(o, i, r, s)
        }
      };
      for (r = 0; f.length > r; r++)if (e = f[r].getAttribute("type", !1), i.exists(e) && ("text/jessiescript" === e.toLowerCase() || "jessiescript" === e.toLowerCase() || "text/jessiecode" === e.toLowerCase() || "jessiecode" === e.toLowerCase())) {
        if (h = f[r].getAttribute("width", !1) || "500px", l = f[r].getAttribute("height", !1) || "500px", c = f[r].getAttribute("boundingbox", !1) || "-5, 5, 5, -5", n = f[r].getAttribute("container", !1), c = c.split(","), 4 !== c.length)c = [-5, 5, 5, -5]; else for (s = 0; c.length > s; s++)c[s] = parseFloat(c[s]);
        if (d = i.str2Bool(f[r].getAttribute("axis", !1) || "false"), u = i.str2Bool(f[r].getAttribute("grid", !1) || "false"), i.exists(n))o = document.getElementById(n); else {
          n = "jessiescript_autgen_jxg_" + r, o = document.createElement("div"), o.setAttribute("id", n), o.setAttribute("style", "width:" + h + "; height:" + l + "; float:left"), o.setAttribute("class", "jxgbox");
          try {
            document.body.insertBefore(o, f[r])
          } catch (g) {
            "object" == typeof jQuery && jQuery(o).insertBefore(f[r])
          }
        }
        document.getElementById(n) ? (p = f[r].innerHTML, p = p.replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, ""), f[r].innerHTML = p, a = m(p, e, c), a.reload = b(a, p, e, c)) : t.debug("JSXGraph: Apparently the div injection failed. Can't create a board, sorry.")
      }
    }, window), t.JSXGraph
  }), define("base/group", ["jxg", "base/constants", "base/element", "math/math", "math/geometry", "utils/type"], function(t, e, i, r, s, o) {
    return t.Group = function(t, i, r, s, n) {
      var a, h, l, c;
      for (this.board = t, this.objects = {}, a = this.board.numObjects, this.board.numObjects += 1, this.id = "" !== i && o.exists(i) ? i : this.board.id + "Group" + a, this.board.groups[this.id] = this, this.type = e.OBJECT_TYPE_POINT, this.elementClass = e.OBJECT_CLASS_POINT, this.name = "" !== r && o.exists(r) ? r : "group_" + this.board.generateName(this), delete this.type, this.coords = {}, this.needsRegularUpdate = n.needsregularupdate, this.rotationCenter = "centroid", this.scaleCenter = null, this.rotationPoints = [], this.translationPoints = [], this.scalePoints = [], this.scaleDirections = {}, h = o.isArray(s) ? s : Array.prototype.slice.call(arguments, 3), l = 0; h.length > l; l++)c = this.board.select(h[l]), !c.visProp.fixed && o.exists(c.coords) && this.addPoint(c);
      this.methodMap = {ungroup: "ungroup", add: "addPoint", addPoint: "addPoint", addPoints: "addPoints", addGroup: "addGroup", remove: "removePoint", removePoint: "removePoint", setAttribute: "setAttribute", setProperty: "setAttribute"}
    }, t.extend(t.Group.prototype, {ungroup: function() {
      var t, e, i;
      for (t in this.objects)this.objects.hasOwnProperty(t) && (e = this.objects[t].point, o.isArray(e.groups) && (i = o.indexOf(e.groups, this.id), i >= 0 && delete e.groups[i]));
      return this.objects = {}, this
    }, update: function(t) {
      var e, i, n, a, h, l, c, d, u, p = null;
      if (!this.needsUpdate)return this;
      if (t = this._update_find_drag_type(), "nothing" === t.action)return this;
      if (p = this.objects[t.id].point, "translation" === t.action)d = [p.coords.usrCoords[1] - this.coords[t.id].usrCoords[1], p.coords.usrCoords[2] - this.coords[t.id].usrCoords[2]]; else if ("rotation" === t.action || "scaling" === t.action) {
        if (i = "rotation" === t.action ? "rotationCenter" : "scaleCenter", o.isPoint(this[i]))u = this[i].coords.usrCoords.slice(1); else if ("centroid" === this[i])u = this._update_centroid_center(); else if (o.isArray(this[i]))u = this[i]; else {
          if (!o.isFunction(this[i]))return this;
          u = this[i]()
        }
        if ("rotation" === t.action)c = s.rad(this.coords[t.id].usrCoords.slice(1), u, this.objects[t.id].point), d = this.board.create("transform", [c, u[0], u[1]], {type: "rotate"}), d.update(); else {
          if ("scaling" !== t.action)return this;
          if (a = s.distance(this.coords[t.id].usrCoords.slice(1), u), Math.abs(a) < r.eps)return this;
          a = s.distance(p.coords.usrCoords.slice(1), u) / a, h = this.scaleDirections[t.id].indexOf("x") >= 0 ? a : 1, l = this.scaleDirections[t.id].indexOf("y") >= 0 ? a : 1, d = this.board.create("transform", [1, 0, 0, u[0] * (1 - h), h, 0, u[1] * (1 - l), 0, l], {type: "generic"}), d.update()
        }
      }
      this._update_apply_transformation(t, d), this.needsUpdate = !1;
      for (e in this.objects)if (this.objects.hasOwnProperty(e))for (n in this.objects[e].descendants)this.objects[e].descendants.hasOwnProperty(n) && (this.objects[e].descendants.needsUpdate = this.objects[e].descendants.needsRegularUpdate || this.board.needsFullUpdate);
      this.board.updateElements(t);
      for (e in this.objects)this.objects.hasOwnProperty(e) && (p = this.objects[e].point, this.coords[p.id] = {usrCoords: p.coords.usrCoords.slice(0)});
      return this
    }, _update_find_drag_type: function() {
      var t, i, s, n = "nothing", a = [];
      for (t in this.objects)this.objects.hasOwnProperty(t) && (i = this.objects[t].point, i.coords.distance(e.COORDS_BY_USER, this.coords[t]) > r.eps && a.push(i.id));
      return 0 === a.length ? {action: n, id: "", changed: a} : (s = a[0], i = this.objects[s].point, a.length > 1 ? n = "translation" : o.isInArray(this.rotationPoints, i) && o.exists(this.rotationCenter) ? n = "rotation" : o.isInArray(this.scalePoints, i) && o.exists(this.scaleCenter) ? n = "scaling" : o.isInArray(this.translationPoints, i) && (n = "translation"), {action: n, id: s, changed: a})
    }, _update_centroid_center: function() {
      var t, e, i;
      t = [0, 0], e = 0;
      for (i in this.coords)this.coords.hasOwnProperty(i) && (t[0] += this.coords[i].usrCoords[1], t[1] += this.coords[i].usrCoords[2], ++e);
      return e > 0 && (t[0] /= e, t[1] /= e), t
    }, _update_apply_transformation: function(t, i) {
      var s, n;
      for (s in this.objects)this.objects.hasOwnProperty(s) && (o.exists(this.board.objects[s]) ? (n = this.objects[s].point, n.id !== t.id ? "translation" === t.action ? o.isInArray(t.changed, n.id) || n.coords.setCoordinates(e.COORDS_BY_USER, [this.coords[s].usrCoords[1] + i[0], this.coords[s].usrCoords[2] + i[1]]) : ("rotation" === t.action || "scaling" === t.action) && i.applyOnce([n]) : ("rotation" === t.action || "scaling" === t.action) && n.coords.setCoordinates(e.COORDS_BY_USER, r.matVecMult(i.matrix, this.coords[n.id].usrCoords))) : delete this.objects[s])
    }, addPoint: function(t) {return this.objects[t.id] = {point: this.board.select(t)}, this.coords[t.id] = {usrCoords: t.coords.usrCoords.slice(0)}, this.translationPoints.push(t), t.groups.push(this.id), t.groups = o.uniqueArray(t.groups), this}, addPoints: function(t) {
      var e;
      for (e = 0; t.length > e; e++)this.addPoint(t[e]);
      return this
    }, addGroup: function(t) {
      var e;
      for (e in t.objects)t.objects.hasOwnProperty(e) && this.addPoint(t.objects[e].point);
      return this
    }, removePoint: function(t) {return delete this.objects[t.id], this}, setRotationCenter: function(t) {return this.rotationCenter = t, this}, setRotationPoints: function(t) {return this._setActionPoints("rotation", t)}, addRotationPoint: function(t) {return this._addActionPoint("rotation", t)}, removeRotationPoint: function(t) {return this._removeActionPoint("rotation", t)}, setTranslationPoints: function(t) {return this._setActionPoints("translation", t)}, addTranslationPoint: function(t) {return this._addActionPoint("translation", t)}, removeTranslationPoint: function(t) {return this._removeActionPoint("translation", t)}, setScaleCenter: function(t) {return this.scaleCenter = t, this}, setScalePoints: function(t, e) {
      var i, r, s;
      for (i = o.isArray(t) ? t : arguments, s = i.length, r = 0; s > r; ++r)this.scaleDirections[this.board.select(i[r]).id] = e || "xy";
      return this._setActionPoints("scale", t)
    }, addScalePoint: function(t, e) {return this._addActionPoint("scale", t), this.scaleDirections[this.board.select(t).id] = e || "xy", this}, removeScalePoint: function(t) {return this._removeActionPoint("scale", t)}, _setActionPoints: function(t, e) {
      var i, r, s;
      for (i = o.isArray(e) ? e : arguments, s = i.length, this[t + "Points"] = [], r = 0; s > r; ++r)this._addActionPoint(t, i[r]);
      return this
    }, _addActionPoint: function(t, e) {return this[t + "Points"].push(this.board.select(e)), this}, _removeActionPoint: function(t, e) {
      var i = this[t + "Points"].indexOf(this.board.select(e));
      return i > -1 && this[t + "Points"].splice(i, 1), this
    }, setProperty: t.shortcut(t.Group.prototype, "setAttribute"), setAttribute: function() {
      var t;
      for (t in this.objects)this.objects.hasOwnProperty(t) && this.objects[t].point.setAttribute.apply(this.objects[t].point, arguments);
      return this
    }}), t.createGroup = function(e, i, r) {
      var s, n = o.copyAttributes(r, e.options, "group"), a = new t.Group(e, n.id, n.name, i, n);
      for (a.elType = "group", a.parents = [], s = 0; i.length > s; s++)a.parents.push(i[s].id);
      return a
    }, t.registerElement("group", t.createGroup), {Group: t.Group, createGroup: t.createGroup}
  }), define("element/conic", ["jxg", "base/constants", "base/coords", "math/math", "math/numerics", "math/geometry", "utils/type", "base/point", "base/curve"], function(t, e, i, r, s, o, n) {
    return t.createEllipse = function(t, r, s) {
      var o, a, h, l, c, d, u, p = [], f = n.copyAttributes(s, t.options, "conic", "foci"), m = n.copyAttributes(s, t.options, "conic");
      for (d = 0; 2 > d; d++)if (r[d].length > 1)p[d] = t.create("point", r[d], f); else if (n.isPoint(r[d]))p[d] = t.select(r[d]); else if ("function" == typeof r[d] && n.isPoint(r[d]()))p[d] = r[d](); else {
        if (!n.isString(r[d]))throw Error("JSXGraph: Can't create Ellipse with parent types '" + typeof r[0] + "' and '" + typeof r[1] + "'." + "\nPossible parent types: [point,point,point], [point,point,number|function]");
        p[d] = t.select(r[d])
      }
      if (n.isNumber(r[2]))c = n.createFunction(r[2], t); else if ("function" == typeof r[2] && n.isNumber(r[2]()))c = r[2]; else {
        if (n.isPoint(r[2]))l = t.select(r[2]); else if (r[2].length > 1)l = t.create("point", r[2], f); else if ("function" == typeof r[2] && n.isPoint(r[2]()))l = r[2](); else {
          if (!n.isString(r[2]))throw Error("JSXGraph: Can't create Ellipse with parent types '" + typeof r[0] + "' and '" + typeof r[1] + "' and '" + typeof r[2] + "'." + "\nPossible parent types: [point,point,point], [point,point,number|function]");
          l = t.select(r[2])
        }
        c = function() {return l.Dist(p[0]) + l.Dist(p[1])}
      }
      for (n.exists(r[4]) || (r[4] = 2 * Math.PI), n.exists(r[3]) || (r[3] = 0), h = t.create("point", [function() {return.5 * (p[0].X() + p[1].X())}, function() {return.5 * (p[0].Y() + p[1].Y())}], f), a = t.create("curve", [function() {return 0}, function() {return 0}, r[3], r[4]], m), a.majorAxis = c, u = a.hasPoint, o = function(t, e) {
        var i, r, s, o, n, h, l, d, u;
        e || (i = c(), r = i * i, s = p[0].X(), o = p[0].Y(), n = p[1].X(), h = p[1].Y(), l = s - n, d = o - h, u = (r - s * s - o * o + n * n + h * h) / (2 * i), a.quadraticform = [
          [u * u - n * n - h * h, u * l / i + n, u * d / i + h],
          [u * l / i + n, l * l / r - 1, l * d / r],
          [u * d / i + h, l * d / r, d * d / r - 1]
        ])
      }, a.X = function(t, e) {
        var i = c(), r = p[1].Dist(p[0]), s = .5 * (r * r - i * i) / (r * Math.cos(t) - i), n = Math.atan2(p[1].Y() - p[0].Y(), p[1].X() - p[0].X());
        return e || o(t, e), p[0].X() + Math.cos(n + t) * s
      }, a.Y = function(t) {
        var e = c(), i = p[1].Dist(p[0]), r = .5 * (i * i - e * e) / (i * Math.cos(t) - e), s = Math.atan2(p[1].Y() - p[0].Y(), p[1].X() - p[0].X());
        return p[0].Y() + Math.sin(s + t) * r
      }, a.midpoint = h, a.type = e.OBJECT_TYPE_CONIC, a.hasPoint = function(t, r) {
        var s, o, n, a, h;
        return this.visProp.hasinnerpoints ? (s = p[0].coords, o = p[1].coords, n = this.majorAxis(), a = new i(e.COORDS_BY_SCREEN, [t, r], this.board), h = a.distance(e.COORDS_BY_USER, s) + a.distance(e.COORDS_BY_USER, o), n >= h) : u.apply(this, arguments)
      }, h.addChild(a), d = 0; 2 > d; d++)n.isPoint(p[d]) && p[d].addChild(a);
      for (n.isPoint(l) && l.addChild(a), a.parents = [], d = 0; r.length > d; d++)r[d].id && a.parents.push(r[d].id);
      return a
    }, t.createHyperbola = function(t, i, r) {
      var s, o, a, h, l, c, d = [], u = n.copyAttributes(r, t.options, "conic", "foci"), p = n.copyAttributes(r, t.options, "conic");
      for (c = 0; 2 > c; c++)if (i[c].length > 1)d[c] = t.create("point", i[c], u); else if (n.isPoint(i[c]))d[c] = t.select(i[c]); else if ("function" == typeof i[c] && n.isPoint(i[c]()))d[c] = i[c](); else {
        if (!n.isString(i[c]))throw Error("JSXGraph: Can't create Hyperbola with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,point,point], [point,point,number|function]");
        d[c] = t.select(i[c])
      }
      if (n.isNumber(i[2]))l = n.createFunction(i[2], t); else if ("function" == typeof i[2] && n.isNumber(i[2]()))l = i[2]; else {
        if (n.isPoint(i[2]))h = t.select(i[2]); else if (i[2].length > 1)h = t.create("point", i[2], u); else if ("function" == typeof i[2] && n.isPoint(i[2]()))h = i[2](); else {
          if (!n.isString(i[2]))throw Error("JSXGraph: Can't create Hyperbola with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "' and '" + typeof i[2] + "'." + "\nPossible parent types: [point,point,point], [point,point,number|function]");
          h = t.select(i[2])
        }
        l = function() {return h.Dist(d[0]) - h.Dist(d[1])}
      }
      for (n.exists(i[4]) || (i[4] = 1.0001 * Math.PI), n.exists(i[3]) || (i[3] = -1.0001 * Math.PI), a = t.create("point", [function() {return.5 * (d[0].X() + d[1].X())}, function() {return.5 * (d[0].Y() + d[1].Y())}], u), o = t.create("curve", [function() {return 0}, function() {return 0}, i[3], i[4]], p), o.majorAxis = l, s = function(t, e) {
        var i, r, s, n, a, h, c, u, p;
        e || (i = l(), r = i * i, s = d[0].X(), n = d[0].Y(), a = d[1].X(), h = d[1].Y(), c = s - a, u = n - h, p = (r - s * s - n * n + a * a + h * h) / (2 * i), o.quadraticform = [
          [p * p - a * a - h * h, p * c / i + a, p * u / i + h],
          [p * c / i + a, c * c / r - 1, c * u / r],
          [p * u / i + h, c * u / r, u * u / r - 1]
        ])
      }, o.X = function(t, e) {
        var i = l(), r = d[1].Dist(d[0]), o = .5 * (r * r - i * i) / (r * Math.cos(t) + i), n = Math.atan2(d[1].Y() - d[0].Y(), d[1].X() - d[0].X());
        return e || s(t, e), d[0].X() + Math.cos(n + t) * o
      }, o.Y = function(t) {
        var e = l(), i = d[1].Dist(d[0]), r = .5 * (i * i - e * e) / (i * Math.cos(t) + e), s = Math.atan2(d[1].Y() - d[0].Y(), d[1].X() - d[0].X());
        return d[0].Y() + Math.sin(s + t) * r
      }, o.midpoint = a, o.type = e.OBJECT_TYPE_CONIC, a.addChild(o), c = 0; 2 > c; c++)n.isPoint(d[c]) && d[c].addChild(o);
      for (n.isPoint(h) && h.addChild(o), o.parents = [], c = 0; i.length > c; c++)i[c].id && o.parents.push(i[c].id);
      return o
    }, t.createParabola = function(t, i, r) {
      var s, a, h, l, c = i[0], d = i[1], u = n.copyAttributes(r, t.options, "conic", "foci"), p = n.copyAttributes(r, t.options, "conic");
      if (i[0].length > 1)c = t.create("point", i[0], u); else if (n.isPoint(i[0]))c = t.select(i[0]); else if ("function" == typeof i[0] && n.isPoint(i[0]()))c = i[0](); else {
        if (!n.isString(i[0]))throw Error("JSXGraph: Can't create Parabola with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [point,line]");
        c = t.select(i[0])
      }
      for (n.exists(i[3]) || (i[3] = 10), n.exists(i[2]) || (i[2] = -10), h = t.create("point", [function() {return o.projectPointToLine(c, d, t).usrCoords}], u), a = t.create("curve", [function() {return 0}, function() {return 0}, i[2], i[3]], p), s = function(t, e) {
        var i, r, s, o, n, h;
        e || (i = d.stdform[1], r = d.stdform[2], s = d.stdform[0], o = i * i + r * r, n = c.X(), h = c.Y(), a.quadraticform = [
          [s * s - o * (n * n + h * h), s * i + o * n, s * r + o * h],
          [s * i + o * n, -r * r, i * r],
          [s * r + o * h, i * r, -i * i]
        ])
      }, a.X = function(t, e) {
        var i, r, n = d.getAngle(), a = o.distPointLine(c.coords.usrCoords, d.stdform), h = d.point1.coords.usrCoords, l = d.point2.coords.usrCoords, u = c.coords.usrCoords;
        return 0 === h[0] ? h = [1, l[1] + d.stdform[2], l[2] - d.stdform[1]] : 0 === l[0] && (l = [1, h[1] + d.stdform[2], h[2] - d.stdform[1]]), r = (l[1] - h[1]) * (u[2] - h[2]) - (l[2] - h[2]) * (u[1] - h[1]) >= 0 ? 1 : -1, i = r * a / (1 - Math.sin(t)), e || s(t, e), c.X() + Math.cos(t + n) * i
      }, a.Y = function(t) {
        var e, i, r = d.getAngle(), s = o.distPointLine(c.coords.usrCoords, d.stdform), n = d.point1.coords.usrCoords, a = d.point2.coords.usrCoords, h = c.coords.usrCoords;
        return 0 === n[0] ? n = [1, a[1] + d.stdform[2], a[2] - d.stdform[1]] : 0 === a[0] && (a = [1, n[1] + d.stdform[2], n[2] - d.stdform[1]]), i = (a[1] - n[1]) * (h[2] - n[2]) - (a[2] - n[2]) * (h[1] - n[1]) >= 0 ? 1 : -1, e = i * s / (1 - Math.sin(t)), c.Y() + Math.sin(t + r) * e
      }, a.type = e.OBJECT_TYPE_CONIC, h.addChild(a), n.isPoint(c) && c.addChild(a), d.addChild(a), a.parents = [], l = 0; i.length > l; l++)i[l].id && a.parents.push(i[l].id);
      return a
    }, t.createConic = function(i, o, a) {
      var h, l, c, d, u, p, f, m, b, g, v, y, C, P, _ = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ], E = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ], S = [], x = [], O = n.copyAttributes(a, i.options, "conic", "foci"), T = n.copyAttributes(a, i.options, "conic");
      if (5 === o.length)P = !0; else {
        if (6 !== o.length)throw Error("JSXGraph: Can't create generic Conic with " + o.length + " parameters.");
        P = !1
      }
      if (P)for (y = 0; 5 > y; y++)if (o[y].length > 1)S[y] = i.create("point", o[y], O); else if (n.isPoint(o[y]))S[y] = i.select(o[y]); else if ("function" == typeof o[y] && n.isPoint(o[y]()))S[y] = o[y](); else {
        if (!n.isString(o[y]))throw Error("JSXGraph: Can't create Conic section with parent types '" + typeof o[y] + "'." + "\nPossible parent types: [point,point,point,point,point], [a00,a11,a22,a01,a02,a12]");
        S[y] = i.select(o[y])
      } else C = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ], C[0][0] = n.isFunction(o[2]) ? function() {return o[2]()} : function() {return o[2]}, C[0][1] = n.isFunction(o[4]) ? function() {return o[4]()} : function() {return o[4]}, C[0][2] = n.isFunction(o[5]) ? function() {return o[5]()} : function() {return o[5]}, C[1][1] = n.isFunction(o[0]) ? function() {return o[0]()} : function() {return o[0]}, C[1][2] = n.isFunction(o[3]) ? function() {return o[3]()} : function() {return o[3]}, C[2][2] = n.isFunction(o[1]) ? function() {return o[1]()} : function() {return o[1]};
      if (u = function(t) {
        var e, i;
        for (e = 0; 3 > e; e++)for (i = e; 3 > i; i++)t[e][i] += t[i][e];
        for (e = 0; 3 > e; e++)for (i = 0; e > i; i++)t[e][i] = t[i][e];
        return t
      }, d = function(t, e) {
        var i, r, s = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ];
        for (i = 0; 3 > i; i++)for (r = 0; 3 > r; r++)s[i][r] = t[i] * e[r];
        return u(s)
      }, c = function(t, e, i) {
        var s, o, n, a, h, l = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ];
        for (h = r.matVecMult(e, i), n = r.innerProduct(i, h), h = r.matVecMult(t, i), a = r.innerProduct(i, h), s = 0; 3 > s; s++)for (o = 0; 3 > o; o++)l[s][o] = n * t[s][o] - a * e[s][o];
        return l
      }, l = i.create("curve", [function() {return 0}, function() {return 0}, 0, 2 * Math.PI], T), h = function(e, i) {
        var o, n, a, h;
        if (!i) {
          if (P) {
            for (o = 0; 5 > o; o++)x[o] = S[o].coords.usrCoords;
            g = d(r.crossProduct(x[0], x[1]), r.crossProduct(x[2], x[3])), v = d(r.crossProduct(x[0], x[2]), r.crossProduct(x[1], x[3])), E = c(g, v, x[4])
          } else for (o = 0; 3 > o; o++)for (n = o; 3 > n; n++)E[o][n] = C[o][n](), n > o && (E[n][o] = E[o][n]);
          for (l.quadraticform = E, p = s.Jacobi(E), 0 > p[0][0][0] && (p[0][0][0] *= -1, p[0][1][1] *= -1, p[0][2][2] *= -1), o = 0; 3 > o; o++) {
            for (a = 0, n = 0; 3 > n; n++)a += p[1][n][o] * p[1][n][o];
            a = Math.sqrt(a)
          }
          _ = p[1], b = Math.sqrt(Math.abs(p[0][0][0])), f = Math.sqrt(Math.abs(p[0][1][1])), m = Math.sqrt(Math.abs(p[0][2][2]))
        }
        return 0 >= p[0][1][1] && 0 >= p[0][2][2] ? h = r.matVecMult(_, [1 / b, Math.cos(e) / f, Math.sin(e) / m]) : 0 >= p[0][1][1] && p[0][2][2] > 0 ? h = r.matVecMult(_, [Math.cos(e) / b, 1 / f, Math.sin(e) / m]) : 0 > p[0][2][2] && (h = r.matVecMult(_, [Math.sin(e) / b, Math.cos(e) / f, 1 / m])), t.exists(h) ? (h[1] /= h[0], h[2] /= h[0], h[0] = 1) : h = [1, 0 / 0, 0 / 0], h
      }, l.X = function(t, e) {return h(t, e)[1]}, l.Y = function(t, e) {return h(t, e)[2]}, l.midpoint = i.create("point", [function() {
        var t = l.quadraticform;
        return[t[1][1] * t[2][2] - t[1][2] * t[1][2], t[1][2] * t[0][2] - t[2][2] * t[0][1], t[0][1] * t[1][2] - t[1][1] * t[0][2]]
      }], O), l.type = e.OBJECT_TYPE_CONIC, P) {
        for (y = 0; 5 > y; y++)n.isPoint(S[y]) && S[y].addChild(l);
        for (l.parents = [], y = 0; o.length > y; y++)o[y].id && l.parents.push(o[y].id)
      }
      return l.addChild(l.midpoint), l
    }, t.registerElement("ellipse", t.createEllipse), t.registerElement("hyperbola", t.createHyperbola), t.registerElement("parabola", t.createParabola), t.registerElement("conic", t.createConic), {createEllipse: t.createEllipse, createHyperbola: t.createHyperbola, createParabola: t.createParabola, createConic: t.createConic}
  }), define("base/polygon", ["jxg", "base/constants", "base/coords", "math/statistics", "utils/type", "base/element", "base/line", "base/transformation"], function(t, e, i, r, s, o) {
    return t.Polygon = function(i, r, o) {
      this.constructor(i, o, e.OBJECT_TYPE_POLYGON, e.OBJECT_CLASS_AREA);
      var n, a, h, l, c, d = s.copyAttributes(o, i.options, "polygon", "borders");
      for (this.withLines = o.withlines, this.attr_line = d, this.vertices = [], n = 0; r.length > n; n++)a = this.board.select(r[n]), this.vertices[n] = a;
      if (this.vertices[this.vertices.length - 1] !== this.vertices[0] && this.vertices.push(this.vertices[0]), this.borders = [], this.withLines)for (l = this.vertices.length - 1, c = 0; l > c; c++)n = (c + 1) % l, d.id = d.ids && d.ids[n], d.name = d.names && d.names[n], d.strokecolor = s.isArray(d.colors) && d.colors[n % d.colors.length] || d.strokecolor, d.visible = s.exists(o.borders.visible) ? o.borders.visible : o.visible, d.strokecolor === !1 && (d.strokecolor = "none"), h = i.create("segment", [this.vertices[n], this.vertices[n + 1]], d), h.dump = !1, this.borders[n] = h, h.parentPolygon = this;
      for (this.id = this.board.setId(this, "Py"), n = 0; this.vertices.length - 1 > n; n++)a = this.board.select(this.vertices[n]), a.addChild(this);
      this.board.renderer.drawPolygon(this), this.board.finalizeAdding(this), this.createGradient(), this.elType = "polygon", this.createLabel(), this.methodMap = t.deepCopy(this.methodMap, {borders: "borders", vertices: "vertices", A: "Area", Area: "Area", boundingBox: "boundingBox", bounds: "bounds", addPoints: "addPoints", insertPoints: "insertPoints", removePoints: "removePoints"})
    }, t.Polygon.prototype = new o, t.extend(t.Polygon.prototype, {hasPoint: function(t, e) {
      var i, r, s, o = !1;
      if (this.visProp.hasinnerpoints)for (s = this.vertices.length, i = 0, r = s - 2; s - 1 > i; r = i++)this.vertices[i].coords.scrCoords[2] > e != this.vertices[r].coords.scrCoords[2] > e && (this.vertices[r].coords.scrCoords[1] - this.vertices[i].coords.scrCoords[1]) * (e - this.vertices[i].coords.scrCoords[2]) / (this.vertices[r].coords.scrCoords[2] - this.vertices[i].coords.scrCoords[2]) + this.vertices[i].coords.scrCoords[1] > t && (o = !o); else for (s = this.borders.length, i = 0; s > i; i++)if (this.borders[i].hasPoint(t, e)) {
        o = !0;
        break
      }
      return o
    }, updateRenderer: function() {return this.needsUpdate && this.visProp.visible && (this.board.renderer.updatePolygon(this), this.needsUpdate = !1), this.hasLabel && this.label.visProp.visible && (this.label.update(), this.board.renderer.updateText(this.label)), this}, getTextAnchor: function() {
      var t, r = this.vertices[0].X(), s = this.vertices[0].Y(), o = r, n = s;
      for (t = 0; this.vertices.length > t; t++)r > this.vertices[t].X() && (r = this.vertices[t].X()), this.vertices[t].X() > o && (o = this.vertices[t].X()), this.vertices[t].Y() > s && (s = this.vertices[t].Y()), n > this.vertices[t].Y() && (n = this.vertices[t].Y());
      return new i(e.COORDS_BY_USER, [.5 * (r + o), .5 * (s + n)], this.board)
    }, getLabelAnchor: t.shortcut(t.Polygon.prototype, "getTextAnchor"), cloneToBackground: function() {
      var t, e = {};
      return e.id = this.id + "T" + this.numTraces, this.numTraces++, e.vertices = this.vertices, e.visProp = s.deepCopy(this.visProp, this.visProp.traceattributes, !0), e.visProp.layer = this.board.options.layer.trace, e.board = this.board, s.clearVisPropOld(e), t = this.board.renderer.enhancedRendering, this.board.renderer.enhancedRendering = !0, this.board.renderer.drawPolygon(e), this.board.renderer.enhancedRendering = t, this.traces[e.id] = e.rendNode, this
    }, hideElement: function(t) {
      var e;
      if (this.visProp.visible = !1, this.board.renderer.hide(this), !t)for (e = 0; this.borders.length > e; e++)this.borders[e].hideElement();
      this.hasLabel && s.exists(this.label) && (this.label.hiddenByParent = !0, this.label.visProp.visible && this.label.hideElement())
    }, showElement: function(t) {
      var e;
      if (this.visProp.visible = !0, this.board.renderer.show(this), !t)for (e = 0; this.borders.length > e; e++)this.borders[e].showElement(), this.borders[e].updateRenderer();
      s.exists(this.label) && this.hasLabel && this.label.hiddenByParent && (this.label.hiddenByParent = !1, this.label.visProp.visible || this.label.showElement().updateRenderer())
    }, Area: function() {
      var t, e = 0;
      for (t = 0; this.vertices.length - 1 > t; t++)e += this.vertices[t].X() * this.vertices[t + 1].Y() - this.vertices[t + 1].X() * this.vertices[t].Y();
      return e /= 2, Math.abs(e)
    }, boundingBox: function() {
      var t, e, i = [0, 0, 0, 0], r = this.vertices.length - 1;
      if (0 === r)return i;
      for (i[0] = this.vertices[0].X(), i[2] = i[0], i[1] = this.vertices[0].Y(), i[3] = i[1], t = 1; r > t; ++t)e = this.vertices[t].X(), i[0] > e ? i[0] = e : e > i[2] && (i[2] = e), e = this.vertices[t].Y(), e > i[1] ? i[1] = e : i[3] > e && (i[3] = e);
      return i
    }, bounds: function() {return this.boundingBox()}, remove: function() {
      var t;
      for (t = 0; this.borders.length > t; t++)this.board.removeObject(this.borders[t]);
      o.prototype.remove.call(this)
    }, findPoint: function(t) {
      var e;
      if (!s.isPoint(t))return-1;
      for (e = 0; this.vertices.length > e; e++)if (this.vertices[e].id === t.id)return e;
      return-1
    }, addPoints: function() {
      var t = Array.prototype.slice.call(arguments);
      return this.insertPoints.apply(this, [this.vertices.length - 2].concat(t))
    }, insertPoints: function(t) {
      var e, i, r = [];
      if (0 === arguments.length)return this;
      if (0 > t || t > this.vertices.length - 2)return this;
      for (e = 1; arguments.length > e; e++)s.isPoint(arguments[e]) && r.push(arguments[e]);
      if (i = this.vertices.slice(0, t + 1).concat(r), this.vertices = i.concat(this.vertices.slice(t + 1)), this.withLines) {
        for (i = this.borders.slice(0, t), this.board.removeObject(this.borders[t]), e = 0; r.length > e; e++)i.push(this.board.create("segment", [this.vertices[t + e], this.vertices[t + e + 1]], this.attr_line));
        i.push(this.board.create("segment", [this.vertices[t + r.length], this.vertices[t + r.length + 1]], this.attr_line)), this.borders = i.concat(this.borders.slice(t))
      }
      return this.board.update(), this
    }, removePoints: function() {
      var t, e, i, r = [], o = [], n = [], a = [];
      for (this.vertices = this.vertices.slice(0, this.vertices.length - 1), t = 0; arguments.length > t; t++)s.isPoint(arguments[t]) && (i = this.findPoint(arguments[t])), s.isNumber(i) && i > -1 && this.vertices.length > i && -1 === s.indexOf(n, i) && n.push(i);
      for (n = n.sort(), r = this.vertices.slice(), o = this.borders.slice(), this.withLines && a.push([n[n.length - 1]]), t = n.length - 1; t > -1; t--)r[n[t]] = -1, this.withLines && n[t] - 1 > n[t - 1] && (a[a.length - 1][1] = n[t], a.push([n[t - 1]]));
      for (this.withLines && (a[a.length - 1][1] = n[0]), this.vertices = [], t = 0; r.length > t; t++)s.isPoint(r[t]) && this.vertices.push(r[t]);
      if (this.vertices[this.vertices.length - 1].id !== this.vertices[0].id && this.vertices.push(this.vertices[0]), this.withLines) {
        for (t = 0; a.length > t; t++) {
          for (e = a[t][1] - 1; a[t][0] + 1 > e; e++)0 > e ? (e = 0, this.board.removeObject(this.borders[o.length - 1]), o[o.length - 1] = -1) : e > o.length - 1 && (e = o.length - 1), this.board.removeObject(this.borders[e]), o[e] = -1;
          0 !== a[t][1] && a[t][0] !== r.length - 1 && (o[a[t][0] - 1] = this.board.create("segment", [r[Math.max(a[t][1] - 1, 0)], r[Math.min(a[t][0] + 1, this.vertices.length - 1)]], this.attr_line))
        }
        for (this.borders = [], t = 0; o.length > t; t++)-1 !== o[t] && this.borders.push(o[t]);
        (5 === a[0][1] || 0 === a[a.length - 1][1]) && this.borders.push(this.board.create("segment", [this.vertices[0], this.vertices[this.vertices.length - 2]], this.attr_line))
      }
      return this.board.update(), this
    }, getParents: function() {
      var t, e = [];
      for (t = 0; this.vertices.length > t; t++)e.push(this.vertices[t].id);
      return e
    }, getAttributes: function() {
      var t, e = o.prototype.getAttributes.call(this);
      if (this.withLines)for (e.lines = e.lines || {}, e.lines.ids = [], e.lines.colors = [], t = 0; this.borders.length > t; t++)e.lines.ids.push(this.borders[t].id), e.lines.colors.push(this.borders[t].visProp.strokecolor);
      return e
    }, snapToGrid: function() {
      var t;
      for (t = 0; this.vertices.length > t; t++)this.vertices[t].snapToGrid()
    }, setPositionDirectly: function(t, e, s) {
      var o, n, a, h, l = new i(t, e, this.board), c = new i(t, s, this.board);
      for (h = this.vertices.length - 1, a = 0; h > a; a++)if (!this.vertices[a].draggable())return this;
      return o = r.subtract(l.usrCoords, c.usrCoords), n = this.board.create("transform", o.slice(1), {type: "translate"}), n.applyOnce(this.vertices.slice(0, -1)), this
    }}), t.createPolygon = function(e, i, r) {
      var o, n, a = [];
      if (a = s.providePoints(e, i, r, "polygon", ["vertices"]), a === !1)throw Error("JSXGraph: Can't create polygon with parent types other than 'point' and 'coordinate arrays' or a function returning an array of coordinates");
      return n = s.copyAttributes(r, e.options, "polygon"), o = new t.Polygon(e, a, n), o.isDraggable = !0, o
    }, t.createRegularPolygon = function(t, i, r) {
      var o, n, a, h, l, c, d, u = [];
      if (l = i.length, a = i[l - 1], s.isNumber(a) && (3 !== i.length || 3 > a))throw Error("JSXGraph: A regular polygon needs two point types and a number > 2 as input.");
      if (s.isNumber(t.select(a)) ? (l--, c = !1) : (a = l, c = !0), u = s.providePoints(t, i.slice(0, l), r, "regularpolygon", ["vertices"]), u === !1)throw Error("JSXGraph: Can't create regular polygon with parent types other than 'point' and 'coordinate arrays' or a function returning an array of coordinates");
      for (d = s.copyAttributes(r, t.options, "regularpolygon", "vertices"), n = 2; a > n; n++)h = t.create("transform", [Math.PI * (2 - (a - 2) / a), u[n - 1]], {type: "rotate"}), c ? (u[n].addTransform(u[n - 2], h), u[n].prepareUpdate().update().updateRenderer()) : (s.isArray(d.ids) && d.ids.length >= a - 2 && (d.id = d.ids[n - 2]), u[n] = t.create("point", [u[n - 2], h], d), u[n].type = e.OBJECT_TYPE_CAS, u[n].isDraggable = !0, u[n].visProp.fixed = !1);
      return d = s.copyAttributes(r, t.options, "polygon"), o = t.create("polygon", u, d), o.elType = "regularpolygon", o
    }, t.registerElement("polygon", t.createPolygon), t.registerElement("regularpolygon", t.createRegularPolygon), {Polygon: t.Polygon, createPolygon: t.createPolygon, createRegularPolygon: t.createRegularPolygon}
  }), define("element/arc", ["jxg", "math/geometry", "math/math", "base/coords", "base/circle", "utils/type", "base/constants", "base/curve", "element/composition"], function(t, e, i, r, s, o, n) {
    return t.createArc = function(a, h, l) {
      var c, d, u, p;
      if (p = o.providePoints(a, h, l, "point"), p === !1 || 3 > p.length)throw Error("JSXGraph: Can't create Arc with parent types '" + typeof h[0] + "' and '" + typeof h[1] + "' and '" + typeof h[2] + "'." + "\nPossible parent types: [point,point,point]");
      for (d = o.copyAttributes(l, a.options, "arc"), c = a.create("curve", [
        [0],
        [0]
      ], d), c.elType = "arc", c.parents = [], u = 0; p.length > u; u++)p[u].id && c.parents.push(p[u].id);
      return c.type = n.OBJECT_TYPE_ARC, c.center = p[0], c.radiuspoint = p[1], c.point2 = c.radiuspoint, c.anglepoint = p[2], c.point3 = c.anglepoint, c.center.addChild(c), c.radiuspoint.addChild(c), c.anglepoint.addChild(c), c.useDirection = d.usedirection, c.updateDataArray = function() {
        var t, i, r, s, o, n, a = 1, h = this.radiuspoint, l = this.center, c = this.anglepoint;
        i = e.rad(h, l, c), ("minor" === this.visProp.selection && i > Math.PI || "major" === this.visProp.selection && Math.PI > i) && (a = -1), this.useDirection && (s = p[1].coords.usrCoords, o = p[3].coords.usrCoords, n = p[2].coords.usrCoords, r = (s[1] - n[1]) * (s[2] - o[2]) - (s[2] - n[2]) * (s[1] - o[1]), 0 > r ? (this.radiuspoint = p[1], this.anglepoint = p[2]) : (this.radiuspoint = p[2], this.anglepoint = p[1])), h = h.coords.usrCoords, l = l.coords.usrCoords, c = c.coords.usrCoords, t = e.bezierArc(h, l, c, !1, a), this.dataX = t[0], this.dataY = t[1], this.bezierDegree = 3, this.updateStdform(), this.updateQuadraticform()
      }, c.Radius = function() {return this.radiuspoint.Dist(this.center)}, c.getRadius = function() {return this.Radius()}, c.Value = function() {return this.Radius() * e.rad(this.radiuspoint, this.center, this.anglepoint)}, c.hasPoint = function(t, s) {
        var o, a, h, l, c, d, u, p, f = this.board.options.precision.hasPoint / this.board.unitX, m = this.Radius();
        return a = new r(n.COORDS_BY_SCREEN, [t, s], this.board), this.transformations.length > 0 && (this.updateTransformMatrix(), u = i.inverse(this.transformMat), p = i.matVecMult(u, a.usrCoords), a = new r(n.COORDS_BY_USER, p, this.board)), o = this.center.coords.distance(n.COORDS_BY_USER, a), h = f > Math.abs(o - m), h && (l = e.rad(this.radiuspoint, this.center, a.usrCoords.slice(1)), c = 0, d = e.rad(this.radiuspoint, this.center, this.anglepoint), ("minor" === this.visProp.selection && d > Math.PI || "major" === this.visProp.selection && Math.PI > d) && (c = d, d = 2 * Math.PI), (c > l || l > d) && (h = !1)), h
      }, c.hasPointSector = function(t, i) {
        var s, o, a, h = new r(n.COORDS_BY_SCREEN, [t, i], this.board), l = this.Radius(), c = this.center.coords.distance(n.COORDS_BY_USER, h), d = l > c;
        return d && (s = e.rad(this.radiuspoint, this.center, h.usrCoords.slice(1)), o = 0, a = e.rad(this.radiuspoint, this.center, this.anglepoint), ("minor" === this.visProp.selection && a > Math.PI || "major" === this.visProp.selection && Math.PI > a) && (o = a, a = 2 * Math.PI), (o > s || s > a) && (d = !1)), d
      }, c.getTextAnchor = function() {return this.center.coords}, c.getLabelAnchor = function() {
        var t, i, s, o, a = e.rad(this.radiuspoint, this.center, this.anglepoint), h = 10 / this.board.unitX, l = 10 / this.board.unitY, c = this.point2.coords.usrCoords, d = this.center.coords.usrCoords, u = c[1] - d[1], p = c[2] - d[2];
        return("minor" === this.visProp.selection && a > Math.PI || "major" === this.visProp.selection && Math.PI > a) && (a = -(2 * Math.PI - a)), t = new r(n.COORDS_BY_USER, [d[1] + Math.cos(.5 * a) * u - Math.sin(.5 * a) * p, d[2] + Math.sin(.5 * a) * u + Math.cos(.5 * a) * p], this.board), i = t.usrCoords[1] - d[1], s = t.usrCoords[2] - d[2], o = Math.sqrt(i * i + s * s), i = i * (o + h) / o, s = s * (o + l) / o, new r(n.COORDS_BY_USER, [d[1] + i, d[2] + s], this.board)
      }, c.updateQuadraticform = s.Circle.prototype.updateQuadraticform, c.updateStdform = s.Circle.prototype.updateStdform, c.methodMap = t.deepCopy(c.methodMap, {getRadius: "getRadius", radius: "Radius", center: "center", radiuspoint: "radiuspoint", anglepoint: "anglepoint"}), c.prepareUpdate().update(), c
    }, t.registerElement("arc", t.createArc), t.createSemicircle = function(t, e, i) {
      var r, s, n, a;
      if (a = o.providePoints(t, e, i, "point"), a === !1 || 2 !== a.length)throw Error("JSXGraph: Can't create Semicircle with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "'." + "\nPossible parent types: [point,point]");
      return n = o.copyAttributes(i, t.options, "semicircle", "midpoint"), s = t.create("midpoint", a, n), s.dump = !1, n = o.copyAttributes(i, t.options, "semicircle"), r = t.create("arc", [s, a[1], a[0]], n), r.elType = "semicircle", r.parents = [a[0].id, a[1].id], r.subs = {midpoint: s}, r.midpoint = r.center = s, r
    }, t.registerElement("semicircle", t.createSemicircle), t.createCircumcircleArc = function(t, e, i) {
      var r, s, n, a;
      if (a = o.providePoints(t, e, i, "point"), a === !1 || 3 !== a.length)throw Error("JSXGraph: create Circumcircle Arc with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "' and '" + typeof e[2] + "'." + "\nPossible parent types: [point,point,point]");
      return n = o.copyAttributes(i, t.options, "circumcirclearc", "center"), s = t.create("circumcenter", a, n), s.dump = !1, n = o.copyAttributes(i, t.options, "circumcirclearc"), n.usedirection = !0, r = t.create("arc", [s, a[0], a[2], a[1]], n), r.elType = "circumcirclearc", r.parents = [a[0].id, a[1].id, a[2].id], r.subs = {center: s}, r.center = s, r
    }, t.registerElement("circumcirclearc", t.createCircumcircleArc), t.createMinorArc = function(e, i, r) {return r.selection = "minor", t.createArc(e, i, r)}, t.registerElement("minorarc", t.createMinorArc), t.createMajorArc = function(e, i, r) {return r.selection = "major", t.createArc(e, i, r)}, t.registerElement("majorarc", t.createMajorArc), {createArc: t.createArc, createSemicircle: t.createSemicircle, createCircumcircleArc: t.createCircumcircleArc, createMinorArc: t.createMinorArc, createMajorArc: t.createMajorArc}
  }), define("element/sector", ["jxg", "math/geometry", "math/math", "math/statistics", "base/coords", "base/constants", "utils/type", "base/point", "base/curve", "base/transformation", "element/composition"], function(t, e, i, r, s, o, n) {
    return t.createSector = function(a, h, l) {
      var c, d, u, p, f, m = "invalid", b = ["center", "radiuspoint", "anglepoint"];
      if (h[0].elementClass === o.OBJECT_CLASS_LINE && h[1].elementClass === o.OBJECT_CLASS_LINE && (n.isArray(h[2]) || n.isNumber(h[2])) && (n.isArray(h[3]) || n.isNumber(h[3])) && (n.isNumber(h[4]) || n.isFunction(h[4])))m = "2lines"; else {
        if (f = n.providePoints(a, h, l, "sector", b), f === !1)throw Error("JSXGraph: Can't create Sector with parent types '" + typeof h[0] + "' and '" + typeof h[1] + "' and '" + typeof h[2] + "'.");
        m = "3points"
      }
      return d = n.copyAttributes(l, a.options, "sector"), c = a.create("curve", [
        [0],
        [0]
      ], d), c.type = o.OBJECT_TYPE_SECTOR, c.elType = "sector", "2lines" === m ? (c.Radius = function() {return n.evaluate(h[4])}, c.line1 = a.select(h[0]), c.line2 = a.select(h[1]), c.line1.addChild(c), c.line2.addChild(c), c.parents = [h[0].id, h[1].id], c.point1 = {visProp: {}}, c.point2 = {visProp: {}}, c.point3 = {visProp: {}}, u = e.meetLineLine(c.line1.stdform, c.line2.stdform, 0, a), n.isArray(h[2]) ? (2 === h[2].length && (h[2] = [1].concat(h[2])), p = e.projectPointToLine({coords: {usrCoords: h[2]}}, c.line1, a), p = r.subtract(p.usrCoords, u.usrCoords), c.direction1 = i.innerProduct(p, [0, c.line1.stdform[2], -c.line1.stdform[1]], 3) >= 0 ? 1 : -1) : c.direction1 = h[2] >= 0 ? 1 : -1, n.isArray(h[3]) ? (2 === h[3].length && (h[3] = [1].concat(h[3])), p = e.projectPointToLine({coords: {usrCoords: h[3]}}, c.line2, a), p = r.subtract(p.usrCoords, u.usrCoords), c.direction2 = i.innerProduct(p, [0, c.line2.stdform[2], -c.line2.stdform[1]], 3) >= 0 ? 1 : -1) : c.direction2 = h[3] >= 0 ? 1 : -1, c.updateDataArray = function() {
        var t, n, a, h, l = [0, 0, 0], d = [0, 0, 0], u = [0, 0, 0];
        return n = this.line1, a = this.line2, d = i.crossProduct(n.stdform, a.stdform), Math.abs(d[0]) > i.eps * i.eps && (d[1] /= d[0], d[2] /= d[0], d[0] /= d[0]), t = this.direction1 * this.Radius(), l = r.add(d, [0, t * n.stdform[2], -t * n.stdform[1]]), t = this.direction2 * this.Radius(), u = r.add(d, [0, t * a.stdform[2], -t * a.stdform[1]]), this.point2.coords = new s(o.COORDS_BY_USER, l, c.board), this.point1.coords = new s(o.COORDS_BY_USER, d, c.board), this.point3.coords = new s(o.COORDS_BY_USER, u, c.board), Math.abs(l[0]) < i.eps || Math.abs(d[0]) < i.eps || Math.abs(u[0]) < i.eps ? (this.dataX = [0 / 0], this.dataY = [0 / 0], void 0) : (h = e.bezierArc(l, d, u, !0, 1), this.dataX = h[0], this.dataY = h[1], this.bezierDegree = 3, void 0)
      }, c.methodMap = t.deepCopy(c.methodMap, {radius: "getRadius", getRadius: "getRadius", setRadius: "setRadius"}), c.prepareUpdate().update()) : "3points" === m && (c.point1 = f[0], c.point2 = f[1], c.point3 = f[2], c.point1.addChild(c), c.point2.addChild(c), c.point3.addChild(c), c.useDirection = l.usedirection, c.parents = [f[0].id, f[1].id, f[2].id], n.exists(f[3]) && (c.point4 = f[3], c.point4.addChild(c)), c.methodMap = t.deepCopy(c.methodMap, {arc: "arc", center: "center", radiuspoint: "radiuspoint", anglepoint: "anglepoint", radius: "getRadius", getRadius: "getRadius", setRadius: "setRadius"}), c.updateDataArray = function() {
        var t, i, r, s, o, a, h = this.point2, l = this.point1, c = this.point3, d = 1;
        return h.isReal && l.isReal && c.isReal ? (a = e.rad(h, l, c), ("minor" === this.visProp.selection && a > Math.PI || "major" === this.visProp.selection && Math.PI > a) && (d = -1), this.useDirection && n.exists(this.point4) && (r = this.point2.coords.usrCoords, s = this.point4.coords.usrCoords, o = this.point3.coords.usrCoords, i = (r[1] - o[1]) * (r[2] - s[2]) - (r[2] - o[2]) * (r[1] - s[1]), i >= 0 && (c = this.point2, h = this.point3)), h = h.coords.usrCoords, l = l.coords.usrCoords, c = c.coords.usrCoords, t = e.bezierArc(h, l, c, !0, d), this.dataX = t[0], this.dataY = t[1], this.bezierDegree = 3, void 0) : (this.dataX = [0 / 0], this.dataY = [0 / 0], void 0)
      }, c.Radius = function() {return this.point2.Dist(this.point1)}, d = n.copyAttributes(l, a.options, "sector", "arc"), d.withLabel = !1, d.name += "_arc", c.arc = a.create("arc", [c.point1, c.point2, c.point3], d), c.addChild(c.arc)), c.center = c.point1, c.radiuspoint = c.point2, c.anglepoint = c.point3, c.hasPointCurve = function(t, i) {
        var r, n, a, h = this.board.options.precision.hasPoint / this.board.unitX, l = new s(o.COORDS_BY_SCREEN, [t, i], this.board), c = this.Radius(), d = this.center.coords.distance(o.COORDS_BY_USER, l), u = h > Math.abs(d - c);
        return u && (r = e.rad(this.point2, this.center, l.usrCoords.slice(1)), n = 0, a = e.rad(this.point2, this.center, this.point3), (n > r || r > a) && (u = !1)), u
      }, c.hasPointSector = function(t, i) {
        var r, n, a, h = new s(o.COORDS_BY_SCREEN, [t, i], this.board), l = this.Radius(), c = this.point1.coords.distance(o.COORDS_BY_USER, h), d = l > c;
        return d && (r = e.rad(this.radiuspoint, this.center, h.usrCoords.slice(1)), n = 0, a = e.rad(this.radiuspoint, this.center, this.anglepoint), ("minor" === this.visProp.selection && a > Math.PI || "major" === this.visProp.selection && Math.PI > a) && (n = a, a = 2 * Math.PI), (n > r || r > a) && (d = !1)), d
      }, c.hasPoint = function(t, e) {return this.visProp.highlightonsector || this.visProp.hasinnerpoints ? this.hasPointSector(t, e) : this.hasPointCurve(t, e)}, c.getTextAnchor = function() {return this.point1.coords}, c.getLabelAnchor = function() {
        var t, i, r, n, a = e.rad(this.point2, this.point1, this.point3), h = 13 / this.board.unitX, l = 13 / this.board.unitY, c = this.point2.coords.usrCoords, d = this.point1.coords.usrCoords, u = c[1] - d[1], p = c[2] - d[2];
        return("minor" === this.visProp.selection && a > Math.PI || "major" === this.visProp.selection && Math.PI > a) && (a = -(2 * Math.PI - a)), t = new s(o.COORDS_BY_USER, [d[1] + Math.cos(.5 * a) * u - Math.sin(.5 * a) * p, d[2] + Math.sin(.5 * a) * u + Math.cos(.5 * a) * p], this.board), i = t.usrCoords[1] - d[1], r = t.usrCoords[2] - d[2], n = Math.sqrt(i * i + r * r), i = i * (n + h) / n, r = r * (n + l) / n, new s(o.COORDS_BY_USER, [d[1] + i, d[2] + r], this.board)
      }, c.setRadius = function(t) {c.Radius = function() {return n.evaluate(t)}}, c.getRadius = function() {return this.Radius()}, "3points" === m && (c.setPositionDirectly = function(t, e, i) {
        var o, n, a = new s(t, e, this.board), h = new s(t, i, this.board);
        return c.point1.draggable() && c.point2.draggable() && c.point3.draggable() ? (o = r.subtract(a.usrCoords, h.usrCoords), n = this.board.create("transform", o.slice(1), {type: "translate"}), n.applyOnce([c.point1, c.point2, c.point3]), this) : this
      }), c.prepareUpdate().update(), c
    }, t.registerElement("sector", t.createSector), t.createCircumcircleSector = function(t, e, i) {
      var r, s, o, a;
      if (a = n.providePoints(t, e, i, "point"), a === !1)throw Error("JSXGraph: Can't create circumcircle sector with parent types '" + typeof e[0] + "' and '" + typeof e[1] + "' and '" + typeof e[2] + "'.");
      return s = t.create("circumcenter", a.slice(0, 3), o), s.dump = !1, o = n.copyAttributes(i, t.options, "circumcirclesector"), r = t.create("sector", [s, a[0], a[2], a[1]], o), r.elType = "circumcirclesector", r.parents = [a[0].id, a[1].id, a[2].id], r.center = s, r.subs = {center: s}, r
    }, t.registerElement("circumcirclesector", t.createCircumcircleSector), t.createMinorSector = function(e, i, r) {return r.selection = "minor", t.createSector(e, i, r)}, t.registerElement("minorsector", t.createMinorSector), t.createMajorSector = function(e, i, r) {return r.selection = "major", t.createSector(e, i, r)}, t.registerElement("majorsector", t.createMajorSector), t.createAngle = function(r, a, h) {
      var l, c, d, u, p, f, m = "invalid";
      if (a[0].elementClass === o.OBJECT_CLASS_LINE && a[1].elementClass === o.OBJECT_CLASS_LINE && (n.isArray(a[2]) || n.isNumber(a[2])) && (n.isArray(a[3]) || n.isNumber(a[3])))m = "2lines"; else {
        if (f = n.providePoints(r, a, h, "point"), f === !1)throw Error("JSXGraph: Can't create angle with parent types '" + typeof a[0] + "' and '" + typeof a[1] + "' and '" + typeof a[2] + "'.");
        m = "3points"
      }
      if (d = n.copyAttributes(h, r.options, "angle"), n.exists(d.name) && "" !== d.name || (d.name = r.generateName({type: o.OBJECT_TYPE_ANGLE})), c = n.exists(d.radius) ? d.radius : 0, "2lines" === m ? (a.push(c), l = r.create("sector", a, d), l.updateDataArraySector = l.updateDataArray, l.setAngle = function() {}, l.free = function() {}) : (l = r.create("sector", [f[1], f[0], f[2]], d), l.arc.visProp.priv = !0, l.point = l.point2 = l.radiuspoint = f[0], l.pointsquare = l.point3 = l.anglepoint = f[2], l.Radius = function() {return n.evaluate(c)}, l.updateDataArraySector = function() {
        var t, i, r = this.point2, s = this.point1, o = this.point3, n = this.Radius(), a = s.Dist(r), h = 1;
        i = e.rad(r, s, o), ("minor" === this.visProp.selection && i > Math.PI || "major" === this.visProp.selection && Math.PI > i) && (h = -1), r = r.coords.usrCoords, s = s.coords.usrCoords, o = o.coords.usrCoords, r = [1, s[1] + (r[1] - s[1]) * n / a, s[2] + (r[2] - s[2]) * n / a], o = [1, s[1] + (o[1] - s[1]) * n / a, s[2] + (o[2] - s[2]) * n / a], t = e.bezierArc(r, s, o, !0, h), this.dataX = t[0], this.dataY = t[1], this.bezierDegree = 3
      }, l.setAngle = function(t) {
        var e, i = this.anglepoint, r = this.radiuspoint;
        return i.draggable() && (e = this.board.create("transform", [t, this.center], {type: "rotate"}), i.addTransform(r, e), i.isDraggable = !1, i.parents = [r]), this
      }, l.free = function() {
        var t = this.anglepoint;
        return t.transformations.length > 0 && (t.transformations.pop(), t.isDraggable = !0, t.parents = []), this
      }, l.parents = [f[0].id, f[1].id, f[2].id]), t.exists(l.visProp.text) && l.label.setText(l.visProp.text), l.elType = "angle", l.type = o.OBJECT_TYPE_ANGLE, l.subs = {}, l.updateDataArraySquare = function() {
        var t, r, s, o, n, a, h, l, c = this.Radius();
        "2lines" === m && this.updateDataArraySector(), t = this.point2, r = this.point1, s = this.point3, t = t.coords.usrCoords, r = r.coords.usrCoords, s = s.coords.usrCoords, o = e.distance(t, r, 3), n = e.distance(s, r, 3), t = [1, r[1] + (t[1] - r[1]) * c / o, r[2] + (t[2] - r[2]) * c / o], s = [1, r[1] + (s[1] - r[1]) * c / n, r[2] + (s[2] - r[2]) * c / n], a = i.crossProduct(s, r), h = [-t[1] * a[1] - t[2] * a[2], t[0] * a[1], t[0] * a[2]], a = i.crossProduct(t, r), l = [-s[1] * a[1] - s[2] * a[2], s[0] * a[1], s[0] * a[2]], a = i.crossProduct(h, l), a[1] /= a[0], a[2] /= a[0], this.dataX = [r[1], t[1], a[1], s[1], r[1]], this.dataY = [r[2], t[2], a[2], s[2], r[2]], this.bezierDegree = 1
      }, l.updateDataArrayNone = function() {this.dataX = [0 / 0], this.dataY = [0 / 0], this.bezierDegree = 1}, l.updateDataArray = function() {
        var t = this.visProp.type, r = e.trueAngle(this.point2, this.point1, this.point3);
        ("minor" === this.visProp.selection && r > 180 || "major" === this.visProp.selection && 180 > r) && (r = 360 - r), Math.abs(r - 90) < this.visProp.orthosensitivity + i.eps && (t = this.visProp.orthotype), "none" === t ? this.updateDataArrayNone() : "square" === t ? this.updateDataArraySquare() : "sector" === t ? this.updateDataArraySector() : "sectordot" === t && (this.updateDataArraySector(), this.dot.visProp.visible || this.dot.setAttribute({visible: !0})), (!this.visProp.visible || "sectordot" !== t && this.dot.visProp.visible) && this.dot.setAttribute({visible: !1})
      }, u = n.copyAttributes(h, r.options, "angle", "dot"), l.dot = r.create("point", [function() {
        var t, r, s, o, a, h, c, d;
        return n.exists(l.dot) && !l.dot.visProp.visible ? [0, 0] : (t = l.point2.coords.usrCoords, r = l.point1.coords.usrCoords, s = l.Radius(), o = e.distance(t, r, 3), a = e.rad(l.point2, l.point1, l.point3), ("minor" === l.visProp.selection && a > Math.PI || "major" === l.visProp.selection && Math.PI > a) && (a = -(2 * Math.PI - a)), a *= .5, h = Math.cos(a), c = Math.sin(a), t = [1, r[1] + (t[1] - r[1]) * s / o, r[2] + (t[2] - r[2]) * s / o], d = [
          [1, 0, 0],
          [r[1] - .5 * r[1] * h + .5 * r[2] * c, .5 * h, .5 * -c],
          [r[2] - .5 * r[1] * c - .5 * r[2] * h, .5 * c, .5 * h]
        ], i.matVecMult(d, t))
      }], u), l.dot.dump = !1, l.subs.dot = l.dot, "2lines" === m)for (p = 0; 2 > p; p++)r.select(a[p]).addChild(l.dot); else for (p = 0; 3 > p; p++)r.select(f[p]).addChild(l.dot);
      return l.getLabelAnchor = function() {
        var t, r, a, h, c, d, u, p, f, m = 12, b = 12;
        return n.exists(this.label.visProp.fontSize) && (m = this.label.visProp.fontSize, b = this.label.visProp.fontSize), m /= this.board.unitX, b /= this.board.unitY, r = l.point2.coords.usrCoords, a = l.point1.coords.usrCoords, h = l.Radius(), c = e.distance(r, a, 3), d = e.rad(l.point2, l.point1, l.point3), ("minor" === l.visProp.selection && d > Math.PI || "major" === l.visProp.selection && Math.PI > d) && (d = -(2 * Math.PI - d)), d *= .5, u = Math.cos(d), p = Math.sin(d), r = [1, a[1] + (r[1] - a[1]) * h / c, a[2] + (r[2] - a[2]) * h / c], f = [
          [1, 0, 0],
          [a[1] - .5 * a[1] * u + .5 * a[2] * p, .5 * u, .5 * -p],
          [a[2] - .5 * a[1] * p - .5 * a[2] * u, .5 * p, .5 * u]
        ], t = i.matVecMult(f, r), t[1] /= t[0], t[2] /= t[0], t[0] /= t[0], c = e.distance(t, a, 3), t = [t[0], a[1] + (t[1] - a[1]) * (h + m) / c, a[2] + (t[2] - a[2]) * (h + m) / c], new s(o.COORDS_BY_USER, t, this.board)
      }, l.Value = function() {return e.rad(this.point2, this.point1, this.point3)}, l.methodMap = n.deepCopy(l.methodMap, {Value: "Value", setAngle: "setAngle", free: "free"}), l
    }, t.registerElement("angle", t.createAngle), t.createNonreflexAngle = function(e, i, r) {return r.selection = "minor", t.createAngle(e, i, r)}, t.registerElement("nonreflexangle", t.createNonreflexAngle), t.createReflexAngle = function(e, i, r) {return r.selection = "major", t.createAngle(e, i, r)}, t.registerElement("reflexangle", t.createReflexAngle), {createSector: t.createSector, createCircumcircleSector: t.createCircumcircleSector, createMinorSector: t.createMinorSector, createMajorSector: t.createMajorSector, createAngle: t.createAngle, createReflexAngle: t.createReflexAngle, createNonreflexAngle: t.createNonreflexAngle}
  }), define("element/locus", ["jxg", "math/symbolic", "utils/type", "base/constants", "base/curve"], function(t, e, i) {
    return t.createLocus = function(t, r, s) {
      var o, n;
      if (!i.isArray(r) || 1 !== r.length || !i.isPoint(r[0]))throw Error("JSXGraph: Can't create locus with parent of type other than point.\nPossible parent types: [point]");
      return n = r[0], o = t.create("curve", [
        [null],
        [null]
      ], s), o.dontCallServer = !1, o.elType = "locus", o.parents = [n.id], o.updateDataArray = function() {
        var i, r, s;
        o.board.mode > 0 || (i = e.generatePolynomials(t, n, !0).join("|"), i !== o.spe && (o.spe = i, r = function(t, e, i, r) {
          o.dataX = t, o.dataY = e, o.eq = i, o.ctime = r, o.generatePolynomial = function(t) {
            return function(e) {
              var i, r = "(" + e.symbolic.x + ")", s = "(" + e.symbolic.y + ")", o = [];
              for (i = 0; t.length > i; i++)o[i] = t[i].replace(/\*\*/g, "^").replace(/x/g, r).replace(/y/g, s);
              return o
            }
          }(i)
        }, s = e.geometricLocusByGroebnerBase(t, n, r), r(s.datax, s.datay, s.polynomial, s.exectime)))
      }, o
    }, t.registerElement("locus", t.createLocus), {createLocus: t.createLocus}
  }), define("base/image", ["jxg", "base/constants", "base/coords", "base/element", "math/math", "math/statistics", "utils/type", "base/coordselement"], function(t, e, i, r, s, o, n, a) {
    return t.Image = function(i, r, s, o, a) {this.constructor(i, s, e.OBJECT_TYPE_IMAGE, e.OBJECT_CLASS_OTHER), this.element = this.board.select(s.anchor), this.coordsConstructor(r), this.W = n.createFunction(a[0], this.board, ""), this.H = n.createFunction(a[1], this.board, ""), this.usrSize = [this.W(), this.H()], this.size = [Math.abs(this.usrSize[0] * i.unitX), Math.abs(this.usrSize[1] * i.unitY)], this.url = o, this.elType = "image", this.span = [this.coords.usrCoords.slice(0), [this.coords.usrCoords[0], this.W(), 0], [this.coords.usrCoords[0], 0, this.H()]], this.id = this.board.setId(this, "Im"), this.board.renderer.drawImage(this), this.board.finalizeAdding(this), this.methodMap = t.deepCopy(this.methodMap, {addTransformation: "addTransform", trans: "addTransform"})}, t.Image.prototype = new r, n.copyPrototypeMethods(t.Image, a, "coordsConstructor"), t.extend(t.Image.prototype, {hasPoint: function(t, r) {
      var o, n, a, h, l, c, d, u = this.transformations.length;
      return 0 === u ? (o = t - this.coords.scrCoords[1], n = this.coords.scrCoords[2] - r, a = this.board.options.precision.hasPoint, o >= -a && a >= o - this.size[0] && n >= -a && a >= n - this.size[1]) : (h = new i(e.COORDS_BY_SCREEN, [t, r], this.board), h = h.usrCoords, l = [h[0] - this.span[0][0], h[1] - this.span[0][1], h[2] - this.span[0][2]], d = s.innerProduct, c = d(l, this.span[1]), c >= 0 && d(this.span[1], this.span[1]) >= c && (c = d(l, this.span[2]), c >= 0 && d(this.span[2], this.span[2]) >= c) ? !0 : !1)
    }, update: function(t) {return this.needsUpdate ? (this.updateCoords(t), this.usrSize = [this.W(), this.H()], this.size = [Math.abs(this.usrSize[0] * this.board.unitX), Math.abs(this.usrSize[1] * this.board.unitY)], this.updateSpan(), this) : this}, updateRenderer: function() {return this.updateRendererGeneric("updateImage")}, updateSize: function() {this.coords.setCoordinates(e.COORDS_BY_USER, [this.W(), this.H()])}, updateSpan: function() {
      var t, e, i = this.transformations.length, r = [];
      if (0 === i)this.span = [
        [this.Z(), this.X(), this.Y()],
        [this.Z(), this.W(), 0],
        [this.Z(), 0, this.H()]
      ]; else {
        for (r[0] = [this.Z(), this.X(), this.Y()], r[1] = [this.Z(), this.X() + this.W(), this.Y()], r[2] = [this.Z(), this.X(), this.Y() + this.H()], t = 0; i > t; t++)for (e = 0; 3 > e; e++)r[e] = s.matVecMult(this.transformations[t].matrix, r[e]);
        for (e = 0; 3 > e; e++)r[e][1] /= r[e][0], r[e][2] /= r[e][0], r[e][0] /= r[e][0];
        for (e = 1; 3 > e; e++)r[e][0] -= r[0][0], r[e][1] -= r[0][1], r[e][2] -= r[0][2];
        this.span = r
      }
      return this
    }, addTransform: function(t) {
      var e;
      if (n.isArray(t))for (e = 0; t.length > e; e++)this.transformations.push(t[e]); else this.transformations.push(t)
    }}), t.createImage = function(e, i, r) {
      var s, o, h = i[0], l = i[1], c = i[2];
      if (s = n.copyAttributes(r, e.options, "image"), o = a.create(t.Image, e, l, s, h, c), !o)throw Error("JSXGraph: Can't create image with parent types '" + typeof i[0] + "' and '" + typeof i[1] + "'." + "\nPossible parent types: [x,y], [z,x,y], [element,transformation]");
      return 0 !== n.evaluate(s.rotate) && o.addRotation(n.evaluate(s.rotate)), o
    }, t.registerElement("image", t.createImage), {Image: t.Image, createImage: t.createImage}
  }), define("element/slider", ["jxg", "math/math", "base/constants", "utils/type", "base/point", "base/group", "base/element", "base/line", "base/ticks", "base/text"], function(t, e, i, r, s, o, n) {
    return t.createSlider = function(t, o, a) {
      var h, l, c, d, u, p, f, m, b, g, v, y, C, P, _, E, S, x, O, T, w, M;
      T = r.copyAttributes(a, t.options, "slider"), x = T.withticks, S = T.withlabel, O = T.snapwidth, w = T.precision, T = r.copyAttributes(a, t.options, "slider", "point1"), f = t.create("point", o[0], T), T = r.copyAttributes(a, t.options, "slider", "point2"), m = t.create("point", o[1], T), t.create("group", [f, m]), T = r.copyAttributes(a, t.options, "slider", "baseline"), b = t.create("segment", [f, m], T), b.updateStdform(), h = f.coords.usrCoords.slice(1), l = m.coords.usrCoords.slice(1), c = o[2][0], d = o[2][1], u = o[2][2], p = u - c, x && (T = r.copyAttributes(a, t.options, "slider", "ticks"), g = 2, v = t.create("ticks", [b, m.Dist(f) / g, function(t) {
        var r = f.Dist(m), s = f.coords.distance(i.COORDS_BY_USER, t);
        return e.eps > r ? 0 : s / r * p + c
      }], T)), y = h[0] + (l[0] - h[0]) * (d - c) / (u - c), C = h[1] + (l[1] - h[1]) * (d - c) / (u - c), T = r.copyAttributes(a, t.options, "slider"), T.withLabel = !1, P = t.create("glider", [y, C, b], T), P.setAttribute({snapwidth: O}), T = r.copyAttributes(a, t.options, "slider", "highline"), _ = t.create("segment", [f, P], T), P.Value = function() {
        var t = this._smax - this._smin;
        return-1 === P.visProp.snapwidth ? this.position * t + this._smin : Math.round((this.position * t + this._smin) / this.visProp.snapwidth) * this.visProp.snapwidth
      }, P.methodMap = r.deepCopy(P.methodMap, {Value: "Value", smax: "_smax", smin: "_smin"}), P._smax = u, P._smin = c, S && (T = r.copyAttributes(a, t.options, "slider", "label"), E = t.create("text", [function() {return.05 * (m.X() - f.X()) + m.X()}, function() {return.05 * (m.Y() - f.Y()) + m.Y()}, function() {
        var t;
        return t = P.name && "" !== P.name ? P.name + " = " : "", t + P.Value().toFixed(w)
      }], T), P.label = E, P.visProp.withlabel = !0, P.hasLabel = !0), P.point1 = f, P.point2 = m, P.baseline = b, P.highline = _, x && (P.ticks = v), P.remove = function() {S && t.removeObject(E), t.removeObject(_), t.removeObject(b), t.removeObject(m), t.removeObject(f), s.Point.prototype.remove.call(P)}, f.dump = !1, m.dump = !1, b.dump = !1, _.dump = !1, P.elType = "slider", P.parents = o, P.subs = {point1: f, point2: m, baseLine: b, highLine: _}, x && (v.dump = !1, P.subs.ticks = v);
      for (M in P.subs)P.subs[M].status = {visible: P.subs[M].visProp.visible};
      return P.hideElement = function() {
        var t;
        n.prototype.hideElement.call(this);
        for (t in this.subs)this.subs[t].status.visible = this.subs[t].visProp.visible, this.subs[t].hideElement()
      }, P.showElement = function() {
        var t;
        n.prototype.showElement.call(this);
        for (t in this.subs)this.subs[t].status.visible && this.subs[t].showElement()
      }, P
    }, t.registerElement("slider", t.createSlider), {createSlider: t.createSlider}
  }), define("element/measure", ["jxg", "utils/type", "base/element", "base/point", "base/line", "base/ticks"], function(t, e, i) {
    return t.createTapemeasure = function(r, s, o) {
      var n, a, h, l, c, d, u, p, f, m, b;
      return n = s[0], a = s[1], h = e.copyAttributes(o, r.options, "tapemeasure"), l = h.withticks, c = h.withlabel, d = h.precision, h = e.copyAttributes(o, r.options, "tapemeasure", "point1"), p = r.create("point", n, h), h = e.copyAttributes(o, r.options, "tapemeasure", "point2"), f = r.create("point", a, h), p.setAttribute({ignoredSnapToPoints: [f]}), f.setAttribute({ignoredSnapToPoints: [p]}), h = e.copyAttributes(o, r.options, "tapemeasure"), c && (h.withlabel = !0), u = r.create("segment", [p, f], h), c && (m = o.name && "" !== o.name ? o.name + " = " : "", u.label.setText(function() {return m + p.Dist(f).toFixed(d)})), l && (h = e.copyAttributes(o, r.options, "tapemeasure", "ticks"), b = r.create("ticks", [u, .1], h)), u.remove = function() {l && u.removeTicks(b), r.removeObject(f), r.removeObject(p), i.prototype.remove.call(this)}, u.Value = function() {return p.Dist(f)}, p.dump = !1, f.dump = !1, u.elType = "tapemeasure", u.parents = s, u.subs = {point1: p, point2: f}, l && (b.dump = !1), u.methodMap = t.deepCopy(u.methodMap, {Value: "Value"}), u
    }, t.registerElement("tapemeasure", t.createTapemeasure), {createTapemeasure: t.createTapemeasure}
  }), define("parser/datasource", ["jxg", "utils/type"], function(t, e) {
    return t.DataSource = function() {return this.data = [], this.columnHeaders = [], this.rowHeaders = [], this}, t.extend(t.DataSource.prototype, {loadFromArray: function(t, i, r) {
      var s, o, n;
      if (e.isArray(i) && (this.columnHeaders = i, i = !1), e.isArray(r) && (this.rowHeaders = r, r = !1), this.data = [], i && (this.columnHeaders = []), r && (this.rowHeaders = []), e.exists(t)) {
        for (this.data = [], s = 0; t.length > s; s++)for (this.data[s] = [], o = 0; t[s].length > o; o++)n = t[s][o], this.data[s][o] = "" + parseFloat(n) === n ? parseFloat(n) : "-" !== n ? n : 0 / 0;
        if (i && (this.columnHeaders = this.data[0].slice(1), this.data = this.data.slice(1)), r)for (this.rowHeaders = [], s = 0; this.data.length > s; s++)this.rowHeaders.push(this.data[s][0]), this.data[s] = this.data[s].slice(1)
      }
      return this
    }, loadFromTable: function(t, i, r) {
      var s, o, n, a, h;
      if (e.isArray(i) && (this.columnHeaders = i, i = !1), e.isArray(r) && (this.rowHeaders = r, r = !1), this.data = [], i && (this.columnHeaders = []), r && (this.rowHeaders = []), t = document.getElementById(t), e.exists(t)) {
        for (s = t.getElementsByTagName("tr"), this.data = [], o = 0; s.length > o; o++)for (a = s[o].getElementsByTagName("td"), this.data[o] = [], n = 0; a.length > n; n++)h = a[n].innerHTML, this.data[o][n] = "" + parseFloat(h) === h ? parseFloat(h) : "-" !== h ? h : 0 / 0;
        if (i && (this.columnHeaders = this.data[0].slice(1), this.data = this.data.slice(1)), r)for (this.rowHeaders = [], o = 0; this.data.length > o; o++)this.rowHeaders.push(this.data[o][0]), this.data[o] = this.data[o].slice(1)
      }
      return this
    }, addColumn: function() {throw Error("not implemented")}, addRow: function() {throw Error("not implemented")}, getColumn: function(t) {
      var e, i = [];
      if ("string" == typeof t)for (e = 0; this.columnHeaders.length > e; e++)if (t === this.columnHeaders[e]) {
        t = e;
        break
      }
      for (e = 0; this.data.length > e; e++)this.data[e].length > t && (i[e] = parseFloat(this.data[e][t]));
      return i
    }, getRow: function(t) {
      var e, i;
      if ("string" == typeof t)for (i = 0; this.rowHeaders.length > i; i++)if (t === this.rowHeaders[i]) {
        t = i;
        break
      }
      for (e = [], i = 0; this.data[t].length > i; i++)e[i] = this.data[t][i];
      return e
    }}), t.DataSource
  }), define("base/chart", ["jxg", "math/numerics", "math/statistics", "base/constants", "base/coords", "base/element", "parser/datasource", "utils/color", "utils/type", "utils/env", "base/curve", "base/point", "base/text", "base/polygon", "element/sector", "base/transformation", "base/line", "base/circle"], function(t, e, i, r, s, o, n, a, h, l) {
    return t.Chart = function(t, e, i) {
      this.constructor(t, i);
      var r, s, o, n, a, l;
      if (!h.isArray(e) || 0 === e.length)throw Error("JSXGraph: Can't create a chart without data");
      if (this.elements = [], h.isNumber(e[0]))for (s = e, r = [], o = 0; s.length > o; o++)r[o] = o + 1; else if (1 === e.length && h.isArray(e[0]))for (s = e[0], r = [], l = h.evaluate(s).length, o = 0; l > o; o++)r[o] = o + 1; else 2 === e.length && (l = Math.min(e[0].length, e[1].length), r = e[0].slice(0, l), s = e[1].slice(0, l));
      if (h.isArray(s) && 0 === s.length)throw Error("JSXGraph: Can't create charts without data.");
      for (a = i.chartstyle.replace(/ /g, "").split(","), o = 0; a.length > o; o++) {
        switch (a[o]) {
          case"bar":
            n = this.drawBar(t, r, s, i);
            break;
          case"line":
            n = this.drawLine(t, r, s, i);
            break;
          case"fit":
            n = this.drawFit(t, r, s, i);
            break;
          case"spline":
            n = this.drawSpline(t, r, s, i);
            break;
          case"pie":
            n = this.drawPie(t, s, i);
            break;
          case"point":
            n = this.drawPoints(t, r, s, i);
            break;
          case"radar":
            n = this.drawRadar(t, e, i)
        }
        this.elements.push(n)
      }
      return this.id = this.board.setId(this, "Chart"), this.elements
    }, t.Chart.prototype = new o, t.extend(t.Chart.prototype, {drawLine: function(t, e, i, r) {return r.fillcolor = "none", r.highlightfillcolor = "none", t.create("curve", [e, i], r)}, drawSpline: function(t, e, i, r) {return r.fillColor = "none", r.highlightfillcolor = "none", t.create("spline", [e, i], r)}, drawFit: function(t, i, r, s) {
      var o = s.degree;
      return o = Math.max(parseInt(o, 10), 1) || 1, s.fillcolor = "none", s.highlightfillcolor = "none", t.create("functiongraph", [e.regressionPolynomial(o, i, r)], s)
    }, drawBar: function(t, e, i, r) {
      var s, o, n, a, l, c, d, u, p, f, m, b, g = [], v = [], y = function(t, i) {return function() {return e[t]() - i * c}}, C = {fixed: !0, withLabel: !1, visible: !1, name: ""};
      if (h.exists(r.fillopacity) || (r.fillopacity = .6), r && r.width)c = r.width; else {
        if (1 >= e.length)c = 1; else for (c = e[1] - e[0], s = 1; e.length - 1 > s; s++)c = c > e[s + 1] - e[s] ? e[s + 1] - e[s] : c;
        c *= .8
      }
      for (n = r.fillcolor, b = h.copyAttributes(r, t.options, "chart", "label"), a = parseFloat(b.fontsize), s = 0; e.length > s; s++)h.isFunction(e[s]) ? (d = y(s, -.5), u = y(s, 0), p = y(s, .5)) : (d = e[s] - .5 * c, u = e[s], p = e[s] + .5 * c), f = i[s], "horizontal" === r.dir ? (v[0] = t.create("point", [0, d], C), v[1] = t.create("point", [f, d], C), v[2] = t.create("point", [f, p], C), v[3] = t.create("point", [0, p], C), h.exists(r.labels) && h.exists(r.labels[s]) && (o = ("" + r.labels[s]).length, o = 2 * o * a / t.unitX, f >= 0 ? f += .5 * a / t.unitX : f -= a * o / t.unitX, u -= .2 * a / t.unitY, l = t.create("text", [f, u, "" + r.labels[s]], b))) : (v[0] = t.create("point", [d, 0], C), v[1] = t.create("point", [d, f], C), v[2] = t.create("point", [p, f], C), v[3] = t.create("point", [p, 0], C), h.exists(r.labels) && h.exists(r.labels[s]) && (o = ("" + r.labels[s]).length, o = .6 * o * a / t.unitX, f >= 0 ? f += .5 * a / t.unitY : f -= a / t.unitY, l = t.create("text", [u - .5 * o, f, "" + r.labels[s]], b))), r.withlines = !1, h.isArray(r.colors) && (m = r.colors, r.fillcolor = m[s % m.length]), g[s] = t.create("polygon", v, r), h.exists(r.labels) && h.exists(r.labels[s]) && (g[s].text = l);
      return g
    }, drawPoints: function(t, e, i, r) {
      var s, o = [], n = r.infoboxarray;
      for (r.fixed = !0, r.name = "", s = 0; e.length > s; s++)r.infoboxtext = n ? n[s % n.length] : !1, o[s] = t.create("point", [e[s], i[s]], r);
      return o
    }, drawPie: function(t, e, o) {
      var n, a, l = [], c = [], d = (i.sum(e), o.colors), u = o.highlightcolors, p = o.labels, f = o.radius || 4, m = f, b = o.center || [0, 0], g = b[0], v = b[1], y = function(t, i, r) {
        return function() {
          var s, o, n, a = 0;
          for (o = 0; t >= o; o++)a += parseFloat(h.evaluate(e[o]));
          for (s = a, o = t + 1; e.length > o; o++)s += parseFloat(h.evaluate(e[o]));
          return n = 0 !== s ? 2 * Math.PI * a / s : 0, m() * Math[i](n) + r
        }
      }, C = function(t, e) {
        var i = -this.point1.coords.usrCoords[1] + this.point2.coords.usrCoords[1], o = -this.point1.coords.usrCoords[2] + this.point2.coords.usrCoords[2];
        h.exists(this.label) && (this.label.rendNode.style.fontSize = e * this.label.visProp.fontsize + "px", this.label.prepareUpdate().update().updateRenderer()), this.point2.coords = new s(r.COORDS_BY_USER, [this.point1.coords.usrCoords[1] + i * t, this.point1.coords.usrCoords[2] + o * t], this.board), this.prepareUpdate().update().updateRenderer()
      }, P = function() {this.highlighted || (this.highlighted = !0, this.board.highlightedObjects[this.id] = this, this.board.renderer.highlight(this), C.call(this, 1.1, 2))}, _ = function() {this.highlighted && (this.highlighted = !1, this.board.renderer.noHighlight(this), C.call(this, .9090909, 1))}, E = {fixed: !0, withLabel: !1, visible: !1, name: ""};
      if (!h.isArray(p))for (p = [], n = 0; e.length > n; n++)p[n] = "";
      for (h.isFunction(f) || (m = function() {return f}), o.highlightonsector = o.highlightonsector || !1, o.straightfirst = !1, o.straightlast = !1, a = t.create("point", [g, v], E), l[0] = t.create("point", [function() {return m() + g}, function() {return v}], E), n = 0; e.length > n; n++)l[n + 1] = t.create("point", [y(n, "cos", g), y(n, "sin", v)], E), o.name = p[n], o.withlabel = "" !== o.name, o.fillcolor = d && d[n % d.length], o.labelcolor = d && d[n % d.length], o.highlightfillcolor = u && u[n % u.length], c[n] = t.create("sector", [a, l[n], l[n + 1]], o), o.highlightonsector && (c[n].hasPoint = c[n].hasPointSector), o.highlightbysize && (c[n].highlight = P, c[n].noHighlight = _);
      return{sectors: c, points: l, midpoint: a}
    }, drawRadar: function(e, i, o) {
      var n, a, l, c, d, u, p, f, m, b, g, v, y, C, P, _, E, S, x, O, T, w, M, A, N, k, R, L, B, Y, j, D, I, X, U, G, J, F, z, H, $, V, q, W, Z, Q = i.length, K = function() {
        var t, e, i, o, n = this.visProp.label.offset.slice(0);
        return t = this.point1.X(), e = this.point2.X(), i = this.point1.Y(), o = this.point2.Y(), t > e && (n[0] = -n[0]), i > o && (n[1] = -n[1]), this.setLabelRelativeCoords(n), new s(r.COORDS_BY_USER, [this.point2.X(), this.point2.Y()], this.board)
      }, te = function(t, i) {
        var r, s, o;
        return r = e.create("transform", [-(P[i] - y[i]), 0], {type: "translate"}), s = e.create("transform", [O / (_[i] + C[i] - (P[i] - y[i])), 1], {type: "scale"}), r.melt(s), o = e.create("transform", [t], {type: "rotate"}), r.melt(o), r
      };
      if (0 >= Q)return t.debug("No data"), void 0;
      if (l = o.paramarray, !h.exists(l))return t.debug("Need paramArray attribute"), void 0;
      if (c = l.length, 1 >= c)return t.debug("Need more than 1 param"), void 0;
      for (n = 0; Q > n; n++)if (c !== i[n].length)return t.debug("Use data length equal to number of params (" + i[n].length + " != " + c + ")"), void 0;
      for (d = [], u = [], a = 0; c > a; a++)d[a] = i[0][a], u[a] = d[a];
      for (n = 1; Q > n; n++)for (a = 0; c > a; a++)i[n][a] > d[a] && (d[a] = i[n][a]), i[n][a] < u[a] && (u[a] = i[n][a]);
      for (p = [], f = [], n = 0; Q > n; n++)p[n] = "", f[n] = [];
      for (m = [], b = [], g = o.startshiftratio || 0, v = o.endshiftratio || 0, n = 0; c > n; n++)m[n] = (d[n] - u[n]) * g, b[n] = (d[n] - u[n]) * v;
      if (y = o.startshiftarray || m, C = o.endshiftarray || b, P = o.startarray || u, h.exists(o.start))for (n = 0; c > n; n++)P[n] = o.start;
      if (_ = o.endarray || d, h.exists(o.end))for (n = 0; c > n; n++)_[n] = o.end;
      if (y.length !== c)return t.debug("Start shifts length is not equal to number of parameters"), void 0;
      if (C.length !== c)return t.debug("End shifts length is not equal to number of parameters"), void 0;
      if (P.length !== c)return t.debug("Starts length is not equal to number of parameters"), void 0;
      if (_.length !== c)return t.debug("Ends length is not equal to number of parameters"), void 0;
      for (E = o.labelarray || p, S = o.colors, x = o.highlightcolors, O = o.radius || 10, W = o.strokewidth || 1, h.exists(o.highlightonsector) || (o.highlightonsector = !1), T = {name: o.name, id: o.id, strokewidth: W, polystrokewidth: o.polystrokewidth || W, strokecolor: o.strokecolor || "black", straightfirst: !1, straightlast: !1, fillcolor: o.fillColor || "#FFFF88", fillopacity: o.fillOpacity || .4, highlightfillcolor: o.highlightFillColor || "#FF7400", highlightstrokecolor: o.highlightStrokeColor || "black", gradient: o.gradient || "none"}, w = o.center || [0, 0], M = w[0], A = w[1], N = e.create("point", [M, A], {name: "", fixed: !0, withlabel: !1, visible: !1}), k = Math.PI / 2 - Math.PI / c, k = o.startangle || 0, R = k, L = [], B = [], n = 0; c > n; n++)for (R += 2 * Math.PI / c, j = O * Math.cos(R) + M, D = O * Math.sin(R) + A, L[n] = e.create("point", [j, D], {name: "", fixed: !0, withlabel: !1, visible: !1}), B[n] = e.create("line", [N, L[n]], {name: l[n], strokeColor: T.strokecolor, strokeWidth: T.strokewidth, strokeOpacity: 1, straightFirst: !1, straightLast: !1, withLabel: !0, highlightStrokeColor: T.highlightstrokecolor}), B[n].getLabelAnchor = K, Y = te(R, n), a = 0; i.length > a; a++)Z = i[a][n], f[a][n] = e.create("point", [Z, 0], {name: "", fixed: !0, withlabel: !1, visible: !1}), f[a][n].addTransform(f[a][n], Y);
      for (I = [], n = 0; Q > n; n++)for (T.labelcolor = S && S[n % S.length], T.strokecolor = S && S[n % S.length], T.fillcolor = S && S[n % S.length], I[n] = e.create("polygon", f[n], {withLines: !0, withLabel: !1, fillColor: T.fillcolor, fillOpacity: T.fillopacity, highlightFillColor: T.highlightfillcolor}), a = 0; c > a; a++)I[n].borders[a].setAttribute("strokecolor:" + S[n % S.length]), I[n].borders[a].setAttribute("strokewidth:" + T.polystrokewidth);
      switch (X = o.legendposition || "none") {
        case"right":
          G = o.legendleftoffset || 2, J = o.legendtopoffset || 1, this.legend = e.create("legend", [M + O + G, A + O - J], {labels: E, colors: S});
          break;
        case"none":
          break;
        default:
          t.debug("Unknown legend position")
      }
      if (U = [], o.showcircles) {
        for (F = [], n = 0; 6 > n; n++)F[n] = 20 * n;
        if (F[0] = "0", z = o.circlelabelarray || F, H = z.length, 2 > H)return t.debug("Too less circles"), void 0;
        for ($ = [], V = k + Math.PI / c, Y = te(V, 0), T.fillcolor = "none", T.highlightfillcolor = "none", T.strokecolor = o.strokecolor || "black", T.strokewidth = o.circlestrokewidth || .5, T.layer = 0, q = (_[0] - P[0]) / (H - 1), n = 0; H > n; n++)$[n] = e.create("point", [P[0] + n * q, 0], {name: z[n], size: 0, fixed: !0, withLabel: !0, visible: !0}), $[n].addTransform($[n], Y), U[n] = e.create("circle", [N, $[n]], T)
      }
      return this.rendNode = I[0].rendNode, {circles: U, lines: B, points: f, midpoint: N, polygons: I}
    }, updateRenderer: function() {return this}, update: function() {return this.needsUpdate && this.updateDataArray(), this}, updateDataArray: function() {}}), t.createChart = function(e, i, r) {
      var s, o, c, d, u, p, f, m, b, g, v, y, C, P, _, E, S = [], x = l.isBrowser ? e.document.getElementById(i[0]) : null;
      if (1 === i.length && "string" == typeof i[0]) {
        if (h.exists(x)) {
          if (b = h.copyAttributes(r, e.options, "chart"), x = (new n).loadFromTable(i[0], b.withheaders, b.withheaders), s = x.data, u = x.columnHeaders, o = x.rowHeaders, g = b.width, v = b.name, y = b.strokecolor, C = b.fillcolor, P = b.highlightstrokecolor, _ = b.highlightfillcolor, e.suspendUpdate(), E = s.length, m = [], b.rows && h.isArray(b.rows)) {
            for (c = 0; E > c; c++)for (d = 0; b.rows.length > d; d++)if (b.rows[d] === c || b.withheaders && b.rows[d] === o[c]) {
              m.push(s[c]);
              break
            }
          } else m = s;
          for (E = m.length, c = 0; E > c; c++) {
            if (f = [], b.chartstyle && -1 !== b.chartstyle.indexOf("bar")) {
              for (p = g ? g : .8, f.push(1 - p / 2 + (c + .5) * p / E), d = 1; m[c].length > d; d++)f.push(f[d - 1] + 1);
              b.width = p / E
            }
            v && v.length === E ? b.name = v[c] : b.withheaders && (b.name = u[c]), b.strokecolor = y && y.length === E ? y[c] : a.hsv2rgb(360 * ((c + 1) / E), .9, .6), b.fillcolor = C && C.length === E ? C[c] : a.hsv2rgb(360 * ((c + 1) / E), .9, 1), b.highlightstrokecolor = P && P.length === E ? P[c] : a.hsv2rgb(360 * ((c + 1) / E), .9, 1), b.highlightfillcolor = _ && _.length === E ? _[c] : a.hsv2rgb(360 * ((c + 1) / E), .9, .6), b.chartstyle && -1 !== b.chartstyle.indexOf("bar") ? S.push(new t.Chart(e, [f, m[c]], b)) : S.push(new t.Chart(e, [m[c]], b))
          }
          e.unsuspendUpdate()
        }
        return S
      }
      return b = h.copyAttributes(r, e.options, "chart"), new t.Chart(e, i, b)
    }, t.registerElement("chart", t.createChart), t.Legend = function(t, e, i) {
      var o;
      if (this.constructor(), o = h.copyAttributes(i, t.options, "legend"), this.board = t, this.coords = new s(r.COORDS_BY_USER, e, this.board), this.myAtts = {}, this.label_array = o.labelarray || o.labels, this.color_array = o.colorarray || o.colors, this.lines = [], this.myAtts.strokewidth = o.strokewidth || 5, this.myAtts.straightfirst = !1, this.myAtts.straightlast = !1, this.myAtts.withlabel = !0, this.myAtts.fixed = !0, this.style = o.legendstyle || o.style, "vertical" !== this.style)throw Error("JSXGraph: Unknown legend style: " + this.style);
      this.drawVerticalLegend(t, o)
    }, t.Legend.prototype = new o, t.Legend.prototype.drawVerticalLegend = function(t, e) {
      var i, o = e.linelength || 1, n = (e.rowheight || 20) / this.board.unitY, a = function() {return this.setLabelRelativeCoords(this.visProp.label.offset), new s(r.COORDS_BY_USER, [this.point2.X(), this.point2.Y()], this.board)};
      for (i = 0; this.label_array.length > i; i++)this.myAtts.strokecolor = this.color_array[i], this.myAtts.highlightstrokecolor = this.color_array[i], this.myAtts.name = this.label_array[i], this.myAtts.label = {offset: [10, 0], strokeColor: this.color_array[i], strokeWidth: this.myAtts.strokewidth}, this.lines[i] = t.create("line", [
        [this.coords.usrCoords[1], this.coords.usrCoords[2] - i * n],
        [this.coords.usrCoords[1] + o, this.coords.usrCoords[2] - i * n]
      ], this.myAtts), this.lines[i].getLabelAnchor = a
    }, t.createLegend = function(e, i, r) {
      var s = [0, 0];
      return h.exists(i) && 2 === i.length && (s = i), new t.Legend(e, s, r)
    }, t.registerElement("legend", t.createLegend), {Chart: t.Chart, Legend: t.Legend, createChart: t.createChart, createLegend: t.createLegend}
  }), define("base/turtle", ["jxg", "base/constants", "base/element", "utils/type", "base/curve", "base/point", "base/line", "base/transformation"], function(t, e, i, r) {
    return t.Turtle = function(t, i, s) {
      var o, n, a;
      return this.constructor(t, s, e.OBJECT_TYPE_TURTLE, e.OBJECT_CLASS_OTHER), this.turtleIsHidden = !1, this.board = t, this.visProp.curveType = "plot", this._attributes = r.copyAttributes(this.visProp, t.options, "turtle"), delete this._attributes.id, o = 0, n = 0, a = 90, 0 !== i.length && (3 === i.length ? (o = i[0], n = i[1], a = i[2]) : 2 === i.length ? r.isArray(i[0]) ? (o = i[0][0], n = i[0][1], a = i[1]) : (o = i[0], n = i[1]) : (o = i[0][0], n = i[0][1])), this.init(o, n, a), this.methodMap = r.deepCopy(this.methodMap, {forward: "forward", fd: "forward", back: "back", bk: "back", right: "right", rt: "right", left: "left", lt: "left", penUp: "penUp", pu: "penUp", penDown: "penDown", pd: "penDown", clearScreen: "clearScreen", cs: "clearScreen", clean: "clean", setPos: "setPos", home: "home", hideTurtle: "hideTurtle", ht: "hideTurtle", showTurtle: "showTurtle", st: "showTurtle", penSize: "setPenSize", penColor: "setPenColor", pushTurtle: "pushTurtle", push: "pushTurtle", popTurtle: "popTurtle", pop: "popTurtle", lookTo: "lookTo", pos: "pos", moveTo: "moveTo", X: "X", Y: "Y"}), this
    }, t.Turtle.prototype = new i, t.extend(t.Turtle.prototype, {init: function(t, e, i) {
      var r = {fixed: !0, name: "", visible: !1, withLabel: !1};
      this.arrowLen = 20 / Math.sqrt(this.board.unitX * this.board.unitX + this.board.unitY * this.board.unitY), this.pos = [t, e], this.isPenDown = !0, this.dir = 90, this.stack = [], this.objects = [], this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this._attributes), this.objects.push(this.curve), this.turtle = this.board.create("point", this.pos, r), this.objects.push(this.turtle), this.turtle2 = this.board.create("point", [this.pos[0], this.pos[1] + this.arrowLen], r), this.objects.push(this.turtle2), this.visProp.arrow.lastArrow = !0, this.visProp.arrow.straightFirst = !1, this.visProp.arrow.straightLast = !1, this.arrow = this.board.create("line", [this.turtle, this.turtle2], this.visProp.arrow), this.objects.push(this.arrow), this.right(90 - i), this.board.update()
    }, forward: function(t) {
      if (0 === t)return this;
      var e, i = t * Math.cos(this.dir * Math.PI / 180), r = t * Math.sin(this.dir * Math.PI / 180);
      return this.turtleIsHidden || (e = this.board.create("transform", [i, r], {type: "translate"}), e.applyOnce(this.turtle), e.applyOnce(this.turtle2)), this.isPenDown && this.curve.dataX.length >= 8192 && (this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this._attributes), this.objects.push(this.curve)), this.pos[0] += i, this.pos[1] += r, this.isPenDown && (this.curve.dataX.push(this.pos[0]), this.curve.dataY.push(this.pos[1])), this.board.update(), this
    }, back: function(t) {return this.forward(-t)}, right: function(t) {
      if (this.dir -= t, this.dir %= 360, !this.turtleIsHidden) {
        var e = this.board.create("transform", [-t * Math.PI / 180, this.turtle], {type: "rotate"});
        e.applyOnce(this.turtle2)
      }
      return this.board.update(), this
    }, left: function(t) {return this.right(-t)}, penUp: function() {return this.isPenDown = !1, this}, penDown: function() {
      return this.isPenDown = !0, this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this._attributes), this.objects.push(this.curve), this
    }, clean: function() {
      var t, i;
      for (t = 0; this.objects.length > t; t++)i = this.objects[t], i.type === e.OBJECT_TYPE_CURVE && (this.board.removeObject(i), this.objects.splice(t, 1));
      return this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this._attributes), this.objects.push(this.curve), this.board.update(), this
    }, clearScreen: function() {
      var t, e, i = this.objects.length;
      for (t = 0; i > t; t++)e = this.objects[t], this.board.removeObject(e);
      return this.init(0, 0, 90), this
    }, setPos: function(t, i) {
      var s;
      return this.pos = r.isArray(t) ? t : [t, i], this.turtleIsHidden || (this.turtle.setPositionDirectly(e.COORDS_BY_USER, [t, i]), this.turtle2.setPositionDirectly(e.COORDS_BY_USER, [t, i + this.arrowLen]), s = this.board.create("transform", [-(this.dir - 90) * Math.PI / 180, this.turtle], {type: "rotate"}), s.applyOnce(this.turtle2)), this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this._attributes), this.objects.push(this.curve), this.board.update(), this
    }, setPenSize: function(t) {
      return this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this.copyAttr("strokeWidth", t)), this.objects.push(this.curve), this
    }, setPenColor: function(t) {
      return this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this.copyAttr("strokeColor", t)), this.objects.push(this.curve), this
    }, setHighlightPenColor: function(t) {
      return this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this.copyAttr("highlightStrokeColor", t)), this.objects.push(this.curve), this
    }, setAttribute: function(t) {
      var i, s, o, n = this.objects.length;
      for (i = 0; n > i; i++)s = this.objects[i], s.type === e.OBJECT_TYPE_CURVE && s.setAttribute(t);
      return o = this.visProp.id, this.visProp = r.deepCopy(this.curve.visProp), this.visProp.id = o, this._attributes = r.deepCopy(this.visProp), delete this._attributes.id, this
    }, copyAttr: function(t, e) {return this._attributes[t.toLowerCase()] = e, this._attributes}, showTurtle: function() {return this.turtleIsHidden = !1, this.arrow.setAttribute({visible: !0}), this.visProp.arrow.visible = !1, this.setPos(this.pos[0], this.pos[1]), this.board.update(), this}, hideTurtle: function() {return this.turtleIsHidden = !0, this.arrow.setAttribute({visible: !1}), this.visProp.arrow.visible = !1, this.board.update(), this}, home: function() {return this.pos = [0, 0], this.setPos(this.pos[0], this.pos[1]), this}, pushTurtle: function() {return this.stack.push([this.pos[0], this.pos[1], this.dir]), this}, popTurtle: function() {
      var t = this.stack.pop();
      return this.pos[0] = t[0], this.pos[1] = t[1], this.dir = t[2], this.setPos(this.pos[0], this.pos[1]), this
    }, lookTo: function(t) {
      var e, i, s, o, n;
      return r.isArray(t) ? (e = this.pos[0], i = this.pos[1], s = t[0], o = t[1], n = Math.atan2(o - i, s - e), this.right(this.dir - 180 * n / Math.PI)) : r.isNumber(t) && this.right(this.dir - t), this
    }, moveTo: function(t) {
      var e, i, s;
      return r.isArray(t) && (e = t[0] - this.pos[0], i = t[1] - this.pos[1], this.turtleIsHidden || (s = this.board.create("transform", [e, i], {type: "translate"}), s.applyOnce(this.turtle), s.applyOnce(this.turtle2)), this.isPenDown && this.curve.dataX.length >= 8192 && (this.curve = this.board.create("curve", [
        [this.pos[0]],
        [this.pos[1]]
      ], this._attributes), this.objects.push(this.curve)), this.pos[0] = t[0], this.pos[1] = t[1], this.isPenDown && (this.curve.dataX.push(this.pos[0]), this.curve.dataY.push(this.pos[1])), this.board.update()), this
    }, fd: function(t) {return this.forward(t)}, bk: function(t) {return this.back(t)}, lt: function(t) {return this.left(t)}, rt: function(t) {return this.right(t)}, pu: function() {return this.penUp()}, pd: function() {return this.penDown()}, ht: function() {return this.hideTurtle()}, st: function() {return this.showTurtle()}, cs: function() {return this.clearScreen()}, push: function() {return this.pushTurtle()}, pop: function() {return this.popTurtle()}, evalAt: function(t, i) {
      var r, s, o, n, a = this.objects.length;
      for (r = 0, s = 0; a > r; r++)if (o = this.objects[r], o.elementClass === e.OBJECT_CLASS_CURVE) {
        if (t >= s && s + o.numberPoints > t)return n = t - s, o[i](n);
        s += o.numberPoints
      }
      return this[i]()
    }, X: function(t) {return r.exists(t) ? this.evalAt(t, "X") : this.pos[0]}, Y: function(t) {return r.exists(t) ? this.evalAt(t, "Y") : this.pos[1]}, Z: function() {return 1}, minX: function() {return 0}, maxX: function() {
      var t, i, r = this.objects.length, s = 0;
      for (t = 0; r > t; t++)i = this.objects[t], i.elementClass === e.OBJECT_CLASS_CURVE && (s += this.objects[t].numberPoints);
      return s
    }, hasPoint: function(t, i) {
      var r, s;
      for (r = 0; this.objects.length > r; r++)if (s = this.objects[r], s.type === e.OBJECT_TYPE_CURVE && s.hasPoint(t, i))return!0;
      return!1
    }}), t.createTurtle = function(e, i, s) {
      var o;
      return i = i || [], o = r.copyAttributes(s, e.options, "turtle"), new t.Turtle(e, i, o)
    }, t.registerElement("turtle", t.createTurtle), {Turtle: t.Turtle, createTurtle: t.createTurtle}
  }), define("utils/dump", ["jxg", "utils/type"], function(t, e) {
    return t.Dump = {addMarkers: function(t, i, r) {
      var s, o, n;
      e.isArray(i) || (i = [i]), e.isArray(r) || (r = [r]), o = Math.min(i.length, r.length), i.length = o, r.length = o;
      for (s in t.objects)if (t.objects.hasOwnProperty(s))for (n = 0; o > n; n++)t.objects[s][i[n]] = r[n]
    }, deleteMarkers: function(t, i) {
      var r, s, o;
      e.isArray(i) || (i = [i]), s = i.length, i.length = s;
      for (r in t.objects)if (t.objects.hasOwnProperty(r))for (o = 0; s > o; o++)delete t.objects[r][i[o]]
    }, str: function(t) {return"string" == typeof t && "function" !== t.substr(0, 7) && (t = "'" + t + "'"), t}, minimizeObject: function(t) {
      var i, r, s, o = {}, n = e.deepCopy(t), a = [];
      for (s = 1; arguments.length > s; s++)a.push(arguments[s]);
      for (s = a.length; s > 0; s--)o = e.deepCopy(o, a[s - 1], !0);
      for (i in o)o.hasOwnProperty(i) && (r = i.toLowerCase(), "object" != typeof o[i] && o[i] === n[r] && delete n[r]);
      return n
    }, prepareAttributes: function(e, i) {
      var r, s;
      r = this.minimizeObject(i.getAttributes(), t.Options[i.elType]);
      for (s in i.subs)i.subs.hasOwnProperty(s) && (r[s] = this.minimizeObject(i.subs[s].getAttributes(), t.Options[i.elType][s], t.Options[i.subs[s].elType]), r[s].id = i.subs[s].id, r[s].name = i.subs[s].name);
      return r.id = i.id, r.name = i.name, r
    }, dump: function(t) {
      var e, i, r, s, o = [], n = [], a = [], h = t.objectsList.length;
      for (this.addMarkers(t, "dumped", !1), n.push({obj: "$board", method: "setBoundingBox", params: [t.getBoundingBox(), !0]}), e = 0; h > e; e++)if (i = t.objectsList[e], r = {}, !i.dumped && i.dump) {
        for (r.type = i.getType(), r.parents = i.getParents(), "point" === r.type && 1 === r.parents[0] && (r.parents = r.parents.slice(1)), s = 0; r.parents.length > s; s++)"string" == typeof r.parents[s] && (r.parents[s] = "'" + r.parents[s] + "'");
        r.attributes = this.prepareAttributes(t, i), "glider" === r.type && i.onPolygon && o.push({obj: i.id, prop: "onPolygon", val: !0}), a.push(r)
      }
      return this.deleteMarkers(t, "dumped"), {elements: a, props: o, methods: n}
    }, arrayToParamStr: function(t, e) {
      var i, r = [];
      for (i = 0; t.length > i; i++)r.push(e.call(this, t[i]));
      return r.join(", ")
    }, toJSAN: function(t) {
      var i, r, s;
      switch (typeof t) {
        case"object":
          if (t) {
            if (r = [], e.isArray(t)) {
              for (i = 0; t.length > i; i++)r.push(this.toJSAN(t[i]));
              return"[" + r.join(",") + "]"
            }
            for (s in t)t.hasOwnProperty(s) && r.push(s + ": " + this.toJSAN(t[s]));
            return"<<" + r.join(", ") + ">> "
          }
          return"null";
        case"string":
          return"'" + t.replace(/(["'])/g, "\\$1") + "'";
        case"number":
        case"boolean":
          return"" + t;
        case"null":
          return"null"
      }
    }, toJessie: function(t) {
      var e, i, r = this.dump(t), s = [];
      for (i = r.elements, e = 0; i.length > e; e++)i[e].attributes.name.length > 0 && s.push("// " + i[e].attributes.name), s.push("s" + e + " = " + i[e].type + "(" + i[e].parents.join(", ") + ") " + this.toJSAN(i[e].attributes).replace(/\n/, "\\n") + ";"), s.push("");
      for (e = 0; r.methods.length > e; e++)s.push(r.methods[e].obj + "." + r.methods[e].method + "(" + this.arrayToParamStr(r.methods[e].params, this.toJSAN) + ");"), s.push("");
      for (e = 0; r.props.length > e; e++)s.push(r.props[e].obj + "." + r.props[e].prop + " = " + this.toJSAN(r.props[e].val) + ";"), s.push("");
      return s.join("\n")
    }, toJavaScript: function(t) {
      var i, r, s = this.dump(t), o = [];
      for (r = s.elements, i = 0; r.length > i; i++)o.push('board.create("' + r[i].type + '", [' + r[i].parents.join(", ") + "], " + e.toJSON(r[i].attributes) + ");");
      for (i = 0; s.methods.length > i; i++)o.push(s.methods[i].obj + "." + s.methods[i].method + "(" + this.arrayToParamStr(s.methods[i].params, e.toJSON) + ");"), o.push("");
      for (i = 0; s.props.length > i; i++)o.push(s.props[i].obj + "." + s.props[i].prop + " = " + e.toJSON(s.props[i].val) + ";"), o.push("");
      return o.join("\n")
    }}, t.Dump
  }), define("element/slopetriangle", ["jxg", "options", "utils/type", "base/constants", "base/line", "base/polygon", "base/point", "base/element"], function(t, e, i, r, s, o) {
    var n = {removeSlopeTriangle: function() {o.Polygon.prototype.remove.call(this), this.board.removeObject(this.toppoint), this.board.removeObject(this.glider), this.board.removeObject(this.baseline), this.board.removeObject(this.basepoint), this.board.removeObject(this.label)}, Value: function() {return this.tangent.getSlope()}};
    return t.createSlopeTriangle = function(e, s, o) {
      var a, h, l, c, d, u, p, f, m;
      if (1 === s.length && s[0].type === r.OBJECT_TYPE_TANGENT)h = s[0], l = h.glider; else {
        if (2 !== s.length || s[0].elementClass !== r.OBJECT_CLASS_LINE || !i.isPoint(s[1]))throw Error("JSXGraph: Can't create slope triangle with parent types '" + typeof s[0] + "'.");
        h = s[0], l = s[1]
      }
      return m = i.copyAttributes(o, e.options, "slopetriangle", "basepoint"), p = e.create("point", [function() {return[l.X() + 1, l.Y()]}], m), m = i.copyAttributes(o, e.options, "slopetriangle", "baseline"), u = e.create("line", [l, p], m), m = i.copyAttributes(o, e.options, "slopetriangle", "glider"), c = e.create("glider", [l.X() + 1, l.Y(), u], m), m = i.copyAttributes(o, e.options, "slopetriangle", "toppoint"), d = e.create("point", [function() {return[c.X(), c.Y() + (c.X() - l.X()) * h.getSlope()]}], m), m = i.copyAttributes(o, e.options, "slopetriangle"), a = e.create("polygon", [l, c, d], m), a.Value = n.Value, a.tangent = h, m = i.copyAttributes(o, e.options, "slopetriangle", "label"), f = e.create("text", [function() {return c.X() + .1}, function() {return.5 * (c.Y() + d.Y())}, function() {return""}], m), f._setText(function() {return a.Value().toFixed(f.visProp.digits)}), f.prepareUpdate().update().updateRenderer(), a.glider = c, a.basepoint = p, a.baseline = u, a.toppoint = d, a.label = f, a.methodMap = t.deepCopy(a.methodMap, {tangent: "tangent", glider: "glider", basepoint: "basepoint", baseline: "baseline", toppoint: "toppoint", label: "label", Value: "Value", V: "Value"}), a.remove = n.removeSlopeTriangle, a
    }, t.registerElement("slopetriangle", t.createSlopeTriangle), {createSlopeTriangle: t.createSlopeTriangle}
  }), define("element/checkbox", ["jxg", "utils/env", "utils/type"], function(t, e, i) {
    var r = {CheckboxChangeEventHandler: function() {this._value = this.rendNodeCheckbox.checked, this.board.update()}};
    return t.createCheckbox = function(s, o, n) {
      var a, h, l = i.copyAttributes(n, s.options, "checkbox");
      return h = [o[0], o[1], '<form style="display:inline"><input type="checkbox" /><span></span></form>'], a = t.createText(s, h, l), a.type = i.OBJECT_TYPE_CHECKBOX, a.rendNodeForm = a.rendNode.childNodes[0], a.rendNodeForm.id = a.rendNode.id + "_form", a.rendNodeCheckbox = a.rendNodeForm.childNodes[0], a.rendNodeCheckbox.id = a.rendNode.id + "_checkbox", a.rendNodeLabel = a.rendNodeForm.childNodes[1], a.rendNodeLabel.id = a.rendNode.id + "_label", a.rendNodeLabel.innerHTML = o[2], a._value = !1, a.Value = function() {return this._value}, a.update = function() {return this.needsUpdate && (this._value = this.rendNodeCheckbox.checked), this}, e.addEvent(a.rendNodeCheckbox, "change", r.CheckboxChangeEventHandler, a), a
    }, t.registerElement("checkbox", t.createCheckbox), {createCheckbox: t.createCheckbox}
  }), define("element/input", ["jxg", "utils/env", "utils/type"], function(t, e, i) {
    var r = {InputInputEventHandler: function() {this._value = this.rendNodeInput.value, this.board.update()}};
    return t.createInput = function(s, o, n) {
      var a, h, l = i.copyAttributes(n, s.options, "input");
      return h = [o[0], o[1], '<form style="display:inline"><span></span><input type="text" /></form>'], a = t.createText(s, h, l), a.type = i.OBJECT_TYPE_INPUT, a.rendNodeForm = a.rendNode.childNodes[0], a.rendNodeForm.id = a.rendNode.id + "_form", a.rendNodeLabel = a.rendNodeForm.childNodes[0], a.rendNodeLabel.id = a.rendNode.id + "_label", a.rendNodeLabel.innerHTML = o[3], a.rendNodeInput = a.rendNodeForm.childNodes[1], a.rendNodeInput.id = a.rendNode.id + "_input", a.rendNodeInput.value = o[2], a._value = o[2], a.Value = function() {return this._value}, a.update = function() {return this.needsUpdate && (this._value = this.rendNodeInput.value), this}, e.addEvent(a.rendNodeInput, "input", r.InputInputEventHandler, a), a
    }, t.registerElement("input", t.createInput), {createInput: t.createInput}
  }), define("element/button", ["jxg", "utils/env", "utils/type"], function(t, e, i) {
    var r = {ButtonClickEventHandler: function() {this._handler && this._handler(), this.board.update()}};
    return t.createButton = function(s, o, n) {
      var a, h, l = i.copyAttributes(n, s.options, "button");
      return h = [o[0], o[1], '<button type="button"></button>'], a = t.createText(s, h, l), a.type = i.OBJECT_TYPE_BUTTON, a.rendNodeButton = a.rendNode.childNodes[0], a.rendNodeButton.id = a.rendNode.id + "_button", a.rendNodeButton.innerHTML = o[2], o[3] && ("string" == typeof o[3] ? (a._jc = new t.JessieCode, a._jc.use(s), a._handler = function() {a._jc.parse(o[3])}) : a._handler = o[3]), e.addEvent(a.rendNodeButton, "click", r.ButtonClickEventHandler, a), a
    }, t.registerElement("button", t.createButton), {createButton: t.createButton}
  }), define("../build/core.deps.js", ["jxg", "utils/env", "base/constants", "utils/type", "utils/xml", "utils/event", "utils/expect", "math/math", "math/qdt", "math/numerics", "math/statistics", "math/symbolic", "math/geometry", "math/poly", "math/complex", "renderer/abstract", "renderer/no", "reader/file", "parser/geonext", "base/board", "options", "jsxgraph", "base/element", "base/coords", "base/point", "base/line", "base/group", "base/circle", "element/conic", "base/polygon", "base/curve", "element/arc", "element/sector", "base/composition", "element/composition", "element/locus", "base/text", "base/image", "element/slider", "element/measure", "base/chart", "base/transformation", "base/turtle", "utils/color", "base/ticks", "utils/zip", "utils/base64", "utils/uuid", "utils/encoding", "server/server", "parser/datasource", "parser/jessiecode", "utils/dump", "renderer/svg", "renderer/vml", "renderer/canvas", "renderer/no", "element/slopetriangle", "element/checkbox", "element/input", "element/button"], function(t, e) {return e.isBrowser ? window.JXG = t : e.isNode() && "object" == typeof module ? module.exports = t : e.isWebWorker() && (self.JXG = t), t}), require("../build/core.deps.js")
})();