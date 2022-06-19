
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Mapchoose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFwY2hvb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EOztJQWdDQSxDQUFDO0lBMUJHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBR2pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBFLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoRCxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFHakMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWdCLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTlCZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWdDN0I7SUFBRCxnQkFBQztDQWhDRCxBQWdDQyxDQWhDc0MsRUFBRSxDQUFDLFNBQVMsR0FnQ2xEO2tCQWhDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwY2hvb3NlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbWFwb25lYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBtYXBvbmVidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG1hcG9uZWJ0bi5jb21wb25lbnQgPSBcIk1hcGNob29zZVwiO1xyXG4gICAgICAgIG1hcG9uZWJ0bi5oYW5kbGVyID0gXCJsb2FkTWFwT25lXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwibWFwMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG1hcG9uZWJ0bik7XHJcblxyXG4gICAgICAgIGxldCBtYXB0d29idG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG1hcHR3b2J0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbWFwdHdvYnRuLmNvbXBvbmVudCA9IFwiTWFwY2hvb3NlXCI7XHJcbiAgICAgICAgbWFwdHdvYnRuLmhhbmRsZXIgPSBcImxvYWRNYXBUd29cIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJtYXAyXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobWFwdHdvYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHdvUGxheWVycygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRocmVlUGxheWVycygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICB9XHJcblxyXG59Il19