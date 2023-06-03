! function() {
    "use strict";

    function t(t, e) {
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
    }

    function i(t) {
        if (!this || this.find !== i.prototype.find) return new i(t);
        if (this.length = 0, t)
            if ((t = "string" == typeof t ? this.find(t) : t).nodeType || t === t.window) this.length = 1, this[0] = t;
            else {
                var e = t.length;
                for (this.length = e; e;) this[--e] = t[e]
            }
    }
    i.extend = t, i.contains = function(t, e) {
        do {
            if ((e = e.parentNode) === t) return !0
        } while (e);
        return !1
    }, i.parseJSON = function(t) {
        return JSON.parse(t)
    }, t(i.prototype, {
        find: function(t) {
            var e = this[0] || document;
            return new i(t = "string" == typeof t ? e.querySelectorAll ? e.querySelectorAll(t) : "#" === t.charAt(0) ? e.getElementById(t.slice(1)) : e.getElementsByTagName(t) : t)
        },
        hasClass: function(t) {
            return !!this[0] && new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(this[0].className)
        },
        addClass: function(t) {
            for (var e, i, s, n = this.length; n;)
                if ((i = this[--n]).className)
                    for (e = e || t.split(/\s+/), s = 0; s < e.length; s += 1) this.hasClass(e[s]) || (i.className += " " + e[s]);
                else i.className = t;
            return this
        },
        removeClass: function(t) {
            for (var e, i = new RegExp("^(?:" + t.split(/\s+/).join("|") + ")$"), s = /(\S+)(?:\s+|$)/g, n = function(t, e) {
                    return i.test(e) ? "" : t
                }, o = /\s+$/, a = this.length; a;)(e = this[--a]).className = e.className.replace(s, n).replace(o, "");
            return this
        },
        on: function(t, e) {
            for (var i, s, n = t.split(/\s+/); n.length;)
                for (t = n.shift(), i = this.length; i;)(s = this[--i]).addEventListener ? s.addEventListener(t, e, !1) : s.attachEvent && s.attachEvent("on" + t, e);
            return this
        },
        off: function(t, e) {
            for (var i, s, n = t.split(/\s+/); n.length;)
                for (t = n.shift(), i = this.length; i;)(s = this[--i]).removeEventListener ? s.removeEventListener(t, e, !1) : s.detachEvent && s.detachEvent("on" + t, e);
            return this
        },
        empty: function() {
            for (var t, e = this.length; e;)
                for (t = this[--e]; t.hasChildNodes();) t.removeChild(t.lastChild);
            return this
        },
        first: function() {
            return new i(this[0])
        }
    }), "function" == typeof define && define.amd ? define(function() {
        return i
    }) : (window.blueimp = window.blueimp || {}, window.blueimp.helper = i)
}(),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper"], t) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = t(window.blueimp.helper || window.jQuery))
}(function(f) {
    "use strict";

    function i(t, e) {
        return document.body.style.maxHeight === undefined ? null : this && this.options === i.prototype.options ? void(t && t.length ? (this.list = t, this.num = t.length, this.initOptions(e), this.initialize()) : this.console.log("blueimp Gallery: No or empty list provided as first argument.", t)) : new i(t, e)
    }
    return f.extend(i.prototype, {
        options: {
            container: "#blueimp-gallery",
            slidesContainer: "div",
            titleElement: "h3",
            displayClass: "blueimp-gallery-display",
            controlsClass: "blueimp-gallery-controls",
            singleClass: "blueimp-gallery-single",
            leftEdgeClass: "blueimp-gallery-left",
            rightEdgeClass: "blueimp-gallery-right",
            playingClass: "blueimp-gallery-playing",
            svgasimgClass: "blueimp-gallery-svgasimg",
            smilClass: "blueimp-gallery-smil",
            slideClass: "slide",
            slideActiveClass: "slide-active",
            slidePrevClass: "slide-prev",
            slideNextClass: "slide-next",
            slideLoadingClass: "slide-loading",
            slideErrorClass: "slide-error",
            slideContentClass: "slide-content",
            toggleClass: "toggle",
            prevClass: "prev",
            nextClass: "next",
            closeClass: "close",
            playPauseClass: "play-pause",
            typeProperty: "type",
            titleProperty: "title",
            altTextProperty: "alt",
            urlProperty: "href",
            srcsetProperty: "srcset",
            sizesProperty: "sizes",
            sourcesProperty: "sources",
            displayTransition: !0,
            clearSlides: !0,
            toggleControlsOnEnter: !0,
            toggleControlsOnSlideClick: !0,
            toggleSlideshowOnSpace: !0,
            enableKeyboardNavigation: !0,
            closeOnEscape: !0,
            closeOnSlideClick: !0,
            closeOnSwipeUpOrDown: !0,
            closeOnHashChange: !0,
            emulateTouchEvents: !0,
            stopTouchEventsPropagation: !1,
            hidePageScrollbars: !0,
            disableScroll: !0,
            carousel: !1,
            continuous: !0,
            unloadElements: !0,
            startSlideshow: !1,
            slideshowInterval: 5e3,
            slideshowDirection: "ltr",
            index: 0,
            preloadRange: 2,
            transitionDuration: 300,
            slideshowTransitionDuration: 500,
            event: undefined,
            onopen: undefined,
            onopened: undefined,
            onslide: undefined,
            onslideend: undefined,
            onslidecomplete: undefined,
            onclose: undefined,
            onclosed: undefined
        },
        carouselOptions: {
            hidePageScrollbars: !1,
            toggleControlsOnEnter: !1,
            toggleSlideshowOnSpace: !1,
            enableKeyboardNavigation: !1,
            closeOnEscape: !1,
            closeOnSlideClick: !1,
            closeOnSwipeUpOrDown: !1,
            closeOnHashChange: !1,
            disableScroll: !1,
            startSlideshow: !0
        },
        console: window.console && "function" == typeof window.console.log ? window.console : {
            log: function() {}
        },
        support: function(s) {
            var t, n = {
                    source: !!window.HTMLSourceElement,
                    picture: !!window.HTMLPictureElement,
                    svgasimg: document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
                    smil: !!document.createElementNS && /SVGAnimate/.test(document.createElementNS("http://www.w3.org/2000/svg", "animate").toString()),
                    touch: window.ontouchstart !== undefined || window.DocumentTouch && document instanceof DocumentTouch
                },
                e = {
                    webkitTransition: {
                        end: "webkitTransitionEnd",
                        prefix: "-webkit-"
                    },
                    MozTransition: {
                        end: "transitionend",
                        prefix: "-moz-"
                    },
                    OTransition: {
                        end: "otransitionend",
                        prefix: "-o-"
                    },
                    transition: {
                        end: "transitionend",
                        prefix: ""
                    }
                };
            for (t in e)
                if (Object.prototype.hasOwnProperty.call(e, t) && s.style[t] !== undefined) {
                    n.transition = e[t], n.transition.name = t;
                    break
                }
            function i() {
                var t, e, i = n.transition;
                document.body.appendChild(s), i && (t = i.name.slice(0, -9) + "ransform", s.style[t] !== undefined && (s.style[t] = "translateZ(0)", e = window.getComputedStyle(s).getPropertyValue(i.prefix + "transform"), n.transform = {
                    prefix: i.prefix,
                    name: t,
                    translate: !0,
                    translateZ: !!e && "none" !== e
                })), document.body.removeChild(s)
            }
            return document.body ? i() : f(document).on("DOMContentLoaded", i), n
        }(document.createElement("div")),
        requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
        cancelAnimationFrame: window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame,
        initialize: function() {
            if (this.initStartIndex(), !1 === this.initWidget()) return !1;
            this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), this.options.startSlideshow && this.play()
        },
        slide: function(t, e) {
            window.clearTimeout(this.timeout);
            var i, s, n, o = this.index;
            if (o !== t && 1 !== this.num) {
                if (e = e || this.options.transitionDuration, this.support.transform) {
                    for (this.options.continuous || (t = this.circle(t)), i = Math.abs(o - t) / (o - t), this.options.continuous && (s = i, (i = -this.positions[this.circle(t)] / this.slideWidth) !== s && (t = -i * this.num + t)), n = Math.abs(o - t) - 1; n;) this.move(this.circle((o < t ? t : o) - --n - 1), this.slideWidth * i, 0);
                    t = this.circle(t), this.move(o, this.slideWidth * i, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - i), -this.slideWidth * i, 0)
                } else t = this.circle(t), this.animate(o * -this.slideWidth, t * -this.slideWidth, e);
                this.onslide(t)
            }
        },
        getIndex: function() {
            return this.index
        },
        getNumber: function() {
            return this.num
        },
        prev: function() {
            (this.options.continuous || this.index) && this.slide(this.index - 1)
        },
        next: function() {
            (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
        },
        play: function(t) {
            var i = this,
                e = this.index + ("rtl" === this.options.slideshowDirection ? -1 : 1);
            window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, 1 < this.elements[this.index] && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function(t, e) {
                i.animationFrameId = i.requestAnimationFrame.call(window, function() {
                    i.slide(t, e)
                })
            }, [e, this.options.slideshowTransitionDuration], this.interval)), this.container.addClass(this.options.playingClass), this.slidesContainer[0].setAttribute("aria-live", "off"), this.playPauseElement.length && this.playPauseElement[0].setAttribute("aria-pressed", "true")
        },
        pause: function() {
            window.clearTimeout(this.timeout), this.interval = null, this.cancelAnimationFrame && (this.cancelAnimationFrame.call(window, this.animationFrameId), this.animationFrameId = null), this.container.removeClass(this.options.playingClass), this.slidesContainer[0].setAttribute("aria-live", "polite"), this.playPauseElement.length && this.playPauseElement[0].setAttribute("aria-pressed", "false")
        },
        add: function(t) {
            var e;
            for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, 2 < this.num && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1) this.addSlide(e), this.positionSlide(e);
            this.positions.length = this.num, this.initSlides(!0)
        },
        resetSlides: function() {
            this.slidesContainer.empty(), this.unloadAllSlides(), this.slides = []
        },
        handleClose: function() {
            var t = this.options;
            this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
        },
        close: function() {
            var e = this;
            this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, function i(t) {
                t.target === e.container[0] && (e.container.off(e.support.transition.end, i), e.handleClose())
            }), this.container.removeClass(this.options.displayClass)) : this.handleClose()
        },
        circle: function(t) {
            return (this.num + t % this.num) % this.num
        },
        move: function(t, e, i) {
            this.translateX(t, e, i), this.positions[t] = e
        },
        translate: function(t, e, i, s) {
            var n, o;
            this.slides[t] && (n = this.slides[t].style, o = this.support.transition, t = this.support.transform, n[o.name + "Duration"] = s + "ms", n[t.name] = "translate(" + e + "px, " + i + "px)" + (t.translateZ ? " translateZ(0)" : ""))
        },
        translateX: function(t, e, i) {
            this.translate(t, e, 0, i)
        },
        translateY: function(t, e, i) {
            this.translate(t, 0, e, i)
        },
        animate: function(e, i, s) {
            var n, o, a;
            s ? (n = this, o = (new Date).getTime(), a = window.setInterval(function() {
                var t = (new Date).getTime() - o;
                if (s < t) return n.slidesContainer[0].style.left = i + "px", n.ontransitionend(), void window.clearInterval(a);
                n.slidesContainer[0].style.left = (i - e) * (Math.floor(t / s * 100) / 100) + e + "px"
            }, 4)) : this.slidesContainer[0].style.left = i + "px"
        },
        preventDefault: function(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        },
        stopPropagation: function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        },
        onresize: function() {
            this.initSlides(!0)
        },
        onhashchange: function() {
            this.options.closeOnHashChange && this.close()
        },
        onmousedown: function(t) {
            t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && "AUDIO" !== t.target.nodeName && (t.preventDefault(), (t.originalEvent || t).touches = [{
                pageX: t.pageX,
                pageY: t.pageY
            }], this.ontouchstart(t))
        },
        onmousemove: function(t) {
            this.touchStart && ((t.originalEvent || t).touches = [{
                pageX: t.pageX,
                pageY: t.pageY
            }], this.ontouchmove(t))
        },
        onmouseup: function(t) {
            this.touchStart && (this.ontouchend(t), delete this.touchStart)
        },
        onmouseout: function(t) {
            var e, i;
            this.touchStart && (e = t.target, (i = t.relatedTarget) && (i === e || f.contains(e, i)) || this.onmouseup(t))
        },
        ontouchstart: function(t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            t = (t.originalEvent || t).touches[0];
            this.touchStart = {
                x: t.pageX,
                y: t.pageY,
                time: Date.now()
            }, this.isScrolling = undefined, this.touchDelta = {}
        },
        ontouchmove: function(t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e, i, s = (t.originalEvent || t).touches,
                n = s[0],
                o = (t.originalEvent || t).scale,
                a = this.index;
            if (!(1 < s.length || o && 1 !== o))
                if (this.options.disableScroll && t.preventDefault(), this.touchDelta = {
                        x: n.pageX - this.touchStart.x,
                        y: n.pageY - this.touchStart.y
                    }, e = this.touchDelta.x, this.isScrolling === undefined && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.options.carousel || this.translateY(a, this.touchDelta.y + this.positions[a], 0);
                else
                    for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? i = [this.circle(a + 1), a, this.circle(a - 1)] : (this.touchDelta.x = e /= !a && 0 < e || a === this.num - 1 && e < 0 ? Math.abs(e) / this.slideWidth + 1 : 1, i = [a], a && i.push(a - 1), a < this.num - 1 && i.unshift(a + 1)); i.length;) a = i.pop(), this.translateX(a, e + this.positions[a], 0)
        },
        ontouchend: function(t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e = this.index,
                i = Math.abs(this.touchDelta.x),
                s = this.slideWidth,
                n = Math.ceil(this.options.transitionDuration * (1 - i / s) / 2),
                o = 20 < i,
                a = !e && 0 < this.touchDelta.x || e === this.num - 1 && this.touchDelta.x < 0,
                l = !o && this.options.closeOnSwipeUpOrDown && 20 < Math.abs(this.touchDelta.y);
            this.options.continuous && (a = !1), t = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? l ? this.close() : this.translateY(e, 0, n) : o && !a ? (i = e + t, l = e - t, o = s * t, a = -s * t, this.options.continuous ? (this.move(this.circle(i), o, 0), this.move(this.circle(e - 2 * t), a, 0)) : 0 <= i && i < this.num && this.move(i, o, 0), this.move(e, this.positions[e] + o, n), this.move(this.circle(l), this.positions[this.circle(l)] + o, n), e = this.circle(l), this.onslide(e)) : this.options.continuous ? (this.move(this.circle(e - 1), -s, n), this.move(e, 0, n), this.move(this.circle(e + 1), s, n)) : (e && this.move(e - 1, -s, n), this.move(e, 0, n), e < this.num - 1 && this.move(e + 1, s, n))
        },
        ontouchcancel: function(t) {
            this.touchStart && (this.ontouchend(t), delete this.touchStart)
        },
        ontransitionend: function(t) {
            var e = this.slides[this.index];
            t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]))
        },
        oncomplete: function(t) {
            var e, i = t.target || t.srcElement,
                s = i && i.parentNode;
            i && s && (e = this.getNodeIndex(s), f(s).removeClass(this.options.slideLoadingClass), "error" === t.type ? (f(s).addClass(this.options.slideErrorClass), this.elements[e] = 3) : this.elements[e] = 2, i.clientHeight > this.container[0].clientHeight && (i.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === s && this.play(), this.setTimeout(this.options.onslidecomplete, [e, s]))
        },
        onload: function(t) {
            this.oncomplete(t)
        },
        onerror: function(t) {
            this.oncomplete(t)
        },
        onkeydown: function(t) {
            switch (t.which || t.keyCode) {
                case 13:
                    this.options.toggleControlsOnEnter && (this.preventDefault(t), this.toggleControls());
                    break;
                case 27:
                    this.options.closeOnEscape && (this.close(), t.stopImmediatePropagation());
                    break;
                case 32:
                    this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());
                    break;
                case 37:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());
                    break;
                case 39:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next())
            }
        },
        handleClick: function(t) {
            var e = this.options,
                i = t.target || t.srcElement,
                s = i.parentNode;

            function n(t) {
                return f(i).hasClass(t) || f(s).hasClass(t)
            }
            n(e.toggleClass) ? (this.preventDefault(t), this.toggleControls()) : n(e.prevClass) ? (this.preventDefault(t), this.prev()) : n(e.nextClass) ? (this.preventDefault(t), this.next()) : n(e.closeClass) ? (this.preventDefault(t), this.close()) : n(e.playPauseClass) ? (this.preventDefault(t), this.toggleSlideshow()) : s === this.slidesContainer[0] ? e.closeOnSlideClick ? (this.preventDefault(t), this.close()) : e.toggleControlsOnSlideClick && (this.preventDefault(t), this.toggleControls()) : s.parentNode && s.parentNode === this.slidesContainer[0] && e.toggleControlsOnSlideClick && (this.preventDefault(t), this.toggleControls())
        },
        onclick: function(t) {
            if (!(this.options.emulateTouchEvents && this.touchDelta && (20 < Math.abs(this.touchDelta.x) || 20 < Math.abs(this.touchDelta.y)))) return this.handleClick(t);
            delete this.touchDelta
        },
        updateEdgeClasses: function(t) {
            t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
        },
        updateActiveSlide: function(t, e) {
            for (var i, s, n = this.slides, o = this.options, a = [{
                    index: e,
                    method: "addClass",
                    hidden: !1
                }, {
                    index: t,
                    method: "removeClass",
                    hidden: !0
                }]; a.length;) i = a.pop(), f(n[i.index])[i.method](o.slideActiveClass), s = this.circle(i.index - 1), (o.continuous || s < i.index) && f(n[s])[i.method](o.slidePrevClass), s = this.circle(i.index + 1), (o.continuous || s > i.index) && f(n[s])[i.method](o.slideNextClass);
            this.slides[t].setAttribute("aria-hidden", "true"), this.slides[e].removeAttribute("aria-hidden")
        },
        handleSlide: function(t, e) {
            this.options.continuous || this.updateEdgeClasses(e), this.updateActiveSlide(t, e), this.loadElements(e), this.options.unloadElements && this.unloadElements(t, e), this.setTitle(e)
        },
        onslide: function(t) {
            this.handleSlide(this.index, t), this.index = t, this.setTimeout(this.options.onslide, [t, this.slides[t]])
        },
        setTitle: function(t) {
            var e = this.slides[t].firstChild,
                t = e.title || e.alt,
                e = this.titleElement;
            e.length && (this.titleElement.empty(), t && e[0].appendChild(document.createTextNode(t)))
        },
        setTimeout: function(t, e, i) {
            var s = this;
            return t && window.setTimeout(function() {
                t.apply(s, e || [])
            }, i || 0)
        },
        imageFactory: function(t, e) {
            var i, s, n, o, a, l, r, h, d = this.options,
                c = this,
                u = t,
                p = this.imagePrototype.cloneNode(!1);
            if ("string" != typeof u && (u = this.getItemProperty(t, d.urlProperty), n = this.support.picture && this.support.source && this.getItemProperty(t, d.sourcesProperty), o = this.getItemProperty(t, d.srcsetProperty), a = this.getItemProperty(t, d.sizesProperty), l = this.getItemProperty(t, d.titleProperty), r = this.getItemProperty(t, d.altTextProperty) || l), p.draggable = !1, l && (p.title = l), r && (p.alt = r), f(p).on("load error", function m(t) {
                    if (!s) {
                        if (!(t = {
                                type: t.type,
                                target: i || p
                            }).target.parentNode) return c.setTimeout(m, [t]);
                        s = !0, f(p).off("load error", m), e(t)
                    }
                }), n && n.length) {
                for (i = this.picturePrototype.cloneNode(!1), h = 0; h < n.length; h += 1) i.appendChild(f.extend(this.sourcePrototype.cloneNode(!1), n[h]));
                i.appendChild(p), f(i).addClass(d.toggleClass)
            }
            return o && (a && (p.sizes = a), p.srcset = o), p.src = u, i || p
        },
        createElement: function(t, e) {
            var i = t && this.getItemProperty(t, this.options.typeProperty),
                i = i && this[i.split("/")[0] + "Factory"] || this.imageFactory,
                i = t && i.call(this, t, e);
            return i || (i = this.elementPrototype.cloneNode(!1), this.setTimeout(e, [{
                type: "error",
                target: i
            }])), f(i).addClass(this.options.slideContentClass), i
        },
        iteratePreloadRange: function(t, e) {
            for (var i = this.num, s = this.options, n = Math.min(i, 2 * s.preloadRange + 1), o = t, a = 0; a < n; a += 1) {
                if ((o += a * (a % 2 == 0 ? -1 : 1)) < 0 || i <= o) {
                    if (!s.continuous) continue;
                    o = this.circle(o)
                }
                e.call(this, o)
            }
        },
        loadElement: function(t) {
            this.elements[t] || (this.slides[t].firstChild ? this.elements[t] = f(this.slides[t]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[t] = 1, f(this.slides[t]).addClass(this.options.slideLoadingClass), this.slides[t].appendChild(this.createElement(this.list[t], this.proxyListener))))
        },
        loadElements: function(t) {
            this.iteratePreloadRange(t, this.loadElement)
        },
        unloadElements: function(t, i) {
            var s = this.options.preloadRange;
            this.iteratePreloadRange(t, function(t) {
                var e = Math.abs(t - i);
                s < e && e + s < this.num && (this.unloadSlide(t), delete this.elements[t])
            })
        },
        addSlide: function(t) {
            var e = this.slidePrototype.cloneNode(!1);
            e.setAttribute("data-index", t), e.setAttribute("aria-hidden", "true"), this.slidesContainer[0].appendChild(e), this.slides.push(e)
        },
        positionSlide: function(t) {
            var e = this.slides[t];
            e.style.width = this.slideWidth + "px", this.support.transform && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0))
        },
        initSlides: function(t) {
            var e, i;
            for (t || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.picturePrototype = this.support.picture && document.createElement("picture"), this.sourcePrototype = this.support.source && document.createElement("source"), this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = this.elementPrototype.cloneNode(!1), f(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, e = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].clientWidth, this.slideHeight = this.container[0].clientHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", e && this.resetSlides(), i = 0; i < this.num; i += 1) e && this.addSlide(i), this.positionSlide(i);
            this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
        },
        unloadSlide: function(t) {
            var e = this.slides[t],
                t = e.firstChild;
            null !== t && e.removeChild(t)
        },
        unloadAllSlides: function() {
            for (var t = 0, e = this.slides.length; t < e; t++) this.unloadSlide(t)
        },
        toggleControls: function() {
            var t = this.options.controlsClass;
            this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t)
        },
        toggleSlideshow: function() {
            this.interval ? this.pause() : this.play()
        },
        getNodeIndex: function(t) {
            return parseInt(t.getAttribute("data-index"), 10)
        },
        getNestedProperty: function(o, t) {
            return t.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function(t, e, i, s, n) {
                s = n || e || i || s && parseInt(s, 10);
                t && o && (o = o[s])
            }), o
        },
        getDataProperty: function(t, e) {
            var i;
            if (t.dataset ? (i = e.replace(/-([a-z])/g, function(t, e) {
                    return e.toUpperCase()
                }), i = t.dataset[i]) : t.getAttribute && (i = t.getAttribute("data-" + e.replace(/([A-Z])/g, "-$1").toLowerCase())), "string" == typeof i) {
                if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(i)) try {
                    return f.parseJSON(i)
                } catch (s) {}
                return i
            }
        },
        getItemProperty: function(t, e) {
            var i = this.getDataProperty(t, e);
            return i = (i = i === undefined ? t[e] : i) === undefined ? this.getNestedProperty(t, e) : i
        },
        initStartIndex: function() {
            var t, e = this.options.index,
                i = this.options.urlProperty;
            if (e && "number" != typeof e)
                for (t = 0; t < this.num; t += 1)
                    if (this.list[t] === e || this.getItemProperty(this.list[t], i) === this.getItemProperty(e, i)) {
                        e = t;
                        break
                    } this.index = this.circle(parseInt(e, 10) || 0)
        },
        initEventListeners: function() {
            var i = this,
                t = this.slidesContainer;

            function e(t) {
                var e = i.support.transition && i.support.transition.end === t.type ? "transitionend" : t.type;
                i["on" + e](t)
            }
            f(window).on("resize", e), f(window).on("hashchange", e), f(document.body).on("keydown", e), this.container.on("click", e), this.support.touch ? t.on("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && t.on("mousedown mousemove mouseup mouseout", e), this.support.transition && t.on(this.support.transition.end, e), this.proxyListener = e
        },
        destroyEventListeners: function() {
            var t = this.slidesContainer,
                e = this.proxyListener;
            f(window).off("resize", e), f(document.body).off("keydown", e), this.container.off("click", e), this.support.touch ? t.off("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && t.off("mousedown mousemove mouseup mouseout", e), this.support.transition && t.off(this.support.transition.end, e)
        },
        handleOpen: function() {
            this.options.onopened && this.options.onopened.call(this)
        },
        initWidget: function() {
            var e = this;
            return this.container = f(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), this.playPauseElement = this.container.find("." + this.options.playPauseClass).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.support.svgasimg && this.container.addClass(this.options.svgasimgClass), this.support.smil && this.container.addClass(this.options.smilClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, function i(t) {
                t.target === e.container[0] && (e.container.off(e.support.transition.end, i), e.handleOpen())
            }) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1)
        },
        initOptions: function(t) {
            this.options = f.extend({}, this.options), (t && t.carousel || this.options.carousel && (!t || !1 !== t.carousel)) && f.extend(this.options, this.carouselOptions), f.extend(this.options, t), this.num < 3 && (this.options.continuous = !!this.options.continuous && null), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
        }
    }), i
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(t, e) {
    "use strict";
    var i = e.prototype;
    t.extend(i.options, {
        fullscreen: !1
    });
    var s = i.initialize,
        n = i.close;
    return t.extend(i, {
        getFullScreenElement: function() {
            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
        },
        requestFullScreen: function(t) {
            t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        },
        exitFullScreen: function() {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
        },
        initialize: function() {
            s.call(this), this.options.fullscreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
        },
        close: function() {
            this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), n.call(this)
        }
    }), e
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(a, t) {
    "use strict";
    var e = t.prototype;
    a.extend(e.options, {
        indicatorContainer: "ol",
        activeIndicatorClass: "active",
        thumbnailProperty: "thumbnail",
        thumbnailIndicators: !0
    });
    var i = e.initSlides,
        s = e.addSlide,
        n = e.resetSlides,
        o = e.handleClick,
        l = e.handleSlide,
        r = e.handleClose;
    return a.extend(e, {
        createIndicator: function(t) {
            var e, i, s = this.indicatorPrototype.cloneNode(!1),
                n = this.getItemProperty(t, this.options.titleProperty),
                o = this.options.thumbnailProperty;
            return this.options.thumbnailIndicators && (e = (e = o ? this.getItemProperty(t, o) : e) === undefined && (i = t.getElementsByTagName && a(t).find("img")[0]) ? i.src : e) && (s.style.backgroundImage = 'url("' + e + '")'), n && (s.title = n), s.setAttribute("role", "link"), s
        },
        addIndicator: function(t) {
            var e;
            this.indicatorContainer.length && ((e = this.createIndicator(this.list[t])).setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e))
        },
        setActiveIndicator: function(t) {
            this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = a(this.indicators[t]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
        },
        initSlides: function(t) {
            t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), i.call(this, t)
        },
        addSlide: function(t) {
            s.call(this, t), this.addIndicator(t)
        },
        resetSlides: function() {
            n.call(this), this.indicatorContainer.empty(), this.indicators = []
        },
        handleClick: function(t) {
            var e = t.target || t.srcElement,
                i = e.parentNode;
            if (i === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e));
            else {
                if (i.parentNode !== this.indicatorContainer[0]) return o.call(this, t);
                this.preventDefault(t), this.slide(this.getNodeIndex(i))
            }
        },
        handleSlide: function(t, e) {
            l.call(this, t, e), this.setActiveIndicator(e)
        },
        handleClose: function() {
            this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), r.call(this)
        }
    }), t
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(C, t) {
    "use strict";
    var e = t.prototype;
    C.extend(e.options, {
        videoContentClass: "video-content",
        videoLoadingClass: "video-loading",
        videoPlayingClass: "video-playing",
        videoIframeClass: "video-iframe",
        videoCoverClass: "video-cover",
        videoPlayClass: "video-play",
        videoPlaysInline: !0,
        videoPreloadProperty: "preload",
        videoPosterProperty: "poster"
    });
    var i = e.handleSlide;
    return C.extend(e, {
        handleSlide: function(t, e) {
            i.call(this, t, e), this.setTimeout(function() {
                this.activeVideo && this.activeVideo.pause()
            })
        },
        videoFactory: function(t, e, i) {
            var s, n, o, a = this,
                l = this.options,
                r = this.elementPrototype.cloneNode(!1),
                h = C(r),
                d = [{
                    type: "error",
                    target: r
                }],
                c = i || document.createElement("video"),
                u = this.elementPrototype.cloneNode(!1),
                p = document.createElement("a"),
                m = this.getItemProperty(t, l.urlProperty),
                f = this.getItemProperty(t, l.sourcesProperty),
                y = this.getItemProperty(t, l.titleProperty),
                g = this.getItemProperty(t, l.videoPosterProperty),
                v = [p];
            if (h.addClass(l.videoContentClass), C(p).addClass(l.videoPlayClass), C(u).addClass(l.videoCoverClass).hasClass(l.toggleClass) || v.push(u), u.draggable = !1, y && (r.title = y, p.setAttribute("aria-label", y)), g && (u.style.backgroundImage = 'url("' + g + '")'), c.setAttribute ? l.videoPlaysInline && c.setAttribute("playsinline", "") : h.addClass(l.videoIframeClass), c.preload = this.getItemProperty(t, l.videoPreloadProperty) || "none", this.support.source && f)
                for (o = 0; o < f.length; o += 1) c.appendChild(C.extend(this.sourcePrototype.cloneNode(!1), f[o]));
            return m && (c.src = m), p.href = m || f && f.length && f[0].src, c.play && c.pause && ((i || C(c)).on("error", function() {
                a.setTimeout(e, d)
            }).on("pause", function() {
                c.seeking || (n = !1, h.removeClass(a.options.videoLoadingClass).removeClass(a.options.videoPlayingClass), s && a.container.addClass(a.options.controlsClass), c.controls = !1, c === a.activeVideo && delete a.activeVideo, a.interval && a.play())
            }).on("playing", function() {
                n = !1, u.removeAttribute("style"), h.removeClass(a.options.videoLoadingClass).addClass(a.options.videoPlayingClass)
            }).on("play", function() {
                window.clearTimeout(a.timeout), n = !0, h.addClass(a.options.videoLoadingClass), a.container.hasClass(a.options.controlsClass) ? (s = !0, a.container.removeClass(a.options.controlsClass)) : s = !1, c.controls = !0, a.activeVideo = c
            }), C(v).on("click", function(t) {
                a.preventDefault(t), a.activeVideo = c, n ? c.pause() : c.play()
            }), r.appendChild(i && i.element || c)), r.appendChild(u), r.appendChild(p), this.setTimeout(e, [{
                type: "load",
                target: r
            }]), r
        }
    }), t
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(l, t) {
    "use strict";
    if (!window.postMessage) return t;
    var e = t.prototype;
    l.extend(e.options, {
        vimeoVideoIdProperty: "vimeo",
        vimeoPlayerUrl: "https://player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
        vimeoPlayerIdPrefix: "vimeo-player-",
        vimeoClickToPlay: !1
    });
    var n = e.textFactory || e.imageFactory,
        o = function(t, e, i, s) {
            this.url = t, this.videoId = e, this.playerId = i, this.clickToPlay = s, this.element = document.createElement("div"), this.listeners = {}
        },
        a = 0;
    return l.extend(o.prototype, {
        on: function(t, e) {
            return this.listeners[t] = e, this
        },
        loadAPI: function() {
            var t, e, i = this,
                s = "https://f.vimeocdn.com/js/froogaloop2.min.js",
                n = document.getElementsByTagName("script"),
                o = n.length;

            function a() {
                !e && i.playOnReady && i.play(), e = !0
            }
            for (; o;)
                if (n[--o].src === s) {
                    t = n[o];
                    break
                } t || ((t = document.createElement("script")).src = s), l(t).on("load", a), n[0].parentNode.insertBefore(t, n[0]), /loaded|complete/.test(t.readyState) && a()
        },
        onReady: function() {
            var t = this;
            this.ready = !0, this.player.addEvent("play", function() {
                t.hasPlayed = !0, t.onPlaying()
            }), this.player.addEvent("pause", function() {
                t.onPause()
            }), this.player.addEvent("finish", function() {
                t.onPause()
            }), this.playOnReady && this.play()
        },
        onPlaying: function() {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        },
        onPause: function() {
            this.listeners.pause(), delete this.playStatus
        },
        insertIframe: function() {
            var t = document.createElement("iframe");
            t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, t.allow = "autoplay", this.element.parentNode.replaceChild(t, this.element), this.element = t
        },
        play: function() {
            var t = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function() {
                t.onReady()
            })) : this.loadAPI())
        },
        pause: function() {
            this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), l.extend(e, {
        VimeoPlayer: o,
        textFactory: function(t, e) {
            var i = this.options,
                s = this.getItemProperty(t, i.vimeoVideoIdProperty);
            return s ? (this.getItemProperty(t, i.urlProperty) === undefined && (t[i.urlProperty] = "https://vimeo.com/" + s), a += 1, this.videoFactory(t, e, new o(i.vimeoPlayerUrl, s, i.vimeoPlayerIdPrefix + a, i.vimeoClickToPlay))) : n.call(this, t, e)
        }
    }), t
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(t, e) {
    "use strict";
    if (!window.postMessage) return e;
    var i = e.prototype;
    t.extend(i.options, {
        youTubeVideoIdProperty: "youtube",
        youTubePlayerVars: {
            wmode: "transparent"
        },
        youTubeClickToPlay: !1
    });
    var n = i.textFactory || i.imageFactory,
        o = function(t, e, i) {
            this.videoId = t, this.playerVars = e, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {}
        };
    return t.extend(o.prototype, {
        on: function(t, e) {
            return this.listeners[t] = e, this
        },
        loadAPI: function() {
            var t, e = this,
                i = window.onYouTubeIframeAPIReady,
                s = "https://www.youtube.com/iframe_api",
                n = document.getElementsByTagName("script"),
                o = n.length;
            for (window.onYouTubeIframeAPIReady = function() {
                    i && i.apply(this), e.playOnReady && e.play()
                }; o;)
                if (n[--o].src === s) return;
            (t = document.createElement("script")).src = s, n[0].parentNode.insertBefore(t, n[0])
        },
        onReady: function() {
            this.ready = !0, this.playOnReady && this.play()
        },
        onPlaying: function() {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        },
        onPause: function() {
            this.listeners.pause(), delete this.playStatus
        },
        onStateChange: function(t) {
            switch (window.clearTimeout(this.pauseTimeout), t.data) {
                case YT.PlayerState.PLAYING:
                    this.hasPlayed = !0, this.onPlaying();
                    break;
                case YT.PlayerState.UNSTARTED:
                case YT.PlayerState.PAUSED:
                    this.pauseTimeout = i.setTimeout.call(this, this.onPause, null, 500);
                    break;
                case YT.PlayerState.ENDED:
                    this.onPause()
            }
        },
        onError: function(t) {
            this.listeners.error(t)
        },
        play: function() {
            var e = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
                videoId: this.videoId,
                playerVars: this.playerVars,
                events: {
                    onReady: function() {
                        e.onReady()
                    },
                    onStateChange: function(t) {
                        e.onStateChange(t)
                    },
                    onError: function(t) {
                        e.onError(t)
                    }
                }
            })) : this.loadAPI())
        },
        pause: function() {
            this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), t.extend(i, {
        YouTubePlayer: o,
        textFactory: function(t, e) {
            var i = this.options,
                s = this.getItemProperty(t, i.youTubeVideoIdProperty);
            return s ? (this.getItemProperty(t, i.urlProperty) === undefined && (t[i.urlProperty] = "https://www.youtube.com/watch?v=" + s), this.getItemProperty(t, i.videoPosterProperty) === undefined && (t[i.videoPosterProperty] = "https://img.youtube.com/vi/" + s + "/maxresdefault.jpg"), this.videoFactory(t, e, new o(s, i.youTubePlayerVars, i.youTubeClickToPlay))) : n.call(this, t, e)
        }
    }), e
});
//# sourceMappingURL=blueimp-gallery.min.js.map