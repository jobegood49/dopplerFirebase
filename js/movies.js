const urlMovies = "http://localhost:3000/movies";

const request = fetch(urlMovies, {
    method: "GET"
});

let movies;

request
    .then(function(response){
        return response.json();
    })
    .then(function (json) {
        movies = json;
        return movies.then(displayMovies(movies));;
    })


function displayMovies(movies) {

    var line = "";
    for(var key in movies) {
        console.log(key);
        line += "<tr>" +
            "<td>" + movies[key].title + "</td>" +
            "<td>" + movies[key].category + "</td>" +
            "<td>" + movies[key].releaseYear + "</td>" +
            "</tr>";
    }
    moviesTable.innerHTML = line;

}

/*
function displayMovies() {


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




*/