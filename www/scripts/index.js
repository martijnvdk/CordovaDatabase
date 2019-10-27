//Creating a datbase
$(document).on("ready", function () {
    databaseHandler.createDatabase();
});

//Adding item in table

function addUser() {
    var name = $("#username").val();
    var pass = $("#password").val();
    if (!name) {
        alert("Username is required");
    } else if (!pass) {
        alert("Password is required");
    } else {
        var r = confirm("Name: " + name + "\n" + "Password: " + pass);
        if (r == true) {
            userHandler.addUser(name, pass);
            $("#username").val("");
            $("#password").val("");
        }
    }
}