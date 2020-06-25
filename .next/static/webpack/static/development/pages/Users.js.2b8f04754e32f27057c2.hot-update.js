webpackHotUpdate("static\\development\\pages\\Users.js",{

/***/ "./components/UsersList.js":
/*!*********************************!*\
  !*** ./components/UsersList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var UsersList = function UsersList(props) {
  return __jsx("div", {
    className: "jsx-2714554749"
  }, props.users.map(function (user) {
    return __jsx("div", {
      className: "jsx-2714554749"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/User?name=".concat(user.username),
      as: "/user/".concat(user.username)
    }, __jsx("a", {
      onMouseEnter: function onMouseEnter() {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.prefetch("/User?name=".concat(user.username));
        console.log('prefetching...');
      },
      className: "jsx-2714554749" + " " + "username"
    }, user.name)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2714554749"
  }, ".username2.jsx-2714554749{backround:black;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXIuQ29kZXJcXERlc2t0b3BcXFJlYWN0IExlc3NvblxcQ29tcG9uZW50c1xcbmV4dGpzXFxjb21wb25lbnRzXFxVc2Vyc0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JZLEFBR3dCLGdCQUVwQixZQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXIuQ29kZXJcXERlc2t0b3BcXFJlYWN0IExlc3NvblxcQ29tcG9uZW50c1xcbmV4dGpzXFxjb21wb25lbnRzXFxVc2Vyc0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFVzZXJzTGlzdCA9IHByb3BzID0+IChcclxuPGRpdj5cclxuICAge1xyXG4gICAgICAgcHJvcHMudXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvVXNlcj9uYW1lPSR7dXNlci51c2VybmFtZX1gfSBhcz17YC91c2VyLyR7dXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbk1vdXNlRW50ZXI9eygpPT57Um91dGVyLnByZWZldGNoKGAvVXNlcj9uYW1lPSR7dXNlci51c2VybmFtZX1gKTtjb25zb2xlLmxvZygncHJlZmV0Y2hpbmcuLi4nKX19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICApKVxyXG4gICAgICAgIH1cclxuPHN0eWxlIGpzeD57YFxyXG4gICAgLnVzZXJuYW1lMntcclxuICAgICAgICBiYWNrcm91bmQ6YmxhY2s7XHJcbiAgICAgICAgY29sb3I6d2hpdGVcclxuICAgIH1cclxuYH08L3N0eWxlPlxyXG48L2Rpdj5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc0xpc3Q7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Mr.Coder\\\\Desktop\\\\React Lesson\\\\Components\\\\nextjs\\\\components\\\\UsersList.js */"));
};

_c = UsersList;
/* harmony default export */ __webpack_exports__["default"] = (UsersList);

var _c;

$RefreshReg$(_c, "UsersList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJzTGlzdC5qcyJdLCJuYW1lcyI6WyJVc2Vyc0xpc3QiLCJwcm9wcyIsInVzZXJzIiwibWFwIiwidXNlciIsInVzZXJuYW1lIiwiUm91dGVyIiwicHJlZmV0Y2giLCJjb25zb2xlIiwibG9nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsS0FBSztBQUFBLFNBQ3ZCO0FBQUE7QUFBQSxLQUVPQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFBQyxJQUFJO0FBQUEsV0FDaEI7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFNLFVBQUksdUJBQWdCQSxJQUFJLENBQUNDLFFBQXJCLENBQVY7QUFBMkMsUUFBRSxrQkFBV0QsSUFBSSxDQUFDQyxRQUFoQjtBQUE3QyxPQUNLO0FBQUcsa0JBQVksRUFBRSx3QkFBSTtBQUFDQywwREFBTSxDQUFDQyxRQUFQLHNCQUE4QkgsSUFBSSxDQUFDQyxRQUFuQztBQUErQ0csZUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFBOEIsT0FBbkc7QUFBQSwwQ0FDVTtBQURWLE9BQ3NCTCxJQUFJLENBQUNNLElBRDNCLENBREwsQ0FESixDQURnQjtBQUFBLEdBQXBCLENBRlA7QUFBQTtBQUFBLHdpREFEdUI7QUFBQSxDQUF2Qjs7S0FBTVYsUztBQXFCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFVzZXJzLmpzLjJiOGYwNDc1NGUzMmYyNzA1N2MyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFVzZXJzTGlzdCA9IHByb3BzID0+IChcclxuPGRpdj5cclxuICAge1xyXG4gICAgICAgcHJvcHMudXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvVXNlcj9uYW1lPSR7dXNlci51c2VybmFtZX1gfSBhcz17YC91c2VyLyR7dXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbk1vdXNlRW50ZXI9eygpPT57Um91dGVyLnByZWZldGNoKGAvVXNlcj9uYW1lPSR7dXNlci51c2VybmFtZX1gKTtjb25zb2xlLmxvZygncHJlZmV0Y2hpbmcuLi4nKX19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICApKVxyXG4gICAgICAgIH1cclxuPHN0eWxlIGpzeD57YFxyXG4gICAgLnVzZXJuYW1lMntcclxuICAgICAgICBiYWNrcm91bmQ6YmxhY2s7XHJcbiAgICAgICAgY29sb3I6d2hpdGVcclxuICAgIH1cclxuYH08L3N0eWxlPlxyXG48L2Rpdj5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==