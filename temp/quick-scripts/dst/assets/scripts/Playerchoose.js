
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
    };
    Playerchoose.prototype.loadTwoPlayers = function () {
        cc.director.loadScene("instructions");
    };
    Playerchoose.prototype.loadThreePlayers = function () {
        cc.director.loadScene("instructions");
    };
    Playerchoose.prototype.loadFourPlayers = function () {
        cc.director.loadScene("instructions");
    };
    Playerchoose.prototype.loadTeamPlayers = function () {
        cc.director.loadScene("instructions");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyY2hvb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREOztJQTJEQSxDQUFDO0lBckRHLDRCQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFHbEMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNwQyxRQUFRLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBR3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR3RFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDbkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUdwQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdyRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFHcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUF6RGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyRGhDO0lBQUQsbUJBQUM7Q0EzREQsQUEyREMsQ0EzRHlDLEVBQUUsQ0FBQyxTQUFTLEdBMkRyRDtrQkEzRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcmNob29zZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBFZGl0X0JveDogY2MuRWRpdEJveCxcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHR3b2J0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdHdvYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0d29idG4uY29tcG9uZW50ID0gXCJQbGF5ZXJjaG9vc2VcIjtcclxuICAgICAgICB0d29idG4uaGFuZGxlciA9IFwibG9hZFR3b1BsYXllcnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCIyYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2godHdvYnRuKTtcclxuXHJcbiAgICAgICAgbGV0IHRocmVlYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0aHJlZWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhyZWVidG4uY29tcG9uZW50ID0gXCJQbGF5ZXJjaG9vc2VcIjtcclxuICAgICAgICB0aHJlZWJ0bi5oYW5kbGVyID0gXCJsb2FkVGhyZWVQbGF5ZXJzXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiM2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHRocmVlYnRuKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBmb3VyYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBmb3VyYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBmb3VyYnRuLmNvbXBvbmVudCA9IFwiUGxheWVyY2hvb3NlXCI7XHJcbiAgICAgICAgZm91cmJ0bi5oYW5kbGVyID0gXCJsb2FkRm91clBsYXllcnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCI0YnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZm91cmJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgdGVhbWJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdGVhbWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGVhbWJ0bi5jb21wb25lbnQgPSBcIlBsYXllcmNob29zZVwiO1xyXG4gICAgICAgIHRlYW1idG4uaGFuZGxlciA9IFwibG9hZFRlYW1QbGF5ZXJzXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwidGVhbWJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHRlYW1idG4pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHdvUGxheWVycygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGhyZWVQbGF5ZXJzKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRGb3VyUGxheWVycygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGVhbVBsYXllcnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnNcIik7XHJcbiAgICB9XHJcblxyXG59Il19