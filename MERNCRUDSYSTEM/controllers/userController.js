
import User from "../models/users.js";



const getUsers =  async (req, res) => {
    try {
      const users = await User.find({});
      res.send({ users })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  }



const createUsers =  async (req, res) => {
    try {
      const newUser = await User.create({ name: req.body.name, genre: req.body.genre, age: req.body.age });
       res.send({ newUser });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  }


const updateUsers =  async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
       res.send({ message: 'The user was updated' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  }

const deleteUsers =  async (req, res) => {
    try {
      const removeUser = await User.findByIdAndRemove(req.params.id);
       res.send({ message: 'The user was removed' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  }







export {getUsers , createUsers , updateUsers , deleteUsers }




