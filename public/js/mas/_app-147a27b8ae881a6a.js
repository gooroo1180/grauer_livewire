(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2888],
	{
		19642: function(a, b, c) {
			"use strict";

			function d() {
				return (d = Object.assign ||
				function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = arguments[b];
						for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
					}
					return a
				}).apply(this, arguments)
			}
			function e(a, b) {
				if (null == a) return {};
				
				var c, d, e = {},
					f = Object.keys(a);
				for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
				return e
			}
			function f(a, b) {
				(null == b || b > a.length) && (b = a.length);
				for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
				return d
			}
			function g(a, b) {
				var c;
				if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) {
					if (Array.isArray(a) || (c = (function(a, b) {
						if (a) {
							if ("string" == typeof a) return f(a, b);
							var c = Object.prototype.toString.call(a).slice(8, -1);
							if ("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c) return Array.from(a);
							if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return f(a, b)
						}
					})(a)) || b && a && "number" == typeof a.length) {
						c && (a = c);
						var d = 0;
						return function() {
							return d >= a.length ? {
								done: !0
							} : {
								done: !1,
								value: a[d++]
							}
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				return (c = a[Symbol.iterator]()).next.bind(c)
			}
			c.d(b, {
				Ul: function() {
					return g
				},
				
				gY: function() {
					return d
				},
				
				gK: function() {
					return e
				}
			})
		},
		
		87587: function(a, b, c) {
			"use strict";
			c.d(b, {
				d: function() {
					return l
				},
				
				f: function() {
					return k
				}
			});
			
			var d = c(19642),
				e = c(67294),
				f = c(58529),
				g = c(60852),
				h = c(92506),
				i = (0, e.createContext)(null);

			function j() {
				var a = (0, e.useContext)(i);
				if (null === a) {
					var b = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
					throw Error.captureStackTrace && Error.captureStackTrace(b, j), b
				}
				return a
			}
			function k() {
				var a = (0, e.useState)([]),
					b = a[0],
					c = a[1];
				return [b.length > 0 ? b.join(" ") : void 0, (0, e.useMemo)(function() {
					return function(a) {
						var b = (0, e.useCallback)(function(a) {
							return c(function(b) {
								return [].concat(b, [a])
							}), function() {
								return c(function(b) {
									var c = b.slice(),
										d = c.indexOf(a);
									return -1 !== d && c.splice(d, 1), c
								})
							}
						}, []),
							d = (0, e.useMemo)(function() {
								return {
									register: b,
									slot: a.slot,
									name: a.name,
									props: a.props
								}
							}, [b, a.slot, a.name, a.props]);
						return e.createElement(i.Provider, {
							value: d
						}, a.children)
					}
				}, [c])]
			}
			function l(a) {
				var b = j(),
					c = "headlessui-description-" + (0, h.M)();
				(0, g.e)(function() {
					return b.register(c)
				}, [c, b.register]);
				var e = (0, d.gY)({}, b.props, {
					id: c
				});
				
				return (0, f.sY)({
					props: (0, d.gY)({}, a, e),
					slot: b.slot || {},
					
					defaultTag: "p",
					name: b.name || "Description"
				})
			}
		},
		
		85220: function(a, b, c) {
			"use strict";
			c.d(b, {
				V: function() {
					return W
				}
			});
			
			var d, e, f, g, h, i, j = c(19642),
				k = c(67294),
				l = c(133),
				m = c(58529),
				n = c(57471),
				o = c(62659),
				p = c(79016),
				q = c(35989),
				r = c(92506),
				s = c(24198),
				t = c(35057),
				u = c(77933);
			(i = d || (d = {}))[i.None = 1] = "None", i[i.InitialFocus = 2] = "InitialFocus", i[i.TabLock = 4] = "TabLock", i[i.FocusLock = 8] = "FocusLock", i[i.RestoreFocus = 16] = "RestoreFocus", i[i.All = 30] = "All";
			var v = c(60852),
				w = new Set(),
				x = new Map();

			
			function y(a) {
				a.setAttribute("aria-hidden", "true"), a.inert = !0
			}
			function z(a) {
				var b = x.get(a);
				b && (null === b["aria-hidden"] ? a.removeAttribute("aria-hidden") : a.setAttribute("aria-hidden", b["aria-hidden"]), a.inert = b.inert)
			}
			var A = (0, k.createContext)(!1);

			function B(a) {
				return k.createElement(A.Provider, {
					value: a.force
				}, a.children)
			}
			var C = c(73935),
				D = k.Fragment;

			function E(a) {
				var b, c, d, e, f, g = (b = (0, k.useContext)(A), c = (0, k.useContext)(G), d = (0, k.useState)(function() {
					if (!b && null !== c) return null;
					if ("undefined" == typeof window) return null;
					var a = document.getElementById("headlessui-portal-root");
					if (a) return a;
					var d = document.createElement("div");
					return d.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(d)
				}), e = d[0], f = d[1], (0, k.useEffect)(function() {
					null === e || document.body.contains(e) || document.body.appendChild(e)
				}, [e]), (0, k.useEffect)(function() {
					b || null !== c && f(c.current)
				}, [c, f, b]), e),
					h = (0, k.useState)(function() {
						return "undefined" == typeof window ? null : document.createElement("div")
					})[0],
					i = (0, q.H)();
				
				return ((0, v.e)(function() {
					if (g && h) return g.appendChild(h), function() {
						if (g && h && (g.removeChild(h), g.childNodes.length <= 0)) {
							var a;
							null == (a = g.parentElement) || a.removeChild(g)
						}
					}
				}, [g, h]), i && g && h) ? (0, C.createPortal)((0, m.sY)({
					props: a,
					defaultTag: D,
					name: "Portal"
				}), h) : null
			}
			var F = k.Fragment,
				G = (0, k.createContext)(null);
			E.Group = function(a) {
				var b = a.target,
					c = (0, j.gK)(a, ["target"]);
				return k.createElement(G.Provider, {
					value: b
				}, (0, m.sY)({
					props: c,
					defaultTag: F,
					name: "Popover.Group"
				}))
			};
			
			var H, I = c(87587),
				J = c(3980),
				K = (0, k.createContext)(function() {});

			
			function L(a) {
				var b = a.children,
					c = a.onUpdate,
					d = a.type,
					f = a.element,
					g = (0, k.useContext)(K),
					h = (0, k.useCallback)(function() {
						for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
						null == c || c.apply(void 0, b), g.apply(void 0, b)
					}, [g, c]);
				return (0, v.e)(function() {
					return h(e.Add, d, f), function() {
						return h(e.Remove, d, f)
					}
				}, [h, d, f]), k.createElement(K.Provider, {
					value: h
				}, b)
			}
			K.displayName = "StackContext", (H = e || (e = {}))[H.Add = 0] = "Add", H[H.Remove = 1] = "Remove", (Q = g || (g = {}))[Q.Open = 0] = "Open", Q[Q.Closed = 1] = "Closed", (R = h || (h = {}))[R.SetTitleId = 0] = "SetTitleId";
			var M = ((f = {})[h.SetTitleId] = function(a, b) {
				return a.titleId === b.id ? a : (0, j.gY)({}, a, {
					titleId: b.id
				})
			}, f),
				N = (0, k.createContext)(null);

			function O(a) {
				var b = (0, k.useContext)(N);
				if (null === b) {
					var c = new Error("<" + a + " /> is missing a parent <" + W.displayName + " /> component.");
					throw Error.captureStackTrace && Error.captureStackTrace(c, O), c
				}
				return b
			}
			function P(a, b) {
				return (0, l.E)(b.type, M, a, b)
			}
			N.displayName = "DialogContext";
			var Q, R, S = m.AN.RenderStrategy | m.AN.Static,
				T = (0, m.yV)(function(a, b) {
					var c, f = a.open,
						i = a.onClose,
						p = a.initialFocus,
						A = (0, j.gK)(a, ["open", "onClose", "initialFocus"]),
						C = (0, k.useState)(0),
						D = C[0],
						F = C[1],
						G = (0, J.oJ)();
					
					void 0 === f && null !== G && (f = (0, l.E)(G, ((c = {})[J.ZM.Open] = !0, c[J.ZM.Closed] = !1, c)));
					var H = (0, k.useRef)(new Set()),
						K = (0, k.useRef)(null),
						M = (0, n.T)(K, b),
						O = a.hasOwnProperty("open") || null !== G,
						Q = a.hasOwnProperty("onClose");
					if (!O && !Q) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
					if (!O) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
					if (!Q) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
					if ("boolean" != typeof f) throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + f);
					if ("function" != typeof i) throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + i);
					var R, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da = f ? g.Open : g.Closed,
						ea = null !== G ? G === J.ZM.Open : da === g.Open,
						fa = (0, k.useReducer)(P, {
							titleId: null,
							descriptionId: null
						}),
						ga = fa[0],
						ha = fa[1],
						ia = (0, k.useCallback)(function() {
							return i(!1)
						}, [i]),
						ja = (0, k.useCallback)(function(a) {
							return ha({
								type: h.SetTitleId,
								id: a
							})
						}, [ha]),
						ka = (0, q.H)() && da === g.Open,
						la = D > 1,
						ma = null !== (0, k.useContext)(N);
					R = K, T = ka ? (0, l.E)(la ? "parent" : "leaf", {
						parent: d.RestoreFocus,
						leaf: d.All
					}) : d.None, U = {
						initialFocus: p,
						containers: H
					}, void 0 === T && (T = d.All), W = (V = void 0 === U ? {} : U).initialFocus, X = V.containers, Y = (0, k.useRef)("undefined" != typeof window ? document.activeElement : null), Z = (0, k.useRef)(null), $ = (0, u.t)(), _ = Boolean(T & d.RestoreFocus), aa = Boolean(T & d.InitialFocus), (0, k.useEffect)(function() {
						_ && (Y.current = document.activeElement)
					}, [_]), (0, k.useEffect)(function() {
						if (_) return function() {
							(0, t.C5)(Y.current), Y.current = null
						}
					}, [_]), (0, k.useEffect)(function() {
						if (aa && R.current) {
							var a = document.activeElement;
							if (null == W ? void 0 : W.current) {
								if ((null == W ? void 0 : W.current) === a) {
									Z.current = a;
									return
								}
							} else if (R.current.contains(a)) {
								Z.current = a;
								return
							}(null == W ? void 0 : W.current) ? (0, t.C5)(W.current) : (0, t.jA)(R.current, t.TO.First) === t.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), Z.current = document.activeElement
						}
					}, [R, W, aa]), (0, s.s)("keydown", function(a) {
						!(T & d.TabLock) || R.current && a.key === o.R.Tab && (a.preventDefault(), (0, t.jA)(R.current, (a.shiftKey ? t.TO.Previous : t.TO.Next) | t.TO.WrapAround) === t.fE.Success && (Z.current = document.activeElement))
					}), (0, s.s)("focus", function(a) {
						if (T & d.FocusLock) {
							var b = new Set(null == X ? void 0 : X.current);
							if (b.add(R), b.size) {
								var c = Z.current;
								if (c && $.current) {
									var e = a.target;
									e && e instanceof HTMLElement ? (function(a, b) {
										for (var c, d, e = (0, j.Ul)(a); !(d = e()).done;) if (null == (c = d.value.current) ? void 0 : c.contains(b)) return !0;
										return !1
									})(b, e) ? (Z.current = e, (0, t.C5)(e)) : (a.preventDefault(), a.stopPropagation(), (0, t.C5)(c)) : (0, t.C5)(Z.current)
								}
							}
						}
					}, !0), ba = K, void 0 === (ca = !! la && ka) && (ca = !0), (0, v.e)(function() {
						if (ca && ba.current) {
							var a = ba.current;
							w.add(a);
							for (var b, c = (0, j.Ul)(x.keys()); !(b = c()).done;) {
								var d = b.value;
								d.contains(a) && (z(d), x.delete(d))
							}
							return document.querySelectorAll("body > *").forEach(function(a) {
								if (a instanceof HTMLElement) {
									for (var b, c = (0, j.Ul)(w); !(b = c()).done;) {
										var d = b.value;
										if (a.contains(d)) return
									}
									1 === w.size && (x.set(a, {
										"aria-hidden": a.getAttribute("aria-hidden"),
										inert: a.inert
									}), y(a))
								}
							}), function() {
								if (w.delete(a), w.size > 0) document.querySelectorAll("body > *").forEach(function(a) {
									if (a instanceof HTMLElement && !x.has(a)) {
										for (var b, c = (0, j.Ul)(w); !(b = c()).done;) {
											var d = b.value;
											if (a.contains(d)) return
										}
										x.set(a, {
											"aria-hidden": a.getAttribute("aria-hidden"),
											inert: a.inert
										}), y(a)
									}
								});
								else
								for (var b, c = (0, j.Ul)(x.keys()); !(b = c()).done;) {
									var d = b.value;
									z(d), x.delete(d)
								}
							}
						}
					}, [ca]), (0, s.s)("mousedown", function(a) {
						var b, c = a.target;
						da === g.Open && !la && (null != (b = K.current) && b.contains(c) || ia())
					}), (0, s.s)("keydown", function(a) {
						a.key === o.R.Escape && da === g.Open && (la || (a.preventDefault(), a.stopPropagation(), ia()))
					}), (0, k.useEffect)(function() {
						if (da === g.Open && !ma) {
							var a = document.documentElement.style.overflow,
								b = document.documentElement.style.paddingRight,
								c = window.innerWidth - document.documentElement.clientWidth;
							return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = c + "px", function() {
								document.documentElement.style.overflow = a, document.documentElement.style.paddingRight = b
							}
						}
					}, [da, ma]), (0, k.useEffect)(function() {
						if (da === g.Open && K.current) {
							var a = new IntersectionObserver(function(a) {
								for (var b, c = (0, j.Ul)(a); !(b = c()).done;) {
									var d = b.value;
									0 === d.boundingClientRect.x && 0 === d.boundingClientRect.y && 0 === d.boundingClientRect.width && 0 === d.boundingClientRect.height && ia()
								}
							});
							
							return a.observe(K.current), function() {
								return a.disconnect()
							}
						}
					}, [da, K, ia]);
					var na = (0, I.f)(),
						oa = na[0],
						pa = na[1],
						qa = "headlessui-dialog-" + (0, r.M)(),
						ra = (0, k.useMemo)(function() {
							return [{
								dialogState: da,
								close: ia,
								setTitleId: ja
							}, ga]
						}, [da, ga, ia, ja]),
						sa = (0, k.useMemo)(function() {
							return {
								open: da === g.Open
							}
						}, [da]),
						ta = {
							ref: M,
							id: qa,
							role: "dialog",
							"aria-modal": da === g.Open || void 0,
							"aria-labelledby": ga.titleId,
							"aria-describedby": oa,
							onClick: function(a) {
								a.stopPropagation()
							}
						};
					
					return k.createElement(L, {
						type: "Dialog",
						element: K,
						onUpdate: (0, k.useCallback)(function(a, b, c) {
							var d;
							"Dialog" === b && (0, l.E)(a, ((d = {})[e.Add] = function() {
								H.current.add(c), F(function(a) {
									return a + 1
								})
							}, d[e.Remove] = function() {
								H.current.add(c), F(function(a) {
									return a - 1
								})
							}, d))
						}, [])
					}, k.createElement(B, {
						force: !0
					}, k.createElement(E, null, k.createElement(N.Provider, {
						value: ra
					}, k.createElement(E.Group, {
						target: K
					}, k.createElement(B, {
						force: !1
					}, k.createElement(pa, {
						slot: sa,
						name: "Dialog.Description"
					}, (0, m.sY)({
						props: (0, j.gY)({}, A, ta),
						slot: sa,
						defaultTag: "div",
						features: S,
						visible: ea,
						name: "Dialog"
					}))))))))
				}),
				U = (0, m.yV)(function a(b, c) {
					var d = O([W.displayName, a.name].join("."))[0],
						e = d.dialogState,
						f = d.close,
						h = (0, n.T)(c),
						i = "headlessui-dialog-overlay-" + (0, r.M)(),
						l = (0, k.useCallback)(function(a) {
							if (a.target === a.currentTarget) {
								if ((0, p.P)(a.currentTarget)) return a.preventDefault();
								
								a.preventDefault(), a.stopPropagation(), f()
							}
						}, [f]),
						o = (0, k.useMemo)(function() {
							return {
								open: e === g.Open
							}
						}, [e]);
					return (0, m.sY)({
						props: (0, j.gY)({}, b, {
							ref: h,
							id: i,
							"aria-hidden": !0,
							onClick: l
						}),
						slot: o,
						defaultTag: "div",
						name: "Dialog.Overlay"
					})
				});

			
			function V(a) {
				var b = O([W.displayName, V.name].join("."))[0],
					c = b.dialogState,
					d = b.setTitleId,
					e = "headlessui-dialog-title-" + (0, r.M)();
				(0, k.useEffect)(function() {
					return d(e), function() {
						return d(null)
					}
				}, [e, d]);
				var f = (0, k.useMemo)(function() {
					return {
						open: c === g.Open
					}
				}, [c]);
				return (0, m.sY)({
					props: (0, j.gY)({}, a, {
						id: e
					}),
					slot: f,
					defaultTag: "h2",
					name: "Dialog.Title"
				})
			}
			var W = Object.assign(T, {
				Overlay: U,
				Title: V,
				Description: I.d
			})
		},
		
		62659: function(a, b, c) {
			"use strict";
			var d, e;
			c.d(b, {
				R: function() {
					return d
				}
			}), (e = d || (d = {})).Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab"
		},
		
		33197: function(a, b, c) {
			"use strict";
			c.d(b, {
				G: function() {
					return f
				}
			});
			
			var d = c(67294),
				e = c(9472);

			function f() {
				var a = (0, d.useState)(e.k)[0];
				return (0, d.useEffect)(function() {
					return function() {
						return a.dispose()
					}
				}, [a]), a
			}
		},
		
		92506: function(a, b, c) {
			"use strict";
			c.d(b, {
				M: function() {
					return i
				}
			});
			
			var d = c(67294),
				e = c(60852),
				f = c(35989),
				g = 0;

			function h() {
				return ++g
			}
			function i() {
				var a = (0, f.H)(),
					b = (0, d.useState)(a ? h : null),
					c = b[0],
					g = b[1];
				return (0, e.e)(function() {
					null === c && g(h())
				}, [c]), null != c ? "" + c : void 0
			}
		},
		
		77933: function(a, b, c) {
			"use strict";
			c.d(b, {
				t: function() {
					return e
				}
			});
			
			var d = c(67294);

			function e() {
				var a = (0, d.useRef)(!1);
				return (0, d.useEffect)(function() {
					return a.current = !0, function() {
						a.current = !1
					}
				}, []), a
			}
		},
		
		60852: function(a, b, c) {
			"use strict";
			c.d(b, {
				e: function() {
					return e
				}
			});
			
			var d = c(67294),
				e = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect
		},
		
		56637: function(a, b, c) {
			"use strict";
			c.d(b, {
				f: function() {
					return g
				}
			});
			
			var d = c(67294),
				e = c(60852);

			function f(a) {
				var b;
				if (a.type) return a.type;
				var c = null != (b = a.as) ? b : "button";
				if ("string" == typeof c && "button" === c.toLowerCase()) return "button"
			}
			function g(a, b) {
				var c = (0, d.useState)(function() {
					return f(a)
				}),
					g = c[0],
					h = c[1];
				return (0, e.e)(function() {
					h(f(a))
				}, [a.type, a.as]), (0, e.e)(function() {
					!g && !! b.current && b.current instanceof HTMLButtonElement && !b.current.hasAttribute("type") && h("button")
				}, [g, b]), g
			}
		},
		
		35989: function(a, b, c) {
			"use strict";
			c.d(b, {
				H: function() {
					return f
				}
			});
			
			var d = c(67294),
				e = {
					serverHandoffComplete: !1
				};

			
			function f() {
				var a = (0, d.useState)(e.serverHandoffComplete),
					b = a[0],
					c = a[1];
				return (0, d.useEffect)(function() {
					!0 !== b && c(!0)
				}, [b]), (0, d.useEffect)(function() {
					!1 === e.serverHandoffComplete && (e.serverHandoffComplete = !0)
				}, []), b
			}
		},
		
		57471: function(a, b, c) {
			"use strict";
			c.d(b, {
				T: function() {
					return f
				}
			});
			
			var d = c(19642),
				e = c(67294);

			function f() {
				for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
				var f = (0, e.useRef)(b);
				return (0, e.useEffect)(function() {
					f.current = b
				}, [b]), (0, e.useCallback)(function(a) {
					for (var b, c = (0, d.Ul)(f.current); !(b = c()).done;) {
						var e = b.value;
						null != e && ("function" == typeof e ? e(a) : e.current = a)
					}
				}, [f])
			}
		},
		
		24198: function(a, b, c) {
			"use strict";
			c.d(b, {
				s: function() {
					return e
				}
			});
			
			var d = c(67294);

			function e(a, b, c) {
				var e = (0, d.useRef)(b);
				e.current = b, (0, d.useEffect)(function() {
					function b(a) {
						e.current.call(window, a)
					}
					return window.addEventListener(a, b, c), function() {
						return window.removeEventListener(a, b, c)
					}
				}, [a, c])
			}
		},
		
		3980: function(a, b, c) {
			"use strict";
			c.d(b, {
				up: function() {
					return i
				},
				
				ZM: function() {
					return d
				},
				
				oJ: function() {
					return h
				}
			});
			
			var d, e, f = c(67294),
				g = (0, f.createContext)(null);

			function h() {
				return (0, f.useContext)(g)
			}
			function i(a) {
				var b = a.value,
					c = a.children;
				return f.createElement(g.Provider, {
					value: b
				}, c)
			}
			g.displayName = "OpenClosedContext", (e = d || (d = {}))[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
		},
		
		79016: function(a, b, c) {
			"use strict";

			function d(a) {
				for (var b, c, d = a.parentElement, f = null; d && !(d instanceof HTMLFieldSetElement);) d instanceof HTMLLegendElement && (f = d), d = d.parentElement;
				var g = null != (b = (null == (c = d) ? void 0 : c.getAttribute("disabled")) === "") && b;
				return !(g && e(f)) && g
			}
			function e(a) {
				if (!a) return !1;
				for (var b = a.previousElementSibling; null !== b;) {
					if (b instanceof HTMLLegendElement) return !1;
					b = b.previousElementSibling
				}
				return !0
			}
			c.d(b, {
				P: function() {
					return d
				}
			})
		},
		
		21787: function(a, b, c) {
			"use strict";
			var d, e;

			function f(a, b) {
				var c = b.resolveItems();
				
				if (c.length <= 0) return null;
				var e = b.resolveActiveIndex(),
					f = null != e ? e : -1,
					g = function() {
						switch (a.focus) {
							case d.First:
								return c.findIndex(function(a) {
									return !b.resolveDisabled(a)
								});
							case d.Previous:
								var e = c.slice().reverse().findIndex(function(a, c, d) {
									return (-1 === f || !(d.length - c - 1 >= f)) && !b.resolveDisabled(a)
								});
								
								if (-1 === e) return e;
								return c.length - 1 - e;
							case d.Next:
								return c.findIndex(function(a, c) {
									return !(c <= f) && !b.resolveDisabled(a)
								});
							case d.Last:
								var g = c.slice().reverse().findIndex(function(a) {
									return !b.resolveDisabled(a)
								});
								
								if (-1 === g) return g;
								return c.length - 1 - g;
							case d.Specific:
								return c.findIndex(function(c) {
									return b.resolveId(c) === a.id
								});
							case d.Nothing:
								return null;
							default:
								!
								function(a) {
									throw new Error("Unexpected object: " + a)
								}(a)
						}
					}();
				
				return -1 === g ? e : g
			}
			c.d(b, {
				T: function() {
					return d
				},
				
				d: function() {
					return f
				}
			}), (e = d || (d = {}))[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing"
		},
		
		9472: function(a, b, c) {
			"use strict";
			c.d(b, {
				k: function() {
					return e
				}
			});
			
			var d = c(19642);

			function e() {
				var a = [],
					b = {
						requestAnimationFrame: function(a) {
							function b() {
								return a.apply(this, arguments)
							}
							return b.toString = function() {
								return a.toString()
							}, b
						}(function() {
							var a = requestAnimationFrame.apply(void 0, arguments);
							b.add(function() {
								return cancelAnimationFrame(a)
							})
						}),
						nextFrame: function() {
							for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
							b.requestAnimationFrame(function() {
								b.requestAnimationFrame.apply(b, c)
							})
						},
						
						setTimeout: function(a) {
							function b() {
								return a.apply(this, arguments)
							}
							return b.toString = function() {
								return a.toString()
							}, b
						}(function() {
							var a = setTimeout.apply(void 0, arguments);
							b.add(function() {
								return clearTimeout(a)
							})
						}),
						add: function(b) {
							a.push(b)
						},
						
						dispose: function() {
							for (var b, c = (0, d.Ul)(a.splice(0)); !(b = c()).done;)(0, b.value)()
						}
					};
				
				return b
			}
		},
		
		35057: function(a, b, c) {
			"use strict";
			c.d(b, {
				TO: function() {
					return e
				},
				
				fE: function() {
					return f
				},
				
				tJ: function() {
					return h
				},
				
				C5: function() {
					return o
				},
				
				jA: function() {
					return p
				},
				
				sP: function() {
					return n
				}
			});
			
			var d, e, f, g, h, i, j, k, l = c(133),
				m = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(function(a) {
					return a + ":not([tabindex='-1'])"
				}).join(",");

			function n(a, b) {
				var c;
				return void 0 === b && (b = h.Strict), a !== document.body && (0, l.E)(b, ((c = {})[h.Strict] = function() {
					return a.matches(m)
				}, c[h.Loose] = function() {
					for (var b = a; null !== b;) {
						if (b.matches(m)) return !0;
						b = b.parentElement
					}
					return !1
				}, c))
			}
			function o(a) {
				null == a || a.focus({
					preventScroll: !0
				})
			}
			function p(a, b) {
				var c, d, h = Array.isArray(a) ? a : (void 0 === (c = a) && (c = document.body), null == c) ? [] : Array.from(c.querySelectorAll(m)),
					i = document.activeElement,
					j = function() {
						if (b & (e.First | e.Next)) return g.Next;
						if (b & (e.Previous | e.Last)) return g.Previous;
						throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
					}(),
					k = function() {
						if (b & e.First) return 0;
						if (b & e.Previous) return Math.max(0, h.indexOf(i)) - 1;
						if (b & e.Next) return Math.max(0, h.indexOf(i)) + 1;
						if (b & e.Last) return h.length - 1;
						throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
					}(),
					l = b & e.NoScroll ? {
						preventScroll: !0
					} : {},
					n = 0,
					o = h.length,
					p = void 0;
				do {
					if (n >= o || n + o <= 0) return f.Error;
					var q = k + n;
					if (b & e.WrapAround) q = (q + o) % o;
					else {
						if (q < 0) return f.Underflow;
						if (q >= o) return f.Overflow
					}
					null == (d = p = h[q]) || d.focus(l), n += j
				} while 
				(p !== document.activeElement) return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), f.Success
			}(i = e || (e = {}))[i.First = 1] = "First", i[i.Previous = 2] = "Previous", i[i.Next = 4] = "Next", i[i.Last = 8] = "Last", i[i.WrapAround = 16] = "WrapAround", i[i.NoScroll = 32] = "NoScroll", (j = f || (f = {}))[j.Error = 0] = "Error", j[j.Overflow = 1] = "Overflow", j[j.Success = 2] = "Success", j[j.Underflow = 3] = "Underflow", (k = g || (g = {}))[k.Previous = -1] = "Previous", k[k.Next = 1] = "Next", (d = h || (h = {}))[d.Strict = 0] = "Strict", d[d.Loose = 1] = "Loose"
		},
		
		133: function(a, b, c) {
			"use strict";

			function d(a, b) {
				if (a in b) {
					for (var c = b[a], e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
					return "function" == typeof c ? c.apply(void 0, f) : c
				}
				var h = new Error("Tried to handle \"" + a + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(b).map(function(a) {
					return "\"" + a + "\""
				}).join(", ") + ".");
				throw Error.captureStackTrace && Error.captureStackTrace(h, d), h
			}
			c.d(b, {
				E: function() {
					return d
				}
			})
		},
		
		58529: function(a, b, c) {
			"use strict";
			c.d(b, {
				AN: function() {
					return d
				},
				
				l4: function() {
					return e
				},
				
				yV: function() {
					return n
				},
				
				sY: function() {
					return k
				}
			});
			
			var d, e, f, g, h = c(19642),
				i = c(67294),
				j = c(133);

			function k(a) {
				var b, c = a.props,
					f = a.slot,
					g = a.defaultTag,
					i = a.features,
					k = a.visible,
					m = a.name;
				if (void 0 === k || k) return l(c, f, g, m);
				var n = null != i ? i : d.None;
				if (n & d.Static) {
					var o = c.static,
						p = void 0 !== o && o,
						q = (0, h.gK)(c, ["static"]);
					if (p) return l(q, f, g, m)
				}
				if (n & d.RenderStrategy) {
					var r = c.unmount,
						s = void 0 === r || r,
						t = (0, h.gK)(c, ["unmount"]),
						u = s ? e.Unmount : e.Hidden;
					return (0, j.E)(u, ((b = {})[e.Unmount] = function() {
						return null
					}, b[e.Hidden] = function() {
						return l((0, h.gY)({}, t, {
							hidden: !0,
							style: {
								display: "none"
							}
						}), f, g, m)
					}, b))
				}
				return l(c, f, g, m)
			}
			function l(a, b, c, d) {
				var e;
				void 0 === b && (b = {});
				
				var f = p(a, ["unmount", "static"]),
					g = f.as,
					j = void 0 === g ? c : g,
					k = f.children,
					l = f.refName,
					n = void 0 === l ? "ref" : l,
					q = (0, h.gK)(f, ["as", "children", "refName"]),
					r = void 0 !== a.ref ? ((e = {})[n] = a.ref, e) : {},
					s = "function" == typeof k ? k(b) : k;
				if (q.className && "function" == typeof q.className && (q.className = q.className(b)), j === i.Fragment && Object.keys(q).length > 0) {
					if (!(0, i.isValidElement)(s) || Array.isArray(s) && s.length > 1) throw new Error(["Passing props on \"Fragment\"!", "", "The current component <" + d + " /> is rendering a \"Fragment\".", "However we need to passthrough the following props:", Object.keys(q).map(function(a) {
						return "  - " + a
					}).join("\n"), "", "You can apply a few solutions:", ["Add an `as=\"...\"` prop, to ensure that we render an actual element instead of a \"Fragment\".", "Render a single element as the child so that we can forward the props onto that element."].map(function(a) {
						return "  - " + a
					}).join("\n")].join("\n"));
					return (0, i.cloneElement)(s, Object.assign({}, m(o(p(q, ["ref"])), s.props, ["onClick"]), r))
				}
				return (0, i.createElement)(j, Object.assign({}, p(q, ["ref"]), j !== i.Fragment && r), s)
			}
			function m(a, b, c) {
				for (var d, e = Object.assign({}, a), f = function() {
					var c, f = d.value;
					void 0 !== a[f] && void 0 !== b[f] && Object.assign(e, ((c = {})[f] = function(c) {
						c.defaultPrevented || a[f](c), c.defaultPrevented || b[f](c)
					}, c))
				}, g = (0, h.Ul)(c); !(d = g()).done;) f();
				
				return e
			}
			function n(a) {
				var b;
				return Object.assign((0, i.forwardRef)(a), {
					displayName: null != (b = a.displayName) ? b : a.name
				})
			}
			function o(a) {
				var b = Object.assign({}, a);
				for (var c in b) void 0 === b[c] && delete b[c];
				return b
			}
			function p(a, b) {
				void 0 === b && (b = []);
				for (var c, d = Object.assign({}, a), e = (0, h.Ul)(b); !(c = e()).done;) {
					var f = c.value;
					f in d && delete d[f]
				}
				return d
			}(f = d || (d = {}))[f.None = 0] = "None", f[f.RenderStrategy = 1] = "RenderStrategy", f[f.Static = 2] = "Static", (g = e || (e = {}))[g.Unmount = 0] = "Unmount", g[g.Hidden = 1] = "Hidden"
		},
		
		86010: function(a, b, c) {
			"use strict";

			function d(a) {
				var b, c, e = "";
				if ("string" == typeof a || "number" == typeof a) e += a;
				else if ("object" == typeof a) if (Array.isArray(a)) for (b = 0; b < a.length; b++) a[b] && (c = d(a[b])) && (e && (e += " "), e += c);
				else
				for (b in a) a[b] && (e && (e += " "), e += b);
				return e
			}
			function e() {
				for (var a, b, c = 0, e = ""; c < arguments.length;)(a = arguments[c++]) && (b = d(a)) && (e && (e += " "), e += b);
				return e
			}
			c.d(b, {
				Z: function() {
					return e
				}
			})
		},
		
		657: function(a, b) {
			"use strict";
			b.Z = "/_next/static/media/docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif"
		},
		
		58534: function(a, b) {
			"use strict";
			b.Z = "/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png"
		},
		
		28815: function(a, b) {
			"use strict";
			b.Z = "/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif"
		},
		
		60929: function(a, b) {
			"use strict";
			b.Z = "/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png"
		},
		
		35202: function() {
			!
			function(a, b) {
				b()
			}(this, function() {
				"use strict";

				function a(a) {
					var b = !0,
						c = !1,
						d = null,
						e = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0
						};

					
					function f(a) {
						return !!a && a !== document && "HTML" !== a.nodeName && "BODY" !== a.nodeName && "classList" in a && "contains" in a.classList
					}
					function g(a) {
						a.classList.contains("focus-visible") || (a.classList.add("focus-visible"), a.setAttribute("data-focus-visible-added", ""))
					}
					function h(a) {
						b = !1
					}
					function i() {
						document.addEventListener("mousemove", j), document.addEventListener("mousedown", j), document.addEventListener("mouseup", j), document.addEventListener("pointermove", j), document.addEventListener("pointerdown", j), document.addEventListener("pointerup", j), document.addEventListener("touchmove", j), document.addEventListener("touchstart", j), document.addEventListener("touchend", j)
					}
					function j(a) {
						a.target.nodeName && "html" === a.target.nodeName.toLowerCase() || (b = !1, document.removeEventListener("mousemove", j), document.removeEventListener("mousedown", j), document.removeEventListener("mouseup", j), document.removeEventListener("pointermove", j), document.removeEventListener("pointerdown", j), document.removeEventListener("pointerup", j), document.removeEventListener("touchmove", j), document.removeEventListener("touchstart", j), document.removeEventListener("touchend", j))
					}
					document.addEventListener("keydown", function(c) {
						c.metaKey || c.altKey || c.ctrlKey || (f(a.activeElement) && g(a.activeElement), b = !0)
					}, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", function(a) {
						"hidden" === document.visibilityState && (c && (b = !0), i())
					}, !0), i(), a.addEventListener("focus", function(a) {
						var c, d, h;
						!f(a.target) || (b || (d = (c = a.target).type, h = c.tagName, "INPUT" === h && e[d] && !c.readOnly || "TEXTAREA" === h && !c.readOnly || c.isContentEditable)) && g(a.target)
					}, !0), a.addEventListener("blur", function(a) {
						var b; !! f(a.target) && (a.target.classList.contains("focus-visible") || a.target.hasAttribute("data-focus-visible-added")) && (c = !0, window.clearTimeout(d), d = window.setTimeout(function() {
							c = !1
						}, 100), (b = a.target).hasAttribute("data-focus-visible-added") && (b.classList.remove("focus-visible"), b.removeAttribute("data-focus-visible-added")))
					}, !0), a.nodeType === Node.DOCUMENT_FRAGMENT_NODE && a.host ? a.host.setAttribute("data-js-focus-visible", "") : a.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
				}
				if ("undefined" != typeof window && "undefined" != typeof document) {
					var b;
					window.applyFocusVisiblePolyfill = a;
					try {
						b = new CustomEvent("focus-visible-polyfill-ready")
					} catch (a) {
						(b = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
					}
					window.dispatchEvent(b)
				}
				"undefined" != typeof document && a(document)
			})
		},
		
		66337: function() {
			!
			function() {
				"use strict";
				if ("object" == typeof window) {
					if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
						"isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
							get: function() {
								return this.intersectionRatio > 0
							}
						});
						
						return
					}
					function a(a) {
						try {
							return a.defaultView && a.defaultView.frameElement || null
						} catch (a) {
							return null
						}
					}
					var b = function(b) {
						for (var c = b, d = a(c); d;) d = a(c = d.ownerDocument);
						return c
					}(window.document),
						c = [],
						d = null,
						e = null;

					function f(a) {
						this.time = a.time, this.target = a.target, this.rootBounds = n(a.rootBounds), this.boundingClientRect = n(a.boundingClientRect), this.intersectionRect = n(a.intersectionRect || m()), this.isIntersecting = !! a.intersectionRect;
						var b = this.boundingClientRect,
							c = b.width * b.height,
							d = this.intersectionRect,
							e = d.width * d.height;
						c ? this.intersectionRatio = Number((e / c).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0
					}
					function g(a, b) {
						var c = b || {};
						
						if ("function" != typeof a) throw new Error("callback must be a function");
						if (c.root && 1 != c.root.nodeType) throw new Error("root must be an Element");
						this._checkForIntersections = h(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = a, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(c.rootMargin), this.thresholds = this._initThresholds(c.threshold), this.root = c.root || null, this.rootMargin = this._rootMarginValues.map(function(a) {
							return a.value + a.unit
						}).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
					}
					function h(a, b) {
						var c = null;
						return function() {
							c || (c = setTimeout(function() {
								a(), c = null
							}, b))
						}
					}
					function i(a, b, c, d) {
						"function" == typeof a.addEventListener ? a.addEventListener(b, c, d || !1) : "function" == typeof a.attachEvent && a.attachEvent("on" + b, c)
					}
					function j(a, b, c, d) {
						"function" == typeof a.removeEventListener ? a.removeEventListener(b, c, d || !1) : "function" == typeof a.detatchEvent && a.detatchEvent("on" + b, c)
					}
					function k(a, b) {
						var c = Math.max(a.top, b.top),
							d = Math.min(a.bottom, b.bottom),
							e = Math.max(a.left, b.left),
							f = Math.min(a.right, b.right),
							g = f - e,
							h = d - c;
						return g >= 0 && h >= 0 && {
							top: c,
							bottom: d,
							left: e,
							right: f,
							width: g,
							height: h
						} || null
					}
					function l(a) {
						var b;
						try {
							b = a.getBoundingClientRect()
						} catch (a) {}
						return b ? (b.width && b.height || (b = {
							top: b.top,
							right: b.right,
							bottom: b.bottom,
							left: b.left,
							width: b.right - b.left,
							height: b.bottom - b.top
						}), b) : m()
					}
					function m() {
						return {
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							width: 0,
							height: 0
						}
					}
					function n(a) {
						return !a || "x" in a ? a : {
							top: a.top,
							y: a.top,
							bottom: a.bottom,
							left: a.left,
							x: a.left,
							right: a.right,
							width: a.width,
							height: a.height
						}
					}
					function o(a, b) {
						var c = b.top - a.top,
							d = b.left - a.left;
						return {
							top: c,
							left: d,
							height: b.height,
							width: b.width,
							bottom: c + b.height,
							right: d + b.width
						}
					}
					function p(a, b) {
						for (var c = b; c;) {
							if (c == a) return !0;
							c = q(c)
						}
						return !1
					}
					function q(c) {
						var d = c.parentNode;
						return 9 == c.nodeType && c != b ? a(c) : d && 11 == d.nodeType && d.host ? d.host : d && d.assignedSlot ? d.assignedSlot.parentNode : d
					}
					g.prototype.THROTTLE_TIMEOUT = 100, g.prototype.POLL_INTERVAL = null, g.prototype.USE_MUTATION_OBSERVER = !0, g._setupCrossOriginUpdater = function() {
						return d || (d = function(a, b) {
							e = a && b ? o(a, b) : m(), c.forEach(function(a) {
								a._checkForIntersections()
							})
						}), d
					}, g._resetCrossOriginUpdater = function() {
						d = null, e = null
					}, g.prototype.observe = function(a) {
						if (!this._observationTargets.some(function(b) {
							return b.element == a
						})) {
							if (!(a && 1 == a.nodeType)) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: a,
								entry: null
							}), this._monitorIntersections(a.ownerDocument), this._checkForIntersections()
						}
					}, g.prototype.unobserve = function(a) {
						this._observationTargets = this._observationTargets.filter(function(b) {
							return b.element != a
						}), this._unmonitorIntersections(a.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
					}, g.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
					}, g.prototype.takeRecords = function() {
						var a = this._queuedEntries.slice();
						
						return this._queuedEntries = [], a
					}, g.prototype._initThresholds = function(a) {
						var b = a || [0];
						return Array.isArray(b) || (b = [b]), b.sort().filter(function(a, b, c) {
							if ("number" != typeof a || isNaN(a) || a < 0 || a > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return a !== c[b - 1]
						})
					}, g.prototype._parseRootMargin = function(a) {
						var b = (a || "0px").split(/\s+/).map(function(a) {
							var b = /^(-?\d*\.?\d+)(px|%)$/.exec(a);
							if (!b) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(b[1]),
								unit: b[2]
							}
						});
						
						return b[1] = b[1] || b[0], b[2] = b[2] || b[0], b[3] = b[3] || b[1], b
					}, g.prototype._monitorIntersections = function(c) {
						var d = c.defaultView;
						if (d && -1 == this._monitoringDocuments.indexOf(c)) {
							var e = this._checkForIntersections,
								f = null,
								g = null;
							if (this.POLL_INTERVAL ? f = d.setInterval(e, this.POLL_INTERVAL) : (i(d, "resize", e, !0), i(c, "scroll", e, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in d && (g = new d.MutationObserver(e)).observe(c, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0
							})), this._monitoringDocuments.push(c), this._monitoringUnsubscribes.push(function() {
								var a = c.defaultView;
								a && (f && a.clearInterval(f), j(a, "resize", e, !0)), j(c, "scroll", e, !0), g && g.disconnect()
							}), c != (this.root && this.root.ownerDocument || b)) {
								var h = a(c);
								h && this._monitorIntersections(h.ownerDocument)
							}
						}
					}, g.prototype._unmonitorIntersections = function(c) {
						var d = this._monitoringDocuments.indexOf(c);
						if (-1 != d) {
							var e = this.root && this.root.ownerDocument || b;
							if (!this._observationTargets.some(function(b) {
								var d = b.element.ownerDocument;
								if (d == c) return !0;
								for (; d && d != e;) {
									var f = a(d);
									if ((d = f && f.ownerDocument) == c) return !0
								}
								return !1
							})) {
								var f = this._monitoringUnsubscribes[d];
								if (this._monitoringDocuments.splice(d, 1), this._monitoringUnsubscribes.splice(d, 1), f(), c != e) {
									var g = a(c);
									g && this._unmonitorIntersections(g.ownerDocument)
								}
							}
						}
					}, g.prototype._unmonitorAllIntersections = function() {
						var a = this._monitoringUnsubscribes.slice(0);
						this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
						for (var b = 0; b < a.length; b++) a[b]()
					}, g.prototype._checkForIntersections = function() {
						if (this.root || !d || e) {
							var a = this._rootIsInDom(),
								b = a ? this._getRootRect() : m();
							
							this._observationTargets.forEach(function(c) {
								var e = c.element,
									g = l(e),
									h = this._rootContainsTarget(e),
									i = c.entry,
									j = a && h && this._computeTargetAndRootIntersection(e, g, b),
									k = c.entry = new f({
										time: window.performance && performance.now && performance.now(),
										target: e,
										boundingClientRect: g,
										rootBounds: d && !this.root ? null : b,
										intersectionRect: j
									});
								
								i ? a && h ? this._hasCrossedThreshold(i, k) && this._queuedEntries.push(k) : i && i.isIntersecting && this._queuedEntries.push(k) : this._queuedEntries.push(k)
							}, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
						}
					}, g.prototype._computeTargetAndRootIntersection = function(a, c, f) {
						if ("none" != window.getComputedStyle(a).display) {
							for (var g = c, h = q(a), i = !1; !i && h;) {
								var j = null,
									m = 1 == h.nodeType ? window.getComputedStyle(h) : {};
								
								if ("none" == m.display) return null;
								if (h == this.root || 9 == h.nodeType) if (i = !0, h == this.root || h == b) d && !this.root ? e && (0 != e.width || 0 != e.height) ? j = e : (h = null, j = null, g = null) : j = f;
								else {
									var n = q(h),
										p = n && l(n),
										r = n && this._computeTargetAndRootIntersection(n, p, f);
									p && r ? (h = n, j = o(p, r)) : (h = null, g = null)
								} else {
									var s = h.ownerDocument;
									h != s.body && h != s.documentElement && "visible" != m.overflow && (j = l(h))
								}
								if (j && (g = k(j, g)), !g) break;
								h = h && q(h)
							}
							return g
						}
					}, g.prototype._getRootRect = function() {
						var a;
						if (this.root) a = l(this.root);
						else {
							var c = b.documentElement,
								d = b.body;
							a = {
								top: 0,
								left: 0,
								right: c.clientWidth || d.clientWidth,
								width: c.clientWidth || d.clientWidth,
								bottom: c.clientHeight || d.clientHeight,
								height: c.clientHeight || d.clientHeight
							}
						}
						return this._expandRectByRootMargin(a)
					}, g.prototype._expandRectByRootMargin = function(a) {
						var b = this._rootMarginValues.map(function(b, c) {
							return "px" == b.unit ? b.value : b.value * (c % 2 ? a.width : a.height) / 100
						}),
							c = {
								top: a.top - b[0],
								right: a.right + b[1],
								bottom: a.bottom + b[2],
								left: a.left - b[3]
							};
						
						return c.width = c.right - c.left, c.height = c.bottom - c.top, c
					}, g.prototype._hasCrossedThreshold = function(a, b) {
						var c = a && a.isIntersecting ? a.intersectionRatio || 0 : -1,
							d = b.isIntersecting ? b.intersectionRatio || 0 : -1;
						if (c !== d) for (var e = 0; e < this.thresholds.length; e++) {
							var f = this.thresholds[e];
							if (f == c || f == d || f < c != f < d) return !0
						}
					}, g.prototype._rootIsInDom = function() {
						return !this.root || p(b, this.root)
					}, g.prototype._rootContainsTarget = function(a) {
						return p(this.root || b, a) && (!this.root || this.root.ownerDocument == a.ownerDocument)
					}, g.prototype._registerInstance = function() {
						0 > c.indexOf(this) && c.push(this)
					}, g.prototype._unregisterInstance = function() {
						var a = c.indexOf(this); - 1 != a && c.splice(a, 1)
					}, window.IntersectionObserver = g, window.IntersectionObserverEntry = f
				}
			}()
		},
		
		81780: function(a, b, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
				return c(8492)
			}])
		},
		
		48418: function(a, b, c) {
			"use strict";

			function d(a, b) {
				return (function(a) {
					if (Array.isArray(a)) return a
				})(a) || (function(a, b) {
					var c = [],
						d = !0,
						e = !1,
						f = void 0;
					try {
						for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
					} catch (a) {
						e = !0, f = a
					} finally {
						try {
							d || null == h.
							return ||h.
							return ()
						} finally {
							if (e) throw f
						}
					}
					return c
				})(a, b) || (function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				})()
			}
			b.
		default = void 0;
			var e, f = (e = c(67294)) && e.__esModule ? e:
			{
				default:
					e
			},
				g = c(76273),
				h = c(90387),
				i = c(57190),
				j = {};

			
			function k(a, b, c, d) {
				if (a && g.isLocalURL(b)) {
					a.prefetch(b, c, d).
					catch (function(a) {});
					
					var e = d && void 0 !== d.locale ? d.locale : a && a.locale;
					j[b + "%" + c + (e ? "%" + e : "")] = !0
				}
			}
			b.
		default = function(a) {
				var b, c = !1 !== a.prefetch,
					e = h.useRouter(),
					l = f.
				default.useMemo(function() {
						var b = d(g.resolveHref(e, a.href, !0), 2),
							c = b[0],
							f = b[1];
						return {
							href: c,
							as: a.as ? g.resolveHref(e, a.as) : f || c
						}
					}, [e, a.href, a.as]),
					m = l.href,
					n = l.as,
					o = a.children,
					p = a.replace,
					q = a.shallow,
					r = a.scroll,
					s = a.locale;
				"string" == typeof o && (o = f.
			default.createElement("a", null, o));
				var t = (b = f.
			default.Children.only(o)) && "object" == typeof b && b.ref,
					u = d(i.useIntersection({
						rootMargin: "200px"
					}), 2),
					v = u[0],
					w = u[1],
					x = f.
				default.useCallback(function(a) {
						v(a), t && ("function" == typeof t ? t(a) : "object" == typeof t && (t.current = a))
					}, [t, v]);
				f.
			default.useEffect(function() {
					var a = w && c && g.isLocalURL(m),
						b = void 0 !== s ? s : e && e.locale,
						d = j[m + "%" + n + (b ? "%" + b : "")];
					a && !d && k(e, m, n, {
						locale: b
					})
				}, [n, m, w, s, c, e]);
				var y = {
					ref: x,
					onClick: function(a) {
						var c, d, f, h, i, j, k, l, o, t;
						b.props && "function" == typeof b.props.onClick && b.props.onClick(a), a.defaultPrevented || (c = a, d = e, f = m, h = n, i = p, j = q, k = r, l = s, "A" === c.currentTarget.nodeName && ((t = (o = c).currentTarget.target) && "_self" !== t || o.metaKey || o.ctrlKey || o.shiftKey || o.altKey || o.nativeEvent && 2 === o.nativeEvent.which || !g.isLocalURL(f)) || (c.preventDefault(), null == k && h.indexOf("#") >= 0 && (k = !1), d[i ? "replace" : "push"](f, h, {
							shallow: j,
							locale: l,
							scroll: k
						})))
					}
				};
				
				if (y.onMouseEnter = function(a) {
					g.isLocalURL(m) && (b.props && "function" == typeof b.props.onMouseEnter && b.props.onMouseEnter(a), k(e, m, n, {
						priority: !0
					}))
				}, a.passHref || "a" === b.type && !("href" in b.props)) {
					var z = void 0 !== s ? s : e && e.locale,
						A = e && e.isLocaleDomain && g.getDomainLocale(n, z, e && e.locales, e && e.domainLocales);
					y.href = A || g.addBasePath(g.addLocale(n, z, e && e.defaultLocale))
				}
				return f.
			default.cloneElement(b, y)
			}
		},
		
		57190: function(a, b, c) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.useIntersection = function(a) {
				var b, c = a.rootMargin,
					h = a.disabled || !f,
					i = d.useRef(),
					j = function(a) {
						if (Array.isArray(a)) return a
					}(b = d.useState(!1)) ||
					function(a, b) {
						var c = [],
							d = !0,
							e = !1,
							f = void 0;
						try {
							for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
						} catch (a) {
							e = !0, f = a
						} finally {
							try {
								d || null == h.
								return ||h.
								return ()
							} finally {
								if (e) throw f
							}
						}
						return c
					}(b, 2) ||
					function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}(),
					k = j[0],
					l = j[1],
					m = d.useCallback(function(a) {
						i.current && (i.current(), i.current = void 0), !h && !k && a && a.tagName && (i.current = g(a, function(a) {
							return a && l(a)
						}, {
							rootMargin: c
						}))
					}, [h, c, k]);
				return d.useEffect(function() {
					if (!f && !k) {
						var a = e.requestIdleCallback(function() {
							return l(!0)
						});
						
						return function() {
							return e.cancelIdleCallback(a)
						}
					}
				}, [k]), [m, k]
			};
			
			var d = c(67294),
				e = c(9311),
				f = "undefined" != typeof IntersectionObserver;

			function g(a, b, c) {
				var d = i(c),
					e = d.id,
					f = d.observer,
					g = d.elements;
				return g.set(a, b), f.observe(a), function() {
					g.delete(a), f.unobserve(a), 0 === g.size && (f.disconnect(), h.delete(e))
				}
			}
			var h = new Map();

			
			function i(a) {
				var b = a.rootMargin || "",
					c = h.get(b);
				if (c) return c;
				var d = new Map(),
					e = new IntersectionObserver(function(a) {
						a.forEach(function(a) {
							var b = d.get(a.target),
								c = a.isIntersecting || a.intersectionRatio > 0;
							b && c && b(c)
						})
					}, a);
				return h.set(b, c = {
					id: b,
					observer: e,
					elements: d
				}), c
			}
		},
		
		58665: function(a, b, c) {
			"use strict";
			c.d(b, {
				h4: function() {
					return W
				},
				
				Yu: function() {
					return V
				},
				
				qZ: function() {
					return U
				}
			});
			
			var d, e, f, g, h, i = c(85893),
				j = c(41664),
				k = c(19642),
				l = c(67294),
				m = c(133),
				n = c(58529),
				o = c(57471),
				p = c(62659),
				q = c(79016),
				r = c(60852),
				s = c(92506),
				t = c(35057),
				u = c(24198),
				v = c(3980),
				w = c(56637),
				x = c(9472),
				y = c(33197),
				z = c(21787);
			(g = e || (e = {}))[g.Open = 0] = "Open", g[g.Closed = 1] = "Closed", (h = f || (f = {}))[h.OpenMenu = 0] = "OpenMenu", h[h.CloseMenu = 1] = "CloseMenu", h[h.GoToItem = 2] = "GoToItem", h[h.Search = 3] = "Search", h[h.ClearSearch = 4] = "ClearSearch", h[h.RegisterItem = 5] = "RegisterItem", h[h.UnregisterItem = 6] = "UnregisterItem";
			var A = ((d = {})[f.CloseMenu] = function(a) {
				return a.menuState === e.Closed ? a : (0, k.gY)({}, a, {
					activeItemIndex: null,
					menuState: e.Closed
				})
			}, d[f.OpenMenu] = function(a) {
				return a.menuState === e.Open ? a : (0, k.gY)({}, a, {
					menuState: e.Open
				})
			}, d[f.GoToItem] = function(a, b) {
				var c = (0, z.d)(b, {
					resolveItems: function() {
						return a.items
					},
					
					resolveActiveIndex: function() {
						return a.activeItemIndex
					},
					
					resolveId: function(a) {
						return a.id
					},
					
					resolveDisabled: function(a) {
						return a.dataRef.current.disabled
					}
				});
				
				return "" === a.searchQuery && a.activeItemIndex === c ? a : (0, k.gY)({}, a, {
					searchQuery: "",
					activeItemIndex: c
				})
			}, d[f.Search] = function(a, b) {
				var c = a.searchQuery + b.value.toLowerCase(),
					d = a.items.findIndex(function(a) {
						var b;
						return (null == (b = a.dataRef.current.textValue) ? void 0 : b.startsWith(c)) && !a.dataRef.current.disabled
					});
				
				return -1 === d || d === a.activeItemIndex ? (0, k.gY)({}, a, {
					searchQuery: c
				}) : (0, k.gY)({}, a, {
					searchQuery: c,
					activeItemIndex: d
				})
			}, d[f.ClearSearch] = function(a) {
				return "" === a.searchQuery ? a : (0, k.gY)({}, a, {
					searchQuery: ""
				})
			}, d[f.RegisterItem] = function(a, b) {
				return (0, k.gY)({}, a, {
					items: [].concat(a.items, [{
						id: b.id,
						dataRef: b.dataRef
					}])
				})
			}, d[f.UnregisterItem] = function(a, b) {
				var c = a.items.slice(),
					d = null !== a.activeItemIndex ? c[a.activeItemIndex] : null,
					e = c.findIndex(function(a) {
						return a.id === b.id
					});
				
				return -1 !== e && c.splice(e, 1), (0, k.gY)({}, a, {
					items: c,
					activeItemIndex: e === a.activeItemIndex ? null : null === d ? null : c.indexOf(d)
				})
			}, d),
				B = (0, l.createContext)(null);

			function C(a) {
				var b = (0, l.useContext)(B);
				if (null === b) {
					var c = new Error("<" + a + " /> is missing a parent <" + F.name + " /> component.");
					throw Error.captureStackTrace && Error.captureStackTrace(c, C), c
				}
				return b
			}
			function D(a, b) {
				return (0, m.E)(b.type, A, a, b)
			}
			B.displayName = "MenuContext";
			var E = l.Fragment;

			function F(a) {
				var b, c = (0, l.useReducer)(D, {
					menuState: e.Closed,
					buttonRef: (0, l.createRef)(),
					itemsRef: (0, l.createRef)(),
					items: [],
					searchQuery: "",
					activeItemIndex: null
				}),
					d = c[0],
					g = d.menuState,
					h = d.itemsRef,
					i = d.buttonRef,
					j = c[1];
				(0, u.s)("mousedown", function(a) {
					var b, c, d, k = a.target;
					g === e.Open && (null == (b = i.current) || !b.contains(k)) && (null != (c = h.current) && c.contains(k) || (j({
						type: f.CloseMenu
					}), (0, t.sP)(k, t.tJ.Loose) || (a.preventDefault(), null == (d = i.current) || d.focus())))
				});
				
				var k = (0, l.useMemo)(function() {
					return {
						open: g === e.Open
					}
				}, [g]);
				return l.createElement(B.Provider, {
					value: c
				}, l.createElement(v.up, {
					value: (0, m.E)(g, ((b = {})[e.Open] = v.ZM.Open, b[e.Closed] = v.ZM.Closed, b))
				}, (0, n.sY)({
					props: a,
					slot: k,
					defaultTag: E,
					name: "Menu"
				})))
			}
			var G = (0, n.yV)(function a(b, c) {
				var d, g = C([F.name, a.name].join(".")),
					h = g[0],
					i = g[1],
					j = (0, o.T)(h.buttonRef, c),
					m = "headlessui-menu-button-" + (0, s.M)(),
					r = (0, y.G)(),
					t = (0, l.useCallback)(function(a) {
						switch (a.key) {
							case p.R.Space:
							case p.R.Enter:
							case p.R.ArrowDown:
								a.preventDefault(), a.stopPropagation(), i({
									type: f.OpenMenu
								}), r.nextFrame(function() {
									return i({
										type: f.GoToItem,
										focus: z.T.First
									})
								});
								
								break;
							case p.R.ArrowUp:
								a.preventDefault(), a.stopPropagation(), i({
									type: f.OpenMenu
								}), r.nextFrame(function() {
									return i({
										type: f.GoToItem,
										focus: z.T.Last
									})
								});
								
								break
						}
					}, [i, r]),
					u = (0, l.useCallback)(function(a) {
						switch (a.key) {
							case p.R.Space:
								a.preventDefault();
								
								break
						}
					}, []),
					v = (0, l.useCallback)(function(a) {
						if ((0, q.P)(a.currentTarget)) return a.preventDefault();
						
						b.disabled || (h.menuState === e.Open ? (i({
							type: f.CloseMenu
						}), r.nextFrame(function() {
							var a;
							return null == (a = h.buttonRef.current) ? void 0 : a.focus({
								preventScroll: !0
							})
						})) : (a.preventDefault(), a.stopPropagation(), i({
							type: f.OpenMenu
						})))
					}, [i, r, h, b.disabled]),
					x = (0, l.useMemo)(function() {
						return {
							open: h.menuState === e.Open
						}
					}, [h]),
					A = {
						ref: j,
						id: m,
						type: (0, w.f)(b, h.buttonRef),
						"aria-haspopup": !0,
						"aria-controls": null == (d = h.itemsRef.current) ? void 0 : d.id,
						"aria-expanded": b.disabled ? void 0 : h.menuState === e.Open,
						onKeyDown: t,
						onKeyUp: u,
						onClick: v
					};
				
				return (0, n.sY)({
					props: (0, k.gY)({}, b, A),
					slot: x,
					defaultTag: "button",
					name: "Menu.Button"
				})
			}),
				H = n.AN.RenderStrategy | n.AN.Static,
				I = (0, n.yV)(function a(b, c) {
					var d, g, h, i, j, m, q, t, u, w, A = C([F.name, a.name].join(".")),
						B = A[0],
						D = A[1],
						E = (0, o.T)(B.itemsRef, c),
						G = "headlessui-menu-items-" + (0, s.M)(),
						I = (0, y.G)(),
						J = (0, v.oJ)(),
						K = null !== J ? J === v.ZM.Open : B.menuState === e.Open;
					(0, l.useEffect)(function() {
						var a = B.itemsRef.current;
						a && B.menuState === e.Open && a !== document.activeElement && a.focus({
							preventScroll: !0
						})
					}, [B.menuState, B.itemsRef]), i = (h = {
						container: B.itemsRef.current,
						enabled: B.menuState === e.Open,
						accept: function(a) {
							return "menuitem" === a.getAttribute("role") ? NodeFilter.FILTER_REJECT : a.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
						},
						
						walk: function(a) {
							a.setAttribute("role", "none")
						}
					}).container, j = h.accept, m = h.walk, q = h.enabled, t = void 0 === q || q, u = (0, l.useRef)(j), w = (0, l.useRef)(m), (0, l.useEffect)(function() {
						u.current = j, w.current = m
					}, [j, m]), (0, r.e)(function() {
						if (i && t) for (var a = u.current, b = w.current, c = Object.assign(function(b) {
							return a(b)
						}, {
							acceptNode: a
						}), d = document.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, c, !1); d.nextNode();) b(d.currentNode)
					}, [i, t, u, w]);
					var L = (0, l.useCallback)(function(a) {
						switch (I.dispose(), a.key) {
							case p.R.Space:
								if ("" !== B.searchQuery) return a.preventDefault(), a.stopPropagation(), D({
									type: f.Search,
									value: a.key
								});
							case p.R.Enter:
								if (a.preventDefault(), a.stopPropagation(), D({
									type: f.CloseMenu
								}), null !== B.activeItemIndex) {
									var b, c = B.items[B.activeItemIndex].id;
									null == (b = document.getElementById(c)) || b.click()
								}(0, x.k)().nextFrame(function() {
									var a;
									return null == (a = B.buttonRef.current) ? void 0 : a.focus({
										preventScroll: !0
									})
								});
								
								break;
							case p.R.ArrowDown:
								return a.preventDefault(), a.stopPropagation(), D({
									type: f.GoToItem,
									focus: z.T.Next
								});
							case p.R.ArrowUp:
								return a.preventDefault(), a.stopPropagation(), D({
									type: f.GoToItem,
									focus: z.T.Previous
								});
							case p.R.Home:
							case p.R.PageUp:
								return a.preventDefault(), a.stopPropagation(), D({
									type: f.GoToItem,
									focus: z.T.First
								});
							case p.R.End:
							case p.R.PageDown:
								return a.preventDefault(), a.stopPropagation(), D({
									type: f.GoToItem,
									focus: z.T.Last
								});
							case p.R.Escape:
								a.preventDefault(), a.stopPropagation(), D({
									type: f.CloseMenu
								}), (0, x.k)().nextFrame(function() {
									var a;
									return null == (a = B.buttonRef.current) ? void 0 : a.focus({
										preventScroll: !0
									})
								});
								
								break;
							case p.R.Tab:
								a.preventDefault(), a.stopPropagation();
								
								break;
							default:
								1 === a.key.length && (D({
									type: f.Search,
									value: a.key
								}), I.setTimeout(function() {
									return D({
										type: f.ClearSearch
									})
								}, 350));
								break
						}
					}, [D, I, B]),
						M = (0, l.useCallback)(function(a) {
							switch (a.key) {
								case p.R.Space:
									a.preventDefault();
									
									break
							}
						}, []),
						N = (0, l.useMemo)(function() {
							return {
								open: B.menuState === e.Open
							}
						}, [B]),
						O = {
							"aria-activedescendant": null === B.activeItemIndex ? void 0 : null == (d = B.items[B.activeItemIndex]) ? void 0 : d.id,
							"aria-labelledby": null == (g = B.buttonRef.current) ? void 0 : g.id,
							id: G,
							onKeyDown: L,
							onKeyUp: M,
							role: "menu",
							tabIndex: 0,
							ref: E
						};
					
					return (0, n.sY)({
						props: (0, k.gY)({}, b, O),
						slot: N,
						defaultTag: "div",
						features: H,
						visible: K,
						name: "Menu.Items"
					})
				}),
				J = l.Fragment;

			function K(a) {
				var b = a.disabled,
					c = void 0 !== b && b,
					d = a.onClick,
					g = (0, k.gK)(a, ["disabled", "onClick"]),
					h = C([F.name, K.name].join(".")),
					i = h[0],
					j = h[1],
					m = "headlessui-menu-item-" + (0, s.M)(),
					o = null !== i.activeItemIndex && i.items[i.activeItemIndex].id === m;
				(0, r.e)(function() {
					if (i.menuState === e.Open && o) {
						var a = (0, x.k)();
						
						return a.nextFrame(function() {
							var a;
							return null == (a = document.getElementById(m)) ? void 0 : null == a.scrollIntoView ? void 0 : a.scrollIntoView({
								block: "nearest"
							})
						}), a.dispose
					}
				}, [m, o, i.menuState]);
				var p = (0, l.useRef)({
					disabled: c
				});
				(0, r.e)(function() {
					p.current.disabled = c
				}, [p, c]), (0, r.e)(function() {
					var a, b;
					p.current.textValue = null == (a = document.getElementById(m)) ? void 0 : null == (b = a.textContent) ? void 0 : b.toLowerCase()
				}, [p, m]), (0, r.e)(function() {
					return j({
						type: f.RegisterItem,
						id: m,
						dataRef: p
					}), function() {
						return j({
							type: f.UnregisterItem,
							id: m
						})
					}
				}, [p, m]);
				var q = (0, l.useCallback)(function(a) {
					return c ? a.preventDefault() : (j({
						type: f.CloseMenu
					}), (0, x.k)().nextFrame(function() {
						var a;
						return null == (a = i.buttonRef.current) ? void 0 : a.focus({
							preventScroll: !0
						})
					}), d) ? d(a) : void 0
				}, [j, i.buttonRef, c, d]),
					t = (0, l.useCallback)(function() {
						if (c) return j({
							type: f.GoToItem,
							focus: z.T.Nothing
						});
						
						j({
							type: f.GoToItem,
							focus: z.T.Specific,
							id: m
						})
					}, [c, m, j]),
					u = (0, l.useCallback)(function() {
						!c && (o || j({
							type: f.GoToItem,
							focus: z.T.Specific,
							id: m
						}))
					}, [c, o, m, j]),
					v = (0, l.useCallback)(function() {
						c || o && j({
							type: f.GoToItem,
							focus: z.T.Nothing
						})
					}, [c, o, j]),
					w = (0, l.useMemo)(function() {
						return {
							active: o,
							disabled: c
						}
					}, [o, c]);
				return (0, n.sY)({
					props: (0, k.gY)({}, g, {
						id: m,
						role: "menuitem",
						tabIndex: !0 === c ? void 0 : -1,
						"aria-disabled": !0 === c || void 0,
						disabled: void 0,
						onClick: q,
						onFocus: t,
						onPointerMove: u,
						onMouseMove: u,
						onPointerLeave: v,
						onMouseLeave: v
					}),
					slot: w,
					defaultTag: J,
					name: "Menu.Item"
				})
			}
			F.Button = G, F.Items = I, F.Item = K;
			var L = c(86010);

			function M(a) {
				return a.className, (0, i.jsxs)(F, {
					as: "div",
					className: "relative",
					children: [(0, i.jsxs)(F.Button, {
						className: "text-xs leading-5 font-semibold bg-gray-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-400/20 dark:highlight-white/5",
						children: ["v", "3.0.7", (0, i.jsx)("svg", {
							width: "6",
							height: "3",
							className: "ml-2 overflow-visible",
							"aria-hidden": "true",
							children: (0, i.jsx)("path", {
								d: "M0 0L3 3L6 0",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round"
							})
						})]
					}), (0, i.jsxs)(F.Items, {
						className: "absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-gray-900/5 text-sm leading-6 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:highlight-white/5",
						children: [(0, i.jsx)(F.Item, {
							disabled: !0,
							children: (0, i.jsxs)("span", {
								className: "flex items-center justify-between px-3 py-1 text-sky-500 dark:text-sky-400",
								children: ["v", "3.0.7", (0, i.jsx)("svg", {
									width: "24",
									height: "24",
									fill: "none",
									"aria-hidden": "true",
									children: (0, i.jsx)("path", {
										d: "m7.75 12.75 2.25 2.5 6.25-6.5",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})]
							})
						}), (0, i.jsx)(F.Item, {
							children: function(a) {
								var b = a.active;
								return (0, i.jsx)("a", {
									href: "https://v2.tailwindcss.com",
									className: (0, L.Z)("block px-3 py-1", b && "bg-gray-50 text-gray-900 dark:bg-gray-600/30 dark:text-white"),
									children: "v2.2.19"
								})
							}
						}), (0, i.jsx)(F.Item, {
							children: function(a) {
								var b = a.active;
								return (0, i.jsx)("a", {
									href: "https://v1.tailwindcss.com",
									className: (0, L.Z)("block px-3 py-1", b && "bg-gray-50 text-gray-900 dark:bg-gray-600/30 dark:text-white"),
									children: "v1.9.6"
								})
							}
						}), (0, i.jsx)(F.Item, {
							children: function(a) {
								var b = a.active;
								return (0, i.jsx)("a", {
									href: "https://tailwindcss-v0.netlify.app/",
									className: (0, L.Z)("block px-3 py-1", b && "bg-gray-50 text-gray-900 dark:bg-gray-600/30 dark:text-white"),
									children: "v0.7.4"
								})
							}
						})]
					})]
				})
			}
			var N = c(30596),
				O = c(11163),
				P = c(51796),
				Q = c(85220),
				R = c(47391);

			function S(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function T() {
				return (0, i.jsx)(j.
			default, {
					href: "/blog/tailwindcss-v3",
					children: (0, i.jsxs)("a", {
						className: "ml-3 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20",
						children: [(0, i.jsx)("strong", {
							className: "font-semibold",
							children: "Tailwind CSS v3.0"
						}), (0, i.jsx)("svg", {
							width: "2",
							height: "2",
							fill: "currentColor",
							"aria-hidden": "true",
							className: "ml-2 text-sky-600 dark:text-sky-400/70",
							children: (0, i.jsx)("circle", {
								cx: "1",
								cy: "1",
								r: "1"
							})
						}), (0, i.jsx)("span", {
							className: "ml-2",
							children: "Just-in-Time all the time, colored shadows, scroll snap and more"
						}), (0, i.jsx)("svg", {
							width: "3",
							height: "6",
							className: "ml-3 overflow-visible text-sky-300 dark:text-sky-400",
							"aria-hidden": "true",
							children: (0, i.jsx)("path", {
								d: "M0 0L3 3L0 6",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					})
				})
			}
			function U(a) {
				var b = a.display,
					c = void 0 === b ? "md:hidden" : b,
					d = a.className,
					e = function(a, b) {
						if (null == a) return {};
						
						var c, d, e = function(a, b) {
							if (null == a) return {};
							
							var c, d, e = {},
								f = Object.keys(a);
							for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
							return e
						}(a, b);
						if (Object.getOwnPropertySymbols) {
							var f = Object.getOwnPropertySymbols(a);
							for (d = 0; d < f.length; d++) c = f[d], !(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
						}
						return e
					}(a, ["display", "className"]),
					f = (0, l.useState)(!1),
					g = f[0],
					h = f[1];
				return (0, l.useEffect)(function() {
					var a = function() {
						h(!1)
					};
					
					if (g) return O.
				default.events.on("routeChangeComplete", a), function() {
						O.
					default.events.off("routeChangeComplete", a)
					}
				}, [g]), (0, i.jsxs)("div", function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = null != arguments[b] ? arguments[b] : {},
							d = Object.keys(c);
						"function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
							return Object.getOwnPropertyDescriptor(c, a).enumerable
						}))), d.forEach(function(b) {
							S(a, b, c[b])
						})
					}
					return a
				}({
					className: (0, L.Z)(d, c)
				}, e, {
					children: [(0, i.jsxs)("button", {
						type: "button",
						className: "text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
						onClick: function() {
							return h(!0)
						},
						
						children: [(0, i.jsx)("span", {
							className: "sr-only",
							children: "Navigation"
						}), (0, i.jsx)("svg", {
							width: "24",
							height: "24",
							fill: "none",
							"aria-hidden": "true",
							children: (0, i.jsx)("path", {
								d: "M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					}), (0, i.jsxs)(Q.V, {
						as: "div",
						className: (0, L.Z)("fixed z-50 inset-0", c),
						open: g,
						onClose: h,
						children: [(0, i.jsx)(Q.V.Overlay, {
							className: "fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80"
						}), (0, i.jsxs)("div", {
							className: "fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5",
							children: [(0, i.jsxs)("button", {
								type: "button",
								className: "absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
								onClick: function() {
									return h(!1)
								},
								
								children: [(0, i.jsx)("span", {
									className: "sr-only",
									children: "Close navigation"
								}), (0, i.jsx)("svg", {
									viewBox: "0 0 10 10",
									className: "w-2.5 h-2.5 overflow-visible",
									"aria-hidden": "true",
									children: (0, i.jsx)("path", {
										d: "M0 0L10 10M10 0L0 10",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round"
									})
								})]
							}), (0, i.jsxs)("ul", {
								className: "space-y-6",
								children: [(0, i.jsx)(V, {}), (0, i.jsx)("li", {
									children: (0, i.jsx)("a", {
										href: "https://github.com/tailwindlabs/tailwindcss",
										className: "hover:text-sky-500 dark:hover:text-sky-400",
										children: "GitHub"
									})
								})]
							}), (0, i.jsx)("div", {
								className: "mt-6 pt-6 border-t border-gray-200 dark:border-gray-200/10",
								children: (0, i.jsx)(R.N, {})
							})]
						})]
					})]
				}))
			}
			function V() {
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)("li", {
						children: (0, i.jsx)(j.
					default, {
							href: "/docs/installation",
							children: (0, i.jsx)("a", {
								className: "hover:text-sky-500 dark:hover:text-sky-400",
								children: "Docs"
							})
						})
					}), (0, i.jsx)("li", {
						children: (0, i.jsx)("a", {
							href: "https://tailwindui.com",
							className: "hover:text-sky-500 dark:hover:text-sky-400",
							children: "Components"
						})
					}), (0, i.jsx)("li", {
						children: (0, i.jsx)(j.
					default, {
							href: "/blog",
							children: (0, i.jsx)("a", {
								className: "hover:text-sky-500 dark:hover:text-sky-400",
								children: "Blog"
							})
						})
					})]
				})
			}
			function W(a) {
				var b = a.hasNav,
					d = void 0 !== b && b,
					e = a.navIsOpen,
					f = a.onNavToggle,
					g = a.title,
					h = a.section,
					k = (0, l.useState)(!1),
					m = k[0],
					n = k[1];
				return (0, l.useEffect)(function() {
					var a = function() {
						!m && window.scrollY > b ? n(!0) : m && window.scrollY <= b && n(!1)
					},
						b = 50;
					return a(), window.addEventListener("scroll", a, {
						passive: !0
					}), function() {
						window.removeEventListener("scroll", a, {
							passive: !0
						})
					}
				}, [m]), (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)("div", {
						className: "absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none",
						children: (0, i.jsxs)("div", {
							className: "w-[108rem] flex-none flex justify-end",
							children: [(0, i.jsxs)("picture", {
								children: [(0, i.jsx)("source", {
									srcSet: c(28815).Z,
									type: "image/avif"
								}), (0, i.jsx)("img", {
									src: c(60929).Z,
									alt: "",
									className: "w-[71.75rem] flex-none max-w-none dark:hidden"
								})]
							}), (0, i.jsxs)("picture", {
								children: [(0, i.jsx)("source", {
									srcSet: c(657).Z,
									type: "image/avif"
								}), (0, i.jsx)("img", {
									src: c(58534).Z,
									alt: "",
									className: "w-[90rem] flex-none max-w-none hidden dark:block"
								})]
							})]
						})
					}), (0, i.jsx)("div", {
						className: (0, L.Z)("sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06]", m ? "bg-white supports-backdrop-blur:bg-white/95 dark:bg-gray-900/75" : "bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"),
						children: (0, i.jsxs)("div", {
							className: "max-w-8xl mx-auto",
							children: [(0, i.jsx)("div", {
								className: (0, L.Z)("py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 dark:border-gray-300/10", d ? "mx-4 lg:mx-0" : "px-4"),
								children: (0, i.jsxs)("div", {
									className: "relative flex items-center",
									children: [(0, i.jsx)(j.
								default, {
										href: "/",
										children: (0, i.jsxs)("a", {
											className: "mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto",
											onContextMenu: function(a) {
												a.preventDefault(), O.
											default.push("/brand")
											},
											
											children: [(0, i.jsx)("span", {
												className: "sr-only",
												children: "Tailwind CSS home page"
											}), (0, i.jsx)(P.T, {
												className: "w-auto h-5"
											})]
										})
									}), (0, i.jsx)(M, {}), (0, i.jsx)(T, {}), (0, i.jsxs)("div", {
										className: "relative hidden lg:flex items-center ml-auto",
										children: [(0, i.jsx)("nav", {
											className: "text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200",
											children: (0, i.jsx)("ul", {
												className: "flex space-x-8",
												children: (0, i.jsx)(V, {})
											})
										}), (0, i.jsxs)("div", {
											className: "flex items-center border-l border-gray-200 ml-6 pl-6 dark:border-gray-800",
											children: [(0, i.jsx)(R.T, {
												panelClassName: "mt-8"
											}), (0, i.jsxs)("a", {
												href: "https://github.com/tailwindlabs/tailwindcss",
												className: "ml-6 block text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",
												children: [(0, i.jsx)("span", {
													className: "sr-only",
													children: "Tailwind CSS on GitHub"
												}), (0, i.jsx)("svg", {
													viewBox: "0 0 16 16",
													className: "w-5 h-5",
													fill: "currentColor",
													"aria-hidden": "true",
													children: (0, i.jsx)("path", {
														d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
													})
												})]
											})]
										})]
									}), (0, i.jsxs)(N.Q, {
										className: "ml-auto text-gray-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-gray-600 lg:hidden dark:text-gray-400 dark:hover:text-gray-300",
										children: [(0, i.jsx)("span", {
											className: "sr-only",
											children: "Search"
										}), (0, i.jsxs)("svg", {
											width: "24",
											height: "24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											"aria-hidden": "true",
											children: [(0, i.jsx)("path", {
												d: "m19 19-3.5-3.5"
											}), (0, i.jsx)("circle", {
												cx: "11",
												cy: "11",
												r: "6"
											})]
										})]
									}), (0, i.jsx)(U, {
										className: "ml-2 -my-1",
										display: "lg:hidden"
									})]
								})
							}), d && (0, i.jsxs)("div", {
								className: "flex items-center p-4 border-b border-gray-900/10 lg:hidden dark:border-gray-50/[0.06]",
								children: [(0, i.jsxs)("button", {
									type: "button",
									onClick: function() {
										return f(!e)
									},
									
									className: "text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
									children: [(0, i.jsx)("span", {
										className: "sr-only",
										children: "Navigation"
									}), (0, i.jsx)("svg", {
										width: "24",
										height: "24",
										children: (0, i.jsx)("path", {
											d: "M5 6h14M5 12h14M5 18h14",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round"
										})
									})]
								}), g && (0, i.jsxs)("ol", {
									className: "ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0",
									children: [h && (0, i.jsxs)("li", {
										className: "flex items-center",
										children: [h, (0, i.jsx)("svg", {
											width: "3",
											height: "6",
											"aria-hidden": "true",
											className: "mx-3 overflow-visible text-gray-400",
											children: (0, i.jsx)("path", {
												d: "M0 0L3 3L0 6",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "1.5",
												strokeLinecap: "round"
											})
										})]
									}), (0, i.jsx)("li", {
										className: "font-semibold text-gray-900 truncate dark:text-gray-200",
										children: g
									})]
								})]
							})]
						})
					})]
				})
			}
		},
		
		51796: function(a, b, c) {
			"use strict";
			c.d(b, {
				T: function() {
					return g
				}
			});
			
			var d = c(85893),
				e = c(86010);

			function f(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function g(a) {
				var b = a.className,
					c = function(a, b) {
						if (null == a) return {};
						
						var c, d, e = function(a, b) {
							if (null == a) return {};
							
							var c, d, e = {},
								f = Object.keys(a);
							for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
							return e
						}(a, b);
						if (Object.getOwnPropertySymbols) {
							var f = Object.getOwnPropertySymbols(a);
							for (d = 0; d < f.length; d++) c = f[d], !(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
						}
						return e
					}(a, ["className"]);
				return (0, d.jsxs)("svg", function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = null != arguments[b] ? arguments[b] : {},
							d = Object.keys(c);
						"function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
							return Object.getOwnPropertyDescriptor(c, a).enumerable
						}))), d.forEach(function(b) {
							f(a, b, c[b])
						})
					}
					return a
				}({
					viewBox: "0 0 248 31",
					className: (0, e.Z)("text-gray-900 dark:text-white", b)
				}, c, {
					children: [(0, d.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z",
						fill: "#38bdf8"
					}), (0, d.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z",
						fill: "currentColor"
					})]
				}))
			}
		},
		
		30596: function(a, b, c) {
			"use strict";
			c.d(b, {
				Q: function() {
					return Bb
				},
				
				X: function() {
					return zb
				}
			});
			
			var d = c(85893),
				e = c(67294),
				f = c(73935),
				g = c(41664),
				h = c(9008),
				i = c(11163);

			function j(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function k(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			var l = function() {},
				m = 0;

			function n(a) {
				return 0 === a.suggestions.length ? 0 : a.suggestions.reduce(function(a, b) {
					return a + b.items.length
				}, 0)
			}
			function o(a, b, c, d) {
				if (null === b && a < 0) return c - 1;
				if (null !== d && 0 === b && a < 0) return c - 1;
				var e = (null === b ? -1 : b) + a;
				return e <= -1 || e >= c ? null === d ? null : 0 : e
			}
			function p(a) {
				var b, c, d = a.state,
					e = (c = (b = ({
						state: d
					}).state).suggestions.map(function(a) {
						return a.items.length
					}).reduce(function(a, b, c) {
						var d = a[c - 1] || 0;
						return a.push(d + b), a
					}, []).reduce(function(a, c) {
						return c <= b.highlightedIndex ? a + 1 : a
					}, 0), b.suggestions[c]);
				if (!e) return null;
				var f = e.items[function(a) {
					for (var b = a.state, c = a.suggestion, d = !1, e = 0, f = 0; !1 === d;) {
						var g = b.suggestions[e];
						if (g === c) {
							d = !0;
							break
						}
						f += g.items.length, e++
					}
					return b.highlightedIndex - f
				}({
					state: d,
					suggestion: e
				})],
					g = e.source,
					h = g.getInputValue({
						suggestion: f,
						state: d
					}),
					i = g.getSuggestionUrl({
						suggestion: f,
						state: d
					});
				
				return {
					item: f,
					itemValue: h,
					itemUrl: i,
					source: g
				}
			}
			function q(a, b) {
				return a === b || a.contains && a.contains(b)
			}
			function r(a) {
				var b = a.state;
				if (!1 === a.props.enableCompletion || !1 === b.isOpen || null === b.highlightedIndex || "stalled" === b.status) return null;
				var c = p({
					state: b
				}).itemValue;
				if (b.query.length > 0 && 0 === c.toLocaleLowerCase().indexOf(b.query.toLocaleLowerCase())) {
					var d = b.query + c.slice(b.query.length);
					return d === b.query ? null : d
				}
				return null
			}
			function s(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function t(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = null != arguments[b] ? arguments[b] : {};
					
					b % 2 ? s(Object(c), !0).forEach(function(b) {
						u(a, b, c[b])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : s(Object(c)).forEach(function(b) {
						Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
					})
				}
				return a
			}
			function u(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function v(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function w(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = null != arguments[b] ? arguments[b] : {};
					
					b % 2 ? v(Object(c), !0).forEach(function(b) {
						x(a, b, c[b])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : v(Object(c)).forEach(function(b) {
						Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
					})
				}
				return a
			}
			function x(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function y(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function z(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = null != arguments[b] ? arguments[b] : {};
					
					b % 2 ? y(Object(c), !0).forEach(function(b) {
						A(a, b, c[b])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : y(Object(c)).forEach(function(b) {
						Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
					})
				}
				return a
			}
			function A(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function B(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function C(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = null != arguments[b] ? arguments[b] : {};
					
					b % 2 ? B(Object(c), !0).forEach(function(b) {
						D(a, b, c[b])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : B(Object(c)).forEach(function(b) {
						Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
					})
				}
				return a
			}
			function D(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			var E = null;

			function F(a) {
				var b, c = a.query,
					d = a.store,
					e = a.props,
					f = a.setHighlightedIndex,
					g = a.setQuery,
					h = a.setSuggestions,
					i = a.setIsOpen,
					j = a.setStatus,
					k = a.setContext,
					l = a.nextState,
					m = void 0 === l ? {} : l;
				return e.onInput ? Promise.resolve(e.onInput({
					query: c,
					state: d.getState(),
					setHighlightedIndex: f,
					setQuery: g,
					setSuggestions: h,
					setIsOpen: i,
					setStatus: j,
					setContext: k
				})) : (E && clearTimeout(E), f(e.defaultHighlightedIndex), g(c), 0 === c.length && !1 === e.openOnFocus) ? (j("idle"), h(d.getState().suggestions.map(function(a) {
					return C(C({}, a), {}, {
						items: []
					})
				})), i(null !== (b = m.isOpen) && void 0 !== b ? b : e.shouldDropdownShow({
					state: d.getState()
				})), Promise.resolve()) : (j("loading"), E = e.environment.setTimeout(function() {
					j("stalled")
				}, e.stallThreshold), e.getSources({
					query: c,
					state: d.getState(),
					setHighlightedIndex: f,
					setQuery: g,
					setSuggestions: h,
					setIsOpen: i,
					setStatus: j,
					setContext: k
				}).then(function(a) {
					return j("loading"), Promise.all(a.map(function(a) {
						return Promise.resolve(a.getSuggestions({
							query: c,
							state: d.getState(),
							setHighlightedIndex: f,
							setQuery: g,
							setSuggestions: h,
							setIsOpen: i,
							setStatus: j,
							setContext: k
						})).then(function(b) {
							return {
								source: a,
								items: b
							}
						})
					})).then(function(a) {
						var b;
						j("idle"), h(a), i(null !== (b = m.isOpen) && void 0 !== b ? b : 0 === c.length && e.openOnFocus || e.shouldDropdownShow({
							state: d.getState()
						}))
					}).
					catch (function(a) {
						throw j("error"), a
					}).
					finally(function() {
						E && clearTimeout(E)
					})
				}))
			}
			function G(a, b) {
				if (null == a) return {};
				
				var c, d, e = H(a, b);
				if (Object.getOwnPropertySymbols) {
					var f = Object.getOwnPropertySymbols(a);
					for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
				}
				return e
			}
			function H(a, b) {
				if (null == a) return {};
				
				var c, d, e = {},
					f = Object.keys(a);
				for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
				return e
			}
			function I(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function J(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = null != arguments[b] ? arguments[b] : {};
					
					b % 2 ? I(Object(c), !0).forEach(function(b) {
						K(a, b, c[b])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : I(Object(c)).forEach(function(b) {
						Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
					})
				}
				return a
			}
			function K(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function L(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function M(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = null != arguments[b] ? arguments[b] : {};
					
					b % 2 ? L(Object(c), !0).forEach(function(b) {
						N(a, b, c[b])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : L(Object(c)).forEach(function(b) {
						Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
					})
				}
				return a
			}
			function N(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			var O = function(a, b, c) {
				switch (a.type) {
					case "setHighlightedIndex":
						return M(M({}, b), {}, {
							highlightedIndex: a.value
						});
					case "setQuery":
						return M(M({}, b), {}, {
							query: a.value
						});
					case "setSuggestions":
						return M(M({}, b), {}, {
							suggestions: a.value
						});
					case "setIsOpen":
						return M(M({}, b), {}, {
							isOpen: a.value
						});
					case "setStatus":
						return M(M({}, b), {}, {
							status: a.value
						});
					case "setContext":
						return M(M({}, b), {}, {
							context: M(M({}, b.context), a.value)
						});
					case "ArrowDown":
						return M(M({}, b), {}, {
							highlightedIndex: o(1, b.highlightedIndex, n(b), c.defaultHighlightedIndex)
						});
					case "ArrowUp":
						return M(M({}, b), {}, {
							highlightedIndex: o(-1, b.highlightedIndex, n(b), c.defaultHighlightedIndex)
						});
					case "Escape":
						if (b.isOpen) return M(M({}, b), {}, {
							isOpen: !1
						});
						
						return M(M({}, b), {}, {
							query: "",
							status: "idle",
							statusContext: {},
							
							suggestions: []
						});
					case "submit":
						return M(M({}, b), {}, {
							highlightedIndex: null,
							isOpen: !1,
							status: "idle",
							statusContext: {}
						});
					case "reset":
						return M(M({}, b), {}, {
							highlightedIndex: !0 === c.openOnFocus ? c.defaultHighlightedIndex : null,
							isOpen: c.openOnFocus,
							status: "idle",
							statusContext: {},
							
							query: ""
						});
					case "focus":
						return M(M({}, b), {}, {
							highlightedIndex: c.defaultHighlightedIndex,
							isOpen: c.openOnFocus || b.query.length > 0
						});
					case "blur":
						return M(M({}, b), {}, {
							isOpen: !1,
							highlightedIndex: null
						});
					case "mousemove":
						return M(M({}, b), {}, {
							highlightedIndex: a.value
						});
					case "mouseleave":
						return M(M({}, b), {}, {
							highlightedIndex: c.defaultHighlightedIndex
						});
					default:
						return b
				}
			};

			
			function P(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function Q(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function R() {
				return e.createElement("a", {
					href: "https://www.algolia.com/docsearch",
					target: "_blank",
					rel: "noopener noreferrer"
				}, e.createElement("span", {
					className: "DocSearch-Label"
				}, "Search by"), e.createElement("svg", {
					width: "77",
					height: "19"
				}, e.createElement("path", {
					d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",
					fill: "currentColor",
					fillRule: "evenodd"
				})))
			}
			function S() {
				return e.createElement(e.Fragment, null, e.createElement("div", {
					className: "DocSearch-Logo"
				}, e.createElement(R, null)), e.createElement("ul", {
					className: "DocSearch-Commands"
				}, e.createElement("li", null, e.createElement("span", {
					className: "DocSearch-Commands-Key"
				}, e.createElement(T, null, e.createElement("path", {
					d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"
				}))), e.createElement("span", {
					className: "DocSearch-Label"
				}, "to select")), e.createElement("li", null, e.createElement("span", {
					className: "DocSearch-Commands-Key"
				}, e.createElement(T, null, e.createElement("path", {
					d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
				}))), e.createElement("span", {
					className: "DocSearch-Commands-Key"
				}, e.createElement(T, null, e.createElement("path", {
					d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
				}))), e.createElement("span", {
					className: "DocSearch-Label"
				}, "to navigate")), e.createElement("li", null, e.createElement("span", {
					className: "DocSearch-Commands-Key"
				}, e.createElement(T, null, e.createElement("path", {
					d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
				}))), e.createElement("span", {
					className: "DocSearch-Label"
				}, "to close"))))
			}
			function T(a) {
				return e.createElement("svg", {
					width: "15",
					height: "15"
				}, e.createElement("g", {
					fill: "none",
					stroke: "currentColor",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: "1.2"
				}, a.children))
			}
			function U(a) {
				var b = a.hit,
					c = a.children;
				return e.createElement("a", {
					href: b.url
				}, c)
			}
			function V() {
				return e.createElement("svg", {
					width: "40",
					height: "40",
					viewBox: "0 0 20 20",
					fill: "none",
					fillRule: "evenodd",
					stroke: "currentColor",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}, e.createElement("path", {
					d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"
				}))
			}
			function W() {
				return e.createElement("div", {
					className: "DocSearch-ErrorScreen"
				}, e.createElement("div", {
					className: "DocSearch-Screen-Icon"
				}, e.createElement(V, null)), e.createElement("p", {
					className: "DocSearch-Title"
				}, "Unable to fetch results"), e.createElement("p", {
					className: "DocSearch-Help"
				}, "You might want to check your network connection."))
			}
			function X() {
				return e.createElement("svg", {
					width: "40",
					height: "40",
					viewBox: "0 0 20 20",
					fill: "none",
					fillRule: "evenodd",
					stroke: "currentColor",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}, e.createElement("path", {
					d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"
				}))
			}
			function Y(a, b) {
				(null == b || b > a.length) && (b = a.length);
				for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
				return d
			}
			function Z(a) {
				var b = a.state.context.searchSuggestions;
				return e.createElement("div", {
					className: "DocSearch-NoResults"
				}, e.createElement("div", {
					className: "DocSearch-Screen-Icon"
				}, e.createElement(X, null)), e.createElement("p", {
					className: "DocSearch-Title"
				}, "No results for \"", e.createElement("strong", null, a.state.query), "\""), b && b.length > 0 && e.createElement("div", {
					className: "DocSearch-NoResults-Prefill-List"
				}, e.createElement("p", {
					className: "DocSearch-Help"
				}, "Try searching for:"), e.createElement("ul", null, b.slice(0, 3).reduce(function(b, c) {
					var d;
					return [].concat(function(a) {
						if (Array.isArray(a)) return Y(a)
					}(d = b) ||
					function(a) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(a)) return Array.from(a)
					}(d) ||
					function(a, b) {
						if (a) {
							if ("string" == typeof a) return Y(a, b);
							var c = Object.prototype.toString.call(a).slice(8, -1);
							if ("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c) return Array.from(a);
							if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return Y(a, b)
						}
					}(d) ||
					function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}(), [e.createElement("li", {
						key: c
					}, e.createElement("button", {
						className: "DocSearch-Prefill",
						key: c,
						onClick: function() {
							a.setQuery(c.toLowerCase() + " "), a.refresh(), a.inputRef.current.focus()
						}
					}, c))])
				}, []))), e.createElement("p", {
					className: "DocSearch-Help"
				}, "Believe this query should return results?", " ", e.createElement("a", {
					href: "https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=[".concat(a.indexName, "]+Missing+results+for+query+\"").concat(a.state.query, "\""),
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Let us know"), "."))
			}
			function $(a) {
				switch (a.type) {
					case "lvl1":
						return e.createElement(_, null);
					case "content":
						return e.createElement(ba, null);
					default:
						return e.createElement(aa, null)
				}
			}
			function _() {
				return e.createElement("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				}, e.createElement("path", {
					d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinejoin: "round"
				}))
			}
			function aa() {
				return e.createElement("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				}, e.createElement("path", {
					d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}))
			}
			function ba() {
				return e.createElement("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				}, e.createElement("path", {
					d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinejoin: "round"
				}))
			}
			function ca() {
				return e.createElement("svg", {
					className: "DocSearch-Hit-Select-Icon",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				}, e.createElement("g", {
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}, e.createElement("path", {
					d: "M18 3v4c0 2-2 4-4 4H2"
				}), e.createElement("path", {
					d: "M8 17l-6-6 6-6"
				})))
			}
			function da(a, b) {
				var c = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var d = Object.getOwnPropertySymbols(a);
					b && (d = d.filter(function(b) {
						return Object.getOwnPropertyDescriptor(a, b).enumerable
					})), c.push.apply(c, d)
				}
				return c
			}
			function ea(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = null != arguments[b] ? arguments[b] : {};
					
					b % 2 ? da(Object(c), !0).forEach(function(b) {
						fa(a, b, c[b])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : da(Object(c)).forEach(function(b) {
						Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
					})
				}
				return a
			}
			function fa(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
			function ga(a, b) {
				return b.split(".").reduce(function(a, b) {
					return a && a[b]
				}, a)
			}
			function ha(a) {
				var b = a.hit,
					c = a.attribute,
					d = a.tagName,
					f = function(a, b) {
						if (null == a) return {};
						
						var c, d, e = function(a, b) {
							if (null == a) return {};
							
							var c, d, e = {},
								f = Object.keys(a);
							for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
							return e
						}(a, b);
						if (Object.getOwnPropertySymbols) {
							var f = Object.getOwnPropertySymbols(a);
							for (d = 0; d < f.length; d++) c = f[d], !(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
						}
						return e
					}(a, ["hit", "attribute", "tagName"]);
				return (0, e.createElement)(void 0 === d ? "span" : d, ea(ea({}, f), {}, {
					dangerouslySetInnerHTML: {
						__html: ga(b, "_snippetResult.".concat(c, ".value")) || ga(b, c)
					}
				}))
			}
			function ia(a, b) {
				return na(a) || ma(a, b) || ka(a, b) || ja()
			}
			function ja() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			function ka(a, b) {
				if (a) {
					if ("string" == typeof a) return la(a, b);
					var c = Object.prototype.toString.call(a).slice(8, -1);
					if ("Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c) return Array.from(a);
					if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return la(a, b)
				}
			}
			function la(a, b) {
				(null == b || b > a.length) && (b = a.length);
				for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
				return d
			}
			function ma(a, b) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(a)) {
					var c = [],
						d = !0,
						e = !1,
						f = void 0;
					try {
						for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
					} catch (a) {
						e = !0, f = a
					} finally {
						try {
							d || null == h.
							return ||h.
							return ()
						} finally {
							if (e) throw f
						}
					}
					return c
				}
			}
			function na(a) {
				if (Array.isArray(a)) return a
			}
			function oa() {
				return (oa = Object.assign ||
				function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = arguments[b];
						for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
					}
					return a
				}).apply(this, arguments)
			}
			function pa(a) {
				return a.suggestion && 0 !== a.suggestion.items.length ? e.createElement("section", {
					className: "DocSearch-Hits"
				}, e.createElement("div", {
					className: "DocSearch-Hit-source"
				}, a.title), e.createElement("ul", a.getMenuProps(), a.suggestion.items.map(function(b, c) {
					return e.createElement(qa, oa({
						key: [a.title, b.objectID].join(":"),
						item: b,
						index: c
					}, a))
				}))) : null
			}
			function qa(a) {
				var b = a.item,
					c = a.index,
					d = a.renderIcon,
					f = a.renderAction,
					g = a.getItemProps,
					h = a.onItemClick,
					i = a.suggestion,
					j = a.hitComponent,
					k = e.useState(!1),
					l = ia(k, 2),
					m = l[0],
					n = l[1],
					o = e.useState(!1),
					p = ia(o, 2),
					q = p[0],
					r = p[1],
					s = e.useRef(null);
				return e.createElement("li", oa({
					className: ["DocSearch-Hit", b.__docsearch_parent && "DocSearch-Hit--Child", m && "DocSearch-Hit--deleting", q && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "),
					onTransitionEnd: function() {
						s.current && s.current()
					}
				}, g({
					item: b,
					source: i.source,
					onClick: function() {
						h(b)
					}
				})), e.createElement(j, {
					hit: b
				}, e.createElement("div", {
					className: "DocSearch-Hit-Container"
				}, d({
					item: b,
					index: c
				}), b.hierarchy[b.type] && "lvl1" === b.type && e.createElement("div", {
					className: "DocSearch-Hit-content-wrapper"
				}, e.createElement(ha, {
					className: "DocSearch-Hit-title",
					hit: b,
					attribute: "hierarchy.lvl1"
				}), b.content && e.createElement(ha, {
					className: "DocSearch-Hit-path",
					hit: b,
					attribute: "content"
				})), b.hierarchy[b.type] && ("lvl2" === b.type || "lvl3" === b.type || "lvl4" === b.type || "lvl5" === b.type || "lvl6" === b.type) && e.createElement("div", {
					className: "DocSearch-Hit-content-wrapper"
				}, e.createElement(ha, {
					className: "DocSearch-Hit-title",
					hit: b,
					attribute: "hierarchy.".concat(b.type)
				}), e.createElement(ha, {
					className: "DocSearch-Hit-path",
					hit: b,
					attribute: "hierarchy.lvl1"
				})), "content" === b.type && e.createElement("div", {
					className: "DocSearch-Hit-content-wrapper"
				}, e.createElement(ha, {
					className: "DocSearch-Hit-title",
					hit: b,
					attribute: "content"
				}), e.createElement(ha, {
					className: "DocSearch-Hit-path",
					hit: b,
					attribute: "hierarchy.lvl1"
				})), f({
					item: b,
					runDeleteTransition: function(a) {
						n(!0), s.current = a
					},
					
					runFavoriteTransition: function(a) {
						r(!0), s.current = a
					}
				}))))
			}
			function ra() {
				return (ra = Object.assign ||
				function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = arguments[b];
						for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
					}
					return a
				}).apply(this, arguments)
			}
			function sa(a) {
				return e.createElement("div", {
					className: "DocSearch-Dropdown-Container"
				}, a.state.suggestions.map(function(b, c) {
					if (0 === b.items.length) return null;
					var d = b.items[0].hierarchy.lvl0;
					return e.createElement(pa, ra({}, a, {
						key: c,
						title: d,
						suggestion: b,
						renderIcon: function(a) {
							var c, d = a.item,
								f = a.index;
							return e.createElement(e.Fragment, null, d.__docsearch_parent && e.createElement("svg", {
								className: "DocSearch-Hit-Tree",
								viewBox: "0 0 24 54"
							}, e.createElement("g", {
								stroke: "currentColor",
								fill: "none",
								fillRule: "evenodd",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							}, d.__docsearch_parent !== (null === (c = b.items[f + 1]) || void 0 === c ? void 0 : c.__docsearch_parent) ? e.createElement("path", {
								d: "M8 6v21M20 27H8.3"
							}) : e.createElement("path", {
								d: "M8 6v42M20 27H8.3"
							}))), e.createElement("div", {
								className: "DocSearch-Hit-icon"
							}, e.createElement($, {
								type: d.type
							})))
						},
						
						renderAction: function() {
							return e.createElement("div", {
								className: "DocSearch-Hit-action"
							}, e.createElement(ca, null))
						}
					}))
				}), a.resultsFooterComponent && e.createElement("section", {
					className: "DocSearch-HitsFooter"
				}, e.createElement(a.resultsFooterComponent, {
					state: a.state
				})))
			}
			function ta() {
				return e.createElement("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				}, e.createElement("g", {
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}, e.createElement("path", {
					d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"
				}), e.createElement("path", {
					d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"
				})))
			}
			function ua() {
				return e.createElement("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				}, e.createElement("path", {
					d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinejoin: "round"
				}))
			}
			function va() {
				return e.createElement("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20"
				}, e.createElement("path", {
					d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}))
			}
			function wa() {
				return (wa = Object.assign ||
				function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = arguments[b];
						for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
					}
					return a
				}).apply(this, arguments)
			}
			function xa(a) {
				return "idle" === a.state.status && !1 === a.hasSuggestions ? a.disableUserPersonalization ? null : e.createElement("div", {
					className: "DocSearch-StartScreen"
				}, e.createElement("p", {
					className: "DocSearch-Help"
				}, "No recent searches")) : !1 === a.hasSuggestions ? null : e.createElement("div", {
					className: "DocSearch-Dropdown-Container"
				}, e.createElement(pa, wa({}, a, {
					title: "Recent",
					suggestion: a.state.suggestions[0],
					renderIcon: function() {
						return e.createElement("div", {
							className: "DocSearch-Hit-icon"
						}, e.createElement(ta, null))
					},
					
					renderAction: function(b) {
						var c = b.item,
							d = b.runFavoriteTransition,
							f = b.runDeleteTransition;
						return e.createElement(e.Fragment, null, e.createElement("div", {
							className: "DocSearch-Hit-action"
						}, e.createElement("button", {
							"data-cy": "fav-recent",
							className: "DocSearch-Hit-action-button",
							title: "Save this search",
							onClick: function(b) {
								b.preventDefault(), b.stopPropagation(), d(function() {
									a.favoriteSearches.add(c), a.recentSearches.remove(c), a.refresh()
								})
							}
						}, e.createElement(ua, null))), e.createElement("div", {
							className: "DocSearch-Hit-action"
						}, e.createElement("button", {
							"data-cy": "remove-recent",
							className: "DocSearch-Hit-action-button",
							title: "Remove this search from history",
							onClick: function(b) {
								b.preventDefault(), b.stopPropagation(), f(function() {
									a.recentSearches.remove(c), a.refresh()
								})
							}
						}, e.createElement(va, null))))
					}
				})), e.createElement(pa, wa({}, a, {
					title: "Favorites",
					suggestion: a.state.suggestions[1],
					renderIcon: function() {
						return e.createElement("div", {
							className: "DocSearch-Hit-icon"
						}, e.createElement(ua, null))
					},
					
					renderAction: function(b) {
						var c = b.item,
							d = b.runDeleteTransition;
						return e.createElement("div", {
							className: "DocSearch-Hit-action"
						}, e.createElement("button", {
							"data-cy": "remove-fav",
							className: "DocSearch-Hit-action-button",
							title: "Remove this search from favorites",
							onClick: function(b) {
								b.preventDefault(), b.stopPropagation(), d(function() {
									a.favoriteSearches.remove(c), a.refresh()
								})
							}
						}, e.createElement(va, null)))
					}
				})))
			}
			function ya() {
				return (ya = Object.assign ||
				function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = arguments[b];
						for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
					}
					return a
				}).apply(this, arguments)
			}
			var za = e.memo(function(a) {
				if ("error" === a.state.status) return e.createElement(W, null);
				var b = a.state.suggestions.some(function(a) {
					return a.items.length > 0
				});
				
				return a.state.query ? !1 === b ? e.createElement(Z, a) : e.createElement(sa, a) : e.createElement(xa, ya({}, a, {
					hasSuggestions: b
				}))
			}, function(a, b) {
				return "loading" === b.state.status || "stalled" === b.state.status
			});

			
			function Aa() {
				return e.createElement("svg", {
					viewBox: "0 0 38 38",
					stroke: "currentColor",
					strokeOpacity: ".5"
				}, e.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, e.createElement("g", {
					transform: "translate(1 1)",
					strokeWidth: "2"
				}, e.createElement("circle", {
					strokeOpacity: ".3",
					cx: "18",
					cy: "18",
					r: "18"
				}), e.createElement("path", {
					d: "M36 18c0-9.94-8.06-18-18-18"
				}, e.createElement("animateTransform", {
					attributeName: "transform",
					type: "rotate",
					from: "0 18 18",
					to: "360 18 18",
					dur: "1s",
					repeatCount: "indefinite"
				})))))
			}
			function Ba() {
				return e.createElement("svg", {
					width: "20",
					height: "20",
					className: "DocSearch-Search-Icon",
					viewBox: "0 0 20 20"
				}, e.createElement("path", {
					d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
					stroke: "currentColor",
					fill: "none",
					fillRule: "evenodd",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}))
			}
			function Ca() {
				return (Ca = Object.assign ||
				function(a) {
					for (var b = 1; b < arguments.length; b++) {
						var c = arguments[b];
						for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
					}
					return a
				}).apply(this, arguments)
			}
			function Da(a) {
				var b = a.getFormProps({
					inputElement: a.inputRef.current
				}).onReset;
				return e.useEffect(function() {
					a.autoFocus && a.inputRef.current && a.inputRef.current.focus()
				}, [a.autoFocus, a.inputRef]), e.createElement(e.Fragment, null, e.createElement("form", {
					action: "",
					role: "search",
					noValidate: !0,
					className: "DocSearch-Form",
					onSubmit: function(a) {
						a.preventDefault()
					},
					
					onReset: b
				}, e.createElement("label", Ca({
					className: "DocSearch-MagnifierLabel"
				}, a.getLabelProps()), e.createElement(Ba, null)), e.createElement("div", {
					className: "DocSearch-LoadingIndicator"
				}, e.createElement(Aa, null)), e.createElement("input", Ca({
					className: "DocSearch-Input",
					ref: a.inputRef
				}, a.getInputProps({
					inputElement: a.inputRef.current,
					type: "search",
					autoFocus: a.autoFocus,
					maxLength: 64
				}))), e.createElement("button", {
					type: "reset",
					title: "Clear the query",
					className: "DocSearch-Reset",
					hidden: !a.state.query,
					onClick: b
				}, e.createElement(va, null))), e.createElement("button", {
					className: "DocSearch-Cancel",
					onClick: a.onClose
				}, "Cancel"))
			}
			function Ea(a) {
				var b, c = a.key,
					d = a.limit,
					e = void 0 === d ? 5 : d,
					f = (b = c, !1 ===
					function() {
						try {
							return localStorage.setItem("__TEST_KEY__", ""), localStorage.removeItem("__TEST_KEY__"), !0
						} catch (a) {
							return !1
						}
					}() ? {
						setItem: function() {},
						
						getItem: function() {
							return []
						}
					} : {
						setItem: function(a) {
							return window.localStorage.setItem(b, JSON.stringify(a))
						},
						
						getItem: function() {
							var a = window.localStorage.getItem(b);
							return a ? JSON.parse(a) : []
						}
					}),
					g = f.getItem().slice(0, e);
				return {
					add: function(a) {
						var b = a,
							c = b._highlightResult,
							d = b._snippetResult,
							h = function(a, b) {
								if (null == a) return {};
								
								var c, d, e = function(a, b) {
									if (null == a) return {};
									
									var c, d, e = {},
										f = Object.keys(a);
									for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
									return e
								}(a, b);
								if (Object.getOwnPropertySymbols) {
									var f = Object.getOwnPropertySymbols(a);
									for (d = 0; d < f.length; d++) c = f[d], !(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
								}
								return e
							}(b, ["_highlightResult", "_snippetResult"]),
							i = g.findIndex(function(a) {
								return a.objectID === h.objectID
							});
						
						i > -1 && g.splice(i, 1), g.unshift(h), g = g.slice(0, e), f.setItem(g)
					},
					
					remove: function(a) {
						g = g.filter(function(b) {
							return b.objectID !== a.objectID
						}), f.setItem(g)
					},
					
					getAll: function() {
						return g
					}
				}
			}
			function Fa(a) {
				const b = [...a.caches], c = b.shift();
				
				return void 0 === c ? Ga() : {
					get(d, e, f = {
						miss: () = > Promise.resolve()
					}) {
						return c.get(d, e, f).
						catch (() = > Fa({
							caches: b
						}).get(d, e, f))
					}, set(g, h) {
						return c.set(g, h).
						catch (() = > Fa({
							caches: b
						}).set(g, h))
					}, delete(i) {
						return c.delete(i).
						catch (() = > Fa({
							caches: b
						}).delete(i))
					}, clear() {
						return c.clear().
						catch (() = > Fa({
							caches: b
						}).clear())
					}
				}
			}
			function Ga() {
				return {
					get(a, b, c = {
						miss: () = > Promise.resolve()
					}) {
						const d = b();
						
						return d.then(a = > Promise.all([a, c.miss(a)])).then(([a]) = > a)
					}, set(e, f) {
						return Promise.resolve(f)
					}, delete(g) {
						return Promise.resolve()
					}, clear() {
						return Promise.resolve()
					}
				}
			}
			function Ha(a = {
				serializable: !0
			}) {
				let b = {};
				
				return {
					get(c, d, e = {
						miss: () = > Promise.resolve()
					}) {
						const f = JSON.stringify(c);
						if (f in b) return Promise.resolve(a.serializable ? JSON.parse(b[f]) : b[f]);
						const g = d(), h = e && e.miss || (() = > Promise.resolve());
						return g.then(a = > h(a)).then(() = > g)
					}, set(i, j) {
						return b[JSON.stringify(i)] = a.serializable ? JSON.stringify(j) : j, Promise.resolve(j)
					}, delete(k) {
						return delete b[JSON.stringify(k)], Promise.resolve()
					}, clear() {
						return b = {}, Promise.resolve()
					}
				}
			}
			function Ia(a, b) {
				return b && Object.keys(b).forEach(c = > {
					a[c] = b[c](a)
				}), a
			}
			function Ja(a, ...b) {
				let c = 0;
				return a.replace(/%s/g, () = > encodeURIComponent(b[c++]))
			}
			function Ka(a, b) {
				const c = a || {}, d = c.data || {};
				
				return Object.keys(c).forEach(a = > {
					-1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(a) && (d[a] = c[a])
				}), {
					data: Object.entries(d).length > 0 ? d : void 0,
					timeout: c.timeout || b,
					headers: c.headers || {},
					
					queryParameters: c.queryParameters || {},
					
					cacheable: c.cacheable
				}
			}
			function La(a, b = 1) {
				return {...a, status: b,
					lastUpdate: Date.now()
				}
			}
			function Ma(a) {
				return "string" == typeof a ? {
					protocol: "https",
					url: a,
					accept: 3
				} : {
					protocol: a.protocol || "https",
					url: a.url,
					accept: a.accept || 3
				}
			}
			const Na = ({
				isTimedOut: a,
				status: b
			}) = > !a && 0 == ~~b, Oa = a = > {
				const b = a.status, c = a.isTimedOut;
				return c || Na(a) || 2 != ~~ (b / 100) && 4 != ~~ (b / 100)
			}, Pa = ({
				status: a
			}) = > 2 == ~~ (a / 100), Qa = (a, b) = > Oa(a) ? b.onRetry(a) : Pa(a) ? b.onSuccess(a) : b.onFail(a);

			function Ra(a, b, c, d) {
				var e, f;
				const g = [], h = Wa(c, d), i = Xa(a, d), j = c.method, k = "GET" !== c.method ? {} : {...c.data, ...d.data
				}, l = {
					"x-algolia-agent": a.userAgent.value,
					...a.queryParameters,
					...k,
					...d.queryParameters
				};
				
				let m = 0;
				const n = (b, e) = > {
					const f = b.pop();
					
					if (void 0 === f) throw ab(Ya(g));
					const k = {
						data: h,
						headers: i,
						method: j,
						url: Ua(f, c.path, l),
						connectTimeout: e(m, a.timeouts.connect),
						responseTimeout: e(m, d.timeout)
					}, o = a = > {
						const c = {
							request: k,
							response: a,
							host: f,
							triesLeft: b.length
						};
						
						return g.push(c), c
					}, p = {
						onSuccess: a = > Sa(a),
						onRetry(q) {
							const r = o(q);
							return q.isTimedOut && m++, Promise.all([a.logger.info("Retryable failure", Za(r)), a.hostsCache.set(f, La(f, q.isTimedOut ? 3 : 2)), ]).then(() = > n(b, e))
						},
						
						onFail(s) {
							throw o(s), Ta(s, Ya(g))
						}
					};
					
					return a.requester.send(k).then(a = > Qa(a, p))
				};
				
				return (e = a.hostsCache, f = b, Promise.all(f.map(a = > e.get(a, () = > Promise.resolve(La(a))))).then(a = > {
					const b = a.filter(a = > {
						var b;
						return 1 === (b = a).status || Date.now() - b.lastUpdate > 120e3
					}), c = a.filter(a = > {
						var b;
						return 3 === (b = a).status && Date.now() - b.lastUpdate <= 120e3
					}), d = [...b, ...c], e = d.length > 0 ? d.map(a = > Ma(a)) : f;
					return {
						getTimeout(g, h) {
							const i = 0 === c.length && 0 === g ? 1 : c.length + 3 + g;
							return i * h
						}, statelessHosts: e
					}
				})).then(a = > n([...a.statelessHosts].reverse(), a.getTimeout))
			}
			function Sa(a) {
				try {
					return JSON.parse(a.content)
				} catch (b) {
					throw _a(b.message, a)
				}
			}
			function Ta({
				content: a,
				status: b
			}, c) {
				let d = a;
				try {
					d = JSON.parse(a).message
				} catch (a) {}
				return $a(d, b, c)
			}
			function Ua(a, b, c) {
				const d = Va(c);
				let e = `$ {
					a.protocol
				}: //${a.url}/${"/"===b.charAt(0)?b.substr(1):b}`;return d.length&&(e+=`?${d}`),e}function Va(a){const b=a=>"[object Object]"===Object.prototype.toString.call(a)||"[object Array]"===Object.prototype.toString.call(a);return Object.keys(a).map(c=>Ja("%s=%s",c,b(a[c])?JSON.stringify(a[c]):a[c])).join("&")}function Wa(a,b){if("GET"!==a.method&&(void 0!==a.data|| void 0!==b.data)){const c=Array.isArray(a.data)?a.data:{...a.data,...b.data};return JSON.stringify(c)}}function Xa(a,b){const c={...a.headers,...b.headers},d={};return Object.keys(c).forEach(a=>{const b=c[a];d[a.toLowerCase()]=b}),d}function Ya(a){return a.map(a=>Za(a))}function Za(a){const b=a.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return{...a,request:{...a.request,headers:{...a.request.headers,...b}}}}function $a(a,b,c){return{name:"ApiError",message:a,status:b,transporterStackTrace:c}}function _a(a,b){return{name:"DeserializationError",message:a,response:b}}function ab(a){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:a}}const bb=a=>{const b=a.appId,c=function(a,b,c){const d={"x-algolia-api-key":c,"x-algolia-application-id":b};return{headers(){return 1===a?d:{}},queryParameters(){return 0===a?d:{}}}}(void 0!==a.authMode?a.authMode:1,b,a.apiKey),d=function(a){const{hostsCache:b,logger:c,requester:d,requestsCache:e,responsesCache:f,timeouts:g,userAgent:h,hosts:i,queryParameters:j,headers:k}=a,l={hostsCache:b,logger:c,requester:d,requestsCache:e,responsesCache:f,timeouts:g,userAgent:h,headers:k,queryParameters:j,hosts:i.map(a=>Ma(a)),read(m,n){const o=Ka(n,l.timeouts.read),p=()=>Ra(l,l.hosts.filter(a=>(1&a.accept)!=0),m,o),q=void 0!==o.cacheable?o.cacheable:m.cacheable;if(!0!==q)return p();const r={request:m,mappedRequestOptions:o,transporter:{queryParameters:l.queryParameters,headers:l.headers}};return l.responsesCache.get(r,()=>l.requestsCache.get(r,()=>l.requestsCache.set(r,p()).then(a=>Promise.all([l.requestsCache.delete(r),a]),a=>Promise.all([l.requestsCache.delete(r),Promise.reject(a)])).then(([a,b])=>b)),{miss:a=>l.responsesCache.set(r,a)})},write(s,t){return Ra(l,l.hosts.filter(a=>(2&a.accept)!=0),s,Ka(t,l.timeouts.write))}};return l}({hosts:[{url:`${b}-dsn.algolia.net`,accept:1},{url:`${b}.algolia.net`,accept:2},].concat(function(a){let b=a.length-1;for(;b>0;b--){const c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a}([{url:`${b}-1.algolianet.com`},{url:`${b}-2.algolianet.com`},{url:`${b}-3.algolianet.com`},])),...a,headers:{...c.headers(),"content-type":"application/x-www-form-urlencoded",...a.headers},queryParameters:{...c.queryParameters(),...a.queryParameters}}),e={transporter:d,appId:b,addAlgoliaAgent(f,g){d.userAgent.add({segment:f,version:g})},clearCache(){return Promise.all([d.requestsCache.clear(),d.responsesCache.clear(),]).then(()=>void 0)}};return Ia(e,a.methods)},cb=a=>(b,c={})=>{const d={transporter:a.transporter,appId:a.appId,indexName:b};return Ia(d,c.methods)},db=a=>(b,c)=>{const d=b.map(a=>({...a,params:Va(a.params||{})}));return a.transporter.read({method:"POST",path:"1/indexes/*/queries",data:{requests:d},cacheable:!0},c)},eb=a=>(b,c)=>Promise.all(b.map(b=>{const{facetName:d,facetQuery:e,...f}=b.params;return cb(a)(b.indexName,{methods:{searchForFacetValues:hb}}).searchForFacetValues(d,e,{...c,...f})})),fb=a=>(b,c,d)=>a.transporter.read({method:"POST",path:Ja("1/answers/%s/prediction",a.indexName),data:{query:b,queryLanguages:c},cacheable:!0},d),gb=a=>(b,c)=>a.transporter.read({method:"POST",path:Ja("1/indexes/%s/query",a.indexName),data:{query:b},cacheable:!0},c),hb=a=>(b,c,d)=>a.transporter.read({method:"POST",path:Ja("1/indexes/%s/facets/%s/query",a.indexName,b),data:{facetQuery:c},cacheable:!0},d);function ib(a,b,c){var d;const e={appId:a,apiKey:b,timeouts:{connect:1,read:2,write:30},requester:{send(f){return new Promise(a=>{const b=new XMLHttpRequest();b.open(f.method,f.url,!0),Object.keys(f.headers).forEach(a=>b.setRequestHeader(a,f.headers[a]));const c=(c,d)=>setTimeout(()=>{b.abort(),a({status:0,content:d,isTimedOut:!0})},1000*c),d=c(f.connectTimeout,"Connection timeout");let e;b.onreadystatechange=()=>{b.readyState>b.OPENED&& void 0===e&&(clearTimeout(d),e=c(f.responseTimeout,"Socket timeout"))},b.onerror=()=>{0===b.status&&(clearTimeout(d),clearTimeout(e),a({content:b.responseText||"Network request failed",status:b.status,isTimedOut:!1}))},b.onload=()=>{clearTimeout(d),clearTimeout(e),a({content:b.responseText,status:b.status,isTimedOut:!1})},b.send(f.data)})}},logger:(d=3,{debug(g,h){return 1>=d&&console.debug(g,h),Promise.resolve()},info(i,j){return 2>=d&&console.info(i,j),Promise.resolve()},error(k,l){return console.error(k,l),Promise.resolve()}}),responsesCache:Ha(),requestsCache:Ha({serializable:!1}),hostsCache:Fa({caches:[function(a){const b=`algoliasearch-client-js-${a.key}`;let c;const d=()=>(void 0===c&&(c=a.localStorage||window.localStorage),c),e=()=>JSON.parse(d().getItem(b)||"{}");return{get(f,g,h={miss:()=>Promise.resolve()}){return Promise.resolve().then(()=>{const a=JSON.stringify(f),b=e()[a];return Promise.all([b||g(),void 0!==b])}).then(([a,b])=>Promise.all([a,b||h.miss(a)])).then(([a])=>a)},set(i,j){return Promise.resolve().then(()=>{const a=e();return a[JSON.stringify(i)]=j,d().setItem(b,JSON.stringify(a)),j})},delete(k){return Promise.resolve().then(()=>{const a=e();delete a[JSON.stringify(k)],d().setItem(b,JSON.stringify(a))})},clear(){return Promise.resolve().then(()=>{d().removeItem(b)})}}}({key:`4.9.2-${a}`}),Ha(),]}),userAgent:(function(a){const b={value:"Algolia for JavaScript (4.9.2)",add(c){const d=`; ${c.segment}${void 0!==c.version?` (${c.version})`:""}`;return -1===b.value.indexOf(d)&&(b.value=`${b.value}${d}`),b}};return b})("4.9.2").add({segment:"Browser",version:"lite"}),authMode:0};return bb({...e,...c,methods:{search:db,searchForFacetValues:eb,multipleQueries:db,multipleSearchForFacetValues:eb,initIndex:a=>b=>cb(a)(b,{methods:{search:gb,searchForFacetValues:hb,findAnswers:fb}})}})}ib.version="4.9.2";var jb=ib;function kb(){}function lb(a){return a}function mb(a,b){return a.reduce(function(a,c){var d=b(c);return a.hasOwnProperty(d)||(a[d]=[]),a[d].length<5&&a[d].push(c),a},{})}function nb(){return(nb=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function ob(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function pb(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?ob(Object(c),!0).forEach(function(b){qb(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):ob(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function qb(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function rb(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function sb(a){var b,c,d,f,g,h,i,o,s,u,v=a.appId,x=a.apiKey,y=a.indexName,A=a.placeholder,B=void 0===A?"Search docs":A,C=a.searchParameters,D=a.onClose,E=void 0===D?kb:D,H=a.transformItems,I=void 0===H?lb:H,K=a.hitComponent,L=a.resultsFooterComponent,M=a.navigator,N=a.initialScrollY,R=void 0===N?0:N,T=a.transformSearchClient,V=a.disableUserPersonalization,W=void 0!==V&&V,X=a.initialQuery,Y=e.useState({query:"",suggestions:[]}),Z=function(a){if(Array.isArray(a))return a}(b=Y)||function(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}}(b,2)||function(a,b){if(a){if("string"==typeof a)return rb(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return rb(a,b)}}(b,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),$=Z[0],_=Z[1],aa=e.useRef(null),ba=e.useRef(null),ca=e.useRef(null),da=e.useRef(null),ea=e.useRef(10),fa=e.useRef((void 0===X?"":X)||"undefined"!=typeof window?window.getSelection().toString().slice(0,64):"").current,ga=(c=void 0===v?"BH4D9OD16A":v,d=x,f=void 0===T?lb:T,e.useMemo(function(){var a=jb(c,d);return a.addAlgoliaAgent("docsearch","1.0.0-alpha.27"),!1===/docsearch.js \(.*\)/.test(a.transporter.userAgent.value)&&a.addAlgoliaAgent("docsearch-react","1.0.0-alpha.27"),f(a)},[c,d,f])),ha=e.useRef(Ea({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(y),limit:10})).current,ia=e.useRef(Ea({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(y),limit:0===ha.getAll().length?7:4})).current,ja=e.useCallback(function(a){if(!W){var b="content"===a.type?a.__docsearch_parent:a;b&& -1===ha.getAll().findIndex(function(a){return a.objectID===b.objectID})&&ia.add(b)}},[ha,ia,W]),ka=e.useMemo(function(){return(function(a){var b,c,d,e,f,g,h,i,o,s,u,v,x=function(a){var b,c="undefined"!=typeof window?window:{};return z(z({openOnFocus:!1,placeholder:"",autoFocus:!1,defaultHighlightedIndex:null,enableCompletion:!1,stallThreshold:300,environment:c,shouldDropdownShow:function(a){return n(a.state)>0},onStateChange:l,onSubmit:l},a),{},{id:null!==(b=a.id)&& void 0!==b?b:"autocomplete-".concat(m++),initialState:z({highlightedIndex:null,query:"",completion:null,suggestions:[],isOpen:!1,status:"idle",statusContext:{},context:{}},a.initialState),getSources:function(a){return function(b){return Promise.resolve(a(b)).then(function(a){return Promise.all(a.filter(Boolean).map(function(a){return Promise.resolve(function(a){return(function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?j(Object(c),!0).forEach(function(b){k(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):j(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a})({getInputValue:function(a){return a.state.query},getSuggestionUrl:function(){},onSelect:function(a){(0,a.setIsOpen)(!1)},onHighlight:l},a)}(a))}))})}}(a.getSources),navigator:z({navigate:function(a){var b=a.suggestionUrl;c.location.assign(b)},navigateNewTab:function(a){var b=a.suggestionUrl,d=c.open(b,"_blank","noopener");d&&d.focus()},navigateNewWindow:function(a){var b=a.suggestionUrl;c.open(b,"_blank","noopener")}},a.navigator)})}(a),y=(b=O,{state:(c=x).initialState,getState:function(){return this.state},send:function(a,d){var e,f;e=b({type:a,value:d},this.state,c),f=c,this.state=t(t({},e),{},{completion:r({state:e,props:f})}),c.onStateChange({state:this.state})}}),A=(d=y,{setHighlightedIndex:function(a){d.send("setHighlightedIndex",a)},setQuery:function(a){d.send("setQuery",a)},setSuggestions:function(a){var b=0,c=a.map(function(a){return w(w({},a),{},{items:a.items.map(function(a){return w(w({},a),{},{__autocomplete_id:b++})})})});d.send("setSuggestions",c)},setIsOpen:function(a){d.send("setIsOpen",a)},setStatus:function(a){d.send("setStatus",a)},setContext:function(a){d.send("setContext",a)}}),B=A.setHighlightedIndex,C=A.setQuery,D=A.setSuggestions,E=A.setIsOpen,H=A.setStatus,I=A.setContext,K=(f=(e={store:y,props:x,setHighlightedIndex:B,setQuery:C,setSuggestions:D,setIsOpen:E,setStatus:H,setContext:I}).store,g=e.props,h=e.setHighlightedIndex,i=e.setQuery,o=e.setSuggestions,s=e.setIsOpen,u=e.setStatus,v=e.setContext,{getEnvironmentProps:function(a){return{onTouchStart:function(b){!1!==f.getState().isOpen&&b.target!==a.inputElement&& !1===[a.searchBoxElement,a.dropdownElement].some(function(a){return a&&(q(a,b.target)||q(a,g.environment.document.activeElement))})&&f.send("blur",null)},onTouchMove:function(b){!1!==f.getState().isOpen&&a.inputElement===g.environment.document.activeElement&&b.target!==a.inputElement&&a.inputElement.blur()}}},getRootProps:function(a){return J({role:"combobox","aria-expanded":f.getState().isOpen,"aria-haspopup":"listbox","aria-owns":f.getState().isOpen?"".concat(g.id,"-menu"):void 0,"aria-labelledby":"".concat(g.id,"-label")},a)},getFormProps:function(a){return a.inputElement,J({action:"",noValidate:!0,role:"search",onSubmit:function(b){b.preventDefault(),g.onSubmit({state:f.getState(),setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v,event:b}),f.send("submit",null),a.inputElement&&a.inputElement.blur()},onReset:function(b){b.preventDefault(),g.openOnFocus&&F({query:"",store:f,props:g,setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v}),f.send("reset",null),a.inputElement&&a.inputElement.focus()}},G(a,["inputElement"]))},getLabelProps:function(a){return J({htmlFor:"".concat(g.id,"-input"),id:"".concat(g.id,"-label")},a)},getInputProps:function(a){function b(){(g.openOnFocus||f.getState().query.length>0)&&F({query:f.getState().query,store:f,props:g,setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v}),f.send("focus",null)}var c="ontouchstart"in g.environment,d=a||{},e=d.inputElement,j=d.maxLength,k=void 0===j?512:j,l=G(d,["inputElement","maxLength"]);return J({"aria-autocomplete":g.enableCompletion?"both":"list","aria-activedescendant":f.getState().isOpen&&null!==f.getState().highlightedIndex?"".concat(g.id,"-item-").concat(f.getState().highlightedIndex):void 0,"aria-controls":f.getState().isOpen?"".concat(g.id,"-menu"):void 0,"aria-labelledby":"".concat(g.id,"-label"),value:f.getState().query,id:"".concat(g.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:g.autoFocus,placeholder:g.placeholder,maxLength:k,type:"search",onChange:function(a){F({query:a.currentTarget.value.slice(0,k),store:f,props:g,setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v})},onKeyDown:function(a){!function(a){var b=a.event,c=a.store,d=a.props,e=a.setHighlightedIndex,f=a.setQuery,g=a.setSuggestions,h=a.setIsOpen,i=a.setStatus,j=a.setContext;if("ArrowUp"===b.key||"ArrowDown"===b.key){b.preventDefault(),c.send(b.key,{shiftKey:b.shiftKey});var k=d.environment.document.getElementById("".concat(d.id,"-item-").concat(c.getState().highlightedIndex));null==k||k.scrollIntoView(!1);var l=p({state:c.getState()});if(null!==c.getState().highlightedIndex&&l){var m=l.item,n=l.itemValue,o=l.itemUrl,q=l.source;q.onHighlight({suggestion:m,suggestionValue:n,suggestionUrl:o,source:q,state:c.getState(),setHighlightedIndex:e,setQuery:f,setSuggestions:g,setIsOpen:h,setStatus:i,setContext:j,event:b})}}else if(("Tab"===b.key||"ArrowRight"===b.key&&b.target.selectionStart===c.getState().query.length)&&d.enableCompletion&&null!==c.getState().highlightedIndex){b.preventDefault();var s=r({state:c.getState(),props:d});s&&F({query:s,store:c,props:d,setHighlightedIndex:e,setQuery:f,setSuggestions:g,setIsOpen:h,setStatus:i,setContext:j})}else if("Escape"===b.key)b.preventDefault(),c.send(b.key,null);else if("Enter"===b.key){if(null===c.getState().highlightedIndex||c.getState().suggestions.every(function(a){return 0===a.items.length}))return;b.preventDefault();var t=p({state:c.getState()}),u=t.item,v=t.itemValue,w=t.itemUrl,x=t.source;b.metaKey||b.ctrlKey?void 0!==w&&d.navigator.navigateNewTab({suggestionUrl:w,suggestion:u,state:c.getState()}):b.shiftKey?void 0!==w&&d.navigator.navigateNewWindow({suggestionUrl:w,suggestion:u,state:c.getState()}):b.altKey||(F({query:v,store:c,props:d,setHighlightedIndex:e,setQuery:f,setSuggestions:g,setIsOpen:h,setStatus:i,setContext:j,nextState:{isOpen:!1}}).then(function(){x.onSelect({suggestion:u,suggestionValue:v,suggestionUrl:w,source:x,state:c.getState(),setHighlightedIndex:e,setQuery:f,setSuggestions:g,setIsOpen:h,setStatus:i,setContext:j,event:b})}),void 0!==w&&d.navigator.navigate({suggestionUrl:w,suggestion:u,state:c.getState()}))}}({event:a,store:f,props:g,setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v})},onFocus:b,onBlur:function(){c||f.send("blur",null)},onClick:function(){a.inputElement!==g.environment.document.activeElement||f.getState().isOpen||b()}},l)},getDropdownProps:function(a){return J({onMouseDown:function(a){a.preventDefault()},onMouseLeave:function(){f.send("mouseleave",null)}},a)},getMenuProps:function(a){return J({role:"listbox","aria-labelledby":"".concat(g.id,"-label"),id:"".concat(g.id,"-menu")},a)},getItemProps:function(a){var b=a.item,c=a.source,d=G(a,["item","source"]);return J({id:"".concat(g.id,"-item-").concat(b.__autocomplete_id),role:"option","aria-selected":f.getState().highlightedIndex===b.__autocomplete_id,onMouseMove:function(a){if(b.__autocomplete_id!==f.getState().highlightedIndex){f.send("mousemove",b.__autocomplete_id);var c=p({state:f.getState()});if(null!==f.getState().highlightedIndex&&c){var d=c.item,e=c.itemValue,g=c.itemUrl,j=c.source;j.onHighlight({suggestion:d,suggestionValue:e,suggestionUrl:g,source:j,state:f.getState(),setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v,event:a})}}},onMouseDown:function(a){a.preventDefault()},onClick:function(a){if(void 0===c.getSuggestionUrl({suggestion:b,state:f.getState()})&&1!==(d=a).button&&!d.altKey&&!d.ctrlKey&&!d.metaKey&&!d.shiftKey){var d,e=c.getInputValue({suggestion:b,state:f.getState()});F({query:e,store:f,props:g,setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v,nextState:{isOpen:!1}}).then(function(){c.onSelect({suggestion:b,suggestionValue:e,suggestionUrl:c.getSuggestionUrl({suggestion:b,state:f.getState()}),source:c,state:f.getState(),setHighlightedIndex:h,setQuery:i,setSuggestions:o,setIsOpen:s,setStatus:u,setContext:v,event:a})})}}},d)}}),L=K.getEnvironmentProps,M=K.getRootProps,N=K.getFormProps,P=K.getLabelProps,Q=K.getInputProps,R=K.getDropdownProps,S=K.getMenuProps,T=K.getItemProps;return{setHighlightedIndex:B,setQuery:C,setSuggestions:D,setIsOpen:E,setStatus:H,setContext:I,getEnvironmentProps:L,getRootProps:M,getFormProps:N,getInputProps:Q,getLabelProps:P,getDropdownProps:R,getMenuProps:S,getItemProps:T,refresh:function(){return F({query:y.getState().query,store:y,props:x,setHighlightedIndex:B,setQuery:C,setSuggestions:D,setIsOpen:E,setStatus:H,setContext:I})}}})({id:"docsearch",defaultHighlightedIndex:0,placeholder:B,openOnFocus:!0,initialState:{query:fa,context:{searchSuggestions:[]}},navigator:M,onStateChange:function(a){_(a.state)},getSources:function(a){var b,c=a.query,d=a.state,e=a.setContext,f=a.setStatus;return c?((b={searchClient:ga,queries:[{indexName:y,query:c,params:pb({attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(ea.current),"hierarchy.lvl2:".concat(ea.current),"hierarchy.lvl3:".concat(ea.current),"hierarchy.lvl4:".concat(ea.current),"hierarchy.lvl5:".concat(ea.current),"hierarchy.lvl6:".concat(ea.current),"content:".concat(ea.current)],snippetEllipsisText:"…",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20},C)}]}).searchClient,b.queries,(function(a){var b=a.searchClient,c=a.queries;return"function"==typeof b.addAlgoliaAgent&&b.addAlgoliaAgent("autocomplete-core","1.0.0-alpha.28"),b.search(c.map(function(a){var b=a.indexName,c=a.query,d=a.params;return{indexName:b,query:c,params:(function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?P(Object(c),!0).forEach(function(b){Q(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):P(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a})({hitsPerPage:5,highlightPreTag:"<mark>",highlightPostTag:"</mark>"},d)}}))})({searchClient:b.searchClient,queries:b.queries}).then(function(a){return a.results})).catch(function(a){throw"RetryError"===a.name&&f("error"),a}).then(function(a){var b=a[0].hits,c=a[0].nbHits,f=mb(b,function(a){return a.hierarchy.lvl0});return d.context.searchSuggestions.length<Object.keys(f).length&&e({searchSuggestions:Object.keys(f)}),e({nbHits:c}),Object.values(f).map(function(a){return{onSelect:function(a){ja(a.suggestion),E()},getSuggestionUrl:function(a){return a.suggestion.url},getSuggestions:function(){return Object.values(mb(a,function(a){return a.hierarchy.lvl1})).map(I).map(function(a){return a.map(function(b){return pb(pb({},b),{},{__docsearch_parent:"lvl1"!==b.type&&a.find(function(a){return"lvl1"===a.type&&a.hierarchy.lvl1===b.hierarchy.lvl1})})})}).flat()}}})}):W?[]:[{onSelect:function(a){ja(a.suggestion),E()},getSuggestionUrl:function(a){return a.suggestion.url},getSuggestions:function(){return ia.getAll()}},{onSelect:function(a){ja(a.suggestion),E()},getSuggestionUrl:function(a){return a.suggestion.url},getSuggestions:function(){return ha.getAll()}}]}})},[y,C,ga,E,ia,ha,ja,fa,B,M,I,W]),la=ka.getEnvironmentProps,ma=ka.getRootProps,na=ka.refresh;return h=(g={getEnvironmentProps:la,dropdownElement:ca.current,searchBoxElement:ba.current,inputElement:da.current}).getEnvironmentProps,i=g.dropdownElement,o=g.searchBoxElement,s=g.inputElement,e.useEffect(function(){if(i&&o&&s){var a=h({dropdownElement:i,searchBoxElement:o,inputElement:s}),b=a.onTouchStart,c=a.onTouchMove;return window.addEventListener("touchstart",b),window.addEventListener("touchmove",c),function(){window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",c)}}},[h,i,o,s]),u=({container:aa.current}).container,e.useEffect(function(){if(u){var a=u.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),b=a[0],c=a[a.length-1];function d(a){"Tab"===a.key&&(a.shiftKey?document.activeElement===b&&(a.preventDefault(),c.focus()):document.activeElement===c&&(a.preventDefault(),b.focus()))}return u.addEventListener("keydown",d),function(){u.removeEventListener("keydown",d)}}},[u]),e.useEffect(function(){return document.body.classList.add("DocSearch--active"),function(){var a,b;document.body.classList.remove("DocSearch--active"),null===(a=(b=window).scrollTo)|| void 0===a||a.call(b,0,R)}},[]),e.useEffect(function(){window.matchMedia("(max-width: 750px)").matches&&(ea.current=5)},[]),e.useEffect(function(){ca.current&&(ca.current.scrollTop=0)},[$.query]),e.useEffect(function(){fa.length>0&&(na(),da.current&&da.current.focus())},[fa,na]),e.createElement("div",nb({ref:aa},ma({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container","stalled"===$.status&&"DocSearch-Container--Stalled","error"===$.status&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),onClick:function(a){a.target===a.currentTarget&&E()}}),e.createElement("div",{className:"DocSearch-Modal"},e.createElement("header",{className:"DocSearch-SearchBar",ref:ba},e.createElement(Da,nb({},ka,{state:$,autoFocus:0===fa.length,onClose:E,inputRef:da}))),e.createElement("div",{className:"DocSearch-Dropdown",ref:ca},e.createElement(za,nb({},ka,{indexName:y,state:$,hitComponent:void 0===K?U:K,resultsFooterComponent:void 0===L?function(){return null}:L,disableUserPersonalization:W,recentSearches:ia,favoriteSearches:ha,onItemClick:function(a){ja(a),E()},inputRef:da}))),e.createElement("footer",{className:"DocSearch-Footer"},e.createElement(S,null))))}var tb=c(86010),ub=["Ctrl ","Control"],vb=["⌘","Command"];function wb(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function xb(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){wb(a,b,c[b])})}return a}var yb=(0,e.createContext)();function zb(a){var b=a.children,c=(0,i.useRouter)(),g=(0,e.useState)(!1),j=g[0],k=g[1],l=(0,e.useState)(null),m=l[0],n=l[1],o=(0,e.useCallback)(function(){k(!0)},[k]),p=(0,e.useCallback)(function(){k(!1)},[k]),q=(0,e.useCallback)(function(a){k(!0),n(a.key)},[k,n]);return Cb({isOpen:j,onOpen:o,onClose:p,onInput:q}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.default,{children:(0,d.jsx)("link",{rel:"preconnect",href:"https://".concat("KNPXZI5B0M","-dsn.algolia.net"),crossOrigin:"true"})}),(0,d.jsx)(yb.Provider,{value:{isOpen:j,onOpen:o,onClose:p,onInput:q},children:b}),j&&(0,f.createPortal)((0,d.jsx)(sb,{initialQuery:m,initialScrollY:window.scrollY,searchParameters:{facetFilters:"version:v3",distinct:1},placeholder:"Search documentation",onClose:p,indexName:"tailwindcss",apiKey:"5fc87cef58bb80203d2207578309fab6",appId:"KNPXZI5B0M",navigator:{navigate:function(a){var b=a.suggestionUrl;k(!1),c.push(b)}},hitComponent:Ab,transformItems:function(a){return a.map(function(b,c){var d,e=document.createElement("a");e.href=b.url;var f="#content-wrapper"===e.hash?"":e.hash;return(null===(d=b.hierarchy)|| void 0===d?void 0:d.lvl0)&&(b.hierarchy.lvl0=b.hierarchy.lvl0.replace(/&amp;/g,"&")),xb({},b,{url:"".concat(e.pathname).concat(f),__is_result:function(){return!0},__is_parent:function(){return"lvl1"===b.type&&a.length>1&&0===c},__is_child:function(){return"lvl1"!==b.type&&a.length>1&&"lvl1"===a[0].type&&0!==c},__is_first:function(){return 1===c},__is_last:function(){return c===a.length-1&&0!==c}})})}}),document.body)]})}function Ab(a){var b,c,e,f,h,i=a.hit,j=a.children;return(0,d.jsx)(g.default,{href:i.url,children:(0,d.jsx)("a",{className:(0,tb.Z)({"DocSearch-Hit--Result":null===(b=i.__is_result)|| void 0===b?void 0:b.call(i),"DocSearch-Hit--Parent":null===(c=i.__is_parent)|| void 0===c?void 0:c.call(i),"DocSearch-Hit--FirstChild":null===(e=i.__is_first)|| void 0===e?void 0:e.call(i),"DocSearch-Hit--LastChild":null===(f=i.__is_last)|| void 0===f?void 0:f.call(i),"DocSearch-Hit--Child":null===(h=i.__is_child)|| void 0===h?void 0:h.call(i)}),children:j})})}function Bb(a){var b,c,f,g=a.children,h=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children"]),i=(0,e.useRef)(),j=(c=(b=(0,e.useState)())[0],f=b[1],(0,e.useEffect)(function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?f(vb):f(ub))},[]),c),k=(0,e.useContext)(yb),l=k.onOpen,m=k.onInput;return(0,e.useEffect)(function(){var a=function(a){i&&i.current===document.activeElement&&m&&/[a-zA-Z0-9]/.test(String.fromCharCode(a.keyCode))&&m(a)};return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}},[m,i]),(0,d.jsx)("button",xb({type:"button",ref:i,onClick:l},h,{children:"function"==typeof g?g({actionKey:j}):g}))}function Cb(a){var b=a.isOpen,c=a.onOpen,d=a.onClose;(0,e.useEffect)(function(){var a=function(a){(27===a.keyCode&&b||"k"===a.key&&(a.metaKey||a.ctrlKey)|| !Db(a)&&"/"===a.key&&!b)&&(a.preventDefault(),b?d():!document.body.classList.contains("DocSearch--active")&&(document.body.classList.contains("DocSearch--active")||c()))};return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}},[b,c,d])}function Db(a){var b=a.target,c=b.tagName;return b.isContentEditable||"INPUT"===c||"SELECT"===c||"TEXTAREA"===c}},47391:function(a,b,c){"use strict";c.d(b,{N:function(){return Y},T:function(){return X}});var d,e,f,g=c(85893),h=c(67129),i=c(19642),j=c(67294),k=c(133),l=c(58529),m=c(57471),n=c(62659),o=c(79016),p=c(60852),q=c(92506),r=c(35057),s=c(24198),t=c(3980),u=c(56637),v=c(9472),w=c(33197);function x(a,b){var c=(0,j.useState)(a),d=c[0],e=c[1],f=(0,j.useRef)(a);return(0,p.e)(function(){f.current=a},[a]),(0,p.e)(function(){return e(f.current)},[f,e].concat(b)),d}var y,z,A=c(21787);(y=e||(e={}))[y.Open=0]="Open",y[y.Closed=1]="Closed",(z=f||(f={}))[z.OpenListbox=0]="OpenListbox",z[z.CloseListbox=1]="CloseListbox",z[z.SetDisabled=2]="SetDisabled",z[z.SetOrientation=3]="SetOrientation",z[z.GoToOption=4]="GoToOption",z[z.Search=5]="Search",z[z.ClearSearch=6]="ClearSearch",z[z.RegisterOption=7]="RegisterOption",z[z.UnregisterOption=8]="UnregisterOption";var B=((d={})[f.CloseListbox]=function(a){return a.disabled?a:a.listboxState===e.Closed?a:(0,i.gY)({},a,{activeOptionIndex:null,listboxState:e.Closed})},d[f.OpenListbox]=function(a){return a.disabled?a:a.listboxState===e.Open?a:(0,i.gY)({},a,{listboxState:e.Open})},d[f.SetDisabled]=function(a,b){return a.disabled===b.disabled?a:(0,i.gY)({},a,{disabled:b.disabled})},d[f.SetOrientation]=function(a,b){return a.orientation===b.orientation?a:(0,i.gY)({},a,{orientation:b.orientation})},d[f.GoToOption]=function(a,b){if(a.disabled)return a;if(a.listboxState===e.Closed)return a;var c=(0,A.d)(b,{resolveItems:function(){return a.options},resolveActiveIndex:function(){return a.activeOptionIndex},resolveId:function(a){return a.id},resolveDisabled:function(a){return a.dataRef.current.disabled}});return""===a.searchQuery&&a.activeOptionIndex===c?a:(0,i.gY)({},a,{searchQuery:"",activeOptionIndex:c})},d[f.Search]=function(a,b){if(a.disabled)return a;if(a.listboxState===e.Closed)return a;var c=a.searchQuery+b.value.toLowerCase(),d=a.options.findIndex(function(a){var b;return!a.dataRef.current.disabled&&(null==(b=a.dataRef.current.textValue)?void 0:b.startsWith(c))});return -1===d||d===a.activeOptionIndex?(0,i.gY)({},a,{searchQuery:c}):(0,i.gY)({},a,{searchQuery:c,activeOptionIndex:d})},d[f.ClearSearch]=function(a){return a.disabled?a:a.listboxState===e.Closed?a:""===a.searchQuery?a:(0,i.gY)({},a,{searchQuery:""})},d[f.RegisterOption]=function(a,b){return(0,i.gY)({},a,{options:[].concat(a.options,[{id:b.id,dataRef:b.dataRef}])})},d[f.UnregisterOption]=function(a,b){var c=a.options.slice(),d=null!==a.activeOptionIndex?c[a.activeOptionIndex]:null,e=c.findIndex(function(a){return a.id===b.id});return -1!==e&&c.splice(e,1),(0,i.gY)({},a,{options:c,activeOptionIndex:e===a.activeOptionIndex?null:null===d?null:c.indexOf(d)})},d),C=(0,j.createContext)(null);function D(a){var b=(0,j.useContext)(C);if(null===b){var c=new Error("<"+a+" /> is missing a parent <"+G.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(c,D),c}return b}function E(a,b){return(0,k.E)(b.type,B,a,b)}C.displayName="ListboxContext";var F=j.Fragment;function G(a){var b,c=a.value,d=a.onChange,g=a.disabled,h=void 0!==g&&g,m=a.horizontal,n=(0,i.gK)(a,["value","onChange","disabled","horizontal"]),o=void 0!==m&&m?"horizontal":"vertical",q=(0,j.useReducer)(E,{listboxState:e.Closed,propsRef:{current:{value:c,onChange:d}},labelRef:(0,j.createRef)(),buttonRef:(0,j.createRef)(),optionsRef:(0,j.createRef)(),disabled:h,orientation:o,options:[],searchQuery:"",activeOptionIndex:null}),u=q[0],v=u.listboxState,w=u.propsRef,x=u.optionsRef,y=u.buttonRef,z=q[1];(0,p.e)(function(){w.current.value=c},[c,w]),(0,p.e)(function(){w.current.onChange=d},[d,w]),(0,p.e)(function(){return z({type:f.SetDisabled,disabled:h})},[h]),(0,p.e)(function(){return z({type:f.SetOrientation,orientation:o})},[o]),(0,s.s)("mousedown",function(a){var b,c,d,g=a.target;v===e.Open&&(null==(b=y.current)||!b.contains(g))&&(null!=(c=x.current)&&c.contains(g)||(z({type:f.CloseListbox}),(0,r.sP)(g,r.tJ.Loose)||(a.preventDefault(),null==(d=y.current)||d.focus())))});var A=(0,j.useMemo)(function(){return{open:v===e.Open,disabled:h}},[v,h]);return j.createElement(C.Provider,{value:q},j.createElement(t.up,{value:(0,k.E)(v,((b={})[e.Open]=t.ZM.Open,b[e.Closed]=t.ZM.Closed,b))},(0,l.sY)({props:n,slot:A,defaultTag:F,name:"Listbox"})))}var H=(0,l.yV)(function a(b,c){var d,g=D([G.name,a.name].join(".")),h=g[0],k=g[1],p=(0,m.T)(h.buttonRef,c),r="headlessui-listbox-button-"+(0,q.M)(),s=(0,w.G)(),t=(0,j.useCallback)(function(a){switch(a.key){case n.R.Space:case n.R.Enter:case n.R.ArrowDown:a.preventDefault(),k({type:f.OpenListbox}),s.nextFrame(function(){h.propsRef.current.value||k({type:f.GoToOption,focus:A.T.First})});break;case n.R.ArrowUp:a.preventDefault(),k({type:f.OpenListbox}),s.nextFrame(function(){h.propsRef.current.value||k({type:f.GoToOption,focus:A.T.Last})});break}},[k,h,s]),v=(0,j.useCallback)(function(a){switch(a.key){case n.R.Space:a.preventDefault();break}},[]),y=(0,j.useCallback)(function(a){if((0,o.P)(a.currentTarget))return a.preventDefault();h.listboxState===e.Open?(k({type:f.CloseListbox}),s.nextFrame(function(){var a;return null==(a=h.buttonRef.current)?void 0:a.focus({preventScroll:!0})})):(a.preventDefault(),k({type:f.OpenListbox}))},[k,s,h]),z=x(function(){if(h.labelRef.current)return[h.labelRef.current.id,r].join(" ")},[h.labelRef.current,r]),B=(0,j.useMemo)(function(){return{open:h.listboxState===e.Open,disabled:h.disabled}},[h]),C={ref:p,id:r,type:(0,u.f)(b,h.buttonRef),"aria-haspopup":!0,"aria-controls":null==(d=h.optionsRef.current)?void 0:d.id,"aria-expanded":h.disabled?void 0:h.listboxState===e.Open,"aria-labelledby":z,disabled:h.disabled,onKeyDown:t,onKeyUp:v,onClick:y};return(0,l.sY)({props:(0,i.gY)({},b,C),slot:B,defaultTag:"button",name:"Listbox.Button"})});function I(a){var b=D([G.name,I.name].join("."))[0],c="headlessui-listbox-label-"+(0,q.M)(),d=(0,j.useCallback)(function(){var a;return null==(a=b.buttonRef.current)?void 0:a.focus({preventScroll:!0})},[b.buttonRef]),f=(0,j.useMemo)(function(){return{open:b.listboxState===e.Open,disabled:b.disabled}},[b]),g={ref:b.labelRef,id:c,onClick:d};return(0,l.sY)({props:(0,i.gY)({},a,g),slot:f,defaultTag:"label",name:"Listbox.Label"})}var J=l.AN.RenderStrategy|l.AN.Static,K=(0,l.yV)(function a(b,c){var d,g=D([G.name,a.name].join(".")),h=g[0],o=g[1],r=(0,m.T)(h.optionsRef,c),s="headlessui-listbox-options-"+(0,q.M)(),u=(0,w.G)(),y=(0,w.G)(),z=(0,t.oJ)(),B=null!==z?z===t.ZM.Open:h.listboxState===e.Open;(0,p.e)(function(){var a=h.optionsRef.current;a&&h.listboxState===e.Open&&a!==document.activeElement&&a.focus({preventScroll:!0})},[h.listboxState,h.optionsRef]);var C=(0,j.useCallback)(function(a){switch(y.dispose(),a.key){case n.R.Space:if(""!==h.searchQuery)return a.preventDefault(),a.stopPropagation(),o({type:f.Search,value:a.key});case n.R.Enter:if(a.preventDefault(),a.stopPropagation(),o({type:f.CloseListbox}),null!==h.activeOptionIndex){var b=h.options[h.activeOptionIndex].dataRef;h.propsRef.current.onChange(b.current.value)}(0,v.k)().nextFrame(function(){var a;return null==(a=h.buttonRef.current)?void 0:a.focus({preventScroll:!0})});break;case(0,k.E)(h.orientation,{vertical:n.R.ArrowDown,horizontal:n.R.ArrowRight}):return a.preventDefault(),a.stopPropagation(),o({type:f.GoToOption,focus:A.T.Next});case(0,k.E)(h.orientation,{vertical:n.R.ArrowUp,horizontal:n.R.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),o({type:f.GoToOption,focus:A.T.Previous});case n.R.Home:case n.R.PageUp:return a.preventDefault(),a.stopPropagation(),o({type:f.GoToOption,focus:A.T.First});case n.R.End:case n.R.PageDown:return a.preventDefault(),a.stopPropagation(),o({type:f.GoToOption,focus:A.T.Last});case n.R.Escape:return a.preventDefault(),a.stopPropagation(),o({type:f.CloseListbox}),u.nextFrame(function(){var a;return null==(a=h.buttonRef.current)?void 0:a.focus({preventScroll:!0})});case n.R.Tab:a.preventDefault(),a.stopPropagation();break;default:1===a.key.length&&(o({type:f.Search,value:a.key}),y.setTimeout(function(){return o({type:f.ClearSearch})},350));break}},[u,o,y,h]),E=x(function(){var a,b,c;return null!=(a=null==(b=h.labelRef.current)?void 0:b.id)?a:null==(c=h.buttonRef.current)?void 0:c.id},[h.labelRef.current,h.buttonRef.current]),F=(0,j.useMemo)(function(){return{open:h.listboxState===e.Open}},[h]),H={"aria-activedescendant":null===h.activeOptionIndex?void 0:null==(d=h.options[h.activeOptionIndex])?void 0:d.id,"aria-labelledby":E,"aria-orientation":h.orientation,id:s,onKeyDown:C,role:"listbox",tabIndex:0,ref:r};return(0,l.sY)({props:(0,i.gY)({},b,H),slot:F,defaultTag:"ul",features:J,visible:B,name:"Listbox.Options"})});function L(a){var b=a.disabled,c=void 0!==b&&b,d=a.value,g=(0,i.gK)(a,["disabled","value"]),h=D([G.name,L.name].join(".")),k=h[0],m=h[1],n="headlessui-listbox-option-"+(0,q.M)(),o=null!==k.activeOptionIndex&&k.options[k.activeOptionIndex].id===n,r=k.propsRef.current.value===d,s=(0,j.useRef)({disabled:c,value:d});(0,p.e)(function(){s.current.disabled=c},[s,c]),(0,p.e)(function(){s.current.value=d},[s,d]),(0,p.e)(function(){var a,b;s.current.textValue=null==(a=document.getElementById(n))?void 0:null==(b=a.textContent)?void 0:b.toLowerCase()},[s,n]);var t=(0,j.useCallback)(function(){return k.propsRef.current.onChange(d)},[k.propsRef,d]);(0,p.e)(function(){return m({type:f.RegisterOption,id:n,dataRef:s}),function(){return m({type:f.UnregisterOption,id:n})}},[s,n]),(0,p.e)(function(){var a;k.listboxState!==e.Open||r&&(m({type:f.GoToOption,focus:A.T.Specific,id:n}),null==(a=document.getElementById(n))||null==a.focus||a.focus())},[k.listboxState]),(0,p.e)(function(){if(k.listboxState===e.Open&&o){var a=(0,v.k)();return a.nextFrame(function(){var a;return null==(a=document.getElementById(n))?void 0:null==a.scrollIntoView?void 0:a.scrollIntoView({block:"nearest"})}),a.dispose}},[n,o,k.listboxState]);var u=(0,j.useCallback)(function(a){if(c)return a.preventDefault();t(),m({type:f.CloseListbox}),(0,v.k)().nextFrame(function(){var a;return null==(a=k.buttonRef.current)?void 0:a.focus({preventScroll:!0})})},[m,k.buttonRef,c,t]),w=(0,j.useCallback)(function(){if(c)return m({type:f.GoToOption,focus:A.T.Nothing});m({type:f.GoToOption,focus:A.T.Specific,id:n})},[c,n,m]),x=(0,j.useCallback)(function(){!c&&(o||m({type:f.GoToOption,focus:A.T.Specific,id:n}))},[c,o,n,m]),y=(0,j.useCallback)(function(){c||o&&m({type:f.GoToOption,focus:A.T.Nothing})},[c,o,m]),z=(0,j.useMemo)(function(){return{active:o,selected:r,disabled:c}},[o,r,c]);return(0,l.sY)({props:(0,i.gY)({},g,{id:n,role:"option",tabIndex:!0===c?void 0:-1,"aria-disabled":!0===c||void 0,"aria-selected":!0===r||void 0,disabled:void 0,onClick:u,onFocus:w,onPointerMove:x,onMouseMove:x,onPointerLeave:y,onMouseLeave:y}),slot:z,defaultTag:"li",name:"Listbox.Option"})}G.Button=H,G.Label=I,G.Options=K,G.Option=L;var M=c(86010);function N(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function O(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){N(a,b,c[b])})}return a}function P(a,b){if(null==a)return{};var c,d,e=Q(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function Q(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function R(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}function S(){"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?document.documentElement.classList.remove("dark","changing-theme"):document.documentElement.classList.add("dark","changing-theme"),window.setTimeout(function(){document.documentElement.classList.remove("changing-theme")})}var T=[{value:"light",label:"Light",icon:U},{value:"dark",label:"Dark",icon:V},{value:"system",label:"System",icon:function(a){var b=a.selected,c=P(a,["selected"]);return(0,g.jsxs)("svg",O({viewBox:"0 0 24 24",fill:"none"},c,{children:[(0,g.jsx)("path",{d:"M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",strokeWidth:"2",strokeLinejoin:"round",className:b?"stroke-sky-500 fill-sky-400/20":"stroke-gray-400 dark:stroke-gray-500"}),(0,g.jsx)("path",{d:"M14 15c0 3 2 5 2 5H8s2-2 2-5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:b?"stroke-sky-500":"stroke-gray-400 dark:stroke-gray-500"})]}))}},];function U(a){var b=a.selected,c=P(a,["selected"]);return(0,g.jsxs)("svg",O({viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c,{children:[(0,g.jsx)("path",{d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",className:b?"fill-sky-400/20 stroke-sky-500":"stroke-gray-400 dark:stroke-gray-500"}),(0,g.jsx)("path",{d:"M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836",className:b?"stroke-sky-500":"stroke-gray-400 dark:stroke-gray-500"})]}))}function V(a){var b=a.selected,c=P(a,["selected"]);return(0,g.jsxs)("svg",O({viewBox:"0 0 24 24",fill:"none"},c,{children:[(0,g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z",className:b?"fill-sky-400/20":"fill-transparent"}),(0,g.jsx)("path",{d:"m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z",className:b?"fill-sky-500":"fill-gray-400 dark:fill-gray-500"}),(0,g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z",className:b?"fill-sky-500":"fill-gray-400 dark:fill-gray-500"})]}))}function W(){var a=(0,j.useState)("system"),b=a[0],c=a[1],d=(0,j.useRef)(!0);return(0,h.L)(function(){var a=localStorage.theme;("light"===a||"dark"===a)&&c(a)},[]),(0,h.L)(function(){"system"===b?localStorage.removeItem("theme"):("light"===b||"dark"===b)&&(localStorage.theme=b),d.current?d.current=!1:S()},[b]),(0,j.useEffect)(function(){var a=function(){S();var a=localStorage.theme;"light"===a||"dark"===a?c(a):c("system")},b=window.matchMedia("(prefers-color-scheme: dark)");return b.addEventListener("change",S),window.addEventListener("storage",a),function(){b.removeEventListener("change",S),window.removeEventListener("storage",a)}},[]),[b,c]}function X(a){var b=a.panelClassName,c=R(W(),2),d=c[0],e=c[1];return(0,g.jsxs)(G,{value:d,onChange:e,children:[(0,g.jsx)(G.Label,{className:"sr-only",children:"Theme"}),(0,g.jsxs)(G.Button,{type:"button",children:[(0,g.jsx)("span",{className:"dark:hidden",children:(0,g.jsx)(U,{className:"w-6 h-6",selected:"system"!==d})}),(0,g.jsx)("span",{className:"hidden dark:inline",children:(0,g.jsx)(V,{className:"w-6 h-6",selected:"system"!==d})})]}),(0,g.jsx)(G.Options,{className:(0,M.Z)("absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300",void 0===b?"mt-4":b),children:T.map(function(a){var b=a.value,c=a.label,d=a.icon;return(0,g.jsx)(G.Option,{value:b,as:j.Fragment,children:function(a){var b=a.active,e=a.selected;return(0,g.jsxs)("li",{className:(0,M.Z)("py-1 px-2 flex items-center cursor-pointer",e&&"text-sky-500",b&&"bg-gray-50 dark:bg-gray-600/30"),children:[(0,g.jsx)(d,{selected:e,className:"w-6 h-6 mr-2"}),c]})}},b)})})]})}function Y(){var a=R(W(),2),b=a[0],c=a[1],d=T.find(function(a){return a.value===b}).label;return(0,g.jsxs)("div",{className:"flex items-center justify-between",children:[(0,g.jsx)("label",{htmlFor:"theme",className:"text-gray-700 font-normal dark:text-gray-400",children:"Switch theme"}),(0,g.jsxs)("div",{className:"relative flex items-center ring-1 ring-gray-900/10 rounded-lg shadow-sm p-2 text-gray-700 font-semibold dark:bg-gray-600 dark:ring-0 dark:highlight-white/5 dark:text-gray-200",children:[(0,g.jsx)(U,{className:"w-6 h-6 mr-2 dark:hidden"}),(0,g.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-6 h-6 mr-2 hidden dark:block",children:[(0,g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z",className:"fill-transparent"}),(0,g.jsx)("path",{d:"m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z",className:"fill-gray-400"}),(0,g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z",className:"fill-gray-400"})]}),d,(0,g.jsx)("svg",{className:"w-6 h-6 ml-2 text-gray-400",fill:"none",children:(0,g.jsx)("path",{d:"m15 11-3 3-3-3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,g.jsx)("select",{id:"theme",value:b,onChange:function(a){return c(a.target.value)},className:"absolute appearance-none inset-0 w-full h-full opacity-0",children:T.map(function(a){var b=a.value,c=a.label;return(0,g.jsx)("option",{value:b,children:c},b)})})]})]})}},68224:function(a,b,c){"use strict";c.d(b,{D:function(){return f}});var d=c(85893),e=c(9008);function f(a){var b=a.suffix,c=a.children+(b?" - ".concat(b):"");return(0,d.jsxs)(e.default,{children:[(0,d.jsx)("title",{children:c},"title"),(0,d.jsx)("meta",{name:"twitter:title",content:c},"twitter:title"),(0,d.jsx)("meta",{property:"og:title",content:c},"og:title")]})}},67129:function(a,b,c){"use strict";c.d(b,{L:function(){return d}});var d=c(67294).useLayoutEffect},8492:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return ca}});var d,e,f=c(85893);c(40441),c(41126),c(35202);var g,h=c(67294),i=c(58665),j=c(68224),k=c(11163),l=c(9008),m=[],n=function(){var a;"function"==typeof ErrorEvent?a=new ErrorEvent("error",{message:"ResizeObserver loop completed with undelivered notifications."}):((a=document.createEvent("Event")).initEvent("error",!1,!1),a.message="ResizeObserver loop completed with undelivered notifications."),window.dispatchEvent(a)};(g=d||(d={})).BORDER_BOX="border-box",g.CONTENT_BOX="content-box",g.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var o=function(a){return Object.freeze(a)},p=function(a,b){this.inlineSize=a,this.blockSize=b,o(this)},q=function(){function a(a,b,c,d){return this.x=a,this.y=b,this.width=c,this.height=d,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,o(this)}return a.prototype.toJSON=function(){return{x:this.x,y:this.y,top:this.top,right:this.right,bottom:this.bottom,left:this.left,width:this.width,height:this.height}},a.fromRect=function(b){return new a(b.x,b.y,b.width,b.height)},a}(),r=function(a){return a instanceof SVGElement&&"getBBox"in a},s=function(a){if(r(a)){var b=a.getBBox(),c=b.width,d=b.height;return!c&&!d}var e=a,f=e.offsetWidth,g=e.offsetHeight;return!(f||g||a.getClientRects().length)},t=function(a){var b,c;if(a instanceof Element)return!0;var d=null===(c=null===(b=a)|| void 0===b?void 0:b.ownerDocument)|| void 0===c?void 0:c.defaultView;return!!(d&&a instanceof d.Element)},u=function(a){switch(a.tagName){case"INPUT":if("image"!==a.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},v="undefined"!=typeof window?window:{},w=new WeakMap(),x=/auto|scroll/,y=/^tb|vertical/,z=/msie|trident/i.test(v.navigator&&v.navigator.userAgent),A=function(a){return parseFloat(a||"0")},B=function(a,b,c){return void 0===a&&(a=0),void 0===b&&(b=0),void 0===c&&(c=!1),new p((c?b:a)||0,(c?a:b)||0)},C=o({devicePixelContentBoxSize:B(),borderBoxSize:B(),contentBoxSize:B(),contentRect:new q(0,0,0,0)}),D=function(a,b){if(void 0===b&&(b=!1),w.has(a)&&!b)return w.get(a);if(s(a))return w.set(a,C),C;var c=getComputedStyle(a),d=r(a)&&a.ownerSVGElement&&a.getBBox(),e=!z&&"border-box"===c.boxSizing,f=y.test(c.writingMode||""),g=!d&&x.test(c.overflowY||""),h=!d&&x.test(c.overflowX||""),i=d?0:A(c.paddingTop),j=d?0:A(c.paddingRight),k=d?0:A(c.paddingBottom),l=d?0:A(c.paddingLeft),m=d?0:A(c.borderTopWidth),n=d?0:A(c.borderRightWidth),p=d?0:A(c.borderBottomWidth),t=d?0:A(c.borderLeftWidth),u=l+j,v=i+k,D=t+n,E=m+p,F=h?a.offsetHeight-E-a.clientHeight:0,G=g?a.offsetWidth-D-a.clientWidth:0,H=d?d.width:A(c.width)-(e?u+D:0)-G,I=d?d.height:A(c.height)-(e?v+E:0)-F,J=o({devicePixelContentBoxSize:B(Math.round(H*devicePixelRatio),Math.round(I*devicePixelRatio),f),borderBoxSize:B(H+u+G+D,I+v+F+E,f),contentBoxSize:B(H,I,f),contentRect:new q(l,i,H,I)});return w.set(a,J),J},E=function(a,b,c){var e=D(a,c),f=e.borderBoxSize,g=e.contentBoxSize,h=e.devicePixelContentBoxSize;switch(b){case d.DEVICE_PIXEL_CONTENT_BOX:return h;case d.BORDER_BOX:return f;default:return g}},F=function(a){var b=D(a);this.target=a,this.contentRect=b.contentRect,this.borderBoxSize=o([b.borderBoxSize]),this.contentBoxSize=o([b.contentBoxSize]),this.devicePixelContentBoxSize=o([b.devicePixelContentBoxSize])},G=function(a){if(s(a))return 1/0;for(var b=0,c=a.parentNode;c;)b+=1,c=c.parentNode;return b},H=function(){var a=1/0,b=[];m.forEach(function(c){if(0!==c.activeTargets.length){var d=[];c.activeTargets.forEach(function(b){var c=new F(b.target),e=G(b.target);d.push(c),b.lastReportedSize=E(b.target,b.observedBox),e<a&&(a=e)}),b.push(function(){c.callback.call(c.observer,d,c.observer)}),c.activeTargets.splice(0,c.activeTargets.length)}});for(var c=0,d=b;c<d.length;c++)(0,d[c])();return a},I=function(a){m.forEach(function(b){b.activeTargets.splice(0,b.activeTargets.length),b.skippedTargets.splice(0,b.skippedTargets.length),b.observationTargets.forEach(function(c){c.isActive()&&(G(c.target)>a?b.activeTargets.push(c):b.skippedTargets.push(c))})})},J=function(){var a=0;for(I(a);m.some(function(a){return a.activeTargets.length>0});)I(a=H());return m.some(function(a){return a.skippedTargets.length>0})&&n(),a>0},K=[],L=function(a){if(!e){var b=0,c=document.createTextNode(""),d={characterData:!0};new MutationObserver(function(){return K.splice(0).forEach(function(a){return a()})}).observe(c,d),e=function(){c.textContent=""+(b?b--:b++)}}K.push(a),e()},M=function(a){L(function(){requestAnimationFrame(a)})},N=0,O={attributes:!0,characterData:!0,childList:!0,subtree:!0},P=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Q=function(a){return void 0===a&&(a=0),Date.now()+a},R=!1,S=new(function(){function a(){var a=this;this.stopped=!0,this.listener=function(){return a.schedule()}}return a.prototype.run=function(a){var b=this;if(void 0===a&&(a=250),!R){R=!0;var c=Q(a);M(function(){var d=!1;try{d=J()}finally{if(R=!1,a=c-Q(),!N)return;d?b.run(1000):a>0?b.run(a):b.start()}})}},a.prototype.schedule=function(){this.stop(),this.run()},a.prototype.observe=function(){var a=this,b=function(){return a.observer&&a.observer.observe(document.body,O)};document.body?b():v.addEventListener("DOMContentLoaded",b)},a.prototype.start=function(){var a=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),P.forEach(function(b){return v.addEventListener(b,a.listener,!0)}))},a.prototype.stop=function(){var a=this;this.stopped||(this.observer&&this.observer.disconnect(),P.forEach(function(b){return v.removeEventListener(b,a.listener,!0)}),this.stopped=!0)},a}())(),T=function(a){!N&&a>0&&S.start(),(N+=a)||S.stop()},U=function(){function a(a,b){this.target=a,this.observedBox=b||d.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return a.prototype.isActive=function(){var a,b=E(this.target,this.observedBox,!0);return r(a=this.target)||u(a)||"inline"!==getComputedStyle(a).display||(this.lastReportedSize=b),this.lastReportedSize.inlineSize!==b.inlineSize||this.lastReportedSize.blockSize!==b.blockSize},a}(),V=function(a,b){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=a,this.callback=b},W=new WeakMap(),X=function(a,b){for(var c=0;c<a.length;c+=1)if(a[c].target===b)return c;return -1},Y=function(){function a(){}return a.connect=function(a,b){var c=new V(a,b);W.set(a,c)},a.observe=function(a,b,c){var d=W.get(a),e=0===d.observationTargets.length;0>X(d.observationTargets,b)&&(e&&m.push(d),d.observationTargets.push(new U(b,c&&c.box)),T(1),S.schedule())},a.unobserve=function(a,b){var c=W.get(a),d=X(c.observationTargets,b),e=1===c.observationTargets.length;d>=0&&(e&&m.splice(m.indexOf(c),1),c.observationTargets.splice(d,1),T(-1))},a.disconnect=function(a){var b=this,c=W.get(a);c.observationTargets.slice().forEach(function(c){return b.unobserve(a,c.target)}),c.activeTargets.splice(0,c.activeTargets.length)},a}(),Z=function(){function a(a){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof a)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Y.connect(this,a)}return a.prototype.observe=function(a,b){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!t(a))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Y.observe(this,a,b)},a.prototype.unobserve=function(a){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!t(a))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Y.unobserve(this,a)},a.prototype.disconnect=function(){Y.disconnect(this)},a.toString=function(){return"function ResizeObserver () { [polyfill code] }"},a}();c(66337);var $=c(30596);function _(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function aa(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_(a,b,c[b])})}return a}"ResizeObserver"in window||(window.ResizeObserver=Z);var ba=new function(a){var b=function(a,b){Object.keys(b).forEach(function(c){a[c]=b[c]})},c={size:2,color:"#29e",className:"bar-of-progress",delay:80};a&&b(c,a);var d,e,f={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:"currentColor",zIndex:10e3,height:"number"==typeof c.size?c.size+"px":c.size,color:c.color,opacity:0,width:"0%"},g={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},h={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},i={opacity:0.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){e&&e.parentNode&&e.parentNode.removeChild(e),(e=document.body.appendChild(document.createElement("div"))).className=c.className+" stopped",b(e.style,f);var a=e.appendChild(document.createElement("div"));a.className="glow",b(a.style,i),null!=d&&clearTimeout(d),d=setTimeout(function(){d=null,e.className=c.className+" started",b(e.style,g)},c.delay),e.scrollTop=0},this.finish=function(){null!=d&&(clearTimeout(d),d=null),e&&(e.className=c.className+" finished",b(e.style,h))}}({size:2,color:"#38bdf8",className:"bar-of-progress",delay:100});function ca(a){var b,c,d,e,g,m,n,o,p,q=a.Component,r=a.pageProps,s=a.router,t=(0,h.useState)(!1),u=t[0],v=t[1];(0,h.useEffect)(function(){var a=function(){v(!1)};if(u)return k.default.events.on("routeChangeComplete",a),function(){k.default.events.off("routeChangeComplete",a)}},[u]);var w=(null===(b=q.layoutProps)|| void 0===b?void 0:b.Layout)||h.Fragment,x=(null===(c=q.layoutProps)|| void 0===c?void 0:c.Layout)?{layoutProps:q.layoutProps,navIsOpen:u,setNavIsOpen:v}:{},y="/"!==s.pathname,z=(null===(d=q.layoutProps)|| void 0===d?void 0:d.meta)||{},A=z.metaDescription||z.description||"Documentation for the Tailwind CSS framework.";if(s.pathname.startsWith("/examples/"))return(0,f.jsx)(q,aa({},r));var B=z.section||(null===(m=Object.entries(null!==(p=null===(e=q.layoutProps)|| void 0===e?void 0:null===(g=e.Layout)|| void 0===g?void 0:g.nav)&& void 0!==p?p:{}).find(function(a){var b;return((function(a){if(Array.isArray(a))return a})(b=a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(b,2)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})())[1].find(function(a){return a.href===s.pathname})}))|| void 0===m?void 0:m[0]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j.D,{suffix:"Tailwind CSS",children:z.metaTitle||z.title}),(0,f.jsxs)(l.default,{children:[(0,f.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,f.jsx)("meta",{name:"twitter:site",content:"@tailwindcss"},"twitter:site"),(0,f.jsx)("meta",{name:"twitter:description",content:A},"twitter:description"),(0,f.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/social-card-large.f6878fd8df804f73ba3f1a271122105a.jpg")},"twitter:image"),(0,f.jsx)("meta",{name:"twitter:creator",content:"@tailwindcss"},"twitter:creator"),(0,f.jsx)("meta",{property:"og:url",content:"https://tailwindcss.com".concat(s.pathname)},"og:url"),(0,f.jsx)("meta",{property:"og:type",content:"article"},"og:type"),(0,f.jsx)("meta",{property:"og:description",content:A},"og:description"),(0,f.jsx)("meta",{property:"og:image",content:"https://tailwindcss.com".concat("/_next/static/media/social-card-large.f6878fd8df804f73ba3f1a271122105a.jpg")},"og:image"),(0,f.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"RSS 2.0",href:"/feeds/feed.xml"}),(0,f.jsx)("link",{rel:"alternate",type:"application/atom+xml",title:"Atom 1.0",href:"/feeds/atom.xml"}),(0,f.jsx)("link",{rel:"alternate",type:"application/json",title:"JSON Feed",href:"/feeds/feed.json"})]}),(0,f.jsxs)($.X,{children:[y&&(0,f.jsx)(i.h4,{hasNav:Boolean(null===(n=q.layoutProps)|| void 0===n?void 0:null===(o=n.Layout)|| void 0===o?void 0:o.nav),navIsOpen:u,onNavToggle:function(a){return v(a)},title:z.title,section:B}),(0,f.jsx)(w,aa({},x,{children:(0,f.jsx)(q,aa({section:B},r))}))]})]})}ba.start(),ba.finish(),k.default.events.on("routeChangeStart",function(){return ba.start()}),k.default.events.on("routeChangeComplete",function(){return ba.finish()}),k.default.events.on("routeChangeError",function(){return ba.finish()})},40441:function(){},41126:function(){},9008:function(a,b,c){a.exports=c(5443)},41664:function(a,b,c){a.exports=c(48418)},11163:function(a,b,c){a.exports=c(90387)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[9774,179],function(){return b(81780),b(90387)}),_N_E=a.O()}])
				