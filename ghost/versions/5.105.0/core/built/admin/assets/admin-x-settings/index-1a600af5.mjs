import { aZ as Ie, U as Qa, a$ as ll } from "./index-ddcccc3d.mjs";
function fl(r, e) {
  for (var n = 0; n < e.length; n++) {
    const t = e[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const i in t)
        if (i !== "default" && !(i in r)) {
          const a = Object.getOwnPropertyDescriptor(t, i);
          a && Object.defineProperty(r, i, a.get ? a : {
            enumerable: !0,
            get: () => t[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var cl = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, Ka = cl, dl = Ka, hl = typeof self == "object" && self && self.Object === Object && self, vl = dl || hl || Function("return this")(), We = vl, ml = We, yl = ml.Symbol, ln = yl;
function pl(r, e) {
  for (var n = -1, t = r == null ? 0 : r.length, i = Array(t); ++n < t; )
    i[n] = e(r[n], n, r);
  return i;
}
var ro = pl, gl = Array.isArray, pe = gl, bi = ln, eo = Object.prototype, $l = eo.hasOwnProperty, bl = eo.toString, ie = bi ? bi.toStringTag : void 0;
function wl(r) {
  var e = $l.call(r, ie), n = r[ie];
  try {
    r[ie] = void 0;
    var t = !0;
  } catch {
  }
  var i = bl.call(r);
  return t && (e ? r[ie] = n : delete r[ie]), i;
}
var Sl = wl, El = Object.prototype, Tl = El.toString;
function Ol(r) {
  return Tl.call(r);
}
var Il = Ol, wi = ln, xl = Sl, _l = Il, Al = "[object Null]", Cl = "[object Undefined]", Si = wi ? wi.toStringTag : void 0;
function Nl(r) {
  return r == null ? r === void 0 ? Cl : Al : Si && Si in Object(r) ? xl(r) : _l(r);
}
var Hr = Nl;
function Fl(r) {
  return r != null && typeof r == "object";
}
var Gr = Fl, Ml = Hr, kl = Gr, Dl = "[object Symbol]";
function Pl(r) {
  return typeof r == "symbol" || kl(r) && Ml(r) == Dl;
}
var fn = Pl, Ei = ln, Ll = ro, Ul = pe, Rl = fn, jl = 1 / 0, Ti = Ei ? Ei.prototype : void 0, Oi = Ti ? Ti.toString : void 0;
function to(r) {
  if (typeof r == "string")
    return r;
  if (Ul(r))
    return Ll(r, to) + "";
  if (Rl(r))
    return Oi ? Oi.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -jl ? "-0" : e;
}
var Bl = to, Vl = Bl;
function zl(r) {
  return r == null ? "" : Vl(r);
}
var Ar = zl;
function Zl(r, e, n) {
  var t = -1, i = r.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++t < i; )
    a[t] = r[t + e];
  return a;
}
var Hl = Zl, Gl = Hl;
function ql(r, e, n) {
  var t = r.length;
  return n = n === void 0 ? t : n, !e && n >= t ? r : Gl(r, e, n);
}
var Wl = ql, Yl = "\\ud800-\\udfff", Jl = "\\u0300-\\u036f", Xl = "\\ufe20-\\ufe2f", Ql = "\\u20d0-\\u20ff", Kl = Jl + Xl + Ql, rf = "\\ufe0e\\ufe0f", ef = "\\u200d", tf = RegExp("[" + ef + Yl + Kl + rf + "]");
function nf(r) {
  return tf.test(r);
}
var no = nf;
function af(r) {
  return r.split("");
}
var of = af, io = "\\ud800-\\udfff", sf = "\\u0300-\\u036f", uf = "\\ufe20-\\ufe2f", lf = "\\u20d0-\\u20ff", ff = sf + uf + lf, cf = "\\ufe0e\\ufe0f", df = "[" + io + "]", Mt = "[" + ff + "]", kt = "\\ud83c[\\udffb-\\udfff]", hf = "(?:" + Mt + "|" + kt + ")", ao = "[^" + io + "]", oo = "(?:\\ud83c[\\udde6-\\uddff]){2}", so = "[\\ud800-\\udbff][\\udc00-\\udfff]", vf = "\\u200d", uo = hf + "?", lo = "[" + cf + "]?", mf = "(?:" + vf + "(?:" + [ao, oo, so].join("|") + ")" + lo + uo + ")*", yf = lo + uo + mf, pf = "(?:" + [ao + Mt + "?", Mt, oo, so, df].join("|") + ")", gf = RegExp(kt + "(?=" + kt + ")|" + pf + yf, "g");
function $f(r) {
  return r.match(gf) || [];
}
var bf = $f, wf = of, Sf = no, Ef = bf;
function Tf(r) {
  return Sf(r) ? Ef(r) : wf(r);
}
var Of = Tf, If = Wl, xf = no, _f = Of, Af = Ar;
function Cf(r) {
  return function(e) {
    e = Af(e);
    var n = xf(e) ? _f(e) : void 0, t = n ? n[0] : e.charAt(0), i = n ? If(n, 1).join("") : e.slice(1);
    return t[r]() + i;
  };
}
var Nf = Cf, Ff = Nf, Mf = Ff("toUpperCase"), kf = Mf, Df = Ar, Pf = kf;
function Lf(r) {
  return Pf(Df(r).toLowerCase());
}
var Uf = Lf;
function Rf(r, e, n, t) {
  var i = -1, a = r == null ? 0 : r.length;
  for (t && a && (n = r[++i]); ++i < a; )
    n = e(n, r[i], i, r);
  return n;
}
var jf = Rf;
function Bf(r) {
  return function(e) {
    return r == null ? void 0 : r[e];
  };
}
var fo = Bf, Vf = fo, zf = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Zf = Vf(zf), Hf = Zf, Gf = Hf, qf = Ar, Wf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yf = "\\u0300-\\u036f", Jf = "\\ufe20-\\ufe2f", Xf = "\\u20d0-\\u20ff", Qf = Yf + Jf + Xf, Kf = "[" + Qf + "]", rc = RegExp(Kf, "g");
function ec(r) {
  return r = qf(r), r && r.replace(Wf, Gf).replace(rc, "");
}
var tc = ec, nc = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function ic(r) {
  return r.match(nc) || [];
}
var ac = ic, oc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function sc(r) {
  return oc.test(r);
}
var uc = sc, co = "\\ud800-\\udfff", lc = "\\u0300-\\u036f", fc = "\\ufe20-\\ufe2f", cc = "\\u20d0-\\u20ff", dc = lc + fc + cc, ho = "\\u2700-\\u27bf", vo = "a-z\\xdf-\\xf6\\xf8-\\xff", hc = "\\xac\\xb1\\xd7\\xf7", vc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mc = "\\u2000-\\u206f", yc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", mo = "A-Z\\xc0-\\xd6\\xd8-\\xde", pc = "\\ufe0e\\ufe0f", yo = hc + vc + mc + yc, po = "['’]", Ii = "[" + yo + "]", gc = "[" + dc + "]", go = "\\d+", $c = "[" + ho + "]", $o = "[" + vo + "]", bo = "[^" + co + yo + go + ho + vo + mo + "]", bc = "\\ud83c[\\udffb-\\udfff]", wc = "(?:" + gc + "|" + bc + ")", Sc = "[^" + co + "]", wo = "(?:\\ud83c[\\udde6-\\uddff]){2}", So = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ur = "[" + mo + "]", Ec = "\\u200d", xi = "(?:" + $o + "|" + bo + ")", Tc = "(?:" + Ur + "|" + bo + ")", _i = "(?:" + po + "(?:d|ll|m|re|s|t|ve))?", Ai = "(?:" + po + "(?:D|LL|M|RE|S|T|VE))?", Eo = wc + "?", To = "[" + pc + "]?", Oc = "(?:" + Ec + "(?:" + [Sc, wo, So].join("|") + ")" + To + Eo + ")*", Ic = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", xc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _c = To + Eo + Oc, Ac = "(?:" + [$c, wo, So].join("|") + ")" + _c, Cc = RegExp([
  Ur + "?" + $o + "+" + _i + "(?=" + [Ii, Ur, "$"].join("|") + ")",
  Tc + "+" + Ai + "(?=" + [Ii, Ur + xi, "$"].join("|") + ")",
  Ur + "?" + xi + "+" + _i,
  Ur + "+" + Ai,
  xc,
  Ic,
  go,
  Ac
].join("|"), "g");
function Nc(r) {
  return r.match(Cc) || [];
}
var Fc = Nc, Mc = ac, kc = uc, Dc = Ar, Pc = Fc;
function Lc(r, e, n) {
  return r = Dc(r), e = n ? void 0 : e, e === void 0 ? kc(r) ? Pc(r) : Mc(r) : r.match(e) || [];
}
var Uc = Lc, Rc = jf, jc = tc, Bc = Uc, Vc = "['’]", zc = RegExp(Vc, "g");
function Zc(r) {
  return function(e) {
    return Rc(Bc(jc(e).replace(zc, "")), r, "");
  };
}
var Oo = Zc, Hc = Uf, Gc = Oo, qc = Gc(function(r, e, n) {
  return e = e.toLowerCase(), r + (n ? Hc(e) : e);
}), Wc = qc, Yc = Object.prototype, Jc = Yc.hasOwnProperty;
function Xc(r, e) {
  return r != null && Jc.call(r, e);
}
var Qc = Xc, Kc = pe, rd = fn, ed = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, td = /^\w*$/;
function nd(r, e) {
  if (Kc(r))
    return !1;
  var n = typeof r;
  return n == "number" || n == "symbol" || n == "boolean" || r == null || rd(r) ? !0 : td.test(r) || !ed.test(r) || e != null && r in Object(e);
}
var id = nd;
function ad(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Ye = ad, od = Hr, sd = Ye, ud = "[object AsyncFunction]", ld = "[object Function]", fd = "[object GeneratorFunction]", cd = "[object Proxy]";
function dd(r) {
  if (!sd(r))
    return !1;
  var e = od(r);
  return e == ld || e == fd || e == ud || e == cd;
}
var Io = dd, hd = We, vd = hd["__core-js_shared__"], md = vd, mt = md, Ci = function() {
  var r = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function yd(r) {
  return !!Ci && Ci in r;
}
var pd = yd, gd = Function.prototype, $d = gd.toString;
function bd(r) {
  if (r != null) {
    try {
      return $d.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var wd = bd, Sd = Io, Ed = pd, Td = Ye, Od = wd, Id = /[\\^$.*+?()[\]{}|]/g, xd = /^\[object .+?Constructor\]$/, _d = Function.prototype, Ad = Object.prototype, Cd = _d.toString, Nd = Ad.hasOwnProperty, Fd = RegExp(
  "^" + Cd.call(Nd).replace(Id, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Md(r) {
  if (!Td(r) || Ed(r))
    return !1;
  var e = Sd(r) ? Fd : xd;
  return e.test(Od(r));
}
var kd = Md;
function Dd(r, e) {
  return r == null ? void 0 : r[e];
}
var Pd = Dd, Ld = kd, Ud = Pd;
function Rd(r, e) {
  var n = Ud(r, e);
  return Ld(n) ? n : void 0;
}
var cn = Rd, jd = cn, Bd = jd(Object, "create"), Je = Bd, Ni = Je;
function Vd() {
  this.__data__ = Ni ? Ni(null) : {}, this.size = 0;
}
var zd = Vd;
function Zd(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Hd = Zd, Gd = Je, qd = "__lodash_hash_undefined__", Wd = Object.prototype, Yd = Wd.hasOwnProperty;
function Jd(r) {
  var e = this.__data__;
  if (Gd) {
    var n = e[r];
    return n === qd ? void 0 : n;
  }
  return Yd.call(e, r) ? e[r] : void 0;
}
var Xd = Jd, Qd = Je, Kd = Object.prototype, rh = Kd.hasOwnProperty;
function eh(r) {
  var e = this.__data__;
  return Qd ? e[r] !== void 0 : rh.call(e, r);
}
var th = eh, nh = Je, ih = "__lodash_hash_undefined__";
function ah(r, e) {
  var n = this.__data__;
  return this.size += this.has(r) ? 0 : 1, n[r] = nh && e === void 0 ? ih : e, this;
}
var oh = ah, sh = zd, uh = Hd, lh = Xd, fh = th, ch = oh;
function qr(r) {
  var e = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++e < n; ) {
    var t = r[e];
    this.set(t[0], t[1]);
  }
}
qr.prototype.clear = sh;
qr.prototype.delete = uh;
qr.prototype.get = lh;
qr.prototype.has = fh;
qr.prototype.set = ch;
var dh = qr;
function hh() {
  this.__data__ = [], this.size = 0;
}
var vh = hh;
function mh(r, e) {
  return r === e || r !== r && e !== e;
}
var Xe = mh, yh = Xe;
function ph(r, e) {
  for (var n = r.length; n--; )
    if (yh(r[n][0], e))
      return n;
  return -1;
}
var Qe = ph, gh = Qe, $h = Array.prototype, bh = $h.splice;
function wh(r) {
  var e = this.__data__, n = gh(e, r);
  if (n < 0)
    return !1;
  var t = e.length - 1;
  return n == t ? e.pop() : bh.call(e, n, 1), --this.size, !0;
}
var Sh = wh, Eh = Qe;
function Th(r) {
  var e = this.__data__, n = Eh(e, r);
  return n < 0 ? void 0 : e[n][1];
}
var Oh = Th, Ih = Qe;
function xh(r) {
  return Ih(this.__data__, r) > -1;
}
var _h = xh, Ah = Qe;
function Ch(r, e) {
  var n = this.__data__, t = Ah(n, r);
  return t < 0 ? (++this.size, n.push([r, e])) : n[t][1] = e, this;
}
var Nh = Ch, Fh = vh, Mh = Sh, kh = Oh, Dh = _h, Ph = Nh;
function Wr(r) {
  var e = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++e < n; ) {
    var t = r[e];
    this.set(t[0], t[1]);
  }
}
Wr.prototype.clear = Fh;
Wr.prototype.delete = Mh;
Wr.prototype.get = kh;
Wr.prototype.has = Dh;
Wr.prototype.set = Ph;
var Lh = Wr, Uh = cn, Rh = We, jh = Uh(Rh, "Map"), Bh = jh, Fi = dh, Vh = Lh, zh = Bh;
function Zh() {
  this.size = 0, this.__data__ = {
    hash: new Fi(),
    map: new (zh || Vh)(),
    string: new Fi()
  };
}
var Hh = Zh;
function Gh(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var qh = Gh, Wh = qh;
function Yh(r, e) {
  var n = r.__data__;
  return Wh(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
var Ke = Yh, Jh = Ke;
function Xh(r) {
  var e = Jh(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var Qh = Xh, Kh = Ke;
function rv(r) {
  return Kh(this, r).get(r);
}
var ev = rv, tv = Ke;
function nv(r) {
  return tv(this, r).has(r);
}
var iv = nv, av = Ke;
function ov(r, e) {
  var n = av(this, r), t = n.size;
  return n.set(r, e), this.size += n.size == t ? 0 : 1, this;
}
var sv = ov, uv = Hh, lv = Qh, fv = ev, cv = iv, dv = sv;
function Yr(r) {
  var e = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++e < n; ) {
    var t = r[e];
    this.set(t[0], t[1]);
  }
}
Yr.prototype.clear = uv;
Yr.prototype.delete = lv;
Yr.prototype.get = fv;
Yr.prototype.has = cv;
Yr.prototype.set = dv;
var hv = Yr, xo = hv, vv = "Expected a function";
function dn(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(vv);
  var n = function() {
    var t = arguments, i = e ? e.apply(this, t) : t[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var l = r.apply(this, t);
    return n.cache = a.set(i, l) || a, l;
  };
  return n.cache = new (dn.Cache || xo)(), n;
}
dn.Cache = xo;
var mv = dn, yv = mv, pv = 500;
function gv(r) {
  var e = yv(r, function(t) {
    return n.size === pv && n.clear(), t;
  }), n = e.cache;
  return e;
}
var $v = gv, bv = $v, wv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sv = /\\(\\)?/g, Ev = bv(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(wv, function(n, t, i, a) {
    e.push(i ? a.replace(Sv, "$1") : t || n);
  }), e;
}), Tv = Ev, Ov = pe, Iv = id, xv = Tv, _v = Ar;
function Av(r, e) {
  return Ov(r) ? r : Iv(r, e) ? [r] : xv(_v(r));
}
var Cv = Av, Nv = Hr, Fv = Gr, Mv = "[object Arguments]";
function kv(r) {
  return Fv(r) && Nv(r) == Mv;
}
var Dv = kv, Mi = Dv, Pv = Gr, _o = Object.prototype, Lv = _o.hasOwnProperty, Uv = _o.propertyIsEnumerable, Rv = Mi(function() {
  return arguments;
}()) ? Mi : function(r) {
  return Pv(r) && Lv.call(r, "callee") && !Uv.call(r, "callee");
}, Ao = Rv, jv = 9007199254740991, Bv = /^(?:0|[1-9]\d*)$/;
function Vv(r, e) {
  var n = typeof r;
  return e = e ?? jv, !!e && (n == "number" || n != "symbol" && Bv.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var hn = Vv, zv = 9007199254740991;
function Zv(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= zv;
}
var vn = Zv, Hv = fn, Gv = 1 / 0;
function qv(r) {
  if (typeof r == "string" || Hv(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -Gv ? "-0" : e;
}
var Wv = qv, Yv = Cv, Jv = Ao, Xv = pe, Qv = hn, Kv = vn, rm = Wv;
function em(r, e, n) {
  e = Yv(e, r);
  for (var t = -1, i = e.length, a = !1; ++t < i; ) {
    var l = rm(e[t]);
    if (!(a = r != null && n(r, l)))
      break;
    r = r[l];
  }
  return a || ++t != i ? a : (i = r == null ? 0 : r.length, !!i && Kv(i) && Qv(l, i) && (Xv(r) || Jv(r)));
}
var tm = em, nm = Qc, im = tm;
function am(r, e) {
  return r != null && im(r, e, nm);
}
var om = am;
let xe;
const sm = new Uint8Array(16);
function um() {
  if (!xe && (xe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !xe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return xe(sm);
}
const V = [];
for (let r = 0; r < 256; ++r)
  V.push((r + 256).toString(16).slice(1));
function lm(r, e = 0) {
  return V[r[e + 0]] + V[r[e + 1]] + V[r[e + 2]] + V[r[e + 3]] + "-" + V[r[e + 4]] + V[r[e + 5]] + "-" + V[r[e + 6]] + V[r[e + 7]] + "-" + V[r[e + 8]] + V[r[e + 9]] + "-" + V[r[e + 10]] + V[r[e + 11]] + V[r[e + 12]] + V[r[e + 13]] + V[r[e + 14]] + V[r[e + 15]];
}
let ki, yt, pt = 0, gt = 0;
function fm(r, e, n) {
  let t = e && n || 0;
  const i = e || new Array(16);
  r = r || {};
  let a = r.node || ki, l = r.clockseq !== void 0 ? r.clockseq : yt;
  if (a == null || l == null) {
    const g = r.random || (r.rng || um)();
    a == null && (a = ki = [g[0] | 1, g[1], g[2], g[3], g[4], g[5]]), l == null && (l = yt = (g[6] << 8 | g[7]) & 16383);
  }
  let u = r.msecs !== void 0 ? r.msecs : Date.now(), d = r.nsecs !== void 0 ? r.nsecs : gt + 1;
  const v = u - pt + (d - gt) / 1e4;
  if (v < 0 && r.clockseq === void 0 && (l = l + 1 & 16383), (v < 0 || u > pt) && r.nsecs === void 0 && (d = 0), d >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  pt = u, gt = d, yt = l, u += 122192928e5;
  const p = ((u & 268435455) * 1e4 + d) % 4294967296;
  i[t++] = p >>> 24 & 255, i[t++] = p >>> 16 & 255, i[t++] = p >>> 8 & 255, i[t++] = p & 255;
  const y = u / 4294967296 * 1e4 & 268435455;
  i[t++] = y >>> 8 & 255, i[t++] = y & 255, i[t++] = y >>> 24 & 15 | 16, i[t++] = y >>> 16 & 255, i[t++] = l >>> 8 | 128, i[t++] = l & 255;
  for (let g = 0; g < 6; ++g)
    i[t + g] = a[g];
  return e || lm(i);
}
function cm(r, e) {
  var a, l;
  const n = (((a = r.stack) == null ? void 0 : a.split(/\n/g)) || [])[1], [t, ...i] = ((l = e.stack) == null ? void 0 : l.split(/\n/g)) || [];
  return [t, n, ...i].join(`
`);
}
var dm = Object.defineProperty, hm = (r, e, n) => e in r ? dm(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n, tr = (r, e, n) => (hm(r, typeof e != "symbol" ? e + "" : e, n), n);
class _ extends Error {
  constructor(e = {}) {
    super(), tr(this, "statusCode"), tr(this, "errorType"), tr(this, "level"), tr(this, "id"), tr(this, "context"), tr(this, "help"), tr(this, "errorDetails"), tr(this, "code"), tr(this, "property"), tr(this, "redirect"), tr(this, "hideStack"), this.statusCode = 500, this.errorType = "InternalServerError", this.level = "normal", this.message = "The server has encountered an error.", this.id = fm(), this.id = e.id || this.id, this.statusCode = e.statusCode || this.statusCode, this.level = e.level || this.level, this.context = e.context, this.help = e.help, this.errorType = this.name = e.errorType || this.errorType, this.errorDetails = e.errorDetails, this.code = e.code || null, this.property = e.property || null, this.redirect = e.redirect || null, this.message = e.message || this.message, this.hideStack = e.hideStack || !1, e.err && (typeof e.err == "string" && (e.err = new Error(e.err)), Object.getOwnPropertyNames(e.err).forEach((n) => {
      if (["errorType", "name", "statusCode", "message", "level"].indexOf(n) === -1) {
        if (n === "code") {
          this[n] = this[n] || e.err[n];
          return;
        }
        if (n === "stack" && !this.hideStack) {
          this[n] = cm(this, e.err);
          return;
        }
        this[n] = e.err[n] || this[n];
      }
    }));
  }
}
const C = (r, e) => {
  const n = { ...e };
  return Object.keys(r).forEach((t) => {
    r[t] !== void 0 && (n[t] = r[t]);
  }), n;
};
class Br extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      level: "critical",
      errorType: "InternalServerError",
      message: "The server has encountered an error."
    }));
  }
}
let Co = class extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 400,
      level: "critical",
      errorType: "IncorrectUsageError",
      message: "We detected a misuse. Please read the stack trace."
    }));
  }
};
class No extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 404,
      errorType: "NotFoundError",
      message: "Resource could not be found.",
      hideStack: !0
    }));
  }
}
class mn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 400,
      errorType: "BadRequestError",
      message: "The request could not be understood."
    }));
  }
}
class Fo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 401,
      errorType: "UnauthorizedError",
      message: "You are not authorised to make this request."
    }));
  }
}
class yn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 403,
      errorType: "NoPermissionError",
      message: "You do not have permission to perform this request."
    }));
  }
}
class pn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 422,
      errorType: "ValidationError",
      message: "The request failed validation."
    }));
  }
}
class Mo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 415,
      errorType: "UnsupportedMediaTypeError",
      message: "The media in the request is not supported by the server."
    }));
  }
}
class ko extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 429,
      errorType: "TooManyRequestsError",
      message: "Server has received too many similar requests in a short space of time."
    }));
  }
}
class gn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 503,
      errorType: "MaintenanceError",
      message: "The server is temporarily down for maintenance."
    }));
  }
}
class Do extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 405,
      errorType: "MethodNotAllowedError",
      message: "Method not allowed for resource."
    }));
  }
}
class Po extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 406,
      errorType: "RequestNotAcceptableError",
      message: "Request not acceptable for provided Accept-Version header.",
      hideStack: !0
    }));
  }
}
class Lo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 416,
      errorType: "RangeNotSatisfiableError",
      message: "Range not satisfiable for provided Range header.",
      hideStack: !0
    }));
  }
}
class Uo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 413,
      errorType: "RequestEntityTooLargeError",
      message: "Request was too big for the server to handle."
    }));
  }
}
class Ro extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 503,
      errorType: "TokenRevocationError",
      message: "Token is no longer available."
    }));
  }
}
class jo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 400,
      errorType: "VersionMismatchError",
      message: "Requested version does not match server version."
    }));
  }
}
class Bo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      errorType: "DataExportError",
      message: "The server encountered an error whilst exporting data."
    }));
  }
}
class Vo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      errorType: "DataImportError",
      message: "The server encountered an error whilst importing data."
    }));
  }
}
class zo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      errorType: "EmailError",
      message: "The server encountered an error whilst sending email."
    }));
  }
}
class Zo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 422,
      errorType: "ThemeValidationError",
      message: "The theme has a validation error.",
      errorDetails: {}
    }));
  }
}
class Ho extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 409,
      errorType: "DisabledFeatureError",
      message: "Unable to complete the request, this feature is disabled."
    }));
  }
}
class Go extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 409,
      errorType: "UpdateCollisionError",
      message: "Unable to complete the request, there was a conflict."
    }));
  }
}
class qo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "HostLimitError",
      hideStack: !0,
      statusCode: 403,
      message: "Unable to complete the request, this resource is limited."
    }));
  }
}
class Wo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "HelperWarning",
      hideStack: !0,
      statusCode: 400,
      message: "A theme helper has done something unexpected."
    }));
  }
}
class Yo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "PasswordResetRequiredError",
      statusCode: 401,
      message: "For security, you need to create a new password. An email has been sent to you with instructions!"
    }));
  }
}
class Jo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "UnhandledJobError",
      message: "Processed job threw an unhandled error",
      level: "critical"
    }));
  }
}
class Xo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "NoContentError",
      statusCode: 204,
      hideStack: !0
    }));
  }
}
class Qo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "ConflictError",
      statusCode: 409,
      message: "The server has encountered an conflict."
    }));
  }
}
class Ko extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "MigrationError",
      message: "An error has occurred applying a database migration.",
      level: "critical"
    }));
  }
}
const rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: mn,
  ConflictError: Qo,
  DataExportError: Bo,
  DataImportError: Vo,
  DisabledFeatureError: Ho,
  EmailError: zo,
  HelperWarning: Wo,
  HostLimitError: qo,
  IncorrectUsageError: Co,
  InternalServerError: Br,
  MaintenanceError: gn,
  MethodNotAllowedError: Do,
  MigrationError: Ko,
  NoContentError: Xo,
  NoPermissionError: yn,
  NotFoundError: No,
  PasswordResetRequiredError: Yo,
  RangeNotSatisfiableError: Lo,
  RequestEntityTooLargeError: Uo,
  RequestNotAcceptableError: Po,
  ThemeValidationError: Zo,
  TokenRevocationError: Ro,
  TooManyRequestsError: ko,
  UnauthorizedError: Fo,
  UnhandledJobError: Jo,
  UnsupportedMediaTypeError: Mo,
  UpdateCollisionError: Go,
  ValidationError: pn,
  VersionMismatchError: jo
}, Symbol.toStringTag, { value: "Module" }));
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function vm() {
  return typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
}
var mm = vm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ym = mm, pm = ym;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gm = pm, $m = gm();
function bm() {
  return $m && typeof Symbol.toStringTag == "symbol";
}
var wm = bm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sm = wm, rt = Sm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Em = Object.prototype.toString, es = Em;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Tm = es;
function Om(r) {
  return Tm.call(r);
}
var Im = Om;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xm = Object.prototype.hasOwnProperty;
function _m(r, e) {
  return r == null ? !1 : xm.call(r, e);
}
var Am = _m;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Cm = Am, Jr = Cm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nm = typeof Symbol == "function" ? Symbol : void 0, Fm = Nm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Mm = Fm, km = Mm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Di = km, Dm = typeof Di == "function" ? Di.toStringTag : "", Pm = Dm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Lm = Jr, ae = Pm, $t = es;
function Um(r) {
  var e, n, t;
  if (r == null)
    return $t.call(r);
  n = r[ae], e = Lm(r, ae);
  try {
    r[ae] = void 0;
  } catch {
    return $t.call(r);
  }
  return t = $t.call(r), e ? r[ae] = n : delete r[ae], t;
}
var Rm = Um;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jm = rt, Bm = Im, Vm = Rm, Dt;
jm() ? Dt = Vm : Dt = Bm;
var z = Dt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zm = z, Pt;
function Zm(r) {
  return zm(r) === "[object Array]";
}
Array.isArray ? Pt = Array.isArray : Pt = Zm;
var Hm = Pt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gm = Hm, et = Gm;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qm = typeof Object.defineProperty == "function" ? Object.defineProperty : null, Wm = qm;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ym = Wm;
function Jm() {
  try {
    return Ym({}, "x", {}), !0;
  } catch {
    return !1;
  }
}
var Xm = Jm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Qm = Object.defineProperty, Km = Qm;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ry(r) {
  return typeof r == "number";
}
var ts = ry;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ey(r) {
  return r[0] === "-";
}
function Pi(r) {
  var e = "", n;
  for (n = 0; n < r; n++)
    e += "0";
  return e;
}
function ty(r, e, n) {
  var t = !1, i = e - r.length;
  return i < 0 || (ey(r) && (t = !0, r = r.substr(1)), r = n ? r + Pi(i) : Pi(i) + r, t && (r = "-" + r)), r;
}
var ns = ty;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ny = ts, Li = ns, iy = String.prototype.toLowerCase, Ui = String.prototype.toUpperCase;
function ay(r) {
  var e, n, t;
  switch (r.specifier) {
    case "b":
      e = 2;
      break;
    case "o":
      e = 8;
      break;
    case "x":
    case "X":
      e = 16;
      break;
    case "d":
    case "i":
    case "u":
    default:
      e = 10;
      break;
  }
  if (n = r.arg, t = parseInt(n, 10), !isFinite(t)) {
    if (!ny(n))
      throw new Error("invalid integer. Value: " + n);
    t = 0;
  }
  return t < 0 && (r.specifier === "u" || e !== 10) && (t = 4294967295 + t + 1), t < 0 ? (n = (-t).toString(e), r.precision && (n = Li(n, r.precision, r.padRight)), n = "-" + n) : (n = t.toString(e), !t && !r.precision ? n = "" : r.precision && (n = Li(n, r.precision, r.padRight)), r.sign && (n = r.sign + n)), e === 16 && (r.alternate && (n = "0x" + n), n = r.specifier === Ui.call(r.specifier) ? Ui.call(n) : iy.call(n)), e === 8 && r.alternate && n.charAt(0) !== "0" && (n = "0" + n), n;
}
var oy = ay;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function sy(r) {
  return typeof r == "string";
}
var uy = sy;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ly = ts, fy = Math.abs, cy = String.prototype.toLowerCase, Ri = String.prototype.toUpperCase, Sr = String.prototype.replace, dy = /e\+(\d)$/, hy = /e-(\d)$/, vy = /^(\d+)$/, my = /^(\d+)e/, yy = /\.0$/, py = /\.0*e/, gy = /(\..*[^0])0*e/;
function $y(r) {
  var e, n, t = parseFloat(r.arg);
  if (!isFinite(t)) {
    if (!ly(r.arg))
      throw new Error("invalid floating-point number. Value: " + n);
    t = r.arg;
  }
  switch (r.specifier) {
    case "e":
    case "E":
      n = t.toExponential(r.precision);
      break;
    case "f":
    case "F":
      n = t.toFixed(r.precision);
      break;
    case "g":
    case "G":
      fy(t) < 1e-4 ? (e = r.precision, e > 0 && (e -= 1), n = t.toExponential(e)) : n = t.toPrecision(r.precision), r.alternate || (n = Sr.call(n, gy, "$1e"), n = Sr.call(n, py, "e"), n = Sr.call(n, yy, ""));
      break;
    default:
      throw new Error("invalid double notation. Value: " + r.specifier);
  }
  return n = Sr.call(n, dy, "e+0$1"), n = Sr.call(n, hy, "e-0$1"), r.alternate && (n = Sr.call(n, vy, "$1."), n = Sr.call(n, my, "$1.e")), t >= 0 && r.sign && (n = r.sign + n), n = r.specifier === Ri.call(r.specifier) ? Ri.call(n) : cy.call(n), n;
}
var by = $y;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ji(r) {
  var e = "", n;
  for (n = 0; n < r; n++)
    e += " ";
  return e;
}
function wy(r, e, n) {
  var t = e - r.length;
  return t < 0 || (r = n ? r + ji(t) : ji(t) + r), r;
}
var Sy = wy;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ey = oy, Ty = uy, Oy = by, Iy = Sy, xy = ns, _y = String.fromCharCode, Ay = Array.isArray;
function _e(r) {
  return r !== r;
}
function Cy(r) {
  var e = {};
  return e.specifier = r.specifier, e.precision = r.precision === void 0 ? 1 : r.precision, e.width = r.width, e.flags = r.flags || "", e.mapping = r.mapping, e;
}
function Ny(r) {
  var e, n, t, i, a, l, u, d, v;
  if (!Ay(r))
    throw new TypeError("invalid argument. First argument must be an array. Value: `" + r + "`.");
  for (l = "", u = 1, d = 0; d < r.length; d++)
    if (t = r[d], Ty(t))
      l += t;
    else {
      if (e = t.precision !== void 0, t = Cy(t), !t.specifier)
        throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + d + "`. Value: `" + t + "`.");
      for (t.mapping && (u = t.mapping), n = t.flags, v = 0; v < n.length; v++)
        switch (i = n.charAt(v), i) {
          case " ":
            t.sign = " ";
            break;
          case "+":
            t.sign = "+";
            break;
          case "-":
            t.padRight = !0, t.padZeros = !1;
            break;
          case "0":
            t.padZeros = n.indexOf("-") < 0;
            break;
          case "#":
            t.alternate = !0;
            break;
          default:
            throw new Error("invalid flag: " + i);
        }
      if (t.width === "*") {
        if (t.width = parseInt(arguments[u], 10), u += 1, _e(t.width))
          throw new TypeError("the argument for * width at position " + u + " is not a number. Value: `" + t.width + "`.");
        t.width < 0 && (t.padRight = !0, t.width = -t.width);
      }
      if (e && t.precision === "*") {
        if (t.precision = parseInt(arguments[u], 10), u += 1, _e(t.precision))
          throw new TypeError("the argument for * precision at position " + u + " is not a number. Value: `" + t.precision + "`.");
        t.precision < 0 && (t.precision = 1, e = !1);
      }
      switch (t.arg = arguments[u], t.specifier) {
        case "b":
        case "o":
        case "x":
        case "X":
        case "d":
        case "i":
        case "u":
          e && (t.padZeros = !1), t.arg = Ey(t);
          break;
        case "s":
          t.maxWidth = e ? t.precision : -1, t.arg = String(t.arg);
          break;
        case "c":
          if (!_e(t.arg)) {
            if (a = parseInt(t.arg, 10), a < 0 || a > 127)
              throw new Error("invalid character code. Value: " + t.arg);
            t.arg = _e(a) ? String(t.arg) : _y(a);
          }
          break;
        case "e":
        case "E":
        case "f":
        case "F":
        case "g":
        case "G":
          e || (t.precision = 6), t.arg = Oy(t);
          break;
        default:
          throw new Error("invalid specifier: " + t.specifier);
      }
      t.maxWidth >= 0 && t.arg.length > t.maxWidth && (t.arg = t.arg.substring(0, t.maxWidth)), t.padZeros ? t.arg = xy(t.arg, t.width || t.precision, t.padRight) : t.width && (t.arg = Iy(t.arg, t.width, t.padRight)), l += t.arg || "", u += 1;
    }
  return l;
}
var Fy = Ny;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var My = Fy, ky = My;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ae = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
function Dy(r) {
  var e = {
    mapping: r[1] ? parseInt(r[1], 10) : void 0,
    flags: r[2],
    width: r[3],
    precision: r[5],
    specifier: r[6]
  };
  return r[4] === "." && r[5] === void 0 && (e.precision = "1"), e;
}
function Py(r) {
  var e, n, t, i;
  for (n = [], i = 0, t = Ae.exec(r); t; )
    e = r.slice(i, Ae.lastIndex - t[0].length), e.length && n.push(e), n.push(Dy(t)), i = Ae.lastIndex, t = Ae.exec(r);
  return e = r.slice(i), e.length && n.push(e), n;
}
var Ly = Py;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Uy = Ly, Ry = Uy;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function jy(r) {
  return typeof r == "string";
}
var By = jy;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Vy = ky, zy = Ry, Zy = By;
function is(r) {
  var e, n;
  if (!Zy(r))
    throw new TypeError(is("invalid argument. First argument must be a string. Value: `%s`.", r));
  for (e = [zy(r)], n = 1; n < arguments.length; n++)
    e.push(arguments[n]);
  return Vy.apply(null, e);
}
var Hy = is;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gy = Hy, wr = Gy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Bi = wr, Xr = Object.prototype, Vi = Xr.toString, zi = Xr.__defineGetter__, Zi = Xr.__defineSetter__, qy = Xr.__lookupGetter__, Wy = Xr.__lookupSetter__;
function Yy(r, e, n) {
  var t, i, a, l;
  if (typeof r != "object" || r === null || Vi.call(r) === "[object Array]")
    throw new TypeError(Bi("invalid argument. First argument must be an object. Value: `%s`.", r));
  if (typeof n != "object" || n === null || Vi.call(n) === "[object Array]")
    throw new TypeError(Bi("invalid argument. Property descriptor must be an object. Value: `%s`.", n));
  if (i = "value" in n, i && (qy.call(r, e) || Wy.call(r, e) ? (t = r.__proto__, r.__proto__ = Xr, delete r[e], r[e] = n.value, r.__proto__ = t) : r[e] = n.value), a = "get" in n, l = "set" in n, i && (a || l))
    throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
  return a && zi && zi.call(r, e, n.get), l && Zi && Zi.call(r, e, n.set), r;
}
var Jy = Yy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Xy = Xm, Qy = Km, Ky = Jy, Lt;
Xy() ? Lt = Qy : Lt = Ky;
var as = Lt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var r0 = as;
function e0(r, e, n) {
  r0(r, e, {
    configurable: !1,
    enumerable: !1,
    writable: !1,
    value: n
  });
}
var t0 = e0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n0 = t0, yr = n0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function i0(r) {
  return typeof r == "number";
}
var os = i0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var a0 = Number;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o0 = a0, $n = o0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var s0 = $n, u0 = s0.prototype.toString, l0 = u0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var f0 = l0;
function c0(r) {
  try {
    return f0.call(r), !0;
  } catch {
    return !1;
  }
}
var d0 = c0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var h0 = rt, v0 = z, m0 = $n, y0 = d0, p0 = h0();
function g0(r) {
  return typeof r == "object" ? r instanceof m0 ? !0 : p0 ? y0(r) : v0(r) === "[object Number]" : !1;
}
var ss = g0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $0 = os, b0 = ss;
function w0(r) {
  return $0(r) || b0(r);
}
var S0 = w0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var us = yr, bn = S0, E0 = os, T0 = ss;
us(bn, "isPrimitive", E0);
us(bn, "isObject", T0);
var tt = bn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var O0 = Number.POSITIVE_INFINITY, wn = O0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var I0 = $n, x0 = I0.NEGATIVE_INFINITY, _0 = x0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A0 = Math.floor, C0 = A0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var N0 = C0, F0 = N0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var M0 = F0;
function k0(r) {
  return M0(r) === r;
}
var D0 = k0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P0 = D0, Sn = P0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var L0 = wn, U0 = _0, R0 = Sn;
function j0(r) {
  return r < L0 && r > U0 && R0(r);
}
var ls = j0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var B0 = tt.isPrimitive, V0 = ls;
function z0(r) {
  return B0(r) && V0(r);
}
var fs = z0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Z0 = tt.isObject, H0 = ls;
function G0(r) {
  return Z0(r) && H0(r.valueOf());
}
var cs = G0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var q0 = fs, W0 = cs;
function Y0(r) {
  return q0(r) || W0(r);
}
var J0 = Y0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ds = yr, En = J0, X0 = fs, Q0 = cs;
ds(En, "isPrimitive", X0);
ds(En, "isObject", Q0);
var nt = En;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K0 = nt.isPrimitive;
function rp(r) {
  return K0(r) && r >= 0;
}
var hs = rp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ep = nt.isObject;
function tp(r) {
  return ep(r) && r.valueOf() >= 0;
}
var vs = tp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var np = hs, ip = vs;
function ap(r) {
  return np(r) || ip(r);
}
var op = ap;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ms = yr, Tn = op, sp = hs, up = vs;
ms(Tn, "isPrimitive", sp);
ms(Tn, "isObject", up);
var lp = Tn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fp = et, cp = wr;
function dp(r) {
  if (typeof r != "function")
    throw new TypeError(cp("invalid argument. Must provide a function. Value: `%s`.", r));
  return e;
  function e(n) {
    var t, i;
    if (!fp(n) || (t = n.length, t === 0))
      return !1;
    for (i = 0; i < t; i++)
      if (r(n[i]) === !1)
        return !1;
    return !0;
  }
}
var hp = dp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vp = hp, mp = vp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function yp(r) {
  return r !== null && typeof r == "object";
}
var pp = yp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gp = yr, $p = mp, On = pp, bp = $p(On);
gp(On, "isObjectLikeArray", bp);
var ys = On;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wp = ys;
function Sp(r) {
  return wp(r) && // eslint-disable-next-line no-underscore-dangle
  (r._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
  r.constructor && // WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
  typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r));
}
var Ep = Sp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Tp = Ep, ge = Tp;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Op = Object, Ip = Op;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xp = Ip, In = xp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _p = /./, Ap = _p;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Cp(r) {
  return typeof r == "boolean";
}
var ps = Cp;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Np = Boolean, Fp = Np;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Mp = Fp, kp = Mp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Dp = Boolean.prototype.toString, Pp = Dp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Lp = Pp;
function Up(r) {
  try {
    return Lp.call(r), !0;
  } catch {
    return !1;
  }
}
var Rp = Up;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jp = rt, Bp = z, Vp = kp, zp = Rp, Zp = jp();
function Hp(r) {
  return typeof r == "object" ? r instanceof Vp ? !0 : Zp ? zp(r) : Bp(r) === "[object Boolean]" : !1;
}
var gs = Hp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gp = ps, qp = gs;
function Wp(r) {
  return Gp(r) || qp(r);
}
var Yp = Wp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $s = yr, xn = Yp, Jp = ps, Xp = gs;
$s(xn, "isPrimitive", Jp);
$s(xn, "isObject", Xp);
var Qp = xn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Kp() {
  return new Function("return this;")();
}
var rg = Kp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eg = typeof self == "object" ? self : null, tg = eg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ng = typeof window == "object" ? window : null, ig = ng;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ag = typeof globalThis == "object" ? globalThis : null, og = ag;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sg = Qp.isPrimitive, ug = wr, lg = rg, Hi = tg, Gi = ig, qi = og;
function fg(r) {
  if (arguments.length) {
    if (!sg(r))
      throw new TypeError(ug("invalid argument. Must provide a boolean. Value: `%s`.", r));
    if (r)
      return lg();
  }
  if (qi)
    return qi;
  if (Hi)
    return Hi;
  if (Gi)
    return Gi;
  throw new Error("unexpected error. Unable to resolve global object.");
}
var cg = fg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dg = cg, Wi = dg(), hg = Wi.document && Wi.document.childNodes, vg = hg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mg = Int8Array, yg = mg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pg = Ap, gg = vg, $g = yg;
function bg() {
  return (
    // Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
    typeof pg == "function" || // Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
    typeof $g == "object" || // PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
    typeof gg == "function"
  );
}
var wg = bg;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Sg() {
  return /^\s*function\s*([^(]*)/i;
}
var bs = Sg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Eg = bs, Tg = Eg(), Og = Tg;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ig = yr, ws = bs, xg = Og;
Ig(ws, "REGEXP", xg);
var _g = ws;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ag = z, Cg = _g.REGEXP, Ng = ge;
function Fg(r) {
  var e, n, t;
  if (n = Ag(r).slice(8, -1), (n === "Object" || n === "Error") && r.constructor) {
    if (t = r.constructor, typeof t.name == "string")
      return t.name;
    if (e = Cg.exec(t.toString()), e)
      return e[1];
  }
  return Ng(r) ? "Buffer" : n;
}
var Mg = Fg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kg = Mg, Ss = kg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Dg = Ss;
function Pg(r) {
  var e;
  return r === null ? "null" : (e = typeof r, e === "object" ? Dg(r).toLowerCase() : e);
}
var Lg = Pg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ug = Ss;
function Rg(r) {
  return Ug(r).toLowerCase();
}
var jg = Rg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Bg = wg, Vg = Lg, zg = jg, Zg = Bg() ? zg : Vg, _n = Zg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hg = _n;
function Gg(r) {
  return Hg(r) === "function";
}
var qg = Gg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Wg = qg, Es = Wg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Yg = Object.getPrototypeOf, Jg = Yg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Xg(r) {
  return r.__proto__;
}
var Qg = Xg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Kg = z, r1 = Qg;
function e1(r) {
  var e = r1(r);
  return e || e === null ? e : Kg(r.constructor) === "[object Function]" ? r.constructor.prototype : r instanceof Object ? Object.prototype : null;
}
var t1 = e1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n1 = Es, i1 = Jg, a1 = t1, Ut;
n1(Object.getPrototypeOf) ? Ut = i1 : Ut = a1;
var o1 = Ut;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var s1 = In, u1 = o1;
function l1(r) {
  return r == null ? null : (r = s1(r), u1(r));
}
var f1 = l1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var c1 = f1, Ts = c1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d1 = Ts, h1 = z;
function v1(r) {
  if (typeof r != "object" || r === null)
    return !1;
  if (r instanceof Error)
    return !0;
  for (; r; ) {
    if (h1(r) === "[object Error]")
      return !0;
    r = d1(r);
  }
  return !1;
}
var m1 = v1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var y1 = m1, p1 = y1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function g1(r) {
  return typeof r == "string";
}
var Os = g1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $1 = String.prototype.valueOf, b1 = $1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var w1 = b1;
function S1(r) {
  try {
    return w1.call(r), !0;
  } catch {
    return !1;
  }
}
var E1 = S1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var T1 = rt, O1 = z, I1 = E1, x1 = T1();
function _1(r) {
  return typeof r == "object" ? r instanceof String ? !0 : x1 ? I1(r) : O1(r) === "[object String]" : !1;
}
var Is = _1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A1 = Os, C1 = Is;
function N1(r) {
  return A1(r) || C1(r);
}
var F1 = N1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xs = yr, An = F1, M1 = Os, k1 = Is;
xs(An, "isPrimitive", M1);
xs(An, "isObject", k1);
var Cn = An;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function D1() {
  return /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
}
var _s = D1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P1 = _s, L1 = P1(), U1 = L1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var R1 = yr, As = _s, j1 = U1;
R1(As, "REGEXP", j1);
var B1 = As;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var V1 = Cn.isPrimitive, z1 = B1, Z1 = wr;
function H1(r) {
  if (!V1(r))
    throw new TypeError(Z1("invalid argument. Must provide a regular expression string. Value: `%s`.", r));
  return r = z1().exec(r), r ? new RegExp(r[1], r[2]) : null;
}
var G1 = H1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var q1 = G1, W1 = q1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Y1(r) {
  return r !== r;
}
var J1 = Y1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var X1 = J1, Cs = X1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Q1 = tt.isPrimitive, K1 = Cs;
function r$(r) {
  return Q1(r) && K1(r);
}
var Ns = r$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var e$ = tt.isObject, t$ = Cs;
function n$(r) {
  return e$(r) && t$(r.valueOf());
}
var Fs = n$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var i$ = Ns, a$ = Fs;
function o$(r) {
  return i$(r) || a$(r);
}
var s$ = o$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ms = yr, Nn = s$, u$ = Ns, l$ = Fs;
Ms(Nn, "isPrimitive", u$);
Ms(Nn, "isObject", l$);
var ks = Nn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var f$ = 9007199254740991, c$ = f$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d$ = Sn, h$ = c$;
function v$(r) {
  return typeof r == "object" && r !== null && typeof r.length == "number" && d$(r.length) && r.length >= 0 && r.length <= h$;
}
var m$ = v$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var y$ = m$, p$ = y$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Yi = ks, g$ = p$, $$ = Cn.isPrimitive, b$ = nt.isPrimitive, Ji = wr;
function w$(r, e, n) {
  var t, i;
  if (!g$(r) && !$$(r))
    throw new TypeError(Ji("invalid argument. First argument must be an array-like object. Value: `%s`.", r));
  if (t = r.length, t === 0)
    return -1;
  if (arguments.length === 3) {
    if (!b$(n))
      throw new TypeError(Ji("invalid argument. Third argument must be an integer. Value: `%s`.", n));
    if (n >= 0) {
      if (n >= t)
        return -1;
      i = n;
    } else
      i = t + n, i < 0 && (i = 0);
  } else
    i = 0;
  if (Yi(e)) {
    for (; i < t; i++)
      if (Yi(r[i]))
        return i;
  } else
    for (; i < t; i++)
      if (r[i] === e)
        return i;
  return -1;
}
var S$ = w$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var E$ = S$, Ds = E$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function T$(r) {
  return Object.keys(Object(r));
}
var Fn = T$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var O$ = Fn;
function I$() {
  return (O$(arguments) || "").length !== 2;
}
function x$() {
  return I$(1, 2);
}
var _$ = x$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A$ = typeof Object.keys < "u", C$ = A$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var N$ = z;
function F$(r) {
  return N$(r) === "[object Arguments]";
}
var Ps = F$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var M$ = Ps, Ls;
function k$() {
  return M$(arguments);
}
Ls = k$();
var D$ = Ls;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P$ = Object.prototype.propertyIsEnumerable, Us = P$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var L$ = Us, Rs;
function U$() {
  return !L$.call("beep", "0");
}
Rs = U$();
var R$ = Rs;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var j$ = Cn, B$ = ks.isPrimitive, V$ = nt.isPrimitive, z$ = Us, Z$ = R$;
function H$(r, e) {
  var n;
  return r == null ? !1 : (n = z$.call(r, e), !n && Z$ && j$(r) ? (e = +e, !B$(e) && V$(e) && e >= 0 && e < r.length) : n);
}
var G$ = H$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var q$ = G$, Mn = q$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var W$ = 4294967295, js = W$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Y$ = Jr, J$ = Mn, X$ = et, Q$ = Sn, K$ = js;
function rb(r) {
  return r !== null && typeof r == "object" && !X$(r) && typeof r.length == "number" && Q$(r.length) && r.length >= 0 && r.length <= K$ && Y$(r, "callee") && !J$(r, "callee");
}
var eb = rb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tb = D$, nb = Ps, ib = eb, Rt;
tb ? Rt = nb : Rt = ib;
var Bs = Rt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ab = Bs, Xi = Fn, ob = Array.prototype.slice;
function sb(r) {
  return ab(r) ? Xi(ob.call(r)) : Xi(r);
}
var ub = sb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function lb() {
}
var fb = lb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cb = fb, db = cb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hb = Mn, vb = db, mb = hb(vb, "prototype"), yb = mb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pb = Mn, gb = {
  toString: null
}, $b = !pb(gb, "toString"), bb = $b;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function wb(r) {
  return r.constructor && r.constructor.prototype === r;
}
var Vs = wb;
const Sb = [
  "console",
  "external",
  "frame",
  "frameElement",
  "frames",
  "innerHeight",
  "innerWidth",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "scrollLeft",
  "scrollTop",
  "scrollX",
  "scrollY",
  "self",
  "webkitIndexedDB",
  "webkitStorageInfo",
  "window"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Eb = typeof window > "u" ? void 0 : window, Tb = Eb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ob = Jr, Ib = Ds, Qi = _n, xb = Vs, _b = Sb, Dr = Tb, zs;
function Ab() {
  var r;
  if (Qi(Dr) === "undefined")
    return !1;
  for (r in Dr)
    try {
      Ib(_b, r) === -1 && Ob(Dr, r) && Dr[r] !== null && Qi(Dr[r]) === "object" && xb(Dr[r]);
    } catch {
      return !0;
    }
  return !1;
}
zs = Ab();
var Cb = zs;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nb = typeof window < "u", Fb = Nb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Mb = Cb, Ki = Vs, kb = Fb;
function Db(r) {
  if (kb === !1 && !Mb)
    return Ki(r);
  try {
    return Ki(r);
  } catch {
    return !1;
  }
}
var Pb = Db;
const Lb = [
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "constructor"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ub = ys, bt = Jr, Rb = Bs, jb = yb, Bb = bb, Vb = Pb, ra = Lb;
function zb(r) {
  var e, n, t, i, a, l, u;
  if (i = [], Rb(r)) {
    for (u = 0; u < r.length; u++)
      i.push(u.toString());
    return i;
  }
  if (typeof r == "string") {
    if (r.length > 0 && !bt(r, "0"))
      for (u = 0; u < r.length; u++)
        i.push(u.toString());
  } else {
    if (t = typeof r == "function", t === !1 && !Ub(r))
      return i;
    n = jb && t;
  }
  for (a in r)
    !(n && a === "prototype") && bt(r, a) && i.push(String(a));
  if (Bb)
    for (e = Vb(r), u = 0; u < ra.length; u++)
      l = ra[u], !(e && l === "constructor") && bt(r, l) && i.push(String(l));
  return i;
}
var Zb = zb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hb = _$, Gb = C$, qb = Fn, Wb = ub, Yb = Zb, De;
Gb ? Hb() ? De = Wb : De = qb : De = Yb;
var Jb = De;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Xb = Jb, Zs = Xb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Qb = typeof Object.getOwnPropertyNames < "u", Kb = Qb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hs = In, rw = Hs.getOwnPropertyNames;
function ew(r) {
  return rw(Hs(r));
}
var tw = ew;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nw = In, iw = Zs;
function aw(r) {
  return iw(nw(r));
}
var ow = aw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sw = Kb, uw = tw, lw = ow, jt;
sw ? jt = uw : jt = lw;
var fw = jt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cw = typeof Object.getOwnPropertyDescriptor < "u", dw = cw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hw = Object.getOwnPropertyDescriptor;
function vw(r, e) {
  var n;
  return r == null ? null : (n = hw(r, e), n === void 0 ? null : n);
}
var mw = vw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yw = Jr;
function pw(r, e) {
  return yw(r, e) ? {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r[e]
  } : null;
}
var gw = pw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $w = dw, bw = mw, ww = gw, Bt;
$w ? Bt = bw : Bt = ww;
var Sw = Bt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ew = typeof Buffer == "function" ? Buffer : null, Tw = Ew;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ow = ge, Ce = Tw;
function Iw() {
  var r, e;
  if (typeof Ce != "function")
    return !1;
  try {
    typeof Ce.from == "function" ? e = Ce.from([1, 2, 3, 4]) : e = new Ce([1, 2, 3, 4]), r = Ow(e) && e[0] === 1 && e[1] === 2 && e[2] === 3 && e[3] === 4;
  } catch {
    r = !1;
  }
  return r;
}
var xw = Iw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _w = xw, Aw = _w, Gs = {}, it = {};
it.byteLength = Fw;
it.toByteArray = kw;
it.fromByteArray = Lw;
var fr = [], Q = [], Cw = typeof Uint8Array < "u" ? Uint8Array : Array, wt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Pr = 0, Nw = wt.length; Pr < Nw; ++Pr)
  fr[Pr] = wt[Pr], Q[wt.charCodeAt(Pr)] = Pr;
Q["-".charCodeAt(0)] = 62;
Q["_".charCodeAt(0)] = 63;
function qs(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var t = n === e ? 0 : 4 - n % 4;
  return [n, t];
}
function Fw(r) {
  var e = qs(r), n = e[0], t = e[1];
  return (n + t) * 3 / 4 - t;
}
function Mw(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function kw(r) {
  var e, n = qs(r), t = n[0], i = n[1], a = new Cw(Mw(r, t, i)), l = 0, u = i > 0 ? t - 4 : t, d;
  for (d = 0; d < u; d += 4)
    e = Q[r.charCodeAt(d)] << 18 | Q[r.charCodeAt(d + 1)] << 12 | Q[r.charCodeAt(d + 2)] << 6 | Q[r.charCodeAt(d + 3)], a[l++] = e >> 16 & 255, a[l++] = e >> 8 & 255, a[l++] = e & 255;
  return i === 2 && (e = Q[r.charCodeAt(d)] << 2 | Q[r.charCodeAt(d + 1)] >> 4, a[l++] = e & 255), i === 1 && (e = Q[r.charCodeAt(d)] << 10 | Q[r.charCodeAt(d + 1)] << 4 | Q[r.charCodeAt(d + 2)] >> 2, a[l++] = e >> 8 & 255, a[l++] = e & 255), a;
}
function Dw(r) {
  return fr[r >> 18 & 63] + fr[r >> 12 & 63] + fr[r >> 6 & 63] + fr[r & 63];
}
function Pw(r, e, n) {
  for (var t, i = [], a = e; a < n; a += 3)
    t = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (r[a + 2] & 255), i.push(Dw(t));
  return i.join("");
}
function Lw(r) {
  for (var e, n = r.length, t = n % 3, i = [], a = 16383, l = 0, u = n - t; l < u; l += a)
    i.push(Pw(r, l, l + a > u ? u : l + a));
  return t === 1 ? (e = r[n - 1], i.push(
    fr[e >> 2] + fr[e << 4 & 63] + "=="
  )) : t === 2 && (e = (r[n - 2] << 8) + r[n - 1], i.push(
    fr[e >> 10] + fr[e >> 4 & 63] + fr[e << 2 & 63] + "="
  )), i.join("");
}
var kn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
kn.read = function(r, e, n, t, i) {
  var a, l, u = i * 8 - t - 1, d = (1 << u) - 1, v = d >> 1, p = -7, y = n ? i - 1 : 0, g = n ? -1 : 1, b = r[e + y];
  for (y += g, a = b & (1 << -p) - 1, b >>= -p, p += u; p > 0; a = a * 256 + r[e + y], y += g, p -= 8)
    ;
  for (l = a & (1 << -p) - 1, a >>= -p, p += t; p > 0; l = l * 256 + r[e + y], y += g, p -= 8)
    ;
  if (a === 0)
    a = 1 - v;
  else {
    if (a === d)
      return l ? NaN : (b ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, t), a = a - v;
  }
  return (b ? -1 : 1) * l * Math.pow(2, a - t);
};
kn.write = function(r, e, n, t, i, a) {
  var l, u, d, v = a * 8 - i - 1, p = (1 << v) - 1, y = p >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = t ? 0 : a - 1, S = t ? 1 : -1, T = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, l = p) : (l = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -l)) < 1 && (l--, d *= 2), l + y >= 1 ? e += g / d : e += g * Math.pow(2, 1 - y), e * d >= 2 && (l++, d /= 2), l + y >= p ? (u = 0, l = p) : l + y >= 1 ? (u = (e * d - 1) * Math.pow(2, i), l = l + y) : (u = e * Math.pow(2, y - 1) * Math.pow(2, i), l = 0)); i >= 8; r[n + b] = u & 255, b += S, u /= 256, i -= 8)
    ;
  for (l = l << i | u, v += i; v > 0; r[n + b] = l & 255, b += S, l /= 256, v -= 8)
    ;
  r[n + b - S] |= T * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const e = it, n = kn, t = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = u, r.SlowBuffer = L, r.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  r.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = a(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      const f = new Uint8Array(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(f, o), f.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function l(f) {
    if (f > i)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
    const o = new Uint8Array(f);
    return Object.setPrototypeOf(o, u.prototype), o;
  }
  function u(f, o, s) {
    if (typeof f == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(f);
    }
    return d(f, o, s);
  }
  u.poolSize = 8192;
  function d(f, o, s) {
    if (typeof f == "string")
      return g(f, o);
    if (ArrayBuffer.isView(f))
      return S(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (ur(f, ArrayBuffer) || f && ur(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ur(f, SharedArrayBuffer) || f && ur(f.buffer, SharedArrayBuffer)))
      return T(f, o, s);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const c = f.valueOf && f.valueOf();
    if (c != null && c !== f)
      return u.from(c, o, s);
    const h = O(f);
    if (h)
      return h;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
      return u.from(f[Symbol.toPrimitive]("string"), o, s);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
    );
  }
  u.from = function(f, o, s) {
    return d(f, o, s);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function v(f) {
    if (typeof f != "number")
      throw new TypeError('"size" argument must be of type number');
    if (f < 0)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function p(f, o, s) {
    return v(f), f <= 0 ? l(f) : o !== void 0 ? typeof s == "string" ? l(f).fill(o, s) : l(f).fill(o) : l(f);
  }
  u.alloc = function(f, o, s) {
    return p(f, o, s);
  };
  function y(f) {
    return v(f), l(f < 0 ? 0 : E(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return y(f);
  }, u.allocUnsafeSlow = function(f) {
    return y(f);
  };
  function g(f, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !u.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const s = pr(f, o) | 0;
    let c = l(s);
    const h = c.write(f, o);
    return h !== s && (c = c.slice(0, h)), c;
  }
  function b(f) {
    const o = f.length < 0 ? 0 : E(f.length) | 0, s = l(o);
    for (let c = 0; c < o; c += 1)
      s[c] = f[c] & 255;
    return s;
  }
  function S(f) {
    if (ur(f, Uint8Array)) {
      const o = new Uint8Array(f);
      return T(o.buffer, o.byteOffset, o.byteLength);
    }
    return b(f);
  }
  function T(f, o, s) {
    if (o < 0 || f.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < o + (s || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let c;
    return o === void 0 && s === void 0 ? c = new Uint8Array(f) : s === void 0 ? c = new Uint8Array(f, o) : c = new Uint8Array(f, o, s), Object.setPrototypeOf(c, u.prototype), c;
  }
  function O(f) {
    if (u.isBuffer(f)) {
      const o = E(f.length) | 0, s = l(o);
      return s.length === 0 || f.copy(s, 0, 0, o), s;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || vt(f.length) ? l(0) : b(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return b(f.data);
  }
  function E(f) {
    if (f >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return f | 0;
  }
  function L(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== u.prototype;
  }, u.compare = function(o, s) {
    if (ur(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)), ur(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(o) || !u.isBuffer(s))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === s)
      return 0;
    let c = o.length, h = s.length;
    for (let m = 0, $ = Math.min(c, h); m < $; ++m)
      if (o[m] !== s[m]) {
        c = o[m], h = s[m];
        break;
      }
    return c < h ? -1 : h < c ? 1 : 0;
  }, u.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(o, s) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return u.alloc(0);
    let c;
    if (s === void 0)
      for (s = 0, c = 0; c < o.length; ++c)
        s += o[c].length;
    const h = u.allocUnsafe(s);
    let m = 0;
    for (c = 0; c < o.length; ++c) {
      let $ = o[c];
      if (ur($, Uint8Array))
        m + $.length > h.length ? (u.isBuffer($) || ($ = u.from($)), $.copy(h, m)) : Uint8Array.prototype.set.call(
          h,
          $,
          m
        );
      else if (u.isBuffer($))
        $.copy(h, m);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      m += $.length;
    }
    return h;
  };
  function pr(f, o) {
    if (u.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || ur(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
      );
    const s = f.length, c = arguments.length > 2 && arguments[2] === !0;
    if (!c && s === 0)
      return 0;
    let h = !1;
    for (; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return s;
        case "utf8":
        case "utf-8":
          return ht(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return s * 2;
        case "hex":
          return s >>> 1;
        case "base64":
          return $i(f).length;
        default:
          if (h)
            return c ? -1 : ht(f).length;
          o = ("" + o).toLowerCase(), h = !0;
      }
  }
  u.byteLength = pr;
  function vr(f, o, s) {
    let c = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((s === void 0 || s > this.length) && (s = this.length), s <= 0) || (s >>>= 0, o >>>= 0, s <= o))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return rl(this, o, s);
        case "utf8":
        case "utf-8":
          return fi(this, o, s);
        case "ascii":
          return Qu(this, o, s);
        case "latin1":
        case "binary":
          return Ku(this, o, s);
        case "base64":
          return te(this, o, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return el(this, o, s);
        default:
          if (c)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), c = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function Z(f, o, s) {
    const c = f[o];
    f[o] = f[s], f[s] = c;
  }
  u.prototype.swap16 = function() {
    const o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let s = 0; s < o; s += 2)
      Z(this, s, s + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let s = 0; s < o; s += 4)
      Z(this, s, s + 3), Z(this, s + 1, s + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let s = 0; s < o; s += 8)
      Z(this, s, s + 7), Z(this, s + 1, s + 6), Z(this, s + 2, s + 5), Z(this, s + 3, s + 4);
    return this;
  }, u.prototype.toString = function() {
    const o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? fi(this, 0, o) : vr.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(o) {
    if (!u.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : u.compare(this, o) === 0;
  }, u.prototype.inspect = function() {
    let o = "";
    const s = r.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim(), this.length > s && (o += " ... "), "<Buffer " + o + ">";
  }, t && (u.prototype[t] = u.prototype.inspect), u.prototype.compare = function(o, s, c, h, m) {
    if (ur(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)), !u.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (s === void 0 && (s = 0), c === void 0 && (c = o ? o.length : 0), h === void 0 && (h = 0), m === void 0 && (m = this.length), s < 0 || c > o.length || h < 0 || m > this.length)
      throw new RangeError("out of range index");
    if (h >= m && s >= c)
      return 0;
    if (h >= m)
      return -1;
    if (s >= c)
      return 1;
    if (s >>>= 0, c >>>= 0, h >>>= 0, m >>>= 0, this === o)
      return 0;
    let $ = m - h, I = c - s;
    const D = Math.min($, I), M = this.slice(h, m), P = o.slice(s, c);
    for (let N = 0; N < D; ++N)
      if (M[N] !== P[N]) {
        $ = M[N], I = P[N];
        break;
      }
    return $ < I ? -1 : I < $ ? 1 : 0;
  };
  function we(f, o, s, c, h) {
    if (f.length === 0)
      return -1;
    if (typeof s == "string" ? (c = s, s = 0) : s > 2147483647 ? s = 2147483647 : s < -2147483648 && (s = -2147483648), s = +s, vt(s) && (s = h ? 0 : f.length - 1), s < 0 && (s = f.length + s), s >= f.length) {
      if (h)
        return -1;
      s = f.length - 1;
    } else if (s < 0)
      if (h)
        s = 0;
      else
        return -1;
    if (typeof o == "string" && (o = u.from(o, c)), u.isBuffer(o))
      return o.length === 0 ? -1 : Se(f, o, s, c, h);
    if (typeof o == "number")
      return o = o & 255, typeof Uint8Array.prototype.indexOf == "function" ? h ? Uint8Array.prototype.indexOf.call(f, o, s) : Uint8Array.prototype.lastIndexOf.call(f, o, s) : Se(f, [o], s, c, h);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Se(f, o, s, c, h) {
    let m = 1, $ = f.length, I = o.length;
    if (c !== void 0 && (c = String(c).toLowerCase(), c === "ucs2" || c === "ucs-2" || c === "utf16le" || c === "utf-16le")) {
      if (f.length < 2 || o.length < 2)
        return -1;
      m = 2, $ /= 2, I /= 2, s /= 2;
    }
    function D(P, N) {
      return m === 1 ? P[N] : P.readUInt16BE(N * m);
    }
    let M;
    if (h) {
      let P = -1;
      for (M = s; M < $; M++)
        if (D(f, M) === D(o, P === -1 ? 0 : M - P)) {
          if (P === -1 && (P = M), M - P + 1 === I)
            return P * m;
        } else
          P !== -1 && (M -= M - P), P = -1;
    } else
      for (s + I > $ && (s = $ - I), M = s; M >= 0; M--) {
        let P = !0;
        for (let N = 0; N < I; N++)
          if (D(f, M + N) !== D(o, N)) {
            P = !1;
            break;
          }
        if (P)
          return M;
      }
    return -1;
  }
  u.prototype.includes = function(o, s, c) {
    return this.indexOf(o, s, c) !== -1;
  }, u.prototype.indexOf = function(o, s, c) {
    return we(this, o, s, c, !0);
  }, u.prototype.lastIndexOf = function(o, s, c) {
    return we(this, o, s, c, !1);
  };
  function Ee(f, o, s, c) {
    s = Number(s) || 0;
    const h = f.length - s;
    c ? (c = Number(c), c > h && (c = h)) : c = h;
    const m = o.length;
    c > m / 2 && (c = m / 2);
    let $;
    for ($ = 0; $ < c; ++$) {
      const I = parseInt(o.substr($ * 2, 2), 16);
      if (vt(I))
        return $;
      f[s + $] = I;
    }
    return $;
  }
  function lt(f, o, s, c) {
    return Oe(ht(o, f.length - s), f, s, c);
  }
  function Te(f, o, s, c) {
    return Oe(al(o), f, s, c);
  }
  function ft(f, o, s, c) {
    return Oe($i(o), f, s, c);
  }
  function ct(f, o, s, c) {
    return Oe(ol(o, f.length - s), f, s, c);
  }
  u.prototype.write = function(o, s, c, h) {
    if (s === void 0)
      h = "utf8", c = this.length, s = 0;
    else if (c === void 0 && typeof s == "string")
      h = s, c = this.length, s = 0;
    else if (isFinite(s))
      s = s >>> 0, isFinite(c) ? (c = c >>> 0, h === void 0 && (h = "utf8")) : (h = c, c = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const m = this.length - s;
    if ((c === void 0 || c > m) && (c = m), o.length > 0 && (c < 0 || s < 0) || s > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    h || (h = "utf8");
    let $ = !1;
    for (; ; )
      switch (h) {
        case "hex":
          return Ee(this, o, s, c);
        case "utf8":
        case "utf-8":
          return lt(this, o, s, c);
        case "ascii":
        case "latin1":
        case "binary":
          return Te(this, o, s, c);
        case "base64":
          return ft(this, o, s, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ct(this, o, s, c);
        default:
          if ($)
            throw new TypeError("Unknown encoding: " + h);
          h = ("" + h).toLowerCase(), $ = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function te(f, o, s) {
    return o === 0 && s === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(o, s));
  }
  function fi(f, o, s) {
    s = Math.min(f.length, s);
    const c = [];
    let h = o;
    for (; h < s; ) {
      const m = f[h];
      let $ = null, I = m > 239 ? 4 : m > 223 ? 3 : m > 191 ? 2 : 1;
      if (h + I <= s) {
        let D, M, P, N;
        switch (I) {
          case 1:
            m < 128 && ($ = m);
            break;
          case 2:
            D = f[h + 1], (D & 192) === 128 && (N = (m & 31) << 6 | D & 63, N > 127 && ($ = N));
            break;
          case 3:
            D = f[h + 1], M = f[h + 2], (D & 192) === 128 && (M & 192) === 128 && (N = (m & 15) << 12 | (D & 63) << 6 | M & 63, N > 2047 && (N < 55296 || N > 57343) && ($ = N));
            break;
          case 4:
            D = f[h + 1], M = f[h + 2], P = f[h + 3], (D & 192) === 128 && (M & 192) === 128 && (P & 192) === 128 && (N = (m & 15) << 18 | (D & 63) << 12 | (M & 63) << 6 | P & 63, N > 65535 && N < 1114112 && ($ = N));
        }
      }
      $ === null ? ($ = 65533, I = 1) : $ > 65535 && ($ -= 65536, c.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), c.push($), h += I;
    }
    return Xu(c);
  }
  const ci = 4096;
  function Xu(f) {
    const o = f.length;
    if (o <= ci)
      return String.fromCharCode.apply(String, f);
    let s = "", c = 0;
    for (; c < o; )
      s += String.fromCharCode.apply(
        String,
        f.slice(c, c += ci)
      );
    return s;
  }
  function Qu(f, o, s) {
    let c = "";
    s = Math.min(f.length, s);
    for (let h = o; h < s; ++h)
      c += String.fromCharCode(f[h] & 127);
    return c;
  }
  function Ku(f, o, s) {
    let c = "";
    s = Math.min(f.length, s);
    for (let h = o; h < s; ++h)
      c += String.fromCharCode(f[h]);
    return c;
  }
  function rl(f, o, s) {
    const c = f.length;
    (!o || o < 0) && (o = 0), (!s || s < 0 || s > c) && (s = c);
    let h = "";
    for (let m = o; m < s; ++m)
      h += sl[f[m]];
    return h;
  }
  function el(f, o, s) {
    const c = f.slice(o, s);
    let h = "";
    for (let m = 0; m < c.length - 1; m += 2)
      h += String.fromCharCode(c[m] + c[m + 1] * 256);
    return h;
  }
  u.prototype.slice = function(o, s) {
    const c = this.length;
    o = ~~o, s = s === void 0 ? c : ~~s, o < 0 ? (o += c, o < 0 && (o = 0)) : o > c && (o = c), s < 0 ? (s += c, s < 0 && (s = 0)) : s > c && (s = c), s < o && (s = o);
    const h = this.subarray(o, s);
    return Object.setPrototypeOf(h, u.prototype), h;
  };
  function j(f, o, s) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + o > s)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(o, s, c) {
    o = o >>> 0, s = s >>> 0, c || j(o, s, this.length);
    let h = this[o], m = 1, $ = 0;
    for (; ++$ < s && (m *= 256); )
      h += this[o + $] * m;
    return h;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(o, s, c) {
    o = o >>> 0, s = s >>> 0, c || j(o, s, this.length);
    let h = this[o + --s], m = 1;
    for (; s > 0 && (m *= 256); )
      h += this[o + --s] * m;
    return h;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(o, s) {
    return o = o >>> 0, s || j(o, 1, this.length), this[o];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(o, s) {
    return o = o >>> 0, s || j(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(o, s) {
    return o = o >>> 0, s || j(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(o, s) {
    return o = o >>> 0, s || j(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(o, s) {
    return o = o >>> 0, s || j(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, u.prototype.readBigUInt64LE = gr(function(o) {
    o = o >>> 0, kr(o, "offset");
    const s = this[o], c = this[o + 7];
    (s === void 0 || c === void 0) && ne(o, this.length - 8);
    const h = s + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, m = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + c * 2 ** 24;
    return BigInt(h) + (BigInt(m) << BigInt(32));
  }), u.prototype.readBigUInt64BE = gr(function(o) {
    o = o >>> 0, kr(o, "offset");
    const s = this[o], c = this[o + 7];
    (s === void 0 || c === void 0) && ne(o, this.length - 8);
    const h = s * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], m = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + c;
    return (BigInt(h) << BigInt(32)) + BigInt(m);
  }), u.prototype.readIntLE = function(o, s, c) {
    o = o >>> 0, s = s >>> 0, c || j(o, s, this.length);
    let h = this[o], m = 1, $ = 0;
    for (; ++$ < s && (m *= 256); )
      h += this[o + $] * m;
    return m *= 128, h >= m && (h -= Math.pow(2, 8 * s)), h;
  }, u.prototype.readIntBE = function(o, s, c) {
    o = o >>> 0, s = s >>> 0, c || j(o, s, this.length);
    let h = s, m = 1, $ = this[o + --h];
    for (; h > 0 && (m *= 256); )
      $ += this[o + --h] * m;
    return m *= 128, $ >= m && ($ -= Math.pow(2, 8 * s)), $;
  }, u.prototype.readInt8 = function(o, s) {
    return o = o >>> 0, s || j(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, u.prototype.readInt16LE = function(o, s) {
    o = o >>> 0, s || j(o, 2, this.length);
    const c = this[o] | this[o + 1] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, u.prototype.readInt16BE = function(o, s) {
    o = o >>> 0, s || j(o, 2, this.length);
    const c = this[o + 1] | this[o] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, u.prototype.readInt32LE = function(o, s) {
    return o = o >>> 0, s || j(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, u.prototype.readInt32BE = function(o, s) {
    return o = o >>> 0, s || j(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, u.prototype.readBigInt64LE = gr(function(o) {
    o = o >>> 0, kr(o, "offset");
    const s = this[o], c = this[o + 7];
    (s === void 0 || c === void 0) && ne(o, this.length - 8);
    const h = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (c << 24);
    return (BigInt(h) << BigInt(32)) + BigInt(s + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), u.prototype.readBigInt64BE = gr(function(o) {
    o = o >>> 0, kr(o, "offset");
    const s = this[o], c = this[o + 7];
    (s === void 0 || c === void 0) && ne(o, this.length - 8);
    const h = (s << 24) + // Overflow
    this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(h) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + c);
  }), u.prototype.readFloatLE = function(o, s) {
    return o = o >>> 0, s || j(o, 4, this.length), n.read(this, o, !0, 23, 4);
  }, u.prototype.readFloatBE = function(o, s) {
    return o = o >>> 0, s || j(o, 4, this.length), n.read(this, o, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(o, s) {
    return o = o >>> 0, s || j(o, 8, this.length), n.read(this, o, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(o, s) {
    return o = o >>> 0, s || j(o, 8, this.length), n.read(this, o, !1, 52, 8);
  };
  function q(f, o, s, c, h, m) {
    if (!u.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > h || o < m)
      throw new RangeError('"value" argument is out of bounds');
    if (s + c > f.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(o, s, c, h) {
    if (o = +o, s = s >>> 0, c = c >>> 0, !h) {
      const I = Math.pow(2, 8 * c) - 1;
      q(this, o, s, c, I, 0);
    }
    let m = 1, $ = 0;
    for (this[s] = o & 255; ++$ < c && (m *= 256); )
      this[s + $] = o / m & 255;
    return s + c;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(o, s, c, h) {
    if (o = +o, s = s >>> 0, c = c >>> 0, !h) {
      const I = Math.pow(2, 8 * c) - 1;
      q(this, o, s, c, I, 0);
    }
    let m = c - 1, $ = 1;
    for (this[s + m] = o & 255; --m >= 0 && ($ *= 256); )
      this[s + m] = o / $ & 255;
    return s + c;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 1, 255, 0), this[s] = o & 255, s + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 2, 65535, 0), this[s] = o & 255, this[s + 1] = o >>> 8, s + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 2, 65535, 0), this[s] = o >>> 8, this[s + 1] = o & 255, s + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 4, 4294967295, 0), this[s + 3] = o >>> 24, this[s + 2] = o >>> 16, this[s + 1] = o >>> 8, this[s] = o & 255, s + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 4, 4294967295, 0), this[s] = o >>> 24, this[s + 1] = o >>> 16, this[s + 2] = o >>> 8, this[s + 3] = o & 255, s + 4;
  };
  function di(f, o, s, c, h) {
    gi(o, c, h, f, s, 7);
    let m = Number(o & BigInt(4294967295));
    f[s++] = m, m = m >> 8, f[s++] = m, m = m >> 8, f[s++] = m, m = m >> 8, f[s++] = m;
    let $ = Number(o >> BigInt(32) & BigInt(4294967295));
    return f[s++] = $, $ = $ >> 8, f[s++] = $, $ = $ >> 8, f[s++] = $, $ = $ >> 8, f[s++] = $, s;
  }
  function hi(f, o, s, c, h) {
    gi(o, c, h, f, s, 7);
    let m = Number(o & BigInt(4294967295));
    f[s + 7] = m, m = m >> 8, f[s + 6] = m, m = m >> 8, f[s + 5] = m, m = m >> 8, f[s + 4] = m;
    let $ = Number(o >> BigInt(32) & BigInt(4294967295));
    return f[s + 3] = $, $ = $ >> 8, f[s + 2] = $, $ = $ >> 8, f[s + 1] = $, $ = $ >> 8, f[s] = $, s + 8;
  }
  u.prototype.writeBigUInt64LE = gr(function(o, s = 0) {
    return di(this, o, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = gr(function(o, s = 0) {
    return hi(this, o, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(o, s, c, h) {
    if (o = +o, s = s >>> 0, !h) {
      const D = Math.pow(2, 8 * c - 1);
      q(this, o, s, c, D - 1, -D);
    }
    let m = 0, $ = 1, I = 0;
    for (this[s] = o & 255; ++m < c && ($ *= 256); )
      o < 0 && I === 0 && this[s + m - 1] !== 0 && (I = 1), this[s + m] = (o / $ >> 0) - I & 255;
    return s + c;
  }, u.prototype.writeIntBE = function(o, s, c, h) {
    if (o = +o, s = s >>> 0, !h) {
      const D = Math.pow(2, 8 * c - 1);
      q(this, o, s, c, D - 1, -D);
    }
    let m = c - 1, $ = 1, I = 0;
    for (this[s + m] = o & 255; --m >= 0 && ($ *= 256); )
      o < 0 && I === 0 && this[s + m + 1] !== 0 && (I = 1), this[s + m] = (o / $ >> 0) - I & 255;
    return s + c;
  }, u.prototype.writeInt8 = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[s] = o & 255, s + 1;
  }, u.prototype.writeInt16LE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 2, 32767, -32768), this[s] = o & 255, this[s + 1] = o >>> 8, s + 2;
  }, u.prototype.writeInt16BE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 2, 32767, -32768), this[s] = o >>> 8, this[s + 1] = o & 255, s + 2;
  }, u.prototype.writeInt32LE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 4, 2147483647, -2147483648), this[s] = o & 255, this[s + 1] = o >>> 8, this[s + 2] = o >>> 16, this[s + 3] = o >>> 24, s + 4;
  }, u.prototype.writeInt32BE = function(o, s, c) {
    return o = +o, s = s >>> 0, c || q(this, o, s, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[s] = o >>> 24, this[s + 1] = o >>> 16, this[s + 2] = o >>> 8, this[s + 3] = o & 255, s + 4;
  }, u.prototype.writeBigInt64LE = gr(function(o, s = 0) {
    return di(this, o, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = gr(function(o, s = 0) {
    return hi(this, o, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function vi(f, o, s, c, h, m) {
    if (s + c > f.length)
      throw new RangeError("Index out of range");
    if (s < 0)
      throw new RangeError("Index out of range");
  }
  function mi(f, o, s, c, h) {
    return o = +o, s = s >>> 0, h || vi(f, o, s, 4), n.write(f, o, s, c, 23, 4), s + 4;
  }
  u.prototype.writeFloatLE = function(o, s, c) {
    return mi(this, o, s, !0, c);
  }, u.prototype.writeFloatBE = function(o, s, c) {
    return mi(this, o, s, !1, c);
  };
  function yi(f, o, s, c, h) {
    return o = +o, s = s >>> 0, h || vi(f, o, s, 8), n.write(f, o, s, c, 52, 8), s + 8;
  }
  u.prototype.writeDoubleLE = function(o, s, c) {
    return yi(this, o, s, !0, c);
  }, u.prototype.writeDoubleBE = function(o, s, c) {
    return yi(this, o, s, !1, c);
  }, u.prototype.copy = function(o, s, c, h) {
    if (!u.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (c || (c = 0), !h && h !== 0 && (h = this.length), s >= o.length && (s = o.length), s || (s = 0), h > 0 && h < c && (h = c), h === c || o.length === 0 || this.length === 0)
      return 0;
    if (s < 0)
      throw new RangeError("targetStart out of bounds");
    if (c < 0 || c >= this.length)
      throw new RangeError("Index out of range");
    if (h < 0)
      throw new RangeError("sourceEnd out of bounds");
    h > this.length && (h = this.length), o.length - s < h - c && (h = o.length - s + c);
    const m = h - c;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(s, c, h) : Uint8Array.prototype.set.call(
      o,
      this.subarray(c, h),
      s
    ), m;
  }, u.prototype.fill = function(o, s, c, h) {
    if (typeof o == "string") {
      if (typeof s == "string" ? (h = s, s = 0, c = this.length) : typeof c == "string" && (h = c, c = this.length), h !== void 0 && typeof h != "string")
        throw new TypeError("encoding must be a string");
      if (typeof h == "string" && !u.isEncoding(h))
        throw new TypeError("Unknown encoding: " + h);
      if (o.length === 1) {
        const $ = o.charCodeAt(0);
        (h === "utf8" && $ < 128 || h === "latin1") && (o = $);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (s < 0 || this.length < s || this.length < c)
      throw new RangeError("Out of range index");
    if (c <= s)
      return this;
    s = s >>> 0, c = c === void 0 ? this.length : c >>> 0, o || (o = 0);
    let m;
    if (typeof o == "number")
      for (m = s; m < c; ++m)
        this[m] = o;
    else {
      const $ = u.isBuffer(o) ? o : u.from(o, h), I = $.length;
      if (I === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (m = 0; m < c - s; ++m)
        this[m + s] = $[m % I];
    }
    return this;
  };
  const Mr = {};
  function dt(f, o, s) {
    Mr[f] = class extends s {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
      }
      get code() {
        return f;
      }
      set code(h) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: h,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${f}]: ${this.message}`;
      }
    };
  }
  dt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(f) {
      return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), dt(
    "ERR_INVALID_ARG_TYPE",
    function(f, o) {
      return `The "${f}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), dt(
    "ERR_OUT_OF_RANGE",
    function(f, o, s) {
      let c = `The value of "${f}" is out of range.`, h = s;
      return Number.isInteger(s) && Math.abs(s) > 2 ** 32 ? h = pi(String(s)) : typeof s == "bigint" && (h = String(s), (s > BigInt(2) ** BigInt(32) || s < -(BigInt(2) ** BigInt(32))) && (h = pi(h)), h += "n"), c += ` It must be ${o}. Received ${h}`, c;
    },
    RangeError
  );
  function pi(f) {
    let o = "", s = f.length;
    const c = f[0] === "-" ? 1 : 0;
    for (; s >= c + 4; s -= 3)
      o = `_${f.slice(s - 3, s)}${o}`;
    return `${f.slice(0, s)}${o}`;
  }
  function tl(f, o, s) {
    kr(o, "offset"), (f[o] === void 0 || f[o + s] === void 0) && ne(o, f.length - (s + 1));
  }
  function gi(f, o, s, c, h, m) {
    if (f > s || f < o) {
      const $ = typeof o == "bigint" ? "n" : "";
      let I;
      throw m > 3 ? o === 0 || o === BigInt(0) ? I = `>= 0${$} and < 2${$} ** ${(m + 1) * 8}${$}` : I = `>= -(2${$} ** ${(m + 1) * 8 - 1}${$}) and < 2 ** ${(m + 1) * 8 - 1}${$}` : I = `>= ${o}${$} and <= ${s}${$}`, new Mr.ERR_OUT_OF_RANGE("value", I, f);
    }
    tl(c, h, m);
  }
  function kr(f, o) {
    if (typeof f != "number")
      throw new Mr.ERR_INVALID_ARG_TYPE(o, "number", f);
  }
  function ne(f, o, s) {
    throw Math.floor(f) !== f ? (kr(f, s), new Mr.ERR_OUT_OF_RANGE(s || "offset", "an integer", f)) : o < 0 ? new Mr.ERR_BUFFER_OUT_OF_BOUNDS() : new Mr.ERR_OUT_OF_RANGE(
      s || "offset",
      `>= ${s ? 1 : 0} and <= ${o}`,
      f
    );
  }
  const nl = /[^+/0-9A-Za-z-_]/g;
  function il(f) {
    if (f = f.split("=")[0], f = f.trim().replace(nl, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function ht(f, o) {
    o = o || 1 / 0;
    let s;
    const c = f.length;
    let h = null;
    const m = [];
    for (let $ = 0; $ < c; ++$) {
      if (s = f.charCodeAt($), s > 55295 && s < 57344) {
        if (!h) {
          if (s > 56319) {
            (o -= 3) > -1 && m.push(239, 191, 189);
            continue;
          } else if ($ + 1 === c) {
            (o -= 3) > -1 && m.push(239, 191, 189);
            continue;
          }
          h = s;
          continue;
        }
        if (s < 56320) {
          (o -= 3) > -1 && m.push(239, 191, 189), h = s;
          continue;
        }
        s = (h - 55296 << 10 | s - 56320) + 65536;
      } else
        h && (o -= 3) > -1 && m.push(239, 191, 189);
      if (h = null, s < 128) {
        if ((o -= 1) < 0)
          break;
        m.push(s);
      } else if (s < 2048) {
        if ((o -= 2) < 0)
          break;
        m.push(
          s >> 6 | 192,
          s & 63 | 128
        );
      } else if (s < 65536) {
        if ((o -= 3) < 0)
          break;
        m.push(
          s >> 12 | 224,
          s >> 6 & 63 | 128,
          s & 63 | 128
        );
      } else if (s < 1114112) {
        if ((o -= 4) < 0)
          break;
        m.push(
          s >> 18 | 240,
          s >> 12 & 63 | 128,
          s >> 6 & 63 | 128,
          s & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return m;
  }
  function al(f) {
    const o = [];
    for (let s = 0; s < f.length; ++s)
      o.push(f.charCodeAt(s) & 255);
    return o;
  }
  function ol(f, o) {
    let s, c, h;
    const m = [];
    for (let $ = 0; $ < f.length && !((o -= 2) < 0); ++$)
      s = f.charCodeAt($), c = s >> 8, h = s % 256, m.push(h), m.push(c);
    return m;
  }
  function $i(f) {
    return e.toByteArray(il(f));
  }
  function Oe(f, o, s, c) {
    let h;
    for (h = 0; h < c && !(h + s >= o.length || h >= f.length); ++h)
      o[h + s] = f[h];
    return h;
  }
  function ur(f, o) {
    return f instanceof o || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === o.name;
  }
  function vt(f) {
    return f !== f;
  }
  const sl = function() {
    const f = "0123456789abcdef", o = new Array(256);
    for (let s = 0; s < 16; ++s) {
      const c = s * 16;
      for (let h = 0; h < 16; ++h)
        o[c + h] = f[s] + f[h];
    }
    return o;
  }();
  function gr(f) {
    return typeof BigInt > "u" ? ul : f;
  }
  function ul() {
    throw new Error("BigInt not supported");
  }
})(Gs);
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Uw = Gs.Buffer, Rw = Uw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function jw() {
  throw new Error("not implemented");
}
var Bw = jw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Vw = Aw, zw = Rw, Zw = Bw, Vt;
Vw() ? Vt = zw : Vt = Zw;
var Dn = Vt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hw = Es, Gw = Dn, qw = Hw(Gw.from), Ww = qw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Yw = ge, Jw = wr, Xw = Dn;
function Qw(r) {
  if (!Yw(r))
    throw new TypeError(Jw("invalid argument. Must provide a Buffer. Value: `%s`.", r));
  return Xw.from(r);
}
var Kw = Qw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rS = ge, eS = wr, tS = Dn;
function nS(r) {
  if (!rS(r))
    throw new TypeError(eS("invalid argument. Must provide a Buffer. Value: `%s`.", r));
  return new tS(r);
}
var iS = nS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var aS = Ww, oS = Kw, sS = iS, zt;
aS ? zt = oS : zt = sS;
var uS = zt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lS = z, fS = typeof Int8Array == "function";
function cS(r) {
  return fS && r instanceof Int8Array || // eslint-disable-line stdlib/require-globals
  lS(r) === "[object Int8Array]";
}
var dS = cS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hS = dS, vS = hS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mS = 127, yS = mS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pS = -128, gS = pS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $S = typeof Int8Array == "function" ? Int8Array : null, bS = $S;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wS = vS, SS = yS, ES = gS, ea = bS;
function TS() {
  var r, e;
  if (typeof ea != "function")
    return !1;
  try {
    e = new ea([1, 3.14, -3.14, SS + 1]), r = wS(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === ES;
  } catch {
    r = !1;
  }
  return r;
}
var OS = TS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IS = OS, xS = IS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _S = typeof Int8Array == "function" ? Int8Array : void 0, AS = _S;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function CS() {
  throw new Error("not implemented");
}
var NS = CS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FS = xS, MS = AS, kS = NS, Zt;
FS() ? Zt = MS : Zt = kS;
var DS = Zt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PS = z, LS = typeof Uint8Array == "function";
function US(r) {
  return LS && r instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
  PS(r) === "[object Uint8Array]";
}
var RS = US;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jS = RS, BS = jS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VS = 255, zS = VS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZS = typeof Uint8Array == "function" ? Uint8Array : null, HS = ZS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GS = BS, St = zS, ta = HS;
function qS() {
  var r, e;
  if (typeof ta != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, St + 1, St + 2], e = new ta(e), r = GS(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === St - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var WS = qS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var YS = WS, JS = YS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var XS = typeof Uint8Array == "function" ? Uint8Array : void 0, QS = XS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function KS() {
  throw new Error("not implemented");
}
var rE = KS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eE = JS, tE = QS, nE = rE, Ht;
eE() ? Ht = tE : Ht = nE;
var iE = Ht;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var aE = z, oE = typeof Uint8ClampedArray == "function";
function sE(r) {
  return oE && r instanceof Uint8ClampedArray || // eslint-disable-line stdlib/require-globals
  aE(r) === "[object Uint8ClampedArray]";
}
var uE = sE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lE = uE, fE = lE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cE = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : null, dE = cE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hE = fE, na = dE;
function vE() {
  var r, e;
  if (typeof na != "function")
    return !1;
  try {
    e = new na([-1, 0, 1, 3.14, 4.99, 255, 256]), r = hE(e) && e[0] === 0 && // clamped
    e[1] === 0 && e[2] === 1 && e[3] === 3 && // round to nearest
    e[4] === 5 && // round to nearest
    e[5] === 255 && e[6] === 255;
  } catch {
    r = !1;
  }
  return r;
}
var mE = vE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yE = mE, pE = yE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gE = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : void 0, $E = gE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bE() {
  throw new Error("not implemented");
}
var wE = bE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SE = pE, EE = $E, TE = wE, Gt;
SE() ? Gt = EE : Gt = TE;
var OE = Gt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IE = z, xE = typeof Int16Array == "function";
function _E(r) {
  return xE && r instanceof Int16Array || // eslint-disable-line stdlib/require-globals
  IE(r) === "[object Int16Array]";
}
var AE = _E;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CE = AE, NE = CE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FE = 32767, ME = FE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kE = -32768, DE = kE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PE = typeof Int16Array == "function" ? Int16Array : null, LE = PE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UE = NE, RE = ME, jE = DE, ia = LE;
function BE() {
  var r, e;
  if (typeof ia != "function")
    return !1;
  try {
    e = new ia([1, 3.14, -3.14, RE + 1]), r = UE(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === jE;
  } catch {
    r = !1;
  }
  return r;
}
var VE = BE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zE = VE, ZE = zE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var HE = typeof Int16Array == "function" ? Int16Array : void 0, GE = HE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function qE() {
  throw new Error("not implemented");
}
var WE = qE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var YE = ZE, JE = GE, XE = WE, qt;
YE() ? qt = JE : qt = XE;
var QE = qt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KE = z, r2 = typeof Uint16Array == "function";
function e2(r) {
  return r2 && r instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
  KE(r) === "[object Uint16Array]";
}
var t2 = e2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n2 = t2, i2 = n2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var a2 = 65535, o2 = a2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var s2 = typeof Uint16Array == "function" ? Uint16Array : null, u2 = s2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var l2 = i2, Et = o2, aa = u2;
function f2() {
  var r, e;
  if (typeof aa != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, Et + 1, Et + 2], e = new aa(e), r = l2(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === Et - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var c2 = f2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d2 = c2, h2 = d2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var v2 = typeof Uint16Array == "function" ? Uint16Array : void 0, m2 = v2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function y2() {
  throw new Error("not implemented");
}
var p2 = y2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var g2 = h2, $2 = m2, b2 = p2, Wt;
g2() ? Wt = $2 : Wt = b2;
var w2 = Wt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var S2 = z, E2 = typeof Int32Array == "function";
function T2(r) {
  return E2 && r instanceof Int32Array || // eslint-disable-line stdlib/require-globals
  S2(r) === "[object Int32Array]";
}
var O2 = T2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var I2 = O2, x2 = I2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _2 = 2147483647, A2 = _2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var C2 = -2147483648, N2 = C2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var F2 = typeof Int32Array == "function" ? Int32Array : null, M2 = F2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var k2 = x2, D2 = A2, P2 = N2, oa = M2;
function L2() {
  var r, e;
  if (typeof oa != "function")
    return !1;
  try {
    e = new oa([1, 3.14, -3.14, D2 + 1]), r = k2(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === P2;
  } catch {
    r = !1;
  }
  return r;
}
var U2 = L2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var R2 = U2, j2 = R2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var B2 = typeof Int32Array == "function" ? Int32Array : void 0, V2 = B2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function z2() {
  throw new Error("not implemented");
}
var Z2 = z2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var H2 = j2, G2 = V2, q2 = Z2, Yt;
H2() ? Yt = G2 : Yt = q2;
var W2 = Yt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Y2 = z, J2 = typeof Uint32Array == "function";
function X2(r) {
  return J2 && r instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
  Y2(r) === "[object Uint32Array]";
}
var Q2 = X2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K2 = Q2, rT = K2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eT = typeof Uint32Array == "function" ? Uint32Array : null, tT = eT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nT = rT, Tt = js, sa = tT;
function iT() {
  var r, e;
  if (typeof sa != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, Tt + 1, Tt + 2], e = new sa(e), r = nT(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === Tt - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var aT = iT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var oT = aT, sT = oT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var uT = typeof Uint32Array == "function" ? Uint32Array : void 0, lT = uT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function fT() {
  throw new Error("not implemented");
}
var cT = fT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dT = sT, hT = lT, vT = cT, Jt;
dT() ? Jt = hT : Jt = vT;
var mT = Jt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yT = z, pT = typeof Float32Array == "function";
function gT(r) {
  return pT && r instanceof Float32Array || // eslint-disable-line stdlib/require-globals
  yT(r) === "[object Float32Array]";
}
var $T = gT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bT = $T, wT = bT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ST = typeof Float32Array == "function" ? Float32Array : null, ET = ST;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TT = wT, OT = wn, ua = ET;
function IT() {
  var r, e;
  if (typeof ua != "function")
    return !1;
  try {
    e = new ua([1, 3.14, -3.14, 5e40]), r = TT(e) && e[0] === 1 && e[1] === 3.140000104904175 && e[2] === -3.140000104904175 && e[3] === OT;
  } catch {
    r = !1;
  }
  return r;
}
var xT = IT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _T = xT, AT = _T;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CT = typeof Float32Array == "function" ? Float32Array : void 0, NT = CT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function FT() {
  throw new Error("not implemented");
}
var MT = FT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kT = AT, DT = NT, PT = MT, Xt;
kT() ? Xt = DT : Xt = PT;
var LT = Xt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UT = z, RT = typeof Float64Array == "function";
function jT(r) {
  return RT && r instanceof Float64Array || // eslint-disable-line stdlib/require-globals
  UT(r) === "[object Float64Array]";
}
var BT = jT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VT = BT, zT = VT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZT = typeof Float64Array == "function" ? Float64Array : null, HT = ZT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GT = zT, la = HT;
function qT() {
  var r, e;
  if (typeof la != "function")
    return !1;
  try {
    e = new la([1, 3.14, -3.14, NaN]), r = GT(e) && e[0] === 1 && e[1] === 3.14 && e[2] === -3.14 && e[3] !== e[3];
  } catch {
    r = !1;
  }
  return r;
}
var WT = qT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var YT = WT, JT = YT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var XT = typeof Float64Array == "function" ? Float64Array : void 0, QT = XT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function KT() {
  throw new Error("not implemented");
}
var rO = KT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eO = JT, tO = QT, nO = rO, Qt;
eO() ? Qt = tO : Qt = nO;
var iO = Qt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var aO = DS, oO = iE, sO = OE, uO = QE, lO = w2, fO = W2, cO = mT, dO = LT, hO = iO, Ws;
function vO(r) {
  return new aO(r);
}
function mO(r) {
  return new oO(r);
}
function yO(r) {
  return new sO(r);
}
function pO(r) {
  return new uO(r);
}
function gO(r) {
  return new lO(r);
}
function $O(r) {
  return new fO(r);
}
function bO(r) {
  return new cO(r);
}
function wO(r) {
  return new dO(r);
}
function SO(r) {
  return new hO(r);
}
function EO() {
  var r = {
    int8array: vO,
    uint8array: mO,
    uint8clampedarray: yO,
    int16array: pO,
    uint16array: gO,
    int32array: $O,
    uint32array: bO,
    float32array: wO,
    float64array: SO
  };
  return r;
}
Ws = EO();
var TO = Ws;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Re = Jr, Pn = et, fa = ge, OO = p1, ca = _n, IO = W1, xO = Ds, Ys = Zs, _O = fw, de = Sw, AO = Ts, he = as, CO = uS, NO = TO;
function FO(r) {
  var e, n, t, i, a, l, u, d;
  for (e = [], i = [], u = Object.create(AO(r)), e.push(r), i.push(u), n = _O(r), d = 0; d < n.length; d++)
    t = n[d], a = de(r, t), Re(a, "value") && (l = Pn(r[t]) ? [] : {}, a.value = Ir(r[t], l, e, i, -1)), he(u, t, a);
  return Object.isExtensible(r) || Object.preventExtensions(u), Object.isSealed(r) && Object.seal(u), Object.isFrozen(r) && Object.freeze(u), u;
}
function MO(r) {
  var e = [], n = [], t, i, a, l, u, d;
  for (u = new r.constructor(r.message), e.push(r), n.push(u), r.stack && (u.stack = r.stack), r.code && (u.code = r.code), r.errno && (u.errno = r.errno), r.syscall && (u.syscall = r.syscall), t = Ys(r), d = 0; d < t.length; d++)
    l = t[d], i = de(r, l), Re(i, "value") && (a = Pn(r[l]) ? [] : {}, i.value = Ir(r[l], a, e, n, -1)), he(u, l, i);
  return u;
}
function Ir(r, e, n, t, i) {
  var a, l, u, d, v, p, y, g, b, S;
  if (i -= 1, typeof r != "object" || r === null)
    return r;
  if (fa(r))
    return CO(r);
  if (OO(r))
    return MO(r);
  if (u = ca(r), u === "date")
    return /* @__PURE__ */ new Date(+r);
  if (u === "regexp")
    return IO(r.toString());
  if (u === "set")
    return new Set(r);
  if (u === "map")
    return new Map(r);
  if (u === "string" || u === "boolean" || u === "number")
    return r.valueOf();
  if (v = NO[u], v)
    return v(r);
  if (u !== "array" && u !== "object")
    return typeof Object.freeze == "function" ? FO(r) : {};
  if (l = Ys(r), i > 0)
    for (a = u, S = 0; S < l.length; S++) {
      if (p = l[S], g = r[p], u = ca(g), typeof g != "object" || g === null || u !== "array" && u !== "object" || fa(g)) {
        a === "object" ? (d = de(r, p), Re(d, "value") && (d.value = Ir(g)), he(e, p, d)) : e[p] = Ir(g);
        continue;
      }
      if (b = xO(n, g), b !== -1) {
        e[p] = t[b];
        continue;
      }
      y = Pn(g) ? new Array(g.length) : {}, n.push(g), t.push(y), a === "array" ? e[p] = Ir(g, y, n, t, i) : (d = de(r, p), Re(d, "value") && (d.value = Ir(g, y, n, t, i)), he(e, p, d));
    }
  else if (u === "array")
    for (S = 0; S < l.length; S++)
      p = l[S], e[p] = r[p];
  else
    for (S = 0; S < l.length; S++)
      p = l[S], d = de(r, p), he(e, p, d);
  return Object.isExtensible(r) || Object.preventExtensions(e), Object.isSealed(r) && Object.seal(e), Object.isFrozen(r) && Object.freeze(e), e;
}
var kO = Ir;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DO = et, PO = lp.isPrimitive, LO = wr, UO = wn, RO = kO;
function jO(r, e) {
  var n;
  if (arguments.length > 1) {
    if (!PO(e))
      throw new TypeError(LO("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.", e));
    if (e === 0)
      return r;
  } else
    e = UO;
  return n = DO(r) ? new Array(r.length) : {}, RO(r, n, [r], [n], e);
}
var BO = jO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VO = BO, zO = VO;
const ZO = /* @__PURE__ */ Qa(zO), da = { ...rs, GhostError: _ }, lr = {
  serialize(r) {
    try {
      return {
        id: r.id,
        status: r.statusCode,
        code: r.code || r.errorType,
        title: r.name,
        detail: r.message,
        meta: {
          context: r.context,
          help: r.help,
          errorDetails: r.errorDetails,
          level: r.level,
          errorType: r.errorType
        }
      };
    } catch {
      return {
        detail: "Something went wrong."
      };
    }
  },
  deserialize(r) {
    return {
      id: r.id,
      message: r.detail || r.error_description || r.message,
      statusCode: r.status,
      code: r.code || r.error,
      level: r.meta && r.meta.level,
      help: r.meta && r.meta.help,
      context: r.meta && r.meta.context
    };
  },
  /**
   * @description Serialize error instance into oauth format.
   *
   * @see https://tools.ietf.org/html/rfc6749#page-45
   *
   * To not loose any error data when sending errors between internal services, we use the suggested OAuth properties and add ours as well.
   */
  OAuthSerialize(r) {
    const e = {
      [yn.name]: "access_denied",
      [gn.name]: "temporarily_unavailable",
      [mn.name]: "invalid_request",
      [pn.name]: "invalid_request",
      default: "server_error"
    }, { detail: n, code: t, ...i } = lr.serialize(r);
    return {
      error: r.code || e[r.name] || "server_error",
      error_description: r.message,
      ...i
    };
  },
  /**
   * @description Deserialize oauth error format into GhostError instance.
   * @constructor
   */
  OAuthDeserialize(r) {
    try {
      return new da[r.title || r.name || Br.name](lr.deserialize(r));
    } catch {
      return new Br({
        errorType: r.title || r.name,
        ...lr.deserialize(r)
      });
    }
  },
  /**
   * @description Serialize GhostError instance into jsonapi.org format.
   * @param err
   * @return {Object}
   */
  JSONAPISerialize(r) {
    const e = {
      errors: [lr.serialize(r)]
    };
    return e.errors[0].source = {}, r.property && (e.errors[0].source.pointer = "/data/attributes/" + r.property), e;
  },
  /**
   * @description Deserialize JSON api format into GhostError instance.
   */
  JSONAPIDeserialize(r) {
    r = r.errors && r.errors[0] || {};
    let e;
    try {
      e = new da[r.title || r.name || Br.name](lr.deserialize(r));
    } catch {
      e = new Br({
        errorType: r.title || r.name,
        ...lr.deserialize(r)
      });
    }
    return r.source && r.source.pointer && (e.property = r.source.pointer.split("/")[3]), e;
  }
};
function HO(r, e) {
  e = e || { format: "jsonapi" };
  let n = {};
  try {
    e.format === "jsonapi" ? n = lr.JSONAPISerialize(r) : n = lr.OAuthSerialize(r);
  } catch {
    n.message = "Something went wrong.";
  }
  return n;
}
function GO(r) {
  let e = {};
  return r.errors ? e = lr.JSONAPIDeserialize(r) : e = lr.OAuthDeserialize(r), e;
}
function qO(r) {
  var i;
  const e = ((i = r.stack) == null ? void 0 : i.split(/\n/)) || [];
  "hideStack" in r && r.hideStack ? e.splice(1, e.length - 1) : e.splice(1, 0, "Stack Trace:"), "help" in r && r.help && e.splice(1, 0, `${r.help}`), "context" in r && r.context && e.splice(1, 0, `${r.context}`);
  const t = ZO(r);
  return t.stack = e.join(`
`), t;
}
function WO(r) {
  const e = _.name, n = "IgnitionError";
  return function i(a) {
    return !a || !a.name ? !1 : a.name === e || a.name === n ? !0 : i(Object.getPrototypeOf(a));
  }(r.constructor);
}
var YO = rs;
const JO = {
  serialize: HO,
  deserialize: GO,
  isGhostError: WO,
  prepareStackForUser: qO
}, XO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: mn,
  ConflictError: Qo,
  DataExportError: Bo,
  DataImportError: Vo,
  DisabledFeatureError: Ho,
  EmailError: zo,
  HelperWarning: Wo,
  HostLimitError: qo,
  IncorrectUsageError: Co,
  InternalServerError: Br,
  MaintenanceError: gn,
  MethodNotAllowedError: Do,
  MigrationError: Ko,
  NoContentError: Xo,
  NoPermissionError: yn,
  NotFoundError: No,
  PasswordResetRequiredError: Yo,
  RangeNotSatisfiableError: Lo,
  RequestEntityTooLargeError: Uo,
  RequestNotAcceptableError: Po,
  ThemeValidationError: Zo,
  TokenRevocationError: Ro,
  TooManyRequestsError: ko,
  UnauthorizedError: Fo,
  UnhandledJobError: Jo,
  UnsupportedMediaTypeError: Mo,
  UpdateCollisionError: Go,
  ValidationError: pn,
  VersionMismatchError: jo,
  default: YO,
  utils: JO
}, Symbol.toStringTag, { value: "Module" })), Js = /* @__PURE__ */ ll(XO);
var QO = Oo, KO = QO(function(r, e, n) {
  return r + (n ? " " : "") + e.toLowerCase();
}), rI = KO, eI = cn, tI = function() {
  try {
    var r = eI(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), Xs = tI, ha = Xs;
function nI(r, e, n) {
  e == "__proto__" && ha ? ha(r, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : r[e] = n;
}
var Qs = nI, iI = Qs, aI = Xe, oI = Object.prototype, sI = oI.hasOwnProperty;
function uI(r, e, n) {
  var t = r[e];
  (!(sI.call(r, e) && aI(t, n)) || n === void 0 && !(e in r)) && iI(r, e, n);
}
var lI = uI, fI = lI, cI = Qs;
function dI(r, e, n, t) {
  var i = !n;
  n || (n = {});
  for (var a = -1, l = e.length; ++a < l; ) {
    var u = e[a], d = t ? t(n[u], r[u], u, n, r) : void 0;
    d === void 0 && (d = r[u]), i ? cI(n, u, d) : fI(n, u, d);
  }
  return n;
}
var hI = dI;
function vI(r) {
  return r;
}
var Ks = vI;
function mI(r, e, n) {
  switch (n.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, n[0]);
    case 2:
      return r.call(e, n[0], n[1]);
    case 3:
      return r.call(e, n[0], n[1], n[2]);
  }
  return r.apply(e, n);
}
var ru = mI, yI = ru, va = Math.max;
function pI(r, e, n) {
  return e = va(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var t = arguments, i = -1, a = va(t.length - e, 0), l = Array(a); ++i < a; )
      l[i] = t[e + i];
    i = -1;
    for (var u = Array(e + 1); ++i < e; )
      u[i] = t[i];
    return u[e] = n(l), yI(r, this, u);
  };
}
var gI = pI;
function $I(r) {
  return function() {
    return r;
  };
}
var bI = $I, wI = bI, ma = Xs, SI = Ks, EI = ma ? function(r, e) {
  return ma(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wI(e),
    writable: !0
  });
} : SI, TI = EI, OI = 800, II = 16, xI = Date.now;
function _I(r) {
  var e = 0, n = 0;
  return function() {
    var t = xI(), i = II - (t - n);
    if (n = t, i > 0) {
      if (++e >= OI)
        return arguments[0];
    } else
      e = 0;
    return r.apply(void 0, arguments);
  };
}
var AI = _I, CI = TI, NI = AI, FI = NI(CI), MI = FI, kI = Ks, DI = gI, PI = MI;
function LI(r, e) {
  return PI(DI(r, e, kI), r + "");
}
var eu = LI, UI = Io, RI = vn;
function jI(r) {
  return r != null && RI(r.length) && !UI(r);
}
var Ln = jI, BI = Xe, VI = Ln, zI = hn, ZI = Ye;
function HI(r, e, n) {
  if (!ZI(n))
    return !1;
  var t = typeof e;
  return (t == "number" ? VI(n) && zI(e, n.length) : t == "string" && e in n) ? BI(n[e], r) : !1;
}
var tu = HI, GI = eu, qI = tu;
function WI(r) {
  return GI(function(e, n) {
    var t = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, l = i > 2 ? n[2] : void 0;
    for (a = r.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && qI(n[0], n[1], l) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++t < i; ) {
      var u = n[t];
      u && r(e, u, t, a);
    }
    return e;
  });
}
var YI = WI;
function JI(r, e) {
  for (var n = -1, t = Array(r); ++n < r; )
    t[n] = e(n);
  return t;
}
var XI = JI, je = { exports: {} };
function QI() {
  return !1;
}
var KI = QI;
je.exports;
(function(r, e) {
  var n = We, t = KI, i = e && !e.nodeType && e, a = i && !0 && r && !r.nodeType && r, l = a && a.exports === i, u = l ? n.Buffer : void 0, d = u ? u.isBuffer : void 0, v = d || t;
  r.exports = v;
})(je, je.exports);
var rx = je.exports, ex = Hr, tx = vn, nx = Gr, ix = "[object Arguments]", ax = "[object Array]", ox = "[object Boolean]", sx = "[object Date]", ux = "[object Error]", lx = "[object Function]", fx = "[object Map]", cx = "[object Number]", dx = "[object Object]", hx = "[object RegExp]", vx = "[object Set]", mx = "[object String]", yx = "[object WeakMap]", px = "[object ArrayBuffer]", gx = "[object DataView]", $x = "[object Float32Array]", bx = "[object Float64Array]", wx = "[object Int8Array]", Sx = "[object Int16Array]", Ex = "[object Int32Array]", Tx = "[object Uint8Array]", Ox = "[object Uint8ClampedArray]", Ix = "[object Uint16Array]", xx = "[object Uint32Array]", F = {};
F[$x] = F[bx] = F[wx] = F[Sx] = F[Ex] = F[Tx] = F[Ox] = F[Ix] = F[xx] = !0;
F[ix] = F[ax] = F[px] = F[ox] = F[gx] = F[sx] = F[ux] = F[lx] = F[fx] = F[cx] = F[dx] = F[hx] = F[vx] = F[mx] = F[yx] = !1;
function _x(r) {
  return nx(r) && tx(r.length) && !!F[ex(r)];
}
var Ax = _x;
function Cx(r) {
  return function(e) {
    return r(e);
  };
}
var Nx = Cx, Be = { exports: {} };
Be.exports;
(function(r, e) {
  var n = Ka, t = e && !e.nodeType && e, i = t && !0 && r && !r.nodeType && r, a = i && i.exports === t, l = a && n.process, u = function() {
    try {
      var d = i && i.require && i.require("util").types;
      return d || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  r.exports = u;
})(Be, Be.exports);
var Fx = Be.exports, Mx = Ax, kx = Nx, ya = Fx, pa = ya && ya.isTypedArray, Dx = pa ? kx(pa) : Mx, Px = Dx, Lx = XI, Ux = Ao, Rx = pe, jx = rx, Bx = hn, Vx = Px, zx = Object.prototype, Zx = zx.hasOwnProperty;
function Hx(r, e) {
  var n = Rx(r), t = !n && Ux(r), i = !n && !t && jx(r), a = !n && !t && !i && Vx(r), l = n || t || i || a, u = l ? Lx(r.length, String) : [], d = u.length;
  for (var v in r)
    (e || Zx.call(r, v)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    Bx(v, d))) && u.push(v);
  return u;
}
var nu = Hx, Gx = Object.prototype;
function qx(r) {
  var e = r && r.constructor, n = typeof e == "function" && e.prototype || Gx;
  return r === n;
}
var iu = qx;
function Wx(r) {
  var e = [];
  if (r != null)
    for (var n in Object(r))
      e.push(n);
  return e;
}
var Yx = Wx, Jx = Ye, Xx = iu, Qx = Yx, Kx = Object.prototype, r_ = Kx.hasOwnProperty;
function e_(r) {
  if (!Jx(r))
    return Qx(r);
  var e = Xx(r), n = [];
  for (var t in r)
    t == "constructor" && (e || !r_.call(r, t)) || n.push(t);
  return n;
}
var t_ = e_, n_ = nu, i_ = t_, a_ = Ln;
function o_(r) {
  return a_(r) ? n_(r, !0) : i_(r);
}
var s_ = o_, u_ = hI, l_ = YI, f_ = s_, c_ = l_(function(r, e, n, t) {
  u_(e, f_(e), r, t);
}), d_ = c_;
function h_(r, e) {
  return function(n) {
    return r(e(n));
  };
}
var au = h_, v_ = au, m_ = v_(Object.getPrototypeOf, Object), y_ = m_, p_ = Hr, g_ = y_, $_ = Gr, b_ = "[object Object]", w_ = Function.prototype, S_ = Object.prototype, ou = w_.toString, E_ = S_.hasOwnProperty, T_ = ou.call(Object);
function O_(r) {
  if (!$_(r) || p_(r) != b_)
    return !1;
  var e = g_(r);
  if (e === null)
    return !0;
  var n = E_.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && ou.call(n) == T_;
}
var I_ = O_, x_ = Hr, __ = Gr, A_ = I_, C_ = "[object DOMException]", N_ = "[object Error]";
function F_(r) {
  if (!__(r))
    return !1;
  var e = x_(r);
  return e == N_ || e == C_ || typeof r.message == "string" && typeof r.name == "string" && !A_(r);
}
var su = F_, M_ = ru, k_ = eu, D_ = su, P_ = k_(function(r, e) {
  try {
    return M_(r, void 0, e);
  } catch (n) {
    return D_(n) ? n : new Error(n);
  }
}), L_ = P_, U_ = ro;
function R_(r, e) {
  return U_(e, function(n) {
    return r[n];
  });
}
var j_ = R_, B_ = Xe, uu = Object.prototype, V_ = uu.hasOwnProperty;
function z_(r, e, n, t) {
  return r === void 0 || B_(r, uu[n]) && !V_.call(t, n) ? e : r;
}
var Z_ = z_, H_ = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function G_(r) {
  return "\\" + H_[r];
}
var q_ = G_, W_ = au, Y_ = W_(Object.keys, Object), J_ = Y_, X_ = iu, Q_ = J_, K_ = Object.prototype, rA = K_.hasOwnProperty;
function eA(r) {
  if (!X_(r))
    return Q_(r);
  var e = [];
  for (var n in Object(r))
    rA.call(r, n) && n != "constructor" && e.push(n);
  return e;
}
var tA = eA, nA = nu, iA = tA, aA = Ln;
function oA(r) {
  return aA(r) ? nA(r) : iA(r);
}
var sA = oA, uA = /<%=([\s\S]+?)%>/g, lu = uA, lA = fo, fA = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, cA = lA(fA), dA = cA, hA = dA, vA = Ar, fu = /[&<>"']/g, mA = RegExp(fu.source);
function yA(r) {
  return r = vA(r), r && mA.test(r) ? r.replace(fu, hA) : r;
}
var pA = yA, gA = /<%-([\s\S]+?)%>/g, $A = gA, bA = /<%([\s\S]+?)%>/g, wA = bA, SA = pA, EA = $A, TA = wA, OA = lu, IA = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: EA,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: TA,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: OA,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  variable: "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  imports: {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    _: { escape: SA }
  }
}, xA = IA, ga = d_, _A = L_, AA = j_, $a = Z_, CA = q_, NA = su, FA = tu, MA = sA, kA = lu, ba = xA, DA = Ar, PA = "Invalid `variable` option passed into `_.template`", LA = /\b__p \+= '';/g, UA = /\b(__p \+=) '' \+/g, RA = /(__e\(.*?\)|\b__t\)) \+\n'';/g, jA = /[()=,{}\[\]\/\s]/, BA = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ne = /($^)/, VA = /['\n\r\u2028\u2029\\]/g, zA = Object.prototype, wa = zA.hasOwnProperty;
function ZA(r, e, n) {
  var t = ba.imports._.templateSettings || ba;
  n && FA(r, e, n) && (e = void 0), r = DA(r), e = ga({}, e, t, $a);
  var i = ga({}, e.imports, t.imports, $a), a = MA(i), l = AA(i, a), u, d, v = 0, p = e.interpolate || Ne, y = "__p += '", g = RegExp(
    (e.escape || Ne).source + "|" + p.source + "|" + (p === kA ? BA : Ne).source + "|" + (e.evaluate || Ne).source + "|$",
    "g"
  ), b = wa.call(e, "sourceURL") ? "//# sourceURL=" + (e.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  r.replace(g, function(O, E, L, pr, vr, Z) {
    return L || (L = pr), y += r.slice(v, Z).replace(VA, CA), E && (u = !0, y += `' +
__e(` + E + `) +
'`), vr && (d = !0, y += `';
` + vr + `;
__p += '`), L && (y += `' +
((__t = (` + L + `)) == null ? '' : __t) +
'`), v = Z + O.length, O;
  }), y += `';
`;
  var S = wa.call(e, "variable") && e.variable;
  if (!S)
    y = `with (obj) {
` + y + `
}
`;
  else if (jA.test(S))
    throw new Error(PA);
  y = (d ? y.replace(LA, "") : y).replace(UA, "$1").replace(RA, "$1;"), y = "function(" + (S || "obj") + `) {
` + (S ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (d ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + y + `return __p
}`;
  var T = _A(function() {
    return Function(a, b + "return " + y).apply(void 0, l);
  });
  if (T.source = y, NA(T))
    throw T;
  return T;
}
var HA = ZA, J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
function Sa(r, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function or(r, e, n) {
  return e && Sa(r.prototype, e), n && Sa(r, n), r;
}
function er(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
function Kt(r) {
  return Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Kt(r);
}
function Ve(r, e) {
  return Ve = Object.setPrototypeOf || function(t, i) {
    return t.__proto__ = i, t;
  }, Ve(r, e);
}
function GA() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pe(r, e, n) {
  return GA() ? Pe = Reflect.construct : Pe = function(i, a, l) {
    var u = [null];
    u.push.apply(u, a);
    var d = Function.bind.apply(i, u), v = new d();
    return l && Ve(v, l.prototype), v;
  }, Pe.apply(null, arguments);
}
function qA(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function rn(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return rn = function(t) {
    if (t === null || !qA(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t))
        return e.get(t);
      e.set(t, i);
    }
    function i() {
      return Pe(t, arguments, Kt(this).constructor);
    }
    return i.prototype = Object.create(t.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ve(i, t);
  }, rn(r);
}
function WA(r, e) {
  if (r == null)
    return {};
  var n = {}, t = Object.keys(r), i, a;
  for (a = 0; a < t.length; a++)
    i = t[a], !(e.indexOf(i) >= 0) && (n[i] = r[i]);
  return n;
}
function YA(r, e) {
  if (r) {
    if (typeof r == "string")
      return Ea(r, e);
    var n = Object.prototype.toString.call(r).slice(8, -1);
    if (n === "Object" && r.constructor && (n = r.constructor.name), n === "Map" || n === "Set")
      return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ea(r, e);
  }
}
function Ea(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var n = 0, t = new Array(e); n < e; n++)
    t[n] = r[n];
  return t;
}
function br(r) {
  var e = 0;
  if (typeof Symbol > "u" || r[Symbol.iterator] == null) {
    if (Array.isArray(r) || (r = YA(r)))
      return function() {
        return e >= r.length ? {
          done: !0
        } : {
          done: !1,
          value: r[e++]
        };
      };
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return e = r[Symbol.iterator](), e.next.bind(e);
}
var Cr = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(/* @__PURE__ */ rn(Error)), JA = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid DateTime: " + n.toMessage()) || this;
  }
  return e;
}(Cr), XA = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid Interval: " + n.toMessage()) || this;
  }
  return e;
}(Cr), QA = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid Duration: " + n.toMessage()) || this;
  }
  return e;
}(Cr), fe = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(Cr), cu = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid unit " + n) || this;
  }
  return e;
}(Cr), K = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(Cr), $r = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.call(this, "Zone is an abstract class") || this;
  }
  return e;
}(Cr), w = "numeric", sr = "short", Y = "long", ze = {
  year: w,
  month: w,
  day: w
}, Un = {
  year: w,
  month: sr,
  day: w
}, du = {
  year: w,
  month: sr,
  day: w,
  weekday: sr
}, Rn = {
  year: w,
  month: Y,
  day: w
}, jn = {
  year: w,
  month: Y,
  day: w,
  weekday: Y
}, Bn = {
  hour: w,
  minute: w
}, Vn = {
  hour: w,
  minute: w,
  second: w
}, zn = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: sr
}, Zn = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: Y
}, Hn = {
  hour: w,
  minute: w,
  hour12: !1
}, Gn = {
  hour: w,
  minute: w,
  second: w,
  hour12: !1
}, qn = {
  hour: w,
  minute: w,
  second: w,
  hour12: !1,
  timeZoneName: sr
}, Wn = {
  hour: w,
  minute: w,
  second: w,
  hour12: !1,
  timeZoneName: Y
}, Yn = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w
}, Jn = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w,
  second: w
}, Xn = {
  year: w,
  month: sr,
  day: w,
  hour: w,
  minute: w
}, Qn = {
  year: w,
  month: sr,
  day: w,
  hour: w,
  minute: w,
  second: w
}, hu = {
  year: w,
  month: sr,
  day: w,
  weekday: sr,
  hour: w,
  minute: w
}, Kn = {
  year: w,
  month: Y,
  day: w,
  hour: w,
  minute: w,
  timeZoneName: sr
}, ri = {
  year: w,
  month: Y,
  day: w,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: sr
}, ei = {
  year: w,
  month: Y,
  day: w,
  weekday: Y,
  hour: w,
  minute: w,
  timeZoneName: Y
}, ti = {
  year: w,
  month: Y,
  day: w,
  weekday: Y,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: Y
};
function x(r) {
  return typeof r > "u";
}
function _r(r) {
  return typeof r == "number";
}
function at(r) {
  return typeof r == "number" && r % 1 === 0;
}
function KA(r) {
  return typeof r == "string";
}
function rC(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function hr() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function $e() {
  return !x(Intl.DateTimeFormat.prototype.formatToParts);
}
function vu() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function eC(r) {
  return Array.isArray(r) ? r : [r];
}
function Ta(r, e, n) {
  if (r.length !== 0)
    return r.reduce(function(t, i) {
      var a = [e(i), i];
      return t && n(t[0], a[0]) === t[0] ? t : a;
    }, null)[1];
}
function mu(r, e) {
  return e.reduce(function(n, t) {
    return n[t] = r[t], n;
  }, {});
}
function Zr(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function mr(r, e, n) {
  return at(r) && r >= e && r <= n;
}
function tC(r, e) {
  return r - e * Math.floor(r / e);
}
function Vr(r, e) {
  e === void 0 && (e = 2);
  var n = r < 0 ? "-" : "", t = n ? r * -1 : r, i;
  return t.toString().length < e ? i = ("0".repeat(e) + t).slice(-e) : i = t.toString(), "" + n + i;
}
function H(r) {
  if (!(x(r) || r === null || r === ""))
    return parseInt(r, 10);
}
function ni(r) {
  if (!(x(r) || r === null || r === "")) {
    var e = parseFloat("0." + r) * 1e3;
    return Math.floor(e);
  }
}
function ii(r, e, n) {
  n === void 0 && (n = !1);
  var t = Math.pow(10, e), i = n ? Math.trunc : Math.round;
  return i(r * t) / t;
}
function be(r) {
  return r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0);
}
function ve(r) {
  return be(r) ? 366 : 365;
}
function Ze(r, e) {
  var n = tC(e - 1, 12) + 1, t = r + (e - n) / 12;
  return n === 2 ? be(t) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function ai(r) {
  var e = Date.UTC(r.year, r.month - 1, r.day, r.hour, r.minute, r.second, r.millisecond);
  return r.year < 100 && r.year >= 0 && (e = new Date(e), e.setUTCFullYear(e.getUTCFullYear() - 1900)), +e;
}
function He(r) {
  var e = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7, n = r - 1, t = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return e === 4 || t === 3 ? 53 : 52;
}
function en(r) {
  return r > 99 ? r : r > 60 ? 1900 + r : 2e3 + r;
}
function yu(r, e, n, t) {
  t === void 0 && (t = null);
  var i = new Date(r), a = {
    hour12: !1,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  t && (a.timeZone = t);
  var l = Object.assign({
    timeZoneName: e
  }, a), u = hr();
  if (u && $e()) {
    var d = new Intl.DateTimeFormat(n, l).formatToParts(i).find(function(b) {
      return b.type.toLowerCase() === "timezonename";
    });
    return d ? d.value : null;
  } else if (u) {
    var v = new Intl.DateTimeFormat(n, a).format(i), p = new Intl.DateTimeFormat(n, l).format(i), y = p.substring(v.length), g = y.replace(/^[, \u200e]+/, "");
    return g;
  } else
    return null;
}
function ot(r, e) {
  var n = parseInt(r, 10);
  Number.isNaN(n) && (n = 0);
  var t = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -t : t;
  return n * 60 + i;
}
function pu(r) {
  var e = Number(r);
  if (typeof r == "boolean" || r === "" || Number.isNaN(e))
    throw new K("Invalid unit value " + r);
  return e;
}
function Ge(r, e, n) {
  var t = {};
  for (var i in r)
    if (Zr(r, i)) {
      if (n.indexOf(i) >= 0)
        continue;
      var a = r[i];
      if (a == null)
        continue;
      t[e(i)] = pu(a);
    }
  return t;
}
function qe(r, e) {
  var n = Math.trunc(Math.abs(r / 60)), t = Math.trunc(Math.abs(r % 60)), i = r >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return "" + i + Vr(n, 2) + ":" + Vr(t, 2);
    case "narrow":
      return "" + i + n + (t > 0 ? ":" + t : "");
    case "techie":
      return "" + i + Vr(n, 2) + Vr(t, 2);
    default:
      throw new RangeError("Value format " + e + " is out of range for property format");
  }
}
function st(r) {
  return mu(r, ["hour", "minute", "second", "millisecond"]);
}
var gu = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function k(r) {
  return JSON.stringify(r, Object.keys(r).sort());
}
var nC = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], $u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], iC = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function bu(r) {
  switch (r) {
    case "narrow":
      return [].concat(iC);
    case "short":
      return [].concat($u);
    case "long":
      return [].concat(nC);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var wu = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Su = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], aC = ["M", "T", "W", "T", "F", "S", "S"];
function Eu(r) {
  switch (r) {
    case "narrow":
      return [].concat(aC);
    case "short":
      return [].concat(Su);
    case "long":
      return [].concat(wu);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var Tu = ["AM", "PM"], oC = ["Before Christ", "Anno Domini"], sC = ["BC", "AD"], uC = ["B", "A"];
function Ou(r) {
  switch (r) {
    case "narrow":
      return [].concat(uC);
    case "short":
      return [].concat(sC);
    case "long":
      return [].concat(oC);
    default:
      return null;
  }
}
function lC(r) {
  return Tu[r.hour < 12 ? 0 : 1];
}
function fC(r, e) {
  return Eu(e)[r.weekday - 1];
}
function cC(r, e) {
  return bu(e)[r.month - 1];
}
function dC(r, e) {
  return Ou(e)[r.year < 0 ? 0 : 1];
}
function hC(r, e, n, t) {
  n === void 0 && (n = "always"), t === void 0 && (t = !1);
  var i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, a = ["hours", "minutes", "seconds"].indexOf(r) === -1;
  if (n === "auto" && a) {
    var l = r === "days";
    switch (e) {
      case 1:
        return l ? "tomorrow" : "next " + i[r][0];
      case -1:
        return l ? "yesterday" : "last " + i[r][0];
      case 0:
        return l ? "today" : "this " + i[r][0];
    }
  }
  var u = Object.is(e, -0) || e < 0, d = Math.abs(e), v = d === 1, p = i[r], y = t ? v ? p[1] : p[2] || p[1] : v ? i[r][0] : r;
  return u ? d + " " + y + " ago" : "in " + d + " " + y;
}
function vC(r) {
  var e = mu(r, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]), n = k(e), t = "EEEE, LLLL d, yyyy, h:mm a";
  switch (n) {
    case k(ze):
      return "M/d/yyyy";
    case k(Un):
      return "LLL d, yyyy";
    case k(du):
      return "EEE, LLL d, yyyy";
    case k(Rn):
      return "LLLL d, yyyy";
    case k(jn):
      return "EEEE, LLLL d, yyyy";
    case k(Bn):
      return "h:mm a";
    case k(Vn):
      return "h:mm:ss a";
    case k(zn):
      return "h:mm a";
    case k(Zn):
      return "h:mm a";
    case k(Hn):
      return "HH:mm";
    case k(Gn):
      return "HH:mm:ss";
    case k(qn):
      return "HH:mm";
    case k(Wn):
      return "HH:mm";
    case k(Yn):
      return "M/d/yyyy, h:mm a";
    case k(Xn):
      return "LLL d, yyyy, h:mm a";
    case k(Kn):
      return "LLLL d, yyyy, h:mm a";
    case k(ei):
      return t;
    case k(Jn):
      return "M/d/yyyy, h:mm:ss a";
    case k(Qn):
      return "LLL d, yyyy, h:mm:ss a";
    case k(hu):
      return "EEE, d LLL yyyy, h:mm a";
    case k(ri):
      return "LLLL d, yyyy, h:mm:ss a";
    case k(ti):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return t;
  }
}
function Oa(r, e) {
  for (var n = "", t = br(r), i; !(i = t()).done; ) {
    var a = i.value;
    a.literal ? n += a.val : n += e(a.val);
  }
  return n;
}
var mC = {
  D: ze,
  DD: Un,
  DDD: Rn,
  DDDD: jn,
  t: Bn,
  tt: Vn,
  ttt: zn,
  tttt: Zn,
  T: Hn,
  TT: Gn,
  TTT: qn,
  TTTT: Wn,
  f: Yn,
  ff: Xn,
  fff: Kn,
  ffff: ei,
  F: Jn,
  FF: Qn,
  FFF: ri,
  FFFF: ti
}, cr = /* @__PURE__ */ function() {
  r.create = function(t, i) {
    return i === void 0 && (i = {}), new r(t, i);
  }, r.parseFormat = function(t) {
    for (var i = null, a = "", l = !1, u = [], d = 0; d < t.length; d++) {
      var v = t.charAt(d);
      v === "'" ? (a.length > 0 && u.push({
        literal: l,
        val: a
      }), i = null, a = "", l = !l) : l || v === i ? a += v : (a.length > 0 && u.push({
        literal: !1,
        val: a
      }), a = v, i = v);
    }
    return a.length > 0 && u.push({
      literal: l,
      val: a
    }), u;
  }, r.macroTokenToFormatOpts = function(t) {
    return mC[t];
  };
  function r(n, t) {
    this.opts = t, this.loc = n, this.systemLoc = null;
  }
  var e = r.prototype;
  return e.formatWithSystemDefault = function(t, i) {
    this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem());
    var a = this.systemLoc.dtFormatter(t, Object.assign({}, this.opts, i));
    return a.format();
  }, e.formatDateTime = function(t, i) {
    i === void 0 && (i = {});
    var a = this.loc.dtFormatter(t, Object.assign({}, this.opts, i));
    return a.format();
  }, e.formatDateTimeParts = function(t, i) {
    i === void 0 && (i = {});
    var a = this.loc.dtFormatter(t, Object.assign({}, this.opts, i));
    return a.formatToParts();
  }, e.resolvedOptions = function(t, i) {
    i === void 0 && (i = {});
    var a = this.loc.dtFormatter(t, Object.assign({}, this.opts, i));
    return a.resolvedOptions();
  }, e.num = function(t, i) {
    if (i === void 0 && (i = 0), this.opts.forceSimple)
      return Vr(t, i);
    var a = Object.assign({}, this.opts);
    return i > 0 && (a.padTo = i), this.loc.numberFormatter(a).format(t);
  }, e.formatDateTimeFromString = function(t, i) {
    var a = this, l = this.loc.listingMode() === "en", u = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && $e(), d = function(E, L) {
      return a.loc.extract(t, E, L);
    }, v = function(E) {
      return t.isOffsetFixed && t.offset === 0 && E.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, E.format) : "";
    }, p = function() {
      return l ? lC(t) : d({
        hour: "numeric",
        hour12: !0
      }, "dayperiod");
    }, y = function(E, L) {
      return l ? cC(t, E) : d(L ? {
        month: E
      } : {
        month: E,
        day: "numeric"
      }, "month");
    }, g = function(E, L) {
      return l ? fC(t, E) : d(L ? {
        weekday: E
      } : {
        weekday: E,
        month: "long",
        day: "numeric"
      }, "weekday");
    }, b = function(E) {
      var L = r.macroTokenToFormatOpts(E);
      return L ? a.formatWithSystemDefault(t, L) : E;
    }, S = function(E) {
      return l ? dC(t, E) : d({
        era: E
      }, "era");
    }, T = function(E) {
      switch (E) {
        case "S":
          return a.num(t.millisecond);
        case "u":
        case "SSS":
          return a.num(t.millisecond, 3);
        case "s":
          return a.num(t.second);
        case "ss":
          return a.num(t.second, 2);
        case "m":
          return a.num(t.minute);
        case "mm":
          return a.num(t.minute, 2);
        case "h":
          return a.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
        case "hh":
          return a.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
        case "H":
          return a.num(t.hour);
        case "HH":
          return a.num(t.hour, 2);
        case "Z":
          return v({
            format: "narrow",
            allowZ: a.opts.allowZ
          });
        case "ZZ":
          return v({
            format: "short",
            allowZ: a.opts.allowZ
          });
        case "ZZZ":
          return v({
            format: "techie",
            allowZ: a.opts.allowZ
          });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, {
            format: "short",
            locale: a.loc.locale
          });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, {
            format: "long",
            locale: a.loc.locale
          });
        case "z":
          return t.zoneName;
        case "a":
          return p();
        case "d":
          return u ? d({
            day: "numeric"
          }, "day") : a.num(t.day);
        case "dd":
          return u ? d({
            day: "2-digit"
          }, "day") : a.num(t.day, 2);
        case "c":
          return a.num(t.weekday);
        case "ccc":
          return g("short", !0);
        case "cccc":
          return g("long", !0);
        case "ccccc":
          return g("narrow", !0);
        case "E":
          return a.num(t.weekday);
        case "EEE":
          return g("short", !1);
        case "EEEE":
          return g("long", !1);
        case "EEEEE":
          return g("narrow", !1);
        case "L":
          return u ? d({
            month: "numeric",
            day: "numeric"
          }, "month") : a.num(t.month);
        case "LL":
          return u ? d({
            month: "2-digit",
            day: "numeric"
          }, "month") : a.num(t.month, 2);
        case "LLL":
          return y("short", !0);
        case "LLLL":
          return y("long", !0);
        case "LLLLL":
          return y("narrow", !0);
        case "M":
          return u ? d({
            month: "numeric"
          }, "month") : a.num(t.month);
        case "MM":
          return u ? d({
            month: "2-digit"
          }, "month") : a.num(t.month, 2);
        case "MMM":
          return y("short", !1);
        case "MMMM":
          return y("long", !1);
        case "MMMMM":
          return y("narrow", !1);
        case "y":
          return u ? d({
            year: "numeric"
          }, "year") : a.num(t.year);
        case "yy":
          return u ? d({
            year: "2-digit"
          }, "year") : a.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return u ? d({
            year: "numeric"
          }, "year") : a.num(t.year, 4);
        case "yyyyyy":
          return u ? d({
            year: "numeric"
          }, "year") : a.num(t.year, 6);
        case "G":
          return S("short");
        case "GG":
          return S("long");
        case "GGGGG":
          return S("narrow");
        case "kk":
          return a.num(t.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return a.num(t.weekYear, 4);
        case "W":
          return a.num(t.weekNumber);
        case "WW":
          return a.num(t.weekNumber, 2);
        case "o":
          return a.num(t.ordinal);
        case "ooo":
          return a.num(t.ordinal, 3);
        case "q":
          return a.num(t.quarter);
        case "qq":
          return a.num(t.quarter, 2);
        case "X":
          return a.num(Math.floor(t.ts / 1e3));
        case "x":
          return a.num(t.ts);
        default:
          return b(E);
      }
    };
    return Oa(r.parseFormat(i), T);
  }, e.formatDurationFromString = function(t, i) {
    var a = this, l = function(g) {
      switch (g[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, u = function(g) {
      return function(b) {
        var S = l(b);
        return S ? a.num(g.get(S), b.length) : b;
      };
    }, d = r.parseFormat(i), v = d.reduce(function(y, g) {
      var b = g.literal, S = g.val;
      return b ? y : y.concat(S);
    }, []), p = t.shiftTo.apply(t, v.map(l).filter(function(y) {
      return y;
    }));
    return Oa(d, u(p));
  }, r;
}(), ar = /* @__PURE__ */ function() {
  function r(n, t) {
    this.reason = n, this.explanation = t;
  }
  var e = r.prototype;
  return e.toMessage = function() {
    return this.explanation ? this.reason + ": " + this.explanation : this.reason;
  }, r;
}(), Qr = /* @__PURE__ */ function() {
  function r() {
  }
  var e = r.prototype;
  return e.offsetName = function(t, i) {
    throw new $r();
  }, e.formatOffset = function(t, i) {
    throw new $r();
  }, e.offset = function(t) {
    throw new $r();
  }, e.equals = function(t) {
    throw new $r();
  }, or(r, [{
    key: "type",
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function() {
      throw new $r();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
  }, {
    key: "name",
    get: function() {
      throw new $r();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
  }, {
    key: "universal",
    get: function() {
      throw new $r();
    }
  }, {
    key: "isValid",
    get: function() {
      throw new $r();
    }
  }]), r;
}(), Ot = null, Iu = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  var n = e.prototype;
  return n.offsetName = function(i, a) {
    var l = a.format, u = a.locale;
    return yu(i, l, u);
  }, n.formatOffset = function(i, a) {
    return qe(this.offset(i), a);
  }, n.offset = function(i) {
    return -new Date(i).getTimezoneOffset();
  }, n.equals = function(i) {
    return i.type === "local";
  }, or(e, [{
    key: "type",
    /** @override **/
    get: function() {
      return "local";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return hr() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }], [{
    key: "instance",
    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function() {
      return Ot === null && (Ot = new e()), Ot;
    }
  }]), e;
}(Qr), yC = RegExp("^" + gu.source + "$"), Le = {};
function pC(r) {
  return Le[r] || (Le[r] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: r,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), Le[r];
}
var gC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function $C(r, e) {
  var n = r.format(e).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), i = t[1], a = t[2], l = t[3], u = t[4], d = t[5], v = t[6];
  return [l, i, a, u, d, v];
}
function bC(r, e) {
  for (var n = r.formatToParts(e), t = [], i = 0; i < n.length; i++) {
    var a = n[i], l = a.type, u = a.value, d = gC[l];
    x(d) || (t[d] = parseInt(u, 10));
  }
  return t;
}
var Fe = {}, dr = /* @__PURE__ */ function(r) {
  er(e, r), e.create = function(i) {
    return Fe[i] || (Fe[i] = new e(i)), Fe[i];
  }, e.resetCache = function() {
    Fe = {}, Le = {};
  }, e.isValidSpecifier = function(i) {
    return !!(i && i.match(yC));
  }, e.isValidZone = function(i) {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: i
      }).format(), !0;
    } catch {
      return !1;
    }
  }, e.parseGMTOffset = function(i) {
    if (i) {
      var a = i.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
      if (a)
        return -60 * parseInt(a[1]);
    }
    return null;
  };
  function e(t) {
    var i;
    return i = r.call(this) || this, i.zoneName = t, i.valid = e.isValidZone(t), i;
  }
  var n = e.prototype;
  return n.offsetName = function(i, a) {
    var l = a.format, u = a.locale;
    return yu(i, l, u, this.name);
  }, n.formatOffset = function(i, a) {
    return qe(this.offset(i), a);
  }, n.offset = function(i) {
    var a = new Date(i);
    if (isNaN(a))
      return NaN;
    var l = pC(this.name), u = l.formatToParts ? bC(l, a) : $C(l, a), d = u[0], v = u[1], p = u[2], y = u[3], g = u[4], b = u[5], S = y === 24 ? 0 : y, T = ai({
      year: d,
      month: v,
      day: p,
      hour: S,
      minute: g,
      second: b,
      millisecond: 0
    }), O = +a, E = O % 1e3;
    return O -= E >= 0 ? E : 1e3 + E, (T - O) / (60 * 1e3);
  }, n.equals = function(i) {
    return i.type === "iana" && i.name === this.name;
  }, or(e, [{
    key: "type",
    get: function() {
      return "iana";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return this.valid;
    }
  }]), e;
}(Qr), It = null, W = /* @__PURE__ */ function(r) {
  er(e, r), e.instance = function(i) {
    return i === 0 ? e.utcInstance : new e(i);
  }, e.parseSpecifier = function(i) {
    if (i) {
      var a = i.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (a)
        return new e(ot(a[1], a[2]));
    }
    return null;
  }, or(e, null, [{
    key: "utcInstance",
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function() {
      return It === null && (It = new e(0)), It;
    }
  }]);
  function e(t) {
    var i;
    return i = r.call(this) || this, i.fixed = t, i;
  }
  var n = e.prototype;
  return n.offsetName = function() {
    return this.name;
  }, n.formatOffset = function(i, a) {
    return qe(this.fixed, a);
  }, n.offset = function() {
    return this.fixed;
  }, n.equals = function(i) {
    return i.type === "fixed" && i.fixed === this.fixed;
  }, or(e, [{
    key: "type",
    get: function() {
      return "fixed";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.fixed === 0 ? "UTC" : "UTC" + qe(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function() {
      return !0;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }]), e;
}(Qr), tn = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(t) {
    var i;
    return i = r.call(this) || this, i.zoneName = t, i;
  }
  var n = e.prototype;
  return n.offsetName = function() {
    return null;
  }, n.formatOffset = function() {
    return "";
  }, n.offset = function() {
    return NaN;
  }, n.equals = function() {
    return !1;
  }, or(e, [{
    key: "type",
    get: function() {
      return "invalid";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !1;
    }
  }]), e;
}(Qr);
function Or(r, e) {
  var n;
  if (x(r) || r === null)
    return e;
  if (r instanceof Qr)
    return r;
  if (KA(r)) {
    var t = r.toLowerCase();
    return t === "local" ? e : t === "utc" || t === "gmt" ? W.utcInstance : (n = dr.parseGMTOffset(r)) != null ? W.instance(n) : dr.isValidSpecifier(t) ? dr.create(r) : W.parseSpecifier(t) || new tn(r);
  } else
    return _r(r) ? W.instance(r) : typeof r == "object" && r.offset && typeof r.offset == "number" ? r : new tn(r);
}
var Ia = function() {
  return Date.now();
}, xt = null, xa = null, _a = null, Aa = null, Ca = !1, U = /* @__PURE__ */ function() {
  function r() {
  }
  return r.resetCaches = function() {
    B.resetCache(), dr.resetCache();
  }, or(r, null, [{
    key: "now",
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function() {
      return Ia;
    },
    set: function(n) {
      Ia = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */
  }, {
    key: "defaultZoneName",
    get: function() {
      return r.defaultZone.name;
    },
    set: function(n) {
      n ? xt = Or(n) : xt = null;
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */
  }, {
    key: "defaultZone",
    get: function() {
      return xt || Iu.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultLocale",
    get: function() {
      return xa;
    },
    set: function(n) {
      xa = n;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultNumberingSystem",
    get: function() {
      return _a;
    },
    set: function(n) {
      _a = n;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultOutputCalendar",
    get: function() {
      return Aa;
    },
    set: function(n) {
      Aa = n;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
  }, {
    key: "throwOnInvalid",
    get: function() {
      return Ca;
    },
    set: function(n) {
      Ca = n;
    }
  }]), r;
}(), nn = {};
function an(r, e) {
  e === void 0 && (e = {});
  var n = JSON.stringify([r, e]), t = nn[n];
  return t || (t = new Intl.DateTimeFormat(r, e), nn[n] = t), t;
}
var on = {};
function wC(r, e) {
  e === void 0 && (e = {});
  var n = JSON.stringify([r, e]), t = on[n];
  return t || (t = new Intl.NumberFormat(r, e), on[n] = t), t;
}
var sn = {};
function SC(r, e) {
  e === void 0 && (e = {});
  var n = e;
  n.base;
  var t = WA(n, ["base"]), i = JSON.stringify([r, t]), a = sn[i];
  return a || (a = new Intl.RelativeTimeFormat(r, e), sn[i] = a), a;
}
var Tr = null;
function EC() {
  if (Tr)
    return Tr;
  if (hr()) {
    var r = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Tr = !r || r === "und" ? "en-US" : r, Tr;
  } else
    return Tr = "en-US", Tr;
}
function TC(r) {
  var e = r.indexOf("-u-");
  if (e === -1)
    return [r];
  var n, t = r.substring(0, e);
  try {
    n = an(r).resolvedOptions();
  } catch {
    n = an(t).resolvedOptions();
  }
  var i = n, a = i.numberingSystem, l = i.calendar;
  return [t, a, l];
}
function OC(r, e, n) {
  return hr() ? ((n || e) && (r += "-u", n && (r += "-ca-" + n), e && (r += "-nu-" + e)), r) : [];
}
function IC(r) {
  for (var e = [], n = 1; n <= 12; n++) {
    var t = R.utc(2016, n, 1);
    e.push(r(t));
  }
  return e;
}
function xC(r) {
  for (var e = [], n = 1; n <= 7; n++) {
    var t = R.utc(2016, 11, 13 + n);
    e.push(r(t));
  }
  return e;
}
function Me(r, e, n, t, i) {
  var a = r.listingMode(n);
  return a === "error" ? null : a === "en" ? t(e) : i(e);
}
function _C(r) {
  return r.numberingSystem && r.numberingSystem !== "latn" ? !1 : r.numberingSystem === "latn" || !r.locale || r.locale.startsWith("en") || hr() && new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem === "latn";
}
var AC = /* @__PURE__ */ function() {
  function r(n, t, i) {
    if (this.padTo = i.padTo || 0, this.floor = i.floor || !1, !t && hr()) {
      var a = {
        useGrouping: !1
      };
      i.padTo > 0 && (a.minimumIntegerDigits = i.padTo), this.inf = wC(n, a);
    }
  }
  var e = r.prototype;
  return e.format = function(t) {
    if (this.inf) {
      var i = this.floor ? Math.floor(t) : t;
      return this.inf.format(i);
    } else {
      var a = this.floor ? Math.floor(t) : ii(t, 3);
      return Vr(a, this.padTo);
    }
  }, r;
}(), CC = /* @__PURE__ */ function() {
  function r(n, t, i) {
    this.opts = i, this.hasIntl = hr();
    var a;
    if (n.zone.universal && this.hasIntl) {
      var l = -1 * (n.offset / 60), u = l >= 0 ? "Etc/GMT+" + l : "Etc/GMT" + l, d = dr.isValidZone(u);
      n.offset !== 0 && d ? (a = u, this.dt = n) : (a = "UTC", i.timeZoneName ? this.dt = n : this.dt = n.offset === 0 ? n : R.fromMillis(n.ts + n.offset * 60 * 1e3));
    } else
      n.zone.type === "local" ? this.dt = n : (this.dt = n, a = n.zone.name);
    if (this.hasIntl) {
      var v = Object.assign({}, this.opts);
      a && (v.timeZone = a), this.dtf = an(t, v);
    }
  }
  var e = r.prototype;
  return e.format = function() {
    if (this.hasIntl)
      return this.dtf.format(this.dt.toJSDate());
    var t = vC(this.opts), i = B.create("en-US");
    return cr.create(i).formatDateTimeFromString(this.dt, t);
  }, e.formatToParts = function() {
    return this.hasIntl && $e() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
  }, e.resolvedOptions = function() {
    return this.hasIntl ? this.dtf.resolvedOptions() : {
      locale: "en-US",
      numberingSystem: "latn",
      outputCalendar: "gregory"
    };
  }, r;
}(), NC = /* @__PURE__ */ function() {
  function r(n, t, i) {
    this.opts = Object.assign({
      style: "long"
    }, i), !t && vu() && (this.rtf = SC(n, i));
  }
  var e = r.prototype;
  return e.format = function(t, i) {
    return this.rtf ? this.rtf.format(t, i) : hC(i, t, this.opts.numeric, this.opts.style !== "long");
  }, e.formatToParts = function(t, i) {
    return this.rtf ? this.rtf.formatToParts(t, i) : [];
  }, r;
}(), B = /* @__PURE__ */ function() {
  r.fromOpts = function(t) {
    return r.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
  }, r.create = function(t, i, a, l) {
    l === void 0 && (l = !1);
    var u = t || U.defaultLocale, d = u || (l ? "en-US" : EC()), v = i || U.defaultNumberingSystem, p = a || U.defaultOutputCalendar;
    return new r(d, v, p, u);
  }, r.resetCache = function() {
    Tr = null, nn = {}, on = {}, sn = {};
  }, r.fromObject = function(t) {
    var i = t === void 0 ? {} : t, a = i.locale, l = i.numberingSystem, u = i.outputCalendar;
    return r.create(a, l, u);
  };
  function r(n, t, i, a) {
    var l = TC(n), u = l[0], d = l[1], v = l[2];
    this.locale = u, this.numberingSystem = t || d || null, this.outputCalendar = i || v || null, this.intl = OC(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
      format: {},
      standalone: {}
    }, this.monthsCache = {
      format: {},
      standalone: {}
    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = a, this.fastNumbersCached = null;
  }
  var e = r.prototype;
  return e.listingMode = function(t) {
    t === void 0 && (t = !0);
    var i = hr(), a = i && $e(), l = this.isEnglish(), u = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return !a && !(l && u) && !t ? "error" : !a || l && u ? "en" : "intl";
  }, e.clone = function(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0 ? this : r.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1);
  }, e.redefaultToEN = function(t) {
    return t === void 0 && (t = {}), this.clone(Object.assign({}, t, {
      defaultToEN: !0
    }));
  }, e.redefaultToSystem = function(t) {
    return t === void 0 && (t = {}), this.clone(Object.assign({}, t, {
      defaultToEN: !1
    }));
  }, e.months = function(t, i, a) {
    var l = this;
    return i === void 0 && (i = !1), a === void 0 && (a = !0), Me(this, t, a, bu, function() {
      var u = i ? {
        month: t,
        day: "numeric"
      } : {
        month: t
      }, d = i ? "format" : "standalone";
      return l.monthsCache[d][t] || (l.monthsCache[d][t] = IC(function(v) {
        return l.extract(v, u, "month");
      })), l.monthsCache[d][t];
    });
  }, e.weekdays = function(t, i, a) {
    var l = this;
    return i === void 0 && (i = !1), a === void 0 && (a = !0), Me(this, t, a, Eu, function() {
      var u = i ? {
        weekday: t,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: t
      }, d = i ? "format" : "standalone";
      return l.weekdaysCache[d][t] || (l.weekdaysCache[d][t] = xC(function(v) {
        return l.extract(v, u, "weekday");
      })), l.weekdaysCache[d][t];
    });
  }, e.meridiems = function(t) {
    var i = this;
    return t === void 0 && (t = !0), Me(this, void 0, t, function() {
      return Tu;
    }, function() {
      if (!i.meridiemCache) {
        var a = {
          hour: "numeric",
          hour12: !0
        };
        i.meridiemCache = [R.utc(2016, 11, 13, 9), R.utc(2016, 11, 13, 19)].map(function(l) {
          return i.extract(l, a, "dayperiod");
        });
      }
      return i.meridiemCache;
    });
  }, e.eras = function(t, i) {
    var a = this;
    return i === void 0 && (i = !0), Me(this, t, i, Ou, function() {
      var l = {
        era: t
      };
      return a.eraCache[t] || (a.eraCache[t] = [R.utc(-40, 1, 1), R.utc(2017, 1, 1)].map(function(u) {
        return a.extract(u, l, "era");
      })), a.eraCache[t];
    });
  }, e.extract = function(t, i, a) {
    var l = this.dtFormatter(t, i), u = l.formatToParts(), d = u.find(function(v) {
      return v.type.toLowerCase() === a;
    });
    return d ? d.value : null;
  }, e.numberFormatter = function(t) {
    return t === void 0 && (t = {}), new AC(this.intl, t.forceSimple || this.fastNumbers, t);
  }, e.dtFormatter = function(t, i) {
    return i === void 0 && (i = {}), new CC(t, this.intl, i);
  }, e.relFormatter = function(t) {
    return t === void 0 && (t = {}), new NC(this.intl, this.isEnglish(), t);
  }, e.isEnglish = function() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hr() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }, e.equals = function(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }, or(r, [{
    key: "fastNumbers",
    get: function() {
      return this.fastNumbersCached == null && (this.fastNumbersCached = _C(this)), this.fastNumbersCached;
    }
  }]), r;
}();
function Kr() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  var t = e.reduce(function(i, a) {
    return i + a.source;
  }, "");
  return RegExp("^" + t + "$");
}
function Nr() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  return function(t) {
    return e.reduce(function(i, a) {
      var l = i[0], u = i[1], d = i[2], v = a(t, d), p = v[0], y = v[1], g = v[2];
      return [Object.assign(l, p), u || y, g];
    }, [{}, null, 1]).slice(0, 2);
  };
}
function re(r) {
  if (r == null)
    return [null, null];
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
    n[t - 1] = arguments[t];
  for (var i = 0, a = n; i < a.length; i++) {
    var l = a[i], u = l[0], d = l[1], v = u.exec(r);
    if (v)
      return d(v);
  }
  return [null, null];
}
function xu() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  return function(t, i) {
    var a = {}, l;
    for (l = 0; l < e.length; l++)
      a[e[l]] = H(t[i + l]);
    return [a, null, i + l];
  };
}
var _u = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, oi = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Au = RegExp("" + oi.source + _u.source + "?"), si = RegExp("(?:T" + Au.source + ")?"), FC = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, MC = /(\d{4})-?W(\d\d)(?:-?(\d))?/, kC = /(\d{4})-?(\d{3})/, DC = xu("weekYear", "weekNumber", "weekDay"), PC = xu("year", "ordinal"), LC = /(\d{4})-(\d\d)-(\d\d)/, Cu = RegExp(oi.source + " ?(?:" + _u.source + "|(" + gu.source + "))?"), UC = RegExp("(?: " + Cu.source + ")?");
function zr(r, e, n) {
  var t = r[e];
  return x(t) ? n : H(t);
}
function Nu(r, e) {
  var n = {
    year: zr(r, e),
    month: zr(r, e + 1, 1),
    day: zr(r, e + 2, 1)
  };
  return [n, null, e + 3];
}
function Fr(r, e) {
  var n = {
    hours: zr(r, e, 0),
    minutes: zr(r, e + 1, 0),
    seconds: zr(r, e + 2, 0),
    milliseconds: ni(r[e + 3])
  };
  return [n, null, e + 4];
}
function ee(r, e) {
  var n = !r[e] && !r[e + 1], t = ot(r[e + 1], r[e + 2]), i = n ? null : W.instance(t);
  return [{}, i, e + 3];
}
function Fu(r, e) {
  var n = r[e] ? dr.create(r[e]) : null;
  return [{}, n, e + 1];
}
var RC = RegExp("^T?" + oi.source + "$"), jC = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function BC(r) {
  var e = r[0], n = r[1], t = r[2], i = r[3], a = r[4], l = r[5], u = r[6], d = r[7], v = r[8], p = e[0] === "-", y = d && d[0] === "-", g = function(S, T) {
    return T === void 0 && (T = !1), S !== void 0 && (T || S && p) ? -S : S;
  };
  return [{
    years: g(H(n)),
    months: g(H(t)),
    weeks: g(H(i)),
    days: g(H(a)),
    hours: g(H(l)),
    minutes: g(H(u)),
    seconds: g(H(d), d === "-0"),
    milliseconds: g(ni(v), y)
  }];
}
var VC = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ui(r, e, n, t, i, a, l) {
  var u = {
    year: e.length === 2 ? en(H(e)) : H(e),
    month: $u.indexOf(n) + 1,
    day: H(t),
    hour: H(i),
    minute: H(a)
  };
  return l && (u.second = H(l)), r && (u.weekday = r.length > 3 ? wu.indexOf(r) + 1 : Su.indexOf(r) + 1), u;
}
var zC = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function ZC(r) {
  var e = r[1], n = r[2], t = r[3], i = r[4], a = r[5], l = r[6], u = r[7], d = r[8], v = r[9], p = r[10], y = r[11], g = ui(e, i, t, n, a, l, u), b;
  return d ? b = VC[d] : v ? b = 0 : b = ot(p, y), [g, new W(b)];
}
function HC(r) {
  return r.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
var GC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, qC = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, WC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Na(r) {
  var e = r[1], n = r[2], t = r[3], i = r[4], a = r[5], l = r[6], u = r[7], d = ui(e, i, t, n, a, l, u);
  return [d, W.utcInstance];
}
function YC(r) {
  var e = r[1], n = r[2], t = r[3], i = r[4], a = r[5], l = r[6], u = r[7], d = ui(e, u, n, t, i, a, l);
  return [d, W.utcInstance];
}
var JC = Kr(FC, si), XC = Kr(MC, si), QC = Kr(kC, si), KC = Kr(Au), rN = Nr(Nu, Fr, ee), eN = Nr(DC, Fr, ee), tN = Nr(PC, Fr, ee), nN = Nr(Fr, ee);
function iN(r) {
  return re(r, [JC, rN], [XC, eN], [QC, tN], [KC, nN]);
}
function aN(r) {
  return re(HC(r), [zC, ZC]);
}
function oN(r) {
  return re(r, [GC, Na], [qC, Na], [WC, YC]);
}
function sN(r) {
  return re(r, [jC, BC]);
}
var uN = Nr(Fr);
function lN(r) {
  return re(r, [RC, uN]);
}
var fN = Kr(LC, UC), cN = Kr(Cu), dN = Nr(Nu, Fr, ee, Fu), hN = Nr(Fr, ee, Fu);
function vN(r) {
  return re(r, [fN, dN], [cN, hN]);
}
var mN = "Invalid Duration", Mu = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1e3
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1e3
  },
  seconds: {
    milliseconds: 1e3
  }
}, yN = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, Mu), X = 146097 / 400, Lr = 146097 / 4800, pN = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: X / 7,
    days: X,
    hours: X * 24,
    minutes: X * 24 * 60,
    seconds: X * 24 * 60 * 60,
    milliseconds: X * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: X / 28,
    days: X / 4,
    hours: X * 24 / 4,
    minutes: X * 24 * 60 / 4,
    seconds: X * 24 * 60 * 60 / 4,
    milliseconds: X * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Lr / 7,
    days: Lr,
    hours: Lr * 24,
    minutes: Lr * 24 * 60,
    seconds: Lr * 24 * 60 * 60,
    milliseconds: Lr * 24 * 60 * 60 * 1e3
  }
}, Mu), Rr = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], gN = Rr.slice(0).reverse();
function Er(r, e, n) {
  n === void 0 && (n = !1);
  var t = {
    values: n ? e.values : Object.assign({}, r.values, e.values || {}),
    loc: r.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || r.conversionAccuracy
  };
  return new G(t);
}
function $N(r) {
  return r < 0 ? Math.floor(r) : Math.ceil(r);
}
function ku(r, e, n, t, i) {
  var a = r[i][n], l = e[n] / a, u = Math.sign(l) === Math.sign(t[i]), d = !u && t[i] !== 0 && Math.abs(l) <= 1 ? $N(l) : Math.trunc(l);
  t[i] += d, e[n] -= d * a;
}
function bN(r, e) {
  gN.reduce(function(n, t) {
    return x(e[t]) ? n : (n && ku(r, e, n, e, t), t);
  }, null);
}
var G = /* @__PURE__ */ function() {
  function r(n) {
    var t = n.conversionAccuracy === "longterm" || !1;
    this.values = n.values, this.loc = n.loc || B.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = n.invalid || null, this.matrix = t ? pN : yN, this.isLuxonDuration = !0;
  }
  r.fromMillis = function(t, i) {
    return r.fromObject(Object.assign({
      milliseconds: t
    }, i));
  }, r.fromObject = function(t) {
    if (t == null || typeof t != "object")
      throw new K("Duration.fromObject: argument expected to be an object, got " + (t === null ? "null" : typeof t));
    return new r({
      values: Ge(t, r.normalizeUnit, [
        "locale",
        "numberingSystem",
        "conversionAccuracy",
        "zone"
        // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: B.fromObject(t),
      conversionAccuracy: t.conversionAccuracy
    });
  }, r.fromISO = function(t, i) {
    var a = sN(t), l = a[0];
    if (l) {
      var u = Object.assign(l, i);
      return r.fromObject(u);
    } else
      return r.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
  }, r.fromISOTime = function(t, i) {
    var a = lN(t), l = a[0];
    if (l) {
      var u = Object.assign(l, i);
      return r.fromObject(u);
    } else
      return r.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
  }, r.invalid = function(t, i) {
    if (i === void 0 && (i = null), !t)
      throw new K("need to specify a reason the Duration is invalid");
    var a = t instanceof ar ? t : new ar(t, i);
    if (U.throwOnInvalid)
      throw new QA(a);
    return new r({
      invalid: a
    });
  }, r.normalizeUnit = function(t) {
    var i = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[t && t.toLowerCase()];
    if (!i)
      throw new cu(t);
    return i;
  }, r.isDuration = function(t) {
    return t && t.isLuxonDuration || !1;
  };
  var e = r.prototype;
  return e.toFormat = function(t, i) {
    i === void 0 && (i = {});
    var a = Object.assign({}, i, {
      floor: i.round !== !1 && i.floor !== !1
    });
    return this.isValid ? cr.create(this.loc, a).formatDurationFromString(this, t) : mN;
  }, e.toObject = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return {};
    var i = Object.assign({}, this.values);
    return t.includeConfig && (i.conversionAccuracy = this.conversionAccuracy, i.numberingSystem = this.loc.numberingSystem, i.locale = this.loc.locale), i;
  }, e.toISO = function() {
    if (!this.isValid)
      return null;
    var t = "P";
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += ii(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
  }, e.toISOTime = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return null;
    var i = this.toMillis();
    if (i < 0 || i >= 864e5)
      return null;
    t = Object.assign({
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended"
    }, t);
    var a = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), l = t.format === "basic" ? "hhmm" : "hh:mm";
    (!t.suppressSeconds || a.seconds !== 0 || a.milliseconds !== 0) && (l += t.format === "basic" ? "ss" : ":ss", (!t.suppressMilliseconds || a.milliseconds !== 0) && (l += ".SSS"));
    var u = a.toFormat(l);
    return t.includePrefix && (u = "T" + u), u;
  }, e.toJSON = function() {
    return this.toISO();
  }, e.toString = function() {
    return this.toISO();
  }, e.toMillis = function() {
    return this.as("milliseconds");
  }, e.valueOf = function() {
    return this.toMillis();
  }, e.plus = function(t) {
    if (!this.isValid)
      return this;
    for (var i = xr(t), a = {}, l = br(Rr), u; !(u = l()).done; ) {
      var d = u.value;
      (Zr(i.values, d) || Zr(this.values, d)) && (a[d] = i.get(d) + this.get(d));
    }
    return Er(this, {
      values: a
    }, !0);
  }, e.minus = function(t) {
    if (!this.isValid)
      return this;
    var i = xr(t);
    return this.plus(i.negate());
  }, e.mapUnits = function(t) {
    if (!this.isValid)
      return this;
    for (var i = {}, a = 0, l = Object.keys(this.values); a < l.length; a++) {
      var u = l[a];
      i[u] = pu(t(this.values[u], u));
    }
    return Er(this, {
      values: i
    }, !0);
  }, e.get = function(t) {
    return this[r.normalizeUnit(t)];
  }, e.set = function(t) {
    if (!this.isValid)
      return this;
    var i = Object.assign(this.values, Ge(t, r.normalizeUnit, []));
    return Er(this, {
      values: i
    });
  }, e.reconfigure = function(t) {
    var i = t === void 0 ? {} : t, a = i.locale, l = i.numberingSystem, u = i.conversionAccuracy, d = this.loc.clone({
      locale: a,
      numberingSystem: l
    }), v = {
      loc: d
    };
    return u && (v.conversionAccuracy = u), Er(this, v);
  }, e.as = function(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }, e.normalize = function() {
    if (!this.isValid)
      return this;
    var t = this.toObject();
    return bN(this.matrix, t), Er(this, {
      values: t
    }, !0);
  }, e.shiftTo = function() {
    for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++)
      i[a] = arguments[a];
    if (!this.isValid)
      return this;
    if (i.length === 0)
      return this;
    i = i.map(function(L) {
      return r.normalizeUnit(L);
    });
    for (var l = {}, u = {}, d = this.toObject(), v, p = br(Rr), y; !(y = p()).done; ) {
      var g = y.value;
      if (i.indexOf(g) >= 0) {
        v = g;
        var b = 0;
        for (var S in u)
          b += this.matrix[S][g] * u[S], u[S] = 0;
        _r(d[g]) && (b += d[g]);
        var T = Math.trunc(b);
        l[g] = T, u[g] = b - T;
        for (var O in d)
          Rr.indexOf(O) > Rr.indexOf(g) && ku(this.matrix, d, O, l, g);
      } else
        _r(d[g]) && (u[g] = d[g]);
    }
    for (var E in u)
      u[E] !== 0 && (l[v] += E === v ? u[E] : u[E] / this.matrix[v][E]);
    return Er(this, {
      values: l
    }, !0).normalize();
  }, e.negate = function() {
    if (!this.isValid)
      return this;
    for (var t = {}, i = 0, a = Object.keys(this.values); i < a.length; i++) {
      var l = a[i];
      t[l] = -this.values[l];
    }
    return Er(this, {
      values: t
    }, !0);
  }, e.equals = function(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
      return !1;
    function i(d, v) {
      return d === void 0 || d === 0 ? v === void 0 || v === 0 : d === v;
    }
    for (var a = br(Rr), l; !(l = a()).done; ) {
      var u = l.value;
      if (!i(this.values[u], t.values[u]))
        return !1;
    }
    return !0;
  }, or(r, [{
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
  }, {
    key: "quarters",
    get: function() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
  }, {
    key: "months",
    get: function() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
  }, {
    key: "weeks",
    get: function() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
  }, {
    key: "days",
    get: function() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
  }, {
    key: "hours",
    get: function() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
  }, {
    key: "minutes",
    get: function() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
  }, {
    key: "seconds",
    get: function() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
  }, {
    key: "milliseconds",
    get: function() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), r;
}();
function xr(r) {
  if (_r(r))
    return G.fromMillis(r);
  if (G.isDuration(r))
    return r;
  if (typeof r == "object")
    return G.fromObject(r);
  throw new K("Unknown duration argument " + r + " of type " + typeof r);
}
var oe = "Invalid Interval";
function wN(r, e) {
  return !r || !r.isValid ? me.invalid("missing or invalid start") : !e || !e.isValid ? me.invalid("missing or invalid end") : e < r ? me.invalid("end before start", "The end of an interval must be after its start, but you had start=" + r.toISO() + " and end=" + e.toISO()) : null;
}
var me = /* @__PURE__ */ function() {
  function r(n) {
    this.s = n.start, this.e = n.end, this.invalid = n.invalid || null, this.isLuxonInterval = !0;
  }
  r.invalid = function(t, i) {
    if (i === void 0 && (i = null), !t)
      throw new K("need to specify a reason the Interval is invalid");
    var a = t instanceof ar ? t : new ar(t, i);
    if (U.throwOnInvalid)
      throw new XA(a);
    return new r({
      invalid: a
    });
  }, r.fromDateTimes = function(t, i) {
    var a = le(t), l = le(i), u = wN(a, l);
    return u ?? new r({
      start: a,
      end: l
    });
  }, r.after = function(t, i) {
    var a = xr(i), l = le(t);
    return r.fromDateTimes(l, l.plus(a));
  }, r.before = function(t, i) {
    var a = xr(i), l = le(t);
    return r.fromDateTimes(l.minus(a), l);
  }, r.fromISO = function(t, i) {
    var a = (t || "").split("/", 2), l = a[0], u = a[1];
    if (l && u) {
      var d, v;
      try {
        d = R.fromISO(l, i), v = d.isValid;
      } catch {
        v = !1;
      }
      var p, y;
      try {
        p = R.fromISO(u, i), y = p.isValid;
      } catch {
        y = !1;
      }
      if (v && y)
        return r.fromDateTimes(d, p);
      if (v) {
        var g = G.fromISO(u, i);
        if (g.isValid)
          return r.after(d, g);
      } else if (y) {
        var b = G.fromISO(l, i);
        if (b.isValid)
          return r.before(p, b);
      }
    }
    return r.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
  }, r.isInterval = function(t) {
    return t && t.isLuxonInterval || !1;
  };
  var e = r.prototype;
  return e.length = function(t) {
    return t === void 0 && (t = "milliseconds"), this.isValid ? this.toDuration.apply(this, [t]).get(t) : NaN;
  }, e.count = function(t) {
    if (t === void 0 && (t = "milliseconds"), !this.isValid)
      return NaN;
    var i = this.start.startOf(t), a = this.end.startOf(t);
    return Math.floor(a.diff(i, t).get(t)) + 1;
  }, e.hasSame = function(t) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
  }, e.isEmpty = function() {
    return this.s.valueOf() === this.e.valueOf();
  }, e.isAfter = function(t) {
    return this.isValid ? this.s > t : !1;
  }, e.isBefore = function(t) {
    return this.isValid ? this.e <= t : !1;
  }, e.contains = function(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }, e.set = function(t) {
    var i = t === void 0 ? {} : t, a = i.start, l = i.end;
    return this.isValid ? r.fromDateTimes(a || this.s, l || this.e) : this;
  }, e.splitAt = function() {
    var t = this;
    if (!this.isValid)
      return [];
    for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
      a[l] = arguments[l];
    for (var u = a.map(le).filter(function(b) {
      return t.contains(b);
    }).sort(), d = [], v = this.s, p = 0; v < this.e; ) {
      var y = u[p] || this.e, g = +y > +this.e ? this.e : y;
      d.push(r.fromDateTimes(v, g)), v = g, p += 1;
    }
    return d;
  }, e.splitBy = function(t) {
    var i = xr(t);
    if (!this.isValid || !i.isValid || i.as("milliseconds") === 0)
      return [];
    for (var a = this.s, l = 1, u, d = []; a < this.e; ) {
      var v = this.start.plus(i.mapUnits(function(p) {
        return p * l;
      }));
      u = +v > +this.e ? this.e : v, d.push(r.fromDateTimes(a, u)), a = u, l += 1;
    }
    return d;
  }, e.divideEqually = function(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }, e.overlaps = function(t) {
    return this.e > t.s && this.s < t.e;
  }, e.abutsStart = function(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }, e.abutsEnd = function(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }, e.engulfs = function(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }, e.equals = function(t) {
    return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
  }, e.intersection = function(t) {
    if (!this.isValid)
      return this;
    var i = this.s > t.s ? this.s : t.s, a = this.e < t.e ? this.e : t.e;
    return i >= a ? null : r.fromDateTimes(i, a);
  }, e.union = function(t) {
    if (!this.isValid)
      return this;
    var i = this.s < t.s ? this.s : t.s, a = this.e > t.e ? this.e : t.e;
    return r.fromDateTimes(i, a);
  }, r.merge = function(t) {
    var i = t.sort(function(u, d) {
      return u.s - d.s;
    }).reduce(function(u, d) {
      var v = u[0], p = u[1];
      return p ? p.overlaps(d) || p.abutsStart(d) ? [v, p.union(d)] : [v.concat([p]), d] : [v, d];
    }, [[], null]), a = i[0], l = i[1];
    return l && a.push(l), a;
  }, r.xor = function(t) {
    for (var i, a = null, l = 0, u = [], d = t.map(function(S) {
      return [{
        time: S.s,
        type: "s"
      }, {
        time: S.e,
        type: "e"
      }];
    }), v = (i = Array.prototype).concat.apply(i, d), p = v.sort(function(S, T) {
      return S.time - T.time;
    }), y = br(p), g; !(g = y()).done; ) {
      var b = g.value;
      l += b.type === "s" ? 1 : -1, l === 1 ? a = b.time : (a && +a != +b.time && u.push(r.fromDateTimes(a, b.time)), a = null);
    }
    return r.merge(u);
  }, e.difference = function() {
    for (var t = this, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
      a[l] = arguments[l];
    return r.xor([this].concat(a)).map(function(u) {
      return t.intersection(u);
    }).filter(function(u) {
      return u && !u.isEmpty();
    });
  }, e.toString = function() {
    return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : oe;
  }, e.toISO = function(t) {
    return this.isValid ? this.s.toISO(t) + "/" + this.e.toISO(t) : oe;
  }, e.toISODate = function() {
    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : oe;
  }, e.toISOTime = function(t) {
    return this.isValid ? this.s.toISOTime(t) + "/" + this.e.toISOTime(t) : oe;
  }, e.toFormat = function(t, i) {
    var a = i === void 0 ? {} : i, l = a.separator, u = l === void 0 ? " – " : l;
    return this.isValid ? "" + this.s.toFormat(t) + u + this.e.toFormat(t) : oe;
  }, e.toDuration = function(t, i) {
    return this.isValid ? this.e.diff(this.s, t, i) : G.invalid(this.invalidReason);
  }, e.mapEndpoints = function(t) {
    return r.fromDateTimes(t(this.s), t(this.e));
  }, or(r, [{
    key: "start",
    get: function() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */
  }, {
    key: "end",
    get: function() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), r;
}(), ce = /* @__PURE__ */ function() {
  function r() {
  }
  return r.hasDST = function(n) {
    n === void 0 && (n = U.defaultZone);
    var t = R.now().setZone(n).set({
      month: 12
    });
    return !n.universal && t.offset !== t.set({
      month: 6
    }).offset;
  }, r.isValidIANAZone = function(n) {
    return dr.isValidSpecifier(n) && dr.isValidZone(n);
  }, r.normalizeZone = function(n) {
    return Or(n, U.defaultZone);
  }, r.months = function(n, t) {
    n === void 0 && (n = "long");
    var i = t === void 0 ? {} : t, a = i.locale, l = a === void 0 ? null : a, u = i.numberingSystem, d = u === void 0 ? null : u, v = i.locObj, p = v === void 0 ? null : v, y = i.outputCalendar, g = y === void 0 ? "gregory" : y;
    return (p || B.create(l, d, g)).months(n);
  }, r.monthsFormat = function(n, t) {
    n === void 0 && (n = "long");
    var i = t === void 0 ? {} : t, a = i.locale, l = a === void 0 ? null : a, u = i.numberingSystem, d = u === void 0 ? null : u, v = i.locObj, p = v === void 0 ? null : v, y = i.outputCalendar, g = y === void 0 ? "gregory" : y;
    return (p || B.create(l, d, g)).months(n, !0);
  }, r.weekdays = function(n, t) {
    n === void 0 && (n = "long");
    var i = t === void 0 ? {} : t, a = i.locale, l = a === void 0 ? null : a, u = i.numberingSystem, d = u === void 0 ? null : u, v = i.locObj, p = v === void 0 ? null : v;
    return (p || B.create(l, d, null)).weekdays(n);
  }, r.weekdaysFormat = function(n, t) {
    n === void 0 && (n = "long");
    var i = t === void 0 ? {} : t, a = i.locale, l = a === void 0 ? null : a, u = i.numberingSystem, d = u === void 0 ? null : u, v = i.locObj, p = v === void 0 ? null : v;
    return (p || B.create(l, d, null)).weekdays(n, !0);
  }, r.meridiems = function(n) {
    var t = n === void 0 ? {} : n, i = t.locale, a = i === void 0 ? null : i;
    return B.create(a).meridiems();
  }, r.eras = function(n, t) {
    n === void 0 && (n = "short");
    var i = t === void 0 ? {} : t, a = i.locale, l = a === void 0 ? null : a;
    return B.create(l, null, "gregory").eras(n);
  }, r.features = function() {
    var n = !1, t = !1, i = !1, a = !1;
    if (hr()) {
      n = !0, t = $e(), a = vu();
      try {
        i = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch {
        i = !1;
      }
    }
    return {
      intl: n,
      intlTokens: t,
      zones: i,
      relative: a
    };
  }, r;
}();
function Fa(r, e) {
  var n = function(a) {
    return a.toUTC(0, {
      keepLocalTime: !0
    }).startOf("day").valueOf();
  }, t = n(e) - n(r);
  return Math.floor(G.fromMillis(t).as("days"));
}
function SN(r, e, n) {
  for (var t = [["years", function(T, O) {
    return O.year - T.year;
  }], ["quarters", function(T, O) {
    return O.quarter - T.quarter;
  }], ["months", function(T, O) {
    return O.month - T.month + (O.year - T.year) * 12;
  }], ["weeks", function(T, O) {
    var E = Fa(T, O);
    return (E - E % 7) / 7;
  }], ["days", Fa]], i = {}, a, l, u = 0, d = t; u < d.length; u++) {
    var v = d[u], p = v[0], y = v[1];
    if (n.indexOf(p) >= 0) {
      var g;
      a = p;
      var b = y(r, e);
      if (l = r.plus((g = {}, g[p] = b, g)), l > e) {
        var S;
        r = r.plus((S = {}, S[p] = b - 1, S)), b -= 1;
      } else
        r = l;
      i[p] = b;
    }
  }
  return [r, i, l, a];
}
function EN(r, e, n, t) {
  var i = SN(r, e, n), a = i[0], l = i[1], u = i[2], d = i[3], v = e - a, p = n.filter(function(S) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(S) >= 0;
  });
  if (p.length === 0) {
    if (u < e) {
      var y;
      u = a.plus((y = {}, y[d] = 1, y));
    }
    u !== a && (l[d] = (l[d] || 0) + v / (u - a));
  }
  var g = G.fromObject(Object.assign(l, t));
  if (p.length > 0) {
    var b;
    return (b = G.fromMillis(v, t)).shiftTo.apply(b, p).plus(g);
  } else
    return g;
}
var li = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, Ma = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, TN = li.hanidec.replace(/[\[|\]]/g, "").split("");
function ON(r) {
  var e = parseInt(r, 10);
  if (isNaN(e)) {
    e = "";
    for (var n = 0; n < r.length; n++) {
      var t = r.charCodeAt(n);
      if (r[n].search(li.hanidec) !== -1)
        e += TN.indexOf(r[n]);
      else
        for (var i in Ma) {
          var a = Ma[i], l = a[0], u = a[1];
          t >= l && t <= u && (e += t - l);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function nr(r, e) {
  var n = r.numberingSystem;
  return e === void 0 && (e = ""), new RegExp("" + li[n || "latn"] + e);
}
var IN = "missing Intl.DateTimeFormat.formatToParts support";
function A(r, e) {
  return e === void 0 && (e = function(t) {
    return t;
  }), {
    regex: r,
    deser: function(t) {
      var i = t[0];
      return e(ON(i));
    }
  };
}
var xN = String.fromCharCode(160), Du = "( |" + xN + ")", Pu = new RegExp(Du, "g");
function _N(r) {
  return r.replace(/\./g, "\\.?").replace(Pu, Du);
}
function ka(r) {
  return r.replace(/\./g, "").replace(Pu, " ").toLowerCase();
}
function ir(r, e) {
  return r === null ? null : {
    regex: RegExp(r.map(_N).join("|")),
    deser: function(t) {
      var i = t[0];
      return r.findIndex(function(a) {
        return ka(i) === ka(a);
      }) + e;
    }
  };
}
function Da(r, e) {
  return {
    regex: r,
    deser: function(t) {
      var i = t[1], a = t[2];
      return ot(i, a);
    },
    groups: e
  };
}
function Pa(r) {
  return {
    regex: r,
    deser: function(n) {
      var t = n[0];
      return t;
    }
  };
}
function AN(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function CN(r, e) {
  var n = nr(e), t = nr(e, "{2}"), i = nr(e, "{3}"), a = nr(e, "{4}"), l = nr(e, "{6}"), u = nr(e, "{1,2}"), d = nr(e, "{1,3}"), v = nr(e, "{1,6}"), p = nr(e, "{1,9}"), y = nr(e, "{2,4}"), g = nr(e, "{4,6}"), b = function(E) {
    return {
      regex: RegExp(AN(E.val)),
      deser: function(pr) {
        var vr = pr[0];
        return vr;
      },
      literal: !0
    };
  }, S = function(E) {
    if (r.literal)
      return b(E);
    switch (E.val) {
      case "G":
        return ir(e.eras("short", !1), 0);
      case "GG":
        return ir(e.eras("long", !1), 0);
      case "y":
        return A(v);
      case "yy":
        return A(y, en);
      case "yyyy":
        return A(a);
      case "yyyyy":
        return A(g);
      case "yyyyyy":
        return A(l);
      case "M":
        return A(u);
      case "MM":
        return A(t);
      case "MMM":
        return ir(e.months("short", !0, !1), 1);
      case "MMMM":
        return ir(e.months("long", !0, !1), 1);
      case "L":
        return A(u);
      case "LL":
        return A(t);
      case "LLL":
        return ir(e.months("short", !1, !1), 1);
      case "LLLL":
        return ir(e.months("long", !1, !1), 1);
      case "d":
        return A(u);
      case "dd":
        return A(t);
      case "o":
        return A(d);
      case "ooo":
        return A(i);
      case "HH":
        return A(t);
      case "H":
        return A(u);
      case "hh":
        return A(t);
      case "h":
        return A(u);
      case "mm":
        return A(t);
      case "m":
        return A(u);
      case "q":
        return A(u);
      case "qq":
        return A(t);
      case "s":
        return A(u);
      case "ss":
        return A(t);
      case "S":
        return A(d);
      case "SSS":
        return A(i);
      case "u":
        return Pa(p);
      case "a":
        return ir(e.meridiems(), 0);
      case "kkkk":
        return A(a);
      case "kk":
        return A(y, en);
      case "W":
        return A(u);
      case "WW":
        return A(t);
      case "E":
      case "c":
        return A(n);
      case "EEE":
        return ir(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return ir(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return ir(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return ir(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Da(new RegExp("([+-]" + u.source + ")(?::(" + t.source + "))?"), 2);
      case "ZZZ":
        return Da(new RegExp("([+-]" + u.source + ")(" + t.source + ")?"), 2);
      case "z":
        return Pa(/[a-z_+-/]{1,256}?/i);
      default:
        return b(E);
    }
  }, T = S(r) || {
    invalidReason: IN
  };
  return T.token = r, T;
}
var NN = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function FN(r, e, n) {
  var t = r.type, i = r.value;
  if (t === "literal")
    return {
      literal: !0,
      val: i
    };
  var a = n[t], l = NN[t];
  if (typeof l == "object" && (l = l[a]), l)
    return {
      literal: !1,
      val: l
    };
}
function MN(r) {
  var e = r.map(function(n) {
    return n.regex;
  }).reduce(function(n, t) {
    return n + "(" + t.source + ")";
  }, "");
  return ["^" + e + "$", r];
}
function kN(r, e, n) {
  var t = r.match(e);
  if (t) {
    var i = {}, a = 1;
    for (var l in n)
      if (Zr(n, l)) {
        var u = n[l], d = u.groups ? u.groups + 1 : 1;
        !u.literal && u.token && (i[u.token.val[0]] = u.deser(t.slice(a, a + d))), a += d;
      }
    return [t, i];
  } else
    return [t, {}];
}
function DN(r) {
  var e = function(a) {
    switch (a) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  }, n;
  x(r.Z) ? x(r.z) ? n = null : n = dr.create(r.z) : n = new W(r.Z), x(r.q) || (r.M = (r.q - 1) * 3 + 1), x(r.h) || (r.h < 12 && r.a === 1 ? r.h += 12 : r.h === 12 && r.a === 0 && (r.h = 0)), r.G === 0 && r.y && (r.y = -r.y), x(r.u) || (r.S = ni(r.u));
  var t = Object.keys(r).reduce(function(i, a) {
    var l = e(a);
    return l && (i[l] = r[a]), i;
  }, {});
  return [t, n];
}
var _t = null;
function PN() {
  return _t || (_t = R.fromMillis(1555555555555)), _t;
}
function LN(r, e) {
  if (r.literal)
    return r;
  var n = cr.macroTokenToFormatOpts(r.val);
  if (!n)
    return r;
  var t = cr.create(e, n), i = t.formatDateTimeParts(PN()), a = i.map(function(l) {
    return FN(l, e, n);
  });
  return a.includes(void 0) ? r : a;
}
function UN(r, e) {
  var n;
  return (n = Array.prototype).concat.apply(n, r.map(function(t) {
    return LN(t, e);
  }));
}
function Lu(r, e, n) {
  var t = UN(cr.parseFormat(n), r), i = t.map(function(O) {
    return CN(O, r);
  }), a = i.find(function(O) {
    return O.invalidReason;
  });
  if (a)
    return {
      input: e,
      tokens: t,
      invalidReason: a.invalidReason
    };
  var l = MN(i), u = l[0], d = l[1], v = RegExp(u, "i"), p = kN(e, v, d), y = p[0], g = p[1], b = g ? DN(g) : [null, null], S = b[0], T = b[1];
  if (Zr(g, "a") && Zr(g, "H"))
    throw new fe("Can't include meridiem when specifying 24-hour format");
  return {
    input: e,
    tokens: t,
    regex: v,
    rawMatches: y,
    matches: g,
    result: S,
    zone: T
  };
}
function RN(r, e, n) {
  var t = Lu(r, e, n), i = t.result, a = t.zone, l = t.invalidReason;
  return [i, a, l];
}
var Uu = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Ru = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function rr(r, e) {
  return new ar("unit out of range", "you specified " + e + " (of type " + typeof e + ") as a " + r + ", which is invalid");
}
function ju(r, e, n) {
  var t = new Date(Date.UTC(r, e - 1, n)).getUTCDay();
  return t === 0 ? 7 : t;
}
function Bu(r, e, n) {
  return n + (be(r) ? Ru : Uu)[e - 1];
}
function Vu(r, e) {
  var n = be(r) ? Ru : Uu, t = n.findIndex(function(a) {
    return a < e;
  }), i = e - n[t];
  return {
    month: t + 1,
    day: i
  };
}
function un(r) {
  var e = r.year, n = r.month, t = r.day, i = Bu(e, n, t), a = ju(e, n, t), l = Math.floor((i - a + 10) / 7), u;
  return l < 1 ? (u = e - 1, l = He(u)) : l > He(e) ? (u = e + 1, l = 1) : u = e, Object.assign({
    weekYear: u,
    weekNumber: l,
    weekday: a
  }, st(r));
}
function La(r) {
  var e = r.weekYear, n = r.weekNumber, t = r.weekday, i = ju(e, 1, 4), a = ve(e), l = n * 7 + t - i - 3, u;
  l < 1 ? (u = e - 1, l += ve(u)) : l > a ? (u = e + 1, l -= ve(e)) : u = e;
  var d = Vu(u, l), v = d.month, p = d.day;
  return Object.assign({
    year: u,
    month: v,
    day: p
  }, st(r));
}
function At(r) {
  var e = r.year, n = r.month, t = r.day, i = Bu(e, n, t);
  return Object.assign({
    year: e,
    ordinal: i
  }, st(r));
}
function Ua(r) {
  var e = r.year, n = r.ordinal, t = Vu(e, n), i = t.month, a = t.day;
  return Object.assign({
    year: e,
    month: i,
    day: a
  }, st(r));
}
function jN(r) {
  var e = at(r.weekYear), n = mr(r.weekNumber, 1, He(r.weekYear)), t = mr(r.weekday, 1, 7);
  return e ? n ? t ? !1 : rr("weekday", r.weekday) : rr("week", r.week) : rr("weekYear", r.weekYear);
}
function BN(r) {
  var e = at(r.year), n = mr(r.ordinal, 1, ve(r.year));
  return e ? n ? !1 : rr("ordinal", r.ordinal) : rr("year", r.year);
}
function zu(r) {
  var e = at(r.year), n = mr(r.month, 1, 12), t = mr(r.day, 1, Ze(r.year, r.month));
  return e ? n ? t ? !1 : rr("day", r.day) : rr("month", r.month) : rr("year", r.year);
}
function Zu(r) {
  var e = r.hour, n = r.minute, t = r.second, i = r.millisecond, a = mr(e, 0, 23) || e === 24 && n === 0 && t === 0 && i === 0, l = mr(n, 0, 59), u = mr(t, 0, 59), d = mr(i, 0, 999);
  return a ? l ? u ? d ? !1 : rr("millisecond", i) : rr("second", t) : rr("minute", n) : rr("hour", e);
}
var Ct = "Invalid DateTime", Ra = 864e13;
function ke(r) {
  return new ar("unsupported zone", 'the zone "' + r.name + '" is not supported');
}
function Nt(r) {
  return r.weekData === null && (r.weekData = un(r.c)), r.weekData;
}
function se(r, e) {
  var n = {
    ts: r.ts,
    zone: r.zone,
    c: r.c,
    o: r.o,
    loc: r.loc,
    invalid: r.invalid
  };
  return new R(Object.assign({}, n, e, {
    old: n
  }));
}
function Hu(r, e, n) {
  var t = r - e * 60 * 1e3, i = n.offset(t);
  if (e === i)
    return [t, e];
  t -= (i - e) * 60 * 1e3;
  var a = n.offset(t);
  return i === a ? [t, i] : [r - Math.min(i, a) * 60 * 1e3, Math.max(i, a)];
}
function ja(r, e) {
  r += e * 60 * 1e3;
  var n = new Date(r);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function Ue(r, e, n) {
  return Hu(ai(r), e, n);
}
function Ba(r, e) {
  var n = r.o, t = r.c.year + Math.trunc(e.years), i = r.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, a = Object.assign({}, r.c, {
    year: t,
    month: i,
    day: Math.min(r.c.day, Ze(t, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }), l = G.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), u = ai(a), d = Hu(u, n, r.zone), v = d[0], p = d[1];
  return l !== 0 && (v += l, p = r.zone.offset(v)), {
    ts: v,
    o: p
  };
}
function ue(r, e, n, t, i) {
  var a = n.setZone, l = n.zone;
  if (r && Object.keys(r).length !== 0) {
    var u = e || l, d = R.fromObject(Object.assign(r, n, {
      zone: u,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: void 0
    }));
    return a ? d : d.setZone(l);
  } else
    return R.invalid(new ar("unparsable", 'the input "' + i + `" can't be parsed as ` + t));
}
function jr(r, e, n) {
  return n === void 0 && (n = !0), r.isValid ? cr.create(B.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(r, e) : null;
}
function Va(r, e) {
  var n = e.suppressSeconds, t = n === void 0 ? !1 : n, i = e.suppressMilliseconds, a = i === void 0 ? !1 : i, l = e.includeOffset, u = e.includePrefix, d = u === void 0 ? !1 : u, v = e.includeZone, p = v === void 0 ? !1 : v, y = e.spaceZone, g = y === void 0 ? !1 : y, b = e.format, S = b === void 0 ? "extended" : b, T = S === "basic" ? "HHmm" : "HH:mm";
  (!t || r.second !== 0 || r.millisecond !== 0) && (T += S === "basic" ? "ss" : ":ss", (!a || r.millisecond !== 0) && (T += ".SSS")), (p || l) && g && (T += " "), p ? T += "z" : l && (T += S === "basic" ? "ZZZ" : "ZZ");
  var O = jr(r, T);
  return d && (O = "T" + O), O;
}
var Gu = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, VN = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, zN = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, qu = ["year", "month", "day", "hour", "minute", "second", "millisecond"], ZN = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], HN = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function za(r) {
  var e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[r.toLowerCase()];
  if (!e)
    throw new cu(r);
  return e;
}
function Za(r, e) {
  for (var n = br(qu), t; !(t = n()).done; ) {
    var i = t.value;
    x(r[i]) && (r[i] = Gu[i]);
  }
  var a = zu(r) || Zu(r);
  if (a)
    return R.invalid(a);
  var l = U.now(), u = e.offset(l), d = Ue(r, u, e), v = d[0], p = d[1];
  return new R({
    ts: v,
    zone: e,
    o: p
  });
}
function Ha(r, e, n) {
  var t = x(n.round) ? !0 : n.round, i = function(y, g) {
    y = ii(y, t || n.calendary ? 0 : 2, !0);
    var b = e.loc.clone(n).relFormatter(n);
    return b.format(y, g);
  }, a = function(y) {
    return n.calendary ? e.hasSame(r, y) ? 0 : e.startOf(y).diff(r.startOf(y), y).get(y) : e.diff(r, y).get(y);
  };
  if (n.unit)
    return i(a(n.unit), n.unit);
  for (var l = br(n.units), u; !(u = l()).done; ) {
    var d = u.value, v = a(d);
    if (Math.abs(v) >= 1)
      return i(v, d);
  }
  return i(r > e ? -0 : 0, n.units[n.units.length - 1]);
}
var R = /* @__PURE__ */ function() {
  function r(n) {
    var t = n.zone || U.defaultZone, i = n.invalid || (Number.isNaN(n.ts) ? new ar("invalid input") : null) || (t.isValid ? null : ke(t));
    this.ts = x(n.ts) ? U.now() : n.ts;
    var a = null, l = null;
    if (!i) {
      var u = n.old && n.old.ts === this.ts && n.old.zone.equals(t);
      if (u) {
        var d = [n.old.c, n.old.o];
        a = d[0], l = d[1];
      } else {
        var v = t.offset(this.ts);
        a = ja(this.ts, v), i = Number.isNaN(a.year) ? new ar("invalid input") : null, a = i ? null : a, l = i ? null : v;
      }
    }
    this._zone = t, this.loc = n.loc || B.create(), this.invalid = i, this.weekData = null, this.c = a, this.o = l, this.isLuxonDateTime = !0;
  }
  r.now = function() {
    return new r({});
  }, r.local = function(t, i, a, l, u, d, v) {
    return x(t) ? r.now() : Za({
      year: t,
      month: i,
      day: a,
      hour: l,
      minute: u,
      second: d,
      millisecond: v
    }, U.defaultZone);
  }, r.utc = function(t, i, a, l, u, d, v) {
    return x(t) ? new r({
      ts: U.now(),
      zone: W.utcInstance
    }) : Za({
      year: t,
      month: i,
      day: a,
      hour: l,
      minute: u,
      second: d,
      millisecond: v
    }, W.utcInstance);
  }, r.fromJSDate = function(t, i) {
    i === void 0 && (i = {});
    var a = rC(t) ? t.valueOf() : NaN;
    if (Number.isNaN(a))
      return r.invalid("invalid input");
    var l = Or(i.zone, U.defaultZone);
    return l.isValid ? new r({
      ts: a,
      zone: l,
      loc: B.fromObject(i)
    }) : r.invalid(ke(l));
  }, r.fromMillis = function(t, i) {
    if (i === void 0 && (i = {}), _r(t))
      return t < -Ra || t > Ra ? r.invalid("Timestamp out of range") : new r({
        ts: t,
        zone: Or(i.zone, U.defaultZone),
        loc: B.fromObject(i)
      });
    throw new K("fromMillis requires a numerical input, but received a " + typeof t + " with value " + t);
  }, r.fromSeconds = function(t, i) {
    if (i === void 0 && (i = {}), _r(t))
      return new r({
        ts: t * 1e3,
        zone: Or(i.zone, U.defaultZone),
        loc: B.fromObject(i)
      });
    throw new K("fromSeconds requires a numerical input");
  }, r.fromObject = function(t) {
    var i = Or(t.zone, U.defaultZone);
    if (!i.isValid)
      return r.invalid(ke(i));
    var a = U.now(), l = i.offset(a), u = Ge(t, za, ["zone", "locale", "outputCalendar", "numberingSystem"]), d = !x(u.ordinal), v = !x(u.year), p = !x(u.month) || !x(u.day), y = v || p, g = u.weekYear || u.weekNumber, b = B.fromObject(t);
    if ((y || d) && g)
      throw new fe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (p && d)
      throw new fe("Can't mix ordinal dates with month/day");
    var S = g || u.weekday && !y, T, O, E = ja(a, l);
    S ? (T = ZN, O = VN, E = un(E)) : d ? (T = HN, O = zN, E = At(E)) : (T = qu, O = Gu);
    for (var L = !1, pr = br(T), vr; !(vr = pr()).done; ) {
      var Z = vr.value, we = u[Z];
      x(we) ? L ? u[Z] = O[Z] : u[Z] = E[Z] : L = !0;
    }
    var Se = S ? jN(u) : d ? BN(u) : zu(u), Ee = Se || Zu(u);
    if (Ee)
      return r.invalid(Ee);
    var lt = S ? La(u) : d ? Ua(u) : u, Te = Ue(lt, l, i), ft = Te[0], ct = Te[1], te = new r({
      ts: ft,
      zone: i,
      o: ct,
      loc: b
    });
    return u.weekday && y && t.weekday !== te.weekday ? r.invalid("mismatched weekday", "you can't specify both a weekday of " + u.weekday + " and a date of " + te.toISO()) : te;
  }, r.fromISO = function(t, i) {
    i === void 0 && (i = {});
    var a = iN(t), l = a[0], u = a[1];
    return ue(l, u, i, "ISO 8601", t);
  }, r.fromRFC2822 = function(t, i) {
    i === void 0 && (i = {});
    var a = aN(t), l = a[0], u = a[1];
    return ue(l, u, i, "RFC 2822", t);
  }, r.fromHTTP = function(t, i) {
    i === void 0 && (i = {});
    var a = oN(t), l = a[0], u = a[1];
    return ue(l, u, i, "HTTP", i);
  }, r.fromFormat = function(t, i, a) {
    if (a === void 0 && (a = {}), x(t) || x(i))
      throw new K("fromFormat requires an input string and a format");
    var l = a, u = l.locale, d = u === void 0 ? null : u, v = l.numberingSystem, p = v === void 0 ? null : v, y = B.fromOpts({
      locale: d,
      numberingSystem: p,
      defaultToEN: !0
    }), g = RN(y, t, i), b = g[0], S = g[1], T = g[2];
    return T ? r.invalid(T) : ue(b, S, a, "format " + i, t);
  }, r.fromString = function(t, i, a) {
    return a === void 0 && (a = {}), r.fromFormat(t, i, a);
  }, r.fromSQL = function(t, i) {
    i === void 0 && (i = {});
    var a = vN(t), l = a[0], u = a[1];
    return ue(l, u, i, "SQL", t);
  }, r.invalid = function(t, i) {
    if (i === void 0 && (i = null), !t)
      throw new K("need to specify a reason the DateTime is invalid");
    var a = t instanceof ar ? t : new ar(t, i);
    if (U.throwOnInvalid)
      throw new JA(a);
    return new r({
      invalid: a
    });
  }, r.isDateTime = function(t) {
    return t && t.isLuxonDateTime || !1;
  };
  var e = r.prototype;
  return e.get = function(t) {
    return this[t];
  }, e.resolvedLocaleOpts = function(t) {
    t === void 0 && (t = {});
    var i = cr.create(this.loc.clone(t), t).resolvedOptions(this), a = i.locale, l = i.numberingSystem, u = i.calendar;
    return {
      locale: a,
      numberingSystem: l,
      outputCalendar: u
    };
  }, e.toUTC = function(t, i) {
    return t === void 0 && (t = 0), i === void 0 && (i = {}), this.setZone(W.instance(t), i);
  }, e.toLocal = function() {
    return this.setZone(U.defaultZone);
  }, e.setZone = function(t, i) {
    var a = i === void 0 ? {} : i, l = a.keepLocalTime, u = l === void 0 ? !1 : l, d = a.keepCalendarTime, v = d === void 0 ? !1 : d;
    if (t = Or(t, U.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      var p = this.ts;
      if (u || v) {
        var y = t.offset(this.ts), g = this.toObject(), b = Ue(g, y, t);
        p = b[0];
      }
      return se(this, {
        ts: p,
        zone: t
      });
    } else
      return r.invalid(ke(t));
  }, e.reconfigure = function(t) {
    var i = t === void 0 ? {} : t, a = i.locale, l = i.numberingSystem, u = i.outputCalendar, d = this.loc.clone({
      locale: a,
      numberingSystem: l,
      outputCalendar: u
    });
    return se(this, {
      loc: d
    });
  }, e.setLocale = function(t) {
    return this.reconfigure({
      locale: t
    });
  }, e.set = function(t) {
    if (!this.isValid)
      return this;
    var i = Ge(t, za, []), a = !x(i.weekYear) || !x(i.weekNumber) || !x(i.weekday), l = !x(i.ordinal), u = !x(i.year), d = !x(i.month) || !x(i.day), v = u || d, p = i.weekYear || i.weekNumber;
    if ((v || l) && p)
      throw new fe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (d && l)
      throw new fe("Can't mix ordinal dates with month/day");
    var y;
    a ? y = La(Object.assign(un(this.c), i)) : x(i.ordinal) ? (y = Object.assign(this.toObject(), i), x(i.day) && (y.day = Math.min(Ze(y.year, y.month), y.day))) : y = Ua(Object.assign(At(this.c), i));
    var g = Ue(y, this.o, this.zone), b = g[0], S = g[1];
    return se(this, {
      ts: b,
      o: S
    });
  }, e.plus = function(t) {
    if (!this.isValid)
      return this;
    var i = xr(t);
    return se(this, Ba(this, i));
  }, e.minus = function(t) {
    if (!this.isValid)
      return this;
    var i = xr(t).negate();
    return se(this, Ba(this, i));
  }, e.startOf = function(t) {
    if (!this.isValid)
      return this;
    var i = {}, a = G.normalizeUnit(t);
    switch (a) {
      case "years":
        i.month = 1;
      case "quarters":
      case "months":
        i.day = 1;
      case "weeks":
      case "days":
        i.hour = 0;
      case "hours":
        i.minute = 0;
      case "minutes":
        i.second = 0;
      case "seconds":
        i.millisecond = 0;
        break;
    }
    if (a === "weeks" && (i.weekday = 1), a === "quarters") {
      var l = Math.ceil(this.month / 3);
      i.month = (l - 1) * 3 + 1;
    }
    return this.set(i);
  }, e.endOf = function(t) {
    var i;
    return this.isValid ? this.plus((i = {}, i[t] = 1, i)).startOf(t).minus(1) : this;
  }, e.toFormat = function(t, i) {
    return i === void 0 && (i = {}), this.isValid ? cr.create(this.loc.redefaultToEN(i)).formatDateTimeFromString(this, t) : Ct;
  }, e.toLocaleString = function(t) {
    return t === void 0 && (t = ze), this.isValid ? cr.create(this.loc.clone(t), t).formatDateTime(this) : Ct;
  }, e.toLocaleParts = function(t) {
    return t === void 0 && (t = {}), this.isValid ? cr.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
  }, e.toISO = function(t) {
    return t === void 0 && (t = {}), this.isValid ? this.toISODate(t) + "T" + this.toISOTime(t) : null;
  }, e.toISODate = function(t) {
    var i = t === void 0 ? {} : t, a = i.format, l = a === void 0 ? "extended" : a, u = l === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    return this.year > 9999 && (u = "+" + u), jr(this, u);
  }, e.toISOWeekDate = function() {
    return jr(this, "kkkk-'W'WW-c");
  }, e.toISOTime = function(t) {
    var i = t === void 0 ? {} : t, a = i.suppressMilliseconds, l = a === void 0 ? !1 : a, u = i.suppressSeconds, d = u === void 0 ? !1 : u, v = i.includeOffset, p = v === void 0 ? !0 : v, y = i.includePrefix, g = y === void 0 ? !1 : y, b = i.format, S = b === void 0 ? "extended" : b;
    return Va(this, {
      suppressSeconds: d,
      suppressMilliseconds: l,
      includeOffset: p,
      includePrefix: g,
      format: S
    });
  }, e.toRFC2822 = function() {
    return jr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }, e.toHTTP = function() {
    return jr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }, e.toSQLDate = function() {
    return jr(this, "yyyy-MM-dd");
  }, e.toSQLTime = function(t) {
    var i = t === void 0 ? {} : t, a = i.includeOffset, l = a === void 0 ? !0 : a, u = i.includeZone, d = u === void 0 ? !1 : u;
    return Va(this, {
      includeOffset: l,
      includeZone: d,
      spaceZone: !0
    });
  }, e.toSQL = function(t) {
    return t === void 0 && (t = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(t) : null;
  }, e.toString = function() {
    return this.isValid ? this.toISO() : Ct;
  }, e.valueOf = function() {
    return this.toMillis();
  }, e.toMillis = function() {
    return this.isValid ? this.ts : NaN;
  }, e.toSeconds = function() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }, e.toJSON = function() {
    return this.toISO();
  }, e.toBSON = function() {
    return this.toJSDate();
  }, e.toObject = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return {};
    var i = Object.assign({}, this.c);
    return t.includeConfig && (i.outputCalendar = this.outputCalendar, i.numberingSystem = this.loc.numberingSystem, i.locale = this.loc.locale), i;
  }, e.toJSDate = function() {
    return new Date(this.isValid ? this.ts : NaN);
  }, e.diff = function(t, i, a) {
    if (i === void 0 && (i = "milliseconds"), a === void 0 && (a = {}), !this.isValid || !t.isValid)
      return G.invalid(this.invalid || t.invalid, "created by diffing an invalid DateTime");
    var l = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, a), u = eC(i).map(G.normalizeUnit), d = t.valueOf() > this.valueOf(), v = d ? this : t, p = d ? t : this, y = EN(v, p, u, l);
    return d ? y.negate() : y;
  }, e.diffNow = function(t, i) {
    return t === void 0 && (t = "milliseconds"), i === void 0 && (i = {}), this.diff(r.now(), t, i);
  }, e.until = function(t) {
    return this.isValid ? me.fromDateTimes(this, t) : this;
  }, e.hasSame = function(t, i) {
    if (!this.isValid)
      return !1;
    var a = t.valueOf(), l = this.setZone(t.zone, {
      keepLocalTime: !0
    });
    return l.startOf(i) <= a && a <= l.endOf(i);
  }, e.equals = function(t) {
    return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
  }, e.toRelative = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return null;
    var i = t.base || r.fromObject({
      zone: this.zone
    }), a = t.padding ? this < i ? -t.padding : t.padding : 0, l = ["years", "months", "days", "hours", "minutes", "seconds"], u = t.unit;
    return Array.isArray(t.unit) && (l = t.unit, u = void 0), Ha(i, this.plus(a), Object.assign(t, {
      numeric: "always",
      units: l,
      unit: u
    }));
  }, e.toRelativeCalendar = function(t) {
    return t === void 0 && (t = {}), this.isValid ? Ha(t.base || r.fromObject({
      zone: this.zone
    }), this, Object.assign(t, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    })) : null;
  }, r.min = function() {
    for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++)
      i[a] = arguments[a];
    if (!i.every(r.isDateTime))
      throw new K("min requires all arguments be DateTimes");
    return Ta(i, function(l) {
      return l.valueOf();
    }, Math.min);
  }, r.max = function() {
    for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++)
      i[a] = arguments[a];
    if (!i.every(r.isDateTime))
      throw new K("max requires all arguments be DateTimes");
    return Ta(i, function(l) {
      return l.valueOf();
    }, Math.max);
  }, r.fromFormatExplain = function(t, i, a) {
    a === void 0 && (a = {});
    var l = a, u = l.locale, d = u === void 0 ? null : u, v = l.numberingSystem, p = v === void 0 ? null : v, y = B.fromOpts({
      locale: d,
      numberingSystem: p,
      defaultToEN: !0
    });
    return Lu(y, t, i);
  }, r.fromStringExplain = function(t, i, a) {
    return a === void 0 && (a = {}), r.fromFormatExplain(t, i, a);
  }, or(r, [{
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "outputCalendar",
    get: function() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
  }, {
    key: "zone",
    get: function() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
  }, {
    key: "zoneName",
    get: function() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
  }, {
    key: "year",
    get: function() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
  }, {
    key: "quarter",
    get: function() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
  }, {
    key: "month",
    get: function() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
  }, {
    key: "day",
    get: function() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
  }, {
    key: "hour",
    get: function() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
  }, {
    key: "minute",
    get: function() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
  }, {
    key: "second",
    get: function() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
  }, {
    key: "millisecond",
    get: function() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
  }, {
    key: "weekYear",
    get: function() {
      return this.isValid ? Nt(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
  }, {
    key: "weekNumber",
    get: function() {
      return this.isValid ? Nt(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
  }, {
    key: "weekday",
    get: function() {
      return this.isValid ? Nt(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
  }, {
    key: "ordinal",
    get: function() {
      return this.isValid ? At(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
  }, {
    key: "monthShort",
    get: function() {
      return this.isValid ? ce.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
  }, {
    key: "monthLong",
    get: function() {
      return this.isValid ? ce.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
  }, {
    key: "weekdayShort",
    get: function() {
      return this.isValid ? ce.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
  }, {
    key: "weekdayLong",
    get: function() {
      return this.isValid ? ce.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
  }, {
    key: "offset",
    get: function() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameShort",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      }) : null;
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameLong",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      }) : null;
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
  }, {
    key: "isOffsetFixed",
    get: function() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
  }, {
    key: "isInDST",
    get: function() {
      return this.isOffsetFixed ? !1 : this.offset > this.set({
        month: 1
      }).offset || this.offset > this.set({
        month: 5
      }).offset;
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
  }, {
    key: "isInLeapYear",
    get: function() {
      return be(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
  }, {
    key: "daysInMonth",
    get: function() {
      return Ze(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
  }, {
    key: "daysInYear",
    get: function() {
      return this.isValid ? ve(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
  }, {
    key: "weeksInWeekYear",
    get: function() {
      return this.isValid ? He(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function() {
      return ze;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED",
    get: function() {
      return Un;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function() {
      return du;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_FULL",
    get: function() {
      return Rn;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_HUGE",
    get: function() {
      return jn;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_SIMPLE",
    get: function() {
      return Bn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SECONDS",
    get: function() {
      return Vn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function() {
      return zn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function() {
      return Zn;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_SIMPLE",
    get: function() {
      return Hn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function() {
      return Gn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function() {
      return qn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function() {
      return Wn;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT",
    get: function() {
      return Yn;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function() {
      return Jn;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED",
    get: function() {
      return Xn;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function() {
      return Qn;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function() {
      return hu;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL",
    get: function() {
      return Kn;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function() {
      return ri;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE",
    get: function() {
      return ei;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function() {
      return ti;
    }
  }]), r;
}();
function le(r) {
  if (R.isDateTime(r))
    return r;
  if (r && r.valueOf && _r(r.valueOf()))
    return R.fromJSDate(r);
  if (r && typeof r == "object")
    return R.fromObject(r);
  throw new K("Unknown datetime argument: " + r + ", of type " + typeof r);
}
var GN = "1.28.0";
J.DateTime = R;
J.Duration = G;
J.FixedOffsetZone = W;
J.IANAZone = dr;
J.Info = ce;
J.Interval = me;
J.InvalidZone = tn;
J.LocalZone = Iu;
J.Settings = U;
J.VERSION = GN;
J.Zone = Qr;
const { DateTime: Ga } = J, { IncorrectUsageError: qN } = Js, WN = {
  invalidInterval: 'Invalid interval specified. Only "month" value is accepted.'
}, YN = ["month"], JN = (r, e) => {
  if (e === "month") {
    const n = Ga.fromISO(r, { zone: "UTC" }), t = Ga.now().setZone("UTC"), i = Math.floor(t.diff(n, "months").months);
    return n.plus({ months: i }).toISO();
  }
  throw new qN({
    message: WN.invalidInterval
  });
};
var XN = {
  lastPeriodStart: JN,
  SUPPORTED_INTERVALS: YN
};
const ye = rI, Wu = HA, { lastPeriodStart: QN, SUPPORTED_INTERVALS: qa } = XN, Yu = /{{([\s\S]+?)}}/g;
class ut {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {String} options.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, error: n, helpLink: t, db: i, errors: a }) {
    this.name = e, this.error = n, this.helpLink = t, this.db = i, this.errors = a;
  }
  generateError() {
    let e = {
      errorDetails: {
        name: this.name
      }
    };
    return this.helpLink && (e.help = this.helpLink), e;
  }
}
let KN = class extends ut {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.max - maximum limit the limit would check against
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {Function} [options.config.formatter] - function to format the limit counts before they are passed to the error message
   * @param {String} [options.config.error] - error message to use when limit is reached
   * @param {String} [options.helpLink] - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, db: i, errors: a }) {
    if (super({ name: e, error: n.error || "", helpLink: t, db: i, errors: a }), n.max === void 0)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a max limit without a limit" });
    if (!n.currentCountQuery)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a max limit without a current count query" });
    this.currentCountQueryFn = n.currentCountQuery, this.max = n.max, this.formatter = n.formatter, this.fallbackMessage = `This action would exceed the ${ye(this.name)} limit on your current plan.`;
  }
  /**
   *
   * @param {Number} count - current count that acceded the limit
   * @returns {Object} instance of HostLimitError
   */
  generateError(e) {
    let n = super.generateError();
    if (n.message = this.fallbackMessage, this.error) {
      const t = this.formatter || Intl.NumberFormat().format;
      try {
        n.message = Wu(this.error, { interpolate: Yu })(
          {
            max: t(this.max),
            count: t(e),
            name: this.name
          }
        );
      } catch {
        n.message = this.fallbackMessage;
      }
    }
    return n.errorDetails.limit = this.max, n.errorDetails.total = e, new this.errors.HostLimitError(n);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    var n;
    return await this.currentCountQueryFn(e.transacting ?? ((n = this.db) == null ? void 0 : n.knex));
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: n, addedCount: t = 1 } = e;
    let i = await this.currentCountQuery(e);
    if (i + t > (n || this.max))
      throw this.generateError(i);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.currentCount] - overrides currentCountQuery to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const n = e.currentCount || await this.currentCountQuery(e);
    if (n > (e.max || this.max))
      throw this.generateError(n);
  }
}, r3 = class extends ut {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.maxPeriodic - maximum limit the limit would check against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {('month')} options.config.interval - an interval to take into account when checking the limit. Currently only supports 'month' value
   * @param {String} options.config.startDate - start date in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601), used to calculate period intervals
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, db: i, errors: a }) {
    if (super({ name: e, error: n.error || "", helpLink: t, db: i, errors: a }), n.maxPeriodic === void 0)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a limit" });
    if (!n.currentCountQuery)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a current count query" });
    if (!n.interval)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without an interval" });
    if (!qa.includes(n.interval))
      throw new a.IncorrectUsageError({ message: `Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${qa}` });
    if (!n.startDate)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a start date" });
    this.currentCountQueryFn = n.currentCountQuery, this.maxPeriodic = n.maxPeriodic, this.interval = n.interval, this.startDate = n.startDate, this.fallbackMessage = `This action would exceed the ${ye(this.name)} limit on your current plan.`;
  }
  generateError(e) {
    let n = super.generateError();
    if (n.message = this.fallbackMessage, this.error)
      try {
        n.message = Wu(this.error, { interpolate: Yu })(
          {
            max: Intl.NumberFormat().format(this.maxPeriodic),
            count: Intl.NumberFormat().format(e),
            name: this.name
          }
        );
      } catch {
        n.message = this.fallbackMessage;
      }
    return n.errorDetails.limit = this.maxPeriodic, n.errorDetails.total = e, new this.errors.HostLimitError(n);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    const n = QN(this.startDate, this.interval);
    return await this.currentCountQueryFn(e.transacting ? e.transacting : this.db ? this.db.knex : void 0, n);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: n, addedCount: t = 1 } = e;
    let i = await this.currentCountQuery(e);
    if (i + t > (n || this.maxPeriodic))
      throw this.generateError(i);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const { max: n } = e;
    let t = await this.currentCountQuery(e);
    if (t > (n || this.maxPeriodic))
      throw this.generateError(t);
  }
}, e3 = class extends ut {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.disabled - disabled/enabled flag for the limit
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, db: i, errors: a }) {
    super({ name: e, error: n.error || "", helpLink: t, db: i, errors: a }), this.disabled = n.disabled, this.fallbackMessage = `Your plan does not support ${ye(this.name)}. Please upgrade to enable ${ye(this.name)}.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
  }
  /**
   * Flag limits are on/off so using a feature is always over the limit
   */
  async errorIfWouldGoOverLimit() {
    if (this.disabled)
      throw this.generateError();
  }
  /**
   * Flag limits are on/off. They don't necessarily mean the limit wasn't possible to reach
   * NOTE: this method should not be relied on as it's impossible to check the limit was surpassed!
   */
  async errorIfIsOverLimit() {
  }
}, t3 = class extends ut {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {[String]} options.config.allowlist - allowlist values that would be compared against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, errors: i }) {
    if (super({ name: e, error: n.error || "", helpLink: t, errors: i }), !n.allowlist || !n.allowlist.length)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to setup an allowlist limit without an allowlist" });
    this.allowlist = n.allowlist, this.fallbackMessage = `This action would exceed the ${ye(this.name)} limit on your current plan.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
  }
  async errorIfWouldGoOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
  async errorIfIsOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
};
var n3 = {
  MaxLimit: KN,
  MaxPeriodicLimit: r3,
  FlagLimit: e3,
  AllowlistLimit: t3
}, i3 = {
  members: {
    currentCountQuery: async (r) => (await r("members").count("id", { as: "count" }).first()).count
  },
  newsletters: {
    currentCountQuery: async (r) => (await r("newsletters").count("id", { as: "count" }).where("status", "=", "active").first()).count
  },
  emails: {
    currentCountQuery: async (r, e) => (await r("emails").sum("email_count", { as: "count" }).where("created_at", ">=", e).first()).count
  },
  staff: {
    currentCountQuery: async (r) => (await r("users").select("users.id").leftJoin("roles_users", "users.id", "roles_users.user_id").leftJoin("roles", "roles_users.role_id", "roles.id").whereNot("roles.name", "Contributor").andWhereNot("users.status", "inactive").union([
      r("invites").select("invites.id").leftJoin("roles", "invites.role_id", "roles.id").whereNot("roles.name", "Contributor")
    ])).length
  },
  customIntegrations: {
    currentCountQuery: async (r) => (await r("integrations").count("id", { as: "count" }).whereNotIn("type", ["internal", "builtin"]).first()).count
  },
  customThemes: {},
  uploads: {
    // NOTE: this function should not ever be used as for uploads we compare the size
    //       of the uploaded file with the configured limit. Noop is here to keep the
    //       MaxLimit constructor happy
    currentCountQuery: () => {
    },
    // NOTE: the uploads limit is based on file sizes provided in Bytes
    //       a custom formatter is here for more user-friendly formatting when forming an error
    formatter: (r) => `${r / 1e6}MB`
  }
};
const Wa = Wc, Ft = om, { IncorrectUsageError: Ya } = Js, { MaxLimit: a3, MaxPeriodicLimit: o3, FlagLimit: s3, AllowlistLimit: u3 } = n3, Ja = i3, Xa = {
  missingErrorsConfig: "Config Missing: 'errors' is required.",
  noSubscriptionParameter: "Attempted to setup a periodic max limit without a subscription"
};
class l3 {
  constructor() {
    this.limits = {};
  }
  /**
   * Initializes the limits based on configuration
   *
   * @param {Object} options
   * @param {Object} [options.limits] - hash containing limit configurations keyed by limit name and containing
   * @param {Object} [options.subscription] - hash containing subscription configuration with interval and startDate properties
   * @param {String} options.helpLink - URL pointing to help resources for when limit is reached
   * @param {Object} options.db - knex db connection instance or other data source for the limit checks
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  loadLimits({ limits: e = {}, subscription: n, helpLink: t, db: i, errors: a }) {
    if (!a)
      throw new Ya({
        message: Xa.missingErrorsConfig
      });
    this.errors = a, this.limits = {}, Object.keys(e).forEach((l) => {
      if (l = Wa(l), Ja[l]) {
        let u = Object.assign({}, Ja[l], e[l]);
        if (Ft(u, "allowlist"))
          this.limits[l] = new u3({ name: l, config: u, helpLink: t, errors: a });
        else if (Ft(u, "max"))
          this.limits[l] = new a3({ name: l, config: u, helpLink: t, db: i, errors: a });
        else if (Ft(u, "maxPeriodic")) {
          if (n === void 0)
            throw new Ya({
              message: Xa.noSubscriptionParameter
            });
          const d = Object.assign({}, u, n);
          this.limits[l] = new o3({ name: l, config: d, helpLink: t, db: i, errors: a });
        } else
          this.limits[l] = new s3({ name: l, config: u, helpLink: t, errors: a });
      }
    });
  }
  isLimited(e) {
    return !!this.limits[Wa(e)];
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkIsOverLimit(e, n = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfIsOverLimit(n), !1;
      } catch (t) {
        if (t instanceof this.errors.HostLimitError)
          return !0;
        throw t;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkWouldGoOverLimit(e, n = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfWouldGoOverLimit(n), !1;
      } catch (t) {
        if (t instanceof this.errors.HostLimitError)
          return !0;
        throw t;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfIsOverLimit(e, n = {}) {
    this.isLimited(e) && await this.limits[e].errorIfIsOverLimit(n);
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfWouldGoOverLimit(e, n = {}) {
    this.isLimited(e) && await this.limits[e].errorIfWouldGoOverLimit(n);
  }
  /**
   * Checks if any of the configured limits acceded
   *
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count queries on (if required for the chosen limit)
   * @returns {Promise<boolean>}
   */
  async checkIfAnyOverLimit(e = {}) {
    for (const n in this.limits)
      if (await this.checkIsOverLimit(n, e))
        return !0;
    return !1;
  }
}
var f3 = l3, Ju = f3;
const c3 = /* @__PURE__ */ Qa(Ju), $3 = /* @__PURE__ */ fl({
  __proto__: null,
  default: c3
}, [Ju]);
export {
  $3 as i
};
//# sourceMappingURL=index-1a600af5.mjs.map
