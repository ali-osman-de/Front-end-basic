var users = [{ email: "mail1@gmail.com", password: "123" },
{ email: "mail2@gmail.com", password: "1234" }]


var messages = [{ email: "mail1@gmail.com", mesaj: "Hello" },
{ email: "mail2@gmail.com", mesaj: "Hi" },
{ email: "mail1@gmail.com", mesaj: "How are you" },
{ email: "mail2@gmail.com", mesaj: "I am good" }]

var email = prompt("email: "); var password = prompt("password: ")

function IsThereUser(email, password) {
    for (i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            return true
        }
    }
    return false;
}


function Entry() {
    if (IsThereUser(email, password) == true) {
        console.log("Log in successfull")
    } else {
        console.log("Something went wrong!")
    }
}

Entry()