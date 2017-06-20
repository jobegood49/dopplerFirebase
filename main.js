$(document).foundation();

var database = firebase.database();

function writeUserData(userId, name, email) {
    console.log("hello");
    database.ref('users/' + userId).set({
        username: name,
        email: email
    });
}


