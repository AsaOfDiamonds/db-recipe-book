const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');
const knexConfig = require('./knexfile');

const server = express();
const db = knex(knexConfig.development);

//middleware 
server.use(morgan('short')); //3rd party logging yarn add morgan 
server.use(helmet()); //3rd party security yarn add helmet 
server.use(express.json()); //built-in 
server.use(cors()); //3rd party yarn add cors

//routes end points

server.get('/', (req, res) => {
    res.send('Number 5 is alive!!!');
});

// const getAllDishes = (req, res) => {
//     dbPosts.get()
//         .then(posts => {
//             res.status(200).json(posts);
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to get posts.', error: err });
//         });
// }

server.get('/recipe', (req, res) => {
    db('recipe')
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(err => res.status(500).json(err));
});

server.get('/dish', (req, res) => {
    db('dish')
        .then(dish => {
            res.status(200).json(dish);
        })
        .catch(err => res.status(500).json(err));
});

server.get('/ingredients', (req, res) => {
    db('ingredients')
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = server 

