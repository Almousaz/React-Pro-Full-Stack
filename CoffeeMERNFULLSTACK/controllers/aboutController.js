import AboutModel  from "../models/about.model.js";

//post
const createAbout = async (req, res) => {
  const data = req.body;
  try {
    // const product= await AboutModel.findOne(data)

    // if(product){
    //     return res.send({mssg:"Product Already Exists"})
    // }
    const prod = new AboutModel(data);
    await prod.save();
    res.send({ mssg: "Product Added Successful", data: prod });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
  }
};

//get
const getAllAbouts = async (req, res) => {
  try {
    const allAbouts = await AboutModel.find();
    res.status(200).json(allAbouts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
};

//update
const updateAboutById = async (req, res) => {
  try {
    const aboutId = req.params.id;
    const { name, image, review } = req.body;

    const updatedAbout = await AboutModel.findByIdAndUpdate(
      aboutId,
      { name, image, review },
      { new: true }
    );

    if (!updatedAbout) {
      return res.status(404).json({ error: "About entry not found" });
    }

    res.status(200).json(updatedAbout);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the about entry" });
  }
};

const deleteAboutById = async (req, res) => {
  try {
    const aboutId = req.params.id;
    const deletedAbout = await AboutModel.findByIdAndDelete(aboutId);

    if (!deletedAbout) {
      return res.status(404).json({ error: "About entry not found" });
    }

    res.status(200).json({ message: "About entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the about entry" });
  }
};

export { createAbout, getAllAbouts, updateAboutById, deleteAboutById };
