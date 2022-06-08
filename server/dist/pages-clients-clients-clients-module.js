(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clients-clients-clients-module"],{

/***/ "./src/app/pages/clients/clients/clients.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/clients/clients/clients.component.ts ***!
  \************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/alert */ "./src/app/components/alert.ts");
/* harmony import */ var watch_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! watch-object */ "./node_modules/watch-object/dist/watch-object.js");
/* harmony import */ var watch_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(watch_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");








function ClientsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const x_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateData(i_r3, x_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const x_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteClient(i_r3, x_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644 : " + x_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646 : " + x_r2.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0643\u0644 : " + x_r2.address);
} }
function ClientsComponent_div_8_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r9.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r9.circle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r9.poistion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r9.salery);
} }
function ClientsComponent_div_8_tr_54_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_tr_54_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_tr_54_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const x_r10 = ctx.$implicit; return x_r10.info1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_tr_54_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_tr_54_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const x_r10 = ctx.$implicit; return x_r10.info2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_tr_54_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_tr_54_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const x_r10 = ctx.$implicit; return x_r10.info3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_tr_54_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_tr_54_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const x_r10 = ctx.$implicit; return x_r10.info4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_tr_54_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_tr_54_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const x_r10 = ctx.$implicit; return x_r10.info5 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_div_8_tr_54_Template__svg_svg_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.appData[ctx_r23.selectdata].info.splice(i_r11, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r10.info1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r10.info2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r10.info3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r10.info4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r10.info5);
} }
function ClientsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_div_8_Template__svg_svg_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ClientsComponent_div_8_Template__svg_svg_dblclick_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0627\u063A\u0644\u0627\u0642 \u0628\u062F\u0648\u0646 \u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_div_8_Template__svg_svg_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.print(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0637\u0628\u0627\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_Template_input_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.appData[ctx_r29.selectdata].name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.appData[ctx_r31.selectdata].phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClientsComponent_div_8_Template_input_change_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.saveVal = true; })("ngModelChange", function ClientsComponent_div_8_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.appData[ctx_r33.selectdata].address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0627\u0644\u062C\u0644\u0633\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0639\u0648\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0627\u0626\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0627\u0644\u0627\u062A\u0639\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ClientsComponent_div_8_tr_39_Template, 9, 4, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0627\u0644\u062A\u0648\u0643\u064A\u0644\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0648\u0643\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0633\u0646\u0629 \u0627\u0644\u062A\u0648\u0643\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u062D\u0631\u0641 \u0627\u0644\u062A\u0648\u0643\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0645\u0643\u062A\u0628 \u0627\u0644\u062A\u0648\u062B\u064A\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0631\u0642\u0645 \u062D\u0641\u0638 \u0627\u0644\u062A\u0648\u0643\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ClientsComponent_div_8_tr_54_Template, 15, 5, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_div_8_Template_td_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.appData[ctx_r34.selectdata].info.push({ info1: "\u0627\u062E\u062A\u0628\u0627\u0631", info2: "\u0627\u062E\u062A\u0628\u0627\u0631", info3: "\u0627\u062E\u062A\u0628\u0627\u0631", info4: "\u0627\u062E\u062A\u0628\u0627\u0631", info5: "\u0627\u062E\u062A\u0628\u0627\u0631" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "+ \u0627\u0636\u0627\u0641\u0629 \u062A\u0648\u0643\u064A\u0644 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.appData[ctx_r1.selectdata].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.appData[ctx_r1.selectdata].phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.appData[ctx_r1.selectdata].address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.appData[ctx_r1.selectdata].lec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.appData[ctx_r1.selectdata].info);
} }
const _c0 = function (a0) { return { "insertData": a0 }; };
class ClientsComponent {
    constructor(app) {
        this.app = app;
        this.saveVal = false;
        this.selectFrist = false;
        this.selectdata = -1;
        if (app.setLogin()) {
            this.getClientsData();
            Object(watch_object__WEBPACK_IMPORTED_MODULE_2__["watch"])(app.user, 'id', () => {
                if (this.selectFrist == true)
                    this.selectFrist = false;
                this.getClientsData();
            });
        }
    }
    getIdex(index, data) {
        data = JSON.stringify(data);
        if (JSON.stringify(this.appData[index]) == data)
            return index;
        for (let i = 0; i < this.appData.length; i++) {
            if (JSON.stringify(this.appData[i]) == data) {
                return i;
            }
        }
    }
    updateData(i, data) {
        i = this.getIdex(i, data);
        if (this.selectFrist == false) {
            this.selectFrist = true;
            this.selectdata = i;
        }
        else {
            if (i == this.selectdata)
                return;
            if (this.saveVal == false) {
                this.selectdata = i;
                return;
            }
            let x = new src_app_components_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]({
                title: "معلومات هامة",
                body: "حدث تغير فى البيانات هل تريد الحفظ.",
                type: "info",
                button: [
                    {
                        text: "نعم",
                        fun: () => {
                            this.save();
                            this.selectdata = i;
                            x.close();
                        }
                    },
                    {
                        text: "لا",
                        fun: () => {
                            this.getClientsData();
                            this.selectdata = i;
                            x.close();
                        }
                    },
                    {
                        text: "الغاء",
                        fun: () => {
                            x.close();
                        }
                    }
                ],
                dir: "rtl",
                width: "270px",
                height: "130px"
            });
        }
    }
    cancel() {
        this.selectFrist = false;
        this.getClientsData();
    }
    deleteClient(i, data) {
        let x = new src_app_components_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]({
            title: "معلومات هامة",
            body: "هل تريد حذف العميل.",
            type: "warning",
            button: [
                {
                    text: "نعم",
                    fun: () => {
                        i = this.getIdex(i, data);
                        this.app.http.delete(`api/clients/${this.app.user.id}/${this.appData[i].id}`).subscribe(res => {
                            if (i == this.selectdata)
                                this.selectFrist = false;
                            this.appData.splice(i, 1);
                            this.app.alert.push({
                                header: "العملاء",
                                error: false,
                                body: "تم الحذف بنجاح"
                            });
                            x.close();
                        }, err => {
                            this.app.alert.push({
                                header: "العملاء",
                                error: true,
                                body: "حدث خطا فى السيرفر اثناء الاضافة."
                            });
                            x.close();
                        });
                    }
                },
                {
                    text: "لا",
                    fun: () => {
                        x.close();
                    }
                }
            ],
            dir: "rtl",
            width: "270px",
            height: "130px"
        });
    }
    save() {
        this.app.http.put(`api/clients/${this.app.user.id}/${this.appData[this.selectdata].id}`, this.appData[this.selectdata]).subscribe(res => {
            this.app.alert.push({
                header: "العملاء",
                error: false,
                body: "تم الحفظ بنجاح"
            });
            this.saveVal = false;
        }, err => {
            this.app.alert.push({
                header: "العملاء",
                error: true,
                body: "حدث خطا فى السيرفر اثناء الاضافة."
            });
        });
    }
    getClientsData() {
        this.app.http.get(`api/clients/${this.app.user.id}`).subscribe(res => {
            this.appData = res;
        }, err => {
            this.app.alert.push({
                header: "العملاء",
                error: true,
                body: "حدث خطا فى السيرفر اثناء الاضافة."
            });
        });
    }
    print() {
        window.print();
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], decls: 9, vars: 9, consts: [["id", "bodyClient", 3, "ngClass"], ["id", "cards"], ["viewBox", "0 0 512 512"], ["d", "M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"], ["type", "search", "placeholder", "\u0627\u0628\u062D\u062B \u0647\u0646\u0627", 3, "ngModel", "ngModelChange"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "item", 4, "ngIf"], [1, "card"], ["id", "cardOption"], ["title", "\u0639\u0631\u0636", 3, "click"], ["viewBox", "0 0 96 96", "overflow", "hidden"], ["d", "M72.5 63.1C70.9 61.5 68.5 60.7 66.3 61.2L61.8 56.8C65.8 51.6 68 45.2 68 38.6 68.1 21.9 54.6 8.4 38 8.3 21.4 8.2 7.9 21.7 7.8 38.3 7.7 54.9 21.2 68.4 37.8 68.5 44.4 68.5 50.9 66.3 56.2 62.3L60.6 66.7C60.2 69 60.9 71.3 62.5 73L75 85.5C77.7 88.2 82.2 88.2 84.9 85.5 87.6 82.8 87.6 78.3 84.9 75.6L72.5 63.1ZM38 62.5C24.7 62.5 14 51.8 14 38.5 14 25.2 24.7 14.5 38 14.5 51.3 14.5 62 25.2 62 38.5 62 51.7 51.2 62.5 38 62.5Z"], ["d", "M59.5 37 53.8 37C53.3 37.1 52.8 37.4 52.5 37.8L48.7 41.9 45.5 30.8C45.2 29.9 44.2 29.3 43.3 29.6 42.8 29.8 42.3 30.1 42.1 30.7L36.1 46.6 32 24.6C31.8 23.6 30.9 23 30 23.2 29.4 23.3 28.9 23.8 28.6 24.4L24.3 37 16.5 37 16.5 41 25.6 41C26.4 40.9 27.1 40.3 27.3 39.5L29.8 31.9 33.8 53.4C33.9 54.2 34.6 54.8 35.4 54.8L35.6 54.8C36.3 54.8 37 54.4 37.3 53.7L43.7 36.9 46.3 45.9C46.6 46.8 47.5 47.4 48.5 47.1 48.8 47 49.1 46.8 49.3 46.6L54.7 41 59.6 41 59.6 37Z"], ["title", "\u062E\u0630\u0641", 3, "click"], ["d", "M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z", 1, "ionicon-fill-none"], ["d", "M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z"], ["id", "item"], ["viewBox", "0 0 512 512", 3, "click"], ["d", "M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"], ["cx", "256", "cy", "352", "r", "48"], ["viewBox", "0 0 512 512", 3, "dblclick"], ["d", "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"], ["d", "M408 112H106a58 58 0 00-58 58v158a56 56 0 0056 56h8v39.68A40.32 40.32 0 00152.32 464h207.36A40.32 40.32 0 00400 423.68V384h8a56 56 0 0056-56V168a56 56 0 00-56-56zm-40 311.68a8.35 8.35 0 01-8.32 8.32H152.32a8.35 8.35 0 01-8.32-8.32V264.32a8.35 8.35 0 018.32-8.32h207.36a8.35 8.35 0 018.32 8.32zm26-215.76a24 24 0 1122-22 24 24 0 01-22 22zM344 48H168a56.09 56.09 0 00-55.42 48h286.84A56.09 56.09 0 00344 48z"], ["id", "clientData"], [1, "item"], ["for", "projectName"], ["type", "text", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644", 3, "ngModel", "change", "ngModelChange"], ["for", "projectPath"], ["type", "text", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "placeholder", "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0643\u0644", 3, "ngModel", "change", "ngModelChange"], ["border", "1"], [4, "ngFor", "ngForOf"], ["id", "addNew"], ["colspan", "6", 3, "click"], ["type", "text", 3, "ngModel", "change", "ngModelChange"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientsComponent_div_6_Template, 16, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientsComponent_div_8_Template, 58, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.selectFrist));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx.appData, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectFrist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]], styles: ["#bodyClient[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n  background-color: white;\n  animation-name: loginAnimation;\n  animation-duration: 0.5s;\n}\n@media screen {\n  #bodyClient.insertData[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    overflow: hidden;\n  }\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n@media print {\n  #bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2px black;\n  margin: 5px;\n  display: flex;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  bottom: auto;\n  margin: 5px;\n  box-shadow: 0 0 2px black;\n  border-radius: 6px 0;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: medium;\n  padding: 0;\n  margin: 5px;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #cardOption[_ngcontent-%COMP%] {\n  float: left;\n  border-radius: 10px 0 0 0;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #cardOption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #cardOption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], #bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #cardOption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 2px;\n  width: 25px;\n  height: 25px;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #cardOption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #9e9e9e82;\n}\n#bodyClient[_ngcontent-%COMP%]   #cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #cardOption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\n  background-color: #a51414;\n  fill: white;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n@media screen {\n  #bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%] {\n    box-shadow: 0 0 2px black;\n    margin: 5px;\n    padding: 0 4px;\n  }\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2px black;\n  margin: 5px 0;\n}\n@media print {\n  #bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  fill: #1966ae;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:nth-child(2):hover {\n  fill: #a51414;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin: 4px;\n  display: flex;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 3px;\n  width: 90px;\n  text-align: center;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  flex: 1;\n  outline: none;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 1px black;\n  margin: 5px 1px;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   #addNew[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   #addNew[_ngcontent-%COMP%]:hover {\n  background-color: #9e9e9e82;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n  border: none;\n}\n#bodyClient[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  fill: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQUNKO0FBQ1E7RUFESjtJQUVRLGFBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VBRVY7QUFDRjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBRFE7RUFGSjtJQUdRLGFBQUE7RUFJVjtBQUNGO0FBSFE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBS1o7QUFKWTtFQUNJLFdBQUE7QUFNaEI7QUFKWTtFQUNJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1oQjtBQUhRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBS1o7QUFKWTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFNaEI7QUFKWTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQU1oQjtBQUxnQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFPcEI7QUFOb0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFReEI7QUFOb0I7RUFDSSwyQkFBQTtBQVF4QjtBQU5vQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQVF4QjtBQUZJO0VBTUksY0FBQTtBQURSO0FBSlE7RUFESjtJQUVRLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFPVjtBQUNGO0FBTFE7RUFJSSx5QkFBQTtFQUNBLGFBQUE7QUFJWjtBQVJZO0VBREo7SUFFUSxhQUFBO0VBV2Q7QUFDRjtBQVJZO0VBQ0ksWUFBQTtBQVVoQjtBQVRnQjtFQUNJLGFBQUE7QUFXcEI7QUFUZ0I7RUFDSSxhQUFBO0FBV3BCO0FBUFE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQVNaO0FBUlk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVWhCO0FBUlk7RUFDSSxPQUFBO0VBQ0EsYUFBQTtBQVVoQjtBQVBRO0VBQ0ksV0FBQTtBQVNaO0FBUlk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUFVaEI7QUFSWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQVVoQjtBQVRnQjtFQUNJLDJCQUFBO0FBV3BCO0FBUlk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFVaEI7QUFSWTtFQUNJLFNBQUE7QUFVaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnRzL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5Q2xpZW50e1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dpbkFuaW1hdGlvbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgJi5pbnNlcnREYXRhe1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2NhcmRze1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIEBtZWRpYSBwcmludHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2e1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZHtcclxuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDA7XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2NhcmRPcHRpb257XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XHJcbiAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBzdmcsaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTgyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MTQxNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2l0ZW17XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbntcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBuYXZ7XHJcbiAgICAgICAgICAgIEBtZWRpYSBwcmludHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjMTk2NmFlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMik6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2E1MTQxNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J3RleHQnXXtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxle1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY2FwdGlvbntcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAxcHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2FkZE5ld3tcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTgyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN2Zzpob3ZlcntcclxuICAgICAgICAgICAgICAgIGZpbGw6IHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients',
                templateUrl: './clients.component.html',
                styleUrls: ['./clients.component.scss']
            }]
    }], function () { return [{ type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/clients/clients/clients.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/clients/clients/clients.module.ts ***!
  \*********************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.component */ "./src/app/pages/clients/clients/clients.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");








class ClientsModule {
}
ClientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientsModule });
ClientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientsModule_Factory(t) { return new (t || ClientsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"]
                },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsModule, { declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"]
                        },
                    ])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-clients-clients-clients-module.js.map