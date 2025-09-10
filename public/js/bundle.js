(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/core-js/modules/_global.js
  var require_global = __commonJS({
    "node_modules/core-js/modules/_global.js"(exports, module) {
      var global2 = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
      if (typeof __g == "number") __g = global2;
    }
  });

  // node_modules/core-js/modules/_has.js
  var require_has = __commonJS({
    "node_modules/core-js/modules/_has.js"(exports, module) {
      var hasOwnProperty2 = {}.hasOwnProperty;
      module.exports = function(it, key) {
        return hasOwnProperty2.call(it, key);
      };
    }
  });

  // node_modules/core-js/modules/_fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/modules/_fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/modules/_descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/modules/_descriptors.js"(exports, module) {
      module.exports = !require_fails()(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/modules/_core.js
  var require_core = __commonJS({
    "node_modules/core-js/modules/_core.js"(exports, module) {
      var core = module.exports = { version: "2.6.12" };
      if (typeof __e == "number") __e = core;
    }
  });

  // node_modules/core-js/modules/_is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/modules/_is-object.js"(exports, module) {
      module.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
    }
  });

  // node_modules/core-js/modules/_an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/modules/_an-object.js"(exports, module) {
      var isObject2 = require_is_object();
      module.exports = function(it) {
        if (!isObject2(it)) throw TypeError(it + " is not an object!");
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_dom-create.js
  var require_dom_create = __commonJS({
    "node_modules/core-js/modules/_dom-create.js"(exports, module) {
      var isObject2 = require_is_object();
      var document2 = require_global().document;
      var is = isObject2(document2) && isObject2(document2.createElement);
      module.exports = function(it) {
        return is ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/modules/_ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/modules/_ie8-dom-define.js"(exports, module) {
      module.exports = !require_descriptors() && !require_fails()(function() {
        return Object.defineProperty(require_dom_create()("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/modules/_to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/modules/_to-primitive.js"(exports, module) {
      var isObject2 = require_is_object();
      module.exports = function(it, S) {
        if (!isObject2(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == "function" && !isObject2(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/modules/_object-dp.js
  var require_object_dp = __commonJS({
    "node_modules/core-js/modules/_object-dp.js"(exports) {
      var anObject = require_an_object();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var toPrimitive = require_to_primitive();
      var dP = Object.defineProperty;
      exports.f = require_descriptors() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {
        }
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/modules/_property-desc.js
  var require_property_desc = __commonJS({
    "node_modules/core-js/modules/_property-desc.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/modules/_hide.js
  var require_hide = __commonJS({
    "node_modules/core-js/modules/_hide.js"(exports, module) {
      var dP = require_object_dp();
      var createDesc = require_property_desc();
      module.exports = require_descriptors() ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/modules/_uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/modules/_uid.js"(exports, module) {
      var id = 0;
      var px = Math.random();
      module.exports = function(key) {
        return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
      };
    }
  });

  // node_modules/core-js/modules/_library.js
  var require_library = __commonJS({
    "node_modules/core-js/modules/_library.js"(exports, module) {
      module.exports = false;
    }
  });

  // node_modules/core-js/modules/_shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/modules/_shared.js"(exports, module) {
      var core = require_core();
      var global2 = require_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || (global2[SHARED] = {});
      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: core.version,
        mode: require_library() ? "pure" : "global",
        copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/modules/_function-to-string.js
  var require_function_to_string = __commonJS({
    "node_modules/core-js/modules/_function-to-string.js"(exports, module) {
      module.exports = require_shared()("native-function-to-string", Function.toString);
    }
  });

  // node_modules/core-js/modules/_redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/modules/_redefine.js"(exports, module) {
      var global2 = require_global();
      var hide = require_hide();
      var has = require_has();
      var SRC = require_uid()("src");
      var $toString = require_function_to_string();
      var TO_STRING = "toString";
      var TPL = ("" + $toString).split(TO_STRING);
      require_core().inspectSource = function(it) {
        return $toString.call(it);
      };
      (module.exports = function(O, key, val, safe) {
        var isFunction2 = typeof val == "function";
        if (isFunction2) has(val, "name") || hide(val, "name", key);
        if (O[key] === val) return;
        if (isFunction2) has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
        if (O === global2) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          hide(O, key, val);
        }
      })(Function.prototype, TO_STRING, function toString3() {
        return typeof this == "function" && this[SRC] || $toString.call(this);
      });
    }
  });

  // node_modules/core-js/modules/_a-function.js
  var require_a_function = __commonJS({
    "node_modules/core-js/modules/_a-function.js"(exports, module) {
      module.exports = function(it) {
        if (typeof it != "function") throw TypeError(it + " is not a function!");
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_ctx.js
  var require_ctx = __commonJS({
    "node_modules/core-js/modules/_ctx.js"(exports, module) {
      var aFunction = require_a_function();
      module.exports = function(fn, that, length) {
        aFunction(fn);
        if (that === void 0) return fn;
        switch (length) {
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/modules/_export.js
  var require_export = __commonJS({
    "node_modules/core-js/modules/_export.js"(exports, module) {
      var global2 = require_global();
      var core = require_core();
      var hide = require_hide();
      var redefine = require_redefine();
      var ctx = require_ctx();
      var PROTOTYPE = "prototype";
      var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name] || (global2[name] = {}) : (global2[name] || {})[PROTOTYPE];
        var exports2 = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports2[PROTOTYPE] || (exports2[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          own = !IS_FORCED && target && target[key] !== void 0;
          out = (own ? target : source)[key];
          exp = IS_BIND && own ? ctx(out, global2) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
          if (target) redefine(target, key, out, type & $export.U);
          if (exports2[key] != out) hide(exports2, key, exp);
          if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
      };
      global2.core = core;
      $export.F = 1;
      $export.G = 2;
      $export.S = 4;
      $export.P = 8;
      $export.B = 16;
      $export.W = 32;
      $export.U = 64;
      $export.R = 128;
      module.exports = $export;
    }
  });

  // node_modules/core-js/modules/_meta.js
  var require_meta = __commonJS({
    "node_modules/core-js/modules/_meta.js"(exports, module) {
      var META = require_uid()("meta");
      var isObject2 = require_is_object();
      var has = require_has();
      var setDesc = require_object_dp().f;
      var id = 0;
      var isExtensible = Object.isExtensible || function() {
        return true;
      };
      var FREEZE = !require_fails()(function() {
        return isExtensible(Object.preventExtensions({}));
      });
      var setMeta = function(it) {
        setDesc(it, META, { value: {
          i: "O" + ++id,
          // object ID
          w: {}
          // weak collections IDs
        } });
      };
      var fastKey = function(it, create) {
        if (!isObject2(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!has(it, META)) {
          if (!isExtensible(it)) return "F";
          if (!create) return "E";
          setMeta(it);
        }
        return it[META].i;
      };
      var getWeak = function(it, create) {
        if (!has(it, META)) {
          if (!isExtensible(it)) return true;
          if (!create) return false;
          setMeta(it);
        }
        return it[META].w;
      };
      var onFreeze = function(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
        return it;
      };
      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey,
        getWeak,
        onFreeze
      };
    }
  });

  // node_modules/core-js/modules/_wks.js
  var require_wks = __commonJS({
    "node_modules/core-js/modules/_wks.js"(exports, module) {
      var store = require_shared()("wks");
      var uid = require_uid();
      var Symbol2 = require_global().Symbol;
      var USE_SYMBOL = typeof Symbol2 == "function";
      var $exports = module.exports = function(name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
      };
      $exports.store = store;
    }
  });

  // node_modules/core-js/modules/_set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js/modules/_set-to-string-tag.js"(exports, module) {
      var def = require_object_dp().f;
      var has = require_has();
      var TAG = require_wks()("toStringTag");
      module.exports = function(it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
      };
    }
  });

  // node_modules/core-js/modules/_wks-ext.js
  var require_wks_ext = __commonJS({
    "node_modules/core-js/modules/_wks-ext.js"(exports) {
      exports.f = require_wks();
    }
  });

  // node_modules/core-js/modules/_wks-define.js
  var require_wks_define = __commonJS({
    "node_modules/core-js/modules/_wks-define.js"(exports, module) {
      var global2 = require_global();
      var core = require_core();
      var LIBRARY = require_library();
      var wksExt = require_wks_ext();
      var defineProperty = require_object_dp().f;
      module.exports = function(name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global2.Symbol || {});
        if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
      };
    }
  });

  // node_modules/core-js/modules/_cof.js
  var require_cof = __commonJS({
    "node_modules/core-js/modules/_cof.js"(exports, module) {
      var toString3 = {}.toString;
      module.exports = function(it) {
        return toString3.call(it).slice(8, -1);
      };
    }
  });

  // node_modules/core-js/modules/_iobject.js
  var require_iobject = __commonJS({
    "node_modules/core-js/modules/_iobject.js"(exports, module) {
      var cof = require_cof();
      module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
        return cof(it) == "String" ? it.split("") : Object(it);
      };
    }
  });

  // node_modules/core-js/modules/_defined.js
  var require_defined = __commonJS({
    "node_modules/core-js/modules/_defined.js"(exports, module) {
      module.exports = function(it) {
        if (it == void 0) throw TypeError("Can't call method on  " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_to-iobject.js
  var require_to_iobject = __commonJS({
    "node_modules/core-js/modules/_to-iobject.js"(exports, module) {
      var IObject = require_iobject();
      var defined = require_defined();
      module.exports = function(it) {
        return IObject(defined(it));
      };
    }
  });

  // node_modules/core-js/modules/_to-integer.js
  var require_to_integer = __commonJS({
    "node_modules/core-js/modules/_to-integer.js"(exports, module) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    }
  });

  // node_modules/core-js/modules/_to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/modules/_to-length.js"(exports, module) {
      var toInteger = require_to_integer();
      var min = Math.min;
      module.exports = function(it) {
        return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/modules/_to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/modules/_to-absolute-index.js"(exports, module) {
      var toInteger = require_to_integer();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    }
  });

  // node_modules/core-js/modules/_array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/modules/_array-includes.js"(exports, module) {
      var toIObject = require_to_iobject();
      var toLength = require_to_length();
      var toAbsoluteIndex = require_to_absolute_index();
      module.exports = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++];
            if (value != value) return true;
          }
          else for (; length > index; index++) if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };
    }
  });

  // node_modules/core-js/modules/_shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/modules/_shared-key.js"(exports, module) {
      var shared = require_shared()("keys");
      var uid = require_uid();
      module.exports = function(key) {
        return shared[key] || (shared[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/modules/_object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/modules/_object-keys-internal.js"(exports, module) {
      var has = require_has();
      var toIObject = require_to_iobject();
      var arrayIndexOf = require_array_includes()(false);
      var IE_PROTO = require_shared_key()("IE_PROTO");
      module.exports = function(object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
        while (names.length > i) if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
        return result;
      };
    }
  });

  // node_modules/core-js/modules/_enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/modules/_enum-bug-keys.js"(exports, module) {
      module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }
  });

  // node_modules/core-js/modules/_object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/modules/_object-keys.js"(exports, module) {
      var $keys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/modules/_object-gops.js
  var require_object_gops = __commonJS({
    "node_modules/core-js/modules/_object-gops.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/modules/_object-pie.js
  var require_object_pie = __commonJS({
    "node_modules/core-js/modules/_object-pie.js"(exports) {
      exports.f = {}.propertyIsEnumerable;
    }
  });

  // node_modules/core-js/modules/_enum-keys.js
  var require_enum_keys = __commonJS({
    "node_modules/core-js/modules/_enum-keys.js"(exports, module) {
      var getKeys = require_object_keys();
      var gOPS = require_object_gops();
      var pIE = require_object_pie();
      module.exports = function(it) {
        var result = getKeys(it);
        var getSymbols = gOPS.f;
        if (getSymbols) {
          var symbols = getSymbols(it);
          var isEnum = pIE.f;
          var i = 0;
          var key;
          while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
        }
        return result;
      };
    }
  });

  // node_modules/core-js/modules/_is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/modules/_is-array.js"(exports, module) {
      var cof = require_cof();
      module.exports = Array.isArray || function isArray2(arg) {
        return cof(arg) == "Array";
      };
    }
  });

  // node_modules/core-js/modules/_to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/modules/_to-object.js"(exports, module) {
      var defined = require_defined();
      module.exports = function(it) {
        return Object(defined(it));
      };
    }
  });

  // node_modules/core-js/modules/_object-dps.js
  var require_object_dps = __commonJS({
    "node_modules/core-js/modules/_object-dps.js"(exports, module) {
      var dP = require_object_dp();
      var anObject = require_an_object();
      var getKeys = require_object_keys();
      module.exports = require_descriptors() ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;
        while (length > i) dP.f(O, P = keys[i++], Properties[P]);
        return O;
      };
    }
  });

  // node_modules/core-js/modules/_html.js
  var require_html = __commonJS({
    "node_modules/core-js/modules/_html.js"(exports, module) {
      var document2 = require_global().document;
      module.exports = document2 && document2.documentElement;
    }
  });

  // node_modules/core-js/modules/_object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/modules/_object-create.js"(exports, module) {
      var anObject = require_an_object();
      var dPs = require_object_dps();
      var enumBugKeys = require_enum_bug_keys();
      var IE_PROTO = require_shared_key()("IE_PROTO");
      var Empty = function() {
      };
      var PROTOTYPE = "prototype";
      var createDict = function() {
        var iframe = require_dom_create()("iframe");
        var i = enumBugKeys.length;
        var lt = "<";
        var gt = ">";
        var iframeDocument;
        iframe.style.display = "none";
        require_html().appendChild(iframe);
        iframe.src = "javascript:";
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else result = createDict();
        return Properties === void 0 ? result : dPs(result, Properties);
      };
    }
  });

  // node_modules/core-js/modules/_object-gopn.js
  var require_object_gopn = __commonJS({
    "node_modules/core-js/modules/_object-gopn.js"(exports) {
      var $keys = require_object_keys_internal();
      var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/modules/_object-gopn-ext.js
  var require_object_gopn_ext = __commonJS({
    "node_modules/core-js/modules/_object-gopn-ext.js"(exports, module) {
      var toIObject = require_to_iobject();
      var gOPN = require_object_gopn().f;
      var toString3 = {}.toString;
      var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var getWindowNames = function(it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };
      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString3.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
      };
    }
  });

  // node_modules/core-js/modules/_object-gopd.js
  var require_object_gopd = __commonJS({
    "node_modules/core-js/modules/_object-gopd.js"(exports) {
      var pIE = require_object_pie();
      var createDesc = require_property_desc();
      var toIObject = require_to_iobject();
      var toPrimitive = require_to_primitive();
      var has = require_has();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var gOPD = Object.getOwnPropertyDescriptor;
      exports.f = require_descriptors() ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
          return gOPD(O, P);
        } catch (e) {
        }
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/modules/es6.symbol.js
  var require_es6_symbol = __commonJS({
    "node_modules/core-js/modules/es6.symbol.js"() {
      "use strict";
      var global2 = require_global();
      var has = require_has();
      var DESCRIPTORS = require_descriptors();
      var $export = require_export();
      var redefine = require_redefine();
      var META = require_meta().KEY;
      var $fails = require_fails();
      var shared = require_shared();
      var setToStringTag = require_set_to_string_tag();
      var uid = require_uid();
      var wks = require_wks();
      var wksExt = require_wks_ext();
      var wksDefine = require_wks_define();
      var enumKeys = require_enum_keys();
      var isArray2 = require_is_array();
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      var toObject = require_to_object();
      var toIObject = require_to_iobject();
      var toPrimitive = require_to_primitive();
      var createDesc = require_property_desc();
      var _create = require_object_create();
      var gOPNExt = require_object_gopn_ext();
      var $GOPD = require_object_gopd();
      var $GOPS = require_object_gops();
      var $DP = require_object_dp();
      var $keys = require_object_keys();
      var gOPD = $GOPD.f;
      var dP = $DP.f;
      var gOPN = gOPNExt.f;
      var $Symbol = global2.Symbol;
      var $JSON = global2.JSON;
      var _stringify = $JSON && $JSON.stringify;
      var PROTOTYPE = "prototype";
      var HIDDEN = wks("_hidden");
      var TO_PRIMITIVE = wks("toPrimitive");
      var isEnum = {}.propertyIsEnumerable;
      var SymbolRegistry = shared("symbol-registry");
      var AllSymbols = shared("symbols");
      var OPSymbols = shared("op-symbols");
      var ObjectProto = Object[PROTOTYPE];
      var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
      var QObject = global2.QObject;
      var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
      var setSymbolDesc = DESCRIPTORS && $fails(function() {
        return _create(dP({}, "a", {
          get: function() {
            return dP(this, "a", { value: 7 }).a;
          }
        })).a != 7;
      }) ? function(it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        dP(it, key, D);
        if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
      } : dP;
      var wrap = function(tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
        sym._k = tag;
        return sym;
      };
      var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        return it instanceof $Symbol;
      };
      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, { enumerable: createDesc(0, false) });
          }
          return setSymbolDesc(it, key, D);
        }
        return dP(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P));
        var i = 0;
        var l = keys.length;
        var key;
        while (l > i) $defineProperty(it, key = keys[i++], P[key]);
        return it;
      };
      var $create = function create(it, P) {
        return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key = toPrimitive(key, true));
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
        }
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto;
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
        }
        return result;
      };
      if (!USE_NATIVE) {
        $Symbol = function Symbol2() {
          if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
          var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
          var $set = function(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], "toString", function toString3() {
          return this._k;
        });
        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        require_object_gopn().f = gOPNExt.f = $getOwnPropertyNames;
        require_object_pie().f = $propertyIsEnumerable;
        $GOPS.f = $getOwnPropertySymbols;
        if (DESCRIPTORS && !require_library()) {
          redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
        }
        wksExt.f = function(name) {
          return wrap(wks(name));
        };
      }
      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
      for (es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; ) wks(es6Symbols[j++]);
      var es6Symbols;
      var j;
      for (wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);
      var wellKnownSymbols;
      var k;
      $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        // 19.4.2.1 Symbol.for(key)
        "for": function(key) {
          return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
          for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
        },
        useSetter: function() {
          setter = true;
        },
        useSimple: function() {
          setter = false;
        }
      });
      $export($export.S + $export.F * !USE_NATIVE, "Object", {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      });
      var FAILS_ON_PRIMITIVES = $fails(function() {
        $GOPS.f(1);
      });
      $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return $GOPS.f(toObject(it));
        }
      });
      $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
        var S = $Symbol();
        return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
      })), "JSON", {
        stringify: function stringify(it) {
          var args = [it];
          var i = 1;
          var replacer, $replacer;
          while (arguments.length > i) args.push(arguments[i++]);
          $replacer = replacer = args[1];
          if (!isObject2(replacer) && it === void 0 || isSymbol(it)) return;
          if (!isArray2(replacer)) replacer = function(key, value) {
            if (typeof $replacer == "function") value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
          args[1] = replacer;
          return _stringify.apply($JSON, args);
        }
      });
      $Symbol[PROTOTYPE][TO_PRIMITIVE] || require_hide()($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      setToStringTag($Symbol, "Symbol");
      setToStringTag(Math, "Math", true);
      setToStringTag(global2.JSON, "JSON", true);
    }
  });

  // node_modules/core-js/modules/es6.object.create.js
  var require_es6_object_create = __commonJS({
    "node_modules/core-js/modules/es6.object.create.js"() {
      var $export = require_export();
      $export($export.S, "Object", { create: require_object_create() });
    }
  });

  // node_modules/core-js/modules/es6.object.define-property.js
  var require_es6_object_define_property = __commonJS({
    "node_modules/core-js/modules/es6.object.define-property.js"() {
      var $export = require_export();
      $export($export.S + $export.F * !require_descriptors(), "Object", { defineProperty: require_object_dp().f });
    }
  });

  // node_modules/core-js/modules/es6.object.define-properties.js
  var require_es6_object_define_properties = __commonJS({
    "node_modules/core-js/modules/es6.object.define-properties.js"() {
      var $export = require_export();
      $export($export.S + $export.F * !require_descriptors(), "Object", { defineProperties: require_object_dps() });
    }
  });

  // node_modules/core-js/modules/_object-sap.js
  var require_object_sap = __commonJS({
    "node_modules/core-js/modules/_object-sap.js"(exports, module) {
      var $export = require_export();
      var core = require_core();
      var fails = require_fails();
      module.exports = function(KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY];
        var exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function() {
          fn(1);
        }), "Object", exp);
      };
    }
  });

  // node_modules/core-js/modules/es6.object.get-own-property-descriptor.js
  var require_es6_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/modules/es6.object.get-own-property-descriptor.js"() {
      var toIObject = require_to_iobject();
      var $getOwnPropertyDescriptor = require_object_gopd().f;
      require_object_sap()("getOwnPropertyDescriptor", function() {
        return function getOwnPropertyDescriptor(it, key) {
          return $getOwnPropertyDescriptor(toIObject(it), key);
        };
      });
    }
  });

  // node_modules/core-js/modules/_object-gpo.js
  var require_object_gpo = __commonJS({
    "node_modules/core-js/modules/_object-gpo.js"(exports, module) {
      var has = require_has();
      var toObject = require_to_object();
      var IE_PROTO = require_shared_key()("IE_PROTO");
      var ObjectProto = Object.prototype;
      module.exports = Object.getPrototypeOf || function(O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];
        if (typeof O.constructor == "function" && O instanceof O.constructor) {
          return O.constructor.prototype;
        }
        return O instanceof Object ? ObjectProto : null;
      };
    }
  });

  // node_modules/core-js/modules/es6.object.get-prototype-of.js
  var require_es6_object_get_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.object.get-prototype-of.js"() {
      var toObject = require_to_object();
      var $getPrototypeOf = require_object_gpo();
      require_object_sap()("getPrototypeOf", function() {
        return function getPrototypeOf2(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.keys.js
  var require_es6_object_keys = __commonJS({
    "node_modules/core-js/modules/es6.object.keys.js"() {
      var toObject = require_to_object();
      var $keys = require_object_keys();
      require_object_sap()("keys", function() {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.get-own-property-names.js
  var require_es6_object_get_own_property_names = __commonJS({
    "node_modules/core-js/modules/es6.object.get-own-property-names.js"() {
      require_object_sap()("getOwnPropertyNames", function() {
        return require_object_gopn_ext().f;
      });
    }
  });

  // node_modules/core-js/modules/es6.object.freeze.js
  var require_es6_object_freeze = __commonJS({
    "node_modules/core-js/modules/es6.object.freeze.js"() {
      var isObject2 = require_is_object();
      var meta = require_meta().onFreeze;
      require_object_sap()("freeze", function($freeze) {
        return function freeze(it) {
          return $freeze && isObject2(it) ? $freeze(meta(it)) : it;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.seal.js
  var require_es6_object_seal = __commonJS({
    "node_modules/core-js/modules/es6.object.seal.js"() {
      var isObject2 = require_is_object();
      var meta = require_meta().onFreeze;
      require_object_sap()("seal", function($seal) {
        return function seal(it) {
          return $seal && isObject2(it) ? $seal(meta(it)) : it;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.prevent-extensions.js
  var require_es6_object_prevent_extensions = __commonJS({
    "node_modules/core-js/modules/es6.object.prevent-extensions.js"() {
      var isObject2 = require_is_object();
      var meta = require_meta().onFreeze;
      require_object_sap()("preventExtensions", function($preventExtensions) {
        return function preventExtensions(it) {
          return $preventExtensions && isObject2(it) ? $preventExtensions(meta(it)) : it;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.is-frozen.js
  var require_es6_object_is_frozen = __commonJS({
    "node_modules/core-js/modules/es6.object.is-frozen.js"() {
      var isObject2 = require_is_object();
      require_object_sap()("isFrozen", function($isFrozen) {
        return function isFrozen(it) {
          return isObject2(it) ? $isFrozen ? $isFrozen(it) : false : true;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.is-sealed.js
  var require_es6_object_is_sealed = __commonJS({
    "node_modules/core-js/modules/es6.object.is-sealed.js"() {
      var isObject2 = require_is_object();
      require_object_sap()("isSealed", function($isSealed) {
        return function isSealed(it) {
          return isObject2(it) ? $isSealed ? $isSealed(it) : false : true;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.is-extensible.js
  var require_es6_object_is_extensible = __commonJS({
    "node_modules/core-js/modules/es6.object.is-extensible.js"() {
      var isObject2 = require_is_object();
      require_object_sap()("isExtensible", function($isExtensible) {
        return function isExtensible(it) {
          return isObject2(it) ? $isExtensible ? $isExtensible(it) : true : false;
        };
      });
    }
  });

  // node_modules/core-js/modules/_object-assign.js
  var require_object_assign = __commonJS({
    "node_modules/core-js/modules/_object-assign.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var getKeys = require_object_keys();
      var gOPS = require_object_gops();
      var pIE = require_object_pie();
      var toObject = require_to_object();
      var IObject = require_iobject();
      var $assign = Object.assign;
      module.exports = !$assign || require_fails()(function() {
        var A = {};
        var B = {};
        var S = Symbol();
        var K = "abcdefghijklmnopqrst";
        A[S] = 7;
        K.split("").forEach(function(k) {
          B[k] = k;
        });
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
      }) ? function assign(target, source) {
        var T = toObject(target);
        var aLen = arguments.length;
        var index = 1;
        var getSymbols = gOPS.f;
        var isEnum = pIE.f;
        while (aLen > index) {
          var S = IObject(arguments[index++]);
          var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
          }
        }
        return T;
      } : $assign;
    }
  });

  // node_modules/core-js/modules/es6.object.assign.js
  var require_es6_object_assign = __commonJS({
    "node_modules/core-js/modules/es6.object.assign.js"() {
      var $export = require_export();
      $export($export.S + $export.F, "Object", { assign: require_object_assign() });
    }
  });

  // node_modules/core-js/modules/_same-value.js
  var require_same_value = __commonJS({
    "node_modules/core-js/modules/_same-value.js"(exports, module) {
      module.exports = Object.is || function is(x, y) {
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
    }
  });

  // node_modules/core-js/modules/es6.object.is.js
  var require_es6_object_is = __commonJS({
    "node_modules/core-js/modules/es6.object.is.js"() {
      var $export = require_export();
      $export($export.S, "Object", { is: require_same_value() });
    }
  });

  // node_modules/core-js/modules/_set-proto.js
  var require_set_proto = __commonJS({
    "node_modules/core-js/modules/_set-proto.js"(exports, module) {
      var isObject2 = require_is_object();
      var anObject = require_an_object();
      var check = function(O, proto) {
        anObject(O);
        if (!isObject2(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
      };
      module.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? (
          // eslint-disable-line
          function(test2, buggy, set) {
            try {
              set = require_ctx()(Function.call, require_object_gopd().f(Object.prototype, "__proto__").set, 2);
              set(test2, []);
              buggy = !(test2 instanceof Array);
            } catch (e) {
              buggy = true;
            }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) O.__proto__ = proto;
              else set(O, proto);
              return O;
            };
          }({}, false)
        ) : void 0),
        check
      };
    }
  });

  // node_modules/core-js/modules/es6.object.set-prototype-of.js
  var require_es6_object_set_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.object.set-prototype-of.js"() {
      var $export = require_export();
      $export($export.S, "Object", { setPrototypeOf: require_set_proto().set });
    }
  });

  // node_modules/core-js/modules/_classof.js
  var require_classof = __commonJS({
    "node_modules/core-js/modules/_classof.js"(exports, module) {
      var cof = require_cof();
      var TAG = require_wks()("toStringTag");
      var ARG = cof(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (e) {
        }
      };
      module.exports = function(it) {
        var O, T, B;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
      };
    }
  });

  // node_modules/core-js/modules/es6.object.to-string.js
  var require_es6_object_to_string = __commonJS({
    "node_modules/core-js/modules/es6.object.to-string.js"() {
      "use strict";
      var classof = require_classof();
      var test2 = {};
      test2[require_wks()("toStringTag")] = "z";
      if (test2 + "" != "[object z]") {
        require_redefine()(Object.prototype, "toString", function toString3() {
          return "[object " + classof(this) + "]";
        }, true);
      }
    }
  });

  // node_modules/core-js/modules/_invoke.js
  var require_invoke = __commonJS({
    "node_modules/core-js/modules/_invoke.js"(exports, module) {
      module.exports = function(fn, args, that) {
        var un = that === void 0;
        switch (args.length) {
          case 0:
            return un ? fn() : fn.call(that);
          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
          case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
          case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
        }
        return fn.apply(that, args);
      };
    }
  });

  // node_modules/core-js/modules/_bind.js
  var require_bind = __commonJS({
    "node_modules/core-js/modules/_bind.js"(exports, module) {
      "use strict";
      var aFunction = require_a_function();
      var isObject2 = require_is_object();
      var invoke = require_invoke();
      var arraySlice = [].slice;
      var factories = {};
      var construct = function(F, len, args) {
        if (!(len in factories)) {
          for (var n = [], i = 0; i < len; i++) n[i] = "a[" + i + "]";
          factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
        }
        return factories[len](F, args);
      };
      module.exports = Function.bind || function bind2(that) {
        var fn = aFunction(this);
        var partArgs = arraySlice.call(arguments, 1);
        var bound = function() {
          var args = partArgs.concat(arraySlice.call(arguments));
          return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
        };
        if (isObject2(fn.prototype)) bound.prototype = fn.prototype;
        return bound;
      };
    }
  });

  // node_modules/core-js/modules/es6.function.bind.js
  var require_es6_function_bind = __commonJS({
    "node_modules/core-js/modules/es6.function.bind.js"() {
      var $export = require_export();
      $export($export.P, "Function", { bind: require_bind() });
    }
  });

  // node_modules/core-js/modules/es6.function.name.js
  var require_es6_function_name = __commonJS({
    "node_modules/core-js/modules/es6.function.name.js"() {
      var dP = require_object_dp().f;
      var FProto = Function.prototype;
      var nameRE = /^\s*function ([^ (]*)/;
      var NAME = "name";
      NAME in FProto || require_descriptors() && dP(FProto, NAME, {
        configurable: true,
        get: function() {
          try {
            return ("" + this).match(nameRE)[1];
          } catch (e) {
            return "";
          }
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.function.has-instance.js
  var require_es6_function_has_instance = __commonJS({
    "node_modules/core-js/modules/es6.function.has-instance.js"() {
      "use strict";
      var isObject2 = require_is_object();
      var getPrototypeOf2 = require_object_gpo();
      var HAS_INSTANCE = require_wks()("hasInstance");
      var FunctionProto = Function.prototype;
      if (!(HAS_INSTANCE in FunctionProto)) require_object_dp().f(FunctionProto, HAS_INSTANCE, { value: function(O) {
        if (typeof this != "function" || !isObject2(O)) return false;
        if (!isObject2(this.prototype)) return O instanceof this;
        while (O = getPrototypeOf2(O)) if (this.prototype === O) return true;
        return false;
      } });
    }
  });

  // node_modules/core-js/modules/_string-ws.js
  var require_string_ws = __commonJS({
    "node_modules/core-js/modules/_string-ws.js"(exports, module) {
      module.exports = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }
  });

  // node_modules/core-js/modules/_string-trim.js
  var require_string_trim = __commonJS({
    "node_modules/core-js/modules/_string-trim.js"(exports, module) {
      var $export = require_export();
      var defined = require_defined();
      var fails = require_fails();
      var spaces = require_string_ws();
      var space = "[" + spaces + "]";
      var non = "\u200B\x85";
      var ltrim = RegExp("^" + space + space + "*");
      var rtrim = RegExp(space + space + "*$");
      var exporter = function(KEY, exec, ALIAS) {
        var exp = {};
        var FORCE = fails(function() {
          return !!spaces[KEY]() || non[KEY]() != non;
        });
        var fn = exp[KEY] = FORCE ? exec(trim2) : spaces[KEY];
        if (ALIAS) exp[ALIAS] = fn;
        $export($export.P + $export.F * FORCE, "String", exp);
      };
      var trim2 = exporter.trim = function(string, TYPE) {
        string = String(defined(string));
        if (TYPE & 1) string = string.replace(ltrim, "");
        if (TYPE & 2) string = string.replace(rtrim, "");
        return string;
      };
      module.exports = exporter;
    }
  });

  // node_modules/core-js/modules/_parse-int.js
  var require_parse_int = __commonJS({
    "node_modules/core-js/modules/_parse-int.js"(exports, module) {
      var $parseInt = require_global().parseInt;
      var $trim = require_string_trim().trim;
      var ws = require_string_ws();
      var hex = /^[-+]?0[xX]/;
      module.exports = $parseInt(ws + "08") !== 8 || $parseInt(ws + "0x16") !== 22 ? function parseInt2(str, radix) {
        var string = $trim(String(str), 3);
        return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
      } : $parseInt;
    }
  });

  // node_modules/core-js/modules/es6.parse-int.js
  var require_es6_parse_int = __commonJS({
    "node_modules/core-js/modules/es6.parse-int.js"() {
      var $export = require_export();
      var $parseInt = require_parse_int();
      $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
    }
  });

  // node_modules/core-js/modules/_parse-float.js
  var require_parse_float = __commonJS({
    "node_modules/core-js/modules/_parse-float.js"(exports, module) {
      var $parseFloat = require_global().parseFloat;
      var $trim = require_string_trim().trim;
      module.exports = 1 / $parseFloat(require_string_ws() + "-0") !== -Infinity ? function parseFloat2(str) {
        var string = $trim(String(str), 3);
        var result = $parseFloat(string);
        return result === 0 && string.charAt(0) == "-" ? -0 : result;
      } : $parseFloat;
    }
  });

  // node_modules/core-js/modules/es6.parse-float.js
  var require_es6_parse_float = __commonJS({
    "node_modules/core-js/modules/es6.parse-float.js"() {
      var $export = require_export();
      var $parseFloat = require_parse_float();
      $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
    }
  });

  // node_modules/core-js/modules/_inherit-if-required.js
  var require_inherit_if_required = __commonJS({
    "node_modules/core-js/modules/_inherit-if-required.js"(exports, module) {
      var isObject2 = require_is_object();
      var setPrototypeOf = require_set_proto().set;
      module.exports = function(that, target, C) {
        var S = target.constructor;
        var P;
        if (S !== C && typeof S == "function" && (P = S.prototype) !== C.prototype && isObject2(P) && setPrototypeOf) {
          setPrototypeOf(that, P);
        }
        return that;
      };
    }
  });

  // node_modules/core-js/modules/es6.number.constructor.js
  var require_es6_number_constructor = __commonJS({
    "node_modules/core-js/modules/es6.number.constructor.js"() {
      "use strict";
      var global2 = require_global();
      var has = require_has();
      var cof = require_cof();
      var inheritIfRequired = require_inherit_if_required();
      var toPrimitive = require_to_primitive();
      var fails = require_fails();
      var gOPN = require_object_gopn().f;
      var gOPD = require_object_gopd().f;
      var dP = require_object_dp().f;
      var $trim = require_string_trim().trim;
      var NUMBER = "Number";
      var $Number = global2[NUMBER];
      var Base = $Number;
      var proto = $Number.prototype;
      var BROKEN_COF = cof(require_object_create()(proto)) == NUMBER;
      var TRIM = "trim" in String.prototype;
      var toNumber = function(argument) {
        var it = toPrimitive(argument, false);
        if (typeof it == "string" && it.length > 2) {
          it = TRIM ? it.trim() : $trim(it, 3);
          var first = it.charCodeAt(0);
          var third, radix, maxCode;
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN;
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66:
              case 98:
                radix = 2;
                maxCode = 49;
                break;
              // fast equal /^0b[01]+$/i
              case 79:
              case 111:
                radix = 8;
                maxCode = 55;
                break;
              // fast equal /^0o[0-7]+$/i
              default:
                return +it;
            }
            for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
              code = digits.charCodeAt(i);
              if (code < 48 || code > maxCode) return NaN;
            }
            return parseInt(digits, radix);
          }
        }
        return +it;
      };
      if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
        $Number = function Number2(value) {
          var it = arguments.length < 1 ? 0 : value;
          var that = this;
          return that instanceof $Number && (BROKEN_COF ? fails(function() {
            proto.valueOf.call(that);
          }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
        };
        for (keys = require_descriptors() ? gOPN(Base) : (
          // ES3:
          "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(",")
        ), j = 0; keys.length > j; j++) {
          if (has(Base, key = keys[j]) && !has($Number, key)) {
            dP($Number, key, gOPD(Base, key));
          }
        }
        $Number.prototype = proto;
        proto.constructor = $Number;
        require_redefine()(global2, NUMBER, $Number);
      }
      var keys;
      var j;
      var key;
    }
  });

  // node_modules/core-js/modules/_a-number-value.js
  var require_a_number_value = __commonJS({
    "node_modules/core-js/modules/_a-number-value.js"(exports, module) {
      var cof = require_cof();
      module.exports = function(it, msg) {
        if (typeof it != "number" && cof(it) != "Number") throw TypeError(msg);
        return +it;
      };
    }
  });

  // node_modules/core-js/modules/_string-repeat.js
  var require_string_repeat = __commonJS({
    "node_modules/core-js/modules/_string-repeat.js"(exports, module) {
      "use strict";
      var toInteger = require_to_integer();
      var defined = require_defined();
      module.exports = function repeat(count) {
        var str = String(defined(this));
        var res = "";
        var n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
        for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
        return res;
      };
    }
  });

  // node_modules/core-js/modules/es6.number.to-fixed.js
  var require_es6_number_to_fixed = __commonJS({
    "node_modules/core-js/modules/es6.number.to-fixed.js"() {
      "use strict";
      var $export = require_export();
      var toInteger = require_to_integer();
      var aNumberValue = require_a_number_value();
      var repeat = require_string_repeat();
      var $toFixed = 1 .toFixed;
      var floor = Math.floor;
      var data = [0, 0, 0, 0, 0, 0];
      var ERROR = "Number.toFixed: incorrect invocation!";
      var ZERO = "0";
      var multiply = function(n, c) {
        var i = -1;
        var c2 = c;
        while (++i < 6) {
          c2 += n * data[i];
          data[i] = c2 % 1e7;
          c2 = floor(c2 / 1e7);
        }
      };
      var divide = function(n) {
        var i = 6;
        var c = 0;
        while (--i >= 0) {
          c += data[i];
          data[i] = floor(c / n);
          c = c % n * 1e7;
        }
      };
      var numToString = function() {
        var i = 6;
        var s = "";
        while (--i >= 0) {
          if (s !== "" || i === 0 || data[i] !== 0) {
            var t = String(data[i]);
            s = s === "" ? t : s + repeat.call(ZERO, 7 - t.length) + t;
          }
        }
        return s;
      };
      var pow = function(x, n, acc) {
        return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
      };
      var log = function(x) {
        var n = 0;
        var x2 = x;
        while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
        }
        while (x2 >= 2) {
          n += 1;
          x2 /= 2;
        }
        return n;
      };
      $export($export.P + $export.F * (!!$toFixed && (8e-5.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000100 .toFixed(0) !== "1000000000000000128") || !require_fails()(function() {
        $toFixed.call({});
      })), "Number", {
        toFixed: function toFixed(fractionDigits) {
          var x = aNumberValue(this, ERROR);
          var f = toInteger(fractionDigits);
          var s = "";
          var m = ZERO;
          var e, z, j, k;
          if (f < 0 || f > 20) throw RangeError(ERROR);
          if (x != x) return "NaN";
          if (x <= -1e21 || x >= 1e21) return String(x);
          if (x < 0) {
            s = "-";
            x = -x;
          }
          if (x > 1e-21) {
            e = log(x * pow(2, 69, 1)) - 69;
            z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
            z *= 4503599627370496;
            e = 52 - e;
            if (e > 0) {
              multiply(0, z);
              j = f;
              while (j >= 7) {
                multiply(1e7, 0);
                j -= 7;
              }
              multiply(pow(10, j, 1), 0);
              j = e - 1;
              while (j >= 23) {
                divide(1 << 23);
                j -= 23;
              }
              divide(1 << j);
              multiply(1, 1);
              divide(2);
              m = numToString();
            } else {
              multiply(0, z);
              multiply(1 << -e, 0);
              m = numToString() + repeat.call(ZERO, f);
            }
          }
          if (f > 0) {
            k = m.length;
            m = s + (k <= f ? "0." + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + "." + m.slice(k - f));
          } else {
            m = s + m;
          }
          return m;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.to-precision.js
  var require_es6_number_to_precision = __commonJS({
    "node_modules/core-js/modules/es6.number.to-precision.js"() {
      "use strict";
      var $export = require_export();
      var $fails = require_fails();
      var aNumberValue = require_a_number_value();
      var $toPrecision = 1 .toPrecision;
      $export($export.P + $export.F * ($fails(function() {
        return $toPrecision.call(1, void 0) !== "1";
      }) || !$fails(function() {
        $toPrecision.call({});
      })), "Number", {
        toPrecision: function toPrecision(precision) {
          var that = aNumberValue(this, "Number#toPrecision: incorrect invocation!");
          return precision === void 0 ? $toPrecision.call(that) : $toPrecision.call(that, precision);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.epsilon.js
  var require_es6_number_epsilon = __commonJS({
    "node_modules/core-js/modules/es6.number.epsilon.js"() {
      var $export = require_export();
      $export($export.S, "Number", { EPSILON: Math.pow(2, -52) });
    }
  });

  // node_modules/core-js/modules/es6.number.is-finite.js
  var require_es6_number_is_finite = __commonJS({
    "node_modules/core-js/modules/es6.number.is-finite.js"() {
      var $export = require_export();
      var _isFinite = require_global().isFinite;
      $export($export.S, "Number", {
        isFinite: function isFinite2(it) {
          return typeof it == "number" && _isFinite(it);
        }
      });
    }
  });

  // node_modules/core-js/modules/_is-integer.js
  var require_is_integer = __commonJS({
    "node_modules/core-js/modules/_is-integer.js"(exports, module) {
      var isObject2 = require_is_object();
      var floor = Math.floor;
      module.exports = function isInteger(it) {
        return !isObject2(it) && isFinite(it) && floor(it) === it;
      };
    }
  });

  // node_modules/core-js/modules/es6.number.is-integer.js
  var require_es6_number_is_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.is-integer.js"() {
      var $export = require_export();
      $export($export.S, "Number", { isInteger: require_is_integer() });
    }
  });

  // node_modules/core-js/modules/es6.number.is-nan.js
  var require_es6_number_is_nan = __commonJS({
    "node_modules/core-js/modules/es6.number.is-nan.js"() {
      var $export = require_export();
      $export($export.S, "Number", {
        isNaN: function isNaN2(number) {
          return number != number;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.is-safe-integer.js
  var require_es6_number_is_safe_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.is-safe-integer.js"() {
      var $export = require_export();
      var isInteger = require_is_integer();
      var abs = Math.abs;
      $export($export.S, "Number", {
        isSafeInteger: function isSafeInteger(number) {
          return isInteger(number) && abs(number) <= 9007199254740991;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.max-safe-integer.js
  var require_es6_number_max_safe_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.max-safe-integer.js"() {
      var $export = require_export();
      $export($export.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
    }
  });

  // node_modules/core-js/modules/es6.number.min-safe-integer.js
  var require_es6_number_min_safe_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.min-safe-integer.js"() {
      var $export = require_export();
      $export($export.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
    }
  });

  // node_modules/core-js/modules/es6.number.parse-float.js
  var require_es6_number_parse_float = __commonJS({
    "node_modules/core-js/modules/es6.number.parse-float.js"() {
      var $export = require_export();
      var $parseFloat = require_parse_float();
      $export($export.S + $export.F * (Number.parseFloat != $parseFloat), "Number", { parseFloat: $parseFloat });
    }
  });

  // node_modules/core-js/modules/es6.number.parse-int.js
  var require_es6_number_parse_int = __commonJS({
    "node_modules/core-js/modules/es6.number.parse-int.js"() {
      var $export = require_export();
      var $parseInt = require_parse_int();
      $export($export.S + $export.F * (Number.parseInt != $parseInt), "Number", { parseInt: $parseInt });
    }
  });

  // node_modules/core-js/modules/_math-log1p.js
  var require_math_log1p = __commonJS({
    "node_modules/core-js/modules/_math-log1p.js"(exports, module) {
      module.exports = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
      };
    }
  });

  // node_modules/core-js/modules/es6.math.acosh.js
  var require_es6_math_acosh = __commonJS({
    "node_modules/core-js/modules/es6.math.acosh.js"() {
      var $export = require_export();
      var log1p = require_math_log1p();
      var sqrt = Math.sqrt;
      var $acosh = Math.acosh;
      $export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710 && $acosh(Infinity) == Infinity), "Math", {
        acosh: function acosh(x) {
          return (x = +x) < 1 ? NaN : x > 9490626562425156e-8 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.asinh.js
  var require_es6_math_asinh = __commonJS({
    "node_modules/core-js/modules/es6.math.asinh.js"() {
      var $export = require_export();
      var $asinh = Math.asinh;
      function asinh(x) {
        return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
      }
      $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), "Math", { asinh });
    }
  });

  // node_modules/core-js/modules/es6.math.atanh.js
  var require_es6_math_atanh = __commonJS({
    "node_modules/core-js/modules/es6.math.atanh.js"() {
      var $export = require_export();
      var $atanh = Math.atanh;
      $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), "Math", {
        atanh: function atanh(x) {
          return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
        }
      });
    }
  });

  // node_modules/core-js/modules/_math-sign.js
  var require_math_sign = __commonJS({
    "node_modules/core-js/modules/_math-sign.js"(exports, module) {
      module.exports = Math.sign || function sign(x) {
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
    }
  });

  // node_modules/core-js/modules/es6.math.cbrt.js
  var require_es6_math_cbrt = __commonJS({
    "node_modules/core-js/modules/es6.math.cbrt.js"() {
      var $export = require_export();
      var sign = require_math_sign();
      $export($export.S, "Math", {
        cbrt: function cbrt(x) {
          return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.clz32.js
  var require_es6_math_clz32 = __commonJS({
    "node_modules/core-js/modules/es6.math.clz32.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        clz32: function clz32(x) {
          return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.cosh.js
  var require_es6_math_cosh = __commonJS({
    "node_modules/core-js/modules/es6.math.cosh.js"() {
      var $export = require_export();
      var exp = Math.exp;
      $export($export.S, "Math", {
        cosh: function cosh(x) {
          return (exp(x = +x) + exp(-x)) / 2;
        }
      });
    }
  });

  // node_modules/core-js/modules/_math-expm1.js
  var require_math_expm1 = __commonJS({
    "node_modules/core-js/modules/_math-expm1.js"(exports, module) {
      var $expm1 = Math.expm1;
      module.exports = !$expm1 || $expm1(10) > 22025.465794806718 || $expm1(10) < 22025.465794806718 || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
      } : $expm1;
    }
  });

  // node_modules/core-js/modules/es6.math.expm1.js
  var require_es6_math_expm1 = __commonJS({
    "node_modules/core-js/modules/es6.math.expm1.js"() {
      var $export = require_export();
      var $expm1 = require_math_expm1();
      $export($export.S + $export.F * ($expm1 != Math.expm1), "Math", { expm1: $expm1 });
    }
  });

  // node_modules/core-js/modules/_math-fround.js
  var require_math_fround = __commonJS({
    "node_modules/core-js/modules/_math-fround.js"(exports, module) {
      var sign = require_math_sign();
      var pow = Math.pow;
      var EPSILON = pow(2, -52);
      var EPSILON32 = pow(2, -23);
      var MAX32 = pow(2, 127) * (2 - EPSILON32);
      var MIN32 = pow(2, -126);
      var roundTiesToEven = function(n) {
        return n + 1 / EPSILON - 1 / EPSILON;
      };
      module.exports = Math.fround || function fround(x) {
        var $abs = Math.abs(x);
        var $sign = sign(x);
        var a, result;
        if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
        a = (1 + EPSILON32 / EPSILON) * $abs;
        result = a - (a - $abs);
        if (result > MAX32 || result != result) return $sign * Infinity;
        return $sign * result;
      };
    }
  });

  // node_modules/core-js/modules/es6.math.fround.js
  var require_es6_math_fround = __commonJS({
    "node_modules/core-js/modules/es6.math.fround.js"() {
      var $export = require_export();
      $export($export.S, "Math", { fround: require_math_fround() });
    }
  });

  // node_modules/core-js/modules/es6.math.hypot.js
  var require_es6_math_hypot = __commonJS({
    "node_modules/core-js/modules/es6.math.hypot.js"() {
      var $export = require_export();
      var abs = Math.abs;
      $export($export.S, "Math", {
        hypot: function hypot(value1, value2) {
          var sum = 0;
          var i = 0;
          var aLen = arguments.length;
          var larg = 0;
          var arg, div;
          while (i < aLen) {
            arg = abs(arguments[i++]);
            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else sum += arg;
          }
          return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.imul.js
  var require_es6_math_imul = __commonJS({
    "node_modules/core-js/modules/es6.math.imul.js"() {
      var $export = require_export();
      var $imul = Math.imul;
      $export($export.S + $export.F * require_fails()(function() {
        return $imul(4294967295, 5) != -5 || $imul.length != 2;
      }), "Math", {
        imul: function imul(x, y) {
          var UINT16 = 65535;
          var xn = +x;
          var yn = +y;
          var xl = UINT16 & xn;
          var yl = UINT16 & yn;
          return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.log10.js
  var require_es6_math_log10 = __commonJS({
    "node_modules/core-js/modules/es6.math.log10.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        log10: function log10(x) {
          return Math.log(x) * Math.LOG10E;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.log1p.js
  var require_es6_math_log1p = __commonJS({
    "node_modules/core-js/modules/es6.math.log1p.js"() {
      var $export = require_export();
      $export($export.S, "Math", { log1p: require_math_log1p() });
    }
  });

  // node_modules/core-js/modules/es6.math.log2.js
  var require_es6_math_log2 = __commonJS({
    "node_modules/core-js/modules/es6.math.log2.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        log2: function log2(x) {
          return Math.log(x) / Math.LN2;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.sign.js
  var require_es6_math_sign = __commonJS({
    "node_modules/core-js/modules/es6.math.sign.js"() {
      var $export = require_export();
      $export($export.S, "Math", { sign: require_math_sign() });
    }
  });

  // node_modules/core-js/modules/es6.math.sinh.js
  var require_es6_math_sinh = __commonJS({
    "node_modules/core-js/modules/es6.math.sinh.js"() {
      var $export = require_export();
      var expm1 = require_math_expm1();
      var exp = Math.exp;
      $export($export.S + $export.F * require_fails()(function() {
        return !Math.sinh(-2e-17) != -2e-17;
      }), "Math", {
        sinh: function sinh(x) {
          return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.tanh.js
  var require_es6_math_tanh = __commonJS({
    "node_modules/core-js/modules/es6.math.tanh.js"() {
      var $export = require_export();
      var expm1 = require_math_expm1();
      var exp = Math.exp;
      $export($export.S, "Math", {
        tanh: function tanh(x) {
          var a = expm1(x = +x);
          var b = expm1(-x);
          return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.trunc.js
  var require_es6_math_trunc = __commonJS({
    "node_modules/core-js/modules/es6.math.trunc.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        trunc: function trunc(it) {
          return (it > 0 ? Math.floor : Math.ceil)(it);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.from-code-point.js
  var require_es6_string_from_code_point = __commonJS({
    "node_modules/core-js/modules/es6.string.from-code-point.js"() {
      var $export = require_export();
      var toAbsoluteIndex = require_to_absolute_index();
      var fromCharCode = String.fromCharCode;
      var $fromCodePoint = String.fromCodePoint;
      $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
        // 21.1.2.2 String.fromCodePoint(...codePoints)
        fromCodePoint: function fromCodePoint(x) {
          var res = [];
          var aLen = arguments.length;
          var i = 0;
          var code;
          while (aLen > i) {
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
            res.push(
              code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320)
            );
          }
          return res.join("");
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.raw.js
  var require_es6_string_raw = __commonJS({
    "node_modules/core-js/modules/es6.string.raw.js"() {
      var $export = require_export();
      var toIObject = require_to_iobject();
      var toLength = require_to_length();
      $export($export.S, "String", {
        // 21.1.2.4 String.raw(callSite, ...substitutions)
        raw: function raw(callSite) {
          var tpl = toIObject(callSite.raw);
          var len = toLength(tpl.length);
          var aLen = arguments.length;
          var res = [];
          var i = 0;
          while (len > i) {
            res.push(String(tpl[i++]));
            if (i < aLen) res.push(String(arguments[i]));
          }
          return res.join("");
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.trim.js
  var require_es6_string_trim = __commonJS({
    "node_modules/core-js/modules/es6.string.trim.js"() {
      "use strict";
      require_string_trim()("trim", function($trim) {
        return function trim2() {
          return $trim(this, 3);
        };
      });
    }
  });

  // node_modules/core-js/modules/_string-at.js
  var require_string_at = __commonJS({
    "node_modules/core-js/modules/_string-at.js"(exports, module) {
      var toInteger = require_to_integer();
      var defined = require_defined();
      module.exports = function(TO_STRING) {
        return function(that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
          a = s.charCodeAt(i);
          return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
        };
      };
    }
  });

  // node_modules/core-js/modules/_iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js/modules/_iterators.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/modules/_iter-create.js
  var require_iter_create = __commonJS({
    "node_modules/core-js/modules/_iter-create.js"(exports, module) {
      "use strict";
      var create = require_object_create();
      var descriptor = require_property_desc();
      var setToStringTag = require_set_to_string_tag();
      var IteratorPrototype = {};
      require_hide()(IteratorPrototype, require_wks()("iterator"), function() {
        return this;
      });
      module.exports = function(Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
        setToStringTag(Constructor, NAME + " Iterator");
      };
    }
  });

  // node_modules/core-js/modules/_iter-define.js
  var require_iter_define = __commonJS({
    "node_modules/core-js/modules/_iter-define.js"(exports, module) {
      "use strict";
      var LIBRARY = require_library();
      var $export = require_export();
      var redefine = require_redefine();
      var hide = require_hide();
      var Iterators = require_iterators();
      var $iterCreate = require_iter_create();
      var setToStringTag = require_set_to_string_tag();
      var getPrototypeOf2 = require_object_gpo();
      var ITERATOR = require_wks()("iterator");
      var BUGGY = !([].keys && "next" in [].keys());
      var FF_ITERATOR = "@@iterator";
      var KEYS = "keys";
      var VALUES = "values";
      var returnThis = function() {
        return this;
      };
      module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function(kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }
          return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + " Iterator";
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
        var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype;
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf2($anyNative.call(new Base()));
          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            setToStringTag(IteratorPrototype, TAG, true);
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native.call(this);
          };
        }
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED) for (key in methods) {
            if (!(key in proto)) redefine(proto, key, methods[key]);
          }
          else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }
        return methods;
      };
    }
  });

  // node_modules/core-js/modules/es6.string.iterator.js
  var require_es6_string_iterator = __commonJS({
    "node_modules/core-js/modules/es6.string.iterator.js"() {
      "use strict";
      var $at = require_string_at()(true);
      require_iter_define()(String, "String", function(iterated) {
        this._t = String(iterated);
        this._i = 0;
      }, function() {
        var O = this._t;
        var index = this._i;
        var point;
        if (index >= O.length) return { value: void 0, done: true };
        point = $at(O, index);
        this._i += point.length;
        return { value: point, done: false };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.code-point-at.js
  var require_es6_string_code_point_at = __commonJS({
    "node_modules/core-js/modules/es6.string.code-point-at.js"() {
      "use strict";
      var $export = require_export();
      var $at = require_string_at()(false);
      $export($export.P, "String", {
        // 21.1.3.3 String.prototype.codePointAt(pos)
        codePointAt: function codePointAt(pos) {
          return $at(this, pos);
        }
      });
    }
  });

  // node_modules/core-js/modules/_is-regexp.js
  var require_is_regexp = __commonJS({
    "node_modules/core-js/modules/_is-regexp.js"(exports, module) {
      var isObject2 = require_is_object();
      var cof = require_cof();
      var MATCH = require_wks()("match");
      module.exports = function(it) {
        var isRegExp2;
        return isObject2(it) && ((isRegExp2 = it[MATCH]) !== void 0 ? !!isRegExp2 : cof(it) == "RegExp");
      };
    }
  });

  // node_modules/core-js/modules/_string-context.js
  var require_string_context = __commonJS({
    "node_modules/core-js/modules/_string-context.js"(exports, module) {
      var isRegExp2 = require_is_regexp();
      var defined = require_defined();
      module.exports = function(that, searchString, NAME) {
        if (isRegExp2(searchString)) throw TypeError("String#" + NAME + " doesn't accept regex!");
        return String(defined(that));
      };
    }
  });

  // node_modules/core-js/modules/_fails-is-regexp.js
  var require_fails_is_regexp = __commonJS({
    "node_modules/core-js/modules/_fails-is-regexp.js"(exports, module) {
      var MATCH = require_wks()("match");
      module.exports = function(KEY) {
        var re = /./;
        try {
          "/./"[KEY](re);
        } catch (e) {
          try {
            re[MATCH] = false;
            return !"/./"[KEY](re);
          } catch (f) {
          }
        }
        return true;
      };
    }
  });

  // node_modules/core-js/modules/es6.string.ends-with.js
  var require_es6_string_ends_with = __commonJS({
    "node_modules/core-js/modules/es6.string.ends-with.js"() {
      "use strict";
      var $export = require_export();
      var toLength = require_to_length();
      var context = require_string_context();
      var ENDS_WITH = "endsWith";
      var $endsWith = ""[ENDS_WITH];
      $export($export.P + $export.F * require_fails_is_regexp()(ENDS_WITH), "String", {
        endsWith: function endsWith2(searchString) {
          var that = context(this, searchString, ENDS_WITH);
          var endPosition = arguments.length > 1 ? arguments[1] : void 0;
          var len = toLength(that.length);
          var end = endPosition === void 0 ? len : Math.min(toLength(endPosition), len);
          var search = String(searchString);
          return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.includes.js
  var require_es6_string_includes = __commonJS({
    "node_modules/core-js/modules/es6.string.includes.js"() {
      "use strict";
      var $export = require_export();
      var context = require_string_context();
      var INCLUDES = "includes";
      $export($export.P + $export.F * require_fails_is_regexp()(INCLUDES), "String", {
        includes: function includes(searchString) {
          return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.repeat.js
  var require_es6_string_repeat = __commonJS({
    "node_modules/core-js/modules/es6.string.repeat.js"() {
      var $export = require_export();
      $export($export.P, "String", {
        // 21.1.3.13 String.prototype.repeat(count)
        repeat: require_string_repeat()
      });
    }
  });

  // node_modules/core-js/modules/es6.string.starts-with.js
  var require_es6_string_starts_with = __commonJS({
    "node_modules/core-js/modules/es6.string.starts-with.js"() {
      "use strict";
      var $export = require_export();
      var toLength = require_to_length();
      var context = require_string_context();
      var STARTS_WITH = "startsWith";
      var $startsWith = ""[STARTS_WITH];
      $export($export.P + $export.F * require_fails_is_regexp()(STARTS_WITH), "String", {
        startsWith: function startsWith(searchString) {
          var that = context(this, searchString, STARTS_WITH);
          var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : void 0, that.length));
          var search = String(searchString);
          return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
        }
      });
    }
  });

  // node_modules/core-js/modules/_string-html.js
  var require_string_html = __commonJS({
    "node_modules/core-js/modules/_string-html.js"(exports, module) {
      var $export = require_export();
      var fails = require_fails();
      var defined = require_defined();
      var quot = /"/g;
      var createHTML = function(string, tag, attribute, value) {
        var S = String(defined(string));
        var p1 = "<" + tag;
        if (attribute !== "") p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"';
        return p1 + ">" + S + "</" + tag + ">";
      };
      module.exports = function(NAME, exec) {
        var O = {};
        O[NAME] = exec(createHTML);
        $export($export.P + $export.F * fails(function() {
          var test2 = ""[NAME]('"');
          return test2 !== test2.toLowerCase() || test2.split('"').length > 3;
        }), "String", O);
      };
    }
  });

  // node_modules/core-js/modules/es6.string.anchor.js
  var require_es6_string_anchor = __commonJS({
    "node_modules/core-js/modules/es6.string.anchor.js"() {
      "use strict";
      require_string_html()("anchor", function(createHTML) {
        return function anchor(name) {
          return createHTML(this, "a", "name", name);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.big.js
  var require_es6_string_big = __commonJS({
    "node_modules/core-js/modules/es6.string.big.js"() {
      "use strict";
      require_string_html()("big", function(createHTML) {
        return function big() {
          return createHTML(this, "big", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.blink.js
  var require_es6_string_blink = __commonJS({
    "node_modules/core-js/modules/es6.string.blink.js"() {
      "use strict";
      require_string_html()("blink", function(createHTML) {
        return function blink() {
          return createHTML(this, "blink", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.bold.js
  var require_es6_string_bold = __commonJS({
    "node_modules/core-js/modules/es6.string.bold.js"() {
      "use strict";
      require_string_html()("bold", function(createHTML) {
        return function bold() {
          return createHTML(this, "b", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.fixed.js
  var require_es6_string_fixed = __commonJS({
    "node_modules/core-js/modules/es6.string.fixed.js"() {
      "use strict";
      require_string_html()("fixed", function(createHTML) {
        return function fixed() {
          return createHTML(this, "tt", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.fontcolor.js
  var require_es6_string_fontcolor = __commonJS({
    "node_modules/core-js/modules/es6.string.fontcolor.js"() {
      "use strict";
      require_string_html()("fontcolor", function(createHTML) {
        return function fontcolor(color) {
          return createHTML(this, "font", "color", color);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.fontsize.js
  var require_es6_string_fontsize = __commonJS({
    "node_modules/core-js/modules/es6.string.fontsize.js"() {
      "use strict";
      require_string_html()("fontsize", function(createHTML) {
        return function fontsize(size) {
          return createHTML(this, "font", "size", size);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.italics.js
  var require_es6_string_italics = __commonJS({
    "node_modules/core-js/modules/es6.string.italics.js"() {
      "use strict";
      require_string_html()("italics", function(createHTML) {
        return function italics() {
          return createHTML(this, "i", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.link.js
  var require_es6_string_link = __commonJS({
    "node_modules/core-js/modules/es6.string.link.js"() {
      "use strict";
      require_string_html()("link", function(createHTML) {
        return function link(url) {
          return createHTML(this, "a", "href", url);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.small.js
  var require_es6_string_small = __commonJS({
    "node_modules/core-js/modules/es6.string.small.js"() {
      "use strict";
      require_string_html()("small", function(createHTML) {
        return function small() {
          return createHTML(this, "small", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.strike.js
  var require_es6_string_strike = __commonJS({
    "node_modules/core-js/modules/es6.string.strike.js"() {
      "use strict";
      require_string_html()("strike", function(createHTML) {
        return function strike() {
          return createHTML(this, "strike", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.sub.js
  var require_es6_string_sub = __commonJS({
    "node_modules/core-js/modules/es6.string.sub.js"() {
      "use strict";
      require_string_html()("sub", function(createHTML) {
        return function sub() {
          return createHTML(this, "sub", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.sup.js
  var require_es6_string_sup = __commonJS({
    "node_modules/core-js/modules/es6.string.sup.js"() {
      "use strict";
      require_string_html()("sup", function(createHTML) {
        return function sup() {
          return createHTML(this, "sup", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.date.now.js
  var require_es6_date_now = __commonJS({
    "node_modules/core-js/modules/es6.date.now.js"() {
      var $export = require_export();
      $export($export.S, "Date", { now: function() {
        return (/* @__PURE__ */ new Date()).getTime();
      } });
    }
  });

  // node_modules/core-js/modules/es6.date.to-json.js
  var require_es6_date_to_json = __commonJS({
    "node_modules/core-js/modules/es6.date.to-json.js"() {
      "use strict";
      var $export = require_export();
      var toObject = require_to_object();
      var toPrimitive = require_to_primitive();
      $export($export.P + $export.F * require_fails()(function() {
        return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
          return 1;
        } }) !== 1;
      }), "Date", {
        // eslint-disable-next-line no-unused-vars
        toJSON: function toJSON2(key) {
          var O = toObject(this);
          var pv = toPrimitive(O);
          return typeof pv == "number" && !isFinite(pv) ? null : O.toISOString();
        }
      });
    }
  });

  // node_modules/core-js/modules/_date-to-iso-string.js
  var require_date_to_iso_string = __commonJS({
    "node_modules/core-js/modules/_date-to-iso-string.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var getTime = Date.prototype.getTime;
      var $toISOString = Date.prototype.toISOString;
      var lz = function(num) {
        return num > 9 ? num : "0" + num;
      };
      module.exports = fails(function() {
        return $toISOString.call(new Date(-5e13 - 1)) != "0385-07-25T07:06:39.999Z";
      }) || !fails(function() {
        $toISOString.call(/* @__PURE__ */ new Date(NaN));
      }) ? function toISOString() {
        if (!isFinite(getTime.call(this))) throw RangeError("Invalid time value");
        var d = this;
        var y = d.getUTCFullYear();
        var m = d.getUTCMilliseconds();
        var s = y < 0 ? "-" : y > 9999 ? "+" : "";
        return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99 ? m : "0" + lz(m)) + "Z";
      } : $toISOString;
    }
  });

  // node_modules/core-js/modules/es6.date.to-iso-string.js
  var require_es6_date_to_iso_string = __commonJS({
    "node_modules/core-js/modules/es6.date.to-iso-string.js"() {
      var $export = require_export();
      var toISOString = require_date_to_iso_string();
      $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), "Date", {
        toISOString
      });
    }
  });

  // node_modules/core-js/modules/es6.date.to-string.js
  var require_es6_date_to_string = __commonJS({
    "node_modules/core-js/modules/es6.date.to-string.js"() {
      var DateProto = Date.prototype;
      var INVALID_DATE = "Invalid Date";
      var TO_STRING = "toString";
      var $toString = DateProto[TO_STRING];
      var getTime = DateProto.getTime;
      if (/* @__PURE__ */ new Date(NaN) + "" != INVALID_DATE) {
        require_redefine()(DateProto, TO_STRING, function toString3() {
          var value = getTime.call(this);
          return value === value ? $toString.call(this) : INVALID_DATE;
        });
      }
    }
  });

  // node_modules/core-js/modules/_date-to-primitive.js
  var require_date_to_primitive = __commonJS({
    "node_modules/core-js/modules/_date-to-primitive.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var toPrimitive = require_to_primitive();
      var NUMBER = "number";
      module.exports = function(hint) {
        if (hint !== "string" && hint !== NUMBER && hint !== "default") throw TypeError("Incorrect hint");
        return toPrimitive(anObject(this), hint != NUMBER);
      };
    }
  });

  // node_modules/core-js/modules/es6.date.to-primitive.js
  var require_es6_date_to_primitive = __commonJS({
    "node_modules/core-js/modules/es6.date.to-primitive.js"() {
      var TO_PRIMITIVE = require_wks()("toPrimitive");
      var proto = Date.prototype;
      if (!(TO_PRIMITIVE in proto)) require_hide()(proto, TO_PRIMITIVE, require_date_to_primitive());
    }
  });

  // node_modules/core-js/modules/es6.array.is-array.js
  var require_es6_array_is_array = __commonJS({
    "node_modules/core-js/modules/es6.array.is-array.js"() {
      var $export = require_export();
      $export($export.S, "Array", { isArray: require_is_array() });
    }
  });

  // node_modules/core-js/modules/_iter-call.js
  var require_iter_call = __commonJS({
    "node_modules/core-js/modules/_iter-call.js"(exports, module) {
      var anObject = require_an_object();
      module.exports = function(iterator2, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (e) {
          var ret = iterator2["return"];
          if (ret !== void 0) anObject(ret.call(iterator2));
          throw e;
        }
      };
    }
  });

  // node_modules/core-js/modules/_is-array-iter.js
  var require_is_array_iter = __commonJS({
    "node_modules/core-js/modules/_is-array-iter.js"(exports, module) {
      var Iterators = require_iterators();
      var ITERATOR = require_wks()("iterator");
      var ArrayProto = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js/modules/_create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js/modules/_create-property.js"(exports, module) {
      "use strict";
      var $defineProperty = require_object_dp();
      var createDesc = require_property_desc();
      module.exports = function(object, index, value) {
        if (index in object) $defineProperty.f(object, index, createDesc(0, value));
        else object[index] = value;
      };
    }
  });

  // node_modules/core-js/modules/core.get-iterator-method.js
  var require_core_get_iterator_method = __commonJS({
    "node_modules/core-js/modules/core.get-iterator-method.js"(exports, module) {
      var classof = require_classof();
      var ITERATOR = require_wks()("iterator");
      var Iterators = require_iterators();
      module.exports = require_core().getIteratorMethod = function(it) {
        if (it != void 0) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
      };
    }
  });

  // node_modules/core-js/modules/_iter-detect.js
  var require_iter_detect = __commonJS({
    "node_modules/core-js/modules/_iter-detect.js"(exports, module) {
      var ITERATOR = require_wks()("iterator");
      var SAFE_CLOSING = false;
      try {
        riter = [7][ITERATOR]();
        riter["return"] = function() {
          SAFE_CLOSING = true;
        };
        Array.from(riter, function() {
          throw 2;
        });
      } catch (e) {
      }
      var riter;
      module.exports = function(exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
          var arr = [7];
          var iter = arr[ITERATOR]();
          iter.next = function() {
            return { done: safe = true };
          };
          arr[ITERATOR] = function() {
            return iter;
          };
          exec(arr);
        } catch (e) {
        }
        return safe;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.from.js
  var require_es6_array_from = __commonJS({
    "node_modules/core-js/modules/es6.array.from.js"() {
      "use strict";
      var ctx = require_ctx();
      var $export = require_export();
      var toObject = require_to_object();
      var call = require_iter_call();
      var isArrayIter = require_is_array_iter();
      var toLength = require_to_length();
      var createProperty = require_create_property();
      var getIterFn = require_core_get_iterator_method();
      $export($export.S + $export.F * !require_iter_detect()(function(iter) {
        Array.from(iter);
      }), "Array", {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function from(arrayLike) {
          var O = toObject(arrayLike);
          var C = typeof this == "function" ? this : Array;
          var aLen = arguments.length;
          var mapfn = aLen > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          var index = 0;
          var iterFn = getIterFn(O);
          var length, result, step, iterator2;
          if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
          if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
            for (iterator2 = iterFn.call(O), result = new C(); !(step = iterator2.next()).done; index++) {
              createProperty(result, index, mapping ? call(iterator2, mapfn, [step.value, index], true) : step.value);
            }
          } else {
            length = toLength(O.length);
            for (result = new C(length); length > index; index++) {
              createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
            }
          }
          result.length = index;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.of.js
  var require_es6_array_of = __commonJS({
    "node_modules/core-js/modules/es6.array.of.js"() {
      "use strict";
      var $export = require_export();
      var createProperty = require_create_property();
      $export($export.S + $export.F * require_fails()(function() {
        function F() {
        }
        return !(Array.of.call(F) instanceof F);
      }), "Array", {
        // 22.1.2.3 Array.of( ...items)
        of: function of() {
          var index = 0;
          var aLen = arguments.length;
          var result = new (typeof this == "function" ? this : Array)(aLen);
          while (aLen > index) createProperty(result, index, arguments[index++]);
          result.length = aLen;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/_strict-method.js
  var require_strict_method = __commonJS({
    "node_modules/core-js/modules/_strict-method.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = function(method, arg) {
        return !!method && fails(function() {
          arg ? method.call(null, function() {
          }, 1) : method.call(null);
        });
      };
    }
  });

  // node_modules/core-js/modules/es6.array.join.js
  var require_es6_array_join = __commonJS({
    "node_modules/core-js/modules/es6.array.join.js"() {
      "use strict";
      var $export = require_export();
      var toIObject = require_to_iobject();
      var arrayJoin = [].join;
      $export($export.P + $export.F * (require_iobject() != Object || !require_strict_method()(arrayJoin)), "Array", {
        join: function join(separator) {
          return arrayJoin.call(toIObject(this), separator === void 0 ? "," : separator);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.slice.js
  var require_es6_array_slice = __commonJS({
    "node_modules/core-js/modules/es6.array.slice.js"() {
      "use strict";
      var $export = require_export();
      var html = require_html();
      var cof = require_cof();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      var arraySlice = [].slice;
      $export($export.P + $export.F * require_fails()(function() {
        if (html) arraySlice.call(html);
      }), "Array", {
        slice: function slice(begin, end) {
          var len = toLength(this.length);
          var klass = cof(this);
          end = end === void 0 ? len : end;
          if (klass == "Array") return arraySlice.call(this, begin, end);
          var start = toAbsoluteIndex(begin, len);
          var upTo = toAbsoluteIndex(end, len);
          var size = toLength(upTo - start);
          var cloned = new Array(size);
          var i = 0;
          for (; i < size; i++) cloned[i] = klass == "String" ? this.charAt(start + i) : this[start + i];
          return cloned;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.sort.js
  var require_es6_array_sort = __commonJS({
    "node_modules/core-js/modules/es6.array.sort.js"() {
      "use strict";
      var $export = require_export();
      var aFunction = require_a_function();
      var toObject = require_to_object();
      var fails = require_fails();
      var $sort = [].sort;
      var test2 = [1, 2, 3];
      $export($export.P + $export.F * (fails(function() {
        test2.sort(void 0);
      }) || !fails(function() {
        test2.sort(null);
      }) || !require_strict_method()($sort)), "Array", {
        // 22.1.3.25 Array.prototype.sort(comparefn)
        sort: function sort(comparefn) {
          return comparefn === void 0 ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
        }
      });
    }
  });

  // node_modules/core-js/modules/_array-species-constructor.js
  var require_array_species_constructor = __commonJS({
    "node_modules/core-js/modules/_array-species-constructor.js"(exports, module) {
      var isObject2 = require_is_object();
      var isArray2 = require_is_array();
      var SPECIES = require_wks()("species");
      module.exports = function(original) {
        var C;
        if (isArray2(original)) {
          C = original.constructor;
          if (typeof C == "function" && (C === Array || isArray2(C.prototype))) C = void 0;
          if (isObject2(C)) {
            C = C[SPECIES];
            if (C === null) C = void 0;
          }
        }
        return C === void 0 ? Array : C;
      };
    }
  });

  // node_modules/core-js/modules/_array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js/modules/_array-species-create.js"(exports, module) {
      var speciesConstructor = require_array_species_constructor();
      module.exports = function(original, length) {
        return new (speciesConstructor(original))(length);
      };
    }
  });

  // node_modules/core-js/modules/_array-methods.js
  var require_array_methods = __commonJS({
    "node_modules/core-js/modules/_array-methods.js"(exports, module) {
      var ctx = require_ctx();
      var IObject = require_iobject();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var asc = require_array_species_create();
      module.exports = function(TYPE, $create) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        var create = $create || asc;
        return function($this, callbackfn, that) {
          var O = toObject($this);
          var self2 = IObject(O);
          var f = ctx(callbackfn, that, 3);
          var length = toLength(self2.length);
          var index = 0;
          var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
          var val, res;
          for (; length > index; index++) if (NO_HOLES || index in self2) {
            val = self2[index];
            res = f(val, index, O);
            if (TYPE) {
              if (IS_MAP) result[index] = res;
              else if (res) switch (TYPE) {
                case 3:
                  return true;
                // some
                case 5:
                  return val;
                // find
                case 6:
                  return index;
                // findIndex
                case 2:
                  result.push(val);
              }
              else if (IS_EVERY) return false;
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
        };
      };
    }
  });

  // node_modules/core-js/modules/es6.array.for-each.js
  var require_es6_array_for_each = __commonJS({
    "node_modules/core-js/modules/es6.array.for-each.js"() {
      "use strict";
      var $export = require_export();
      var $forEach = require_array_methods()(0);
      var STRICT = require_strict_method()([].forEach, true);
      $export($export.P + $export.F * !STRICT, "Array", {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function forEach2(callbackfn) {
          return $forEach(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.map.js
  var require_es6_array_map = __commonJS({
    "node_modules/core-js/modules/es6.array.map.js"() {
      "use strict";
      var $export = require_export();
      var $map = require_array_methods()(1);
      $export($export.P + $export.F * !require_strict_method()([].map, true), "Array", {
        // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
        map: function map(callbackfn) {
          return $map(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.filter.js
  var require_es6_array_filter = __commonJS({
    "node_modules/core-js/modules/es6.array.filter.js"() {
      "use strict";
      var $export = require_export();
      var $filter = require_array_methods()(2);
      $export($export.P + $export.F * !require_strict_method()([].filter, true), "Array", {
        // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
        filter: function filter2(callbackfn) {
          return $filter(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.some.js
  var require_es6_array_some = __commonJS({
    "node_modules/core-js/modules/es6.array.some.js"() {
      "use strict";
      var $export = require_export();
      var $some = require_array_methods()(3);
      $export($export.P + $export.F * !require_strict_method()([].some, true), "Array", {
        // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
        some: function some(callbackfn) {
          return $some(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.every.js
  var require_es6_array_every = __commonJS({
    "node_modules/core-js/modules/es6.array.every.js"() {
      "use strict";
      var $export = require_export();
      var $every = require_array_methods()(4);
      $export($export.P + $export.F * !require_strict_method()([].every, true), "Array", {
        // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
        every: function every(callbackfn) {
          return $every(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/_array-reduce.js
  var require_array_reduce = __commonJS({
    "node_modules/core-js/modules/_array-reduce.js"(exports, module) {
      var aFunction = require_a_function();
      var toObject = require_to_object();
      var IObject = require_iobject();
      var toLength = require_to_length();
      module.exports = function(that, callbackfn, aLen, memo, isRight) {
        aFunction(callbackfn);
        var O = toObject(that);
        var self2 = IObject(O);
        var length = toLength(O.length);
        var index = isRight ? length - 1 : 0;
        var i = isRight ? -1 : 1;
        if (aLen < 2) for (; ; ) {
          if (index in self2) {
            memo = self2[index];
            index += i;
            break;
          }
          index += i;
          if (isRight ? index < 0 : length <= index) {
            throw TypeError("Reduce of empty array with no initial value");
          }
        }
        for (; isRight ? index >= 0 : length > index; index += i) if (index in self2) {
          memo = callbackfn(memo, self2[index], index, O);
        }
        return memo;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.reduce.js
  var require_es6_array_reduce = __commonJS({
    "node_modules/core-js/modules/es6.array.reduce.js"() {
      "use strict";
      var $export = require_export();
      var $reduce = require_array_reduce();
      $export($export.P + $export.F * !require_strict_method()([].reduce, true), "Array", {
        // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
        reduce: function reduce(callbackfn) {
          return $reduce(this, callbackfn, arguments.length, arguments[1], false);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.reduce-right.js
  var require_es6_array_reduce_right = __commonJS({
    "node_modules/core-js/modules/es6.array.reduce-right.js"() {
      "use strict";
      var $export = require_export();
      var $reduce = require_array_reduce();
      $export($export.P + $export.F * !require_strict_method()([].reduceRight, true), "Array", {
        // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
        reduceRight: function reduceRight(callbackfn) {
          return $reduce(this, callbackfn, arguments.length, arguments[1], true);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.index-of.js
  var require_es6_array_index_of = __commonJS({
    "node_modules/core-js/modules/es6.array.index-of.js"() {
      "use strict";
      var $export = require_export();
      var $indexOf = require_array_includes()(false);
      var $native = [].indexOf;
      var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
      $export($export.P + $export.F * (NEGATIVE_ZERO || !require_strict_method()($native)), "Array", {
        // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
        indexOf: function indexOf(searchElement) {
          return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.last-index-of.js
  var require_es6_array_last_index_of = __commonJS({
    "node_modules/core-js/modules/es6.array.last-index-of.js"() {
      "use strict";
      var $export = require_export();
      var toIObject = require_to_iobject();
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      var $native = [].lastIndexOf;
      var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
      $export($export.P + $export.F * (NEGATIVE_ZERO || !require_strict_method()($native)), "Array", {
        // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
        lastIndexOf: function lastIndexOf(searchElement) {
          if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
          var O = toIObject(this);
          var length = toLength(O.length);
          var index = length - 1;
          if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
          if (index < 0) index = length + index;
          for (; index >= 0; index--) if (index in O) {
            if (O[index] === searchElement) return index || 0;
          }
          return -1;
        }
      });
    }
  });

  // node_modules/core-js/modules/_array-copy-within.js
  var require_array_copy_within = __commonJS({
    "node_modules/core-js/modules/_array-copy-within.js"(exports, module) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      module.exports = [].copyWithin || function copyWithin(target, start) {
        var O = toObject(this);
        var len = toLength(O.length);
        var to = toAbsoluteIndex(target, len);
        var from = toAbsoluteIndex(start, len);
        var end = arguments.length > 2 ? arguments[2] : void 0;
        var count = Math.min((end === void 0 ? len : toAbsoluteIndex(end, len)) - from, len - to);
        var inc = 1;
        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from in O) O[to] = O[from];
          else delete O[to];
          to += inc;
          from += inc;
        }
        return O;
      };
    }
  });

  // node_modules/core-js/modules/_add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/modules/_add-to-unscopables.js"(exports, module) {
      var UNSCOPABLES = require_wks()("unscopables");
      var ArrayProto = Array.prototype;
      if (ArrayProto[UNSCOPABLES] == void 0) require_hide()(ArrayProto, UNSCOPABLES, {});
      module.exports = function(key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.copy-within.js
  var require_es6_array_copy_within = __commonJS({
    "node_modules/core-js/modules/es6.array.copy-within.js"() {
      var $export = require_export();
      $export($export.P, "Array", { copyWithin: require_array_copy_within() });
      require_add_to_unscopables()("copyWithin");
    }
  });

  // node_modules/core-js/modules/_array-fill.js
  var require_array_fill = __commonJS({
    "node_modules/core-js/modules/_array-fill.js"(exports, module) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      module.exports = function fill(value) {
        var O = toObject(this);
        var length = toLength(O.length);
        var aLen = arguments.length;
        var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : void 0, length);
        var end = aLen > 2 ? arguments[2] : void 0;
        var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
        while (endPos > index) O[index++] = value;
        return O;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.fill.js
  var require_es6_array_fill = __commonJS({
    "node_modules/core-js/modules/es6.array.fill.js"() {
      var $export = require_export();
      $export($export.P, "Array", { fill: require_array_fill() });
      require_add_to_unscopables()("fill");
    }
  });

  // node_modules/core-js/modules/es6.array.find.js
  var require_es6_array_find = __commonJS({
    "node_modules/core-js/modules/es6.array.find.js"() {
      "use strict";
      var $export = require_export();
      var $find = require_array_methods()(5);
      var KEY = "find";
      var forced = true;
      if (KEY in []) Array(1)[KEY](function() {
        forced = false;
      });
      $export($export.P + $export.F * forced, "Array", {
        find: function find(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      require_add_to_unscopables()(KEY);
    }
  });

  // node_modules/core-js/modules/es6.array.find-index.js
  var require_es6_array_find_index = __commonJS({
    "node_modules/core-js/modules/es6.array.find-index.js"() {
      "use strict";
      var $export = require_export();
      var $find = require_array_methods()(6);
      var KEY = "findIndex";
      var forced = true;
      if (KEY in []) Array(1)[KEY](function() {
        forced = false;
      });
      $export($export.P + $export.F * forced, "Array", {
        findIndex: function findIndex(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      require_add_to_unscopables()(KEY);
    }
  });

  // node_modules/core-js/modules/_set-species.js
  var require_set_species = __commonJS({
    "node_modules/core-js/modules/_set-species.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var dP = require_object_dp();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = require_wks()("species");
      module.exports = function(KEY) {
        var C = global2[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      };
    }
  });

  // node_modules/core-js/modules/es6.array.species.js
  var require_es6_array_species = __commonJS({
    "node_modules/core-js/modules/es6.array.species.js"() {
      require_set_species()("Array");
    }
  });

  // node_modules/core-js/modules/_iter-step.js
  var require_iter_step = __commonJS({
    "node_modules/core-js/modules/_iter-step.js"(exports, module) {
      module.exports = function(done, value) {
        return { value, done: !!done };
      };
    }
  });

  // node_modules/core-js/modules/es6.array.iterator.js
  var require_es6_array_iterator = __commonJS({
    "node_modules/core-js/modules/es6.array.iterator.js"(exports, module) {
      "use strict";
      var addToUnscopables = require_add_to_unscopables();
      var step = require_iter_step();
      var Iterators = require_iterators();
      var toIObject = require_to_iobject();
      module.exports = require_iter_define()(Array, "Array", function(iterated, kind) {
        this._t = toIObject(iterated);
        this._i = 0;
        this._k = kind;
      }, function() {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;
        if (!O || index >= O.length) {
          this._t = void 0;
          return step(1);
        }
        if (kind == "keys") return step(0, index);
        if (kind == "values") return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, "values");
      Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
    }
  });

  // node_modules/core-js/modules/_flags.js
  var require_flags = __commonJS({
    "node_modules/core-js/modules/_flags.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      module.exports = function() {
        var that = anObject(this);
        var result = "";
        if (that.global) result += "g";
        if (that.ignoreCase) result += "i";
        if (that.multiline) result += "m";
        if (that.unicode) result += "u";
        if (that.sticky) result += "y";
        return result;
      };
    }
  });

  // node_modules/core-js/modules/es6.regexp.constructor.js
  var require_es6_regexp_constructor = __commonJS({
    "node_modules/core-js/modules/es6.regexp.constructor.js"() {
      var global2 = require_global();
      var inheritIfRequired = require_inherit_if_required();
      var dP = require_object_dp().f;
      var gOPN = require_object_gopn().f;
      var isRegExp2 = require_is_regexp();
      var $flags = require_flags();
      var $RegExp = global2.RegExp;
      var Base = $RegExp;
      var proto = $RegExp.prototype;
      var re1 = /a/g;
      var re2 = /a/g;
      var CORRECT_NEW = new $RegExp(re1) !== re1;
      if (require_descriptors() && (!CORRECT_NEW || require_fails()(function() {
        re2[require_wks()("match")] = false;
        return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, "i") != "/a/i";
      }))) {
        $RegExp = function RegExp2(p, f) {
          var tiRE = this instanceof $RegExp;
          var piRE = isRegExp2(p);
          var fiU = f === void 0;
          return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(
            CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f),
            tiRE ? this : proto,
            $RegExp
          );
        };
        proxy = function(key) {
          key in $RegExp || dP($RegExp, key, {
            configurable: true,
            get: function() {
              return Base[key];
            },
            set: function(it) {
              Base[key] = it;
            }
          });
        };
        for (keys = gOPN(Base), i = 0; keys.length > i; ) proxy(keys[i++]);
        proto.constructor = $RegExp;
        $RegExp.prototype = proto;
        require_redefine()(global2, "RegExp", $RegExp);
      }
      var proxy;
      var keys;
      var i;
      require_set_species()("RegExp");
    }
  });

  // node_modules/core-js/modules/_regexp-exec.js
  var require_regexp_exec = __commonJS({
    "node_modules/core-js/modules/_regexp-exec.js"(exports, module) {
      "use strict";
      var regexpFlags = require_flags();
      var nativeExec = RegExp.prototype.exec;
      var nativeReplace = String.prototype.replace;
      var patchedExec = nativeExec;
      var LAST_INDEX = "lastIndex";
      var UPDATES_LAST_INDEX_WRONG = function() {
        var re1 = /a/, re2 = /b*/g;
        nativeExec.call(re1, "a");
        nativeExec.call(re2, "a");
        return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
      }();
      var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;
          if (NPCG_INCLUDED) {
            reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
          match = nativeExec.call(re, str);
          if (UPDATES_LAST_INDEX_WRONG && match) {
            re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            nativeReplace.call(match[0], reCopy, function() {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === void 0) match[i] = void 0;
              }
            });
          }
          return match;
        };
      }
      module.exports = patchedExec;
    }
  });

  // node_modules/core-js/modules/es6.regexp.exec.js
  var require_es6_regexp_exec = __commonJS({
    "node_modules/core-js/modules/es6.regexp.exec.js"() {
      "use strict";
      var regexpExec = require_regexp_exec();
      require_export()({
        target: "RegExp",
        proto: true,
        forced: regexpExec !== /./.exec
      }, {
        exec: regexpExec
      });
    }
  });

  // node_modules/core-js/modules/es6.regexp.flags.js
  var require_es6_regexp_flags = __commonJS({
    "node_modules/core-js/modules/es6.regexp.flags.js"() {
      if (require_descriptors() && /./g.flags != "g") require_object_dp().f(RegExp.prototype, "flags", {
        configurable: true,
        get: require_flags()
      });
    }
  });

  // node_modules/core-js/modules/es6.regexp.to-string.js
  var require_es6_regexp_to_string = __commonJS({
    "node_modules/core-js/modules/es6.regexp.to-string.js"() {
      "use strict";
      require_es6_regexp_flags();
      var anObject = require_an_object();
      var $flags = require_flags();
      var DESCRIPTORS = require_descriptors();
      var TO_STRING = "toString";
      var $toString = /./[TO_STRING];
      var define2 = function(fn) {
        require_redefine()(RegExp.prototype, TO_STRING, fn, true);
      };
      if (require_fails()(function() {
        return $toString.call({ source: "a", flags: "b" }) != "/a/b";
      })) {
        define2(function toString3() {
          var R = anObject(this);
          return "/".concat(
            R.source,
            "/",
            "flags" in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : void 0
          );
        });
      } else if ($toString.name != TO_STRING) {
        define2(function toString3() {
          return $toString.call(this);
        });
      }
    }
  });

  // node_modules/core-js/modules/_advance-string-index.js
  var require_advance_string_index = __commonJS({
    "node_modules/core-js/modules/_advance-string-index.js"(exports, module) {
      "use strict";
      var at = require_string_at()(true);
      module.exports = function(S, index, unicode) {
        return index + (unicode ? at(S, index).length : 1);
      };
    }
  });

  // node_modules/core-js/modules/_regexp-exec-abstract.js
  var require_regexp_exec_abstract = __commonJS({
    "node_modules/core-js/modules/_regexp-exec-abstract.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var builtinExec = RegExp.prototype.exec;
      module.exports = function(R, S) {
        var exec = R.exec;
        if (typeof exec === "function") {
          var result = exec.call(R, S);
          if (typeof result !== "object") {
            throw new TypeError("RegExp exec method returned something other than an Object or null");
          }
          return result;
        }
        if (classof(R) !== "RegExp") {
          throw new TypeError("RegExp#exec called on incompatible receiver");
        }
        return builtinExec.call(R, S);
      };
    }
  });

  // node_modules/core-js/modules/_fix-re-wks.js
  var require_fix_re_wks = __commonJS({
    "node_modules/core-js/modules/_fix-re-wks.js"(exports, module) {
      "use strict";
      require_es6_regexp_exec();
      var redefine = require_redefine();
      var hide = require_hide();
      var fails = require_fails();
      var defined = require_defined();
      var wks = require_wks();
      var regexpExec = require_regexp_exec();
      var SPECIES = wks("species");
      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
        var re = /./;
        re.exec = function() {
          var result = [];
          result.groups = { a: "7" };
          return result;
        };
        return "".replace(re, "$<a>") !== "7";
      });
      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
        var re = /(?:)/;
        var originalExec = re.exec;
        re.exec = function() {
          return originalExec.apply(this, arguments);
        };
        var result = "ab".split(re);
        return result.length === 2 && result[0] === "a" && result[1] === "b";
      }();
      module.exports = function(KEY, length, exec) {
        var SYMBOL = wks(KEY);
        var DELEGATES_TO_SYMBOL = !fails(function() {
          var O = {};
          O[SYMBOL] = function() {
            return 7;
          };
          return ""[KEY](O) != 7;
        });
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
          var execCalled = false;
          var re = /a/;
          re.exec = function() {
            execCalled = true;
            return null;
          };
          if (KEY === "split") {
            re.constructor = {};
            re.constructor[SPECIES] = function() {
              return re;
            };
          }
          re[SYMBOL]("");
          return !execCalled;
        }) : void 0;
        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
          var nativeRegExpMethod = /./[SYMBOL];
          var fns = exec(
            defined,
            SYMBOL,
            ""[KEY],
            function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                }
                return { done: true, value: nativeMethod.call(str, regexp, arg2) };
              }
              return { done: false };
            }
          );
          var strfn = fns[0];
          var rxfn = fns[1];
          redefine(String.prototype, KEY, strfn);
          hide(
            RegExp.prototype,
            SYMBOL,
            length == 2 ? function(string, arg) {
              return rxfn.call(string, this, arg);
            } : function(string) {
              return rxfn.call(string, this);
            }
          );
        }
      };
    }
  });

  // node_modules/core-js/modules/es6.regexp.match.js
  var require_es6_regexp_match = __commonJS({
    "node_modules/core-js/modules/es6.regexp.match.js"() {
      "use strict";
      var anObject = require_an_object();
      var toLength = require_to_length();
      var advanceStringIndex = require_advance_string_index();
      var regExpExec = require_regexp_exec_abstract();
      require_fix_re_wks()("match", 1, function(defined, MATCH, $match, maybeCallNative) {
        return [
          // `String.prototype.match` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.match
          function match(regexp) {
            var O = defined(this);
            var fn = regexp == void 0 ? void 0 : regexp[MATCH];
            return fn !== void 0 ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
          },
          // `RegExp.prototype[@@match]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
          function(regexp) {
            var res = maybeCallNative($match, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while ((result = regExpExec(rx, S)) !== null) {
              var matchStr = String(result[0]);
              A[n] = matchStr;
              if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              n++;
            }
            return n === 0 ? null : A;
          }
        ];
      });
    }
  });

  // node_modules/core-js/modules/es6.regexp.replace.js
  var require_es6_regexp_replace = __commonJS({
    "node_modules/core-js/modules/es6.regexp.replace.js"() {
      "use strict";
      var anObject = require_an_object();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var toInteger = require_to_integer();
      var advanceStringIndex = require_advance_string_index();
      var regExpExec = require_regexp_exec_abstract();
      var max = Math.max;
      var min = Math.min;
      var floor = Math.floor;
      var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
      var maybeToString = function(it) {
        return it === void 0 ? it : String(it);
      };
      require_fix_re_wks()("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
        return [
          // `String.prototype.replace` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = defined(this);
            var fn = searchValue == void 0 ? void 0 : searchValue[REPLACE];
            return fn !== void 0 ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
          function(regexp, replaceValue) {
            var res = maybeCallNative($replace, regexp, this, replaceValue);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === "function";
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global2 = rx.global;
            if (global2) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            var results = [];
            while (true) {
              var result = regExpExec(rx, S);
              if (result === null) break;
              results.push(result);
              if (!global2) break;
              var matchStr = String(result[0]);
              if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for (var i = 0; i < results.length; i++) {
              result = results[i];
              var matched = String(result[0]);
              var position = max(min(toInteger(result.index), S.length), 0);
              var captures = [];
              for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
              var namedCaptures = result.groups;
              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== void 0) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(void 0, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          }
        ];
        function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
          var tailPos = position + matched.length;
          var m = captures.length;
          var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
          if (namedCaptures !== void 0) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }
          return $replace.call(replacement, symbols, function(match, ch) {
            var capture;
            switch (ch.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return matched;
              case "`":
                return str.slice(0, position);
              case "'":
                return str.slice(tailPos);
              case "<":
                capture = namedCaptures[ch.slice(1, -1)];
                break;
              default:
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                  var f = floor(n / 10);
                  if (f === 0) return match;
                  if (f <= m) return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                  return match;
                }
                capture = captures[n - 1];
            }
            return capture === void 0 ? "" : capture;
          });
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.regexp.search.js
  var require_es6_regexp_search = __commonJS({
    "node_modules/core-js/modules/es6.regexp.search.js"() {
      "use strict";
      var anObject = require_an_object();
      var sameValue = require_same_value();
      var regExpExec = require_regexp_exec_abstract();
      require_fix_re_wks()("search", 1, function(defined, SEARCH, $search, maybeCallNative) {
        return [
          // `String.prototype.search` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.search
          function search(regexp) {
            var O = defined(this);
            var fn = regexp == void 0 ? void 0 : regexp[SEARCH];
            return fn !== void 0 ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
          },
          // `RegExp.prototype[@@search]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
          function(regexp) {
            var res = maybeCallNative($search, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var previousLastIndex = rx.lastIndex;
            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
            var result = regExpExec(rx, S);
            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
            return result === null ? -1 : result.index;
          }
        ];
      });
    }
  });

  // node_modules/core-js/modules/_species-constructor.js
  var require_species_constructor = __commonJS({
    "node_modules/core-js/modules/_species-constructor.js"(exports, module) {
      var anObject = require_an_object();
      var aFunction = require_a_function();
      var SPECIES = require_wks()("species");
      module.exports = function(O, D) {
        var C = anObject(O).constructor;
        var S;
        return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? D : aFunction(S);
      };
    }
  });

  // node_modules/core-js/modules/es6.regexp.split.js
  var require_es6_regexp_split = __commonJS({
    "node_modules/core-js/modules/es6.regexp.split.js"() {
      "use strict";
      var isRegExp2 = require_is_regexp();
      var anObject = require_an_object();
      var speciesConstructor = require_species_constructor();
      var advanceStringIndex = require_advance_string_index();
      var toLength = require_to_length();
      var callRegExpExec = require_regexp_exec_abstract();
      var regexpExec = require_regexp_exec();
      var fails = require_fails();
      var $min = Math.min;
      var $push = [].push;
      var $SPLIT = "split";
      var LENGTH = "length";
      var LAST_INDEX = "lastIndex";
      var MAX_UINT32 = 4294967295;
      var SUPPORTS_Y = !fails(function() {
        RegExp(MAX_UINT32, "y");
      });
      require_fix_re_wks()("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
        var internalSplit;
        if ("abbc"[$SPLIT](/(b)*/)[1] == "c" || "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH]) {
          internalSplit = function(separator, limit) {
            var string = String(this);
            if (separator === void 0 && limit === 0) return [];
            if (!isRegExp2(separator)) return $split.call(string, separator, limit);
            var output = [];
            var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
            var lastLastIndex = 0;
            var splitLimit = limit === void 0 ? MAX_UINT32 : limit >>> 0;
            var separatorCopy = new RegExp(separator.source, flags + "g");
            var match, lastIndex, lastLength;
            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy[LAST_INDEX];
              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                lastLength = match[0][LENGTH];
                lastLastIndex = lastIndex;
                if (output[LENGTH] >= splitLimit) break;
              }
              if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++;
            }
            if (lastLastIndex === string[LENGTH]) {
              if (lastLength || !separatorCopy.test("")) output.push("");
            } else output.push(string.slice(lastLastIndex));
            return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
          };
        } else if ("0"[$SPLIT](void 0, 0)[LENGTH]) {
          internalSplit = function(separator, limit) {
            return separator === void 0 && limit === 0 ? [] : $split.call(this, separator, limit);
          };
        } else {
          internalSplit = $split;
        }
        return [
          // `String.prototype.split` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            var O = defined(this);
            var splitter = separator == void 0 ? void 0 : separator[SPLIT];
            return splitter !== void 0 ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
          },
          // `RegExp.prototype[@@split]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
            var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
            var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;
              if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;
                for (var i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }
                q = p = e;
              }
            }
            A.push(S.slice(p));
            return A;
          }
        ];
      });
    }
  });

  // node_modules/core-js/modules/_an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js/modules/_an-instance.js"(exports, module) {
      module.exports = function(it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
          throw TypeError(name + ": incorrect invocation!");
        }
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_for-of.js
  var require_for_of = __commonJS({
    "node_modules/core-js/modules/_for-of.js"(exports, module) {
      var ctx = require_ctx();
      var call = require_iter_call();
      var isArrayIter = require_is_array_iter();
      var anObject = require_an_object();
      var toLength = require_to_length();
      var getIterFn = require_core_get_iterator_method();
      var BREAK = {};
      var RETURN = {};
      var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
        var iterFn = ITERATOR ? function() {
          return iterable;
        } : getIterFn(iterable);
        var f = ctx(fn, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator2, result;
        if (typeof iterFn != "function") throw TypeError(iterable + " is not iterable!");
        if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
          result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN) return result;
        }
        else for (iterator2 = iterFn.call(iterable); !(step = iterator2.next()).done; ) {
          result = call(iterator2, f, step.value, entries);
          if (result === BREAK || result === RETURN) return result;
        }
      };
      exports.BREAK = BREAK;
      exports.RETURN = RETURN;
    }
  });

  // node_modules/core-js/modules/_task.js
  var require_task = __commonJS({
    "node_modules/core-js/modules/_task.js"(exports, module) {
      var ctx = require_ctx();
      var invoke = require_invoke();
      var html = require_html();
      var cel = require_dom_create();
      var global2 = require_global();
      var process2 = global2.process;
      var setTask = global2.setImmediate;
      var clearTask = global2.clearImmediate;
      var MessageChannel = global2.MessageChannel;
      var Dispatch = global2.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var defer;
      var channel;
      var port;
      var run = function() {
        var id = +this;
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var listener = function(event) {
        run.call(event.data);
      };
      if (!setTask || !clearTask) {
        setTask = function setImmediate2(fn) {
          var args = [];
          var i = 1;
          while (arguments.length > i) args.push(arguments[i++]);
          queue[++counter] = function() {
            invoke(typeof fn == "function" ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        if (require_cof()(process2) == "process") {
          defer = function(id) {
            process2.nextTick(ctx(run, id, 1));
          };
        } else if (Dispatch && Dispatch.now) {
          defer = function(id) {
            Dispatch.now(ctx(run, id, 1));
          };
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = ctx(port.postMessage, port, 1);
        } else if (global2.addEventListener && typeof postMessage == "function" && !global2.importScripts) {
          defer = function(id) {
            global2.postMessage(id + "", "*");
          };
          global2.addEventListener("message", listener, false);
        } else if (ONREADYSTATECHANGE in cel("script")) {
          defer = function(id) {
            html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run.call(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }
      module.exports = {
        set: setTask,
        clear: clearTask
      };
    }
  });

  // node_modules/core-js/modules/_microtask.js
  var require_microtask = __commonJS({
    "node_modules/core-js/modules/_microtask.js"(exports, module) {
      var global2 = require_global();
      var macrotask = require_task().set;
      var Observer = global2.MutationObserver || global2.WebKitMutationObserver;
      var process2 = global2.process;
      var Promise2 = global2.Promise;
      var isNode = require_cof()(process2) == "process";
      module.exports = function() {
        var head, last, notify;
        var flush = function() {
          var parent, fn;
          if (isNode && (parent = process2.domain)) parent.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (e) {
              if (head) notify();
              else last = void 0;
              throw e;
            }
          }
          last = void 0;
          if (parent) parent.enter();
        };
        if (isNode) {
          notify = function() {
            process2.nextTick(flush);
          };
        } else if (Observer && !(global2.navigator && global2.navigator.standalone)) {
          var toggle = true;
          var node = document.createTextNode("");
          new Observer(flush).observe(node, { characterData: true });
          notify = function() {
            node.data = toggle = !toggle;
          };
        } else if (Promise2 && Promise2.resolve) {
          var promise = Promise2.resolve(void 0);
          notify = function() {
            promise.then(flush);
          };
        } else {
          notify = function() {
            macrotask.call(global2, flush);
          };
        }
        return function(fn) {
          var task = { fn, next: void 0 };
          if (last) last.next = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      };
    }
  });

  // node_modules/core-js/modules/_new-promise-capability.js
  var require_new_promise_capability = __commonJS({
    "node_modules/core-js/modules/_new-promise-capability.js"(exports, module) {
      "use strict";
      var aFunction = require_a_function();
      function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function($$resolve, $$reject) {
          if (resolve !== void 0 || reject !== void 0) throw TypeError("Bad Promise constructor");
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }
      module.exports.f = function(C) {
        return new PromiseCapability(C);
      };
    }
  });

  // node_modules/core-js/modules/_perform.js
  var require_perform = __commonJS({
    "node_modules/core-js/modules/_perform.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return { e: false, v: exec() };
        } catch (e) {
          return { e: true, v: e };
        }
      };
    }
  });

  // node_modules/core-js/modules/_user-agent.js
  var require_user_agent = __commonJS({
    "node_modules/core-js/modules/_user-agent.js"(exports, module) {
      var global2 = require_global();
      var navigator2 = global2.navigator;
      module.exports = navigator2 && navigator2.userAgent || "";
    }
  });

  // node_modules/core-js/modules/_promise-resolve.js
  var require_promise_resolve = __commonJS({
    "node_modules/core-js/modules/_promise-resolve.js"(exports, module) {
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      var newPromiseCapability = require_new_promise_capability();
      module.exports = function(C, x) {
        anObject(C);
        if (isObject2(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
    }
  });

  // node_modules/core-js/modules/_redefine-all.js
  var require_redefine_all = __commonJS({
    "node_modules/core-js/modules/_redefine-all.js"(exports, module) {
      var redefine = require_redefine();
      module.exports = function(target, src, safe) {
        for (var key in src) redefine(target, key, src[key], safe);
        return target;
      };
    }
  });

  // node_modules/core-js/modules/es6.promise.js
  var require_es6_promise = __commonJS({
    "node_modules/core-js/modules/es6.promise.js"() {
      "use strict";
      var LIBRARY = require_library();
      var global2 = require_global();
      var ctx = require_ctx();
      var classof = require_classof();
      var $export = require_export();
      var isObject2 = require_is_object();
      var aFunction = require_a_function();
      var anInstance = require_an_instance();
      var forOf = require_for_of();
      var speciesConstructor = require_species_constructor();
      var task = require_task().set;
      var microtask = require_microtask()();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var userAgent = require_user_agent();
      var promiseResolve = require_promise_resolve();
      var PROMISE = "Promise";
      var TypeError2 = global2.TypeError;
      var process2 = global2.process;
      var versions = process2 && process2.versions;
      var v8 = versions && versions.v8 || "";
      var $Promise = global2[PROMISE];
      var isNode = classof(process2) == "process";
      var empty = function() {
      };
      var Internal;
      var newGenericPromiseCapability;
      var OwnPromiseCapability;
      var Wrapper;
      var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
      var USE_NATIVE = !!function() {
        try {
          var promise = $Promise.resolve(1);
          var FakePromise = (promise.constructor = {})[require_wks()("species")] = function(exec) {
            exec(empty, empty);
          };
          return (isNode || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1;
        } catch (e) {
        }
      }();
      var isThenable2 = function(it) {
        var then;
        return isObject2(it) && typeof (then = it.then) == "function" ? then : false;
      };
      var notify = function(promise, isReject) {
        if (promise._n) return;
        promise._n = true;
        var chain = promise._c;
        microtask(function() {
          var value = promise._v;
          var ok = promise._s == 1;
          var i = 0;
          var run = function(reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (promise._h == 2) onHandleUnhandled(promise);
                  promise._h = 1;
                }
                if (handler === true) result = value;
                else {
                  if (domain) domain.enter();
                  result = handler(value);
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError2("Promise-chain cycle"));
                } else if (then = isThenable2(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (e) {
              if (domain && !exited) domain.exit();
              reject(e);
            }
          };
          while (chain.length > i) run(chain[i++]);
          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h) onUnhandled(promise);
        });
      };
      var onUnhandled = function(promise) {
        task.call(global2, function() {
          var value = promise._v;
          var unhandled = isUnhandled(promise);
          var result, handler, console2;
          if (unhandled) {
            result = perform(function() {
              if (isNode) {
                process2.emit("unhandledRejection", value, promise);
              } else if (handler = global2.onunhandledrejection) {
                handler({ promise, reason: value });
              } else if ((console2 = global2.console) && console2.error) {
                console2.error("Unhandled promise rejection", value);
              }
            });
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
          }
          promise._a = void 0;
          if (unhandled && result.e) throw result.v;
        });
      };
      var isUnhandled = function(promise) {
        return promise._h !== 1 && (promise._a || promise._c).length === 0;
      };
      var onHandleUnhandled = function(promise) {
        task.call(global2, function() {
          var handler;
          if (isNode) {
            process2.emit("rejectionHandled", promise);
          } else if (handler = global2.onrejectionhandled) {
            handler({ promise, reason: promise._v });
          }
        });
      };
      var $reject = function(value) {
        var promise = this;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise;
        promise._v = value;
        promise._s = 2;
        if (!promise._a) promise._a = promise._c.slice();
        notify(promise, true);
      };
      var $resolve = function(value) {
        var promise = this;
        var then;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise;
        try {
          if (promise === value) throw TypeError2("Promise can't be resolved itself");
          if (then = isThenable2(value)) {
            microtask(function() {
              var wrapper = { _w: promise, _d: false };
              try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject.call({ _w: promise, _d: false }, e);
        }
      };
      if (!USE_NATIVE) {
        $Promise = function Promise2(executor) {
          anInstance(this, $Promise, PROMISE, "_h");
          aFunction(executor);
          Internal.call(this);
          try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
          } catch (err) {
            $reject.call(this, err);
          }
        };
        Internal = function Promise2(executor) {
          this._c = [];
          this._a = void 0;
          this._s = 0;
          this._d = false;
          this._v = void 0;
          this._h = 0;
          this._n = false;
        };
        Internal.prototype = require_redefine_all()($Promise.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
            reaction.fail = typeof onRejected == "function" && onRejected;
            reaction.domain = isNode ? process2.domain : void 0;
            this._c.push(reaction);
            if (this._a) this._a.push(reaction);
            if (this._s) notify(this, false);
            return reaction.promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          "catch": function(onRejected) {
            return this.then(void 0, onRejected);
          }
        });
        OwnPromiseCapability = function() {
          var promise = new Internal();
          this.promise = promise;
          this.resolve = ctx($resolve, promise, 1);
          this.reject = ctx($reject, promise, 1);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
          return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
      }
      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
      require_set_to_string_tag()($Promise, PROMISE);
      require_set_species()(PROMISE);
      Wrapper = require_core()[PROMISE];
      $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          var $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        }
      });
      $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
        }
      });
      $export($export.S + $export.F * !(USE_NATIVE && require_iter_detect()(function(iter) {
        $Promise.all(iter)["catch"](empty);
      })), PROMISE, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all3(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function() {
            var values = [];
            var index = 0;
            var remaining = 1;
            forOf(iterable, false, function(promise) {
              var $index = index++;
              var alreadyCalled = false;
              values.push(void 0);
              remaining++;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[$index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.e) reject(result.v);
          return capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function() {
            forOf(iterable, false, function(promise) {
              C.resolve(promise).then(capability.resolve, reject);
            });
          });
          if (result.e) reject(result.v);
          return capability.promise;
        }
      });
    }
  });

  // node_modules/core-js/modules/_validate-collection.js
  var require_validate_collection = __commonJS({
    "node_modules/core-js/modules/_validate-collection.js"(exports, module) {
      var isObject2 = require_is_object();
      module.exports = function(it, TYPE) {
        if (!isObject2(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_collection-strong.js
  var require_collection_strong = __commonJS({
    "node_modules/core-js/modules/_collection-strong.js"(exports, module) {
      "use strict";
      var dP = require_object_dp().f;
      var create = require_object_create();
      var redefineAll = require_redefine_all();
      var ctx = require_ctx();
      var anInstance = require_an_instance();
      var forOf = require_for_of();
      var $iterDefine = require_iter_define();
      var step = require_iter_step();
      var setSpecies = require_set_species();
      var DESCRIPTORS = require_descriptors();
      var fastKey = require_meta().fastKey;
      var validate = require_validate_collection();
      var SIZE = DESCRIPTORS ? "_s" : "size";
      var getEntry = function(that, key) {
        var index = fastKey(key);
        var entry;
        if (index !== "F") return that._i[index];
        for (entry = that._f; entry; entry = entry.n) {
          if (entry.k == key) return entry;
        }
      };
      module.exports = {
        getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
          var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME, "_i");
            that._t = NAME;
            that._i = create(null);
            that._f = void 0;
            that._l = void 0;
            that[SIZE] = 0;
            if (iterable != void 0) forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
              for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                entry.r = true;
                if (entry.p) entry.p = entry.p.n = void 0;
                delete data[entry.i];
              }
              that._f = that._l = void 0;
              that[SIZE] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            "delete": function(key) {
              var that = validate(this, NAME);
              var entry = getEntry(that, key);
              if (entry) {
                var next = entry.n;
                var prev = entry.p;
                delete that._i[entry.i];
                entry.r = true;
                if (prev) prev.n = next;
                if (next) next.p = prev;
                if (that._f == entry) that._f = next;
                if (that._l == entry) that._l = prev;
                that[SIZE]--;
              }
              return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach2(callbackfn) {
              validate(this, NAME);
              var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
              var entry;
              while (entry = entry ? entry.n : this._f) {
                f(entry.v, entry.k, this);
                while (entry && entry.r) entry = entry.p;
              }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
              return !!getEntry(validate(this, NAME), key);
            }
          });
          if (DESCRIPTORS) dP(C.prototype, "size", {
            get: function() {
              return validate(this, NAME)[SIZE];
            }
          });
          return C;
        },
        def: function(that, key, value) {
          var entry = getEntry(that, key);
          var prev, index;
          if (entry) {
            entry.v = value;
          } else {
            that._l = entry = {
              i: index = fastKey(key, true),
              // <- index
              k: key,
              // <- key
              v: value,
              // <- value
              p: prev = that._l,
              // <- previous entry
              n: void 0,
              // <- next entry
              r: false
              // <- removed
            };
            if (!that._f) that._f = entry;
            if (prev) prev.n = entry;
            that[SIZE]++;
            if (index !== "F") that._i[index] = entry;
          }
          return that;
        },
        getEntry,
        setStrong: function(C, NAME, IS_MAP) {
          $iterDefine(C, NAME, function(iterated, kind) {
            this._t = validate(iterated, NAME);
            this._k = kind;
            this._l = void 0;
          }, function() {
            var that = this;
            var kind = that._k;
            var entry = that._l;
            while (entry && entry.r) entry = entry.p;
            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
              that._t = void 0;
              return step(1);
            }
            if (kind == "keys") return step(0, entry.k);
            if (kind == "values") return step(0, entry.v);
            return step(0, [entry.k, entry.v]);
          }, IS_MAP ? "entries" : "values", !IS_MAP, true);
          setSpecies(NAME);
        }
      };
    }
  });

  // node_modules/core-js/modules/_collection.js
  var require_collection = __commonJS({
    "node_modules/core-js/modules/_collection.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var $export = require_export();
      var redefine = require_redefine();
      var redefineAll = require_redefine_all();
      var meta = require_meta();
      var forOf = require_for_of();
      var anInstance = require_an_instance();
      var isObject2 = require_is_object();
      var fails = require_fails();
      var $iterDetect = require_iter_detect();
      var setToStringTag = require_set_to_string_tag();
      var inheritIfRequired = require_inherit_if_required();
      module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
        var Base = global2[NAME];
        var C = Base;
        var ADDER = IS_MAP ? "set" : "add";
        var proto = C && C.prototype;
        var O = {};
        var fixMethod = function(KEY) {
          var fn = proto[KEY];
          redefine(
            proto,
            KEY,
            KEY == "delete" ? function(a) {
              return IS_WEAK && !isObject2(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == "has" ? function has(a) {
              return IS_WEAK && !isObject2(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == "get" ? function get(a) {
              return IS_WEAK && !isObject2(a) ? void 0 : fn.call(this, a === 0 ? 0 : a);
            } : KEY == "add" ? function add(a) {
              fn.call(this, a === 0 ? 0 : a);
              return this;
            } : function set(a, b) {
              fn.call(this, a === 0 ? 0 : a, b);
              return this;
            }
          );
        };
        if (typeof C != "function" || !(IS_WEAK || proto.forEach && !fails(function() {
          new C().entries().next();
        }))) {
          C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
          redefineAll(C.prototype, methods);
          meta.NEED = true;
        } else {
          var instance = new C();
          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
          var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
          });
          var ACCEPT_ITERABLES = $iterDetect(function(iter) {
            new C(iter);
          });
          var BUGGY_ZERO = !IS_WEAK && fails(function() {
            var $instance = new C();
            var index = 5;
            while (index--) $instance[ADDER](index, index);
            return !$instance.has(-0);
          });
          if (!ACCEPT_ITERABLES) {
            C = wrapper(function(target, iterable) {
              anInstance(target, C, NAME);
              var that = inheritIfRequired(new Base(), target, C);
              if (iterable != void 0) forOf(iterable, IS_MAP, that[ADDER], that);
              return that;
            });
            C.prototype = proto;
            proto.constructor = C;
          }
          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
          }
          if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
          if (IS_WEAK && proto.clear) delete proto.clear;
        }
        setToStringTag(C, NAME);
        O[NAME] = C;
        $export($export.G + $export.W + $export.F * (C != Base), O);
        if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
        return C;
      };
    }
  });

  // node_modules/core-js/modules/es6.map.js
  var require_es6_map = __commonJS({
    "node_modules/core-js/modules/es6.map.js"(exports, module) {
      "use strict";
      var strong = require_collection_strong();
      var validate = require_validate_collection();
      var MAP = "Map";
      module.exports = require_collection()(MAP, function(get) {
        return function Map() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          var entry = strong.getEntry(validate(this, MAP), key);
          return entry && entry.v;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
        }
      }, strong, true);
    }
  });

  // node_modules/core-js/modules/es6.set.js
  var require_es6_set = __commonJS({
    "node_modules/core-js/modules/es6.set.js"(exports, module) {
      "use strict";
      var strong = require_collection_strong();
      var validate = require_validate_collection();
      var SET = "Set";
      module.exports = require_collection()(SET, function(get) {
        return function Set() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        // 23.2.3.1 Set.prototype.add(value)
        add: function add(value) {
          return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
        }
      }, strong);
    }
  });

  // node_modules/core-js/modules/_collection-weak.js
  var require_collection_weak = __commonJS({
    "node_modules/core-js/modules/_collection-weak.js"(exports, module) {
      "use strict";
      var redefineAll = require_redefine_all();
      var getWeak = require_meta().getWeak;
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      var anInstance = require_an_instance();
      var forOf = require_for_of();
      var createArrayMethod = require_array_methods();
      var $has = require_has();
      var validate = require_validate_collection();
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var id = 0;
      var uncaughtFrozenStore = function(that) {
        return that._l || (that._l = new UncaughtFrozenStore());
      };
      var UncaughtFrozenStore = function() {
        this.a = [];
      };
      var findUncaughtFrozen = function(store, key) {
        return arrayFind(store.a, function(it) {
          return it[0] === key;
        });
      };
      UncaughtFrozenStore.prototype = {
        get: function(key) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) return entry[1];
        },
        has: function(key) {
          return !!findUncaughtFrozen(this, key);
        },
        set: function(key, value) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) entry[1] = value;
          else this.a.push([key, value]);
        },
        "delete": function(key) {
          var index = arrayFindIndex(this.a, function(it) {
            return it[0] === key;
          });
          if (~index) this.a.splice(index, 1);
          return !!~index;
        }
      };
      module.exports = {
        getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
          var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME, "_i");
            that._t = NAME;
            that._i = id++;
            that._l = void 0;
            if (iterable != void 0) forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            "delete": function(key) {
              if (!isObject2(key)) return false;
              var data = getWeak(key);
              if (data === true) return uncaughtFrozenStore(validate(this, NAME))["delete"](key);
              return data && $has(data, this._i) && delete data[this._i];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has(key) {
              if (!isObject2(key)) return false;
              var data = getWeak(key);
              if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
              return data && $has(data, this._i);
            }
          });
          return C;
        },
        def: function(that, key, value) {
          var data = getWeak(anObject(key), true);
          if (data === true) uncaughtFrozenStore(that).set(key, value);
          else data[that._i] = value;
          return that;
        },
        ufstore: uncaughtFrozenStore
      };
    }
  });

  // node_modules/core-js/modules/es6.weak-map.js
  var require_es6_weak_map = __commonJS({
    "node_modules/core-js/modules/es6.weak-map.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var each = require_array_methods()(0);
      var redefine = require_redefine();
      var meta = require_meta();
      var assign = require_object_assign();
      var weak = require_collection_weak();
      var isObject2 = require_is_object();
      var validate = require_validate_collection();
      var NATIVE_WEAK_MAP = require_validate_collection();
      var IS_IE11 = !global2.ActiveXObject && "ActiveXObject" in global2;
      var WEAK_MAP = "WeakMap";
      var getWeak = meta.getWeak;
      var isExtensible = Object.isExtensible;
      var uncaughtFrozenStore = weak.ufstore;
      var InternalMap;
      var wrapper = function(get) {
        return function WeakMap() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      };
      var methods = {
        // 23.3.3.3 WeakMap.prototype.get(key)
        get: function get(key) {
          if (isObject2(key)) {
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
            return data ? data[this._i] : void 0;
          }
        },
        // 23.3.3.5 WeakMap.prototype.set(key, value)
        set: function set(key, value) {
          return weak.def(validate(this, WEAK_MAP), key, value);
        }
      };
      var $WeakMap = module.exports = require_collection()(WEAK_MAP, wrapper, methods, weak, true, true);
      if (NATIVE_WEAK_MAP && IS_IE11) {
        InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
        assign(InternalMap.prototype, methods);
        meta.NEED = true;
        each(["delete", "has", "get", "set"], function(key) {
          var proto = $WeakMap.prototype;
          var method = proto[key];
          redefine(proto, key, function(a, b) {
            if (isObject2(a) && !isExtensible(a)) {
              if (!this._f) this._f = new InternalMap();
              var result = this._f[key](a, b);
              return key == "set" ? this : result;
            }
            return method.call(this, a, b);
          });
        });
      }
    }
  });

  // node_modules/core-js/modules/es6.weak-set.js
  var require_es6_weak_set = __commonJS({
    "node_modules/core-js/modules/es6.weak-set.js"() {
      "use strict";
      var weak = require_collection_weak();
      var validate = require_validate_collection();
      var WEAK_SET = "WeakSet";
      require_collection()(WEAK_SET, function(get) {
        return function WeakSet2() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        // 23.4.3.1 WeakSet.prototype.add(value)
        add: function add(value) {
          return weak.def(validate(this, WEAK_SET), value, true);
        }
      }, weak, false, true);
    }
  });

  // node_modules/core-js/modules/_typed.js
  var require_typed = __commonJS({
    "node_modules/core-js/modules/_typed.js"(exports, module) {
      var global2 = require_global();
      var hide = require_hide();
      var uid = require_uid();
      var TYPED = uid("typed_array");
      var VIEW = uid("view");
      var ABV = !!(global2.ArrayBuffer && global2.DataView);
      var CONSTR = ABV;
      var i = 0;
      var l = 9;
      var Typed;
      var TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
      while (i < l) {
        if (Typed = global2[TypedArrayConstructors[i++]]) {
          hide(Typed.prototype, TYPED, true);
          hide(Typed.prototype, VIEW, true);
        } else CONSTR = false;
      }
      module.exports = {
        ABV,
        CONSTR,
        TYPED,
        VIEW
      };
    }
  });

  // node_modules/core-js/modules/_to-index.js
  var require_to_index = __commonJS({
    "node_modules/core-js/modules/_to-index.js"(exports, module) {
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      module.exports = function(it) {
        if (it === void 0) return 0;
        var number = toInteger(it);
        var length = toLength(number);
        if (number !== length) throw RangeError("Wrong length!");
        return length;
      };
    }
  });

  // node_modules/core-js/modules/_typed-buffer.js
  var require_typed_buffer = __commonJS({
    "node_modules/core-js/modules/_typed-buffer.js"(exports) {
      "use strict";
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var LIBRARY = require_library();
      var $typed = require_typed();
      var hide = require_hide();
      var redefineAll = require_redefine_all();
      var fails = require_fails();
      var anInstance = require_an_instance();
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      var toIndex = require_to_index();
      var gOPN = require_object_gopn().f;
      var dP = require_object_dp().f;
      var arrayFill = require_array_fill();
      var setToStringTag = require_set_to_string_tag();
      var ARRAY_BUFFER = "ArrayBuffer";
      var DATA_VIEW = "DataView";
      var PROTOTYPE = "prototype";
      var WRONG_LENGTH = "Wrong length!";
      var WRONG_INDEX = "Wrong index!";
      var $ArrayBuffer = global2[ARRAY_BUFFER];
      var $DataView = global2[DATA_VIEW];
      var Math2 = global2.Math;
      var RangeError2 = global2.RangeError;
      var Infinity2 = global2.Infinity;
      var BaseBuffer = $ArrayBuffer;
      var abs = Math2.abs;
      var pow = Math2.pow;
      var floor = Math2.floor;
      var log = Math2.log;
      var LN2 = Math2.LN2;
      var BUFFER = "buffer";
      var BYTE_LENGTH = "byteLength";
      var BYTE_OFFSET = "byteOffset";
      var $BUFFER = DESCRIPTORS ? "_b" : BUFFER;
      var $LENGTH = DESCRIPTORS ? "_l" : BYTE_LENGTH;
      var $OFFSET = DESCRIPTORS ? "_o" : BYTE_OFFSET;
      function packIEEE754(value, mLen, nBytes) {
        var buffer = new Array(nBytes);
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
        var i = 0;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        var e, m, c;
        value = abs(value);
        if (value != value || value === Infinity2) {
          m = value != value ? 1 : 0;
          e = eMax;
        } else {
          e = floor(log(value) / LN2);
          if (value * (c = pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * pow(2, eBias - 1) * pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) ;
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) ;
        buffer[--i] |= s * 128;
        return buffer;
      }
      function unpackIEEE754(buffer, mLen, nBytes) {
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = eLen - 7;
        var i = nBytes - 1;
        var s = buffer[i--];
        var e = s & 127;
        var m;
        s >>= 7;
        for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) ;
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) ;
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : s ? -Infinity2 : Infinity2;
        } else {
          m = m + pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * pow(2, e - mLen);
      }
      function unpackI32(bytes) {
        return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
      }
      function packI8(it) {
        return [it & 255];
      }
      function packI16(it) {
        return [it & 255, it >> 8 & 255];
      }
      function packI32(it) {
        return [it & 255, it >> 8 & 255, it >> 16 & 255, it >> 24 & 255];
      }
      function packF64(it) {
        return packIEEE754(it, 52, 8);
      }
      function packF32(it) {
        return packIEEE754(it, 23, 4);
      }
      function addGetter(C, key2, internal) {
        dP(C[PROTOTYPE], key2, { get: function() {
          return this[internal];
        } });
      }
      function get(view2, bytes, index, isLittleEndian) {
        var numIndex = +index;
        var intIndex = toIndex(numIndex);
        if (intIndex + bytes > view2[$LENGTH]) throw RangeError2(WRONG_INDEX);
        var store = view2[$BUFFER]._b;
        var start = intIndex + view2[$OFFSET];
        var pack = store.slice(start, start + bytes);
        return isLittleEndian ? pack : pack.reverse();
      }
      function set(view2, bytes, index, conversion, value, isLittleEndian) {
        var numIndex = +index;
        var intIndex = toIndex(numIndex);
        if (intIndex + bytes > view2[$LENGTH]) throw RangeError2(WRONG_INDEX);
        var store = view2[$BUFFER]._b;
        var start = intIndex + view2[$OFFSET];
        var pack = conversion(+value);
        for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }
      if (!$typed.ABV) {
        $ArrayBuffer = function ArrayBuffer2(length) {
          anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
          var byteLength = toIndex(length);
          this._b = arrayFill.call(new Array(byteLength), 0);
          this[$LENGTH] = byteLength;
        };
        $DataView = function DataView(buffer, byteOffset, byteLength) {
          anInstance(this, $DataView, DATA_VIEW);
          anInstance(buffer, $ArrayBuffer, DATA_VIEW);
          var bufferLength = buffer[$LENGTH];
          var offset = toInteger(byteOffset);
          if (offset < 0 || offset > bufferLength) throw RangeError2("Wrong offset!");
          byteLength = byteLength === void 0 ? bufferLength - offset : toLength(byteLength);
          if (offset + byteLength > bufferLength) throw RangeError2(WRONG_LENGTH);
          this[$BUFFER] = buffer;
          this[$OFFSET] = offset;
          this[$LENGTH] = byteLength;
        };
        if (DESCRIPTORS) {
          addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
          addGetter($DataView, BUFFER, "_b");
          addGetter($DataView, BYTE_LENGTH, "_l");
          addGetter($DataView, BYTE_OFFSET, "_o");
        }
        redefineAll($DataView[PROTOTYPE], {
          getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
          },
          getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
          },
          getInt16: function getInt16(byteOffset) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
          },
          getUint16: function getUint16(byteOffset) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return bytes[1] << 8 | bytes[0];
          },
          getInt32: function getInt32(byteOffset) {
            return unpackI32(get(this, 4, byteOffset, arguments[1]));
          },
          getUint32: function getUint32(byteOffset) {
            return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
          },
          getFloat32: function getFloat32(byteOffset) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
          },
          getFloat64: function getFloat64(byteOffset) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
          },
          setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setInt16: function setInt16(byteOffset, value) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setUint16: function setUint16(byteOffset, value) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setInt32: function setInt32(byteOffset, value) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setUint32: function setUint32(byteOffset, value) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setFloat32: function setFloat32(byteOffset, value) {
            set(this, 4, byteOffset, packF32, value, arguments[2]);
          },
          setFloat64: function setFloat64(byteOffset, value) {
            set(this, 8, byteOffset, packF64, value, arguments[2]);
          }
        });
      } else {
        if (!fails(function() {
          $ArrayBuffer(1);
        }) || !fails(function() {
          new $ArrayBuffer(-1);
        }) || fails(function() {
          new $ArrayBuffer();
          new $ArrayBuffer(1.5);
          new $ArrayBuffer(NaN);
          return $ArrayBuffer.name != ARRAY_BUFFER;
        })) {
          $ArrayBuffer = function ArrayBuffer2(length) {
            anInstance(this, $ArrayBuffer);
            return new BaseBuffer(toIndex(length));
          };
          ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
          for (keys = gOPN(BaseBuffer), j = 0; keys.length > j; ) {
            if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
          }
          if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
        }
        view = new $DataView(new $ArrayBuffer(2));
        $setInt8 = $DataView[PROTOTYPE].setInt8;
        view.setInt8(0, 2147483648);
        view.setInt8(1, 2147483649);
        if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
          setInt8: function setInt8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
          },
          setUint8: function setUint8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
          }
        }, true);
      }
      var ArrayBufferProto;
      var keys;
      var j;
      var key;
      var view;
      var $setInt8;
      setToStringTag($ArrayBuffer, ARRAY_BUFFER);
      setToStringTag($DataView, DATA_VIEW);
      hide($DataView[PROTOTYPE], $typed.VIEW, true);
      exports[ARRAY_BUFFER] = $ArrayBuffer;
      exports[DATA_VIEW] = $DataView;
    }
  });

  // node_modules/core-js/modules/es6.typed.array-buffer.js
  var require_es6_typed_array_buffer = __commonJS({
    "node_modules/core-js/modules/es6.typed.array-buffer.js"() {
      "use strict";
      var $export = require_export();
      var $typed = require_typed();
      var buffer = require_typed_buffer();
      var anObject = require_an_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      var isObject2 = require_is_object();
      var ArrayBuffer2 = require_global().ArrayBuffer;
      var speciesConstructor = require_species_constructor();
      var $ArrayBuffer = buffer.ArrayBuffer;
      var $DataView = buffer.DataView;
      var $isView = $typed.ABV && ArrayBuffer2.isView;
      var $slice = $ArrayBuffer.prototype.slice;
      var VIEW = $typed.VIEW;
      var ARRAY_BUFFER = "ArrayBuffer";
      $export($export.G + $export.W + $export.F * (ArrayBuffer2 !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
      $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
        // 24.1.3.1 ArrayBuffer.isView(arg)
        isView: function isView(it) {
          return $isView && $isView(it) || isObject2(it) && VIEW in it;
        }
      });
      $export($export.P + $export.U + $export.F * require_fails()(function() {
        return !new $ArrayBuffer(2).slice(1, void 0).byteLength;
      }), ARRAY_BUFFER, {
        // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
        slice: function slice(start, end) {
          if ($slice !== void 0 && end === void 0) return $slice.call(anObject(this), start);
          var len = anObject(this).byteLength;
          var first = toAbsoluteIndex(start, len);
          var fin = toAbsoluteIndex(end === void 0 ? len : end, len);
          var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
          var viewS = new $DataView(this);
          var viewT = new $DataView(result);
          var index = 0;
          while (first < fin) {
            viewT.setUint8(index++, viewS.getUint8(first++));
          }
          return result;
        }
      });
      require_set_species()(ARRAY_BUFFER);
    }
  });

  // node_modules/core-js/modules/es6.typed.data-view.js
  var require_es6_typed_data_view = __commonJS({
    "node_modules/core-js/modules/es6.typed.data-view.js"() {
      var $export = require_export();
      $export($export.G + $export.W + $export.F * !require_typed().ABV, {
        DataView: require_typed_buffer().DataView
      });
    }
  });

  // node_modules/core-js/modules/_typed-array.js
  var require_typed_array = __commonJS({
    "node_modules/core-js/modules/_typed-array.js"(exports, module) {
      "use strict";
      if (require_descriptors()) {
        LIBRARY = require_library();
        global2 = require_global();
        fails = require_fails();
        $export = require_export();
        $typed = require_typed();
        $buffer = require_typed_buffer();
        ctx = require_ctx();
        anInstance = require_an_instance();
        propertyDesc = require_property_desc();
        hide = require_hide();
        redefineAll = require_redefine_all();
        toInteger = require_to_integer();
        toLength = require_to_length();
        toIndex = require_to_index();
        toAbsoluteIndex = require_to_absolute_index();
        toPrimitive = require_to_primitive();
        has = require_has();
        classof = require_classof();
        isObject2 = require_is_object();
        toObject = require_to_object();
        isArrayIter = require_is_array_iter();
        create = require_object_create();
        getPrototypeOf2 = require_object_gpo();
        gOPN = require_object_gopn().f;
        getIterFn = require_core_get_iterator_method();
        uid = require_uid();
        wks = require_wks();
        createArrayMethod = require_array_methods();
        createArrayIncludes = require_array_includes();
        speciesConstructor = require_species_constructor();
        ArrayIterators = require_es6_array_iterator();
        Iterators = require_iterators();
        $iterDetect = require_iter_detect();
        setSpecies = require_set_species();
        arrayFill = require_array_fill();
        arrayCopyWithin = require_array_copy_within();
        $DP = require_object_dp();
        $GOPD = require_object_gopd();
        dP = $DP.f;
        gOPD = $GOPD.f;
        RangeError2 = global2.RangeError;
        TypeError2 = global2.TypeError;
        Uint8Array2 = global2.Uint8Array;
        ARRAY_BUFFER = "ArrayBuffer";
        SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
        BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
        PROTOTYPE = "prototype";
        ArrayProto = Array[PROTOTYPE];
        $ArrayBuffer = $buffer.ArrayBuffer;
        $DataView = $buffer.DataView;
        arrayForEach = createArrayMethod(0);
        arrayFilter = createArrayMethod(2);
        arraySome = createArrayMethod(3);
        arrayEvery = createArrayMethod(4);
        arrayFind = createArrayMethod(5);
        arrayFindIndex = createArrayMethod(6);
        arrayIncludes = createArrayIncludes(true);
        arrayIndexOf = createArrayIncludes(false);
        arrayValues = ArrayIterators.values;
        arrayKeys = ArrayIterators.keys;
        arrayEntries = ArrayIterators.entries;
        arrayLastIndexOf = ArrayProto.lastIndexOf;
        arrayReduce = ArrayProto.reduce;
        arrayReduceRight = ArrayProto.reduceRight;
        arrayJoin = ArrayProto.join;
        arraySort = ArrayProto.sort;
        arraySlice = ArrayProto.slice;
        arrayToString = ArrayProto.toString;
        arrayToLocaleString = ArrayProto.toLocaleString;
        ITERATOR = wks("iterator");
        TAG = wks("toStringTag");
        TYPED_CONSTRUCTOR = uid("typed_constructor");
        DEF_CONSTRUCTOR = uid("def_constructor");
        ALL_CONSTRUCTORS = $typed.CONSTR;
        TYPED_ARRAY = $typed.TYPED;
        VIEW = $typed.VIEW;
        WRONG_LENGTH = "Wrong length!";
        $map = createArrayMethod(1, function(O, length) {
          return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
        });
        LITTLE_ENDIAN = fails(function() {
          return new Uint8Array2(new Uint16Array([1]).buffer)[0] === 1;
        });
        FORCED_SET = !!Uint8Array2 && !!Uint8Array2[PROTOTYPE].set && fails(function() {
          new Uint8Array2(1).set({});
        });
        toOffset = function(it, BYTES) {
          var offset = toInteger(it);
          if (offset < 0 || offset % BYTES) throw RangeError2("Wrong offset!");
          return offset;
        };
        validate = function(it) {
          if (isObject2(it) && TYPED_ARRAY in it) return it;
          throw TypeError2(it + " is not a typed array!");
        };
        allocate = function(C, length) {
          if (!(isObject2(C) && TYPED_CONSTRUCTOR in C)) {
            throw TypeError2("It is not a typed array constructor!");
          }
          return new C(length);
        };
        speciesFromList = function(O, list) {
          return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
        };
        fromList = function(C, list) {
          var index = 0;
          var length = list.length;
          var result = allocate(C, length);
          while (length > index) result[index] = list[index++];
          return result;
        };
        addGetter = function(it, key, internal) {
          dP(it, key, { get: function() {
            return this._d[internal];
          } });
        };
        $from = function from(source) {
          var O = toObject(source);
          var aLen = arguments.length;
          var mapfn = aLen > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          var iterFn = getIterFn(O);
          var i, length, values, result, step, iterator2;
          if (iterFn != void 0 && !isArrayIter(iterFn)) {
            for (iterator2 = iterFn.call(O), values = [], i = 0; !(step = iterator2.next()).done; i++) {
              values.push(step.value);
            }
            O = values;
          }
          if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
          for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
            result[i] = mapping ? mapfn(O[i], i) : O[i];
          }
          return result;
        };
        $of = function of() {
          var index = 0;
          var length = arguments.length;
          var result = allocate(this, length);
          while (length > index) result[index] = arguments[index++];
          return result;
        };
        TO_LOCALE_BUG = !!Uint8Array2 && fails(function() {
          arrayToLocaleString.call(new Uint8Array2(1));
        });
        $toLocaleString = function toLocaleString() {
          return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
        };
        proto = {
          copyWithin: function copyWithin(target, start) {
            return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : void 0);
          },
          every: function every(callbackfn) {
            return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function fill(value) {
            return arrayFill.apply(validate(this), arguments);
          },
          filter: function filter2(callbackfn) {
            return speciesFromList(this, arrayFilter(
              validate(this),
              callbackfn,
              arguments.length > 1 ? arguments[1] : void 0
            ));
          },
          find: function find(predicate) {
            return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function findIndex(predicate) {
            return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
          },
          forEach: function forEach2(callbackfn) {
            arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function indexOf(searchElement) {
            return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
          },
          includes: function includes(searchElement) {
            return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
          },
          join: function join(separator) {
            return arrayJoin.apply(validate(this), arguments);
          },
          lastIndexOf: function lastIndexOf(searchElement) {
            return arrayLastIndexOf.apply(validate(this), arguments);
          },
          map: function map(mapfn) {
            return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          reduce: function reduce(callbackfn) {
            return arrayReduce.apply(validate(this), arguments);
          },
          reduceRight: function reduceRight(callbackfn) {
            return arrayReduceRight.apply(validate(this), arguments);
          },
          reverse: function reverse() {
            var that = this;
            var length = validate(that).length;
            var middle = Math.floor(length / 2);
            var index = 0;
            var value;
            while (index < middle) {
              value = that[index];
              that[index++] = that[--length];
              that[length] = value;
            }
            return that;
          },
          some: function some(callbackfn) {
            return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function sort(comparefn) {
            return arraySort.call(validate(this), comparefn);
          },
          subarray: function subarray(begin, end) {
            var O = validate(this);
            var length = O.length;
            var $begin = toAbsoluteIndex(begin, length);
            return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
              O.buffer,
              O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
              toLength((end === void 0 ? length : toAbsoluteIndex(end, length)) - $begin)
            );
          }
        };
        $slice = function slice(start, end) {
          return speciesFromList(this, arraySlice.call(validate(this), start, end));
        };
        $set = function set(arrayLike) {
          validate(this);
          var offset = toOffset(arguments[1], 1);
          var length = this.length;
          var src = toObject(arrayLike);
          var len = toLength(src.length);
          var index = 0;
          if (len + offset > length) throw RangeError2(WRONG_LENGTH);
          while (index < len) this[offset + index] = src[index++];
        };
        $iterators = {
          entries: function entries() {
            return arrayEntries.call(validate(this));
          },
          keys: function keys() {
            return arrayKeys.call(validate(this));
          },
          values: function values() {
            return arrayValues.call(validate(this));
          }
        };
        isTAIndex = function(target, key) {
          return isObject2(target) && target[TYPED_ARRAY] && typeof key != "symbol" && key in target && String(+key) == String(key);
        };
        $getDesc = function getOwnPropertyDescriptor(target, key) {
          return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
        };
        $setDesc = function defineProperty(target, key, desc) {
          if (isTAIndex(target, key = toPrimitive(key, true)) && isObject2(desc) && has(desc, "value") && !has(desc, "get") && !has(desc, "set") && !desc.configurable && (!has(desc, "writable") || desc.writable) && (!has(desc, "enumerable") || desc.enumerable)) {
            target[key] = desc.value;
            return target;
          }
          return dP(target, key, desc);
        };
        if (!ALL_CONSTRUCTORS) {
          $GOPD.f = $getDesc;
          $DP.f = $setDesc;
        }
        $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
          getOwnPropertyDescriptor: $getDesc,
          defineProperty: $setDesc
        });
        if (fails(function() {
          arrayToString.call({});
        })) {
          arrayToString = arrayToLocaleString = function toString3() {
            return arrayJoin.call(this);
          };
        }
        $TypedArrayPrototype$ = redefineAll({}, proto);
        redefineAll($TypedArrayPrototype$, $iterators);
        hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
        redefineAll($TypedArrayPrototype$, {
          slice: $slice,
          set: $set,
          constructor: function() {
          },
          toString: arrayToString,
          toLocaleString: $toLocaleString
        });
        addGetter($TypedArrayPrototype$, "buffer", "b");
        addGetter($TypedArrayPrototype$, "byteOffset", "o");
        addGetter($TypedArrayPrototype$, "byteLength", "l");
        addGetter($TypedArrayPrototype$, "length", "e");
        dP($TypedArrayPrototype$, TAG, {
          get: function() {
            return this[TYPED_ARRAY];
          }
        });
        module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
          CLAMPED = !!CLAMPED;
          var NAME = KEY + (CLAMPED ? "Clamped" : "") + "Array";
          var GETTER = "get" + KEY;
          var SETTER = "set" + KEY;
          var TypedArray = global2[NAME];
          var Base = TypedArray || {};
          var TAC = TypedArray && getPrototypeOf2(TypedArray);
          var FORCED = !TypedArray || !$typed.ABV;
          var O = {};
          var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
          var getter = function(that, index) {
            var data = that._d;
            return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
          };
          var setter = function(that, index, value) {
            var data = that._d;
            if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
            data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
          };
          var addElement = function(that, index) {
            dP(that, index, {
              get: function() {
                return getter(this, index);
              },
              set: function(value) {
                return setter(this, index, value);
              },
              enumerable: true
            });
          };
          if (FORCED) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
              anInstance(that, TypedArray, NAME, "_d");
              var index = 0;
              var offset = 0;
              var buffer, byteLength, length, klass;
              if (!isObject2(data)) {
                length = toIndex(data);
                byteLength = length * BYTES;
                buffer = new $ArrayBuffer(byteLength);
              } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                buffer = data;
                offset = toOffset($offset, BYTES);
                var $len = data.byteLength;
                if ($length === void 0) {
                  if ($len % BYTES) throw RangeError2(WRONG_LENGTH);
                  byteLength = $len - offset;
                  if (byteLength < 0) throw RangeError2(WRONG_LENGTH);
                } else {
                  byteLength = toLength($length) * BYTES;
                  if (byteLength + offset > $len) throw RangeError2(WRONG_LENGTH);
                }
                length = byteLength / BYTES;
              } else if (TYPED_ARRAY in data) {
                return fromList(TypedArray, data);
              } else {
                return $from.call(TypedArray, data);
              }
              hide(that, "_d", {
                b: buffer,
                o: offset,
                l: byteLength,
                e: length,
                v: new $DataView(buffer)
              });
              while (index < length) addElement(that, index++);
            });
            TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
            hide(TypedArrayPrototype, "constructor", TypedArray);
          } else if (!fails(function() {
            TypedArray(1);
          }) || !fails(function() {
            new TypedArray(-1);
          }) || !$iterDetect(function(iter) {
            new TypedArray();
            new TypedArray(null);
            new TypedArray(1.5);
            new TypedArray(iter);
          }, true)) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
              anInstance(that, TypedArray, NAME);
              var klass;
              if (!isObject2(data)) return new Base(toIndex(data));
              if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                return $length !== void 0 ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== void 0 ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
              }
              if (TYPED_ARRAY in data) return fromList(TypedArray, data);
              return $from.call(TypedArray, data);
            });
            arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
              if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
            });
            TypedArray[PROTOTYPE] = TypedArrayPrototype;
            if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
          }
          var $nativeIterator = TypedArrayPrototype[ITERATOR];
          var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == "values" || $nativeIterator.name == void 0);
          var $iterator = $iterators.values;
          hide(TypedArray, TYPED_CONSTRUCTOR, true);
          hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
          hide(TypedArrayPrototype, VIEW, true);
          hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
          if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
            dP(TypedArrayPrototype, TAG, {
              get: function() {
                return NAME;
              }
            });
          }
          O[NAME] = TypedArray;
          $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
          $export($export.S, NAME, {
            BYTES_PER_ELEMENT: BYTES
          });
          $export($export.S + $export.F * fails(function() {
            Base.of.call(TypedArray, 1);
          }), NAME, {
            from: $from,
            of: $of
          });
          if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
          $export($export.P, NAME, proto);
          setSpecies(NAME);
          $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
          $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
          if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
          $export($export.P + $export.F * fails(function() {
            new TypedArray(1).slice();
          }), NAME, { slice: $slice });
          $export($export.P + $export.F * (fails(function() {
            return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
          }) || !fails(function() {
            TypedArrayPrototype.toLocaleString.call([1, 2]);
          })), NAME, { toLocaleString: $toLocaleString });
          Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
          if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
        };
      } else module.exports = function() {
      };
      var LIBRARY;
      var global2;
      var fails;
      var $export;
      var $typed;
      var $buffer;
      var ctx;
      var anInstance;
      var propertyDesc;
      var hide;
      var redefineAll;
      var toInteger;
      var toLength;
      var toIndex;
      var toAbsoluteIndex;
      var toPrimitive;
      var has;
      var classof;
      var isObject2;
      var toObject;
      var isArrayIter;
      var create;
      var getPrototypeOf2;
      var gOPN;
      var getIterFn;
      var uid;
      var wks;
      var createArrayMethod;
      var createArrayIncludes;
      var speciesConstructor;
      var ArrayIterators;
      var Iterators;
      var $iterDetect;
      var setSpecies;
      var arrayFill;
      var arrayCopyWithin;
      var $DP;
      var $GOPD;
      var dP;
      var gOPD;
      var RangeError2;
      var TypeError2;
      var Uint8Array2;
      var ARRAY_BUFFER;
      var SHARED_BUFFER;
      var BYTES_PER_ELEMENT;
      var PROTOTYPE;
      var ArrayProto;
      var $ArrayBuffer;
      var $DataView;
      var arrayForEach;
      var arrayFilter;
      var arraySome;
      var arrayEvery;
      var arrayFind;
      var arrayFindIndex;
      var arrayIncludes;
      var arrayIndexOf;
      var arrayValues;
      var arrayKeys;
      var arrayEntries;
      var arrayLastIndexOf;
      var arrayReduce;
      var arrayReduceRight;
      var arrayJoin;
      var arraySort;
      var arraySlice;
      var arrayToString;
      var arrayToLocaleString;
      var ITERATOR;
      var TAG;
      var TYPED_CONSTRUCTOR;
      var DEF_CONSTRUCTOR;
      var ALL_CONSTRUCTORS;
      var TYPED_ARRAY;
      var VIEW;
      var WRONG_LENGTH;
      var $map;
      var LITTLE_ENDIAN;
      var FORCED_SET;
      var toOffset;
      var validate;
      var allocate;
      var speciesFromList;
      var fromList;
      var addGetter;
      var $from;
      var $of;
      var TO_LOCALE_BUG;
      var $toLocaleString;
      var proto;
      var $slice;
      var $set;
      var $iterators;
      var isTAIndex;
      var $getDesc;
      var $setDesc;
      var $TypedArrayPrototype$;
    }
  });

  // node_modules/core-js/modules/es6.typed.int8-array.js
  var require_es6_typed_int8_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.int8-array.js"() {
      require_typed_array()("Int8", 1, function(init) {
        return function Int8Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint8-array.js
  var require_es6_typed_uint8_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint8-array.js"() {
      require_typed_array()("Uint8", 1, function(init) {
        return function Uint8Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint8-clamped-array.js
  var require_es6_typed_uint8_clamped_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint8-clamped-array.js"() {
      require_typed_array()("Uint8", 1, function(init) {
        return function Uint8ClampedArray(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      }, true);
    }
  });

  // node_modules/core-js/modules/es6.typed.int16-array.js
  var require_es6_typed_int16_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.int16-array.js"() {
      require_typed_array()("Int16", 2, function(init) {
        return function Int16Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint16-array.js
  var require_es6_typed_uint16_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint16-array.js"() {
      require_typed_array()("Uint16", 2, function(init) {
        return function Uint16Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.int32-array.js
  var require_es6_typed_int32_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.int32-array.js"() {
      require_typed_array()("Int32", 4, function(init) {
        return function Int32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint32-array.js
  var require_es6_typed_uint32_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint32-array.js"() {
      require_typed_array()("Uint32", 4, function(init) {
        return function Uint32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.float32-array.js
  var require_es6_typed_float32_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.float32-array.js"() {
      require_typed_array()("Float32", 4, function(init) {
        return function Float32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.float64-array.js
  var require_es6_typed_float64_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.float64-array.js"() {
      require_typed_array()("Float64", 8, function(init) {
        return function Float64Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.apply.js
  var require_es6_reflect_apply = __commonJS({
    "node_modules/core-js/modules/es6.reflect.apply.js"() {
      var $export = require_export();
      var aFunction = require_a_function();
      var anObject = require_an_object();
      var rApply = (require_global().Reflect || {}).apply;
      var fApply = Function.apply;
      $export($export.S + $export.F * !require_fails()(function() {
        rApply(function() {
        });
      }), "Reflect", {
        apply: function apply(target, thisArgument, argumentsList) {
          var T = aFunction(target);
          var L2 = anObject(argumentsList);
          return rApply ? rApply(T, thisArgument, L2) : fApply.call(T, thisArgument, L2);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.construct.js
  var require_es6_reflect_construct = __commonJS({
    "node_modules/core-js/modules/es6.reflect.construct.js"() {
      var $export = require_export();
      var create = require_object_create();
      var aFunction = require_a_function();
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      var fails = require_fails();
      var bind2 = require_bind();
      var rConstruct = (require_global().Reflect || {}).construct;
      var NEW_TARGET_BUG = fails(function() {
        function F() {
        }
        return !(rConstruct(function() {
        }, [], F) instanceof F);
      });
      var ARGS_BUG = !fails(function() {
        rConstruct(function() {
        });
      });
      $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
        construct: function construct(Target, args) {
          aFunction(Target);
          anObject(args);
          var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
          if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
          if (Target == newTarget) {
            switch (args.length) {
              case 0:
                return new Target();
              case 1:
                return new Target(args[0]);
              case 2:
                return new Target(args[0], args[1]);
              case 3:
                return new Target(args[0], args[1], args[2]);
              case 4:
                return new Target(args[0], args[1], args[2], args[3]);
            }
            var $args = [null];
            $args.push.apply($args, args);
            return new (bind2.apply(Target, $args))();
          }
          var proto = newTarget.prototype;
          var instance = create(isObject2(proto) ? proto : Object.prototype);
          var result = Function.apply.call(Target, instance, args);
          return isObject2(result) ? result : instance;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.define-property.js
  var require_es6_reflect_define_property = __commonJS({
    "node_modules/core-js/modules/es6.reflect.define-property.js"() {
      var dP = require_object_dp();
      var $export = require_export();
      var anObject = require_an_object();
      var toPrimitive = require_to_primitive();
      $export($export.S + $export.F * require_fails()(function() {
        Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
      }), "Reflect", {
        defineProperty: function defineProperty(target, propertyKey, attributes) {
          anObject(target);
          propertyKey = toPrimitive(propertyKey, true);
          anObject(attributes);
          try {
            dP.f(target, propertyKey, attributes);
            return true;
          } catch (e) {
            return false;
          }
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.delete-property.js
  var require_es6_reflect_delete_property = __commonJS({
    "node_modules/core-js/modules/es6.reflect.delete-property.js"() {
      var $export = require_export();
      var gOPD = require_object_gopd().f;
      var anObject = require_an_object();
      $export($export.S, "Reflect", {
        deleteProperty: function deleteProperty(target, propertyKey) {
          var desc = gOPD(anObject(target), propertyKey);
          return desc && !desc.configurable ? false : delete target[propertyKey];
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.enumerate.js
  var require_es6_reflect_enumerate = __commonJS({
    "node_modules/core-js/modules/es6.reflect.enumerate.js"() {
      "use strict";
      var $export = require_export();
      var anObject = require_an_object();
      var Enumerate = function(iterated) {
        this._t = anObject(iterated);
        this._i = 0;
        var keys = this._k = [];
        var key;
        for (key in iterated) keys.push(key);
      };
      require_iter_create()(Enumerate, "Object", function() {
        var that = this;
        var keys = that._k;
        var key;
        do {
          if (that._i >= keys.length) return { value: void 0, done: true };
        } while (!((key = keys[that._i++]) in that._t));
        return { value: key, done: false };
      });
      $export($export.S, "Reflect", {
        enumerate: function enumerate(target) {
          return new Enumerate(target);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.get.js
  var require_es6_reflect_get = __commonJS({
    "node_modules/core-js/modules/es6.reflect.get.js"() {
      var gOPD = require_object_gopd();
      var getPrototypeOf2 = require_object_gpo();
      var has = require_has();
      var $export = require_export();
      var isObject2 = require_is_object();
      var anObject = require_an_object();
      function get(target, propertyKey) {
        var receiver = arguments.length < 3 ? target : arguments[2];
        var desc, proto;
        if (anObject(target) === receiver) return target[propertyKey];
        if (desc = gOPD.f(target, propertyKey)) return has(desc, "value") ? desc.value : desc.get !== void 0 ? desc.get.call(receiver) : void 0;
        if (isObject2(proto = getPrototypeOf2(target))) return get(proto, propertyKey, receiver);
      }
      $export($export.S, "Reflect", { get });
    }
  });

  // node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js
  var require_es6_reflect_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js"() {
      var gOPD = require_object_gopd();
      var $export = require_export();
      var anObject = require_an_object();
      $export($export.S, "Reflect", {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
          return gOPD.f(anObject(target), propertyKey);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.get-prototype-of.js
  var require_es6_reflect_get_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.reflect.get-prototype-of.js"() {
      var $export = require_export();
      var getProto = require_object_gpo();
      var anObject = require_an_object();
      $export($export.S, "Reflect", {
        getPrototypeOf: function getPrototypeOf2(target) {
          return getProto(anObject(target));
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.has.js
  var require_es6_reflect_has = __commonJS({
    "node_modules/core-js/modules/es6.reflect.has.js"() {
      var $export = require_export();
      $export($export.S, "Reflect", {
        has: function has(target, propertyKey) {
          return propertyKey in target;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.is-extensible.js
  var require_es6_reflect_is_extensible = __commonJS({
    "node_modules/core-js/modules/es6.reflect.is-extensible.js"() {
      var $export = require_export();
      var anObject = require_an_object();
      var $isExtensible = Object.isExtensible;
      $export($export.S, "Reflect", {
        isExtensible: function isExtensible(target) {
          anObject(target);
          return $isExtensible ? $isExtensible(target) : true;
        }
      });
    }
  });

  // node_modules/core-js/modules/_own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/modules/_own-keys.js"(exports, module) {
      var gOPN = require_object_gopn();
      var gOPS = require_object_gops();
      var anObject = require_an_object();
      var Reflect2 = require_global().Reflect;
      module.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it) {
        var keys = gOPN.f(anObject(it));
        var getSymbols = gOPS.f;
        return getSymbols ? keys.concat(getSymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/modules/es6.reflect.own-keys.js
  var require_es6_reflect_own_keys = __commonJS({
    "node_modules/core-js/modules/es6.reflect.own-keys.js"() {
      var $export = require_export();
      $export($export.S, "Reflect", { ownKeys: require_own_keys() });
    }
  });

  // node_modules/core-js/modules/es6.reflect.prevent-extensions.js
  var require_es6_reflect_prevent_extensions = __commonJS({
    "node_modules/core-js/modules/es6.reflect.prevent-extensions.js"() {
      var $export = require_export();
      var anObject = require_an_object();
      var $preventExtensions = Object.preventExtensions;
      $export($export.S, "Reflect", {
        preventExtensions: function preventExtensions(target) {
          anObject(target);
          try {
            if ($preventExtensions) $preventExtensions(target);
            return true;
          } catch (e) {
            return false;
          }
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.set.js
  var require_es6_reflect_set = __commonJS({
    "node_modules/core-js/modules/es6.reflect.set.js"() {
      var dP = require_object_dp();
      var gOPD = require_object_gopd();
      var getPrototypeOf2 = require_object_gpo();
      var has = require_has();
      var $export = require_export();
      var createDesc = require_property_desc();
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      function set(target, propertyKey, V) {
        var receiver = arguments.length < 4 ? target : arguments[3];
        var ownDesc = gOPD.f(anObject(target), propertyKey);
        var existingDescriptor, proto;
        if (!ownDesc) {
          if (isObject2(proto = getPrototypeOf2(target))) {
            return set(proto, propertyKey, V, receiver);
          }
          ownDesc = createDesc(0);
        }
        if (has(ownDesc, "value")) {
          if (ownDesc.writable === false || !isObject2(receiver)) return false;
          if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
            existingDescriptor.value = V;
            dP.f(receiver, propertyKey, existingDescriptor);
          } else dP.f(receiver, propertyKey, createDesc(0, V));
          return true;
        }
        return ownDesc.set === void 0 ? false : (ownDesc.set.call(receiver, V), true);
      }
      $export($export.S, "Reflect", { set });
    }
  });

  // node_modules/core-js/modules/es6.reflect.set-prototype-of.js
  var require_es6_reflect_set_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.reflect.set-prototype-of.js"() {
      var $export = require_export();
      var setProto = require_set_proto();
      if (setProto) $export($export.S, "Reflect", {
        setPrototypeOf: function setPrototypeOf(target, proto) {
          setProto.check(target, proto);
          try {
            setProto.set(target, proto);
            return true;
          } catch (e) {
            return false;
          }
        }
      });
    }
  });

  // node_modules/core-js/es6/index.js
  var require_es6 = __commonJS({
    "node_modules/core-js/es6/index.js"(exports, module) {
      require_es6_symbol();
      require_es6_object_create();
      require_es6_object_define_property();
      require_es6_object_define_properties();
      require_es6_object_get_own_property_descriptor();
      require_es6_object_get_prototype_of();
      require_es6_object_keys();
      require_es6_object_get_own_property_names();
      require_es6_object_freeze();
      require_es6_object_seal();
      require_es6_object_prevent_extensions();
      require_es6_object_is_frozen();
      require_es6_object_is_sealed();
      require_es6_object_is_extensible();
      require_es6_object_assign();
      require_es6_object_is();
      require_es6_object_set_prototype_of();
      require_es6_object_to_string();
      require_es6_function_bind();
      require_es6_function_name();
      require_es6_function_has_instance();
      require_es6_parse_int();
      require_es6_parse_float();
      require_es6_number_constructor();
      require_es6_number_to_fixed();
      require_es6_number_to_precision();
      require_es6_number_epsilon();
      require_es6_number_is_finite();
      require_es6_number_is_integer();
      require_es6_number_is_nan();
      require_es6_number_is_safe_integer();
      require_es6_number_max_safe_integer();
      require_es6_number_min_safe_integer();
      require_es6_number_parse_float();
      require_es6_number_parse_int();
      require_es6_math_acosh();
      require_es6_math_asinh();
      require_es6_math_atanh();
      require_es6_math_cbrt();
      require_es6_math_clz32();
      require_es6_math_cosh();
      require_es6_math_expm1();
      require_es6_math_fround();
      require_es6_math_hypot();
      require_es6_math_imul();
      require_es6_math_log10();
      require_es6_math_log1p();
      require_es6_math_log2();
      require_es6_math_sign();
      require_es6_math_sinh();
      require_es6_math_tanh();
      require_es6_math_trunc();
      require_es6_string_from_code_point();
      require_es6_string_raw();
      require_es6_string_trim();
      require_es6_string_iterator();
      require_es6_string_code_point_at();
      require_es6_string_ends_with();
      require_es6_string_includes();
      require_es6_string_repeat();
      require_es6_string_starts_with();
      require_es6_string_anchor();
      require_es6_string_big();
      require_es6_string_blink();
      require_es6_string_bold();
      require_es6_string_fixed();
      require_es6_string_fontcolor();
      require_es6_string_fontsize();
      require_es6_string_italics();
      require_es6_string_link();
      require_es6_string_small();
      require_es6_string_strike();
      require_es6_string_sub();
      require_es6_string_sup();
      require_es6_date_now();
      require_es6_date_to_json();
      require_es6_date_to_iso_string();
      require_es6_date_to_string();
      require_es6_date_to_primitive();
      require_es6_array_is_array();
      require_es6_array_from();
      require_es6_array_of();
      require_es6_array_join();
      require_es6_array_slice();
      require_es6_array_sort();
      require_es6_array_for_each();
      require_es6_array_map();
      require_es6_array_filter();
      require_es6_array_some();
      require_es6_array_every();
      require_es6_array_reduce();
      require_es6_array_reduce_right();
      require_es6_array_index_of();
      require_es6_array_last_index_of();
      require_es6_array_copy_within();
      require_es6_array_fill();
      require_es6_array_find();
      require_es6_array_find_index();
      require_es6_array_species();
      require_es6_array_iterator();
      require_es6_regexp_constructor();
      require_es6_regexp_exec();
      require_es6_regexp_to_string();
      require_es6_regexp_flags();
      require_es6_regexp_match();
      require_es6_regexp_replace();
      require_es6_regexp_search();
      require_es6_regexp_split();
      require_es6_promise();
      require_es6_map();
      require_es6_set();
      require_es6_weak_map();
      require_es6_weak_set();
      require_es6_typed_array_buffer();
      require_es6_typed_data_view();
      require_es6_typed_int8_array();
      require_es6_typed_uint8_array();
      require_es6_typed_uint8_clamped_array();
      require_es6_typed_int16_array();
      require_es6_typed_uint16_array();
      require_es6_typed_int32_array();
      require_es6_typed_uint32_array();
      require_es6_typed_float32_array();
      require_es6_typed_float64_array();
      require_es6_reflect_apply();
      require_es6_reflect_construct();
      require_es6_reflect_define_property();
      require_es6_reflect_delete_property();
      require_es6_reflect_enumerate();
      require_es6_reflect_get();
      require_es6_reflect_get_own_property_descriptor();
      require_es6_reflect_get_prototype_of();
      require_es6_reflect_has();
      require_es6_reflect_is_extensible();
      require_es6_reflect_own_keys();
      require_es6_reflect_prevent_extensions();
      require_es6_reflect_set();
      require_es6_reflect_set_prototype_of();
      module.exports = require_core();
    }
  });

  // node_modules/core-js/modules/es7.array.includes.js
  var require_es7_array_includes = __commonJS({
    "node_modules/core-js/modules/es7.array.includes.js"() {
      "use strict";
      var $export = require_export();
      var $includes = require_array_includes()(true);
      $export($export.P, "Array", {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      require_add_to_unscopables()("includes");
    }
  });

  // node_modules/core-js/fn/array/includes.js
  var require_includes = __commonJS({
    "node_modules/core-js/fn/array/includes.js"(exports, module) {
      require_es7_array_includes();
      module.exports = require_core().Array.includes;
    }
  });

  // node_modules/core-js/modules/_flatten-into-array.js
  var require_flatten_into_array = __commonJS({
    "node_modules/core-js/modules/_flatten-into-array.js"(exports, module) {
      "use strict";
      var isArray2 = require_is_array();
      var isObject2 = require_is_object();
      var toLength = require_to_length();
      var ctx = require_ctx();
      var IS_CONCAT_SPREADABLE = require_wks()("isConcatSpreadable");
      function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
        var element, spreadable;
        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            spreadable = false;
            if (isObject2(element)) {
              spreadable = element[IS_CONCAT_SPREADABLE];
              spreadable = spreadable !== void 0 ? !!spreadable : isArray2(element);
            }
            if (spreadable && depth > 0) {
              targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 9007199254740991) throw TypeError();
              target[targetIndex] = element;
            }
            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      }
      module.exports = flattenIntoArray;
    }
  });

  // node_modules/core-js/modules/es7.array.flat-map.js
  var require_es7_array_flat_map = __commonJS({
    "node_modules/core-js/modules/es7.array.flat-map.js"() {
      "use strict";
      var $export = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var aFunction = require_a_function();
      var arraySpeciesCreate = require_array_species_create();
      $export($export.P, "Array", {
        flatMap: function flatMap(callbackfn) {
          var O = toObject(this);
          var sourceLen, A;
          aFunction(callbackfn);
          sourceLen = toLength(O.length);
          A = arraySpeciesCreate(O, 0);
          flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
          return A;
        }
      });
      require_add_to_unscopables()("flatMap");
    }
  });

  // node_modules/core-js/fn/array/flat-map.js
  var require_flat_map = __commonJS({
    "node_modules/core-js/fn/array/flat-map.js"(exports, module) {
      require_es7_array_flat_map();
      module.exports = require_core().Array.flatMap;
    }
  });

  // node_modules/core-js/modules/_string-pad.js
  var require_string_pad = __commonJS({
    "node_modules/core-js/modules/_string-pad.js"(exports, module) {
      var toLength = require_to_length();
      var repeat = require_string_repeat();
      var defined = require_defined();
      module.exports = function(that, maxLength, fillString, left) {
        var S = String(defined(that));
        var stringLength = S.length;
        var fillStr = fillString === void 0 ? " " : String(fillString);
        var intMaxLength = toLength(maxLength);
        if (intMaxLength <= stringLength || fillStr == "") return S;
        var fillLen = intMaxLength - stringLength;
        var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
        return left ? stringFiller + S : S + stringFiller;
      };
    }
  });

  // node_modules/core-js/modules/es7.string.pad-start.js
  var require_es7_string_pad_start = __commonJS({
    "node_modules/core-js/modules/es7.string.pad-start.js"() {
      "use strict";
      var $export = require_export();
      var $pad = require_string_pad();
      var userAgent = require_user_agent();
      var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
      $export($export.P + $export.F * WEBKIT_BUG, "String", {
        padStart: function padStart(maxLength) {
          return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, true);
        }
      });
    }
  });

  // node_modules/core-js/fn/string/pad-start.js
  var require_pad_start = __commonJS({
    "node_modules/core-js/fn/string/pad-start.js"(exports, module) {
      require_es7_string_pad_start();
      module.exports = require_core().String.padStart;
    }
  });

  // node_modules/core-js/modules/es7.string.pad-end.js
  var require_es7_string_pad_end = __commonJS({
    "node_modules/core-js/modules/es7.string.pad-end.js"() {
      "use strict";
      var $export = require_export();
      var $pad = require_string_pad();
      var userAgent = require_user_agent();
      var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
      $export($export.P + $export.F * WEBKIT_BUG, "String", {
        padEnd: function padEnd(maxLength) {
          return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, false);
        }
      });
    }
  });

  // node_modules/core-js/fn/string/pad-end.js
  var require_pad_end = __commonJS({
    "node_modules/core-js/fn/string/pad-end.js"(exports, module) {
      require_es7_string_pad_end();
      module.exports = require_core().String.padEnd;
    }
  });

  // node_modules/core-js/modules/es7.string.trim-left.js
  var require_es7_string_trim_left = __commonJS({
    "node_modules/core-js/modules/es7.string.trim-left.js"() {
      "use strict";
      require_string_trim()("trimLeft", function($trim) {
        return function trimLeft() {
          return $trim(this, 1);
        };
      }, "trimStart");
    }
  });

  // node_modules/core-js/fn/string/trim-start.js
  var require_trim_start = __commonJS({
    "node_modules/core-js/fn/string/trim-start.js"(exports, module) {
      require_es7_string_trim_left();
      module.exports = require_core().String.trimLeft;
    }
  });

  // node_modules/core-js/modules/es7.string.trim-right.js
  var require_es7_string_trim_right = __commonJS({
    "node_modules/core-js/modules/es7.string.trim-right.js"() {
      "use strict";
      require_string_trim()("trimRight", function($trim) {
        return function trimRight() {
          return $trim(this, 2);
        };
      }, "trimEnd");
    }
  });

  // node_modules/core-js/fn/string/trim-end.js
  var require_trim_end = __commonJS({
    "node_modules/core-js/fn/string/trim-end.js"(exports, module) {
      require_es7_string_trim_right();
      module.exports = require_core().String.trimRight;
    }
  });

  // node_modules/core-js/modules/es7.symbol.async-iterator.js
  var require_es7_symbol_async_iterator = __commonJS({
    "node_modules/core-js/modules/es7.symbol.async-iterator.js"() {
      require_wks_define()("asyncIterator");
    }
  });

  // node_modules/core-js/fn/symbol/async-iterator.js
  var require_async_iterator = __commonJS({
    "node_modules/core-js/fn/symbol/async-iterator.js"(exports, module) {
      require_es7_symbol_async_iterator();
      module.exports = require_wks_ext().f("asyncIterator");
    }
  });

  // node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
  var require_es7_object_get_own_property_descriptors = __commonJS({
    "node_modules/core-js/modules/es7.object.get-own-property-descriptors.js"() {
      var $export = require_export();
      var ownKeys = require_own_keys();
      var toIObject = require_to_iobject();
      var gOPD = require_object_gopd();
      var createProperty = require_create_property();
      $export($export.S, "Object", {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
          var O = toIObject(object);
          var getDesc = gOPD.f;
          var keys = ownKeys(O);
          var result = {};
          var i = 0;
          var key, desc;
          while (keys.length > i) {
            desc = getDesc(O, key = keys[i++]);
            if (desc !== void 0) createProperty(result, key, desc);
          }
          return result;
        }
      });
    }
  });

  // node_modules/core-js/fn/object/get-own-property-descriptors.js
  var require_get_own_property_descriptors = __commonJS({
    "node_modules/core-js/fn/object/get-own-property-descriptors.js"(exports, module) {
      require_es7_object_get_own_property_descriptors();
      module.exports = require_core().Object.getOwnPropertyDescriptors;
    }
  });

  // node_modules/core-js/modules/_object-to-array.js
  var require_object_to_array = __commonJS({
    "node_modules/core-js/modules/_object-to-array.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var getKeys = require_object_keys();
      var toIObject = require_to_iobject();
      var isEnum = require_object_pie().f;
      module.exports = function(isEntries) {
        return function(it) {
          var O = toIObject(it);
          var keys = getKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;
          while (length > i) {
            key = keys[i++];
            if (!DESCRIPTORS || isEnum.call(O, key)) {
              result.push(isEntries ? [key, O[key]] : O[key]);
            }
          }
          return result;
        };
      };
    }
  });

  // node_modules/core-js/modules/es7.object.values.js
  var require_es7_object_values = __commonJS({
    "node_modules/core-js/modules/es7.object.values.js"() {
      var $export = require_export();
      var $values = require_object_to_array()(false);
      $export($export.S, "Object", {
        values: function values(it) {
          return $values(it);
        }
      });
    }
  });

  // node_modules/core-js/fn/object/values.js
  var require_values = __commonJS({
    "node_modules/core-js/fn/object/values.js"(exports, module) {
      require_es7_object_values();
      module.exports = require_core().Object.values;
    }
  });

  // node_modules/core-js/modules/es7.object.entries.js
  var require_es7_object_entries = __commonJS({
    "node_modules/core-js/modules/es7.object.entries.js"() {
      var $export = require_export();
      var $entries = require_object_to_array()(true);
      $export($export.S, "Object", {
        entries: function entries(it) {
          return $entries(it);
        }
      });
    }
  });

  // node_modules/core-js/fn/object/entries.js
  var require_entries = __commonJS({
    "node_modules/core-js/fn/object/entries.js"(exports, module) {
      require_es7_object_entries();
      module.exports = require_core().Object.entries;
    }
  });

  // node_modules/core-js/modules/es7.promise.finally.js
  var require_es7_promise_finally = __commonJS({
    "node_modules/core-js/modules/es7.promise.finally.js"() {
      "use strict";
      var $export = require_export();
      var core = require_core();
      var global2 = require_global();
      var speciesConstructor = require_species_constructor();
      var promiseResolve = require_promise_resolve();
      $export($export.P + $export.R, "Promise", { "finally": function(onFinally) {
        var C = speciesConstructor(this, core.Promise || global2.Promise);
        var isFunction2 = typeof onFinally == "function";
        return this.then(
          isFunction2 ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
              return x;
            });
          } : onFinally,
          isFunction2 ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
              throw e;
            });
          } : onFinally
        );
      } });
    }
  });

  // node_modules/core-js/fn/promise/finally.js
  var require_finally = __commonJS({
    "node_modules/core-js/fn/promise/finally.js"(exports, module) {
      "use strict";
      require_es6_promise();
      require_es7_promise_finally();
      module.exports = require_core().Promise["finally"];
    }
  });

  // node_modules/core-js/modules/web.timers.js
  var require_web_timers = __commonJS({
    "node_modules/core-js/modules/web.timers.js"() {
      var global2 = require_global();
      var $export = require_export();
      var userAgent = require_user_agent();
      var slice = [].slice;
      var MSIE = /MSIE .\./.test(userAgent);
      var wrap = function(set) {
        return function(fn, time) {
          var boundArgs = arguments.length > 2;
          var args = boundArgs ? slice.call(arguments, 2) : false;
          return set(boundArgs ? function() {
            (typeof fn == "function" ? fn : Function(fn)).apply(this, args);
          } : fn, time);
        };
      };
      $export($export.G + $export.B + $export.F * MSIE, {
        setTimeout: wrap(global2.setTimeout),
        setInterval: wrap(global2.setInterval)
      });
    }
  });

  // node_modules/core-js/modules/web.immediate.js
  var require_web_immediate = __commonJS({
    "node_modules/core-js/modules/web.immediate.js"() {
      var $export = require_export();
      var $task = require_task();
      $export($export.G + $export.B, {
        setImmediate: $task.set,
        clearImmediate: $task.clear
      });
    }
  });

  // node_modules/core-js/modules/web.dom.iterable.js
  var require_web_dom_iterable = __commonJS({
    "node_modules/core-js/modules/web.dom.iterable.js"() {
      var $iterators = require_es6_array_iterator();
      var getKeys = require_object_keys();
      var redefine = require_redefine();
      var global2 = require_global();
      var hide = require_hide();
      var Iterators = require_iterators();
      var wks = require_wks();
      var ITERATOR = wks("iterator");
      var TO_STRING_TAG = wks("toStringTag");
      var ArrayValues = Iterators.Array;
      var DOMIterables = {
        CSSRuleList: true,
        // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true,
        // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true,
        // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      };
      for (collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        NAME = collections[i];
        explicit = DOMIterables[NAME];
        Collection = global2[NAME];
        proto = Collection && Collection.prototype;
        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = ArrayValues;
          if (explicit) {
            for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
          }
        }
      }
      var NAME;
      var explicit;
      var Collection;
      var proto;
      var key;
      var collections;
      var i;
    }
  });

  // node_modules/core-js/web/index.js
  var require_web = __commonJS({
    "node_modules/core-js/web/index.js"(exports, module) {
      require_web_timers();
      require_web_immediate();
      require_web_dom_iterable();
      module.exports = require_core();
    }
  });

  // node_modules/regenerator-runtime/runtime.js
  var require_runtime = __commonJS({
    "node_modules/regenerator-runtime/runtime.js"(exports, module) {
      var runtime = function(exports2) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var defineProperty = Object.defineProperty || function(obj, key, desc) {
          obj[key] = desc.value;
        };
        var undefined2;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define2(obj, key, value) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }
        try {
          define2({}, "");
        } catch (err) {
          define2 = function(obj, key, value) {
            return obj[key] = value;
          };
        }
        function wrap(innerFn, outerFn, self2, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self2, context) });
          return generator;
        }
        exports2.wrap = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var IteratorPrototype = {};
        define2(IteratorPrototype, iteratorSymbol, function() {
          return this;
        });
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
        defineProperty(
          GeneratorFunctionPrototype,
          "constructor",
          { value: GeneratorFunction, configurable: true }
        );
        GeneratorFunction.displayName = define2(
          GeneratorFunctionPrototype,
          toStringTagSymbol,
          "GeneratorFunction"
        );
        function defineIteratorMethods(prototype3) {
          ["next", "throw", "return"].forEach(function(method) {
            define2(prototype3, method, function(arg) {
              return this._invoke(method, arg);
            });
          });
        }
        exports2.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports2.mark = function(genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define2(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        exports2.awrap = function(arg) {
          return { __await: arg };
        };
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function(value2) {
                  invoke("next", value2, resolve, reject);
                }, function(err) {
                  invoke("throw", err, resolve, reject);
                });
              }
              return PromiseImpl.resolve(value).then(function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }, function(error) {
                return invoke("throw", error, resolve, reject);
              });
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
          }
          defineProperty(this, "_invoke", { value: enqueue });
        }
        defineIteratorMethods(AsyncIterator.prototype);
        define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
          return this;
        });
        exports2.AsyncIterator = AsyncIterator;
        exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self2, tryLocsList),
            PromiseImpl
          );
          return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
        };
        function makeInvokeMethod(innerFn, self2, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }
            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if (context.method === "next") {
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self2, context);
              if (record.type === "normal") {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) {
                  continue;
                }
                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method;
          var method = delegate.iterator[methodName];
          if (method === undefined2) {
            context.delegate = null;
            if (methodName === "throw" && delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined2;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                return ContinueSentinel;
              }
            }
            if (methodName !== "return") {
              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a '" + methodName + "' method"
              );
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined2;
            }
          } else {
            return info;
          }
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        define2(Gp, toStringTagSymbol, "Generator");
        define2(Gp, iteratorSymbol, function() {
          return this;
        });
        define2(Gp, "toString", function() {
          return "[object Generator]";
        });
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          if (1 in locs) {
            entry.catchLoc = locs[1];
          }
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        exports2.keys = function(val) {
          var object = Object(val);
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();
          return function next() {
            while (keys.length) {
              var key2 = keys.pop();
              if (key2 in object) {
                next.value = key2;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }
            if (typeof iterable.next === "function") {
              return iterable;
            }
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next2() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next2.value = iterable[i];
                    next2.done = false;
                    return next2;
                  }
                }
                next2.value = undefined2;
                next2.done = true;
                return next2;
              };
              return next.next = next;
            }
          }
          return { next: doneResult };
        }
        exports2.values = values;
        function doneResult() {
          return { value: undefined2, done: true };
        }
        Context.prototype = {
          constructor: Context,
          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined2;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined2;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
              for (var name in this) {
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined2;
                }
              }
            }
          },
          stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }
            return this.rval;
          },
          dispatchException: function(exception) {
            if (this.done) {
              throw exception;
            }
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined2;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if (entry.tryLoc === "root") {
                return handle("end");
              }
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              finallyEntry = null;
            }
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }
            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }
            return ContinueSentinel;
          },
          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            };
            if (this.method === "next") {
              this.arg = undefined2;
            }
            return ContinueSentinel;
          }
        };
        return exports2;
      }(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        typeof module === "object" ? module.exports : {}
      );
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/@babel/polyfill/lib/noConflict.js
  var require_noConflict = __commonJS({
    "node_modules/@babel/polyfill/lib/noConflict.js"() {
      "use strict";
      require_es6();
      require_includes();
      require_flat_map();
      require_pad_start();
      require_pad_end();
      require_trim_start();
      require_trim_end();
      require_async_iterator();
      require_get_own_property_descriptors();
      require_values();
      require_entries();
      require_finally();
      require_web();
      require_runtime();
    }
  });

  // node_modules/core-js/library/modules/_global.js
  var require_global2 = __commonJS({
    "node_modules/core-js/library/modules/_global.js"(exports, module) {
      var global2 = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
      if (typeof __g == "number") __g = global2;
    }
  });

  // node_modules/core-js/library/modules/_core.js
  var require_core2 = __commonJS({
    "node_modules/core-js/library/modules/_core.js"(exports, module) {
      var core = module.exports = { version: "2.6.12" };
      if (typeof __e == "number") __e = core;
    }
  });

  // node_modules/core-js/library/modules/_a-function.js
  var require_a_function2 = __commonJS({
    "node_modules/core-js/library/modules/_a-function.js"(exports, module) {
      module.exports = function(it) {
        if (typeof it != "function") throw TypeError(it + " is not a function!");
        return it;
      };
    }
  });

  // node_modules/core-js/library/modules/_ctx.js
  var require_ctx2 = __commonJS({
    "node_modules/core-js/library/modules/_ctx.js"(exports, module) {
      var aFunction = require_a_function2();
      module.exports = function(fn, that, length) {
        aFunction(fn);
        if (that === void 0) return fn;
        switch (length) {
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/library/modules/_is-object.js
  var require_is_object2 = __commonJS({
    "node_modules/core-js/library/modules/_is-object.js"(exports, module) {
      module.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
    }
  });

  // node_modules/core-js/library/modules/_an-object.js
  var require_an_object2 = __commonJS({
    "node_modules/core-js/library/modules/_an-object.js"(exports, module) {
      var isObject2 = require_is_object2();
      module.exports = function(it) {
        if (!isObject2(it)) throw TypeError(it + " is not an object!");
        return it;
      };
    }
  });

  // node_modules/core-js/library/modules/_fails.js
  var require_fails2 = __commonJS({
    "node_modules/core-js/library/modules/_fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/library/modules/_descriptors.js
  var require_descriptors2 = __commonJS({
    "node_modules/core-js/library/modules/_descriptors.js"(exports, module) {
      module.exports = !require_fails2()(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/library/modules/_dom-create.js
  var require_dom_create2 = __commonJS({
    "node_modules/core-js/library/modules/_dom-create.js"(exports, module) {
      var isObject2 = require_is_object2();
      var document2 = require_global2().document;
      var is = isObject2(document2) && isObject2(document2.createElement);
      module.exports = function(it) {
        return is ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/library/modules/_ie8-dom-define.js
  var require_ie8_dom_define2 = __commonJS({
    "node_modules/core-js/library/modules/_ie8-dom-define.js"(exports, module) {
      module.exports = !require_descriptors2() && !require_fails2()(function() {
        return Object.defineProperty(require_dom_create2()("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/library/modules/_to-primitive.js
  var require_to_primitive2 = __commonJS({
    "node_modules/core-js/library/modules/_to-primitive.js"(exports, module) {
      var isObject2 = require_is_object2();
      module.exports = function(it, S) {
        if (!isObject2(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == "function" && !isObject2(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/library/modules/_object-dp.js
  var require_object_dp2 = __commonJS({
    "node_modules/core-js/library/modules/_object-dp.js"(exports) {
      var anObject = require_an_object2();
      var IE8_DOM_DEFINE = require_ie8_dom_define2();
      var toPrimitive = require_to_primitive2();
      var dP = Object.defineProperty;
      exports.f = require_descriptors2() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {
        }
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/library/modules/_property-desc.js
  var require_property_desc2 = __commonJS({
    "node_modules/core-js/library/modules/_property-desc.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/library/modules/_hide.js
  var require_hide2 = __commonJS({
    "node_modules/core-js/library/modules/_hide.js"(exports, module) {
      var dP = require_object_dp2();
      var createDesc = require_property_desc2();
      module.exports = require_descriptors2() ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/library/modules/_has.js
  var require_has2 = __commonJS({
    "node_modules/core-js/library/modules/_has.js"(exports, module) {
      var hasOwnProperty2 = {}.hasOwnProperty;
      module.exports = function(it, key) {
        return hasOwnProperty2.call(it, key);
      };
    }
  });

  // node_modules/core-js/library/modules/_export.js
  var require_export2 = __commonJS({
    "node_modules/core-js/library/modules/_export.js"(exports, module) {
      var global2 = require_global2();
      var core = require_core2();
      var ctx = require_ctx2();
      var hide = require_hide2();
      var has = require_has2();
      var PROTOTYPE = "prototype";
      var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var IS_WRAP = type & $export.W;
        var exports2 = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports2[PROTOTYPE];
        var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name] : (global2[name] || {})[PROTOTYPE];
        var key, own, out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          own = !IS_FORCED && target && target[key] !== void 0;
          if (own && has(exports2, key)) continue;
          out = own ? target[key] : source[key];
          exports2[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global2) : IS_WRAP && target[key] == out ? function(C) {
            var F = function(a, b, c) {
              if (this instanceof C) {
                switch (arguments.length) {
                  case 0:
                    return new C();
                  case 1:
                    return new C(a);
                  case 2:
                    return new C(a, b);
                }
                return new C(a, b, c);
              }
              return C.apply(this, arguments);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
          }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
          if (IS_PROTO) {
            (exports2.virtual || (exports2.virtual = {}))[key] = out;
            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
          }
        }
      };
      $export.F = 1;
      $export.G = 2;
      $export.S = 4;
      $export.P = 8;
      $export.B = 16;
      $export.W = 32;
      $export.U = 64;
      $export.R = 128;
      module.exports = $export;
    }
  });

  // node_modules/core-js/library/modules/es7.global.js
  var require_es7_global = __commonJS({
    "node_modules/core-js/library/modules/es7.global.js"() {
      var $export = require_export2();
      $export($export.G, { global: require_global2() });
    }
  });

  // node_modules/core-js/library/fn/global.js
  var require_global3 = __commonJS({
    "node_modules/core-js/library/fn/global.js"(exports, module) {
      require_es7_global();
      module.exports = require_core2().global;
    }
  });

  // node_modules/leaflet/dist/leaflet-src.js
  var require_leaflet_src = __commonJS({
    "node_modules/leaflet/dist/leaflet-src.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.leaflet = {}));
      })(exports, function(exports2) {
        "use strict";
        var version = "1.9.4";
        function extend2(dest) {
          var i, j, len, src;
          for (j = 1, len = arguments.length; j < len; j++) {
            src = arguments[j];
            for (i in src) {
              dest[i] = src[i];
            }
          }
          return dest;
        }
        var create$2 = Object.create || /* @__PURE__ */ function() {
          function F() {
          }
          return function(proto) {
            F.prototype = proto;
            return new F();
          };
        }();
        function bind2(fn, obj) {
          var slice = Array.prototype.slice;
          if (fn.bind) {
            return fn.bind.apply(fn, slice.call(arguments, 1));
          }
          var args = slice.call(arguments, 2);
          return function() {
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
          };
        }
        var lastId = 0;
        function stamp(obj) {
          if (!("_leaflet_id" in obj)) {
            obj["_leaflet_id"] = ++lastId;
          }
          return obj._leaflet_id;
        }
        function throttle2(fn, time, context) {
          var lock, args, wrapperFn, later;
          later = function() {
            lock = false;
            if (args) {
              wrapperFn.apply(context, args);
              args = false;
            }
          };
          wrapperFn = function() {
            if (lock) {
              args = arguments;
            } else {
              fn.apply(context, arguments);
              setTimeout(later, time);
              lock = true;
            }
          };
          return wrapperFn;
        }
        function wrapNum(x, range, includeMax) {
          var max = range[1], min = range[0], d = max - min;
          return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
        }
        function falseFn() {
          return false;
        }
        function formatNum(num, precision) {
          if (precision === false) {
            return num;
          }
          var pow = Math.pow(10, precision === void 0 ? 6 : precision);
          return Math.round(num * pow) / pow;
        }
        function trim2(str) {
          return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
        }
        function splitWords(str) {
          return trim2(str).split(/\s+/);
        }
        function setOptions(obj, options) {
          if (!Object.prototype.hasOwnProperty.call(obj, "options")) {
            obj.options = obj.options ? create$2(obj.options) : {};
          }
          for (var i in options) {
            obj.options[i] = options[i];
          }
          return obj.options;
        }
        function getParamString(obj, existingUrl, uppercase) {
          var params = [];
          for (var i in obj) {
            params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + "=" + encodeURIComponent(obj[i]));
          }
          return (!existingUrl || existingUrl.indexOf("?") === -1 ? "?" : "&") + params.join("&");
        }
        var templateRe = /\{ *([\w_ -]+) *\}/g;
        function template(str, data) {
          return str.replace(templateRe, function(str2, key) {
            var value = data[key];
            if (value === void 0) {
              throw new Error("No value provided for variable " + str2);
            } else if (typeof value === "function") {
              value = value(data);
            }
            return value;
          });
        }
        var isArray2 = Array.isArray || function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
        function indexOf(array, el) {
          for (var i = 0; i < array.length; i++) {
            if (array[i] === el) {
              return i;
            }
          }
          return -1;
        }
        var emptyImageUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function getPrefixed(name) {
          return window["webkit" + name] || window["moz" + name] || window["ms" + name];
        }
        var lastTime = 0;
        function timeoutDefer(fn) {
          var time = +/* @__PURE__ */ new Date(), timeToCall = Math.max(0, 16 - (time - lastTime));
          lastTime = time + timeToCall;
          return window.setTimeout(fn, timeToCall);
        }
        var requestFn = window.requestAnimationFrame || getPrefixed("RequestAnimationFrame") || timeoutDefer;
        var cancelFn = window.cancelAnimationFrame || getPrefixed("CancelAnimationFrame") || getPrefixed("CancelRequestAnimationFrame") || function(id) {
          window.clearTimeout(id);
        };
        function requestAnimFrame(fn, context, immediate) {
          if (immediate && requestFn === timeoutDefer) {
            fn.call(context);
          } else {
            return requestFn.call(window, bind2(fn, context));
          }
        }
        function cancelAnimFrame(id) {
          if (id) {
            cancelFn.call(window, id);
          }
        }
        var Util = {
          __proto__: null,
          extend: extend2,
          create: create$2,
          bind: bind2,
          get lastId() {
            return lastId;
          },
          stamp,
          throttle: throttle2,
          wrapNum,
          falseFn,
          formatNum,
          trim: trim2,
          splitWords,
          setOptions,
          getParamString,
          template,
          isArray: isArray2,
          indexOf,
          emptyImageUrl,
          requestFn,
          cancelFn,
          requestAnimFrame,
          cancelAnimFrame
        };
        function Class() {
        }
        Class.extend = function(props) {
          var NewClass = function() {
            setOptions(this);
            if (this.initialize) {
              this.initialize.apply(this, arguments);
            }
            this.callInitHooks();
          };
          var parentProto = NewClass.__super__ = this.prototype;
          var proto = create$2(parentProto);
          proto.constructor = NewClass;
          NewClass.prototype = proto;
          for (var i in this) {
            if (Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__") {
              NewClass[i] = this[i];
            }
          }
          if (props.statics) {
            extend2(NewClass, props.statics);
          }
          if (props.includes) {
            checkDeprecatedMixinEvents(props.includes);
            extend2.apply(null, [proto].concat(props.includes));
          }
          extend2(proto, props);
          delete proto.statics;
          delete proto.includes;
          if (proto.options) {
            proto.options = parentProto.options ? create$2(parentProto.options) : {};
            extend2(proto.options, props.options);
          }
          proto._initHooks = [];
          proto.callInitHooks = function() {
            if (this._initHooksCalled) {
              return;
            }
            if (parentProto.callInitHooks) {
              parentProto.callInitHooks.call(this);
            }
            this._initHooksCalled = true;
            for (var i2 = 0, len = proto._initHooks.length; i2 < len; i2++) {
              proto._initHooks[i2].call(this);
            }
          };
          return NewClass;
        };
        Class.include = function(props) {
          var parentOptions = this.prototype.options;
          extend2(this.prototype, props);
          if (props.options) {
            this.prototype.options = parentOptions;
            this.mergeOptions(props.options);
          }
          return this;
        };
        Class.mergeOptions = function(options) {
          extend2(this.prototype.options, options);
          return this;
        };
        Class.addInitHook = function(fn) {
          var args = Array.prototype.slice.call(arguments, 1);
          var init = typeof fn === "function" ? fn : function() {
            this[fn].apply(this, args);
          };
          this.prototype._initHooks = this.prototype._initHooks || [];
          this.prototype._initHooks.push(init);
          return this;
        };
        function checkDeprecatedMixinEvents(includes) {
          if (typeof L === "undefined" || !L || !L.Mixin) {
            return;
          }
          includes = isArray2(includes) ? includes : [includes];
          for (var i = 0; i < includes.length; i++) {
            if (includes[i] === L.Mixin.Events) {
              console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
            }
          }
        }
        var Events = {
          /* @method on(type: String, fn: Function, context?: Object): this
           * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
           *
           * @alternative
           * @method on(eventMap: Object): this
           * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
           */
          on: function(types, fn, context) {
            if (typeof types === "object") {
              for (var type in types) {
                this._on(type, types[type], fn);
              }
            } else {
              types = splitWords(types);
              for (var i = 0, len = types.length; i < len; i++) {
                this._on(types[i], fn, context);
              }
            }
            return this;
          },
          /* @method off(type: String, fn?: Function, context?: Object): this
           * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
           *
           * @alternative
           * @method off(eventMap: Object): this
           * Removes a set of type/listener pairs.
           *
           * @alternative
           * @method off: this
           * Removes all listeners to all events on the object. This includes implicitly attached events.
           */
          off: function(types, fn, context) {
            if (!arguments.length) {
              delete this._events;
            } else if (typeof types === "object") {
              for (var type in types) {
                this._off(type, types[type], fn);
              }
            } else {
              types = splitWords(types);
              var removeAll = arguments.length === 1;
              for (var i = 0, len = types.length; i < len; i++) {
                if (removeAll) {
                  this._off(types[i]);
                } else {
                  this._off(types[i], fn, context);
                }
              }
            }
            return this;
          },
          // attach listener (without syntactic sugar now)
          _on: function(type, fn, context, _once) {
            if (typeof fn !== "function") {
              console.warn("wrong listener type: " + typeof fn);
              return;
            }
            if (this._listens(type, fn, context) !== false) {
              return;
            }
            if (context === this) {
              context = void 0;
            }
            var newListener = { fn, ctx: context };
            if (_once) {
              newListener.once = true;
            }
            this._events = this._events || {};
            this._events[type] = this._events[type] || [];
            this._events[type].push(newListener);
          },
          _off: function(type, fn, context) {
            var listeners, i, len;
            if (!this._events) {
              return;
            }
            listeners = this._events[type];
            if (!listeners) {
              return;
            }
            if (arguments.length === 1) {
              if (this._firingCount) {
                for (i = 0, len = listeners.length; i < len; i++) {
                  listeners[i].fn = falseFn;
                }
              }
              delete this._events[type];
              return;
            }
            if (typeof fn !== "function") {
              console.warn("wrong listener type: " + typeof fn);
              return;
            }
            var index2 = this._listens(type, fn, context);
            if (index2 !== false) {
              var listener = listeners[index2];
              if (this._firingCount) {
                listener.fn = falseFn;
                this._events[type] = listeners = listeners.slice();
              }
              listeners.splice(index2, 1);
            }
          },
          // @method fire(type: String, data?: Object, propagate?: Boolean): this
          // Fires an event of the specified type. You can optionally provide a data
          // object — the first argument of the listener function will contain its
          // properties. The event can optionally be propagated to event parents.
          fire: function(type, data, propagate) {
            if (!this.listens(type, propagate)) {
              return this;
            }
            var event = extend2({}, data, {
              type,
              target: this,
              sourceTarget: data && data.sourceTarget || this
            });
            if (this._events) {
              var listeners = this._events[type];
              if (listeners) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var i = 0, len = listeners.length; i < len; i++) {
                  var l = listeners[i];
                  var fn = l.fn;
                  if (l.once) {
                    this.off(type, fn, l.ctx);
                  }
                  fn.call(l.ctx || this, event);
                }
                this._firingCount--;
              }
            }
            if (propagate) {
              this._propagateEvent(event);
            }
            return this;
          },
          // @method listens(type: String, propagate?: Boolean): Boolean
          // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
          // Returns `true` if a particular event type has any listeners attached to it.
          // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
          listens: function(type, fn, context, propagate) {
            if (typeof type !== "string") {
              console.warn('"string" type argument expected');
            }
            var _fn = fn;
            if (typeof fn !== "function") {
              propagate = !!fn;
              _fn = void 0;
              context = void 0;
            }
            var listeners = this._events && this._events[type];
            if (listeners && listeners.length) {
              if (this._listens(type, _fn, context) !== false) {
                return true;
              }
            }
            if (propagate) {
              for (var id in this._eventParents) {
                if (this._eventParents[id].listens(type, fn, context, propagate)) {
                  return true;
                }
              }
            }
            return false;
          },
          // returns the index (number) or false
          _listens: function(type, fn, context) {
            if (!this._events) {
              return false;
            }
            var listeners = this._events[type] || [];
            if (!fn) {
              return !!listeners.length;
            }
            if (context === this) {
              context = void 0;
            }
            for (var i = 0, len = listeners.length; i < len; i++) {
              if (listeners[i].fn === fn && listeners[i].ctx === context) {
                return i;
              }
            }
            return false;
          },
          // @method once(…): this
          // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
          once: function(types, fn, context) {
            if (typeof types === "object") {
              for (var type in types) {
                this._on(type, types[type], fn, true);
              }
            } else {
              types = splitWords(types);
              for (var i = 0, len = types.length; i < len; i++) {
                this._on(types[i], fn, context, true);
              }
            }
            return this;
          },
          // @method addEventParent(obj: Evented): this
          // Adds an event parent - an `Evented` that will receive propagated events
          addEventParent: function(obj) {
            this._eventParents = this._eventParents || {};
            this._eventParents[stamp(obj)] = obj;
            return this;
          },
          // @method removeEventParent(obj: Evented): this
          // Removes an event parent, so it will stop receiving propagated events
          removeEventParent: function(obj) {
            if (this._eventParents) {
              delete this._eventParents[stamp(obj)];
            }
            return this;
          },
          _propagateEvent: function(e) {
            for (var id in this._eventParents) {
              this._eventParents[id].fire(e.type, extend2({
                layer: e.target,
                propagatedFrom: e.target
              }, e), true);
            }
          }
        };
        Events.addEventListener = Events.on;
        Events.removeEventListener = Events.clearAllEventListeners = Events.off;
        Events.addOneTimeEventListener = Events.once;
        Events.fireEvent = Events.fire;
        Events.hasEventListeners = Events.listens;
        var Evented = Class.extend(Events);
        function Point(x, y, round) {
          this.x = round ? Math.round(x) : x;
          this.y = round ? Math.round(y) : y;
        }
        var trunc = Math.trunc || function(v) {
          return v > 0 ? Math.floor(v) : Math.ceil(v);
        };
        Point.prototype = {
          // @method clone(): Point
          // Returns a copy of the current point.
          clone: function() {
            return new Point(this.x, this.y);
          },
          // @method add(otherPoint: Point): Point
          // Returns the result of addition of the current and the given points.
          add: function(point) {
            return this.clone()._add(toPoint(point));
          },
          _add: function(point) {
            this.x += point.x;
            this.y += point.y;
            return this;
          },
          // @method subtract(otherPoint: Point): Point
          // Returns the result of subtraction of the given point from the current.
          subtract: function(point) {
            return this.clone()._subtract(toPoint(point));
          },
          _subtract: function(point) {
            this.x -= point.x;
            this.y -= point.y;
            return this;
          },
          // @method divideBy(num: Number): Point
          // Returns the result of division of the current point by the given number.
          divideBy: function(num) {
            return this.clone()._divideBy(num);
          },
          _divideBy: function(num) {
            this.x /= num;
            this.y /= num;
            return this;
          },
          // @method multiplyBy(num: Number): Point
          // Returns the result of multiplication of the current point by the given number.
          multiplyBy: function(num) {
            return this.clone()._multiplyBy(num);
          },
          _multiplyBy: function(num) {
            this.x *= num;
            this.y *= num;
            return this;
          },
          // @method scaleBy(scale: Point): Point
          // Multiply each coordinate of the current point by each coordinate of
          // `scale`. In linear algebra terms, multiply the point by the
          // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
          // defined by `scale`.
          scaleBy: function(point) {
            return new Point(this.x * point.x, this.y * point.y);
          },
          // @method unscaleBy(scale: Point): Point
          // Inverse of `scaleBy`. Divide each coordinate of the current point by
          // each coordinate of `scale`.
          unscaleBy: function(point) {
            return new Point(this.x / point.x, this.y / point.y);
          },
          // @method round(): Point
          // Returns a copy of the current point with rounded coordinates.
          round: function() {
            return this.clone()._round();
          },
          _round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
          },
          // @method floor(): Point
          // Returns a copy of the current point with floored coordinates (rounded down).
          floor: function() {
            return this.clone()._floor();
          },
          _floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
          },
          // @method ceil(): Point
          // Returns a copy of the current point with ceiled coordinates (rounded up).
          ceil: function() {
            return this.clone()._ceil();
          },
          _ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
          },
          // @method trunc(): Point
          // Returns a copy of the current point with truncated coordinates (rounded towards zero).
          trunc: function() {
            return this.clone()._trunc();
          },
          _trunc: function() {
            this.x = trunc(this.x);
            this.y = trunc(this.y);
            return this;
          },
          // @method distanceTo(otherPoint: Point): Number
          // Returns the cartesian distance between the current and the given points.
          distanceTo: function(point) {
            point = toPoint(point);
            var x = point.x - this.x, y = point.y - this.y;
            return Math.sqrt(x * x + y * y);
          },
          // @method equals(otherPoint: Point): Boolean
          // Returns `true` if the given point has the same coordinates.
          equals: function(point) {
            point = toPoint(point);
            return point.x === this.x && point.y === this.y;
          },
          // @method contains(otherPoint: Point): Boolean
          // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
          contains: function(point) {
            point = toPoint(point);
            return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
          },
          // @method toString(): String
          // Returns a string representation of the point for debugging purposes.
          toString: function() {
            return "Point(" + formatNum(this.x) + ", " + formatNum(this.y) + ")";
          }
        };
        function toPoint(x, y, round) {
          if (x instanceof Point) {
            return x;
          }
          if (isArray2(x)) {
            return new Point(x[0], x[1]);
          }
          if (x === void 0 || x === null) {
            return x;
          }
          if (typeof x === "object" && "x" in x && "y" in x) {
            return new Point(x.x, x.y);
          }
          return new Point(x, y, round);
        }
        function Bounds(a, b) {
          if (!a) {
            return;
          }
          var points = b ? [a, b] : a;
          for (var i = 0, len = points.length; i < len; i++) {
            this.extend(points[i]);
          }
        }
        Bounds.prototype = {
          // @method extend(point: Point): this
          // Extends the bounds to contain the given point.
          // @alternative
          // @method extend(otherBounds: Bounds): this
          // Extend the bounds to contain the given bounds
          extend: function(obj) {
            var min2, max2;
            if (!obj) {
              return this;
            }
            if (obj instanceof Point || typeof obj[0] === "number" || "x" in obj) {
              min2 = max2 = toPoint(obj);
            } else {
              obj = toBounds(obj);
              min2 = obj.min;
              max2 = obj.max;
              if (!min2 || !max2) {
                return this;
              }
            }
            if (!this.min && !this.max) {
              this.min = min2.clone();
              this.max = max2.clone();
            } else {
              this.min.x = Math.min(min2.x, this.min.x);
              this.max.x = Math.max(max2.x, this.max.x);
              this.min.y = Math.min(min2.y, this.min.y);
              this.max.y = Math.max(max2.y, this.max.y);
            }
            return this;
          },
          // @method getCenter(round?: Boolean): Point
          // Returns the center point of the bounds.
          getCenter: function(round) {
            return toPoint(
              (this.min.x + this.max.x) / 2,
              (this.min.y + this.max.y) / 2,
              round
            );
          },
          // @method getBottomLeft(): Point
          // Returns the bottom-left point of the bounds.
          getBottomLeft: function() {
            return toPoint(this.min.x, this.max.y);
          },
          // @method getTopRight(): Point
          // Returns the top-right point of the bounds.
          getTopRight: function() {
            return toPoint(this.max.x, this.min.y);
          },
          // @method getTopLeft(): Point
          // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
          getTopLeft: function() {
            return this.min;
          },
          // @method getBottomRight(): Point
          // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
          getBottomRight: function() {
            return this.max;
          },
          // @method getSize(): Point
          // Returns the size of the given bounds
          getSize: function() {
            return this.max.subtract(this.min);
          },
          // @method contains(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle contains the given one.
          // @alternative
          // @method contains(point: Point): Boolean
          // Returns `true` if the rectangle contains the given point.
          contains: function(obj) {
            var min, max;
            if (typeof obj[0] === "number" || obj instanceof Point) {
              obj = toPoint(obj);
            } else {
              obj = toBounds(obj);
            }
            if (obj instanceof Bounds) {
              min = obj.min;
              max = obj.max;
            } else {
              min = max = obj;
            }
            return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
          },
          // @method intersects(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle intersects the given bounds. Two bounds
          // intersect if they have at least one point in common.
          intersects: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xIntersects = max2.x >= min.x && min2.x <= max.x, yIntersects = max2.y >= min.y && min2.y <= max.y;
            return xIntersects && yIntersects;
          },
          // @method overlaps(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle overlaps the given bounds. Two bounds
          // overlap if their intersection is an area.
          overlaps: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xOverlaps = max2.x > min.x && min2.x < max.x, yOverlaps = max2.y > min.y && min2.y < max.y;
            return xOverlaps && yOverlaps;
          },
          // @method isValid(): Boolean
          // Returns `true` if the bounds are properly initialized.
          isValid: function() {
            return !!(this.min && this.max);
          },
          // @method pad(bufferRatio: Number): Bounds
          // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
          // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
          // Negative values will retract the bounds.
          pad: function(bufferRatio) {
            var min = this.min, max = this.max, heightBuffer = Math.abs(min.x - max.x) * bufferRatio, widthBuffer = Math.abs(min.y - max.y) * bufferRatio;
            return toBounds(
              toPoint(min.x - heightBuffer, min.y - widthBuffer),
              toPoint(max.x + heightBuffer, max.y + widthBuffer)
            );
          },
          // @method equals(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle is equivalent to the given bounds.
          equals: function(bounds) {
            if (!bounds) {
              return false;
            }
            bounds = toBounds(bounds);
            return this.min.equals(bounds.getTopLeft()) && this.max.equals(bounds.getBottomRight());
          }
        };
        function toBounds(a, b) {
          if (!a || a instanceof Bounds) {
            return a;
          }
          return new Bounds(a, b);
        }
        function LatLngBounds(corner1, corner2) {
          if (!corner1) {
            return;
          }
          var latlngs = corner2 ? [corner1, corner2] : corner1;
          for (var i = 0, len = latlngs.length; i < len; i++) {
            this.extend(latlngs[i]);
          }
        }
        LatLngBounds.prototype = {
          // @method extend(latlng: LatLng): this
          // Extend the bounds to contain the given point
          // @alternative
          // @method extend(otherBounds: LatLngBounds): this
          // Extend the bounds to contain the given bounds
          extend: function(obj) {
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLng) {
              sw2 = obj;
              ne2 = obj;
            } else if (obj instanceof LatLngBounds) {
              sw2 = obj._southWest;
              ne2 = obj._northEast;
              if (!sw2 || !ne2) {
                return this;
              }
            } else {
              return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
            }
            if (!sw && !ne) {
              this._southWest = new LatLng(sw2.lat, sw2.lng);
              this._northEast = new LatLng(ne2.lat, ne2.lng);
            } else {
              sw.lat = Math.min(sw2.lat, sw.lat);
              sw.lng = Math.min(sw2.lng, sw.lng);
              ne.lat = Math.max(ne2.lat, ne.lat);
              ne.lng = Math.max(ne2.lng, ne.lng);
            }
            return this;
          },
          // @method pad(bufferRatio: Number): LatLngBounds
          // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
          // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
          // Negative values will retract the bounds.
          pad: function(bufferRatio) {
            var sw = this._southWest, ne = this._northEast, heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio, widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
            return new LatLngBounds(
              new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
              new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer)
            );
          },
          // @method getCenter(): LatLng
          // Returns the center point of the bounds.
          getCenter: function() {
            return new LatLng(
              (this._southWest.lat + this._northEast.lat) / 2,
              (this._southWest.lng + this._northEast.lng) / 2
            );
          },
          // @method getSouthWest(): LatLng
          // Returns the south-west point of the bounds.
          getSouthWest: function() {
            return this._southWest;
          },
          // @method getNorthEast(): LatLng
          // Returns the north-east point of the bounds.
          getNorthEast: function() {
            return this._northEast;
          },
          // @method getNorthWest(): LatLng
          // Returns the north-west point of the bounds.
          getNorthWest: function() {
            return new LatLng(this.getNorth(), this.getWest());
          },
          // @method getSouthEast(): LatLng
          // Returns the south-east point of the bounds.
          getSouthEast: function() {
            return new LatLng(this.getSouth(), this.getEast());
          },
          // @method getWest(): Number
          // Returns the west longitude of the bounds
          getWest: function() {
            return this._southWest.lng;
          },
          // @method getSouth(): Number
          // Returns the south latitude of the bounds
          getSouth: function() {
            return this._southWest.lat;
          },
          // @method getEast(): Number
          // Returns the east longitude of the bounds
          getEast: function() {
            return this._northEast.lng;
          },
          // @method getNorth(): Number
          // Returns the north latitude of the bounds
          getNorth: function() {
            return this._northEast.lat;
          },
          // @method contains(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle contains the given one.
          // @alternative
          // @method contains (latlng: LatLng): Boolean
          // Returns `true` if the rectangle contains the given point.
          contains: function(obj) {
            if (typeof obj[0] === "number" || obj instanceof LatLng || "lat" in obj) {
              obj = toLatLng(obj);
            } else {
              obj = toLatLngBounds(obj);
            }
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLngBounds) {
              sw2 = obj.getSouthWest();
              ne2 = obj.getNorthEast();
            } else {
              sw2 = ne2 = obj;
            }
            return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
          },
          // @method intersects(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
          intersects: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat, lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
            return latIntersects && lngIntersects;
          },
          // @method overlaps(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
          overlaps: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat, lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
            return latOverlaps && lngOverlaps;
          },
          // @method toBBoxString(): String
          // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
          toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
          },
          // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
          // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
          equals: function(bounds, maxMargin) {
            if (!bounds) {
              return false;
            }
            bounds = toLatLngBounds(bounds);
            return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
          },
          // @method isValid(): Boolean
          // Returns `true` if the bounds are properly initialized.
          isValid: function() {
            return !!(this._southWest && this._northEast);
          }
        };
        function toLatLngBounds(a, b) {
          if (a instanceof LatLngBounds) {
            return a;
          }
          return new LatLngBounds(a, b);
        }
        function LatLng(lat, lng, alt) {
          if (isNaN(lat) || isNaN(lng)) {
            throw new Error("Invalid LatLng object: (" + lat + ", " + lng + ")");
          }
          this.lat = +lat;
          this.lng = +lng;
          if (alt !== void 0) {
            this.alt = +alt;
          }
        }
        LatLng.prototype = {
          // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
          // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
          equals: function(obj, maxMargin) {
            if (!obj) {
              return false;
            }
            obj = toLatLng(obj);
            var margin = Math.max(
              Math.abs(this.lat - obj.lat),
              Math.abs(this.lng - obj.lng)
            );
            return margin <= (maxMargin === void 0 ? 1e-9 : maxMargin);
          },
          // @method toString(): String
          // Returns a string representation of the point (for debugging purposes).
          toString: function(precision) {
            return "LatLng(" + formatNum(this.lat, precision) + ", " + formatNum(this.lng, precision) + ")";
          },
          // @method distanceTo(otherLatLng: LatLng): Number
          // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
          distanceTo: function(other) {
            return Earth.distance(this, toLatLng(other));
          },
          // @method wrap(): LatLng
          // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
          wrap: function() {
            return Earth.wrapLatLng(this);
          },
          // @method toBounds(sizeInMeters: Number): LatLngBounds
          // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
          toBounds: function(sizeInMeters) {
            var latAccuracy = 180 * sizeInMeters / 40075017, lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
            return toLatLngBounds(
              [this.lat - latAccuracy, this.lng - lngAccuracy],
              [this.lat + latAccuracy, this.lng + lngAccuracy]
            );
          },
          clone: function() {
            return new LatLng(this.lat, this.lng, this.alt);
          }
        };
        function toLatLng(a, b, c) {
          if (a instanceof LatLng) {
            return a;
          }
          if (isArray2(a) && typeof a[0] !== "object") {
            if (a.length === 3) {
              return new LatLng(a[0], a[1], a[2]);
            }
            if (a.length === 2) {
              return new LatLng(a[0], a[1]);
            }
            return null;
          }
          if (a === void 0 || a === null) {
            return a;
          }
          if (typeof a === "object" && "lat" in a) {
            return new LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt);
          }
          if (b === void 0) {
            return null;
          }
          return new LatLng(a, b, c);
        }
        var CRS = {
          // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
          // Projects geographical coordinates into pixel coordinates for a given zoom.
          latLngToPoint: function(latlng, zoom2) {
            var projectedPoint = this.projection.project(latlng), scale2 = this.scale(zoom2);
            return this.transformation._transform(projectedPoint, scale2);
          },
          // @method pointToLatLng(point: Point, zoom: Number): LatLng
          // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
          // zoom into geographical coordinates.
          pointToLatLng: function(point, zoom2) {
            var scale2 = this.scale(zoom2), untransformedPoint = this.transformation.untransform(point, scale2);
            return this.projection.unproject(untransformedPoint);
          },
          // @method project(latlng: LatLng): Point
          // Projects geographical coordinates into coordinates in units accepted for
          // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
          project: function(latlng) {
            return this.projection.project(latlng);
          },
          // @method unproject(point: Point): LatLng
          // Given a projected coordinate returns the corresponding LatLng.
          // The inverse of `project`.
          unproject: function(point) {
            return this.projection.unproject(point);
          },
          // @method scale(zoom: Number): Number
          // Returns the scale used when transforming projected coordinates into
          // pixel coordinates for a particular zoom. For example, it returns
          // `256 * 2^zoom` for Mercator-based CRS.
          scale: function(zoom2) {
            return 256 * Math.pow(2, zoom2);
          },
          // @method zoom(scale: Number): Number
          // Inverse of `scale()`, returns the zoom level corresponding to a scale
          // factor of `scale`.
          zoom: function(scale2) {
            return Math.log(scale2 / 256) / Math.LN2;
          },
          // @method getProjectedBounds(zoom: Number): Bounds
          // Returns the projection's bounds scaled and transformed for the provided `zoom`.
          getProjectedBounds: function(zoom2) {
            if (this.infinite) {
              return null;
            }
            var b = this.projection.bounds, s = this.scale(zoom2), min = this.transformation.transform(b.min, s), max = this.transformation.transform(b.max, s);
            return new Bounds(min, max);
          },
          // @method distance(latlng1: LatLng, latlng2: LatLng): Number
          // Returns the distance between two geographical coordinates.
          // @property code: String
          // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
          //
          // @property wrapLng: Number[]
          // An array of two numbers defining whether the longitude (horizontal) coordinate
          // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
          // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
          //
          // @property wrapLat: Number[]
          // Like `wrapLng`, but for the latitude (vertical) axis.
          // wrapLng: [min, max],
          // wrapLat: [min, max],
          // @property infinite: Boolean
          // If true, the coordinate space will be unbounded (infinite in both axes)
          infinite: false,
          // @method wrapLatLng(latlng: LatLng): LatLng
          // Returns a `LatLng` where lat and lng has been wrapped according to the
          // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
          wrapLatLng: function(latlng) {
            var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng, lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat, alt = latlng.alt;
            return new LatLng(lat, lng, alt);
          },
          // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
          // Returns a `LatLngBounds` with the same size as the given one, ensuring
          // that its center is within the CRS's bounds.
          // Only accepts actual `L.LatLngBounds` instances, not arrays.
          wrapLatLngBounds: function(bounds) {
            var center = bounds.getCenter(), newCenter = this.wrapLatLng(center), latShift = center.lat - newCenter.lat, lngShift = center.lng - newCenter.lng;
            if (latShift === 0 && lngShift === 0) {
              return bounds;
            }
            var sw = bounds.getSouthWest(), ne = bounds.getNorthEast(), newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift), newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
            return new LatLngBounds(newSw, newNe);
          }
        };
        var Earth = extend2({}, CRS, {
          wrapLng: [-180, 180],
          // Mean Earth Radius, as recommended for use by
          // the International Union of Geodesy and Geophysics,
          // see https://rosettacode.org/wiki/Haversine_formula
          R: 6371e3,
          // distance between two geographical points using spherical law of cosines approximation
          distance: function(latlng1, latlng2) {
            var rad = Math.PI / 180, lat1 = latlng1.lat * rad, lat2 = latlng2.lat * rad, sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2), sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * c;
          }
        });
        var earthRadius = 6378137;
        var SphericalMercator = {
          R: earthRadius,
          MAX_LATITUDE: 85.0511287798,
          project: function(latlng) {
            var d = Math.PI / 180, max = this.MAX_LATITUDE, lat = Math.max(Math.min(max, latlng.lat), -max), sin = Math.sin(lat * d);
            return new Point(
              this.R * latlng.lng * d,
              this.R * Math.log((1 + sin) / (1 - sin)) / 2
            );
          },
          unproject: function(point) {
            var d = 180 / Math.PI;
            return new LatLng(
              (2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d,
              point.x * d / this.R
            );
          },
          bounds: function() {
            var d = earthRadius * Math.PI;
            return new Bounds([-d, -d], [d, d]);
          }()
        };
        function Transformation(a, b, c, d) {
          if (isArray2(a)) {
            this._a = a[0];
            this._b = a[1];
            this._c = a[2];
            this._d = a[3];
            return;
          }
          this._a = a;
          this._b = b;
          this._c = c;
          this._d = d;
        }
        Transformation.prototype = {
          // @method transform(point: Point, scale?: Number): Point
          // Returns a transformed point, optionally multiplied by the given scale.
          // Only accepts actual `L.Point` instances, not arrays.
          transform: function(point, scale2) {
            return this._transform(point.clone(), scale2);
          },
          // destructive transform (faster)
          _transform: function(point, scale2) {
            scale2 = scale2 || 1;
            point.x = scale2 * (this._a * point.x + this._b);
            point.y = scale2 * (this._c * point.y + this._d);
            return point;
          },
          // @method untransform(point: Point, scale?: Number): Point
          // Returns the reverse transformation of the given point, optionally divided
          // by the given scale. Only accepts actual `L.Point` instances, not arrays.
          untransform: function(point, scale2) {
            scale2 = scale2 || 1;
            return new Point(
              (point.x / scale2 - this._b) / this._a,
              (point.y / scale2 - this._d) / this._c
            );
          }
        };
        function toTransformation(a, b, c, d) {
          return new Transformation(a, b, c, d);
        }
        var EPSG3857 = extend2({}, Earth, {
          code: "EPSG:3857",
          projection: SphericalMercator,
          transformation: function() {
            var scale2 = 0.5 / (Math.PI * SphericalMercator.R);
            return toTransformation(scale2, 0.5, -scale2, 0.5);
          }()
        });
        var EPSG900913 = extend2({}, EPSG3857, {
          code: "EPSG:900913"
        });
        function svgCreate(name) {
          return document.createElementNS("http://www.w3.org/2000/svg", name);
        }
        function pointsToPath(rings, closed) {
          var str = "", i, j, len, len2, points, p;
          for (i = 0, len = rings.length; i < len; i++) {
            points = rings[i];
            for (j = 0, len2 = points.length; j < len2; j++) {
              p = points[j];
              str += (j ? "L" : "M") + p.x + " " + p.y;
            }
            str += closed ? Browser.svg ? "z" : "x" : "";
          }
          return str || "M0 0";
        }
        var style = document.documentElement.style;
        var ie = "ActiveXObject" in window;
        var ielt9 = ie && !document.addEventListener;
        var edge = "msLaunchUri" in navigator && !("documentMode" in document);
        var webkit = userAgentContains("webkit");
        var android = userAgentContains("android");
        var android23 = userAgentContains("android 2") || userAgentContains("android 3");
        var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10);
        var androidStock = android && userAgentContains("Google") && webkitVer < 537 && !("AudioNode" in window);
        var opera = !!window.opera;
        var chrome = !edge && userAgentContains("chrome");
        var gecko = userAgentContains("gecko") && !webkit && !opera && !ie;
        var safari = !chrome && userAgentContains("safari");
        var phantom = userAgentContains("phantom");
        var opera12 = "OTransition" in style;
        var win = navigator.platform.indexOf("Win") === 0;
        var ie3d = ie && "transition" in style;
        var webkit3d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !android23;
        var gecko3d = "MozPerspective" in style;
        var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;
        var mobile = typeof orientation !== "undefined" || userAgentContains("mobile");
        var mobileWebkit = mobile && webkit;
        var mobileWebkit3d = mobile && webkit3d;
        var msPointer = !window.PointerEvent && window.MSPointerEvent;
        var pointer = !!(window.PointerEvent || msPointer);
        var touchNative = "ontouchstart" in window || !!window.TouchEvent;
        var touch = !window.L_NO_TOUCH && (touchNative || pointer);
        var mobileOpera = mobile && opera;
        var mobileGecko = mobile && gecko;
        var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
        var passiveEvents = function() {
          var supportsPassiveOption = false;
          try {
            var opts = Object.defineProperty({}, "passive", {
              get: function() {
                supportsPassiveOption = true;
              }
            });
            window.addEventListener("testPassiveEventSupport", falseFn, opts);
            window.removeEventListener("testPassiveEventSupport", falseFn, opts);
          } catch (e) {
          }
          return supportsPassiveOption;
        }();
        var canvas$1 = function() {
          return !!document.createElement("canvas").getContext;
        }();
        var svg$1 = !!(document.createElementNS && svgCreate("svg").createSVGRect);
        var inlineSvg = !!svg$1 && function() {
          var div = document.createElement("div");
          div.innerHTML = "<svg/>";
          return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
        }();
        var vml = !svg$1 && function() {
          try {
            var div = document.createElement("div");
            div.innerHTML = '<v:shape adj="1"/>';
            var shape = div.firstChild;
            shape.style.behavior = "url(#default#VML)";
            return shape && typeof shape.adj === "object";
          } catch (e) {
            return false;
          }
        }();
        var mac = navigator.platform.indexOf("Mac") === 0;
        var linux = navigator.platform.indexOf("Linux") === 0;
        function userAgentContains(str) {
          return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
        }
        var Browser = {
          ie,
          ielt9,
          edge,
          webkit,
          android,
          android23,
          androidStock,
          opera,
          chrome,
          gecko,
          safari,
          phantom,
          opera12,
          win,
          ie3d,
          webkit3d,
          gecko3d,
          any3d,
          mobile,
          mobileWebkit,
          mobileWebkit3d,
          msPointer,
          pointer,
          touch,
          touchNative,
          mobileOpera,
          mobileGecko,
          retina,
          passiveEvents,
          canvas: canvas$1,
          svg: svg$1,
          vml,
          inlineSvg,
          mac,
          linux
        };
        var POINTER_DOWN = Browser.msPointer ? "MSPointerDown" : "pointerdown";
        var POINTER_MOVE = Browser.msPointer ? "MSPointerMove" : "pointermove";
        var POINTER_UP = Browser.msPointer ? "MSPointerUp" : "pointerup";
        var POINTER_CANCEL = Browser.msPointer ? "MSPointerCancel" : "pointercancel";
        var pEvent = {
          touchstart: POINTER_DOWN,
          touchmove: POINTER_MOVE,
          touchend: POINTER_UP,
          touchcancel: POINTER_CANCEL
        };
        var handle = {
          touchstart: _onPointerStart,
          touchmove: _handlePointer,
          touchend: _handlePointer,
          touchcancel: _handlePointer
        };
        var _pointers = {};
        var _pointerDocListener = false;
        function addPointerListener(obj, type, handler) {
          if (type === "touchstart") {
            _addPointerDocListener();
          }
          if (!handle[type]) {
            console.warn("wrong event specified:", type);
            return falseFn;
          }
          handler = handle[type].bind(this, handler);
          obj.addEventListener(pEvent[type], handler, false);
          return handler;
        }
        function removePointerListener(obj, type, handler) {
          if (!pEvent[type]) {
            console.warn("wrong event specified:", type);
            return;
          }
          obj.removeEventListener(pEvent[type], handler, false);
        }
        function _globalPointerDown(e) {
          _pointers[e.pointerId] = e;
        }
        function _globalPointerMove(e) {
          if (_pointers[e.pointerId]) {
            _pointers[e.pointerId] = e;
          }
        }
        function _globalPointerUp(e) {
          delete _pointers[e.pointerId];
        }
        function _addPointerDocListener() {
          if (!_pointerDocListener) {
            document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
            document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
            document.addEventListener(POINTER_UP, _globalPointerUp, true);
            document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
            _pointerDocListener = true;
          }
        }
        function _handlePointer(handler, e) {
          if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
            return;
          }
          e.touches = [];
          for (var i in _pointers) {
            e.touches.push(_pointers[i]);
          }
          e.changedTouches = [e];
          handler(e);
        }
        function _onPointerStart(handler, e) {
          if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) {
            preventDefault(e);
          }
          _handlePointer(handler, e);
        }
        function makeDblclick(event) {
          var newEvent = {}, prop, i;
          for (i in event) {
            prop = event[i];
            newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;
          }
          event = newEvent;
          newEvent.type = "dblclick";
          newEvent.detail = 2;
          newEvent.isTrusted = false;
          newEvent._simulated = true;
          return newEvent;
        }
        var delay = 200;
        function addDoubleTapListener(obj, handler) {
          obj.addEventListener("dblclick", handler);
          var last = 0, detail;
          function simDblclick(e) {
            if (e.detail !== 1) {
              detail = e.detail;
              return;
            }
            if (e.pointerType === "mouse" || e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) {
              return;
            }
            var path = getPropagationPath(e);
            if (path.some(function(el) {
              return el instanceof HTMLLabelElement && el.attributes.for;
            }) && !path.some(function(el) {
              return el instanceof HTMLInputElement || el instanceof HTMLSelectElement;
            })) {
              return;
            }
            var now = Date.now();
            if (now - last <= delay) {
              detail++;
              if (detail === 2) {
                handler(makeDblclick(e));
              }
            } else {
              detail = 1;
            }
            last = now;
          }
          obj.addEventListener("click", simDblclick);
          return {
            dblclick: handler,
            simDblclick
          };
        }
        function removeDoubleTapListener(obj, handlers) {
          obj.removeEventListener("dblclick", handlers.dblclick);
          obj.removeEventListener("click", handlers.simDblclick);
        }
        var TRANSFORM = testProp(
          ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
        );
        var TRANSITION = testProp(
          ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
        );
        var TRANSITION_END = TRANSITION === "webkitTransition" || TRANSITION === "OTransition" ? TRANSITION + "End" : "transitionend";
        function get(id) {
          return typeof id === "string" ? document.getElementById(id) : id;
        }
        function getStyle(el, style2) {
          var value = el.style[style2] || el.currentStyle && el.currentStyle[style2];
          if ((!value || value === "auto") && document.defaultView) {
            var css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style2] : null;
          }
          return value === "auto" ? null : value;
        }
        function create$1(tagName, className, container) {
          var el = document.createElement(tagName);
          el.className = className || "";
          if (container) {
            container.appendChild(el);
          }
          return el;
        }
        function remove(el) {
          var parent = el.parentNode;
          if (parent) {
            parent.removeChild(el);
          }
        }
        function empty(el) {
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
        }
        function toFront(el) {
          var parent = el.parentNode;
          if (parent && parent.lastChild !== el) {
            parent.appendChild(el);
          }
        }
        function toBack(el) {
          var parent = el.parentNode;
          if (parent && parent.firstChild !== el) {
            parent.insertBefore(el, parent.firstChild);
          }
        }
        function hasClass(el, name) {
          if (el.classList !== void 0) {
            return el.classList.contains(name);
          }
          var className = getClass(el);
          return className.length > 0 && new RegExp("(^|\\s)" + name + "(\\s|$)").test(className);
        }
        function addClass(el, name) {
          if (el.classList !== void 0) {
            var classes = splitWords(name);
            for (var i = 0, len = classes.length; i < len; i++) {
              el.classList.add(classes[i]);
            }
          } else if (!hasClass(el, name)) {
            var className = getClass(el);
            setClass(el, (className ? className + " " : "") + name);
          }
        }
        function removeClass(el, name) {
          if (el.classList !== void 0) {
            el.classList.remove(name);
          } else {
            setClass(el, trim2((" " + getClass(el) + " ").replace(" " + name + " ", " ")));
          }
        }
        function setClass(el, name) {
          if (el.className.baseVal === void 0) {
            el.className = name;
          } else {
            el.className.baseVal = name;
          }
        }
        function getClass(el) {
          if (el.correspondingElement) {
            el = el.correspondingElement;
          }
          return el.className.baseVal === void 0 ? el.className : el.className.baseVal;
        }
        function setOpacity(el, value) {
          if ("opacity" in el.style) {
            el.style.opacity = value;
          } else if ("filter" in el.style) {
            _setOpacityIE(el, value);
          }
        }
        function _setOpacityIE(el, value) {
          var filter2 = false, filterName = "DXImageTransform.Microsoft.Alpha";
          try {
            filter2 = el.filters.item(filterName);
          } catch (e) {
            if (value === 1) {
              return;
            }
          }
          value = Math.round(value * 100);
          if (filter2) {
            filter2.Enabled = value !== 100;
            filter2.Opacity = value;
          } else {
            el.style.filter += " progid:" + filterName + "(opacity=" + value + ")";
          }
        }
        function testProp(props) {
          var style2 = document.documentElement.style;
          for (var i = 0; i < props.length; i++) {
            if (props[i] in style2) {
              return props[i];
            }
          }
          return false;
        }
        function setTransform(el, offset, scale2) {
          var pos = offset || new Point(0, 0);
          el.style[TRANSFORM] = (Browser.ie3d ? "translate(" + pos.x + "px," + pos.y + "px)" : "translate3d(" + pos.x + "px," + pos.y + "px,0)") + (scale2 ? " scale(" + scale2 + ")" : "");
        }
        function setPosition(el, point) {
          el._leaflet_pos = point;
          if (Browser.any3d) {
            setTransform(el, point);
          } else {
            el.style.left = point.x + "px";
            el.style.top = point.y + "px";
          }
        }
        function getPosition(el) {
          return el._leaflet_pos || new Point(0, 0);
        }
        var disableTextSelection;
        var enableTextSelection;
        var _userSelect;
        if ("onselectstart" in document) {
          disableTextSelection = function() {
            on(window, "selectstart", preventDefault);
          };
          enableTextSelection = function() {
            off(window, "selectstart", preventDefault);
          };
        } else {
          var userSelectProperty = testProp(
            ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
          );
          disableTextSelection = function() {
            if (userSelectProperty) {
              var style2 = document.documentElement.style;
              _userSelect = style2[userSelectProperty];
              style2[userSelectProperty] = "none";
            }
          };
          enableTextSelection = function() {
            if (userSelectProperty) {
              document.documentElement.style[userSelectProperty] = _userSelect;
              _userSelect = void 0;
            }
          };
        }
        function disableImageDrag() {
          on(window, "dragstart", preventDefault);
        }
        function enableImageDrag() {
          off(window, "dragstart", preventDefault);
        }
        var _outlineElement, _outlineStyle;
        function preventOutline(element) {
          while (element.tabIndex === -1) {
            element = element.parentNode;
          }
          if (!element.style) {
            return;
          }
          restoreOutline();
          _outlineElement = element;
          _outlineStyle = element.style.outlineStyle;
          element.style.outlineStyle = "none";
          on(window, "keydown", restoreOutline);
        }
        function restoreOutline() {
          if (!_outlineElement) {
            return;
          }
          _outlineElement.style.outlineStyle = _outlineStyle;
          _outlineElement = void 0;
          _outlineStyle = void 0;
          off(window, "keydown", restoreOutline);
        }
        function getSizedParentNode(element) {
          do {
            element = element.parentNode;
          } while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
          return element;
        }
        function getScale(element) {
          var rect = element.getBoundingClientRect();
          return {
            x: rect.width / element.offsetWidth || 1,
            y: rect.height / element.offsetHeight || 1,
            boundingClientRect: rect
          };
        }
        var DomUtil = {
          __proto__: null,
          TRANSFORM,
          TRANSITION,
          TRANSITION_END,
          get,
          getStyle,
          create: create$1,
          remove,
          empty,
          toFront,
          toBack,
          hasClass,
          addClass,
          removeClass,
          setClass,
          getClass,
          setOpacity,
          testProp,
          setTransform,
          setPosition,
          getPosition,
          get disableTextSelection() {
            return disableTextSelection;
          },
          get enableTextSelection() {
            return enableTextSelection;
          },
          disableImageDrag,
          enableImageDrag,
          preventOutline,
          restoreOutline,
          getSizedParentNode,
          getScale
        };
        function on(obj, types, fn, context) {
          if (types && typeof types === "object") {
            for (var type in types) {
              addOne(obj, type, types[type], fn);
            }
          } else {
            types = splitWords(types);
            for (var i = 0, len = types.length; i < len; i++) {
              addOne(obj, types[i], fn, context);
            }
          }
          return this;
        }
        var eventsKey = "_leaflet_events";
        function off(obj, types, fn, context) {
          if (arguments.length === 1) {
            batchRemove(obj);
            delete obj[eventsKey];
          } else if (types && typeof types === "object") {
            for (var type in types) {
              removeOne(obj, type, types[type], fn);
            }
          } else {
            types = splitWords(types);
            if (arguments.length === 2) {
              batchRemove(obj, function(type2) {
                return indexOf(types, type2) !== -1;
              });
            } else {
              for (var i = 0, len = types.length; i < len; i++) {
                removeOne(obj, types[i], fn, context);
              }
            }
          }
          return this;
        }
        function batchRemove(obj, filterFn) {
          for (var id in obj[eventsKey]) {
            var type = id.split(/\d/)[0];
            if (!filterFn || filterFn(type)) {
              removeOne(obj, type, null, null, id);
            }
          }
        }
        var mouseSubst = {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          wheel: !("onwheel" in window) && "mousewheel"
        };
        function addOne(obj, type, fn, context) {
          var id = type + stamp(fn) + (context ? "_" + stamp(context) : "");
          if (obj[eventsKey] && obj[eventsKey][id]) {
            return this;
          }
          var handler = function(e) {
            return fn.call(context || obj, e || window.event);
          };
          var originalHandler = handler;
          if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) {
            handler = addPointerListener(obj, type, handler);
          } else if (Browser.touch && type === "dblclick") {
            handler = addDoubleTapListener(obj, handler);
          } else if ("addEventListener" in obj) {
            if (type === "touchstart" || type === "touchmove" || type === "wheel" || type === "mousewheel") {
              obj.addEventListener(mouseSubst[type] || type, handler, Browser.passiveEvents ? { passive: false } : false);
            } else if (type === "mouseenter" || type === "mouseleave") {
              handler = function(e) {
                e = e || window.event;
                if (isExternalTarget(obj, e)) {
                  originalHandler(e);
                }
              };
              obj.addEventListener(mouseSubst[type], handler, false);
            } else {
              obj.addEventListener(type, originalHandler, false);
            }
          } else {
            obj.attachEvent("on" + type, handler);
          }
          obj[eventsKey] = obj[eventsKey] || {};
          obj[eventsKey][id] = handler;
        }
        function removeOne(obj, type, fn, context, id) {
          id = id || type + stamp(fn) + (context ? "_" + stamp(context) : "");
          var handler = obj[eventsKey] && obj[eventsKey][id];
          if (!handler) {
            return this;
          }
          if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) {
            removePointerListener(obj, type, handler);
          } else if (Browser.touch && type === "dblclick") {
            removeDoubleTapListener(obj, handler);
          } else if ("removeEventListener" in obj) {
            obj.removeEventListener(mouseSubst[type] || type, handler, false);
          } else {
            obj.detachEvent("on" + type, handler);
          }
          obj[eventsKey][id] = null;
        }
        function stopPropagation(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else if (e.originalEvent) {
            e.originalEvent._stopped = true;
          } else {
            e.cancelBubble = true;
          }
          return this;
        }
        function disableScrollPropagation(el) {
          addOne(el, "wheel", stopPropagation);
          return this;
        }
        function disableClickPropagation(el) {
          on(el, "mousedown touchstart dblclick contextmenu", stopPropagation);
          el["_leaflet_disable_click"] = true;
          return this;
        }
        function preventDefault(e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
          return this;
        }
        function stop(e) {
          preventDefault(e);
          stopPropagation(e);
          return this;
        }
        function getPropagationPath(ev) {
          if (ev.composedPath) {
            return ev.composedPath();
          }
          var path = [];
          var el = ev.target;
          while (el) {
            path.push(el);
            el = el.parentNode;
          }
          return path;
        }
        function getMousePosition(e, container) {
          if (!container) {
            return new Point(e.clientX, e.clientY);
          }
          var scale2 = getScale(container), offset = scale2.boundingClientRect;
          return new Point(
            // offset.left/top values are in page scale (like clientX/Y),
            // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
            (e.clientX - offset.left) / scale2.x - container.clientLeft,
            (e.clientY - offset.top) / scale2.y - container.clientTop
          );
        }
        var wheelPxFactor = Browser.linux && Browser.chrome ? window.devicePixelRatio : Browser.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
        function getWheelDelta(e) {
          return Browser.edge ? e.wheelDeltaY / 2 : (
            // Don't trust window-geometry-based delta
            e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : (
              // Pixels
              e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : (
                // Lines
                e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : (
                  // Pages
                  e.deltaX || e.deltaZ ? 0 : (
                    // Skip horizontal/depth wheel events
                    e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : (
                      // Legacy IE pixels
                      e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : (
                        // Legacy Moz lines
                        e.detail ? e.detail / -32765 * 60 : (
                          // Legacy Moz pages
                          0
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }
        function isExternalTarget(el, e) {
          var related = e.relatedTarget;
          if (!related) {
            return true;
          }
          try {
            while (related && related !== el) {
              related = related.parentNode;
            }
          } catch (err) {
            return false;
          }
          return related !== el;
        }
        var DomEvent = {
          __proto__: null,
          on,
          off,
          stopPropagation,
          disableScrollPropagation,
          disableClickPropagation,
          preventDefault,
          stop,
          getPropagationPath,
          getMousePosition,
          getWheelDelta,
          isExternalTarget,
          addListener: on,
          removeListener: off
        };
        var PosAnimation = Evented.extend({
          // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
          // Run an animation of a given element to a new position, optionally setting
          // duration in seconds (`0.25` by default) and easing linearity factor (3rd
          // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
          // `0.5` by default).
          run: function(el, newPos, duration, easeLinearity) {
            this.stop();
            this._el = el;
            this._inProgress = true;
            this._duration = duration || 0.25;
            this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
            this._startPos = getPosition(el);
            this._offset = newPos.subtract(this._startPos);
            this._startTime = +/* @__PURE__ */ new Date();
            this.fire("start");
            this._animate();
          },
          // @method stop()
          // Stops the animation (if currently running).
          stop: function() {
            if (!this._inProgress) {
              return;
            }
            this._step(true);
            this._complete();
          },
          _animate: function() {
            this._animId = requestAnimFrame(this._animate, this);
            this._step();
          },
          _step: function(round) {
            var elapsed = +/* @__PURE__ */ new Date() - this._startTime, duration = this._duration * 1e3;
            if (elapsed < duration) {
              this._runFrame(this._easeOut(elapsed / duration), round);
            } else {
              this._runFrame(1);
              this._complete();
            }
          },
          _runFrame: function(progress, round) {
            var pos = this._startPos.add(this._offset.multiplyBy(progress));
            if (round) {
              pos._round();
            }
            setPosition(this._el, pos);
            this.fire("step");
          },
          _complete: function() {
            cancelAnimFrame(this._animId);
            this._inProgress = false;
            this.fire("end");
          },
          _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
          }
        });
        var Map = Evented.extend({
          options: {
            // @section Map State Options
            // @option crs: CRS = L.CRS.EPSG3857
            // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
            // sure what it means.
            crs: EPSG3857,
            // @option center: LatLng = undefined
            // Initial geographic center of the map
            center: void 0,
            // @option zoom: Number = undefined
            // Initial map zoom level
            zoom: void 0,
            // @option minZoom: Number = *
            // Minimum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the lowest of their `minZoom` options will be used instead.
            minZoom: void 0,
            // @option maxZoom: Number = *
            // Maximum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the highest of their `maxZoom` options will be used instead.
            maxZoom: void 0,
            // @option layers: Layer[] = []
            // Array of layers that will be added to the map initially
            layers: [],
            // @option maxBounds: LatLngBounds = null
            // When this option is set, the map restricts the view to the given
            // geographical bounds, bouncing the user back if the user tries to pan
            // outside the view. To set the restriction dynamically, use
            // [`setMaxBounds`](#map-setmaxbounds) method.
            maxBounds: void 0,
            // @option renderer: Renderer = *
            // The default method for drawing vector layers on the map. `L.SVG`
            // or `L.Canvas` by default depending on browser support.
            renderer: void 0,
            // @section Animation Options
            // @option zoomAnimation: Boolean = true
            // Whether the map zoom animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            zoomAnimation: true,
            // @option zoomAnimationThreshold: Number = 4
            // Won't animate zoom if the zoom difference exceeds this value.
            zoomAnimationThreshold: 4,
            // @option fadeAnimation: Boolean = true
            // Whether the tile fade animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            fadeAnimation: true,
            // @option markerZoomAnimation: Boolean = true
            // Whether markers animate their zoom with the zoom animation, if disabled
            // they will disappear for the length of the animation. By default it's
            // enabled in all browsers that support CSS3 Transitions except Android.
            markerZoomAnimation: true,
            // @option transform3DLimit: Number = 2^23
            // Defines the maximum size of a CSS translation transform. The default
            // value should not be changed unless a web browser positions layers in
            // the wrong place after doing a large `panBy`.
            transform3DLimit: 8388608,
            // Precision limit of a 32-bit float
            // @section Interaction Options
            // @option zoomSnap: Number = 1
            // Forces the map's zoom level to always be a multiple of this, particularly
            // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
            // By default, the zoom level snaps to the nearest integer; lower values
            // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
            // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
            zoomSnap: 1,
            // @option zoomDelta: Number = 1
            // Controls how much the map's zoom level will change after a
            // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
            // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
            // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
            zoomDelta: 1,
            // @option trackResize: Boolean = true
            // Whether the map automatically handles browser window resize to update itself.
            trackResize: true
          },
          initialize: function(id, options) {
            options = setOptions(this, options);
            this._handlers = [];
            this._layers = {};
            this._zoomBoundLayers = {};
            this._sizeChanged = true;
            this._initContainer(id);
            this._initLayout();
            this._onResize = bind2(this._onResize, this);
            this._initEvents();
            if (options.maxBounds) {
              this.setMaxBounds(options.maxBounds);
            }
            if (options.zoom !== void 0) {
              this._zoom = this._limitZoom(options.zoom);
            }
            if (options.center && options.zoom !== void 0) {
              this.setView(toLatLng(options.center), options.zoom, { reset: true });
            }
            this.callInitHooks();
            this._zoomAnimated = TRANSITION && Browser.any3d && !Browser.mobileOpera && this.options.zoomAnimation;
            if (this._zoomAnimated) {
              this._createAnimProxy();
              on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
            }
            this._addLayers(this.options.layers);
          },
          // @section Methods for modifying map state
          // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
          // Sets the view of the map (geographical center and zoom) with the given
          // animation options.
          setView: function(center, zoom2, options) {
            zoom2 = zoom2 === void 0 ? this._zoom : this._limitZoom(zoom2);
            center = this._limitCenter(toLatLng(center), zoom2, this.options.maxBounds);
            options = options || {};
            this._stop();
            if (this._loaded && !options.reset && options !== true) {
              if (options.animate !== void 0) {
                options.zoom = extend2({ animate: options.animate }, options.zoom);
                options.pan = extend2({ animate: options.animate, duration: options.duration }, options.pan);
              }
              var moved = this._zoom !== zoom2 ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom2, options.zoom) : this._tryAnimatedPan(center, options.pan);
              if (moved) {
                clearTimeout(this._sizeTimer);
                return this;
              }
            }
            this._resetView(center, zoom2, options.pan && options.pan.noMoveStart);
            return this;
          },
          // @method setZoom(zoom: Number, options?: Zoom/pan options): this
          // Sets the zoom of the map.
          setZoom: function(zoom2, options) {
            if (!this._loaded) {
              this._zoom = zoom2;
              return this;
            }
            return this.setView(this.getCenter(), zoom2, { zoom: options });
          },
          // @method zoomIn(delta?: Number, options?: Zoom options): this
          // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
          zoomIn: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom + delta, options);
          },
          // @method zoomOut(delta?: Number, options?: Zoom options): this
          // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
          zoomOut: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom - delta, options);
          },
          // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
          // Zooms the map while keeping a specified geographical point on the map
          // stationary (e.g. used internally for scroll zoom and double-click zoom).
          // @alternative
          // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
          // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
          setZoomAround: function(latlng, zoom2, options) {
            var scale2 = this.getZoomScale(zoom2), viewHalf = this.getSize().divideBy(2), containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng), centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale2), newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
            return this.setView(newCenter, zoom2, { zoom: options });
          },
          _getBoundsCenterZoom: function(bounds, options) {
            options = options || {};
            bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]), zoom2 = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
            zoom2 = typeof options.maxZoom === "number" ? Math.min(options.maxZoom, zoom2) : zoom2;
            if (zoom2 === Infinity) {
              return {
                center: bounds.getCenter(),
                zoom: zoom2
              };
            }
            var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2), swPoint = this.project(bounds.getSouthWest(), zoom2), nePoint = this.project(bounds.getNorthEast(), zoom2), center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom2);
            return {
              center,
              zoom: zoom2
            };
          },
          // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
          // Sets a map view that contains the given geographical bounds with the
          // maximum zoom level possible.
          fitBounds: function(bounds, options) {
            bounds = toLatLngBounds(bounds);
            if (!bounds.isValid()) {
              throw new Error("Bounds are not valid.");
            }
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.setView(target.center, target.zoom, options);
          },
          // @method fitWorld(options?: fitBounds options): this
          // Sets a map view that mostly contains the whole world with the maximum
          // zoom level possible.
          fitWorld: function(options) {
            return this.fitBounds([[-90, -180], [90, 180]], options);
          },
          // @method panTo(latlng: LatLng, options?: Pan options): this
          // Pans the map to a given center.
          panTo: function(center, options) {
            return this.setView(center, this._zoom, { pan: options });
          },
          // @method panBy(offset: Point, options?: Pan options): this
          // Pans the map by a given number of pixels (animated).
          panBy: function(offset, options) {
            offset = toPoint(offset).round();
            options = options || {};
            if (!offset.x && !offset.y) {
              return this.fire("moveend");
            }
            if (options.animate !== true && !this.getSize().contains(offset)) {
              this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
              return this;
            }
            if (!this._panAnim) {
              this._panAnim = new PosAnimation();
              this._panAnim.on({
                "step": this._onPanTransitionStep,
                "end": this._onPanTransitionEnd
              }, this);
            }
            if (!options.noMoveStart) {
              this.fire("movestart");
            }
            if (options.animate !== false) {
              addClass(this._mapPane, "leaflet-pan-anim");
              var newPos = this._getMapPanePos().subtract(offset).round();
              this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
            } else {
              this._rawPanBy(offset);
              this.fire("move").fire("moveend");
            }
            return this;
          },
          // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
          // Sets the view of the map (geographical center and zoom) performing a smooth
          // pan-zoom animation.
          flyTo: function(targetCenter, targetZoom, options) {
            options = options || {};
            if (options.animate === false || !Browser.any3d) {
              return this.setView(targetCenter, targetZoom, options);
            }
            this._stop();
            var from = this.project(this.getCenter()), to = this.project(targetCenter), size = this.getSize(), startZoom = this._zoom;
            targetCenter = toLatLng(targetCenter);
            targetZoom = targetZoom === void 0 ? startZoom : targetZoom;
            var w0 = Math.max(size.x, size.y), w1 = w0 * this.getZoomScale(startZoom, targetZoom), u1 = to.distanceTo(from) || 1, rho = 1.42, rho2 = rho * rho;
            function r(i) {
              var s1 = i ? -1 : 1, s2 = i ? w1 : w0, t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1, b1 = 2 * s2 * rho2 * u1, b = t1 / b1, sq = Math.sqrt(b * b + 1) - b;
              var log = sq < 1e-9 ? -18 : Math.log(sq);
              return log;
            }
            function sinh(n) {
              return (Math.exp(n) - Math.exp(-n)) / 2;
            }
            function cosh(n) {
              return (Math.exp(n) + Math.exp(-n)) / 2;
            }
            function tanh(n) {
              return sinh(n) / cosh(n);
            }
            var r0 = r(0);
            function w(s) {
              return w0 * (cosh(r0) / cosh(r0 + rho * s));
            }
            function u(s) {
              return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
            }
            function easeOut(t) {
              return 1 - Math.pow(1 - t, 1.5);
            }
            var start = Date.now(), S = (r(1) - r0) / rho, duration = options.duration ? 1e3 * options.duration : 1e3 * S * 0.8;
            function frame() {
              var t = (Date.now() - start) / duration, s = easeOut(t) * S;
              if (t <= 1) {
                this._flyToFrame = requestAnimFrame(frame, this);
                this._move(
                  this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
                  this.getScaleZoom(w0 / w(s), startZoom),
                  { flyTo: true }
                );
              } else {
                this._move(targetCenter, targetZoom)._moveEnd(true);
              }
            }
            this._moveStart(true, options.noMoveStart);
            frame.call(this);
            return this;
          },
          // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
          // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
          // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
          flyToBounds: function(bounds, options) {
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.flyTo(target.center, target.zoom, options);
          },
          // @method setMaxBounds(bounds: LatLngBounds): this
          // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
          setMaxBounds: function(bounds) {
            bounds = toLatLngBounds(bounds);
            if (this.listens("moveend", this._panInsideMaxBounds)) {
              this.off("moveend", this._panInsideMaxBounds);
            }
            if (!bounds.isValid()) {
              this.options.maxBounds = null;
              return this;
            }
            this.options.maxBounds = bounds;
            if (this._loaded) {
              this._panInsideMaxBounds();
            }
            return this.on("moveend", this._panInsideMaxBounds);
          },
          // @method setMinZoom(zoom: Number): this
          // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
          setMinZoom: function(zoom2) {
            var oldZoom = this.options.minZoom;
            this.options.minZoom = zoom2;
            if (this._loaded && oldZoom !== zoom2) {
              this.fire("zoomlevelschange");
              if (this.getZoom() < this.options.minZoom) {
                return this.setZoom(zoom2);
              }
            }
            return this;
          },
          // @method setMaxZoom(zoom: Number): this
          // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
          setMaxZoom: function(zoom2) {
            var oldZoom = this.options.maxZoom;
            this.options.maxZoom = zoom2;
            if (this._loaded && oldZoom !== zoom2) {
              this.fire("zoomlevelschange");
              if (this.getZoom() > this.options.maxZoom) {
                return this.setZoom(zoom2);
              }
            }
            return this;
          },
          // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
          // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
          panInsideBounds: function(bounds, options) {
            this._enforcingBounds = true;
            var center = this.getCenter(), newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));
            if (!center.equals(newCenter)) {
              this.panTo(newCenter, options);
            }
            this._enforcingBounds = false;
            return this;
          },
          // @method panInside(latlng: LatLng, options?: padding options): this
          // Pans the map the minimum amount to make the `latlng` visible. Use
          // padding options to fit the display to more restricted bounds.
          // If `latlng` is already within the (optionally padded) display bounds,
          // the map will not be panned.
          panInside: function(latlng, options) {
            options = options || {};
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]), pixelCenter = this.project(this.getCenter()), pixelPoint = this.project(latlng), pixelBounds = this.getPixelBounds(), paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]), paddedSize = paddedBounds.getSize();
            if (!paddedBounds.contains(pixelPoint)) {
              this._enforcingBounds = true;
              var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());
              var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);
              pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;
              pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;
              this.panTo(this.unproject(pixelCenter), options);
              this._enforcingBounds = false;
            }
            return this;
          },
          // @method invalidateSize(options: Zoom/pan options): this
          // Checks if the map container size changed and updates the map if so —
          // call it after you've changed the map size dynamically, also animating
          // pan by default. If `options.pan` is `false`, panning will not occur.
          // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
          // that it doesn't happen often even if the method is called many
          // times in a row.
          // @alternative
          // @method invalidateSize(animate: Boolean): this
          // Checks if the map container size changed and updates the map if so —
          // call it after you've changed the map size dynamically, also animating
          // pan by default.
          invalidateSize: function(options) {
            if (!this._loaded) {
              return this;
            }
            options = extend2({
              animate: false,
              pan: true
            }, options === true ? { animate: true } : options);
            var oldSize = this.getSize();
            this._sizeChanged = true;
            this._lastCenter = null;
            var newSize = this.getSize(), oldCenter = oldSize.divideBy(2).round(), newCenter = newSize.divideBy(2).round(), offset = oldCenter.subtract(newCenter);
            if (!offset.x && !offset.y) {
              return this;
            }
            if (options.animate && options.pan) {
              this.panBy(offset);
            } else {
              if (options.pan) {
                this._rawPanBy(offset);
              }
              this.fire("move");
              if (options.debounceMoveend) {
                clearTimeout(this._sizeTimer);
                this._sizeTimer = setTimeout(bind2(this.fire, this, "moveend"), 200);
              } else {
                this.fire("moveend");
              }
            }
            return this.fire("resize", {
              oldSize,
              newSize
            });
          },
          // @section Methods for modifying map state
          // @method stop(): this
          // Stops the currently running `panTo` or `flyTo` animation, if any.
          stop: function() {
            this.setZoom(this._limitZoom(this._zoom));
            if (!this.options.zoomSnap) {
              this.fire("viewreset");
            }
            return this._stop();
          },
          // @section Geolocation methods
          // @method locate(options?: Locate options): this
          // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
          // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
          // and optionally sets the map view to the user's location with respect to
          // detection accuracy (or to the world view if geolocation failed).
          // Note that, if your page doesn't use HTTPS, this method will fail in
          // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
          // See `Locate options` for more details.
          locate: function(options) {
            options = this._locateOptions = extend2({
              timeout: 1e4,
              watch: false
              // setView: false
              // maxZoom: <Number>
              // maximumAge: 0
              // enableHighAccuracy: false
            }, options);
            if (!("geolocation" in navigator)) {
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
              });
              return this;
            }
            var onResponse = bind2(this._handleGeolocationResponse, this), onError = bind2(this._handleGeolocationError, this);
            if (options.watch) {
              this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
            } else {
              navigator.geolocation.getCurrentPosition(onResponse, onError, options);
            }
            return this;
          },
          // @method stopLocate(): this
          // Stops watching location previously initiated by `map.locate({watch: true})`
          // and aborts resetting the map view if map.locate was called with
          // `{setView: true}`.
          stopLocate: function() {
            if (navigator.geolocation && navigator.geolocation.clearWatch) {
              navigator.geolocation.clearWatch(this._locationWatchId);
            }
            if (this._locateOptions) {
              this._locateOptions.setView = false;
            }
            return this;
          },
          _handleGeolocationError: function(error) {
            if (!this._container._leaflet_id) {
              return;
            }
            var c = error.code, message = error.message || (c === 1 ? "permission denied" : c === 2 ? "position unavailable" : "timeout");
            if (this._locateOptions.setView && !this._loaded) {
              this.fitWorld();
            }
            this.fire("locationerror", {
              code: c,
              message: "Geolocation error: " + message + "."
            });
          },
          _handleGeolocationResponse: function(pos) {
            if (!this._container._leaflet_id) {
              return;
            }
            var lat = pos.coords.latitude, lng = pos.coords.longitude, latlng = new LatLng(lat, lng), bounds = latlng.toBounds(pos.coords.accuracy * 2), options = this._locateOptions;
            if (options.setView) {
              var zoom2 = this.getBoundsZoom(bounds);
              this.setView(latlng, options.maxZoom ? Math.min(zoom2, options.maxZoom) : zoom2);
            }
            var data = {
              latlng,
              bounds,
              timestamp: pos.timestamp
            };
            for (var i in pos.coords) {
              if (typeof pos.coords[i] === "number") {
                data[i] = pos.coords[i];
              }
            }
            this.fire("locationfound", data);
          },
          // TODO Appropriate docs section?
          // @section Other Methods
          // @method addHandler(name: String, HandlerClass: Function): this
          // Adds a new `Handler` to the map, given its name and constructor function.
          addHandler: function(name, HandlerClass) {
            if (!HandlerClass) {
              return this;
            }
            var handler = this[name] = new HandlerClass(this);
            this._handlers.push(handler);
            if (this.options[name]) {
              handler.enable();
            }
            return this;
          },
          // @method remove(): this
          // Destroys the map and clears all related event listeners.
          remove: function() {
            this._initEvents(true);
            if (this.options.maxBounds) {
              this.off("moveend", this._panInsideMaxBounds);
            }
            if (this._containerId !== this._container._leaflet_id) {
              throw new Error("Map container is being reused by another instance");
            }
            try {
              delete this._container._leaflet_id;
              delete this._containerId;
            } catch (e) {
              this._container._leaflet_id = void 0;
              this._containerId = void 0;
            }
            if (this._locationWatchId !== void 0) {
              this.stopLocate();
            }
            this._stop();
            remove(this._mapPane);
            if (this._clearControlPos) {
              this._clearControlPos();
            }
            if (this._resizeRequest) {
              cancelAnimFrame(this._resizeRequest);
              this._resizeRequest = null;
            }
            this._clearHandlers();
            if (this._loaded) {
              this.fire("unload");
            }
            var i;
            for (i in this._layers) {
              this._layers[i].remove();
            }
            for (i in this._panes) {
              remove(this._panes[i]);
            }
            this._layers = [];
            this._panes = [];
            delete this._mapPane;
            delete this._renderer;
            return this;
          },
          // @section Other Methods
          // @method createPane(name: String, container?: HTMLElement): HTMLElement
          // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
          // then returns it. The pane is created as a child of `container`, or
          // as a child of the main map pane if not set.
          createPane: function(name, container) {
            var className = "leaflet-pane" + (name ? " leaflet-" + name.replace("Pane", "") + "-pane" : ""), pane = create$1("div", className, container || this._mapPane);
            if (name) {
              this._panes[name] = pane;
            }
            return pane;
          },
          // @section Methods for Getting Map State
          // @method getCenter(): LatLng
          // Returns the geographical center of the map view
          getCenter: function() {
            this._checkIfLoaded();
            if (this._lastCenter && !this._moved()) {
              return this._lastCenter.clone();
            }
            return this.layerPointToLatLng(this._getCenterLayerPoint());
          },
          // @method getZoom(): Number
          // Returns the current zoom level of the map view
          getZoom: function() {
            return this._zoom;
          },
          // @method getBounds(): LatLngBounds
          // Returns the geographical bounds visible in the current map view
          getBounds: function() {
            var bounds = this.getPixelBounds(), sw = this.unproject(bounds.getBottomLeft()), ne = this.unproject(bounds.getTopRight());
            return new LatLngBounds(sw, ne);
          },
          // @method getMinZoom(): Number
          // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
          getMinZoom: function() {
            return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
          },
          // @method getMaxZoom(): Number
          // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
          getMaxZoom: function() {
            return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? Infinity : this._layersMaxZoom : this.options.maxZoom;
          },
          // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
          // Returns the maximum zoom level on which the given bounds fit to the map
          // view in its entirety. If `inside` (optional) is set to `true`, the method
          // instead returns the minimum zoom level on which the map view fits into
          // the given bounds in its entirety.
          getBoundsZoom: function(bounds, inside, padding) {
            bounds = toLatLngBounds(bounds);
            padding = toPoint(padding || [0, 0]);
            var zoom2 = this.getZoom() || 0, min = this.getMinZoom(), max = this.getMaxZoom(), nw = bounds.getNorthWest(), se = bounds.getSouthEast(), size = this.getSize().subtract(padding), boundsSize = toBounds(this.project(se, zoom2), this.project(nw, zoom2)).getSize(), snap = Browser.any3d ? this.options.zoomSnap : 1, scalex = size.x / boundsSize.x, scaley = size.y / boundsSize.y, scale2 = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
            zoom2 = this.getScaleZoom(scale2, zoom2);
            if (snap) {
              zoom2 = Math.round(zoom2 / (snap / 100)) * (snap / 100);
              zoom2 = inside ? Math.ceil(zoom2 / snap) * snap : Math.floor(zoom2 / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom2));
          },
          // @method getSize(): Point
          // Returns the current size of the map container (in pixels).
          getSize: function() {
            if (!this._size || this._sizeChanged) {
              this._size = new Point(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              );
              this._sizeChanged = false;
            }
            return this._size.clone();
          },
          // @method getPixelBounds(): Bounds
          // Returns the bounds of the current map view in projected pixel
          // coordinates (sometimes useful in layer and overlay implementations).
          getPixelBounds: function(center, zoom2) {
            var topLeftPoint = this._getTopLeftPoint(center, zoom2);
            return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
          },
          // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
          // the map pane? "left point of the map layer" can be confusing, specially
          // since there can be negative offsets.
          // @method getPixelOrigin(): Point
          // Returns the projected pixel coordinates of the top left point of
          // the map layer (useful in custom layer and overlay implementations).
          getPixelOrigin: function() {
            this._checkIfLoaded();
            return this._pixelOrigin;
          },
          // @method getPixelWorldBounds(zoom?: Number): Bounds
          // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
          // If `zoom` is omitted, the map's current zoom level is used.
          getPixelWorldBounds: function(zoom2) {
            return this.options.crs.getProjectedBounds(zoom2 === void 0 ? this.getZoom() : zoom2);
          },
          // @section Other Methods
          // @method getPane(pane: String|HTMLElement): HTMLElement
          // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
          getPane: function(pane) {
            return typeof pane === "string" ? this._panes[pane] : pane;
          },
          // @method getPanes(): Object
          // Returns a plain object containing the names of all [panes](#map-pane) as keys and
          // the panes as values.
          getPanes: function() {
            return this._panes;
          },
          // @method getContainer: HTMLElement
          // Returns the HTML element that contains the map.
          getContainer: function() {
            return this._container;
          },
          // @section Conversion Methods
          // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
          // Returns the scale factor to be applied to a map transition from zoom level
          // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
          getZoomScale: function(toZoom, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === void 0 ? this._zoom : fromZoom;
            return crs.scale(toZoom) / crs.scale(fromZoom);
          },
          // @method getScaleZoom(scale: Number, fromZoom: Number): Number
          // Returns the zoom level that the map would end up at, if it is at `fromZoom`
          // level and everything is scaled by a factor of `scale`. Inverse of
          // [`getZoomScale`](#map-getZoomScale).
          getScaleZoom: function(scale2, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === void 0 ? this._zoom : fromZoom;
            var zoom2 = crs.zoom(scale2 * crs.scale(fromZoom));
            return isNaN(zoom2) ? Infinity : zoom2;
          },
          // @method project(latlng: LatLng, zoom: Number): Point
          // Projects a geographical coordinate `LatLng` according to the projection
          // of the map's CRS, then scales it according to `zoom` and the CRS's
          // `Transformation`. The result is pixel coordinate relative to
          // the CRS origin.
          project: function(latlng, zoom2) {
            zoom2 = zoom2 === void 0 ? this._zoom : zoom2;
            return this.options.crs.latLngToPoint(toLatLng(latlng), zoom2);
          },
          // @method unproject(point: Point, zoom: Number): LatLng
          // Inverse of [`project`](#map-project).
          unproject: function(point, zoom2) {
            zoom2 = zoom2 === void 0 ? this._zoom : zoom2;
            return this.options.crs.pointToLatLng(toPoint(point), zoom2);
          },
          // @method layerPointToLatLng(point: Point): LatLng
          // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
          // returns the corresponding geographical coordinate (for the current zoom level).
          layerPointToLatLng: function(point) {
            var projectedPoint = toPoint(point).add(this.getPixelOrigin());
            return this.unproject(projectedPoint);
          },
          // @method latLngToLayerPoint(latlng: LatLng): Point
          // Given a geographical coordinate, returns the corresponding pixel coordinate
          // relative to the [origin pixel](#map-getpixelorigin).
          latLngToLayerPoint: function(latlng) {
            var projectedPoint = this.project(toLatLng(latlng))._round();
            return projectedPoint._subtract(this.getPixelOrigin());
          },
          // @method wrapLatLng(latlng: LatLng): LatLng
          // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
          // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
          // CRS's bounds.
          // By default this means longitude is wrapped around the dateline so its
          // value is between -180 and +180 degrees.
          wrapLatLng: function(latlng) {
            return this.options.crs.wrapLatLng(toLatLng(latlng));
          },
          // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
          // Returns a `LatLngBounds` with the same size as the given one, ensuring that
          // its center is within the CRS's bounds.
          // By default this means the center longitude is wrapped around the dateline so its
          // value is between -180 and +180 degrees, and the majority of the bounds
          // overlaps the CRS's bounds.
          wrapLatLngBounds: function(latlng) {
            return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
          },
          // @method distance(latlng1: LatLng, latlng2: LatLng): Number
          // Returns the distance between two geographical coordinates according to
          // the map's CRS. By default this measures distance in meters.
          distance: function(latlng1, latlng2) {
            return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
          },
          // @method containerPointToLayerPoint(point: Point): Point
          // Given a pixel coordinate relative to the map container, returns the corresponding
          // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
          containerPointToLayerPoint: function(point) {
            return toPoint(point).subtract(this._getMapPanePos());
          },
          // @method layerPointToContainerPoint(point: Point): Point
          // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
          // returns the corresponding pixel coordinate relative to the map container.
          layerPointToContainerPoint: function(point) {
            return toPoint(point).add(this._getMapPanePos());
          },
          // @method containerPointToLatLng(point: Point): LatLng
          // Given a pixel coordinate relative to the map container, returns
          // the corresponding geographical coordinate (for the current zoom level).
          containerPointToLatLng: function(point) {
            var layerPoint = this.containerPointToLayerPoint(toPoint(point));
            return this.layerPointToLatLng(layerPoint);
          },
          // @method latLngToContainerPoint(latlng: LatLng): Point
          // Given a geographical coordinate, returns the corresponding pixel coordinate
          // relative to the map container.
          latLngToContainerPoint: function(latlng) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
          },
          // @method mouseEventToContainerPoint(ev: MouseEvent): Point
          // Given a MouseEvent object, returns the pixel coordinate relative to the
          // map container where the event took place.
          mouseEventToContainerPoint: function(e) {
            return getMousePosition(e, this._container);
          },
          // @method mouseEventToLayerPoint(ev: MouseEvent): Point
          // Given a MouseEvent object, returns the pixel coordinate relative to
          // the [origin pixel](#map-getpixelorigin) where the event took place.
          mouseEventToLayerPoint: function(e) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
          },
          // @method mouseEventToLatLng(ev: MouseEvent): LatLng
          // Given a MouseEvent object, returns geographical coordinate where the
          // event took place.
          mouseEventToLatLng: function(e) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
          },
          // map initialization methods
          _initContainer: function(id) {
            var container = this._container = get(id);
            if (!container) {
              throw new Error("Map container not found.");
            } else if (container._leaflet_id) {
              throw new Error("Map container is already initialized.");
            }
            on(container, "scroll", this._onScroll, this);
            this._containerId = stamp(container);
          },
          _initLayout: function() {
            var container = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Browser.any3d;
            addClass(container, "leaflet-container" + (Browser.touch ? " leaflet-touch" : "") + (Browser.retina ? " leaflet-retina" : "") + (Browser.ielt9 ? " leaflet-oldie" : "") + (Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var position = getStyle(container, "position");
            if (position !== "absolute" && position !== "relative" && position !== "fixed" && position !== "sticky") {
              container.style.position = "relative";
            }
            this._initPanes();
            if (this._initControlPos) {
              this._initControlPos();
            }
          },
          _initPanes: function() {
            var panes = this._panes = {};
            this._paneRenderers = {};
            this._mapPane = this.createPane("mapPane", this._container);
            setPosition(this._mapPane, new Point(0, 0));
            this.createPane("tilePane");
            this.createPane("overlayPane");
            this.createPane("shadowPane");
            this.createPane("markerPane");
            this.createPane("tooltipPane");
            this.createPane("popupPane");
            if (!this.options.markerZoomAnimation) {
              addClass(panes.markerPane, "leaflet-zoom-hide");
              addClass(panes.shadowPane, "leaflet-zoom-hide");
            }
          },
          // private methods that modify map state
          // @section Map state change events
          _resetView: function(center, zoom2, noMoveStart) {
            setPosition(this._mapPane, new Point(0, 0));
            var loading = !this._loaded;
            this._loaded = true;
            zoom2 = this._limitZoom(zoom2);
            this.fire("viewprereset");
            var zoomChanged = this._zoom !== zoom2;
            this._moveStart(zoomChanged, noMoveStart)._move(center, zoom2)._moveEnd(zoomChanged);
            this.fire("viewreset");
            if (loading) {
              this.fire("load");
            }
          },
          _moveStart: function(zoomChanged, noMoveStart) {
            if (zoomChanged) {
              this.fire("zoomstart");
            }
            if (!noMoveStart) {
              this.fire("movestart");
            }
            return this;
          },
          _move: function(center, zoom2, data, supressEvent) {
            if (zoom2 === void 0) {
              zoom2 = this._zoom;
            }
            var zoomChanged = this._zoom !== zoom2;
            this._zoom = zoom2;
            this._lastCenter = center;
            this._pixelOrigin = this._getNewPixelOrigin(center);
            if (!supressEvent) {
              if (zoomChanged || data && data.pinch) {
                this.fire("zoom", data);
              }
              this.fire("move", data);
            } else if (data && data.pinch) {
              this.fire("zoom", data);
            }
            return this;
          },
          _moveEnd: function(zoomChanged) {
            if (zoomChanged) {
              this.fire("zoomend");
            }
            return this.fire("moveend");
          },
          _stop: function() {
            cancelAnimFrame(this._flyToFrame);
            if (this._panAnim) {
              this._panAnim.stop();
            }
            return this;
          },
          _rawPanBy: function(offset) {
            setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
          },
          _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
          },
          _panInsideMaxBounds: function() {
            if (!this._enforcingBounds) {
              this.panInsideBounds(this.options.maxBounds);
            }
          },
          _checkIfLoaded: function() {
            if (!this._loaded) {
              throw new Error("Set map center and zoom first.");
            }
          },
          // DOM event handling
          // @section Interaction events
          _initEvents: function(remove2) {
            this._targets = {};
            this._targets[stamp(this._container)] = this;
            var onOff = remove2 ? off : on;
            onOff(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this);
            if (this.options.trackResize) {
              onOff(window, "resize", this._onResize, this);
            }
            if (Browser.any3d && this.options.transform3DLimit) {
              (remove2 ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
            }
          },
          _onResize: function() {
            cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = requestAnimFrame(
              function() {
                this.invalidateSize({ debounceMoveend: true });
              },
              this
            );
          },
          _onScroll: function() {
            this._container.scrollTop = 0;
            this._container.scrollLeft = 0;
          },
          _onMoveEnd: function() {
            var pos = this._getMapPanePos();
            if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
              this._resetView(this.getCenter(), this.getZoom());
            }
          },
          _findEventTargets: function(e, type) {
            var targets = [], target, isHover = type === "mouseout" || type === "mouseover", src = e.target || e.srcElement, dragging = false;
            while (src) {
              target = this._targets[stamp(src)];
              if (target && (type === "click" || type === "preclick") && this._draggableMoved(target)) {
                dragging = true;
                break;
              }
              if (target && target.listens(type, true)) {
                if (isHover && !isExternalTarget(src, e)) {
                  break;
                }
                targets.push(target);
                if (isHover) {
                  break;
                }
              }
              if (src === this._container) {
                break;
              }
              src = src.parentNode;
            }
            if (!targets.length && !dragging && !isHover && this.listens(type, true)) {
              targets = [this];
            }
            return targets;
          },
          _isClickDisabled: function(el) {
            while (el && el !== this._container) {
              if (el["_leaflet_disable_click"]) {
                return true;
              }
              el = el.parentNode;
            }
          },
          _handleDOMEvent: function(e) {
            var el = e.target || e.srcElement;
            if (!this._loaded || el["_leaflet_disable_events"] || e.type === "click" && this._isClickDisabled(el)) {
              return;
            }
            var type = e.type;
            if (type === "mousedown") {
              preventOutline(el);
            }
            this._fireDOMEvent(e, type);
          },
          _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
          _fireDOMEvent: function(e, type, canvasTargets) {
            if (e.type === "click") {
              var synth = extend2({}, e);
              synth.type = "preclick";
              this._fireDOMEvent(synth, synth.type, canvasTargets);
            }
            var targets = this._findEventTargets(e, type);
            if (canvasTargets) {
              var filtered = [];
              for (var i = 0; i < canvasTargets.length; i++) {
                if (canvasTargets[i].listens(type, true)) {
                  filtered.push(canvasTargets[i]);
                }
              }
              targets = filtered.concat(targets);
            }
            if (!targets.length) {
              return;
            }
            if (type === "contextmenu") {
              preventDefault(e);
            }
            var target = targets[0];
            var data = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
              data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
              data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
              data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
            }
            for (i = 0; i < targets.length; i++) {
              targets[i].fire(type, data, true);
              if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) {
                return;
              }
            }
          },
          _draggableMoved: function(obj) {
            obj = obj.dragging && obj.dragging.enabled() ? obj : this;
            return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
          },
          _clearHandlers: function() {
            for (var i = 0, len = this._handlers.length; i < len; i++) {
              this._handlers[i].disable();
            }
          },
          // @section Other Methods
          // @method whenReady(fn: Function, context?: Object): this
          // Runs the given function `fn` when the map gets initialized with
          // a view (center and zoom) and at least one layer, or immediately
          // if it's already initialized, optionally passing a function context.
          whenReady: function(callback, context) {
            if (this._loaded) {
              callback.call(context || this, { target: this });
            } else {
              this.on("load", callback, context);
            }
            return this;
          },
          // private methods for getting map state
          _getMapPanePos: function() {
            return getPosition(this._mapPane) || new Point(0, 0);
          },
          _moved: function() {
            var pos = this._getMapPanePos();
            return pos && !pos.equals([0, 0]);
          },
          _getTopLeftPoint: function(center, zoom2) {
            var pixelOrigin = center && zoom2 !== void 0 ? this._getNewPixelOrigin(center, zoom2) : this.getPixelOrigin();
            return pixelOrigin.subtract(this._getMapPanePos());
          },
          _getNewPixelOrigin: function(center, zoom2) {
            var viewHalf = this.getSize()._divideBy(2);
            return this.project(center, zoom2)._subtract(viewHalf)._add(this._getMapPanePos())._round();
          },
          _latLngToNewLayerPoint: function(latlng, zoom2, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom2);
            return this.project(latlng, zoom2)._subtract(topLeft);
          },
          _latLngBoundsToNewLayerBounds: function(latLngBounds, zoom2, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom2);
            return toBounds([
              this.project(latLngBounds.getSouthWest(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getNorthWest(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getSouthEast(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getNorthEast(), zoom2)._subtract(topLeft)
            ]);
          },
          // layer point of the current center
          _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
          },
          // offset of the specified place to the current center in pixels
          _getCenterOffset: function(latlng) {
            return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
          },
          // adjust center for view to get inside bounds
          _limitCenter: function(center, zoom2, bounds) {
            if (!bounds) {
              return center;
            }
            var centerPoint = this.project(center, zoom2), viewHalf = this.getSize().divideBy(2), viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)), offset = this._getBoundsOffset(viewBounds, bounds, zoom2);
            if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) {
              return center;
            }
            return this.unproject(centerPoint.add(offset), zoom2);
          },
          // adjust offset for view to get inside bounds
          _limitOffset: function(offset, bounds) {
            if (!bounds) {
              return offset;
            }
            var viewBounds = this.getPixelBounds(), newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
            return offset.add(this._getBoundsOffset(newBounds, bounds));
          },
          // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
          _getBoundsOffset: function(pxBounds, maxBounds, zoom2) {
            var projectedMaxBounds = toBounds(
              this.project(maxBounds.getNorthEast(), zoom2),
              this.project(maxBounds.getSouthWest(), zoom2)
            ), minOffset = projectedMaxBounds.min.subtract(pxBounds.min), maxOffset = projectedMaxBounds.max.subtract(pxBounds.max), dx = this._rebound(minOffset.x, -maxOffset.x), dy = this._rebound(minOffset.y, -maxOffset.y);
            return new Point(dx, dy);
          },
          _rebound: function(left, right) {
            return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
          },
          _limitZoom: function(zoom2) {
            var min = this.getMinZoom(), max = this.getMaxZoom(), snap = Browser.any3d ? this.options.zoomSnap : 1;
            if (snap) {
              zoom2 = Math.round(zoom2 / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom2));
          },
          _onPanTransitionStep: function() {
            this.fire("move");
          },
          _onPanTransitionEnd: function() {
            removeClass(this._mapPane, "leaflet-pan-anim");
            this.fire("moveend");
          },
          _tryAnimatedPan: function(center, options) {
            var offset = this._getCenterOffset(center)._trunc();
            if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
              return false;
            }
            this.panBy(offset, options);
            return true;
          },
          _createAnimProxy: function() {
            var proxy = this._proxy = create$1("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(proxy);
            this.on("zoomanim", function(e) {
              var prop = TRANSFORM, transform = this._proxy.style[prop];
              setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
              if (transform === this._proxy.style[prop] && this._animatingZoom) {
                this._onZoomTransitionEnd();
              }
            }, this);
            this.on("load moveend", this._animMoveEnd, this);
            this._on("unload", this._destroyAnimProxy, this);
          },
          _destroyAnimProxy: function() {
            remove(this._proxy);
            this.off("load moveend", this._animMoveEnd, this);
            delete this._proxy;
          },
          _animMoveEnd: function() {
            var c = this.getCenter(), z = this.getZoom();
            setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
          },
          _catchTransitionEnd: function(e) {
            if (this._animatingZoom && e.propertyName.indexOf("transform") >= 0) {
              this._onZoomTransitionEnd();
            }
          },
          _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
          },
          _tryAnimatedZoom: function(center, zoom2, options) {
            if (this._animatingZoom) {
              return true;
            }
            options = options || {};
            if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom2 - this._zoom) > this.options.zoomAnimationThreshold) {
              return false;
            }
            var scale2 = this.getZoomScale(zoom2), offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale2);
            if (options.animate !== true && !this.getSize().contains(offset)) {
              return false;
            }
            requestAnimFrame(function() {
              this._moveStart(true, options.noMoveStart || false)._animateZoom(center, zoom2, true);
            }, this);
            return true;
          },
          _animateZoom: function(center, zoom2, startAnim, noUpdate) {
            if (!this._mapPane) {
              return;
            }
            if (startAnim) {
              this._animatingZoom = true;
              this._animateToCenter = center;
              this._animateToZoom = zoom2;
              addClass(this._mapPane, "leaflet-zoom-anim");
            }
            this.fire("zoomanim", {
              center,
              zoom: zoom2,
              noUpdate
            });
            if (!this._tempFireZoomEvent) {
              this._tempFireZoomEvent = this._zoom !== this._animateToZoom;
            }
            this._move(this._animateToCenter, this._animateToZoom, void 0, true);
            setTimeout(bind2(this._onZoomTransitionEnd, this), 250);
          },
          _onZoomTransitionEnd: function() {
            if (!this._animatingZoom) {
              return;
            }
            if (this._mapPane) {
              removeClass(this._mapPane, "leaflet-zoom-anim");
            }
            this._animatingZoom = false;
            this._move(this._animateToCenter, this._animateToZoom, void 0, true);
            if (this._tempFireZoomEvent) {
              this.fire("zoom");
            }
            delete this._tempFireZoomEvent;
            this.fire("move");
            this._moveEnd(true);
          }
        });
        function createMap(id, options) {
          return new Map(id, options);
        }
        var Control = Class.extend({
          // @section
          // @aka Control Options
          options: {
            // @option position: String = 'topright'
            // The position of the control (one of the map corners). Possible values are `'topleft'`,
            // `'topright'`, `'bottomleft'` or `'bottomright'`
            position: "topright"
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          /* @section
           * Classes extending L.Control will inherit the following methods:
           *
           * @method getPosition: string
           * Returns the position of the control.
           */
          getPosition: function() {
            return this.options.position;
          },
          // @method setPosition(position: string): this
          // Sets the position of the control.
          setPosition: function(position) {
            var map = this._map;
            if (map) {
              map.removeControl(this);
            }
            this.options.position = position;
            if (map) {
              map.addControl(this);
            }
            return this;
          },
          // @method getContainer: HTMLElement
          // Returns the HTMLElement that contains the control.
          getContainer: function() {
            return this._container;
          },
          // @method addTo(map: Map): this
          // Adds the control to the given map.
          addTo: function(map) {
            this.remove();
            this._map = map;
            var container = this._container = this.onAdd(map), pos = this.getPosition(), corner = map._controlCorners[pos];
            addClass(container, "leaflet-control");
            if (pos.indexOf("bottom") !== -1) {
              corner.insertBefore(container, corner.firstChild);
            } else {
              corner.appendChild(container);
            }
            this._map.on("unload", this.remove, this);
            return this;
          },
          // @method remove: this
          // Removes the control from the map it is currently active on.
          remove: function() {
            if (!this._map) {
              return this;
            }
            remove(this._container);
            if (this.onRemove) {
              this.onRemove(this._map);
            }
            this._map.off("unload", this.remove, this);
            this._map = null;
            return this;
          },
          _refocusOnMap: function(e) {
            if (this._map && e && e.screenX > 0 && e.screenY > 0) {
              this._map.getContainer().focus();
            }
          }
        });
        var control = function(options) {
          return new Control(options);
        };
        Map.include({
          // @method addControl(control: Control): this
          // Adds the given control to the map
          addControl: function(control2) {
            control2.addTo(this);
            return this;
          },
          // @method removeControl(control: Control): this
          // Removes the given control from the map
          removeControl: function(control2) {
            control2.remove();
            return this;
          },
          _initControlPos: function() {
            var corners = this._controlCorners = {}, l = "leaflet-", container = this._controlContainer = create$1("div", l + "control-container", this._container);
            function createCorner(vSide, hSide) {
              var className = l + vSide + " " + l + hSide;
              corners[vSide + hSide] = create$1("div", className, container);
            }
            createCorner("top", "left");
            createCorner("top", "right");
            createCorner("bottom", "left");
            createCorner("bottom", "right");
          },
          _clearControlPos: function() {
            for (var i in this._controlCorners) {
              remove(this._controlCorners[i]);
            }
            remove(this._controlContainer);
            delete this._controlCorners;
            delete this._controlContainer;
          }
        });
        var Layers = Control.extend({
          // @section
          // @aka Control.Layers options
          options: {
            // @option collapsed: Boolean = true
            // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
            collapsed: true,
            position: "topright",
            // @option autoZIndex: Boolean = true
            // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
            autoZIndex: true,
            // @option hideSingleBase: Boolean = false
            // If `true`, the base layers in the control will be hidden when there is only one.
            hideSingleBase: false,
            // @option sortLayers: Boolean = false
            // Whether to sort the layers. When `false`, layers will keep the order
            // in which they were added to the control.
            sortLayers: false,
            // @option sortFunction: Function = *
            // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
            // that will be used for sorting the layers, when `sortLayers` is `true`.
            // The function receives both the `L.Layer` instances and their names, as in
            // `sortFunction(layerA, layerB, nameA, nameB)`.
            // By default, it sorts layers alphabetically by their name.
            sortFunction: function(layerA, layerB, nameA, nameB) {
              return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
            }
          },
          initialize: function(baseLayers, overlays, options) {
            setOptions(this, options);
            this._layerControlInputs = [];
            this._layers = [];
            this._lastZIndex = 0;
            this._handlingClick = false;
            this._preventClick = false;
            for (var i in baseLayers) {
              this._addLayer(baseLayers[i], i);
            }
            for (i in overlays) {
              this._addLayer(overlays[i], i, true);
            }
          },
          onAdd: function(map) {
            this._initLayout();
            this._update();
            this._map = map;
            map.on("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) {
              this._layers[i].layer.on("add remove", this._onLayerChange, this);
            }
            return this._container;
          },
          addTo: function(map) {
            Control.prototype.addTo.call(this, map);
            return this._expandIfNotCollapsed();
          },
          onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) {
              this._layers[i].layer.off("add remove", this._onLayerChange, this);
            }
          },
          // @method addBaseLayer(layer: Layer, name: String): this
          // Adds a base layer (radio button entry) with the given name to the control.
          addBaseLayer: function(layer, name) {
            this._addLayer(layer, name);
            return this._map ? this._update() : this;
          },
          // @method addOverlay(layer: Layer, name: String): this
          // Adds an overlay (checkbox entry) with the given name to the control.
          addOverlay: function(layer, name) {
            this._addLayer(layer, name, true);
            return this._map ? this._update() : this;
          },
          // @method removeLayer(layer: Layer): this
          // Remove the given layer from the control.
          removeLayer: function(layer) {
            layer.off("add remove", this._onLayerChange, this);
            var obj = this._getLayer(stamp(layer));
            if (obj) {
              this._layers.splice(this._layers.indexOf(obj), 1);
            }
            return this._map ? this._update() : this;
          },
          // @method expand(): this
          // Expand the control container if collapsed.
          expand: function() {
            addClass(this._container, "leaflet-control-layers-expanded");
            this._section.style.height = null;
            var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
            if (acceptableHeight < this._section.clientHeight) {
              addClass(this._section, "leaflet-control-layers-scrollbar");
              this._section.style.height = acceptableHeight + "px";
            } else {
              removeClass(this._section, "leaflet-control-layers-scrollbar");
            }
            this._checkDisabledLayers();
            return this;
          },
          // @method collapse(): this
          // Collapse the control container if expanded.
          collapse: function() {
            removeClass(this._container, "leaflet-control-layers-expanded");
            return this;
          },
          _initLayout: function() {
            var className = "leaflet-control-layers", container = this._container = create$1("div", className), collapsed = this.options.collapsed;
            container.setAttribute("aria-haspopup", true);
            disableClickPropagation(container);
            disableScrollPropagation(container);
            var section = this._section = create$1("section", className + "-list");
            if (collapsed) {
              this._map.on("click", this.collapse, this);
              on(container, {
                mouseenter: this._expandSafely,
                mouseleave: this.collapse
              }, this);
            }
            var link = this._layersLink = create$1("a", className + "-toggle", container);
            link.href = "#";
            link.title = "Layers";
            link.setAttribute("role", "button");
            on(link, {
              keydown: function(e) {
                if (e.keyCode === 13) {
                  this._expandSafely();
                }
              },
              // Certain screen readers intercept the key event and instead send a click event
              click: function(e) {
                preventDefault(e);
                this._expandSafely();
              }
            }, this);
            if (!collapsed) {
              this.expand();
            }
            this._baseLayersList = create$1("div", className + "-base", section);
            this._separator = create$1("div", className + "-separator", section);
            this._overlaysList = create$1("div", className + "-overlays", section);
            container.appendChild(section);
          },
          _getLayer: function(id) {
            for (var i = 0; i < this._layers.length; i++) {
              if (this._layers[i] && stamp(this._layers[i].layer) === id) {
                return this._layers[i];
              }
            }
          },
          _addLayer: function(layer, name, overlay) {
            if (this._map) {
              layer.on("add remove", this._onLayerChange, this);
            }
            this._layers.push({
              layer,
              name,
              overlay
            });
            if (this.options.sortLayers) {
              this._layers.sort(bind2(function(a, b) {
                return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
              }, this));
            }
            if (this.options.autoZIndex && layer.setZIndex) {
              this._lastZIndex++;
              layer.setZIndex(this._lastZIndex);
            }
            this._expandIfNotCollapsed();
          },
          _update: function() {
            if (!this._container) {
              return this;
            }
            empty(this._baseLayersList);
            empty(this._overlaysList);
            this._layerControlInputs = [];
            var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;
            for (i = 0; i < this._layers.length; i++) {
              obj = this._layers[i];
              this._addItem(obj);
              overlaysPresent = overlaysPresent || obj.overlay;
              baseLayersPresent = baseLayersPresent || !obj.overlay;
              baseLayersCount += !obj.overlay ? 1 : 0;
            }
            if (this.options.hideSingleBase) {
              baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
              this._baseLayersList.style.display = baseLayersPresent ? "" : "none";
            }
            this._separator.style.display = overlaysPresent && baseLayersPresent ? "" : "none";
            return this;
          },
          _onLayerChange: function(e) {
            if (!this._handlingClick) {
              this._update();
            }
            var obj = this._getLayer(stamp(e.target));
            var type = obj.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
            if (type) {
              this._map.fire(type, obj);
            }
          },
          // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
          _createRadioElement: function(name, checked) {
            var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : "") + "/>";
            var radioFragment = document.createElement("div");
            radioFragment.innerHTML = radioHtml;
            return radioFragment.firstChild;
          },
          _addItem: function(obj) {
            var label = document.createElement("label"), checked = this._map.hasLayer(obj.layer), input;
            if (obj.overlay) {
              input = document.createElement("input");
              input.type = "checkbox";
              input.className = "leaflet-control-layers-selector";
              input.defaultChecked = checked;
            } else {
              input = this._createRadioElement("leaflet-base-layers_" + stamp(this), checked);
            }
            this._layerControlInputs.push(input);
            input.layerId = stamp(obj.layer);
            on(input, "click", this._onInputClick, this);
            var name = document.createElement("span");
            name.innerHTML = " " + obj.name;
            var holder = document.createElement("span");
            label.appendChild(holder);
            holder.appendChild(input);
            holder.appendChild(name);
            var container = obj.overlay ? this._overlaysList : this._baseLayersList;
            container.appendChild(label);
            this._checkDisabledLayers();
            return label;
          },
          _onInputClick: function() {
            if (this._preventClick) {
              return;
            }
            var inputs = this._layerControlInputs, input, layer;
            var addedLayers = [], removedLayers = [];
            this._handlingClick = true;
            for (var i = inputs.length - 1; i >= 0; i--) {
              input = inputs[i];
              layer = this._getLayer(input.layerId).layer;
              if (input.checked) {
                addedLayers.push(layer);
              } else if (!input.checked) {
                removedLayers.push(layer);
              }
            }
            for (i = 0; i < removedLayers.length; i++) {
              if (this._map.hasLayer(removedLayers[i])) {
                this._map.removeLayer(removedLayers[i]);
              }
            }
            for (i = 0; i < addedLayers.length; i++) {
              if (!this._map.hasLayer(addedLayers[i])) {
                this._map.addLayer(addedLayers[i]);
              }
            }
            this._handlingClick = false;
            this._refocusOnMap();
          },
          _checkDisabledLayers: function() {
            var inputs = this._layerControlInputs, input, layer, zoom2 = this._map.getZoom();
            for (var i = inputs.length - 1; i >= 0; i--) {
              input = inputs[i];
              layer = this._getLayer(input.layerId).layer;
              input.disabled = layer.options.minZoom !== void 0 && zoom2 < layer.options.minZoom || layer.options.maxZoom !== void 0 && zoom2 > layer.options.maxZoom;
            }
          },
          _expandIfNotCollapsed: function() {
            if (this._map && !this.options.collapsed) {
              this.expand();
            }
            return this;
          },
          _expandSafely: function() {
            var section = this._section;
            this._preventClick = true;
            on(section, "click", preventDefault);
            this.expand();
            var that = this;
            setTimeout(function() {
              off(section, "click", preventDefault);
              that._preventClick = false;
            });
          }
        });
        var layers = function(baseLayers, overlays, options) {
          return new Layers(baseLayers, overlays, options);
        };
        var Zoom = Control.extend({
          // @section
          // @aka Control.Zoom options
          options: {
            position: "topleft",
            // @option zoomInText: String = '<span aria-hidden="true">+</span>'
            // The text set on the 'zoom in' button.
            zoomInText: '<span aria-hidden="true">+</span>',
            // @option zoomInTitle: String = 'Zoom in'
            // The title set on the 'zoom in' button.
            zoomInTitle: "Zoom in",
            // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
            // The text set on the 'zoom out' button.
            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
            // @option zoomOutTitle: String = 'Zoom out'
            // The title set on the 'zoom out' button.
            zoomOutTitle: "Zoom out"
          },
          onAdd: function(map) {
            var zoomName = "leaflet-control-zoom", container = create$1("div", zoomName + " leaflet-bar"), options = this.options;
            this._zoomInButton = this._createButton(
              options.zoomInText,
              options.zoomInTitle,
              zoomName + "-in",
              container,
              this._zoomIn
            );
            this._zoomOutButton = this._createButton(
              options.zoomOutText,
              options.zoomOutTitle,
              zoomName + "-out",
              container,
              this._zoomOut
            );
            this._updateDisabled();
            map.on("zoomend zoomlevelschange", this._updateDisabled, this);
            return container;
          },
          onRemove: function(map) {
            map.off("zoomend zoomlevelschange", this._updateDisabled, this);
          },
          disable: function() {
            this._disabled = true;
            this._updateDisabled();
            return this;
          },
          enable: function() {
            this._disabled = false;
            this._updateDisabled();
            return this;
          },
          _zoomIn: function(e) {
            if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
              this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
            }
          },
          _zoomOut: function(e) {
            if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
              this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
            }
          },
          _createButton: function(html, title, className, container, fn) {
            var link = create$1("a", className, container);
            link.innerHTML = html;
            link.href = "#";
            link.title = title;
            link.setAttribute("role", "button");
            link.setAttribute("aria-label", title);
            disableClickPropagation(link);
            on(link, "click", stop);
            on(link, "click", fn, this);
            on(link, "click", this._refocusOnMap, this);
            return link;
          },
          _updateDisabled: function() {
            var map = this._map, className = "leaflet-disabled";
            removeClass(this._zoomInButton, className);
            removeClass(this._zoomOutButton, className);
            this._zoomInButton.setAttribute("aria-disabled", "false");
            this._zoomOutButton.setAttribute("aria-disabled", "false");
            if (this._disabled || map._zoom === map.getMinZoom()) {
              addClass(this._zoomOutButton, className);
              this._zoomOutButton.setAttribute("aria-disabled", "true");
            }
            if (this._disabled || map._zoom === map.getMaxZoom()) {
              addClass(this._zoomInButton, className);
              this._zoomInButton.setAttribute("aria-disabled", "true");
            }
          }
        });
        Map.mergeOptions({
          zoomControl: true
        });
        Map.addInitHook(function() {
          if (this.options.zoomControl) {
            this.zoomControl = new Zoom();
            this.addControl(this.zoomControl);
          }
        });
        var zoom = function(options) {
          return new Zoom(options);
        };
        var Scale = Control.extend({
          // @section
          // @aka Control.Scale options
          options: {
            position: "bottomleft",
            // @option maxWidth: Number = 100
            // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
            maxWidth: 100,
            // @option metric: Boolean = True
            // Whether to show the metric scale line (m/km).
            metric: true,
            // @option imperial: Boolean = True
            // Whether to show the imperial scale line (mi/ft).
            imperial: true
            // @option updateWhenIdle: Boolean = false
            // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
          },
          onAdd: function(map) {
            var className = "leaflet-control-scale", container = create$1("div", className), options = this.options;
            this._addScales(options, className + "-line", container);
            map.on(options.updateWhenIdle ? "moveend" : "move", this._update, this);
            map.whenReady(this._update, this);
            return container;
          },
          onRemove: function(map) {
            map.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
          },
          _addScales: function(options, className, container) {
            if (options.metric) {
              this._mScale = create$1("div", className, container);
            }
            if (options.imperial) {
              this._iScale = create$1("div", className, container);
            }
          },
          _update: function() {
            var map = this._map, y = map.getSize().y / 2;
            var maxMeters = map.distance(
              map.containerPointToLatLng([0, y]),
              map.containerPointToLatLng([this.options.maxWidth, y])
            );
            this._updateScales(maxMeters);
          },
          _updateScales: function(maxMeters) {
            if (this.options.metric && maxMeters) {
              this._updateMetric(maxMeters);
            }
            if (this.options.imperial && maxMeters) {
              this._updateImperial(maxMeters);
            }
          },
          _updateMetric: function(maxMeters) {
            var meters = this._getRoundNum(maxMeters), label = meters < 1e3 ? meters + " m" : meters / 1e3 + " km";
            this._updateScale(this._mScale, label, meters / maxMeters);
          },
          _updateImperial: function(maxMeters) {
            var maxFeet = maxMeters * 3.2808399, maxMiles, miles, feet;
            if (maxFeet > 5280) {
              maxMiles = maxFeet / 5280;
              miles = this._getRoundNum(maxMiles);
              this._updateScale(this._iScale, miles + " mi", miles / maxMiles);
            } else {
              feet = this._getRoundNum(maxFeet);
              this._updateScale(this._iScale, feet + " ft", feet / maxFeet);
            }
          },
          _updateScale: function(scale2, text, ratio) {
            scale2.style.width = Math.round(this.options.maxWidth * ratio) + "px";
            scale2.innerHTML = text;
          },
          _getRoundNum: function(num) {
            var pow10 = Math.pow(10, (Math.floor(num) + "").length - 1), d = num / pow10;
            d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
            return pow10 * d;
          }
        });
        var scale = function(options) {
          return new Scale(options);
        };
        var ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';
        var Attribution = Control.extend({
          // @section
          // @aka Control.Attribution options
          options: {
            position: "bottomright",
            // @option prefix: String|false = 'Leaflet'
            // The HTML text shown before the attributions. Pass `false` to disable.
            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Browser.inlineSvg ? ukrainianFlag + " " : "") + "Leaflet</a>"
          },
          initialize: function(options) {
            setOptions(this, options);
            this._attributions = {};
          },
          onAdd: function(map) {
            map.attributionControl = this;
            this._container = create$1("div", "leaflet-control-attribution");
            disableClickPropagation(this._container);
            for (var i in map._layers) {
              if (map._layers[i].getAttribution) {
                this.addAttribution(map._layers[i].getAttribution());
              }
            }
            this._update();
            map.on("layeradd", this._addAttribution, this);
            return this._container;
          },
          onRemove: function(map) {
            map.off("layeradd", this._addAttribution, this);
          },
          _addAttribution: function(ev) {
            if (ev.layer.getAttribution) {
              this.addAttribution(ev.layer.getAttribution());
              ev.layer.once("remove", function() {
                this.removeAttribution(ev.layer.getAttribution());
              }, this);
            }
          },
          // @method setPrefix(prefix: String|false): this
          // The HTML text shown before the attributions. Pass `false` to disable.
          setPrefix: function(prefix) {
            this.options.prefix = prefix;
            this._update();
            return this;
          },
          // @method addAttribution(text: String): this
          // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
          addAttribution: function(text) {
            if (!text) {
              return this;
            }
            if (!this._attributions[text]) {
              this._attributions[text] = 0;
            }
            this._attributions[text]++;
            this._update();
            return this;
          },
          // @method removeAttribution(text: String): this
          // Removes an attribution text.
          removeAttribution: function(text) {
            if (!text) {
              return this;
            }
            if (this._attributions[text]) {
              this._attributions[text]--;
              this._update();
            }
            return this;
          },
          _update: function() {
            if (!this._map) {
              return;
            }
            var attribs = [];
            for (var i in this._attributions) {
              if (this._attributions[i]) {
                attribs.push(i);
              }
            }
            var prefixAndAttribs = [];
            if (this.options.prefix) {
              prefixAndAttribs.push(this.options.prefix);
            }
            if (attribs.length) {
              prefixAndAttribs.push(attribs.join(", "));
            }
            this._container.innerHTML = prefixAndAttribs.join(' <span aria-hidden="true">|</span> ');
          }
        });
        Map.mergeOptions({
          attributionControl: true
        });
        Map.addInitHook(function() {
          if (this.options.attributionControl) {
            new Attribution().addTo(this);
          }
        });
        var attribution = function(options) {
          return new Attribution(options);
        };
        Control.Layers = Layers;
        Control.Zoom = Zoom;
        Control.Scale = Scale;
        Control.Attribution = Attribution;
        control.layers = layers;
        control.zoom = zoom;
        control.scale = scale;
        control.attribution = attribution;
        var Handler = Class.extend({
          initialize: function(map) {
            this._map = map;
          },
          // @method enable(): this
          // Enables the handler
          enable: function() {
            if (this._enabled) {
              return this;
            }
            this._enabled = true;
            this.addHooks();
            return this;
          },
          // @method disable(): this
          // Disables the handler
          disable: function() {
            if (!this._enabled) {
              return this;
            }
            this._enabled = false;
            this.removeHooks();
            return this;
          },
          // @method enabled(): Boolean
          // Returns `true` if the handler is enabled
          enabled: function() {
            return !!this._enabled;
          }
          // @section Extension methods
          // Classes inheriting from `Handler` must implement the two following methods:
          // @method addHooks()
          // Called when the handler is enabled, should add event hooks.
          // @method removeHooks()
          // Called when the handler is disabled, should remove the event hooks added previously.
        });
        Handler.addTo = function(map, name) {
          map.addHandler(name, this);
          return this;
        };
        var Mixin = { Events };
        var START = Browser.touch ? "touchstart mousedown" : "mousedown";
        var Draggable = Evented.extend({
          options: {
            // @section
            // @aka Draggable options
            // @option clickTolerance: Number = 3
            // The max number of pixels a user can shift the mouse pointer during a click
            // for it to be considered a valid click (as opposed to a mouse drag).
            clickTolerance: 3
          },
          // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
          // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
          initialize: function(element, dragStartTarget, preventOutline2, options) {
            setOptions(this, options);
            this._element = element;
            this._dragStartTarget = dragStartTarget || element;
            this._preventOutline = preventOutline2;
          },
          // @method enable()
          // Enables the dragging ability
          enable: function() {
            if (this._enabled) {
              return;
            }
            on(this._dragStartTarget, START, this._onDown, this);
            this._enabled = true;
          },
          // @method disable()
          // Disables the dragging ability
          disable: function() {
            if (!this._enabled) {
              return;
            }
            if (Draggable._dragging === this) {
              this.finishDrag(true);
            }
            off(this._dragStartTarget, START, this._onDown, this);
            this._enabled = false;
            this._moved = false;
          },
          _onDown: function(e) {
            if (!this._enabled) {
              return;
            }
            this._moved = false;
            if (hasClass(this._element, "leaflet-zoom-anim")) {
              return;
            }
            if (e.touches && e.touches.length !== 1) {
              if (Draggable._dragging === this) {
                this.finishDrag();
              }
              return;
            }
            if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
              return;
            }
            Draggable._dragging = this;
            if (this._preventOutline) {
              preventOutline(this._element);
            }
            disableImageDrag();
            disableTextSelection();
            if (this._moving) {
              return;
            }
            this.fire("down");
            var first = e.touches ? e.touches[0] : e, sizedParent = getSizedParentNode(this._element);
            this._startPoint = new Point(first.clientX, first.clientY);
            this._startPos = getPosition(this._element);
            this._parentScale = getScale(sizedParent);
            var mouseevent = e.type === "mousedown";
            on(document, mouseevent ? "mousemove" : "touchmove", this._onMove, this);
            on(document, mouseevent ? "mouseup" : "touchend touchcancel", this._onUp, this);
          },
          _onMove: function(e) {
            if (!this._enabled) {
              return;
            }
            if (e.touches && e.touches.length > 1) {
              this._moved = true;
              return;
            }
            var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);
            if (!offset.x && !offset.y) {
              return;
            }
            if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
              return;
            }
            offset.x /= this._parentScale.x;
            offset.y /= this._parentScale.y;
            preventDefault(e);
            if (!this._moved) {
              this.fire("dragstart");
              this._moved = true;
              addClass(document.body, "leaflet-dragging");
              this._lastTarget = e.target || e.srcElement;
              if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) {
                this._lastTarget = this._lastTarget.correspondingUseElement;
              }
              addClass(this._lastTarget, "leaflet-drag-target");
            }
            this._newPos = this._startPos.add(offset);
            this._moving = true;
            this._lastEvent = e;
            this._updatePosition();
          },
          _updatePosition: function() {
            var e = { originalEvent: this._lastEvent };
            this.fire("predrag", e);
            setPosition(this._element, this._newPos);
            this.fire("drag", e);
          },
          _onUp: function() {
            if (!this._enabled) {
              return;
            }
            this.finishDrag();
          },
          finishDrag: function(noInertia) {
            removeClass(document.body, "leaflet-dragging");
            if (this._lastTarget) {
              removeClass(this._lastTarget, "leaflet-drag-target");
              this._lastTarget = null;
            }
            off(document, "mousemove touchmove", this._onMove, this);
            off(document, "mouseup touchend touchcancel", this._onUp, this);
            enableImageDrag();
            enableTextSelection();
            var fireDragend = this._moved && this._moving;
            this._moving = false;
            Draggable._dragging = false;
            if (fireDragend) {
              this.fire("dragend", {
                noInertia,
                distance: this._newPos.distanceTo(this._startPos)
              });
            }
          }
        });
        function clipPolygon(points, bounds, round) {
          var clippedPoints, edges = [1, 4, 2, 8], i, j, k, a, b, len, edge2, p;
          for (i = 0, len = points.length; i < len; i++) {
            points[i]._code = _getBitCode(points[i], bounds);
          }
          for (k = 0; k < 4; k++) {
            edge2 = edges[k];
            clippedPoints = [];
            for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
              a = points[i];
              b = points[j];
              if (!(a._code & edge2)) {
                if (b._code & edge2) {
                  p = _getEdgeIntersection(b, a, edge2, bounds, round);
                  p._code = _getBitCode(p, bounds);
                  clippedPoints.push(p);
                }
                clippedPoints.push(a);
              } else if (!(b._code & edge2)) {
                p = _getEdgeIntersection(b, a, edge2, bounds, round);
                p._code = _getBitCode(p, bounds);
                clippedPoints.push(p);
              }
            }
            points = clippedPoints;
          }
          return points;
        }
        function polygonCenter(latlngs, crs) {
          var i, j, p1, p2, f, area, x, y, center;
          if (!latlngs || latlngs.length === 0) {
            throw new Error("latlngs not passed");
          }
          if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
          }
          var centroidLatLng = toLatLng([0, 0]);
          var bounds = toLatLngBounds(latlngs);
          var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
          if (areaBounds < 1700) {
            centroidLatLng = centroid(latlngs);
          }
          var len = latlngs.length;
          var points = [];
          for (i = 0; i < len; i++) {
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));
          }
          area = x = y = 0;
          for (i = 0, j = len - 1; i < len; j = i++) {
            p1 = points[i];
            p2 = points[j];
            f = p1.y * p2.x - p2.y * p1.x;
            x += (p1.x + p2.x) * f;
            y += (p1.y + p2.y) * f;
            area += f * 3;
          }
          if (area === 0) {
            center = points[0];
          } else {
            center = [x / area, y / area];
          }
          var latlngCenter = crs.unproject(toPoint(center));
          return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);
        }
        function centroid(coords) {
          var latSum = 0;
          var lngSum = 0;
          var len = 0;
          for (var i = 0; i < coords.length; i++) {
            var latlng = toLatLng(coords[i]);
            latSum += latlng.lat;
            lngSum += latlng.lng;
            len++;
          }
          return toLatLng([latSum / len, lngSum / len]);
        }
        var PolyUtil = {
          __proto__: null,
          clipPolygon,
          polygonCenter,
          centroid
        };
        function simplify(points, tolerance) {
          if (!tolerance || !points.length) {
            return points.slice();
          }
          var sqTolerance = tolerance * tolerance;
          points = _reducePoints(points, sqTolerance);
          points = _simplifyDP(points, sqTolerance);
          return points;
        }
        function pointToSegmentDistance(p, p1, p2) {
          return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
        }
        function closestPointOnSegment(p, p1, p2) {
          return _sqClosestPointOnSegment(p, p1, p2);
        }
        function _simplifyDP(points, sqTolerance) {
          var len = points.length, ArrayConstructor = typeof Uint8Array !== "undefined" ? Uint8Array : Array, markers = new ArrayConstructor(len);
          markers[0] = markers[len - 1] = 1;
          _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
          var i, newPoints = [];
          for (i = 0; i < len; i++) {
            if (markers[i]) {
              newPoints.push(points[i]);
            }
          }
          return newPoints;
        }
        function _simplifyDPStep(points, markers, sqTolerance, first, last) {
          var maxSqDist = 0, index2, i, sqDist;
          for (i = first + 1; i <= last - 1; i++) {
            sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);
            if (sqDist > maxSqDist) {
              index2 = i;
              maxSqDist = sqDist;
            }
          }
          if (maxSqDist > sqTolerance) {
            markers[index2] = 1;
            _simplifyDPStep(points, markers, sqTolerance, first, index2);
            _simplifyDPStep(points, markers, sqTolerance, index2, last);
          }
        }
        function _reducePoints(points, sqTolerance) {
          var reducedPoints = [points[0]];
          for (var i = 1, prev = 0, len = points.length; i < len; i++) {
            if (_sqDist(points[i], points[prev]) > sqTolerance) {
              reducedPoints.push(points[i]);
              prev = i;
            }
          }
          if (prev < len - 1) {
            reducedPoints.push(points[len - 1]);
          }
          return reducedPoints;
        }
        var _lastCode;
        function clipSegment(a, b, bounds, useLastCode, round) {
          var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds), codeB = _getBitCode(b, bounds), codeOut, p, newCode;
          _lastCode = codeB;
          while (true) {
            if (!(codeA | codeB)) {
              return [a, b];
            }
            if (codeA & codeB) {
              return false;
            }
            codeOut = codeA || codeB;
            p = _getEdgeIntersection(a, b, codeOut, bounds, round);
            newCode = _getBitCode(p, bounds);
            if (codeOut === codeA) {
              a = p;
              codeA = newCode;
            } else {
              b = p;
              codeB = newCode;
            }
          }
        }
        function _getEdgeIntersection(a, b, code, bounds, round) {
          var dx = b.x - a.x, dy = b.y - a.y, min = bounds.min, max = bounds.max, x, y;
          if (code & 8) {
            x = a.x + dx * (max.y - a.y) / dy;
            y = max.y;
          } else if (code & 4) {
            x = a.x + dx * (min.y - a.y) / dy;
            y = min.y;
          } else if (code & 2) {
            x = max.x;
            y = a.y + dy * (max.x - a.x) / dx;
          } else if (code & 1) {
            x = min.x;
            y = a.y + dy * (min.x - a.x) / dx;
          }
          return new Point(x, y, round);
        }
        function _getBitCode(p, bounds) {
          var code = 0;
          if (p.x < bounds.min.x) {
            code |= 1;
          } else if (p.x > bounds.max.x) {
            code |= 2;
          }
          if (p.y < bounds.min.y) {
            code |= 4;
          } else if (p.y > bounds.max.y) {
            code |= 8;
          }
          return code;
        }
        function _sqDist(p1, p2) {
          var dx = p2.x - p1.x, dy = p2.y - p1.y;
          return dx * dx + dy * dy;
        }
        function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
          var x = p1.x, y = p1.y, dx = p2.x - x, dy = p2.y - y, dot = dx * dx + dy * dy, t;
          if (dot > 0) {
            t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
            if (t > 1) {
              x = p2.x;
              y = p2.y;
            } else if (t > 0) {
              x += dx * t;
              y += dy * t;
            }
          }
          dx = p.x - x;
          dy = p.y - y;
          return sqDist ? dx * dx + dy * dy : new Point(x, y);
        }
        function isFlat(latlngs) {
          return !isArray2(latlngs[0]) || typeof latlngs[0][0] !== "object" && typeof latlngs[0][0] !== "undefined";
        }
        function _flat(latlngs) {
          console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead.");
          return isFlat(latlngs);
        }
        function polylineCenter(latlngs, crs) {
          var i, halfDist, segDist, dist, p1, p2, ratio, center;
          if (!latlngs || latlngs.length === 0) {
            throw new Error("latlngs not passed");
          }
          if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
          }
          var centroidLatLng = toLatLng([0, 0]);
          var bounds = toLatLngBounds(latlngs);
          var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
          if (areaBounds < 1700) {
            centroidLatLng = centroid(latlngs);
          }
          var len = latlngs.length;
          var points = [];
          for (i = 0; i < len; i++) {
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));
          }
          for (i = 0, halfDist = 0; i < len - 1; i++) {
            halfDist += points[i].distanceTo(points[i + 1]) / 2;
          }
          if (halfDist === 0) {
            center = points[0];
          } else {
            for (i = 0, dist = 0; i < len - 1; i++) {
              p1 = points[i];
              p2 = points[i + 1];
              segDist = p1.distanceTo(p2);
              dist += segDist;
              if (dist > halfDist) {
                ratio = (dist - halfDist) / segDist;
                center = [
                  p2.x - ratio * (p2.x - p1.x),
                  p2.y - ratio * (p2.y - p1.y)
                ];
                break;
              }
            }
          }
          var latlngCenter = crs.unproject(toPoint(center));
          return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);
        }
        var LineUtil = {
          __proto__: null,
          simplify,
          pointToSegmentDistance,
          closestPointOnSegment,
          clipSegment,
          _getEdgeIntersection,
          _getBitCode,
          _sqClosestPointOnSegment,
          isFlat,
          _flat,
          polylineCenter
        };
        var LonLat = {
          project: function(latlng) {
            return new Point(latlng.lng, latlng.lat);
          },
          unproject: function(point) {
            return new LatLng(point.y, point.x);
          },
          bounds: new Bounds([-180, -90], [180, 90])
        };
        var Mercator = {
          R: 6378137,
          R_MINOR: 6356752314245179e-9,
          bounds: new Bounds([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
          project: function(latlng) {
            var d = Math.PI / 180, r = this.R, y = latlng.lat * d, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), con = e * Math.sin(y);
            var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
            y = -r * Math.log(Math.max(ts, 1e-10));
            return new Point(latlng.lng * d * r, y);
          },
          unproject: function(point) {
            var d = 180 / Math.PI, r = this.R, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), ts = Math.exp(-point.y / r), phi = Math.PI / 2 - 2 * Math.atan(ts);
            for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
              con = e * Math.sin(phi);
              con = Math.pow((1 - con) / (1 + con), e / 2);
              dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
              phi += dphi;
            }
            return new LatLng(phi * d, point.x * d / r);
          }
        };
        var index = {
          __proto__: null,
          LonLat,
          Mercator,
          SphericalMercator
        };
        var EPSG3395 = extend2({}, Earth, {
          code: "EPSG:3395",
          projection: Mercator,
          transformation: function() {
            var scale2 = 0.5 / (Math.PI * Mercator.R);
            return toTransformation(scale2, 0.5, -scale2, 0.5);
          }()
        });
        var EPSG4326 = extend2({}, Earth, {
          code: "EPSG:4326",
          projection: LonLat,
          transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
        });
        var Simple = extend2({}, CRS, {
          projection: LonLat,
          transformation: toTransformation(1, 0, -1, 0),
          scale: function(zoom2) {
            return Math.pow(2, zoom2);
          },
          zoom: function(scale2) {
            return Math.log(scale2) / Math.LN2;
          },
          distance: function(latlng1, latlng2) {
            var dx = latlng2.lng - latlng1.lng, dy = latlng2.lat - latlng1.lat;
            return Math.sqrt(dx * dx + dy * dy);
          },
          infinite: true
        });
        CRS.Earth = Earth;
        CRS.EPSG3395 = EPSG3395;
        CRS.EPSG3857 = EPSG3857;
        CRS.EPSG900913 = EPSG900913;
        CRS.EPSG4326 = EPSG4326;
        CRS.Simple = Simple;
        var Layer = Evented.extend({
          // Classes extending `L.Layer` will inherit the following options:
          options: {
            // @option pane: String = 'overlayPane'
            // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
            pane: "overlayPane",
            // @option attribution: String = null
            // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
            attribution: null,
            bubblingMouseEvents: true
          },
          /* @section
           * Classes extending `L.Layer` will inherit the following methods:
           *
           * @method addTo(map: Map|LayerGroup): this
           * Adds the layer to the given map or layer group.
           */
          addTo: function(map) {
            map.addLayer(this);
            return this;
          },
          // @method remove: this
          // Removes the layer from the map it is currently active on.
          remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
          },
          // @method removeFrom(map: Map): this
          // Removes the layer from the given map
          //
          // @alternative
          // @method removeFrom(group: LayerGroup): this
          // Removes the layer from the given `LayerGroup`
          removeFrom: function(obj) {
            if (obj) {
              obj.removeLayer(this);
            }
            return this;
          },
          // @method getPane(name? : String): HTMLElement
          // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
          getPane: function(name) {
            return this._map.getPane(name ? this.options[name] || name : this.options.pane);
          },
          addInteractiveTarget: function(targetEl) {
            this._map._targets[stamp(targetEl)] = this;
            return this;
          },
          removeInteractiveTarget: function(targetEl) {
            delete this._map._targets[stamp(targetEl)];
            return this;
          },
          // @method getAttribution: String
          // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
          getAttribution: function() {
            return this.options.attribution;
          },
          _layerAdd: function(e) {
            var map = e.target;
            if (!map.hasLayer(this)) {
              return;
            }
            this._map = map;
            this._zoomAnimated = map._zoomAnimated;
            if (this.getEvents) {
              var events = this.getEvents();
              map.on(events, this);
              this.once("remove", function() {
                map.off(events, this);
              }, this);
            }
            this.onAdd(map);
            this.fire("add");
            map.fire("layeradd", { layer: this });
          }
        });
        Map.include({
          // @method addLayer(layer: Layer): this
          // Adds the given layer to the map
          addLayer: function(layer) {
            if (!layer._layerAdd) {
              throw new Error("The provided object is not a Layer.");
            }
            var id = stamp(layer);
            if (this._layers[id]) {
              return this;
            }
            this._layers[id] = layer;
            layer._mapToAdd = this;
            if (layer.beforeAdd) {
              layer.beforeAdd(this);
            }
            this.whenReady(layer._layerAdd, layer);
            return this;
          },
          // @method removeLayer(layer: Layer): this
          // Removes the given layer from the map.
          removeLayer: function(layer) {
            var id = stamp(layer);
            if (!this._layers[id]) {
              return this;
            }
            if (this._loaded) {
              layer.onRemove(this);
            }
            delete this._layers[id];
            if (this._loaded) {
              this.fire("layerremove", { layer });
              layer.fire("remove");
            }
            layer._map = layer._mapToAdd = null;
            return this;
          },
          // @method hasLayer(layer: Layer): Boolean
          // Returns `true` if the given layer is currently added to the map
          hasLayer: function(layer) {
            return stamp(layer) in this._layers;
          },
          /* @method eachLayer(fn: Function, context?: Object): this
           * Iterates over the layers of the map, optionally specifying context of the iterator function.
           * ```
           * map.eachLayer(function(layer){
           *     layer.bindPopup('Hello');
           * });
           * ```
           */
          eachLayer: function(method, context) {
            for (var i in this._layers) {
              method.call(context, this._layers[i]);
            }
            return this;
          },
          _addLayers: function(layers2) {
            layers2 = layers2 ? isArray2(layers2) ? layers2 : [layers2] : [];
            for (var i = 0, len = layers2.length; i < len; i++) {
              this.addLayer(layers2[i]);
            }
          },
          _addZoomLimit: function(layer) {
            if (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
              this._zoomBoundLayers[stamp(layer)] = layer;
              this._updateZoomLevels();
            }
          },
          _removeZoomLimit: function(layer) {
            var id = stamp(layer);
            if (this._zoomBoundLayers[id]) {
              delete this._zoomBoundLayers[id];
              this._updateZoomLevels();
            }
          },
          _updateZoomLevels: function() {
            var minZoom = Infinity, maxZoom = -Infinity, oldZoomSpan = this._getZoomSpan();
            for (var i in this._zoomBoundLayers) {
              var options = this._zoomBoundLayers[i].options;
              minZoom = options.minZoom === void 0 ? minZoom : Math.min(minZoom, options.minZoom);
              maxZoom = options.maxZoom === void 0 ? maxZoom : Math.max(maxZoom, options.maxZoom);
            }
            this._layersMaxZoom = maxZoom === -Infinity ? void 0 : maxZoom;
            this._layersMinZoom = minZoom === Infinity ? void 0 : minZoom;
            if (oldZoomSpan !== this._getZoomSpan()) {
              this.fire("zoomlevelschange");
            }
            if (this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
              this.setZoom(this._layersMaxZoom);
            }
            if (this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
              this.setZoom(this._layersMinZoom);
            }
          }
        });
        var LayerGroup = Layer.extend({
          initialize: function(layers2, options) {
            setOptions(this, options);
            this._layers = {};
            var i, len;
            if (layers2) {
              for (i = 0, len = layers2.length; i < len; i++) {
                this.addLayer(layers2[i]);
              }
            }
          },
          // @method addLayer(layer: Layer): this
          // Adds the given layer to the group.
          addLayer: function(layer) {
            var id = this.getLayerId(layer);
            this._layers[id] = layer;
            if (this._map) {
              this._map.addLayer(layer);
            }
            return this;
          },
          // @method removeLayer(layer: Layer): this
          // Removes the given layer from the group.
          // @alternative
          // @method removeLayer(id: Number): this
          // Removes the layer with the given internal ID from the group.
          removeLayer: function(layer) {
            var id = layer in this._layers ? layer : this.getLayerId(layer);
            if (this._map && this._layers[id]) {
              this._map.removeLayer(this._layers[id]);
            }
            delete this._layers[id];
            return this;
          },
          // @method hasLayer(layer: Layer): Boolean
          // Returns `true` if the given layer is currently added to the group.
          // @alternative
          // @method hasLayer(id: Number): Boolean
          // Returns `true` if the given internal ID is currently added to the group.
          hasLayer: function(layer) {
            var layerId = typeof layer === "number" ? layer : this.getLayerId(layer);
            return layerId in this._layers;
          },
          // @method clearLayers(): this
          // Removes all the layers from the group.
          clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
          },
          // @method invoke(methodName: String, …): this
          // Calls `methodName` on every layer contained in this group, passing any
          // additional parameters. Has no effect if the layers contained do not
          // implement `methodName`.
          invoke: function(methodName) {
            var args = Array.prototype.slice.call(arguments, 1), i, layer;
            for (i in this._layers) {
              layer = this._layers[i];
              if (layer[methodName]) {
                layer[methodName].apply(layer, args);
              }
            }
            return this;
          },
          onAdd: function(map) {
            this.eachLayer(map.addLayer, map);
          },
          onRemove: function(map) {
            this.eachLayer(map.removeLayer, map);
          },
          // @method eachLayer(fn: Function, context?: Object): this
          // Iterates over the layers of the group, optionally specifying context of the iterator function.
          // ```js
          // group.eachLayer(function (layer) {
          // 	layer.bindPopup('Hello');
          // });
          // ```
          eachLayer: function(method, context) {
            for (var i in this._layers) {
              method.call(context, this._layers[i]);
            }
            return this;
          },
          // @method getLayer(id: Number): Layer
          // Returns the layer with the given internal ID.
          getLayer: function(id) {
            return this._layers[id];
          },
          // @method getLayers(): Layer[]
          // Returns an array of all the layers added to the group.
          getLayers: function() {
            var layers2 = [];
            this.eachLayer(layers2.push, layers2);
            return layers2;
          },
          // @method setZIndex(zIndex: Number): this
          // Calls `setZIndex` on every layer contained in this group, passing the z-index.
          setZIndex: function(zIndex) {
            return this.invoke("setZIndex", zIndex);
          },
          // @method getLayerId(layer: Layer): Number
          // Returns the internal ID for a layer
          getLayerId: function(layer) {
            return stamp(layer);
          }
        });
        var layerGroup = function(layers2, options) {
          return new LayerGroup(layers2, options);
        };
        var FeatureGroup = LayerGroup.extend({
          addLayer: function(layer) {
            if (this.hasLayer(layer)) {
              return this;
            }
            layer.addEventParent(this);
            LayerGroup.prototype.addLayer.call(this, layer);
            return this.fire("layeradd", { layer });
          },
          removeLayer: function(layer) {
            if (!this.hasLayer(layer)) {
              return this;
            }
            if (layer in this._layers) {
              layer = this._layers[layer];
            }
            layer.removeEventParent(this);
            LayerGroup.prototype.removeLayer.call(this, layer);
            return this.fire("layerremove", { layer });
          },
          // @method setStyle(style: Path options): this
          // Sets the given path options to each layer of the group that has a `setStyle` method.
          setStyle: function(style2) {
            return this.invoke("setStyle", style2);
          },
          // @method bringToFront(): this
          // Brings the layer group to the top of all other layers
          bringToFront: function() {
            return this.invoke("bringToFront");
          },
          // @method bringToBack(): this
          // Brings the layer group to the back of all other layers
          bringToBack: function() {
            return this.invoke("bringToBack");
          },
          // @method getBounds(): LatLngBounds
          // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
          getBounds: function() {
            var bounds = new LatLngBounds();
            for (var id in this._layers) {
              var layer = this._layers[id];
              bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
            }
            return bounds;
          }
        });
        var featureGroup = function(layers2, options) {
          return new FeatureGroup(layers2, options);
        };
        var Icon = Class.extend({
          /* @section
           * @aka Icon options
           *
           * @option iconUrl: String = null
           * **(required)** The URL to the icon image (absolute or relative to your script path).
           *
           * @option iconRetinaUrl: String = null
           * The URL to a retina sized version of the icon image (absolute or relative to your
           * script path). Used for Retina screen devices.
           *
           * @option iconSize: Point = null
           * Size of the icon image in pixels.
           *
           * @option iconAnchor: Point = null
           * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
           * will be aligned so that this point is at the marker's geographical location. Centered
           * by default if size is specified, also can be set in CSS with negative margins.
           *
           * @option popupAnchor: Point = [0, 0]
           * The coordinates of the point from which popups will "open", relative to the icon anchor.
           *
           * @option tooltipAnchor: Point = [0, 0]
           * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
           *
           * @option shadowUrl: String = null
           * The URL to the icon shadow image. If not specified, no shadow image will be created.
           *
           * @option shadowRetinaUrl: String = null
           *
           * @option shadowSize: Point = null
           * Size of the shadow image in pixels.
           *
           * @option shadowAnchor: Point = null
           * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
           * as iconAnchor if not specified).
           *
           * @option className: String = ''
           * A custom class name to assign to both icon and shadow images. Empty by default.
           */
          options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0],
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          // @method createIcon(oldIcon?: HTMLElement): HTMLElement
          // Called internally when the icon has to be shown, returns a `<img>` HTML element
          // styled according to the options.
          createIcon: function(oldIcon) {
            return this._createIcon("icon", oldIcon);
          },
          // @method createShadow(oldIcon?: HTMLElement): HTMLElement
          // As `createIcon`, but for the shadow beneath it.
          createShadow: function(oldIcon) {
            return this._createIcon("shadow", oldIcon);
          },
          _createIcon: function(name, oldIcon) {
            var src = this._getIconUrl(name);
            if (!src) {
              if (name === "icon") {
                throw new Error("iconUrl not set in Icon options (see the docs).");
              }
              return null;
            }
            var img = this._createImg(src, oldIcon && oldIcon.tagName === "IMG" ? oldIcon : null);
            this._setIconStyles(img, name);
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            return img;
          },
          _setIconStyles: function(img, name) {
            var options = this.options;
            var sizeOption = options[name + "Size"];
            if (typeof sizeOption === "number") {
              sizeOption = [sizeOption, sizeOption];
            }
            var size = toPoint(sizeOption), anchor = toPoint(name === "shadow" && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
            img.className = "leaflet-marker-" + name + " " + (options.className || "");
            if (anchor) {
              img.style.marginLeft = -anchor.x + "px";
              img.style.marginTop = -anchor.y + "px";
            }
            if (size) {
              img.style.width = size.x + "px";
              img.style.height = size.y + "px";
            }
          },
          _createImg: function(src, el) {
            el = el || document.createElement("img");
            el.src = src;
            return el;
          },
          _getIconUrl: function(name) {
            return Browser.retina && this.options[name + "RetinaUrl"] || this.options[name + "Url"];
          }
        });
        function icon(options) {
          return new Icon(options);
        }
        var IconDefault = Icon.extend({
          options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
          },
          _getIconUrl: function(name) {
            if (typeof IconDefault.imagePath !== "string") {
              IconDefault.imagePath = this._detectIconPath();
            }
            return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
          },
          _stripUrl: function(path) {
            var strip = function(str, re, idx) {
              var match = re.exec(str);
              return match && match[idx];
            };
            path = strip(path, /^url\((['"])?(.+)\1\)$/, 2);
            return path && strip(path, /^(.*)marker-icon\.png$/, 1);
          },
          _detectIconPath: function() {
            var el = create$1("div", "leaflet-default-icon-path", document.body);
            var path = getStyle(el, "background-image") || getStyle(el, "backgroundImage");
            document.body.removeChild(el);
            path = this._stripUrl(path);
            if (path) {
              return path;
            }
            var link = document.querySelector('link[href$="leaflet.css"]');
            if (!link) {
              return "";
            }
            return link.href.substring(0, link.href.length - "leaflet.css".length - 1);
          }
        });
        var MarkerDrag = Handler.extend({
          initialize: function(marker2) {
            this._marker = marker2;
          },
          addHooks: function() {
            var icon2 = this._marker._icon;
            if (!this._draggable) {
              this._draggable = new Draggable(icon2, icon2, true);
            }
            this._draggable.on({
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).enable();
            addClass(icon2, "leaflet-marker-draggable");
          },
          removeHooks: function() {
            this._draggable.off({
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).disable();
            if (this._marker._icon) {
              removeClass(this._marker._icon, "leaflet-marker-draggable");
            }
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          _adjustPan: function(e) {
            var marker2 = this._marker, map = marker2._map, speed = this._marker.options.autoPanSpeed, padding = this._marker.options.autoPanPadding, iconPos = getPosition(marker2._icon), bounds = map.getPixelBounds(), origin2 = map.getPixelOrigin();
            var panBounds = toBounds(
              bounds.min._subtract(origin2).add(padding),
              bounds.max._subtract(origin2).subtract(padding)
            );
            if (!panBounds.contains(iconPos)) {
              var movement = toPoint(
                (Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),
                (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
              ).multiplyBy(speed);
              map.panBy(movement, { animate: false });
              this._draggable._newPos._add(movement);
              this._draggable._startPos._add(movement);
              setPosition(marker2._icon, this._draggable._newPos);
              this._onDrag(e);
              this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
          },
          _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng();
            this._marker.closePopup && this._marker.closePopup();
            this._marker.fire("movestart").fire("dragstart");
          },
          _onPreDrag: function(e) {
            if (this._marker.options.autoPan) {
              cancelAnimFrame(this._panRequest);
              this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
          },
          _onDrag: function(e) {
            var marker2 = this._marker, shadow = marker2._shadow, iconPos = getPosition(marker2._icon), latlng = marker2._map.layerPointToLatLng(iconPos);
            if (shadow) {
              setPosition(shadow, iconPos);
            }
            marker2._latlng = latlng;
            e.latlng = latlng;
            e.oldLatLng = this._oldLatLng;
            marker2.fire("move", e).fire("drag", e);
          },
          _onDragEnd: function(e) {
            cancelAnimFrame(this._panRequest);
            delete this._oldLatLng;
            this._marker.fire("moveend").fire("dragend", e);
          }
        });
        var Marker = Layer.extend({
          // @section
          // @aka Marker options
          options: {
            // @option icon: Icon = *
            // Icon instance to use for rendering the marker.
            // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
            // If not specified, a common instance of `L.Icon.Default` is used.
            icon: new IconDefault(),
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option keyboard: Boolean = true
            // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
            keyboard: true,
            // @option title: String = ''
            // Text for the browser tooltip that appear on marker hover (no tooltip by default).
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            title: "",
            // @option alt: String = 'Marker'
            // Text for the `alt` attribute of the icon image.
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            alt: "Marker",
            // @option zIndexOffset: Number = 0
            // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
            zIndexOffset: 0,
            // @option opacity: Number = 1.0
            // The opacity of the marker.
            opacity: 1,
            // @option riseOnHover: Boolean = false
            // If `true`, the marker will get on top of others when you hover the mouse over it.
            riseOnHover: false,
            // @option riseOffset: Number = 250
            // The z-index offset used for the `riseOnHover` feature.
            riseOffset: 250,
            // @option pane: String = 'markerPane'
            // `Map pane` where the markers icon will be added.
            pane: "markerPane",
            // @option shadowPane: String = 'shadowPane'
            // `Map pane` where the markers shadow will be added.
            shadowPane: "shadowPane",
            // @option bubblingMouseEvents: Boolean = false
            // When `true`, a mouse event on this marker will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: false,
            // @option autoPanOnFocus: Boolean = true
            // When `true`, the map will pan whenever the marker is focused (via
            // e.g. pressing `tab` on the keyboard) to ensure the marker is
            // visible within the map's bounds
            autoPanOnFocus: true,
            // @section Draggable marker options
            // @option draggable: Boolean = false
            // Whether the marker is draggable with mouse/touch or not.
            draggable: false,
            // @option autoPan: Boolean = false
            // Whether to pan the map when dragging this marker near its edge or not.
            autoPan: false,
            // @option autoPanPadding: Point = Point(50, 50)
            // Distance (in pixels to the left/right and to the top/bottom) of the
            // map edge to start panning the map.
            autoPanPadding: [50, 50],
            // @option autoPanSpeed: Number = 10
            // Number of pixels the map should pan by.
            autoPanSpeed: 10
          },
          /* @section
           *
           * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
           */
          initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
          },
          onAdd: function(map) {
            this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
            if (this._zoomAnimated) {
              map.on("zoomanim", this._animateZoom, this);
            }
            this._initIcon();
            this.update();
          },
          onRemove: function(map) {
            if (this.dragging && this.dragging.enabled()) {
              this.options.draggable = true;
              this.dragging.removeHooks();
            }
            delete this.dragging;
            if (this._zoomAnimated) {
              map.off("zoomanim", this._animateZoom, this);
            }
            this._removeIcon();
            this._removeShadow();
          },
          getEvents: function() {
            return {
              zoom: this.update,
              viewreset: this.update
            };
          },
          // @method getLatLng: LatLng
          // Returns the current geographical position of the marker.
          getLatLng: function() {
            return this._latlng;
          },
          // @method setLatLng(latlng: LatLng): this
          // Changes the marker position to the given point.
          setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.update();
            return this.fire("move", { oldLatLng, latlng: this._latlng });
          },
          // @method setZIndexOffset(offset: Number): this
          // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
          setZIndexOffset: function(offset) {
            this.options.zIndexOffset = offset;
            return this.update();
          },
          // @method getIcon: Icon
          // Returns the current icon used by the marker
          getIcon: function() {
            return this.options.icon;
          },
          // @method setIcon(icon: Icon): this
          // Changes the marker icon.
          setIcon: function(icon2) {
            this.options.icon = icon2;
            if (this._map) {
              this._initIcon();
              this.update();
            }
            if (this._popup) {
              this.bindPopup(this._popup, this._popup.options);
            }
            return this;
          },
          getElement: function() {
            return this._icon;
          },
          update: function() {
            if (this._icon && this._map) {
              var pos = this._map.latLngToLayerPoint(this._latlng).round();
              this._setPos(pos);
            }
            return this;
          },
          _initIcon: function() {
            var options = this.options, classToAdd = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            var icon2 = options.icon.createIcon(this._icon), addIcon = false;
            if (icon2 !== this._icon) {
              if (this._icon) {
                this._removeIcon();
              }
              addIcon = true;
              if (options.title) {
                icon2.title = options.title;
              }
              if (icon2.tagName === "IMG") {
                icon2.alt = options.alt || "";
              }
            }
            addClass(icon2, classToAdd);
            if (options.keyboard) {
              icon2.tabIndex = "0";
              icon2.setAttribute("role", "button");
            }
            this._icon = icon2;
            if (options.riseOnHover) {
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
            }
            if (this.options.autoPanOnFocus) {
              on(icon2, "focus", this._panOnFocus, this);
            }
            var newShadow = options.icon.createShadow(this._shadow), addShadow = false;
            if (newShadow !== this._shadow) {
              this._removeShadow();
              addShadow = true;
            }
            if (newShadow) {
              addClass(newShadow, classToAdd);
              newShadow.alt = "";
            }
            this._shadow = newShadow;
            if (options.opacity < 1) {
              this._updateOpacity();
            }
            if (addIcon) {
              this.getPane().appendChild(this._icon);
            }
            this._initInteraction();
            if (newShadow && addShadow) {
              this.getPane(options.shadowPane).appendChild(this._shadow);
            }
          },
          _removeIcon: function() {
            if (this.options.riseOnHover) {
              this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
            }
            if (this.options.autoPanOnFocus) {
              off(this._icon, "focus", this._panOnFocus, this);
            }
            remove(this._icon);
            this.removeInteractiveTarget(this._icon);
            this._icon = null;
          },
          _removeShadow: function() {
            if (this._shadow) {
              remove(this._shadow);
            }
            this._shadow = null;
          },
          _setPos: function(pos) {
            if (this._icon) {
              setPosition(this._icon, pos);
            }
            if (this._shadow) {
              setPosition(this._shadow, pos);
            }
            this._zIndex = pos.y + this.options.zIndexOffset;
            this._resetZIndex();
          },
          _updateZIndex: function(offset) {
            if (this._icon) {
              this._icon.style.zIndex = this._zIndex + offset;
            }
          },
          _animateZoom: function(opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
            this._setPos(pos);
          },
          _initInteraction: function() {
            if (!this.options.interactive) {
              return;
            }
            addClass(this._icon, "leaflet-interactive");
            this.addInteractiveTarget(this._icon);
            if (MarkerDrag) {
              var draggable = this.options.draggable;
              if (this.dragging) {
                draggable = this.dragging.enabled();
                this.dragging.disable();
              }
              this.dragging = new MarkerDrag(this);
              if (draggable) {
                this.dragging.enable();
              }
            }
          },
          // @method setOpacity(opacity: Number): this
          // Changes the opacity of the marker.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._map) {
              this._updateOpacity();
            }
            return this;
          },
          _updateOpacity: function() {
            var opacity = this.options.opacity;
            if (this._icon) {
              setOpacity(this._icon, opacity);
            }
            if (this._shadow) {
              setOpacity(this._shadow, opacity);
            }
          },
          _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
          },
          _resetZIndex: function() {
            this._updateZIndex(0);
          },
          _panOnFocus: function() {
            var map = this._map;
            if (!map) {
              return;
            }
            var iconOpts = this.options.icon.options;
            var size = iconOpts.iconSize ? toPoint(iconOpts.iconSize) : toPoint(0, 0);
            var anchor = iconOpts.iconAnchor ? toPoint(iconOpts.iconAnchor) : toPoint(0, 0);
            map.panInside(this._latlng, {
              paddingTopLeft: anchor,
              paddingBottomRight: size.subtract(anchor)
            });
          },
          _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
          },
          _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
          }
        });
        function marker(latlng, options) {
          return new Marker(latlng, options);
        }
        var Path = Layer.extend({
          // @section
          // @aka Path options
          options: {
            // @option stroke: Boolean = true
            // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
            stroke: true,
            // @option color: String = '#3388ff'
            // Stroke color
            color: "#3388ff",
            // @option weight: Number = 3
            // Stroke width in pixels
            weight: 3,
            // @option opacity: Number = 1.0
            // Stroke opacity
            opacity: 1,
            // @option lineCap: String= 'round'
            // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
            lineCap: "round",
            // @option lineJoin: String = 'round'
            // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
            lineJoin: "round",
            // @option dashArray: String = null
            // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashArray: null,
            // @option dashOffset: String = null
            // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashOffset: null,
            // @option fill: Boolean = depends
            // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
            fill: false,
            // @option fillColor: String = *
            // Fill color. Defaults to the value of the [`color`](#path-color) option
            fillColor: null,
            // @option fillOpacity: Number = 0.2
            // Fill opacity.
            fillOpacity: 0.2,
            // @option fillRule: String = 'evenodd'
            // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
            fillRule: "evenodd",
            // className: '',
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option bubblingMouseEvents: Boolean = true
            // When `true`, a mouse event on this path will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: true
          },
          beforeAdd: function(map) {
            this._renderer = map.getRenderer(this);
          },
          onAdd: function() {
            this._renderer._initPath(this);
            this._reset();
            this._renderer._addPath(this);
          },
          onRemove: function() {
            this._renderer._removePath(this);
          },
          // @method redraw(): this
          // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
          redraw: function() {
            if (this._map) {
              this._renderer._updatePath(this);
            }
            return this;
          },
          // @method setStyle(style: Path options): this
          // Changes the appearance of a Path based on the options in the `Path options` object.
          setStyle: function(style2) {
            setOptions(this, style2);
            if (this._renderer) {
              this._renderer._updateStyle(this);
              if (this.options.stroke && style2 && Object.prototype.hasOwnProperty.call(style2, "weight")) {
                this._updateBounds();
              }
            }
            return this;
          },
          // @method bringToFront(): this
          // Brings the layer to the top of all path layers.
          bringToFront: function() {
            if (this._renderer) {
              this._renderer._bringToFront(this);
            }
            return this;
          },
          // @method bringToBack(): this
          // Brings the layer to the bottom of all path layers.
          bringToBack: function() {
            if (this._renderer) {
              this._renderer._bringToBack(this);
            }
            return this;
          },
          getElement: function() {
            return this._path;
          },
          _reset: function() {
            this._project();
            this._update();
          },
          _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
          }
        });
        var CircleMarker = Path.extend({
          // @section
          // @aka CircleMarker options
          options: {
            fill: true,
            // @option radius: Number = 10
            // Radius of the circle marker, in pixels
            radius: 10
          },
          initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            this._radius = this.options.radius;
          },
          // @method setLatLng(latLng: LatLng): this
          // Sets the position of a circle marker to a new location.
          setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.redraw();
            return this.fire("move", { oldLatLng, latlng: this._latlng });
          },
          // @method getLatLng(): LatLng
          // Returns the current geographical position of the circle marker
          getLatLng: function() {
            return this._latlng;
          },
          // @method setRadius(radius: Number): this
          // Sets the radius of a circle marker. Units are in pixels.
          setRadius: function(radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
          },
          // @method getRadius(): Number
          // Returns the current radius of the circle
          getRadius: function() {
            return this._radius;
          },
          setStyle: function(options) {
            var radius = options && options.radius || this._radius;
            Path.prototype.setStyle.call(this, options);
            this.setRadius(radius);
            return this;
          },
          _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._updateBounds();
          },
          _updateBounds: function() {
            var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [r + w, r2 + w];
            this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
          },
          _update: function() {
            if (this._map) {
              this._updatePath();
            }
          },
          _updatePath: function() {
            this._renderer._updateCircle(this);
          },
          _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p) {
            return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
          }
        });
        function circleMarker(latlng, options) {
          return new CircleMarker(latlng, options);
        }
        var Circle = CircleMarker.extend({
          initialize: function(latlng, options, legacyOptions) {
            if (typeof options === "number") {
              options = extend2({}, legacyOptions, { radius: options });
            }
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            if (isNaN(this.options.radius)) {
              throw new Error("Circle radius cannot be NaN");
            }
            this._mRadius = this.options.radius;
          },
          // @method setRadius(radius: Number): this
          // Sets the radius of a circle. Units are in meters.
          setRadius: function(radius) {
            this._mRadius = radius;
            return this.redraw();
          },
          // @method getRadius(): Number
          // Returns the current radius of a circle. Units are in meters.
          getRadius: function() {
            return this._mRadius;
          },
          // @method getBounds(): LatLngBounds
          // Returns the `LatLngBounds` of the path.
          getBounds: function() {
            var half = [this._radius, this._radiusY || this._radius];
            return new LatLngBounds(
              this._map.layerPointToLatLng(this._point.subtract(half)),
              this._map.layerPointToLatLng(this._point.add(half))
            );
          },
          setStyle: Path.prototype.setStyle,
          _project: function() {
            var lng = this._latlng.lng, lat = this._latlng.lat, map = this._map, crs = map.options.crs;
            if (crs.distance === Earth.distance) {
              var d = Math.PI / 180, latR = this._mRadius / Earth.R / d, top = map.project([lat + latR, lng]), bottom = map.project([lat - latR, lng]), p = top.add(bottom).divideBy(2), lat2 = map.unproject(p).lat, lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
              if (isNaN(lngR) || lngR === 0) {
                lngR = latR / Math.cos(Math.PI / 180 * lat);
              }
              this._point = p.subtract(map.getPixelOrigin());
              this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
              this._radiusY = p.y - top.y;
            } else {
              var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
              this._point = map.latLngToLayerPoint(this._latlng);
              this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
            }
            this._updateBounds();
          }
        });
        function circle(latlng, options, legacyOptions) {
          return new Circle(latlng, options, legacyOptions);
        }
        var Polyline = Path.extend({
          // @section
          // @aka Polyline options
          options: {
            // @option smoothFactor: Number = 1.0
            // How much to simplify the polyline on each zoom level. More means
            // better performance and smoother look, and less means more accurate representation.
            smoothFactor: 1,
            // @option noClip: Boolean = false
            // Disable polyline clipping.
            noClip: false
          },
          initialize: function(latlngs, options) {
            setOptions(this, options);
            this._setLatLngs(latlngs);
          },
          // @method getLatLngs(): LatLng[]
          // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
          getLatLngs: function() {
            return this._latlngs;
          },
          // @method setLatLngs(latlngs: LatLng[]): this
          // Replaces all the points in the polyline with the given array of geographical points.
          setLatLngs: function(latlngs) {
            this._setLatLngs(latlngs);
            return this.redraw();
          },
          // @method isEmpty(): Boolean
          // Returns `true` if the Polyline has no LatLngs.
          isEmpty: function() {
            return !this._latlngs.length;
          },
          // @method closestLayerPoint(p: Point): Point
          // Returns the point closest to `p` on the Polyline.
          closestLayerPoint: function(p) {
            var minDistance = Infinity, minPoint = null, closest = _sqClosestPointOnSegment, p1, p2;
            for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
              var points = this._parts[j];
              for (var i = 1, len = points.length; i < len; i++) {
                p1 = points[i - 1];
                p2 = points[i];
                var sqDist = closest(p, p1, p2, true);
                if (sqDist < minDistance) {
                  minDistance = sqDist;
                  minPoint = closest(p, p1, p2);
                }
              }
            }
            if (minPoint) {
              minPoint.distance = Math.sqrt(minDistance);
            }
            return minPoint;
          },
          // @method getCenter(): LatLng
          // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
          getCenter: function() {
            if (!this._map) {
              throw new Error("Must add layer to map before using getCenter()");
            }
            return polylineCenter(this._defaultShape(), this._map.options.crs);
          },
          // @method getBounds(): LatLngBounds
          // Returns the `LatLngBounds` of the path.
          getBounds: function() {
            return this._bounds;
          },
          // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
          // Adds a given point to the polyline. By default, adds to the first ring of
          // the polyline in case of a multi-polyline, but can be overridden by passing
          // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
          addLatLng: function(latlng, latlngs) {
            latlngs = latlngs || this._defaultShape();
            latlng = toLatLng(latlng);
            latlngs.push(latlng);
            this._bounds.extend(latlng);
            return this.redraw();
          },
          _setLatLngs: function(latlngs) {
            this._bounds = new LatLngBounds();
            this._latlngs = this._convertLatLngs(latlngs);
          },
          _defaultShape: function() {
            return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
          },
          // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
          _convertLatLngs: function(latlngs) {
            var result = [], flat = isFlat(latlngs);
            for (var i = 0, len = latlngs.length; i < len; i++) {
              if (flat) {
                result[i] = toLatLng(latlngs[i]);
                this._bounds.extend(result[i]);
              } else {
                result[i] = this._convertLatLngs(latlngs[i]);
              }
            }
            return result;
          },
          _project: function() {
            var pxBounds = new Bounds();
            this._rings = [];
            this._projectLatlngs(this._latlngs, this._rings, pxBounds);
            if (this._bounds.isValid() && pxBounds.isValid()) {
              this._rawPxBounds = pxBounds;
              this._updateBounds();
            }
          },
          _updateBounds: function() {
            var w = this._clickTolerance(), p = new Point(w, w);
            if (!this._rawPxBounds) {
              return;
            }
            this._pxBounds = new Bounds([
              this._rawPxBounds.min.subtract(p),
              this._rawPxBounds.max.add(p)
            ]);
          },
          // recursively turns latlngs into a set of rings with projected coordinates
          _projectLatlngs: function(latlngs, result, projectedBounds) {
            var flat = latlngs[0] instanceof LatLng, len = latlngs.length, i, ring;
            if (flat) {
              ring = [];
              for (i = 0; i < len; i++) {
                ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
                projectedBounds.extend(ring[i]);
              }
              result.push(ring);
            } else {
              for (i = 0; i < len; i++) {
                this._projectLatlngs(latlngs[i], result, projectedBounds);
              }
            }
          },
          // clip polyline by renderer bounds so that we have less to render for performance
          _clipPoints: function() {
            var bounds = this._renderer._bounds;
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
              return;
            }
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var parts = this._parts, i, j, k, len, len2, segment, points;
            for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
              points = this._rings[i];
              for (j = 0, len2 = points.length; j < len2 - 1; j++) {
                segment = clipSegment(points[j], points[j + 1], bounds, j, true);
                if (!segment) {
                  continue;
                }
                parts[k] = parts[k] || [];
                parts[k].push(segment[0]);
                if (segment[1] !== points[j + 1] || j === len2 - 2) {
                  parts[k].push(segment[1]);
                  k++;
                }
              }
            }
          },
          // simplify each clipped part of the polyline for performance
          _simplifyPoints: function() {
            var parts = this._parts, tolerance = this.options.smoothFactor;
            for (var i = 0, len = parts.length; i < len; i++) {
              parts[i] = simplify(parts[i], tolerance);
            }
          },
          _update: function() {
            if (!this._map) {
              return;
            }
            this._clipPoints();
            this._simplifyPoints();
            this._updatePath();
          },
          _updatePath: function() {
            this._renderer._updatePoly(this);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p, closed) {
            var i, j, k, len, len2, part, w = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(p)) {
              return false;
            }
            for (i = 0, len = this._parts.length; i < len; i++) {
              part = this._parts[i];
              for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                if (!closed && j === 0) {
                  continue;
                }
                if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
                  return true;
                }
              }
            }
            return false;
          }
        });
        function polyline(latlngs, options) {
          return new Polyline(latlngs, options);
        }
        Polyline._flat = _flat;
        var Polygon = Polyline.extend({
          options: {
            fill: true
          },
          isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
          },
          // @method getCenter(): LatLng
          // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
          getCenter: function() {
            if (!this._map) {
              throw new Error("Must add layer to map before using getCenter()");
            }
            return polygonCenter(this._defaultShape(), this._map.options.crs);
          },
          _convertLatLngs: function(latlngs) {
            var result = Polyline.prototype._convertLatLngs.call(this, latlngs), len = result.length;
            if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
              result.pop();
            }
            return result;
          },
          _setLatLngs: function(latlngs) {
            Polyline.prototype._setLatLngs.call(this, latlngs);
            if (isFlat(this._latlngs)) {
              this._latlngs = [this._latlngs];
            }
          },
          _defaultShape: function() {
            return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
          },
          _clipPoints: function() {
            var bounds = this._renderer._bounds, w = this.options.weight, p = new Point(w, w);
            bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
              return;
            }
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
              clipped = clipPolygon(this._rings[i], bounds, true);
              if (clipped.length) {
                this._parts.push(clipped);
              }
            }
          },
          _updatePath: function() {
            this._renderer._updatePoly(this, true);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p) {
            var inside = false, part, p1, p2, i, j, k, len, len2;
            if (!this._pxBounds || !this._pxBounds.contains(p)) {
              return false;
            }
            for (i = 0, len = this._parts.length; i < len; i++) {
              part = this._parts[i];
              for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                p1 = part[j];
                p2 = part[k];
                if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
                  inside = !inside;
                }
              }
            }
            return inside || Polyline.prototype._containsPoint.call(this, p, true);
          }
        });
        function polygon(latlngs, options) {
          return new Polygon(latlngs, options);
        }
        var GeoJSON = FeatureGroup.extend({
          /* @section
           * @aka GeoJSON options
           *
           * @option pointToLayer: Function = *
           * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
           * called when data is added, passing the GeoJSON point feature and its `LatLng`.
           * The default is to spawn a default `Marker`:
           * ```js
           * function(geoJsonPoint, latlng) {
           * 	return L.marker(latlng);
           * }
           * ```
           *
           * @option style: Function = *
           * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
           * called internally when data is added.
           * The default value is to not override any defaults:
           * ```js
           * function (geoJsonFeature) {
           * 	return {}
           * }
           * ```
           *
           * @option onEachFeature: Function = *
           * A `Function` that will be called once for each created `Feature`, after it has
           * been created and styled. Useful for attaching events and popups to features.
           * The default is to do nothing with the newly created layers:
           * ```js
           * function (feature, layer) {}
           * ```
           *
           * @option filter: Function = *
           * A `Function` that will be used to decide whether to include a feature or not.
           * The default is to include all features:
           * ```js
           * function (geoJsonFeature) {
           * 	return true;
           * }
           * ```
           * Note: dynamically changing the `filter` option will have effect only on newly
           * added data. It will _not_ re-evaluate already included features.
           *
           * @option coordsToLatLng: Function = *
           * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
           * The default is the `coordsToLatLng` static method.
           *
           * @option markersInheritOptions: Boolean = false
           * Whether default Markers for "Point" type Features inherit from group options.
           */
          initialize: function(geojson, options) {
            setOptions(this, options);
            this._layers = {};
            if (geojson) {
              this.addData(geojson);
            }
          },
          // @method addData( <GeoJSON> data ): this
          // Adds a GeoJSON object to the layer.
          addData: function(geojson) {
            var features = isArray2(geojson) ? geojson : geojson.features, i, len, feature;
            if (features) {
              for (i = 0, len = features.length; i < len; i++) {
                feature = features[i];
                if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
                  this.addData(feature);
                }
              }
              return this;
            }
            var options = this.options;
            if (options.filter && !options.filter(geojson)) {
              return this;
            }
            var layer = geometryToLayer(geojson, options);
            if (!layer) {
              return this;
            }
            layer.feature = asFeature(geojson);
            layer.defaultOptions = layer.options;
            this.resetStyle(layer);
            if (options.onEachFeature) {
              options.onEachFeature(geojson, layer);
            }
            return this.addLayer(layer);
          },
          // @method resetStyle( <Path> layer? ): this
          // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
          // If `layer` is omitted, the style of all features in the current layer is reset.
          resetStyle: function(layer) {
            if (layer === void 0) {
              return this.eachLayer(this.resetStyle, this);
            }
            layer.options = extend2({}, layer.defaultOptions);
            this._setLayerStyle(layer, this.options.style);
            return this;
          },
          // @method setStyle( <Function> style ): this
          // Changes styles of GeoJSON vector layers with the given style function.
          setStyle: function(style2) {
            return this.eachLayer(function(layer) {
              this._setLayerStyle(layer, style2);
            }, this);
          },
          _setLayerStyle: function(layer, style2) {
            if (layer.setStyle) {
              if (typeof style2 === "function") {
                style2 = style2(layer.feature);
              }
              layer.setStyle(style2);
            }
          }
        });
        function geometryToLayer(geojson, options) {
          var geometry = geojson.type === "Feature" ? geojson.geometry : geojson, coords = geometry ? geometry.coordinates : null, layers2 = [], pointToLayer = options && options.pointToLayer, _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng, latlng, latlngs, i, len;
          if (!coords && !geometry) {
            return null;
          }
          switch (geometry.type) {
            case "Point":
              latlng = _coordsToLatLng(coords);
              return _pointToLayer(pointToLayer, geojson, latlng, options);
            case "MultiPoint":
              for (i = 0, len = coords.length; i < len; i++) {
                latlng = _coordsToLatLng(coords[i]);
                layers2.push(_pointToLayer(pointToLayer, geojson, latlng, options));
              }
              return new FeatureGroup(layers2);
            case "LineString":
            case "MultiLineString":
              latlngs = coordsToLatLngs(coords, geometry.type === "LineString" ? 0 : 1, _coordsToLatLng);
              return new Polyline(latlngs, options);
            case "Polygon":
            case "MultiPolygon":
              latlngs = coordsToLatLngs(coords, geometry.type === "Polygon" ? 1 : 2, _coordsToLatLng);
              return new Polygon(latlngs, options);
            case "GeometryCollection":
              for (i = 0, len = geometry.geometries.length; i < len; i++) {
                var geoLayer = geometryToLayer({
                  geometry: geometry.geometries[i],
                  type: "Feature",
                  properties: geojson.properties
                }, options);
                if (geoLayer) {
                  layers2.push(geoLayer);
                }
              }
              return new FeatureGroup(layers2);
            case "FeatureCollection":
              for (i = 0, len = geometry.features.length; i < len; i++) {
                var featureLayer = geometryToLayer(geometry.features[i], options);
                if (featureLayer) {
                  layers2.push(featureLayer);
                }
              }
              return new FeatureGroup(layers2);
            default:
              throw new Error("Invalid GeoJSON object.");
          }
        }
        function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
          return pointToLayerFn ? pointToLayerFn(geojson, latlng) : new Marker(latlng, options && options.markersInheritOptions && options);
        }
        function coordsToLatLng(coords) {
          return new LatLng(coords[1], coords[0], coords[2]);
        }
        function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
          var latlngs = [];
          for (var i = 0, len = coords.length, latlng; i < len; i++) {
            latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
            latlngs.push(latlng);
          }
          return latlngs;
        }
        function latLngToCoords(latlng, precision) {
          latlng = toLatLng(latlng);
          return latlng.alt !== void 0 ? [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] : [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
        }
        function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
          var coords = [];
          for (var i = 0, len = latlngs.length; i < len; i++) {
            coords.push(levelsDeep ? latLngsToCoords(latlngs[i], isFlat(latlngs[i]) ? 0 : levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
          }
          if (!levelsDeep && closed && coords.length > 0) {
            coords.push(coords[0].slice());
          }
          return coords;
        }
        function getFeature(layer, newGeometry) {
          return layer.feature ? extend2({}, layer.feature, { geometry: newGeometry }) : asFeature(newGeometry);
        }
        function asFeature(geojson) {
          if (geojson.type === "Feature" || geojson.type === "FeatureCollection") {
            return geojson;
          }
          return {
            type: "Feature",
            properties: {},
            geometry: geojson
          };
        }
        var PointToGeoJSON = {
          toGeoJSON: function(precision) {
            return getFeature(this, {
              type: "Point",
              coordinates: latLngToCoords(this.getLatLng(), precision)
            });
          }
        };
        Marker.include(PointToGeoJSON);
        Circle.include(PointToGeoJSON);
        CircleMarker.include(PointToGeoJSON);
        Polyline.include({
          toGeoJSON: function(precision) {
            var multi = !isFlat(this._latlngs);
            var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
            return getFeature(this, {
              type: (multi ? "Multi" : "") + "LineString",
              coordinates: coords
            });
          }
        });
        Polygon.include({
          toGeoJSON: function(precision) {
            var holes = !isFlat(this._latlngs), multi = holes && !isFlat(this._latlngs[0]);
            var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);
            if (!holes) {
              coords = [coords];
            }
            return getFeature(this, {
              type: (multi ? "Multi" : "") + "Polygon",
              coordinates: coords
            });
          }
        });
        LayerGroup.include({
          toMultiPoint: function(precision) {
            var coords = [];
            this.eachLayer(function(layer) {
              coords.push(layer.toGeoJSON(precision).geometry.coordinates);
            });
            return getFeature(this, {
              type: "MultiPoint",
              coordinates: coords
            });
          },
          // @method toGeoJSON(precision?: Number|false): Object
          // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
          // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
          toGeoJSON: function(precision) {
            var type = this.feature && this.feature.geometry && this.feature.geometry.type;
            if (type === "MultiPoint") {
              return this.toMultiPoint(precision);
            }
            var isGeometryCollection = type === "GeometryCollection", jsons = [];
            this.eachLayer(function(layer) {
              if (layer.toGeoJSON) {
                var json = layer.toGeoJSON(precision);
                if (isGeometryCollection) {
                  jsons.push(json.geometry);
                } else {
                  var feature = asFeature(json);
                  if (feature.type === "FeatureCollection") {
                    jsons.push.apply(jsons, feature.features);
                  } else {
                    jsons.push(feature);
                  }
                }
              }
            });
            if (isGeometryCollection) {
              return getFeature(this, {
                geometries: jsons,
                type: "GeometryCollection"
              });
            }
            return {
              type: "FeatureCollection",
              features: jsons
            };
          }
        });
        function geoJSON(geojson, options) {
          return new GeoJSON(geojson, options);
        }
        var geoJson = geoJSON;
        var ImageOverlay = Layer.extend({
          // @section
          // @aka ImageOverlay options
          options: {
            // @option opacity: Number = 1.0
            // The opacity of the image overlay.
            opacity: 1,
            // @option alt: String = ''
            // Text for the `alt` attribute of the image (useful for accessibility).
            alt: "",
            // @option interactive: Boolean = false
            // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
            interactive: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the image.
            // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option errorOverlayUrl: String = ''
            // URL to the overlay image to show in place of the overlay that failed to load.
            errorOverlayUrl: "",
            // @option zIndex: Number = 1
            // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
            zIndex: 1,
            // @option className: String = ''
            // A custom class name to assign to the image. Empty by default.
            className: ""
          },
          initialize: function(url, bounds, options) {
            this._url = url;
            this._bounds = toLatLngBounds(bounds);
            setOptions(this, options);
          },
          onAdd: function() {
            if (!this._image) {
              this._initImage();
              if (this.options.opacity < 1) {
                this._updateOpacity();
              }
            }
            if (this.options.interactive) {
              addClass(this._image, "leaflet-interactive");
              this.addInteractiveTarget(this._image);
            }
            this.getPane().appendChild(this._image);
            this._reset();
          },
          onRemove: function() {
            remove(this._image);
            if (this.options.interactive) {
              this.removeInteractiveTarget(this._image);
            }
          },
          // @method setOpacity(opacity: Number): this
          // Sets the opacity of the overlay.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._image) {
              this._updateOpacity();
            }
            return this;
          },
          setStyle: function(styleOpts) {
            if (styleOpts.opacity) {
              this.setOpacity(styleOpts.opacity);
            }
            return this;
          },
          // @method bringToFront(): this
          // Brings the layer to the top of all overlays.
          bringToFront: function() {
            if (this._map) {
              toFront(this._image);
            }
            return this;
          },
          // @method bringToBack(): this
          // Brings the layer to the bottom of all overlays.
          bringToBack: function() {
            if (this._map) {
              toBack(this._image);
            }
            return this;
          },
          // @method setUrl(url: String): this
          // Changes the URL of the image.
          setUrl: function(url) {
            this._url = url;
            if (this._image) {
              this._image.src = url;
            }
            return this;
          },
          // @method setBounds(bounds: LatLngBounds): this
          // Update the bounds that this ImageOverlay covers
          setBounds: function(bounds) {
            this._bounds = toLatLngBounds(bounds);
            if (this._map) {
              this._reset();
            }
            return this;
          },
          getEvents: function() {
            var events = {
              zoom: this._reset,
              viewreset: this._reset
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @method setZIndex(value: Number): this
          // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
          setZIndex: function(value) {
            this.options.zIndex = value;
            this._updateZIndex();
            return this;
          },
          // @method getBounds(): LatLngBounds
          // Get the bounds that this ImageOverlay covers
          getBounds: function() {
            return this._bounds;
          },
          // @method getElement(): HTMLElement
          // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
          // used by this overlay.
          getElement: function() {
            return this._image;
          },
          _initImage: function() {
            var wasElementSupplied = this._url.tagName === "IMG";
            var img = this._image = wasElementSupplied ? this._url : create$1("img");
            addClass(img, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(img, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(img, this.options.className);
            }
            img.onselectstart = falseFn;
            img.onmousemove = falseFn;
            img.onload = bind2(this.fire, this, "load");
            img.onerror = bind2(this._overlayOnError, this, "error");
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            if (this.options.zIndex) {
              this._updateZIndex();
            }
            if (wasElementSupplied) {
              this._url = img.src;
              return;
            }
            img.src = this._url;
            img.alt = this.options.alt;
          },
          _animateZoom: function(e) {
            var scale2 = this._map.getZoomScale(e.zoom), offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
            setTransform(this._image, offset, scale2);
          },
          _reset: function() {
            var image = this._image, bounds = new Bounds(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ), size = bounds.getSize();
            setPosition(image, bounds.min);
            image.style.width = size.x + "px";
            image.style.height = size.y + "px";
          },
          _updateOpacity: function() {
            setOpacity(this._image, this.options.opacity);
          },
          _updateZIndex: function() {
            if (this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null) {
              this._image.style.zIndex = this.options.zIndex;
            }
          },
          _overlayOnError: function() {
            this.fire("error");
            var errorUrl = this.options.errorOverlayUrl;
            if (errorUrl && this._url !== errorUrl) {
              this._url = errorUrl;
              this._image.src = errorUrl;
            }
          },
          // @method getCenter(): LatLng
          // Returns the center of the ImageOverlay.
          getCenter: function() {
            return this._bounds.getCenter();
          }
        });
        var imageOverlay = function(url, bounds, options) {
          return new ImageOverlay(url, bounds, options);
        };
        var VideoOverlay = ImageOverlay.extend({
          // @section
          // @aka VideoOverlay options
          options: {
            // @option autoplay: Boolean = true
            // Whether the video starts playing automatically when loaded.
            // On some browsers autoplay will only work with `muted: true`
            autoplay: true,
            // @option loop: Boolean = true
            // Whether the video will loop back to the beginning when played.
            loop: true,
            // @option keepAspectRatio: Boolean = true
            // Whether the video will save aspect ratio after the projection.
            // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
            keepAspectRatio: true,
            // @option muted: Boolean = false
            // Whether the video starts on mute when loaded.
            muted: false,
            // @option playsInline: Boolean = true
            // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
            playsInline: true
          },
          _initImage: function() {
            var wasElementSupplied = this._url.tagName === "VIDEO";
            var vid = this._image = wasElementSupplied ? this._url : create$1("video");
            addClass(vid, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(vid, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(vid, this.options.className);
            }
            vid.onselectstart = falseFn;
            vid.onmousemove = falseFn;
            vid.onloadeddata = bind2(this.fire, this, "load");
            if (wasElementSupplied) {
              var sourceElements = vid.getElementsByTagName("source");
              var sources = [];
              for (var j = 0; j < sourceElements.length; j++) {
                sources.push(sourceElements[j].src);
              }
              this._url = sourceElements.length > 0 ? sources : [vid.src];
              return;
            }
            if (!isArray2(this._url)) {
              this._url = [this._url];
            }
            if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, "objectFit")) {
              vid.style["objectFit"] = "fill";
            }
            vid.autoplay = !!this.options.autoplay;
            vid.loop = !!this.options.loop;
            vid.muted = !!this.options.muted;
            vid.playsInline = !!this.options.playsInline;
            for (var i = 0; i < this._url.length; i++) {
              var source = create$1("source");
              source.src = this._url[i];
              vid.appendChild(source);
            }
          }
          // @method getElement(): HTMLVideoElement
          // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
          // used by this overlay.
        });
        function videoOverlay(video, bounds, options) {
          return new VideoOverlay(video, bounds, options);
        }
        var SVGOverlay = ImageOverlay.extend({
          _initImage: function() {
            var el = this._image = this._url;
            addClass(el, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(el, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(el, this.options.className);
            }
            el.onselectstart = falseFn;
            el.onmousemove = falseFn;
          }
          // @method getElement(): SVGElement
          // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
          // used by this overlay.
        });
        function svgOverlay(el, bounds, options) {
          return new SVGOverlay(el, bounds, options);
        }
        var DivOverlay = Layer.extend({
          // @section
          // @aka DivOverlay options
          options: {
            // @option interactive: Boolean = false
            // If true, the popup/tooltip will listen to the mouse events.
            interactive: false,
            // @option offset: Point = Point(0, 0)
            // The offset of the overlay position.
            offset: [0, 0],
            // @option className: String = ''
            // A custom CSS class name to assign to the overlay.
            className: "",
            // @option pane: String = undefined
            // `Map pane` where the overlay will be added.
            pane: void 0,
            // @option content: String|HTMLElement|Function = ''
            // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
            // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
            content: ""
          },
          initialize: function(options, source) {
            if (options && (options instanceof LatLng || isArray2(options))) {
              this._latlng = toLatLng(options);
              setOptions(this, source);
            } else {
              setOptions(this, options);
              this._source = source;
            }
            if (this.options.content) {
              this._content = this.options.content;
            }
          },
          // @method openOn(map: Map): this
          // Adds the overlay to the map.
          // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
          openOn: function(map) {
            map = arguments.length ? map : this._source._map;
            if (!map.hasLayer(this)) {
              map.addLayer(this);
            }
            return this;
          },
          // @method close(): this
          // Closes the overlay.
          // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
          // and `layer.closePopup()`/`.closeTooltip()`.
          close: function() {
            if (this._map) {
              this._map.removeLayer(this);
            }
            return this;
          },
          // @method toggle(layer?: Layer): this
          // Opens or closes the overlay bound to layer depending on its current state.
          // Argument may be omitted only for overlay bound to layer.
          // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
          toggle: function(layer) {
            if (this._map) {
              this.close();
            } else {
              if (arguments.length) {
                this._source = layer;
              } else {
                layer = this._source;
              }
              this._prepareOpen();
              this.openOn(layer._map);
            }
            return this;
          },
          onAdd: function(map) {
            this._zoomAnimated = map._zoomAnimated;
            if (!this._container) {
              this._initLayout();
            }
            if (map._fadeAnimated) {
              setOpacity(this._container, 0);
            }
            clearTimeout(this._removeTimeout);
            this.getPane().appendChild(this._container);
            this.update();
            if (map._fadeAnimated) {
              setOpacity(this._container, 1);
            }
            this.bringToFront();
            if (this.options.interactive) {
              addClass(this._container, "leaflet-interactive");
              this.addInteractiveTarget(this._container);
            }
          },
          onRemove: function(map) {
            if (map._fadeAnimated) {
              setOpacity(this._container, 0);
              this._removeTimeout = setTimeout(bind2(remove, void 0, this._container), 200);
            } else {
              remove(this._container);
            }
            if (this.options.interactive) {
              removeClass(this._container, "leaflet-interactive");
              this.removeInteractiveTarget(this._container);
            }
          },
          // @namespace DivOverlay
          // @method getLatLng: LatLng
          // Returns the geographical point of the overlay.
          getLatLng: function() {
            return this._latlng;
          },
          // @method setLatLng(latlng: LatLng): this
          // Sets the geographical point where the overlay will open.
          setLatLng: function(latlng) {
            this._latlng = toLatLng(latlng);
            if (this._map) {
              this._updatePosition();
              this._adjustPan();
            }
            return this;
          },
          // @method getContent: String|HTMLElement
          // Returns the content of the overlay.
          getContent: function() {
            return this._content;
          },
          // @method setContent(htmlContent: String|HTMLElement|Function): this
          // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
          // The function should return a `String` or `HTMLElement` to be used in the overlay.
          setContent: function(content) {
            this._content = content;
            this.update();
            return this;
          },
          // @method getElement: String|HTMLElement
          // Returns the HTML container of the overlay.
          getElement: function() {
            return this._container;
          },
          // @method update: null
          // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
          update: function() {
            if (!this._map) {
              return;
            }
            this._container.style.visibility = "hidden";
            this._updateContent();
            this._updateLayout();
            this._updatePosition();
            this._container.style.visibility = "";
            this._adjustPan();
          },
          getEvents: function() {
            var events = {
              zoom: this._updatePosition,
              viewreset: this._updatePosition
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @method isOpen: Boolean
          // Returns `true` when the overlay is visible on the map.
          isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
          },
          // @method bringToFront: this
          // Brings this overlay in front of other overlays (in the same map pane).
          bringToFront: function() {
            if (this._map) {
              toFront(this._container);
            }
            return this;
          },
          // @method bringToBack: this
          // Brings this overlay to the back of other overlays (in the same map pane).
          bringToBack: function() {
            if (this._map) {
              toBack(this._container);
            }
            return this;
          },
          // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
          _prepareOpen: function(latlng) {
            var source = this._source;
            if (!source._map) {
              return false;
            }
            if (source instanceof FeatureGroup) {
              source = null;
              var layers2 = this._source._layers;
              for (var id in layers2) {
                if (layers2[id]._map) {
                  source = layers2[id];
                  break;
                }
              }
              if (!source) {
                return false;
              }
              this._source = source;
            }
            if (!latlng) {
              if (source.getCenter) {
                latlng = source.getCenter();
              } else if (source.getLatLng) {
                latlng = source.getLatLng();
              } else if (source.getBounds) {
                latlng = source.getBounds().getCenter();
              } else {
                throw new Error("Unable to get source layer LatLng.");
              }
            }
            this.setLatLng(latlng);
            if (this._map) {
              this.update();
            }
            return true;
          },
          _updateContent: function() {
            if (!this._content) {
              return;
            }
            var node = this._contentNode;
            var content = typeof this._content === "function" ? this._content(this._source || this) : this._content;
            if (typeof content === "string") {
              node.innerHTML = content;
            } else {
              while (node.hasChildNodes()) {
                node.removeChild(node.firstChild);
              }
              node.appendChild(content);
            }
            this.fire("contentupdate");
          },
          _updatePosition: function() {
            if (!this._map) {
              return;
            }
            var pos = this._map.latLngToLayerPoint(this._latlng), offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (this._zoomAnimated) {
              setPosition(this._container, pos.add(anchor));
            } else {
              offset = offset.add(pos).add(anchor);
            }
            var bottom = this._containerBottom = -offset.y, left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;
            this._container.style.bottom = bottom + "px";
            this._container.style.left = left + "px";
          },
          _getAnchor: function() {
            return [0, 0];
          }
        });
        Map.include({
          _initOverlay: function(OverlayClass, content, latlng, options) {
            var overlay = content;
            if (!(overlay instanceof OverlayClass)) {
              overlay = new OverlayClass(options).setContent(content);
            }
            if (latlng) {
              overlay.setLatLng(latlng);
            }
            return overlay;
          }
        });
        Layer.include({
          _initOverlay: function(OverlayClass, old, content, options) {
            var overlay = content;
            if (overlay instanceof OverlayClass) {
              setOptions(overlay, options);
              overlay._source = this;
            } else {
              overlay = old && !options ? old : new OverlayClass(options, this);
              overlay.setContent(content);
            }
            return overlay;
          }
        });
        var Popup = DivOverlay.extend({
          // @section
          // @aka Popup options
          options: {
            // @option pane: String = 'popupPane'
            // `Map pane` where the popup will be added.
            pane: "popupPane",
            // @option offset: Point = Point(0, 7)
            // The offset of the popup position.
            offset: [0, 7],
            // @option maxWidth: Number = 300
            // Max width of the popup, in pixels.
            maxWidth: 300,
            // @option minWidth: Number = 50
            // Min width of the popup, in pixels.
            minWidth: 50,
            // @option maxHeight: Number = null
            // If set, creates a scrollable container of the given height
            // inside a popup if its content exceeds it.
            // The scrollable container can be styled using the
            // `leaflet-popup-scrolled` CSS class selector.
            maxHeight: null,
            // @option autoPan: Boolean = true
            // Set it to `false` if you don't want the map to do panning animation
            // to fit the opened popup.
            autoPan: true,
            // @option autoPanPaddingTopLeft: Point = null
            // The margin between the popup and the top left corner of the map
            // view after autopanning was performed.
            autoPanPaddingTopLeft: null,
            // @option autoPanPaddingBottomRight: Point = null
            // The margin between the popup and the bottom right corner of the map
            // view after autopanning was performed.
            autoPanPaddingBottomRight: null,
            // @option autoPanPadding: Point = Point(5, 5)
            // Equivalent of setting both top left and bottom right autopan padding to the same value.
            autoPanPadding: [5, 5],
            // @option keepInView: Boolean = false
            // Set it to `true` if you want to prevent users from panning the popup
            // off of the screen while it is open.
            keepInView: false,
            // @option closeButton: Boolean = true
            // Controls the presence of a close button in the popup.
            closeButton: true,
            // @option autoClose: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the popup closing when another popup is opened.
            autoClose: true,
            // @option closeOnEscapeKey: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the ESC key for closing of the popup.
            closeOnEscapeKey: true,
            // @option closeOnClick: Boolean = *
            // Set it if you want to override the default behavior of the popup closing when user clicks
            // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
            // @option className: String = ''
            // A custom CSS class name to assign to the popup.
            className: ""
          },
          // @namespace Popup
          // @method openOn(map: Map): this
          // Alternative to `map.openPopup(popup)`.
          // Adds the popup to the map and closes the previous one.
          openOn: function(map) {
            map = arguments.length ? map : this._source._map;
            if (!map.hasLayer(this) && map._popup && map._popup.options.autoClose) {
              map.removeLayer(map._popup);
            }
            map._popup = this;
            return DivOverlay.prototype.openOn.call(this, map);
          },
          onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            map.fire("popupopen", { popup: this });
            if (this._source) {
              this._source.fire("popupopen", { popup: this }, true);
              if (!(this._source instanceof Path)) {
                this._source.on("preclick", stopPropagation);
              }
            }
          },
          onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            map.fire("popupclose", { popup: this });
            if (this._source) {
              this._source.fire("popupclose", { popup: this }, true);
              if (!(this._source instanceof Path)) {
                this._source.off("preclick", stopPropagation);
              }
            }
          },
          getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
              events.preclick = this.close;
            }
            if (this.options.keepInView) {
              events.moveend = this._adjustPan;
            }
            return events;
          },
          _initLayout: function() {
            var prefix = "leaflet-popup", container = this._container = create$1(
              "div",
              prefix + " " + (this.options.className || "") + " leaflet-zoom-animated"
            );
            var wrapper = this._wrapper = create$1("div", prefix + "-content-wrapper", container);
            this._contentNode = create$1("div", prefix + "-content", wrapper);
            disableClickPropagation(container);
            disableScrollPropagation(this._contentNode);
            on(container, "contextmenu", stopPropagation);
            this._tipContainer = create$1("div", prefix + "-tip-container", container);
            this._tip = create$1("div", prefix + "-tip", this._tipContainer);
            if (this.options.closeButton) {
              var closeButton = this._closeButton = create$1("a", prefix + "-close-button", container);
              closeButton.setAttribute("role", "button");
              closeButton.setAttribute("aria-label", "Close popup");
              closeButton.href = "#close";
              closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';
              on(closeButton, "click", function(ev) {
                preventDefault(ev);
                this.close();
              }, this);
            }
          },
          _updateLayout: function() {
            var container = this._contentNode, style2 = container.style;
            style2.width = "";
            style2.whiteSpace = "nowrap";
            var width = container.offsetWidth;
            width = Math.min(width, this.options.maxWidth);
            width = Math.max(width, this.options.minWidth);
            style2.width = width + 1 + "px";
            style2.whiteSpace = "";
            style2.height = "";
            var height = container.offsetHeight, maxHeight = this.options.maxHeight, scrolledClass = "leaflet-popup-scrolled";
            if (maxHeight && height > maxHeight) {
              style2.height = maxHeight + "px";
              addClass(container, scrolledClass);
            } else {
              removeClass(container, scrolledClass);
            }
            this._containerWidth = this._container.offsetWidth;
          },
          _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), anchor = this._getAnchor();
            setPosition(this._container, pos.add(anchor));
          },
          _adjustPan: function() {
            if (!this.options.autoPan) {
              return;
            }
            if (this._map._panAnim) {
              this._map._panAnim.stop();
            }
            if (this._autopanning) {
              this._autopanning = false;
              return;
            }
            var map = this._map, marginBottom = parseInt(getStyle(this._container, "marginBottom"), 10) || 0, containerHeight = this._container.offsetHeight + marginBottom, containerWidth = this._containerWidth, layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);
            layerPos._add(getPosition(this._container));
            var containerPos = map.layerPointToContainerPoint(layerPos), padding = toPoint(this.options.autoPanPadding), paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding), paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding), size = map.getSize(), dx = 0, dy = 0;
            if (containerPos.x + containerWidth + paddingBR.x > size.x) {
              dx = containerPos.x + containerWidth - size.x + paddingBR.x;
            }
            if (containerPos.x - dx - paddingTL.x < 0) {
              dx = containerPos.x - paddingTL.x;
            }
            if (containerPos.y + containerHeight + paddingBR.y > size.y) {
              dy = containerPos.y + containerHeight - size.y + paddingBR.y;
            }
            if (containerPos.y - dy - paddingTL.y < 0) {
              dy = containerPos.y - paddingTL.y;
            }
            if (dx || dy) {
              if (this.options.keepInView) {
                this._autopanning = true;
              }
              map.fire("autopanstart").panBy([dx, dy]);
            }
          },
          _getAnchor: function() {
            return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
          }
        });
        var popup = function(options, source) {
          return new Popup(options, source);
        };
        Map.mergeOptions({
          closePopupOnClick: true
        });
        Map.include({
          // @method openPopup(popup: Popup): this
          // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
          // @alternative
          // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
          // Creates a popup with the specified content and options and opens it in the given point on a map.
          openPopup: function(popup2, latlng, options) {
            this._initOverlay(Popup, popup2, latlng, options).openOn(this);
            return this;
          },
          // @method closePopup(popup?: Popup): this
          // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
          closePopup: function(popup2) {
            popup2 = arguments.length ? popup2 : this._popup;
            if (popup2) {
              popup2.close();
            }
            return this;
          }
        });
        Layer.include({
          // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
          // Binds a popup to the layer with the passed `content` and sets up the
          // necessary event listeners. If a `Function` is passed it will receive
          // the layer as the first argument and should return a `String` or `HTMLElement`.
          bindPopup: function(content, options) {
            this._popup = this._initOverlay(Popup, this._popup, content, options);
            if (!this._popupHandlersAdded) {
              this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              });
              this._popupHandlersAdded = true;
            }
            return this;
          },
          // @method unbindPopup(): this
          // Removes the popup previously bound with `bindPopup`.
          unbindPopup: function() {
            if (this._popup) {
              this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              });
              this._popupHandlersAdded = false;
              this._popup = null;
            }
            return this;
          },
          // @method openPopup(latlng?: LatLng): this
          // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
          openPopup: function(latlng) {
            if (this._popup) {
              if (!(this instanceof FeatureGroup)) {
                this._popup._source = this;
              }
              if (this._popup._prepareOpen(latlng || this._latlng)) {
                this._popup.openOn(this._map);
              }
            }
            return this;
          },
          // @method closePopup(): this
          // Closes the popup bound to this layer if it is open.
          closePopup: function() {
            if (this._popup) {
              this._popup.close();
            }
            return this;
          },
          // @method togglePopup(): this
          // Opens or closes the popup bound to this layer depending on its current state.
          togglePopup: function() {
            if (this._popup) {
              this._popup.toggle(this);
            }
            return this;
          },
          // @method isPopupOpen(): boolean
          // Returns `true` if the popup bound to this layer is currently open.
          isPopupOpen: function() {
            return this._popup ? this._popup.isOpen() : false;
          },
          // @method setPopupContent(content: String|HTMLElement|Popup): this
          // Sets the content of the popup bound to this layer.
          setPopupContent: function(content) {
            if (this._popup) {
              this._popup.setContent(content);
            }
            return this;
          },
          // @method getPopup(): Popup
          // Returns the popup bound to this layer.
          getPopup: function() {
            return this._popup;
          },
          _openPopup: function(e) {
            if (!this._popup || !this._map) {
              return;
            }
            stop(e);
            var target = e.layer || e.target;
            if (this._popup._source === target && !(target instanceof Path)) {
              if (this._map.hasLayer(this._popup)) {
                this.closePopup();
              } else {
                this.openPopup(e.latlng);
              }
              return;
            }
            this._popup._source = target;
            this.openPopup(e.latlng);
          },
          _movePopup: function(e) {
            this._popup.setLatLng(e.latlng);
          },
          _onKeyPress: function(e) {
            if (e.originalEvent.keyCode === 13) {
              this._openPopup(e);
            }
          }
        });
        var Tooltip = DivOverlay.extend({
          // @section
          // @aka Tooltip options
          options: {
            // @option pane: String = 'tooltipPane'
            // `Map pane` where the tooltip will be added.
            pane: "tooltipPane",
            // @option offset: Point = Point(0, 0)
            // Optional offset of the tooltip position.
            offset: [0, 0],
            // @option direction: String = 'auto'
            // Direction where to open the tooltip. Possible values are: `right`, `left`,
            // `top`, `bottom`, `center`, `auto`.
            // `auto` will dynamically switch between `right` and `left` according to the tooltip
            // position on the map.
            direction: "auto",
            // @option permanent: Boolean = false
            // Whether to open the tooltip permanently or only on mouseover.
            permanent: false,
            // @option sticky: Boolean = false
            // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
            sticky: false,
            // @option opacity: Number = 0.9
            // Tooltip container opacity.
            opacity: 0.9
          },
          onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            this.setOpacity(this.options.opacity);
            map.fire("tooltipopen", { tooltip: this });
            if (this._source) {
              this.addEventParent(this._source);
              this._source.fire("tooltipopen", { tooltip: this }, true);
            }
          },
          onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            map.fire("tooltipclose", { tooltip: this });
            if (this._source) {
              this.removeEventParent(this._source);
              this._source.fire("tooltipclose", { tooltip: this }, true);
            }
          },
          getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (!this.options.permanent) {
              events.preclick = this.close;
            }
            return events;
          },
          _initLayout: function() {
            var prefix = "leaflet-tooltip", className = prefix + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = create$1("div", className);
            this._container.setAttribute("role", "tooltip");
            this._container.setAttribute("id", "leaflet-tooltip-" + stamp(this));
          },
          _updateLayout: function() {
          },
          _adjustPan: function() {
          },
          _setPosition: function(pos) {
            var subX, subY, map = this._map, container = this._container, centerPoint = map.latLngToContainerPoint(map.getCenter()), tooltipPoint = map.layerPointToContainerPoint(pos), direction = this.options.direction, tooltipWidth = container.offsetWidth, tooltipHeight = container.offsetHeight, offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (direction === "top") {
              subX = tooltipWidth / 2;
              subY = tooltipHeight;
            } else if (direction === "bottom") {
              subX = tooltipWidth / 2;
              subY = 0;
            } else if (direction === "center") {
              subX = tooltipWidth / 2;
              subY = tooltipHeight / 2;
            } else if (direction === "right") {
              subX = 0;
              subY = tooltipHeight / 2;
            } else if (direction === "left") {
              subX = tooltipWidth;
              subY = tooltipHeight / 2;
            } else if (tooltipPoint.x < centerPoint.x) {
              direction = "right";
              subX = 0;
              subY = tooltipHeight / 2;
            } else {
              direction = "left";
              subX = tooltipWidth + (offset.x + anchor.x) * 2;
              subY = tooltipHeight / 2;
            }
            pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);
            removeClass(container, "leaflet-tooltip-right");
            removeClass(container, "leaflet-tooltip-left");
            removeClass(container, "leaflet-tooltip-top");
            removeClass(container, "leaflet-tooltip-bottom");
            addClass(container, "leaflet-tooltip-" + direction);
            setPosition(container, pos);
          },
          _updatePosition: function() {
            var pos = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(pos);
          },
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._container) {
              setOpacity(this._container, opacity);
            }
          },
          _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            this._setPosition(pos);
          },
          _getAnchor: function() {
            return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
          }
        });
        var tooltip = function(options, source) {
          return new Tooltip(options, source);
        };
        Map.include({
          // @method openTooltip(tooltip: Tooltip): this
          // Opens the specified tooltip.
          // @alternative
          // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
          // Creates a tooltip with the specified content and options and open it.
          openTooltip: function(tooltip2, latlng, options) {
            this._initOverlay(Tooltip, tooltip2, latlng, options).openOn(this);
            return this;
          },
          // @method closeTooltip(tooltip: Tooltip): this
          // Closes the tooltip given as parameter.
          closeTooltip: function(tooltip2) {
            tooltip2.close();
            return this;
          }
        });
        Layer.include({
          // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
          // Binds a tooltip to the layer with the passed `content` and sets up the
          // necessary event listeners. If a `Function` is passed it will receive
          // the layer as the first argument and should return a `String` or `HTMLElement`.
          bindTooltip: function(content, options) {
            if (this._tooltip && this.isTooltipOpen()) {
              this.unbindTooltip();
            }
            this._tooltip = this._initOverlay(Tooltip, this._tooltip, content, options);
            this._initTooltipInteractions();
            if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
              this.openTooltip();
            }
            return this;
          },
          // @method unbindTooltip(): this
          // Removes the tooltip previously bound with `bindTooltip`.
          unbindTooltip: function() {
            if (this._tooltip) {
              this._initTooltipInteractions(true);
              this.closeTooltip();
              this._tooltip = null;
            }
            return this;
          },
          _initTooltipInteractions: function(remove2) {
            if (!remove2 && this._tooltipHandlersAdded) {
              return;
            }
            var onOff = remove2 ? "off" : "on", events = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            if (!this._tooltip.options.permanent) {
              events.mouseover = this._openTooltip;
              events.mouseout = this.closeTooltip;
              events.click = this._openTooltip;
              if (this._map) {
                this._addFocusListeners();
              } else {
                events.add = this._addFocusListeners;
              }
            } else {
              events.add = this._openTooltip;
            }
            if (this._tooltip.options.sticky) {
              events.mousemove = this._moveTooltip;
            }
            this[onOff](events);
            this._tooltipHandlersAdded = !remove2;
          },
          // @method openTooltip(latlng?: LatLng): this
          // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
          openTooltip: function(latlng) {
            if (this._tooltip) {
              if (!(this instanceof FeatureGroup)) {
                this._tooltip._source = this;
              }
              if (this._tooltip._prepareOpen(latlng)) {
                this._tooltip.openOn(this._map);
                if (this.getElement) {
                  this._setAriaDescribedByOnLayer(this);
                } else if (this.eachLayer) {
                  this.eachLayer(this._setAriaDescribedByOnLayer, this);
                }
              }
            }
            return this;
          },
          // @method closeTooltip(): this
          // Closes the tooltip bound to this layer if it is open.
          closeTooltip: function() {
            if (this._tooltip) {
              return this._tooltip.close();
            }
          },
          // @method toggleTooltip(): this
          // Opens or closes the tooltip bound to this layer depending on its current state.
          toggleTooltip: function() {
            if (this._tooltip) {
              this._tooltip.toggle(this);
            }
            return this;
          },
          // @method isTooltipOpen(): boolean
          // Returns `true` if the tooltip bound to this layer is currently open.
          isTooltipOpen: function() {
            return this._tooltip.isOpen();
          },
          // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
          // Sets the content of the tooltip bound to this layer.
          setTooltipContent: function(content) {
            if (this._tooltip) {
              this._tooltip.setContent(content);
            }
            return this;
          },
          // @method getTooltip(): Tooltip
          // Returns the tooltip bound to this layer.
          getTooltip: function() {
            return this._tooltip;
          },
          _addFocusListeners: function() {
            if (this.getElement) {
              this._addFocusListenersOnLayer(this);
            } else if (this.eachLayer) {
              this.eachLayer(this._addFocusListenersOnLayer, this);
            }
          },
          _addFocusListenersOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
              on(el, "focus", function() {
                this._tooltip._source = layer;
                this.openTooltip();
              }, this);
              on(el, "blur", this.closeTooltip, this);
            }
          },
          _setAriaDescribedByOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
              el.setAttribute("aria-describedby", this._tooltip._container.id);
            }
          },
          _openTooltip: function(e) {
            if (!this._tooltip || !this._map) {
              return;
            }
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = true;
              var that = this;
              this._map.once("moveend", function() {
                that._openOnceFlag = false;
                that._openTooltip(e);
              });
              return;
            }
            this._tooltip._source = e.layer || e.target;
            this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
          },
          _moveTooltip: function(e) {
            var latlng = e.latlng, containerPoint, layerPoint;
            if (this._tooltip.options.sticky && e.originalEvent) {
              containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
              layerPoint = this._map.containerPointToLayerPoint(containerPoint);
              latlng = this._map.layerPointToLatLng(layerPoint);
            }
            this._tooltip.setLatLng(latlng);
          }
        });
        var DivIcon = Icon.extend({
          options: {
            // @section
            // @aka DivIcon options
            iconSize: [12, 12],
            // also can be set through CSS
            // iconAnchor: (Point),
            // popupAnchor: (Point),
            // @option html: String|HTMLElement = ''
            // Custom HTML code to put inside the div element, empty by default. Alternatively,
            // an instance of `HTMLElement`.
            html: false,
            // @option bgPos: Point = [0, 0]
            // Optional relative position of the background, in pixels
            bgPos: null,
            className: "leaflet-div-icon"
          },
          createIcon: function(oldIcon) {
            var div = oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"), options = this.options;
            if (options.html instanceof Element) {
              empty(div);
              div.appendChild(options.html);
            } else {
              div.innerHTML = options.html !== false ? options.html : "";
            }
            if (options.bgPos) {
              var bgPos = toPoint(options.bgPos);
              div.style.backgroundPosition = -bgPos.x + "px " + -bgPos.y + "px";
            }
            this._setIconStyles(div, "icon");
            return div;
          },
          createShadow: function() {
            return null;
          }
        });
        function divIcon(options) {
          return new DivIcon(options);
        }
        Icon.Default = IconDefault;
        var GridLayer = Layer.extend({
          // @section
          // @aka GridLayer options
          options: {
            // @option tileSize: Number|Point = 256
            // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
            tileSize: 256,
            // @option opacity: Number = 1.0
            // Opacity of the tiles. Can be used in the `createTile()` function.
            opacity: 1,
            // @option updateWhenIdle: Boolean = (depends)
            // Load new tiles only when panning ends.
            // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
            // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
            // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
            updateWhenIdle: Browser.mobile,
            // @option updateWhenZooming: Boolean = true
            // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
            updateWhenZooming: true,
            // @option updateInterval: Number = 200
            // Tiles will not update more than once every `updateInterval` milliseconds when panning.
            updateInterval: 200,
            // @option zIndex: Number = 1
            // The explicit zIndex of the tile layer.
            zIndex: 1,
            // @option bounds: LatLngBounds = undefined
            // If set, tiles will only be loaded inside the set `LatLngBounds`.
            bounds: null,
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = undefined
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: void 0,
            // @option maxNativeZoom: Number = undefined
            // Maximum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
            // from `maxNativeZoom` level and auto-scaled.
            maxNativeZoom: void 0,
            // @option minNativeZoom: Number = undefined
            // Minimum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
            // from `minNativeZoom` level and auto-scaled.
            minNativeZoom: void 0,
            // @option noWrap: Boolean = false
            // Whether the layer is wrapped around the antimeridian. If `true`, the
            // GridLayer will only be displayed once at low zoom levels. Has no
            // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
            // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
            // tiles outside the CRS limits.
            noWrap: false,
            // @option pane: String = 'tilePane'
            // `Map pane` where the grid layer will be added.
            pane: "tilePane",
            // @option className: String = ''
            // A custom class name to assign to the tile layer. Empty by default.
            className: "",
            // @option keepBuffer: Number = 2
            // When panning the map, keep this many rows and columns of tiles before unloading them.
            keepBuffer: 2
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          onAdd: function() {
            this._initContainer();
            this._levels = {};
            this._tiles = {};
            this._resetView();
          },
          beforeAdd: function(map) {
            map._addZoomLimit(this);
          },
          onRemove: function(map) {
            this._removeAllTiles();
            remove(this._container);
            map._removeZoomLimit(this);
            this._container = null;
            this._tileZoom = void 0;
          },
          // @method bringToFront: this
          // Brings the tile layer to the top of all tile layers.
          bringToFront: function() {
            if (this._map) {
              toFront(this._container);
              this._setAutoZIndex(Math.max);
            }
            return this;
          },
          // @method bringToBack: this
          // Brings the tile layer to the bottom of all tile layers.
          bringToBack: function() {
            if (this._map) {
              toBack(this._container);
              this._setAutoZIndex(Math.min);
            }
            return this;
          },
          // @method getContainer: HTMLElement
          // Returns the HTML element that contains the tiles for this layer.
          getContainer: function() {
            return this._container;
          },
          // @method setOpacity(opacity: Number): this
          // Changes the [opacity](#gridlayer-opacity) of the grid layer.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            this._updateOpacity();
            return this;
          },
          // @method setZIndex(zIndex: Number): this
          // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
          setZIndex: function(zIndex) {
            this.options.zIndex = zIndex;
            this._updateZIndex();
            return this;
          },
          // @method isLoading: Boolean
          // Returns `true` if any tile in the grid layer has not finished loading.
          isLoading: function() {
            return this._loading;
          },
          // @method redraw: this
          // Causes the layer to clear all the tiles and request them again.
          redraw: function() {
            if (this._map) {
              this._removeAllTiles();
              var tileZoom = this._clampZoom(this._map.getZoom());
              if (tileZoom !== this._tileZoom) {
                this._tileZoom = tileZoom;
                this._updateLevels();
              }
              this._update();
            }
            return this;
          },
          getEvents: function() {
            var events = {
              viewprereset: this._invalidateAll,
              viewreset: this._resetView,
              zoom: this._resetView,
              moveend: this._onMoveEnd
            };
            if (!this.options.updateWhenIdle) {
              if (!this._onMove) {
                this._onMove = throttle2(this._onMoveEnd, this.options.updateInterval, this);
              }
              events.move = this._onMove;
            }
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @section Extension methods
          // Layers extending `GridLayer` shall reimplement the following method.
          // @method createTile(coords: Object, done?: Function): HTMLElement
          // Called only internally, must be overridden by classes extending `GridLayer`.
          // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
          // is specified, it must be called when the tile has finished loading and drawing.
          createTile: function() {
            return document.createElement("div");
          },
          // @section
          // @method getTileSize: Point
          // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
          getTileSize: function() {
            var s = this.options.tileSize;
            return s instanceof Point ? s : new Point(s, s);
          },
          _updateZIndex: function() {
            if (this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null) {
              this._container.style.zIndex = this.options.zIndex;
            }
          },
          _setAutoZIndex: function(compare) {
            var layers2 = this.getPane().children, edgeZIndex = -compare(-Infinity, Infinity);
            for (var i = 0, len = layers2.length, zIndex; i < len; i++) {
              zIndex = layers2[i].style.zIndex;
              if (layers2[i] !== this._container && zIndex) {
                edgeZIndex = compare(edgeZIndex, +zIndex);
              }
            }
            if (isFinite(edgeZIndex)) {
              this.options.zIndex = edgeZIndex + compare(-1, 1);
              this._updateZIndex();
            }
          },
          _updateOpacity: function() {
            if (!this._map) {
              return;
            }
            if (Browser.ielt9) {
              return;
            }
            setOpacity(this._container, this.options.opacity);
            var now = +/* @__PURE__ */ new Date(), nextFrame = false, willPrune = false;
            for (var key in this._tiles) {
              var tile = this._tiles[key];
              if (!tile.current || !tile.loaded) {
                continue;
              }
              var fade = Math.min(1, (now - tile.loaded) / 200);
              setOpacity(tile.el, fade);
              if (fade < 1) {
                nextFrame = true;
              } else {
                if (tile.active) {
                  willPrune = true;
                } else {
                  this._onOpaqueTile(tile);
                }
                tile.active = true;
              }
            }
            if (willPrune && !this._noPrune) {
              this._pruneTiles();
            }
            if (nextFrame) {
              cancelAnimFrame(this._fadeFrame);
              this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            }
          },
          _onOpaqueTile: falseFn,
          _initContainer: function() {
            if (this._container) {
              return;
            }
            this._container = create$1("div", "leaflet-layer " + (this.options.className || ""));
            this._updateZIndex();
            if (this.options.opacity < 1) {
              this._updateOpacity();
            }
            this.getPane().appendChild(this._container);
          },
          _updateLevels: function() {
            var zoom2 = this._tileZoom, maxZoom = this.options.maxZoom;
            if (zoom2 === void 0) {
              return void 0;
            }
            for (var z in this._levels) {
              z = Number(z);
              if (this._levels[z].el.children.length || z === zoom2) {
                this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom2 - z);
                this._onUpdateLevel(z);
              } else {
                remove(this._levels[z].el);
                this._removeTilesAtZoom(z);
                this._onRemoveLevel(z);
                delete this._levels[z];
              }
            }
            var level = this._levels[zoom2], map = this._map;
            if (!level) {
              level = this._levels[zoom2] = {};
              level.el = create$1("div", "leaflet-tile-container leaflet-zoom-animated", this._container);
              level.el.style.zIndex = maxZoom;
              level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom2).round();
              level.zoom = zoom2;
              this._setZoomTransform(level, map.getCenter(), map.getZoom());
              falseFn(level.el.offsetWidth);
              this._onCreateLevel(level);
            }
            this._level = level;
            return level;
          },
          _onUpdateLevel: falseFn,
          _onRemoveLevel: falseFn,
          _onCreateLevel: falseFn,
          _pruneTiles: function() {
            if (!this._map) {
              return;
            }
            var key, tile;
            var zoom2 = this._map.getZoom();
            if (zoom2 > this.options.maxZoom || zoom2 < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (key in this._tiles) {
              tile = this._tiles[key];
              tile.retain = tile.current;
            }
            for (key in this._tiles) {
              tile = this._tiles[key];
              if (tile.current && !tile.active) {
                var coords = tile.coords;
                if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
                  this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
                }
              }
            }
            for (key in this._tiles) {
              if (!this._tiles[key].retain) {
                this._removeTile(key);
              }
            }
          },
          _removeTilesAtZoom: function(zoom2) {
            for (var key in this._tiles) {
              if (this._tiles[key].coords.z !== zoom2) {
                continue;
              }
              this._removeTile(key);
            }
          },
          _removeAllTiles: function() {
            for (var key in this._tiles) {
              this._removeTile(key);
            }
          },
          _invalidateAll: function() {
            for (var z in this._levels) {
              remove(this._levels[z].el);
              this._onRemoveLevel(Number(z));
              delete this._levels[z];
            }
            this._removeAllTiles();
            this._tileZoom = void 0;
          },
          _retainParent: function(x, y, z, minZoom) {
            var x2 = Math.floor(x / 2), y2 = Math.floor(y / 2), z2 = z - 1, coords2 = new Point(+x2, +y2);
            coords2.z = +z2;
            var key = this._tileCoordsToKey(coords2), tile = this._tiles[key];
            if (tile && tile.active) {
              tile.retain = true;
              return true;
            } else if (tile && tile.loaded) {
              tile.retain = true;
            }
            if (z2 > minZoom) {
              return this._retainParent(x2, y2, z2, minZoom);
            }
            return false;
          },
          _retainChildren: function(x, y, z, maxZoom) {
            for (var i = 2 * x; i < 2 * x + 2; i++) {
              for (var j = 2 * y; j < 2 * y + 2; j++) {
                var coords = new Point(i, j);
                coords.z = z + 1;
                var key = this._tileCoordsToKey(coords), tile = this._tiles[key];
                if (tile && tile.active) {
                  tile.retain = true;
                  continue;
                } else if (tile && tile.loaded) {
                  tile.retain = true;
                }
                if (z + 1 < maxZoom) {
                  this._retainChildren(i, j, z + 1, maxZoom);
                }
              }
            }
          },
          _resetView: function(e) {
            var animating = e && (e.pinch || e.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
          },
          _animateZoom: function(e) {
            this._setView(e.center, e.zoom, true, e.noUpdate);
          },
          _clampZoom: function(zoom2) {
            var options = this.options;
            if (void 0 !== options.minNativeZoom && zoom2 < options.minNativeZoom) {
              return options.minNativeZoom;
            }
            if (void 0 !== options.maxNativeZoom && options.maxNativeZoom < zoom2) {
              return options.maxNativeZoom;
            }
            return zoom2;
          },
          _setView: function(center, zoom2, noPrune, noUpdate) {
            var tileZoom = Math.round(zoom2);
            if (this.options.maxZoom !== void 0 && tileZoom > this.options.maxZoom || this.options.minZoom !== void 0 && tileZoom < this.options.minZoom) {
              tileZoom = void 0;
            } else {
              tileZoom = this._clampZoom(tileZoom);
            }
            var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;
            if (!noUpdate || tileZoomChanged) {
              this._tileZoom = tileZoom;
              if (this._abortLoading) {
                this._abortLoading();
              }
              this._updateLevels();
              this._resetGrid();
              if (tileZoom !== void 0) {
                this._update(center);
              }
              if (!noPrune) {
                this._pruneTiles();
              }
              this._noPrune = !!noPrune;
            }
            this._setZoomTransforms(center, zoom2);
          },
          _setZoomTransforms: function(center, zoom2) {
            for (var i in this._levels) {
              this._setZoomTransform(this._levels[i], center, zoom2);
            }
          },
          _setZoomTransform: function(level, center, zoom2) {
            var scale2 = this._map.getZoomScale(zoom2, level.zoom), translate = level.origin.multiplyBy(scale2).subtract(this._map._getNewPixelOrigin(center, zoom2)).round();
            if (Browser.any3d) {
              setTransform(level.el, translate, scale2);
            } else {
              setPosition(level.el, translate);
            }
          },
          _resetGrid: function() {
            var map = this._map, crs = map.options.crs, tileSize = this._tileSize = this.getTileSize(), tileZoom = this._tileZoom;
            var bounds = this._map.getPixelWorldBounds(this._tileZoom);
            if (bounds) {
              this._globalTileRange = this._pxBoundsToTileRange(bounds);
            }
            this._wrapX = crs.wrapLng && !this.options.noWrap && [
              Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
              Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
            ];
            this._wrapY = crs.wrapLat && !this.options.noWrap && [
              Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
              Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
            ];
          },
          _onMoveEnd: function() {
            if (!this._map || this._map._animatingZoom) {
              return;
            }
            this._update();
          },
          _getTiledPixelBounds: function(center) {
            var map = this._map, mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(), scale2 = map.getZoomScale(mapZoom, this._tileZoom), pixelCenter = map.project(center, this._tileZoom).floor(), halfSize = map.getSize().divideBy(scale2 * 2);
            return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
          },
          // Private method to load tiles in the grid's active zoom level according to map bounds
          _update: function(center) {
            var map = this._map;
            if (!map) {
              return;
            }
            var zoom2 = this._clampZoom(map.getZoom());
            if (center === void 0) {
              center = map.getCenter();
            }
            if (this._tileZoom === void 0) {
              return;
            }
            var pixelBounds = this._getTiledPixelBounds(center), tileRange = this._pxBoundsToTileRange(pixelBounds), tileCenter = tileRange.getCenter(), queue = [], margin = this.options.keepBuffer, noPruneRange = new Bounds(
              tileRange.getBottomLeft().subtract([margin, -margin]),
              tileRange.getTopRight().add([margin, -margin])
            );
            if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) {
              throw new Error("Attempted to load an infinite number of tiles");
            }
            for (var key in this._tiles) {
              var c = this._tiles[key].coords;
              if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
                this._tiles[key].current = false;
              }
            }
            if (Math.abs(zoom2 - this._tileZoom) > 1) {
              this._setView(center, zoom2);
              return;
            }
            for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
              for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
                var coords = new Point(i, j);
                coords.z = this._tileZoom;
                if (!this._isValidTile(coords)) {
                  continue;
                }
                var tile = this._tiles[this._tileCoordsToKey(coords)];
                if (tile) {
                  tile.current = true;
                } else {
                  queue.push(coords);
                }
              }
            }
            queue.sort(function(a, b) {
              return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
            });
            if (queue.length !== 0) {
              if (!this._loading) {
                this._loading = true;
                this.fire("loading");
              }
              var fragment = document.createDocumentFragment();
              for (i = 0; i < queue.length; i++) {
                this._addTile(queue[i], fragment);
              }
              this._level.el.appendChild(fragment);
            }
          },
          _isValidTile: function(coords) {
            var crs = this._map.options.crs;
            if (!crs.infinite) {
              var bounds = this._globalTileRange;
              if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) {
                return false;
              }
            }
            if (!this.options.bounds) {
              return true;
            }
            var tileBounds = this._tileCoordsToBounds(coords);
            return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
          },
          _keyToBounds: function(key) {
            return this._tileCoordsToBounds(this._keyToTileCoords(key));
          },
          _tileCoordsToNwSe: function(coords) {
            var map = this._map, tileSize = this.getTileSize(), nwPoint = coords.scaleBy(tileSize), sePoint = nwPoint.add(tileSize), nw = map.unproject(nwPoint, coords.z), se = map.unproject(sePoint, coords.z);
            return [nw, se];
          },
          // converts tile coordinates to its geographical bounds
          _tileCoordsToBounds: function(coords) {
            var bp = this._tileCoordsToNwSe(coords), bounds = new LatLngBounds(bp[0], bp[1]);
            if (!this.options.noWrap) {
              bounds = this._map.wrapLatLngBounds(bounds);
            }
            return bounds;
          },
          // converts tile coordinates to key for the tile cache
          _tileCoordsToKey: function(coords) {
            return coords.x + ":" + coords.y + ":" + coords.z;
          },
          // converts tile cache key to coordinates
          _keyToTileCoords: function(key) {
            var k = key.split(":"), coords = new Point(+k[0], +k[1]);
            coords.z = +k[2];
            return coords;
          },
          _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) {
              return;
            }
            remove(tile.el);
            delete this._tiles[key];
            this.fire("tileunload", {
              tile: tile.el,
              coords: this._keyToTileCoords(key)
            });
          },
          _initTile: function(tile) {
            addClass(tile, "leaflet-tile");
            var tileSize = this.getTileSize();
            tile.style.width = tileSize.x + "px";
            tile.style.height = tileSize.y + "px";
            tile.onselectstart = falseFn;
            tile.onmousemove = falseFn;
            if (Browser.ielt9 && this.options.opacity < 1) {
              setOpacity(tile, this.options.opacity);
            }
          },
          _addTile: function(coords, container) {
            var tilePos = this._getTilePos(coords), key = this._tileCoordsToKey(coords);
            var tile = this.createTile(this._wrapCoords(coords), bind2(this._tileReady, this, coords));
            this._initTile(tile);
            if (this.createTile.length < 2) {
              requestAnimFrame(bind2(this._tileReady, this, coords, null, tile));
            }
            setPosition(tile, tilePos);
            this._tiles[key] = {
              el: tile,
              coords,
              current: true
            };
            container.appendChild(tile);
            this.fire("tileloadstart", {
              tile,
              coords
            });
          },
          _tileReady: function(coords, err, tile) {
            if (err) {
              this.fire("tileerror", {
                error: err,
                tile,
                coords
              });
            }
            var key = this._tileCoordsToKey(coords);
            tile = this._tiles[key];
            if (!tile) {
              return;
            }
            tile.loaded = +/* @__PURE__ */ new Date();
            if (this._map._fadeAnimated) {
              setOpacity(tile.el, 0);
              cancelAnimFrame(this._fadeFrame);
              this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            } else {
              tile.active = true;
              this._pruneTiles();
            }
            if (!err) {
              addClass(tile.el, "leaflet-tile-loaded");
              this.fire("tileload", {
                tile: tile.el,
                coords
              });
            }
            if (this._noTilesToLoad()) {
              this._loading = false;
              this.fire("load");
              if (Browser.ielt9 || !this._map._fadeAnimated) {
                requestAnimFrame(this._pruneTiles, this);
              } else {
                setTimeout(bind2(this._pruneTiles, this), 250);
              }
            }
          },
          _getTilePos: function(coords) {
            return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
          },
          _wrapCoords: function(coords) {
            var newCoords = new Point(
              this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
              this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y
            );
            newCoords.z = coords.z;
            return newCoords;
          },
          _pxBoundsToTileRange: function(bounds) {
            var tileSize = this.getTileSize();
            return new Bounds(
              bounds.min.unscaleBy(tileSize).floor(),
              bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1])
            );
          },
          _noTilesToLoad: function() {
            for (var key in this._tiles) {
              if (!this._tiles[key].loaded) {
                return false;
              }
            }
            return true;
          }
        });
        function gridLayer(options) {
          return new GridLayer(options);
        }
        var TileLayer = GridLayer.extend({
          // @section
          // @aka TileLayer options
          options: {
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = 18
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: 18,
            // @option subdomains: String|String[] = 'abc'
            // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
            subdomains: "abc",
            // @option errorTileUrl: String = ''
            // URL to the tile image to show in place of the tile that failed to load.
            errorTileUrl: "",
            // @option zoomOffset: Number = 0
            // The zoom number used in tile URLs will be offset with this value.
            zoomOffset: 0,
            // @option tms: Boolean = false
            // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
            tms: false,
            // @option zoomReverse: Boolean = false
            // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
            zoomReverse: false,
            // @option detectRetina: Boolean = false
            // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
            detectRetina: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option referrerPolicy: Boolean|String = false
            // Whether the referrerPolicy attribute will be added to the tiles.
            // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
            // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
            // (e.g. to validate an API token).
            // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
            referrerPolicy: false
          },
          initialize: function(url, options) {
            this._url = url;
            options = setOptions(this, options);
            if (options.detectRetina && Browser.retina && options.maxZoom > 0) {
              options.tileSize = Math.floor(options.tileSize / 2);
              if (!options.zoomReverse) {
                options.zoomOffset++;
                options.maxZoom = Math.max(options.minZoom, options.maxZoom - 1);
              } else {
                options.zoomOffset--;
                options.minZoom = Math.min(options.maxZoom, options.minZoom + 1);
              }
              options.minZoom = Math.max(0, options.minZoom);
            } else if (!options.zoomReverse) {
              options.maxZoom = Math.max(options.minZoom, options.maxZoom);
            } else {
              options.minZoom = Math.min(options.maxZoom, options.minZoom);
            }
            if (typeof options.subdomains === "string") {
              options.subdomains = options.subdomains.split("");
            }
            this.on("tileunload", this._onTileRemove);
          },
          // @method setUrl(url: String, noRedraw?: Boolean): this
          // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
          // If the URL does not change, the layer will not be redrawn unless
          // the noRedraw parameter is set to false.
          setUrl: function(url, noRedraw) {
            if (this._url === url && noRedraw === void 0) {
              noRedraw = true;
            }
            this._url = url;
            if (!noRedraw) {
              this.redraw();
            }
            return this;
          },
          // @method createTile(coords: Object, done?: Function): HTMLElement
          // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
          // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
          // callback is called when the tile has been loaded.
          createTile: function(coords, done) {
            var tile = document.createElement("img");
            on(tile, "load", bind2(this._tileOnLoad, this, done, tile));
            on(tile, "error", bind2(this._tileOnError, this, done, tile));
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              tile.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            if (typeof this.options.referrerPolicy === "string") {
              tile.referrerPolicy = this.options.referrerPolicy;
            }
            tile.alt = "";
            tile.src = this.getTileUrl(coords);
            return tile;
          },
          // @section Extension methods
          // @uninheritable
          // Layers extending `TileLayer` might reimplement the following method.
          // @method getTileUrl(coords: Object): String
          // Called only internally, returns the URL for a tile given its coordinates.
          // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
          getTileUrl: function(coords) {
            var data = {
              r: Browser.retina ? "@2x" : "",
              s: this._getSubdomain(coords),
              x: coords.x,
              y: coords.y,
              z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
              var invertedY = this._globalTileRange.max.y - coords.y;
              if (this.options.tms) {
                data["y"] = invertedY;
              }
              data["-y"] = invertedY;
            }
            return template(this._url, extend2(data, this.options));
          },
          _tileOnLoad: function(done, tile) {
            if (Browser.ielt9) {
              setTimeout(bind2(done, this, null, tile), 0);
            } else {
              done(null, tile);
            }
          },
          _tileOnError: function(done, tile, e) {
            var errorUrl = this.options.errorTileUrl;
            if (errorUrl && tile.getAttribute("src") !== errorUrl) {
              tile.src = errorUrl;
            }
            done(e, tile);
          },
          _onTileRemove: function(e) {
            e.tile.onload = null;
          },
          _getZoomForUrl: function() {
            var zoom2 = this._tileZoom, maxZoom = this.options.maxZoom, zoomReverse = this.options.zoomReverse, zoomOffset = this.options.zoomOffset;
            if (zoomReverse) {
              zoom2 = maxZoom - zoom2;
            }
            return zoom2 + zoomOffset;
          },
          _getSubdomain: function(tilePoint) {
            var index2 = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
            return this.options.subdomains[index2];
          },
          // stops loading all tiles in the background layer
          _abortLoading: function() {
            var i, tile;
            for (i in this._tiles) {
              if (this._tiles[i].coords.z !== this._tileZoom) {
                tile = this._tiles[i].el;
                tile.onload = falseFn;
                tile.onerror = falseFn;
                if (!tile.complete) {
                  tile.src = emptyImageUrl;
                  var coords = this._tiles[i].coords;
                  remove(tile);
                  delete this._tiles[i];
                  this.fire("tileabort", {
                    tile,
                    coords
                  });
                }
              }
            }
          },
          _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) {
              return;
            }
            tile.el.setAttribute("src", emptyImageUrl);
            return GridLayer.prototype._removeTile.call(this, key);
          },
          _tileReady: function(coords, err, tile) {
            if (!this._map || tile && tile.getAttribute("src") === emptyImageUrl) {
              return;
            }
            return GridLayer.prototype._tileReady.call(this, coords, err, tile);
          }
        });
        function tileLayer(url, options) {
          return new TileLayer(url, options);
        }
        var TileLayerWMS = TileLayer.extend({
          // @section
          // @aka TileLayer.WMS options
          // If any custom options not documented here are used, they will be sent to the
          // WMS server as extra parameters in each request URL. This can be useful for
          // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
          defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            // @option layers: String = ''
            // **(required)** Comma-separated list of WMS layers to show.
            layers: "",
            // @option styles: String = ''
            // Comma-separated list of WMS styles.
            styles: "",
            // @option format: String = 'image/jpeg'
            // WMS image format (use `'image/png'` for layers with transparency).
            format: "image/jpeg",
            // @option transparent: Boolean = false
            // If `true`, the WMS service will return images with transparency.
            transparent: false,
            // @option version: String = '1.1.1'
            // Version of the WMS service to use
            version: "1.1.1"
          },
          options: {
            // @option crs: CRS = null
            // Coordinate Reference System to use for the WMS requests, defaults to
            // map CRS. Don't change this if you're not sure what it means.
            crs: null,
            // @option uppercase: Boolean = false
            // If `true`, WMS request parameter keys will be uppercase.
            uppercase: false
          },
          initialize: function(url, options) {
            this._url = url;
            var wmsParams = extend2({}, this.defaultWmsParams);
            for (var i in options) {
              if (!(i in this.options)) {
                wmsParams[i] = options[i];
              }
            }
            options = setOptions(this, options);
            var realRetina = options.detectRetina && Browser.retina ? 2 : 1;
            var tileSize = this.getTileSize();
            wmsParams.width = tileSize.x * realRetina;
            wmsParams.height = tileSize.y * realRetina;
            this.wmsParams = wmsParams;
          },
          onAdd: function(map) {
            this._crs = this.options.crs || map.options.crs;
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var projectionKey = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[projectionKey] = this._crs.code;
            TileLayer.prototype.onAdd.call(this, map);
          },
          getTileUrl: function(coords) {
            var tileBounds = this._tileCoordsToNwSe(coords), crs = this._crs, bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])), min = bounds.min, max = bounds.max, bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [min.y, min.x, max.y, max.x] : [min.x, min.y, max.x, max.y]).join(","), url = TileLayer.prototype.getTileUrl.call(this, coords);
            return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + bbox;
          },
          // @method setParams(params: Object, noRedraw?: Boolean): this
          // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
          setParams: function(params, noRedraw) {
            extend2(this.wmsParams, params);
            if (!noRedraw) {
              this.redraw();
            }
            return this;
          }
        });
        function tileLayerWMS(url, options) {
          return new TileLayerWMS(url, options);
        }
        TileLayer.WMS = TileLayerWMS;
        tileLayer.wms = tileLayerWMS;
        var Renderer = Layer.extend({
          // @section
          // @aka Renderer options
          options: {
            // @option padding: Number = 0.1
            // How much to extend the clip area around the map view (relative to its size)
            // e.g. 0.1 would be 10% of map view in each direction
            padding: 0.1
          },
          initialize: function(options) {
            setOptions(this, options);
            stamp(this);
            this._layers = this._layers || {};
          },
          onAdd: function() {
            if (!this._container) {
              this._initContainer();
              addClass(this._container, "leaflet-zoom-animated");
            }
            this.getPane().appendChild(this._container);
            this._update();
            this.on("update", this._updatePaths, this);
          },
          onRemove: function() {
            this.off("update", this._updatePaths, this);
            this._destroyContainer();
          },
          getEvents: function() {
            var events = {
              viewreset: this._reset,
              zoom: this._onZoom,
              moveend: this._update,
              zoomend: this._onZoomEnd
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._onAnimZoom;
            }
            return events;
          },
          _onAnimZoom: function(ev) {
            this._updateTransform(ev.center, ev.zoom);
          },
          _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
          },
          _updateTransform: function(center, zoom2) {
            var scale2 = this._map.getZoomScale(zoom2, this._zoom), viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding), currentCenterPoint = this._map.project(this._center, zoom2), topLeftOffset = viewHalf.multiplyBy(-scale2).add(currentCenterPoint).subtract(this._map._getNewPixelOrigin(center, zoom2));
            if (Browser.any3d) {
              setTransform(this._container, topLeftOffset, scale2);
            } else {
              setPosition(this._container, topLeftOffset);
            }
          },
          _reset: function() {
            this._update();
            this._updateTransform(this._center, this._zoom);
            for (var id in this._layers) {
              this._layers[id]._reset();
            }
          },
          _onZoomEnd: function() {
            for (var id in this._layers) {
              this._layers[id]._project();
            }
          },
          _updatePaths: function() {
            for (var id in this._layers) {
              this._layers[id]._update();
            }
          },
          _update: function() {
            var p = this.options.padding, size = this._map.getSize(), min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
            this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
            this._center = this._map.getCenter();
            this._zoom = this._map.getZoom();
          }
        });
        var Canvas = Renderer.extend({
          // @section
          // @aka Canvas options
          options: {
            // @option tolerance: Number = 0
            // How much to extend the click tolerance around a path/object on the map.
            tolerance: 0
          },
          getEvents: function() {
            var events = Renderer.prototype.getEvents.call(this);
            events.viewprereset = this._onViewPreReset;
            return events;
          },
          _onViewPreReset: function() {
            this._postponeUpdatePaths = true;
          },
          onAdd: function() {
            Renderer.prototype.onAdd.call(this);
            this._draw();
          },
          _initContainer: function() {
            var container = this._container = document.createElement("canvas");
            on(container, "mousemove", this._onMouseMove, this);
            on(container, "click dblclick mousedown mouseup contextmenu", this._onClick, this);
            on(container, "mouseout", this._handleMouseOut, this);
            container["_leaflet_disable_events"] = true;
            this._ctx = container.getContext("2d");
          },
          _destroyContainer: function() {
            cancelAnimFrame(this._redrawRequest);
            delete this._ctx;
            remove(this._container);
            off(this._container);
            delete this._container;
          },
          _updatePaths: function() {
            if (this._postponeUpdatePaths) {
              return;
            }
            var layer;
            this._redrawBounds = null;
            for (var id in this._layers) {
              layer = this._layers[id];
              layer._update();
            }
            this._redraw();
          },
          _update: function() {
            if (this._map._animatingZoom && this._bounds) {
              return;
            }
            Renderer.prototype._update.call(this);
            var b = this._bounds, container = this._container, size = b.getSize(), m = Browser.retina ? 2 : 1;
            setPosition(container, b.min);
            container.width = m * size.x;
            container.height = m * size.y;
            container.style.width = size.x + "px";
            container.style.height = size.y + "px";
            if (Browser.retina) {
              this._ctx.scale(2, 2);
            }
            this._ctx.translate(-b.min.x, -b.min.y);
            this.fire("update");
          },
          _reset: function() {
            Renderer.prototype._reset.call(this);
            if (this._postponeUpdatePaths) {
              this._postponeUpdatePaths = false;
              this._updatePaths();
            }
          },
          _initPath: function(layer) {
            this._updateDashArray(layer);
            this._layers[stamp(layer)] = layer;
            var order = layer._order = {
              layer,
              prev: this._drawLast,
              next: null
            };
            if (this._drawLast) {
              this._drawLast.next = order;
            }
            this._drawLast = order;
            this._drawFirst = this._drawFirst || this._drawLast;
          },
          _addPath: function(layer) {
            this._requestRedraw(layer);
          },
          _removePath: function(layer) {
            var order = layer._order;
            var next = order.next;
            var prev = order.prev;
            if (next) {
              next.prev = prev;
            } else {
              this._drawLast = prev;
            }
            if (prev) {
              prev.next = next;
            } else {
              this._drawFirst = next;
            }
            delete layer._order;
            delete this._layers[stamp(layer)];
            this._requestRedraw(layer);
          },
          _updatePath: function(layer) {
            this._extendRedrawBounds(layer);
            layer._project();
            layer._update();
            this._requestRedraw(layer);
          },
          _updateStyle: function(layer) {
            this._updateDashArray(layer);
            this._requestRedraw(layer);
          },
          _updateDashArray: function(layer) {
            if (typeof layer.options.dashArray === "string") {
              var parts = layer.options.dashArray.split(/[, ]+/), dashArray = [], dashValue, i;
              for (i = 0; i < parts.length; i++) {
                dashValue = Number(parts[i]);
                if (isNaN(dashValue)) {
                  return;
                }
                dashArray.push(dashValue);
              }
              layer.options._dashArray = dashArray;
            } else {
              layer.options._dashArray = layer.options.dashArray;
            }
          },
          _requestRedraw: function(layer) {
            if (!this._map) {
              return;
            }
            this._extendRedrawBounds(layer);
            this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
          },
          _extendRedrawBounds: function(layer) {
            if (layer._pxBounds) {
              var padding = (layer.options.weight || 0) + 1;
              this._redrawBounds = this._redrawBounds || new Bounds();
              this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
              this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
            }
          },
          _redraw: function() {
            this._redrawRequest = null;
            if (this._redrawBounds) {
              this._redrawBounds.min._floor();
              this._redrawBounds.max._ceil();
            }
            this._clear();
            this._draw();
            this._redrawBounds = null;
          },
          _clear: function() {
            var bounds = this._redrawBounds;
            if (bounds) {
              var size = bounds.getSize();
              this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
            } else {
              this._ctx.save();
              this._ctx.setTransform(1, 0, 0, 1, 0, 0);
              this._ctx.clearRect(0, 0, this._container.width, this._container.height);
              this._ctx.restore();
            }
          },
          _draw: function() {
            var layer, bounds = this._redrawBounds;
            this._ctx.save();
            if (bounds) {
              var size = bounds.getSize();
              this._ctx.beginPath();
              this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
              this._ctx.clip();
            }
            this._drawing = true;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) {
                layer._updatePath();
              }
            }
            this._drawing = false;
            this._ctx.restore();
          },
          _updatePoly: function(layer, closed) {
            if (!this._drawing) {
              return;
            }
            var i, j, len2, p, parts = layer._parts, len = parts.length, ctx = this._ctx;
            if (!len) {
              return;
            }
            ctx.beginPath();
            for (i = 0; i < len; i++) {
              for (j = 0, len2 = parts[i].length; j < len2; j++) {
                p = parts[i][j];
                ctx[j ? "lineTo" : "moveTo"](p.x, p.y);
              }
              if (closed) {
                ctx.closePath();
              }
            }
            this._fillStroke(ctx, layer);
          },
          _updateCircle: function(layer) {
            if (!this._drawing || layer._empty()) {
              return;
            }
            var p = layer._point, ctx = this._ctx, r = Math.max(Math.round(layer._radius), 1), s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;
            if (s !== 1) {
              ctx.save();
              ctx.scale(1, s);
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);
            if (s !== 1) {
              ctx.restore();
            }
            this._fillStroke(ctx, layer);
          },
          _fillStroke: function(ctx, layer) {
            var options = layer.options;
            if (options.fill) {
              ctx.globalAlpha = options.fillOpacity;
              ctx.fillStyle = options.fillColor || options.color;
              ctx.fill(options.fillRule || "evenodd");
            }
            if (options.stroke && options.weight !== 0) {
              if (ctx.setLineDash) {
                ctx.setLineDash(layer.options && layer.options._dashArray || []);
              }
              ctx.globalAlpha = options.opacity;
              ctx.lineWidth = options.weight;
              ctx.strokeStyle = options.color;
              ctx.lineCap = options.lineCap;
              ctx.lineJoin = options.lineJoin;
              ctx.stroke();
            }
          },
          // Canvas obviously doesn't have mouse events for individual drawn objects,
          // so we emulate that by calculating what's under the mouse on mousemove/click manually
          _onClick: function(e) {
            var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (layer.options.interactive && layer._containsPoint(point)) {
                if (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(layer)) {
                  clickedLayer = layer;
                }
              }
            }
            this._fireEvent(clickedLayer ? [clickedLayer] : false, e);
          },
          _onMouseMove: function(e) {
            if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) {
              return;
            }
            var point = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, point);
          },
          _handleMouseOut: function(e) {
            var layer = this._hoveredLayer;
            if (layer) {
              removeClass(this._container, "leaflet-interactive");
              this._fireEvent([layer], e, "mouseout");
              this._hoveredLayer = null;
              this._mouseHoverThrottled = false;
            }
          },
          _handleMouseHover: function(e, point) {
            if (this._mouseHoverThrottled) {
              return;
            }
            var layer, candidateHoveredLayer;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (layer.options.interactive && layer._containsPoint(point)) {
                candidateHoveredLayer = layer;
              }
            }
            if (candidateHoveredLayer !== this._hoveredLayer) {
              this._handleMouseOut(e);
              if (candidateHoveredLayer) {
                addClass(this._container, "leaflet-interactive");
                this._fireEvent([candidateHoveredLayer], e, "mouseover");
                this._hoveredLayer = candidateHoveredLayer;
              }
            }
            this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, e);
            this._mouseHoverThrottled = true;
            setTimeout(bind2(function() {
              this._mouseHoverThrottled = false;
            }, this), 32);
          },
          _fireEvent: function(layers2, e, type) {
            this._map._fireDOMEvent(e, type || e.type, layers2);
          },
          _bringToFront: function(layer) {
            var order = layer._order;
            if (!order) {
              return;
            }
            var next = order.next;
            var prev = order.prev;
            if (next) {
              next.prev = prev;
            } else {
              return;
            }
            if (prev) {
              prev.next = next;
            } else if (next) {
              this._drawFirst = next;
            }
            order.prev = this._drawLast;
            this._drawLast.next = order;
            order.next = null;
            this._drawLast = order;
            this._requestRedraw(layer);
          },
          _bringToBack: function(layer) {
            var order = layer._order;
            if (!order) {
              return;
            }
            var next = order.next;
            var prev = order.prev;
            if (prev) {
              prev.next = next;
            } else {
              return;
            }
            if (next) {
              next.prev = prev;
            } else if (prev) {
              this._drawLast = prev;
            }
            order.prev = null;
            order.next = this._drawFirst;
            this._drawFirst.prev = order;
            this._drawFirst = order;
            this._requestRedraw(layer);
          }
        });
        function canvas(options) {
          return Browser.canvas ? new Canvas(options) : null;
        }
        var vmlCreate = function() {
          try {
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml");
            return function(name) {
              return document.createElement("<lvml:" + name + ' class="lvml">');
            };
          } catch (e) {
          }
          return function(name) {
            return document.createElement("<" + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        }();
        var vmlMixin = {
          _initContainer: function() {
            this._container = create$1("div", "leaflet-vml-container");
          },
          _update: function() {
            if (this._map._animatingZoom) {
              return;
            }
            Renderer.prototype._update.call(this);
            this.fire("update");
          },
          _initPath: function(layer) {
            var container = layer._container = vmlCreate("shape");
            addClass(container, "leaflet-vml-shape " + (this.options.className || ""));
            container.coordsize = "1 1";
            layer._path = vmlCreate("path");
            container.appendChild(layer._path);
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
          },
          _addPath: function(layer) {
            var container = layer._container;
            this._container.appendChild(container);
            if (layer.options.interactive) {
              layer.addInteractiveTarget(container);
            }
          },
          _removePath: function(layer) {
            var container = layer._container;
            remove(container);
            layer.removeInteractiveTarget(container);
            delete this._layers[stamp(layer)];
          },
          _updateStyle: function(layer) {
            var stroke = layer._stroke, fill = layer._fill, options = layer.options, container = layer._container;
            container.stroked = !!options.stroke;
            container.filled = !!options.fill;
            if (options.stroke) {
              if (!stroke) {
                stroke = layer._stroke = vmlCreate("stroke");
              }
              container.appendChild(stroke);
              stroke.weight = options.weight + "px";
              stroke.color = options.color;
              stroke.opacity = options.opacity;
              if (options.dashArray) {
                stroke.dashStyle = isArray2(options.dashArray) ? options.dashArray.join(" ") : options.dashArray.replace(/( *, *)/g, " ");
              } else {
                stroke.dashStyle = "";
              }
              stroke.endcap = options.lineCap.replace("butt", "flat");
              stroke.joinstyle = options.lineJoin;
            } else if (stroke) {
              container.removeChild(stroke);
              layer._stroke = null;
            }
            if (options.fill) {
              if (!fill) {
                fill = layer._fill = vmlCreate("fill");
              }
              container.appendChild(fill);
              fill.color = options.fillColor || options.color;
              fill.opacity = options.fillOpacity;
            } else if (fill) {
              container.removeChild(fill);
              layer._fill = null;
            }
          },
          _updateCircle: function(layer) {
            var p = layer._point.round(), r = Math.round(layer._radius), r2 = Math.round(layer._radiusY || r);
            this._setPath(layer, layer._empty() ? "M0 0" : "AL " + p.x + "," + p.y + " " + r + "," + r2 + " 0," + 65535 * 360);
          },
          _setPath: function(layer, path) {
            layer._path.v = path;
          },
          _bringToFront: function(layer) {
            toFront(layer._container);
          },
          _bringToBack: function(layer) {
            toBack(layer._container);
          }
        };
        var create = Browser.vml ? vmlCreate : svgCreate;
        var SVG = Renderer.extend({
          _initContainer: function() {
            this._container = create("svg");
            this._container.setAttribute("pointer-events", "none");
            this._rootGroup = create("g");
            this._container.appendChild(this._rootGroup);
          },
          _destroyContainer: function() {
            remove(this._container);
            off(this._container);
            delete this._container;
            delete this._rootGroup;
            delete this._svgSize;
          },
          _update: function() {
            if (this._map._animatingZoom && this._bounds) {
              return;
            }
            Renderer.prototype._update.call(this);
            var b = this._bounds, size = b.getSize(), container = this._container;
            if (!this._svgSize || !this._svgSize.equals(size)) {
              this._svgSize = size;
              container.setAttribute("width", size.x);
              container.setAttribute("height", size.y);
            }
            setPosition(container, b.min);
            container.setAttribute("viewBox", [b.min.x, b.min.y, size.x, size.y].join(" "));
            this.fire("update");
          },
          // methods below are called by vector layers implementations
          _initPath: function(layer) {
            var path = layer._path = create("path");
            if (layer.options.className) {
              addClass(path, layer.options.className);
            }
            if (layer.options.interactive) {
              addClass(path, "leaflet-interactive");
            }
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
          },
          _addPath: function(layer) {
            if (!this._rootGroup) {
              this._initContainer();
            }
            this._rootGroup.appendChild(layer._path);
            layer.addInteractiveTarget(layer._path);
          },
          _removePath: function(layer) {
            remove(layer._path);
            layer.removeInteractiveTarget(layer._path);
            delete this._layers[stamp(layer)];
          },
          _updatePath: function(layer) {
            layer._project();
            layer._update();
          },
          _updateStyle: function(layer) {
            var path = layer._path, options = layer.options;
            if (!path) {
              return;
            }
            if (options.stroke) {
              path.setAttribute("stroke", options.color);
              path.setAttribute("stroke-opacity", options.opacity);
              path.setAttribute("stroke-width", options.weight);
              path.setAttribute("stroke-linecap", options.lineCap);
              path.setAttribute("stroke-linejoin", options.lineJoin);
              if (options.dashArray) {
                path.setAttribute("stroke-dasharray", options.dashArray);
              } else {
                path.removeAttribute("stroke-dasharray");
              }
              if (options.dashOffset) {
                path.setAttribute("stroke-dashoffset", options.dashOffset);
              } else {
                path.removeAttribute("stroke-dashoffset");
              }
            } else {
              path.setAttribute("stroke", "none");
            }
            if (options.fill) {
              path.setAttribute("fill", options.fillColor || options.color);
              path.setAttribute("fill-opacity", options.fillOpacity);
              path.setAttribute("fill-rule", options.fillRule || "evenodd");
            } else {
              path.setAttribute("fill", "none");
            }
          },
          _updatePoly: function(layer, closed) {
            this._setPath(layer, pointsToPath(layer._parts, closed));
          },
          _updateCircle: function(layer) {
            var p = layer._point, r = Math.max(Math.round(layer._radius), 1), r2 = Math.max(Math.round(layer._radiusY), 1) || r, arc = "a" + r + "," + r2 + " 0 1,0 ";
            var d = layer._empty() ? "M0 0" : "M" + (p.x - r) + "," + p.y + arc + r * 2 + ",0 " + arc + -r * 2 + ",0 ";
            this._setPath(layer, d);
          },
          _setPath: function(layer, path) {
            layer._path.setAttribute("d", path);
          },
          // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
          _bringToFront: function(layer) {
            toFront(layer._path);
          },
          _bringToBack: function(layer) {
            toBack(layer._path);
          }
        });
        if (Browser.vml) {
          SVG.include(vmlMixin);
        }
        function svg(options) {
          return Browser.svg || Browser.vml ? new SVG(options) : null;
        }
        Map.include({
          // @namespace Map; @method getRenderer(layer: Path): Renderer
          // Returns the instance of `Renderer` that should be used to render the given
          // `Path`. It will ensure that the `renderer` options of the map and paths
          // are respected, and that the renderers do exist on the map.
          getRenderer: function(layer) {
            var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
            if (!renderer) {
              renderer = this._renderer = this._createRenderer();
            }
            if (!this.hasLayer(renderer)) {
              this.addLayer(renderer);
            }
            return renderer;
          },
          _getPaneRenderer: function(name) {
            if (name === "overlayPane" || name === void 0) {
              return false;
            }
            var renderer = this._paneRenderers[name];
            if (renderer === void 0) {
              renderer = this._createRenderer({ pane: name });
              this._paneRenderers[name] = renderer;
            }
            return renderer;
          },
          _createRenderer: function(options) {
            return this.options.preferCanvas && canvas(options) || svg(options);
          }
        });
        var Rectangle = Polygon.extend({
          initialize: function(latLngBounds, options) {
            Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
          },
          // @method setBounds(latLngBounds: LatLngBounds): this
          // Redraws the rectangle with the passed bounds.
          setBounds: function(latLngBounds) {
            return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
          },
          _boundsToLatLngs: function(latLngBounds) {
            latLngBounds = toLatLngBounds(latLngBounds);
            return [
              latLngBounds.getSouthWest(),
              latLngBounds.getNorthWest(),
              latLngBounds.getNorthEast(),
              latLngBounds.getSouthEast()
            ];
          }
        });
        function rectangle(latLngBounds, options) {
          return new Rectangle(latLngBounds, options);
        }
        SVG.create = create;
        SVG.pointsToPath = pointsToPath;
        GeoJSON.geometryToLayer = geometryToLayer;
        GeoJSON.coordsToLatLng = coordsToLatLng;
        GeoJSON.coordsToLatLngs = coordsToLatLngs;
        GeoJSON.latLngToCoords = latLngToCoords;
        GeoJSON.latLngsToCoords = latLngsToCoords;
        GeoJSON.getFeature = getFeature;
        GeoJSON.asFeature = asFeature;
        Map.mergeOptions({
          // @option boxZoom: Boolean = true
          // Whether the map can be zoomed to a rectangular area specified by
          // dragging the mouse while pressing the shift key.
          boxZoom: true
        });
        var BoxZoom = Handler.extend({
          initialize: function(map) {
            this._map = map;
            this._container = map._container;
            this._pane = map._panes.overlayPane;
            this._resetStateTimeout = 0;
            map.on("unload", this._destroy, this);
          },
          addHooks: function() {
            on(this._container, "mousedown", this._onMouseDown, this);
          },
          removeHooks: function() {
            off(this._container, "mousedown", this._onMouseDown, this);
          },
          moved: function() {
            return this._moved;
          },
          _destroy: function() {
            remove(this._pane);
            delete this._pane;
          },
          _resetState: function() {
            this._resetStateTimeout = 0;
            this._moved = false;
          },
          _clearDeferredResetState: function() {
            if (this._resetStateTimeout !== 0) {
              clearTimeout(this._resetStateTimeout);
              this._resetStateTimeout = 0;
            }
          },
          _onMouseDown: function(e) {
            if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
              return false;
            }
            this._clearDeferredResetState();
            this._resetState();
            disableTextSelection();
            disableImageDrag();
            this._startPoint = this._map.mouseEventToContainerPoint(e);
            on(document, {
              contextmenu: stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this);
          },
          _onMouseMove: function(e) {
            if (!this._moved) {
              this._moved = true;
              this._box = create$1("div", "leaflet-zoom-box", this._container);
              addClass(this._container, "leaflet-crosshair");
              this._map.fire("boxzoomstart");
            }
            this._point = this._map.mouseEventToContainerPoint(e);
            var bounds = new Bounds(this._point, this._startPoint), size = bounds.getSize();
            setPosition(this._box, bounds.min);
            this._box.style.width = size.x + "px";
            this._box.style.height = size.y + "px";
          },
          _finish: function() {
            if (this._moved) {
              remove(this._box);
              removeClass(this._container, "leaflet-crosshair");
            }
            enableTextSelection();
            enableImageDrag();
            off(document, {
              contextmenu: stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this);
          },
          _onMouseUp: function(e) {
            if (e.which !== 1 && e.button !== 1) {
              return;
            }
            this._finish();
            if (!this._moved) {
              return;
            }
            this._clearDeferredResetState();
            this._resetStateTimeout = setTimeout(bind2(this._resetState, this), 0);
            var bounds = new LatLngBounds(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(bounds).fire("boxzoomend", { boxZoomBounds: bounds });
          },
          _onKeyDown: function(e) {
            if (e.keyCode === 27) {
              this._finish();
              this._clearDeferredResetState();
              this._resetState();
            }
          }
        });
        Map.addInitHook("addHandler", "boxZoom", BoxZoom);
        Map.mergeOptions({
          // @option doubleClickZoom: Boolean|String = true
          // Whether the map can be zoomed in by double clicking on it and
          // zoomed out by double clicking while holding shift. If passed
          // `'center'`, double-click zoom will zoom to the center of the
          //  view regardless of where the mouse was.
          doubleClickZoom: true
        });
        var DoubleClickZoom = Handler.extend({
          addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this);
          },
          removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this);
          },
          _onDoubleClick: function(e) {
            var map = this._map, oldZoom = map.getZoom(), delta = map.options.zoomDelta, zoom2 = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
            if (map.options.doubleClickZoom === "center") {
              map.setZoom(zoom2);
            } else {
              map.setZoomAround(e.containerPoint, zoom2);
            }
          }
        });
        Map.addInitHook("addHandler", "doubleClickZoom", DoubleClickZoom);
        Map.mergeOptions({
          // @option dragging: Boolean = true
          // Whether the map is draggable with mouse/touch or not.
          dragging: true,
          // @section Panning Inertia Options
          // @option inertia: Boolean = *
          // If enabled, panning of the map will have an inertia effect where
          // the map builds momentum while dragging and continues moving in
          // the same direction for some time. Feels especially nice on touch
          // devices. Enabled by default.
          inertia: true,
          // @option inertiaDeceleration: Number = 3000
          // The rate with which the inertial movement slows down, in pixels/second².
          inertiaDeceleration: 3400,
          // px/s^2
          // @option inertiaMaxSpeed: Number = Infinity
          // Max speed of the inertial movement, in pixels/second.
          inertiaMaxSpeed: Infinity,
          // px/s
          // @option easeLinearity: Number = 0.2
          easeLinearity: 0.2,
          // TODO refactor, move to CRS
          // @option worldCopyJump: Boolean = false
          // With this option enabled, the map tracks when you pan to another "copy"
          // of the world and seamlessly jumps to the original one so that all overlays
          // like markers and vector layers are still visible.
          worldCopyJump: false,
          // @option maxBoundsViscosity: Number = 0.0
          // If `maxBounds` is set, this option will control how solid the bounds
          // are when dragging the map around. The default value of `0.0` allows the
          // user to drag outside the bounds at normal speed, higher values will
          // slow down map dragging outside bounds, and `1.0` makes the bounds fully
          // solid, preventing the user from dragging outside the bounds.
          maxBoundsViscosity: 0
        });
        var Drag = Handler.extend({
          addHooks: function() {
            if (!this._draggable) {
              var map = this._map;
              this._draggable = new Draggable(map._mapPane, map._container);
              this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
              }, this);
              this._draggable.on("predrag", this._onPreDragLimit, this);
              if (map.options.worldCopyJump) {
                this._draggable.on("predrag", this._onPreDragWrap, this);
                map.on("zoomend", this._onZoomEnd, this);
                map.whenReady(this._onZoomEnd, this);
              }
            }
            addClass(this._map._container, "leaflet-grab leaflet-touch-drag");
            this._draggable.enable();
            this._positions = [];
            this._times = [];
          },
          removeHooks: function() {
            removeClass(this._map._container, "leaflet-grab");
            removeClass(this._map._container, "leaflet-touch-drag");
            this._draggable.disable();
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          moving: function() {
            return this._draggable && this._draggable._moving;
          },
          _onDragStart: function() {
            var map = this._map;
            map._stop();
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
              var bounds = toLatLngBounds(this._map.options.maxBounds);
              this._offsetLimit = toBounds(
                this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
                this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
              );
              this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
            } else {
              this._offsetLimit = null;
            }
            map.fire("movestart").fire("dragstart");
            if (map.options.inertia) {
              this._positions = [];
              this._times = [];
            }
          },
          _onDrag: function(e) {
            if (this._map.options.inertia) {
              var time = this._lastTime = +/* @__PURE__ */ new Date(), pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
              this._positions.push(pos);
              this._times.push(time);
              this._prunePositions(time);
            }
            this._map.fire("move", e).fire("drag", e);
          },
          _prunePositions: function(time) {
            while (this._positions.length > 1 && time - this._times[0] > 50) {
              this._positions.shift();
              this._times.shift();
            }
          },
          _onZoomEnd: function() {
            var pxCenter = this._map.getSize().divideBy(2), pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
          },
          _viscousLimit: function(value, threshold) {
            return value - (value - threshold) * this._viscosity;
          },
          _onPreDragLimit: function() {
            if (!this._viscosity || !this._offsetLimit) {
              return;
            }
            var offset = this._draggable._newPos.subtract(this._draggable._startPos);
            var limit = this._offsetLimit;
            if (offset.x < limit.min.x) {
              offset.x = this._viscousLimit(offset.x, limit.min.x);
            }
            if (offset.y < limit.min.y) {
              offset.y = this._viscousLimit(offset.y, limit.min.y);
            }
            if (offset.x > limit.max.x) {
              offset.x = this._viscousLimit(offset.x, limit.max.x);
            }
            if (offset.y > limit.max.y) {
              offset.y = this._viscousLimit(offset.y, limit.max.y);
            }
            this._draggable._newPos = this._draggable._startPos.add(offset);
          },
          _onPreDragWrap: function() {
            var worldWidth = this._worldWidth, halfWidth = Math.round(worldWidth / 2), dx = this._initialWorldOffset, x = this._draggable._newPos.x, newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx, newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx, newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
            this._draggable._absPos = this._draggable._newPos.clone();
            this._draggable._newPos.x = newX;
          },
          _onDragEnd: function(e) {
            var map = this._map, options = map.options, noInertia = !options.inertia || e.noInertia || this._times.length < 2;
            map.fire("dragend", e);
            if (noInertia) {
              map.fire("moveend");
            } else {
              this._prunePositions(+/* @__PURE__ */ new Date());
              var direction = this._lastPos.subtract(this._positions[0]), duration = (this._lastTime - this._times[0]) / 1e3, ease = options.easeLinearity, speedVector = direction.multiplyBy(ease / duration), speed = speedVector.distanceTo([0, 0]), limitedSpeed = Math.min(options.inertiaMaxSpeed, speed), limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed), decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease), offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
              if (!offset.x && !offset.y) {
                map.fire("moveend");
              } else {
                offset = map._limitOffset(offset, map.options.maxBounds);
                requestAnimFrame(function() {
                  map.panBy(offset, {
                    duration: decelerationDuration,
                    easeLinearity: ease,
                    noMoveStart: true,
                    animate: true
                  });
                });
              }
            }
          }
        });
        Map.addInitHook("addHandler", "dragging", Drag);
        Map.mergeOptions({
          // @option keyboard: Boolean = true
          // Makes the map focusable and allows users to navigate the map with keyboard
          // arrows and `+`/`-` keys.
          keyboard: true,
          // @option keyboardPanDelta: Number = 80
          // Amount of pixels to pan when pressing an arrow key.
          keyboardPanDelta: 80
        });
        var Keyboard = Handler.extend({
          keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
          },
          initialize: function(map) {
            this._map = map;
            this._setPanDelta(map.options.keyboardPanDelta);
            this._setZoomDelta(map.options.zoomDelta);
          },
          addHooks: function() {
            var container = this._map._container;
            if (container.tabIndex <= 0) {
              container.tabIndex = "0";
            }
            on(container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this);
            this._map.on({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this);
          },
          removeHooks: function() {
            this._removeHooks();
            off(this._map._container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this);
            this._map.off({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this);
          },
          _onMouseDown: function() {
            if (this._focused) {
              return;
            }
            var body = document.body, docEl = document.documentElement, top = body.scrollTop || docEl.scrollTop, left = body.scrollLeft || docEl.scrollLeft;
            this._map._container.focus();
            window.scrollTo(left, top);
          },
          _onFocus: function() {
            this._focused = true;
            this._map.fire("focus");
          },
          _onBlur: function() {
            this._focused = false;
            this._map.fire("blur");
          },
          _setPanDelta: function(panDelta) {
            var keys = this._panKeys = {}, codes = this.keyCodes, i, len;
            for (i = 0, len = codes.left.length; i < len; i++) {
              keys[codes.left[i]] = [-1 * panDelta, 0];
            }
            for (i = 0, len = codes.right.length; i < len; i++) {
              keys[codes.right[i]] = [panDelta, 0];
            }
            for (i = 0, len = codes.down.length; i < len; i++) {
              keys[codes.down[i]] = [0, panDelta];
            }
            for (i = 0, len = codes.up.length; i < len; i++) {
              keys[codes.up[i]] = [0, -1 * panDelta];
            }
          },
          _setZoomDelta: function(zoomDelta) {
            var keys = this._zoomKeys = {}, codes = this.keyCodes, i, len;
            for (i = 0, len = codes.zoomIn.length; i < len; i++) {
              keys[codes.zoomIn[i]] = zoomDelta;
            }
            for (i = 0, len = codes.zoomOut.length; i < len; i++) {
              keys[codes.zoomOut[i]] = -zoomDelta;
            }
          },
          _addHooks: function() {
            on(document, "keydown", this._onKeyDown, this);
          },
          _removeHooks: function() {
            off(document, "keydown", this._onKeyDown, this);
          },
          _onKeyDown: function(e) {
            if (e.altKey || e.ctrlKey || e.metaKey) {
              return;
            }
            var key = e.keyCode, map = this._map, offset;
            if (key in this._panKeys) {
              if (!map._panAnim || !map._panAnim._inProgress) {
                offset = this._panKeys[key];
                if (e.shiftKey) {
                  offset = toPoint(offset).multiplyBy(3);
                }
                if (map.options.maxBounds) {
                  offset = map._limitOffset(toPoint(offset), map.options.maxBounds);
                }
                if (map.options.worldCopyJump) {
                  var newLatLng = map.wrapLatLng(map.unproject(map.project(map.getCenter()).add(offset)));
                  map.panTo(newLatLng);
                } else {
                  map.panBy(offset);
                }
              }
            } else if (key in this._zoomKeys) {
              map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
            } else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
              map.closePopup();
            } else {
              return;
            }
            stop(e);
          }
        });
        Map.addInitHook("addHandler", "keyboard", Keyboard);
        Map.mergeOptions({
          // @section Mouse wheel options
          // @option scrollWheelZoom: Boolean|String = true
          // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
          // it will zoom to the center of the view regardless of where the mouse was.
          scrollWheelZoom: true,
          // @option wheelDebounceTime: Number = 40
          // Limits the rate at which a wheel can fire (in milliseconds). By default
          // user can't zoom via wheel more often than once per 40 ms.
          wheelDebounceTime: 40,
          // @option wheelPxPerZoomLevel: Number = 60
          // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
          // mean a change of one full zoom level. Smaller values will make wheel-zooming
          // faster (and vice versa).
          wheelPxPerZoomLevel: 60
        });
        var ScrollWheelZoom = Handler.extend({
          addHooks: function() {
            on(this._map._container, "wheel", this._onWheelScroll, this);
            this._delta = 0;
          },
          removeHooks: function() {
            off(this._map._container, "wheel", this._onWheelScroll, this);
          },
          _onWheelScroll: function(e) {
            var delta = getWheelDelta(e);
            var debounce = this._map.options.wheelDebounceTime;
            this._delta += delta;
            this._lastMousePos = this._map.mouseEventToContainerPoint(e);
            if (!this._startTime) {
              this._startTime = +/* @__PURE__ */ new Date();
            }
            var left = Math.max(debounce - (+/* @__PURE__ */ new Date() - this._startTime), 0);
            clearTimeout(this._timer);
            this._timer = setTimeout(bind2(this._performZoom, this), left);
            stop(e);
          },
          _performZoom: function() {
            var map = this._map, zoom2 = map.getZoom(), snap = this._map.options.zoomSnap || 0;
            map._stop();
            var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2, d4 = snap ? Math.ceil(d3 / snap) * snap : d3, delta = map._limitZoom(zoom2 + (this._delta > 0 ? d4 : -d4)) - zoom2;
            this._delta = 0;
            this._startTime = null;
            if (!delta) {
              return;
            }
            if (map.options.scrollWheelZoom === "center") {
              map.setZoom(zoom2 + delta);
            } else {
              map.setZoomAround(this._lastMousePos, zoom2 + delta);
            }
          }
        });
        Map.addInitHook("addHandler", "scrollWheelZoom", ScrollWheelZoom);
        var tapHoldDelay = 600;
        Map.mergeOptions({
          // @section Touch interaction options
          // @option tapHold: Boolean
          // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
          tapHold: Browser.touchNative && Browser.safari && Browser.mobile,
          // @option tapTolerance: Number = 15
          // The max number of pixels a user can shift his finger during touch
          // for it to be considered a valid tap.
          tapTolerance: 15
        });
        var TapHold = Handler.extend({
          addHooks: function() {
            on(this._map._container, "touchstart", this._onDown, this);
          },
          removeHooks: function() {
            off(this._map._container, "touchstart", this._onDown, this);
          },
          _onDown: function(e) {
            clearTimeout(this._holdTimeout);
            if (e.touches.length !== 1) {
              return;
            }
            var first = e.touches[0];
            this._startPos = this._newPos = new Point(first.clientX, first.clientY);
            this._holdTimeout = setTimeout(bind2(function() {
              this._cancel();
              if (!this._isTapValid()) {
                return;
              }
              on(document, "touchend", preventDefault);
              on(document, "touchend touchcancel", this._cancelClickPrevent);
              this._simulateEvent("contextmenu", first);
            }, this), tapHoldDelay);
            on(document, "touchend touchcancel contextmenu", this._cancel, this);
            on(document, "touchmove", this._onMove, this);
          },
          _cancelClickPrevent: function cancelClickPrevent() {
            off(document, "touchend", preventDefault);
            off(document, "touchend touchcancel", cancelClickPrevent);
          },
          _cancel: function() {
            clearTimeout(this._holdTimeout);
            off(document, "touchend touchcancel contextmenu", this._cancel, this);
            off(document, "touchmove", this._onMove, this);
          },
          _onMove: function(e) {
            var first = e.touches[0];
            this._newPos = new Point(first.clientX, first.clientY);
          },
          _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
          },
          _simulateEvent: function(type, e) {
            var simulatedEvent = new MouseEvent(type, {
              bubbles: true,
              cancelable: true,
              view: window,
              // detail: 1,
              screenX: e.screenX,
              screenY: e.screenY,
              clientX: e.clientX,
              clientY: e.clientY
              // button: 2,
              // buttons: 2
            });
            simulatedEvent._simulated = true;
            e.target.dispatchEvent(simulatedEvent);
          }
        });
        Map.addInitHook("addHandler", "tapHold", TapHold);
        Map.mergeOptions({
          // @section Touch interaction options
          // @option touchZoom: Boolean|String = *
          // Whether the map can be zoomed by touch-dragging with two fingers. If
          // passed `'center'`, it will zoom to the center of the view regardless of
          // where the touch events (fingers) were. Enabled for touch-capable web
          // browsers.
          touchZoom: Browser.touch,
          // @option bounceAtZoomLimits: Boolean = true
          // Set it to false if you don't want the map to zoom beyond min/max zoom
          // and then bounce back when pinch-zooming.
          bounceAtZoomLimits: true
        });
        var TouchZoom = Handler.extend({
          addHooks: function() {
            addClass(this._map._container, "leaflet-touch-zoom");
            on(this._map._container, "touchstart", this._onTouchStart, this);
          },
          removeHooks: function() {
            removeClass(this._map._container, "leaflet-touch-zoom");
            off(this._map._container, "touchstart", this._onTouchStart, this);
          },
          _onTouchStart: function(e) {
            var map = this._map;
            if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
              return;
            }
            var p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = map.getSize()._divideBy(2);
            this._startLatLng = map.containerPointToLatLng(this._centerPoint);
            if (map.options.touchZoom !== "center") {
              this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
            }
            this._startDist = p1.distanceTo(p2);
            this._startZoom = map.getZoom();
            this._moved = false;
            this._zooming = true;
            map._stop();
            on(document, "touchmove", this._onTouchMove, this);
            on(document, "touchend touchcancel", this._onTouchEnd, this);
            preventDefault(e);
          },
          _onTouchMove: function(e) {
            if (!e.touches || e.touches.length !== 2 || !this._zooming) {
              return;
            }
            var map = this._map, p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]), scale2 = p1.distanceTo(p2) / this._startDist;
            this._zoom = map.getScaleZoom(scale2, this._startZoom);
            if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale2 < 1 || this._zoom > map.getMaxZoom() && scale2 > 1)) {
              this._zoom = map._limitZoom(this._zoom);
            }
            if (map.options.touchZoom === "center") {
              this._center = this._startLatLng;
              if (scale2 === 1) {
                return;
              }
            } else {
              var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
              if (scale2 === 1 && delta.x === 0 && delta.y === 0) {
                return;
              }
              this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
            }
            if (!this._moved) {
              map._moveStart(true, false);
              this._moved = true;
            }
            cancelAnimFrame(this._animRequest);
            var moveFn = bind2(map._move, map, this._center, this._zoom, { pinch: true, round: false }, void 0);
            this._animRequest = requestAnimFrame(moveFn, this, true);
            preventDefault(e);
          },
          _onTouchEnd: function() {
            if (!this._moved || !this._zooming) {
              this._zooming = false;
              return;
            }
            this._zooming = false;
            cancelAnimFrame(this._animRequest);
            off(document, "touchmove", this._onTouchMove, this);
            off(document, "touchend touchcancel", this._onTouchEnd, this);
            if (this._map.options.zoomAnimation) {
              this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
            } else {
              this._map._resetView(this._center, this._map._limitZoom(this._zoom));
            }
          }
        });
        Map.addInitHook("addHandler", "touchZoom", TouchZoom);
        Map.BoxZoom = BoxZoom;
        Map.DoubleClickZoom = DoubleClickZoom;
        Map.Drag = Drag;
        Map.Keyboard = Keyboard;
        Map.ScrollWheelZoom = ScrollWheelZoom;
        Map.TapHold = TapHold;
        Map.TouchZoom = TouchZoom;
        exports2.Bounds = Bounds;
        exports2.Browser = Browser;
        exports2.CRS = CRS;
        exports2.Canvas = Canvas;
        exports2.Circle = Circle;
        exports2.CircleMarker = CircleMarker;
        exports2.Class = Class;
        exports2.Control = Control;
        exports2.DivIcon = DivIcon;
        exports2.DivOverlay = DivOverlay;
        exports2.DomEvent = DomEvent;
        exports2.DomUtil = DomUtil;
        exports2.Draggable = Draggable;
        exports2.Evented = Evented;
        exports2.FeatureGroup = FeatureGroup;
        exports2.GeoJSON = GeoJSON;
        exports2.GridLayer = GridLayer;
        exports2.Handler = Handler;
        exports2.Icon = Icon;
        exports2.ImageOverlay = ImageOverlay;
        exports2.LatLng = LatLng;
        exports2.LatLngBounds = LatLngBounds;
        exports2.Layer = Layer;
        exports2.LayerGroup = LayerGroup;
        exports2.LineUtil = LineUtil;
        exports2.Map = Map;
        exports2.Marker = Marker;
        exports2.Mixin = Mixin;
        exports2.Path = Path;
        exports2.Point = Point;
        exports2.PolyUtil = PolyUtil;
        exports2.Polygon = Polygon;
        exports2.Polyline = Polyline;
        exports2.Popup = Popup;
        exports2.PosAnimation = PosAnimation;
        exports2.Projection = index;
        exports2.Rectangle = Rectangle;
        exports2.Renderer = Renderer;
        exports2.SVG = SVG;
        exports2.SVGOverlay = SVGOverlay;
        exports2.TileLayer = TileLayer;
        exports2.Tooltip = Tooltip;
        exports2.Transformation = Transformation;
        exports2.Util = Util;
        exports2.VideoOverlay = VideoOverlay;
        exports2.bind = bind2;
        exports2.bounds = toBounds;
        exports2.canvas = canvas;
        exports2.circle = circle;
        exports2.circleMarker = circleMarker;
        exports2.control = control;
        exports2.divIcon = divIcon;
        exports2.extend = extend2;
        exports2.featureGroup = featureGroup;
        exports2.geoJSON = geoJSON;
        exports2.geoJson = geoJson;
        exports2.gridLayer = gridLayer;
        exports2.icon = icon;
        exports2.imageOverlay = imageOverlay;
        exports2.latLng = toLatLng;
        exports2.latLngBounds = toLatLngBounds;
        exports2.layerGroup = layerGroup;
        exports2.map = createMap;
        exports2.marker = marker;
        exports2.point = toPoint;
        exports2.polygon = polygon;
        exports2.polyline = polyline;
        exports2.popup = popup;
        exports2.rectangle = rectangle;
        exports2.setOptions = setOptions;
        exports2.stamp = stamp;
        exports2.svg = svg;
        exports2.svgOverlay = svgOverlay;
        exports2.tileLayer = tileLayer;
        exports2.tooltip = tooltip;
        exports2.transformation = toTransformation;
        exports2.version = version;
        exports2.videoOverlay = videoOverlay;
        var oldL = window.L;
        exports2.noConflict = function() {
          window.L = oldL;
          return this;
        };
        window.L = exports2;
      });
    }
  });

  // node_modules/@babel/polyfill/lib/index.js
  require_noConflict();
  var _global = _interopRequireDefault(require_global3());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
    console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.");
  }
  _global["default"]._babelPolyfill = true;

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var { iterator, toStringTag } = Symbol;
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(toStringTag in val) && !(iterator in val);
  };
  var isEmptyObject = (val) => {
    if (!isObject(val) || isBuffer(val)) {
      return false;
    }
    try {
      return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
      return false;
    }
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      if (isBuffer(obj)) {
        return;
      }
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    if (isBuffer(obj)) {
      return null;
    }
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global2 = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global2;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while ((result = _iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define2 = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (isBuffer(source)) {
          return source;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks) => {
      _global2.addEventListener("message", ({ source, data }) => {
        if (source === _global2 && data === token) {
          callbacks.length && callbacks.shift()();
        }
      }, false);
      return (cb) => {
        callbacks.push(cb);
        _global2.postMessage(token, "*");
      };
    })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
  })(
    typeof setImmediate === "function",
    isFunction(_global2.postMessage)
  );
  var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global2) : typeof process !== "undefined" && process.nextTick || _setImmediate;
  var isIterable = (thing) => thing != null && isFunction(thing[iterator]);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global2,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (utils_default.isBoolean(value)) {
        return value.toString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    if (utils_default.isFunction(options)) {
      options = {
        serialize: options
      };
    }
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    navigator: () => _navigator,
    origin: () => origin
  });
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var _navigator = typeof navigator === "object" && navigator || void 0;
  var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var origin = hasBrowserEnv && window.location.href || "http://localhost";

  // node_modules/axios/lib/platform/index.js
  var platform_default = {
    ...utils_exports,
    ...browser_default
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), {
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      },
      ...options
    });
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else if (utils_default.isObject(header) && utils_default.isIterable(header)) {
        let obj = {}, dest, key;
        for (const entry of header) {
          if (!utils_default.isArray(entry)) {
            throw TypeError("Object iterator must return a key-value pair");
          }
          obj[key = entry[0]] = (dest = obj[key]) ? utils_default.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
        }
        setHeaders(obj, valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/helpers/throttle.js
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn(...args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    return [throttled, flush];
  }
  var throttle_default = throttle;

  // node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return throttle_default((e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null,
        [isDownloadStream ? "download" : "upload"]: true
      };
      listener(data);
    }, freq);
  };
  var progressEventDecorator = (total, throttled) => {
    const lengthComputable = total != null;
    return [(loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }), throttled[1]];
  };
  var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
    url = new URL(url, platform_default.origin);
    return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
  })(
    new URL(platform_default.origin),
    platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
  ) : () => true;

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + "=" + encodeURIComponent(value)];
        utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils_default.isString(path) && cookie.push("path=" + path);
        utils_default.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !isAbsoluteURL(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, prop, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, prop, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    utils_default.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/helpers/resolveConfig.js
  var resolveConfig_default = (config) => {
    const newConfig = mergeConfig({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders_default.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    if (auth) {
      headers.set(
        "Authorization",
        "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
      );
    }
    let contentType;
    if (utils_default.isFormData(data)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(void 0);
      } else if ((contentType = headers.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    if (platform_default.hasStandardBrowserEnv) {
      withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };

  // node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig_default(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;
      function done() {
        flushUpload && flushUpload();
        flushDownload && flushDownload();
        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal && _config.signal.removeEventListener("abort", onCanceled);
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = _config.transitional || transitional_default;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
        request.addEventListener("progress", downloadThrottled);
      }
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
        request.upload.addEventListener("progress", uploadThrottled);
        request.upload.addEventListener("loadend", flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/helpers/composeSignals.js
  var composeSignals = (signals, timeout) => {
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
      let controller = new AbortController();
      let aborted;
      const onabort = function(reason) {
        if (!aborted) {
          aborted = true;
          unsubscribe();
          const err = reason instanceof Error ? reason : this.reason;
          controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
        }
      };
      let timer = timeout && setTimeout(() => {
        timer = null;
        onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
      }, timeout);
      const unsubscribe = () => {
        if (signals) {
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach((signal2) => {
            signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
          });
          signals = null;
        }
      };
      signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
      const { signal } = controller;
      signal.unsubscribe = () => utils_default.asap(unsubscribe);
      return signal;
    }
  };
  var composeSignals_default = composeSignals;

  // node_modules/axios/lib/helpers/trackStream.js
  var streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  var readBytes = async function* (iterable, chunkSize) {
    for await (const chunk of readStream(iterable)) {
      yield* streamChunk(chunk, chunkSize);
    }
  };
  var readStream = async function* (stream) {
    if (stream[Symbol.asyncIterator]) {
      yield* stream;
      return;
    }
    const reader = stream.getReader();
    try {
      for (; ; ) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        yield value;
      }
    } finally {
      await reader.cancel();
    }
  };
  var trackStream = (stream, chunkSize, onProgress, onFinish) => {
    const iterator2 = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e) => {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream({
      async pull(controller) {
        try {
          const { done: done2, value } = await iterator2.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator2.return();
      }
    }, {
      highWaterMark: 2
    });
  };

  // node_modules/axios/lib/adapters/fetch.js
  var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
  var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
  var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
  var test = (fn, ...args) => {
    try {
      return !!fn(...args);
    } catch (e) {
      return false;
    }
  };
  var supportsRequestStream = isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform_default.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  });
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
  var resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && ((res) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
        throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
      });
    });
  })(new Response());
  var getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils_default.isBlob(body)) {
      return body.size;
    }
    if (utils_default.isSpecCompliantForm(body)) {
      const _request = new Request(platform_default.origin, {
        method: "POST",
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils_default.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils_default.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  var resolveBodyLength = async (headers, body) => {
    const length = utils_default.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  var fetch_default = isFetchSupported && (async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig_default(config);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
    let request;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }
      if (!utils_default.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = "credentials" in Request.prototype;
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      });
      let response = await fetch(request, fetchOptions);
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders_default.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError_default.from(err, err && err.code, config, request);
    }
  });

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default,
    fetch: fetch_default
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length } = adapters;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError_default(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError_default(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/env/data.js
  var VERSION = "1.11.0";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  validators.spelling = function spelling(correctSpelling) {
    return (value, opt) => {
      console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
      return true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig || {};
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config) {
      try {
        return await this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy = {};
          Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          try {
            if (!err.stack) {
              err.stack = stack;
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
              err.stack += "\n" + stack;
            }
          } catch (e) {
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      if (config.allowAbsoluteUrls !== void 0) {
      } else if (this.defaults.allowAbsoluteUrls !== void 0) {
        config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
      } else {
        config.allowAbsoluteUrls = true;
      }
      validator_default.assertOptions(config, {
        baseUrl: validators2.spelling("baseURL"),
        withXsrfToken: validators2.spelling("withXSRFToken")
      }, true);
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift(...requestInterceptorChain);
        chain.push(...responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    toAbortSignal() {
      const controller = new AbortController();
      const abort = (err) => {
        controller.abort(err);
      };
      this.subscribe(abort);
      controller.signal.unsubscribe = () => this.unsubscribe(abort);
      return controller.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // public/js/alerts.js
  var hideAlert = () => {
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
  };
  var showAlert = (type, msg, time = 7) => {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout(hideAlert, time * 1e3);
  };

  // public/js/login.js
  var login = async (email, password) => {
    try {
      const res = await axios_default({
        method: "POST",
        url: "/api/v1/users/login",
        data: {
          email,
          password
        }
      });
      if (res.data.status === "success") {
        showAlert("success", "Logged in successfully!");
        window.setTimeout(() => {
          location.assign("/");
        }, 1500);
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };
  var signup = async (email, username, password, passwordConfirm) => {
    try {
      const res = await axios_default({
        method: "POST",
        url: "/api/v1/users/signup",
        data: {
          email,
          username,
          password,
          passwordConfirm
        }
      });
      if (res.data.status === "success") {
        showAlert("success", "Logged in successfully!");
        window.setTimeout(() => {
          location.assign("/");
        }, 1500);
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };
  var logout = async () => {
    try {
      const res = await axios_default({
        method: "GET",
        url: "/api/v1/users/logout"
      });
      if (res.data.status === "success") location.reload(true);
    } catch (err) {
      console.log(err.response);
      showAlert("error", "Error logging out! try again");
    }
  };

  // public/js/updateSettings.js
  var updateSettings = async (data, type) => {
    try {
      const url = type === "password" ? "/api/v1/users/updatePassword" : "/api/v1/users/updateMe";
      const res = await axios_default({
        method: "PATCH",
        url,
        data
      });
      if (res.data.status === "success") {
        showAlert("success", `${type.toUpperCase()} updated user successfully!`);
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };

  // public/js/leafletMap.js
  var import_leaflet = __toESM(require_leaflet_src());
  var displayMap = (locations) => {
    var map = import_leaflet.default.map("map", { zoomControl: false, keyboard: true });
    var CartoDB_Voyager = import_leaflet.default.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd"
        // maxZoom: 20
      }
    );
    CartoDB_Voyager.addTo(map);
    var myCustomIcon = import_leaflet.default.icon({
      iconUrl: "../img/pin.png",
      // URL to your custom icon image
      iconSize: [32, 40],
      // size of the icon
      iconAnchor: [16, 40],
      // point of the icon which will correspond to marker's location
      popupAnchor: [0, -20]
      // point from which the popup should open relative to the iconAnchor
    });
    const points = [];
    locations.forEach((loc) => {
      points.push([loc.coordinates[1], loc.coordinates[0]]);
      import_leaflet.default.marker([loc.coordinates[1], loc.coordinates[0]], { icon: myCustomIcon }).addTo(map).bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        autoClose: false
      }).openPopup().on("mouseover", function(e) {
        this.openPopup();
      }).on("mouseout", function(e) {
        this.closePopup();
      });
    });
    const bounds = import_leaflet.default.latLngBounds(points).pad(0.5);
    map.fitBounds(bounds);
    map.scrollWheelZoom.disable();
  };

  // public/js/stripe.js
  var bookTour = async (tourId) => {
    const stripe = Stripe(
      "pk_test_51Rw8kjRvG7889Jr7nXRZjnWpRQajW8429MZyjNQWtB5NZT3ysaj0JC2AOkb9gHBnWUiBWNmWNE8gTTkp1NbCRfFc00o4ekhKeW"
    );
    try {
      const session = await axios_default(`/api/v1/bookings/checkout_session/${tourId}`);
      await stripe.redirectToCheckout({ sessionId: session.data.session.id });
    } catch (err) {
      console.log(err);
      showAlert("error", err);
    }
  };

  // public/js/logGame.js
  var logGame = async (args) => {
    const { game, relationship, experience, rest } = args;
    const url = relationship ? `/api/v1/relationships/${relationship}` : `/api/v1/relationships`;
    try {
      const res = await axios_default({
        method: rest,
        url,
        data: { game, experience, relationship }
      });
      if (res.status === 204 || res.data.status === "success") {
        location.reload();
        showAlert("success", `${rest} successfully!`);
      } else {
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };
  var editLog = async (review, rating, relationship, game) => {
    const url = `/api/v1/relationships/${relationship}`;
    try {
      const res = await axios_default({
        method: "PATCH",
        url,
        data: { review, rating }
      });
      if (res.data.status === "success") {
        showAlert("success", `PATCH successfully!`);
        window.location.href = `/game/${game}`;
      } else {
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };

  // public/js/followingApi.js
  var followUser = async (userId) => {
    try {
      const res = await axios_default({
        method: "POST",
        url: "/api/v1/followers",
        data: {
          following: userId
        }
      });
      if (res.data.status === "success") {
        location.reload();
        showAlert("success", "Followed user");
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };
  var unfollowUser = async (followId) => {
    const url = "/api/v1/followers/" + followId;
    try {
      const res = await axios_default({
        method: "DELETE",
        url
      });
      if (res.status === 204) {
        location.reload();
        showAlert("success", "Unfollowed user");
      }
    } catch (err) {
      showAlert("error", err.response.data.message);
    }
  };

  // public/js/index.js
  var leafletMap = document.getElementById("map");
  var loginForm = document.querySelector(".form--login");
  var signupForm = document.querySelector(".form--signup");
  var logOutBtn = document.querySelector(".nav__el--logout");
  var userDataForm = document.querySelector(".form-user-data");
  var userPasswordForm = document.querySelector(".form-user-password");
  var bookBtn = document.getElementById("book-tour");
  var searchBtn = document.getElementById("search-game");
  var logBtn = document.getElementById("logBtn");
  var reviewForm = document.querySelector(".form--review");
  var followForm = document.querySelector(".form--follow");
  var unfollowForm = document.querySelector(".form--unfollow");
  if (leafletMap) {
    const locations = JSON.parse(leafletMap.dataset.locations);
    displayMap(locations);
  }
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    signup(email, username, password, passwordConfirm);
  });
  logOutBtn?.addEventListener("click", logout);
  userDataForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("username", document.getElementById("username").value);
    form.append("email", document.getElementById("email").value);
    updateSettings(form, "data");
  });
  userPasswordForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const saveBtn = document.querySelector(".btn--save--password");
    saveBtn.textContent = "Updating...";
    saveBtn.disabled = true;
    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      "password"
    );
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
    saveBtn.textContent = "Save Password";
    saveBtn.disabled = false;
  });
  if (bookBtn)
    bookBtn.addEventListener("click", (e) => {
      e.target.textContent = "Processing...";
      const { tourId } = e.target.dataset;
      bookTour(tourId);
    });
  var alertMessage = document.querySelector("body").dataset.alert;
  if (alertMessage) {
    showAlert("success", alertMessage, 15);
  }
  searchBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name-search-header").value;
    window.location.href = `/game/search/${name}`;
  });
  var dropdownButton = document.getElementById("dropbtn");
  if (dropdownButton) {
    let myFunction = function() {
      document.getElementById("myDropdown").classList.toggle("show");
    };
    dropdownButton.addEventListener("click", (e) => {
      myFunction();
    });
    window.onclick = function(event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }
  var wantToPlay = document.getElementById("wantToPlayUpdate");
  var havePlayedUPdate = document.getElementById("havePlayedUpdatePlayed");
  var deleteRelationship = document.getElementById("deleteRelationship");
  logBtn?.addEventListener("click", updateRelationship);
  wantToPlay?.addEventListener("click", updateRelationship);
  havePlayedUPdate?.addEventListener("click", updateRelationship);
  deleteRelationship?.addEventListener("click", updateRelationship);
  function updateRelationship(e) {
    e.preventDefault();
    logGame(e.target.dataset);
  }
  reviewForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const review = document.getElementById("review").value;
    const rating = Number(document.getElementById("rating").value);
    const relationship = document.getElementById("relationshipId").value;
    const game = document.getElementById("gameId").value;
    editLog(review, rating, relationship, game);
  });
  followForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userId = document.getElementById("selectedUserId").value;
    followUser(userId);
  });
  unfollowForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const followingId = document.getElementById("followingId").value;
    unfollowUser(followingId);
  });
  var profileDropdown = document.getElementById("profile-dropdown");
  var profileBtn = document.getElementById("profile-dropdown-btn");
  profileBtn?.addEventListener("click", (e) => {
    console.log("clicked");
    profileDropdownFunction();
  });
  var profileDropdownFunction = () => {
    profileDropdown.classList.toggle("show");
  };
  window.onclick = function(event) {
    if (!event.target.matches("#profile-dropdown-btn")) {
      if (profileDropdown.classList.contains("show")) {
        profileDropdown.classList.remove("show");
      }
    }
  };
})();
/*! Bundled license information:

leaflet/dist/leaflet-src.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)
*/
