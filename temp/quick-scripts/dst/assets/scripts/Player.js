
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
        _this.playerChar = null;
        _this.aimLabel = null;
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
        _this.win = false;
        _this.shoot = false;
        _this.bombPool = null;
        _this.bomb = false;
        _this.angle = null;
        _this.power = null;
        _this.maxHP = 100;
        _this.HP = 100;
        _this.hurt = false;
        _this.weapon = "gun";
        _this.gunType = "shotgun";
        _this.currWeaponNum = "0";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.line = this.node.getChildByName("Trajectory Line");
        this.aimLabel = this.node.getChildByName("Aim Layout");
        ;
        this.setPlayerName();
        this.setPlayerChar();
        this.bombPool = new cc.NodePool('Bomb');
        var maxBombNum = 5;
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
                if (this.HP <= 0) {
                    this.playerDie();
                }
                else {
                    if (this.jump) {
                        this.playerJump();
                    }
                    if (this.shoot) {
                        this.createBullet(this.gunType);
                    }
                    else if (this.bomb) {
                        this.createBomb();
                    }
                    this.playerAnimation();
                }
            }
        }
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (contact.getWorldManifold().normal.y < 0) { // step on something
            this.isOnGround = true;
        }
        // if(other.tag == 1){     // on ground or props
        //     this.isOnGround = true;
        // }
        if (other.node.group == "bullet" || other.node.group == "explosiveObj" || other.node.group == "bomb") {
            if (!this.isDie) {
                this.HP -= 10;
                if (this.HP <= 0) {
                    this.HP = 0;
                }
                else {
                    this.hurt = true;
                    if (this.playerChar == "char1" && this.HP != 0) {
                        this.animationState = this.animation.play('char1hurt');
                    }
                    else if (this.playerChar == "char2" && this.HP != 0) {
                        this.animationState = this.animation.play('char2hurt');
                    }
                    else if (this.playerChar == "char3" && this.HP != 0) {
                        this.animationState = this.animation.play('char3hurt');
                    }
                    else if (this.playerChar == "char4" && this.HP != 0) {
                        this.animationState = this.animation.play('char4hurt');
                    }
                    this.scheduleOnce(function () {
                        _this.hurt = false;
                    }, 0.5);
                }
            }
        }
        else if (other.node.group == "wall") {
            if (other.node.name == "Die Boundary") {
                this.playerDie();
            }
        }
        if (other.node.group == "weaponObj") {
            this.currWeaponNum = other.node.getComponent("weaponObj").getWeaponType();
        }
    };
    Player.prototype.playerMove = function (dt) {
        this.node.x += this.moveSpeed * this.moveDirection * dt; // player walking
        this.isMove = (this.moveDirection != 0) ? true : false;
        if (this.moveDirection == 1 || this.changeDirection == 1) { // change direction using scaling
            this.node.scaleX = 1;
            this.playerName.scaleX = 1;
            cc.find("Player Health", this.node).scaleX = 1;
            if (this.aimLabel.active) {
                this.aimLabel.scaleX = 1;
            }
        }
        else if (this.moveDirection == -1 || this.changeDirection == -1) {
            this.node.scaleX = -1;
            this.playerName.scaleX = -1;
            cc.find("Player Health", this.node).scaleX = -1;
            if (this.aimLabel.active) {
                this.aimLabel.scaleX = -1;
            }
        }
    };
    Player.prototype.playerJump = function () {
        if (this.isOnGround) { // player is on ground
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity); // add jump velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
            this.animationState = this.animation.play('char1jump');
        }
    };
    Player.prototype.createBullet = function (mode) {
        this.shoot = false;
        if (mode == "normal") {
            var bullet = cc.instantiate(this.bulletPrefab);
            if (bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node);
            }
        }
        else if (mode == "burst") {
            this.schedule(function () {
                console.log("boom");
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle);
                    bullet.getComponent('Bullet').init(this.node);
                }
            }, 0.05, 2);
        }
        else if (mode == "shotgun") {
            var d_angle = -0.1;
            for (var i = 0; i < 3; i++) {
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle + d_angle);
                    bullet.getComponent('Bullet').init(this.node);
                    d_angle += 0.05;
                }
            }
        }
    };
    Player.prototype.createBomb = function () {
        this.bomb = false;
        var bomb = null;
        if (this.bombPool.size() > 0)
            bomb = this.bombPool.get(this.bombPool);
        if (bomb != null) {
            bomb.getComponent('Bomb').setAnglePower(this.angle, this.power);
            bomb.getComponent('Bomb').init(this.node);
        }
    };
    Player.prototype.playerDie = function () {
        this.isDie = true;
        if (this.playerChar == "char1") {
            this.animation.stop('char1idle');
            this.animationState = this.animation.play('char1dead');
        }
        else if (this.playerChar == "char2") {
            this.animation.stop('char2idle');
            this.animationState = this.animation.play('char2dead');
        }
        else if (this.playerChar == "char3") {
            this.animation.stop('char3idle');
            this.animationState = this.animation.play('char3dead');
        }
        else if (this.playerChar == "char4") {
            this.animation.stop('char4idle');
            this.animationState = this.animation.play('char4dead');
        }
        this.scheduleOnce(function () {
            this.node.destroy();
            // this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        }, 1);
        cc.audioEngine.playEffect(this.dieAudio, false);
    };
    Player.prototype.playerAnimation = function () {
        if (!this.isDie) { // animation for char1
            if (this.playerChar == "char1") { // MUST change to curPlayer == "Player 1"
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char1idle")) {
                    this.animationState = this.animation.play("char1idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char1run")) {
                    this.animationState = this.animation.play("char1run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char1jump")) {
                    this.animationState = this.animation.play("char1jump");
                }
                // if (this.isOnGround && this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animation.stop('char1jump');
                //     this.animationState = this.animation.play('char1idle');
                // }
                // if (this.isMove && !this.animation.getAnimationState('char1run').isPlaying && !this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animationState = this.animation.play('char1run');
                // }
                // if (this.animationState == null || (!this.isMove && this.isOnGround && !this.animation.getAnimationState('char1idle').isPlaying)){
                //     this.animationState = this.animation.play('char1idle');
                // }          
            }
            else if (this.playerChar == "char2") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char2idle")) {
                    this.animationState = this.animation.play("char2idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char2run")) {
                    this.animationState = this.animation.play("char2run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char2jump")) {
                    this.animationState = this.animation.play("char2jump");
                }
            }
            else if (this.playerChar == "char3") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char3idle")) {
                    this.animationState = this.animation.play("char3idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char3run")) {
                    this.animationState = this.animation.play("char3run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char3jump")) {
                    this.animationState = this.animation.play("char3jump");
                }
            }
            else if (this.playerChar == "char4") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char4idle")) {
                    this.animationState = this.animation.play("char4idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char4run")) {
                    this.animationState = this.animation.play("char4run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char4jump")) {
                    this.animationState = this.animation.play("char4jump");
                }
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
    Player.prototype.setPlayerShoot = function (angle) {
        this.angle = angle;
        this.shoot = true;
    };
    Player.prototype.setPlayerBomb = function (angle) {
        this.angle = angle;
        this.bomb = true;
    };
    Player.prototype.setPlayerName = function () {
        if (this.node.name == "Player 1") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 1 Name");
        }
        else if (this.node.name == "Player 2") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 2 Name");
        }
        else if (this.node.name == "Player 3") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 3 Name");
        }
        else if (this.node.name == "Player 4") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 4 Name");
        }
    };
    Player.prototype.setPlayerChar = function () {
        if (this.node.name == "Player 1") {
            this.playerChar = cc.sys.localStorage.getItem("Player 1 Char");
            this.playerChar = "char1";
        }
        else if (this.node.name == "Player 2") {
            this.playerChar = cc.sys.localStorage.getItem("Player 2 Char");
            this.playerChar = "char2";
            //console.log("aaa")
        }
        else if (this.node.name == "Player 3") {
            this.playerChar = cc.sys.localStorage.getItem("Player 3 Char");
            this.playerChar = "char3";
        }
        else if (this.node.name == "Player 4") {
            this.playerChar = cc.sys.localStorage.getItem("Player 4 Char");
            this.playerChar = "char4";
        }
    };
    Player.prototype.getCurrWeaponNum = function () {
        return this.currWeaponNum;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBb1dDO1FBaldHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFWixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVqQixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFFeEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXRCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsU0FBRyxHQUFZLEtBQUssQ0FBQztRQUVyQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBSyxHQUFXLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVcsR0FBRyxD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QUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsaUNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFoV0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ2lCO0lBWnBCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FvVzFCO0lBQUQsYUFBQztDQXBXRCxBQW9XQyxDQXBXbUMsRUFBRSxDQUFDLFNBQVMsR0FvVy9DO2tCQXBXb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAganVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBkaWVBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBidWxsZXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgYm9tYlByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgbGluZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllck5hbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyQ2hhcjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFpbUxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXBWZWxvY2l0eTogbnVtYmVyID0gMjUwMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzT25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaXNEaWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgd2luOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYlBvb2wgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcG93ZXI6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhIUDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIHByaXZhdGUgSFA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIGh1cnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgd2VhcG9uOiBzdHJpbmcgPSBcImd1blwiO1xyXG5cclxuICAgIHB1YmxpYyBndW5UeXBlOiBzdHJpbmcgPSBcInNob3RndW5cIjtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJXZWFwb25OdW06IHN0cmluZyA9IFwiMFwiO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyIE5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5saW5lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVHJhamVjdG9yeSBMaW5lXCIpO1xyXG4gICAgICAgIHRoaXMuYWltTGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJBaW0gTGF5b3V0XCIpOztcclxuICAgICAgICB0aGlzLnNldFBsYXllck5hbWUoKTtcclxuICAgICAgICB0aGlzLnNldFBsYXllckNoYXIoKTtcclxuICAgICAgICB0aGlzLmJvbWJQb29sID0gbmV3IGNjLk5vZGVQb29sKCdCb21iJyk7XHJcbiAgICAgICAgbGV0IG1heEJvbWJOdW0gPSA1O1xyXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1heEJvbWJOdW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYm9tYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9tYlByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuYm9tYlBvb2wucHV0KGJvbWIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighdGhpcy53aW4pIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNEaWUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJQbGF5ZXIgSGVhbHRoL2JhclwiLCB0aGlzLm5vZGUpLndpZHRoID0gKHRoaXMuSFAgLyB0aGlzLm1heEhQKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZShkdCk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLkhQIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRGllKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuanVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckp1bXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zaG9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCh0aGlzLmd1blR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmJvbWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb21iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSA8IDApIHsgLy8gc3RlcCBvbiBzb21ldGhpbmdcclxuICAgICAgICAgICAgdGhpcy5pc09uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYob3RoZXIudGFnID09IDEpeyAgICAgLy8gb24gZ3JvdW5kIG9yIHByb3BzXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNPbkdyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJidWxsZXRcIiB8fCBvdGhlci5ub2RlLmdyb3VwID09IFwiZXhwbG9zaXZlT2JqXCIgfHwgb3RoZXIubm9kZS5ncm91cCA9PSBcImJvbWJcIikge1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0RpZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5IUCAtPSAxMDtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuSFAgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSFAgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh1cnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMVwiICYmIHRoaXMuSFAgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWh1cnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjJcIiAmJiB0aGlzLkhQICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjJodXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIzXCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIzaHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyNFwiICYmIHRoaXMuSFAgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyNGh1cnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJ3YWxsXCIpIHtcclxuICAgICAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09IFwiRGllIEJvdW5kYXJ5XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyRGllKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJ3ZWFwb25PYmpcIil7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycldlYXBvbk51bSA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFwid2VhcG9uT2JqXCIpLmdldFdlYXBvblR5cGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyTW92ZShkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkICogdGhpcy5tb3ZlRGlyZWN0aW9uICogZHQ7ICAgIC8vIHBsYXllciB3YWxraW5nXHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSAodGhpcy5tb3ZlRGlyZWN0aW9uICE9IDApID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMubW92ZURpcmVjdGlvbiA9PSAxIHx8IHRoaXMuY2hhbmdlRGlyZWN0aW9uID09IDEpIHsgICAvLyBjaGFuZ2UgZGlyZWN0aW9uIHVzaW5nIHNjYWxpbmdcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aFwiLCB0aGlzLm5vZGUpLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWltTGFiZWwuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFpbUxhYmVsLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5tb3ZlRGlyZWN0aW9uID09IC0xIHx8IHRoaXMuY2hhbmdlRGlyZWN0aW9uID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aFwiLCB0aGlzLm5vZGUpLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICBpZih0aGlzLmFpbUxhYmVsLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1MYWJlbC5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJKdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCkgeyAgLy8gcGxheWVyIGlzIG9uIGdyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIHRoaXMuanVtcFZlbG9jaXR5KTsgICAgLy8gYWRkIGp1bXAgdmVsb2NpdHlcclxuICAgICAgICAgICAgdGhpcy5pc09uR3JvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxanVtcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ1bGxldChtb2RlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaG9vdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKG1vZGUgPT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xyXG4gICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0Jykuc2V0QW5nbGUodGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KCdCdWxsZXQnKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihtb2RlID09IFwiYnVyc3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib29tXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmKGJ1bGxldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0Jykuc2V0QW5nbGUodGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0JykuaW5pdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLjA1LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihtb2RlID09IFwic2hvdGd1blwiKSB7XHJcbiAgICAgICAgICAgIGxldCBkX2FuZ2xlID0gLTAuMTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmKGJ1bGxldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0Jykuc2V0QW5nbGUodGhpcy5hbmdsZSArIGRfYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBkX2FuZ2xlICs9IDAuMDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCb21iKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJvbWIgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYm9tYiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYlBvb2wuc2l6ZSgpID4gMCkgXHJcbiAgICAgICAgICAgIGJvbWIgPSB0aGlzLmJvbWJQb29sLmdldCh0aGlzLmJvbWJQb29sKTtcclxuXHJcbiAgICAgICAgaWYoYm9tYiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvbWIuZ2V0Q29tcG9uZW50KCdCb21iJykuc2V0QW5nbGVQb3dlcih0aGlzLmFuZ2xlLCB0aGlzLnBvd2VyKTtcclxuICAgICAgICAgICAgYm9tYi5nZXRDb21wb25lbnQoJ0JvbWInKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckRpZSgpIHtcclxuICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjFcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIxaWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIyXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyMmlkbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIyZGVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyM1wiKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjNpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyM2RlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjRcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXI0aWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjRkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRGllKXsgICAgLy8gYW5pbWF0aW9uIGZvciBjaGFyMVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMVwiKSB7ICAvLyBNVVNUIGNoYW5nZSB0byBjdXJQbGF5ZXIgPT0gXCJQbGF5ZXIgMVwiXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIxaWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjFydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIxcnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIxanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFqdW1wJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyMWp1bXAnKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFpZGxlJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc01vdmUgJiYgIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMXJ1bicpLmlzUGxheWluZyAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ2NoYXIxanVtcCcpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxcnVuJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5hbmltYXRpb25TdGF0ZSA9PSBudWxsIHx8ICghdGhpcy5pc01vdmUgJiYgdGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFpZGxlJykuaXNQbGF5aW5nKSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIyXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5pc01vdmUgJiYgIXRoaXMuaHVydCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMmlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuaXNNb3ZlICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMnJ1blwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjJydW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXRoaXMuaXNPbkdyb3VuZCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMmp1bXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyM1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIzaWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjNpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzcnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIzanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjNqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBlbHNlIGlmKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5pc01vdmUgJiYgIXRoaXMuaHVydCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjRpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNGlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuaXNNb3ZlICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyNHJ1blwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjRydW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXRoaXMuaXNPbkdyb3VuZCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjRqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNGp1bXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyTW92ZURpcmVjdGlvbihkaXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IGRpcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oZGlyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbiA9IGRpcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJKdW1wKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuanVtcCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJTaG9vdChhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLnNob290ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJCb21iKGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgIHRoaXMuYm9tYiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyTmFtZSgpIHtcclxuICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDEgTmFtZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAyIE5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMyBOYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciA0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDQgTmFtZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQ2hhcigpIHtcclxuICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDEgQ2hhclwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyMVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDIgQ2hhclwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyMlwiO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWFhXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMyBDaGFyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBcImNoYXIzXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgNCBDaGFyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBcImNoYXI0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJXZWFwb25OdW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyV2VhcG9uTnVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==