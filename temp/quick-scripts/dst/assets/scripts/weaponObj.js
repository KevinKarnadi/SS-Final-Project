
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/weaponObj.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'beed63tWwNNlJ7BTaLTOvZI', 'weaponObj');
// scripts/weaponObj.ts

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
var WeaponObj = /** @class */ (function (_super) {
    __extends(WeaponObj, _super);
    function WeaponObj() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletType = "1";
        return _this;
    }
    WeaponObj.prototype.onLoad = function () {
    };
    WeaponObj.prototype.start = function () {
    };
    WeaponObj.prototype.update = function (dt) {
    };
    WeaponObj.prototype.onBeginContact = function (contact, self, other) {
        // if(other.node.name == "Die Boundary" || other.node.group == "player"){
        //     this.node.destroy();
        // }
    };
    WeaponObj.prototype.getBulletType = function () {
        return this.bulletType;
    };
    __decorate([
        property()
    ], WeaponObj.prototype, "bulletType", void 0);
    WeaponObj = __decorate([
        ccclass
    ], WeaponObj);
    return WeaponObj;
}(cc.Component));
exports.default = WeaponObj;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd2VhcG9uT2JqLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNEJDO1FBekJHLGdCQUFVLEdBQVcsR0FBRyxDQUFDOztJQXlCN0IsQ0FBQztJQXZCRywwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQix5RUFBeUU7UUFDekUsMkJBQTJCO1FBQzNCLElBQUk7SUFHUixDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBeEJEO1FBREMsUUFBUSxFQUFFO2lEQUNjO0lBSFIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTRCN0I7SUFBRCxnQkFBQztDQTVCRCxBQTRCQyxDQTVCc0MsRUFBRSxDQUFDLFNBQVMsR0E0QmxEO2tCQTVCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uT2JqIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgYnVsbGV0VHlwZTogc3RyaW5nID0gXCIxXCI7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICAvLyBpZihvdGhlci5ub2RlLm5hbWUgPT0gXCJEaWUgQm91bmRhcnlcIiB8fCBvdGhlci5ub2RlLmdyb3VwID09IFwicGxheWVyXCIpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRCdWxsZXRUeXBlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsbGV0VHlwZTtcclxuICAgIH1cclxufVxyXG4iXX0=