﻿/*
 AngularJS v1.2.0
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (y, v, z) {
    'use strict'; function t(g, a, b) { q.directive(g, ["$parse", "$swipe", function (l, n) { var r = 75, h = 0.3, d = 30; return function (p, m, k) { function e(e) { if (!u) return !1; var c = Math.abs(e.y - u.y); e = (e.x - u.x) * a; return f && c < r && 0 < e && e > d && c / e < h } var c = l(k[g]), u, f; n.bind(m, { start: function (e, c) { u = e; f = !0 }, cancel: function (e) { f = !1 }, end: function (a, f) { e(a) && p.$apply(function () { m.triggerHandler(b); c(p, { $event: f }) }) } }) } }]) } var q = v.module("ngTouch", []); q.factory("$swipe", [function () {
        function g(a) {
            var b = a.touches && a.touches.length ?
            a.touches : [a]; a = a.changedTouches && a.changedTouches[0] || a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] || b[0].originalEvent || b[0]; return { x: a.clientX, y: a.clientY }
        } return {
            bind: function (a, b) {
                var l, n, r, h, d = !1; a.on("touchstart mousedown", function (a) { r = g(a); d = !0; n = l = 0; h = r; b.start && b.start(r, a) }); a.on("touchcancel", function (a) { d = !1; b.cancel && b.cancel(a) }); a.on("touchmove mousemove", function (a) {
                    if (d && r) {
                        var m = g(a); l += Math.abs(m.x - h.x); n += Math.abs(m.y - h.y); h = m; 10 > l && 10 > n ||
                        (n > l ? (d = !1, b.cancel && b.cancel(a)) : (a.preventDefault(), b.move && b.move(m, a)))
                    }
                }); a.on("touchend mouseup", function (a) { d && (d = !1, b.end && b.end(g(a), a)) })
            }
        }
    }]); q.config(["$provide", function (g) { g.decorator("ngClickDirective", ["$delegate", function (a) { a.shift(); return a }]) }]); q.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (g, a, b) {
        function l(a, c, b) { for (var f = 0; f < a.length; f += 2) if (Math.abs(a[f] - c) < d && Math.abs(a[f + 1] - b) < d) return a.splice(f, f + 2), !0; return !1 } function n(a) {
            if (!(Date.now() - m > h)) {
                var c =
                a.touches && a.touches.length ? a.touches : [a], b = c[0].clientX, c = c[0].clientY; 1 > b && 1 > c || l(k, b, c) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur())
            }
        } function r(b) { b = b.touches && b.touches.length ? b.touches : [b]; var c = b[0].clientX, d = b[0].clientY; k.push(c, d); a(function () { for (var a = 0; a < k.length; a += 2) if (k[a] == c && k[a + 1] == d) { k.splice(a, a + 2); break } }, h, !1) } var h = 2500, d = 25, p = "ng-click-active", m, k; return function (a, c, d) {
            function f() { q = !1; c.removeClass(p) } var h = g(d.ngClick), q = !1, s, t, w, x; c.on("touchstart",
            function (a) { q = !0; s = a.target ? a.target : a.srcElement; 3 == s.nodeType && (s = s.parentNode); c.addClass(p); t = Date.now(); a = a.touches && a.touches.length ? a.touches : [a]; a = a[0].originalEvent || a[0]; w = a.clientX; x = a.clientY }); c.on("touchmove", function (a) { f() }); c.on("touchcancel", function (a) { f() }); c.on("touchend", function (a) {
                var h = Date.now() - t, e = a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches && a.touches.length ? a.touches : [a], g = e[0].originalEvent || e[0], e = g.clientX, g = g.clientY, p = Math.sqrt(Math.pow(e -
                w, 2) + Math.pow(g - x, 2)); q && (750 > h && 12 > p) && (k || (b[0].addEventListener("click", n, !0), b[0].addEventListener("touchstart", r, !0), k = []), m = Date.now(), l(k, e, g), s && s.blur(), v.isDefined(d.disabled) && !1 !== d.disabled || c.triggerHandler("click", [a])); f()
            }); c.onclick = function (a) { }; c.on("click", function (b, c) { a.$apply(function () { h(a, { $event: c || b }) }) }); c.on("mousedown", function (a) { c.addClass(p) }); c.on("mousemove mouseup", function (a) { c.removeClass(p) })
        }
    }]); t("ngSwipeLeft", -1, "swipeleft"); t("ngSwipeRight", 1, "swiperight")
})(window,
window.angular);
//# sourceMappingURL=angular-touch.min.js.map