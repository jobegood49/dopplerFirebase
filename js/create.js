window.onload = initialize;


var formUserCreate;
var refCreateUser;
var usersTable;


function initialize() {
    formUserCreate = document.getElementById("userCreate");
    formUserCreate.addEventListener("submit", registerUser, false);

    refCreateUser = firebase.database().ref().child("users");
    usersTable = document.getElementById("usersTable");

}

function registerUser(event) {
    console.log(event);
    event.preventDefault();
    refCreateUser.push({
        name: event.target.name.value,
        age: event.target.age.value,
        email: event.target.email.value
    })
    console.log("hello");


}



