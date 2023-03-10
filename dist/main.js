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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_flying_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/flying_objects */ \"./src/scripts/flying_objects.js\");\n/* harmony import */ var _scripts_ducks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ducks */ \"./src/scripts/ducks.js\");\n/* harmony import */ var _scripts_crosshair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/crosshair */ \"./src/scripts/crosshair.js\");\n/* harmony import */ var _scripts_movement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/movement */ \"./src/scripts/movement.js\");\n\n\n\n\n// import {getRndInteger} from \"./scripts/helpers\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const difficulty = \"medium\";\n  const ducksArray = [];\n  const crosshair = new _scripts_crosshair__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  for (let i = 0; i < 20; i++) {\n    ducksArray.push(new _scripts_ducks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](difficulty));\n  }\n  document.addEventListener(\"keydown\", _scripts_movement__WEBPACK_IMPORTED_MODULE_3__.keyDownHandler);\n  document.addEventListener(\"keyup\", _scripts_movement__WEBPACK_IMPORTED_MODULE_3__.keyUpHandler);\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    for (let i = 0; i < ducksArray.length; i++) {\n      ducksArray[i].update();\n    }\n    crosshair.draw();\n  }\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFDakI7QUFDUztBQUNzQjtBQUNsRTs7QUFFQUssUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DLE1BQU1DLFVBQVUsR0FBRyxRQUFRO0VBQzNCLE1BQU1DLFVBQVUsR0FBRyxFQUFFO0VBQ3JCLE1BQU1DLFNBQVMsR0FBRyxJQUFJWCwwREFBUyxFQUFFO0VBQ2pDLEtBQUssSUFBSVksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDekJGLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLElBQUlkLHNEQUFJLENBQUNVLFVBQVUsQ0FBQyxDQUFDO0VBQ3pDO0VBRUFOLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFSCw2REFBYyxDQUFDO0VBQ3BERSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUYsMkRBQVksQ0FBQztFQUVoRCxTQUFTWSxPQUFPQSxDQUFBLEVBQUc7SUFDZkMscUJBQXFCLENBQUNELE9BQU8sQ0FBQztJQUM5QlAsR0FBRyxDQUFDUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVgsTUFBTSxDQUFDWSxLQUFLLEVBQUVaLE1BQU0sQ0FBQ2EsTUFBTSxDQUFDO0lBQ2hELEtBQUssSUFBSU4sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixVQUFVLENBQUNTLE1BQU0sRUFBRVAsQ0FBQyxFQUFFLEVBQUU7TUFDeENGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNRLE1BQU0sRUFBRTtJQUMxQjtJQUNBVCxTQUFTLENBQUNVLElBQUksRUFBRTtFQUNwQjtFQUNBUCxPQUFPLEVBQUU7QUFDYixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdkdWNraHVudGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZseWluZ09iamVjdCBmcm9tIFwiLi9zY3JpcHRzL2ZseWluZ19vYmplY3RzXCI7XG5pbXBvcnQgRHVjayBmcm9tIFwiLi9zY3JpcHRzL2R1Y2tzXCI7XG5pbXBvcnQgQ3Jvc3NoYWlyIGZyb20gXCIuL3NjcmlwdHMvY3Jvc3NoYWlyXCI7XG5pbXBvcnQgeyBrZXlEb3duSGFuZGxlciwga2V5VXBIYW5kbGVyIH0gZnJvbSBcIi4vc2NyaXB0cy9tb3ZlbWVudFwiO1xuLy8gaW1wb3J0IHtnZXRSbmRJbnRlZ2VyfSBmcm9tIFwiLi9zY3JpcHRzL2hlbHBlcnNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZGlmZmljdWx0eSA9IFwibWVkaXVtXCJcbiAgICBjb25zdCBkdWNrc0FycmF5ID0gW11cbiAgICBjb25zdCBjcm9zc2hhaXIgPSBuZXcgQ3Jvc3NoYWlyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgIGR1Y2tzQXJyYXkucHVzaChuZXcgRHVjayhkaWZmaWN1bHR5KSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHVja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZHVja3NBcnJheVtpXS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjcm9zc2hhaXIuZHJhdygpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG59KTsiXSwibmFtZXMiOlsiRmx5aW5nT2JqZWN0IiwiRHVjayIsIkNyb3NzaGFpciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGlmZmljdWx0eSIsImR1Y2tzQXJyYXkiLCJjcm9zc2hhaXIiLCJpIiwicHVzaCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImxlbmd0aCIsInVwZGF0ZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/crosshair.js":
/*!**********************************!*\
  !*** ./src/scripts/crosshair.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Crosshair {\n  constructor() {\n    this.img = new Image();\n    this.img.src = \"../BigDuckHunter/assets/crosshair.png\";\n    this.width = 50;\n    this.height = 50;\n    this.x = canvas.width / 2 - this.width / 2;\n    this.y = canvas.height / 2 - this.width / 2;\n  }\n  draw() {\n    const ctx = canvas.getContext(\"2d\");\n    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);\n  }\n\n  // move() {\n  //     if (leftPressed) {\n  //         this.x -= 2;\n  //     }\n  //     if (rightPressed) {\n  //         this.x += 2;\n  //     }\n  //     if (upPressed) {\n  //         this.y -= 2;\n  //     }\n  //     if (downPressed) {\n  //         this.y += 2;\n  //     }\n  //     this.draw();\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crosshair);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jcm9zc2hhaXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsQ0FBQztFQUNaQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJQyxLQUFLLEVBQUU7SUFDdEIsSUFBSSxDQUFDRCxHQUFHLENBQUNFLEdBQUcsR0FBRyx1Q0FBdUM7SUFDdEQsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxDQUFDLEdBQUlDLE1BQU0sQ0FBQ0gsS0FBSyxHQUFHLENBQUMsR0FBSyxJQUFJLENBQUNBLEtBQUssR0FBRyxDQUFFO0lBQzlDLElBQUksQ0FBQ0ksQ0FBQyxHQUFJRCxNQUFNLENBQUNGLE1BQU0sR0FBRyxDQUFDLEdBQUssSUFBSSxDQUFDRCxLQUFLLEdBQUcsQ0FBRTtFQUNuRDtFQUVBSyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQ0QsR0FBRyxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDSyxDQUFDLEVBQUUsSUFBSSxDQUFDRSxDQUFDLEVBQUUsSUFBSSxDQUFDSixLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7RUFDcEU7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0o7O0FBRUEsK0RBQWVOLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdkdWNraHVudGVyLy4vc3JjL3NjcmlwdHMvY3Jvc3NoYWlyLmpzPzVmMGQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3Jvc3NoYWlyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCIuLi9CaWdEdWNrSHVudGVyL2Fzc2V0cy9jcm9zc2hhaXIucG5nXCI7XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy54ID0gKGNhbnZhcy53aWR0aCAvIDIpIC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy55ID0gKGNhbnZhcy5oZWlnaHQgLyAyKSAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIC8vIG1vdmUoKSB7XG4gICAgLy8gICAgIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgIC8vICAgICAgICAgdGhpcy54IC09IDI7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHJpZ2h0UHJlc3NlZCkge1xuICAgIC8vICAgICAgICAgdGhpcy54ICs9IDI7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHVwUHJlc3NlZCkge1xuICAgIC8vICAgICAgICAgdGhpcy55IC09IDI7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGRvd25QcmVzc2VkKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnkgKz0gMjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLmRyYXcoKTtcbiAgICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3NzaGFpcjsiXSwibmFtZXMiOlsiQ3Jvc3NoYWlyIiwiY29uc3RydWN0b3IiLCJpbWciLCJJbWFnZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwieCIsImNhbnZhcyIsInkiLCJkcmF3IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/crosshair.js\n");

/***/ }),

/***/ "./src/scripts/ducks.js":
/*!******************************!*\
  !*** ./src/scripts/ducks.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _flying_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flying_objects */ \"./src/scripts/flying_objects.js\");\n\nclass Duck extends _flying_objects__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(difficulty) {\n    super(difficulty);\n    this.img = new Image();\n    this.img.src = \"../BigDuckHunter/assets/kisspng-mallard-duck-bird-clip-art.png\";\n  }\n  draw() {\n    const ctx = canvas.getContext(\"2d\");\n    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);\n    if (this.x - this.width > canvas.width || this.x + this.width * 2 < 0) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.height > canvas.height || this.y + this.height * 2 < 0) {\n      this.dy = -this.dy;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Duck);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kdWNrcy5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUE0QztBQUU1QyxNQUFNQyxJQUFJLFNBQVNELHVEQUFZLENBQUM7RUFDNUJFLFdBQVdBLENBQUNDLFVBQVUsRUFBRTtJQUNwQixLQUFLLENBQUNBLFVBQVUsQ0FBQztJQUNqQixJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJQyxLQUFLLEVBQUU7SUFDdEIsSUFBSSxDQUFDRCxHQUFHLENBQUNFLEdBQUcsR0FBRyxnRUFBZ0U7RUFDbkY7RUFFQUMsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsTUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkNGLEdBQUcsQ0FBQ0csU0FBUyxDQUFDLElBQUksQ0FBQ1AsR0FBRyxFQUFFLElBQUksQ0FBQ1EsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0lBQ2hFLElBQUksSUFBSSxDQUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDRSxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0ssS0FBSyxJQUFJLElBQUksQ0FBQ0YsQ0FBQyxHQUFJLElBQUksQ0FBQ0UsS0FBSyxHQUFDLENBQUUsR0FBRyxDQUFDLEVBQUU7TUFDbkUsSUFBSSxDQUFDRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUNBLEVBQUU7SUFDdEI7SUFDQSxJQUFJLElBQUksQ0FBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsTUFBTSxHQUFHTixNQUFNLENBQUNNLE1BQU0sSUFBSSxJQUFJLENBQUNGLENBQUMsR0FBSSxJQUFJLENBQUNFLE1BQU0sR0FBQyxDQUFFLEdBQUcsQ0FBQyxFQUFFO01BQ3RFLElBQUksQ0FBQ0UsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDQSxFQUFFO0lBQ3RCO0VBQ0o7QUFDSjtBQUVBLCtEQUFlaEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2R1Y2todW50ZXIvLi9zcmMvc2NyaXB0cy9kdWNrcy5qcz9mOGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbHlpbmdPYmplY3QgZnJvbSBcIi4vZmx5aW5nX29iamVjdHNcIjtcblxuY2xhc3MgRHVjayBleHRlbmRzIEZseWluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZGlmZmljdWx0eSkge1xuICAgICAgICBzdXBlcihkaWZmaWN1bHR5KTtcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCIuLi9CaWdEdWNrSHVudGVyL2Fzc2V0cy9raXNzcG5nLW1hbGxhcmQtZHVjay1iaXJkLWNsaXAtYXJ0LnBuZ1wiO1xuICAgIH1cbiAgICAgICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBpZiAodGhpcy54IC0gdGhpcy53aWR0aCA+IGNhbnZhcy53aWR0aCB8fCB0aGlzLnggKyAodGhpcy53aWR0aCoyKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtdGhpcy5keFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgLSB0aGlzLmhlaWdodCA+IGNhbnZhcy5oZWlnaHQgfHwgdGhpcy55ICsgKHRoaXMuaGVpZ2h0KjIpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IER1Y2s7Il0sIm5hbWVzIjpbIkZseWluZ09iamVjdCIsIkR1Y2siLCJjb25zdHJ1Y3RvciIsImRpZmZpY3VsdHkiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXciLCJjdHgiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImR4IiwiZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ducks.js\n");

/***/ }),

/***/ "./src/scripts/flying_objects.js":
/*!***************************************!*\
  !*** ./src/scripts/flying_objects.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/scripts/helpers.js\");\n\nclass FlyingObject {\n  constructor(difficulty) {\n    this.width = 45;\n    this.height = 40;\n    this.x = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getRndInteger)(0, canvas.width);\n    this.y = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getRndInteger)(0, canvas.height);\n    this.dx = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getVelHor)(difficulty);\n    this.dy = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getVelVert)(difficulty);\n  }\n  update() {\n    this.x += this.dx;\n    this.y += this.dy;\n    this.draw();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlyingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mbHlpbmdfb2JqZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUErRDtBQUUvRCxNQUFNRyxZQUFZLENBQUM7RUFDZkMsV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHUix1REFBYSxDQUFDLENBQUMsRUFBRVMsTUFBTSxDQUFDSCxLQUFLLENBQUM7SUFDdkMsSUFBSSxDQUFDSSxDQUFDLEdBQUdWLHVEQUFhLENBQUMsQ0FBQyxFQUFFUyxNQUFNLENBQUNGLE1BQU0sQ0FBQztJQUN4QyxJQUFJLENBQUNJLEVBQUUsR0FBR1YsbURBQVMsQ0FBQ0ksVUFBVSxDQUFDO0lBQy9CLElBQUksQ0FBQ08sRUFBRSxHQUFHVixvREFBVSxDQUFDRyxVQUFVLENBQUM7RUFDcEM7RUFFQVEsTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDTCxDQUFDLElBQUksSUFBSSxDQUFDRyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0QsQ0FBQyxJQUFJLElBQUksQ0FBQ0UsRUFBRTtJQUNqQixJQUFJLENBQUNFLElBQUksRUFBRTtFQUNmO0FBQ0o7QUFFQSwrREFBZVgsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2R1Y2todW50ZXIvLi9zcmMvc2NyaXB0cy9mbHlpbmdfb2JqZWN0cy5qcz8xZjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0Um5kSW50ZWdlciwgZ2V0VmVsSG9yLCBnZXRWZWxWZXJ0fSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNsYXNzIEZseWluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoZGlmZmljdWx0eSkge1xuICAgICAgICB0aGlzLndpZHRoID0gNDU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgICAgIHRoaXMueCA9IGdldFJuZEludGVnZXIoMCwgY2FudmFzLndpZHRoKTtcbiAgICAgICAgdGhpcy55ID0gZ2V0Um5kSW50ZWdlcigwLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5keCA9IGdldFZlbEhvcihkaWZmaWN1bHR5KTtcbiAgICAgICAgdGhpcy5keSA9IGdldFZlbFZlcnQoZGlmZmljdWx0eSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx5aW5nT2JqZWN0OyJdLCJuYW1lcyI6WyJnZXRSbmRJbnRlZ2VyIiwiZ2V0VmVsSG9yIiwiZ2V0VmVsVmVydCIsIkZseWluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwiZGlmZmljdWx0eSIsIndpZHRoIiwiaGVpZ2h0IiwieCIsImNhbnZhcyIsInkiLCJkeCIsImR5IiwidXBkYXRlIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/flying_objects.js\n");

/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRndInteger\": function() { return /* binding */ getRndInteger; },\n/* harmony export */   \"getVelHor\": function() { return /* binding */ getVelHor; },\n/* harmony export */   \"getVelVert\": function() { return /* binding */ getVelVert; }\n/* harmony export */ });\nfunction getRndInteger(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n}\nfunction getVelHor(difficulty) {\n  let speedInt = 0;\n  switch (difficulty) {\n    case \"easy\":\n      speedInt = 2;\n      break;\n    case \"medium\":\n      speedInt = 3;\n      break;\n    case \"hard\":\n      speedInt = 5;\n      break;\n  }\n  let vel = getRndInteger(-speedInt, speedInt);\n  while (vel === 0) {\n    vel = getRndInteger(-speedInt, speedInt);\n  }\n  return vel;\n}\nfunction getVelVert(difficulty) {\n  let speedInt = 0;\n  switch (difficulty) {\n    case \"easy\":\n      speedInt = 1;\n      break;\n    case \"medium\":\n      speedInt = 2;\n      break;\n    case \"hard\":\n      speedInt = 3;\n      break;\n  }\n  let vel = getRndInteger(-speedInt, speedInt);\n  while (vel === 0) {\n    vel = getRndInteger(-speedInt, speedInt);\n  }\n  return vel;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWxwZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLGFBQWFBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQ3BDLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxJQUFJSCxHQUFHLEdBQUdELEdBQUcsQ0FBQyxDQUFFLEdBQUdBLEdBQUc7QUFDekQ7QUFFTyxTQUFTSyxTQUFTQSxDQUFDQyxVQUFVLEVBQUU7RUFDbEMsSUFBSUMsUUFBUSxHQUFHLENBQUM7RUFDaEIsUUFBT0QsVUFBVTtJQUNiLEtBQUssTUFBTTtNQUNQQyxRQUFRLEdBQUcsQ0FBQztNQUNaO0lBQ0osS0FBSyxRQUFRO01BQ1RBLFFBQVEsR0FBRyxDQUFDO01BQ1o7SUFDSixLQUFLLE1BQU07TUFDUEEsUUFBUSxHQUFHLENBQUM7TUFDWjtFQUFNO0VBRWQsSUFBSUMsR0FBRyxHQUFHVCxhQUFhLENBQUMsQ0FBQ1EsUUFBUSxFQUFFQSxRQUFRLENBQUM7RUFDNUMsT0FBT0MsR0FBRyxLQUFLLENBQUMsRUFBRTtJQUNkQSxHQUFHLEdBQUdULGFBQWEsQ0FBQyxDQUFDUSxRQUFRLEVBQUVBLFFBQVEsQ0FBQztFQUM1QztFQUNBLE9BQU9DLEdBQUc7QUFDZDtBQUVPLFNBQVNDLFVBQVVBLENBQUVILFVBQVUsRUFBRTtFQUNwQyxJQUFJQyxRQUFRLEdBQUcsQ0FBQztFQUNoQixRQUFPRCxVQUFVO0lBQ2IsS0FBSyxNQUFNO01BQ1BDLFFBQVEsR0FBRyxDQUFDO01BQ1o7SUFDSixLQUFLLFFBQVE7TUFDVEEsUUFBUSxHQUFHLENBQUM7TUFDWjtJQUNKLEtBQUssTUFBTTtNQUNQQSxRQUFRLEdBQUcsQ0FBQztNQUNaO0VBQU07RUFHZCxJQUFJQyxHQUFHLEdBQUdULGFBQWEsQ0FBQyxDQUFDUSxRQUFRLEVBQUVBLFFBQVEsQ0FBQztFQUM1QyxPQUFPQyxHQUFHLEtBQUssQ0FBQyxFQUFFO0lBQ2RBLEdBQUcsR0FBR1QsYUFBYSxDQUFDLENBQUNRLFFBQVEsRUFBRUEsUUFBUSxDQUFDO0VBQzVDO0VBQ0EsT0FBT0MsR0FBRztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnZHVja2h1bnRlci8uL3NyYy9zY3JpcHRzL2hlbHBlcnMuanM/NGVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Um5kSW50ZWdlcihtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVsSG9yKGRpZmZpY3VsdHkpIHtcbiAgICBsZXQgc3BlZWRJbnQgPSAwO1xuICAgIHN3aXRjaChkaWZmaWN1bHR5KSB7XG4gICAgICAgIGNhc2UgXCJlYXN5XCI6XG4gICAgICAgICAgICBzcGVlZEludCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgc3BlZWRJbnQgPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJoYXJkXCI6XG4gICAgICAgICAgICBzcGVlZEludCA9IDU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IHZlbCA9IGdldFJuZEludGVnZXIoLXNwZWVkSW50LCBzcGVlZEludCk7XG4gICAgd2hpbGUgKHZlbCA9PT0gMCkge1xuICAgICAgICB2ZWwgPSBnZXRSbmRJbnRlZ2VyKC1zcGVlZEludCwgc3BlZWRJbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVsVmVydCAoZGlmZmljdWx0eSkge1xuICAgIGxldCBzcGVlZEludCA9IDA7XG4gICAgc3dpdGNoKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgY2FzZSBcImVhc3lcIjpcbiAgICAgICAgICAgIHNwZWVkSW50ID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICBzcGVlZEludCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhhcmRcIjpcbiAgICAgICAgICAgIHNwZWVkSW50ID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCB2ZWwgPSBnZXRSbmRJbnRlZ2VyKC1zcGVlZEludCwgc3BlZWRJbnQpO1xuICAgIHdoaWxlICh2ZWwgPT09IDApIHtcbiAgICAgICAgdmVsID0gZ2V0Um5kSW50ZWdlcigtc3BlZWRJbnQsIHNwZWVkSW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZlbDtcbn0iXSwibmFtZXMiOlsiZ2V0Um5kSW50ZWdlciIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldFZlbEhvciIsImRpZmZpY3VsdHkiLCJzcGVlZEludCIsInZlbCIsImdldFZlbFZlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/helpers.js\n");

/***/ }),

/***/ "./src/scripts/movement.js":
/*!*********************************!*\
  !*** ./src/scripts/movement.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyDownHandler\": function() { return /* binding */ keyDownHandler; },\n/* harmony export */   \"keyUpHandler\": function() { return /* binding */ keyUpHandler; }\n/* harmony export */ });\nfunction keyDownHandler(event) {\n  switch (event.keyCode) {\n    case 37:\n      leftPressed = true;\n      break;\n    case 39:\n      rightPressed = true;\n      break;\n    case 38:\n      upPressed = true;\n      break;\n    case 40:\n      downPressed = true;\n      break;\n  }\n}\nfunction keyUpHandler(event) {\n  switch (event.keyCode) {\n    case 37:\n      leftPressed = false;\n      break;\n    case 39:\n      rightPressed = false;\n      break;\n    case 38:\n      upPressed = false;\n      break;\n    case 40:\n      downPressed = false;\n      break;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZlbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLFNBQVNBLGNBQWNBLENBQUNDLEtBQUssRUFBRTtFQUNsQyxRQUFRQSxLQUFLLENBQUNDLE9BQU87SUFDakIsS0FBSyxFQUFFO01BQ0hDLFdBQVcsR0FBRyxJQUFJO01BQ2xCO0lBQ0osS0FBSyxFQUFFO01BQ0hDLFlBQVksR0FBRyxJQUFJO01BQ25CO0lBQ0osS0FBSyxFQUFFO01BQ0hDLFNBQVMsR0FBRyxJQUFJO01BQ2hCO0lBQ0osS0FBSyxFQUFFO01BQ0hDLFdBQVcsR0FBRyxJQUFJO01BQ2xCO0VBQU07QUFFbEI7QUFFTyxTQUFTQyxZQUFZQSxDQUFDTixLQUFLLEVBQUU7RUFDaEMsUUFBUUEsS0FBSyxDQUFDQyxPQUFPO0lBQ2pCLEtBQUssRUFBRTtNQUNIQyxXQUFXLEdBQUcsS0FBSztNQUNuQjtJQUNKLEtBQUssRUFBRTtNQUNIQyxZQUFZLEdBQUcsS0FBSztNQUNwQjtJQUNKLEtBQUssRUFBRTtNQUNIQyxTQUFTLEdBQUcsS0FBSztNQUNqQjtJQUNKLEtBQUssRUFBRTtNQUNIQyxXQUFXLEdBQUcsS0FBSztNQUNuQjtFQUFNO0FBRWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnZHVja2h1bnRlci8uL3NyYy9zY3JpcHRzL21vdmVtZW50LmpzPzE1ZjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleVVwSGFuZGxlcihldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIHVwUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJrZXlEb3duSGFuZGxlciIsImV2ZW50Iiwia2V5Q29kZSIsImxlZnRQcmVzc2VkIiwicmlnaHRQcmVzc2VkIiwidXBQcmVzc2VkIiwiZG93blByZXNzZWQiLCJrZXlVcEhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/movement.js\n");

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