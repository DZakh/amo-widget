!(function() {
  /* eslint-disable */ 'use strict';
  var e =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    t = 'object' == typeof e && e && e.Object === Object && e,
    n = 'object' == typeof self && self && self.Object === Object && self,
    o = (t || n || Function('return this')()).Symbol,
    r = Object.prototype,
    s = r.hasOwnProperty,
    a = r.toString,
    d = o ? o.toStringTag : void 0;
  var c = function(e) {
      var t = s.call(e, d),
        n = e[d];
      try {
        e[d] = void 0;
        var o = !0;
      } catch (e) {}
      var r = a.call(e);
      return o && (t ? (e[d] = n) : delete e[d]), r;
    },
    i = Object.prototype.toString;
  var u = function(e) {
      return i.call(e);
    },
    l = o ? o.toStringTag : void 0;
  var f = function(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : l && l in Object(e)
      ? c(e)
      : u(e);
  };
  var b = function(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  };
  var y = function(e) {
    if (!b(e)) return !1;
    var t = f(e);
    return (
      '[object Function]' == t ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  };
  const p = 'ready',
    v = 'destroy',
    w = 'update:sb-fields',
    j = 'update:sb-statuses',
    g = { 'sb-fields': 'sb-fields', 'sb-statuses': 'sb-statuses' };
  window.Amo = () => {
    let e = 0;
    const t = {},
      n = { [p]: new Set(), [v]: new Set(), [j]: new Set(), [w]: new Set() },
      o = e => {
        window.parent.postMessage(e, '*');
      },
      r = e => {
        if (!e.data) return;
        const o = e.data,
          s = o.method,
          a = o.payload;
        switch (!0) {
          case s === v:
            window.removeEventListener('message', r);
          case !!n[s]: {
            const e = n[s];
            e &&
              e.forEach(e => {
                e(a);
              });
            break;
          }
          case 'response' === s: {
            const e = a.requestIdx,
              n = a.data;
            t[e](n), delete t[e];
            break;
          }
        }
      };
    return (
      window.addEventListener('message', r),
      {
        on: (e, t) => {
          const o = n[e];
          o && y(t) && o.add(t);
        },
        off: (e, t) => {
          const o = n[e];
          o && o.delete(t);
        },
        destroy: () => {
          o({ method: 'destroy' });
        },
        request: n =>
          g[n]
            ? new Promise(r => {
                (t[e] = r),
                  o({ method: 'request', payload: { requestIdx: e, entity: n } }),
                  (e += 1);
              })
            : Promise.resolve({ error: 'Unexpected requested entity.' }),
      }
    );
  };
})();
