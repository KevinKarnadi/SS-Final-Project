
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
        _this.damageParc = null;
        _this.damageEffAnim = null;
        _this.line = null;
        _this.playerName = null;
        _this.playerNumber = null;
        _this.playerChar = null;
        _this.aimLabel = null;
        _this.totalPlayer = null;
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
        _this.gunType = "normal";
        _this.currWeaponNum = "0";
        _this.aim = false;
        _this.skill = "none";
        _this.speedVec = 1;
        _this.hpVec = 0;
        _this.sfx_hit = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.playerNumber = this.node.getChildByName("Player Number");
        this.line = this.node.getChildByName("Trajectory Line");
        this.aimLabel = this.node.getChildByName("Aim Bomb Layout");
        this.setPlayerName();
        // this.setPlayerNumber();
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
                cc.audioEngine.playEffect(this.sfx_hit, false);
                console.log(this.HP, "before");
                this.HP -= (other.node.group == "explosiveObj") ? this.changeHp(25) : this.changeHp(10);
                this.HP += (7 * this.hpVec);
                console.log(this.HP, "after");
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
                if (other.node.group == "bullet") {
                    var particleEff_1 = cc.instantiate(this.damageParc);
                    particleEff_1.parent = cc.director.getScene();
                    particleEff_1.setPosition(other.node.getPosition().addSelf(cc.v2(480, 320)));
                    this.scheduleOnce(function () {
                        particleEff_1.destroy();
                    }, 0.6);
                }
                if (other.node.group == "bomb") {
                    var particleEff_2 = cc.instantiate(this.damageEffAnim);
                    particleEff_2.parent = cc.director.getScene();
                    particleEff_2.setPosition(other.node.getPosition().addSelf(cc.v2(480, 320)));
                    this.scheduleOnce(function () {
                        particleEff_2.destroy();
                    }, 0.4);
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
            switch (this.currWeaponNum) {
                case "0":
                    this.weapon = "gun";
                    this.gunType = "normal";
                    break;
                case "1":
                    this.weapon = "gun";
                    this.gunType = "burst";
                    break;
                case "2":
                    this.weapon = "bomb";
                    break;
                case "3":
                    this.weapon = "gun";
                    this.gunType = "shotgun";
                    break;
                case "4":
                    this.weapon = "gun";
                    this.gunType = "sniper";
                    break;
                default:
                    break;
            }
        }
        if (other.node.group == "itemObj") {
            this.HP += 30;
            if (this.HP > 100) {
                this.HP = 100;
            }
        }
    };
    Player.prototype.playerMove = function (dt) {
        this.node.x += this.moveSpeed * this.speedVec * this.moveDirection * dt; // player walking
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
        var _this = this;
        this.shoot = false;
        this.scheduleOnce(function () {
            _this.aim = false;
        }, 0.5);
        if (mode == "normal") {
            var bullet = cc.instantiate(this.bulletPrefab);
            if (bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node, 1000);
            }
        }
        else if (mode == "burst") {
            this.schedule(function () {
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle);
                    bullet.getComponent('Bullet').init(this.node, 1000);
                }
            }, 0.05, 2);
        }
        else if (mode == "shotgun") {
            var d_angle = -0.1;
            for (var i = 0; i < 3; i++) {
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle + d_angle);
                    bullet.getComponent('Bullet').init(this.node, 1000);
                    d_angle += 0.05;
                }
            }
        }
        else if (mode == "sniper") {
            var bullet = cc.instantiate(this.bulletPrefab);
            if (bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node, 2000);
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
        cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 10000);
        cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("gem", 50);
        cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 500);
        cc.audioEngine.playEffect(this.dieAudio, false);
        cc.find("Canvas/Game Manager").getComponent("GameManager").playerDie();
    };
    Player.prototype.playerAnimation = function () {
        if (!this.isDie) { // animation for char1
            if (this.playerChar == "char1") { // MUST change to curPlayer == "Player 1"
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char1idle")) {
                    this.animationState = this.animation.play("char1idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char1aim")) {
                    this.animationState = this.animation.play("char1aim");
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
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char2idle")) {
                    this.animationState = this.animation.play("char2idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char2aim")) {
                    this.animationState = this.animation.play("char2aim");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char2run")) {
                    this.animationState = this.animation.play("char2run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char2jump")) {
                    this.animationState = this.animation.play("char2jump");
                }
            }
            else if (this.playerChar == "char3") {
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char3idle")) {
                    this.animationState = this.animation.play("char3idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char3aim")) {
                    this.animationState = this.animation.play("char3aim");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char3run")) {
                    this.animationState = this.animation.play("char3run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char3jump")) {
                    this.animationState = this.animation.play("char3jump");
                }
            }
            else if (this.playerChar == "char4") {
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char4idle")) {
                    this.animationState = this.animation.play("char4idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char4aim")) {
                    this.animationState = this.animation.play("char4aim");
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
    // setPlayerNumber() {
    //     if(this.node.name == "Player Number - 2") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("2 Players");
    //     } else if(this.node.name == "Player Number - 3") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("3 Players");
    //     } else if(this.node.name == "Player Number - 4") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("4 Players");
    //     } else if(this.node.name == "Player Number - team") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("Team Players");
    //     }
    // }
    Player.prototype.setTotalPlayer = function () {
        if (this.node.name == "Player Number - 2") {
            this.totalPlayer = cc.sys.localStorage.getItem("Total Player - 2");
            this.totalPlayer = "num2";
        }
        else if (this.node.name == "Player Number - 3") {
            this.totalPlayer = cc.sys.localStorage.getItem("Total Player - 3");
            this.totalPlayer = "num3";
        }
        else if (this.node.name == "Player Number - 4") {
            this.totalPlayer = cc.sys.localStorage.getItem("Total Player - 4");
            this.totalPlayer = "num4";
        }
        else if (this.node.name == "Player Number - team") {
            this.totalPlayer = cc.sys.localStorage.getItem("Total Player - team");
            this.totalPlayer = "numteam";
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
            this.playerChar = "char1";
        }
        else if (this.node.name == "Player 3") {
            this.playerChar = cc.sys.localStorage.getItem("Player 3 Char");
            this.playerChar = "char3";
            this.playerChar = "char1";
        }
        else if (this.node.name == "Player 4") {
            this.playerChar = cc.sys.localStorage.getItem("Player 4 Char");
            this.playerChar = "char4";
            this.playerChar = "char1";
        }
        this.setSkill(this.playerChar);
    };
    Player.prototype.getCurrWeaponNum = function () {
        return this.currWeaponNum;
    };
    Player.prototype.setSkill = function (charNum) {
        switch (charNum) {
            case "char1":
                this.skill = "none";
                break;
            case "char2":
                this.skill = "speed";
                this.speedVec = 1.5;
                break;
            case "char3":
                this.skill = "health";
                this.hpVec = 1;
                break;
            case "char4":
                this.skill = "damage";
                break;
            default:
                this.skill = "none";
                break;
        }
    };
    Player.prototype.changeHp = function (value) {
        var currPlayer = cc.find("Canvas/Game Manager").getComponent("GameManager").getCurrPlayer();
        var damageGet = value;
        if (currPlayer == 3 && value != 25) {
            damageGet += 10;
        }
        return damageGet;
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
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "damageParc", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "damageEffAnim", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "sfx_hit", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBa2dCQztRQS9mRyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUd0QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUdyQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFakIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUVoQixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFFdEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFN0IsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV0QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFNBQUcsR0FBWSxLQUFLLENBQUM7UUFFckIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixjQUFRLEdBQUcs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LENBQUMsU0FBUyxHQWtnQi9DO2tCQWxnQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGp1bXBBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZGllQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgYnVsbGV0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGJvbWJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRhbWFnZVBhcmM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRhbWFnZUVmZkFuaW06IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGxpbmUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJOYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllck51bWJlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJDaGFyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYWltTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxQbGF5ZXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICBwcml2YXRlIG1vdmVEaXJlY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEaXJlY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlciA9IDI1MDA7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc09uR3JvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGlzRGllOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGlvblN0YXRlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHdpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGJvbWJQb29sID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJvbWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuZ2xlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBvd2VyOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbWF4SFA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIEhQOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBodXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHdlYXBvbjogc3RyaW5nID0gXCJndW5cIjtcclxuXHJcbiAgICBwdWJsaWMgZ3VuVHlwZTogc3RyaW5nID0gXCJub3JtYWxcIjtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJXZWFwb25OdW06IHN0cmluZyA9IFwiMFwiO1xyXG5cclxuICAgIHByaXZhdGUgYWltOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbDogc3RyaW5nID0gXCJub25lXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzcGVlZFZlYzogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwcml2YXRlIGhwVmVjOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzZnhfaGl0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyIE5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW1iZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIgTnVtYmVyXCIpO1xyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRyYWplY3RvcnkgTGluZVwiKTtcclxuICAgICAgICB0aGlzLmFpbUxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQWltIEJvbWIgTGF5b3V0XCIpO1xyXG4gICAgICAgIHRoaXMuc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0UGxheWVyTnVtYmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJDaGFyKCk7XHJcbiAgICAgICAgdGhpcy5ib21iUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnQm9tYicpO1xyXG4gICAgICAgIGxldCBtYXhCb21iTnVtID0gNTtcclxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXhCb21iTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJvbWIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvbWJQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib21iUG9vbC5wdXQoYm9tYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLndpbikge1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0RpZSkge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGgvYmFyXCIsIHRoaXMubm9kZSkud2lkdGggPSAodGhpcy5IUCAvIHRoaXMubWF4SFApICogMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKGR0KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuSFAgPD0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5qdW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVySnVtcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNob290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KHRoaXMuZ3VuVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYm9tYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJvbWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55IDwgMCkgeyAvLyBzdGVwIG9uIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmlzT25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihvdGhlci50YWcgPT0gMSl7ICAgICAvLyBvbiBncm91bmQgb3IgcHJvcHNcclxuICAgICAgICAvLyAgICAgdGhpcy5pc09uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJleHBsb3NpdmVPYmpcIiB8fCBvdGhlci5ub2RlLmdyb3VwID09IFwiYm9tYlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRGllKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2Z4X2hpdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5IUCwgXCJiZWZvcmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhQIC09IChvdGhlci5ub2RlLmdyb3VwID09IFwiZXhwbG9zaXZlT2JqXCIpID8gdGhpcy5jaGFuZ2VIcCgyNSkgOiB0aGlzLmNoYW5nZUhwKDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSFAgKz0gKDcqdGhpcy5ocFZlYyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkhQLCBcImFmdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5IUCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IUCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIxXCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxaHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMlwiICYmIHRoaXMuSFAgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMmh1cnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjNcIiAmJiB0aGlzLkhQICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjNodXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXI0aHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh1cnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYnVsbGV0XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0aWNsZUVmZiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGFtYWdlUGFyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVFZmYucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZUVmZi5zZXRQb3NpdGlvbihvdGhlci5ub2RlLmdldFBvc2l0aW9uKCkuYWRkU2VsZihjYy52Mig0ODAsIDMyMCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZUVmZi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYm9tYlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFydGljbGVFZmYgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRhbWFnZUVmZkFuaW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlRWZmLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVFZmYuc2V0UG9zaXRpb24ob3RoZXIubm9kZS5nZXRQb3NpdGlvbigpLmFkZFNlbGYoY2MudjIoNDgwLCAzMjApKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVFZmYuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIndhbGxcIikge1xyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gXCJEaWUgQm91bmRhcnlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIndlYXBvbk9ialwiKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyV2VhcG9uTnVtID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJ3ZWFwb25PYmpcIikuZ2V0V2VhcG9uVHlwZSgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycldlYXBvbk51bSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndW5UeXBlID0gXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VuVHlwZSA9IFwiYnVyc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImJvbWJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VuVHlwZSA9IFwic2hvdGd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndW5UeXBlID0gXCJzbmlwZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJpdGVtT2JqXCIpe1xyXG4gICAgICAgICAgICB0aGlzLkhQICs9IDMwO1xyXG4gICAgICAgICAgICBpZih0aGlzLkhQID4gMTAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuSFAgPSAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyTW92ZShkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkICogdGhpcy5zcGVlZFZlYyAqIHRoaXMubW92ZURpcmVjdGlvbiAqIGR0OyAgICAvLyBwbGF5ZXIgd2Fsa2luZ1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gKHRoaXMubW92ZURpcmVjdGlvbiAhPSAwKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLm1vdmVEaXJlY3Rpb24gPT0gMSB8fCB0aGlzLmNoYW5nZURpcmVjdGlvbiA9PSAxKSB7ICAgLy8gY2hhbmdlIGRpcmVjdGlvbiB1c2luZyBzY2FsaW5nXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGhcIiwgdGhpcy5ub2RlKS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICBpZih0aGlzLmFpbUxhYmVsLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1MYWJlbC5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubW92ZURpcmVjdGlvbiA9PSAtMSB8fCB0aGlzLmNoYW5nZURpcmVjdGlvbiA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGhcIiwgdGhpcy5ub2RlKS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgaWYodGhpcy5haW1MYWJlbC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWltTGFiZWwuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVySnVtcCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQpIHsgIC8vIHBsYXllciBpcyBvbiBncm91bmRcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCB0aGlzLmp1bXBWZWxvY2l0eSk7ICAgIC8vIGFkZCBqdW1wIHZlbG9jaXR5XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbkdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWp1bXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdWxsZXQobW9kZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2hvb3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFpbSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZihtb2RlID09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgaWYoYnVsbGV0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0JykuaW5pdCh0aGlzLm5vZGUsIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcImJ1cnN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMC4wNSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcInNob3RndW5cIikge1xyXG4gICAgICAgICAgICBsZXQgZF9hbmdsZSA9IC0wLjE7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUgKyBkX2FuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KCdCdWxsZXQnKS5pbml0KHRoaXMubm9kZSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZF9hbmdsZSArPSAwLjA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcInNuaXBlclwiKSB7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgIGlmKGJ1bGxldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KCdCdWxsZXQnKS5zZXRBbmdsZSh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlLCAyMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJvbWIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYm9tYiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib21iID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5ib21iUG9vbC5zaXplKCkgPiAwKSBcclxuICAgICAgICAgICAgYm9tYiA9IHRoaXMuYm9tYlBvb2wuZ2V0KHRoaXMuYm9tYlBvb2wpO1xyXG5cclxuICAgICAgICBpZihib21iICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYm9tYi5nZXRDb21wb25lbnQoJ0JvbWInKS5zZXRBbmdsZVBvd2VyKHRoaXMuYW5nbGUsIHRoaXMucG93ZXIpO1xyXG4gICAgICAgICAgICBib21iLmdldENvbXBvbmVudCgnQm9tYicpLmluaXQodGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyRGllKCkge1xyXG4gICAgICAgIHRoaXMuaXNEaWUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMVwiKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjFpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWRlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIyaWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjJkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIzXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyM2lkbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIzZGVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyNFwiKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjRpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyNGRlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLnVwZGF0ZVJlY29yZChcInNjb3JlXCIsIDEwMDAwKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLnVwZGF0ZVJlY29yZChcImdlbVwiLCA1MCk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJjb2luXCIsIDUwMCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9HYW1lIE1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikucGxheWVyRGllKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRGllKXsgICAgLy8gYW5pbWF0aW9uIGZvciBjaGFyMVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMVwiKSB7ICAvLyBNVVNUIGNoYW5nZSB0byBjdXJQbGF5ZXIgPT0gXCJQbGF5ZXIgMVwiXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgIXRoaXMuYWltICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMWlkbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIxaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmlzT25Hcm91bmQgJiYgdGhpcy5haW0gICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMWFpbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFhaW1cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuaXNNb3ZlICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMXJ1blwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFydW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXRoaXMuaXNPbkdyb3VuZCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjFqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMWp1bXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMWp1bXAnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIxanVtcCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWlkbGUnKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzTW92ZSAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ2NoYXIxcnVuJykuaXNQbGF5aW5nICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFqdW1wJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFydW4nKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmFuaW1hdGlvblN0YXRlID09IG51bGwgfHwgKCF0aGlzLmlzTW92ZSAmJiB0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMWlkbGUnKS5pc1BsYXlpbmcpKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFpZGxlJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjJcIikge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmlzTW92ZSAmJiAhdGhpcy5odXJ0ICYmICF0aGlzLmFpbSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMmlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuYWltICAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJhaW1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIyYWltXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIycnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIyanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjJqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjNcIikge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmlzTW92ZSAmJiAhdGhpcy5odXJ0ICYmICF0aGlzLmFpbSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyM2lkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuYWltICAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNhaW1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzYWltXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzcnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIzanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjNqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBlbHNlIGlmKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5pc01vdmUgJiYgIXRoaXMuaHVydCAmJiAhdGhpcy5haW0gJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0aWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjRpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmFpbSAgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0YWltXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNGFpbVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmlzT25Hcm91bmQgJiYgdGhpcy5pc01vdmUgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0cnVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNHJ1blwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZighdGhpcy5pc09uR3JvdW5kICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyNGp1bXBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXI0anVtcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uID0gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckNoYW5nZURpcmVjdGlvbihkaXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uID0gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckp1bXAodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5qdW1wID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllclNob290KGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgIHRoaXMuc2hvb3QgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckJvbWIoYW5nbGUpIHtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgdGhpcy5ib21iID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJOYW1lKCkge1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDFcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMSBOYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDIgTmFtZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgM1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAzIE5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgNCBOYW1lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXRQbGF5ZXJOdW1iZXIoKSB7XHJcbiAgICAvLyAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gMlwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIjIgUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gM1wiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIjMgUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gNFwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIjQgUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gdGVhbVwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRlYW0gUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2V0VG90YWxQbGF5ZXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb3RhbCBQbGF5ZXIgLSAyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gXCJudW0yXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIE51bWJlciAtIDNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG90YWwgUGxheWVyIC0gM1wiKTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbFBsYXllciA9IFwibnVtM1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciBOdW1iZXIgLSA0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbFBsYXllciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRvdGFsIFBsYXllciAtIDRcIik7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXIgPSBcIm51bTRcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gdGVhbVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxQbGF5ZXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb3RhbCBQbGF5ZXIgLSB0ZWFtXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gXCJudW10ZWFtXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckNoYXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAxIENoYXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IFwiY2hhcjFcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAyIENoYXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IFwiY2hhcjJcIjtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyMVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDMgQ2hhclwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyM1wiO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBcImNoYXIxXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgNCBDaGFyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBcImNoYXI0XCI7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IFwiY2hhcjFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTa2lsbCh0aGlzLnBsYXllckNoYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJXZWFwb25OdW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyV2VhcG9uTnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNraWxsKGNoYXJOdW06IHN0cmluZyl7XHJcbiAgICAgICAgc3dpdGNoIChjaGFyTnVtKXtcclxuICAgICAgICAgICAgY2FzZSBcImNoYXIxXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoYXIyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsID0gXCJzcGVlZFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFZlYyA9IDEuNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hhcjNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwgPSBcImhlYWx0aFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ocFZlYyA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoYXI0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsID0gXCJkYW1hZ2VcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhwKHZhbHVlOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBjdXJyUGxheWVyID0gY2MuZmluZChcIkNhbnZhcy9HYW1lIE1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikuZ2V0Q3VyclBsYXllcigpO1xyXG4gICAgICAgIGxldCBkYW1hZ2VHZXQgPSB2YWx1ZTtcclxuICAgICAgICBpZihjdXJyUGxheWVyID09IDMgJiYgdmFsdWUgIT0gMjUpe1xyXG4gICAgICAgICAgICBkYW1hZ2VHZXQgKz0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYW1hZ2VHZXQ7XHJcbiAgICB9XHJcbn1cclxuIl19