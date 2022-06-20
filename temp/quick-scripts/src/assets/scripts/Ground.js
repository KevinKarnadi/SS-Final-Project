"use strict";
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