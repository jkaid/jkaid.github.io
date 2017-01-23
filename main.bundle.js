webpackJsonp([0,4],{

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { MouseWheelDirective } from './mousewheel.directive';*/
var AppComponent = (function () {
    function AppComponent() {
        this.state = 'inactive';
    }
    AppComponent.prototype.toggleNav = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    AppComponent.prototype.clickOff = function () {
        if (this.state === 'active') {
            this.state = 'inactive';
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(621),
            styles: ["\n    #introduction{\n      max-width: 960px;\n      margin: 0 auto;\n    }\n    #image{\n      display: block;\n      margin-left: 10%;\n      width: 20%;\n      float: left;\n      margin-top: 20vh;\n    }\n    #asd{\n      width: 100%;\n    }\n    #details{\n      display: block;\n      padding-top: 0px;\n      width: 70%;\n      padding-left: 20px;\n      float: left;\n      margin-top: 20vh;\n    }\n    #nav-icon4 {\n      width: 30px;\n      height: 32px;\n      position: fixed;\n      top: 25px;\n      right: 20px;\n      transform: rotate(0deg);\n      transition: .5s ease-in-out;\n      cursor: pointer;\n      z-index: 4;\n    }\n    #nav-icon4 span {\n      display: block;\n      position: absolute;\n      height: 4px;\n      width: 100%;\n      background: rgb(93, 93, 93);\n      border-radius: 4px;\n      opacity: 1;\n      left: 0;\n      z-index: 4;\n      transform: rotate(0deg);\n    }\n    a{\n      color: rgb(93, 93, 93);\n      transition: 250ms ease;\n    }\n    a:hover{\n      color: #009688;\n      transition: 250ms ease;\n    }\n    @media screen and (max-width: 768px){\n        #image{\n            width: 50%;\n            margin-left: 0%;\n        }\n        #details{\n          width: 50%;\n        }\n    }\n    #nav-icon4 span:nth-child(1) {transform-origin: left center;}\n    #nav-icon4 span:nth-child(2) {transform-origin: left center;}\n    #nav-icon4 span:nth-child(3) {transform-origin: left center;}\n    .navigation{\n      position: absolute; top: 0%;\n    }\n    .navList{position: absolute; top: 10%; left: 20px;}\n    .navElements{padding: 10px;}\n  "],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('focusSpan1', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        top: '0px'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'rotate(45deg)',
                        top: '-4px',
                        left: '0px'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out'))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('focusSpan2', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        top: '8px'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        width: '0%',
                        opacity: '0'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out'))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('focusSpan3', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        top: '16px'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        transform: 'rotate(-45deg)',
                        top: '16px',
                        left: '0px'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out'))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('navDiv', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        right: '-200px'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        right: '200px'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('250ms ease-in-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/app.component.js.map

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.postJson = function (form) {
        var json = JSON.stringify(form.form.value);
        var params = 'json=' + json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'appclication/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://formspree.io/j.kacso.kaid@gmail.com", params, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    ContactService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ContactService);
    return ContactService;
    var _a;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/contact.service.js.map

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CoursesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursesService = (function () {
    function CoursesService(http) {
        this.http = http;
    }
    CoursesService.prototype.getCourses = function () {
        return this.http.request('./assets/json/courses/courses.json')
            .map(function (res) { return res.json().items; });
    };
    CoursesService.prototype.getCourseDetails = function (value) {
        var url = "./assets/json/courses/details/" + value + ".json";
        return this.http.request(url)
            .map(function (res) { return res.json(); });
    };
    CoursesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CoursesService);
    return CoursesService;
    var _a;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/courses.service.js.map

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
    }
    ProjectsService.prototype.getProjects = function () {
        return this.http.request('./assets/json/projects/projects.json')
            .map(function (res) { return res.json().items; });
    };
    ProjectsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ProjectsService);
    return ProjectsService;
    var _a;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/projects.service.js.map

/***/ },

/***/ 345:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web_animations_js__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web_animations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web_animations_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app___ = __webpack_require__(459);






if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/kaid/angular/kaidport/src/main.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__courses_courses_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__courses_courses_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__courses_courses_component__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_9__contact_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_11__projects_projects_service__["a" /* ProjectsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/app.module.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(_contactService) {
        this._contactService = _contactService;
    }
    ContactComponent.prototype.postMessage = function (form) {
        var _this = this;
        this._contactService.postJson(form.value)
            .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); });
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(622),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/contact.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesComponent = (function () {
    function CoursesComponent(_coursesService) {
        var _this = this;
        this._coursesService = _coursesService;
        this.state = 'inactive';
        this.courses = _coursesService.getCourses()
            .subscribe(function (results) {
            _this.results = results;
        });
    }
    CoursesComponent.prototype.toggle = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    CoursesComponent.prototype.getDetails = function (event) {
        var _this = this;
        if (!this.results) {
            return;
        }
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        this._coursesService.getCourseDetails(value)
            .subscribe(function (details) {
            _this.details = new __WEBPACK_IMPORTED_MODULE_3__details__["a" /* Details */];
            _this.details.id = details.id;
            _this.details.name = details.name;
            _this.details.content = details.content;
            _this.details.url = details.url;
        });
    };
    CoursesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-courses',
            template: __webpack_require__(623),
            styles: [__webpack_require__(617)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('focusCourseBelt', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        left: '0%'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        left: '-100%'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('600ms ease-in-out') /*,
                          style({
                            '-webkit-transform': 'translateZ(0)',
                            '-webkit-transition-delay': '05ms',
                            '-moz-transition-delay': '50ms',
                            '-o-transition-delay': '50ms',
                            'transition-delay': '50ms'
                          })*/
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('600ms ease-in-out')
                    ]),
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* trigger */])('focusCourseContainer', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        '-ms-transform': 'scale(0, 0)',
                        '-webkit-transform': 'scale(0, 0)',
                        'transform': 'scale(0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* style */])({
                        '-ms-transform': 'scale(1, 1)',
                        '-webkit-transform': 'scale(1, 1)',
                        'transform': 'scale(1, 1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('600ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* animate */])('50ms ease-in-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__courses_service__["a" /* CoursesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__courses_service__["a" /* CoursesService */]) === 'function' && _a) || Object])
    ], CoursesComponent);
    return CoursesComponent;
    var _a;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/courses.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Details; });
var Details = (function () {
    function Details() {
    }
    return Details;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/details.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(300);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(455);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/kaid/angular/kaidport/src/index.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent(_projectsService) {
        var _this = this;
        this._projectsService = _projectsService;
        this.projects = _projectsService.getProjects()
            .subscribe(function (results) {
            _this.results = results;
            _this.data = _this.results.slice(0, 3);
            _this.dataLength = _this.data.length;
        });
    }
    ProjectsComponent.prototype.toggle = function () {
        $('.project:nth-child(1)').click(function () {
            $('.project:nth-child(1) .content').show(250);
            $('.project:nth-child(1) .project-img').css('box-shadow', '2px 3px 23px rgba(0,0,0,.1)');
            $('.project:nth-child(1) .project-img').css('opacity', '1');
            $('.project:nth-child(2) .content').hide(250);
            $('.project:nth-child(2) .project-img').css('box-shadow', 'none');
            $('.project:nth-child(2) .project-img').css('opacity', '0.5');
            $('.project:nth-child(3) .content').hide(250);
            $('.project:nth-child(3) .project-img').css('box-shadow', 'none');
            $('.project:nth-child(3) .project-img').css('opacity', '0.5');
            $('.next-project').css('color', 'rgb(93, 93, 93)');
        });
        $('.project:nth-child(2)').click(function () {
            $('.project:nth-child(2) .content').show(250);
            $('.project:nth-child(2) .project-img').css('box-shadow', '2px 3px 23px rgba(0,0,0,.1)');
            $('.project:nth-child(2) .project-img').css('opacity', '1');
            $('.project:nth-child(1) .content').hide(250);
            $('.project:nth-child(1) .project-img').css('box-shadow', 'none');
            $('.project:nth-child(1) .project-img').css('opacity', '0.5');
            $('.project:nth-child(3) .content').hide(250);
            $('.project:nth-child(3) .project-img').css('box-shadow', 'none');
            $('.project:nth-child(3) .project-img').css('opacity', '0.5');
            $('.next-project').css('color', 'rgb(93, 93, 93)');
        });
        $('.project:nth-child(3)').click(function () {
            $('.project:nth-child(3) .content').show(250);
            $('.project:nth-child(3) .project-img').css('box-shadow', '2px 3px 23px rgba(0,0,0,.1)');
            $('.project:nth-child(3) .project-img').css('opacity', '1');
            $('.project:nth-child(1) .content').hide(250);
            $('.project:nth-child(1) .project-img').css('box-shadow', 'none');
            $('.project:nth-child(1) .project-img').css('opacity', '0.5');
            $('.project:nth-child(2) .content').hide(250);
            $('.project:nth-child(2) .project-img').css('box-shadow', 'none');
            $('.project:nth-child(2) .project-img').css('opacity', '0.5');
            $('.next-project').css('color', '#009688');
        });
    };
    ProjectsComponent.prototype.nextProject = function () {
        if (this.dataLength === this.results.length) {
            this.data = this.results.slice(0, 3);
            this.dataLength = 3;
            $('.project-name').html('Chat App');
        }
        else {
            this.data = this.results.slice(this.data.length, this.data.length + 3);
            this.dataLength += 3;
            $('.project-name').html('Github Search App');
            $('.side-bar-left').css('opacity', '0.5');
            $('.side-bar-left').css('pointer-events', 'auto');
            $('.side-bar-right').css('opacity', '0');
            $('.side-bar-right').css('pointer-events', 'none');
        }
    };
    ProjectsComponent.prototype.prevProject = function () {
        if (this.dataLength === 0) {
            this.data = this.results.slice(3, 6);
            this.dataLength = 6;
            $('.project-name').html('Github Search App');
        }
        else {
            this.data = this.results.slice(this.data.length - 3, this.data.length);
            this.dataLength -= 3;
            $('.project-name').html('Chat App');
            $('.side-bar-right').css('opacity', '0.5');
            $('.side-bar-right').css('pointer-events', 'auto');
            $('.side-bar-left').css('opacity', '0');
            $('.side-bar-left').css('pointer-events', 'none');
        }
    };
    ProjectsComponent.prototype.nextProjectM = function () {
        if (this.dataLength === this.results.length) {
            this.data = this.results.slice(0, 3);
            this.dataLength = 3;
            $('.project-name').html('Chat App');
        }
        else {
            this.data = this.results.slice(this.data.length, this.data.length + 3);
            this.dataLength += 3;
            $('.project-name').html('Github Search App');
            $('.side-bar-left-m').css('opacity', '0.5');
            $('.side-bar-left-m').css('pointer-events', 'auto');
            $('.side-bar-right-m').css('opacity', '0.2');
            $('.side-bar-right-m').css('pointer-events', 'none');
        }
    };
    ProjectsComponent.prototype.prevProjectM = function () {
        if (this.dataLength === 0) {
            this.data = this.results.slice(3, 6);
            this.dataLength = 6;
            $('.project-name').html('Github Search App');
        }
        else {
            this.data = this.results.slice(this.data.length - 3, this.data.length);
            this.dataLength -= 3;
            $('.project-name').html('Chat App');
            $('.side-bar-right-m').css('opacity', '0.5');
            $('.side-bar-right-m').css('pointer-events', 'auto');
            $('.side-bar-left-m').css('opacity', '0.2');
            $('.side-bar-left-m').css('pointer-events', 'none');
        }
    };
    ProjectsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__(624),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]) === 'function' && _a) || Object])
    ], ProjectsComponent);
    return ProjectsComponent;
    var _a;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/projects.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__(625),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillsComponent);
    return SkillsComponent;
}());
//# sourceMappingURL=D:/kaid/angular/kaidport/src/skills.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/kaid/angular/kaidport/src/environment.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(344);
















//# sourceMappingURL=D:/kaid/angular/kaidport/src/polyfills.js.map

/***/ },

/***/ 617:
/***/ function(module, exports) {

module.exports = ".image:hover ~ .overlay {\n  -webkit-animation: animation 750ms linear both;\n  animation: animation 750ms linear both;\n  z-index: 2; }\n\n@-webkit-keyframes animation {\n  0% {\n    height: 0%;\n    width: 0%;\n    -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  3.333333% {\n    height: 100%;\n    width: 100%;\n    -webkit-transform: matrix3d(0.34323, 0.11487, 0, 0, 0.07506, 0.34323, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.34323, 0.11487, 0, 0, 0.07506, 0.34323, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  6.666667% {\n    -webkit-transform: matrix3d(0.65416, 0.2159, 0, 0, 0.14115, 0.65416, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.65416, 0.2159, 0, 0, 0.14115, 0.65416, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  10% {\n    -webkit-transform: matrix3d(0.88518, 0.18431, 0, 0, 0.1219, 0.88518, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.88518, 0.18431, 0, 0, 0.1219, 0.88518, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  13.333333% {\n    -webkit-transform: matrix3d(1.02792, 0.0976, 0, 0, 0.06496, 1.02792, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.02792, 0.0976, 0, 0, 0.06496, 1.02792, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  16.666667% {\n    -webkit-transform: matrix3d(1.09602, 0.02621, 0, 0, 0.01747, 1.09602, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.09602, 0.02621, 0, 0, 0.01747, 1.09602, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  20% {\n    -webkit-transform: matrix3d(1.1117, -0.0094, 0, 0, -0.00627, 1.1117, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.1117, -0.0094, 0, 0, -0.00627, 1.1117, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  23.333333% {\n    -webkit-transform: matrix3d(1.09709, -0.01805, 0, 0, -0.01203, 1.09709, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.09709, -0.01805, 0, 0, -0.01203, 1.09709, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  26.666667% {\n    -webkit-transform: matrix3d(1.0698, -0.0143, 0, 0, -0.00954, 1.0698, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.0698, -0.0143, 0, 0, -0.00954, 1.0698, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  30% {\n    -webkit-transform: matrix3d(1.04151, -0.00794, 0, 0, -0.0053, 1.04151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.04151, -0.00794, 0, 0, -0.0053, 1.04151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  33.333333% {\n    -webkit-transform: matrix3d(1.01844, -0.00306, 0, 0, -0.00204, 1.01844, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.01844, -0.00306, 0, 0, -0.00204, 1.01844, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  36.666667% {\n    -webkit-transform: matrix3d(1.00277, -0.00038, 0, 0, -0.00025, 1.00277, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00277, -0.00038, 0, 0, -0.00025, 1.00277, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  40% {\n    -webkit-transform: matrix3d(0.99411, 0.00064, 0, 0, 0.00043, 0.99411, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99411, 0.00064, 0, 0, 0.00043, 0.99411, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  43.333333% {\n    -webkit-transform: matrix3d(0.99083, 0.00076, 0, 0, 0.0005, 0.99083, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99083, 0.00076, 0, 0, 0.0005, 0.99083, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  46.666667% {\n    -webkit-transform: matrix3d(0.991, 0.00053, 0, 0, 0.00035, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.991, 0.00053, 0, 0, 0.00035, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  50% {\n    -webkit-transform: matrix3d(0.99292, 0.00027, 0, 0, 0.00018, 0.99292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99292, 0.00027, 0, 0, 0.00018, 0.99292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  53.333333% {\n    -webkit-transform: matrix3d(0.99535, 0.00008, 0, 0, 0.00006, 0.99535, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99535, 0.00008, 0, 0, 0.00006, 0.99535, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  56.666667% {\n    -webkit-transform: matrix3d(0.99755, -0.00001, 0, 0, 0, 0.99755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99755, -0.00001, 0, 0, 0, 0.99755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  60% {\n    -webkit-transform: matrix3d(0.99919, -0.00004, 0, 0, -0.00002, 0.99919, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99919, -0.00004, 0, 0, -0.00002, 0.99919, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  63.333333% {\n    -webkit-transform: matrix3d(1.0002, -0.00003, 0, 0, -0.00002, 1.0002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.0002, -0.00003, 0, 0, -0.00002, 1.0002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  66.666667% {\n    -webkit-transform: matrix3d(1.00068, -0.00002, 0, 0, -0.00001, 1.00068, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00068, -0.00002, 0, 0, -0.00001, 1.00068, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  70% {\n    -webkit-transform: matrix3d(1.00079, -0.00001, 0, 0, -0.00001, 1.00079, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00079, -0.00001, 0, 0, -0.00001, 1.00079, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  73.333333% {\n    -webkit-transform: matrix3d(1.00069, 0, 0, 0, 0, 1.00069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00069, 0, 0, 0, 0, 1.00069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  76.666667% {\n    -webkit-transform: matrix3d(1.00049, 0, 0, 0, 0, 1.00049, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00049, 0, 0, 0, 0, 1.00049, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  80% {\n    -webkit-transform: matrix3d(1.00029, 0, 0, 0, 0, 1.00029, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00029, 0, 0, 0, 0, 1.00029, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  83.333333% {\n    -webkit-transform: matrix3d(1.00013, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00013, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  86.666667% {\n    -webkit-transform: matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  90% {\n    -webkit-transform: matrix3d(0.99996, 0, 0, 0, 0, 0.99996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99996, 0, 0, 0, 0, 0.99996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  93.333333% {\n    -webkit-transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  96.666667% {\n    -webkit-transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  100% {\n    height: 100%;\n    width: 100%;\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } }\n\n@keyframes animation {\n  0% {\n    height: 0%;\n    width: 0%;\n    -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  3.333333% {\n    height: 100%;\n    width: 100%;\n    -webkit-transform: matrix3d(0.34323, 0.11487, 0, 0, 0.07506, 0.34323, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.34323, 0.11487, 0, 0, 0.07506, 0.34323, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  6.666667% {\n    -webkit-transform: matrix3d(0.65416, 0.2159, 0, 0, 0.14115, 0.65416, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.65416, 0.2159, 0, 0, 0.14115, 0.65416, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  10% {\n    -webkit-transform: matrix3d(0.88518, 0.18431, 0, 0, 0.1219, 0.88518, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.88518, 0.18431, 0, 0, 0.1219, 0.88518, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  13.333333% {\n    -webkit-transform: matrix3d(1.02792, 0.0976, 0, 0, 0.06496, 1.02792, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.02792, 0.0976, 0, 0, 0.06496, 1.02792, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  16.666667% {\n    -webkit-transform: matrix3d(1.09602, 0.02621, 0, 0, 0.01747, 1.09602, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.09602, 0.02621, 0, 0, 0.01747, 1.09602, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  20% {\n    -webkit-transform: matrix3d(1.1117, -0.0094, 0, 0, -0.00627, 1.1117, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.1117, -0.0094, 0, 0, -0.00627, 1.1117, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  23.333333% {\n    -webkit-transform: matrix3d(1.09709, -0.01805, 0, 0, -0.01203, 1.09709, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.09709, -0.01805, 0, 0, -0.01203, 1.09709, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  26.666667% {\n    -webkit-transform: matrix3d(1.0698, -0.0143, 0, 0, -0.00954, 1.0698, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.0698, -0.0143, 0, 0, -0.00954, 1.0698, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  30% {\n    -webkit-transform: matrix3d(1.04151, -0.00794, 0, 0, -0.0053, 1.04151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.04151, -0.00794, 0, 0, -0.0053, 1.04151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  33.333333% {\n    -webkit-transform: matrix3d(1.01844, -0.00306, 0, 0, -0.00204, 1.01844, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.01844, -0.00306, 0, 0, -0.00204, 1.01844, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  36.666667% {\n    -webkit-transform: matrix3d(1.00277, -0.00038, 0, 0, -0.00025, 1.00277, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00277, -0.00038, 0, 0, -0.00025, 1.00277, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  40% {\n    -webkit-transform: matrix3d(0.99411, 0.00064, 0, 0, 0.00043, 0.99411, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99411, 0.00064, 0, 0, 0.00043, 0.99411, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  43.333333% {\n    -webkit-transform: matrix3d(0.99083, 0.00076, 0, 0, 0.0005, 0.99083, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99083, 0.00076, 0, 0, 0.0005, 0.99083, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  46.666667% {\n    -webkit-transform: matrix3d(0.991, 0.00053, 0, 0, 0.00035, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.991, 0.00053, 0, 0, 0.00035, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  50% {\n    -webkit-transform: matrix3d(0.99292, 0.00027, 0, 0, 0.00018, 0.99292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99292, 0.00027, 0, 0, 0.00018, 0.99292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  53.333333% {\n    -webkit-transform: matrix3d(0.99535, 0.00008, 0, 0, 0.00006, 0.99535, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99535, 0.00008, 0, 0, 0.00006, 0.99535, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  56.666667% {\n    -webkit-transform: matrix3d(0.99755, -0.00001, 0, 0, 0, 0.99755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99755, -0.00001, 0, 0, 0, 0.99755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  60% {\n    -webkit-transform: matrix3d(0.99919, -0.00004, 0, 0, -0.00002, 0.99919, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99919, -0.00004, 0, 0, -0.00002, 0.99919, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  63.333333% {\n    -webkit-transform: matrix3d(1.0002, -0.00003, 0, 0, -0.00002, 1.0002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.0002, -0.00003, 0, 0, -0.00002, 1.0002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  66.666667% {\n    -webkit-transform: matrix3d(1.00068, -0.00002, 0, 0, -0.00001, 1.00068, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00068, -0.00002, 0, 0, -0.00001, 1.00068, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  70% {\n    -webkit-transform: matrix3d(1.00079, -0.00001, 0, 0, -0.00001, 1.00079, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00079, -0.00001, 0, 0, -0.00001, 1.00079, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  73.333333% {\n    -webkit-transform: matrix3d(1.00069, 0, 0, 0, 0, 1.00069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00069, 0, 0, 0, 0, 1.00069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  76.666667% {\n    -webkit-transform: matrix3d(1.00049, 0, 0, 0, 0, 1.00049, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00049, 0, 0, 0, 0, 1.00049, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  80% {\n    -webkit-transform: matrix3d(1.00029, 0, 0, 0, 0, 1.00029, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00029, 0, 0, 0, 0, 1.00029, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  83.333333% {\n    -webkit-transform: matrix3d(1.00013, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00013, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  86.666667% {\n    -webkit-transform: matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  90% {\n    -webkit-transform: matrix3d(0.99996, 0, 0, 0, 0, 0.99996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99996, 0, 0, 0, 0, 0.99996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  93.333333% {\n    -webkit-transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  96.666667% {\n    -webkit-transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(0.99994, 0, 0, 0, 0, 0.99994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  100% {\n    height: 100%;\n    width: 100%;\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } }\n\n/*\r\n@-webkit-keyframes animation { \r\n  0% { -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  3.2% { -webkit-transform: matrix3d(0.316, 0.114, 0, 0, 0.059, 0.316, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.316, 0.114, 0, 0, 0.059, 0.316, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  5.51% { -webkit-transform: matrix3d(0.523, 0.238, 0, 0, 0.121, 0.523, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.523, 0.238, 0, 0, 0.121, 0.523, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  6.41% { -webkit-transform: matrix3d(0.596, 0.275, 0, 0, 0.14, 0.596, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.596, 0.275, 0, 0, 0.14, 0.596, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  11.01% { -webkit-transform: matrix3d(0.882, 0.308, 0, 0, 0.16, 0.882, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.882, 0.308, 0, 0, 0.16, 0.882, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  12.71% { -webkit-transform: matrix3d(0.951, 0.272, 0, 0, 0.142, 0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.951, 0.272, 0, 0, 0.142, 0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  16.52% { -webkit-transform: matrix3d(1.047, 0.162, 0, 0, 0.086, 1.047, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.047, 0.162, 0, 0, 0.086, 1.047, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  18.92% { -webkit-transform: matrix3d(1.075, 0.097, 0, 0, 0.052, 1.075, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.075, 0.097, 0, 0, 0.052, 1.075, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  21.92% { -webkit-transform: matrix3d(1.085, 0.037, 0, 0, 0.02, 1.085, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.085, 0.037, 0, 0, 0.02, 1.085, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  25.23% { -webkit-transform: matrix3d(1.077, -0.002, 0, 0, -0.001, 1.077, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.077, -0.002, 0, 0, -0.001, 1.077, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  31.43% { -webkit-transform: matrix3d(1.042, -0.021, 0, 0, -0.011, 1.042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.042, -0.021, 0, 0, -0.011, 1.042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  36.24% { -webkit-transform: matrix3d(1.018, -0.016, 0, 0, -0.009, 1.018, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.018, -0.016, 0, 0, -0.009, 1.018, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  50.55% { -webkit-transform: matrix3d(0.995, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.995, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  56.46% { -webkit-transform: matrix3d(0.996, 0.001, 0, 0, 0.001, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.996, 0.001, 0, 0, 0.001, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  79.08% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  81.48% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } \r\n}\r\n\r\n@keyframes animation { \r\n  0% { -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  3.2% { -webkit-transform: matrix3d(0.316, 0.114, 0, 0, 0.059, 0.316, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.316, 0.114, 0, 0, 0.059, 0.316, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  5.51% { -webkit-transform: matrix3d(0.523, 0.238, 0, 0, 0.121, 0.523, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.523, 0.238, 0, 0, 0.121, 0.523, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  6.41% { -webkit-transform: matrix3d(0.596, 0.275, 0, 0, 0.14, 0.596, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.596, 0.275, 0, 0, 0.14, 0.596, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  11.01% { -webkit-transform: matrix3d(0.882, 0.308, 0, 0, 0.16, 0.882, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.882, 0.308, 0, 0, 0.16, 0.882, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  12.71% { -webkit-transform: matrix3d(0.951, 0.272, 0, 0, 0.142, 0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.951, 0.272, 0, 0, 0.142, 0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  16.52% { -webkit-transform: matrix3d(1.047, 0.162, 0, 0, 0.086, 1.047, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.047, 0.162, 0, 0, 0.086, 1.047, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  18.92% { -webkit-transform: matrix3d(1.075, 0.097, 0, 0, 0.052, 1.075, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.075, 0.097, 0, 0, 0.052, 1.075, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  21.92% { -webkit-transform: matrix3d(1.085, 0.037, 0, 0, 0.02, 1.085, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.085, 0.037, 0, 0, 0.02, 1.085, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  25.23% { -webkit-transform: matrix3d(1.077, -0.002, 0, 0, -0.001, 1.077, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.077, -0.002, 0, 0, -0.001, 1.077, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  31.43% { -webkit-transform: matrix3d(1.042, -0.021, 0, 0, -0.011, 1.042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.042, -0.021, 0, 0, -0.011, 1.042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  36.24% { -webkit-transform: matrix3d(1.018, -0.016, 0, 0, -0.009, 1.018, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.018, -0.016, 0, 0, -0.009, 1.018, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  50.55% { -webkit-transform: matrix3d(0.995, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.995, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  56.46% { -webkit-transform: matrix3d(0.996, 0.001, 0, 0, 0.001, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.996, 0.001, 0, 0, 0.001, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  79.08% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  81.48% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\r\n  100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } \r\n}*/\n.course-section {\n  overflow-x: hidden; }\n\n.course-belt {\n  width: 200%;\n  position: relative;\n  left: 0%;\n  -webkit-transition: 800ms;\n  transition: 800ms; }\n\n#courses-h4 {\n  padding: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #009688;\n  font-weight: 300; }\n\n.slided {\n  -webkit-transition: transform(translate3d(-50%, 0, 0)), transform(translate3d(-50%, 0, 0));\n  transition: transform(translate3d(-50%, 0, 0)), transform(translate3d(-50%, 0, 0));\n  transition: transform(translate3d(-50%, 0, 0)); }\n\n.thumb-wrap,\n.course-wrap {\n  width: 50%;\n  float: left; }\n\n.thumb-container {\n  max-width: 960px;\n  display: block;\n  margin: 0 auto;\n  padding: 20px;\n  overflow: auto; }\n\n.course-container {\n  position: relative;\n  max-width: 600px;\n  margin: 0px auto;\n  padding: 0 15px;\n  box-sizing: border-box;\n  -webkit-transform: scale(0, 0);\n  transform: scale(0, 0); }\n\n.unit {\n  position: relative;\n  display: block;\n  float: left;\n  width: 50%;\n  padding: 0px;\n  cursor: pointer; }\n\n.back {\n  position: relative;\n  top: 41px;\n  left: -60px;\n  outline: none; }\n\n@media screen and (max-width: 768px) {\n  .unit {\n    width: 50%; }\n  .icon {\n    position: relative;\n    left: 60px; }\n  #content-h4 {\n    position: relative;\n    left: 60px;\n    max-width: 340px; } }\n\n@media screen and (min-width: 769px) {\n  .unit {\n    width: 25%; } }\n\n.image {\n  display: block;\n  width: 100%;\n  opacity: 1;\n  cursor: pointer; }\n\nimg {\n  display: block;\n  max-width: 100%; }\n\n.overlay {\n  margin: 0px;\n  position: absolute;\n  top: 0%;\n  text-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #009688;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n          transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  opacity: 0;\n  -webkit-transition: opacity, 300ms, ease-in, 300ms;\n  transition: opacity, 300ms, ease-in, 300ms;\n  z-index: 2; }\n\n.image:hover ~ .overlay {\n  opacity: 0.9; }\n\n.image:hover {\n  z-index: 1; }\n\nstrong {\n  display: block;\n  width: 100%;\n  font-weight: 500;\n  size: 24px;\n  color: #fff;\n  text-transform: uppercase;\n  line-height: 1.2; }\n\n.icon {\n  display: inline-block;\n  width: 2.5em;\n  height: 2.5em;\n  stroke-width: 0;\n  stroke: currentColor;\n  cursor: pointer;\n  opacity: 0.5;\n  fill: currentColor; }\n\n.icon:hover {\n  opacity: 1;\n  color: #009688; }\n\nh4 {\n  margin: 0px 0px 20px; }\n\n#click-for-info {\n  text-align: center;\n  opacity: 0.5; }\n"

/***/ },

/***/ 618:
/***/ function(module, exports) {

module.exports = "form{\r\n    max-width: 550px;\r\n    margin: 0 auto 100px;\r\n    padding: 0 20px;\r\n}\r\n\r\ninput, textarea{\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    background: whitesmoke;\r\n}\r\n\r\ninput:focus, textarea:focus{\r\n    outline: none;\r\n}\r\n\r\ntextarea{\r\n    height: 10em;\r\n    resize: none;\r\n}\r\n\r\ntextarea:focus{\r\n    border: solid 1px #009688;\r\n}\r\n\r\n .submit-wrap{\r\n    text-align: right;\r\n }\r\n \r\n #submit-btn{\r\n     border: 3px solid #4db6ac;\r\n     background: #4db6ac;\r\n     color: white;\r\n     font-size: 18px;\r\n     text-transform: uppercase;\r\n     width: 33%;\r\n     -webkit-transition: 250ms ease;\r\n     transition: 250ms ease;\r\n }\r\n\r\n #submit-btn:hover{\r\n     -webkit-transition: 250ms ease;\r\n     transition: 250ms ease;\r\n     border-color: #009688;\r\n     background: #009688;\r\n }\r\n\r\n .contact-info-group .input-field{\r\n      width: 50%;\r\n      float: left;\r\n      box-sizing: border-box;\r\n }\r\n\r\n #name-field{\r\n     padding-right: 10px;\r\n }\r\n\r\n #email-field{\r\n     padding-left: 10px;\r\n }\r\n\r\n #name-label{\r\n     padding-left: 5px;\r\n }\r\n\r\n #email-label{\r\n    padding-left: 15px;\r\n }\r\n\r\n label{\r\n     display: block;\r\n     margin-bottom: 20px;\r\n }\r\n\r\n span{\r\n     display: block;\r\n }\r\n\r\n .input-field label.active {\r\n  font-size: 0.8rem;\r\n  -webkit-transform: translateY(-200%);\r\n          transform: translateY(-200%);\r\n}\r\n\r\n#contact-wrap {\r\n    position: relative;\r\n    margin-top: 100px;\r\n}\r\n\r\nh4{\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: #009688;\r\n    font-weight: 300;\r\n}\r\n\r\n.container{\r\n    max-width: 960px;\r\n}\r\n\r\n#contact{\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    display: block;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    padding-bottom: 20px;\r\n}\r\n\r\na{ \r\n    width: 33%;\r\n    display: block;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    float: left;\r\n}\r\n\r\n.icon {\r\n  display: inline-block;\r\n  width: 4em;\r\n  height: 4em;\r\n  stroke-width: 0;\r\n  -webkit-transition: 250ms ease;\r\n  transition: 250ms ease;\r\n  stroke: rgb(93, 93, 93);\r\n  fill: rgb(93, 93, 93);\r\n}\r\n\r\n.icon:hover{\r\n    -webkit-transition: 250ms ease;\r\n    transition: 250ms ease;\r\n    fill: #009688;\r\n    stroke: #009688;\r\n    stroke-width: 0.2;\r\n    /*width: 4.2em;\r\n    height: 4.2em;*/\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    h4{\r\n        margin: 50px;\r\n    }\r\n     .contact-info-group .input-field{\r\n        width: 100%;\r\n        float: left;\r\n        box-sizing: border-box;\r\n    }\r\n     #name-field{\r\n        padding-right: 0px;\r\n    }\r\n    #email-field{\r\n        padding-left: 0px;\r\n    }\r\n    #email-label{\r\n        padding-left: 5px;\r\n    }\r\n}"

/***/ },

/***/ 619:
/***/ function(module, exports) {

module.exports = ".project-wrap{\n    max-width: 1000px;\n    position: relative;\n    margin: 0 auto;\n    height: 100vh;\n}\n\n.project-container{\n    margin: 0 auto;\n    max-width: 100%;\n    display: block;\n}\n\nh4{\n    padding: 40px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #009688;\n    font-weight: 300;\n    }\n\n.project-name{\n    text-align: center;\n    font-weight: 300;\n    text-transform: uppercase;\n    font-size: 18px;\n    margin-bottom: 20px;\n    margin-left: 5%;\n}\n\n.content{\n    padding: 15px;\n    width: 22.5%;\n    display: block;\n    float: left;\n    margin: 0;\n}\n\n.project-detail:nth-child(1) .project-img{\n    box-shadow: 2px 3px 23px rgba(0, 0, 0,.1);\n}\n\n.project:nth-child(2) .content{\n    display: none;\n}\n\n.project:nth-child(2) .project-img{\n    opacity: 0.5;\n}\n\n.project:nth-child(3) .content{\n    display: none;\n    margin-bottom: 0px;\n}\n\n.project:nth-child(3) .project-img{\n     opacity: 0.5;\n}\n\n.project-detail:nth-child(2)  .content{\n    display: none;\n}\n\n.project-img{\n    position: relative;\n    display: block;\n    width: 22.5%;\n    float: left;\n    cursor: pointer;\n    margin: 0;\n}\n\n.side-bar-left, .side-bar-right{\n    width: 5%;\n    height: 200px;\n    opacity: 0.5;\n    float: left;\n    cursor: pointer;\n}\n\n.side-bar-left{\n    position: relative;\n    opacity: 0;\n    margin-top: 20px;\n    pointer-events: none;\n}\n\n.side-bar-right{\n    position: relative;\n    max-height: 100%;\n    margin-top: 50px;\n}\n\n.side-bar-left-m, .side-bar-right-m{\n    display: none;\n}\n\n.prev-project{\n    text-transform: uppercase;\n    margin-top: 180px;\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    white-space: nowrap;\n    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);\n    color: rgb(93, 93, 93);\n}\n\n.next-project{\n    text-transform: uppercase;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    margin-top: 130px;\n    white-space: nowrap;\n    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);\n    color: rgb(93, 93, 93);\n}\n\n.prev-project:hover, .next-project:hover{\n    color: #009688;\n}\n\n.project-mobile{\n    max-width: 960px;\n}\n\n\n@media screen and (max-width: 768px){\n    .icon {\n        display: inline-block;\n        width: 1.5em;\n        height: 1.5em;\n        stroke-width: 0;\n        stroke: rgb(93, 93, 93);\n        fill: rgb(93, 93, 93);\n        position: relative;\n        top: 2px;\n        }\n    .project-mobile{\n        margin-bottom: 30px;\n        padding-bottom: 30px;\n    }\n    .project-name{\n        display: block;\n        float: left;\n        margin: 0 auto;\n        width: 50%;\n    }\n    .side-bar-left-m, .side-bar-right-m{\n        position: relative;\n        display: block;\n        float: left;\n        width: 25%;\n        margin: 0px;\n    }\n    .side-bar-left-m{\n        text-align: right;\n        opacity: 0.2;\n        pointer-events: none;\n    }\n    .side-bar-right-m{\n        opacity: 0.5;\n    }\n    .project-wrap{\n        height: 200vh;\n    }\n\n    .content{\n        width: 45%;\n        height: 100%;\n    }\n    .project-img{\n        width: 45%;\n        margin-bottom: 10px;\n        box-shadow: 2px 3px 23px rgba(0,0,0,.1);\n    }\n\n    .project:nth-child(1) .project-img{\n        pointer-events: none;\n    }\n\n    .project:nth-child(1)  .content{\n        display: block;\n        margin-right: 5%;\n        height: 50vh;\n    }\n\n    .project:nth-child(2)  .content{\n        display: block;\n        float: left;\n        height: 50vh;\n    }\n\n    .project:nth-child(2)  .project-img{\n        margin-left: 5%;\n        margin-right: 1px;\n        display: initial;\n        pointer-events: none;\n        opacity: 1;\n    }\n\n    .project:nth-child(3) .content{\n        display: block;\n        margin-bottom: 20vh;\n        height: 50vh;\n        margin-right: 5%;\n    }\n\n    .project:nth-child(3) .project-img{\n        display: block;\n        margin-left: 5%;\n        pointer-events: none;\n        opacity: 1;\n    }\n\n    .side-bar-right{\n        display: none;\n        position: absolute;\n        max-height: 100%;\n        right: 35px;\n    }\n    \n}\n"

/***/ },

/***/ 620:
/***/ function(module, exports) {

module.exports = "/****************************************************************\n *\n * CSS Percentage Circle\n * Author: Andre Firchow\n *\n*****************************************************************/\n.rect-auto, .c100.p51 .slice, .c100.p52 .slice, .c100.p53 .slice, .c100.p54 .slice, .c100.p55 .slice, .c100.p56 .slice, .c100.p57 .slice, .c100.p58 .slice, .c100.p59 .slice, .c100.p60 .slice, .c100.p61 .slice, .c100.p62 .slice, .c100.p63 .slice, .c100.p64 .slice, .c100.p65 .slice, .c100.p66 .slice, .c100.p67 .slice, .c100.p68 .slice, .c100.p69 .slice, .c100.p70 .slice, .c100.p71 .slice, .c100.p72 .slice, .c100.p73 .slice, .c100.p74 .slice, .c100.p75 .slice, .c100.p76 .slice, .c100.p77 .slice, .c100.p78 .slice, .c100.p79 .slice, .c100.p80 .slice, .c100.p81 .slice, .c100.p82 .slice, .c100.p83 .slice, .c100.p84 .slice, .c100.p85 .slice, .c100.p86 .slice, .c100.p87 .slice, .c100.p88 .slice, .c100.p89 .slice, .c100.p90 .slice, .c100.p91 .slice, .c100.p92 .slice, .c100.p93 .slice, .c100.p94 .slice, .c100.p95 .slice, .c100.p96 .slice, .c100.p97 .slice, .c100.p98 .slice, .c100.p99 .slice, .c100.p100 .slice {\n  clip: rect(auto, auto, auto, auto);\n}\n\n.pie, .c100 .bar, .c100.p51 .fill, .c100.p52 .fill, .c100.p53 .fill, .c100.p54 .fill, .c100.p55 .fill, .c100.p56 .fill, .c100.p57 .fill, .c100.p58 .fill, .c100.p59 .fill, .c100.p60 .fill, .c100.p61 .fill, .c100.p62 .fill, .c100.p63 .fill, .c100.p64 .fill, .c100.p65 .fill, .c100.p66 .fill, .c100.p67 .fill, .c100.p68 .fill, .c100.p69 .fill, .c100.p70 .fill, .c100.p71 .fill, .c100.p72 .fill, .c100.p73 .fill, .c100.p74 .fill, .c100.p75 .fill, .c100.p76 .fill, .c100.p77 .fill, .c100.p78 .fill, .c100.p79 .fill, .c100.p80 .fill, .c100.p81 .fill, .c100.p82 .fill, .c100.p83 .fill, .c100.p84 .fill, .c100.p85 .fill, .c100.p86 .fill, .c100.p87 .fill, .c100.p88 .fill, .c100.p89 .fill, .c100.p90 .fill, .c100.p91 .fill, .c100.p92 .fill, .c100.p93 .fill, .c100.p94 .fill, .c100.p95 .fill, .c100.p96 .fill, .c100.p97 .fill, .c100.p98 .fill, .c100.p99 .fill, .c100.p100 .fill {\n  position: absolute;\n  border: 0.08em solid #009688;\n  width: 0.84em;\n  height: 0.84em;\n  clip: rect(0em, 0.5em, 1em, 0em);\n  border-radius: 50%;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n\n.pie-fill, .c100.p51 .bar:after, .c100.p51 .fill, .c100.p52 .bar:after, .c100.p52 .fill, .c100.p53 .bar:after, .c100.p53 .fill, .c100.p54 .bar:after, .c100.p54 .fill, .c100.p55 .bar:after, .c100.p55 .fill, .c100.p56 .bar:after, .c100.p56 .fill, .c100.p57 .bar:after, .c100.p57 .fill, .c100.p58 .bar:after, .c100.p58 .fill, .c100.p59 .bar:after, .c100.p59 .fill, .c100.p60 .bar:after, .c100.p60 .fill, .c100.p61 .bar:after, .c100.p61 .fill, .c100.p62 .bar:after, .c100.p62 .fill, .c100.p63 .bar:after, .c100.p63 .fill, .c100.p64 .bar:after, .c100.p64 .fill, .c100.p65 .bar:after, .c100.p65 .fill, .c100.p66 .bar:after, .c100.p66 .fill, .c100.p67 .bar:after, .c100.p67 .fill, .c100.p68 .bar:after, .c100.p68 .fill, .c100.p69 .bar:after, .c100.p69 .fill, .c100.p70 .bar:after, .c100.p70 .fill, .c100.p71 .bar:after, .c100.p71 .fill, .c100.p72 .bar:after, .c100.p72 .fill, .c100.p73 .bar:after, .c100.p73 .fill, .c100.p74 .bar:after, .c100.p74 .fill, .c100.p75 .bar:after, .c100.p75 .fill, .c100.p76 .bar:after, .c100.p76 .fill, .c100.p77 .bar:after, .c100.p77 .fill, .c100.p78 .bar:after, .c100.p78 .fill, .c100.p79 .bar:after, .c100.p79 .fill, .c100.p80 .bar:after, .c100.p80 .fill, .c100.p81 .bar:after, .c100.p81 .fill, .c100.p82 .bar:after, .c100.p82 .fill, .c100.p83 .bar:after, .c100.p83 .fill, .c100.p84 .bar:after, .c100.p84 .fill, .c100.p85 .bar:after, .c100.p85 .fill, .c100.p86 .bar:after, .c100.p86 .fill, .c100.p87 .bar:after, .c100.p87 .fill, .c100.p88 .bar:after, .c100.p88 .fill, .c100.p89 .bar:after, .c100.p89 .fill, .c100.p90 .bar:after, .c100.p90 .fill, .c100.p91 .bar:after, .c100.p91 .fill, .c100.p92 .bar:after, .c100.p92 .fill, .c100.p93 .bar:after, .c100.p93 .fill, .c100.p94 .bar:after, .c100.p94 .fill, .c100.p95 .bar:after, .c100.p95 .fill, .c100.p96 .bar:after, .c100.p96 .fill, .c100.p97 .bar:after, .c100.p97 .fill, .c100.p98 .bar:after, .c100.p98 .fill, .c100.p99 .bar:after, .c100.p99 .fill, .c100.p100 .bar:after, .c100.p100 .fill {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.c100 {\n  position: relative;\n  font-size: 120px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  float: left;\n  margin: 0 0.1em 0.1em 0;\n  background-color: #cccccc;\n}\n\n.c100 *, .c100 *:before, .c100 *:after {\n  box-sizing: content-box;\n}\n.c100.center {\n  float: none;\n  margin: 0 auto;\n}\n.c100.small {\n  font-size: 80px;\n}\n.c100 > span {\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 5em;\n  line-height: 5em;\n  font-size: 0.2em;\n  color: #cccccc;\n  display: block;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.c100 > .skill {\n    top: 65px;\n    text-align: center;\n}\n.c100:hover > .perc {\n  width: 3.33em;\n  line-height: 3.33em;\n  font-size: 0.3em;\n  color: #009688;\n}\n.c100:hover > .skill {\n  color: #009688;\n}\n.c100:after {\n  position: absolute;\n  top: 0.08em;\n  left: 0.08em;\n  display: block;\n  content: \" \";\n  border-radius: 50%;\n  background-color: whitesmoke;\n  width: 0.84em;\n  height: 0.84em;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease-in;\n  transition-timing-function: ease-in;\n}\n.c100 .slice {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  clip: rect(0em, 1em, 1em, 0.5em);\n}\n.c100.p65 .bar {\n  -webkit-transform: rotate(234deg);\n  transform: rotate(234deg);\n}\n.c100.p70 .bar {\n  -webkit-transform: rotate(252deg);\n  transform: rotate(252deg);\n}\n.c100.p75 .bar {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.c100.p80 .bar {\n  -webkit-transform: rotate(288deg);\n  transform: rotate(288deg);\n}\n.c100.p90 .bar {\n  -webkit-transform: rotate(324deg);\n  transform: rotate(324deg);\n}\n.c100:hover {\n  cursor: default;\n}\n.c100:hover:after {\n  top: 0.04em;\n  left: 0.04em;\n  width: 0.92em;\n  height: 0.92em;\n}\n\n.skills-wrap{\n  background-color: whitesmoke;\n  width: 100%;\n  box-shadow: 2px 3px 23px rgba(0,0,0,.1);\n}\n.skills-container{\n  position: relative;\n  \n  padding-bottom: 220px;\n  max-width: 960px;\n  margin: 0 auto;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.skill-circle{\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 16.66%;\n  float: left;\n}\n\n@media screen and (max-width: 768px){\n   .skill-circle{\n     width: 33%;\n   }\n   .skills-container{\n     padding-bottom: 350px;\n   }\n}\n\n.row{\n  padding: 20px;\n  max-width: 960px;\n}\n\nh4{\n    padding: 40px;\n    padding-top: 40vh;\n    text-align: center;\n    text-transform: uppercase;\n    color: #009688;\n    font-weight: 300;\n    }\n\n"

/***/ },

/***/ 621:
/***/ function(module, exports) {

module.exports = "\n      <div id=\"home\" class=\"section\" style=\"width: 100%; margin-top: 0px;\">\n        <div stlyle=\"position: absolute;\">\n          <svg version=\"1.1\" id=\"Réteg_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t         viewBox=\"0 0 204.1 141.7\" enable-background=\"new 0 0 204.1 141.7\" xml:space=\"preserve\" \n           style=\"height: 30px; display: block; float: left; margin-left: 4%; margin-top: -4px; fill: #757575;\">\n          <g>\n            <polygon points=\"62.5,55.4 32.5,55.4 21.4,73.3 51.4,73.3 \t\"/>\n            <polygon points=\"129.9,16.9 99.9,82 99.9,78.3 99.9,124.9 99.9,124.9 129.9,59.3 \t\"/>\n            <polygon points=\"99.9,16.9 62,94.5 62,94.5 47.2,124.9 47.2,124.9 47.2,124.9 47.2,124.9 77.2,124.9 77.2,124.9 77.2,124.9 \n              99.9,78.3 99.9,78.3 129.9,16.9 \t\"/>\n            <polygon points=\"182.7,16.9 152.7,16.9 126,71.5 125.6,71.5 125.8,71.9 99.9,124.9 129.9,124.9 129.9,124.9 155.8,71.9 \n              141.8,105.2 151.3,124.9 181.3,124.9 155.8,71.9 \t\"/>\n            <polygon points=\"60.2,90.8 52.9,76.2 21.4,73.3 47.2,124.9 \t\"/>\n          </g>\n          </svg>\n          <h5 style=\"margin-left: 10%; font-weight: 300;\">Janos<span style=\"font-weight: 500;\">Kacso</span></h5>\n             <div #clickEvent id=\"nav-icon4\" (click)=\"toggleNav()\">\n              <span [@focusSpan1]=\"state\"></span>\n              <span [@focusSpan2]=\"state\"></span>\n              <span [@focusSpan3]=\"state\"></span>\n            </div>\n        </div>\n        \n\n      <div id=\"top\" class=\"section\">\n        <div [@navDiv]=\"state\" class=\"navigation\">\n          <div style=\"height: 100%; width: 200px; background-color: #fff; position: fixed; z-index: 3; box-shadow: 2px 3px 23px rgba(0,0,0,.1)\">\n            <ul class=\"navList\">\n              <li class=\"navElements\"><a href=\"#home\" (click)=\"clickOff()\">Introduction</a></li>\n              <li class=\"navElements\"><a href=\"#skills\" (click)=\"clickOff()\">Skills</a></li>\n              <li class=\"navElements\"><a href=\"#studies\" (click)=\"clickOff()\">Courses</a></li>\n              <li class=\"navElements\"><a href=\"#works\" (click)=\"clickOff()\">Projects</a></li>\n              <li class=\"navElements\"><a href=\"#contact\" (click)=\"clickOff()\">Contact</a></li>\n            </ul>\n            <svg version=\"1.1\" id=\"Réteg_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 204.1 141.7\" enable-background=\"new 0 0 204.1 141.7\" xml:space=\"preserve\"\n                style=\"width: 100px; position: relative; top: 85%; left: 50px; fill: #757575;\">\n                <g>\n                  <polygon points=\"62.5,55.4 32.5,55.4 21.4,73.3 51.4,73.3 \t\"/>\n                  <polygon points=\"129.9,16.9 99.9,82 99.9,78.3 99.9,124.9 99.9,124.9 129.9,59.3 \t\"/>\n                  <polygon points=\"99.9,16.9 62,94.5 62,94.5 47.2,124.9 47.2,124.9 47.2,124.9 47.2,124.9 77.2,124.9 77.2,124.9 77.2,124.9 \n                    99.9,78.3 99.9,78.3 129.9,16.9 \t\"/>\n                  <polygon points=\"182.7,16.9 152.7,16.9 126,71.5 125.6,71.5 125.8,71.9 99.9,124.9 129.9,124.9 129.9,124.9 155.8,71.9 \n                    141.8,105.2 151.3,124.9 181.3,124.9 155.8,71.9 \t\"/>\n                  <polygon points=\"60.2,90.8 52.9,76.2 21.4,73.3 47.2,124.9 \t\"/>\n                </g>\n              </svg>\n          </div>\n        </div>\n       </div>        \n      </div>\n\n    <div (click)=\"clickOff()\">\n\n    <div id=\"introduction\" style=\"max-width: 960px; margin: 0 auto; padding: 20px; height: 50vh;\">\n      <div id=\"image\">\n        <img id=\"asd\"src=\"../assets/introduction/avatar_v1.png\">\n      </div>\n      \n      <div id=\"details\" class=\"section\">\n       \n        <h5 style=\"margin-top: 0px;\">Hi I'm János Kacsó - designer & coder</h5>\n        <h5 style=\"font-weight: 300;\">I love creating useful and beautiful things for people</h5>\n        \n      </div>\n\n\n\n    </div>\n\n      <div id=\"skills\" class=\"section\">\n        <app-skills></app-skills>\n      </div>\n      \n      <div id=\"studies\" class=\"section\">\n        <app-courses></app-courses>\n      </div>\n      <div id=\"works\" class=\"section\">\n        <app-projects></app-projects>\n      </div>\n      <div>\n        <app-contact id=\"contact\" class=\"section\"></app-contact>\n      </div>\n    </div>\n \n\n  "

/***/ },

/***/ 622:
/***/ function(module, exports) {

module.exports = "\n<h4>Contact</h4>\n<div class=\"container\">\n<div id=\"contact\">\n        <div class=\"buttons\">\n          <a href=\"http://linkedin.com/in/janoskacso\" target=\"_blank\">\n          <svg class=\"icon icon-linkedin2\"><use xlink:href=\"#icon-linkedin2\">\n            <symbol id=\"icon-linkedin2\" viewBox=\"0 0 32 32\">\n            <title>linkedin2</title>\n            <path class=\"path1\" d=\"M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z\"></path>\n            <path class=\"path2\" d=\"M2 12h6v18h-6v-18z\"></path>\n            <path class=\"path3\" d=\"M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z\"></path>\n            </symbol>\n          </use></svg></a>\n       </div>\n       <div class=\"buttons\">\n          <a href=\"http://github.com/jkaid\" target=\"_blank\">\n            <svg class=\"icon icon-github\"><use xlink:href=\"#icon-github\">\n              <symbol id=\"icon-github\" viewBox=\"0 0 32 32\">\n              <title>github</title>\n              <path class=\"path1\" d=\"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z\"></path>\n              </symbol>\n            </use></svg></a>\n       </div>\n       <div class=\"buttons\">\n          <a href=\"https://www.facebook.com/j.kacso.kaid\" target=\"_blank\">\n            <svg class=\"icon icon-facebook\"><use xlink:href=\"#icon-facebook\">\n              <symbol id=\"icon-facebook\" viewBox=\"0 0 32 32\">\n              <title>facebook</title>\n              <path class=\"path1\" d=\"M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z\"></path>\n              </symbol>\n            </use></svg></a>\n        </div>\n</div>\n</div>\n<div id=\"contact-wrap\">\n\n\n<form method=\"POST\" action=\"//formspree.io/j.kacso.kaid@gmail.com\" (ngSubmit)=\"postMessage(f)\" #f=\"ngForm\">\n\n  <div class=\"contact-info-group\">\n\n    <div class=\"input-field\" id=\"name-field\">\n      <input ngModel type=\"text\" name=\"name\" id=\"name\" required>\n      <label id=\"name-label\"for=\"name\">Name</label>\n    </div>\n\n    <div class=\"input-field\" id=\"email-field\">\n      <input ngModel type=\"email\" name=\"_replyto\" id=\"email\" required\n      pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\n      <label id=\"email-label\"for=\"email\">Email</label>\n    </div>\n\n  </div>\n\n  <label>\n  <textarea id=\"textarea\" ngModel name=\"message\" placeholder=\"Your Message\" required></textarea></label>\n\n  <div class=\"submit-wrap\">\n    <input id=\"submit-btn\"type=\"submit\" value=\"Send\">\n  </div>\n  <input type=\"hidden\" name=\"_next\" value=\"/#contact\" />\n</form>\n</div>\n\n\n"

/***/ },

/***/ 623:
/***/ function(module, exports) {

module.exports = "<h4 id=\"courses-h4\">Courses</h4>\n<section class=\"course-section\">\n  <div class=\"course-belt\" [@focusCourseBelt]=\"state\">\n    \n    <div class=\"thumb-wrap\">\n      \n      <div class=\"thumb-container\">\n        \n        <div (click)=\"toggle()\" *ngFor=\"let result of results; let i = index\">\n          <div class=\"unit\" style=\"box-shadow: 2px 3px 23px rgba(0,0,0,.1);\">\n            <img src=\"{{result.url}}\" class=\"image\" id=\"{{result.id}}\" (click)=\"getDetails($event)\">\n          <div class=\"overlay\">\n          <strong>{{result.name}}</strong>\n          </div>\n          </div>\n        </div>\n        \n      </div>\n      <p id=\"click-for-info\">(click for more information)</p>\n    </div>\n\n    <!-- course details -->\n    <div *ngIf=\"details\">\n\n\n      <div class=\"course-wrap\" *ngFor=\"let result of results\">\n        <div class=\"course-container\" [@focusCourseContainer]=\"state\" style=\"margin: 0px auto;\">\n          <div class=\"back\" (click)=\"toggle()\" *ngIf=\"result.id === details.id\">\n            <svg class=\"icon icon-circle-left\"><use xlink:href=\"#icon-circle-left\">\n              <symbol id=\"icon-circle-left\" viewBox=\"0 0 32 32\">\n              <title>circle-left</title>\n              <path class=\"path1\" d=\"M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z\"></path>\n              <path class=\"path2\" d=\"M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z\"></path>\n              </symbol>\n            </use></svg>\n          </div>\n          <div>\n            <div *ngIf=\"result.id === details.id\">\n            <h4 id=\"content-h4\">{{details.name}}</h4>\n            <div style=\"max-width: 100%;\">\n                <p *ngFor=\"let c of details.content\" >{{c}}</p>\n                \n            </div>\n            <i>view this course on <a href=\"{{details.url}}\" target=\"_blank\">udemy</a></i>\n            </div>\n          </div>\n        </div>\n        </div>\n\n        </div>\n\n\n    </div>\n</section>\n\n<section>\n  <div></div>\n</section>"

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = "<div class=\"project-wrap\">\n\n  <h4>Projects</h4>\n\n<div class=\"project-mobile\">\n\n  <div class=\"side-bar-left-m\" (click)=\"prevProjectM()\">\n  \n    <svg class=\"icon icon-circle-left\"><use xlink:href=\"#icon-circle-left\">\n    \n      <symbol id=\"icon-circle-left\" viewBox=\"0 0 32 32\">\n      <title>circle-left</title>\n      <path class=\"path1\" d=\"M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z\"></path>\n      <path class=\"path2\" d=\"M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z\"></path>\n      </symbol>\n    \n    </use></svg>\n\n  </div>\n  \n  <div class=\"project-name\">Chat App</div>\n\n  <div class=\"side-bar-right-m\" (click)=\"nextProjectM()\">\n  \n  <svg class=\"icon icon-circle-right\"><use xlink:href=\"#icon-circle-right\">\n  \n    <symbol id=\"icon-circle-right\" viewBox=\"0 0 32 32\">\n    <title>circle-right</title>\n    <path class=\"path1\" d=\"M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z\"></path>\n    <path class=\"path2\" d=\"M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z\"></path>\n    </symbol>\n  \n  </use></svg>\n  \n  </div>\n\n\n</div>\n\n\n  <div class=\"side-bar-left\" (click)=\"prevProject()\">\n  \n    <p class=\"prev-project\">previous >></p>\n\n  </div>\n\n  <div class=\"project-container\">\n    \n    <div class=\"project\" *ngFor=\"let project of data\">\n\n      <div class=\"project-detail\">\n\n        <img src=\"{{project.img}}\" class=\"project-img\" (click)=\"toggle()\">\n\n        <div class=\"content\">\n\n          <p>{{project.content1}}</p>\n          <p>{{project.content2}}</p>\n          <p>{{project.content3}}</p>\n          <p>{{project.content4}}</p>\n          <p>{{project.content5}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n  \n  </div>\n\n  <div class=\"side-bar-right\" (click)=\"nextProject()\">\n  \n    <p class=\"next-project\">next >></p>\n  \n  </div>\n\n</div>\n"

/***/ },

/***/ 625:
/***/ function(module, exports) {

module.exports = "        \n        <h4>Skills</h4>\n        <section class=\"skills-wrap\">\n        <div class=\"skills-container\">\n              <div class=\"skill-circle\">\n                <div class=\"c100 small p80 center\">\n                    <span class=\"perc\">80%</span>\n                    <span class=\"skill\" style=\"left: -20%;\">Communication</span>\n                    <div class=\"slice\">\n                        <div class=\"bar\"></div>\n                        <div class=\"fill\"></div>\n                    </div>\n                </div>\n              </div>\n\n              <div class=\"skill-circle\">\n                  <div class=\"c100 small p90 center\">\n                    <span class=\"perc\">90%</span>\n                    <span class=\"skill\">Learning</span>\n                    <div class=\"slice\">\n                        <div class=\"bar\"></div>\n                        <div class=\"fill\"></div>\n                    </div>\n                </div>\n              </div>\n\n                <div class=\"skill-circle\">\n                    <div class=\"c100 small p65 center\">\n                      <span class=\"perc\">65%</span>\n                      <span class=\"skill\">Planning</span>\n                      <div class=\"slice\">\n                          <div class=\"bar\"></div>\n                          <div class=\"fill\"></div>\n                      </div>\n                  </div>\n                </div>\n\n                 <div class=\"skill-circle\">\n                    <div class=\"c100 small p70 center\">\n                      <span class=\"perc\">70%</span>\n                      <span class=\"skill\">Organization</span>\n                      <div class=\"slice\">\n                          <div class=\"bar\"></div>\n                          <div class=\"fill\"></div>\n                      </div>\n                  </div>\n                </div>\n\n                 <div class=\"skill-circle\">\n                    <div class=\"c100 small p75 center\">\n                      <span class=\"perc\">75%</span>\n                      <span class=\"skill\">Design</span>\n                      <div class=\"slice\">\n                          <div class=\"bar\"></div>\n                          <div class=\"fill\"></div>\n                      </div>\n                  </div>\n                </div>\n\n                 <div class=\"skill-circle\">\n                    <div class=\"c100 small p65 center\">\n                      <span class=\"perc\">65%</span>\n                      <span class=\"skill\" style=\"left: -10%;\">Programming</span>\n                      <div class=\"slice\">\n                          <div class=\"bar\"></div>\n                          <div class=\"fill\"></div>\n                      </div>\n                  </div>\n                </div>\n    </div>\n\n    </section>"

/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ }

},[640]);
//# sourceMappingURL=main.bundle.map