"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layout/WalletPopUp.js":
/*!***********************************!*\
  !*** ./src/layout/WalletPopUp.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_siteSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/siteSettings */ \"./src/redux/actions/siteSettings.js\");\n/* harmony import */ var _metamask_sdk_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @metamask/sdk-react */ \"./node_modules/@metamask/sdk-react/dist/esm/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WalletPopUp = function(param) {\n    var _$walletToggle = param.walletToggle, wallet = param.wallet;\n    _s();\n    var ref = (0,_metamask_sdk_react__WEBPACK_IMPORTED_MODULE_4__.useSDK)(), sdk = ref.sdk, connected = ref.connected, connecting = ref.connecting, account = ref.account, chainId = ref.chainId;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), connectingWallet = ref1[0], setConnectingWallet = ref1[1];\n    var connectToMetaMask = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            3,\n                            4\n                        ]);\n                        setConnectingWallet(true);\n                        return [\n                            4,\n                            sdk === null || sdk === void 0 ? void 0 : sdk.connect()\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        err = _state.sent();\n                        console.warn(\"Error connecting to MetaMask\", err);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        setConnectingWallet(false);\n                        return [\n                            7\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function connectToMetaMask() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var disconnectFromMetaMask = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var err;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            sdk === null || sdk === void 0 ? void 0 : sdk.terminate()\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        err = _state.sent();\n                        console.error(\"Error disconnecting from MetaMask:\", err);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function disconnectFromMetaMask() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metaportal_fn_wallet_closer \".concat(wallet ? \"active\" : \"\"),\n                onClick: function() {\n                    return _$walletToggle(false);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metaportal_fn_walletbox \".concat(wallet ? \"active\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"fn__closer\",\n                        onClick: function() {\n                            return _$walletToggle(false);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"walletbox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"title_holder\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Connect with one of our available wallet providers or create a new one.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list_holder\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"metaportal_fn_items\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: connectToMetaMask,\n                                                disabled: connected || connectingWallet,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"icon\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/img/wallet/metamask.png\",\n                                                            alt: \"\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text\",\n                                                        children: \"Metamask\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ramin_Csy\\\\Desktop\\\\NFT\\\\metaportall\\\\meta-portal\\\\src\\\\layout\\\\WalletPopUp.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(WalletPopUp, \"NNasLkL+SW0s9RXWEvpGrB/Ck+s=\", false, function() {\n    return [\n        _metamask_sdk_react__WEBPACK_IMPORTED_MODULE_4__.useSDK\n    ];\n});\n_c = WalletPopUp;\nvar mapStateToProps = function(state) {\n    return {\n        wallet: state.site.wallet\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {\n    walletToggle: _redux_actions_siteSettings__WEBPACK_IMPORTED_MODULE_3__.walletToggle\n})(WalletPopUp));\nvar _c;\n$RefreshReg$(_c, \"WalletPopUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pDLDRFQUFDUSxJQUFFO2tEQUNELDRFQUFDVCxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsTUFBTTtzREFDbkIsNEVBQUNTLFFBQU07Z0RBQUNSLE9BQU8sRUFBRVQsaUJBQWlCO2dEQUFFa0IsUUFBUSxFQUFFeEIsU0FBUyxJQUFJSSxnQkFBZ0I7O2tFQUN6RSw4REFBQ2MsTUFBSTt3REFBQ0osU0FBUyxFQUFDLE1BQU07a0VBQ3BCLDRFQUFDVyxLQUFHOzREQUFDQyxHQUFHLEVBQUMsMEJBQTBCOzREQUFDQyxHQUFHLEVBQUMsRUFBRTs7Ozs7aUVBQUc7Ozs7OzZEQUN4QztrRUFDUCw4REFBQ1QsTUFBSTt3REFBQ0osU0FBUyxFQUFDLE1BQU07a0VBQUMsVUFBUTs7Ozs7NkRBQU87Ozs7OztxREFDL0I7Ozs7O2lEQUNMOzs7Ozs2Q0FDSDs7Ozs7eUNBRUY7Ozs7O3FDQUNEOzs7Ozs7NkJBQ0Y7Ozs7OztxQkFDRjs7Ozs7O2FBQ0csQ0FDWDtBQUNKLENBQUM7R0FoRUtqQixXQUFXOztRQUMwQ0QsdURBQU07OztBQUQzREMsS0FBQUEsV0FBVztBQWtFakIsSUFBTStCLGVBQWUsR0FBRyxTQUFDQyxLQUFLO1dBQU07UUFDbEMvQixNQUFNLEVBQUUrQixLQUFLLENBQUNDLElBQUksQ0FBQ2hDLE1BQU07S0FDMUI7Q0FBQztBQUVGLCtEQUFlSixvREFBTyxDQUFDa0MsZUFBZSxFQUFFO0lBQUVqQyxZQUFZLEVBQVpBLHFFQUFZO0NBQUUsQ0FBQyxDQUFDRSxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L1dhbGxldFBvcFVwLmpzPzZiNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgd2FsbGV0VG9nZ2xlIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvc2l0ZVNldHRpbmdzXCI7XHJcbmltcG9ydCB7IHVzZVNESyB9IGZyb20gXCJAbWV0YW1hc2svc2RrLXJlYWN0XCI7XHJcblxyXG5jb25zdCBXYWxsZXRQb3BVcCA9ICh7IHdhbGxldFRvZ2dsZSwgd2FsbGV0IH0pID0+IHtcclxuICBjb25zdCB7IHNkaywgY29ubmVjdGVkLCBjb25uZWN0aW5nLCBhY2NvdW50LCBjaGFpbklkIH0gPSB1c2VTREsoKTtcclxuICBjb25zdCBbY29ubmVjdGluZ1dhbGxldCwgc2V0Q29ubmVjdGluZ1dhbGxldF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RUb01ldGFNYXNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0Q29ubmVjdGluZ1dhbGxldCh0cnVlKTtcclxuICAgICAgYXdhaXQgc2RrPy5jb25uZWN0KCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBFcnJvciBjb25uZWN0aW5nIHRvIE1ldGFNYXNrYCwgZXJyKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldENvbm5lY3RpbmdXYWxsZXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc2Nvbm5lY3RGcm9tTWV0YU1hc2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBzZGs/LnRlcm1pbmF0ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkaXNjb25uZWN0aW5nIGZyb20gTWV0YU1hc2s6XCIsIGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YG1ldGFwb3J0YWxfZm5fd2FsbGV0X2Nsb3NlciAke3dhbGxldCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2FsbGV0VG9nZ2xlKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZXRhcG9ydGFsX2ZuX3dhbGxldGJveCAke3dhbGxldCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbl9fY2xvc2VyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdhbGxldFRvZ2dsZShmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRib3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMz5Db25uZWN0IFdhbGxldDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIENvbm5lY3Qgd2l0aCBvbmUgb2Ygb3VyIGF2YWlsYWJsZSB3YWxsZXQgcHJvdmlkZXJzIG9yIGNyZWF0ZSBhXHJcbiAgICAgICAgICAgICAgbmV3IG9uZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2l0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFRvTWV0YU1hc2t9IGRpc2FibGVkPXtjb25uZWN0ZWQgfHwgY29ubmVjdGluZ1dhbGxldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3dhbGxldC9tZXRhbWFzay5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+TWV0YW1hc2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7LyogQWRkIG90aGVyIHdhbGxldCBvcHRpb25zIGhlcmUgKi99XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgd2FsbGV0OiBzdGF0ZS5zaXRlLndhbGxldCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyB3YWxsZXRUb2dnbGUgfSkoV2FsbGV0UG9wVXApO1xyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJ3YWxsZXRUb2dnbGUiLCJ1c2VTREsiLCJXYWxsZXRQb3BVcCIsIndhbGxldCIsInNkayIsImNvbm5lY3RlZCIsImNvbm5lY3RpbmciLCJhY2NvdW50IiwiY2hhaW5JZCIsImNvbm5lY3RpbmdXYWxsZXQiLCJzZXRDb25uZWN0aW5nV2FsbGV0IiwiY29ubmVjdFRvTWV0YU1hc2siLCJlcnIiLCJjb25zb2xlIiwid2FybiIsImRpc2Nvbm5lY3RGcm9tTWV0YU1hc2siLCJ0ZXJtaW5hdGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJhIiwiaHJlZiIsInNwYW4iLCJoMyIsInAiLCJ1bCIsImxpIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJpbWciLCJzcmMiLCJhbHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInNpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/WalletPopUp.js\n"));

/***/ })

});