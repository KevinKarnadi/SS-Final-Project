const {ccclass, property} = cc._decorator;

@ccclass
export default class Map extends cc.Component {

    @property(cc.Prefab)
    private groundPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    private groundUpperPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    private firePrefab: cc.Prefab = null;

    @property(cc.Prefab)
    private weaponPrefab0: cc.Prefab = null;

    @property(cc.Prefab)
    private weaponPrefab1: cc.Prefab = null;

    @property(cc.Prefab)
    private weaponPrefab2: cc.Prefab = null;

    @property(cc.Prefab)
    private weaponPrefab3: cc.Prefab = null;

    @property(cc.Prefab)
    private weaponPrefab4: cc.Prefab = null;

    @property(cc.Prefab)
    private hpPrefab: cc.Prefab = null;

    private groundPool = null;
    private groundPool1 = null;
    private firePool = null;
    private spawnCooldown: number = 0;
    private toSpawnWeaponNum: number = 0;
    private weaponState: boolean[] = [true, false, false, false, false];

    onLoad () {
        if(!this.groundUpperPrefab){
            this.groundPool = new cc.NodePool('Ground');
            for(let i: number = 0; i < 1400; i++) {
                let ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
                // y.max = -222.5
            }
        } else {
            this.groundPool = new cc.NodePool('Ground');
            for(let i: number = 0; i < (1400 - 200); i++) {
                let ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
                
            }
            this.groundPool1 = new cc.NodePool('Ground1');
            for(let i: number = 0; i < 200; i++) {
                let ground = cc.instantiate(this.groundUpperPrefab);
                this.groundPool1.put(ground);
            }
        }
        this.firePool = new cc.NodePool('Fire');
        for(let i: number = 0; i < 210; i++) {
            let fire = cc.instantiate(this.firePrefab);
            this.firePool.put(fire);
            // y.max = -222.5
        }

        this.schedule(this.spawnWeapon, 10);
        this.schedule(this.spawnPotion, 12);
        this.schedule(()=>{
            this.toSpawnWeaponNum = Math.floor(Math.random() * 5);
        }, 8)
        // cc.sys.localStorage.setItem("AK47", AK47);
        // cc.sys.localStorage.setItem("AR", AR);
        // cc.sys.localStorage.setItem("grenade", grenade);
        // cc.sys.localStorage.setItem("shotgun", shotgun);
        // cc.sys.localStorage.setItem("sniper", sniper);
        // this.weaponState[0] = cc.sys.localStorage.getItem("AK47") ? (cc.sys.localStorage.getItem("AK47") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("AR") ? (cc.sys.localStorage.getItem("AR") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("grenade") ? (cc.sys.localStorage.getItem("grenade") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("shotgun") ? (cc.sys.localStorage.getItem("shotgun") == 'true' ? true : false) : false;
        // this.weaponState[0] = cc.sys.localStorage.getItem("sniper") ? (cc.sys.localStorage.getItem("sniper") == 'true' ? true : false) : false;
        this.weaponState[0] = cc.sys.localStorage.getItem("AK47") ? (cc.sys.localStorage.getItem("AK47") == 'true' ? true : false) : false;
        this.weaponState[1] = cc.sys.localStorage.getItem("AR") ? (cc.sys.localStorage.getItem("AR") == 'true' ? true : false) : false;
        this.weaponState[2] = cc.sys.localStorage.getItem("grenade") ? (cc.sys.localStorage.getItem("grenade") == 'true' ? true : false) : false;
        this.weaponState[3] = cc.sys.localStorage.getItem("shotgun") ? (cc.sys.localStorage.getItem("shotgun") == 'true' ? true : false) : false;
        this.weaponState[4] = cc.sys.localStorage.getItem("sniper") ? (cc.sys.localStorage.getItem("sniper") == 'true' ? true : false) : false;
        // this.weaponState[1] = cc.sys.localStorage.getItem("AR");
        // this.weaponState[2] = cc.sys.localStorage.getItem("grenade");
        // this.weaponState[3] = cc.sys.localStorage.getItem("shotgun");
        // this.weaponState[4] = cc.sys.localStorage.getItem("sniper");
        // for(let i=0; i<5; i++){
        //     if(!this.weaponState[i]){
        //         this.weaponState[i] = false;
        //     } else{
        //         this.weaponState[i] = true;
        //     }
        // }
        // console.log(this.weaponState, "load");
        // console.log(cc.sys.localStorage.getItem("AK47"), cc.sys.localStorage.getItem("AR"), cc.sys.localStorage.getItem("grenade"), cc.sys.localStorage.getItem("shotgun"), cc.sys.localStorage.getItem("sniper"));
    }
    
    start () {
        this.createGround();
        this.createFire();
    }
    
    createGround() {
        let ground = null;
        let i = 0;
        if(!this.groundUpperPrefab){
            while(this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++; 
            }
        } else{
            while(this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++; 
            }
            ground = null;
            i = 1400-200;
            while(this.groundPool1.size() > 0) {
                ground = this.groundPool1.get(this.groundPool1);
                ground.getComponent('Ground').init(this.node, i);
                i++; 
            }
        }
    }

    createFire(){
        let index = 0;
        let fires = null;
        while(this.firePool.size() > 0){
            fires = this.firePool.get(this.firePool);
            
            fires.parent = cc.find("Canvas/fire");
    
            fires.position = cc.v2(-598 + (16 * index), -320); 
            
            fires.position = fires.position.addSelf(this.node.position);
            fires.getComponent(cc.Animation).play("fire");
            // fires.node.zIndex = 100;
            // console.log(fires.position.x, "fire");
            index++;
        }
    }

    spawnWeapon(){
        let newWeapon = null;
        let position = cc.v2(Math.floor(Math.random() * 2200) - 150, 350);
        for(let i=0; i<5; i++){
            if(this.weaponState[this.toSpawnWeaponNum]){
                break;
            } else{
                this.toSpawnWeaponNum++;
                this.toSpawnWeaponNum %= 5;
            }
            // console.log(this.toSpawnWeaponNum, "spawn");
        }
        switch(this.toSpawnWeaponNum){
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
                newWeapon = cc.instantiate(this.weaponPrefab0);
                break;
        }

        if(newWeapon){
            newWeapon.parent = this.node.parent.getChildByName("Object");
            newWeapon.setPosition(position);
        }
    }

    spawnPotion(){
        let newpotion = null;
        let position = cc.v2(Math.floor(Math.random() * 2200) - 150, 350);
        newpotion = cc.instantiate(this.hpPrefab);

        if(newpotion){
            newpotion.parent = this.node.parent.getChildByName("Object");
            newpotion.setPosition(position);
        }
    }
}
