const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());         
app.use(express.json());

app.get('/', (res, req) =>{
    res.send(NULL);
});

app.get('/getData/:id', (req, res) => {
    const userData = {
        name: req.params.id,
        age: 30,
        email: 'johndoe@mail.com'
    };

    res.send(userData);
});

app.post('/createData', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);
    res.send("Data created successfully");
});



const port = 8888;
app.listen(port, () => {
  console.log('Server is running on port', port);
  console.log('Visit http://localhost:' + port);
});