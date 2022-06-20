
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
            var stats = firebase.database().ref("userData/" + user.uid);
            var userStats = {
                coin: lastCoin,
                gem: lastGem
            };
            return firebase.database().ref("userData/" + user.uid).update(userStats);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBeUdDO1FBdEdHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQUcsS0FBSyxDQUFDOztJQXNFN0IsQ0FBQztJQXBFRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG1CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsb0JBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNkLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQztnQkFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLFlBQVksQ0FB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QyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNVO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bUNBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzQ0FDSTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NDQUNJO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0NBQ0k7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzQ0FDSTtJQWpDWixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBeUd2QjtJQUFELFVBQUM7Q0F6R0QsQUF5R0MsQ0F6R2dDLEVBQUUsQ0FBQyxTQUFTLEdBeUc1QztrQkF6R29CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXJuYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXJpbWFnZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgd2lubmVyU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5uZXJHZW06IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5uZXJDb2luOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHYW1lTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgY2hhcjE6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBjaGFyMjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGNoYXIzOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgY2hhcjQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5nYW1lb3Zlcil7XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvR2FtZSBNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLmdldFdpbigpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVybmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJTY29yZS5zdHJpbmcgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLnNjb3JlTGFiZWwuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJDb2luLnN0cmluZyA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikuY29pbkxhYmVsLnN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyR2VtLnN0cmluZyA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikuZ2VtTGFiZWwuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UwXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTBcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyMjtcclxuICAgICAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMlwiKS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyaW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXIzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UzXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1RpbWVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9SZWNvcmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1dlYXBvblVpXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLmZhZGVJbigyKSwgY2MuZmFkZU91dCgyKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRpbmdcIik7XHJcbiAgICAgICAgICAgIH0sIDYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGFiYXNlKCkge1xyXG4gICAgICAgIGxldCB3aW5Db2luID0gcGFyc2VJbnQodGhpcy53aW5uZXJDb2luLnN0cmluZyk7XHJcbiAgICAgICAgbGV0IHdpbkdlbSA9IHBhcnNlSW50KHRoaXMud2lubmVyR2VtLnN0cmluZyk7XHJcbiAgICAgICAgbGV0IGN1cnJDb2luID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pblwiKSk7XHJcbiAgICAgICAgbGV0IGN1cnJHZW0gPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW1cIikpO1xyXG4gICAgICAgIGxldCBsYXN0Q29pbiA9IGN1cnJDb2luICsgd2luQ29pbjtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2luXCIsIGxhc3RDb2luKTtcclxuICAgICAgICBsZXQgbGFzdEdlbSA9IGN1cnJHZW0gKyB3aW5HZW07XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VtXCIsIGxhc3RHZW0pO1xyXG4gICAgICAgIGxldCB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGlmKHVzZXIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRzID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJ1c2VyRGF0YS9cIiArIHVzZXIudWlkKTtcclxuICAgICAgICAgICAgdmFyIHVzZXJTdGF0cyA9IHtcclxuICAgICAgICAgICAgICAgIGNvaW46IGxhc3RDb2luLFxyXG4gICAgICAgICAgICAgICAgZ2VtOiBsYXN0R2VtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwidXNlckRhdGEvXCIgKyB1c2VyLnVpZCkudXBkYXRlKHVzZXJTdGF0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==