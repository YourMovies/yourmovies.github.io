webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.open = false;
    }
    AboutComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
            template: __webpack_require__("../../../../../src/app/about/about.component.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n    <app-footer [hidden]=\"isHiddenFooter\"></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  position: relative;\n  min-height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.isHiddenFooter = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.isHiddenFooter = (_this.router.url === '/login');
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var angular_1 = __webpack_require__("../../../../@clr/angular/esm5/clr-angular.js");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
var carousel_1 = __webpack_require__("../../../../@ngu/carousel/index.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/common/footer/footer.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                login_component_1.LoginComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_1.ClarityModule,
                carousel_1.NguCarouselModule,
                app_routing_1.ROUTING
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);


/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-6 info\">\r\n                <h3>Your Movie Resources</h3>\r\n                <ul>\r\n                    <li><a>Your Movie Service Center</a></li>\r\n                    <li><a>Your Movie Toolbar</a></li>\r\n                    <li><a>Movie Collection</a></li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6 col-md-6 info\">\r\n                <h3>Checkpoint Resources</h3>\r\n                <ul>\r\n                    <li><a>Introducing Checkpoint</a></li>\r\n                    <li><a>Movie Collection</a></li>\r\n                    <li><a>Checkpoint Tracker</a></li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #b2b2b2;\n  padding-top: 20px;\n  width: 100%;\n  height: 200px; }\n\nul {\n  list-style-type: none;\n  padding: 0; }\n\n.info {\n  text-align: center; }\n\n@media only screen and (max-width: 544px) {\n  .footer {\n    background-color: #bfbfbf;\n    padding-top: 20px;\n    width: 100%;\n    height: 300px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "../../../../../src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-header\"></div>\r\n\r\n<clr-main-container>\r\n    <clr-header class=\"header-6\">\r\n        <div class=\"branding\">\r\n            <a href=\"...\" class=\"nav-link\">\r\n                <clr-icon shape=\"vm-bug\"></clr-icon>\r\n                <span class=\"title\">Project Clarity</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"header-nav\" [clr-nav-level]=\"1\">\r\n            <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span class=\"nav-text\">Home</span></a>\r\n            <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/about']\" routerLinkActive=\"active\"><span class=\"nav-text\">About</span></a>\r\n        </div>\r\n        <div class=\"hidden-sm-down\">\r\n        <form class=\"search\">\r\n            <label for=\"search_input\">\r\n                <input id=\"search_input\" type=\"text\" placeholder=\"Search for keywords...\">\r\n            </label>\r\n        </form>\r\n        </div>\r\n        <div class=\"header-actions\">\r\n            <clr-dropdown>\r\n            <button class=\"nav-icon\" clrDropdownTrigger>\r\n            <clr-icon shape=\"user\"></clr-icon>\r\n            <clr-icon shape=\"caret down\"></clr-icon>\r\n            </button>\r\n            <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\r\n            <a href=\"...\" clrDropdownItem>About</a>\r\n            <a href=\"...\" clrDropdownItem>Preferences</a>\r\n            <a href=\"...\" clrDropdownItem>Log out</a>\r\n            </clr-dropdown-menu>\r\n            </clr-dropdown>\r\n        </div>\r\n    </clr-header>\r\n</clr-main-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-header {\n  height: 80px;\n  background: #83b430; }\n\nclr-main-container {\n  height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/common/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-lg-1\">\r\n            <div class=\"carousel\">\r\n            <ngu-carousel [inputs]=\"carousel\"\r\n                (initData)=\"initDataFn($event)\"\r\n                (onMove)=\"onmoveFn($event)\"\r\n                (afterCarouselViewed)=\"afterCarouselViewedFn($event)\"\r\n                (carouselLoad)=\"carouselLoad()\">\r\n                <ngu-item NguCarouselItem *ngFor=\"let item of items\">\r\n                    <div class=\"my-panel\">\r\n                        <img src=\"{{item.img}}\"/>\r\n                    </div>\r\n                </ngu-item>\r\n\r\n                <button NguCarouselPrev class=\"leftRs\"><clr-icon shape=\"rewind\"></clr-icon></button>\r\n                <button NguCarouselNext class=\"rightRs\"><clr-icon shape=\"fast-forward\"></clr-icon></button>\r\n            </ngu-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"home-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <ng-container *ngFor=\"let item of items\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-block\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-6 col-md-12 col-lg-12 col-xl-5\">\r\n                                <img src=\"{{item.img}}\"/>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-sm-6 col-md-12 col-lg-12 col-xl-7\">\r\n                                <div class=\"my-card-text\">\r\n                                    <div class=\"title\">\r\n                                        <h4>{{item.title}}</h4>\r\n                                        <clr-icon shape=\"star\" class=\"is-solid my-star\"></clr-icon>\r\n                                        <clr-icon shape=\"star\" class=\"is-solid my-star\"></clr-icon>\r\n                                        <clr-icon shape=\"star\" class=\"is-solid my-star\"></clr-icon>\r\n                                    </div>\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, porro.</p>\r\n                                    <div class=\"btn-more\">\r\n                                        <clr-icon shape=\"redo\"></clr-icon> Read more\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel {\n  margin-top: 35px; }\n\n.my-panel {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 200px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto auto auto 10px;\n  top: 0;\n  width: 50px;\n  height: 200px;\n  border-radius: 4px;\n  border: 0;\n  left: 0;\n  opacity: 0.7;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), to(grey));\n  background: linear-gradient(to left, rgba(255, 255, 255, 0), grey); }\n\n.leftRs:hover {\n  position: absolute;\n  margin: auto auto auto 10px;\n  top: 0;\n  width: 50px;\n  height: 200px;\n  border-radius: 4px;\n  border: 0;\n  left: 0;\n  opacity: 0.7;\n  background: -webkit-gradient(linear, right top, left top, from(#eeeeee), to(#dadada));\n  background: linear-gradient(to left, #eeeeee, #dadada);\n  cursor: pointer; }\n\n.rightRs {\n  position: absolute;\n  margin: auto 10px auto auto;\n  top: 0;\n  width: 50px;\n  height: 200px;\n  border-radius: 4px;\n  border: 0;\n  right: 0;\n  opacity: 0.7;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(grey));\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), grey); }\n\n.rightRs:hover {\n  position: absolute;\n  margin: auto 10px auto auto;\n  top: 0;\n  width: 50px;\n  height: 200px;\n  border-radius: 4px;\n  border: 0;\n  right: 0;\n  opacity: 0.7;\n  background: -webkit-gradient(linear, left top, right top, from(#eeeeee), to(#dadada));\n  background: linear-gradient(to right, #eeeeee, #dadada);\n  cursor: pointer; }\n\n.home-wrapper {\n  background: #f6f6f6;\n  padding-bottom: 70px; }\n\n.card-block {\n  padding: 10px; }\n\n.title {\n  text-align: center; }\n\n.title h4 {\n  font-weight: bold;\n  margin-top: 0 !important; }\n\n.title h4:hover {\n  color: #004661;\n  cursor: pointer; }\n\n.my-star {\n  margin-top: 5px;\n  color: yellow; }\n\nimg {\n  display: block;\n  width: 100%;\n  height: 200px; }\n\n.card-block img:hover {\n  -webkit-filter: opacity(75%);\n  cursor: pointer; }\n\n.btn-more {\n  color: blue;\n  margin-top: 35px; }\n\n.btn-more:hover {\n  color: black;\n  cursor: pointer; }\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .my-card-text {\n    margin-top: 15px; }\n  .btn-more {\n    color: red;\n    margin-top: 25px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .my-card-text {\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 544px) {\n  .my-card-text {\n    margin-top: 15px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var carousel_1 = __webpack_require__("../../../../@ngu/carousel/index.js");
var home_model_1 = __webpack_require__("../../../../../src/app/home/home.model.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(carouselService) {
        this.carouselService = carouselService;
        this.items = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items = [
            new home_model_1.HomeItem('The Fast And The Furious', 1, '../../images/action.jpg', 'action', 1920),
            new home_model_1.HomeItem('Disney', 1, '../../images/cartoon.jpg', 'action', 1920),
            new home_model_1.HomeItem('One day', 1, '../../images/drama.jpg', 'action', 1920),
            new home_model_1.HomeItem('Ural dumplings', 1, '../../images/comedy.jpg', 'action', 1920),
            new home_model_1.HomeItem('Documentary', 1, '../../images/documentary.jpg', 'action', 1920),
            new home_model_1.HomeItem('Alone home', 1, '../../images/aloneHome.jpg', 'action', 1920)
        ];
        this.carouselService.getData.subscribe((function (value) {
            console.log(value);
        }), (function (error1) {
            console.error(error1);
        }));
        this.carousel = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            slide: 1,
            speed: 1200,
            interval: 5000,
            point: {
                visible: true,
                hideOnSingleSlide: true,
                pointStyles: "\n          .ngucarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngucarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            background: #6b6b6b;\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s;\n          }\n          .ngucarouselPoint li.active {\n              border: 2px solid rgba(0, 0, 0, 0.55);\n              transform: scale(1.2);\n              background: transparent;\n            }\n        "
            },
            load: 3,
            touch: true,
            loop: true,
            easing: 'ease',
            animation: 'lazy'
        };
    };
    HomeComponent.prototype.initDataFn = function (carouselStore) {
        this.carouselStore = carouselStore;
    };
    HomeComponent.prototype.carouselLoad = function () {
        //    console.log('carouselLoad');
    };
    HomeComponent.prototype.afterCarouselViewedFn = function (carouselStore) {
        this.carouselStore = carouselStore;
    };
    HomeComponent.prototype.onmoveFn = function (carouselStore) {
        this.carouselStore = carouselStore;
    };
    HomeComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [carousel_1.NguCarouselService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeItem = /** @class */ (function () {
    function HomeItem(title, rating, img, genre, year) {
        this.title = title;
        this.rating = rating;
        this.img = img;
        this.genre = genre;
        this.year = year;
    }
    return HomeItem;
}());
exports.HomeItem = HomeItem;


/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/app.component.ts"));
__export(__webpack_require__("../../../../../src/app/app.module.ts"));


/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-10 offset-md-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\r\n            <div class=\"test mx-auto\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    Sign in to your account\r\n                </div>\r\n                <div class=\"card-block\">\r\n\r\n                    <form [formGroup]=\"userForm\">\r\n\r\n                        <div class=\"xsInput\">\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-xs-8 offset-xs-2\">\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        class=\"form-control\"\r\n                                        formControlName=\"email\"\r\n                                        placeholder=\"Логин\"\r\n                                        [ngClass]=\"{'has-error': isFieldInvalid('email')}\"\r\n                                        required/>\r\n                                    <div *ngIf=\"formErrors.email\" class=\"invalid\" [hidden]=\"!FieldInValid\">\r\n                                        {{ formErrors.email }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row justify-content-md-center\">\r\n                            <div class=\"col-sm\">\r\n                                <div class=\"xsInput\">\r\n                                    <div class=\"form-group row\">\r\n                                        <div class=\"col-xs-8 offset-xs-2\">\r\n                                            <input\r\n                                                type=\"password\"\r\n                                                class=\"form-control\"\r\n                                                placeholder=\"Пароль\"\r\n                                                formControlName=\"password\"\r\n                                                [ngClass]=\"{'has-error': isFieldInvalid('password')}\"\r\n                                                required/>\r\n                                            <div *ngIf=\"formErrors.password\" class=\"invalid\" [hidden]=\"!isFieldInvalid('password')\">\r\n                                                {{ formErrors.password }}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row justify-content-md-center\">\r\n                            <div class=\"col-xs-12 text-center\">\r\n                                <button\r\n                                    type=\"button\"\r\n                                    class=\"btn btn-lg btn-default\"\r\n                                    [disabled]=\"!formEnable\"\r\n                                    (click)=\"onSubmit()\">Войти\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin-top: 20px; }\n\n.card-header {\n  text-align: center; }\n\n.test {\n  width: 80%; }\n\n.invalid {\n  font-family: sans-serif;\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: 5px;\n  color: darkred; }\n\n.has-error {\n  border-bottom: 1px solid darkred !important; }\n\n.ng-invalid.ng-touched:not(form) {\n  background: none; }\n\n@media (max-width: 768px) {\n  .xsInput {\n    padding: 0 15px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.message = null;
        this.formEnable = true;
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Please specify your login.',
                'pattern': 'Please enter valid e-mail.'
            },
            'password': {
                'required': 'Please specify your password.'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': [
                {
                    value: '',
                    disabled: false
                },
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')
                ]
            ],
            'password': [
                {
                    value: '',
                    disabled: false
                },
                [
                    forms_1.Validators.required
                ]
            ]
        });
        this.subscrValueChange = this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange(this.userForm);
    };
    LoginComponent.prototype.onValueChange = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        this.message = null;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && !control.valid) {
                    var message = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += message[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    LoginComponent.prototype.isFieldInvalid = function (field) {
        if (this.formEnable && this.FieldInValid) {
            return !this.userForm.get(field).valid && this.userForm.get(field).touched;
        }
    };
    LoginComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof forms_1.FormControl) {
                control.markAsTouched({ onlySelf: true });
                var message = _this.validationMessages[field];
                _this.formErrors[field] = '';
                _this.isFieldInvalid(field);
                for (var key in control.errors) {
                    if (control.errors.hasOwnProperty(key)) {
                        _this.formErrors[field] += message[key] + ' ';
                    }
                }
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.FieldInValid = true;
        this.onValueChange();
        if (this.userForm.valid) {
            this.router.navigate(['/']);
        }
        else {
            this.validateAllFormFields(this.userForm);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../../src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var _1 = __webpack_require__("../../../../../src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("../../../../core-js/es6/symbol.js");
__webpack_require__("../../../../core-js/es6/object.js");
__webpack_require__("../../../../core-js/es6/function.js");
__webpack_require__("../../../../core-js/es6/parse-int.js");
__webpack_require__("../../../../core-js/es6/parse-float.js");
__webpack_require__("../../../../core-js/es6/number.js");
__webpack_require__("../../../../core-js/es6/math.js");
__webpack_require__("../../../../core-js/es6/string.js");
__webpack_require__("../../../../core-js/es6/date.js");
__webpack_require__("../../../../core-js/es6/array.js");
__webpack_require__("../../../../core-js/es6/regexp.js");
__webpack_require__("../../../../core-js/es6/map.js");
__webpack_require__("../../../../core-js/es6/set.js");
__webpack_require__("../../../../core-js/es6/reflect.js");
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map