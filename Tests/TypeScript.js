var credential = {
    "user": "admin",
    "password": "pass"
};
var submitForm = function (arg) {
    console.log(arg.user);
    console.log(arg.password);
};
submitForm(credential);
