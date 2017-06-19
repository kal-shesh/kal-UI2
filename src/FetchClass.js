/**
 * Created by lavi on 6/19/2017.
 */

class FetchClass {
    constructor() {

    }

    getForms(callback) {
        fetch('http://1.1.1.18:5000/forms').then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }
    getMyForms(userId,callback) {
        fetch('http://1.1.1.18:5000/forms/active/my/user_id='+userId).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }
    getFormDetials(id,callback){
        fetch('http://1.1.1.18:5000/forms/active/my/form_id='+id).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }
}
export default FetchClass;