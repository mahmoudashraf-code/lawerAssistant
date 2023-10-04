(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["files-files-module"],{

/***/ "UEel":
/*!***************************************!*\
  !*** ./src/app/files/files.module.ts ***!
  \***************************************/
/*! exports provided: FilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesModule", function() { return FilesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _files_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files.component */ "jL/9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _attr_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attr.directive */ "XKYW");







class FilesModule {
}
FilesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FilesModule });
FilesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FilesModule_Factory(t) { return new (t || FilesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: "",
                    component: _files_component__WEBPACK_IMPORTED_MODULE_2__["FilesComponent"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilesModule, { declarations: [_files_component__WEBPACK_IMPORTED_MODULE_2__["FilesComponent"], _attr_directive__WEBPACK_IMPORTED_MODULE_4__["AttrDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_files_component__WEBPACK_IMPORTED_MODULE_2__["FilesComponent"], _attr_directive__WEBPACK_IMPORTED_MODULE_4__["AttrDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: "",
                            component: _files_component__WEBPACK_IMPORTED_MODULE_2__["FilesComponent"]
                        }
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "XKYW":
/*!*****************************************!*\
  !*** ./src/app/files/attr.directive.ts ***!
  \*****************************************/
/*! exports provided: AttrDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrDirective", function() { return AttrDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AttrDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.childNodes[0].innerHTML = this.getIcon();
        this.el.nativeElement.childNodes[1].childNodes[0].innerHTML = this.appAttr.name;
        this.el.nativeElement.childNodes[1].childNodes[1].innerHTML = `<span class='text-muted'>${this.appAttr.content}</span>`;
    }
    getIcon() {
        return `<span class='${this.icon()}'>`;
    }
    icon() {
        if (this.appAttr.type == "folder")
            return `mif-folder ${this.color()}`;
        else
            return `mif-file-empty ${this.color()}`;
    }
    color() {
        return ["fg-cyan", "fg-indigo", "fg-teal", "fg-amber", "fg-lime", "fg-pink", "fg-orange"][Math.floor(Math.random() * 6)];
    }
}
AttrDirective.ɵfac = function AttrDirective_Factory(t) { return new (t || AttrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AttrDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AttrDirective, selectors: [["", "appAttr", ""]], inputs: { appAttr: "appAttr" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttrDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAttr]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jL/9":
/*!******************************************!*\
  !*** ./src/app/files/files.component.ts ***!
  \******************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _attr_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attr.directive */ "XKYW");





const _c0 = function (a0) { return { "active": a0 }; };
function FilesComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesComponent_li_7_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openDir(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.path.length - 1 == i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3);
} }
function FilesComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesComponent_li_20_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const x_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openpath(x_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appAttr", x_r7);
} }
class FilesComponent {
    constructor(app) {
        this.app = app;
        this.path = [];
        this.files = [];
        let a = this.app.actRoute.snapshot.queryParams.path;
        if (a == undefined) {
            this.app.user ? this.setup("/") : this.setup("common");
        }
        else {
            if (a == "/") {
                this.setup("common");
                return;
            }
            this.setup(a);
        }
    }
    setView(ele, a) {
        ele.className = "listview";
        ele.classList.add(a);
    }
    getFiles(a) {
        this.app.wait();
        this.app.http.get(`/api/files?path=${a}`).subscribe((res) => {
            this.files = res;
            this.app.wait(false);
        }, (err) => {
            this.app.wait(false);
            let er = "عفوا الملف غير موجود";
            if (err.status == 500) {
                er = "this is a bad requres";
            }
            this.app.dialogService.alert("خطا فى طلب الملف", er, "", "اغلاف", "alert").subscribe(res => {
                this.setup("common");
            });
        });
    }
    openDir(i) {
        this.path.splice(i + 1);
        this.getFiles(this.path.join("/"));
    }
    openpath(x) {
        this.app.dialogService.confirm("معلومات الملف", `<table class="table table-border m-0 cell-border">
          <tbody>
            <tr>
              <td style="width:5px;">الاسم</td>
              <td>${x.name}</td>
            </tr>
            <tr>
              <td>البيانات</td>
              <td>${x.content}</td>
            </tr>
            <tr>
              <td>النوع</td>
              <td>${x.type}</td>
            </tr>
            <tr>
              <td>العنوان</td>
              <td style="user-select:all;">${this.getUrl(x)}</td>
            </tr>
          <tbody>
        </table>`, "فتح الملف", "اغلاق", "wiAuto", "", "alert").subscribe(res => {
            if (res == false)
                return;
            if (x.type == "folder") {
                this.path.push(x.name);
                this.getFiles(this.path.join("/"));
            }
            else if (x.type == "post") {
                window.open(`/openFile?userId=${this.app.user.id}&id=${this.getId(x.name)}`);
            }
            else {
                window.open(`/files/${this.path.join("/")}/${x.name}`);
            }
        });
    }
    getUrl(x) {
        if (x.type == "folder") {
            return (`${location.origin}/files?path=${this.path.join("/")}/${x.name}`);
        }
        else if (x.type == "post") {
            return (`${location.origin}/openFile?userId=${this.app.user.id}&id=${this.getId(x.name)}`);
        }
        else {
            return (`${location.origin}/files/${this.path.join("/")}/${x.name}`);
        }
    }
    setup(a) {
        this.path = [a];
        this.getFiles(this.path.join("/"));
    }
    getId(id) {
        return id.slice(6, id.lastIndexOf(".json"));
    }
}
FilesComponent.ɵfac = function FilesComponent_Factory(t) { return new (t || FilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
FilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilesComponent, selectors: [["app-files"]], decls: 21, vars: 2, consts: [[1, "h-100", "boduApp"], ["data-role", "appbar", 1, "app-bar", "bg-cyan", "z-1"], [1, "brand", "no-hover", "fg-white", "m-0", "mr-2"], [1, "h-100", "p-2", 2, "overflow", "auto"], ["id", "toolbar", 1, "my-1", "p-2"], [1, "m-0"], [3, "click", 4, "ngFor", "ngForOf"], ["data-role", "buttongroup", 1, "toolbar"], [1, "tool-button", "rounded", "active", 3, "click"], [1, "mif-list"], [1, "tool-button", "rounded", 3, "click"], [1, "mif-folder"], [1, "mif-medium"], [1, "icon", 2, "font-weight", "bold"], [1, "listview", "view-content"], ["view", ""], ["class", "node", 3, "appAttr", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngClass"], [1, "mif-chevron-thin-left"], [1, "node", 3, "appAttr", "click"], [1, "icon"], [1, "data"], [1, "caption"], [1, "content"]], template: function FilesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0645\u0633\u0627\u0639\u062F\u0643 \u0627\u0644\u0634\u062E\u0635\u0649");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FilesComponent_li_7_Template, 4, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.setView(_r1, "view-content"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.setView(_r1, "view-tiles"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.setView(_r1, "view-icons-medium"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilesComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.setView(_r1, "view-icons-large"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FilesComponent_li_20_Template, 5, 1, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _attr_directive__WEBPACK_IMPORTED_MODULE_3__["AttrDirective"]], styles: ["#toolbar[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px;\n  border-radius: 4px;\n}\n#toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n#toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n}\n#toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 1px 4px;\n}\n#toolbar[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#toolbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n#toolbar[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 3px;\n  margin: 0;\n  padding: 0;\n  top: 4px;\n}\n#toolbar[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]::before {\n  content: none;\n}\n.caption[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZpbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFEUTtFQUNJLGFBQUE7QUFHWjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ1E7RUFDSSxpQkFBQTtBQUNaO0FBQ1E7RUFDSSwwQkFBQTtBQUNaO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtBQUNaO0FBR0E7RUFDSSxjQUFBO0FBQUoiLCJmaWxlIjoiZmlsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9vbGJhciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbjogMXB4IDRweDtcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50b29sYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jYXB0aW9uIHtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-files',
                templateUrl: './files.component.html',
                styleUrls: ['./files.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=files-files-module.js.map