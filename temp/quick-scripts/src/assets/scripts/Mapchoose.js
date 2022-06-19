"use strict";
cc._RF.push(module, '67faeRefdNK7I+PIWVDF/QZ', 'Mapchoose');
// scripts/Mapchoose.ts

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
var Mapchoose = /** @class */ (function (_super) {
    __extends(Mapchoose, _super);
    function Mapchoose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mapchoose.prototype.start = function () {
        var maponebtn = new cc.Component.EventHandler();
        maponebtn.target = this.node;
        maponebtn.component = "Mapchoose";
        maponebtn.handler = "loadMapOne";
        cc.find("map1").getComponent(cc.Button).clickEvents.push(maponebtn);
        var maptwobtn = new cc.Component.EventHandler();
        maptwobtn.target = this.node;
        maptwobtn.component = "Mapchoose";
        maptwobtn.handler = "loadMapTwo";
        cc.find("map2").getComponent(cc.Button).clickEvents.push(maptwobtn);
    };
    Mapchoose.prototype.loadTwoPlayers = function () {
        cc.director.loadScene("map1");
    };
    Mapchoose.prototype.loadThreePlayers = function () {
        cc.director.loadScene("map2");
    };
    Mapchoose = __decorate([
        ccclass
    ], Mapchoose);
    return Mapchoose;
}(cc.Component));
exports.default = Mapchoose;

cc._RF.pop();