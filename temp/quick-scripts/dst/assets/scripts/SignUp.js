
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SignUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SignUp = /** @class */ (function (_super) {
    __extends(SignUp, _super);
    function SignUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = null;
        return _this;
    }
    SignUp.prototype.initSignUpBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/Background/Block/Big Layout/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.signUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var emailBox, usernameBox, passwordBox, email, username, password;
            var _this = this;
            return __generator(this, function (_a) {
                emailBox = cc.find("Canvas/Background/Block/Big Layout/email").getComponent(cc.EditBox);
                usernameBox = cc.find("Canvas/Background/Block/Big Layout/username").getComponent(cc.EditBox);
                passwordBox = cc.find("Canvas/Background/Block/Big Layout/password").getComponent(cc.EditBox);
                email = emailBox.string;
                username = usernameBox.string;
                password = passwordBox.string;
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(function (userCredential) {
                    alert("Sign Up Success!");
                    _this.username = usernameBox.string;
                    _this.updateUserStats(0, 0, true, false, false, false, true, false, false, false, false, true, false, _this.username);
                    emailBox.string = "";
                    usernameBox.string = "";
                    passwordBox.string = "";
                }).catch(function (e) {
                    alert(e.message);
                });
                return [2 /*return*/];
            });
        });
    };
    SignUp.prototype.initBackBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "back";
        cc.find("Canvas/Background/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.back = function () {
        cc.director.loadScene("main menu");
    };
    SignUp.prototype.onLoad = function () {
        this.initSignUpBtn();
        this.initBackBtn();
    };
    SignUp.prototype.start = function () { };
    SignUp.prototype.update = function (dt) { };
    SignUp.prototype.updateUserStats = function (coin, gem, char1, char2, char3, char4, AK47, AR, grenade, shotgun, sniper, purple, forest, username) {
        var userStats = {
            coin: coin,
            gem: gem,
            char1: char1,
            char2: char2,
            char3: char3,
            char4: char4,
            AK47: AK47,
            AR: AR,
            grenade: grenade,
            shotgun: shotgun,
            sniper: sniper,
            purple: purple,
            forest: forest,
            username: username
        };
        return firebase.database().ref("userData/" + firebase.auth().currentUser.uid).update(userStats);
    };
    SignUp = __decorate([
        ccclass
    ], SignUp);
    return SignUp;
}(cc.Component));
exports.default = SignUp;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2lnblVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMEVDO1FBeEVXLGNBQVEsR0FBVyxJQUFJLENBQUM7O0lBd0VwQyxDQUFDO0lBdEVHLDhCQUFhLEdBQWI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFSyx1QkFBTSxHQUFaOzs7OztnQkFDUSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hGLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUYsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RixLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDeEIsUUFBUSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNsQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztxQkFDMUQsSUFBSSxDQUFDLFVBQUMsY0FBYztvQkFDakIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwSCxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ3hCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUU1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO29CQUNQLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ1Y7SUFFRCw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN2QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQscUJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0JBQUssR0FBTCxjQUFVLENBQUM7SUFFWCx1QkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFFZCxnQ0FBZSxHQUFmLFVBQWdCLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQy9HLElBQUksU0FBUyxHQUFHO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixFQUFFLEVBQUUsRUFBRTtZQUNOLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUF4RWdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwRTFCO0lBQUQsYUFBQztDQTFFRCxBQTBFQyxDQTFFbUMsRUFBRSxDQUFDLFNBQVMsR0EwRS9DO2tCQTFFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgaW5pdFNpZ25VcEJ0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlNpZ25VcFwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNpZ25VcFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQmFja2dyb3VuZC9CbG9jay9CaWcgTGF5b3V0L1NpZ25VcEJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaWduVXAoKSB7XHJcbiAgICAgICAgbGV0IGVtYWlsQm94ID0gY2MuZmluZChcIkNhbnZhcy9CYWNrZ3JvdW5kL0Jsb2NrL0JpZyBMYXlvdXQvZW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGxldCB1c2VybmFtZUJveCA9IGNjLmZpbmQoXCJDYW52YXMvQmFja2dyb3VuZC9CbG9jay9CaWcgTGF5b3V0L3VzZXJuYW1lXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBsZXQgcGFzc3dvcmRCb3ggPSBjYy5maW5kKFwiQ2FudmFzL0JhY2tncm91bmQvQmxvY2svQmlnIExheW91dC9wYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgbGV0IGVtYWlsID0gZW1haWxCb3guc3RyaW5nO1xyXG4gICAgICAgIGxldCB1c2VybmFtZSA9IHVzZXJuYW1lQm94LnN0cmluZztcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBwYXNzd29yZEJveC5zdHJpbmc7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJTaWduIFVwIFN1Y2Nlc3MhXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lQm94LnN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlclN0YXRzKDAsIDAsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdGhpcy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbEJveC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWVCb3guc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQm94LnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEJhY2tCdG4oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJTaWduVXBcIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJiYWNrXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9CYWNrZ3JvdW5kL0JhY2tCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluIG1lbnVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmluaXRTaWduVXBCdG4oKTtcclxuICAgICAgICB0aGlzLmluaXRCYWNrQnRuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHVwZGF0ZVVzZXJTdGF0cyhjb2luLCBnZW0sIGNoYXIxLCBjaGFyMiwgY2hhcjMsIGNoYXI0LCBBSzQ3LCBBUiwgZ3JlbmFkZSwgc2hvdGd1biwgc25pcGVyLCBwdXJwbGUsIGZvcmVzdCwgdXNlcm5hbWUpIHtcclxuICAgICAgICB2YXIgdXNlclN0YXRzID0ge1xyXG4gICAgICAgICAgICBjb2luOiBjb2luLFxyXG4gICAgICAgICAgICBnZW06IGdlbSxcclxuICAgICAgICAgICAgY2hhcjE6IGNoYXIxLFxyXG4gICAgICAgICAgICBjaGFyMjogY2hhcjIsXHJcbiAgICAgICAgICAgIGNoYXIzOiBjaGFyMyxcclxuICAgICAgICAgICAgY2hhcjQ6IGNoYXI0LFxyXG4gICAgICAgICAgICBBSzQ3OiBBSzQ3LFxyXG4gICAgICAgICAgICBBUjogQVIsXHJcbiAgICAgICAgICAgIGdyZW5hZGU6IGdyZW5hZGUsXHJcbiAgICAgICAgICAgIHNob3RndW46IHNob3RndW4sXHJcbiAgICAgICAgICAgIHNuaXBlcjogc25pcGVyLFxyXG4gICAgICAgICAgICBwdXJwbGU6IHB1cnBsZSxcclxuICAgICAgICAgICAgZm9yZXN0OiBmb3Jlc3QsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJ1c2VyRGF0YS9cIiArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQpLnVwZGF0ZSh1c2VyU3RhdHMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=