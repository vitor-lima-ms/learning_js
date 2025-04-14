const myFriends = [
    'Bosque',
    'Xande',
    'Satan',
    'Seven'
];

let dynamicName = document.getElementById('dinamic_name');

dynamicName.innerHTML = myFriends[0];
setTimeout(() => {
    dynamicName.innerHTML = myFriends[1];
}, 1000)
setTimeout(() => {
    dynamicName.innerHTML = myFriends[2];
}, 2000)
setTimeout(() => {
    dynamicName.innerHTML = myFriends[3];
}, 3000)