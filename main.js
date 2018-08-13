(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Khang vương';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./output/output.component */ "./src/app/output/output.component.ts");
/* harmony import */ var _block_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block/menu/menu.component */ "./src/app/block/menu/menu.component.ts");
/* harmony import */ var _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/listten/listten.component */ "./src/app/routes/listten/listten.component.ts");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/lienhe/lienhe.component.ts");
/* harmony import */ var _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./baiviet/baiviet.component */ "./src/app/baiviet/baiviet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _test1_test1_component__WEBPACK_IMPORTED_MODULE_6__["Test1Component"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"],
                _output_output_component__WEBPACK_IMPORTED_MODULE_8__["OutputComponent"],
                _block_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_10__["ListtenComponent"],
                _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_11__["LienheComponent"],
                _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_12__["BaivietComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/listten/listten.component */ "./src/app/routes/listten/listten.component.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/lienhe/lienhe.component.ts");
/* harmony import */ var _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baiviet/baiviet.component */ "./src/app/baiviet/baiviet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        component: _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_5__["BaivietComponent"],
                        path: 'bai-viet'
                    },
                    {
                        component: _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_4__["LienheComponent"],
                        path: 'lien-he'
                    },
                    {
                        component: _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_2__["ListtenComponent"],
                        path: 'list-ten/:ten'
                    },
                    {
                        component: _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_2__["ListtenComponent"],
                        path: 'list-ten'
                    },
                    {
                        component: _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"],
                        path: "**"
                    }
                ])
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/baiviet/baiviet.component.css":
/*!***********************************************!*\
  !*** ./src/app/baiviet/baiviet.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/baiviet/baiviet.component.html":
/*!************************************************!*\
  !*** ./src/app/baiviet/baiviet.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let row of baiviet.baiviethdt\" >\n  {{row.name}}\n</div>\n<div (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\">\n  <span [ngStyle]=\"{backgroundColor: hover==true  ? 'lightgrey' : 'grey' }\">hello {{ hover }}</span>\n  </div>\n  "

/***/ }),

/***/ "./src/app/baiviet/baiviet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/baiviet/baiviet.component.ts ***!
  \**********************************************/
/*! exports provided: BaivietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaivietComponent", function() { return BaivietComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaivietComponent = /** @class */ (function () {
    function BaivietComponent(baiviet) {
        this.baiviet = baiviet;
        this.name = "tets";
    }
    //baiviet_arr  = this.baiviet.getbaiviet();
    BaivietComponent.prototype.ngOnInit = function () {
        this.baiviet.getbaiviet();
    };
    BaivietComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-baiviet',
            template: __webpack_require__(/*! ./baiviet.component.html */ "./src/app/baiviet/baiviet.component.html"),
            styles: [__webpack_require__(/*! ./baiviet.component.css */ "./src/app/baiviet/baiviet.component.css")],
            providers: [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["Baiviet_service"]]
        }),
        __metadata("design:paramtypes", [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["Baiviet_service"]])
    ], BaivietComponent);
    return BaivietComponent;
}());



/***/ }),

/***/ "./src/app/block/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/app/block/menu/menu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu{background: red; }\r\n.menu li{float: left; list-style: none; margin: 0 2%; padding: 1% 0;}\r\n.menu li a{color: #fff}\r\n.menu ul{background: red;  width: 1024px; margin:0 auto; padding: 0}\r\n"

/***/ }),

/***/ "./src/app/block/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/app/block/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n\t<ul>\n\t\t<li><a routerLink=\".\" >Trang Chủ </a></li>\n\t\t<li>Gioi Thieu </li>\n\t\t<li><a routerLink='bai-viet'>Bài viết</a></li>\n\t\t<li><a routerLink='list-ten' >Team </a></li>\n\t\t<li><a routerLink='lien-he' > Liên Hệ </a> </li>\n\t\t<Div style=\"clear: both;\"></Div>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/block/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/block/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/block/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/block/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/input/input.component.html":
/*!********************************************!*\
  !*** ./src/app/input/input.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n <a routerLink=\"{{ho+'-'+ten}}\"> {{ho +\" \"+ ten}}</a>\n</p>\n"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "ten", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "ho", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/lienhe/lienhe.component.css":
/*!*********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lienhe/lienhe.component.html":
/*!**********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formlienhe)\" #formlienhe=\"ngForm\" >\n    <div><input name=\"hoten\" [(ngModel)]=\"hoten\"   #name=\"ngModel\"  placeholder=\"nhập họ và tên vào\" required >\n        <span *ngIf=\"name.errors && name.errors.required\">\n            (*)\n      </span></div>\n    <div><input name=\"tuoi\" type=\"number\" [(ngModel)]=\"tuoi\" placeholder=\"mời nhập tuổi\" ></div>\n    <div><input name=\"email\" #txtemail = \"ngModel\" [(ngModel)]=\"email\" placeholder=\"mời nhập email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required ><span *ngIf=\"txtemail.errors && txtemail.errors.required\" >\n        (*)\n   </span></div>\n    <!-- pattern => định dạng  1 chuoi nao đó (example : email ) -->\n  <div  *ngIf=\"txtemail.errors && txtemail.errors.pattern\">\n    Email khong chinh xac\n</div>\n    <div><input name=\"ngaythangnamsinh\" [(ngModel)]=\"ngaythangnamsinh\" type=\"date\" ></div>\n    <div><textarea rows=\"3\" placeholder=\"ghi chú \" name=\"ghichu\" [(ngModel)]=\"ghichu\"></textarea></div>\n    <div><button  [disabled]=\"!formlienhe.valid\">Gửi</button></div> \n    <!--  -->\n    <!--  -->\n</form>\n{{ name.errors | json }}\n{{ txtemail.errors | json }}"

/***/ }),

/***/ "./src/app/lienhe/lienhe.component.ts":
/*!********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.ts ***!
  \********************************************/
/*! exports provided: LienheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienheComponent", function() { return LienheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LienheComponent = /** @class */ (function () {
    function LienheComponent(baiviet_service) {
        this.baiviet_service = baiviet_service;
    }
    LienheComponent.prototype.onSubmit = function (formlienhe) {
        // console.log(formlienhe);
        this.baiviet_service.guimail(formlienhe.value)
            .then(function (res) { return formlienhe.reset(); })
            .catch(function (err) { return console.log(err); });
    };
    LienheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lienhe',
            template: __webpack_require__(/*! ./lienhe.component.html */ "./src/app/lienhe/lienhe.component.html"),
            styles: [__webpack_require__(/*! ./lienhe.component.css */ "./src/app/lienhe/lienhe.component.css")],
            providers: [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["Baiviet_service"]]
        }),
        __metadata("design:paramtypes", [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["Baiviet_service"]])
    ], LienheComponent);
    return LienheComponent;
}());



/***/ }),

/***/ "./src/app/model/listname.ts":
/*!***********************************!*\
  !*** ./src/app/model/listname.ts ***!
  \***********************************/
/*! exports provided: Listname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listname", function() { return Listname; });
var Listname = [
    { id: 1, name: "khang" },
    { id: 2, name: "luan" },
    { id: 3, name: "loan" },
    { id: 4, name: "linh" },
    { id: 5, name: "hang" },
    { id: 6, name: "liem" },
    { id: 7, name: "nha" },
    { id: 8, name: "phat" }
];


/***/ }),

/***/ "./src/app/output/output.component.css":
/*!*********************************************!*\
  !*** ./src/app/output/output.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/output/output.component.html":
/*!**********************************************!*\
  !*** ./src/app/output/output.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  output works!\n</p>\n"

/***/ }),

/***/ "./src/app/output/output.component.ts":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutputComponent = /** @class */ (function () {
    function OutputComponent() {
    }
    OutputComponent.prototype.ngOnInit = function () {
    };
    OutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-output',
            template: __webpack_require__(/*! ./output.component.html */ "./src/app/output/output.component.html"),
            styles: [__webpack_require__(/*! ./output.component.css */ "./src/app/output/output.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OutputComponent);
    return OutputComponent;
}());



/***/ }),

/***/ "./src/app/routes/listten/listten.component.css":
/*!******************************************************!*\
  !*** ./src/app/routes/listten/listten.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/listten/listten.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/listten/listten.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ng-container *ngFor=\"let item of arr_test\">\n \t \t<app-input [ten] = \"item.firstName\" [ho] = \"item.lastName\" ></app-input>\n </ng-container>\n {{ten}}"

/***/ }),

/***/ "./src/app/routes/listten/listten.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/listten/listten.component.ts ***!
  \*****************************************************/
/*! exports provided: ListtenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListtenComponent", function() { return ListtenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListtenComponent = /** @class */ (function () {
    function ListtenComponent(route) {
        this.route = route;
        this.arr_test = [];
        this.ten = this.route.snapshot.paramMap.get("ten");
    }
    ListtenComponent.prototype.ngOnInit = function () {
        // console.log(this.ten);
        if (this.ten == null) {
            this.get_kocoten();
        }
    };
    ListtenComponent.prototype.get_kocoten = function () {
        this.arr_test = [
            { "firstName": "John", "lastName": "Doe" },
            { "firstName": "Anna", "lastName": "Smith" },
            { "firstName": "Peter", "lastName": "Jones" }
        ];
    };
    ListtenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listten',
            template: __webpack_require__(/*! ./listten.component.html */ "./src/app/routes/listten/listten.component.html"),
            styles: [__webpack_require__(/*! ./listten.component.css */ "./src/app/routes/listten/listten.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListtenComponent);
    return ListtenComponent;
}());



/***/ }),

/***/ "./src/app/service/baiviet.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/baiviet.service.ts ***!
  \********************************************/
/*! exports provided: Baiviet_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Baiviet_service", function() { return Baiviet_service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Baiviet_service = /** @class */ (function () {
    function Baiviet_service(http) {
        this.http = http;
    }
    Baiviet_service.prototype.getbaiviet = function () {
        var _this = this;
        return this.http.get('http://localhost:8080/game2t_new/api.html?function=user')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { _this.baiviethdt = resJson; })
            .catch(function (err) { return console.log(err); });
    };
    Baiviet_service.prototype.guimail = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post, headers: headers });
        return this.http.post('http://localhost:8080/game2t_new/api.html?function=guimail', JSON.stringify(data), requestOptions)
            .toPromise()
            .then(function (res) { return res.text(); })
            .then(function (resJson) { return console.log(resJson); });
    };
    Baiviet_service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], Baiviet_service);
    return Baiviet_service;
}());



/***/ }),

/***/ "./src/app/test1/test1.component.css":
/*!*******************************************!*\
  !*** ./src/app/test1/test1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tieude{text-align: left; font-weight: bold; font-size: 150%; color: red}\r\n.Listname{ margin: 0; padding: 0; list-style: none }\r\n.Listname li{float: left; margin-top: 10px}\r\n.Listname li div{background: red; margin:2%; padding: 2%; color: #fff;}\r\n.Listname li div button{margin: 5% 0}\r\n.Listname li div span{ text-transform: uppercase;}\r\n.Listname:after{content: ''; display: block; clear: both;}"

/***/ }),

/***/ "./src/app/test1/test1.component.html":
/*!********************************************!*\
  !*** ./src/app/test1/test1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p [hidden]=\"anhien\" >\n {{title2 | uppercase }}\n</p>\n<div class=\"tieude\">====================Event ngModel==========================</div>\n<div>Nội dung input : <b [style.color] = \"inputvalue.name.length % 2 ===0 ? 'red' : 'blue'\"> {{ inputvalue.name }} </b> // style binding</div>\n<div>Nội dung input 2 {{txtinputtest.value}} // Template reference variable #txtinputtest</div>\n\n<input [(ngModel)]=\"inputvalue.name\" placeholder=\"name\" #txtinputtest>\n\n<div class=\"tieude\">====================Event==========================</div>\n<img [hidden]=\"anhien\" src=\"https://dakhoa.phongkhamdakhoathaibinhduong.vn/img/logo.jpg\" >\n<input type=\"button\" (click)=\"anhienfunction()\" name=\"\" [value]=\"anhien===false ? 'Ẩn' : 'Hiện'\" />\n\n\n<div class=\"tieude\">====================Vòng lặp for ngFor==========================</div>\n<select [(ngModel)]=\"filter\">\n\t<option value=\"xemtatca\">Xem tất cả</option>\n\t<option *ngFor=\"let inputvalue of inpputvalue2\" value=\"{{inputvalue.name}}\">{{inputvalue.name}} </option>\n</select>\n<div *ngIf=\"editactive\" [hidden]=\"editfrom\">\n\t<input [(ngModel)]=\"editactive.name\"> \n\t<button (click)=\"save()\">ok</button>\n</div>\n<input [(ngModel)]=\"addten\" [hidden] = \"anfromaddten\" class=\"txtaddten\" > \n\n<button (click)=\"themten()\">{{textvaluethem}}</button>\n<ul class=\"Listname\">\n  <li *ngFor=\"let inputvalue of inpputvalue2\" >\n  \t<div *ngIf=\"filter=='xemtatca' || filter == inputvalue.name\">\n    <span  class=\"badge\">{{inputvalue.name}}</span> \n    <button (click)='xoaten(inputvalue.name)'>Xóa</button> <br>\n    <button (click)='editten(inputvalue)'>edit</button>\n</div>\n </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/test1/test1.component.ts":
/*!******************************************!*\
  !*** ./src/app/test1/test1.component.ts ***!
  \******************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_listname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/listname */ "./src/app/model/listname.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*declare var jquery:any;
declare var $ :any;*/
var Test1Component = /** @class */ (function () {
    function Test1Component() {
        this.title2 = "chào mừng tất cả";
        this.anhien = false;
        this.addten = '';
        this.anfromaddten = true;
        this.filter = "xemtatca";
        this.editactive = {
            id: 0,
            name: ""
        };
        this.editfrom = true;
        this.textvaluethem = 'Click để hiện from';
        this.inputvalue = {
            id: 0,
            name: ""
        };
        this.inpputvalue2 = _model_listname__WEBPACK_IMPORTED_MODULE_1__["Listname"];
    }
    Test1Component.prototype.anhienfunction = function () {
        this.anhien = !this.anhien;
    };
    Test1Component.prototype.themten = function () {
        if (this.textvaluethem == "update") {
            alert("ok");
        }
        else {
            if (this.anfromaddten == false) {
                if (this.addten == "") {
                    alert("Mời bạn nhập tên cần thêm");
                    return false;
                }
                this.inpputvalue2.push({
                    id: this.inpputvalue2.length + 1,
                    name: this.addten
                });
                this.textvaluethem = 'Click để hiện from';
                this.addten = '';
            }
            else {
                this.textvaluethem = 'Thêm Tên';
            }
            this.anfromaddten = !this.anfromaddten;
        }
    };
    Test1Component.prototype.xoaten = function (name) {
        var index = this.inpputvalue2.findIndex(function (e) { return e.name === name; });
        this.inpputvalue2.splice(index, 1);
    };
    Test1Component.prototype.editten = function (inputvalue) {
        this.editactive = inputvalue;
        this.editfrom = false;
    };
    Test1Component.prototype.save = function () {
        this.editfrom = true;
    };
    Test1Component.prototype.ngOnInit = function () {
    };
    Test1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! ./test1.component.html */ "./src/app/test1/test1.component.html"),
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\angualar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map