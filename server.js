const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const passwordHash = require('password-hash');
const cors = require('cors')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      connectString : process.env.DATABASE_URL,
      ssl: true
    }
  });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send("It's Working") })
app.post('/signin', (req, res)=>{ signin.handleSignin(req, res, db, passwordHash)})
app.post('/register', (req, res)=>{ register.handleRegister(req, res, db, passwordHash)})
app.get('/profile/:id', (req, res)=>{ profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res)=>{ image.handleImage(req, res, db)})
app.post('/imageurl', (req, res)=>{ image.handleApiCall(req, res)})
app.listen(process.env.PORT || 3000, () => { console.log(`app is running on port ${process.env.PORT}`) })
