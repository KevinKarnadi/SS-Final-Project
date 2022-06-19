
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
require('./assets/scripts/MiniCam');
require('./assets/scripts/Player');
require('./assets/scripts/PlayerName');
require('./assets/scripts/Playerchoose');
require('./assets/scripts/SignIn');
require('./assets/scripts/SignUp');
require('./assets/scripts/TrajectoryLine');
require('./assets/scripts/UI');
require('./assets/scripts/Welcome');
require('./assets/scripts/WelcomeTxt');
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