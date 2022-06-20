
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
        _this.AKbtn = null;
        _this.ARbtn = null;
        _this.grenadebtn = null;
        _this.shotgunbtn = null;
        _this.sniperbtn = null;
        _this.char1 = "true";
        _this.char2 = "false";
        _this.char3 = "false";
        _this.char4 = "false";
        _this.AK = "true";
        _this.AR = "false";
        _this.grenade = "false";
        _this.shotgun = "false";
        _this.sniper = "false";
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
        this.AK = cc.sys.localStorage.getItem("AK47");
        this.AR = cc.sys.localStorage.getItem("AR");
        this.grenade = cc.sys.localStorage.getItem("grenade");
        this.sniper = cc.sys.localStorage.getItem("sniper");
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
        this.AKbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.AK != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.AKbtn, "AK47");
            }
        });
        this.ARbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.AR != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.ARbtn, "AR");
            }
        });
        this.grenadebtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.grenade != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.grenadebtn, "grenade");
            }
        });
        this.shotgunbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.AR != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.shotgunbtn, "shotgun");
            }
        });
        this.sniperbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.sniper != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.sniperbtn, "sniper");
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
        if (this.AK == "true") {
            this.lockBtn(this.AKbtn);
        }
        if (this.AR == "true") {
            this.lockBtn(this.ARbtn);
        }
        if (this.grenade == "true") {
            this.lockBtn(this.grenadebtn);
        }
        if (this.shotgun == "true") {
            this.lockBtn(this.shotgunbtn);
        }
        if (this.sniper == "true") {
            this.lockBtn(this.sniperbtn);
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
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "AKbtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "ARbtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "grenadebtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "shotgunbtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "sniperbtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTJPQztRQXhPRyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFHckIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUVwQixXQUFLLEdBQVcsTUFBTSxDQUFDO1FBRXZCLFdBQUssR0FBVyxPQUFPLENBQUM7UUFFeEIsV0FBSyxHQUFXLE9BQU8sQ0FBQztRQUV4QixXQUFLLEdBQVcsT0FBTyxDQUFDO1FBRXhCLFFBQUUsR0FBVyxNQUFNLENBQUM7UUFFcEIsUUFBRSxHQUFXLE9BQU8sQ0FBQztRQUVyQixhQUFPLEdBQVcsT0FBTyxDQUFDO1FBRTFCLGFBQU8sR0FBVyxPQUFPLENBQUM7UUFFMUIsWUFBTSxHQUFXLE9BQU8sQ0FBQzs7SUFz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QzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUcsS0FBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUcsS0FBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUcsS0FBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzdDLElBQUcsS0FBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzdDLElBQUcsS0FBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUcsS0FBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQy9DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUcsS0FBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQy9DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDUTtJQW5EWCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMk94QjtJQUFELFdBQUM7Q0EzT0QsQUEyT0MsQ0EzT2lDLEVBQUUsQ0FBQyxTQUFTLEdBMk83QztrQkEzT29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGNsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBnZW06IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJhY3RlcnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2VhcG9uczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXBzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgY2hhcjFidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGNoYXIyYnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgY2hhcjNidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGNoYXI0YnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBBS2J0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgQVJidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBncmVuYWRlYnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzaG90Z3VuYnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzbmlwZXJidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyMTogc3RyaW5nID0gXCJ0cnVlXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyMjogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNoYXIzOiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgY2hhcjQ6IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuXHJcbiAgICBwcml2YXRlIEFLOiBzdHJpbmcgPSBcInRydWVcIjtcclxuXHJcbiAgICBwcml2YXRlIEFSOiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZ3JlbmFkZTogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHNob3RndW46IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuXHJcbiAgICBwcml2YXRlIHNuaXBlcjogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGlmKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFVzZXJTdGF0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm1lbnVNb3VzZU9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwbGF5QkdNKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlclN0YXRzKCkge1xyXG4gICAgICAgIC8vIHRoaXMuY29pbi5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2luXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2VtLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdlbVwiKTtcclxuICAgICAgICB0aGlzLmNoYXIxID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjFcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyMiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXIyXCIpO1xyXG4gICAgICAgIHRoaXMuY2hhcjMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFyM1wiKTtcclxuICAgICAgICB0aGlzLmNoYXI0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjRcIik7XHJcbiAgICAgICAgdGhpcy5BSyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFLNDdcIik7XHJcbiAgICAgICAgdGhpcy5BUiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFSXCIpO1xyXG4gICAgICAgIHRoaXMuZ3JlbmFkZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdyZW5hZGVcIik7XHJcbiAgICAgICAgdGhpcy5zbmlwZXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbmlwZXJcIik7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjFcIiwgZmFsc2UpOyAvLyBmb3IgZGVidWdcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyMlwiLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjNcIiwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXI0XCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxvYWRDaGFyQnRuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudU1vdXNlT24oKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hcHMub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hhcjFidG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXIxICE9ICBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuY2hhcjFidG4sIFwiY2hhcjFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoYXIyYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMiAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuY2hhcjJidG4sIFwiY2hhcjJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoYXIzYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMyAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuY2hhcjNidG4sIFwiY2hhcjNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoYXI0YnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyNCAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuY2hhcjRidG4sIFwiY2hhcjRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLkFLYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5BSyAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuQUtidG4sIFwiQUs0N1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuQVJidG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLkFSICE9IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eUl0ZW1HZW0odGhpcy5BUmJ0biwgXCJBUlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ3JlbmFkZWJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ3JlbmFkZSAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuZ3JlbmFkZWJ0biwgXCJncmVuYWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zaG90Z3VuYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5BUiAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuc2hvdGd1bmJ0biwgXCJzaG90Z3VuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zbmlwZXJidG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLnNuaXBlciAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuc25pcGVyYnRuLCBcInNuaXBlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlDbGlja0F1ZGlvKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNjZW5lKHNjZW5lOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDaGFyQnRuKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hhcjEgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMuY2hhcjFidG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNoYXIyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLmNoYXIyYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jaGFyMyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5jaGFyM2J0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY2hhcjQgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMuY2hhcjRidG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLkFLID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLkFLYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5BUiA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5BUmJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ3JlbmFkZSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5ncmVuYWRlYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zaG90Z3VuID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnNob3RndW5idG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNuaXBlciA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5zbmlwZXJidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2NrQnRuKGJ0bjogY2MuQnV0dG9uKSB7XHJcbiAgICAgICAgYnRuLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04pO1xyXG4gICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBidG4uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUHJpY2UoYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQcmljZShidG4pIHtcclxuICAgICAgICBidG4ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiU09MRFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1eUl0ZW1HZW0oYnRuLCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IHByaWNlID0gcGFyc2VJbnQoYnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIGxldCBjdXJyR2VtID0gcGFyc2VJbnQodGhpcy5nZW0uc3RyaW5nKTtcclxuICAgICAgICBpZihjdXJyR2VtID49IHByaWNlKSB7XHJcbiAgICAgICAgICAgIGxldCByZW1haW4gPSBjdXJyR2VtIC0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VtLnN0cmluZyA9IHJlbWFpbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnZW1cIiwgdGhpcy5nZW0uc3RyaW5nKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJTdGF0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=