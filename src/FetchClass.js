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

    submitForms(formId, model, userId, callback) {
        fetch('http://1.1.1.18:5000/forms/active/$userId'.replace('$userId', userId), {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                id: formId,
                data: model
            })
        }).then(function (response) {
            callback(response);
        }).catch(function (err) {
            console.error(err);
        })
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
    getFormType(id,callback){
        fetch('http://1.1.1.18:5000/forms/'+id).then(function (response) {
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

    getUserData(id, callback) {
        fetch('http://1.1.1.18:5000/HRdata/'+id).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }
    getWaitingApprovals(userId, callback) {
        fetch('http://1.1.1.18:5000/forms/active/waiting/'+userId).then(function (response) {
            return response.json();
        }).then(function (data) {
            callback(data);
        }).catch(function (err) {
            // Error :(
            console.error(err);
        });
    }

    postStatusOfForm(json, userId, uuid) {
        fetch('http://1.1.1.18:5000/forms/update/user=$userId&form_id=$uuid'.replace("$userId", userId).replace("$uuid", uuid))
    }

}

export default FetchClass;