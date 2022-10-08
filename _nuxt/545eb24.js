(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19,10,15,16],{

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(663);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(29).default
var update = add("87be5900", content, true, {"sourceMap":false});

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HexText; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _domain_youkai_checkdigit_state_Password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48);











var HexText = /*#__PURE__*/function () {
  function HexText() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, HexText);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HexText, null, [{
    key: "parseHex",
    value: function parseHex(hexText) {
      var hexChars = hexText.replace(/\s+/g, "").match(/.{2}/g);
      if (!hexChars) return _domain_youkai_checkdigit_state_Password__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].empty();
      var charCodes = hexChars.map(function (hex) {
        return parseInt(hex, 16);
      });
      if (charCodes.includes(NaN)) return _domain_youkai_checkdigit_state_Password__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].empty();
      var password = new _domain_youkai_checkdigit_state_Password__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](charCodes);
      return password.isInvalid() ? _domain_youkai_checkdigit_state_Password__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].empty() : password;
    }
  }, {
    key: "validationPasswordHex",
    value: function validationPasswordHex(event) {
      var inputChar = event.key.toUpperCase();
      var charOk = event.code === 'Space' || HexText.HEX_CHARS.indexOf(inputChar) > 0;
      var input = event.currentTarget;
      var nowValue = input.value;
      var hex = nowValue.replace(/\s+/g, "");
      var lengthOk = hex.length < _domain_youkai_checkdigit_state_Password__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].MAX_CHARS_LENGTH * 2;
      return charOk && lengthOk;
    }
  }, {
    key: "fixPasswordHexWhenInvalid",
    value: function fixPasswordHexWhenInvalid(hex) {
      if (!hex) return ""; // ×ボタンで、なぜかNullになるため。

      return hex.trim().toUpperCase().replace(/\s+/g, " ");
    }
  }]);

  return HexText;
}();


HexText.HEX_CHARS = " 0123456789ABCDEF";

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(217);


/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('layout'));

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/googleadsense/AdSideways.vue?vue&type=template&id=54c63309&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('adsbygoogle',{attrs:{"ad-slot":3106460433,"ad-style":{ display: 'block' },"ad-format":'auto',"full-width-responsive":true}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/googleadsense/AdSideways.vue?vue&type=template&id=54c63309&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74);

// CONCATENATED MODULE: ./src/components/googleadsense/AdSideways.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AdSideways = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChallengeParameter_vue_vue_type_style_index_0_id_60f2b010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(653);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChallengeParameter_vue_vue_type_style_index_0_id_60f2b010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChallengeParameter_vue_vue_type_style_index_0_id_60f2b010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(28);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".input-yokai-password[data-v-60f2b010]{ime-mode:disabled}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/passwordchallenge/PasswordChallengeParameter.vue?vue&type=template&id=60f2b010&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"mx-auto",attrs:{"width":"1200"}},[_c('v-card-title',{staticClass:"headline"},[_vm._v("\n    パスワード総当りチャレンジ\n  ")]),_vm._v(" "),_c('v-card-text',[_vm._v("\n    指定した範囲を文字を変えながら総当りを行います。"),_c('br'),_vm._v("\n    「F5押す」など「ページの再読み込み」を行うと停止・結果がクリアされます。\n  ")]),_vm._v(" "),_c('v-card-text',{staticClass:"amber--text"},[_vm._v("\n    下のボタンをクリックすると、あなたのコンピュータの以下資源を利用します。\n    "),_c('ul',[_c('li',[_vm._v("CPUの計算能力")]),_vm._v(" "),_c('li',[_vm._v("LocalStrage(ブラウザに紐付いた記憶領域・ハードディスクやSSDなど)")])]),_vm._v(" "),_c('a',{attrs:{"href":"https://ja.wikipedia.org/wiki/Coinhive%E4%BA%8B%E4%BB%B6","target":"_blank"}},[_vm._v("神奈川県警に捕まりたくない")]),_vm._v(" ので「勝手に使うな！」という方はご遠慮下さい。"),_c('br'),_vm._v("自己責任でのボタンクリックをお願いします。\n  ")]),_vm._v(" "),_c('v-form',{ref:"passwordInputForm"},[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","sm":"5","md":"5"}},[_c('v-text-field',{staticClass:"input-yokai-password",attrs:{"counter":14,"rules":[_vm.validatePassword],"label":"開始パスワード","required":"","maxlength":"14","disabled":_vm.nowExecuting},on:{"keypress":_vm.onKeyPlessOfPassword},model:{value:(_vm.fromPassword),callback:function ($$v) {_vm.fromPassword=$$v},expression:"fromPassword"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","sm":"7","md":"7"}},[_c('v-text-field',{attrs:{"value":"a","label":"コード(16進数)表現","disabled":_vm.nowExecuting,"outlined":"","maxlength":"41"},on:{"keypress":_vm.onKeyPlessOfPasswordHex,"change":_vm.onChangeOfFromPasswordHex},model:{value:(_vm.fromPasswordHex),callback:function ($$v) {_vm.fromPasswordHex=$$v},expression:"fromPasswordHex"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12","sm":"12","md":"12"}},[_c('v-card-actions',[_c('v-btn',{staticClass:"mr-4",attrs:{"text":"","color":"secondary","outlined":"","disabled":_vm.nowExecuting},on:{"click":_vm.onRundomPasswordSet}},[_vm._v("\n                開始にランダム値をセット\n            ")]),_vm._v(" "),_c('v-spacer'),_vm._v("\n            ↓\n            "),(_vm.nowExecuting)?_c('v-progress-circular',{attrs:{"indeterminate":"","color":"green"}}):_vm._e(),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(!_vm.nowExecuting)?_c('v-btn',{staticClass:"mr-4",attrs:{"text":"","color":"primary","outlined":"","disabled":!_vm.allValid},on:{"click":_vm.onClickStart}},[_vm._v("\n                総当りチャレンジ開始\n            ")]):_vm._e(),_vm._v(" "),(_vm.nowExecuting)?_c('v-btn',{staticClass:"mr-4",attrs:{"text":"","color":"deep-orange","outlined":""},on:{"click":_vm.onClickStop}},[_vm._v("\n                総当りチャレンジ停止\n            ")]):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12","sm":"5","md":"5"}},[_c('v-text-field',{staticClass:"input-yokai-password",attrs:{"counter":14,"rules":[_vm.validatePassword],"label":"終了パスワード","required":"","maxlength":"14","disabled":_vm.nowExecuting},on:{"keypress":_vm.onKeyPlessOfPassword},model:{value:(_vm.toPassword),callback:function ($$v) {_vm.toPassword=$$v},expression:"toPassword"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","sm":"7","md":"7"}},[_c('v-text-field',{attrs:{"value":"a","label":"コード(16進数)表現","disabled":_vm.nowExecuting,"outlined":"","maxlength":"41"},on:{"keypress":_vm.onKeyPlessOfPasswordHex,"change":_vm.onChangeOfToPasswordHex},model:{value:(_vm.toPasswordHex),callback:function ($$v) {_vm.toPasswordHex=$$v},expression:"toPasswordHex"}})],1)],1)],1)],1),_vm._v(" "),_c('v-snackbar',{attrs:{"outlined":"","multi-line":"","color":"red"},scopedSlots:_vm._u([{key:"action",fn:function(ref){
var attrs = ref.attrs;
return [_c('v-btn',_vm._b({attrs:{"color":"blue","text":""},on:{"click":function($event){_vm.invalidate = false}}},'v-btn',attrs,false),[_vm._v("\n        Close\n      ")])]}}]),model:{value:(_vm.invalidate),callback:function ($$v) {_vm.invalidate=$$v},expression:"invalidate"}},[_vm._v("\n    "+_vm._s(_vm.invalidateMessage)+"\n    ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/passwordchallenge/PasswordChallengeParameter.vue?vue&type=template&id=60f2b010&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(134);

// EXTERNAL MODULE: ./src/components/passwordchallenge/HexText.ts
var HexText = __webpack_require__(659);

// EXTERNAL MODULE: ./src/domain/youkai/checkdigit/state/Password.ts
var Password = __webpack_require__(48);

// EXTERNAL MODULE: ./src/domain/youkai/attack/AttackPasswordRange.ts
var AttackPasswordRange = __webpack_require__(219);

// EXTERNAL MODULE: ./src/store/index.ts + 1 modules
var store = __webpack_require__(173);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/passwordchallenge/PasswordChallengeParameter.vue?vue&type=script&lang=ts&








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(RangePasswordChallenge, _Vue);

  var _super = _createSuper(RangePasswordChallenge);

  function RangePasswordChallenge() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, RangePasswordChallenge);

    _this = _super.apply(this, arguments);
    _this.fromPasswordHex = ' ';
    _this.toPasswordHex = ' ';
    _this.invalidate = false;
    _this.invalidateMessage = "";
    return _this;
  }

  Object(createClass["a" /* default */])(RangePasswordChallenge, [{
    key: "fromPassword",
    get: function get() {
      return store["PasswordAttackStatusStore"].nowFromPassword;
    },
    set: function set(value) {
      store["PasswordAttackStatusStore"].onSetFromPassword(value);
    }
  }, {
    key: "toPassword",
    get: function get() {
      return store["PasswordAttackStatusStore"].nowToPassword;
    },
    set: function set(value) {
      store["PasswordAttackStatusStore"].onSetToPassword(value);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.onChangeFromPassword();
      this.onChangeToPassword();
    }
  }, {
    key: "onChangeFromPassword",
    value: function onChangeFromPassword() {
      this.fromPassword = this.fixPasswordWhenInvalid(this.fromPassword);
      this.fromPasswordHex = this.toHex(this.fromPassword);
    }
  }, {
    key: "onChangeToPassword",
    value: function onChangeToPassword() {
      this.toPassword = this.fixPasswordWhenInvalid(this.toPassword);
      this.toPasswordHex = this.toHex(this.toPassword);
    }
  }, {
    key: "onChangeFromPasswordHex",
    value: function onChangeFromPasswordHex() {
      this.fromPasswordHex = HexText["default"].fixPasswordHexWhenInvalid(this.fromPasswordHex);
    }
  }, {
    key: "onChangeToPasswordHex",
    value: function onChangeToPasswordHex() {
      this.toPasswordHex = HexText["default"].fixPasswordHexWhenInvalid(this.toPasswordHex);
    }
  }, {
    key: "fixPasswordWhenInvalid",
    value: function fixPasswordWhenInvalid(password) {
      var _a, _b;

      if (!password) return ""; // ×ボタンで、なぜかNullになるため。

      if (!((_a = this.converter) === null || _a === void 0 ? void 0 : _a.isInvalidPassword(password))) return password;
      return (_b = this.converter) === null || _b === void 0 ? void 0 : _b.fixValidPassword(password);
    }
  }, {
    key: "toHex",
    value: function toHex(password) {
      return Password["a" /* default */].withText(password).dumpHexText();
    }
  }, {
    key: "validatePassword",
    value: function validatePassword(value) {
      var _a, _b;

      var password = value;
      if (!password) password = ""; // ×ボタンで、なぜかNullになるため。

      var max = Password["a" /* default */].MAX_CHARS_LENGTH;
      if (password.length !== max) return "".concat(max, "\u6587\u5B57\u3067\u5165\u529B\u3057\u3066\u4E0B\u3055\u3044\u3002");
      if ((_a = this.converter) === null || _a === void 0 ? void 0 : _a.isInvalidPassword(password)) return "\"".concat((_b = this.converter) === null || _b === void 0 ? void 0 : _b.validCharacters(), "\" \u306E\u6587\u5B57\u306E\u7BC4\u56F2\u3067\u5165\u529B\u3057\u3066\u4E0B\u3055\u3044\u3002");
      return true;
    }
  }, {
    key: "onKeyPlessOfPassword",
    value: function onKeyPlessOfPassword(event) {
      var _a, _b;

      var keyName = event.code;
      if (keyName === 'Backspace' || keyName === 'Delete') return true;
      var valid = !((_a = this.converter) === null || _a === void 0 ? void 0 : _a.isInvalidChar(event.key));
      if (valid) return true;
      var upperKey = event.key.toUpperCase();
      var nextValid = !((_b = this.converter) === null || _b === void 0 ? void 0 : _b.isInvalidChar(upperKey));
      if (nextValid) return true;
      event.stopImmediatePropagation();
      event.preventDefault();
      return false;
    }
  }, {
    key: "onKeyPlessOfPasswordHex",
    value: function onKeyPlessOfPasswordHex(event) {
      var keyName = event.code;
      if (keyName === 'Backspace' || keyName === 'Delete') return true;
      if (HexText["default"].validationPasswordHex(event)) return true;
      event.stopImmediatePropagation();
      event.preventDefault();
      return false;
    }
  }, {
    key: "onChangeOfFromPasswordHex",
    value: function onChangeOfFromPasswordHex() {
      var parsed = HexText["default"].parseHex(this.fromPasswordHex);
      this.fromPassword = parsed.toString();
      return true;
    }
  }, {
    key: "onChangeOfToPasswordHex",
    value: function onChangeOfToPasswordHex() {
      var parsed = HexText["default"].parseHex(this.toPasswordHex);
      this.toPassword = parsed.toString();
      return true;
    }
  }, {
    key: "onRundomPasswordSet",
    value: function onRundomPasswordSet() {
      var random = Password["a" /* default */].generateRandom(Password["a" /* default */].MAX_CHARS_LENGTH);
      this.fromPassword = random.toString();
    }
  }, {
    key: "onClickStart",
    value: function onClickStart() {
      var _a;

      this.trackClickEvent("RangePasswordChallenge", "onClickStart");

      if (!this.validateFromTo()) {
        this.showInvalidateMessage("終了パスワードには開始パスワードより大きな値を入力して下さい。");
        return;
      }

      var range = AttackPasswordRange["a" /* default */].of(this.fromPassword, this.toPassword);
      (_a = this.passwordAttackService) === null || _a === void 0 ? void 0 : _a.execute(range, store["PasswordAttackStatusStore"]);
    }
  }, {
    key: "validateFromTo",
    value: function validateFromTo() {
      var from = Password["a" /* default */].withText(this.fromPassword);
      var to = Password["a" /* default */].withText(this.toPassword);
      return to.moreThan(from); // to > from
    }
  }, {
    key: "showInvalidateMessage",
    value: function showInvalidateMessage(message) {
      this.invalidateMessage = message;
      this.invalidate = true;
    }
  }, {
    key: "onClickStop",
    value: function onClickStop() {
      var _a;

      (_a = this.passwordAttackService) === null || _a === void 0 ? void 0 : _a.cancel(store["PasswordAttackStatusStore"]);
    }
  }, {
    key: "nowExecuting",
    get: function get() {
      return store["PasswordAttackStatusStore"].nowExecuting;
    }
  }, {
    key: "allValid",
    get: function get() {
      // const form = this.$refs.passwordInputForm as any;
      // const validationResult = form.validate();
      // 本来なら上記の通りしたいのだが、動かないので自力でValidation。
      return this.validatePassword(this.fromPassword) === true && this.validatePassword(this.toPassword) === true;
    }
  }, {
    key: "trackClickEvent",
    value: function trackClickEvent(action, label) {
      this.$gtag('event', 'click', {
        'event_category': action,
        'event_label': label,
        'value': 1
      });
    }
  }]);

  return RangePasswordChallenge;
}(lib["Vue"]);

__decorate([Object(lib["Inject"])()], PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge.prototype, "converter", void 0);

__decorate([Object(lib["Inject"])()], PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge.prototype, "passwordAttackService", void 0);

__decorate([Object(lib["Watch"])('fromPassword')], PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge.prototype, "onChangeFromPassword", null);

__decorate([Object(lib["Watch"])('toPassword')], PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge.prototype, "onChangeToPassword", null);

__decorate([Object(lib["Watch"])('fromPasswordHex')], PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge.prototype, "onChangeFromPasswordHex", null);

__decorate([Object(lib["Watch"])('toPasswordHex')], PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge.prototype, "onChangeToPasswordHex", null);

PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge = __decorate([lib["Component"]], PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge);
/* harmony default export */ var PasswordChallengeParametervue_type_script_lang_ts_ = (PasswordChallengeParametervue_type_script_lang_ts_RangePasswordChallenge);
// CONCATENATED MODULE: ./src/components/passwordchallenge/PasswordChallengeParameter.vue?vue&type=script&lang=ts&
 /* harmony default export */ var passwordchallenge_PasswordChallengeParametervue_type_script_lang_ts_ = (PasswordChallengeParametervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/passwordchallenge/PasswordChallengeParameter.vue?vue&type=style&index=0&id=60f2b010&scoped=true&lang=css&
var PasswordChallengeParametervue_type_style_index_0_id_60f2b010_scoped_true_lang_css_ = __webpack_require__(662);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(104);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(448);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(682);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(650);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(745);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(644);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(721);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(746);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(670);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(647);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(680);

// CONCATENATED MODULE: ./src/components/passwordchallenge/PasswordChallengeParameter.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  passwordchallenge_PasswordChallengeParametervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "60f2b010",
  null
  
)

/* harmony default export */ var PasswordChallengeParameter = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */














installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */],VSnackbar: VSnackbar["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/passwordchallenge/PasswordChallenge.vue?vue&type=template&id=64bf92f3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',{attrs:{"justify":"center","align":"center"}},[_c('v-col',{attrs:{"cols":"12","sm":"6","md":"6"}},[_c('AdSideways'),_vm._v(" "),_c('PasswordChallengeParameter')],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","sm":"6","md":"6"}},[_c('PasswordChallengeProgress')],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/passwordchallenge/PasswordChallenge.vue?vue&type=template&id=64bf92f3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(134);

// EXTERNAL MODULE: ./src/components/passwordchallenge/PasswordChallengeParameter.vue + 4 modules
var PasswordChallengeParameter = __webpack_require__(669);

// EXTERNAL MODULE: ./src/components/passwordchallenge/PasswordChallengeProgress.vue + 4 modules
var PasswordChallengeProgress = __webpack_require__(703);

// EXTERNAL MODULE: ./src/components/googleadsense/AdSideways.vue + 2 modules
var AdSideways = __webpack_require__(661);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/passwordchallenge/PasswordChallenge.vue?vue&type=script&lang=ts&







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PasswordChallengevue_type_script_lang_ts_PasswordChallenge = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(PasswordChallenge, _Vue);

  var _super = _createSuper(PasswordChallenge);

  function PasswordChallenge() {
    Object(classCallCheck["a" /* default */])(this, PasswordChallenge);

    return _super.apply(this, arguments);
  }

  return PasswordChallenge;
}(lib["Vue"]);

PasswordChallengevue_type_script_lang_ts_PasswordChallenge = __decorate([Object(lib["Component"])({
  components: {
    PasswordChallengeParameter: PasswordChallengeParameter["default"],
    PasswordChallengeProgress: PasswordChallengeProgress["default"],
    AdSideways: AdSideways["default"]
  }
})], PasswordChallengevue_type_script_lang_ts_PasswordChallenge);
/* harmony default export */ var PasswordChallengevue_type_script_lang_ts_ = (PasswordChallengevue_type_script_lang_ts_PasswordChallenge);
// CONCATENATED MODULE: ./src/components/passwordchallenge/PasswordChallenge.vue?vue&type=script&lang=ts&
 /* harmony default export */ var passwordchallenge_PasswordChallengevue_type_script_lang_ts_ = (PasswordChallengevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(104);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(745);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(644);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(746);

// CONCATENATED MODULE: ./src/components/passwordchallenge/PasswordChallenge.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  passwordchallenge_PasswordChallengevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var passwordchallenge_PasswordChallenge = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/challenge.vue?vue&type=template&id=04162920&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('PasswordChallenge')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/challenge.vue?vue&type=template&id=04162920&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 14 modules
var lib = __webpack_require__(134);

// EXTERNAL MODULE: ./src/components/passwordchallenge/PasswordChallenge.vue + 4 modules
var PasswordChallenge = __webpack_require__(702);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/challenge.vue?vue&type=script&lang=ts&







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var challengevue_type_script_lang_ts_Challenge = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(Challenge, _Vue);

  var _super = _createSuper(Challenge);

  function Challenge() {
    Object(classCallCheck["a" /* default */])(this, Challenge);

    return _super.apply(this, arguments);
  }

  return Challenge;
}(lib["Vue"]);

challengevue_type_script_lang_ts_Challenge = __decorate([Object(lib["Component"])({
  components: {
    PasswordChallenge: PasswordChallenge["default"]
  }
})], challengevue_type_script_lang_ts_Challenge);
/* harmony default export */ var challengevue_type_script_lang_ts_ = (challengevue_type_script_lang_ts_Challenge);
// CONCATENATED MODULE: ./src/pages/challenge.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_challengevue_type_script_lang_ts_ = (challengevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(104);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(660);

// CONCATENATED MODULE: ./src/pages/challenge.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_challengevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var challenge = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VLayout: VLayout["a" /* default */]})


/***/ })

}]);