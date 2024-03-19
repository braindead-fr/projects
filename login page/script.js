document.addEventListener('DOMContentLoaded', function() {

    let button = document.getElementById('button')
    
    const users = [
        {
          username: "user1",
          email: "user1@gmail.com",
          password: "Pass@123"
        },
        {
          username: "user2",
          email: "user2@gmail.com",
          password: "P@ssword1"
        },
        {
          username: "user3",
          email: "user3@gmail.com",
          password: "SecurePwd9!"
        },
        {
          username: "user4",
          email: "user4@gmail.com",
          password: "StrongP@55"
        },
        {
          username: "user5",
          email: "user5@gmail.com",
          password: "SafePass#12"
        },
        {
          username: "user6",
          email: "user6@gmail.com",
          password: "Pass@word2"
        },
        {
          username: "user7",
          email: "user7@gmail.com",
          password: "SecretP@ss9"
        },
        {
          username: "user8",
          email: "user8@gmail.com",
          password: "P@55wordSafe"
        },
        {
          username: "user9",
          email: "user9@gmail.com",
          password: "SuperSecur3!"
        },
        {
          username: "user10",
          email: "user10@gmail.com",
          password: "P@ss1234"
        },
        {
          username: "user11",
          email: "user11@gmail.com",
          password: "StrongP@ssw0rd"
        },
        {
          username: "user12",
          email: "user12@gmail.com",
          password: "Saf3P@ssword"
        },
        {
          username: "user13",
          email: "user13@gmail.com",
          password: "P@ssw0rd12!"
        },
        {
          username: "user14",
          email: "user14@gmail.com",
          password: "SecurePassw0rd"
        },
        {
          username: "user15",
          email: "user15@gmail.com",
          password: "P@55w0rd#12"
        },
        {
          username: "user16",
          email: "user16@gmail.com",
          password: "StrongP@ssword1"
        },
        {
          username: "user17",
          email: "user17@gmail.com",
          password: "Saf3P@ss"
        },
        {
          username: "user18",
          email: "user18@gmail.com",
          password: "P@ssw0rdSafe!"
        },
        {
          username: "user19",
          email: "user19@gmail.com",
          password: "S3curePassw0rd"
        },
        {
          username: "user20",
          email: "user20@gmail.com",
          password: "P@ssw0rd#123"
        }
      ];

    button.addEventListener('click', function(){

        let username = document.getElementById('username').value
        let email = document.getElementById('email').value.toLowerCase()
        let password = document.getElementById('password').value

        let emailfound= false;
        let usernamefound = false;

        const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,12}$/;

        const isValidUsername = usernamePattern.test(username);
        const isValidEmail = emailPattern.test(email);
        const isValidPassword = passwordPattern.test(password);

        if (isValidEmail && isValidPassword && isValidUsername){
            for(let items of users){
                if(items.username == username && items.email == email && items.password == password){
                    alert(`logged in successfully`)
                    emailfound = true
                    usernamefound = true
                    break;
                }
                else if(items.username == username && items.email == email && items.password !== password){
                    alert(`Wrong Password`)
                    emailfound = true
                    usernamefound = true
                    break;
                }
            }
            if(!emailfound){
                alert(`email doesnt exist`)
            }
            else if(!usernamefound){
                alert(`username doesnt exist`)
            }
        }
        else if (!isValidPassword || !isValidEmail || !isValidUsername) {
            alert(`enter valid credentials`)
        }

    })
});
