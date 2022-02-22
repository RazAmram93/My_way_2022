export default class User{
    constructor(email, name, password, dob){
        this.email = email;
        this.name = name;
        this.password = password;
        this.dob = dob;
    }

    User_To_String(){
        return `email: ${this.email}, name: ${this.name}, password: ${this.password }, Date of birth: ${this.dob} `
    }
}