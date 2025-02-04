

const getIndex = async (req, res) => {
    try {
      // Just send a response, no EJS rendering
      res.status(200).json({ message: "Welcome to the index page" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  export { getIndex };
  