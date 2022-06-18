const {ccclass, property} = cc._decorator;

@ccclass
export default class WeaponObj extends cc.Component {

    @property()
    bulletType: string = "1";

    onLoad () {

    }

    start () {

    }

    update (dt) {

    }

    onBeginContact(contact, self, other){
        // if(other.node.name == "Die Boundary" || other.node.group == "player"){
        //     this.node.destroy();
        // }
        
        
    }

    getBulletType(){
        return this.bulletType;
    }
}
