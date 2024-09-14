const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
    console.log(response)
})