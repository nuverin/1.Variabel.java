/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/src/components/accord.js":
/*!***************************************!*\
  !*** ./dist/src/components/accord.js ***!
  \***************************************/
/***/ (() => {

const accord = document.querySelectorAll(".accordion__header");

accord.forEach((acc) => {
  acc.addEventListener("click", (ev) => {
    acc.classList.toggle("active");

    const elem = acc.nextElementSibling;
    if (acc.classList.contains("active")) {
      elem.style.maxheight = elem.scrollHeight + "px";
    } else {
      elem.style.maxheight = "0";
    }
  });
});


/***/ }),

/***/ "./dist/src/components/carousel.js":
/*!*****************************************!*\
  !*** ./dist/src/components/carousel.js ***!
  \*****************************************/
/***/ (() => {

document.querySelectorAll(".carousel").forEach((car) => {
  const items = car.querySelectorAll(".carousel__item");
  const button = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });
  car.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel__nav">
    ${button.join("")}
    </div>
  `
  );
  const buttons = car.querySelectorAll(".carousel__button");
  buttons.forEach((butn, s) => {
    butn.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("carousel__item-selected"));
      buttons.forEach((butt) =>
        butt.classList.remove("carousel__button-selected")
      );
      // selected frist carousel
      items[s].classList.add("carousel__item-selected");
      butn.classList.add("carousel__button-selected");
    });
  });
});


/***/ }),

/***/ "./dist/src/components/modal.js":
/*!**************************************!*\
  !*** ./dist/src/components/modal.js ***!
  \**************************************/
/***/ (() => {

// modal system
const modals = document.querySelectorAll(".modal");
const btns = document.getElementsByClassName("btn-open");
const close = document.querySelectorAll(".btn-cancel");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = (e) => {
//     e.preventDefault();
//     modals.classList.add("active");
//   };
// }
// for (var i = 0; i < close.length; i++) {
//   close[i].onclick = (e) => {
//     modals.classList.remove("active");
//   };
// }

// open modal click
[...btns].forEach((btn, s) => {
  btn.addEventListener("click", () => {
    modals[s].classList.add("active");
  });
});
// close modal if you click cancel
[...close].forEach((close, ex) => {
  close.addEventListener("click", () => {
    modals[ex].classList.remove("active");
  });
});

// when user click windows close
window.onclick = (event) => {
  const elem = event.target;
  if (elem.classList.contains("active")) {
    for (var i of modals) {
      i.classList.remove("active");
    }
  }
};


/***/ }),

/***/ "./dist/src/components/sidebar.js":
/*!****************************************!*\
  !*** ./dist/src/components/sidebar.js ***!
  \****************************************/
/***/ (() => {

const close = document.querySelector("[data-dismiss]");
const sidebar = document.querySelector("#sidebar");
const btn = document.querySelector(".btn_open");

btn.addEventListener("click", () => {
  sidebar.classList.add("width");
});
console.log(sidebar);
close.addEventListener("click", () => {
  sidebar.classList.remove("width");
});
window.onclick = (es) => {
  const item = es.target;
  if (item.classList.contains("width")) {
    sidebar.classList.remove("width");
  }
};


/***/ }),

/***/ "./scss/App.scss":
/*!***********************!*\
  !*** ./scss/App.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./dist/src/import.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal.js */ "./dist/src/components/modal.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_modal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar.js */ "./dist/src/components/sidebar.js");
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_sidebar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_accord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accord */ "./dist/src/components/accord.js");
/* harmony import */ var _components_accord__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_accord__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carousel */ "./dist/src/components/carousel.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_App_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/App.scss */ "./scss/App.scss");






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map