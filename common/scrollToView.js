import t from "react";
function e(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function r(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function n(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
      if (null == r) return;
      var n,
        o,
        i = [],
        c = !0,
        a = !1;
      try {
        for (
          r = r.call(t);
          !(c = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e);
          c = !0
        );
      } catch (t) {
        (a = !0), (o = t);
      } finally {
        try {
          c || null == r.return || r.return();
        } finally {
          if (a) throw o;
        }
      }
      return i;
    })(t, e) ||
    (function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return o(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === r && t.constructor && (r = t.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(t);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return o(t, e);
    })(t, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function o(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var i = function (o) {
  var i = o.children,
    c = o.selector,
    a = o.smooth,
    l = void 0 === a || a,
    u = o.style,
    s = void 0 === u ? {} : u,
    f = o.alignToTop,
    b = void 0 !== f && f,
    y = o.className,
    p = void 0 === y ? "" : y,
    v = o.onClick,
    m = o.scrollOptions,
    O = void 0 === m ? {} : m,
    d = function () {
      var t = (function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? e(Object(o), !0).forEach(function (e) {
                r(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : e(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      })(
        { behavior: l ? "smooth" : "instant" },
        (function (t) {
          var e = {};
          return (
            t instanceof Object &&
              Object.entries(t).forEach(function (t) {
                var r = n(t, 2),
                  o = r[0],
                  i = r[1];
                switch (o) {
                  case "behavior":
                    ("auto" !== i && "smooth" !== i) || (e[o] = i);
                  case "block":
                  case "inline":
                    ("start" !== i &&
                      "center" !== i &&
                      "end" !== i &&
                      "nearest" !== i) ||
                      (e[o] = i);
                }
              }),
            e
          );
        })(O)
      );
      b && ((t.block = "start"), (t.inline = "nearest")),
        document.getElementById(c)?.scrollIntoView(t);
    };
  return t.createElement(
    "div",
    {
      style: s,
      className: p,
      onClick: function (t) {
        "function" == typeof v ? (v(t), setTimeout(d, 1e3 / 60)) : d();
      },
    },
    i
  );
};
export { i as default };
