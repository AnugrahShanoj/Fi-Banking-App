// Redirection to login and register page from main page 
function bRegister(){
    window.location="./register.html"
}
function bLogin(){
    window.location="./login.html"
}


// Implementation of user registration
function register(){
    const User={
        name:username.value,
        acno:account.value,
        pass:password.value,
        balance:0
    }
    console.log(User);
    if(User.acno in localStorage){
        alert("Account Number Already Exists");
    }
    else{
        if(User.name=="" || User.acno=="" || User.pass==""){
            alert("Please Fill All the Fields");
        }
        else{
            localStorage.setItem(User.acno,JSON.stringify(User));
            alert("Registration Successful");
            window.location="./login.html"
        }
    }
    
}


// Implementation of user login
 function login(){
    if(uacc.value=="" || upass.value==""){
        alert("Please Fill All the Fields");
    }
    else{
        if(uacc.value in localStorage){
            const user=JSON.parse(localStorage.getItem(uacc.value));
            if(upass.value==user.pass){
                window.userKey=uacc.value
                console.log(window.userKey);
                localStorage.setItem("LoggedAcc",window.userKey)
                
                alert("Login Successfull")
                window.location="./profile.html"
            }
            else{
                alert("Incorrect Password");
            }
        }
        else{
            alert("Account Number Does Not Exist");
        }
    }
}


// Implementing User Profile
let userAcc=localStorage.getItem("LoggedAcc")
console.log(userAcc);
let user=JSON.parse(localStorage.getItem(userAcc))
uhead.innerHTML=`Welcome ${user.name}`
console.log( user.balance);


// Implementing Deposit 
function deposit(){
withdrawDisplay.innerHTML=``
let Dvalue=parseFloat(depositAmount.value)
console.log(typeof(Dvalue))
if(Dpassword.value==user.pass){
    user.balance+=Dvalue
    console.log(user.balance);
    localStorage.setItem(userAcc,JSON.stringify(user))
    let HTMLData=`<h3>Current balance is ${user.balance}</h3>`
    depositDisplay.innerHTML=HTMLData
    alert("Amount Deposited")
}
else{
    alert("Incorrect Password");
}
}

// Implementing Withdraw
function withdraw(){
    depositDisplay.innerHTML=``
    let Wvalue=parseFloat(withdrawAmount.value)
    console.log(typeof(Wvalue))
    if(Wpassword.value==user.pass){
        if(user.balance>=Wvalue){
            user.balance-=Wvalue
            console.log(user.balance);
            localStorage.setItem(userAcc,JSON.stringify(user))
            let HTMLData=`<h3>Current Balance is ${user.balance}</h3>`
            withdrawDisplay.innerHTML=HTMLData
            alert("Amount Withdrawn");  
        }
        else{
            alert("Insufficient Balance");
        }
    }
    else{
        alert("Incorrect Password");
    }
}


// Implementing Logout
function LogOut(){
    localStorage.removeItem("LoggedAcc");
    alert("Logging out")
    window.location="./index.html"
}





