import UserModel from "../models/User.js";




const getUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      },
      { new: true } // Returns the updated document
    );
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await UserModel.findByIdAndDelete({ _id: id });
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

export { getUser, createUser, updateUser, deleteUser };
