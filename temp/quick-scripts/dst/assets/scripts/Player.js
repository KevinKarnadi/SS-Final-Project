
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79d84uofUZJnoN7h0LOvIwJ', 'Player');
// scripts/Player.ts

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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpAudio = null;
        _this.dieAudio = null;
        _this.bulletPrefab = null;
        _this.bombPrefab = null;
        _this.line = null;
        _this.playerName = null;
        _this.moveSpeed = 300;
        _this.moveDirection = 0;
        _this.changeDirection = 0;
        _this.jumpVelocity = 2500;
        _this.jump = false;
        _this.isOnGround = false;
        _this.isDie = false;
        _this.isMove = false;
        _this.animation = null;
        _this.animationState = null;
        _this.rigidBody = null;
        _this.isDieBound = false;
        _this.win = false;
        _this.bulletPool = null;
        _this.shoot = false;
        _this.bombPool = null;
        _this.bomb = false;
        _this.angle = null;
        _this.maxHP = 100;
        _this.HP = 100;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.line = this.node.getChildByName("Trajectory Line");
        this.bulletPool = new cc.NodePool('Bullet');
        this.bombPool = new cc.NodePool('Bomb');
        var maxBulletNum = 5;
        var maxBombNum = 5;
        for (var i = 0; i < maxBulletNum; i++) {
            var bullet = cc.instantiate(this.bulletPrefab);
            this.bulletPool.put(bullet);
        }
        for (var i = 0; i < maxBombNum; i++) {
            var bomb = cc.instantiate(this.bombPrefab);
            this.bombPool.put(bomb);
        }
    };
    Player.prototype.start = function () {
    };
    Player.prototype.update = function (dt) {
        if (!this.win) {
            if (!this.isDie) {
                cc.find("Player Health/bar", this.node).width = (this.HP / this.maxHP) * 100;
                this.playerMove(dt);
                if (this.HP == 0) {
                    this.playerDie();
                }
                if (this.jump) {
                    this.playerJump();
                }
                if (this.shoot) {
                    this.createBullet();
                }
                if (this.bomb) {
                    this.createBomb();
                }
                this.playerAnimation();
            }
        }
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        if (contact.getWorldManifold().normal.y < 0) { // step on something
            this.isOnGround = true;
        }
        // if(other.tag == 1){     // on ground or props
        //     this.isOnGround = true;
        // }
        if (other.node.group == "bullet") {
            this.HP -= 10;
            if (this.node.name == 'Player 1' && this.HP != 0) {
                this.animationState = this.animation.play('char1hurt');
                this.scheduleOnce(function () {
                    this.animationState = this.animation.play('char1idle');
                }, 0.5);
            }
            else if (this.node.name == 'Player 2' && this.HP != 0) {
                this.animationState = this.animation.play('char2hurt');
                this.scheduleOnce(function () {
                    this.animationState = this.animation.play('char2idle');
                }, 0.5);
            }
            else if (this.node.name == 'Player 3' && this.HP != 0) {
                this.animationState = this.animation.play('char3hurt');
                this.scheduleOnce(function () {
                    this.animationState = this.animation.play('char3idle');
                }, 0.5);
            }
        }
    };
    Player.prototype.playerMove = function (dt) {
        this.node.x += this.moveSpeed * this.moveDirection * dt; // player walking
        this.isMove = (this.moveDirection != 0) ? true : false;
        if (this.moveDirection == 1 || this.changeDirection == 1) { // change direction using scaling
            this.node.scaleX = 1;
            this.playerName.scaleX = 1;
            cc.find("Player Health", this.node).scaleX = 1;
        }
        else if (this.moveDirection == -1 || this.changeDirection == -1) {
            this.node.scaleX = -1;
            this.playerName.scaleX = -1;
            cc.find("Player Health", this.node).scaleX = -1;
        }
    };
    Player.prototype.playerJump = function () {
        if (this.isOnGround) { // player is on ground
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity); // add jumping velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
            this.animationState = this.animation.play('char1jump');
        }
    };
    Player.prototype.createBullet = function () {
        this.shoot = false;
        var bullet = null;
        if (this.bulletPool.size() > 0)
            bullet = this.bulletPool.get(this.bulletPool);
        if (bullet != null) {
            bullet.getComponent('Bullet').init(this.node);
        }
    };
    Player.prototype.createBomb = function () {
        this.bomb = false;
        var bomb = null;
        if (this.bombPool.size() > 0)
            bomb = this.bombPool.get(this.bombPool);
        if (bomb != null) {
            bomb.getComponent('Bomb').setAngle(this.angle);
            bomb.getComponent('Bomb').init(this.node);
        }
    };
    Player.prototype.playerDie = function () {
        this.isDie = true;
        if (this.node.name == 'Player 1') {
            this.animation.stop('char1idle');
            this.animationState = this.animation.play('char1dead');
        }
        else if (this.node.name == 'Player 2') {
            this.animation.stop('char2idle');
            this.animationState = this.animation.play('char2dead');
        }
        else if (this.node.name == 'Player 3') {
            this.animation.stop('char3idle');
            this.animationState = this.animation.play('char3dead');
        }
        this.scheduleOnce(function () {
            this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        }, 1);
        cc.audioEngine.playEffect(this.dieAudio, false);
    };
    Player.prototype.playerAnimation = function () {
        if (!this.isDie) {
            if (this.isOnGround && this.animation.getAnimationState('char1jump').isPlaying) {
                this.animation.stop('char1jump');
                this.animationState = this.animation.play('char1idle');
            }
            if (this.isMove && !this.animation.getAnimationState('char1run').isPlaying && !this.animation.getAnimationState('char1jump').isPlaying) {
                this.animationState = this.animation.play('char1run');
            }
            if (this.animationState == null || (!this.isMove && this.isOnGround && !this.animation.getAnimationState('char1idle').isPlaying)) {
                this.animationState = this.animation.play('char1idle');
            }
        }
    };
    Player.prototype.setPlayerMoveDirection = function (dir) {
        this.moveDirection = dir;
    };
    Player.prototype.setPlayerChangeDirection = function (dir) {
        this.changeDirection = dir;
    };
    Player.prototype.setPlayerJump = function (val) {
        this.jump = val;
    };
    Player.prototype.setPlayerShoot = function () {
        this.shoot = true;
    };
    Player.prototype.setPlayerBomb = function (angle) {
        this.angle = angle;
        this.bomb = true;
    };
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "jumpAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "dieAudio", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bulletPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bombPrefab", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBZ1BDO1FBN09HLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFWCxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFFdEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLFNBQUcsR0FBWSxLQUFLLENBQUM7UUFFckIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFFdEIsV0FBSyxHQUFHLElBQUksQ0FBQztRQUViLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsUUFBRSxHQUFXLEdBQUcs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QUFDLElBQUksQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7aUJBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7aUJBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFD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QUFDO0lBQy9CLENBQUM7SUFFRCw4QkFBYSxHQUFiLFVBQWMsR0FBWTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0JBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw4QkFBYSxHQUFiLFVBQWMsS0FBSztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUE1T0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ2lCO0lBWnBCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FnUDFCO0lBQUQsYUFBQztDQWhQRCxBQWdQQyxDQWhQbUMsRUFBRSxDQUFDLFNBQVMsR0FnUC9DO2tCQWhQb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAganVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBkaWVBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBidWxsZXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgYm9tYlByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgbGluZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJOYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXBWZWxvY2l0eTogbnVtYmVyID0gMjUwMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzT25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzRGllOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGlvblN0YXRlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzRGllQm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHdpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYnVsbGV0UG9vbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYlBvb2wgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbWF4SFA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIEhQOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIgTmFtZVwiKTtcclxuICAgICAgICB0aGlzLmxpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUcmFqZWN0b3J5IExpbmVcIik7XHJcbiAgICAgICAgdGhpcy5idWxsZXRQb29sID0gbmV3IGNjLk5vZGVQb29sKCdCdWxsZXQnKTtcclxuICAgICAgICB0aGlzLmJvbWJQb29sID0gbmV3IGNjLk5vZGVQb29sKCdCb21iJyk7XHJcbiAgICAgICAgbGV0IG1heEJ1bGxldE51bSA9IDU7XHJcbiAgICAgICAgbGV0IG1heEJvbWJOdW0gPSA1O1xyXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1heEJ1bGxldE51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ1bGxldFBvb2wucHV0KGJ1bGxldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1heEJvbWJOdW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYm9tYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9tYlByZWZhYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJvbWJQb29sLnB1dChib21iKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMud2luKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRGllKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aC9iYXJcIiwgdGhpcy5ub2RlKS53aWR0aCA9ICh0aGlzLkhQIC8gdGhpcy5tYXhIUCkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoZHQpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5IUCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5qdW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJKdW1wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNob290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9tYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQm9tYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55IDwgMCkgeyAvLyBzdGVwIG9uIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmlzT25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihvdGhlci50YWcgPT0gMSl7ICAgICAvLyBvbiBncm91bmQgb3IgcHJvcHNcclxuICAgICAgICAvLyAgICAgdGhpcy5pc09uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSFAgLT0gMTA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSAnUGxheWVyIDEnICYmIHRoaXMuSFAgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFodXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWlkbGUnKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ1BsYXllciAyJyAmJiB0aGlzLkhQICE9IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIyaHVydCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjJpZGxlJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5uYW1lID09ICdQbGF5ZXIgMycgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyM2h1cnQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIzaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJNb3ZlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5tb3ZlU3BlZWQgKiB0aGlzLm1vdmVEaXJlY3Rpb24gKiBkdDsgICAgLy8gcGxheWVyIHdhbGtpbmdcclxuICAgICAgICB0aGlzLmlzTW92ZSA9ICh0aGlzLm1vdmVEaXJlY3Rpb24gIT0gMCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5tb3ZlRGlyZWN0aW9uID09IDEgfHwgdGhpcy5jaGFuZ2VEaXJlY3Rpb24gPT0gMSkgeyAgIC8vIGNoYW5nZSBkaXJlY3Rpb24gdXNpbmcgc2NhbGluZ1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJQbGF5ZXIgSGVhbHRoXCIsIHRoaXMubm9kZSkuc2NhbGVYID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5tb3ZlRGlyZWN0aW9uID09IC0xIHx8IHRoaXMuY2hhbmdlRGlyZWN0aW9uID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aFwiLCB0aGlzLm5vZGUpLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJKdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCkgeyAgLy8gcGxheWVyIGlzIG9uIGdyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIHRoaXMuanVtcFZlbG9jaXR5KTsgICAgLy8gYWRkIGp1bXBpbmcgdmVsb2NpdHlcclxuICAgICAgICAgICAgdGhpcy5pc09uR3JvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxanVtcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ1bGxldCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaG9vdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBidWxsZXQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1bGxldFBvb2wuc2l6ZSgpID4gMCkgXHJcbiAgICAgICAgICAgIGJ1bGxldCA9IHRoaXMuYnVsbGV0UG9vbC5nZXQodGhpcy5idWxsZXRQb29sKTtcclxuXHJcbiAgICAgICAgaWYoYnVsbGV0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0JykuaW5pdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJvbWIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYm9tYiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib21iID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5ib21iUG9vbC5zaXplKCkgPiAwKSBcclxuICAgICAgICAgICAgYm9tYiA9IHRoaXMuYm9tYlBvb2wuZ2V0KHRoaXMuYm9tYlBvb2wpO1xyXG5cclxuICAgICAgICBpZihib21iICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYm9tYi5nZXRDb21wb25lbnQoJ0JvbWInKS5zZXRBbmdsZSh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgYm9tYi5nZXRDb21wb25lbnQoJ0JvbWInKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckRpZSgpIHtcclxuICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ1BsYXllciAxJyl7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIxaWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5uYW1lID09ICdQbGF5ZXIgMicpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyMmlkbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIyZGVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUubmFtZSA9PSAnUGxheWVyIDMnKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjNpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyM2RlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGllQXVkaW8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJBbmltYXRpb24oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNEaWUpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMWp1bXAnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjFqdW1wJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFpZGxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFydW4nKS5pc1BsYXlpbmcgJiYgIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMWp1bXAnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxcnVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uU3RhdGUgPT0gbnVsbCB8fCAoIXRoaXMuaXNNb3ZlICYmIHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ2NoYXIxaWRsZScpLmlzUGxheWluZykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxaWRsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllck1vdmVEaXJlY3Rpb24oZGlyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24gPSBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVySnVtcCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmp1bXAgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyU2hvb3QoKSB7XHJcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQm9tYihhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLmJvbWIgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==