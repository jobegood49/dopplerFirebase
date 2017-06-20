window.onload = initialize;


var formUserCreate;
var refCreateUser;
var usersTable;
var CREATE = "create User";
var UPDATE = "EditUser";

function initialize() {
    formUserCreate = document.getElementById("userCreate");
    formUserCreate.addEventListener("submit", registerUser, false);

    refCreateUser = firebase.database().ref().child("users");
    console.log(refCreateUser);

    usersTable = document.getElementById("usersTable");
    
}

function registerUser(event) {
    event.preventDefault();
    refCreateUser.push({
        name: event.target.name.value,
        age: event.target.age.value,
        email: event.target.email.value
    })
    console.log("hello");
    displayUsers();
    
}

function displayUsers() {
    refCreateUser.on("value", function(snap){
        var data = snap.val();
        console.log(data);
        var line = "";
        for(var key in data) {
            console.log(data[key]);
            line += "<tr>" +
                        "<td>" + data[key].name + "</td>" +
                        "<td>" + data[key].age + "</td>" +
                        "<td>" + data[key].email + "</td>" +
                        "<td>" + '<button class="button alert delete" keyOfUserToDelete="' + key + '">Remove User</button>' + "</td>" +
                        "<td>" + '<button class="button success edit" keyOfUserToEdit="' + key + '">Edit User</button>' + "</td>" +

                    "</tr>";


        }
        usersTable.innerHTML = line;


        if(line != "") {
            var elementsEdit = document.getElementsByClassName("edit");
            for ( var i = 0; i < elementsEdit.length; i++) {
                elementsEdit[i].addEventListener("click", editFromFirebase, false);
            }

            var elementsDelete = document.getElementsByClassName("delete");
            for ( var i = 0; i < elementsDelete.length; i++) {
                elementsDelete[i].addEventListener("click", deleteFromFirebase, false);
            }

        }
    })

}


function editFromFirebase() {

    alert("yooo");
    var keyOfUserToEdit = this.getAttribute("keyOfUserToEdit");
    console.log(keyOfUserToEdit);
    var refUserToEdit = refCreateUser.child(keyOfUserToEdit);
    console.log(refUserToEdit);
    refUserToEdit.once("value", function(snap){
        var data = snap.val();
        console.log(data);
        document.getElementById("nameUser").value = data.name;
        document.getElementById("ageUser").value = data.age;
        document.getElementById("emailUser").value = data.email;
    })
    document.getElementById("editButton").value = UPDATE;


}

function deleteFromFirebase() {
    var keyOfUserToDelete = this.getAttribute("keyOfUserToDelete");
    var refUserToDelete = refCreateUser.child(keyOfUserToDelete);
    refUserToDelete.remove();

    
}

