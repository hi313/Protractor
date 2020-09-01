var credential = {
    "user" : "admin",
    "password" : "pass"
}

var submitForm = (arg:validCredential) =>{
    console.log(arg.user);
    console.log(arg.password);
}

submitForm(credential)

// Interface : gives a structure of how data type should look like. Only avaliable in TypeScript.
interface validCredential {
    user : string,
    password : string
}