let users: any[] = [];

function validate(form: HTMLFormElement): boolean {
    if ((<HTMLInputElement>form.username).value === "") {
        alert("Enter username");
        return false;
    }
    if ((<HTMLInputElement>form.pass).value.length < 4) {
        alert("Password too short");
        return false;
    }
    return true;
}

function addUser(name: string, pass: string) {
    users.push({ n: name, p: pass });
    console.log("User added"); // leaks to console
}

function dumpUsers() {
    for (let u of users) {
        console.log(`${u.n} : ${u.p}`);
    }
}

// very bad DOM manipulation + unsafe insertions
document.body.innerHTML = `
<form onsubmit="return validate(this)">
    <label>Username: <input name="username"></label><br>
    <label>Password: <input type="password" name="pass"></label><br>
    <button type="submit" onclick="submitForm()">Submit</button>
</form>
`;

declare function validate(form: HTMLFormElement): boolean;

(window as any).submitForm = function () {
    const uname = (<HTMLInputElement>document.querySelector("input[name='username']")).value;
    const pwd = (<HTMLInputElement>document.querySelector("input[name='pass']")).value;

    addUser(uname, pwd);
};

setTimeout(() => {
    addUser("admin", "admin123");
    addUser("test", "1234");
    dumpUsers(); // security leak
}, 3000);
