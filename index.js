let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
let username = "person"
let message = "You have Three new notifications."

let messageToUser = message + ", " + username + " !"

function increment() {
	count += 1
	countEl.innerText = count
	
}

function save() {
	let countStr = count + " - "
	saveEl.textContent += countStr
	count = 0
	countEl.innerText = count
	console.log(count)
}

