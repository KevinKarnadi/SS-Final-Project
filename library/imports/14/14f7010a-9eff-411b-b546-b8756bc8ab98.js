"use strict";
cc._RF.push(module, '14f70EKnv9BG7VGuHVryKuY', 'map');
// scripts/map.ts

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
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.groundPrefab = null;
        _this.groundPool = null;
        _this.groundPool1 = null;
        return _this;
    }
    Map.prototype.onLoad = function () {
        this.groundPool = new cc.NodePool('Ground');
        for (var i = 0; i < 1120; i++) {
            var ground = cc.instantiate(this.groundPrefab);
            this.groundPool.put(ground);
            // y.max = -215
        }
        // this.groundPool1 = new cc.NodePool('Ground1');
        // for(let i: number = 0; i < 200; i++) {
        //     let ground = cc.instantiate(this.groundPrefab);
        //     this.groundPool1.put(ground);
        //     // y.max = -215
        // }
    };
    Map.prototype.start = function () {
        this.createGround();
    };
    Map.prototype.createGround = function () {
        var ground = null;
        var i = 0;
        while (this.groundPool.size() > 0) {
            ground = this.groundPool.get(this.groundPool);
            ground.getComponent('Ground').init(this.node, i);
            i++;
        }
        // ground = null;
        // i = 0;
        // while(this.groundPool1.size() > 0) {
        //     ground = this.groundPool1.get(this.groundPool1);
        //     ground.getComponent('Ground').init(this.node, i);
        //     i++; 
        // }
    };
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "groundPrefab", void 0);
    Map = __decorate([
        ccclass
    ], Map);
    return Map;
}(cc.Component));
exports.default = Map;

cc._RF.pop();