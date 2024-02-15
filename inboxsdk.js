/*!
 * InboxSDK
 * https://www.inboxsdk.com/
 *
 * The use of InboxSDK is governed by the Terms of Services located at
 * https://www.inboxsdk.com/terms


 *  __    __            _     _          _                _                      ___                 _ _ ___
 * / / /\ \ \__ _ _ __ | |_  | |_ ___   | |__   __ _  ___| | __   ___  _ __     / _ \_ __ ___   __ _(_) / _ \
 * \ \/  \/ / _` | '_ \| __| | __/ _ \  | '_ \ / _` |/ __| |/ /  / _ \| '_ \   / /_\/ '_ ` _ \ / _` | | \// /
 *  \  /\  / (_| | | | | |_  | || (_) | | | | | (_| | (__|   <  | (_) | | | | / /_\\| | | | | | (_| | | | \/
 *   \/  \/ \__,_|_| |_|\__|  \__\___/  |_| |_|\__,_|\___|_|\_\  \___/|_| |_| \____/|_| |_| |_|\__,_|_|_| ()
 *
 * Like complex reverse engineering? Want to make Gmail and Inbox a hackable platform?
 *
 * Join us at: www.streak.com/careers?source=sdk
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["InboxSDK"] = factory();
	else
		root["InboxSDK"] = factory();
})(globalThis, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 4239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    getRawTag = __webpack_require__(9607),
    objectToString = __webpack_require__(2333);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 7561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(7990);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 1957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 9607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 2333:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 5639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 7990:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 9567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(554);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ 7204:
/***/ ((module) => {

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = fromPairs;


/***/ }),

/***/ 3218:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 7005:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 3448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 1463:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var before = __webpack_require__(9567);

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ 8601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(4841);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(8601);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 4841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(7561),
    isObject = __webpack_require__(3218),
    isSymbol = __webpack_require__(3448);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = delay;

function delay(time, value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value);
    }, time);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWxheSIsInRpbWUiLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVlLFNBQVNBLEtBQVQsQ0FBa0JDLElBQWxCLEVBQWdDQyxLQUFoQyxFQUFtRTtBQUNoRixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUJDLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZELE1BQUFBLE9BQU8sQ0FBQ0YsS0FBRCxDQUFQO0FBQ0QsS0FGUyxFQUVQRCxJQUZPLENBQVY7QUFHRCxHQUpNLENBQVA7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGF5PFQ+KHRpbWU6IG51bWJlciwgdmFsdWU6IFByb21pc2U8VD4gfCBUKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0sIHRpbWUpO1xuICB9KTtcbn1cbiJdfQ==

/***/ }),

/***/ 9335:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 8795:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 7735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.decode = exports.parse = __webpack_require__(9335);
exports.encode = exports.stringify = __webpack_require__(8795);


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ inboxsdk_REMOTE)
});

// NAMESPACE OBJECT: ./src/inboxsdk-js/inboxsdk.ts
var inboxsdk_namespaceObject = {};
__webpack_require__.r(inboxsdk_namespaceObject);
__webpack_require__.d(inboxsdk_namespaceObject, {
  "LOADER_VERSION": () => (LOADER_VERSION),
  "load": () => (load),
  "loadScript": () => (inboxsdk_loadScript)
});

;// CONCATENATED MODULE: ./src/inboxsdk-js/load-script-proxy.ts
let loadScript = () => {
  throw new Error('This function is not usable in Chrome MV3 extensions');
};
function setLoadScript(fn) {
  loadScript = fn;
}
// EXTERNAL MODULE: ./node_modules/lodash/once.js
var once = __webpack_require__(1463);
var once_default = /*#__PURE__*/__webpack_require__.n(once);
;// CONCATENATED MODULE: ./src/common/cachebust-url.ts
const r = /([?&])_=[^&]*/;
let nonce = Date.now() + Math.floor(Math.random() * Math.pow(2, 32));
function cachebustUrl(url) {
  if (r.test(url)) {
    return url.replace(r, '$1_=' + nonce++);
  } else {
    return url + (/\?/.test(url) ? '&' : '?') + '_=' + nonce++;
  }
}
// EXTERNAL MODULE: ./node_modules/lodash/fromPairs.js
var fromPairs = __webpack_require__(7204);
var fromPairs_default = /*#__PURE__*/__webpack_require__.n(fromPairs);
;// CONCATENATED MODULE: ./src/common/connectivity-test.ts


const URLS = ['https://www.inboxsdk.com/images/logo-red.png'];
function imageTest(url) {
  return new Promise(resolve => {
    const img = document.createElement('img');
    img.onload = function () {
      resolve(true);
    };
    img.addEventListener('loadend', function () {
      resolve(false);
    });
    img.onerror = function () {
      resolve(false);
    };
    img.src = cachebustUrl(url);
  });
}
function connectivityTest() {
  return Promise.all(URLS.map(url => imageTest(url).then(success => [url, success]))).then(results => fromPairs_default()(results));
}
// EXTERNAL MODULE: ./node_modules/querystring-es3/index.js
var querystring_es3 = __webpack_require__(7735);
// EXTERNAL MODULE: ./node_modules/pdelay/js/index.js
var js = __webpack_require__(443);
;// CONCATENATED MODULE: ./src/common/ajax.ts



const MAX_TIMEOUT = 64 * 1000; //64 seconds
const MAX_RETRIES = 5;
const serversToIgnore = {};

// Simple ajax helper.
// opts:
// * url
// * [method]
// * [cachebust] - boolean
// * [headers] - object
// * [xhrFields] - object
// * [data]
function ajax(opts) {
  if (!opts || typeof opts.url !== 'string') {
    throw new Error('URL must be given');
  }
  return new Promise(function (resolve, reject) {
    const method = opts.method ? opts.method : 'GET';
    let url = opts.url;
    let stringData = null;
    if (opts.data) {
      stringData = typeof opts.data === 'string' ? opts.data : querystring_es3.stringify(opts.data);
      if (method === 'GET' || method === 'HEAD') {
        url += (/\?/.test(url) ? '&' : '?') + stringData;
        stringData = null;
      }
    }
    const canRetry = opts.canRetry != null ? opts.canRetry : method === 'GET' || method === 'HEAD';
    const match = url.match(/(?:(?:[a-z]+:)?\/\/)?([^/]*)\//);
    if (!match) {
      throw new Error('Failed to match url');
    }
    const server = match[1];
    if (Object.prototype.hasOwnProperty.call(serversToIgnore, server)) {
      reject(new Error(`Server at ${url} has told us to stop connecting`));
      return;
    }
    if (opts.cachebust) {
      url = cachebustUrl(url);
    }
    const XMLHttpRequest = opts.XMLHttpRequest || window.XMLHttpRequest;
    const xhr = new XMLHttpRequest();
    Object.assign(xhr, opts.xhrFields);
    xhr.onerror = function (event) {
      if ((opts.retryNum || 0) < MAX_RETRIES) {
        if (xhr.status === 502 || (xhr.status === 0 || xhr.status >= 500) && canRetry) {
          resolve(_retry(opts));
          return;
        }
      }
      const err = Object.assign(new Error(`Failed to load ${url}`), {
        event,
        xhr,
        status: xhr.status
      });

      // give a way for a server to tell us to go away for now. Good fallback
      // in case a bug ever causes clients to spam a server with requests.
      if (xhr.status == 490) {
        serversToIgnore[server] = true;
      }
      reject(err);
    };
    xhr.onload = function (event) {
      if (xhr.status === 200) {
        resolve({
          xhr,
          text: xhr.responseText
        });
      } else {
        xhr.onerror(event);
      }
    };
    xhr.open(method, url, true);
    if (opts.headers) {
      const {
        headers
      } = opts;
      Object.keys(headers).forEach(name => {
        const value = headers[name];
        xhr.setRequestHeader(name, value);
      });
    }
    xhr.send(stringData);
  });
}
function _retry(opts) {
  const retryNum = (opts.retryNum || 0) + 1;

  // 2000 4000 8000...
  const retryTimeout = Math.min(Math.pow(2, retryNum) * 1000, MAX_TIMEOUT);
  return (0,js/* default */.Z)(retryTimeout).then(() => ajax(Object.assign({}, opts, {
    retryNum
  })));
}
;// CONCATENATED MODULE: ./src/common/rate-limit.ts
// Returns a wrapped version of the function which throws an exception if it's
// called more than count times within period amount of time.
function rateLimit(fn, period, count) {
  let calls = [];
  return function () {
    const now = Date.now();
    calls = calls.filter(time => time > now - period);
    if (calls.length >= count) {
      throw new Error('Function rate limit exceeded');
    }
    calls.push(now);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return fn.apply(this, args);
  };
}
;// CONCATENATED MODULE: ./src/common/get-stack-trace.ts
function getStackTrace() {
  const err = new Error('Stack saver');
  // Cut the first two lines off. The first line has the error name, and the
  // second line is inside this function.
  return ('' + err.stack).replace(/^([^\n]*\n){2}/, '');
}
;// CONCATENATED MODULE: ./src/common/get-extension-id.ts
function getExtensionId() {
  const chrome = __webpack_require__.g.chrome;
  if (chrome && chrome.extension && chrome.extension.getURL) {
    return chrome.extension.getURL('');
  }
  return null;
}
;// CONCATENATED MODULE: ./src/common/get-session-id.ts
function getSessionId() {
  const attrValue = typeof document !== 'undefined' && document.documentElement.getAttribute('data-inboxsdk-session-id');
  if (typeof attrValue === 'string') {
    return attrValue;
  } else {
    const sessionId = Date.now() + '-' + Math.random();
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-inboxsdk-session-id', sessionId);
    }
    return sessionId;
  }
}
;// CONCATENATED MODULE: ./src/common/version.ts
// This is in its own file so that updates to the version value don't cause a
// reload of everything.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- SDK_VERSION is injected by webpack
///@ts-ignore
const BUILD_VERSION = "2.1.26-1702920944009-9d8c897abf8d2bea-MODIFIED";
if (false) {}
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(3218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
;// CONCATENATED MODULE: ./src/common/log-error.ts







const sessionId = getSessionId();

// code inside the platform-implementation should use logger.js instead of
// interacting with this directly!
function logError(err, details, context) {
  if (typeof document === 'undefined') {
    // In tests, just throw the error.
    throw err;
  }

  // It's important that we can't throw an error or leave a rejected promise
  // unheard while logging an error in order to make sure to avoid ever
  // getting into an infinite loop of reporting uncaught errors.
  try {
    if (haveWeSeenThisErrorAlready(err)) {
      return;
    } else {
      markErrorAsSeen(err);
    }
    if (!(err instanceof Error)) {
      console.warn('First parameter to Logger.error was not an error object:', err);
      err = new Error('Logger.error called with non-error: ' + err);
      markErrorAsSeen(err);
    }
    const {
      appIds,
      implVersion,
      userEmailHash
    } = context;
    const loaderVersion = context.loaderVersion || BUILD_VERSION;
    const sentByApp = !!context.sentByApp;
    const errorProperties = {};
    for (const name in err) {
      if (Object.prototype.hasOwnProperty.call(err, name)) {
        try {
          const value = err[name];
          JSON.stringify(value);
          errorProperties[name] = value;
        } catch (err) {
          // ignore
        }
      }
    }
    if (Object.keys(errorProperties).length > 0) {
      details = {
        errorProperties,
        details
      };
    }

    // Might not have been passed a useful error object with a stack, so get
    // our own current stack just in case.
    const nowStack = getStackTrace();
    const stuffToLog = ['Error logged:', err];
    if (err && err.stack) {
      stuffToLog.push('\n\nOriginal error stack:\n' + err.stack);
    }
    stuffToLog.push('\n\nError logged from:\n' + nowStack);
    if (details) {
      stuffToLog.push('\n\nError details:', details);
    }
    stuffToLog.push('\n\nExtension App Ids:', JSON.stringify(appIds, null, 2));
    stuffToLog.push('\nSent by App:', sentByApp);
    stuffToLog.push('\nSession Id:', sessionId);
    stuffToLog.push('\nExtension Id:', getExtensionId());
    stuffToLog.push('\nInboxSDK Loader Version:', loaderVersion);
    stuffToLog.push('\nInboxSDK Implementation Version:', implVersion);
    console.error(...stuffToLog);
    const report = {
      message: err && err.message || err,
      stack: err && err.stack,
      loggedFrom: nowStack,
      details,
      appIds,
      sentByApp,
      sessionId,
      emailHash: userEmailHash,
      extensionId: getExtensionId(),
      loaderVersion: loaderVersion,
      implementationVersion: implVersion,
      origin: document.location.origin,
      timestamp: Date.now() * 1000
    };
    sendError(report);
    if (document.documentElement.getAttribute('inboxsdk-emit-error-event') === 'true') {
      document.documentElement.dispatchEvent(new CustomEvent('inboxSDKerror', {
        bubbles: false,
        cancelable: false,
        detail: {
          message: err && err.message || err,
          stack: err && err.stack,
          loggedFrom: nowStack,
          details,
          sentByApp
        }
      }));
    }
  } catch (err2) {
    tooManyErrors(err2, [err, details, context]);
  }
}
const _extensionSeenErrors = (() => {
  // Safari <9 doesn't have WeakSet and we don't want to pull in the polyfill,
  // so we make one out of a WeakMap.
  if (!__webpack_require__.g.__inboxsdk_extensionSeenErrors && __webpack_require__.g.WeakMap) {
    Object.defineProperty(__webpack_require__.g, '__inboxsdk_extensionSeenErrors', {
      value: new __webpack_require__.g.WeakMap()
    });
  }
  return {
    has(e) {
      if (__webpack_require__.g.__inboxsdk_extensionSeenErrors) {
        return __webpack_require__.g.__inboxsdk_extensionSeenErrors.has(e);
      } else {
        try {
          return !!e.__inboxsdk_extensionHasSeenError;
        } catch (err) {
          console.error(err);
          return false;
        }
      }
    },
    add(e) {
      if (__webpack_require__.g.__inboxsdk_extensionSeenErrors && __webpack_require__.g.__inboxsdk_extensionSeenErrors.set) {
        // It's a WeakMap.
        __webpack_require__.g.__inboxsdk_extensionSeenErrors.set(e, true);
      } else if (__webpack_require__.g.__inboxsdk_extensionSeenErrors && __webpack_require__.g.__inboxsdk_extensionSeenErrors.add) {
        // Older versions of inboxsdk.js initialized it as a WeakSet instead,
        // so handle that too.
        __webpack_require__.g.__inboxsdk_extensionSeenErrors.add(e);
      } else {
        try {
          Object.defineProperty(e, '__inboxsdk_extensionHasSeenError', {
            value: true
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
  };
})();
function haveWeSeenThisErrorAlready(error) {
  if (isObject_default()(error)) {
    return _extensionSeenErrors.has(error);
  }
  return false;
}
function markErrorAsSeen(error) {
  if (isObject_default()(error)) {
    _extensionSeenErrors.add(error);
  }
}

// Only let 10 errors be sent per minute.
const sendError = rateLimit(function (report) {
  try {
    ajax({
      url: 'https://api.inboxsdk.com/api/v2/errors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(report)
    }).catch(err2 => {
      tooManyErrors(err2, [report]);
    });
  } catch (err2) {
    tooManyErrors(err2, [report]);
  }
}, 60 * 1000, 10);
function tooManyErrors(err2, originalArgs) {
  console.error('ERROR REPORTING ERROR', err2);
  console.error('ORIGINAL ERROR', originalArgs);
}
;// CONCATENATED MODULE: ./src/common/load-script.ts





const isContentScript = once_default()(function () {
  if (__webpack_require__.g.chrome && __webpack_require__.g.chrome.extension) return true;
  if (__webpack_require__.g.safari && __webpack_require__.g.safari.extension) return true;
  return false;
});
function addScriptToPage(url, cors) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  if (cors) {
    script.crossOrigin = 'anonymous';
  }
  const promise = new Promise((resolve, reject) => {
    script.addEventListener('error', function (event) {
      reject(event.error || new Error(event.message || 'Load failure: ' + url, event.filename, event.lineno, event.column));
    }, false);
    script.addEventListener('load', function () {
      // Make sure the script has a moment to execute before this promise
      // resolves.
      setTimeout(resolve, 1);
    }, false);
  });
  script.src = url;
  if (!document.head) throw new Error('missing head');
  document.head.appendChild(script);
  return promise;
}
function load_script_loadScript(url, opts) {
  let pr;
  if (isContentScript()) {
    const attempt = function (retryNum, lastErr) {
      if (retryNum > 3) {
        throw lastErr || new Error('Ran out of loadScript attempts for unknown reason');
      }
      return ajax({
        url,
        cachebust: retryNum > 0,
        XMLHttpRequest: opts ? opts.XMLHttpRequest : undefined
      }).then(response => {
        // Q: Why put the code into a function before executing it instead of
        //    evaling it immediately?
        // A: Chrome would execute it before applying any remembered
        //    breakpoints.
        // Q: Why not just use `... = new Function(...)`?
        // A: The sourcemaps would be off by one line in Chrome because of
        //    https://code.google.com/p/chromium/issues/detail?id=109362
        // Q: indirectEval?
        // A: Using the eval value rather than the eval keyword causes the
        //    code passed to it to be run in the global scope instead of the
        //    current scope. (Seriously, it's a javascript thing.)
        const originalCode = response.text;
        const indirectEval = eval;
        const codeParts = [];
        if (opts && opts.disableSourceMappingURL) {
          // Don't remove a data: URI sourcemap (used in dev)
          codeParts.push(originalCode.replace(/\/\/# sourceMappingURL=(?!data:)[^\n]*\n?$/, ''));
        } else {
          codeParts.push(originalCode);
        }
        if (!opts || !opts.nowrap) {
          codeParts.unshift('(function(){');
          codeParts.push('\n});');
        }
        codeParts.push('\n//# sourceURL=' + url + '\n');
        const codeToRun = codeParts.join('');
        let program;
        try {
          program = indirectEval(codeToRun);
        } catch (err) {
          if (err && err.name === 'SyntaxError') {
            logError(err, {
              retryNum,
              caughtSyntaxError: true,
              url,
              message: `SyntaxError in loading ${url}. Did we not load it fully? Trying again...`
            }, {});
            return (0,js/* default */.Z)(5000).then(() => attempt(retryNum + 1, err));
          }
          // SyntaxErrors are the only errors that can happen during eval that we
          // retry because sometimes AppEngine doesn't serve the full javascript.
          // No other error is retried because other errors aren't likely to be
          // transient.
          throw err;
        }
        if (!opts || !opts.nowrap) {
          program.call(__webpack_require__.g);
        }
      });
    };
    pr = attempt(0, null);
  } else {
    // Try to add script as CORS first so we can get error stack data from it.
    pr = addScriptToPage(url, true).catch(() => {
      // Only show the warning if we successfully load the script on retry.
      return addScriptToPage(url, false).then(() => {
        console.warn('Script ' + url + ' included without CORS headers. Error logs might be censored by the browser.');
      });
    });
  }
  pr.catch(err => {
    return connectivityTest().then(connectivityTestResults => {
      logError(err, {
        url,
        connectivityTestResults,
        status: err && err.status,
        response: err && err.xhr ? err.xhr.responseText : null,
        message: 'Failed to load script'
      }, {});
    });
  });
  return pr;
}
;// CONCATENATED MODULE: ./src/inboxsdk-js/loading/load-platform-implementation-REMOTE.ts


const loadPI = once_default()(() => {
  return load_script_loadScript("https://www.inboxsdk.com/build/platform-implementation.js", {
    // platform-implementation has no top-level vars so no need for function wrapping
    nowrap: true
  });
});
/* harmony default export */ const load_platform_implementation_REMOTE = (loadPI);
;// CONCATENATED MODULE: ./src/inboxsdk-js/loading/platform-implementation-loader.ts
class PlatformImplementationLoader {
  /**
   * This must be overridden by the entrypoint to the InboxSDK.
   * This is done so the npm (non-remote) build doesn't contain code for dynamically
   * loading the remote build, which may set off the Chrome Web Store review process
   * scanning for that.
   */
  static loadScript = () => {
    throw new Error('Unexpected error: This function must be overridden');
  };
  static async load(appId, opts) {
    if (!globalThis.__InboxSDKImpLoader) {
      await this.loadScript();
      if (!globalThis.__InboxSDKImpLoader) {
        throw new Error('Implementation file did not load correctly');
      }
    }
    return globalThis.__InboxSDKImpLoader.load('0.1', appId, opts);
  }
  static async preload() {
    // Prime the load by calling it and letting the promise be memoized.
    this.loadScript();
  }
}
;// CONCATENATED MODULE: ./src/inboxsdk-js/inboxsdk-REMOTE-setup.ts


PlatformImplementationLoader.loadScript = load_platform_implementation_REMOTE;
;// CONCATENATED MODULE: ./src/inboxsdk-js/inboxsdk.ts



const LOADER_VERSION = BUILD_VERSION;

/**
 * Only works in the non-npm remote-loaded build for MV2 extensions.
 * @deprecated
 */
function inboxsdk_loadScript(url, opts) {
  return loadScript(url, opts);
}
function load(version, appId, opts) {
  opts = Object.assign({
    // defaults
    globalErrorLogging: true
  }, opts, {
    // stuff that can't be overridden, such as extra stuff this file passes to
    // the implementation script.
    VERSION: LOADER_VERSION,
    REQUESTED_API_VERSION: version
  });
  return PlatformImplementationLoader.load(appId, opts);
}
const pageOrigin =  false || document.location.origin;
if ('https://mail.google.com' === pageOrigin) {
  PlatformImplementationLoader.preload();
}
;// CONCATENATED MODULE: ./src/inboxsdk-js/inboxsdk-REMOTE.ts




setLoadScript(load_script_loadScript);
/* harmony default export */ const inboxsdk_REMOTE = (inboxsdk_namespaceObject);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=https://www.inboxsdk.com/build/inboxsdk.js.b6f074ad9a3684c8dcf72b3a007f507a.map