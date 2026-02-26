const form = document.getElementById("form")

form.addEventListener("submit",function(e){

e.preventDefault()

let nama = document.getElementById("nama").value
let email = document.getElementById("email").value
let hp = document.getElementById("hp").value

let data = {
nama:nama,
email:email,
hp:hp
}

let users = JSON.parse(localStorage.getItem("users")) || []

users.push(data)

localStorage.setItem("users",JSON.stringify(users))

document.getElementById("msg").innerText="Registrasi berhasil"

form.reset()

})
