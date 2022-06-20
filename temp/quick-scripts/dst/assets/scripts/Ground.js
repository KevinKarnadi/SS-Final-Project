
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27c01J847FL9JfMFwSZUf6Z', 'Ground');
// scripts/Ground.ts

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
var Ground = /** @class */ (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGone = false;
        return _this;
    }
    Ground.prototype.init = function (node, index) {
        this.setInitPos(node, index);
    };
    Ground.prototype.reuse = function (bulletManager) {
    };
    Ground.prototype.setInitPos = function (node, index) {
        this.node.parent = node;
        this.node.position = cc.v3(-480 + (15 * index) % (15 * 200), -320 + 15 * Math.floor(index / 200));
        this.node.position = this.node.position.addSelf(node.position);
    };
    Ground.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bomb") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.1);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
        else if (other.node.group == "bullet") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.05);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
    };
    Ground.prototype.onPreSolve = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "explosiveObj") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.35);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
    };
    Ground = __decorate([
        ccclass
    ], Ground);
    return Ground;
}(cc.Component));
exports.default = Ground;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOERDO1FBM0RXLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBMkRwQyxDQUFDO0lBekRVLHFCQUFJLEdBQVgsVUFBWSxJQUFhLEVBQUUsS0FBYTtRQUVwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQUssR0FBTCxVQUFNLGFBQWE7SUFHbkIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCLFVBQW1CLElBQWEsRUFBRSxLQUFhO1FBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBbkMsaUJBdUJDO1FBdEJHLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkQsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0UsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2pGO1NBRUo7YUFBTSxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25ELElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9FLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNqRjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFVLEdBQVYsVUFBVyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBL0IsaUJBWUM7UUFYRyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsRUFBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25ELElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9FLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNqRjtTQUNKO0lBQ0wsQ0FBQztJQTdEZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQThEMUI7SUFBRCxhQUFDO0NBOURELEFBOERDLENBOURtQyxFQUFFLENBQUMsU0FBUyxHQThEL0M7a0JBOURvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuXHJcbiAgICBwcml2YXRlIGlzR29uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KG5vZGU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdFBvcyhub2RlLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV1c2UoYnVsbGV0TWFuYWdlcilcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEluaXRQb3Mobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTQ4MCArICgxNSAqIGluZGV4KSAlICgxNSAqIDIwMCksIC0zMjAgKyAxNSAqIE1hdGguZmxvb3IoaW5kZXggLyAyMDApKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZFNlbGYobm9kZS5wb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJvbWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0dvbmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwic2NvcmVcIiwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwiY29pblwiLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYnVsbGV0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNHb25lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0dvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJzY29yZVwiLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJjb2luXCIsIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmVTb2x2ZShjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImV4cGxvc2l2ZU9ialwiKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNHb25lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMzUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0dvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJzY29yZVwiLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJjb2luXCIsIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==