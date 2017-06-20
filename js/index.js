window.onload = initialize;

var refCreateUser;
var usersTable;

function initialize() {

    refCreateUser = firebase.database().ref().child("users");
    usersTable = document.getElementById("usersTable");
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
                "<td>" + '<button class="button success show" keyOfUserToShow="' + key + '">Show User</button>' + "</td>" +
                "</tr>";


        }
        usersTable.innerHTML = line;

        console.log(usersTable);

        if(line != "") {
            var elementsEdit = document.getElementsByClassName("edit");
            for ( var i = 0; i < elementsEdit.length; i++) {
                elementsEdit[i].addEventListener("click", editFromFirebase, false);
            }

            var elementsDelete = document.getElementsByClassName("delete");
            for ( var i = 0; i < elementsDelete.length; i++) {
                elementsDelete[i].addEventListener("click", deleteFromFirebase, false);
            }

            var elementsShow = document.getElementsByClassName("show");
            for ( var i = 0; i < elementsDelete.length; i++) {
                elementsShow[i].addEventListener("click", showFromFirebase, false);
            }

        }


    })

}

function deleteFromFirebase() {
    var keyOfUserToDelete = this.getAttribute("keyOfUserToDelete");
    var refUserToDelete = refCreateUser.child(keyOfUserToDelete);
    refUserToDelete.remove();


}


