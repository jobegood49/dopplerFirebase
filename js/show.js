var database = firebase.database();

var urlString = window.location.href;
var url = new URL(urlString);
var key = url.searchParams.get("id");

console.log(key);


console.log(database.ref('users/'));
