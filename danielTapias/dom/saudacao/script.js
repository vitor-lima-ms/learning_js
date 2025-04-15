"use strict"

// const userName = "Vitor"

// document.querySelector(".top-bar p").innerHTML += "<b>" + userName + "!" + "<b/>"

// const userName = null

// if (userName) {
//     document.querySelector(".top-bar p").innerHTML += "<b>" + userName + "!" + "<b/>"
// } else {
//     document.querySelector(".top-bar p").parentElement.style.display = "none"
// }

const userName = null

if (userName) {
    document.querySelector(".top-bar p").innerHTML += "<b>" + userName + "!" + "<b/>"
} else {
    document.querySelector(".top-bar p").parentElement.remove()
}