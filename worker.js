const axios = require("axios");

class User {
    constructor(name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

    async register() {
        if(!this.name && !this.password) {
            console.log("Name or password is not set.");
            return;
        }

        const payload = {
            username: this.name,
            email: this.email,
            password: this.password
        }

        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }

        const response = await axios.post("https://chatopex.de/register.php", payload, {
            headers: headers,
            withCredentials: true
        });

        if(response.data.includes("Registrierung erfolgreich")) {
            return true;
        }
    }

    /*
    
    Not working, too busy to fix it, right now.

    async login() {
        if(!this.name && !this.password) {
            console.log("Name or password is not set.");
            return;
        }

        const payload = {
            username: this.name,
            password: this.password
        }

        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }

        const response = await axios.post("https://chatopex.de/login.php", payload, {
            headers: headers,
            withCredentials: true
        });

        console.log(response);

        if(response.data.includes("Willkommen auf")) {
            return true;
        }
    }
    */

    async sendMessage() {
        // TODO: implement it
    }
}

exports.User = User;
