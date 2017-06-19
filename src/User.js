/**
 * Created by gurr on 19/06/17.
 */

let instance = null;

class User {
    constructor() {
        if(!instance){
            this.id = prompt("What is your ID?", "6666");
            if (this.id == null) {
                this.id = "6666";
            }
            instance = this;
            // alert(instance.id);
        }

        return instance;
    }
}

export default User;
