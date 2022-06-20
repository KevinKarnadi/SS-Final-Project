
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
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Win.prototype.start = function () {
    };
    Win.prototype.update = function (dt) {
        if (cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()) {
            this.playername.getComponent(cc.Label).string = cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string;
            this.winnerScore.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").scoreLabel.string;
            this.winnerCoin.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").coinLabel.string;
            this.winnerGem.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").gemLabel.string;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBeUVDO1FBdEVHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQzs7SUF3Q2pDLENBQUM7SUF0Q0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixtQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFDO1lBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzVILElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNoRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDOUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzVGLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLE1BQU0sRUFBQztnQkFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNsRSxnRUFBZ0U7YUFDbkU7WUFDRCxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQyxNQUFNLEVBQUM7Z0JBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbEUsZ0VBQWdFO2FBQ25FO1lBQ0QsSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsTUFBTSxFQUFDO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2xFLGdFQUFnRTthQUNuRTtZQUNELElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLE1BQU0sRUFBQztnQkFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNsRSxnRUFBZ0U7YUFDbkU7WUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN0RCxFQUFFLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2RCxFQUFFLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6RCxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4RCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQXJFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21DQUNDO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0NBQ0k7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzQ0FDSTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NDQUNJO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0NBQ0k7SUFqQ1osR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXlFdkI7SUFBRCxVQUFDO0NBekVELEFBeUVDLENBekVnQyxFQUFFLENBQUMsU0FBUyxHQXlFNUM7a0JBekVvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllcm5hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcmltYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5uZXJTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHdpbm5lckdlbTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHdpbm5lckNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBjaGFyMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGNoYXIyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgY2hhcjM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBjaGFyNDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvR2FtZSBNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLmdldFdpbigpKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJuYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgICAgIHRoaXMud2lubmVyU2NvcmUuc3RyaW5nID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS5zY29yZUxhYmVsLnN0cmluZztcclxuICAgICAgICAgICAgdGhpcy53aW5uZXJDb2luLnN0cmluZyA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikuY29pbkxhYmVsLnN0cmluZztcclxuICAgICAgICAgICAgdGhpcy53aW5uZXJHZW0uc3RyaW5nID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS5nZW1MYWJlbC5zdHJpbmc7XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMFwiKS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjE7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyaW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXIyO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyMztcclxuICAgICAgICAgICAgICAgIC8vY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlM1wiKS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjQ7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1RpbWVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1JlY29yZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9XZWFwb25VaVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MuZmFkZUluKDIpLCBjYy5mYWRlT3V0KDIpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=