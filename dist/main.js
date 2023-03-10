/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_flying_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/flying_object */ \"./src/scripts/flying_object.js\");\n\n// import {getRndInteger} from \"./scripts/helpers\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const difficulty = \"hard\";\n  const flyingObjectsArray = [];\n  for (let i = 0; i < 30; i++) {\n    flyingObjectsArray.push(new _scripts_flying_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](difficulty));\n  }\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    for (let i = 0; i < flyingObjectsArray.length; i++) {\n      flyingObjectsArray[i].update();\n    }\n  }\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUQ7QUFDbkQ7O0FBR0FDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNuQyxNQUFNQyxVQUFVLEdBQUcsTUFBTTtFQUN6QixNQUFNQyxrQkFBa0IsR0FBRyxFQUFFO0VBQzdCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDekJELGtCQUFrQixDQUFDRSxJQUFJLENBQUMsSUFBSVYsOERBQVksQ0FBQ08sVUFBVSxDQUFDLENBQUM7RUFDekQ7RUFFQSxTQUFTSSxPQUFPQSxDQUFBLEVBQUc7SUFDZkMscUJBQXFCLENBQUNELE9BQU8sQ0FBQztJQUM5Qk4sR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVYsTUFBTSxDQUFDVyxLQUFLLEVBQUVYLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDO0lBQ2hELEtBQUssSUFBSU4sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxrQkFBa0IsQ0FBQ1EsTUFBTSxFQUFFUCxDQUFDLEVBQUUsRUFBRTtNQUNoREQsa0JBQWtCLENBQUNDLENBQUMsQ0FBQyxDQUFDUSxNQUFNLEVBQUU7SUFDbEM7RUFDSjtFQUNBTixPQUFPLEVBQUU7QUFDYixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdkdWNraHVudGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZseWluZ09iamVjdCBmcm9tIFwiLi9zY3JpcHRzL2ZseWluZ19vYmplY3RcIjtcbi8vIGltcG9ydCB7Z2V0Um5kSW50ZWdlcn0gZnJvbSBcIi4vc2NyaXB0cy9oZWxwZXJzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZGlmZmljdWx0eSA9IFwiaGFyZFwiXG4gICAgY29uc3QgZmx5aW5nT2JqZWN0c0FycmF5ID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgZmx5aW5nT2JqZWN0c0FycmF5LnB1c2gobmV3IEZseWluZ09iamVjdChkaWZmaWN1bHR5KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmx5aW5nT2JqZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmbHlpbmdPYmplY3RzQXJyYXlbaV0udXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0ZSgpO1xufSk7Il0sIm5hbWVzIjpbIkZseWluZ09iamVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpZmZpY3VsdHkiLCJmbHlpbmdPYmplY3RzQXJyYXkiLCJpIiwicHVzaCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImxlbmd0aCIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/flying_object.js":
/*!**************************************!*\
  !*** ./src/scripts/flying_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/scripts/helpers.js\");\n\nclass FlyingObject {\n  constructor(difficulty) {\n    this.width = 60;\n    this.height = 30;\n    this.x = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getRndInteger)(0, canvas.width);\n    this.y = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getRndInteger)(0, canvas.height);\n    this.dx = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getVelHor)(difficulty);\n    this.dy = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getVelVert)(difficulty);\n  }\n  draw() {\n    const ctx = canvas.getContext(\"2d\");\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n    if (this.x - this.width > canvas.width || this.x + this.width * 2 < 0) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.height > canvas.height || this.y + this.height * 2 < 0) {\n      this.dy = -this.dy;\n    }\n  }\n  update() {\n    this.x += this.dx;\n    this.y += this.dy;\n    this.draw();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlyingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mbHlpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQStEO0FBRS9ELE1BQU1HLFlBQVksQ0FBQztFQUNmQyxXQUFXQSxDQUFDQyxVQUFVLEVBQUU7SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxDQUFDLEdBQUdSLHVEQUFhLENBQUMsQ0FBQyxFQUFFUyxNQUFNLENBQUNILEtBQUssQ0FBQztJQUN2QyxJQUFJLENBQUNJLENBQUMsR0FBR1YsdURBQWEsQ0FBQyxDQUFDLEVBQUVTLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDO0lBQ3hDLElBQUksQ0FBQ0ksRUFBRSxHQUFHVixtREFBUyxDQUFDSSxVQUFVLENBQUM7SUFDL0IsSUFBSSxDQUFDTyxFQUFFLEdBQUdWLG9EQUFVLENBQUNHLFVBQVUsQ0FBQztFQUNwQztFQUVBUSxJQUFJQSxDQUFBLEVBQUc7SUFDSCxNQUFNQyxHQUFHLEdBQUdMLE1BQU0sQ0FBQ00sVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQ0QsR0FBRyxDQUFDRSxTQUFTLEdBQUcsS0FBSztJQUNyQkYsR0FBRyxDQUFDRyxRQUFRLENBQUMsSUFBSSxDQUFDVCxDQUFDLEVBQUMsSUFBSSxDQUFDRSxDQUFDLEVBQUMsSUFBSSxDQUFDSixLQUFLLEVBQUMsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDbEQsSUFBSSxJQUFJLENBQUNDLENBQUMsR0FBRyxJQUFJLENBQUNGLEtBQUssR0FBR0csTUFBTSxDQUFDSCxLQUFLLElBQUksSUFBSSxDQUFDRSxDQUFDLEdBQUksSUFBSSxDQUFDRixLQUFLLEdBQUMsQ0FBRSxHQUFHLENBQUMsRUFBRTtNQUNuRSxJQUFJLENBQUNLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQ0EsRUFBRTtJQUN0QjtJQUNBLElBQUksSUFBSSxDQUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDSCxNQUFNLEdBQUdFLE1BQU0sQ0FBQ0YsTUFBTSxJQUFJLElBQUksQ0FBQ0csQ0FBQyxHQUFJLElBQUksQ0FBQ0gsTUFBTSxHQUFDLENBQUUsR0FBRyxDQUFDLEVBQUU7TUFDdEUsSUFBSSxDQUFDSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUNBLEVBQUU7SUFDdEI7RUFDSjtFQUVBTSxNQUFNQSxDQUFBLEVBQUc7SUFDTCxJQUFJLENBQUNWLENBQUMsSUFBSSxJQUFJLENBQUNHLEVBQUU7SUFDakIsSUFBSSxDQUFDRCxDQUFDLElBQUksSUFBSSxDQUFDRSxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsSUFBSSxFQUFFO0VBQ2Y7QUFDSjtBQUVBLCtEQUFlVixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnZHVja2h1bnRlci8uL3NyYy9zY3JpcHRzL2ZseWluZ19vYmplY3QuanM/MDVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFJuZEludGVnZXIsIGdldFZlbEhvciwgZ2V0VmVsVmVydH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5jbGFzcyBGbHlpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDYwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMwO1xuICAgICAgICB0aGlzLnggPSBnZXRSbmRJbnRlZ2VyKDAsIGNhbnZhcy53aWR0aCk7XG4gICAgICAgIHRoaXMueSA9IGdldFJuZEludGVnZXIoMCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHggPSBnZXRWZWxIb3IoZGlmZmljdWx0eSk7XG4gICAgICAgIHRoaXMuZHkgPSBnZXRWZWxWZXJ0KGRpZmZpY3VsdHkpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCx0aGlzLnksdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLnggLSB0aGlzLndpZHRoID4gY2FudmFzLndpZHRoIHx8IHRoaXMueCArICh0aGlzLndpZHRoKjIpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSAtIHRoaXMuaGVpZ2h0ID4gY2FudmFzLmhlaWdodCB8fCB0aGlzLnkgKyAodGhpcy5oZWlnaHQqMikgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZseWluZ09iamVjdDsiXSwibmFtZXMiOlsiZ2V0Um5kSW50ZWdlciIsImdldFZlbEhvciIsImdldFZlbFZlcnQiLCJGbHlpbmdPYmplY3QiLCJjb25zdHJ1Y3RvciIsImRpZmZpY3VsdHkiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJjYW52YXMiLCJ5IiwiZHgiLCJkeSIsImRyYXciLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/flying_object.js\n");

/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRndInteger\": function() { return /* binding */ getRndInteger; },\n/* harmony export */   \"getVelHor\": function() { return /* binding */ getVelHor; },\n/* harmony export */   \"getVelVert\": function() { return /* binding */ getVelVert; }\n/* harmony export */ });\nfunction getRndInteger(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n}\nfunction getVelHor(difficulty) {\n  let speedInt = 0;\n  switch (difficulty) {\n    case \"easy\":\n      speedInt = 2;\n      break;\n    case \"medium\":\n      speedInt = 3;\n      break;\n    case \"hard\":\n      speedInt = 5;\n      break;\n  }\n  let vel = getRndInteger(-speedInt, speedInt);\n  while (vel === 0) {\n    vel = getRndInteger(-speedInt, speedInt);\n  }\n  return vel;\n}\nfunction getVelVert(difficulty) {\n  let speedInt = 0;\n  switch (difficulty) {\n    case \"easy\":\n      speedInt = 1;\n      break;\n    case \"medium\":\n      speedInt = 2;\n      break;\n    case \"hard\":\n      speedInt = 3;\n      break;\n  }\n  let vel = getRndInteger(-speedInt, speedInt);\n  while (vel === 0) {\n    vel = getRndInteger(-speedInt, speedInt);\n  }\n  return vel;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWxwZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLGFBQWFBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQ3BDLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxJQUFJSCxHQUFHLEdBQUdELEdBQUcsQ0FBQyxDQUFFLEdBQUdBLEdBQUc7QUFDekQ7QUFFTyxTQUFTSyxTQUFTQSxDQUFDQyxVQUFVLEVBQUU7RUFDbEMsSUFBSUMsUUFBUSxHQUFHLENBQUM7RUFDaEIsUUFBT0QsVUFBVTtJQUNiLEtBQUssTUFBTTtNQUNQQyxRQUFRLEdBQUcsQ0FBQztNQUNaO0lBQ0osS0FBSyxRQUFRO01BQ1RBLFFBQVEsR0FBRyxDQUFDO01BQ1o7SUFDSixLQUFLLE1BQU07TUFDUEEsUUFBUSxHQUFHLENBQUM7TUFDWjtFQUFNO0VBRWQsSUFBSUMsR0FBRyxHQUFHVCxhQUFhLENBQUMsQ0FBQ1EsUUFBUSxFQUFFQSxRQUFRLENBQUM7RUFDNUMsT0FBT0MsR0FBRyxLQUFLLENBQUMsRUFBRTtJQUNkQSxHQUFHLEdBQUdULGFBQWEsQ0FBQyxDQUFDUSxRQUFRLEVBQUVBLFFBQVEsQ0FBQztFQUM1QztFQUNBLE9BQU9DLEdBQUc7QUFDZDtBQUVPLFNBQVNDLFVBQVVBLENBQUVILFVBQVUsRUFBRTtFQUNwQyxJQUFJQyxRQUFRLEdBQUcsQ0FBQztFQUNoQixRQUFPRCxVQUFVO0lBQ2IsS0FBSyxNQUFNO01BQ1BDLFFBQVEsR0FBRyxDQUFDO01BQ1o7SUFDSixLQUFLLFFBQVE7TUFDVEEsUUFBUSxHQUFHLENBQUM7TUFDWjtJQUNKLEtBQUssTUFBTTtNQUNQQSxRQUFRLEdBQUcsQ0FBQztNQUNaO0VBQU07RUFHZCxJQUFJQyxHQUFHLEdBQUdULGFBQWEsQ0FBQyxDQUFDUSxRQUFRLEVBQUVBLFFBQVEsQ0FBQztFQUM1QyxPQUFPQyxHQUFHLEtBQUssQ0FBQyxFQUFFO0lBQ2RBLEdBQUcsR0FBR1QsYUFBYSxDQUFDLENBQUNRLFFBQVEsRUFBRUEsUUFBUSxDQUFDO0VBQzVDO0VBQ0EsT0FBT0MsR0FBRztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnZHVja2h1bnRlci8uL3NyYy9zY3JpcHRzL2hlbHBlcnMuanM/NGVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Um5kSW50ZWdlcihtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVsSG9yKGRpZmZpY3VsdHkpIHtcbiAgICBsZXQgc3BlZWRJbnQgPSAwO1xuICAgIHN3aXRjaChkaWZmaWN1bHR5KSB7XG4gICAgICAgIGNhc2UgXCJlYXN5XCI6XG4gICAgICAgICAgICBzcGVlZEludCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgc3BlZWRJbnQgPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJoYXJkXCI6XG4gICAgICAgICAgICBzcGVlZEludCA9IDU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IHZlbCA9IGdldFJuZEludGVnZXIoLXNwZWVkSW50LCBzcGVlZEludCk7XG4gICAgd2hpbGUgKHZlbCA9PT0gMCkge1xuICAgICAgICB2ZWwgPSBnZXRSbmRJbnRlZ2VyKC1zcGVlZEludCwgc3BlZWRJbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVsVmVydCAoZGlmZmljdWx0eSkge1xuICAgIGxldCBzcGVlZEludCA9IDA7XG4gICAgc3dpdGNoKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgY2FzZSBcImVhc3lcIjpcbiAgICAgICAgICAgIHNwZWVkSW50ID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICBzcGVlZEludCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhhcmRcIjpcbiAgICAgICAgICAgIHNwZWVkSW50ID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCB2ZWwgPSBnZXRSbmRJbnRlZ2VyKC1zcGVlZEludCwgc3BlZWRJbnQpO1xuICAgIHdoaWxlICh2ZWwgPT09IDApIHtcbiAgICAgICAgdmVsID0gZ2V0Um5kSW50ZWdlcigtc3BlZWRJbnQsIHNwZWVkSW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZlbDtcbn0iXSwibmFtZXMiOlsiZ2V0Um5kSW50ZWdlciIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldFZlbEhvciIsImRpZmZpY3VsdHkiLCJzcGVlZEludCIsInZlbCIsImdldFZlbFZlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/helpers.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdkdWNraHVudGVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;