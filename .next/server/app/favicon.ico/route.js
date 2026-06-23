"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 73850:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 97846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAACMuAAAjLgAAAAAAAAAAAAD///////////////////////////34+//wv9j/6aLH//C+2P/88fb/////////////////////////////////////////////////////////////////+N/s/+qnyf/po8f/9NHj//78/f///////////////////////////////////////////////////f7/6aTI/9NGj//RPor/0kSO/91yqv/11+f///////////////////////////////////////////////////////LI3v/ZXp3/0T6K/9E+iv/VTpT/7K7O///+/v////////////////////////////////////////////bY5//VTpT/0TyJ/9E+iv/RPor/0DqI/9tmov/66vP////////////////////////////////////////////21+f/11aZ/9A7iP/RPor/0T6K/9E8if/VUJX/9tno////////////////////////////////////////////6aLG/9A8if/RPor/0T6K/9E+iv/RPor/0T2K/+qpy////////////////////////////////////////ff6/+B9sP/QO4j/0T6K/9E+iv/RPor/0T6K/9A8if/onsT///////////////////////////////////////78/f/gfK//0DuI/9E+iv/RPor/0T6K/9E+iv/QPIn/22ej//zx9v/////////////////////////////////wv9j/0kSO/9E9iv/RPor/0T6K/9E+iv/RPor/0DuI/994rf/++/3//////////////////////////////////fX5/9topP/QO4j/0T6K/9E+iv/RPor/0T6K/9E+iv/SQ43/8cTb/////////////////////////////PL3/9xtp//QO4j/0T6K/9E+iv/RPor/0T6K/9E+iv/QO4j/22ij//31+f/////////////////////////////////88fb/2WCf/9A8if/RPor/0T6K/9E+iv/RPor/0T6K/9A7iP/ihbX//v3+///////+/P3//vv9///////zzeD/00WO/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9A8if/aY6D//PL3//////////////////////////////////zw9v/ZYJ//0DyJ/9E+iv/RPor/0T6K/9E+iv/RPor/0T2J/9VQlf/mmMD/44i3/994rf/ed63/4oS0/952rP/RP4v/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0DuI/9tno//99fn//////////////////////////////////PT4/9pmov/QPIn/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T2K/9A8if/QO4j/0DuI/9A7iP/QO4j/0DyJ/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/QO4j/3nSr//76/P/////////////////////////////////++vz/3nOq/9A7iP/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9A7iP/ih7b////////////////////////////////////////////jiLf/0DuI/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T2K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0DuI/+idxP///////////////////////////////////////////+qlyf/RPIn/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9JDjf/TR5D/0T2J/9E9if/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/7rbT////////////////////////////////////////////8cbd/9JDjf/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/QPIn/4YKz//TS4//oncT/1E2T/9E9if/RPor/0T6K/9E+iv/RPor/0T6K/9NGj//00OL////////////////////////////////////////////55e//1lSX/9E9if/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T2J/9A8if/VUJX/4YGy//TQ4v/ttNL/0kSN/9E+iv/RPor/0T6K/9E+iv/RPYn/11WY//nn8P////////////////////////////////////////////75+//edav/0DuI/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E9if/YXJz/6qXJ/+ywz//cbqf/2WKg//ba6f/ZX57/0TyJ/9E+iv/RPor/0T6K/9A7iP/db6f//ff6/////////////////////////////////////////////////+mix//RPIn/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0UCL/+641P////////////XW5v/VTpT/3XCo/9RMk//RPYr/0T6K/9E+iv/RPor/0DuI/+WSvf//////////////////////////////////////////////////////9NHj/9NIkP/RPYr/0T6K/9E+iv/RPor/0T6K/9E+iv/SQYz/8cTb////////////997r/9VNk//QO4j/0T2K/9E+iv/RPor/0T6K/9E+iv/RQIv/77vW///////////////////////////////////////////////////////88vf/22ej/9A8if/RPor/0T6K/9E+iv/RPor/0T6K/9E9if/rqsv////////////yyd7/0kON/9E+iv/RPor/0T6K/9E+iv/RPor/0T2J/9VRlf/44Oz////////////////////////////////////////////////////////////mmMD/0DuI/9E+iv/RPor/0T6K/9E+iv/RPor/0DuI/+OHtv///v///////+uqzP/RPYn/0T6K/9E+iv/RPor/0T6K/9E+iv/QO4j/3nSr//35+/////////////////////////////////////////////////////////////PM4P/TRo//0T2K/9E+iv/RPor/0T6K/9E+iv/RPIn/2V6e//rs8//99fn/3nOq/9A8iP/RPor/0T6K/9E+iv/RPor/0T6K/9E9if/qqMr//////////////////////////////////////////////////////////////////PH3/9tmov/QPIn/0DyJ/9E9if/RPor/0T6K/9E+iv/RQIv/5ZC8/+aUvv/SQYz/0T6K/9E+iv/RPor/0T6K/9E+iv/RPYn/1U6U//bb6f//////////////////////////////////////////////////////////////////////6J3E/9A7iP/aZaL/2V6d/9E9if/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9A7iP/fe6///vr8///////////////////////////////////////////////////////////////////////21+f/1EqR/+aVv//wwNn/0kON/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0kGM/++71v////////////////////////////////////////////////////////////////////////////76/P/gfLD/2V6d//fe6//dcqr/0DuI/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9A8if/aZqL/++/1//////////////////////////////////////////////////////////////////////////////////HG3P/SRI7/6J/F//DC2v/TRY7/0T2K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T+L/+utzf///////////////////////////////////////////////////////////////////////////////////////ff6/995rv/WUpb/9dfn/+OJuP/RPIn/0T6K/9E+iv/RPor/0T6K/9E+iv/RPor/0T6K/9A8if/aZaL/++30////////////////////////////////////////////////////////////////////////////////////////////9M/i/9RKkf/ig7T/99zq/9hbm//RO4j/0T6K/9E+iv/RPor/0T6K/9E+iv/RPYr/0kON/+641P///////////////////////////////////////////////////////////////////////////////////////////////////f7/6J3E/9JDjf/gfbD/2Fqb/9RJkf/RPYn/0T6K/9E+iv/RPor/0T6K/9A8if/hgrP//ff6///////////////////////////////////////////////////////////////////////////////////////////////////////88vf/4H+x/883hv/cbqf/887h/9xtpv/RPIn/0T6K/9E+iv/QO4j/2mSh//jj7v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////66vP/4Hyv/9NHj//jiLf/3Gym/9E8if/RPYr/0DuI/9lgn//11ub////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////88Pb/55vD/9VPlP/RPYr/0T6K/9NHkP/ge6//993r///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+/P3/9dbm/+qnyv/oocb/8cbc//31+f//////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2Fworkspaces%2Fanni_folio%2Fsrc%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/workspaces/anni_folio/src/app/favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(97846)));
module.exports = __webpack_exports__;

})();