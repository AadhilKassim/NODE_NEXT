const connectToMongoDB = require('../MongoDB/mongoDB-config');

const express = require('express');
const cors = require('cors');
const { default: userModel } = require('../MongoDB/mongoDB-model');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());         
app.use(express.json());


// userModel.create({
//     name: 'John Doe',
//     age: 30,
//     place: 'New York'
// });


// app.get('/getData/:id', (req, res) => {
//     const userData = {
//         name: req.params.id,
//         age: 30,
//         email: 'johndoe@mail.com'
//     };
    
//     res.send(userData);
// });

// app.post('/createData', async (req, res) => {
//     const data = req.body;
//     const newUser = await userModel.create(data);
//     console.log('Data received:', data);
//     res.send("Data created successfully" + JSON.stringify(newUser));
// });

app.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).send('Name, email, and password are required.');
    }
    const hashedpassword = bcrypt.hashSync(password, 10);
    const user = userModel({name, email, password: hashedpassword});
    user.save().then((UserInfo) => {
        console.log('User created successfully:', UserInfo);
        res.send('')
    }).catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).send('Error creating user.');
    });
})


const port = 8888;
app.listen(port, () => {
    console.log('Server is running on port', port);
    console.log('Visit http://localhost:' + port);
});
connectToMongoDB();