const users = [{
    username: "youssef",
    password: "123"
}];
module.exports = class user {
    constructor(id, username, password, token) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.token = token;
    }
    static login(username, password) {
        const index = users.findIndex(u => u.username == username)
        if (index < 0) {
            return { message: "error :  username or password incorrect" };
        } else {
            let user = users[index];
            if (user.password === password) {
                user.token = user.username.concat(Date.now());
                return { token: user.token };
            } else {
                return { message: "username or password incorrect" };
            }
        }
    }
}

