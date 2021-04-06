(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["LiveProgramMediaControl"] = factory(require("clappr"));
	else
		root["LiveProgramMediaControl"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
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
/* WEBPACK VAR INJECTION */(function(process) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clappr = __webpack_require__(2);

var _styles = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * A live stream only mediacontrol which display current program.
 * @class LiveProgramMediaControl
 * @constructor
 * @extends MediaControl
 */
var LiveProgramMediaControl = /*#__PURE__*/function (_MediaControl) {
  _inherits(LiveProgramMediaControl, _MediaControl);

  var _super = _createSuper(LiveProgramMediaControl);

  function LiveProgramMediaControl(core) {
    var _this;

    _classCallCheck(this, LiveProgramMediaControl);

    _this = _super.call(this, core);
    _this._seekBarHidden = false;
    _this._setSeekBarHidden = !_clappr.Browser.isiOS; // Fix seekbar scrubber on iPhone

    _this._leftPanelWidth = 0;
    _this._rightPanelWidth = 0;
    _this._liveProgramLeft = 0;
    _this._liveProgramWidth = 0;
    var pluginOpts = _this.options.liveProgramMediaControl;

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
      this.$el.append(_clappr.Styler.getStyleFor(_styles["default"]));
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
      if (!this.$liveProgram || !this._program) {
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
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      _get(_getPrototypeOf(LiveProgramMediaControl.prototype), "bindEvents", this).call(this);

      this.listenTo(this.core, _clappr.Events.CORE_FULLSCREEN, function (evt) {
        // Ensure resizeLiveProgram() is called after browser entered
        // or exited fullscreen mode
        process.nextTick(function () {
          _this2.resizeLiveProgram();
        });
      });
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

exports["default"] = LiveProgramMediaControl;
module.exports = exports.default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".live-program[data-media-control]{position:absolute;left:100px;bottom:8px;display:inline-block;width:50%;height:16px}.live-program[data-media-control] .live-program-start[data-media-control]{position:absolute;left:0px;top:0px;width:40px;height:100%;font-size:10px;color:#fff;text-align:center;line-height:16px}.live-program[data-media-control] .live-program-end[data-media-control]{position:absolute;right:0px;top:0px;width:40px;height:100%;font-size:10px;color:#fff;text-align:center;line-height:16px}.live-program[data-media-control] .live-program-bar[data-media-control]{position:absolute;top:0px;left:0px;width:100%;height:100%;padding:5px 40px}.live-program[data-media-control] .live-program-bar[data-media-control] .live-program-progress-bar[data-media-control]{position:relative;width:100%;height:100%}.live-program[data-media-control] .live-program-bar[data-media-control] .live-program-progress-bar[data-media-control] .live-program-progress-bar-bg[data-media-control]{position:absolute;top:0;left:0;width:100%;height:6px;background-color:#c2c2c2}.live-program[data-media-control] .live-program-bar[data-media-control] .live-program-progress-bar[data-media-control] .live-program-progress-bar-fill[data-media-control]{position:absolute;top:0;left:0;width:0;height:6px;background-color:#ff0101;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out;transition:all .5s ease-out}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);
});