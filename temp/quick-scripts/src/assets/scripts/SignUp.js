"use strict";
cc._RF.push(module, '7ec24PhK+tILbN1NyLkQ0+O', 'SignUp');
// scripts/SignUp.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SignUp = /** @class */ (function (_super) {
    __extends(SignUp, _super);
    function SignUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignUp.prototype.initSignUpBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/menuBg/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.signUp = function () {
        var emailBox = cc.find("Canvas/menuBg/email").getComponent(cc.EditBox);
        var usernameBox = cc.find("Canvas/menuBg/username").getComponent(cc.EditBox);
        var passwordBox = cc.find("Canvas/menuBg/password").getComponent(cc.EditBox);
        var email = emailBox.string;
        var username = usernameBox.string;
        var password = passwordBox.string;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            alert("Sign Up Success!");
            emailBox.string = "";
            usernameBox.string = "";
            passwordBox.string = "";
        }).catch(function (e) {
            alert(e.message);
        });
    };
    SignUp.prototype.initBackBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "back";
        cc.find("Canvas/menuBg/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.back = function () {
        cc.director.loadScene("main menu");
    };
    SignUp.prototype.onLoad = function () { };
    SignUp.prototype.start = function () {
        this.initSignUpBtn();
        this.initBackBtn();
    };
    SignUp.prototype.update = function (dt) { };
    SignUp = __decorate([
        ccclass
    ], SignUp);
    return SignUp;
}(cc.Component));
exports.default = SignUp;

cc._RF.pop();