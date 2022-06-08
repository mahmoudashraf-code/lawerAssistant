(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clients-new-client-new-client-module"],{

/***/ "./src/app/pages/clients/new-client/new-client.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/clients/new-client/new-client.component.ts ***!
  \******************************************************************/
/*! exports provided: NewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientComponent", function() { return NewClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



class NewClientComponent {
    constructor(app) {
        this.app = app;
        app.setLogin();
    }
    insertNewPeople(data) {
        if (data.name == "") {
            this.app.alert.push({
                header: "إضافة عميل",
                error: true,
                body: "اسم العميل مطلوب."
            });
            return;
        }
        this.app.http.post(`api/clients/${this.app.user.id}`, data).subscribe(res => {
            this.app.alert.push({
                header: "إضافة عميل",
                error: false,
                body: "تم الاضافة بنجاح."
            });
        }, err => {
            this.app.alert.push({
                header: "إضافة عميل",
                error: true,
                body: "حدث خطا فى السيرفر اثناء الاضافة."
            });
        });
    }
}
NewClientComponent.ɵfac = function NewClientComponent_Factory(t) { return new (t || NewClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
NewClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewClientComponent, selectors: [["app-new-client"]], decls: 24, vars: 0, consts: [["id", "BodyClient"], [1, "item"], ["for", "projectName"], ["type", "text", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644"], ["clientName", ""], ["for", "projectPath"], ["type", "text", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646"], ["phone", ""], ["type", "text", "placeholder", "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0643\u0644"], ["address", ""], [1, "buttons"], [3, "click"]], template: function NewClientComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0636\u0627\u0641\u0629 \u0645\u0648\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewClientComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.insertNewPeople({ name: _r0.value.trim(), phone: _r1.value.trim(), address: _r2.value.trim(), lec: [], info: [], id: "" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0627\u0636\u0627\u0641\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#BodyClient[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n#BodyClient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  animation-name: loginAnimation;\n  animation-duration: 0.5s;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  background-color: white;\n  box-shadow: 0 0 3px black;\n  padding: 8px;\n  border-radius: 10px;\n  height: 70%;\n  width: 50%;\n}\n#BodyClient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n#BodyClient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  margin: 6px;\n}\n#BodyClient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: center;\n  background-color: #eeeeee;\n  padding: 3px;\n  border: 1px solid #cccccc;\n}\n#BodyClient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #BodyClient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 3px;\n  border: 1px solid #cccccc;\n  outline: none;\n}\n#BodyClient[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 77px;\n  padding: 2px;\n  float: left;\n  margin: 3px 0 0 0;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50cy9uZXctY2xpZW50L25ldy1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksOEJBQUE7RUFDQSx3QkFBQTtFQUlBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURSO0FBVFE7RUFDSSwwQkFBQTtBQVdaO0FBRFE7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBR1o7QUFGWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBSWhCO0FBRlk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBSWhCO0FBRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnRzL25ldy1jbGllbnQvbmV3LWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNCb2R5Q2xpZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dpbkFuaW1hdGlvbjtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dCxzZWxlY3R7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjOyAgICBcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDc3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDAgMCAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-client',
                templateUrl: './new-client.component.html',
                styleUrls: ['./new-client.component.scss']
            }]
    }], function () { return [{ type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/clients/new-client/new-client.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/clients/new-client/new-client.module.ts ***!
  \***************************************************************/
/*! exports provided: NewClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientModule", function() { return NewClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _new_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-client.component */ "./src/app/pages/clients/new-client/new-client.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class NewClientModule {
}
NewClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewClientModule });
NewClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewClientModule_Factory(t) { return new (t || NewClientModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: "",
                    component: _new_client_component__WEBPACK_IMPORTED_MODULE_2__["NewClientComponent"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewClientModule, { declarations: [_new_client_component__WEBPACK_IMPORTED_MODULE_2__["NewClientComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_new_client_component__WEBPACK_IMPORTED_MODULE_2__["NewClientComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: "",
                            component: _new_client_component__WEBPACK_IMPORTED_MODULE_2__["NewClientComponent"]
                        }
                    ])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-clients-new-client-new-client-module.js.map