const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => { // Home Route
    res.send(`<p>Please click below links to view / download file</p><br/>
        <a href='http://localhost:5000/viewFile'>View</a> 
        <a href='http://localhost:5000/downloadFile'>Download</a> 
        `)
})
app.get('/viewFile', (req, res) => {
    res.sendFile(path.resolve(__dirname, './bangalore.jpeg'));
})
app.get('/downloadFile', (req, res) => {
    res.download(path.resolve(__dirname, './bangalore.jpeg'));
})

app.listen(5000, () => {
    console.log('server running at port 5000');
});