
let list_of_user_names = ["admin", "Talha", "Aziz", "hamza", "Hassan"];
list_of_user_names.forEach(function (user) {
    user === "admin" ? console.log("Hey Admin Would you like to See Report") : console.log(`Hello Mr. ${user} Thanks for Logging`)
});
