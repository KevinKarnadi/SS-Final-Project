"use strict";
cc._RF.push(module, '4dfcdivTy9Dm4Lyp2kmmMT3', 'Crosshair');
// scripts/Crosshair.ts

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
var Crosshair1 = /** @class */ (function (_super) {
    __extends(Crosshair1, _super);
    function Crosshair1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Crosshair1.prototype.init = function (node) {
        console.log("aaa");
        this.setInitPos(node);
    };
    //this function sets the arrow's initial position when it is reused.
    Crosshair1.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the arrow move according to the angle
    Crosshair1.prototype.crosshairMove = function (angle) {
        this.node.angle = angle;
    };
    Crosshair1.prototype.destroyArrow = function () {
        this.node.destroy();
    };
    Crosshair1 = __decorate([
        ccclass
    ], Crosshair1);
    return Crosshair1;
}(cc.Component));
exports.default = Crosshair1;

cc._RF.pop();