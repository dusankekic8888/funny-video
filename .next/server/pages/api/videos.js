"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/videos";
exports.ids = ["pages/api/videos"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./middleware/mongodb.ts":
/*!*******************************!*\
  !*** ./middleware/mongodb.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            // Use current db connection\n            return handler(req, res);\n        }\n        const mongoUrl = process.env.MONGO_URL || '';\n        // Use new db connection\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(mongoUrl, {\n            useUnifiedTopology: true,\n            useFindAndModify: false,\n            useCreateIndex: true,\n            useNewUrlParser: true\n        });\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL21vbmdvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRy9CLEtBQUssQ0FBQ0MsU0FBUyxJQUNaQyxPQUE0RCxVQUN0REMsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSyxDQUFDO1FBQ3BELEVBQUUsRUFBRUosMkVBQWtDLEVBQUUsQ0FBQztZQUN2QyxFQUE0QjtZQUM1QixNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO1FBQ3pCLENBQUM7UUFFRCxLQUFLLENBQUNHLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsSUFBSSxDQUFFO1FBQzVDLEVBQXdCO1FBQ3hCLEtBQUssQ0FBQ1YsdURBQWdCLENBQUNPLFFBQVEsRUFBRSxDQUFDO1lBQ2hDSyxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCQyxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCQyxjQUFjLEVBQUUsSUFBSTtZQUNwQkMsZUFBZSxFQUFFLElBQUk7UUFDdkIsQ0FBQztRQUVELE1BQU0sQ0FBQ2IsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUc7SUFDekIsQ0FBQzs7QUFFSCxpRUFBZUgsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVubnktbW92aWVzLy4vbWlkZGxld2FyZS9tb25nb2RiLnRzPzhmNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5jb25zdCBjb25uZWN0REIgPVxuICAoaGFuZGxlcjogKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB2b2lkKSA9PlxuICBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgICAgLy8gVXNlIGN1cnJlbnQgZGIgY29ubmVjdGlvblxuICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vbmdvVXJsID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMIHx8ICcnO1xuICAgIC8vIFVzZSBuZXcgZGIgY29ubmVjdGlvblxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QobW9uZ29VcmwsIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJtb25nb1VybCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwidXNlTmV3VXJsUGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/mongodb.ts\n");

/***/ }),

/***/ "./models/youtube.ts":
/*!***************************!*\
  !*** ./models/youtube.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst Youtube = new Schema({\n    id: {\n        type: String,\n        required: true\n    },\n    userId: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    url: {\n        type: String,\n        required: true\n    },\n    idVideo: {\n        type: String,\n        required: true\n    },\n    vote: {\n        type: String,\n        required: false\n    },\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    createdAt: Date\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Youtube) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Youtube', Youtube));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMveW91dHViZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDL0IsS0FBSyxDQUFDQyxNQUFNLEdBQUdELHdEQUFlO0FBRTlCLEtBQUssQ0FBQ0UsT0FBTyxHQUFHLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7SUFDMUJFLEVBQUUsRUFBRSxDQUFDO1FBQ0hDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQUFDO1FBQ1BILElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RFLEtBQUssRUFBRSxDQUFDO1FBQ05KLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RHLEdBQUcsRUFBRSxDQUFDO1FBQ0pMLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RJLE9BQU8sRUFBRSxDQUFDO1FBQ1JOLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RLLElBQUksRUFBRSxDQUFDO1FBQ0xQLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsS0FBSztJQUNqQixDQUFDO0lBQ0RNLEtBQUssRUFBRSxDQUFDO1FBQ05SLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RPLFdBQVcsRUFBRSxDQUFDO1FBQ1pULElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RRLFNBQVMsRUFBRUMsSUFBSTtBQUNqQixDQUFDO0FBRUQsaUVBQWVmLGdFQUF1QixJQUFJQSxxREFBYyxDQUFDLENBQVMsVUFBRUUsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5ueS1tb3ZpZXMvLi9tb2RlbHMveW91dHViZS50cz81MjExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmNvbnN0IFlvdXR1YmUgPSBuZXcgU2NoZW1hKHtcbiAgaWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHVzZXJJZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHVybDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgaWRWaWRlbzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdm90ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgY3JlYXRlZEF0OiBEYXRlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Zb3V0dWJlIHx8IG1vbmdvb3NlLm1vZGVsKCdZb3V0dWJlJywgWW91dHViZSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJZb3V0dWJlIiwiaWQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1c2VySWQiLCJlbWFpbCIsInVybCIsImlkVmlkZW8iLCJ2b3RlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZWRBdCIsIkRhdGUiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/youtube.ts\n");

/***/ }),

/***/ "./pages/api/videos.ts":
/*!*****************************!*\
  !*** ./pages/api/videos.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var models_youtube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models/youtube */ \"./models/youtube.ts\");\n/* harmony import */ var middleware_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! middleware/mongodb */ \"./middleware/mongodb.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === 'GET') {\n        try {\n            const videos = await models_youtube__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().sort({\n                createdAt: 'DESC'\n            }).exec();\n            res.status(200).json(videos);\n        } catch (e) {\n            console.error(e);\n            res.status(500).json({\n                message: 'Error'\n            });\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middleware_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdmlkZW9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUNNO2VBRzNCRSxPQUFPLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUUsQ0FBQztJQUNqRSxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDTiwyREFBWSxHQUFHUSxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsU0FBUyxFQUFFLENBQU07WUFBQyxDQUFDLEVBQUVDLElBQUk7WUFDcEVOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDTixNQUFNO1FBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUVPLENBQUMsRUFBRSxDQUFDO1lBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDO1lBQ2ZULEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNJLE9BQU8sRUFBRSxDQUFPO1lBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWYsOERBQVMsQ0FBQ0MsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5ueS1tb3ZpZXMvLi9wYWdlcy9hcGkvdmlkZW9zLnRzPzc1NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFlvdXR1YmUgZnJvbSAnbW9kZWxzL3lvdXR1YmUnO1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tICdtaWRkbGV3YXJlL21vbmdvZGInO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2aWRlb3MgPSBhd2FpdCBZb3V0dWJlLmZpbmQoKS5zb3J0KHsgY3JlYXRlZEF0OiAnREVTQycgfSkuZXhlYygpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odmlkZW9zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3InIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIoaGFuZGxlcik7XG4iXSwibmFtZXMiOlsiWW91dHViZSIsImNvbm5lY3REQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ2aWRlb3MiLCJmaW5kIiwic29ydCIsImNyZWF0ZWRBdCIsImV4ZWMiLCJzdGF0dXMiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/videos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/videos.ts"));
module.exports = __webpack_exports__;

})();