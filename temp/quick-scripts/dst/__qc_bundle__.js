
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/AreaNode');
require('./assets/scripts/Arrow');
require('./assets/scripts/Bomb');
require('./assets/scripts/Bullet');
require('./assets/scripts/Crosshair');
require('./assets/scripts/GameManager');
require('./assets/scripts/Ground');
require('./assets/scripts/Ground2');
require('./assets/scripts/Instructions-minimap');
require('./assets/scripts/Instructions-option1');
require('./assets/scripts/Instructions-option2');
require('./assets/scripts/Instructions-win');
require('./assets/scripts/Instructions');
require('./assets/scripts/Lobby');
require('./assets/scripts/MainMenu');
require('./assets/scripts/Menu');
require('./assets/scripts/MiniCam');
require('./assets/scripts/Player');
require('./assets/scripts/PlayerName');
require('./assets/scripts/Playerchoose');
require('./assets/scripts/SelectChar');
require('./assets/scripts/Shop');
require('./assets/scripts/SignIn');
require('./assets/scripts/SignUp');
require('./assets/scripts/TrajectoryLine');
require('./assets/scripts/UI');
require('./assets/scripts/Welcome');
require('./assets/scripts/WelcomeTxt');
require('./assets/scripts/Win');
require('./assets/scripts/chooseMap');
require('./assets/scripts/ending');
require('./assets/scripts/explosiveObj');
require('./assets/scripts/map');
require('./assets/scripts/weaponObj');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ground2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4825SrSX9Dg4uXzK4Qa7oU', 'Ground2');
// scripts/Ground2.ts

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
var Ground2 = /** @class */ (function (_super) {
    __extends(Ground2, _super);
    function Ground2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.groundPrefab = null;
        _this.Bound = -223; // base
        _this.growDir = 0;
        _this.isGone = false;
        return _this;
    }
    Ground2.prototype.onLoad = function () {
        this.createBlocks();
    };
    Ground2.prototype.start = function () {
    };
    Ground2.prototype.update = function (dt) {
    };
    Ground2.prototype.createBlocks = function () {
        var newY;
        var counter;
        if (this.growDir == 0) {
            newY = this.node.y - 15;
            counter = 1;
            while (newY >= this.Bound) {
                newY = this.node.y - (15 * counter);
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
        else {
            newY = this.node.y + 15;
            counter = 1;
            while (newY <= this.Bound) {
                newY = this.node.y + (15 * counter) - 4;
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
    };
    Ground2.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bomb") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.1);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
        else if (other.node.group == "bullet") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.05);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
    };
    Ground2.prototype.onPreSolve = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "explosiveObj") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.35);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Ground2.prototype, "groundPrefab", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "Bound", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "growDir", void 0);
    Ground2 = __decorate([
        ccclass
    ], Ground2);
    return Ground2;
}(cc.Component));
exports.default = Ground2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JvdW5kMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTBGQztRQXZGVyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUd2QyxXQUFLLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPO1FBRzdCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQVksS0FBSyxDQUFDOztJQStFcEMsQ0FBQztJQTdFRyx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQztRQUNULElBQUksT0FBTyxDQUFDO1FBQ1osSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBQztZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDWixPQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqRCxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxRQUFR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R0FBRyxJQUFJLENBQUM7WUFDbkQsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0UsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2pGO1NBQ0o7SUFDTCxDQUFDO0lBdEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ21CO0lBR3ZDO1FBREMsUUFBUSxFQUFFOzBDQUNVO0lBR3JCO1FBREMsUUFBUSxFQUFFOzRDQUNTO0lBVEgsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBGM0I7SUFBRCxjQUFDO0NBMUZELEFBMEZDLENBMUZvQyxFQUFFLENBQUMsU0FBUyxHQTBGaEQ7a0JBMUZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBncm91bmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIEJvdW5kOiBudW1iZXIgPSAtMjIzOyAvLyBiYXNlXHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGdyb3dEaXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0dvbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmxvY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJsb2Nrcygpe1xyXG4gICAgICAgIGxldCBuZXdZO1xyXG4gICAgICAgIGxldCBjb3VudGVyO1xyXG4gICAgICAgIGlmKHRoaXMuZ3Jvd0RpciA9PSAwKXtcclxuICAgICAgICAgICAgbmV3WSA9IHRoaXMubm9kZS55IC0gMTU7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAxO1xyXG4gICAgICAgICAgICB3aGlsZShuZXdZID49IHRoaXMuQm91bmQpe1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IHRoaXMubm9kZS55IC0gKDE1ICogY291bnRlcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIG5ld1kpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBuZXdZID0gdGhpcy5ub2RlLnkgKyAxNTtcclxuICAgICAgICAgICAgY291bnRlciA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlKG5ld1kgPD0gdGhpcy5Cb3VuZCl7XHJcbiAgICAgICAgICAgICAgICBuZXdZID0gdGhpcy5ub2RlLnkgKyAoMTUgKiBjb3VudGVyKSAtIDQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyb3VuZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIG5ld1kpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJib21iXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNHb25lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzR29uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLnVwZGF0ZVJlY29yZChcInNjb3JlXCIsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLnVwZGF0ZVJlY29yZChcImNvaW5cIiwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzR29uZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwic2NvcmVcIiwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwiY29pblwiLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJlU29sdmUoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJleHBsb3NpdmVPYmpcIil7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzR29uZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjM1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwic2NvcmVcIiwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwiY29pblwiLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Crosshair.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dfcdivTy9Dm4Lyp2kmmMT3', 'Crosshair');
// scripts/Crosshair.ts

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
var Crosshair1 = /** @class */ (function (_super) {
    __extends(Crosshair1, _super);
    function Crosshair1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Crosshair1.prototype.init = function (node) {
        console.log("aaa");
        this.setInitPos(node);
    };
    //this function sets the arrow's initial position when it is reused.
    Crosshair1.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the arrow move according to the angle
    Crosshair1.prototype.crosshairMove = function (angle) {
        this.node.angle = angle;
    };
    Crosshair1.prototype.destroyArrow = function () {
        this.node.destroy();
    };
    Crosshair1 = __decorate([
        ccclass
    ], Crosshair1);
    return Crosshair1;
}(cc.Component));
exports.default = Crosshair1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ3Jvc3NoYWlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEOztJQXVDQSxDQUFDO0lBckNHLHFGQUFxRjtJQUM5RSx5QkFBSSxHQUFYLFVBQVksSUFBYTtRQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCwrQkFBVSxHQUFsQixVQUFtQixJQUFhO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxvRkFBb0Y7UUFFcEgsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCw0Q0FBNEM7SUFDcEMsa0NBQWEsR0FBckIsVUFBc0IsS0FBSztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF0Q2dCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1QzlCO0lBQUQsaUJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3VDLEVBQUUsQ0FBQyxTQUFTLEdBdUNuRDtrQkF2Q29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3NzaGFpcjEgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuICAgIC8vIHdoZW4gY3JlYXRlZCwgdGhlIGJ1bGxldCBuZWVkIHRvIGJlIHBsYWNlZCBhdCBjb3JyZWN0IHBvc2l0aW9uIGFuZCBwbGF5IGFuaW1hdGlvbi5cclxuICAgIHB1YmxpYyBpbml0KG5vZGU6IGNjLk5vZGUpIFxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWFhXCIpXHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBhcnJvdydzIGluaXRpYWwgcG9zaXRpb24gd2hlbiBpdCBpcyByZXVzZWQuXHJcbiAgICBwcml2YXRlIHNldEluaXRQb3Mobm9kZTogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbm9kZS5wYXJlbnQ7IC8vIGRvbid0IG1vdW50IHVuZGVyIHRoZSBwbGF5ZXIsIG90aGVyd2lzZSBpdCB3aWxsIGNoYW5nZSBkaXJlY3Rpb24gd2hlbiBwbGF5ZXIgbW92ZVxyXG5cclxuICAgICAgICBpZihub2RlLnNjYWxlWCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygzNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTM1LCA4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGRTZWxmKG5vZGUucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbWFrZSB0aGUgYXJyb3cgbW92ZSBhY2NvcmRpbmcgdG8gdGhlIGFuZ2xlXHJcbiAgICBwcml2YXRlIGNyb3NzaGFpck1vdmUoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUFycm93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '889b5Mpv+1HeZcVtW6D2TTK', 'Bullet');
// scripts/Bullet.ts

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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        _this.rigidBody = null;
        _this.shootAngle = null;
        _this.animation = null;
        _this.speed = null;
        _this.sfx_shoot = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Bullet.prototype.init = function (node, speed) {
        cc.audioEngine.playEffect(this.sfx_shoot, false);
        this.animation = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node);
        this.animation.play('flash');
        this.speed = speed;
    };
    //this function sets the bullet's initial position when it is reused.
    Bullet.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 4);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 4);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the bullet move from current position
    Bullet.prototype.bulletMove = function () {
        var moveDir = null;
        // decide bullet direction
        if (this.node.scaleX > 0) {
            moveDir = 1;
        }
        else {
            moveDir = -1;
        }
        this.rigidBody.linearVelocity = cc.v2((35 * moveDir) + this.speed * moveDir * Math.cos(this.shootAngle), Math.sin(this.shootAngle) * this.speed);
    };
    Bullet.prototype.playBulletAnim = function () {
        this.bulletMove();
        this.animation.play('bullet1');
    };
    //detect collision
    Bullet.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
        // this.scheduleOnce(() => {
        this.animation.stop();
        this.node.destroy();
        // }, 0.1); // for better animation effect, I delay 0.1s when bullet hits the enemy
    };
    Bullet.prototype.setAngle = function (angle) {
        this.shootAngle = angle;
    };
    __decorate([
        property(cc.AudioClip)
    ], Bullet.prototype, "sfx_shoot", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBd0ZDO1FBckZVLGlCQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsMERBQTBEO1FBRTlFLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFdBQUssR0FBVyxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBMEVuQyxDQUFDO0lBeEVHLHFGQUFxRjtJQUM5RSxxQkFBSSxHQUFYLFVBQVksSUFBYSxFQUFFLEtBQWE7UUFFcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQscUVBQXFFO0lBQzdELDJCQUFVLEdBQWxCLFVBQW1CLElBQWE7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9GQUFvRjtRQUVwSCxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNsQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN4QjthQUVEO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDRDQUE0QztJQUNwQywyQkFBVSxHQUFsQjtRQUVJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUVuQiwwQkFBMEI7UUFDMUIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0SixDQUFDO0lBRU8sK0JBQWMsR0FBdEI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGtCQUFrQjtJQUNsQiwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFOUIsNEJBQTRCO1FBRXhCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV4QixtRkFBbUY7SUFDdkYsQ0FBQztJQUVELHlCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQXpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNRO0lBZGQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXdGMUI7SUFBRCxhQUFDO0NBeEZELEFBd0ZDLENBeEZtQyxFQUFFLENBQUMsU0FBUyxHQXdGL0M7a0JBeEZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuXHJcbiAgICBwdWJsaWMgaXNUcmlnZ2VyZWQgPSBmYWxzZTsgLy8gSSBhZGQgdGhpcyB0byBtYWtlIHRoZSBidWxsZXQga2lsbCBvbmUgZW5lbXkgYXQgYSB0aW1lLlxyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3RBbmdsZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2Z4X3Nob290OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIHdoZW4gY3JlYXRlZCwgdGhlIGJ1bGxldCBuZWVkIHRvIGJlIHBsYWNlZCBhdCBjb3JyZWN0IHBvc2l0aW9uIGFuZCBwbGF5IGFuaW1hdGlvbi5cclxuICAgIHB1YmxpYyBpbml0KG5vZGU6IGNjLk5vZGUsIHNwZWVkOiBudW1iZXIpIFxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zZnhfc2hvb3QsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2ZsYXNoJyk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBidWxsZXQncyBpbml0aWFsIHBvc2l0aW9uIHdoZW4gaXQgaXMgcmV1c2VkLlxyXG4gICAgcHJpdmF0ZSBzZXRJbml0UG9zKG5vZGU6IGNjLk5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG5vZGUucGFyZW50OyAvLyBkb24ndCBtb3VudCB1bmRlciB0aGUgcGxheWVyLCBvdGhlcndpc2UgaXQgd2lsbCBjaGFuZ2UgZGlyZWN0aW9uIHdoZW4gcGxheWVyIG1vdmVcclxuXHJcbiAgICAgICAgaWYobm9kZS5zY2FsZVggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMzUsIDQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0zNSwgNCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZihub2RlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ha2UgdGhlIGJ1bGxldCBtb3ZlIGZyb20gY3VycmVudCBwb3NpdGlvblxyXG4gICAgcHJpdmF0ZSBidWxsZXRNb3ZlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbW92ZURpciA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGRlY2lkZSBidWxsZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnNjYWxlWCA+IDApIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKCgzNSAqIG1vdmVEaXIpICsgIHRoaXMuc3BlZWQgKiBtb3ZlRGlyICogTWF0aC5jb3ModGhpcy5zaG9vdEFuZ2xlKSwgTWF0aC5zaW4odGhpcy5zaG9vdEFuZ2xlKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheUJ1bGxldEFuaW0oKSB7XHJcbiAgICAgICAgdGhpcy5idWxsZXRNb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgnYnVsbGV0MScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2RldGVjdCBjb2xsaXNpb25cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgLy8gfSwgMC4xKTsgLy8gZm9yIGJldHRlciBhbmltYXRpb24gZWZmZWN0LCBJIGRlbGF5IDAuMXMgd2hlbiBidWxsZXQgaGl0cyB0aGUgZW5lbXlcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbmdsZShhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuc2hvb3RBbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        _this.sfx_shoot = null;
        _this.sfx_bomb = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Bomb.prototype.init = function (node) {
        cc.audioEngine.playEffect(this.sfx_shoot, false);
        this.animation = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
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
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 4);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the bullet move from current position
    Bomb.prototype.bulletMove = function () {
        var moveDir = null;
        // decide bullet direction
        if (this.node.scaleX >= 0) {
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
        this.scheduleOnce(function () {
            _this.node.stopAllActions();
            _this.unscheduleAllCallbacks();
            _this.animation.stop();
            _this.bombManager.put(_this.node);
        }, 0.07);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9tYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW9HQztRQWxHVyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVwQixpQkFBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLDBEQUEwRDtRQUU5RSxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBR3JCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDOztJQWtGbEMsQ0FBQztJQWhGRyxxRkFBcUY7SUFDOUUsbUJBQUksR0FBWCxVQUFZLElBQWE7UUFFckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxvQkFBSyxHQUFMLFVBQU0sYUFBYTtRQUVmLElBQUksQ0FBQyxXQUFX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QUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQXBGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ087SUFsQmIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9HeEI7SUFBRCxXQUFDO0NBcEdELEFBb0dDLENBcEdpQyxFQUFFLENBQUMsU0FBUyxHQW9HN0M7a0JBcEdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb21iIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcbiAgICBwcml2YXRlIGJvbWJNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaXNUcmlnZ2VyZWQgPSBmYWxzZTsgLy8gSSBhZGQgdGhpcyB0byBtYWtlIHRoZSBidWxsZXQga2lsbCBvbmUgZW5lbXkgYXQgYSB0aW1lLlxyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3RBbmdsZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwb3dlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNmeF9zaG9vdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2Z4X2JvbWI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy8gd2hlbiBjcmVhdGVkLCB0aGUgYnVsbGV0IG5lZWQgdG8gYmUgcGxhY2VkIGF0IGNvcnJlY3QgcG9zaXRpb24gYW5kIHBsYXkgYW5pbWF0aW9uLlxyXG4gICAgcHVibGljIGluaXQobm9kZTogY2MuTm9kZSkgXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNmeF9zaG9vdCwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdFBvcyhub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgnZ3JlbmFkZScpO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0TW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGJ1bGxldCBtYW5hZ2VyIGNhbGxzIFwiZ2V0XCIgQVBJLlxyXG4gICAgcmV1c2UoYnVsbGV0TWFuYWdlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJvbWJNYW5hZ2VyID0gYnVsbGV0TWFuYWdlcjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBidWxsZXQncyBpbml0aWFsIHBvc2l0aW9uIHdoZW4gaXQgaXMgcmV1c2VkLlxyXG4gICAgcHJpdmF0ZSBzZXRJbml0UG9zKG5vZGU6IGNjLk5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG5vZGUucGFyZW50OyAvLyBkb24ndCBtb3VudCB1bmRlciB0aGUgcGxheWVyLCBvdGhlcndpc2UgaXQgd2lsbCBjaGFuZ2UgZGlyZWN0aW9uIHdoZW4gcGxheWVyIG1vdmVcclxuXHJcbiAgICAgICAgaWYobm9kZS5zY2FsZVggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMzUsIDQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0zNSwgNCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZihub2RlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ha2UgdGhlIGJ1bGxldCBtb3ZlIGZyb20gY3VycmVudCBwb3NpdGlvblxyXG4gICAgcHJpdmF0ZSBidWxsZXRNb3ZlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbW92ZURpciA9IG51bGw7XHJcbiAgICAgICAgLy8gZGVjaWRlIGJ1bGxldCBkaXJlY3Rpb25cclxuICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYID49IDApIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3BlZWQgPSAxMCAqIHRoaXMucG93ZXI7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdpZEJvZHkuYXBwbHlGb3JjZVRvQ2VudGVyKGNjLnYyKE1hdGguc2luKHNob290QW5nbGUpICogeCwgTWF0aC5jb3Moc2hvb3RBbmdsZSkgKiB4KSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihNYXRoLnNpbih0aGlzLnNob290QW5nbGUpICogeCAqIG1vdmVEaXIsIE1hdGguY29zKHRoaXMuc2hvb3RBbmdsZSkgKiB4KTtcclxuICAgICAgICAvLyB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHNwZWVkICogbW92ZURpciAqIE1hdGguc2luKHRoaXMuc2hvb3RBbmdsZSksIE1hdGguc2luaCh0aGlzLnNob290QW5nbGUpICogc3BlZWQpO1xyXG4gICAgICAgIGlmKHRoaXMuc2hvb3RBbmdsZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoc3BlZWQgKiBtb3ZlRGlyICogTWF0aC5jb3ModGhpcy5zaG9vdEFuZ2xlKSwgTWF0aC5zaW4odGhpcy5zaG9vdEFuZ2xlKSAqIHNwZWVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGVlZCAqPSAwLjc1O1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHNwZWVkICogbW92ZURpciwgTWF0aC5zaW5oKHRoaXMuc2hvb3RBbmdsZSkgKiBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDIwMCAqIG1vdmVEaXI7XHJcbiAgICB9XHJcbiAgICByXHJcbiAgICAvL2RldGVjdCBjb2xsaXNpb25cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zZnhfYm9tYiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9tYk1hbmFnZXIucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfSwgMC4wNyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5nbGVQb3dlcihhbmdsZSwgcG93ZXIpIHtcclxuICAgICAgICB0aGlzLnNob290QW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-option2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc30acpkBxLtKbIdxRprS2A', 'Instructions-option2');
// scripts/Instructions-option2.ts

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
var InstructionsMenuOption2 = /** @class */ (function (_super) {
    __extends(InstructionsMenuOption2, _super);
    function InstructionsMenuOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuOption2.prototype.start = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-option2";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Canvas/Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-option2";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Canvas/Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuOption2.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - minimap");
    };
    InstructionsMenuOption2.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - option 1");
    };
    InstructionsMenuOption2 = __decorate([
        ccclass
    ], InstructionsMenuOption2);
    return InstructionsMenuOption2;
}(cc.Component));
exports.default = InstructionsMenuOption2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW9wdGlvbjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBa0NBLENBQUM7SUE1QkcsdUNBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR3pFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdFLENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFoQ2dCLHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBa0MzQztJQUFELDhCQUFDO0NBbENELEFBa0NDLENBbENvRCxFQUFFLENBQUMsU0FBUyxHQWtDaEU7a0JBbENvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9uc01lbnVPcHRpb24yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbmV4dGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmV4dGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbmV4dGJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24yXCI7XHJcbiAgICAgICAgbmV4dGJ0bi5oYW5kbGVyID0gXCJsb2FkTmV4dEluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9OZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dGJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24yXCI7XHJcbiAgICAgICAgcHJldmJ0bi5oYW5kbGVyID0gXCJsb2FkUHJldkluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QcmV2XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocHJldmJ0bik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWROZXh0SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zIC0gbWluaW1hcFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJldkluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9ucyAtIG9wdGlvbiAxXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
        _this.player4 = null;
        _this.UI = null;
        _this.camera = null;
        _this.bgm1 = null;
        _this.bgm2 = null;
        _this.background = null;
        _this.weaponSprite0 = null;
        _this.weaponSprite1 = null;
        _this.weaponSprite2 = null;
        _this.weaponSprite3 = null;
        _this.weaponSprite4 = null;
        _this.cameraSpeed = 300;
        _this.player = null;
        _this.aKeyDown = false;
        _this.dKeyDown = false;
        _this.shoot = false;
        _this.totalPlayer = 2;
        _this.alivePlayer = null;
        _this.shootAngle = null;
        _this.playerNum = null;
        // private currPlayerPos = null;
        _this.isPaused = false;
        _this.playerPath = "Canvas/Players/";
        _this.cameraAnchor = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        // this.playerNum = 4;
        // this.alivePlayer = this.totalPlayer;
        this.alivePlayer = parseInt(this.playerNum);
        cc.audioEngine.stopMusic();
        this.playBGM();
        this.loadPlayer();
        this.changePlayer(0);
        this.initPauseMenuButtons();
        this.initSettingsMenuButtons();
    };
    GameManager.prototype.start = function () { };
    GameManager.prototype.update = function (dt) {
        var playerPos = this.player.node.getPosition();
        var cameraPos = this.camera.getPosition();
        var prevCamPos = this.camera.getPosition();
        if (this.cameraAnchor == 1 || this.cameraAnchor == -1) {
            cameraPos.x += this.cameraAnchor * this.cameraSpeed * dt;
            // console.log(this.cameraAnchor, "update");
        }
        else {
            cameraPos.lerp(playerPos, 0.1, cameraPos);
            cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
        }
        if (cameraPos.y > 100) {
            cameraPos.y = 100;
        }
        if (cameraPos.x < -35) {
            cameraPos.x = -35;
        }
        else if (cameraPos.x > 2033 + 35) {
            cameraPos.x = 2033 + 35;
        }
        this.camera.setPosition(cameraPos);
        // if(this.background){
        //     this.background.setPosition(cameraPos.x < prevCamPos.x ? 
        //         ((cameraPos.x - prevCamPos.x)/3 + this.background.x) : 
        //         (this.background.x - (prevCamPos.x - cameraPos.x)/3), 
        //         cameraPos.y < prevCamPos.y ? 
        //         ((cameraPos.y - prevCamPos.y)/3 + this.background.y) :
        //         (this.background.y - (prevCamPos.y - cameraPos.y)/3));
        // }
        this.updateWeaponUi();
        if (this.winner == null) {
            if (this.UI.timerVal < 0 || this.player.isDie) {
                this.UI.timerVal = 20;
                this.changePlayer(this.currPlayer + 1);
            }
            // this.isWin();
        }
    };
    GameManager.prototype.loadPlayer = function () {
        this.totalPlayer = parseInt(this.playerNum);
        switch (this.totalPlayer) {
            case 4:
                cc.find(this.playerPath + "Player 4").active = true;
            case 3:
                cc.find(this.playerPath + "Player 3").active = true;
            case 2:
                cc.find(this.playerPath + "Player 2").active = true;
                cc.find(this.playerPath + "Player 1").active = true;
                break;
            default:
                break;
        }
    };
    GameManager.prototype.isWin = function () {
        var alive = this.totalPlayer;
        if (this.totalPlayer == 2) {
            if (this.player1.isDie)
                alive--;
            if (this.player2.isDie)
                alive--;
        }
        else if (this.totalPlayer == 3) {
            if (this.player1.isDie)
                alive--;
            if (this.player2.isDie)
                alive--;
            if (this.player3.isDie)
                alive--;
        }
        else if (this.totalPlayer == 4) {
            if (this.player1.isDie)
                alive--;
            if (this.player2.isDie)
                alive--;
            if (this.player3.isDie)
                alive--;
            if (this.player4.isDie)
                alive--;
        }
        // this.alivePlayer = alive;
        if (this.alivePlayer == 1) {
            this.winner = this.player.playerName.getComponent(cc.Label).string;
            console.log(this.winner);
            //this.UI.pause();
        }
    };
    GameManager.prototype.changePlayer = function (num) {
        this.currPlayer = num % this.totalPlayer;
        if ((this.player && !this.player.isDie)) {
            this.player.setPlayerMoveDirection(0);
            this.player.setPlayerJump(false);
            this.player.line.getComponent("TrajectoryLine").clearLine();
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
            case 3:
                this.player = this.player4;
                break;
            default:
                break;
        }
        if (!this.player.isDie) {
            this.onEnable();
            this.changePlayerUi();
        }
        else {
            // console.log(this.currPlayer, "change");
            this.changePlayer(num + 1);
        }
    };
    GameManager.prototype.playBGM = function () {
        var sceneName = cc.director.getScene().name;
        if (sceneName == "map1")
            cc.audioEngine.playMusic(this.bgm1, true);
        else if (sceneName == "map2")
            cc.audioEngine.playMusic(this.bgm2, true);
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
                this.pauseGame();
                //this.UI.pause();
                break;
            case cc.macro.KEY.p: // pass
                this.changePlayer(this.currPlayer + 1);
                this.UI.timerVal = 20;
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
                this.player.weapon = "gun";
                break;
            case cc.macro.KEY.r: // bomb
                this.player.weapon = "bomb";
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
        var playerPos = event.getStartLocation();
        var mousePos = event.getLocation();
        var diffX = mousePos.x - playerPos.x;
        var diffY = playerPos.y - mousePos.y;
        this.shootAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)); // angle in radian
        if (diffX >= 0) { // change player direction
            this.player.setPlayerChangeDirection(-1);
        }
        else {
            this.player.setPlayerChangeDirection(1);
        }
        if (diffY < 0) {
            this.shootAngle *= -1;
        }
        if (!this.shoot) {
            this.player.aim = true;
            if (this.player.weapon == "gun") {
                if (this.player.gunType == "normal") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 300); // draw trajectory line
                }
                else if (this.player.gunType == "burst") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 200); // draw trajectory line
                }
                else if (this.player.gunType == "sniper") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 400); // draw trajectory line
                }
                else if (this.player.gunType == "shotgun") {
                    this.player.line.getComponent("TrajectoryLine").drawCircle(this.shootAngle); // draw trajectory line
                }
            }
            else if (this.player.weapon == "bomb") {
                var power = (Math.abs(diffY) >= Math.abs(diffX) ? Math.abs(diffY) : Math.abs(diffX));
                this.player.line.getComponent("TrajectoryLine").drawCurveLine(this.shootAngle, power * 2); // draw arrow
                this.player.power = (power * 2 > 100) ? 100 : power * 2;
            }
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
        if (this.player.weapon == "gun") {
            this.player.setPlayerShoot(this.shootAngle);
        }
        else if (this.player.weapon == "bomb") {
            this.player.setPlayerBomb(this.shootAngle);
        }
        this.player.setPlayerChangeDirection(0);
    };
    GameManager.prototype.pauseGame = function () {
        if (cc.director.isPaused()) {
            cc.director.resume();
            cc.find("Canvas/Main Camera/Pause Menu").active = false;
        }
        else {
            cc.director.pause();
            cc.find("Canvas/Main Camera/Pause Menu").active = true;
        }
    };
    // Pause Menu Buttons
    GameManager.prototype.initPauseMenuButtons = function () {
        var resume_clickEventHandler = new cc.Component.EventHandler();
        resume_clickEventHandler.target = this.node;
        resume_clickEventHandler.component = "GameManager";
        resume_clickEventHandler.handler = "resume";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/resumeBtn").getComponent(cc.Button).clickEvents.push(resume_clickEventHandler);
        var restart_clickEventHandler = new cc.Component.EventHandler();
        restart_clickEventHandler.target = this.node;
        restart_clickEventHandler.component = "GameManager";
        restart_clickEventHandler.handler = "restart";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/restartBtn").getComponent(cc.Button).clickEvents.push(restart_clickEventHandler);
        var settings_clickEventHandler = new cc.Component.EventHandler();
        settings_clickEventHandler.target = this.node;
        settings_clickEventHandler.component = "GameManager";
        settings_clickEventHandler.handler = "settings";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/settingsBtn").getComponent(cc.Button).clickEvents.push(settings_clickEventHandler);
        var exit_clickEventHandler = new cc.Component.EventHandler();
        exit_clickEventHandler.target = this.node;
        exit_clickEventHandler.component = "GameManager";
        exit_clickEventHandler.handler = "exit";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/exitBtn").getComponent(cc.Button).clickEvents.push(exit_clickEventHandler);
    };
    GameManager.prototype.resume = function () {
        cc.director.resume();
        cc.find("Canvas/Main Camera/Pause Menu").active = false;
    };
    GameManager.prototype.restart = function () {
        cc.director.resume();
        var sceneName = cc.director.getScene().name;
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(sceneName);
        });
    };
    GameManager.prototype.settings = function () {
        cc.find("Canvas/Main Camera/Settings Menu").active = true;
    };
    GameManager.prototype.exit = function () {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", function () {
            cc.director.loadScene("menu");
        });
    };
    // Settings Menu Buttons
    GameManager.prototype.initSettingsMenuButtons = function () {
        var close_clickEventHandler = new cc.Component.EventHandler();
        close_clickEventHandler.target = this.node;
        close_clickEventHandler.component = "GameManager";
        close_clickEventHandler.handler = "close";
        cc.find("Canvas/Main Camera/Settings Menu/closeBtn").getComponent(cc.Button).clickEvents.push(close_clickEventHandler);
        var bgmute_clickEventHandler = new cc.Component.EventHandler();
        bgmute_clickEventHandler.target = this.node;
        bgmute_clickEventHandler.component = "GameManager";
        bgmute_clickEventHandler.handler = "bgMute";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Mute/bgMuteBtn").getComponent(cc.Button).clickEvents.push(bgmute_clickEventHandler);
        var sfxmute_clickEventHandler = new cc.Component.EventHandler();
        sfxmute_clickEventHandler.target = this.node;
        sfxmute_clickEventHandler.component = "GameManager";
        sfxmute_clickEventHandler.handler = "sfxMute";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Mute/sfxMuteBtn").getComponent(cc.Button).clickEvents.push(sfxmute_clickEventHandler);
        var bg_sliderEventHandler = new cc.Component.EventHandler();
        bg_sliderEventHandler.target = this.node;
        bg_sliderEventHandler.component = "GameManager";
        bg_sliderEventHandler.handler = "changeBgVol";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).slideEvents.push(bg_sliderEventHandler);
        var sfx_sliderEventHandler = new cc.Component.EventHandler();
        sfx_sliderEventHandler.target = this.node;
        sfx_sliderEventHandler.component = "GameManager";
        sfx_sliderEventHandler.handler = "changeSfxVol";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).slideEvents.push(sfx_sliderEventHandler);
    };
    GameManager.prototype.close = function () {
        cc.find("Canvas/Main Camera/Settings Menu").active = false;
    };
    GameManager.prototype.bgMute = function () {
        cc.audioEngine.setMusicVolume(0);
    };
    GameManager.prototype.sfxMute = function () {
        cc.audioEngine.setEffectsVolume(0);
    };
    GameManager.prototype.changeBgVol = function () {
        var value = cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setMusicVolume(value);
    };
    GameManager.prototype.changeSfxVol = function () {
        var value = cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setEffectsVolume(value);
    };
    GameManager.prototype.setCameraAnchor = function (value) {
        this.cameraAnchor = value;
    };
    GameManager.prototype.getWin = function () {
        return (this.winner != null);
    };
    GameManager.prototype.updateWeaponUi = function () {
        // var weaponSprite = cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame;
        if (this.player) {
            switch (this.player.getCurrWeaponNum()) {
                case "0":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite0;
                    // console.log(weaponSprite, "updateweaponUi");
                    break;
                case "1":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite1;
                    break;
                case "2":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite2;
                    break;
                case "3":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
                case "4":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite4;
                    break;
                default:
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
            }
        }
    };
    GameManager.prototype.playerDie = function () {
        this.alivePlayer -= 1;
        if (this.alivePlayer == 1) {
            this.UI.timerVal = 20;
            this.winner = this.player.playerName.getComponent(cc.Label).string;
            // console.log(this.winner);
            // console.log(this.player.isDie, "die");
            this.changePlayer(this.currPlayer + 1);
            //this.UI.pause();
        }
    };
    GameManager.prototype.changePlayerUi = function () {
        cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string = this.player.playerName.getComponent(cc.Label).string;
        switch (this.player.playerChar) {
            case "char1":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char2":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char3":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char4":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = true;
                break;
            default:
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
        }
    };
    GameManager.prototype.getCurrPlayer = function () {
        return this.currPlayer;
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
        property(Player_1.default)
    ], GameManager.prototype, "player4", void 0);
    __decorate([
        property(UI_1.default)
    ], GameManager.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "camera", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bgm1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bgm2", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "background", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite4", void 0);
    __decorate([
        property()
    ], GameManager.prototype, "cameraSpeed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTZCO0FBQzdCLDJCQUFxQjtBQUVmLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNGtCQztRQXprQkcsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixRQUFFLEdBQU8sSUFBSSxDQUFDO1FBR2QsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUdsQixtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUdyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRzdDLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRWxCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUl2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXpCLGdDQUFnQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFD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LENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxFQUFFO29EQUNlO0lBN0NULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0a0IvQjtJQUFELGtCQUFDO0NBNWtCRCxBQTRrQkMsQ0E1a0J3QyxFQUFFLENBQUMsU0FBUyxHQTRrQnBEO2tCQTVrQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiXHJcbmltcG9ydCBVSSBmcm9tIFwiLi9VSVwiXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMTogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMjogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMzogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyNDogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVUkpXHJcbiAgICBVSTogVUkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtMTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSB3ZWFwb25TcHJpdGUwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd2VhcG9uU3ByaXRlMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgY2FtZXJhU3BlZWQ6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhS2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZEtleURvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNob290OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyUGxheWVyOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbFBsYXllcjogbnVtYmVyID0gMjtcclxuXHJcbiAgICBwcml2YXRlIGFsaXZlUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNob290QW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyTnVtID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJQbGF5ZXJQb3MgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllclBhdGg6IHN0cmluZyA9IFwiQ2FudmFzL1BsYXllcnMvXCI7XHJcblxyXG4gICAgcHJpdmF0ZSB3aW5uZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW1lcmFBbmNob3I6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC05ODApO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXJOdW1cIik7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJOdW0gPSA0O1xyXG4gICAgICAgIC8vIHRoaXMuYWxpdmVQbGF5ZXIgPSB0aGlzLnRvdGFsUGxheWVyO1xyXG4gICAgICAgIHRoaXMuYWxpdmVQbGF5ZXIgPSBwYXJzZUludCh0aGlzLnBsYXllck51bSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoMCk7XHJcbiAgICAgICAgdGhpcy5pbml0UGF1c2VNZW51QnV0dG9ucygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmdzTWVudUJ1dHRvbnMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgcHJldkNhbVBvcyA9IHRoaXMuY2FtZXJhLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmFBbmNob3IgPT0gMSB8fCB0aGlzLmNhbWVyYUFuY2hvciA9PSAtMSl7XHJcbiAgICAgICAgICAgIGNhbWVyYVBvcy54ICs9IHRoaXMuY2FtZXJhQW5jaG9yICogdGhpcy5jYW1lcmFTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhbWVyYUFuY2hvciwgXCJ1cGRhdGVcIik7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MubGVycChwbGF5ZXJQb3MsIDAuMSwgY2FtZXJhUG9zKTtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnkgPSBjYy5taXNjLmNsYW1wZihwbGF5ZXJQb3MueSwgMCwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2FtZXJhUG9zLnkgPiAxMDApe1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MueSA9IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2FtZXJhUG9zLnggPCAtMzUpIHtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnggPSAtMzU7XHJcbiAgICAgICAgfSBlbHNlIGlmKGNhbWVyYVBvcy54ID4gMjAzMyszNSkge1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MueCA9IDIwMzMrMzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldFBvc2l0aW9uKGNhbWVyYVBvcyk7XHJcbiAgICAgICAgLy8gaWYodGhpcy5iYWNrZ3JvdW5kKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5iYWNrZ3JvdW5kLnNldFBvc2l0aW9uKGNhbWVyYVBvcy54IDwgcHJldkNhbVBvcy54ID8gXHJcbiAgICAgICAgLy8gICAgICAgICAoKGNhbWVyYVBvcy54IC0gcHJldkNhbVBvcy54KS8zICsgdGhpcy5iYWNrZ3JvdW5kLngpIDogXHJcbiAgICAgICAgLy8gICAgICAgICAodGhpcy5iYWNrZ3JvdW5kLnggLSAocHJldkNhbVBvcy54IC0gY2FtZXJhUG9zLngpLzMpLCBcclxuICAgICAgICAvLyAgICAgICAgIGNhbWVyYVBvcy55IDwgcHJldkNhbVBvcy55ID8gXHJcbiAgICAgICAgLy8gICAgICAgICAoKGNhbWVyYVBvcy55IC0gcHJldkNhbVBvcy55KS8zICsgdGhpcy5iYWNrZ3JvdW5kLnkpIDpcclxuICAgICAgICAvLyAgICAgICAgICh0aGlzLmJhY2tncm91bmQueSAtIChwcmV2Q2FtUG9zLnkgLSBjYW1lcmFQb3MueSkvMykpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVdlYXBvblVpKCk7XHJcbiAgICAgICAgaWYodGhpcy53aW5uZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuVUkudGltZXJWYWwgPCAwIHx8IHRoaXMucGxheWVyLmlzRGllKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVUkudGltZXJWYWwgPSAyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNXaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBsYXllcigpIHtcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gcGFyc2VJbnQodGhpcy5wbGF5ZXJOdW0pO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3RhbFBsYXllcikge1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMucGxheWVyUGF0aCArIFwiUGxheWVyIDRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQodGhpcy5wbGF5ZXJQYXRoICsgXCJQbGF5ZXIgMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1dpbigpe1xyXG4gICAgICAgIGxldCBhbGl2ZSA9IHRoaXMudG90YWxQbGF5ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMil7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gNCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyNC5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuYWxpdmVQbGF5ZXIgPSBhbGl2ZTtcclxuICAgICAgICBpZiAodGhpcy5hbGl2ZVBsYXllciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLnBsYXllci5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5VSS5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQbGF5ZXIobnVtKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyUGxheWVyID0gbnVtICUgdGhpcy50b3RhbFBsYXllcjtcclxuICAgICAgICBpZigodGhpcy5wbGF5ZXIgJiYgIXRoaXMucGxheWVyLmlzRGllKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5jbGVhckxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc2FibGUoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXI0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXJVaSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VyclBsYXllciwgXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKG51bSsxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBsZXQgc2NlbmVOYW1lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIGlmKHNjZW5lTmFtZSA9PSBcIm1hcDFcIilcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtMSwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBpZihzY2VuZU5hbWUgPT0gXCJtYXAyXCIpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbTIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRXZlbnRTdGFydCwgdGhpcyk7ICAgIC8vIHRvdWNoZWRcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRXZlbnRNb3ZlLCB0aGlzKTsgICAgICAvLyBhaW1cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25FdmVudENhbmNlbCwgdGhpcyk7ICAvLyBzaG9vdFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkV2ZW50RW5kLCB0aGlzKTsgICAgICAgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRXZlbnRTdGFydCwgdGhpcyk7ICAgLy8gdG91Y2hlZFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRXZlbnRNb3ZlLCB0aGlzKTsgICAgIC8vIGFpbVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25FdmVudENhbmNlbCwgdGhpcyk7IC8vIHNob290XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uRXZlbnRFbmQsIHRoaXMpOyAgICAgICAgLy8gY2FuY2VsIHNob290XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTogICAgICAgIC8vIG1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hS2V5RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKC0xKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiAgICAgICAgLy8gbW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kS2V5RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOiAgICAvLyBqdW1wXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmVzY2FwZTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuVUkucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5wOiAgICAgICAgLy8gcGFzc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIodGhpcy5jdXJyUGxheWVyICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnRpbWVyVmFsID0gMjA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hS2V5RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kS2V5RG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oMSk7ICAvLyBtb3ZlIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oMCk7ICAvLyBzdG9wIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRLZXlEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFLZXlEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigtMSk7IC8vIG1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApOyAgLy8gc3RvcCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckp1bXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmY6ICAgICAgICAvLyBzaG9vdCAoYnVsbGV0KSAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucjogICAgICAgIC8vIGJvbWJcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLndlYXBvbiA9IFwiYm9tYlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50U3RhcnQgKGV2ZW50KSB7ICAvLyB0b3VjaGVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZighdGhpcy5zaG9vdCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXJ0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdG9ySm9pbnQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmIuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uRXZlbnRNb3ZlIChldmVudCkgeyAgIC8vIGFpbVxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IGV2ZW50LmdldFN0YXJ0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgbW91c2VQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHZhciBkaWZmWCA9IG1vdXNlUG9zLnggLSBwbGF5ZXJQb3MueDtcclxuICAgICAgICB2YXIgZGlmZlkgPSBwbGF5ZXJQb3MueSAtIG1vdXNlUG9zLnk7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSk7IC8vIGFuZ2xlIGluIHJhZGlhblxyXG4gICAgICAgIGlmKGRpZmZYID49IDApIHsgICAgLy8gY2hhbmdlIHBsYXllciBkaXJlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKC0xKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRpZmZZIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob290QW5nbGUgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnNob290KXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWltID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiZ3VuXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLmd1blR5cGUgPT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd1N0cmFpZ2h0TGluZSh0aGlzLnNob290QW5nbGUsIDMwMCk7IC8vIGRyYXcgdHJhamVjdG9yeSBsaW5lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIuZ3VuVHlwZSA9PSBcImJ1cnN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmRyYXdTdHJhaWdodExpbmUodGhpcy5zaG9vdEFuZ2xlLCAyMDApOyAvLyBkcmF3IHRyYWplY3RvcnkgbGluZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyLmd1blR5cGUgPT0gXCJzbmlwZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd1N0cmFpZ2h0TGluZSh0aGlzLnNob290QW5nbGUsIDQwMCk7IC8vIGRyYXcgdHJhamVjdG9yeSBsaW5lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIuZ3VuVHlwZSA9PSBcInNob3RndW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd0NpcmNsZSh0aGlzLnNob290QW5nbGUpOyAvLyBkcmF3IHRyYWplY3RvcnkgbGluZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiYm9tYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG93ZXIgPSAoTWF0aC5hYnMoZGlmZlkpID49IE1hdGguYWJzKGRpZmZYKSA/IE1hdGguYWJzKGRpZmZZKSA6IE1hdGguYWJzKGRpZmZYKSkgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmRyYXdDdXJ2ZUxpbmUodGhpcy5zaG9vdEFuZ2xlLCBwb3dlcioyKTsgLy8gZHJhdyBhcnJvd1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG93ZXIgPSAocG93ZXIgKiAyID4gMTAwKSA/IDEwMCA6IHBvd2VyICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudENhbmNlbCAoZXZlbnQpIHsgLy8gc2hvb3RcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaGF2ZVNob3QoKTtcclxuICAgIFxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkV2ZW50RW5kIChldmVudCkgeyAgLy8gY2FuY2VsIHNob290XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5oYXZlU2hvdCgpO1xyXG4gICAgXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGF2ZVNob3QoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zaG9vdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuY2xlYXJMaW5lKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zaG9vdCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiZ3VuXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyU2hvb3QodGhpcy5zaG9vdEFuZ2xlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImJvbWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJCb21iKHRoaXMuc2hvb3RBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckNoYW5nZURpcmVjdGlvbigwKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhdXNlIE1lbnUgQnV0dG9uc1xyXG5cclxuICAgIGluaXRQYXVzZU1lbnVCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCByZXN1bWVfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHJlc3VtZV9jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcmVzdW1lX2NsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICByZXN1bWVfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwicmVzdW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51L0JpZyBMYXlvdXQvcmVzdW1lQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocmVzdW1lX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwicmVzdGFydFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudS9CaWcgTGF5b3V0L3Jlc3RhcnRCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChyZXN0YXJ0X2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2V0dGluZ3NfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNldHRpbmdzXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51L0JpZyBMYXlvdXQvc2V0dGluZ3NCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIGxldCBleGl0X2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBleGl0X2NsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBleGl0X2NsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBleGl0X2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImV4aXRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnUvQmlnIExheW91dC9leGl0QnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZXhpdF9jbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIGxldCBzY2VuZU5hbWUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9hZGluZ1wiLCAoKT0+e1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR0aW5ncygpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1NldHRpbmdzIE1lbnVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBleGl0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb2FkaW5nXCIsICgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGluZ3MgTWVudSBCdXR0b25zXHJcblxyXG4gICAgaW5pdFNldHRpbmdzTWVudUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbG9zZV9jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImNsb3NlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9TZXR0aW5ncyBNZW51L2Nsb3NlQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBiZ211dGVfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGJnbXV0ZV9jbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImJnTXV0ZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L0JHIE11dGUvYmdNdXRlQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2Z4TXV0ZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L1NGWCBNdXRlL3NmeE11dGVCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzZnhtdXRlX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBiZ19zbGlkZXJFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGJnX3NsaWRlckV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmdfc2xpZGVyRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBiZ19zbGlkZXJFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiY2hhbmdlQmdWb2xcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1NldHRpbmdzIE1lbnUvQmlnIExheW91dC9CRyBWb2x1bWUvYmdTbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikuc2xpZGVFdmVudHMucHVzaChiZ19zbGlkZXJFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgc2Z4X3NsaWRlckV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJjaGFuZ2VTZnhWb2xcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1NldHRpbmdzIE1lbnUvQmlnIExheW91dC9TRlggVm9sdW1lL3NmeFNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5zbGlkZUV2ZW50cy5wdXNoKHNmeF9zbGlkZXJFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBiZ011dGUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Z4TXV0ZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJnVm9sKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L0JHIFZvbHVtZS9iZ1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2Z4Vm9sKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L1NGWCBWb2x1bWUvc2Z4U2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbWVyYUFuY2hvcih2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFBbmNob3IgPSB2YWx1ZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGdldFdpbigpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy53aW5uZXIgIT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV2VhcG9uVWkoKXtcclxuICAgICAgICAvLyB2YXIgd2VhcG9uU3ByaXRlID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9XZWFwb25VaVwiKS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICBpZih0aGlzLnBsYXllcil7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wbGF5ZXIuZ2V0Q3VycldlYXBvbk51bSgpKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9XZWFwb25VaVwiKS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud2VhcG9uU3ByaXRlMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWFwb25TcHJpdGUsIFwidXBkYXRld2VhcG9uVWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyRGllKCl7XHJcbiAgICAgICAgdGhpcy5hbGl2ZVBsYXllciAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmFsaXZlUGxheWVyID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLlVJLnRpbWVyVmFsID0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5wbGF5ZXIucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53aW5uZXIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5pc0RpZSwgXCJkaWVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICAvL3RoaXMuVUkucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGxheWVyVWkoKXtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucGxheWVyLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnBsYXllci5wbGF5ZXJDaGFyKXtcclxuICAgICAgICAgICAgY2FzZSBcImNoYXIxXCI6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTBcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hhcjJcIjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGFyM1wiOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UwXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoYXI0XCI6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTBcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UwXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VyclBsYXllcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJQbGF5ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56f80q/EatFCbeSiWk7QmlG', 'Instructions-win');
// scripts/Instructions-win.ts

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
var InstructionsMenuWin = /** @class */ (function (_super) {
    __extends(InstructionsMenuWin, _super);
    function InstructionsMenuWin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuWin.prototype.start = function () {
        var returnbtn = new cc.Component.EventHandler();
        returnbtn.target = this.node;
        returnbtn.component = "Instructions-win";
        returnbtn.handler = "loadNextInstructions";
        cc.find("Return").getComponent(cc.Button).clickEvents.push(returnbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-win";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuWin.prototype.loadNextInstructions = function () {
        cc.director.loadScene("menu");
    };
    InstructionsMenuWin.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - minimap");
    };
    InstructionsMenuWin = __decorate([
        ccclass
    ], InstructionsMenuWin);
    return InstructionsMenuWin;
}(cc.Component));
exports.default = InstructionsMenuWin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLXdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDs7SUFrQ0EsQ0FBQztJQTVCRyxtQ0FBSyxHQUFMO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixTQUFTLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHM0MsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHdEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEUsQ0FBQztJQUVELGtEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxrREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFoQ2dCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBa0N2QztJQUFELDBCQUFDO0NBbENELEFBa0NDLENBbENnRCxFQUFFLENBQUMsU0FBUyxHQWtDNUQ7a0JBbENvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9uc01lbnVXaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgRWRpdF9Cb3g6IGNjLkVkaXRCb3gsXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCByZXR1cm5idG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHJldHVybmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcmV0dXJuYnRuLmNvbXBvbmVudCA9IFwiSW5zdHJ1Y3Rpb25zLXdpblwiO1xyXG4gICAgICAgIHJldHVybmJ0bi5oYW5kbGVyID0gXCJsb2FkTmV4dEluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIlJldHVyblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHJldHVybmJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy13aW5cIjtcclxuICAgICAgICBwcmV2YnRuLmhhbmRsZXIgPSBcImxvYWRQcmV2SW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiUHJldlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHByZXZidG4pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmV4dEluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByZXZJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnMgLSBtaW5pbWFwXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-option1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '717acDLmcNIiYT9UfpZAPhm', 'Instructions-option1');
// scripts/Instructions-option1.ts

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
var InstructionsMenuOption1 = /** @class */ (function (_super) {
    __extends(InstructionsMenuOption1, _super);
    function InstructionsMenuOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuOption1.prototype.start = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-option1";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-option1";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuOption1.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - option 2");
    };
    InstructionsMenuOption1.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions");
    };
    InstructionsMenuOption1 = __decorate([
        ccclass
    ], InstructionsMenuOption1);
    return InstructionsMenuOption1;
}(cc.Component));
exports.default = InstructionsMenuOption1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW9wdGlvbjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBa0NBLENBQUM7SUE1QkcsdUNBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2xFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaENnQix1QkFBdUI7UUFEM0MsT0FBTztPQUNhLHVCQUF1QixDQWtDM0M7SUFBRCw4QkFBQztDQWxDRCxBQWtDQyxDQWxDb0QsRUFBRSxDQUFDLFNBQVMsR0FrQ2hFO2tCQWxDb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnNNZW51T3B0aW9uMSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBFZGl0X0JveDogY2MuRWRpdEJveCxcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IG5leHRidG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG5leHRidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5leHRidG4uY29tcG9uZW50ID0gXCJJbnN0cnVjdGlvbnMtb3B0aW9uMVwiO1xyXG4gICAgICAgIG5leHRidG4uaGFuZGxlciA9IFwibG9hZE5leHRJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJOZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dGJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24xXCI7XHJcbiAgICAgICAgcHJldmJ0bi5oYW5kbGVyID0gXCJsb2FkUHJldkluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIlByZXZcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChwcmV2YnRuKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5leHRJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnMgLSBvcHRpb24gMlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJldkluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27c01J847FL9JfMFwSZUf6Z', 'Ground');
// scripts/Ground.ts

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
var Ground = /** @class */ (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGone = false;
        return _this;
    }
    Ground.prototype.init = function (node, index) {
        this.setInitPos(node, index);
    };
    Ground.prototype.reuse = function (bulletManager) {
    };
    Ground.prototype.setInitPos = function (node, index) {
        this.node.parent = node;
        this.node.position = cc.v3(-480 + (15 * index) % (15 * 200), -320 + 15 * Math.floor(index / 200));
        this.node.position = this.node.position.addSelf(node.position);
    };
    Ground.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bomb") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.1);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
        else if (other.node.group == "bullet") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.05);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
    };
    Ground.prototype.onPreSolve = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "explosiveObj") {
            this.node.getChildByName("particle").active = true;
            if (!this.isGone) {
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.35);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
    };
    Ground = __decorate([
        ccclass
    ], Ground);
    return Ground;
}(cc.Component));
exports.default = Ground;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOERDO1FBM0RXLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBMkRwQyxDQUFDO0lBekRVLHFCQUFJLEdBQVgsVUFBWSxJQUFhLEVBQUUsS0FBYTtRQUVwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQUssR0FBTCxVQUFNLGFBQWE7SUFHbkIsQ0FBQztJQUVPLDJCQUFVLEdBQWxCLFVBQW1CLElBQWEsRUFBRSxLQUFhO1FBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBbkMsaUJBdUJDO1FBdEJHLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkQsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0UsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2pGO1NBRUo7YUFBTSxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25ELElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9FLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNqRjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFVLEdBQVYsVUFBVyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBL0IsaUJBWUM7UUFYRyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsRUFBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25ELElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9FLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNqRjtTQUNKO0lBQ0wsQ0FBQztJQTdEZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQThEMUI7SUFBRCxhQUFDO0NBOURELEFBOERDLENBOURtQyxFQUFFLENBQUMsU0FBUyxHQThEL0M7a0JBOURvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuXHJcbiAgICBwcml2YXRlIGlzR29uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KG5vZGU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdFBvcyhub2RlLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV1c2UoYnVsbGV0TWFuYWdlcilcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEluaXRQb3Mobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTQ4MCArICgxNSAqIGluZGV4KSAlICgxNSAqIDIwMCksIC0zMjAgKyAxNSAqIE1hdGguZmxvb3IoaW5kZXggLyAyMDApKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZFNlbGYobm9kZS5wb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJvbWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0dvbmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwic2NvcmVcIiwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUlcIikuZ2V0Q29tcG9uZW50KFwiVUlcIikudXBkYXRlUmVjb3JkKFwiY29pblwiLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYnVsbGV0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNHb25lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0dvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJzY29yZVwiLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJjb2luXCIsIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmVTb2x2ZShjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImV4cGxvc2l2ZU9ialwiKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNHb25lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMzUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0dvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJzY29yZVwiLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJjb2luXCIsIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-minimap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a77eQPNs5HnKeoq+nyiB++', 'Instructions-minimap');
// scripts/Instructions-minimap.ts

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
var InstructionsMenuMinimap = /** @class */ (function (_super) {
    __extends(InstructionsMenuMinimap, _super);
    function InstructionsMenuMinimap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuMinimap.prototype.start = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-minimap";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-minimap";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuMinimap.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - win");
    };
    InstructionsMenuMinimap.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - option 2");
    };
    InstructionsMenuMinimap = __decorate([
        ccclass
    ], InstructionsMenuMinimap);
    return InstructionsMenuMinimap;
}(cc.Component));
exports.default = InstructionsMenuMinimap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW1pbmltYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBa0NBLENBQUM7SUE1QkcsdUNBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2xFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFoQ2dCLHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBa0MzQztJQUFELDhCQUFDO0NBbENELEFBa0NDLENBbENvRCxFQUFFLENBQUMsU0FBUyxHQWtDaEU7a0JBbENvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9uc01lbnVNaW5pbWFwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbmV4dGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmV4dGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbmV4dGJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1taW5pbWFwXCI7XHJcbiAgICAgICAgbmV4dGJ0bi5oYW5kbGVyID0gXCJsb2FkTmV4dEluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIk5leHRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChuZXh0YnRuKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBwcmV2YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBwcmV2YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwcmV2YnRuLmNvbXBvbmVudCA9IFwiSW5zdHJ1Y3Rpb25zLW1pbmltYXBcIjtcclxuICAgICAgICBwcmV2YnRuLmhhbmRsZXIgPSBcImxvYWRQcmV2SW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiUHJldlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHByZXZidG4pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmV4dEluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9ucyAtIHdpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJldkluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9ucyAtIG9wdGlvbiAyXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MainMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7729bMu5yhNyIrF8qYicDpz', 'MainMenu');
// scripts/MainMenu.ts

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
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        return _this;
    }
    MainMenu.prototype.initSignUpBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/Background/Block/Big Layout/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    MainMenu.prototype.signUp = function () {
        cc.director.loadScene("sign up");
    };
    MainMenu.prototype.initSignInBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/Background/Block/Big Layout/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    MainMenu.prototype.signIn = function () {
        cc.director.loadScene("sign in");
    };
    MainMenu.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    MainMenu.prototype.onLoad = function () {
        this.playBGM();
        this.initSignUpBtn();
        this.initSignInBtn();
    };
    MainMenu.prototype.start = function () { };
    MainMenu.prototype.update = function (dt) { };
    __decorate([
        property(cc.AudioClip)
    ], MainMenu.prototype, "bgm", void 0);
    MainMenu = __decorate([
        ccclass
    ], MainMenu);
    return MainMenu;
}(cc.Component));
exports.default = MainMenu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFpbk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQ0M7UUF4Q0csU0FBRyxHQUFpQixJQUFJLENBQUM7O0lBd0M3QixDQUFDO0lBdENHLGdDQUFhLEdBQWI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0JBQUssR0FBTCxjQUFVLENBQUM7SUFFWCx5QkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUF0Q2Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt5Q0FDRTtJQUhSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyQzVCO0lBQUQsZUFBQztDQTNDRCxBQTJDQyxDQTNDcUMsRUFBRSxDQUFDLFNBQVMsR0EyQ2pEO2tCQTNDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgaW5pdFNpZ25VcEJ0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1haW5NZW51XCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2lnblVwXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9CYWNrZ3JvdW5kL0Jsb2NrL0JpZyBMYXlvdXQvU2lnblVwQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25VcCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzaWduIHVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTaWduSW5CdG4oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNYWluTWVudVwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNpZ25JblwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQmFja2dyb3VuZC9CbG9jay9CaWcgTGF5b3V0L1NpZ25JbkJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2lnbiBpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QkdNKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBsYXlCR00oKTtcclxuICAgICAgICB0aGlzLmluaXRTaWduVXBCdG4oKTtcclxuICAgICAgICB0aGlzLmluaXRTaWduSW5CdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c768amPVpFL4Dw/rwyD4dp', 'Menu');
// scripts/Menu.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        return _this;
    }
    Menu.prototype.onLoad = function () {
        this.playBGM();
        this.loadUserStats();
        this.initMenuButtons();
        this.initSettingsMenuButtons();
    };
    Menu.prototype.start = function () { };
    Menu.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    Menu.prototype.loadUserStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, stats;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = firebase.auth().currentUser;
                        if (!user) return [3 /*break*/, 2];
                        stats = firebase.database().ref("userData/" + user.uid);
                        console.log("ada");
                        return [4 /*yield*/, stats.once("value").then(function (snapshot) {
                                _this.setUserStat(snapshot.val().coin, snapshot.val().gem, snapshot.val().char1, snapshot.val().char2, snapshot.val().char3, snapshot.val().char4, snapshot.val().AK47, snapshot.val().AR, snapshot.val().grenade, snapshot.val().shotgun, snapshot.val().sniper, snapshot.val().purple, snapshot.val().forest, snapshot.val().username);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.setUserStat(0, 0, true, false, false, false, true, false, false, false, false, true, false, "");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.setUserStat = function (coin, gem, char1, char2, char3, char4, AK47, AR, grenade, shotgun, sniper, purple, forest, username) {
        console.log("char1", char1);
        cc.sys.localStorage.setItem("coin", coin);
        cc.sys.localStorage.setItem("gem", gem);
        cc.sys.localStorage.setItem("char1", char1);
        cc.sys.localStorage.setItem("char2", char2);
        cc.sys.localStorage.setItem("char3", char3);
        cc.sys.localStorage.setItem("char4", char4);
        cc.sys.localStorage.setItem("AK47", AK47);
        cc.sys.localStorage.setItem("AR", AR);
        cc.sys.localStorage.setItem("grenade", grenade);
        cc.sys.localStorage.setItem("shotgun", shotgun);
        cc.sys.localStorage.setItem("sniper", sniper);
        cc.sys.localStorage.setItem("purple", purple);
        cc.sys.localStorage.setItem("forest", forest);
        cc.sys.localStorage.setItem("username", username);
    };
    Menu.prototype.initMenuButtons = function () {
        var instrbtn = new cc.Component.EventHandler();
        instrbtn.target = this.node;
        instrbtn.component = "Menu";
        instrbtn.handler = "loadInstructions";
        cc.find("HowToPlay").getComponent(cc.Button).clickEvents.push(instrbtn);
        var playbtn = new cc.Component.EventHandler();
        playbtn.target = this.node;
        playbtn.component = "Menu";
        playbtn.handler = "loadPlayInstructions";
        cc.find("YellowButton").getComponent(cc.Button).clickEvents.push(playbtn);
        var play2btn = new cc.Component.EventHandler();
        play2btn.target = this.node;
        play2btn.component = "Menu";
        play2btn.handler = "loadPlayInstructions";
        cc.find("YellowButton/Play").getComponent(cc.Button).clickEvents.push(play2btn);
        var settings_clickEventHandler = new cc.Component.EventHandler();
        settings_clickEventHandler.target = this.node;
        settings_clickEventHandler.component = "Menu";
        settings_clickEventHandler.handler = "settings";
        cc.find("SettingsBtn").getComponent(cc.Button).clickEvents.push(settings_clickEventHandler);
        var shopbtn = new cc.Component.EventHandler();
        shopbtn.target = this.node;
        shopbtn.component = "Menu";
        shopbtn.handler = "loadShop";
        cc.find("shop").getComponent(cc.Button).clickEvents.push(shopbtn);
        var xbtn = new cc.Component.EventHandler();
        xbtn.target = this.node;
        xbtn.component = "Menu";
        xbtn.handler = "loadQuitGame";
        cc.find("X button").getComponent(cc.Button).clickEvents.push(xbtn);
    };
    Menu.prototype.loadShop = function () {
        cc.director.loadScene("shop");
    };
    Menu.prototype.loadQuitGame = function () {
        cc.director.end();
    };
    Menu.prototype.loadInstructions = function () {
        cc.director.loadScene("instructions");
    };
    Menu.prototype.loadPlayInstructions = function () {
        cc.director.loadScene("player choose");
    };
    Menu.prototype.settings = function () {
        cc.find("Settings Menu").active = true;
    };
    Menu.prototype.initSettingsMenuButtons = function () {
        var close_clickEventHandler = new cc.Component.EventHandler();
        close_clickEventHandler.target = this.node;
        close_clickEventHandler.component = "Menu";
        close_clickEventHandler.handler = "close";
        cc.find("Settings Menu/closeBtn").getComponent(cc.Button).clickEvents.push(close_clickEventHandler);
        var bgmute_clickEventHandler = new cc.Component.EventHandler();
        bgmute_clickEventHandler.target = this.node;
        bgmute_clickEventHandler.component = "Menu";
        bgmute_clickEventHandler.handler = "bgMute";
        cc.find("Settings Menu/Big Layout/BG Mute/bgMuteBtn").getComponent(cc.Button).clickEvents.push(bgmute_clickEventHandler);
        var sfxmute_clickEventHandler = new cc.Component.EventHandler();
        sfxmute_clickEventHandler.target = this.node;
        sfxmute_clickEventHandler.component = "Menu";
        sfxmute_clickEventHandler.handler = "sfxMute";
        cc.find("Settings Menu/Big Layout/SFX Mute/sfxMuteBtn").getComponent(cc.Button).clickEvents.push(sfxmute_clickEventHandler);
        var bg_sliderEventHandler = new cc.Component.EventHandler();
        bg_sliderEventHandler.target = this.node;
        bg_sliderEventHandler.component = "Menu";
        bg_sliderEventHandler.handler = "changeBgVol";
        cc.find("Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).slideEvents.push(bg_sliderEventHandler);
        var sfx_sliderEventHandler = new cc.Component.EventHandler();
        sfx_sliderEventHandler.target = this.node;
        sfx_sliderEventHandler.component = "Menu";
        sfx_sliderEventHandler.handler = "changeSfxVol";
        cc.find("Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).slideEvents.push(sfx_sliderEventHandler);
    };
    Menu.prototype.close = function () {
        cc.find("Settings Menu").active = false;
    };
    Menu.prototype.bgMute = function () {
        cc.audioEngine.setMusicVolume(0);
    };
    Menu.prototype.sfxMute = function () {
        cc.audioEngine.setEffectsVolume(0);
    };
    Menu.prototype.changeBgVol = function () {
        var value = cc.find("Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setMusicVolume(value);
    };
    Menu.prototype.changeSfxVol = function () {
        var value = cc.find("Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setEffectsVolume(value);
    };
    __decorate([
        property(cc.AudioClip)
    ], Menu.prototype, "bgm", void 0);
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXdLQztRQXJLRyxTQUFHLEdBQWlCLElBQUksQ0FBQzs7SUFxSzdCLENBQUM7SUEvSkcscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELG9CQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgsc0JBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVLLDRCQUFhLEdBQW5COzs7Ozs7O3dCQUNRLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDOzZCQUNwQyxJQUFJLEVBQUosd0JBQUk7d0JBQ0MsS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDbEIscUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO2dDQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUM3RSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFDaEUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFDdEYsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzRCQUNqRyxDQUFDLENBQUMsRUFBQTs7d0JBTEYsU0FLRSxDQUFBOzs7d0JBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztLQUU1RztJQUVELDBCQUFXLEdBQVgsVUFBWSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUTtRQUMzRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxL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QU87T0FDYSxJQUFJLENBd0t4QjtJQUFELFdBQUM7Q0F4S0QsQUF3S0MsQ0F4S2lDLEVBQUUsQ0FBQyxTQUFTLEdBd0s3QztrQkF4S29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlCR00oKTtcclxuICAgICAgICB0aGlzLmxvYWRVc2VyU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmluaXRNZW51QnV0dG9ucygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmdzTWVudUJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIHBsYXlCR00oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkVXNlclN0YXRzKCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGlmKHVzZXIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRzID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJ1c2VyRGF0YS9cIiArIHVzZXIudWlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGFcIilcclxuICAgICAgICAgICAgYXdhaXQgc3RhdHMub25jZShcInZhbHVlXCIpLnRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyU3RhdChzbmFwc2hvdC52YWwoKS5jb2luLCBzbmFwc2hvdC52YWwoKS5nZW0sc25hcHNob3QudmFsKCkuY2hhcjEsXHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC52YWwoKS5jaGFyMiwgc25hcHNob3QudmFsKCkuY2hhcjMsIHNuYXBzaG90LnZhbCgpLmNoYXI0LFxyXG4gICAgICAgICAgICAgICAgc25hcHNob3QudmFsKCkuQUs0Nywgc25hcHNob3QudmFsKCkuQVIsIHNuYXBzaG90LnZhbCgpLmdyZW5hZGUsIHNuYXBzaG90LnZhbCgpLnNob3RndW4sXHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC52YWwoKS5zbmlwZXIsIHNuYXBzaG90LnZhbCgpLnB1cnBsZSwgc25hcHNob3QudmFsKCkuZm9yZXN0LCBzbmFwc2hvdC52YWwoKS51c2VybmFtZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJTdGF0KDAsIDAsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJTdGF0KGNvaW4sIGdlbSwgY2hhcjEsIGNoYXIyLCBjaGFyMywgY2hhcjQsIEFLNDcsIEFSLCBncmVuYWRlLCBzaG90Z3VuLCBzbmlwZXIsIHB1cnBsZSwgZm9yZXN0LCB1c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcjFcIiwgY2hhcjEpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5cIiwgY29pbik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VtXCIsIGdlbSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjFcIiwgY2hhcjEpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIyXCIsIGNoYXIyKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyM1wiLCBjaGFyMyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjRcIiwgY2hhcjQpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFLNDdcIiwgQUs0Nyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQVJcIiwgQVIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdyZW5hZGVcIiwgZ3JlbmFkZSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hvdGd1blwiLCBzaG90Z3VuKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzbmlwZXJcIiwgc25pcGVyKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwdXJwbGVcIiwgcHVycGxlKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3Jlc3RcIiwgZm9yZXN0KTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCB1c2VybmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1lbnVCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCBpbnN0cmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgaW5zdHJidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGluc3RyYnRuLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIGluc3RyYnRuLmhhbmRsZXIgPSBcImxvYWRJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICBjYy5maW5kKFwiSG93VG9QbGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goaW5zdHJidG4pO1xyXG5cclxuICAgICAgICBsZXQgcGxheWJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcGxheWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcGxheWJ0bi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBwbGF5YnRuLmhhbmRsZXIgPSBcImxvYWRQbGF5SW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlllbGxvd0J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHBsYXlidG4pO1xyXG5cclxuICAgICAgICBsZXQgcGxheTJidG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHBsYXkyYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwbGF5MmJ0bi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBwbGF5MmJ0bi5oYW5kbGVyID0gXCJsb2FkUGxheUluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJZZWxsb3dCdXR0b24vUGxheVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHBsYXkyYnRuKTtcclxuXHJcbiAgICAgICAgbGV0IHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2V0dGluZ3NfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgc2V0dGluZ3NfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2V0dGluZ3NcIjtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3NCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIGxldCBzaG9wYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaG9wYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaG9wYnRuLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIHNob3BidG4uaGFuZGxlciA9IFwibG9hZFNob3BcIjtcclxuICAgICAgICBjYy5maW5kKFwic2hvcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNob3BidG4pO1xyXG5cclxuICAgICAgICBsZXQgeGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgeGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgeGJ0bi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICB4YnRuLmhhbmRsZXIgPSBcImxvYWRRdWl0R2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJYIGJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHhidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTaG9wKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2hvcFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUXVpdEdhbWUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQbGF5SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicGxheWVyIGNob29zZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR0aW5ncygpIHtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3MgTWVudVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTZXR0aW5nc01lbnVCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCBjbG9zZV9jbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImNsb3NlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlNldHRpbmdzIE1lbnUvY2xvc2VCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbG9zZV9jbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIGxldCBiZ211dGVfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGJnbXV0ZV9jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIGJnbXV0ZV9jbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJiZ011dGVcIjtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L0JHIE11dGUvYmdNdXRlQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgc2Z4bXV0ZV9jbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJzZnhNdXRlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlNldHRpbmdzIE1lbnUvQmlnIExheW91dC9TRlggTXV0ZS9zZnhNdXRlQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2Z4bXV0ZV9jbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICBcclxuICAgICAgICBsZXQgYmdfc2xpZGVyRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBiZ19zbGlkZXJFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGJnX3NsaWRlckV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBiZ19zbGlkZXJFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiY2hhbmdlQmdWb2xcIjtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L0JHIFZvbHVtZS9iZ1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5zbGlkZUV2ZW50cy5wdXNoKGJnX3NsaWRlckV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIGxldCBzZnhfc2xpZGVyRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzZnhfc2xpZGVyRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzZnhfc2xpZGVyRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIHNmeF9zbGlkZXJFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiY2hhbmdlU2Z4Vm9sXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlNldHRpbmdzIE1lbnUvQmlnIExheW91dC9TRlggVm9sdW1lL3NmeFNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5zbGlkZUV2ZW50cy5wdXNoKHNmeF9zbGlkZXJFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGJnTXV0ZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZnhNdXRlKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQmdWb2woKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY2MuZmluZChcIlNldHRpbmdzIE1lbnUvQmlnIExheW91dC9CRyBWb2x1bWUvYmdTbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3M7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNmeFZvbCgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjYy5maW5kKFwiU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L1NGWCBWb2x1bWUvc2Z4U2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Playerchoose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32f77ZjFDJJYqkCmT6dXvNX', 'Playerchoose');
// scripts/Playerchoose.ts

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
var Playerchoose = /** @class */ (function (_super) {
    __extends(Playerchoose, _super);
    function Playerchoose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Playerchoose.prototype.start = function () {
        var twobtn = new cc.Component.EventHandler();
        twobtn.target = this.node;
        twobtn.component = "Playerchoose";
        twobtn.handler = "loadTwoPlayers";
        cc.find("2button").getComponent(cc.Button).clickEvents.push(twobtn);
        var threebtn = new cc.Component.EventHandler();
        threebtn.target = this.node;
        threebtn.component = "Playerchoose";
        threebtn.handler = "loadThreePlayers";
        cc.find("3button").getComponent(cc.Button).clickEvents.push(threebtn);
        var fourbtn = new cc.Component.EventHandler();
        fourbtn.target = this.node;
        fourbtn.component = "Playerchoose";
        fourbtn.handler = "loadFourPlayers";
        cc.find("4button").getComponent(cc.Button).clickEvents.push(fourbtn);
        var teambtn = new cc.Component.EventHandler();
        teambtn.target = this.node;
        teambtn.component = "Playerchoose";
        teambtn.handler = "loadTeamPlayers";
        cc.find("teambutton").getComponent(cc.Button).clickEvents.push(teambtn);
        var xbtn = new cc.Component.EventHandler();
        xbtn.target = this.node;
        xbtn.component = "Playerchoose";
        xbtn.handler = "loadQuitGame";
        cc.find("X button").getComponent(cc.Button).clickEvents.push(xbtn);
    };
    Playerchoose.prototype.loadTwoPlayers = function () {
        cc.sys.localStorage.setItem("PlayerNum", 2);
        cc.director.loadScene("player name");
    };
    Playerchoose.prototype.loadThreePlayers = function () {
        cc.sys.localStorage.setItem("PlayerNum", 3);
        cc.director.loadScene("player name");
    };
    Playerchoose.prototype.loadFourPlayers = function () {
        cc.sys.localStorage.setItem("PlayerNum", 4);
        cc.director.loadScene("player name");
    };
    Playerchoose.prototype.loadTeamPlayers = function () {
        cc.sys.localStorage.setItem("PlayerNum", 4);
        cc.director.loadScene("player name");
    };
    Playerchoose.prototype.loadQuitGame = function () {
        cc.director.loadScene("menu");
    };
    Playerchoose = __decorate([
        ccclass
    ], Playerchoose);
    return Playerchoose;
}(cc.Component));
exports.default = Playerchoose;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyY2hvb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREOztJQXlFQSxDQUFDO0lBbkVHLDRCQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFHbEMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNwQyxRQUFRLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBR3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR3RFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDbkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUdwQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdyRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFHcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2RSxDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUF2RWdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F5RWhDO0lBQUQsbUJBQUM7Q0F6RUQsQUF5RUMsQ0F6RXlDLEVBQUUsQ0FBQyxTQUFTLEdBeUVyRDtrQkF6RW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcmNob29zZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBFZGl0X0JveDogY2MuRWRpdEJveCxcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHR3b2J0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdHdvYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0d29idG4uY29tcG9uZW50ID0gXCJQbGF5ZXJjaG9vc2VcIjtcclxuICAgICAgICB0d29idG4uaGFuZGxlciA9IFwibG9hZFR3b1BsYXllcnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCIyYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2godHdvYnRuKTtcclxuXHJcbiAgICAgICAgbGV0IHRocmVlYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0aHJlZWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhyZWVidG4uY29tcG9uZW50ID0gXCJQbGF5ZXJjaG9vc2VcIjtcclxuICAgICAgICB0aHJlZWJ0bi5oYW5kbGVyID0gXCJsb2FkVGhyZWVQbGF5ZXJzXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiM2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHRocmVlYnRuKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBmb3VyYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBmb3VyYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBmb3VyYnRuLmNvbXBvbmVudCA9IFwiUGxheWVyY2hvb3NlXCI7XHJcbiAgICAgICAgZm91cmJ0bi5oYW5kbGVyID0gXCJsb2FkRm91clBsYXllcnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCI0YnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZm91cmJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgdGVhbWJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdGVhbWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGVhbWJ0bi5jb21wb25lbnQgPSBcIlBsYXllcmNob29zZVwiO1xyXG4gICAgICAgIHRlYW1idG4uaGFuZGxlciA9IFwibG9hZFRlYW1QbGF5ZXJzXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwidGVhbWJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHRlYW1idG4pO1xyXG5cclxuICAgICAgICBsZXQgeGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgeGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgeGJ0bi5jb21wb25lbnQgPSBcIlBsYXllcmNob29zZVwiO1xyXG4gICAgICAgIHhidG4uaGFuZGxlciA9IFwibG9hZFF1aXRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlggYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goeGJ0bik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUd29QbGF5ZXJzKCl7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyTnVtXCIsIDIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBsYXllciBuYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUaHJlZVBsYXllcnMoKXtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXJOdW1cIiwgMyk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicGxheWVyIG5hbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEZvdXJQbGF5ZXJzKCl7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyTnVtXCIsIDQpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBsYXllciBuYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUZWFtUGxheWVycygpe1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllck51bVwiLCA0KTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJwbGF5ZXIgbmFtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUXVpdEdhbWUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MiniCam.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b30ffBBZ6hNbqpVu0U3EK/0', 'MiniCam');
// scripts/MiniCam.ts

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
var MiniCam = /** @class */ (function (_super) {
    __extends(MiniCam, _super);
    function MiniCam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCam = null;
        _this.offset = 0;
        return _this;
    }
    MiniCam.prototype.onLoad = function () {
    };
    MiniCam.prototype.start = function () {
    };
    MiniCam.prototype.update = function (dt) {
        this.node.x = this.mainCam.getPosition().x - this.offset;
        if (this.node.x < (250 - this.offset)) {
            this.node.x = 250 - this.offset;
        }
        else if (this.node.x > (1750)) {
            this.node.x = 1750;
        }
        // console.log(this.node.x, "minicam");
    };
    __decorate([
        property(cc.Node)
    ], MiniCam.prototype, "mainCam", void 0);
    __decorate([
        property()
    ], MiniCam.prototype, "offset", void 0);
    MiniCam = __decorate([
        ccclass
    ], MiniCam);
    return MiniCam;
}(cc.Component));
exports.default = MiniCam;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWluaUNhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXlCQztRQXRCRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBbUJ2QixDQUFDO0lBakJHLHdCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsdUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkM7YUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsdUNBQXVDO0lBRTNDLENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTTtJQUd4QjtRQURDLFFBQVEsRUFBRTsyQ0FDUTtJQU5GLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F5QjNCO0lBQUQsY0FBQztDQXpCRCxBQXlCQyxDQXpCb0MsRUFBRSxDQUFDLFNBQVMsR0F5QmhEO2tCQXpCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaUNhbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluQ2FtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm1haW5DYW0uZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5vZmZzZXQ7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnggPCAoMjUwIC0gdGhpcy5vZmZzZXQpKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAyNTAgLSB0aGlzLm9mZnNldDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLnggPiAoMTc1MCkpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IDE3NTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS54LCBcIm1pbmljYW1cIik7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        _this.purplebtn = null;
        _this.junglebtn = null;
        _this.char1 = "true";
        _this.char2 = "false";
        _this.char3 = "false";
        _this.char4 = "false";
        _this.AK = "true";
        _this.AR = "false";
        _this.grenade = "false";
        _this.shotgun = "false";
        _this.sniper = "false";
        _this.purple = "false";
        _this.jungle = "false";
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
        // cc.sys.localStorage.setItem("char1", false); // FOR DEBUG DON'T DELETE
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
        // cc.sys.localStorage.setItem("AK47", false);
        // cc.sys.localStorage.setItem("AR", false);
        // cc.sys.localStorage.setItem("shotgun", false);
        // cc.sys.localStorage.setItem("grenade", false);
        // cc.sys.localStorage.setItem("sniper", false);
        // cc.sys.localStorage.setItem("purple", false);
        // cc.sys.localStorage.setItem("jungle", false);
        this.coin.string = cc.sys.localStorage.getItem("coin");
        this.gem.string = cc.sys.localStorage.getItem("gem");
        if (!this.coin.string) {
            this.coin.string = "0";
        }
        if (!this.gem.string) {
            this.gem.string = "0";
        }
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
        this.AK = cc.sys.localStorage.getItem("AK47");
        this.AR = cc.sys.localStorage.getItem("AR");
        this.grenade = cc.sys.localStorage.getItem("grenade");
        this.sniper = cc.sys.localStorage.getItem("shotgun");
        this.sniper = cc.sys.localStorage.getItem("sniper");
        this.purple = cc.sys.localStorage.getItem("purple");
        this.jungle = cc.sys.localStorage.getItem("jungle");
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
        this.weapons.on(cc.Node.EventType.MOUSE_DOWN, function () {
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
        this.purplebtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.purple != "true") {
                _this.playClickAudio();
                _this.buyItemCoin(_this.purplebtn, "purple");
            }
        });
        this.junglebtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.jungle != "true") {
                _this.playClickAudio();
                _this.buyItemCoin(_this.junglebtn, "jungle");
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
        if (this.purple == "true") {
            this.lockBtn(this.purplebtn);
        }
        if (this.jungle == "true") {
            this.lockBtn(this.junglebtn);
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
    Shop.prototype.buyItemCoin = function (btn, item) {
        var price = parseInt(btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string);
        var currCoin = parseInt(this.coin.string);
        if (currCoin >= price) {
            var remain = currCoin - price;
            this.coin.string = remain.toString();
            cc.sys.localStorage.setItem("coin", this.coin.string);
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
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "purplebtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "junglebtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXVTQztRQXBTRyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFHckIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFcEIsV0FBSyxHQUFXLE1BQU0sQ0FBQztRQUV2QixXQUFLLEdBQVcsT0FBTyxDQUFDO1FBRXhCLFdBQUssR0FBVyxPQUFPLENBQUM7UUFFeEIsV0FBSyxHQUFXLE9BQU8sQ0FBQztRQUV4QixRQUFFLEdBQVcsTUFBTSxDQUFDO1FBRXBCLFFBQUUsR0FBVyxPQUFPLENBQUM7UUFFckIsYUFBTyxHQUFXLE9BQU8sQ0FBQztRQUUxQixhQUFPLEdBQVcsT0FBTyxDQUFDO1FBRTFCLFlBQU0sR0FBVyxPQUFPLENBQUM7UUFFekIsWUFBTSxHQUFXLE9BQU8sQ0FBQztRQUV6QixZQUFNLEdBQVcsT0FBTyxDQUFDOztJQXdOckMsQ0FBQztJQXRORyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLElBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0kseUVBQXlFO1FBQ3pFLCtDQUErQztRQUMvQywrQ0FBK0M7UUFDL0MsK0NBQStDO1FBQy9DLDhDQUE4QztRQUM5Qyw0Q0FBNEM7UUFDNUMsaURBQWlEO1FBQ2pELGlEQUFpRDtRQUNqRCxnREFBZ0Q7UUFDaEQsZ0RBQWdEO1FBQ2hELGdEQUFnRDtRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDMUI7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQUEsaUJBZ0ZDO1FBL0VHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDNUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDN0MsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN2QyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUcsS0FBSSxDQUFDLEtBQUssSUFBSyxNQUFNLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUcsS0FBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUcsS0FBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUcsS0FBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzdDLElBQUcsS0FBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzdDLElBQUcsS0FBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUcsS0FBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQy9DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUcsS0FBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQy9DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFF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SSxDQXVTeEI7SUFBRCxXQUFDO0NBdlNELEFBdVNDLENBdlNpQyxFQUFFLENBQUMsU0FBUyxHQXVTN0M7a0JBdlNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBjbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb2luOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ2VtOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJhY2s6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFyYWN0ZXJzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdlYXBvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFwczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGNoYXIxYnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBjaGFyMmJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGNoYXIzYnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBjaGFyNGJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgQUtidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIEFSYnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgZ3JlbmFkZWJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc2hvdGd1bmJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc25pcGVyYnRuOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwdXJwbGVidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGp1bmdsZWJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNoYXIxOiBzdHJpbmcgPSBcInRydWVcIjtcclxuXHJcbiAgICBwcml2YXRlIGNoYXIyOiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgY2hhcjM6IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBjaGFyNDogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG5cclxuICAgIHByaXZhdGUgQUs6IHN0cmluZyA9IFwidHJ1ZVwiO1xyXG5cclxuICAgIHByaXZhdGUgQVI6IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBncmVuYWRlOiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc2hvdGd1bjogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG5cclxuICAgIHByaXZhdGUgc25pcGVyOiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBwdXJwbGU6IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuXHJcbiAgICBwcml2YXRlIGp1bmdsZTogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGlmKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFVzZXJTdGF0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm1lbnVNb3VzZU9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwbGF5QkdNKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlclN0YXRzKCkge1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIxXCIsIGZhbHNlKTsgLy8gRk9SIERFQlVHIERPTidUIERFTEVURVxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIyXCIsIGZhbHNlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyM1wiLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjRcIiwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFLNDdcIiwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFSXCIsIGZhbHNlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG90Z3VuXCIsIGZhbHNlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJncmVuYWRlXCIsIGZhbHNlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzbmlwZXJcIiwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInB1cnBsZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwianVuZ2xlXCIsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvaW4uc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pblwiKTtcclxuICAgICAgICB0aGlzLmdlbS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW1cIik7XHJcbiAgICAgICAgaWYoIXRoaXMuY29pbi5zdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5nZW0uc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VtLnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXIxID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjFcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyMiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXIyXCIpO1xyXG4gICAgICAgIHRoaXMuY2hhcjMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFyM1wiKTtcclxuICAgICAgICB0aGlzLmNoYXI0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjRcIik7XHJcbiAgICAgICAgdGhpcy5BSyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFLNDdcIik7XHJcbiAgICAgICAgdGhpcy5BUiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFSXCIpO1xyXG4gICAgICAgIHRoaXMuZ3JlbmFkZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdyZW5hZGVcIik7XHJcbiAgICAgICAgdGhpcy5zbmlwZXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG90Z3VuXCIpO1xyXG4gICAgICAgIHRoaXMuc25pcGVyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic25pcGVyXCIpO1xyXG4gICAgICAgIHRoaXMucHVycGxlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHVycGxlXCIpO1xyXG4gICAgICAgIHRoaXMuanVuZ2xlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwianVuZ2xlXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZENoYXJCdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICBtZW51TW91c2VPbigpIHtcclxuICAgICAgICB0aGlzLmJhY2subm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMud2VhcG9ucy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXBzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoYXIxYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMSAhPSAgXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXIxYnRuLCBcImNoYXIxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFyMmJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjIgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXIyYnRuLCBcImNoYXIyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFyM2J0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjMgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXIzYnRuLCBcImNoYXIzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFyNGJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjQgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmNoYXI0YnRuLCBcImNoYXI0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5BS2J0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuQUsgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLkFLYnRuLCBcIkFLNDdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLkFSYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5BUiAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlJdGVtR2VtKHRoaXMuQVJidG4sIFwiQVJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyZW5hZGVidG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmdyZW5hZGUgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLmdyZW5hZGVidG4sIFwiZ3JlbmFkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2hvdGd1bmJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuQVIgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLnNob3RndW5idG4sIFwic2hvdGd1blwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc25pcGVyYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5zbmlwZXIgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUdlbSh0aGlzLnNuaXBlcmJ0biwgXCJzbmlwZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnB1cnBsZWJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMucHVycGxlICE9IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eUl0ZW1Db2luKHRoaXMucHVycGxlYnRuLCBcInB1cnBsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuanVuZ2xlYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5qdW5nbGUgIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5SXRlbUNvaW4odGhpcy5qdW5nbGVidG4sIFwianVuZ2xlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUNsaWNrQXVkaW8oKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpY2ssIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2NlbmUoc2NlbmU6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENoYXJCdG4oKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGFyMSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5jaGFyMWJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY2hhcjIgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMuY2hhcjJidG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNoYXIzID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLmNoYXIzYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jaGFyNCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5jaGFyNGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuQUsgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMuQUtidG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLkFSID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLkFSYnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5ncmVuYWRlID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLmdyZW5hZGVidG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNob3RndW4gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMuc2hvdGd1bmJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc25pcGVyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnNuaXBlcmJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHVycGxlID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnB1cnBsZWJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuanVuZ2xlID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLmp1bmdsZWJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2tCdG4oYnRuOiBjYy5CdXR0b24pIHtcclxuICAgICAgICBidG4ubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTik7XHJcbiAgICAgICAgYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQcmljZShidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVByaWNlKGJ0bikge1xyXG4gICAgICAgIGJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJTT0xEXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV5SXRlbUdlbShidG4sIGl0ZW0pIHtcclxuICAgICAgICBsZXQgcHJpY2UgPSBwYXJzZUludChidG4ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyk7XHJcbiAgICAgICAgbGV0IGN1cnJHZW0gPSBwYXJzZUludCh0aGlzLmdlbS5zdHJpbmcpO1xyXG4gICAgICAgIGlmKGN1cnJHZW0gPj0gcHJpY2UpIHtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbiA9IGN1cnJHZW0gLSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5nZW0uc3RyaW5nID0gcmVtYWluLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdlbVwiLCB0aGlzLmdlbS5zdHJpbmcpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlclN0YXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1eUl0ZW1Db2luKGJ0biwgaXRlbSkge1xyXG4gICAgICAgIGxldCBwcmljZSA9IHBhcnNlSW50KGJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICBsZXQgY3VyckNvaW4gPSBwYXJzZUludCh0aGlzLmNvaW4uc3RyaW5nKTtcclxuICAgICAgICBpZihjdXJyQ29pbiA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluID0gY3VyckNvaW4gLSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IHJlbWFpbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2luXCIsIHRoaXMuY29pbi5zdHJpbmcpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlclN0YXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac5774pRQxFAoe9Jsb1z4uA', 'Instructions');
// scripts/Instructions.ts

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
var InstructionsMenu = /** @class */ (function (_super) {
    __extends(InstructionsMenu, _super);
    function InstructionsMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenu.prototype.start = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenu.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - option 1");
    };
    InstructionsMenu.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions");
    };
    InstructionsMenu = __decorate([
        ccclass
    ], InstructionsMenu);
    return InstructionsMenu;
}(cc.Component));
exports.default = InstructionsMenu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEOztJQWtDQSxDQUFDO0lBNUJHLGdDQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNuQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaENnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWtDcEM7SUFBRCx1QkFBQztDQWxDRCxBQWtDQyxDQWxDNkMsRUFBRSxDQUFDLFNBQVMsR0FrQ3pEO2tCQWxDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnNNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbmV4dGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmV4dGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbmV4dGJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgIG5leHRidG4uaGFuZGxlciA9IFwibG9hZE5leHRJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJOZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dGJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgIHByZXZidG4uaGFuZGxlciA9IFwibG9hZFByZXZJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJQcmV2XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocHJldmJ0bik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWROZXh0SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zIC0gb3B0aW9uIDFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByZXZJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnNcIik7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3d3fFcdjFPsb/d72VJtD3R', 'Lobby');
// scripts/Lobby.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map1 = null;
        _this.map2 = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.mouseOn();
    };
    // update (dt) {}
    NewClass.prototype.loadScene = function (scene) {
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(scene);
        });
    };
    NewClass.prototype.mouseOn = function () {
        var _this = this;
        this.map1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadScene("map1");
        });
        this.map2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadScene("map2");
        });
    };
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "map1", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "map2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9iYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnQ0M7UUE3QkcsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDOztJQTBCM0IsQ0FBQztJQXhCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGlCQUFpQjtJQUVqQiw0QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM1QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM1QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0M1QjtJQUFELGVBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NqRDtrQkFoQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbWFwMTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbWFwMjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZU9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBsb2FkU2NlbmUoc2NlbmU6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvYWRpbmdcIiwgKCk9PntcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU9uKCkge1xyXG4gICAgICAgIHRoaXMubWFwMS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwibWFwMVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hcDIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a1a9oNXDxKzbrPVKyv0YF2', 'UI');
// scripts/UI.ts

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
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer = null; // game timer
        _this.scoreLabel = null;
        _this.coinLabel = null;
        _this.gemLabel = null;
        _this.GameManager = null;
        _this.timeout = false; // game ended
        _this.isWin = false;
        _this.currPlayer = 1;
        _this.score = 0;
        _this.coin = 0;
        _this.gem = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    UI.prototype.start = function () {
        this.startTimer(20);
    };
    UI.prototype.update = function (dt) {
        this.timer.string = this.timerVal.toString();
        if (cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()) {
            this.unschedule(this.countTimer);
            this.isWin = true;
            this.timer.string = "--";
        }
    };
    UI.prototype.startTimer = function (time) {
        this.timerVal = time;
        this.schedule(this.countTimer, 1);
    };
    UI.prototype.countTimer = function () {
        if (!cc.director.isPaused() && !this.isWin) {
            this.timerVal--;
            if (this.timerVal < 0) {
                this.timeout = true;
            }
        }
    };
    UI.prototype.isTimeOut = function () {
        return this.timeout;
    };
    UI.prototype.pause = function () {
        if (cc.director.isPaused()) {
            cc.director.resume();
            cc.find("Canvas/Main Camera/Pause Menu").active = false;
        }
        else {
            cc.director.pause();
            cc.find("Canvas/Main Camera/Pause Menu").active = true;
        }
    };
    UI.prototype.getTime = function () {
        return this.timer.string;
    };
    UI.prototype.updateRecord = function (type, value) {
        if (type == "score") {
            this.score += value;
            this.scoreLabel.string = String(this.score).padStart(8, '0');
        }
        else if (type == "coin") {
            this.coin += value;
            this.coinLabel.string = String(this.coin);
        }
        else if (type == "gem") {
            this.gem += value;
            this.gemLabel.string = String(this.gem);
        }
    };
    UI.prototype.getRecord = function (type) {
        if (type == "score") {
            return this.score;
        }
        else if (type == "coin") {
            return this.coin;
        }
        else if (type == "gem") {
            return this.gem;
        }
    };
    __decorate([
        property(cc.Label)
    ], UI.prototype, "timer", void 0);
    __decorate([
        property(cc.Label)
    ], UI.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UI.prototype, "coinLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UI.prototype, "gemLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UI.prototype, "GameManager", void 0);
    UI = __decorate([
        ccclass
    ], UI);
    return UI;
}(cc.Component));
exports.default = UI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7UUFBQSxxRUF1R0M7UUFwR0csV0FBSyxHQUFhLElBQUksQ0FBQyxDQUFDLGFBQWE7UUFHckMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSXBCLGFBQU8sR0FBWSxLQUFLLENBQUMsQ0FBRyxhQUFhO1FBRXpDLFdBQUssR0FBWSxLQUFLLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLFNBQUcsR0FBVyxDQUFDLENBQUM7O0lBMEU1QixDQUFDO0lBeEVHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsa0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELG1CQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUM7WUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFD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QUksQ0FBQzsyQ0FDVTtJQWZYLEVBQUU7UUFEdEIsT0FBTztPQUNhLEVBQUUsQ0F1R3RCO0lBQUQsU0FBQztDQXZHRCxBQXVHQyxDQXZHK0IsRUFBRSxDQUFDLFNBQVMsR0F1RzNDO2tCQXZHb0IsRUFBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyOiBjYy5MYWJlbCA9IG51bGw7IC8vIGdhbWUgdGltZXJcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29pbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ2VtTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdGltZXJWYWw6IG51bWJlcjsgICAvLyBnYW1lIHRpbWVyXHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lb3V0OiBib29sZWFuID0gZmFsc2U7ICAgLy8gZ2FtZSBlbmRlZFxyXG5cclxuICAgIHByaXZhdGUgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJQbGF5ZXI6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBnZW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMudGltZXIuc3RyaW5nID0gdGhpcy50aW1lclZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvR2FtZSBNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLmdldFdpbigpKXtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnRUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyLnN0cmluZyA9IFwiLS1cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRUaW1lcih0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpbWVyVmFsID0gdGltZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnRUaW1lciwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnRUaW1lcigpe1xyXG4gICAgICAgIGlmKCFjYy5kaXJlY3Rvci5pc1BhdXNlZCgpICYmICF0aGlzLmlzV2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJWYWwtLTtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lclZhbCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUaW1lT3V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXIuc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlY29yZCh0eXBlLCB2YWx1ZSl7XHJcbiAgICAgICAgaWYodHlwZSA9PSBcInNjb3JlXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gU3RyaW5nKHRoaXMuc2NvcmUpLnBhZFN0YXJ0KDgsICcwJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJjb2luXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmNvaW4gKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29pbkxhYmVsLnN0cmluZyA9IFN0cmluZyh0aGlzLmNvaW4pO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09IFwiZ2VtXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmdlbSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW1MYWJlbC5zdHJpbmcgPSBTdHJpbmcodGhpcy5nZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWNvcmQodHlwZSl7XHJcbiAgICAgICAgaWYodHlwZSA9PSBcInNjb3JlXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PSBcImNvaW5cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvaW47XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJnZW1cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SignUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ec24PhK+tILbN1NyLkQ0+O', 'SignUp');
// scripts/SignUp.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SignUp = /** @class */ (function (_super) {
    __extends(SignUp, _super);
    function SignUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = null;
        return _this;
    }
    SignUp.prototype.initSignUpBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/Background/Block/Big Layout/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.signUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var emailBox, usernameBox, passwordBox, email, username, password;
            var _this = this;
            return __generator(this, function (_a) {
                emailBox = cc.find("Canvas/Background/Block/Big Layout/email").getComponent(cc.EditBox);
                usernameBox = cc.find("Canvas/Background/Block/Big Layout/username").getComponent(cc.EditBox);
                passwordBox = cc.find("Canvas/Background/Block/Big Layout/password").getComponent(cc.EditBox);
                email = emailBox.string;
                username = usernameBox.string;
                password = passwordBox.string;
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(function (userCredential) {
                    alert("Sign Up Success!");
                    _this.username = usernameBox.string;
                    _this.updateUserStats(0, 0, true, false, false, false, true, false, false, false, false, true, false, _this.username);
                    emailBox.string = "";
                    usernameBox.string = "";
                    passwordBox.string = "";
                }).catch(function (e) {
                    alert(e.message);
                });
                return [2 /*return*/];
            });
        });
    };
    SignUp.prototype.initBackBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "back";
        cc.find("Canvas/Background/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.back = function () {
        cc.director.loadScene("main menu");
    };
    SignUp.prototype.onLoad = function () {
        this.initSignUpBtn();
        this.initBackBtn();
    };
    SignUp.prototype.start = function () { };
    SignUp.prototype.update = function (dt) { };
    SignUp.prototype.updateUserStats = function (coin, gem, char1, char2, char3, char4, AK47, AR, grenade, shotgun, sniper, purple, forest, username) {
        var userStats = {
            coin: coin,
            gem: gem,
            char1: char1,
            char2: char2,
            char3: char3,
            char4: char4,
            AK47: AK47,
            AR: AR,
            grenade: grenade,
            shotgun: shotgun,
            sniper: sniper,
            purple: purple,
            forest: forest,
            username: username
        };
        return firebase.database().ref("userData/" + firebase.auth().currentUser.uid).update(userStats);
    };
    SignUp = __decorate([
        ccclass
    ], SignUp);
    return SignUp;
}(cc.Component));
exports.default = SignUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2lnblVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMEVDO1FBeEVXLGNBQVEsR0FBVyxJQUFJLENBQUM7O0lBd0VwQyxDQUFDO0lBdEVHLDhCQUFhLEdBQWI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFSyx1QkFBTSxHQUFaOzs7OztnQkFDUSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hGLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUYsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FB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QyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUF4RWdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwRTFCO0lBQUQsYUFBQztDQTFFRCxBQTBFQyxDQTFFbUMsRUFBRSxDQUFDLFNBQVMsR0EwRS9DO2tCQTFFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgaW5pdFNpZ25VcEJ0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlNpZ25VcFwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNpZ25VcFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQmFja2dyb3VuZC9CbG9jay9CaWcgTGF5b3V0L1NpZ25VcEJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaWduVXAoKSB7XHJcbiAgICAgICAgbGV0IGVtYWlsQm94ID0gY2MuZmluZChcIkNhbnZhcy9CYWNrZ3JvdW5kL0Jsb2NrL0JpZyBMYXlvdXQvZW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGxldCB1c2VybmFtZUJveCA9IGNjLmZpbmQoXCJDYW52YXMvQmFja2dyb3VuZC9CbG9jay9CaWcgTGF5b3V0L3VzZXJuYW1lXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBsZXQgcGFzc3dvcmRCb3ggPSBjYy5maW5kKFwiQ2FudmFzL0JhY2tncm91bmQvQmxvY2svQmlnIExheW91dC9wYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgbGV0IGVtYWlsID0gZW1haWxCb3guc3RyaW5nO1xyXG4gICAgICAgIGxldCB1c2VybmFtZSA9IHVzZXJuYW1lQm94LnN0cmluZztcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBwYXNzd29yZEJveC5zdHJpbmc7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJTaWduIFVwIFN1Y2Nlc3MhXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lQm94LnN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlclN0YXRzKDAsIDAsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdGhpcy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbEJveC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWVCb3guc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQm94LnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEJhY2tCdG4oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJTaWduVXBcIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJiYWNrXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9CYWNrZ3JvdW5kL0JhY2tCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluIG1lbnVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmluaXRTaWduVXBCdG4oKTtcclxuICAgICAgICB0aGlzLmluaXRCYWNrQnRuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHVwZGF0ZVVzZXJTdGF0cyhjb2luLCBnZW0sIGNoYXIxLCBjaGFyMiwgY2hhcjMsIGNoYXI0LCBBSzQ3LCBBUiwgZ3JlbmFkZSwgc2hvdGd1biwgc25pcGVyLCBwdXJwbGUsIGZvcmVzdCwgdXNlcm5hbWUpIHtcclxuICAgICAgICB2YXIgdXNlclN0YXRzID0ge1xyXG4gICAgICAgICAgICBjb2luOiBjb2luLFxyXG4gICAgICAgICAgICBnZW06IGdlbSxcclxuICAgICAgICAgICAgY2hhcjE6IGNoYXIxLFxyXG4gICAgICAgICAgICBjaGFyMjogY2hhcjIsXHJcbiAgICAgICAgICAgIGNoYXIzOiBjaGFyMyxcclxuICAgICAgICAgICAgY2hhcjQ6IGNoYXI0LFxyXG4gICAgICAgICAgICBBSzQ3OiBBSzQ3LFxyXG4gICAgICAgICAgICBBUjogQVIsXHJcbiAgICAgICAgICAgIGdyZW5hZGU6IGdyZW5hZGUsXHJcbiAgICAgICAgICAgIHNob3RndW46IHNob3RndW4sXHJcbiAgICAgICAgICAgIHNuaXBlcjogc25pcGVyLFxyXG4gICAgICAgICAgICBwdXJwbGU6IHB1cnBsZSxcclxuICAgICAgICAgICAgZm9yZXN0OiBmb3Jlc3QsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJ1c2VyRGF0YS9cIiArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQpLnVwZGF0ZSh1c2VyU3RhdHMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Welcome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf3a7BcFn9CcrrZ2a8UzeK4', 'Welcome');
// scripts/Welcome.ts

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
var Welcome = /** @class */ (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Welcome.prototype.onLoad = function () { };
    Welcome.prototype.start = function () {
        this.schedule(function () {
            cc.director.loadScene("main menu");
        }, 4);
    };
    Welcome.prototype.update = function (dt) { };
    Welcome = __decorate([
        ccclass
    ], Welcome);
    return Welcome;
}(cc.Component));
exports.default = Welcome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2VsY29tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUFZQSxDQUFDO0lBVkcsd0JBQU0sR0FBTixjQUFXLENBQUM7SUFFWix1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFWRyxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBWTNCO0lBQUQsY0FBQztDQVpELEFBWUMsQ0Fab0MsRUFBRSxDQUFDLFNBQVMsR0FZaEQ7a0JBWm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluIG1lbnVcIik7XHJcbiAgICAgICAgfSwgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge31cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TrajectoryLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aa02tB/qNC9aTto6FFiTAI', 'TrajectoryLine');
// scripts/TrajectoryLine.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var TrajectoryLine = /** @class */ (function (_super) {
    __extends(TrajectoryLine, _super);
    function TrajectoryLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrowPrefab = null;
        _this.crosshairPrefab = null;
        _this.angle = null;
        _this.power = null;
        _this.label = null;
        _this.line = null;
        _this.arrow = null;
        _this.crosshair = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    TrajectoryLine.prototype.onLoad = function () {
        this.line = this.node.getComponent(cc.Graphics);
    };
    TrajectoryLine.prototype.start = function () {
    };
    // update (dt) {}
    TrajectoryLine.prototype.drawStraightLine = function (angle, range) {
        this.line.clear();
        this.line.lineWidth = 5;
        this.line.lineCap = cc.Graphics.LineCap.ROUND;
        var cos = Math.cos(angle) * range;
        var sin = Math.sin(angle) * range;
        for (var i = 9; i >= 0; i--) {
            this.line.moveTo(35 + cos - cos * 0.1 * (i + 1), 4 + sin - sin * 0.1 * (i + 1));
            this.line.lineTo(35 + cos - cos * 0.1 * i - (cos / 9), 4 + sin - sin * 0.1 * i - (sin / 9));
        }
        this.line.stroke();
    };
    TrajectoryLine.prototype.drawCircle = function (angle) {
        if (this.crosshair) {
            var degree = angle * 180 / Math.PI;
            this.crosshair.getComponent("Crosshair").crosshairMove(degree);
        }
        else {
            this.crosshair = cc.instantiate(this.crosshairPrefab);
            this.crosshair.getComponent("Crosshair").init(this.node);
        }
    };
    TrajectoryLine.prototype.drawCurveLine = function (angle, power) {
        if (this.arrow) {
            if (power > 100)
                power = 100;
            var degree = angle * 180 / Math.PI;
            this.arrow.getComponent("Arrow").arrowMove(degree);
            this.angle.string = Math.floor(degree).toString();
            this.power.string = power.toString();
        }
        else {
            this.arrow = cc.instantiate(this.arrowPrefab);
            this.arrow.getComponent("Arrow").init(this.node);
            this.label.active = true;
        }
        // not accurate
        // this.line.clear();
        // this.line.lineWidth = 5;
        // this.line.lineCap = cc.Graphics.LineCap.ROUND;
        // this.line.moveTo(35, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, 35 + Math.sin(angle) * 1000, 8 + Math.cos(angle) * 100);
        // // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000 + Math.tan(angle) * 100, 1000, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, Math.cos(angle) * 1000, 8);
        // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000, 1000, 960);
        // this.line.stroke();
    };
    TrajectoryLine.prototype.clearLine = function () {
        this.line.clear();
        this.label.active = false;
        if (this.arrow) {
            this.arrow.destroy();
            this.arrow = null;
        }
        else if (this.crosshair) {
            this.crosshair.destroy();
            this.crosshair = null;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], TrajectoryLine.prototype, "arrowPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], TrajectoryLine.prototype, "crosshairPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], TrajectoryLine.prototype, "angle", void 0);
    __decorate([
        property(cc.Label)
    ], TrajectoryLine.prototype, "power", void 0);
    __decorate([
        property(cc.Node)
    ], TrajectoryLine.prototype, "label", void 0);
    TrajectoryLine = __decorate([
        ccclass
    ], TrajectoryLine);
    return TrajectoryLine;
}(cc.Component));
exports.default = TrajectoryLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVHJhamVjdG9yeUxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE2RkM7UUExRkcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFZCxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUF3RTdCLENBQUM7SUF0RUcsd0JBQXdCO0lBRXhCLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQkFBaUI7SUFFVix5Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBSyxFQUFFLEtBQUs7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksR0FB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QUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNyQjthQUFNLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQXpGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0k7SUFmTCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBNkZsQztJQUFELHFCQUFDO0NBN0ZELEFBNkZDLENBN0YyQyxFQUFFLENBQUMsU0FBUyxHQTZGdkQ7a0JBN0ZvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFqZWN0b3J5TGluZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGFycm93UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjcm9zc2hhaXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYW5nbGU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwb3dlcjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGFiZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbGluZTogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYXJyb3cgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3Jvc3NoYWlyID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwdWJsaWMgZHJhd1N0cmFpZ2h0TGluZShhbmdsZSwgcmFuZ2UpIHtcclxuICAgICAgICB0aGlzLmxpbmUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmxpbmUubGluZVdpZHRoID0gNTtcclxuICAgICAgICB0aGlzLmxpbmUubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgbGV0IGNvcyA9IE1hdGguY29zKGFuZ2xlKSAqIHJhbmdlO1xyXG4gICAgICAgIGxldCBzaW4gPSAgTWF0aC5zaW4oYW5nbGUpICogcmFuZ2U7XHJcbiAgICAgICAgZm9yKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lLm1vdmVUbygzNSArIGNvcyAtIGNvcyAqIDAuMSAqIChpKzEpLCA0ICsgc2luIC0gc2luICogMC4xICogKGkrMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmUubGluZVRvKDM1ICsgY29zIC0gY29zICogMC4xICogaSAtIChjb3MvOSksIDQgKyBzaW4gLSBzaW4gKiAwLjEgKiBpIC0gKHNpbi85KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGluZS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd0NpcmNsZShhbmdsZSkge1xyXG4gICAgICAgIGlmKHRoaXMuY3Jvc3NoYWlyKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWdyZWUgPSBhbmdsZSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgICAgIHRoaXMuY3Jvc3NoYWlyLmdldENvbXBvbmVudChcIkNyb3NzaGFpclwiKS5jcm9zc2hhaXJNb3ZlKGRlZ3JlZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jcm9zc2hhaXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNyb3NzaGFpclByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuY3Jvc3NoYWlyLmdldENvbXBvbmVudChcIkNyb3NzaGFpclwiKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3Q3VydmVMaW5lKGFuZ2xlLCBwb3dlcikge1xyXG4gICAgICAgIGlmKHRoaXMuYXJyb3cpIHtcclxuICAgICAgICAgICAgaWYocG93ZXIgPiAxMDApIHBvd2VyID0gMTAwO1xyXG4gICAgICAgICAgICBsZXQgZGVncmVlID0gYW5nbGUgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmdldENvbXBvbmVudChcIkFycm93XCIpLmFycm93TW92ZShkZWdyZWUpO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2xlLnN0cmluZyA9IE1hdGguZmxvb3IoZGVncmVlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnBvd2VyLnN0cmluZyA9IHBvd2VyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXJyb3dQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmdldENvbXBvbmVudChcIkFycm93XCIpLmluaXQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBub3QgYWNjdXJhdGVcclxuICAgICAgICAvLyB0aGlzLmxpbmUuY2xlYXIoKTtcclxuICAgICAgICAvLyB0aGlzLmxpbmUubGluZVdpZHRoID0gNTtcclxuICAgICAgICAvLyB0aGlzLmxpbmUubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lLm1vdmVUbygzNSwgOCk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5saW5lLnF1YWRyYXRpY0N1cnZlVG8oMzUsIE1hdGgudGFuKGFuZ2xlKSAqIDEwMCwgMzUgKyBNYXRoLnNpbihhbmdsZSkgKiAxMDAwLCA4ICsgTWF0aC5jb3MoYW5nbGUpICogMTAwKTtcclxuICAgICAgICAvLyAvLyB0aGlzLmxpbmUucXVhZHJhdGljQ3VydmVUbygzNSwgTWF0aC5zaW4oYW5nbGUpICogMTAwMCArIE1hdGgudGFuKGFuZ2xlKSAqIDEwMCwgMTAwMCwgOCk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5saW5lLnF1YWRyYXRpY0N1cnZlVG8oMzUsIE1hdGgudGFuKGFuZ2xlKSAqIDEwMCwgTWF0aC5jb3MoYW5nbGUpICogMTAwMCwgOCk7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lLnF1YWRyYXRpY0N1cnZlVG8oMzUsIE1hdGguc2luKGFuZ2xlKSAqIDEwMDAsIDEwMDAsIDk2MCk7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5saW5lLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLmFycm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jcm9zc2hhaXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcm9zc2hhaXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyb3NzaGFpciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WelcomeTxt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '046b0YkTu1HpZFfK/WiqXlN', 'WelcomeTxt');
// scripts/WelcomeTxt.ts

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
var WelcomeTxt = /** @class */ (function (_super) {
    __extends(WelcomeTxt, _super);
    function WelcomeTxt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeTxt.prototype.onLoad = function () { };
    WelcomeTxt.prototype.start = function () {
        var action = cc.sequence(cc.fadeIn(2), cc.fadeOut(2));
        this.node.runAction(action);
    };
    WelcomeTxt.prototype.update = function (dt) { };
    WelcomeTxt = __decorate([
        ccclass
    ], WelcomeTxt);
    return WelcomeTxt;
}(cc.Component));
exports.default = WelcomeTxt;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2VsY29tZVR4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDs7SUFXQSxDQUFDO0lBVEcsMkJBQU0sR0FBTixjQUFXLENBQUM7SUFFWiwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBVEcsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVc5QjtJQUFELGlCQUFDO0NBWEQsQUFXQyxDQVh1QyxFQUFFLENBQUMsU0FBUyxHQVduRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VsY29tZVR4dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMiksIGNjLmZhZGVPdXQoMikpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ending.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '395d2AWB7BGAZmf42dY/OHG', 'ending');
// scripts/ending.ts

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
var Ending = /** @class */ (function (_super) {
    __extends(Ending, _super);
    function Ending() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = "map1";
        return _this;
    }
    Ending.prototype.onLoad = function () {
    };
    Ending.prototype.start = function () {
        this.mainMenuBtn();
        this.quitBtn();
        this.replayBtn();
        console.log(this.map);
    };
    // update (dt) {}
    Ending.prototype.mainMenuBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMainMenu";
        cc.find("Canvas/MainMenu").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    Ending.prototype.loadMainMenu = function () {
        cc.director.loadScene("main menu");
    };
    Ending.prototype.quitBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "quit";
        cc.find("Canvas/Quit").getComponent(cc.Button).clickEvents.push(clickEventHandler);
        // console.log(this.node.parent.getChildByName("Quit").getComponent(cc.Button)) ;
    };
    Ending.prototype.quit = function () {
        cc.game.end();
    };
    Ending.prototype.replayBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMap";
        cc.find("Canvas/Replay").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    Ending.prototype.loadMap = function () {
        cc.director.loadScene("loading", function () {
            cc.director.loadScene("map1");
        });
    };
    Ending = __decorate([
        ccclass
    ], Ending);
    return Ending;
}(cc.Component));
exports.default = Ending;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBd0RDO1FBdERXLFNBQUcsR0FBVyxNQUFNLENBQUM7O0lBc0RqQyxDQUFDO0lBcERHLHVCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGlCQUFpQjtJQUVqQiw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN2QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN2QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsaUZBQWlGO0lBQ3JGLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDdkMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN0QyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJEZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXdEMUI7SUFBRCxhQUFDO0NBeERELEFBd0RDLENBeERtQyxFQUFFLENBQUMsU0FBUyxHQXdEL0M7a0JBeERvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgbWFwOiBzdHJpbmcgPSBcIm1hcDFcIjtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5tYWluTWVudUJ0bigpO1xyXG4gICAgICAgIHRoaXMucXVpdEJ0bigpO1xyXG4gICAgICAgIHRoaXMucmVwbGF5QnRuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgbWFpbk1lbnVCdG4oKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcImVuZGluZ1wiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImxvYWRNYWluTWVudVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbk1lbnVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1haW5NZW51KCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpbiBtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHF1aXRCdG4oKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcImVuZGluZ1wiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInF1aXRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1F1aXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIlF1aXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIDtcclxuICAgIH1cclxuXHJcbiAgICBxdWl0KCl7XHJcbiAgICAgICAgY2MuZ2FtZS5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYXlCdG4oKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcImVuZGluZ1wiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImxvYWRNYXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1JlcGxheVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWFwKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9hZGluZ1wiLCAoKT0+e1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYXAxXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chooseMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '901b4glBGxClKjmrMmHjTra', 'chooseMap');
// scripts/chooseMap.ts

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
var chooseMap = /** @class */ (function (_super) {
    __extends(chooseMap, _super);
    function chooseMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    chooseMap.prototype.onLoad = function () {
        this.initMap1Btn();
        this.initMap2Btn();
        this.initBackBtn();
    };
    chooseMap.prototype.start = function () { };
    // update (dt) {}
    chooseMap.prototype.initBackBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "chooseMap";
        clickEventHandler.handler = "back";
        cc.find("BlueButton").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    chooseMap.prototype.back = function () {
        cc.director.loadScene("loading", function () {
            cc.director.loadScene("player name");
        });
    };
    chooseMap.prototype.initMap1Btn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "chooseMap";
        clickEventHandler.handler = "map1";
        cc.find("Btn_Square02_n/map1").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    chooseMap.prototype.map1 = function () {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", function () {
            cc.director.loadScene("map1");
        });
    };
    chooseMap.prototype.initMap2Btn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "chooseMap";
        clickEventHandler.handler = "map2";
        cc.find("Btn_Square02_n/map2").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    chooseMap.prototype.map2 = function () {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", function () {
            cc.director.loadScene("map2");
        });
    };
    chooseMap = __decorate([
        ccclass
    ], chooseMap);
    return chooseMap;
}(cc.Component));
exports.default = chooseMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2hvb3NlTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EOztJQXdEQSxDQUFDO0lBdERHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQseUJBQUssR0FBTCxjQUFVLENBQUM7SUFFWCxpQkFBaUI7SUFFakIsK0JBQVcsR0FBWDtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDMUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFXLEdBQVg7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQzFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDMUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0RGdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3RDdCO0lBQUQsZ0JBQUM7Q0F4REQsQUF3REMsQ0F4RHNDLEVBQUUsQ0FBQyxTQUFTLEdBd0RsRDtrQkF4RG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNob29zZU1hcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmluaXRNYXAxQnRuKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TWFwMkJ0bigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJhY2tCdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgaW5pdEJhY2tCdG4oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJjaG9vc2VNYXBcIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJiYWNrXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkJsdWVCdXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb2FkaW5nXCIsICgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBsYXllciBuYW1lXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNYXAxQnRuKCkge1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiY2hvb3NlTWFwXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwibWFwMVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJCdG5fU3F1YXJlMDJfbi9tYXAxXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcDEoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvYWRpbmdcIiwgKCk9PntcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFwMVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TWFwMkJ0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcImNob29zZU1hcFwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm1hcDJcIjtcclxuICAgICAgICBjYy5maW5kKFwiQnRuX1NxdWFyZTAyX24vbWFwMlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXAyKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb2FkaW5nXCIsICgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/explosiveObj.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '079e6bq3+FHv6zx/j8sH7XJ', 'explosiveObj');
// scripts/explosiveObj.ts

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
var ExplosiveObj = /** @class */ (function (_super) {
    __extends(ExplosiveObj, _super);
    function ExplosiveObj() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.isExplode = false;
        _this.sfx_barrel = null;
        return _this;
    }
    ExplosiveObj.prototype.onLoad = function () {
        this.anim = this.node.getComponent(cc.Animation);
    };
    ExplosiveObj.prototype.start = function () {
    };
    ExplosiveObj.prototype.update = function (dt) {
    };
    ExplosiveObj.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bullet" || other.node.group == "explosiveObj" || other.node.group == "bomb" || other.node.name == "Die Boundary") {
            if (!this.isExplode) {
                cc.audioEngine.playEffect(this.sfx_barrel, false);
                // this.node.y += 1;
                // this.node.y -= 6;
                this.node.getComponent(cc.PhysicsCircleCollider).enabled = true;
                this.node.group = "explosiveObj";
                this.anim.play("explosion2");
                this.scheduleOnce(function () {
                    _this.node.destroy();
                }, 0.7);
                this.isExplode = true;
            }
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], ExplosiveObj.prototype, "sfx_barrel", void 0);
    ExplosiveObj = __decorate([
        ccclass
    ], ExplosiveObj);
    return ExplosiveObj;
}(cc.Component));
exports.default = ExplosiveObj;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZXhwbG9zaXZlT2JqLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBcUNDO1FBbkNXLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFJbkMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDOztJQThCcEMsQ0FBQztJQTVCRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUFuQyxpQkFlQztRQWRHLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFDO1lBQ3JJLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDO2dCQUNmLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUN6QjtTQUNKO0lBQ0wsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNTO0lBUGYsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFDaEM7SUFBRCxtQkFBQztDQXJDRCxBQXFDQyxDQXJDeUMsRUFBRSxDQUFDLFNBQVMsR0FxQ3JEO2tCQXJDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9zaXZlT2JqIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzRXhwbG9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2Z4X2JhcnJlbDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJidWxsZXRcIiB8fCBvdGhlci5ub2RlLmdyb3VwID09IFwiZXhwbG9zaXZlT2JqXCIgfHwgb3RoZXIubm9kZS5ncm91cCA9PSBcImJvbWJcIiB8fCBvdGhlci5ub2RlLm5hbWUgPT0gXCJEaWUgQm91bmRhcnlcIil7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRXhwbG9kZSl7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2Z4X2JhcnJlbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnkgKz0gMTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS55IC09IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBcImV4cGxvc2l2ZU9ialwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJleHBsb3Npb24yXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V4cGxvZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AreaNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f5a1/djLhCfKe8u7jC1q0z', 'AreaNode');
// scripts/AreaNode.ts

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
var AreaNode = /** @class */ (function (_super) {
    __extends(AreaNode, _super);
    function AreaNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.miniMapUi = null;
        _this.gameManager = null;
        _this.activePanel = "0";
        return _this;
    }
    AreaNode.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
    };
    AreaNode.prototype.start = function () {
    };
    AreaNode.prototype.update = function (dt) {
    };
    AreaNode.prototype.onMouseEnter = function (event) {
    };
    AreaNode.prototype.onMouseDown = function (event) {
        // console.log(event.getLocationX(), event.getLocationY(), "click");
        // x: 690 800; y: 520 630 left 
        // x: 830 940; y: 520 630 right
        if (event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630) {
            this.miniMapUi.getChildByName("rightPanel").active = true;
            this.activePanel = "right";
            this.setCameraAnchor(1);
        }
        if (event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630) {
            this.miniMapUi.getChildByName("leftPanel").active = true;
            this.activePanel = "left";
            this.setCameraAnchor(-1);
        }
        if (!(event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630) &&
            !(event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
                event.getLocationY() >= 520 && event.getLocationY() <= 630)) {
            this.miniMapUi.getChildByName("leftPanel").active = false;
            this.miniMapUi.getChildByName("rightPanel").active = false;
            this.activePanel = "0";
            this.setCameraAnchor(0);
        }
    };
    AreaNode.prototype.onMouseLeave = function (event) {
    };
    AreaNode.prototype.onMouseUp = function (event) {
        this.miniMapUi.getChildByName("leftPanel").active = false;
        this.miniMapUi.getChildByName("rightPanel").active = false;
        this.activePanel = "0";
        this.setCameraAnchor(0);
    };
    AreaNode.prototype.onMouseMove = function (event) {
        if (this.activePanel == "right") {
            if (!(event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
                event.getLocationY() >= 520 && event.getLocationY() <= 630)) {
                this.miniMapUi.getChildByName("leftPanel").active = false;
                this.miniMapUi.getChildByName("rightPanel").active = false;
                this.activePanel = "0";
                this.setCameraAnchor(0);
            }
        }
        if (this.activePanel == "left") {
            if (!(event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
                event.getLocationY() >= 520 && event.getLocationY() <= 630)) {
                this.miniMapUi.getChildByName("leftPanel").active = false;
                this.miniMapUi.getChildByName("rightPanel").active = false;
                this.activePanel = "0";
                this.setCameraAnchor(0);
            }
        }
    };
    AreaNode.prototype.setCameraAnchor = function (value) {
        // console.log(value, "set");
        this.gameManager.getComponent("GameManager").setCameraAnchor(value);
    };
    __decorate([
        property(cc.Node)
    ], AreaNode.prototype, "miniMapUi", void 0);
    __decorate([
        property(cc.Node)
    ], AreaNode.prototype, "gameManager", void 0);
    AreaNode = __decorate([
        ccclass
    ], AreaNode);
    return AreaNode;
}(cc.Component));
exports.default = AreaNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXJlYU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4RkM7UUEzRkcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUVwQixpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUFzRnRDLENBQUM7SUFwRkcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCx3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QyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQU5YLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4RjVCO0lBQUQsZUFBQztDQTlGRCxBQThGQyxDQTlGcUMsRUFBRSxDQUFDLFNBQVMsR0E4RmpEO2tCQTlGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWluaU1hcFVpOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVBhbmVsOiBzdHJpbmcgPSBcIjBcIjtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbk1vdXNlRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25Nb3VzZUxlYXZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VFbnRlcihldmVudCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKGV2ZW50KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5nZXRMb2NhdGlvblgoKSwgZXZlbnQuZ2V0TG9jYXRpb25ZKCksIFwiY2xpY2tcIik7XHJcbiAgICAgICAgLy8geDogNjkwIDgwMDsgeTogNTIwIDYzMCBsZWZ0IFxyXG4gICAgICAgIC8vIHg6IDgzMCA5NDA7IHk6IDUyMCA2MzAgcmlnaHRcclxuICAgICAgICBpZihldmVudC5nZXRMb2NhdGlvblgoKSA+PSA4MzAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gOTQwICYmXHJcbiAgICAgICAgICAgIGV2ZW50LmdldExvY2F0aW9uWSgpID49IDUyMCAmJiBldmVudC5nZXRMb2NhdGlvblkoKSA8PSA2MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFBhbmVsXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW1lcmFBbmNob3IoMSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZihldmVudC5nZXRMb2NhdGlvblgoKSA+PSA2OTAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gODAwICYmXHJcbiAgICAgICAgICAgIGV2ZW50LmdldExvY2F0aW9uWSgpID49IDUyMCAmJiBldmVudC5nZXRMb2NhdGlvblkoKSA8PSA2MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFuZWwgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FtZXJhQW5jaG9yKC0xKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEoZXZlbnQuZ2V0TG9jYXRpb25YKCkgPj0gNjkwICYmIGV2ZW50LmdldExvY2F0aW9uWCgpIDw9IDgwMCAmJlxyXG4gICAgICAgICAgICBldmVudC5nZXRMb2NhdGlvblkoKSA+PSA1MjAgJiYgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPD0gNjMwKSAmJiBcclxuICAgICAgICAgICAgIShldmVudC5nZXRMb2NhdGlvblgoKSA+PSA4MzAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gOTQwICYmXHJcbiAgICAgICAgICAgIGV2ZW50LmdldExvY2F0aW9uWSgpID49IDUyMCAmJiBldmVudC5nZXRMb2NhdGlvblkoKSA8PSA2MzApKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluaU1hcFVpLmdldENoaWxkQnlOYW1lKFwibGVmdFBhbmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFBhbmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQYW5lbCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW1lcmFBbmNob3IoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VMZWF2ZShldmVudCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VVcChldmVudCl7XHJcbiAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFBhbmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUGFuZWwgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLnNldENhbWVyYUFuY2hvcigwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpe1xyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFuZWwgPT0gXCJyaWdodFwiKXtcclxuICAgICAgICAgICAgaWYoIShldmVudC5nZXRMb2NhdGlvblgoKSA+PSA4MzAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gOTQwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPj0gNTIwICYmIGV2ZW50LmdldExvY2F0aW9uWSgpIDw9IDYzMCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmlNYXBVaS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbWVyYUFuY2hvcigwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmFjdGl2ZVBhbmVsID09IFwibGVmdFwiKXtcclxuICAgICAgICAgICAgaWYoIShldmVudC5nZXRMb2NhdGlvblgoKSA+PSA2OTAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gODAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPj0gNTIwICYmIGV2ZW50LmdldExvY2F0aW9uWSgpIDw9IDYzMCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmlNYXBVaS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbWVyYUFuY2hvcigwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW1lcmFBbmNob3IodmFsdWUpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCBcInNldFwiKTtcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLnNldENhbWVyYUFuY2hvcih2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
        _this.weaponType = "0";
        return _this;
    }
    WeaponObj.prototype.onLoad = function () {
    };
    WeaponObj.prototype.start = function () {
    };
    WeaponObj.prototype.update = function (dt) {
    };
    WeaponObj.prototype.onBeginContact = function (contact, self, other) {
        if (other.node.name == "Die Boundary" || other.node.group == "player") {
            this.node.destroy();
        }
    };
    WeaponObj.prototype.getWeaponType = function () {
        return this.weaponType;
    };
    __decorate([
        property()
    ], WeaponObj.prototype, "weaponType", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd2VhcG9uT2JqLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMEJDO1FBdkJHLGdCQUFVLEdBQVcsR0FBRyxDQUFDOztJQXVCN0IsQ0FBQztJQXJCRywwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUM7WUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUF0QkQ7UUFEQyxRQUFRLEVBQUU7aURBQ2M7SUFIUixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMEI3QjtJQUFELGdCQUFDO0NBMUJELEFBMEJDLENBMUJzQyxFQUFFLENBQUMsU0FBUyxHQTBCbEQ7a0JBMUJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFwb25PYmogZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICB3ZWFwb25UeXBlOiBzdHJpbmcgPSBcIjBcIjtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PSBcIkRpZSBCb3VuZGFyeVwiIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJwbGF5ZXJcIil7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdlYXBvblR5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWFwb25UeXBlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59d65rCd65HeaNbiiLTA1TE', 'Arrow');
// scripts/Arrow.ts

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
var Arrow = /** @class */ (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Arrow.prototype.init = function (node) {
        this.setInitPos(node);
    };
    //this function sets the arrow's initial position when it is reused.
    Arrow.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the arrow move according to the angle
    Arrow.prototype.arrowMove = function (angle) {
        this.node.angle = angle;
    };
    Arrow.prototype.destroyArrow = function () {
        this.node.destroy();
    };
    Arrow = __decorate([
        ccclass
    ], Arrow);
    return Arrow;
}(cc.Component));
exports.default = Arrow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF3Q0M7UUF0Q1csV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFzQ3pCLENBQUM7SUFwQ0cscUZBQXFGO0lBQzlFLG9CQUFJLEdBQVgsVUFBWSxJQUFhO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCwwQkFBVSxHQUFsQixVQUFtQixJQUFhO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxvRkFBb0Y7UUFFcEgsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCw0Q0FBNEM7SUFDcEMseUJBQVMsR0FBakIsVUFBa0IsS0FBSztRQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELDRCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF2Q2dCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F3Q3pCO0lBQUQsWUFBQztDQXhDRCxBQXdDQyxDQXhDa0MsRUFBRSxDQUFDLFNBQVMsR0F3QzlDO2tCQXhDb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuICAgIHByaXZhdGUgbGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIHdoZW4gY3JlYXRlZCwgdGhlIGJ1bGxldCBuZWVkIHRvIGJlIHBsYWNlZCBhdCBjb3JyZWN0IHBvc2l0aW9uIGFuZCBwbGF5IGFuaW1hdGlvbi5cclxuICAgIHB1YmxpYyBpbml0KG5vZGU6IGNjLk5vZGUpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdFBvcyhub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMgZnVuY3Rpb24gc2V0cyB0aGUgYXJyb3cncyBpbml0aWFsIHBvc2l0aW9uIHdoZW4gaXQgaXMgcmV1c2VkLlxyXG4gICAgcHJpdmF0ZSBzZXRJbml0UG9zKG5vZGU6IGNjLk5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG5vZGUucGFyZW50OyAvLyBkb24ndCBtb3VudCB1bmRlciB0aGUgcGxheWVyLCBvdGhlcndpc2UgaXQgd2lsbCBjaGFuZ2UgZGlyZWN0aW9uIHdoZW4gcGxheWVyIG1vdmVcclxuXHJcbiAgICAgICAgaWYobm9kZS5zY2FsZVggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMzUsIDgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0zNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZihub2RlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ha2UgdGhlIGFycm93IG1vdmUgYWNjb3JkaW5nIHRvIHRoZSBhbmdsZVxyXG4gICAgcHJpdmF0ZSBhcnJvd01vdmUoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUFycm93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PlayerName.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2407dwrvvVBgI2Ai8hNPZ71', 'PlayerName');
// scripts/PlayerName.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.back = null;
        _this.selectMap = null;
        _this.player1 = null;
        _this.player2 = null;
        _this.player3 = null;
        _this.player4 = null;
        _this.playerNum = null;
        _this.editBoxPath = "Canvas/Frame/Layout/";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        if (!this.playerNum) {
            this.playerNum = "2";
            cc.sys.localStorage.setItem("PlayerNum", 2);
        }
        this.loadEditBox();
    };
    NewClass.prototype.start = function () {
        this.mouseOn();
    };
    // update (dt) {}
    NewClass.prototype.loadEditBox = function () {
        console.log(this.playerNum);
        switch (this.playerNum) {
            case "4":
                cc.find(this.editBoxPath + 'Player4').active = true;
                cc.find(this.editBoxPath + 'Player3').active = true;
            case "3":
                cc.find(this.editBoxPath + 'Player3').active = true;
            default:
                break;
        }
    };
    NewClass.prototype.loadScene = function (scene) {
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(scene);
        });
    };
    NewClass.prototype.mouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadScene("player choose");
        });
        this.selectMap.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.setPlayerName();
            _this.loadScene("character choose");
        });
    };
    NewClass.prototype.setPlayerName = function () {
        cc.sys.localStorage.setItem("Player 1 Name", this.player1.getComponentInChildren(cc.Label).string);
        cc.sys.localStorage.setItem("Player 2 Name", this.player2.getComponentInChildren(cc.Label).string);
        if (this.playerNum == "3" || this.playerNum == "4") {
            cc.sys.localStorage.setItem("Player 3 Name", this.player3.getComponentInChildren(cc.Label).string);
        }
        if (this.playerNum == "4") {
            cc.sys.localStorage.setItem("Player 4 Name", this.player4.getComponentInChildren(cc.Label).string);
        }
    };
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "back", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "selectMap", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player1", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player2", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player3", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player4", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStFQztRQTVFRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsYUFBTyxHQUFlLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWUsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFlLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVcsc0JBQXNCLENBQUM7O0lBeUR6RCxDQUFDO0lBdkRHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLDhCQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQixRQUFRLElBQUksQ0FB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TztPQUNhLFFBQVEsQ0ErRTVCO0lBQUQsZUFBQztDQS9FRCxBQStFQyxDQS9FcUMsRUFBRSxDQUFDLFNBQVMsR0ErRWpEO2tCQS9Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBiYWNrOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzZWxlY3RNYXA6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwbGF5ZXIxOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHBsYXllcjI6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcGxheWVyMzogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwbGF5ZXI0OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllck51bTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGVkaXRCb3hQYXRoOiBzdHJpbmcgPSBcIkNhbnZhcy9GcmFtZS9MYXlvdXQvXCI7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllck51bSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllck51bVwiKTtcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXJOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOdW0gPSBcIjJcIjtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyTnVtXCIsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRFZGl0Qm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubW91c2VPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgbG9hZEVkaXRCb3goKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJOdW0pXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnBsYXllck51bSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLmVkaXRCb3hQYXRoICsgJ1BsYXllcjQnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLmVkaXRCb3hQYXRoICsgJ1BsYXllcjMnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLmVkaXRCb3hQYXRoICsgJ1BsYXllcjMnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTY2VuZShzY2VuZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9hZGluZ1wiLCAoKT0+e1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlT24oKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJwbGF5ZXIgY2hvb3NlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TWFwLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiY2hhcmFjdGVyIGNob29zZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJOYW1lKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllciAxIE5hbWVcIiwgdGhpcy5wbGF5ZXIxLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyIDIgTmFtZVwiLCB0aGlzLnBsYXllcjIuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICBpZih0aGlzLnBsYXllck51bSA9PSBcIjNcIiB8fCB0aGlzLnBsYXllck51bSA9PSBcIjRcIikge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXIgMyBOYW1lXCIsIHRoaXMucGxheWVyMy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIH0gaWYodGhpcy5wbGF5ZXJOdW0gPT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyIDQgTmFtZVwiLCB0aGlzLnBsYXllcjQuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SignIn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06ed0Oo1wFLHJ+J0nt3uw8e', 'SignIn');
// scripts/SignIn.ts

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
var SignIn = /** @class */ (function (_super) {
    __extends(SignIn, _super);
    function SignIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignIn.prototype.initSignInBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/Background/Block/Big Layout/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignIn.prototype.signIn = function () {
        var emailBox = cc.find("Canvas/Background/Block/Big Layout/email").getComponent(cc.EditBox);
        var passwordBox = cc.find("Canvas/Background/Block/Big Layout/password").getComponent(cc.EditBox);
        var email = emailBox.string;
        var password = passwordBox.string;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function () {
            cc.director.loadScene("menu");
        }).catch(function (e) {
            alert(e.message);
        });
        cc.director.loadScene("menu");
    };
    SignIn.prototype.initBackBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "back";
        cc.find("Canvas/Background/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignIn.prototype.back = function () {
        cc.director.loadScene("main menu");
    };
    SignIn.prototype.onLoad = function () {
        this.initSignInBtn();
        this.initBackBtn();
    };
    SignIn.prototype.start = function () { };
    SignIn.prototype.update = function (dt) { };
    SignIn = __decorate([
        ccclass
    ], SignIn);
    return SignIn;
}(cc.Component));
exports.default = SignIn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2lnbkluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEOztJQStDQSxDQUFDO0lBN0NHLDhCQUFhLEdBQWI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUYsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEcsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRWxDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3RELElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRVAsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDRCQUFXLEdBQVg7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLHVCQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQTdDRyxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBK0MxQjtJQUFELGFBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ21DLEVBQUUsQ0FBQyxTQUFTLEdBK0MvQztrQkEvQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpbml0U2lnbkluQnRuKCkge1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiU2lnbkluXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2lnbkluXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9CYWNrZ3JvdW5kL0Jsb2NrL0JpZyBMYXlvdXQvU2lnbkluQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25JbigpIHtcclxuICAgICAgICBsZXQgZW1haWxCb3ggPSBjYy5maW5kKFwiQ2FudmFzL0JhY2tncm91bmQvQmxvY2svQmlnIExheW91dC9lbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkQm94ID0gY2MuZmluZChcIkNhbnZhcy9CYWNrZ3JvdW5kL0Jsb2NrL0JpZyBMYXlvdXQvcGFzc3dvcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IGVtYWlsQm94LnN0cmluZztcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBwYXNzd29yZEJveC5zdHJpbmc7XHJcblxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QmFja0J0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlNpZ25JblwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImJhY2tcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0JhY2tncm91bmQvQmFja0J0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW4gbWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFNpZ25JbkJ0bigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJhY2tCdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SelectChar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '989f3Nf5mRAapnGdIatcBg9', 'SelectChar');
// scripts/SelectChar.ts

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
var SelectChar = /** @class */ (function (_super) {
    __extends(SelectChar, _super);
    function SelectChar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.click = null;
        _this.player1Name = null;
        _this.player2Name = null;
        _this.player3Name = null;
        _this.player4Name = null;
        _this.player3 = null;
        _this.player4 = null;
        _this.back = null;
        _this.next = null;
        _this.p1c1 = null;
        _this.p1c2 = null;
        _this.p1c3 = null;
        _this.p1c4 = null;
        _this.p2c1 = null;
        _this.p2c2 = null;
        _this.p2c3 = null;
        _this.p2c4 = null;
        _this.p3c1 = null;
        _this.p3c2 = null;
        _this.p3c3 = null;
        _this.p3c4 = null;
        _this.p4c1 = null;
        _this.p4c2 = null;
        _this.p4c3 = null;
        _this.p4c4 = null;
        _this.char1 = "true";
        _this.char2 = "false";
        _this.char3 = "false";
        _this.char4 = "false";
        _this.playerNum = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    SelectChar.prototype.onLoad = function () {
        if (!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        this.setTotalPlayer();
        this.loadPlayerName();
        this.setUserStats();
        this.loadCharBtn();
    };
    SelectChar.prototype.start = function () {
        this.menuMouseOn();
    };
    // update (dt) {}
    SelectChar.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    SelectChar.prototype.setUserStats = function () {
        // cc.sys.localStorage.setItem("char1", false); // FOR DEBUG DON'T DELETE
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
    };
    SelectChar.prototype.menuMouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("player name");
        });
        this.next.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("map choose");
        });
        this.p1c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char1 == "true") {
                _this.playClickAudio();
                _this.selected("char1", "1");
            }
        });
        this.p1c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char2 == "true") {
                _this.playClickAudio();
                _this.selected("char2", "1");
            }
        });
        this.p1c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char3 == "true") {
                _this.playClickAudio();
                _this.selected("char3", "1");
            }
        });
        this.p1c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char4 == "true") {
                _this.playClickAudio();
                _this.selected("char4", "1");
            }
        });
        this.p2c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char1 == "true") {
                _this.playClickAudio();
                _this.selected("char1", "2");
            }
        });
        this.p2c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char2 == "true") {
                _this.playClickAudio();
                _this.selected("char2", "2");
            }
        });
        this.p2c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char3 == "true") {
                _this.playClickAudio();
                _this.selected("char3", "2");
            }
        });
        this.p2c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char4 == "true") {
                _this.playClickAudio();
                _this.selected("char4", "2");
            }
        });
        if (this.playerNum == "3" || this.playerNum == "4") {
            this.p3c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char1 == "true") {
                    _this.playClickAudio();
                    _this.selected("char1", "3");
                }
            });
            this.p3c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char2 == "true") {
                    _this.playClickAudio();
                    _this.selected("char2", "3");
                }
            });
            this.p3c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char3 == "true") {
                    _this.playClickAudio();
                    _this.selected("char3", "3");
                }
            });
            this.p3c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char4 == "true") {
                    _this.playClickAudio();
                    _this.selected("char3", "3");
                }
            });
        }
        if (this.playerNum == "4") {
            this.p4c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char1 == "true") {
                    _this.playClickAudio();
                    _this.selected("char1", "4");
                }
            });
            this.p4c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char2 == "true") {
                    _this.playClickAudio();
                    _this.selected("char2", "4");
                }
            });
            this.p4c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char3 == "true") {
                    _this.playClickAudio();
                    _this.selected("char3", "4");
                }
            });
            this.p4c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char4 == "true") {
                    _this.playClickAudio();
                    _this.selected("char4", "4");
                }
            });
        }
    };
    SelectChar.prototype.playClickAudio = function () {
        cc.audioEngine.playEffect(this.click, false);
    };
    SelectChar.prototype.loadScene = function (scene) {
        cc.director.loadScene(scene);
    };
    SelectChar.prototype.loadCharBtn = function () {
        if (this.char1 == "true") {
            this.lockBtn(this.p1c1);
            this.lockBtn(this.p2c1);
            if (this.player3.active) {
                this.lockBtn(this.p3c1);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c1);
            }
        }
        if (this.char2 == "true") {
            this.lockBtn(this.p1c2);
            this.lockBtn(this.p2c2);
            if (this.player3.active) {
                this.lockBtn(this.p3c2);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c2);
            }
        }
        if (this.char3 == "true") {
            this.lockBtn(this.p1c3);
            this.lockBtn(this.p2c3);
            if (this.player3.active) {
                this.lockBtn(this.p3c3);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c3);
            }
        }
        if (this.char4 == "true") {
            this.lockBtn(this.p1c4);
            this.lockBtn(this.p2c4);
            if (this.player3.active) {
                this.lockBtn(this.p3c4);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c4);
            }
        }
    };
    SelectChar.prototype.lockBtn = function (btn) {
        btn.node.getChildByName("LockedBackground").active = false;
    };
    SelectChar.prototype.selected = function (charType, idx) {
        cc.sys.localStorage.setItem("Player " + idx + " Char", charType);
        console.log(cc.sys.localStorage.getItem("Player " + idx + " Char"));
    };
    SelectChar.prototype.setTotalPlayer = function () {
        if (this.playerNum == "2") {
            this.player3.active = false;
            this.player4.active = false;
        }
        else if (this.playerNum == "3") {
            this.player4.active = false;
        }
    };
    SelectChar.prototype.loadPlayerName = function () {
        this.player1Name.string = cc.sys.localStorage.getItem("Player 1 Name");
        this.player2Name.string = cc.sys.localStorage.getItem("Player 2 Name");
        if (this.player3.active) {
            this.player3Name.string = cc.sys.localStorage.getItem("Player 3 Name");
        }
        if (this.player4.active) {
            this.player4Name.string = cc.sys.localStorage.getItem("Player 4 Name");
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], SelectChar.prototype, "bgm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SelectChar.prototype, "click", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player1Name", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player2Name", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player3Name", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player4Name", void 0);
    __decorate([
        property(cc.Node)
    ], SelectChar.prototype, "player3", void 0);
    __decorate([
        property(cc.Node)
    ], SelectChar.prototype, "player4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "back", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "next", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c4", void 0);
    SelectChar = __decorate([
        ccclass
    ], SelectChar);
    return SelectChar;
}(cc.Component));
exports.default = SelectChar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2VsZWN0Q2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQThUQztRQTNURyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENB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Q0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNHO0lBOUVOLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E4VDlCO0lBQUQsaUJBQUM7Q0E5VEQsQUE4VEMsQ0E5VHVDLEVBQUUsQ0FBQyxTQUFTLEdBOFRuRDtrQkE5VG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdENoYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGNsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllcjFOYW1lIDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllcjJOYW1lIDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllcjNOYW1lIDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllcjROYW1lIDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyMzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbmV4dDogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDFjMTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDFjMjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAxYzM6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAxYzQ6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAyYzE6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAyYzI6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwMmMzOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwMmM0OiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwM2MxOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwM2MyOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDNjMzogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDNjNDogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDRjMTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDRjMjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHA0YzM6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHA0YzQ6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyMTogc3RyaW5nID0gXCJ0cnVlXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyMjogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNoYXIzOiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgY2hhcjQ6IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllck51bTogc3RyaW5nID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBpZighY2MuYXVkaW9FbmdpbmUuaXNNdXNpY1BsYXlpbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlCR00oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXJOdW1cIik7XHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbFBsYXllcigpO1xyXG4gICAgICAgIHRoaXMubG9hZFBsYXllck5hbWUoKTtcclxuICAgICAgICB0aGlzLnNldFVzZXJTdGF0cygpO1xyXG4gICAgICAgIHRoaXMubG9hZENoYXJCdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51TW91c2VPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJTdGF0cygpIHtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyMVwiLCBmYWxzZSk7IC8vIEZPUiBERUJVRyBET04nVCBERUxFVEVcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyMlwiLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjNcIiwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXI0XCIsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNoYXIxID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjFcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyMiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXIyXCIpO1xyXG4gICAgICAgIHRoaXMuY2hhcjMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFyM1wiKTtcclxuICAgICAgICB0aGlzLmNoYXI0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudU1vdXNlT24oKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcInBsYXllciBuYW1lXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubmV4dC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJtYXAgY2hvb3NlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucDFjMS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjEgPT0gIFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjFcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wMWMyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMiA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIyXCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucDFjMy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjMgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyM1wiLCBcIjFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnAxYzQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXI0ID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjRcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wMmMxLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIxXCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucDJjMi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjIgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyMlwiLCBcIjJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnAyYzMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXIzID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjNcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wMmM0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyNCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXI0XCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyTnVtID09IFwiM1wiIHx8IHRoaXMucGxheWVyTnVtID09IFwiNFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucDNjMS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoYXIxID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyMVwiLCBcIjNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnAzYzIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGFyMiA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjJcIiwgXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wM2MzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hhcjMgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIzXCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucDNjNC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoYXI0ID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyM1wiLCBcIjNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXJOdW0gPT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wNGMxLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hhcjEgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIxXCIsIFwiNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucDRjMi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoYXIyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyMlwiLCBcIjRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnA0YzMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGFyMyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjNcIiwgXCI0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wNGM0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hhcjQgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXI0XCIsIFwiNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlDbGlja0F1ZGlvKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNjZW5lKHNjZW5lOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDaGFyQnRuKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hhcjEgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDFjMSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAyYzEpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wM2MxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjQuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wNGMxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNoYXIyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAxYzIpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wMmMyKTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDNjMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXI0LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDRjMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jaGFyMyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wMWMzKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDJjMyk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAzYzMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyNC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnA0YzMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY2hhcjQgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDFjNCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAyYzQpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wM2M0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjQuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wNGM0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2NrQnRuKGJ0bjogY2MuQnV0dG9uKSB7XHJcbiAgICAgICAgYnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMb2NrZWRCYWNrZ3JvdW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkKGNoYXJUeXBlLCBpZHgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXIgXCIgKyBpZHggKyBcIiBDaGFyXCIsIGNoYXJUeXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgXCIgKyBpZHggKyBcIiBDaGFyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3RhbFBsYXllcigpIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllck51bSA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyNC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXJOdW0gPT0gXCIzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXI0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUGxheWVyTmFtZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXllcjFOYW1lLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAxIE5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyTmFtZS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMiBOYW1lXCIpO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyMy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIzTmFtZS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMyBOYW1lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBsYXllcjQuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyNE5hbWUuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDQgTmFtZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cff5fpUDuZEtoxJXIiDrgz5', 'Win');
// scripts/Win.ts

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
var Win = /** @class */ (function (_super) {
    __extends(Win, _super);
    function Win() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playername = null;
        _this.playerimage = null;
        _this.winnerScore = null;
        _this.winnerGem = null;
        _this.winnerCoin = null;
        _this.GameManager = null;
        _this.UI = null;
        _this.char1 = null;
        _this.char2 = null;
        _this.char3 = null;
        _this.char4 = null;
        _this.gameover = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Win.prototype.start = function () {
    };
    Win.prototype.update = function (dt) {
        if (!this.gameover) {
            if (cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()) {
                this.gameover = true;
                this.playername.getComponent(cc.Label).string = cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string;
                this.winnerScore.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").scoreLabel.string;
                this.winnerCoin.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").coinLabel.string;
                this.winnerGem.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").gemLabel.string;
                if (cc.find("Canvas/Main Camera/UI/Profile/face0").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char1;
                    //cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face1").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char2;
                    //cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face2").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char3;
                    //cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face3").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char4;
                    //cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                }
                cc.find("Canvas/Main Camera/UI/Timer").active = false;
                cc.find("Canvas/Main Camera/UI/Record").active = false;
                cc.find("Canvas/Main Camera/UI/WeaponUi").active = false;
                cc.find("Canvas/Main Camera/UI/Profile").active = false;
                var action = cc.sequence(cc.fadeIn(2), cc.fadeOut(2));
                this.node.runAction(action);
            }
        }
        else {
            this.scheduleOnce(function () {
                cc.director.loadScene("ending");
            }, 6);
        }
    };
    __decorate([
        property(cc.Label)
    ], Win.prototype, "playername", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "playerimage", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerScore", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerGem", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerCoin", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "GameManager", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "UI", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char4", void 0);
    Win = __decorate([
        ccclass
    ], Win);
    return Win;
}(cc.Component));
exports.default = Win;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBb0ZDO1FBakZHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQUcsS0FBSyxDQUFDOztJQWlEN0IsQ0FBQztJQS9DRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG1CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsb0JBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNkLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQztnQkFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLFlBQVksQ0FB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QUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttQ0FDQztJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NDQUNJO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0NBQ0k7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzQ0FDSTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NDQUNJO0lBakNaLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FvRnZCO0lBQUQsVUFBQztDQXBGRCxBQW9GQyxDQXBGZ0MsRUFBRSxDQUFDLFNBQVMsR0FvRjVDO2tCQXBGb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXJuYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXJpbWFnZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgd2lubmVyU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5uZXJHZW06IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3aW5uZXJDb2luOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHYW1lTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgY2hhcjE6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBjaGFyMjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGNoYXIzOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgY2hhcjQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZ2FtZW92ZXIpe1xyXG4gICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL0dhbWUgTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKS5nZXRXaW4oKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVvdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcm5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyU2NvcmUuc3RyaW5nID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS5zY29yZUxhYmVsLnN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyQ29pbi5zdHJpbmcgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLmNvaW5MYWJlbC5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lckdlbS5zdHJpbmcgPSBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLmdlbUxhYmVsLnN0cmluZztcclxuICAgICAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMFwiKS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyaW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXIxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UwXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UxXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTJcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyMztcclxuICAgICAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlM1wiKS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyaW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXI0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9UaW1lclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUmVjb3JkXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9XZWFwb25VaVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMiksIGNjLmZhZGVPdXQoMikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kaW5nXCIpO1xyXG4gICAgICAgICAgICB9LCA2KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
