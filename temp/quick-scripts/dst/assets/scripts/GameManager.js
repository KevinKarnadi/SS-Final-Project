
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eecbbjN1SVLA6bQ8gyDdvsO', 'GameManager');
// scripts/GameManager.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Player_1 = require("./Player");
var UI_1 = require("./UI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player1 = null;
        _this.player2 = null;
        _this.player3 = null;
        _this.UI = null;
        _this.camera = null;
        _this.bgm = null;
        _this.groundPrefab = null;
        _this.player = null;
        _this.aKeyDown = false;
        _this.dKeyDown = false;
        _this.shoot = false;
        _this.totalPlayer = 3;
        _this.shootAngle = null;
        _this.groundPool = null;
        return _this;
    }
    // private currPlayerPos = null;
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.groundPool = new cc.NodePool('Ground');
        for (var i = 0; i < 9000; i++) {
            var ground = cc.instantiate(this.groundPrefab);
            this.groundPool.put(ground);
        }
    };
    GameManager.prototype.start = function () {
        //this.playBGM();
        this.createGround();
        this.changePlayer(0);
    };
    GameManager.prototype.createGround = function () {
        var ground = null;
        var i = 0;
        while (this.groundPool.size() > 0) {
            ground = this.groundPool.get(this.groundPool);
            ground.getComponent('Ground').init(this.node, i);
            i++;
        }
    };
    GameManager.prototype.update = function (dt) {
        var playerPos = this.player.node.getPosition();
        var cameraPos = this.camera.getPosition();
        cameraPos.lerp(playerPos, 0.1, cameraPos);
        cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
        if (cameraPos.x < 0) {
            cameraPos.x = 0;
        }
        else if (cameraPos.x > 8500) {
            cameraPos.x = 8500;
        }
        this.camera.setPosition(cameraPos);
    };
    GameManager.prototype.changePlayer = function (num) {
        this.currPlayer = num % this.totalPlayer;
        if (this.player) {
            this.player.setPlayerMoveDirection(0);
            this.player.setPlayerJump(false);
            this.onDisable();
        }
        switch (this.currPlayer) {
            case 0:
                this.player = this.player1;
                break;
            case 1:
                this.player = this.player2;
                break;
            case 2:
                this.player = this.player3;
                break;
            default:
                break;
        }
        this.onEnable();
    };
    GameManager.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    GameManager.prototype.onEnable = function () {
        if (this.player) {
            this.player.node.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this); // touched
            this.player.node.on(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this); // aim
            this.player.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this); // shoot
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this); // cancel shoot
        }
    };
    GameManager.prototype.onDisable = function () {
        if (this.player) {
            this.player.node.off(cc.Node.EventType.TOUCH_START, this.onEventStart, this); // touched
            this.player.node.off(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this); // aim
            this.player.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this); // shoot
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this); // cancel shoot
        }
    };
    GameManager.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a: // move left
                this.aKeyDown = true;
                this.player.setPlayerMoveDirection(-1);
                break;
            case cc.macro.KEY.d: // move right
                this.dKeyDown = true;
                this.player.setPlayerMoveDirection(1);
                break;
            case cc.macro.KEY.space: // jump
                this.player.setPlayerJump(true);
                break;
            case cc.macro.KEY.escape:
                this.UI.pause();
                break;
            case cc.macro.KEY.p: // pass
                this.changePlayer(this.currPlayer + 1);
                break;
            default:
                break;
        }
    };
    GameManager.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a:
                this.aKeyDown = false;
                if (this.dKeyDown) {
                    this.player.setPlayerMoveDirection(1); // move right
                }
                else {
                    this.player.setPlayerMoveDirection(0); // stop moving
                }
                break;
            case cc.macro.KEY.d:
                this.dKeyDown = false;
                if (this.aKeyDown) {
                    this.player.setPlayerMoveDirection(-1); // move left
                }
                else {
                    this.player.setPlayerMoveDirection(0); // stop moving
                }
                break;
            case cc.macro.KEY.space:
                this.player.setPlayerJump(false);
                break;
            case cc.macro.KEY.f: // shoot (bullet)
                this.player.setPlayerShoot();
                break;
            case cc.macro.KEY.r: // bomb
                this.player.setPlayerBomb(45);
                break;
            default:
                break;
        }
    };
    GameManager.prototype.onEventStart = function (event) {
        if (!this.enabledInHierarchy)
            return;
        if (!this.shoot) {
            // this.startPos = this.node.position;
            // this.motorJoint.enabled = false;
            // this.rb.gravityScale = 0;
            // this.rb.linearVelocity = cc.Vec2.ZERO;
            // this.rb.angularVelocity = 0;
        }
        event.stopPropagation();
    };
    GameManager.prototype.onEventMove = function (event) {
        if (!this.enabledInHierarchy)
            return;
        if (!this.shoot) {
            // count shooting angle in PI
            // var playerPos = cc.v2(this.player.node.position.x + 480, this.player.node.position.y + 320);
            var playerPos = event.getStartLocation();
            var mousePos = event.getLocation();
            var diffX = mousePos.x - playerPos.x;
            var diffY = mousePos.y - playerPos.y;
            // mousePos = this.player.node.parent.convertToNodeSpaceAR(mousePos);
            // var angle = mousePos.signAngle(playerPos);
            // this.shootAngle = Math.atan2(diffX, diffY) * (180/ Math.PI) - 90 * -1;
            // this.shootAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * (180/ Math.PI);
            this.shootAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX));
            // this.shootAngle = Math.atan2(diffY, diffX) * (180/ Math.PI);
            // change player direction
            if (diffX >= 0) {
                this.player.setPlayerChangeDirection(-1);
            }
            else {
                this.player.setPlayerChangeDirection(1);
            }
            // draw trajectory line
            this.player.line.getComponent("TrajectoryLine").drawLine(this.shootAngle);
            // console.log(angle);
            // console.log(playerPos.x + " " + playerPos.y)
            // console.log(mousePos.x + " " + mousePos.y);
            // gagal
            // var pos = this.player.node.getPosition();
            // var angle = pos.angle(event.getLocation());
            // var degr = cc.misc.radiansToDegrees(angle);
            // this.player.node.getjoi
            // console.log(angle)
            // angry bird
            // if(this.currAngle < 90) {
            //     this.currAngle += 1;
            // }
            // let start = event.getStartLocation();
            // let cur = event.getLocation();
            // cur.subSelf(start);
            // let cur_v = cc.v2(cur.x, cur.y);
            // if(cur_v.mag() > this.maxLength){
            //     cur_v.normalizeSelf().mulSelf(this.maxLength);
            // }
            // this.node.setPosition(this.startPos.add(cur_v));
            // this.rb.linearVelocity = cc.Vec2.ZERO;
            // this.rb.angularVelocity = 0;
        }
        event.stopPropagation();
    };
    GameManager.prototype.onEventCancel = function (event) {
        if (!this.enabledInHierarchy)
            return;
        this.haveShot();
        event.stopPropagation();
    };
    GameManager.prototype.onEventEnd = function (event) {
        if (!this.enabledInHierarchy)
            return;
        this.haveShot();
        event.stopPropagation();
    };
    GameManager.prototype.haveShot = function () {
        if (this.shoot)
            return;
        this.player.line.getComponent("TrajectoryLine").clearLine();
        // this.shoot = true;
        // if(this.shootAngle > 30) {
        this.player.setPlayerBomb(this.shootAngle);
        // }
        this.player.setPlayerChangeDirection(0);
    };
    __decorate([
        property(Player_1.default)
    ], GameManager.prototype, "player1", void 0);
    __decorate([
        property(Player_1.default)
    ], GameManager.prototype, "player2", void 0);
    __decorate([
        property(Player_1.default)
    ], GameManager.prototype, "player3", void 0);
    __decorate([
        property(UI_1.default)
    ], GameManager.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "camera", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "groundPrefab", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEYsbUNBQTZCO0FBQzdCLDJCQUFxQjtBQUVmLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBOFJDO1FBM1JHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLFFBQUUsR0FBTyxJQUFJLENBQUM7UUFHZCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR2pCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUl2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUF5UDlCLENBQUM7SUF2UEcsZ0NBQWdDO0lBRWhDLHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdB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QUFTLENBQUM7NENBQ0U7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDbUI7SUFyQnRCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4Ui9CO0lBQUQsa0JBQUM7Q0E5UkQsQUE4UkMsQ0E5UndDLEVBQUUsQ0FBQyxTQUFTLEdBOFJwRDtrQkE5Um9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCJcclxuaW1wb3J0IFVJIGZyb20gXCIuL1VJXCJcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwbGF5ZXIxOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwbGF5ZXIyOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwbGF5ZXIzOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShVSSlcclxuICAgIFVJOiBVSSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZ3JvdW5kUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFLZXlEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkS2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJQbGF5ZXI6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsUGxheWVyOiBudW1iZXIgPSAzO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3RBbmdsZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBncm91bmRQb29sID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJQbGF5ZXJQb3MgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtOTgwKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnR3JvdW5kJyk7XHJcbiAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgOTAwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZFBvb2wucHV0KGdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy90aGlzLnBsYXlCR00oKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdyb3VuZCgpIHtcclxuICAgICAgICBsZXQgZ3JvdW5kID0gbnVsbDtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUodGhpcy5ncm91bmRQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgZ3JvdW5kID0gdGhpcy5ncm91bmRQb29sLmdldCh0aGlzLmdyb3VuZFBvb2wpO1xyXG4gICAgICAgICAgICBncm91bmQuZ2V0Q29tcG9uZW50KCdHcm91bmQnKS5pbml0KHRoaXMubm9kZSwgaSk7XHJcbiAgICAgICAgICAgIGkrKzsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBjYW1lcmFQb3MgPSB0aGlzLmNhbWVyYS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNhbWVyYVBvcy5sZXJwKHBsYXllclBvcywgMC4xLCBjYW1lcmFQb3MpO1xyXG4gICAgICAgIGNhbWVyYVBvcy55ID0gY2MubWlzYy5jbGFtcGYocGxheWVyUG9zLnksIDAsIDIwMCk7XHJcbiAgICAgICAgaWYoY2FtZXJhUG9zLnggPCAwKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYVBvcy54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYoY2FtZXJhUG9zLnggPiA4NTAwKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYVBvcy54ID0gODUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0UG9zaXRpb24oY2FtZXJhUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQbGF5ZXIobnVtKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyUGxheWVyID0gbnVtICUgdGhpcy50b3RhbFBsYXllcjtcclxuICAgICAgICBpZih0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc2FibGUoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkV2ZW50U3RhcnQsIHRoaXMpOyAgICAvLyB0b3VjaGVkXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbkV2ZW50TW92ZSwgdGhpcyk7ICAgICAgLy8gYWltXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uRXZlbnRDYW5jZWwsIHRoaXMpOyAgLy8gc2hvb3RcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25FdmVudEVuZCwgdGhpcyk7ICAgICAgICAvLyBjYW5jZWwgc2hvb3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkV2ZW50U3RhcnQsIHRoaXMpOyAgIC8vIHRvdWNoZWRcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbkV2ZW50TW92ZSwgdGhpcyk7ICAgICAvLyBhaW1cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uRXZlbnRDYW5jZWwsIHRoaXMpOyAvLyBzaG9vdFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkV2ZW50RW5kLCB0aGlzKTsgICAgICAgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6ICAgICAgICAvLyBtb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgIHRoaXMuYUtleURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigtMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogICAgICAgIC8vIG1vdmUgcmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZEtleURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTogICAgLy8ganVtcFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVySnVtcCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5lc2NhcGU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucDogICAgICAgIC8vIHBhc3NcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYUtleURvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZEtleURvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDEpOyAgLy8gbW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApOyAgLy8gc3RvcCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kS2V5RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hS2V5RG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oLTEpOyAvLyBtb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigwKTsgIC8vIHN0b3AgbW92aW5nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5mOiAgICAgICAgLy8gc2hvb3QgKGJ1bGxldClcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllclNob290KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucjogICAgICAgIC8vIGJvbWJcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckJvbWIoNDUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudFN0YXJ0IChldmVudCkgeyAgLy8gdG91Y2hlZFxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc2hvb3QpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3RvckpvaW50LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yYi5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkV2ZW50TW92ZSAoZXZlbnQpIHsgICAvLyBhaW1cclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBpZighdGhpcy5zaG9vdCl7XHJcbiAgICAgICAgICAgIC8vIGNvdW50IHNob290aW5nIGFuZ2xlIGluIFBJXHJcbiAgICAgICAgICAgIC8vIHZhciBwbGF5ZXJQb3MgPSBjYy52Mih0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uLnggKyA0ODAsIHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24ueSArIDMyMCk7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXJQb3MgPSBldmVudC5nZXRTdGFydExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBtb3VzZVBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBkaWZmWCA9IG1vdXNlUG9zLnggLSBwbGF5ZXJQb3MueDtcclxuICAgICAgICAgICAgdmFyIGRpZmZZID0gbW91c2VQb3MueSAtIHBsYXllclBvcy55O1xyXG4gICAgICAgICAgICAvLyBtb3VzZVBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgLy8gdmFyIGFuZ2xlID0gbW91c2VQb3Muc2lnbkFuZ2xlKHBsYXllclBvcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvb3RBbmdsZSA9IE1hdGguYXRhbjIoZGlmZlgsIGRpZmZZKSAqICgxODAvIE1hdGguUEkpIC0gOTAgKiAtMTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zaG9vdEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAoMTgwLyBNYXRoLlBJKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvb3RBbmdsZSA9IE1hdGguYXRhbjIoZGlmZlksIGRpZmZYKSAqICgxODAvIE1hdGguUEkpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hhbmdlIHBsYXllciBkaXJlY3Rpb25cclxuICAgICAgICAgICAgaWYoZGlmZlggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKC0xKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckNoYW5nZURpcmVjdGlvbigxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyB0cmFqZWN0b3J5IGxpbmVcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5kcmF3TGluZSh0aGlzLnNob290QW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYW5nbGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJQb3MueCArIFwiIFwiICsgcGxheWVyUG9zLnkpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1vdXNlUG9zLnggKyBcIiBcIiArIG1vdXNlUG9zLnkpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2FnYWxcclxuICAgICAgICAgICAgLy8gdmFyIHBvcyA9IHRoaXMucGxheWVyLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy8gdmFyIGFuZ2xlID0gcG9zLmFuZ2xlKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICAvLyB2YXIgZGVnciA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhhbmdsZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyLm5vZGUuZ2V0am9pXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFuZ2xlKVxyXG5cclxuICAgICAgICAgICAgLy8gYW5ncnkgYmlyZFxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLmN1cnJBbmdsZSA8IDkwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJBbmdsZSArPSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBsZXQgc3RhcnQgPSBldmVudC5nZXRTdGFydExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjdXIgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBjdXIuc3ViU2VsZihzdGFydCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgY3VyX3YgPSBjYy52MihjdXIueCwgY3VyLnkpO1xyXG4gICAgICAgICAgICAvLyBpZihjdXJfdi5tYWcoKSA+IHRoaXMubWF4TGVuZ3RoKXtcclxuICAgICAgICAgICAgLy8gICAgIGN1cl92Lm5vcm1hbGl6ZVNlbGYoKS5tdWxTZWxmKHRoaXMubWF4TGVuZ3RoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuc3RhcnRQb3MuYWRkKGN1cl92KSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50Q2FuY2VsIChldmVudCkgeyAvLyBzaG9vdFxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5oYXZlU2hvdCgpO1xyXG4gICAgXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uRXZlbnRFbmQgKGV2ZW50KSB7ICAvLyBjYW5jZWwgc2hvb3RcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICB0aGlzLmhhdmVTaG90KCk7XHJcbiAgICBcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXZlU2hvdCgpIHtcclxuICAgICAgICBpZih0aGlzLnNob290KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5jbGVhckxpbmUoKTtcclxuICAgICAgICAvLyB0aGlzLnNob290ID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZih0aGlzLnNob290QW5nbGUgPiAzMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJCb21iKHRoaXMuc2hvb3RBbmdsZSk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oMCk7XHJcbiAgICB9XHJcbn1cclxuIl19