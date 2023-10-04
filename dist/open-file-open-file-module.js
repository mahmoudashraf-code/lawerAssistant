(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open-file-open-file-module"],{

/***/ "c60O":
/*!***********************************************!*\
  !*** ./src/app/open-file/open-file.module.ts ***!
  \***********************************************/
/*! exports provided: OpenFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenFileModule", function() { return OpenFileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _open_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-file.component */ "gSud");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/share.module */ "ADsi");







class OpenFileModule {
}
OpenFileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OpenFileModule });
OpenFileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OpenFileModule_Factory(t) { return new (t || OpenFileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: "",
                    component: _open_file_component__WEBPACK_IMPORTED_MODULE_3__["OpenFileComponent"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OpenFileModule, { declarations: [_open_file_component__WEBPACK_IMPORTED_MODULE_3__["OpenFileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenFileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_open_file_component__WEBPACK_IMPORTED_MODULE_3__["OpenFileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: "",
                            component: _open_file_component__WEBPACK_IMPORTED_MODULE_3__["OpenFileComponent"]
                        }
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "gSud":
/*!**************************************************!*\
  !*** ./src/app/open-file/open-file.component.ts ***!
  \**************************************************/
/*! exports provided: OpenFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenFileComponent", function() { return OpenFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/editor/editor.component */ "W8fM");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OpenFileComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenFileComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r3.save(_r0.value.trim()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OpenFileComponent {
    constructor(app) {
        this.app = app;
        this.enable = false;
    }
    ngOnInit() {
        if (this.app.user == undefined) {
            this.app.dialogService.alert("خطا", "يجب ان تكون مسجل دخول", "", "نمام", "alert");
            return;
        }
        this.data = {};
        this.data.id = this.app.actRoute.snapshot.queryParams.id;
        this.data.userId = this.app.actRoute.snapshot.queryParams.userId;
        this.data.header = `@post.${this.data.id}.json`;
        if (this.app.user.id == this.data.userId) {
            this.enable = true;
        }
    }
    save(a) {
        this.app.wait();
        this.editor.editor.save().then((outputData) => {
            if (outputData.blocks.length == 0) {
                this.app.wait(false);
                this.app.log("بعض البيانات مفقودة");
                return;
            }
            this.app.http.put(`/api/posts/${this.data.userId}/${this.data.id}?name=${a}`, {
                content: outputData.blocks,
            }).subscribe(res => {
                this.app.wait(false);
                this.app.dialogService.alert("معلومة", "تم الحفظ بنجاح", "", "تمام");
            }, err => { });
        }).catch((error) => { });
    }
}
OpenFileComponent.ɵfac = function OpenFileComponent_Factory(t) { return new (t || OpenFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
OpenFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpenFileComponent, selectors: [["app-open-file"]], viewQuery: function OpenFileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    } }, decls: 10, vars: 4, consts: [[1, "h-100", "boduApp"], ["data-role", "appbar", 1, "app-bar", "bg-cyan", "z-1"], [1, "brand", "no-hover", "fg-white", "m-0", "mr-2"], [1, "grid", 2, "overflow", "auto"], ["dir", "ltr", "type", "text", "data-role", "input", "data-prepend", "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0634\u0648\u0631 : ", 1, "cell", 3, "value", "readonly"], ["header", "", "header", ""], [2, "overflow-x", "hidden", 3, "data"], ["class", "dialog-actions", 4, "ngIf"], [1, "dialog-actions"], [1, "button", "primary", "w-25", 3, "click"]], template: function OpenFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0645\u0633\u0627\u0639\u062F\u0643 \u0627\u0644\u0634\u062E\u0635\u0649");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-editor", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OpenFileComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.header)("readonly", !ctx.enable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enable);
    } }, directives: [_share_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".grid[_ngcontent-%COMP%] {\n  width: 800px;\n  margin: 5px auto;\n  box-shadow: 0 0 2px;\n  border-radius: 4px;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29wZW4tZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFDSiIsImZpbGUiOiJvcGVuLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-open-file',
                templateUrl: './open-file.component.html',
                styleUrls: ['./open-file.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, { editor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_share_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=open-file-open-file-module.js.map