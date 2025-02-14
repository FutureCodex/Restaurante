! function(e, i, n) {
	"object" == typeof module && module && "object" == typeof module.exports ? module.exports = n : (e[i] = n, "function" == typeof define && define.amd && define(i, [], function() {
		return n
	}))
}(this, "jRespond", function(e, i, n) {
	"use strict";
	return function(e) {
		var i = [],
			t = [],
			s = e,
			a = "",
			l = "",
			o = 0,
			r = 500,
			d = function(e) {
				var s = e.breakpoint,
					o = e.enter || n;
				i.push(e), t.push(!1), c(s) && (o !== n && o.call(null, {
					entering: a,
					exiting: l
				}), t[i.length - 1] = !0)
			},
			u = function() {
				for (var e = [], s = [], o = 0; o < i.length; o++) {
					var r = i[o].breakpoint,
						d = i[o].enter || n,
						u = i[o].exit || n;
					"*" === r ? (d !== n && e.push(d), u !== n && s.push(u)) : c(r) ? (d === n || t[o] || e.push(d), t[o] = !0) : (u !== n && t[o] && s.push(u), t[o] = !1)
				}
				for (var g = {
						entering: a,
						exiting: l
					}, f = 0; f < s.length; f++) s[f].call(null, g);
				for (var p = 0; p < e.length; p++) e[p].call(null, g)
			},
			c = function(e) {
				if ("object" == typeof e) {
					if (e.join().indexOf(a) >= 0) return !0
				} else {
					if ("*" === e) return !0;
					if ("string" == typeof e && a === e) return !0
				}
			},
			g = function() {
				var e = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth;
				e !== o ? (r = 100, function(e) {
					for (var i = !1, n = 0; n < s.length; n++)
						if (e >= s[n].enter && e <= s[n].exit) {
							i = !0;
							break
						} i && a !== s[n].label ? (l = a, a = s[n].label, u()) : i || "" === a || (a = "", u())
				}(e)) : r = 500, o = e, setTimeout(g, r)
			};
		return g(), {
			addFunc: function(e) {
				! function(e) {
					if (e.length === n) d(e);
					else
						for (var i = 0; i < e.length; i++) d(e[i])
				}(e)
			},
			getBreakpoint: function() {
				return a
			}
		}
	}
}(0, this.document));
var $ = jQuery.noConflict();

function debounce(e, i, n) {
	let t, s, a, l, o;
	return function() {
		a = this, s = arguments, l = new Date;
		let r = function() {
				let d = new Date - l;
				d < i ? t = setTimeout(r, i - d) : (t = null, n || (o = e.apply(a, s)))
			},
			d = n && !t;
		return t || (t = setTimeout(r, i)), d && (o = e.apply(a, s)), o
	}
}

function onScrollSliderParallax() {
	SEMICOLON.slider.sliderParallax(), SEMICOLON.slider.sliderElementsFade()
}
$.fn.scrollEnd = function(e, i) {
		$(this).scroll(function() {
			let n = $(this);
			n.data("scrollTimeout") && clearTimeout(n.data("scrollTimeout")), n.data("scrollTimeout", setTimeout(e, i))
		})
	},
	function() {
		let e = 0,
			i = ["ms", "moz", "webkit", "o"];
		for (let e = 0; e < i.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
		window.requestAnimationFrame || (window.requestAnimationFrame = function(i, n) {
			let t = (new Date).getTime(),
				s = Math.max(0, 16 - (t - e)),
				a = window.setTimeout(function() {
					i(t + s)
				}, s);
			return e = t + s, a
		}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
			clearTimeout(e)
		})
	}();
var SEMICOLON = SEMICOLON || {};
window.scwEvents = window.scwEvents || {},
	function(e) {
		"use strict";
		SEMICOLON.initialize = {
			init: function() {
				SEMICOLON.initialize.defaults(), SEMICOLON.initialize.pageTransition(), SEMICOLON.initialize.goToTop(), SEMICOLON.initialize.lazyLoad(), SEMICOLON.initialize.lightbox(), SEMICOLON.initialize.resizeVideos(), SEMICOLON.initialize.dataResponsiveClasses(), SEMICOLON.initialize.dataResponsiveHeights(), SEMICOLON.initialize.stickFooterOnSmall()
			},
			execFunc: function(e, i) {
				let n = Array.prototype.slice.call(arguments, 2),
					t = e.split("."),
					s = t.pop();
				for (let e = 0; e < t.length; e++) i = i[t[e]];
				if (void 0 !== i[s]) return i[s].apply(i, n);
				console.log(e + " Function does not exist")
			},
			execPlugin: function(e, i, n) {
				let t, s = !1;
				n ? (i.trigger && !scwEvents[i.trigger] && (o.trigger(i.trigger), scwEvents[i.trigger] = !0), i.execfn && SEMICOLON.initialize.execFunc(i.execfn, window, e), i.class && r.addClass(i.class)) : (i.trigger && !scwEvents[i.trigger] ? t = setInterval(function e() {
					return Function("return " + i.pluginfn)() && (o.trigger(i.trigger), scwEvents[i.trigger] = !0, clearInterval(t)), e
				}(), 1e3) : s = !0, i.execfn && (i.trigger && !s ? o.on(i.trigger, function() {
					SEMICOLON.initialize.execFunc(i.execfn, window, e)
				}) : SEMICOLON.initialize.execFunc(i.execfn, window, e)), i.class && r.addClass(i.class))
			},
			jsLinking: function(i, n) {
				if (i.length < 1) return !1;
				if (n.hiddendisable && i.filter(":hidden").length == i.length) return !1;
				let t, s = Function("return " + n.pluginfn)(),
					a = "js/",
					l = !1;
				"undefined" != typeof scwJsPath && (a = scwJsPath + "/"), "undefined" != typeof scwDisableJsAJAX && !0 === scwDisableJsAJAX && (l = !0), t = /^(f|ht)tps?:\/\//i.test(window.decodeURIComponent(n.file)) ? n.file : a + n.file, s ? SEMICOLON.initialize.execPlugin(i, n, !0) : l ? console.log(n.error) : e.ajax({
					url: t,
					dataType: "script",
					cache: !0,
					crossDomain: !0,
					timeout: 5e3
				}).done(function() {
					SEMICOLON.initialize.execPlugin(i, n, !1)
				}).fail(function() {
					console.log(n.error)
				})
			},
			functions: function(i) {
				let n, t, s;
				"object" == typeof i.element && null !== i.element && ("undefined" !== i.element.parent && (t = i.element.parent), "undefined" !== i.element.el && (i.element = i.element.el)), s = i.element ? i.element : i.default, n = "object" === t ? t.find(s) : e(s), this.jsLinking(n, i)
			},
			defaults: function() {
				if (jRespond([{
						label: "smallest",
						enter: 0,
						exit: 575
					}, {
						label: "handheld",
						enter: 576,
						exit: 767
					}, {
						label: "tablet",
						enter: 768,
						exit: 991
					}, {
						label: "laptop",
						enter: 992,
						exit: 1199
					}, {
						label: "desktop",
						enter: 1200,
						exit: 1e4
					}]).addFunc([{
						breakpoint: "desktop",
						enter: function() {
							r.addClass("device-xl")
						},
						exit: function() {
							r.removeClass("device-xl")
						}
					}, {
						breakpoint: "laptop",
						enter: function() {
							r.addClass("device-lg")
						},
						exit: function() {
							r.removeClass("device-lg")
						}
					}, {
						breakpoint: "tablet",
						enter: function() {
							r.addClass("device-md")
						},
						exit: function() {
							r.removeClass("device-md")
						}
					}, {
						breakpoint: "handheld",
						enter: function() {
							r.addClass("device-sm")
						},
						exit: function() {
							r.removeClass("device-sm")
						}
					}, {
						breakpoint: "smallest",
						enter: function() {
							r.addClass("device-xs")
						},
						exit: function() {
							r.removeClass("device-xs")
						}
					}]), SEMICOLON.initialize.functions({
						default: "body",
						file: "plugins.easing.js",
						error: "plugins.easing.js: Plugin could not be loaded",
						pluginfn: 'typeof jQuery.easing["easeOutQuad"] !== "undefined"',
						trigger: "pluginEasingReady",
						class: "has-plugin-easing"
					}), SEMICOLON.initialize.functions({
						default: "body",
						file: "plugins.bootstrap.js",
						error: "plugins.bootstrap.js: Plugin could not be loaded",
						pluginfn: 'typeof bootstrap !== "undefined"',
						trigger: "pluginBootstrapReady",
						class: "has-plugin-bootstrap"
					}), !1 in window) {
					let e = {
						default: "body",
						file: "intersection-observer.js",
						error: "intersection-observer.js: Plugin could not be loaded",
						pluginfn: 'typeof window.IntersectionObserver !== "undefined"',
						trigger: "intersectObservePolyfill",
						class: "has-polyfill-intersection-observer"
					};
					SEMICOLON.initialize.functions(e)
				}
			},
			goToTop: function() {
				let i = K.attr("data-speed"),
					n = K.attr("data-easing");
				i || (i = 700), n || (n = "easeOutQuad"), K.off("click").on("click", function() {
					return e("body,html").stop(!0).animate({
						scrollTop: 0
					}, Number(i), n), !1
				})
			},
			goToTopScroll: function() {
				let e = K.attr("data-mobile"),
					i = K.attr("data-offset");
				if (i || (i = 450), "true" != e && (r.hasClass("device-sm") || r.hasClass("device-xs"))) return !0;
				o.scrollTop() > Number(i) ? (K.fadeIn(), r.addClass("gototop-active")) : (K.fadeOut(), r.removeClass("gototop-active"))
			},
			lightbox: function(e) {
				let i = {
					element: e,
					default: "[data-lightbox]",
					file: "plugins.lightbox.js",
					error: "plugins.lightbox.js: Plugin could not be loaded",
					execfn: "SEMICOLON_lightboxInit",
					pluginfn: "$().magnificPopup",
					trigger: "pluginLightboxReady",
					class: "has-plugin-lightbox"
				};
				SEMICOLON.initialize.functions(i)
			},
			modal: function(e) {
				let i = {
					element: e,
					default: ".modal-on-load",
					file: "plugins.lightbox.js",
					error: "plugins.lightbox.js: Plugin could not be loaded",
					execfn: "SEMICOLON_modalInit",
					pluginfn: "$().magnificPopup",
					trigger: "pluginLightboxReady",
					class: "has-plugin-lightbox"
				};
				SEMICOLON.initialize.functions(i)
			},
			resizeVideos: function() {
				SEMICOLON.initialize.functions({
					default: 'iframe[src*="youtube"],iframe[src*="vimeo"],iframe[src*="dailymotion"],iframe[src*="maps.google.com"],iframe[src*="google.com/maps"]',
					file: "plugins.fitvids.js",
					error: "plugins.fitvids.js: Plugin could not be loaded",
					execfn: "SEMICOLON_resizeVideosInit",
					pluginfn: "$().fitVids",
					trigger: "pluginfitVidsReady",
					class: "has-plugin-fitvids"
				})
			},
			pageTransition: function() {
				SEMICOLON.initialize.functions({
					default: ".page-transition",
					file: "plugins.pagetransition.js",
					error: "plugins.pagetransition.js: Plugin could not be loaded",
					execfn: "SEMICOLON_pageTransitionInit",
					pluginfn: "$().animsition",
					trigger: "pluginPageTransitionReady",
					class: "has-plugin-animsition"
				})
			},
			lazyLoad: function(e) {
				let i = {
					element: e,
					default: ".lazy",
					file: "plugins.lazyload.js",
					error: "plugins.lazyload.js: Plugin could not be loaded",
					execfn: "SEMICOLON_lazyLoadInit",
					pluginfn: 'typeof LazyLoad !== "undefined"',
					trigger: "pluginlazyLoadReady",
					class: "has-plugin-lazyload"
				};
				SEMICOLON.initialize.functions(i)
			},
			topScrollOffset: function() {
				let e = 0;
				return !r.hasClass("device-xl") && !r.hasClass("device-lg") || SEMICOLON.isMobile.any() ? e = 40 : (e = u.hasClass("sticky-header") ? q.hasClass("dots-menu") ? 100 : 144 : q.hasClass("dots-menu") ? 140 : 184, q.length || (e = u.hasClass("sticky-header") ? 100 : 140)), e
			},
			dataResponsiveClasses: function() {
				SEMICOLON.initialize.functions({
					default: "[data-class-xl],[data-class-lg],[data-class-md],[data-class-sm],[data-class-xs]",
					file: "plugins.dataclasses.js",
					error: "plugins.dataclasses.js: Plugin could not be loaded",
					execfn: "SEMICOLON_dataClassesInit",
					pluginfn: 'typeof scwDataClassesPlugin !== "undefined"',
					trigger: "pluginDataClassesReady",
					class: "has-plugin-dataclasses"
				})
			},
			dataResponsiveHeights: function() {
				SEMICOLON.initialize.functions({
					default: "[data-height-xl],[data-height-lg],[data-height-md],[data-height-sm],[data-height-xs]",
					file: "plugins.dataheights.js",
					error: "plugins.dataheights.js: Plugin could not be loaded",
					execfn: "SEMICOLON_dataHeightsInit",
					pluginfn: 'typeof scwDataHeightsPlugin !== "undefined"',
					trigger: "pluginDataHeightsReady",
					class: "has-plugin-dataheights"
				})
			},
			stickFooterOnSmall: function() {
				N.css({
					"margin-top": ""
				});
				let e = o.height(),
					i = d.height();
				!r.hasClass("sticky-footer") && N.length > 0 && d.has("#footer") && e > i && N.css({
					"margin-top": e - i
				})
			}
		}, SEMICOLON.header = {
			init: function() {
				SEMICOLON.header.initialize(), SEMICOLON.header.menufunctions(), SEMICOLON.header.fullWidthMenu(), SEMICOLON.header.stickyMenu(), SEMICOLON.header.stickyPageMenu(), SEMICOLON.header.sideHeader(), SEMICOLON.header.sidePanel(), SEMICOLON.header.onePageScroll(), SEMICOLON.header.logo(), SEMICOLON.header.topsearch(), SEMICOLON.header.topcart(), SEMICOLON.header.miscFunctions()
			},
			initialize: function() {
				a = c.outerHeight(), c.length > 0 && (e(".header-wrap-clone").length < 1 && c.after('<div class="header-wrap-clone"></div>'), E = e(".header-wrap-clone")), q.length > 0 && (q.find("#page-menu-wrap").after('<div class="page-menu-wrap-clone"></div>'), B = e(".page-menu-wrap-clone")), e(".menu-item:has(.sub-menu-container)").addClass("sub-menu"), e(".top-links-item:has(.top-links-sub-menu,.top-links-section) > a:not(:has(.icon-angle-down)), .menu-item:not(.mega-menu-title):has(.sub-menu-container) > .menu-link > div:not(:has(.icon-angle-down)), .page-menu-item:has(.page-menu-sub-menu) > a > div:not(:has(.icon-angle-down))").append('<i class="icon-angle-down"></i>'), e(".menu-item:not(.mega-menu-title):has(.sub-menu-container):not(:has(.sub-menu-trigger))").append('<button class="sub-menu-trigger icon-chevron-right"></button>'), SEMICOLON.header.menuInvert()
			},
			menuInvert: function(i) {
				let n = i || e(".mega-menu-content, .sub-menu-container, .top-links-section");
				n.children().css({
					display: "block"
				}), n.css({
					display: "block"
				}), n.each(function(i, n) {
					let t = e(n),
						s = t.offset(),
						a = t.width();
					if (r.hasClass("rtl")) {
						n.getBoundingClientRect().left < 0 && t.addClass("menu-pos-invert")
					}
					L - (a + s.left) < 0 && t.addClass("menu-pos-invert")
				}), n.children().css({
					display: ""
				}), n.css({
					display: ""
				})
			},
			includeOffset: function() {
				if (g.length < 1) return !0;
				let e = u.outerHeight();
				(u.hasClass("floating-header") || g.hasClass("include-topbar")) && (e += u.offset().top), g.css({
					"margin-top": -e
				}), SEMICOLON.slider.sliderParallax()
			},
			menufunctions: function() {
				let i, n = e(".menu-item:has(.sub-menu-container)"),
					t = n.children(".menu-link"),
					s = ".mega-menu-content, .sub-menu-container",
					l = e(s),
					o = ".menu-item",
					d = M.attr("data-trigger-speed") || 200;
				d = Number(d), i = n.children(".sub-menu-trigger"), r.hasClass("device-xl") || r.hasClass("device-lg") ? (setTimeout(function() {
					E.length > 0 && E.css({
						height: a
					}), SEMICOLON.header.includeOffset()
				}, 1e3), M.find(l).css({
					display: ""
				})) : g.css({
					"margin-top": ""
				}), r.hasClass("overlay-menu") && M.hasClass("on-click") && (r.hasClass("device-xl") || r.hasClass("device-lg")) ? t.off("click").on("click", function(i) {
					let n = e(this);
					n.parents(".sub-menu").siblings().find(l).stop(!0, !0).slideUp(d), n.parent(o).children(s).stop(!0, !0).slideToggle(d), i.preventDefault()
				}) : r.hasClass("side-header") && M.hasClass("on-click") || r.hasClass("device-md") || r.hasClass("device-sm") || r.hasClass("device-xs") ? (i.removeClass("icon-rotate-90"), e(o).find(l).filter(":not(:animated)").stop(!0, !0).slideUp(d, function() {
					r.toggleClass("primary-menu-open", !1)
				}), (i = i.add(t.filter('[href^="#"]'))).off("click").on("click", function(i) {
					let n = e(this);
					n.parents(".sub-menu").siblings().find(".sub-menu-trigger").removeClass("icon-rotate-90"), n.parents(".sub-menu").siblings().find(l).filter(":not(:animated)").stop(!0, !0).slideUp(d), n.parent(o).children(s).filter(":not(:animated)").stop(!0, !0).slideToggle(d);
					let t = n.parent(o).children(".sub-menu-trigger");
					t.hasClass("icon-rotate-90") ? t.removeClass("icon-rotate-90") : t.addClass("icon-rotate-90"), i.preventDefault()
				})) : (r.hasClass("overlay-menu") || r.hasClass("side-header")) && (r.hasClass("device-xl") || r.hasClass("device-lg")) ? (M.find(l).stop(!0, !0).slideUp(d), e(o).hover(function(i) {
					e(this).children(s).stop(!0, !0).slideDown(d)
				}, function() {
					e(this).children(s).stop(!0, !0).slideUp(d)
				})) : M.hasClass("on-click") && t.off("click").on("click", function(i) {
					let n = e(this);
					n.parents(".sub-menu").siblings().find(l).removeClass("d-block"), n.parent(o).children(s).toggleClass("d-block"), n.parent(o).siblings().removeClass("current"), n.parent(o).toggleClass("current"), i.preventDefault()
				}), (e(".top-links").hasClass("on-click") || r.hasClass("device-md") || r.hasClass("device-sm") || r.hasClass("device-xs")) && e(".top-links-item:has(.top-links-sub-menu,.top-links-section) > a").on("click", function(i) {
					e(this).parents("li").siblings().find(".top-links-sub-menu,.top-links-section").removeClass("d-block"), e(this).parent("li").children(".top-links-sub-menu,.top-links-section").toggleClass("d-block"), i.preventDefault()
				}), SEMICOLON.header.menuInvert(e(".top-links-section")), e("#primary-menu-trigger").off("click").on("click", function() {
					return (r.hasClass("device-md") || r.hasClass("device-sm") || r.hasClass("device-xs")) && (M.find(".mobile-primary-menu").length > 0 ? (e(".primary-menu:not(.mobile-menu-off-canvas) .mobile-primary-menu").stop(!0, !0).slideToggle(d), e(".primary-menu.mobile-menu-off-canvas .mobile-primary-menu").toggleClass("d-block")) : (e(".primary-menu:not(.mobile-menu-off-canvas) .menu-container").stop(!0, !0).slideToggle(d), e(".primary-menu.mobile-menu-off-canvas .menu-container").toggleClass("d-block"))), r.toggleClass("primary-menu-open"), !1
				}), e(".menu-container:not(.mobile-primary-menu)").css({
					display: ""
				}), (r.hasClass("device-xl") || r.hasClass("device-lg")) && M.find(".mobile-primary-menu").removeClass("d-block")
			},
			fullWidthMenu: function() {
				if (r.hasClass("device-md") || r.hasClass("device-sm") || r.hasClass("device-xs")) return e(".mega-menu-content, .top-search-form").css({
					width: ""
				}), !0;
				let i = e(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content").parents(".header-row").width();
				if (u.find(".container-fullwidth").length > 0 && e(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content").css({
						width: i
					}), r.hasClass("stretched") ? u.hasClass("floating-header") ? e(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content, .top-search-form").css({
						width: i + 80
					}) : e(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content, .top-search-form").css({
						width: i
					}) : u.hasClass("full-header") && e(".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content").css({
						width: i - 80
					}), u.find(".header-row").length > 1) {
					let i = e(".menu-container > .mega-menu:not(.mega-menu-small) .mega-menu-content").eq(0),
						n = ".menu-container > .mega-menu:not(.mega-menu-small) .mega-menu-content { top: calc( 100% - " + (c.outerHeight() - i.parents(".header-row").outerHeight()) + "px ); }",
						t = document.head || document.getElementsByTagName("head")[0],
						s = document.createElement("style");
					t.appendChild(s), s.type = "text/css", s.appendChild(document.createTextNode(n))
				}
			},
			stickyMenu: function(e) {
				i = o.scrollTop(), (r.hasClass("device-xl") || r.hasClass("device-lg")) && (i > e ? r.hasClass("side-header") || (u.filter(":not(.no-sticky)").addClass("sticky-header"), SEMICOLON.header.stickyMenuClass(), "true" != I || u.hasClass("no-sticky") || (i - e > Number(b) ? (u.addClass("sticky-header-shrink"), S && (j.find("img").css({
					height: Number(p)
				}), SEMICOLON.header.menuItemsSpacing(C))) : (u.removeClass("sticky-header-shrink"), S && (j.find("img").css({
					height: Number(f)
				}), SEMICOLON.header.menuItemsSpacing(O))))) : (SEMICOLON.header.removeStickyness(), S && (j.find("img").css({
					height: Number(f)
				}), SEMICOLON.header.menuItemsSpacing(O)))), (r.hasClass("device-xs") || r.hasClass("device-sm") || r.hasClass("device-md")) && ("true" == m ? i > e ? (u.filter(":not(.no-sticky)").addClass("sticky-header"), SEMICOLON.header.stickyMenuClass()) : (SEMICOLON.header.removeStickyness(), SEMICOLON.header.responsiveMenuClass()) : SEMICOLON.header.removeStickyness(), S && (j.find("img").css({
					height: Number(h)
				}), SEMICOLON.header.menuItemsSpacing("")))
			},
			menuItemsSpacing: function(e) {
				let i = y;
				r.hasClass("side-header") || r.hasClass("overlay-menu") || (M.hasClass("menu-spacing-margin") ? "" == e ? i.css({
					"margin-top": "",
					"margin-bottom": ""
				}) : i.css({
					"margin-top": Number(e),
					"margin-bottom": Number(e)
				}) : "" == e ? i.css({
					"padding-top": "",
					"padding-bottom": ""
				}) : i.css({
					"padding-top": Number(e),
					"padding-bottom": Number(e)
				}))
			},
			stickyPageMenu: function(e) {
				if (o.scrollTop() > e)
					if (r.hasClass("device-xl") || r.hasClass("device-lg")) {
						q.filter(":not(.dots-menu,.no-sticky)").addClass("sticky-page-menu");
						let e = c.outerHeight();
						u.length > 0 && !u.hasClass("no-sticky") && q.filter(".sticky-page-menu:not(.dots-menu,.no-sticky)").find(V).css({
							top: e + "px"
						})
					} else(r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-md")) && "true" == q.attr("data-mobile-sticky") && q.filter(":not(.dots-menu,.no-sticky)").addClass("sticky-page-menu");
				else q.removeClass("sticky-page-menu"), q.find(V).css({
					top: ""
				})
			},
			removeStickyness: function() {
				u.hasClass("sticky-header") && (u.removeClass("sticky-header"), u.removeClass().addClass(v), c.removeClass().addClass(k), c.hasClass("force-not-dark") || c.removeClass("not-dark"), SEMICOLON.slider.swiperSliderMenu(), SEMICOLON.slider.revolutionSliderMenu()), (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-md")) && void 0 === x && (u.removeClass().addClass(v), c.removeClass().addClass(k), c.hasClass("force-not-dark") || c.removeClass("not-dark"))
			},
			sideHeader: function() {
				e("#header-trigger").off("click").on("click", function() {
					return e("body.open-header").toggleClass("side-header-open"), !1
				})
			},
			sidePanel: function() {
				e(".side-panel-trigger").off("click").on("click", function() {
					return r.toggleClass("side-panel-open"), r.hasClass("device-touch") && r.hasClass("side-push-panel") && r.toggleClass("ohidden"), !1
				})
			},
			onePageScroll: function(e) {
				let i = {
					element: e,
					default: ".one-page-menu",
					file: "plugins.onepage.js",
					error: "plugins.onepage.js: Plugin could not be loaded",
					execfn: "SEMICOLON_onePageModule",
					pluginfn: 'typeof scwOnePageModulePlugin !== "undefined"',
					trigger: "pluginOnePageModuleReady",
					class: "has-plugin-onepagemodule"
				};
				SEMICOLON.initialize.functions(i)
			},
			logo: function() {
				let e = P.find("img"),
					i = z.find("img");
				!u.hasClass("dark") && !r.hasClass("dark") || c.hasClass("not-dark") ? (R && e.attr("src") != R && e.attr("src", R), T && i.attr("src") != T && i.attr("src", T)) : (F && e.attr("src") != F && e.attr("src", F), _ && i.attr("src") != _ && i.attr("src", _)), u.hasClass("sticky-header") && (A && e.attr("src") != A && e.attr("src", A), H && i.attr("src") != H && i.attr("src", H)), (r.hasClass("device-md") || r.hasClass("device-sm") || r.hasClass("device-xs")) && (D && e.attr("src") != D && e.attr("src", D), $ && i.attr("src") != $ && i.attr("src", $))
			},
			stickyMenuClass: function() {
				let e = "";
				w && (e = w.split(/ +/));
				let i = e.length;
				if (i > 0) {
					let n = 0;
					for (n = 0; n < i; n++) "not-dark" == e[n] ? (u.removeClass("dark"), c.filter(":not(.not-dark)").addClass("not-dark")) : "dark" == e[n] ? (c.removeClass("not-dark force-not-dark"), u.hasClass(e[n]) || u.addClass(e[n])) : u.hasClass(e[n]) || u.addClass(e[n])
				}
			},
			responsiveMenuClass: function() {
				if (r.hasClass("device-xl") || r.hasClass("device-lg")) return !0;
				let e = "";
				x && (e = x.split(/ +/));
				let i = e.length;
				if (i > 0) {
					let n = 0;
					for (n = 0; n < i; n++) "not-dark" == e[n] ? (u.removeClass("dark"), c.addClass("not-dark")) : "dark" == e[n] ? (c.removeClass("not-dark force-not-dark"), u.hasClass(e[n]) || u.addClass(e[n])) : u.hasClass(e[n]) || u.addClass(e[n])
				}
				SEMICOLON.header.logo()
			},
			topsearch: function() {
				G.parents(".header-row").addClass("top-search-parent");
				let i = u.find(".top-search-parent");
				e("#top-search-trigger").off("click").on("click", function(e) {
					clearTimeout(n), r.toggleClass("top-search-open"), X.toggleClass("top-cart-open", !1), (r.hasClass("device-md") || r.hasClass("device-sm") || r.hasClass("device-xs")) && (M.filter(":not(.mobile-menu-off-canvas)").find(".menu-container").slideUp(200), M.filter(".mobile-menu-off-canvas").find(".menu-container").toggleClass("d-block", !1)), r.hasClass("top-search-open") ? i.toggleClass("position-relative", !0) : n = setTimeout(function() {
						i.toggleClass("position-relative", !1)
					}, 750), r.toggleClass("primary-menu-open", !1), q.toggleClass("page-menu-open", !1), r.hasClass("top-search-open") && G.find("input").focus(), e.stopPropagation(), e.preventDefault()
				})
			},
			topcart: function() {
				if (X.length < 1) return !0;
				e("#top-cart-trigger").off("click").on("click", function(e) {
					q.toggleClass("page-menu-open", !1), X.toggleClass("top-cart-open"), e.stopPropagation(), e.preventDefault()
				})
			},
			miscFunctions: function() {
				let i = u.find(".top-search-parent");
				e(document).on("click", function(t) {
					e(t.target).closest(".top-search-form").length || (r.toggleClass("top-search-open", !1), n = setTimeout(function() {
						i.toggleClass("position-relative", !1)
					}, 750)), e(t.target).closest("#top-cart").length || X.toggleClass("top-cart-open", !1), e(t.target).closest("#page-menu").length || q.toggleClass("page-menu-open", !1), e(t.target).closest("#side-panel").length || r.toggleClass("side-panel-open", !1), e(t.target).closest(".primary-menu.on-click").length || (M.filter(".on-click").find(".menu-container").find(".d-block").removeClass("d-block"), M.filter(".on-click").find(".menu-item").removeClass("current")), M.hasClass("mobile-menu-off-canvas") && (e(t.target).closest(".primary-menu.mobile-menu-off-canvas .menu-container").length || (M.filter(".mobile-menu-off-canvas").find(".menu-container").toggleClass("d-block", !1), r.toggleClass("primary-menu-open", !1))), e(t.target).closest(".top-links.on-click").length || e(".top-links.on-click").find(".top-links-sub-menu,.top-links-section").removeClass("d-block")
				})
			}
		}, SEMICOLON.slider = {
			init: function() {
				SEMICOLON.slider.sliderDimensions(), SEMICOLON.slider.sliderRun(), SEMICOLON.slider.sliderParallax(), SEMICOLON.slider.sliderElementsFade()
			},
			sliderDimensions: function() {
				let e = U.outerHeight(),
					i = U.outerWidth(),
					n = U.find(".slider-inner"),
					t = Q.find(".swiper-wrapper"),
					s = Q.find(".swiper-slide").first(),
					a = Q.hasClass("h-auto") || Q.hasClass("min-vh-0");
				if (r.hasClass("device-xl") || r.hasClass("device-lg")) {
					if (setTimeout(function() {
							n.height(e), a && (e = U.find(".slider-inner").children().first().outerHeight(), U.height(e), n.height(e))
						}, 500), a) {
						let e = s.children().first();
						(e.hasClass("container") || e.hasClass("container-fluid")) && (e = e.children().first()), e.outerHeight() > t.outerHeight() && t.css({
							height: "auto"
						})
					}
					r.hasClass("side-header") && n.width(i), r.hasClass("stretched") || (i = d.outerWidth(), n.width(i))
				} else t.css({
					height: ""
				}), U.css({
					height: ""
				}), n.css({
					width: "",
					height: ""
				})
			},
			sliderRun: function(e) {
				let i = {
					element: e,
					default: ".swiper_wrapper",
					file: "plugins.swiper.js",
					error: "plugins.swiper.js: Plugin could not be loaded",
					execfn: "SEMICOLON_swiperInit",
					pluginfn: 'typeof Swiper !== "undefined"',
					trigger: "pluginSwiperReady",
					class: "has-plugin-swiper"
				};
				SEMICOLON.initialize.functions(i)
			},
			sliderParallaxOffset: function() {
				let e = 0,
					i = u.outerHeight();
				return (r.hasClass("side-header") || u.next(".include-header").length > 0) && (i = 0), e = Y.length > 0 ? Y.outerHeight() + i : i, Q.next("#header").length > 0 && (e = 0), e
			},
			sliderParallaxSet: function(e, i, n) {
				n && (n.style.transform = "translate3d(" + e + ", " + i + "px, 0)")
			},
			sliderParallax: function() {
				if (U.length < 1) return !0;
				let e, i, n = SEMICOLON.slider.sliderParallaxOffset(),
					a = U.outerHeight();
				t = window.pageXOffset, s = window.pageYOffset, !r.hasClass("device-xl") && !r.hasClass("device-lg") || SEMICOLON.isMobile.any() ? (U.find(".slider-inner").length > 0 ? (SEMICOLON.slider.sliderParallaxSet(0, 0, ne), SEMICOLON.slider.sliderParallaxSet(0, 0, ie)) : (SEMICOLON.slider.sliderParallaxSet(0, 0, ee), SEMICOLON.slider.sliderParallaxSet(0, 0, ie)), U.addClass("slider-parallax-visible").removeClass("slider-parallax-invisible")) : (a + n + 50 > s ? (U.addClass("slider-parallax-visible").removeClass("slider-parallax-invisible"), s > n ? U.find(".slider-inner").length > 0 ? (e = -.4 * (s - n), i = -.15 * (s - n), SEMICOLON.slider.sliderParallaxSet(0, e, ne), SEMICOLON.slider.sliderParallaxSet(0, i, ie)) : (e = (s - n) / 1.5, i = (s - n) / 7, SEMICOLON.slider.sliderParallaxSet(0, e, ee), SEMICOLON.slider.sliderParallaxSet(0, i, ie)) : U.find(".slider-inner").length > 0 ? (SEMICOLON.slider.sliderParallaxSet(0, 0, ne), SEMICOLON.slider.sliderParallaxSet(0, 0, ie)) : (SEMICOLON.slider.sliderParallaxSet(0, 0, ee), SEMICOLON.slider.sliderParallaxSet(0, 0, ie))) : U.addClass("slider-parallax-invisible").removeClass("slider-parallax-visible"), requestAnimationFrame(function() {
					SEMICOLON.slider.sliderParallax(), SEMICOLON.slider.sliderElementsFade()
				}))
			},
			sliderElementsFade: function() {
				if (U.length < 1) return !0;
				if (!r.hasClass("device-xl") && !r.hasClass("device-lg") || SEMICOLON.isMobile.any()) U.find(".slider-arrow-left,.slider-arrow-right,.slider-caption,.slider-element-fade").css({
					opacity: 1
				});
				else {
					SEMICOLON.slider.sliderParallaxOffset();
					let e, i = U.outerHeight();
					e = u.hasClass("transparent-header") || r.hasClass("side-header") ? 100 : 0, U.filter(".slider-parallax-visible").find(".slider-arrow-left,.slider-arrow-right,.slider-caption,.slider-element-fade").css({
						opacity: 1 - 1.85 * (s - e) / i
					})
				}
			},
			swiperSliderMenu: function(e) {
				if (e = void 0 !== e && e, r.hasClass("device-xl") || r.hasClass("device-lg") || u.hasClass("transparent-header-responsive") && !r.hasClass("primary-menu-open")) {
					let i = Q.find(".swiper-slide.swiper-slide-active");
					SEMICOLON.slider.headerSchemeChanger(i, e)
				}
			},
			revolutionSliderMenu: function(e) {
				if (e = void 0 !== e && e, r.hasClass("device-xl") || r.hasClass("device-lg") || u.hasClass("transparent-header-responsive") && !r.hasClass("primary-menu-open")) {
					let i = Q.find(".active-revslide");
					SEMICOLON.slider.headerSchemeChanger(i, e)
				}
			},
			headerSchemeChanger: function(i, n) {
				if (i.length > 0) {
					let t, s, a = !1;
					if (i.hasClass("dark")) {
						if ((s = (t = v ? v.split(/ +/) : "").length) > 0) {
							let e = 0;
							for (e = 0; e < s; e++)
								if ("dark" == t[e] && 1 == n) {
									a = !0;
									break
								}
						}
						e("#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)").addClass("dark"), a || e("#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header").removeClass("dark"), c.removeClass("not-dark")
					} else r.hasClass("dark") ? (i.addClass("not-dark"), e("#header.transparent-header:not(.semi-transparent,.floating-header)").removeClass("dark"), e("#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)").find("#header-wrap").addClass("not-dark")) : (e("#header.transparent-header:not(.semi-transparent,.floating-header)").removeClass("dark"), c.removeClass("not-dark"));
					u.hasClass("sticky-header") && SEMICOLON.header.stickyMenuClass(), SEMICOLON.header.logo()
				}
			}
		}, SEMICOLON.portfolio = {
			init: function() {
				SEMICOLON.portfolio.revealDesc(), SEMICOLON.portfolio.ajaxload()
			},
			revealDesc: function() {
				let i = e(".portfolio-reveal");
				if (i < 1) return !0;
				i.each(function() {
					e(this).find(".portfolio-item").each(function() {
						let i = e(this).find(".portfolio-desc"),
							n = i.outerHeight();
						i.css({
							"margin-top": "-" + n + "px"
						})
					})
				})
			},
			ajaxload: function() {
				SEMICOLON.initialize.functions({
					default: ".portfolio-ajax",
					file: "plugins.ajaxportfolio.js",
					error: "plugins.ajaxportfolio.js: Plugin could not be loaded",
					execfn: "SEMICOLON_portfolioAjaxloadInit",
					pluginfn: 'typeof scwAjaxPortfolioPlugin !== "undefined"',
					trigger: "pluginAjaxPortfolioReady",
					class: "has-plugin-ajaxportfolio"
				})
			}
		}, SEMICOLON.widget = {
			init: function() {
				SEMICOLON.widget.animations(), SEMICOLON.widget.hoverAnimation(), SEMICOLON.widget.youtubeBgVideo(), SEMICOLON.widget.tabs(), SEMICOLON.widget.toggles(), SEMICOLON.widget.accordions(), SEMICOLON.widget.counter(), SEMICOLON.widget.countdown(), SEMICOLON.widget.gmap(), SEMICOLON.widget.roundedSkill(), SEMICOLON.widget.progress(), SEMICOLON.widget.twitterFeed(), SEMICOLON.widget.flickrFeed(), SEMICOLON.widget.instagramPhotos(), SEMICOLON.widget.dribbbleShots(), SEMICOLON.widget.navTree(), SEMICOLON.widget.textRotator(), SEMICOLON.widget.carousel(), SEMICOLON.widget.linkScroll(), SEMICOLON.widget.ajaxForm(), SEMICOLON.widget.subscription(), SEMICOLON.widget.shapeDivider(), SEMICOLON.widget.stickySidebar(), SEMICOLON.widget.cookieNotify(), SEMICOLON.widget.cartQuantity(), SEMICOLON.widget.readmore(), SEMICOLON.widget.pricingSwitcher(), SEMICOLON.widget.extras()
			},
			parallax: function(e) {
				let i = {
					element: e,
					default: ".parallax,.page-title-parallax,.portfolio-parallax .portfolio-image",
					file: "plugins.parallax.js",
					error: "plugins.parallax.js: Plugin could not be loaded",
					execfn: "SEMICOLON_parallaxInit",
					pluginfn: 'typeof skrollr !== "undefined"',
					trigger: "pluginParallaxReady",
					class: "has-plugin-parallax"
				};
				SEMICOLON.initialize.functions(i)
			},
			animations: function(e) {
				let i = {
					element: e,
					default: "[data-animate]",
					file: "plugins.animations.js",
					error: "plugins.animations.js: Plugin could not be loaded",
					execfn: "SEMICOLON_animationsInit",
					pluginfn: 'typeof scwAnimationsPlugin !== "undefined"',
					trigger: "pluginAnimationsReady",
					class: "has-plugin-animations"
				};
				SEMICOLON.initialize.functions(i)
			},
			hoverAnimation: function(e) {
				let i = {
					element: e,
					default: "[data-hover-animate]",
					file: "plugins.hoveranimation.js",
					error: "plugins.hoveranimation.js: Plugin could not be loaded",
					execfn: "SEMICOLON_hoverAnimationInit",
					pluginfn: 'typeof scwHoverAnimationPlugin !== "undefined"',
					trigger: "pluginHoverAnimationReady",
					class: "has-plugin-hoveranimation"
				};
				SEMICOLON.initialize.functions(i)
			},
			gridInit: function(e) {
				let i = {
					element: e,
					default: ".grid-container",
					file: "plugins.isotope.js",
					error: "plugins.isotope.js: Plugin could not be loaded",
					execfn: "SEMICOLON_gridContainerInit",
					pluginfn: "$().isotope",
					trigger: "pluginIsotopeReady",
					class: "has-plugin-isotope"
				};
				SEMICOLON.initialize.functions(i)
			},
			filterInit: function(e) {
				let i = {
					element: e,
					default: ".grid-filter,.custom-filter",
					file: "plugins.gridfilter.js",
					error: "plugins.gridfilter.js: Plugin could not be loaded",
					execfn: "SEMICOLON_gridFilterInit",
					pluginfn: '$().isotope && typeof scwGridFilterPlugin !== "undefined"',
					trigger: "pluginGridFilterReady",
					class: "has-plugin-isotope-filter"
				};
				SEMICOLON.initialize.functions(i)
			},
			loadFlexSlider: function(e) {
				let i = {
					element: e,
					default: ".fslider",
					file: "plugins.flexslider.js",
					error: "plugins.flexslider.js: Plugin could not be loaded",
					execfn: "SEMICOLON_flexSliderInit",
					pluginfn: "$().flexslider",
					trigger: "pluginFlexSliderReady",
					class: "has-plugin-flexslider"
				};
				SEMICOLON.initialize.functions(i)
			},
			html5Video: function(e) {
				let i = {
					element: e,
					default: ".video-wrap:has(video)",
					file: "plugins.html5video.js",
					error: "plugins.html5video.js: Plugin could not be loaded",
					execfn: "SEMICOLON_html5VideoInit",
					pluginfn: 'typeof scwHtml5VideoPlugin !== "undefined"',
					trigger: "pluginHtml5VideoReady",
					class: "has-plugin-html5video"
				};
				SEMICOLON.initialize.functions(i)
			},
			youtubeBgVideo: function(e) {
				let i = {
					element: e,
					default: ".yt-bg-player",
					file: "plugins.youtube.js",
					error: "plugins.youtube.js: Plugin could not be loaded",
					execfn: "SEMICOLON_youtubeBgVideoInit",
					pluginfn: "$().YTPlayer",
					trigger: "pluginYoutubeBgVideoReady",
					class: "has-plugin-youtubebg"
				};
				SEMICOLON.initialize.functions(i)
			},
			tabs: function(e) {
				let i = {
					element: e,
					default: '.tabs,[data-plugin="tabs"]',
					file: "plugins.tabs.js",
					error: "plugins.tabs.js: Plugin could not be loaded",
					execfn: "SEMICOLON_tabsInit",
					pluginfn: "$().tabs",
					trigger: "pluginTabsReady",
					class: "has-plugin-tabs"
				};
				SEMICOLON.initialize.functions(i)
			},
			toggles: function(e) {
				let i = {
					element: e,
					default: ".toggle",
					file: "plugins.toggles.js",
					error: "plugins.toggles.js: Plugin could not be loaded",
					execfn: "SEMICOLON_togglesInit",
					pluginfn: 'typeof scwTogglesPlugin !== "undefined"',
					trigger: "pluginTogglesReady",
					class: "has-plugin-toggles"
				};
				SEMICOLON.initialize.functions(i)
			},
			accordions: function(e) {
				let i = {
					element: e,
					default: ".accordion",
					file: "plugins.accordions.js",
					error: "plugins.accordions.js: Plugin could not be loaded",
					execfn: "SEMICOLON_accordionsInit",
					pluginfn: 'typeof scwAccordionsPlugin !== "undefined"',
					trigger: "pluginAccordionsReady",
					class: "has-plugin-accordions"
				};
				SEMICOLON.initialize.functions(i)
			},
			counter: function(e) {
				let i = {
					element: e,
					default: ".counter",
					file: "plugins.counter.js",
					error: "plugins.counter.js: Plugin could not be loaded",
					execfn: "SEMICOLON_counterInit",
					pluginfn: "$().countTo",
					trigger: "pluginCounterReady",
					class: "has-plugin-counter"
				};
				SEMICOLON.initialize.functions(i)
			},
			countdown: function(e) {
				let i = {
						element: e,
						default: ".countdown",
						file: "components/moment.js",
						error: "components/moment.js: Plugin could not be loaded",
						execfn: !1,
						pluginfn: 'typeof moment !== "undefined"',
						trigger: "pluginMomentReady",
						class: "has-plugin-moment"
					},
					n = {
						element: e,
						default: ".countdown",
						file: "plugins.countdown.js",
						error: "plugins.countdown.js: Plugin could not be loaded",
						execfn: "SEMICOLON_countdownInit",
						pluginfn: "$().countdown",
						trigger: "pluginCountdownReady",
						class: "has-plugin-countdown"
					};
				SEMICOLON.initialize.functions(i), SEMICOLON.initialize.functions(n)
			},
			gmap: function(e) {
				let i = {
						element: e,
						default: ".gmap",
						file: "https://maps.google.com/maps/api/js?key=" + Z,
						error: "Google Maps API could not be loaded",
						execfn: !1,
						pluginfn: 'typeof google !== "undefined"',
						hiddendisable: !0,
						class: "has-plugin-gmapapi"
					},
					n = {
						element: e,
						default: ".gmap",
						file: "plugins.gmap.js",
						error: "plugins.gmap.js: Plugin could not be loaded",
						execfn: "SEMICOLON_gmapInit",
						pluginfn: 'typeof google !== "undefined" && $().gMap',
						hiddendisable: !0,
						trigger: "pluginGmapReady",
						class: "has-plugin-gmap"
					};
				SEMICOLON.initialize.functions(i), SEMICOLON.initialize.functions(n)
			},
			roundedSkill: function(e) {
				let i = {
					element: e,
					default: ".rounded-skill",
					file: "plugins.piechart.js",
					error: "plugins.piechart.js: Plugin could not be loaded",
					execfn: "SEMICOLON_roundedSkillInit",
					pluginfn: "$().easyPieChart",
					trigger: "pluginRoundedSkillReady",
					class: "has-plugin-piechart"
				};
				SEMICOLON.initialize.functions(i)
			},
			progress: function(e) {
				let i = {
					element: e,
					default: ".progress",
					file: "plugins.progress.js",
					error: "plugins.progress.js: Plugin could not be loaded",
					execfn: "SEMICOLON_progressInit",
					pluginfn: 'typeof scwProgressPlugin !== "undefined"',
					trigger: "pluginProgressReady",
					class: "has-plugin-progress"
				};
				SEMICOLON.initialize.functions(i)
			},
			twitterFeed: function(e) {
				let i = {
					element: e,
					default: ".twitter-feed",
					file: "plugins.twitter.js",
					error: "plugins.twitter.js: Plugin could not be loaded",
					execfn: "SEMICOLON_twitterFeedInit",
					pluginfn: 'typeof sm_format_twitter !== "undefined" && typeof sm_format_twitter3 !== "undefined"',
					trigger: "pluginTwitterFeedReady",
					class: "has-plugin-twitter"
				};
				SEMICOLON.initialize.functions(i)
			},
			flickrFeed: function(e) {
				let i = {
					element: e,
					default: ".flickr-feed",
					file: "plugins.flickrfeed.js",
					error: "plugins.flickrfeed.js: Plugin could not be loaded",
					execfn: "SEMICOLON_flickrFeedInit",
					pluginfn: "$().jflickrfeed",
					trigger: "pluginFlickrFeedReady",
					class: "has-plugin-flickr"
				};
				SEMICOLON.initialize.functions(i)
			},
			instagramPhotos: function(e) {
				let i = {
					element: e,
					default: ".instagram-photos",
					file: "plugins.instagram.js",
					error: "plugins.instagram.js: Plugin could not be loaded",
					execfn: "SEMICOLON_instagramPhotosInit",
					pluginfn: 'typeof scwInstagramPlugin !== "undefined"',
					trigger: "pluginInstagramReady",
					class: "has-plugin-instagram"
				};
				SEMICOLON.initialize.functions(i)
			},
			dribbbleShots: function(e) {
				let i = {
						element: e,
						default: ".dribbble-shots",
						file: "plugins.dribbble.js",
						error: "plugins.dribbble.js: Plugin could not be loaded",
						execfn: "SEMICOLON_dribbbleShotsInit",
						pluginfn: "$.jribbble",
						trigger: "pluginDribbbleReady",
						class: "has-plugin-dribbble"
					},
					n = {
						element: e,
						default: ".dribbble-shots",
						file: "plugins.imagesloaded.js",
						error: "plugins.imagesloaded.js: Plugin could not be loaded",
						pluginfn: "$().imagesLoaded",
						trigger: "pluginImagesLoadedReady",
						class: "has-plugin-imagesloaded"
					};
				SEMICOLON.initialize.functions(i), SEMICOLON.initialize.functions(n)
			},
			navTree: function(e) {
				let i = {
					element: e,
					default: ".nav-tree",
					file: "plugins.navtree.js",
					error: "plugins.navtree.js: Plugin could not be loaded",
					execfn: "SEMICOLON_navtreeInit",
					pluginfn: 'typeof scwNavTreePlugin !== "undefined"',
					trigger: "pluginNavTreeReady",
					class: "has-plugin-navtree"
				};
				SEMICOLON.initialize.functions(i)
			},
			carousel: function(e) {
				let i = {
					element: e,
					default: ".carousel-widget",
					file: "plugins.carousel.js",
					error: "plugins.carousel.js: Plugin could not be loaded",
					execfn: "SEMICOLON_carouselInit",
					pluginfn: "$().owlCarousel",
					trigger: "pluginCarouselReady",
					class: "has-plugin-carousel"
				};
				SEMICOLON.initialize.functions(i)
			},
			masonryThumbs: function(e) {
				let i = {
					element: e,
					default: ".masonry-thumbs",
					file: "plugins.masonrythumbs.js",
					error: "plugins.masonrythumbs.js: Plugin could not be loaded",
					execfn: "SEMICOLON_masonryThumbsInit",
					pluginfn: '$().isotope && typeof scwMasonryThumbsPlugin !== "undefined"',
					trigger: "pluginMasonryThumbsReady",
					class: "has-plugin-masonrythumbs"
				};
				SEMICOLON.initialize.functions(i)
			},
			notifications: function(e) {
				let i = {
					element: e,
					default: !1,
					file: "plugins.notify.js",
					error: "plugins.notify.js: Plugin could not be loaded",
					execfn: "SEMICOLON_notificationInit",
					pluginfn: 'typeof scwNotificationPlugin !== "undefined"',
					trigger: "pluginNotifyReady",
					class: "has-plugin-toast"
				};
				SEMICOLON.initialize.functions(i)
			},
			textRotator: function(e) {
				let i = {
					element: e,
					default: ".text-rotater",
					file: "plugins.textrotator.js",
					error: "plugins.textrotator.js: Plugin could not be loaded",
					execfn: "SEMICOLON_textRotatorInit",
					pluginfn: "$().Morphext",
					trigger: "pluginTextRotatorReady",
					class: "has-plugin-textrotator"
				};
				SEMICOLON.initialize.functions(i)
			},
			linkScroll: function(e) {
				let i = {
					element: e,
					default: "a[data-scrollto]",
					file: "plugins.linkscroll.js",
					error: "plugins.linkscroll.js: Plugin could not be loaded",
					execfn: "SEMICOLON_linkScrollInit",
					pluginfn: 'typeof scwLinkScrollPlugin !== "undefined"',
					trigger: "pluginLinkScrollReady",
					class: "has-plugin-linkscroll"
				};
				SEMICOLON.initialize.functions(i)
			},
			ajaxForm: function(e) {
				let i = {
						element: e,
						default: ".form-widget",
						file: "plugins.form.js",
						error: "plugins.form.js: Plugin could not be loaded",
						execfn: !1,
						pluginfn: "$().validate && $().ajaxSubmit",
						class: "has-plugin-form"
					},
					n = {
						element: e,
						default: ".form-widget",
						file: "plugins.ajaxform.js",
						error: "plugins.ajaxform.js: Plugin could not be loaded",
						execfn: "SEMICOLON_ajaxFormInit",
						pluginfn: 'typeof scwAjaxFormPlugin !== "undefined"',
						trigger: "pluginAjaxFormReady",
						class: "has-plugin-ajaxform"
					};
				SEMICOLON.initialize.functions(i), SEMICOLON.initialize.functions(n)
			},
			subscription: function(e) {
				let i = {
						element: e,
						default: ".subscribe-widget",
						file: "plugins.form.js",
						error: "plugins.form.js: Plugin could not be loaded",
						execfn: !1,
						pluginfn: "$().validate && $().ajaxSubmit",
						class: "has-plugin-form"
					},
					n = {
						element: e,
						default: ".subscribe-widget",
						file: "plugins.subscribe.js",
						error: "plugins.subscribe.js: Plugin could not be loaded",
						execfn: "SEMICOLON_subscribeFormInit",
						pluginfn: 'typeof scwSubscribeFormPlugin !== "undefined"',
						trigger: "pluginSubscribeFormReady",
						class: "has-plugin-subscribeform"
					};
				SEMICOLON.initialize.functions(i), SEMICOLON.initialize.functions(n)
			},
			shapeDivider: function(e) {
				let i = {
					element: e,
					default: ".shape-divider",
					file: "plugins.shapedivider.js",
					error: "plugins.shapedivider.js: Plugin could not be loaded",
					execfn: "SEMICOLON_shapeDividerInit",
					pluginfn: 'typeof scwShapeDividerPlugin !== "undefined"',
					trigger: "pluginShapeDividerReady",
					class: "has-plugin-shapedivider"
				};
				SEMICOLON.initialize.functions(i)
			},
			ticker: function(e) {
				let i = {
					element: e,
					default: ".scw-ticker",
					file: "plugins.ticker.js",
					error: "plugins.ticker.js: Plugin could not be loaded",
					execfn: "SEMICOLON_tickerInit",
					pluginfn: 'typeof scwTickerPlugin !== "undefined"',
					trigger: "pluginTickerReady",
					class: "has-plugin-ticker"
				};
				SEMICOLON.initialize.functions(i)
			},
			stickySidebar: function(e) {
				let i = {
					element: e,
					default: ".sticky-sidebar-wrap",
					file: "plugins.stickysidebar.js",
					error: "plugins.stickysidebar.js: Plugin could not be loaded",
					execfn: "SEMICOLON_stickySidebarInit",
					pluginfn: "$().scwStickySidebar",
					trigger: "pluginStickySidebarReady",
					class: "has-plugin-stickysidebar"
				};
				SEMICOLON.initialize.functions(i)
			},
			cookieNotify: function(e) {
				let i = {
					element: e,
					default: ".gdpr-settings,[data-cookies]",
					file: "plugins.cookie.js",
					error: "plugins.cookie.js: Plugin could not be loaded",
					execfn: "SEMICOLON_cookieInit",
					pluginfn: 'typeof Cookies !== "undefined"',
					trigger: "pluginCookieReady",
					class: "has-plugin-cookie"
				};
				SEMICOLON.initialize.functions(i)
			},
			cartQuantity: function() {
				SEMICOLON.initialize.functions({
					default: ".qty",
					file: "plugins.quantity.js",
					error: "plugins.quantity.js: Plugin could not be loaded",
					execfn: "SEMICOLON_quantityInit",
					pluginfn: 'typeof scwQuantityPlugin !== "undefined"',
					trigger: "pluginQuantityReady",
					class: "has-plugin-quantity"
				})
			},
			readmore: function() {
				SEMICOLON.initialize.functions({
					default: "[data-readmore]",
					file: "plugins.readmore.js",
					error: "plugins.readmore.js: Plugin could not be loaded",
					execfn: "SEMICOLON_readmoreInit",
					pluginfn: 'typeof scwReadMorePlugin !== "undefined"',
					trigger: "pluginReadMoreReady",
					class: "has-plugin-readmore"
				})
			},
			pricingSwitcher: function() {
				SEMICOLON.initialize.functions({
					default: ".pts-switcher",
					file: "plugins.pricingswitcher.js",
					error: "plugins.pricingswitcher.js: Plugin could not be loaded",
					execfn: "SEMICOLON_pricingSwitcherInit",
					pluginfn: 'typeof scwPricingSwitcherPlugin !== "undefined"',
					trigger: "pluginPricingSwitcherReady",
					class: "has-plugin-pricing-switcher"
				})
			},
			extras: function() {
				let i = setInterval(function() {
					"pluginBootstrapReady" in scwEvents && (e().tooltip ? e('[data-bs-toggle="tooltip"]').tooltip({
						container: "body"
					}) : console.log("extras: Bootstrap Tooltip not defined."), e().popover ? e('[data-bs-toggle="popover"]').popover({
						container: "body"
					}) : console.log("extras: Bootstrap Popover not defined."), clearInterval(i))
				}, 1e3);
				if (e(".style-msg").on("click", ".close", function(i) {
						e(this).parents(".style-msg").slideUp(), i.preventDefault()
					}), e("#page-menu-trigger").off("click").on("click", function() {
						return r.toggleClass("top-search-open", !1), q.toggleClass("page-menu-open"), !1
					}), q.find("nav").off("click").on("click", function(e) {
						r.toggleClass("top-search-open", !1), X.toggleClass("top-cart-open", !1)
					}), SEMICOLON.isMobile.any() && r.addClass("device-touch"), r.hasClass("adaptive-color-scheme")) {
					let i = e("[data-adaptive-light-class], [data-adaptive-dark-class]"),
						n = i.attr("data-adaptive-light-class"),
						t = i.attr("data-adaptive-dark-class"),
						s = function(e) {
							e ? (r.toggleClass("dark", !0), i.removeClass(n).addClass(t)) : (r.toggleClass("dark", !1), i.removeClass(t).addClass(n)), SEMICOLON.header.logo()
						};
					window.matchMedia && (s(window.matchMedia("(prefers-color-scheme: dark)").matches), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e) {
						s(e.matches)
					}))
				}
				r.off("click").on("click", 'a[href*="#"]', function() {
					o.on("beforeunload", function() {
						o.scrollTop(0)
					})
				});
				let n = location.hash;
				e(n).length > 0 && e(".one-page-menu").find('[data-href="' + n + '"]').length > 0 && o.scrollTop(0)
			}
		}, SEMICOLON.isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i)
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i)
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i)
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i)
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i)
			},
			any: function() {
				return SEMICOLON.isMobile.Android() || SEMICOLON.isMobile.BlackBerry() || SEMICOLON.isMobile.iOS() || SEMICOLON.isMobile.Opera() || SEMICOLON.isMobile.Windows()
			}
		}, SEMICOLON.customization = {
			onReady: function() {},
			onLoad: function() {},
			onResize: function() {}
		}, SEMICOLON.documentOnResize = {
			init: function() {
				SEMICOLON.header.menufunctions(), SEMICOLON.header.fullWidthMenu(), SEMICOLON.header.stickyMenu(), SEMICOLON.header.logo(), SEMICOLON.initialize.dataResponsiveHeights(), SEMICOLON.initialize.stickFooterOnSmall(), SEMICOLON.slider.sliderDimensions(), SEMICOLON.slider.sliderParallax(), SEMICOLON.widget.html5Video(), SEMICOLON.widget.masonryThumbs(), SEMICOLON.initialize.dataResponsiveClasses(), SEMICOLON.customization.onResize(), L = o.width(), e(window).trigger("scwWindowResize")
			}
		}, SEMICOLON.documentOnReady = {
			init: function() {
				SEMICOLON.initialize.init(), SEMICOLON.header.init(), (Q.length > 0 || J.length > 0) && SEMICOLON.slider.init(), W.length > 0 && SEMICOLON.portfolio.init(), SEMICOLON.widget.init(), SEMICOLON.documentOnReady.windowscroll(), SEMICOLON.customization.onReady()
			},
			windowscroll: function() {
				u.length > 0 && (te = u.offset().top, c.addClass("position-absolute"), se = c.offset().top, c.removeClass("position-absolute"));
				let i = u.attr("data-sticky-offset");
				if (void 0 !== i)
					if ("full" == i) {
						se = o.height();
						let e = u.attr("data-sticky-offset-negative");
						void 0 !== e && (se = se - e - 1)
					} else se = Number(i);
				else "undefined" === se && (se = te);
				q.find("#page-menu-wrap");
				let n, t = c.outerHeight(),
					s = document.head || document.getElementsByTagName("head")[0],
					a = document.createElement("style");
				q.length > 0 && (B.css({
					height: q.find("#page-menu-wrap").outerHeight()
				}), setTimeout(function() {
					u.length > 0 && !u.hasClass("no-sticky") && (r.hasClass("device-xl") || r.hasClass("device-lg") || "true" == m) ? (ae = q.offset().top - c.outerHeight(), s.appendChild(a), n = "#page-menu.sticky-page-menu:not(.dots-menu) #page-menu-wrap { top: " + t + "px; }", a.type = "text/css", a.appendChild(document.createTextNode(n))) : ae = q.offset().top
				}, 1e3)), SEMICOLON.header.stickyMenu(se), SEMICOLON.header.stickyPageMenu(ae), window.addEventListener("scroll", function() {
					SEMICOLON.initialize.goToTopScroll(), e("body.open-header.close-header-on-scroll").removeClass("side-header-open"), SEMICOLON.header.stickyMenu(se), SEMICOLON.header.stickyPageMenu(ae), SEMICOLON.header.logo()
				}, {
					passive: !0
				}), window.addEventListener("DOMContentLoaded", onScrollSliderParallax, !1), o.scrollEnd(function() {
					let e = c.outerHeight();
					q.length > 0 && u.length > 0 && !u.hasClass("no-sticky") && (r.hasClass("device-xl") || r.hasClass("device-lg")) && q.filter(".sticky-page-menu:not(.dots-menu,.no-sticky)").find(V).css({
						top: e + "px"
					})
				}, 500)
			}
		}, SEMICOLON.documentOnLoad = {
			init: function() {
				SEMICOLON.slider.swiperSliderMenu(!0), SEMICOLON.slider.revolutionSliderMenu(!0), SEMICOLON.initialize.stickFooterOnSmall(), SEMICOLON.widget.gridInit();
				let e = setInterval(function() {
					"pluginIsotopeReady" in scwEvents && (SEMICOLON.widget.filterInit(), SEMICOLON.widget.masonryThumbs(), clearInterval(e))
				}, 1e3);
				SEMICOLON.widget.parallax(), SEMICOLON.widget.loadFlexSlider(), SEMICOLON.widget.html5Video(), SEMICOLON.widget.ticker(), SEMICOLON.header.responsiveMenuClass(), SEMICOLON.initialize.modal(), SEMICOLON.customization.onLoad()
			}
		};
		let i, n, t, s, a, l, o = e(window),
			r = e("body"),
			d = e("#wrapper"),
			u = e("#header"),
			c = e("#header-wrap"),
			g = e(".include-header"),
			f = u.attr("data-logo-height") || 100,
			p = u.attr("data-sticky-logo-height") || 60,
			m = u.attr("data-mobile-sticky") || "false",
			h = u.attr("data-mobile-logo-height") || Number(f),
			O = (u.attr("data-mobile-sticky-logo-height") || Number(p), u.attr("data-menu-padding") || 39),
			C = u.attr("data-sticky-menu-padding") || 19,
			S = !(u.hasClass("header-size-lg") || u.hasClass("header-size-md") || u.hasClass("header-size-sm") || u.hasClass("header-size-custom")),
			I = u.attr("data-sticky-shrink") || "true",
			b = u.attr("data-sticky-shrink-offset") || 300,
			M = e(".primary-menu"),
			y = M.find(".menu-container:not(mobile-primary-menu):not(.custom-spacing)").children(".menu-item").children(".menu-link"),
			E = "",
			N = (c.outerHeight(), c.find(".header-row:eq(0)"), e("#content"), e("#footer")),
			L = o.width(),
			v = u.attr("class"),
			k = c.attr("class"),
			w = u.attr("data-sticky-class"),
			x = u.attr("data-responsive-class"),
			j = e("#logo"),
			P = j.find(".standard-logo"),
			z = (P.find("img").outerWidth(), j.find(".retina-logo")),
			R = P.find("img").attr("src"),
			T = z.find("img").attr("src"),
			F = P.attr("data-dark-logo"),
			_ = z.attr("data-dark-logo"),
			A = P.attr("data-sticky-logo"),
			H = z.attr("data-sticky-logo"),
			D = P.attr("data-mobile-logo"),
			$ = z.attr("data-mobile-logo"),
			q = e("#page-menu"),
			B = "",
			V = q.find("#page-menu-wrap"),
			W = (e(".one-page-menu"), e(".portfolio")),
			Q = (e(".shop"), e("#slider")),
			U = e(".slider-parallax"),
			J = e(".slider-element"),
			Y = e("#page-title"),
			G = e(".top-search-form"),
			X = e("#top-cart"),
			K = (e("#top-social").find("li"), e("#gotoTop")),
			Z = "YOUR-API-KEY",
			ee = document.querySelector(".slider-parallax"),
			ie = document.querySelector(".slider-parallax .slider-caption"),
			ne = document.querySelector(".slider-inner"),
			te = 0,
			se = 0,
			ae = 0;
		e(document).ready(SEMICOLON.documentOnReady.init), o.on("load", SEMICOLON.documentOnLoad.init), o.on("resize", function() {
			let i = e(this);
			clearTimeout(l), l = setTimeout(function() {
				i.width() !== L && SEMICOLON.documentOnResize.init()
			}, 250)
		})
	}(jQuery), jQuery(document).ready(function() {
		jQuery(".disable-pagetransition").on("click", function() {
			return jQuery("body").addClass("no-transition"), jQuery(".page-transition-wrap").fadeOut(400, function() {
				jQuery(this).remove()
			}), !1
		})
	}), jQuery.get("switcher-html.html", function(e) {
		jQuery("#gotoTop").after(e), SEMICOLON.initialize.lazyLoad(), jQuery(".scw-trigger").on("click", function() {
			jQuery(".scw-switcher-wrap").toggleClass("scw-switcher-open")
		}), jQuery(document).on("click", function(e) {
			jQuery(e.target).closest(".scw-switcher-wrap").length || jQuery(".scw-switcher-wrap").toggleClass("scw-switcher-open", !1)
		})
	});
jQuery(document).one("ajaxComplete", function() {
	jQuery(".preloader-demo").on("click", function(s) {
		var i = jQuery(this),
			d = jQuery(".preloader-demo"),
			v = i.attr("data-loader");
		d.prop("disabled", !0), "1" == v ? css3Loader = '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>' : "2" == v ? css3Loader = '<div class="css3-spinner-flipper"></div>' : "3" == v ? css3Loader = '<div class="css3-spinner-double-bounce1"></div><div class="css3-spinner-double-bounce2"></div>' : "4" == v ? css3Loader = '<div class="css3-spinner-rect1"></div><div class="css3-spinner-rect2"></div><div class="css3-spinner-rect3"></div><div class="css3-spinner-rect4"></div><div class="css3-spinner-rect5"></div>' : "5" == v ? css3Loader = '<div class="css3-spinner-cube1"></div><div class="css3-spinner-cube2"></div>' : "6" == v ? css3Loader = '<div class="css3-spinner-scaler"></div>' : "7" == v ? css3Loader = '<div class="css3-spinner-grid-pulse"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>' : "8" == v ? css3Loader = '<div class="css3-spinner-clip-rotate"><div></div></div>' : "9" == v ? css3Loader = '<div class="css3-spinner-ball-rotate"><div></div><div></div><div></div></div>' : "10" == v ? css3Loader = '<div class="css3-spinner-zig-zag"><div></div><div></div></div>' : "11" == v ? css3Loader = '<div class="css3-spinner-triangle-path"><div></div><div></div><div></div></div>' : "12" == v ? css3Loader = '<div class="css3-spinner-ball-scale-multiple"><div></div><div></div><div></div></div>' : "13" == v ? css3Loader = '<div class="css3-spinner-ball-pulse-sync"><div></div><div></div><div></div></div>' : "14" == v && (css3Loader = '<div class="css3-spinner-scale-ripple"><div></div><div></div><div></div></div>'), jQuery("body").append('<div class="page-transition-wrap"><div class="css3-spinner"></div></div>'), jQuery(".css3-spinner").html(css3Loader), setTimeout(function() {
			jQuery(".page-transition-wrap").fadeOut("400", function() {
				jQuery(this).remove(), d.prop("disabled", !1)
			})
		}, 2e3), s.preventDefault()
	})
});
jQuery('[href="media-embeds.html"],[href="gdpr.html"]').parent('.menu-item').addClass('menu-item-important');
jQuery('.menu-link[href="intro.html#section-niche"]').parent('.menu-item').after('<li class="menu-item"><a href="blocks.html" target="_blank" class="menu-link"><div>Blocks</div></a></li>');

function semicolonweb_loadScriptAsync(a, o) {
	if ("function" != typeof o) throw new Error("Not a valid callback for async script load");
	var n = document.createElement("script");
	n.onload = o, n.src = a, document.head.appendChild(n)
}
semicolonweb_loadScriptAsync("https://www.googletagmanager.com/gtag/js?id=G-H74KY38NCR", function() {
	function a() {
		dataLayer.push(arguments)
	}
	window.dataLayer = window.dataLayer || [], a("js", new Date), a("config", "G-H74KY38NCR")
});