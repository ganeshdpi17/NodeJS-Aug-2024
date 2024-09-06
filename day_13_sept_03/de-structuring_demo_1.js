let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};
// Es-5
let a = user.name;
let b = user.email;
let c = user.address.city;
console.log(a, b, c)

// ES-6
let { name, email, address: { city, geo: { lat } } } = user;  // Object De-structuring
console.log(name, email, city, lat)


// Write a function that takes a user object as argument and prints usern name and email
function printUserData(userObj) {
    let { name, email, address: { city, geo: { lat } } } = userObj;
    console.log(name)
    console.log(email)
    console.log(city)
    console.log(lat)
}
printUserData(user);