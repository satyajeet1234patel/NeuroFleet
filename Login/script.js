function signup() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    document.getElementById("message").innerText = "Signup successful! Redirecting to login...";
    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        document.getElementById("message").innerText = "Login Successful!";
    } else {
        alert("Invalid Credentials!");
    }
}
