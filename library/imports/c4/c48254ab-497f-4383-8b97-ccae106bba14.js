"use strict";
cc._RF.push(module, 'c4825SrSX9Dg4uXzK4Qa7oU', 'Ground2');
// scripts/Ground2.ts

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
var Ground2 = /** @class */ (function (_super) {
    __extends(Ground2, _super);
    function Ground2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.groundPrefab = null;
        _this.Bound = -223; // base
        _this.growDir = 0;
        _this.isGone = false;
        return _this;
    }
    Ground2.prototype.onLoad = function () {
        this.createBlocks();
    };
    Ground2.prototype.start = function () {
    };
    Ground2.prototype.update = function (dt) {
    };
    Ground2.prototype.createBlocks = function () {
        var newY;
        var counter;
        if (this.growDir == 0) {
            newY = this.node.y - 15;
            counter = 1;
            while (newY >= this.Bound) {
                newY = this.node.y - (15 * counter);
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
        else {
            newY = this.node.y + 15;
            counter = 1;
            while (newY <= this.Bound) {
                newY = this.node.y + (15 * counter) - 4;
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
    };
    Ground2.prototype.onBeginContact = function (contact, self, other) {
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
    Ground2.prototype.onPreSolve = function (contact, self, other) {
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
    __decorate([
        property(cc.Prefab)
    ], Ground2.prototype, "groundPrefab", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "Bound", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "growDir", void 0);
    Ground2 = __decorate([
        ccclass
    ], Ground2);
    return Ground2;
}(cc.Component));
exports.default = Ground2;

cc._RF.pop();