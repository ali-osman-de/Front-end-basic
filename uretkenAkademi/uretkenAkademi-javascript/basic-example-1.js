var users = [{email:"mail1@gmail.com", password:"123"},
			{email:"mail2@gmail.com", password:"1234"}]
            
            
var messages = [{email:"mail1@gmail.com", mesaj:"Hello"},
				        {email:"mail2@gmail.com", mesaj:"Hi"},
                {email:"mail1@gmail.com", mesaj:"How are you"},
                {email:"mail2@gmail.com", mesaj:"I am good"}]
           
var email = prompt("email: "); var password = prompt("password: ")

function Entry(){
  if((email == users[0].email && password == users[0].password) 
  || 
  (email == users[1].email && password == users[1].password)){
    console.log(messages.mesaj)
  }else{
    console.log("Something went wrong!")
  }
}

Entry()