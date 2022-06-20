
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
            // this.loadScene("map choose");
            _this.loadScene("map1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdGQztRQTdFRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsYUFBTyxHQUFlLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWUsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFlLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVcsc0JBQXNCLENBQUM7O0lBMER6RCxDQUFDO0lBeERHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLDhCQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQixRQUFRLElBQUksQ0FB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UTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdGNUI7SUFBRCxlQUFDO0NBaEZELEFBZ0ZDLENBaEZxQyxFQUFFLENBQUMsU0FBUyxHQWdGakQ7a0JBaEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJhY2s6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHNlbGVjdE1hcDogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHBsYXllcjE6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcGxheWVyMjogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwbGF5ZXIzOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHBsYXllcjQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyTnVtOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZWRpdEJveFBhdGg6IHN0cmluZyA9IFwiQ2FudmFzL0ZyYW1lL0xheW91dC9cIjtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyTnVtID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyTnVtXCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllck51bSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck51bSA9IFwiMlwiO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXJOdW1cIiwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZEVkaXRCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZU9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBsb2FkRWRpdEJveCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllck51bSlcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGxheWVyTnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMuZWRpdEJveFBhdGggKyAnUGxheWVyNCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMuZWRpdEJveFBhdGggKyAnUGxheWVyMycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMuZWRpdEJveFBhdGggKyAnUGxheWVyMycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNjZW5lKHNjZW5lOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb2FkaW5nXCIsICgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VPbigpIHtcclxuICAgICAgICB0aGlzLmJhY2subm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcInBsYXllciBjaG9vc2VcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RNYXAubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFBsYXllck5hbWUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5sb2FkU2NlbmUoXCJtYXAgY2hvb3NlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIm1hcDFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyTmFtZSgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXIgMSBOYW1lXCIsIHRoaXMucGxheWVyMS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllciAyIE5hbWVcIiwgdGhpcy5wbGF5ZXIyLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyk7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXJOdW0gPT0gXCIzXCIgfHwgdGhpcy5wbGF5ZXJOdW0gPT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyIDMgTmFtZVwiLCB0aGlzLnBsYXllcjMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICB9IGlmKHRoaXMucGxheWVyTnVtID09IFwiNFwiKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllciA0IE5hbWVcIiwgdGhpcy5wbGF5ZXI0LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==