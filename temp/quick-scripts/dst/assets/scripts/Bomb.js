
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bomb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bd3b5m3MVAcJrOIV77Ddig', 'Bomb');
// scripts/Bomb.ts

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
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bombManager = null;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        _this.rigidBody = null;
        _this.shootAngle = null;
        _this.animation = null;
        _this.power = null;
        _this.scaleX = 1;
        _this.sfx_shoot = null;
        _this.sfx_bomb = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Bomb.prototype.init = function (node) {
        cc.audioEngine.playEffect(this.sfx_shoot, false);
        this.animation = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        this.setInitPos(node);
        this.animation.play('grenade');
        this.bulletMove();
    };
    // this function is called when the bullet manager calls "get" API.
    Bomb.prototype.reuse = function (bulletManager) {
        this.bombManager = bulletManager;
        this.isTriggered = false;
    };
    //this function sets the bullet's initial position when it is reused.
    Bomb.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 4);
            this.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-65, 4);
            this.scaleX = -1;
        }
        this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the bullet move from current position
    Bomb.prototype.bulletMove = function () {
        var moveDir = null;
        // decide bullet direction
        if (this.scaleX >= 0) {
            moveDir = 1;
        }
        else {
            moveDir = -1;
        }
        var speed = 10 * this.power;
        // this.rigidBody.applyForceToCenter(cc.v2(Math.sin(shootAngle) * x, Math.cos(shootAngle) * x), true);
        // this.rigidBody.linearVelocity = cc.v2(Math.sin(this.shootAngle) * x * moveDir, Math.cos(this.shootAngle) * x);
        // this.rigidBody.linearVelocity = cc.v2(speed * moveDir * Math.sin(this.shootAngle), Math.sinh(this.shootAngle) * speed);
        if (this.shootAngle >= 0) {
            this.rigidBody.linearVelocity = cc.v2(speed * moveDir * Math.cos(this.shootAngle), Math.sin(this.shootAngle) * speed);
        }
        else {
            speed *= 0.75;
            this.rigidBody.linearVelocity = cc.v2(speed * moveDir, Math.sinh(this.shootAngle) * speed);
        }
        this.rigidBody.angularVelocity = 200 * moveDir;
    };
    //detect collision
    Bomb.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        cc.audioEngine.playEffect(this.sfx_bomb, false);
        // console.log("sadadsfsfa");
        selfCollider.node.getComponent(cc.PhysicsBoxCollider).enabled = true;
        this.node.getComponent(cc.Animation).play("explosion2smaller");
        this.scheduleOnce(function () {
            _this.node.stopAllActions();
            _this.unscheduleAllCallbacks();
            _this.animation.stop();
            _this.bombManager.put(_this.node);
            // this.node.destroy();
        }, 0.1);
    };
    Bomb.prototype.setAnglePower = function (angle, power) {
        this.shootAngle = angle;
        this.power = power;
    };
    __decorate([
        property(cc.AudioClip)
    ], Bomb.prototype, "sfx_shoot", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bomb.prototype, "sfx_bomb", void 0);
    Bomb = __decorate([
        ccclass
    ], Bomb);
    return Bomb;
}(cc.Component));
exports.default = Bomb;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9tYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTRHQztRQTFHVyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVwQixpQkFBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLDBEQUEwRDtRQUU5RSxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUczQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQWlCLElBQUksQ0FBQzs7SUF3RmxDLENBQUM7SUF0RkcscUZBQXFGO0lBQzlFLG1CQUFJLEdBQVgsVUFBWSxJQUFhO1FBRXJCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENB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QVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLHVCQUF1QjtRQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLEtBQUssRUFBRSxLQUFLO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUExRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNPO0lBcEJiLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E0R3hCO0lBQUQsV0FBQztDQTVHRCxBQTRHQyxDQTVHaUMsRUFBRSxDQUFDLFNBQVMsR0E0RzdDO2tCQTVHb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9tYiBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgcHJpdmF0ZSBib21iTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGlzVHJpZ2dlcmVkID0gZmFsc2U7IC8vIEkgYWRkIHRoaXMgdG8gbWFrZSB0aGUgYnVsbGV0IGtpbGwgb25lIGVuZW15IGF0IGEgdGltZS5cclxuXHJcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNob290QW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcG93ZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2NhbGVYOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzZnhfc2hvb3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNmeF9ib21iOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIHdoZW4gY3JlYXRlZCwgdGhlIGJ1bGxldCBuZWVkIHRvIGJlIHBsYWNlZCBhdCBjb3JyZWN0IHBvc2l0aW9uIGFuZCBwbGF5IGFuaW1hdGlvbi5cclxuICAgIHB1YmxpYyBpbml0KG5vZGU6IGNjLk5vZGUpIFxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zZnhfc2hvb3QsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdFBvcyhub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgnZ3JlbmFkZScpO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0TW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGJ1bGxldCBtYW5hZ2VyIGNhbGxzIFwiZ2V0XCIgQVBJLlxyXG4gICAgcmV1c2UoYnVsbGV0TWFuYWdlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJvbWJNYW5hZ2VyID0gYnVsbGV0TWFuYWdlcjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBidWxsZXQncyBpbml0aWFsIHBvc2l0aW9uIHdoZW4gaXQgaXMgcmV1c2VkLlxyXG4gICAgcHJpdmF0ZSBzZXRJbml0UG9zKG5vZGU6IGNjLk5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG5vZGUucGFyZW50OyAvLyBkb24ndCBtb3VudCB1bmRlciB0aGUgcGxheWVyLCBvdGhlcndpc2UgaXQgd2lsbCBjaGFuZ2UgZGlyZWN0aW9uIHdoZW4gcGxheWVyIG1vdmVcclxuXHJcbiAgICAgICAgaWYobm9kZS5zY2FsZVggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMzUsIDQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2FsZVggPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygtNjUsIDQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2FsZVggPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZFNlbGYobm9kZS5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tYWtlIHRoZSBidWxsZXQgbW92ZSBmcm9tIGN1cnJlbnQgcG9zaXRpb25cclxuICAgIHByaXZhdGUgYnVsbGV0TW92ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1vdmVEaXIgPSBudWxsO1xyXG4gICAgICAgIC8vIGRlY2lkZSBidWxsZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgaWYodGhpcy5zY2FsZVggPj0gMCkge1xyXG4gICAgICAgICAgICBtb3ZlRGlyID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb3ZlRGlyID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzcGVlZCA9IDEwICogdGhpcy5wb3dlcjtcclxuICAgICAgICAvLyB0aGlzLnJpZ2lkQm9keS5hcHBseUZvcmNlVG9DZW50ZXIoY2MudjIoTWF0aC5zaW4oc2hvb3RBbmdsZSkgKiB4LCBNYXRoLmNvcyhzaG9vdEFuZ2xlKSAqIHgpLCB0cnVlKTtcclxuICAgICAgICAvLyB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKE1hdGguc2luKHRoaXMuc2hvb3RBbmdsZSkgKiB4ICogbW92ZURpciwgTWF0aC5jb3ModGhpcy5zaG9vdEFuZ2xlKSAqIHgpO1xyXG4gICAgICAgIC8vIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoc3BlZWQgKiBtb3ZlRGlyICogTWF0aC5zaW4odGhpcy5zaG9vdEFuZ2xlKSwgTWF0aC5zaW5oKHRoaXMuc2hvb3RBbmdsZSkgKiBzcGVlZCk7XHJcbiAgICAgICAgaWYodGhpcy5zaG9vdEFuZ2xlID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihzcGVlZCAqIG1vdmVEaXIgKiBNYXRoLmNvcyh0aGlzLnNob290QW5nbGUpLCBNYXRoLnNpbih0aGlzLnNob290QW5nbGUpICogc3BlZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwZWVkICo9IDAuNzU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoc3BlZWQgKiBtb3ZlRGlyLCBNYXRoLnNpbmgodGhpcy5zaG9vdEFuZ2xlKSAqIHNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMjAwICogbW92ZURpcjtcclxuICAgIH1cclxuICAgIHJcclxuICAgIC8vZGV0ZWN0IGNvbGxpc2lvblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNmeF9ib21iLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzYWRhZHNmc2ZhXCIpO1xyXG4gICAgICAgIHNlbGZDb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwbG9zaW9uMnNtYWxsZXJcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5ib21iTWFuYWdlci5wdXQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFuZ2xlUG93ZXIoYW5nbGUsIHBvd2VyKSB7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==