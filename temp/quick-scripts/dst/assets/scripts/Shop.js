
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Shop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3373bG9WWpI86304iTsPnk6', 'Shop');
// scripts/Shop.ts

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
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.click = null;
        _this.coin = null;
        _this.gem = null;
        _this.back = null;
        _this.characters = null;
        _this.weapons = null;
        _this.maps = null;
        _this.char1btn = null;
        _this.char2btn = null;
        _this.char3btn = null;
        _this.char4btn = null;
        _this.char1 = "true";
        _this.char2 = "false";
        _this.char3 = "false";
        _this.char4 = "false";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Shop.prototype.onLoad = function () {
        if (!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.setUserStats();
    };
    Shop.prototype.start = function () {
        this.menuMouseOn();
    };
    // update (dt) {}
    Shop.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    Shop.prototype.setUserStats = function () {
        // this.coin.string = cc.sys.localStorage.getItem("coin");
        // this.gem.string = cc.sys.localStorage.getItem("gem");
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
        // cc.sys.localStorage.setItem("char1", false); // for debug
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
        this.loadCharBtn();
    };
    Shop.prototype.menuMouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("menu");
        });
        this.characters.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
        });
        this.maps.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
        });
        this.char1btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char1 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char1btn, "char1");
            }
        });
        this.char2btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char2 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char2btn, "char2");
            }
        });
        this.char3btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char3 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char3btn, "char3");
            }
        });
        this.char4btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char4 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char4btn, "char4");
            }
        });
    };
    Shop.prototype.playClickAudio = function () {
        cc.audioEngine.playEffect(this.click, false);
    };
    Shop.prototype.loadScene = function (scene) {
        cc.director.loadScene(scene);
    };
    Shop.prototype.loadCharBtn = function () {
        if (this.char1 == "true") {
            this.lockBtn(this.char1btn);
        }
        if (this.char2 == "true") {
            this.lockBtn(this.char2btn);
        }
        if (this.char3 == "true") {
            this.lockBtn(this.char3btn);
        }
        if (this.char4 == "true") {
            this.lockBtn(this.char4btn);
        }
    };
    Shop.prototype.lockBtn = function (btn) {
        btn.node.off(cc.Node.EventType.MOUSE_DOWN);
        btn.interactable = false;
        btn.enableAutoGrayEffect = true;
        this.changePrice(btn);
    };
    Shop.prototype.changePrice = function (btn) {
        btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "SOLD";
    };
    Shop.prototype.buyItemGem = function (btn, item) {
        var price = parseInt(btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string);
        var currGem = parseInt(this.gem.string);
        if (currGem >= price) {
            var remain = currGem - price;
            this.gem.string = remain.toString();
            cc.sys.localStorage.setItem("gem", this.gem.string);
            cc.sys.localStorage.setItem(item, true);
            this.setUserStats();
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], Shop.prototype, "bgm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Shop.prototype, "click", void 0);
    __decorate([
        property(cc.Label)
    ], Shop.prototype, "coin", void 0);
    __decorate([
        property(cc.Label)
    ], Shop.prototype, "gem", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "back", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "characters", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "weapons", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "maps", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char1btn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char2btn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char3btn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char4btn", void 0);
    Shop = __decorate([
        ccclass
    ], Shop);
    return Shop;
}(cc.Component));
exports.default = Shop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWlLQztRQTlKRyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFHckIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUVuQixXQUFLLEdBQVcsTUFBTSxDQUFDO1FBRXZCLFdBQUssR0FBVyxPQUFPLENBQUM7UUFFeEIsV0FBSyxHQUFXLE9BQU8sQ0FBQztRQUV4QixXQUFLLEdBQVcsT0FBTyxDQUFDOztJQXFIcEMsQ0FBQztJQW5IRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLElBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksMERBQTBEO1FBQzFELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCw0REFBNEQ7UUFDNUQsK0NBQStDO1FBQy9DLCtDQUErQztRQUMvQywrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQUEsaUJBbUNDO1FBbENHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDNUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDN0MsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3ZDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBRyxLQUFJLENBQUMsS0FBSyxJQUFLLE1BQU0sRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBRyxLQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDckIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBRyxLQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDckIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMs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LEVBQUUsQ0FBQyxTQUFTLENBQUM7cUNBQ0U7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1Q0FDSTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cUNBQ0U7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNPO0lBcENWLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpS3hCO0lBQUQsV0FBQztDQWpLRCxBQWlLQyxDQWpLaUMsRUFBRSxDQUFDLFNBQVMsR0FpSzdDO2tCQWpLb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29pbjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGdlbTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBiYWNrOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcmFjdGVyczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3ZWFwb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hcHM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBjaGFyMWJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgY2hhcjJidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBjaGFyM2J0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgY2hhcjRidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyMTogc3RyaW5nID0gXCJ0cnVlXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyMjogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNoYXIzOiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgY2hhcjQ6IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuICAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBpZighY2MuYXVkaW9FbmdpbmUuaXNNdXNpY1BsYXlpbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlCR00oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyU3RhdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51TW91c2VPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJTdGF0cygpIHtcclxuICAgICAgICAvLyB0aGlzLmNvaW4uc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pblwiKTtcclxuICAgICAgICAvLyB0aGlzLmdlbS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW1cIik7XHJcbiAgICAgICAgdGhpcy5jaGFyMSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXIxXCIpO1xyXG4gICAgICAgIHRoaXMuY2hhcjIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFyMlwiKTtcclxuICAgICAgICB0aGlzLmNoYXIzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjNcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyNCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXI0XCIpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIxXCIsIGZhbHNlKTsgLy8gZm9yIGRlYnVnXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjJcIiwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIzXCIsIGZhbHNlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyNFwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2hhckJ0bigpO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbnVNb3VzZU9uKCkge1xyXG4gICAgICAgIHRoaXMuYmFjay5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXBzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoYXIxYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMSAhPSAgXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXIxYnRuLCBcImNoYXIxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFyMmJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjIgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXIyYnRuLCBcImNoYXIyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFyM2J0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjMgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXIzYnRuLCBcImNoYXIzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFyNGJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjQgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXI0YnRuLCBcImNoYXI0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUNsaWNrQXVkaW8oKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpY2ssIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2NlbmUoc2NlbmU6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENoYXJCdG4oKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGFyMSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5jaGFyMWJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY2hhcjIgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMuY2hhcjJidG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNoYXIzID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLmNoYXIzYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jaGFyNCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5jaGFyNGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2tCdG4oYnRuOiBjYy5CdXR0b24pIHtcclxuICAgICAgICBidG4ubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTik7XHJcbiAgICAgICAgYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQcmljZShidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByaWNlKGJ0bikge1xyXG4gICAgICAgIGJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJTT0xEXCJcclxuICAgIH1cclxuXHJcbiAgICBidXlJdGVtR2VtKGJ0biwgaXRlbSkge1xyXG4gICAgICAgIGxldCBwcmljZSA9IHBhcnNlSW50KGJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICBsZXQgY3VyckdlbSA9IHBhcnNlSW50KHRoaXMuZ2VtLnN0cmluZyk7XHJcbiAgICAgICAgaWYoY3VyckdlbSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluID0gY3VyckdlbSAtIHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmdlbS5zdHJpbmcgPSByZW1haW4udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VtXCIsIHRoaXMuZ2VtLnN0cmluZyk7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRVc2VyU3RhdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19