const handleSignin = (req, res, db, passwordHash) =>{
    const {email, password} = req.body;
    console.log(email,'password: ',password);
    if (!email || !password) {
        return res.status(400).json('Incorrect from submission')
    }
    db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
        const isValid = passwordHash.verify(password, data[0].hash);   
        if (isValid){
            return db.select('*').from('users')
              .where('email', '=', email)
              .then(user =>{
                  res.json(user[0])
              })
              .catch(err => res.status(400).json('Unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
    handleSignin: handleSignin
}