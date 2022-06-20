
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
        this.schedule(this.spawnWeapon, 5);
        this.schedule(this.spawnPotion, 4);
        this.schedule(function () {
            _this.toSpawnWeaponNum = Math.floor(Math.random() * 5);
        }, 8);
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
                newWeapon = cc.instantiate(this.weaponPrefab3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBOEpDO1FBM0pXLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDOztJQTZIekMsQ0FBQztJQTNIRyxvQkFBTSxHQUFOO1FBQUEsaUJBaUNDO1FBaENHLElBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENB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T0FDYSxHQUFHLENBOEp2QjtJQUFELFVBQUM7Q0E5SkQsQUE4SkMsQ0E5SmdDLEVBQUUsQ0FBQyxTQUFTLEdBOEo1QztrQkE5Sm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZ3JvdW5kUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGdyb3VuZFVwcGVyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGZpcmVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgd2VhcG9uUHJlZmFiMDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSB3ZWFwb25QcmVmYWIxOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHdlYXBvblByZWZhYjI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgd2VhcG9uUHJlZmFiMzogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSB3ZWFwb25QcmVmYWI0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGhwUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ3JvdW5kUG9vbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdyb3VuZFBvb2wxID0gbnVsbDtcclxuICAgIHByaXZhdGUgZmlyZVBvb2wgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzcGF3bkNvb2xkb3duOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b1NwYXduV2VhcG9uTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZ3JvdW5kVXBwZXJQcmVmYWIpe1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZFBvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ0dyb3VuZCcpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxNDAwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZFBvb2wucHV0KGdyb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAvLyB5Lm1heCA9IC0yMjIuNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRQb29sID0gbmV3IGNjLk5vZGVQb29sKCdHcm91bmQnKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgKDE0MDAgLSAyMDApOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZFBvb2wucHV0KGdyb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZFBvb2wxID0gbmV3IGNjLk5vZGVQb29sKCdHcm91bmQxJyk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDIwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91bmRVcHBlclByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZFBvb2wxLnB1dChncm91bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ0ZpcmUnKTtcclxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAyMTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZmlyZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmlyZVByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVBvb2wucHV0KGZpcmUpO1xyXG4gICAgICAgICAgICAvLyB5Lm1heCA9IC0yMjIuNVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNwYXduV2VhcG9uLCA1KTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25Qb3Rpb24sIDQpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgdGhpcy50b1NwYXduV2VhcG9uTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcbiAgICAgICAgfSwgOClcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVGaXJlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZUdyb3VuZCgpIHtcclxuICAgICAgICBsZXQgZ3JvdW5kID0gbnVsbDtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaWYoIXRoaXMuZ3JvdW5kVXBwZXJQcmVmYWIpe1xyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLmdyb3VuZFBvb2wuc2l6ZSgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdW5kID0gdGhpcy5ncm91bmRQb29sLmdldCh0aGlzLmdyb3VuZFBvb2wpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdW5kLmdldENvbXBvbmVudCgnR3JvdW5kJykuaW5pdCh0aGlzLm5vZGUsIGkpO1xyXG4gICAgICAgICAgICAgICAgaSsrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgd2hpbGUodGhpcy5ncm91bmRQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VuZCA9IHRoaXMuZ3JvdW5kUG9vbC5nZXQodGhpcy5ncm91bmRQb29sKTtcclxuICAgICAgICAgICAgICAgIGdyb3VuZC5nZXRDb21wb25lbnQoJ0dyb3VuZCcpLmluaXQodGhpcy5ub2RlLCBpKTtcclxuICAgICAgICAgICAgICAgIGkrKzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3JvdW5kID0gbnVsbDtcclxuICAgICAgICAgICAgaSA9IDE0MDAtMjAwO1xyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLmdyb3VuZFBvb2wxLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VuZCA9IHRoaXMuZ3JvdW5kUG9vbDEuZ2V0KHRoaXMuZ3JvdW5kUG9vbDEpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdW5kLmdldENvbXBvbmVudCgnR3JvdW5kJykuaW5pdCh0aGlzLm5vZGUsIGkpO1xyXG4gICAgICAgICAgICAgICAgaSsrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGaXJlKCl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgZmlyZXMgPSBudWxsO1xyXG4gICAgICAgIHdoaWxlKHRoaXMuZmlyZVBvb2wuc2l6ZSgpID4gMCl7XHJcbiAgICAgICAgICAgIGZpcmVzID0gdGhpcy5maXJlUG9vbC5nZXQodGhpcy5maXJlUG9vbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaXJlcy5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzL2ZpcmVcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgZmlyZXMucG9zaXRpb24gPSBjYy52MigtNTk4ICsgKDE2ICogaW5kZXgpLCAtMzIwKTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaXJlcy5wb3NpdGlvbiA9IGZpcmVzLnBvc2l0aW9uLmFkZFNlbGYodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgZmlyZXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcImZpcmVcIik7XHJcbiAgICAgICAgICAgIC8vIGZpcmVzLm5vZGUuekluZGV4ID0gMTAwO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaXJlcy5wb3NpdGlvbi54LCBcImZpcmVcIik7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduV2VhcG9uKCl7XHJcbiAgICAgICAgbGV0IG5ld1dlYXBvbiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2MudjIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjIwMCkgLSAxNTAsIDM1MCk7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMudG9TcGF3bldlYXBvbk51bSl7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIG5ld1dlYXBvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2VhcG9uUHJlZmFiMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgbmV3V2VhcG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy53ZWFwb25QcmVmYWIxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBuZXdXZWFwb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndlYXBvblByZWZhYjIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIG5ld1dlYXBvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2VhcG9uUHJlZmFiMyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgbmV3V2VhcG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy53ZWFwb25QcmVmYWI0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbmV3V2VhcG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy53ZWFwb25QcmVmYWIzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobmV3V2VhcG9uKXtcclxuICAgICAgICAgICAgbmV3V2VhcG9uLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJPYmplY3RcIik7XHJcbiAgICAgICAgICAgIG5ld1dlYXBvbi5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduUG90aW9uKCl7XHJcbiAgICAgICAgbGV0IG5ld3BvdGlvbiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2MudjIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjIwMCkgLSAxNTAsIDM1MCk7XHJcbiAgICAgICAgbmV3cG90aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5ocFByZWZhYik7XHJcblxyXG4gICAgICAgIGlmKG5ld3BvdGlvbil7XHJcbiAgICAgICAgICAgIG5ld3BvdGlvbi5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiT2JqZWN0XCIpO1xyXG4gICAgICAgICAgICBuZXdwb3Rpb24uc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=