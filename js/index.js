window.onload = initialize;

var refCreateUser;
var usersTable;

function initialize() {

    refCreateUser = firebase.database().ref().child("users");
    usersTable = document.getElementById("usersTable");
    console.log("hello");
    displayUsers();

}

function displayUsers() {

    console.log(refCreateUser);
    refCreateUser.on("value", function(snap){
        console.log("xouxx");
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
                "<td>" + '<a class="button success show" href=show.html?id=' + key + ' >Show User</a>' + "</td>" +
                "</tr>";


        }
        usersTable.innerHTML = line;

        console.log(usersTable);

        if(line != "") {


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


