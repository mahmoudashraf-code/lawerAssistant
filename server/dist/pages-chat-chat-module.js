(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "./src/app/pages/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a1) { return { "iam": a0, "you": a1 }; };
function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, x_r2.user == "i", x_r2.user == "y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r2.data, " ");
} }
class ChatComponent {
    constructor(app) {
        this.app = app;
        this.dataChat = [];
        app.setLogin();
        //this.createConnection();
    }
    createConnection() {
        this.client = window.require('net').connect(3000, 'localhost', () => {
            this.client.write(JSON.stringify({
                type: "info",
                name: "mahmoud ashraf",
                id: 123544223325
            }));
        });
        this.client.on('end', () => {
            console.log('disconnected from server');
        });
        this.client.on('data', (data) => {
            data = JSON.parse(data);
            if (data.type == 'users') {
                console.log(data.data);
            }
            else {
                this.dataChat.push({
                    user: 'y',
                    name: "mahmoud ashraf",
                    idclient: "",
                    data: data.toString()
                });
            }
        });
        this.client.on('error', (err) => {
            if (this.client.connecting == false)
                console.log("server close");
            console.log(err);
        });
    }
    postData(data) {
        this.dataChat.push({
            type: "mess",
            user: 'i',
            name: "mahmoud ashraf",
            idclient: "",
            data: data
        });
        //this.client.write(data);
    }
    ngOnDestroy() {
        //this.client.end();
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 10, vars: 1, consts: [["id", "bodychat"], ["id", "main"], [2, "overflow", "auto"], ["class", "iam", 3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "chatInput"], ["type", "text"], ["inputData", ""], [3, "click"], ["id", "users"], [1, "iam", 3, "ngClass"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 5, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.postData(_r1.value.trim()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0631\u0633\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataChat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["#bodychat[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  background-color: white;\n  direction: ltr;\n  animation-name: loginAnimation;\n  animation-duration: 0.5s;\n}\n#bodychat[_ngcontent-%COMP%]   #users[_ngcontent-%COMP%] {\n  width: 192px;\n  margin: 3px;\n  box-shadow: 0 0 1px black;\n}\n#bodychat[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto 35px;\n  flex: 1;\n  background-color: #f7f6f6;\n}\n#bodychat[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   #chatInput[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2px black;\n  margin: 3px;\n  display: grid;\n  grid-template-columns: auto 44px;\n}\n#bodychat[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   #chatInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  direction: rtl;\n  padding: 2px;\n}\n#bodychat[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   .iam[_ngcontent-%COMP%], #bodychat[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   .you[_ngcontent-%COMP%] {\n  width: 60%;\n  box-shadow: 0 0 2px black;\n  margin: 5px;\n  padding: 3px;\n  direction: rtl;\n  border-radius: 2px;\n}\n#bodychat[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   .iam[_ngcontent-%COMP%] {\n  background-color: #1c97a7;\n  color: white;\n  float: right;\n}\n#bodychat[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]   .you[_ngcontent-%COMP%] {\n  background-color: #d4cdcd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBRVI7QUFEUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUdaO0FBRlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSWhCO0FBRFE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRFE7RUFFSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRVo7QUFBUTtFQUNJLHlCQUFBO0FBRVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9keWNoYXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dpbkFuaW1hdGlvbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgI3VzZXJze1xyXG4gICAgICAgIHdpZHRoOiAxOTJweDtcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgI21haW57XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMzVweDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y2ZjY7XHJcbiAgICAgICAgI2NoYXRJbnB1dHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA0NHB4O1xyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWFtLC55b3V7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pYW17XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5N2E3O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnlvdXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0Y2RjZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component */ "./src/app/pages/chat/chat.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: "",
                    component: _chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: "",
                            component: _chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
                        }
                    ])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module.js.map