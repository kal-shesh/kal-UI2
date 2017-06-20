/**
 * Created by lavi on 6/19/2017.
 */

class FetchClass {
    constructor() {

    }

    getForms(callback) {
        fetch('http://1.1.0.142:5000/forms').then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }

    submitForms(formId, model, userId, callback) {
        fetch('http://1.1.0.142:5000/forms/active/$userId'.replace('$userId', userId), {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: {
                id: formId,
                data: model
            }
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            callback(data)
        });
    }
    getMyForms(userId,callback) {
        fetch('http://1.1.0.142:5000/forms/active/my/user_id='+userId).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }
    getFormType(id,callback){
        fetch('http://1.1.0.142:5000/forms/'+id).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }
    getFormDetials(id,callback){
        fetch('http://1.1.0.142:5000/forms/active/my/form_id='+id).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }

    getUserData(id, callback) {
        fetch('http://1.1.0.142:5000/HRdata/'+id).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }
    getNeedAprrove(id, callback) {
        fetch('http://1.1.0.142:5000/forms/active/waiting/'+id).then(function (response) {
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