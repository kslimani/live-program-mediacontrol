(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["LiveProgramMediaControl"] = factory(require("clappr"));
	else
		root["LiveProgramMediaControl"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clappr = __webpack_require__(1);

var _styles = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A live stream only mediacontrol which display current program.
 * @class LiveProgramMediaControl
 * @constructor
 * @extends MediaControl
 */
var LiveProgramMediaControl =
/*#__PURE__*/
function (_MediaControl) {
  _inherits(LiveProgramMediaControl, _MediaControl);

  function LiveProgramMediaControl(options) {
    var _this;

    _classCallCheck(this, LiveProgramMediaControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LiveProgramMediaControl).call(this, options));
    _this._seekBarHidden = false;
    _this._setSeekBarHidden = !_clappr.Browser.isiOS; // Fix seekbar scrubber on iPhone

    _this._leftPanelWidth = 0;
    _this._rightPanelWidth = 0;
    _this._liveProgramLeft = 0;
    _this._liveProgramWidth = 0;
    var pluginOpts = options.liveProgramMediaControl;

    _this._setProgram(pluginOpts.program);

    _this._progressColor = pluginOpts && pluginOpts.progressColor || null;
    _this._paddingWidth = pluginOpts && pluginOpts.paddingWidth || 18;
    return _this;
  }

  _createClass(LiveProgramMediaControl, [{
    key: "_setProgram",
    value: function _setProgram(program) {
      !program && (program = {});
      this._program = {};
      this._program.title = program.title || '';
      this._program.startAt = program.startAt || '00:00';
      this._program.endAt = program.endAt || '00:00';
      this._program.progress = program.progress || 0;
    } // get isLiveWithoutDVR() {
    //   return this.container && this.container.getPlaybackType() === Playback.LIVE && !this.container.isDvrInUse()
    // }

  }, {
    key: "resizeLiveProgram",
    value: function resizeLiveProgram(size) {
      if (!this.$liveProgram) {
        return;
      } // Get left mediacontrol panel width (with fixed padding)


      var lpw = this.$leftPanel.width();

      if (lpw > 0) {
        this._leftPanelWidth = lpw + this._paddingWidth;
      } // Get right mediacontrol panel width (with fixed padding)


      var rpw = this.$rightPanel.width();

      if (rpw > 0) {
        this._rightPanelWidth = rpw + this._paddingWidth;
      } // Calculate live program bar position and width


      var layerWidth = this.$layer.width();

      if (layerWidth > 0 && this._leftPanelWidth > 0) {
        var w = layerWidth - this._leftPanelWidth - this._rightPanelWidth;

        if (w > 0) {
          this._liveProgramLeft = this._leftPanelWidth;
          this._liveProgramWidth = w;
        }
      } // Update live program bar


      if (this._liveProgramLeft > 0 && this._liveProgramWidth > 0 && this._liveProgramWidth !== this.$liveProgram.width()) {
        this.$liveProgram.css({
          left: "".concat(this._liveProgramLeft, "px"),
          width: "".concat(this._liveProgramWidth, "px")
        });
      }
    }
  }, {
    key: "renderLiveProgramBar",
    value: function renderLiveProgramBar() {
      // Live program bar is rendered only if playback is live without DVR
      // if (!this.isLiveWithoutDVR) {
      //   return
      // }
      this.$layer = this.$el.find('.media-control-layer');
      this.$progressBar = (0, _clappr.$)("<div />").addClass("live-program-progress-bar").attr('data-media-control', '');
      this.$progressBarBg = (0, _clappr.$)("<div />").addClass("live-program-progress-bar-bg").attr('data-media-control', '');
      this.$progressBarFill = (0, _clappr.$)("<div />").addClass("live-program-progress-bar-fill").attr('data-media-control', '');
      this._progressColor && this.$progressBarFill.css({
        'background-color': this._progressColor
      });
      this.$progressBar.append(this.$progressBarBg);
      this.$progressBar.append(this.$progressBarFill);
      this.$liveProgramBar = (0, _clappr.$)("<div />").addClass("live-program-bar").attr('data-media-control', '');
      this.$liveProgramBar.append(this.$progressBar);
      this.$startAt = (0, _clappr.$)("<div />").addClass("live-program-start").attr('data-media-control', '');
      this.$endAt = (0, _clappr.$)("<div />").addClass("live-program-end").attr('data-media-control', '');
      this.$liveProgram = (0, _clappr.$)("<div />").addClass("live-program").attr('data-media-control', '');
      this.$liveProgram.append(this.$startAt);
      this.$liveProgram.append(this.$liveProgramBar);
      this.$liveProgram.append(this.$endAt);
      this.$el.find('.media-control-center-panel[data-media-control]').append(this.$liveProgram);
      this.$el.append(_clappr.Styler.getStyleFor(_styles.default));
      this.$leftPanel = this.$el.find('.media-control-left-panel[data-media-control]');
      this.$rightPanel = this.$el.find('.media-control-right-panel[data-media-control]');
      this.updateLiveProgram();
    }
    /**
     * Update current program.
     * @method setLiveProgram
     * @param {Object} program the program data.
     * @return {LiveProgramMediaControl} itself
     */

  }, {
    key: "setLiveProgram",
    value: function setLiveProgram(program) {
      this._setProgram(program);

      this.updateLiveProgram();
      return this;
    }
  }, {
    key: "updateLiveProgram",
    value: function updateLiveProgram() {
      if (!this.$liveProgram) {
        return;
      }

      this.$startAt.html(this._program.startAt);
      this.$progressBarFill.css({
        width: this._program.progress + '%'
      });
      this.$endAt.html(this._program.endAt);
      this.$liveProgram.attr('title', this._program.title); // Bar is not displayed if program title is unavailable

      if (this._program.title.length === 0) {
        this.$liveProgram.hide();
      } else {
        this.$liveProgram.show();
      }
    } // @override

  }, {
    key: "updateVolumeUI",
    value: function updateVolumeUI() {
      _get(_getPrototypeOf(LiveProgramMediaControl.prototype), "updateVolumeUI", this).call(this);

      if (!this.rendered) {
        return;
      }

      this.resizeLiveProgram();
    } // @override

  }, {
    key: "changeTogglePlay",
    value: function changeTogglePlay() {
      _get(_getPrototypeOf(LiveProgramMediaControl.prototype), "changeTogglePlay", this).call(this);

      this.resizeLiveProgram();
    } // @override

  }, {
    key: "highDefinitionUpdate",
    value: function highDefinitionUpdate(isHD) {
      _get(_getPrototypeOf(LiveProgramMediaControl.prototype), "highDefinitionUpdate", this).call(this, isHD);

      this.resizeLiveProgram();
    } // @override

  }, {
    key: "playerResize",
    value: function playerResize(size) {
      _get(_getPrototypeOf(LiveProgramMediaControl.prototype), "playerResize", this).call(this, size);

      this.resizeLiveProgram(size);
    } // @override

  }, {
    key: "updateProgressBar",
    value: function updateProgressBar(progress) {
      if (this._seekBarHidden) {
        return;
      }

      _get(_getPrototypeOf(LiveProgramMediaControl.prototype), "updateProgressBar", this).call(this, progress);
    } // @override

  }, {
    key: "renderSeekBar",
    value: function renderSeekBar() {
      if (this._seekBarHidden) {
        return;
      } // Hide default seek bar if playback is live without DVR
      // if (this.isLiveWithoutDVR) {


      this.$seekBarScrubber.hide();
      this.$seekBarContainer.hide();
      this.resizeLiveProgram();
      this._seekBarHidden = this._setSeekBarHidden; // } else {
      //   super.renderSeekBar()
      // }
    } // @override

  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(LiveProgramMediaControl.prototype), "render", this).call(this);

      this._seekBarHidden = false;
      this.renderLiveProgramBar();
      return this;
    }
  }]);

  return LiveProgramMediaControl;
}(_clappr.MediaControl);

exports.default = LiveProgramMediaControl;
module.exports = exports.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".live-program[data-media-control] {\n  position: absolute;\n  left: 100px;\n  bottom: 8px;\n  display: inline-block;\n  width: 50%;\n  height: 16px; }\n  .live-program[data-media-control] .live-program-start[data-media-control] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 40px;\n    height: 100%;\n    font-size: 10px;\n    color: #fff;\n    text-align: center;\n    line-height: 16px; }\n  .live-program[data-media-control] .live-program-end[data-media-control] {\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    width: 40px;\n    height: 100%;\n    font-size: 10px;\n    color: #fff;\n    text-align: center;\n    line-height: 16px; }\n  .live-program[data-media-control] .live-program-bar[data-media-control] {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    padding: 5px 40px; }\n    .live-program[data-media-control] .live-program-bar[data-media-control] .live-program-progress-bar[data-media-control] {\n      position: relative;\n      width: 100%;\n      height: 100%; }\n      .live-program[data-media-control] .live-program-bar[data-media-control] .live-program-progress-bar[data-media-control] .live-program-progress-bar-bg[data-media-control] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 6px;\n        background-color: #c2c2c2; }\n      .live-program[data-media-control] .live-program-bar[data-media-control] .live-program-progress-bar[data-media-control] .live-program-progress-bar-fill[data-media-control] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 0;\n        height: 6px;\n        background-color: #ff0101;\n        -webkit-transition: all 0.5s ease-out;\n        -moz-transition: all 0.5s ease-out;\n        -o-transition: all 0.5s ease-out;\n        transition: all 0.5s ease-out; }\n", ""]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});