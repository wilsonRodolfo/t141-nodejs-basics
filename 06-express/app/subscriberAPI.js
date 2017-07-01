const express = require('express')
const router = express.Router()

let db = [
    {id: 1, name: "Wilson Rodolfo", email:"wilson@email.com"},
    {id: 2, name: "Aline", email:"aline@email.com"},
    {id: 3, name: "Conceição", email:"conceicao@email.com"},
    {id: 4, name: "Claret", email:"claret@email.com"}
]

router.get('/', (request, response) => {
    response.json(db)
})

router.get('/:id', (request, response) => {
    let subscriber = db.find(sub => sub.id == request.params.id)
    if(subscriber) {
        response.json(subscriber)
    } else { 
        response
        .status(404)
        .send('Not found! rs')
    }
})

router.post('/', (request, response) => {
    let newSubscriber = {
        id: db.length + 1,
        name: request.body.name,
        email: request.body.email
    }

    db.push(newSubscriber)

    response
    .status(201)
    .json(newSubscriber)
})

module.exports = router