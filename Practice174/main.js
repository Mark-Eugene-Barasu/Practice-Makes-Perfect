
// Prototype module is also interesting just as Class module

function User(user_name, user_email){
    // only properties must be in the constructor function
    this.name = user_name;
    this.email = user_email;
    this.is_online = false;
}

// to add methods to a constructor function  use PROTOTYPE

User.prototype.login = function(){
    this.is_online = true;
    console.log(`${this.email} has logged in`);
};

User.prototype.logout = function(){
    console.log(`${this.email} has logged out`);
};

// here is how to inherit
function Admin(...args){
    User.apply(this, args);
    this.role = `super admin`;
}

let userOne = new User(`Ryu`, `ryu@gmail.com`);
let userTwo = new User(`Tom`, `abc@gmail.com`);
let admin = new Admin(`Mark`, `mark@gmail.com`);

console.log(admin);
