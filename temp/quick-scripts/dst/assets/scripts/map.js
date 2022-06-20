
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/map.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.groundUpperPrefab = null;
        _this.firePrefab = null;
        _this.weaponPrefab0 = null;
        _this.weaponPrefab1 = null;
        _this.weaponPrefab2 = null;
        _this.weaponPrefab3 = null;
        _this.weaponPrefab4 = null;
        _this.hpPrefab = null;
        _this.groundPool = null;
        _this.groundPool1 = null;
        _this.firePool = null;
        _this.spawnCooldown = 0;
        _this.toSpawnWeaponNum = 0;
        _this.weaponState = [true, false, false, false, false];
        return _this;
    }
    Map.prototype.onLoad = function () {
        var _this = this;
        if (!this.groundUpperPrefab) {
            this.groundPool = new cc.NodePool('Ground');
            for (var i = 0; i < 1400; i++) {
                var ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
                // y.max = -222.5
            }
        }
        else {
            this.groundPool = new cc.NodePool('Ground');
            for (var i = 0; i < (1400 - 200); i++) {
                var ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
            }
            this.groundPool1 = new cc.NodePool('Ground1');
            for (var i = 0; i < 200; i++) {
                var ground = cc.instantiate(this.groundUpperPrefab);
                this.groundPool1.put(ground);
            }
        }
        this.firePool = new cc.NodePool('Fire');
        for (var i = 0; i < 210; i++) {
            var fire = cc.instantiate(this.firePrefab);
            this.firePool.put(fire);
            // y.max = -222.5
        }
        this.schedule(this.spawnWeapon, 10);
        this.schedule(this.spawnPotion, 12);
        this.schedule(function () {
            _this.toSpawnWeaponNum = Math.floor(Math.random() * 5);
        }, 8);
        // cc.sys.localStorage.setItem("AK47", AK47);
        // cc.sys.localStorage.setItem("AR", AR);
        // cc.sys.localStorage.setItem("grenade", grenade);
        // cc.sys.localStorage.setItem("shotgun", shotgun);
        // cc.sys.localStorage.setItem("sniper", sniper);
        // this.weaponState[0] = cc.sys.localStorage.getItem("AK47") ? (cc.sys.localStorage.getItem("AK47") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("AR") ? (cc.sys.localStorage.getItem("AR") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("grenade") ? (cc.sys.localStorage.getItem("grenade") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("shotgun") ? (cc.sys.localStorage.getItem("shotgun") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("sniper") ? (cc.sys.localStorage.getItem("sniper") == 'true' ? true : false) : false;
        this.weaponState[0] = cc.sys.localStorage.getItem("AK47") ? (cc.sys.localStorage.getItem("AK47") == 'true' ? true : false) : false;
        this.weaponState[1] = cc.sys.localStorage.getItem("AR") ? (cc.sys.localStorage.getItem("AR") == 'true' ? true : false) : false;
        this.weaponState[2] = cc.sys.localStorage.getItem("grenade") ? (cc.sys.localStorage.getItem("grenade") == 'true' ? true : false) : false;
        this.weaponState[3] = cc.sys.localStorage.getItem("shotgun") ? (cc.sys.localStorage.getItem("shotgun") == 'true' ? true : false) : false;
        this.weaponState[4] = cc.sys.localStorage.getItem("sniper") ? (cc.sys.localStorage.getItem("sniper") == 'true' ? true : false) : false;
        // this.weaponState[1] = cc.sys.localStorage.getItem("AR");
        // this.weaponState[2] = cc.sys.localStorage.getItem("grenade");
        // this.weaponState[3] = cc.sys.localStorage.getItem("shotgun");
        // this.weaponState[4] = cc.sys.localStorage.getItem("sniper");
        // for(let i=0; i<5; i++){
        //     if(!this.weaponState[i]){
        //         this.weaponState[i] = false;
        //     } else{
        //         this.weaponState[i] = true;
        //     }
        // }
        // console.log(this.weaponState, "load");
        // console.log(cc.sys.localStorage.getItem("AK47"), cc.sys.localStorage.getItem("AR"), cc.sys.localStorage.getItem("grenade"), cc.sys.localStorage.getItem("shotgun"), cc.sys.localStorage.getItem("sniper"));
    };
    Map.prototype.start = function () {
        this.createGround();
        this.createFire();
    };
    Map.prototype.createGround = function () {
        var ground = null;
        var i = 0;
        if (!this.groundUpperPrefab) {
            while (this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++;
            }
        }
        else {
            while (this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++;
            }
            ground = null;
            i = 1400 - 200;
            while (this.groundPool1.size() > 0) {
                ground = this.groundPool1.get(this.groundPool1);
                ground.getComponent('Ground').init(this.node, i);
                i++;
            }
        }
    };
    Map.prototype.createFire = function () {
        var index = 0;
        var fires = null;
        while (this.firePool.size() > 0) {
            fires = this.firePool.get(this.firePool);
            fires.parent = cc.find("Canvas/fire");
            fires.position = cc.v2(-598 + (16 * index), -320);
            fires.position = fires.position.addSelf(this.node.position);
            fires.getComponent(cc.Animation).play("fire");
            // fires.node.zIndex = 100;
            // console.log(fires.position.x, "fire");
            index++;
        }
    };
    Map.prototype.spawnWeapon = function () {
        var newWeapon = null;
        var position = cc.v2(Math.floor(Math.random() * 2200) - 150, 350);
        for (var i = 0; i < 5; i++) {
            if (this.weaponState[this.toSpawnWeaponNum]) {
                break;
            }
            else {
                this.toSpawnWeaponNum++;
                this.toSpawnWeaponNum %= 5;
            }
            // console.log(this.toSpawnWeaponNum, "spawn");
        }
        switch (this.toSpawnWeaponNum) {
            case 0:
                newWeapon = cc.instantiate(this.weaponPrefab0);
                break;
            case 1:
                newWeapon = cc.instantiate(this.weaponPrefab1);
                break;
            case 2:
                newWeapon = cc.instantiate(this.weaponPrefab2);
                break;
            case 3:
                newWeapon = cc.instantiate(this.weaponPrefab3);
                break;
            case 4:
                newWeapon = cc.instantiate(this.weaponPrefab4);
                break;
            default:
                newWeapon = cc.instantiate(this.weaponPrefab0);
                break;
        }
        if (newWeapon) {
            newWeapon.parent = this.node.parent.getChildByName("Object");
            newWeapon.setPosition(position);
        }
    };
    Map.prototype.spawnPotion = function () {
        var newpotion = null;
        var position = cc.v2(Math.floor(Math.random() * 2200) - 150, 350);
        newpotion = cc.instantiate(this.hpPrefab);
        if (newpotion) {
            newpotion.parent = this.node.parent.getChildByName("Object");
            newpotion.setPosition(position);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "groundPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "groundUpperPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "firePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "weaponPrefab0", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "weaponPrefab1", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "weaponPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "weaponPrefab3", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "weaponPrefab4", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "hpPrefab", void 0);
    Map = __decorate([
        ccclass
    ], Map);
    return Map;
}(cc.Component));
exports.default = Map;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBb01DO1FBak1XLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGlCQUFXLEdBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBa0t4RSxDQUFDO0lBaEtHLG9CQUFNLEdBQU47UUFBQSxpQkE2REM7UUE1REcsSUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLE1B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bEIsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQW9NdkI7SUFBRCxVQUFDO0NBcE1ELEFBb01DLENBcE1nQyxFQUFFLENBQUMsU0FBUyxHQW9NNUM7a0JBcE1vQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGdyb3VuZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBncm91bmRVcHBlclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBmaXJlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHdlYXBvblByZWZhYjA6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgd2VhcG9uUHJlZmFiMTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSB3ZWFwb25QcmVmYWIyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHdlYXBvblByZWZhYjM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgd2VhcG9uUHJlZmFiNDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBocFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdyb3VuZFBvb2wgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBncm91bmRQb29sMSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGZpcmVQb29sID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3Bhd25Db29sZG93bjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdG9TcGF3bldlYXBvbk51bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2VhcG9uU3RhdGU6IGJvb2xlYW5bXSA9IFt0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBpZighdGhpcy5ncm91bmRVcHBlclByZWZhYil7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnR3JvdW5kJyk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDE0MDA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kUG9vbC5wdXQoZ3JvdW5kKTtcclxuICAgICAgICAgICAgICAgIC8vIHkubWF4ID0gLTIyMi41XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZFBvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ0dyb3VuZCcpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAoMTQwMCAtIDIwMCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kUG9vbC5wdXQoZ3JvdW5kKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kUG9vbDEgPSBuZXcgY2MuTm9kZVBvb2woJ0dyb3VuZDEnKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMjAwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFVwcGVyUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kUG9vbDEucHV0KGdyb3VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnRmlyZScpO1xyXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDIxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5maXJlUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5maXJlUG9vbC5wdXQoZmlyZSk7XHJcbiAgICAgICAgICAgIC8vIHkubWF4ID0gLTIyMi41XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25XZWFwb24sIDEwKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25Qb3Rpb24sIDEyKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMudG9TcGF3bldlYXBvbk51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xyXG4gICAgICAgIH0sIDgpXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQUs0N1wiLCBBSzQ3KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBUlwiLCBBUik7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3JlbmFkZVwiLCBncmVuYWRlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG90Z3VuXCIsIHNob3RndW4pO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNuaXBlclwiLCBzbmlwZXIpO1xyXG4gICAgICAgIC8vIHRoaXMud2VhcG9uU3RhdGVbMF0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBSzQ3XCIpID8gKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFLNDdcIikgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMud2VhcG9uU3RhdGVbMF0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBUlwiKSA/IChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBUlwiKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy53ZWFwb25TdGF0ZVswXSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdyZW5hZGVcIikgPyAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3JlbmFkZVwiKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy53ZWFwb25TdGF0ZVswXSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3RndW5cIikgPyAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvdGd1blwiKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy53ZWFwb25TdGF0ZVswXSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNuaXBlclwiKSA/IChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbmlwZXJcIikgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMud2VhcG9uU3RhdGVbMF0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBSzQ3XCIpID8gKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFLNDdcIikgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMud2VhcG9uU3RhdGVbMV0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBUlwiKSA/IChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBUlwiKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy53ZWFwb25TdGF0ZVsyXSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdyZW5hZGVcIikgPyAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3JlbmFkZVwiKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy53ZWFwb25TdGF0ZVszXSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3RndW5cIikgPyAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvdGd1blwiKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy53ZWFwb25TdGF0ZVs0XSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNuaXBlclwiKSA/IChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbmlwZXJcIikgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMud2VhcG9uU3RhdGVbMV0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBUlwiKTtcclxuICAgICAgICAvLyB0aGlzLndlYXBvblN0YXRlWzJdID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3JlbmFkZVwiKTtcclxuICAgICAgICAvLyB0aGlzLndlYXBvblN0YXRlWzNdID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvdGd1blwiKTtcclxuICAgICAgICAvLyB0aGlzLndlYXBvblN0YXRlWzRdID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic25pcGVyXCIpO1xyXG4gICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPDU7IGkrKyl7XHJcbiAgICAgICAgLy8gICAgIGlmKCF0aGlzLndlYXBvblN0YXRlW2ldKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMud2VhcG9uU3RhdGVbaV0gPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfSBlbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy53ZWFwb25TdGF0ZVtpXSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53ZWFwb25TdGF0ZSwgXCJsb2FkXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFLNDdcIiksIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFSXCIpLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJncmVuYWRlXCIpLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG90Z3VuXCIpLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbmlwZXJcIikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcm91bmQoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUZpcmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlR3JvdW5kKCkge1xyXG4gICAgICAgIGxldCBncm91bmQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBpZighdGhpcy5ncm91bmRVcHBlclByZWZhYil7XHJcbiAgICAgICAgICAgIHdoaWxlKHRoaXMuZ3JvdW5kUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBncm91bmQgPSB0aGlzLmdyb3VuZFBvb2wuZ2V0KHRoaXMuZ3JvdW5kUG9vbCk7XHJcbiAgICAgICAgICAgICAgICBncm91bmQuZ2V0Q29tcG9uZW50KCdHcm91bmQnKS5pbml0KHRoaXMubm9kZSwgaSk7XHJcbiAgICAgICAgICAgICAgICBpKys7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLmdyb3VuZFBvb2wuc2l6ZSgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdW5kID0gdGhpcy5ncm91bmRQb29sLmdldCh0aGlzLmdyb3VuZFBvb2wpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdW5kLmdldENvbXBvbmVudCgnR3JvdW5kJykuaW5pdCh0aGlzLm5vZGUsIGkpO1xyXG4gICAgICAgICAgICAgICAgaSsrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncm91bmQgPSBudWxsO1xyXG4gICAgICAgICAgICBpID0gMTQwMC0yMDA7XHJcbiAgICAgICAgICAgIHdoaWxlKHRoaXMuZ3JvdW5kUG9vbDEuc2l6ZSgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdW5kID0gdGhpcy5ncm91bmRQb29sMS5nZXQodGhpcy5ncm91bmRQb29sMSk7XHJcbiAgICAgICAgICAgICAgICBncm91bmQuZ2V0Q29tcG9uZW50KCdHcm91bmQnKS5pbml0KHRoaXMubm9kZSwgaSk7XHJcbiAgICAgICAgICAgICAgICBpKys7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpcmUoKXtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBmaXJlcyA9IG51bGw7XHJcbiAgICAgICAgd2hpbGUodGhpcy5maXJlUG9vbC5zaXplKCkgPiAwKXtcclxuICAgICAgICAgICAgZmlyZXMgPSB0aGlzLmZpcmVQb29sLmdldCh0aGlzLmZpcmVQb29sKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpcmVzLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXMvZmlyZVwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICBmaXJlcy5wb3NpdGlvbiA9IGNjLnYyKC01OTggKyAoMTYgKiBpbmRleCksIC0zMjApOyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpcmVzLnBvc2l0aW9uID0gZmlyZXMucG9zaXRpb24uYWRkU2VsZih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBmaXJlcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZmlyZVwiKTtcclxuICAgICAgICAgICAgLy8gZmlyZXMubm9kZS56SW5kZXggPSAxMDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpcmVzLnBvc2l0aW9uLngsIFwiZmlyZVwiKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25XZWFwb24oKXtcclxuICAgICAgICBsZXQgbmV3V2VhcG9uID0gbnVsbDtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBjYy52MihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMjAwKSAtIDE1MCwgMzUwKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTw1OyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLndlYXBvblN0YXRlW3RoaXMudG9TcGF3bldlYXBvbk51bV0pe1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9TcGF3bldlYXBvbk51bSsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b1NwYXduV2VhcG9uTnVtICU9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b1NwYXduV2VhcG9uTnVtLCBcInNwYXduXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2godGhpcy50b1NwYXduV2VhcG9uTnVtKXtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgbmV3V2VhcG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy53ZWFwb25QcmVmYWIwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBuZXdXZWFwb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndlYXBvblByZWZhYjEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIG5ld1dlYXBvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2VhcG9uUHJlZmFiMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgbmV3V2VhcG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy53ZWFwb25QcmVmYWIzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBuZXdXZWFwb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndlYXBvblByZWZhYjQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBuZXdXZWFwb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndlYXBvblByZWZhYjApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihuZXdXZWFwb24pe1xyXG4gICAgICAgICAgICBuZXdXZWFwb24ucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIk9iamVjdFwiKTtcclxuICAgICAgICAgICAgbmV3V2VhcG9uLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25Qb3Rpb24oKXtcclxuICAgICAgICBsZXQgbmV3cG90aW9uID0gbnVsbDtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBjYy52MihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMjAwKSAtIDE1MCwgMzUwKTtcclxuICAgICAgICBuZXdwb3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhwUHJlZmFiKTtcclxuXHJcbiAgICAgICAgaWYobmV3cG90aW9uKXtcclxuICAgICAgICAgICAgbmV3cG90aW9uLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJPYmplY3RcIik7XHJcbiAgICAgICAgICAgIG5ld3BvdGlvbi5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==