import post from "../models/post.js";
import cloudinary from "../middleware/cloudinary.js";




const getProfile = async (req, res) => {
  try {
    const posts = await post.find({ user: req.user.id });

    // Return the data as JSON or send a custom response (no EJS)
    res.status(200).json({
      posts: posts,
      user: req.user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getFeed = async (req, res) => {
    try {
      const posts = await post.find().sort({ createdAt: "desc" }).lean();
  
      // Return the posts as JSON (instead of rendering EJS)
      res.status(200).json({ posts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };



  const createPost = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Create the post in the database
        const newPost = await post.create({
            title: req.body.title,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,
            likes: 0,
            user: req.user.id,
        });

        console.log("✅ Post has been added!");

        // Respond with success message and the created post
        res.status(201).json({
            message: "Post created successfully!",
            post: newPost
        });

    } catch (err) {
        console.error("❌ Error creating post:", err);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};


  const getPost = async (req, res) => {
    try {
      const post = await post.findById(req.params.id);
  
      if (!post) {
        return res.status(404).send("Post not found");
      }
  
      res.status(200).json({ post: post, user: req.user });
    } catch (err) {
      console.log("Error fetching post:", err);
      res.status(500).send("Server error while fetching post");
    }
  };
  
  const likePost = async (req, res) => {
    try {
      const post = await post.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { likes: 1 } },
        { new: true } // Return the updated document
      );
  
      if (!post) {
        return res.status(404).send("Post not found");
      }
  
      console.log("Likes +1");
      res.status(200).json({ message: "Post liked successfully", post: post });
    } catch (err) {
      console.log("Error liking post:", err);
      res.status(500).send("Server error while liking post");
    }
  };
  
  const deletePost = async (req, res) => {
    try {
      // Find post by id
      const post = await post.findById(req.params.id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
  
      // Delete post from db
      await post.deleteOne({ _id: req.params.id });
  
      console.log("Deleted Post");
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
      console.error("Error deleting post:", err);
      res.status(500).json({ message: "Server error while deleting post" });
    }
  };
  




export { getProfile , getFeed , createPost , getPost , likePost , deletePost };
