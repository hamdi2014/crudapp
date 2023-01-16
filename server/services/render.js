const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    //Make a get request to /api/users
    axios.get('http://127.0.0.1:3000/api/users')
        .then(function(response){
            res.render('index', {users: response.data});
        })
        .catch(err=>{
            res.send(err)
        })
};

exports.addUser = (req, res)=>{
    res.render('add_user');
};

exports.updateUser = (req, res)=>{
    axios.get('http://127.0.0.1:3000/api/users', {params: {id: req.query.id}})
        .then(function(userData){
            res.render('update_user', {user: userData.data});
            console.log(userData.data)
        })
        .catch(err=>{
            res.send(err)
        })
};