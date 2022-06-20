
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cff5fpUDuZEtoxJXIiDrgz5', 'Win');
// scripts/Win.ts

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
var Win = /** @class */ (function (_super) {
    __extends(Win, _super);
    function Win() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playername = null;
        _this.playerimage = null;
        _this.winnerScore = null;
        _this.winnerGem = null;
        _this.winnerCoin = null;
        _this.GameManager = null;
        _this.UI = null;
        _this.char1 = null;
        _this.char2 = null;
        _this.char3 = null;
        _this.char4 = null;
        _this.gameover = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Win.prototype.start = function () {
    };
    Win.prototype.update = function (dt) {
        if (!this.gameover) {
            if (cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()) {
                this.gameover = true;
                this.playername.getComponent(cc.Label).string = cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string;
                this.winnerScore.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").scoreLabel.string;
                this.winnerCoin.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").coinLabel.string;
                this.winnerGem.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").gemLabel.string;
                this.updateDatabase();
                if (cc.find("Canvas/Main Camera/UI/Profile/face0").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char1;
                    //cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face1").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char2;
                    //cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face2").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char3;
                    //cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face3").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char4;
                    //cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                }
                cc.find("Canvas/Main Camera/UI/Timer").active = false;
                cc.find("Canvas/Main Camera/UI/Record").active = false;
                cc.find("Canvas/Main Camera/UI/WeaponUi").active = false;
                cc.find("Canvas/Main Camera/UI/Profile").active = false;
                var action = cc.sequence(cc.fadeIn(2), cc.fadeOut(2));
                this.node.runAction(action);
            }
        }
        else {
            this.scheduleOnce(function () {
                cc.director.loadScene("ending");
            }, 6);
        }
    };
    Win.prototype.updateDatabase = function () {
        var winCoin = parseInt(this.winnerCoin.string);
        var winGem = parseInt(this.winnerGem.string);
        var currCoin = parseInt(cc.sys.localStorage.getItem("coin"));
        var currGem = parseInt(cc.sys.localStorage.getItem("gem"));
        var lastCoin = currCoin + winCoin;
        cc.sys.localStorage.setItem("coin", lastCoin);
        var lastGem = currGem + winGem;
        cc.sys.localStorage.setItem("gem", lastGem);
        var user = firebase.auth().currentUser;
        if (user) {
            console.log("aaa");
            var stats = firebase.database().ref("userData/" + user.uid);
            var userStats = {
                coin: lastCoin,
                gem: lastGem
            };
            return firebase.database().ref("userData/" + user.uid).update(userStats);
        }
    };
    Win.prototype.updateUserStats = function (coin, gem, char1, char2, char3, char4, AK47, AR, grenade, shotgun, sniper, purple, forest, username) {
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
    __decorate([
        property(cc.Label)
    ], Win.prototype, "playername", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "playerimage", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerScore", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerGem", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerCoin", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "GameManager", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "UI", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char4", void 0);
    Win = __decorate([
        ccclass
    ], Win);
    return Win;
}(cc.Component));
exports.default = Win;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBOEhDO1FBM0hHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQUcsS0FBSyxDQUFDOztJQTJGN0IsQ0FBQztJQXpGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG1CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsb0JBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNkLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQztnQkFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLFlBQVksQ0FB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V0FBVyxDQUFDO3NDQUNJO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0NBQ0k7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzQ0FDSTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NDQUNJO0lBakNaLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0E4SHZCO0lBQUQsVUFBQztDQTlIRCxBQThIQyxDQTlIZ0MsRUFBRSxDQUFDLFNBQVMsR0E4SDVDO2tCQTlIb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllcm5hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcmltYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5uZXJTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHdpbm5lckdlbTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHdpbm5lckNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBjaGFyMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGNoYXIyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgY2hhcjM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBjaGFyNDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZW92ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmdhbWVvdmVyKXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9HYW1lIE1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikuZ2V0V2luKCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lb3ZlciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJuYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lclNjb3JlLnN0cmluZyA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikuc2NvcmVMYWJlbC5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lckNvaW4uc3RyaW5nID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS5jb2luTGFiZWwuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJHZW0uc3RyaW5nID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS5nZW1MYWJlbC5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGFiYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTBcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMVwiKS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyaW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXIyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyNDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvVGltZXJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1JlY29yZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MuZmFkZUluKDIpLCBjYy5mYWRlT3V0KDIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZGluZ1wiKTtcclxuICAgICAgICAgICAgfSwgNilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGF0YWJhc2UoKSB7XHJcbiAgICAgICAgbGV0IHdpbkNvaW4gPSBwYXJzZUludCh0aGlzLndpbm5lckNvaW4uc3RyaW5nKTtcclxuICAgICAgICBsZXQgd2luR2VtID0gcGFyc2VJbnQodGhpcy53aW5uZXJHZW0uc3RyaW5nKTtcclxuICAgICAgICBsZXQgY3VyckNvaW4gPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2luXCIpKTtcclxuICAgICAgICBsZXQgY3VyckdlbSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdlbVwiKSk7XHJcbiAgICAgICAgbGV0IGxhc3RDb2luID0gY3VyckNvaW4gKyB3aW5Db2luO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5cIiwgbGFzdENvaW4pO1xyXG4gICAgICAgIGxldCBsYXN0R2VtID0gY3VyckdlbSArIHdpbkdlbTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnZW1cIiwgbGFzdEdlbSk7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICAgICAgaWYodXNlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFhYVwiKTtcclxuICAgICAgICAgICAgdmFyIHN0YXRzID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJ1c2VyRGF0YS9cIiArIHVzZXIudWlkKTtcclxuICAgICAgICAgICAgdmFyIHVzZXJTdGF0cyA9IHtcclxuICAgICAgICAgICAgICAgIGNvaW46IGxhc3RDb2luLFxyXG4gICAgICAgICAgICAgICAgZ2VtOiBsYXN0R2VtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwidXNlckRhdGEvXCIgKyB1c2VyLnVpZCkudXBkYXRlKHVzZXJTdGF0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXJTdGF0cyhjb2luLCBnZW0sIGNoYXIxLCBjaGFyMiwgY2hhcjMsIGNoYXI0LCBBSzQ3LCBBUiwgZ3JlbmFkZSwgc2hvdGd1biwgc25pcGVyLCBwdXJwbGUsIGZvcmVzdCwgdXNlcm5hbWUpIHtcclxuICAgICAgICB2YXIgdXNlclN0YXRzID0ge1xyXG4gICAgICAgICAgICBjb2luOiBjb2luLFxyXG4gICAgICAgICAgICBnZW06IGdlbSxcclxuICAgICAgICAgICAgY2hhcjE6IGNoYXIxLFxyXG4gICAgICAgICAgICBjaGFyMjogY2hhcjIsXHJcbiAgICAgICAgICAgIGNoYXIzOiBjaGFyMyxcclxuICAgICAgICAgICAgY2hhcjQ6IGNoYXI0LFxyXG4gICAgICAgICAgICBBSzQ3OiBBSzQ3LFxyXG4gICAgICAgICAgICBBUjogQVIsXHJcbiAgICAgICAgICAgIGdyZW5hZGU6IGdyZW5hZGUsXHJcbiAgICAgICAgICAgIHNob3RndW46IHNob3RndW4sXHJcbiAgICAgICAgICAgIHNuaXBlcjogc25pcGVyLFxyXG4gICAgICAgICAgICBwdXJwbGU6IHB1cnBsZSxcclxuICAgICAgICAgICAgZm9yZXN0OiBmb3Jlc3QsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJ1c2VyRGF0YS9cIiArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQpLnVwZGF0ZSh1c2VyU3RhdHMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==