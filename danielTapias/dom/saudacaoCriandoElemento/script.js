"use strict"

const userName = 'Vitor'

if (userName) {
    const topBarElement = document.createElement('div')
    topBarElement.className = 'top-bar'
    topBarElement.innerHTML = `<p>Olá, ${userName}!</p>`

    const parentElement = document.querySelector('.hero')
    parentElement.insertBefore(topBarElement, parentElement.firstElementChild)
} else {

}