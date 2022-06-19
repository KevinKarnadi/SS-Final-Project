const {ccclass, property} = cc._decorator;

@ccclass
export default class AreaNode extends cc.Component {

    @property(cc.Node)
    miniMapUi: cc.Node = null;

    @property(cc.Node)
    gameManager: cc.Node = null;

    private activePanel: string = "0";

    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    start () {

    }

    update (dt) {

    }

    onMouseEnter(event){

    }

    onMouseDown(event){
        // console.log(event.getLocationX(), event.getLocationY(), "click");
        // x: 690 800; y: 520 630 left 
        // x: 830 940; y: 520 630 right
        if(event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630){
                this.miniMapUi.getChildByName("rightPanel").active = true;
                this.activePanel = "right";
                this.setCameraAnchor(1);
        } 
        if(event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630){
                this.miniMapUi.getChildByName("leftPanel").active = true;
                this.activePanel = "left";
                this.setCameraAnchor(-1);

        }
        if(!(event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630) && 
            !(event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630)){
                this.miniMapUi.getChildByName("leftPanel").active = false;
                this.miniMapUi.getChildByName("rightPanel").active = false;
                this.activePanel = "0";
                this.setCameraAnchor(0);
        }
    }

    onMouseLeave(event){

    }

    onMouseUp(event){
        this.miniMapUi.getChildByName("leftPanel").active = false;
        this.miniMapUi.getChildByName("rightPanel").active = false;
        this.activePanel = "0";
        this.setCameraAnchor(0);
    }
    
    onMouseMove(event){
        if(this.activePanel == "right"){
            if(!(event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
                    event.getLocationY() >= 520 && event.getLocationY() <= 630)){
                this.miniMapUi.getChildByName("leftPanel").active = false;
                this.miniMapUi.getChildByName("rightPanel").active = false;
                this.activePanel = "0";
                this.setCameraAnchor(0);
            }
        }
        if(this.activePanel == "left"){
            if(!(event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
                    event.getLocationY() >= 520 && event.getLocationY() <= 630)){
                this.miniMapUi.getChildByName("leftPanel").active = false;
                this.miniMapUi.getChildByName("rightPanel").active = false;
                this.activePanel = "0";
                this.setCameraAnchor(0);
            }
        }
    }

    setCameraAnchor(value){
        // console.log(value, "set");
        this.gameManager.getComponent("GameManager").setCameraAnchor(value);
    }
}
