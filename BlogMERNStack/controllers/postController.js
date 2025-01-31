import { User } from "../models/UserModel.js";
import { Post } from "../models/postModel.js"; 
import { HttpError } from "../models/errorModel.js";
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
import path from "path";
// import exp from "constants";
const uniqueId = uuidv4();

// Create Post
// POST : api/posts
const createPost = async (req, res, next) => {
    try {

        let { title, category, description } = req.body
        if (!title || !category || !description || !req.files) {
            return next(new HttpError("Fill in all fields and choose thumbnail", 422))
        }
        const { thumbnail } = req.files;
        //check file size
        if (thumbnail.size > 2000000) {
            return next(new HttpError("Thumbnail is too big. File size should be less than 2mb."))
        }
        let fileName = thumbnail.name;
        let splittedFileName = fileName.split('.')
        let newFileName = splittedFileName[0] + uniqueId() + "." + splittedFileName[splittedFileName.length - 1]
        thumbnail.mv(path.join(__dirname, '..', "/uploads", newFileName), async (err) => {
            if (err) {
                return next(new HttpError(err))
            } else {
                const newPost = await Post.create({
                    title, category, description, thumbnail: newFileName,
                    creator: req.user.id
                })
                if (!newPost) {
                    return next(new HttpError("Post couldn't be created", 422))
                }
                //find user and increase post count by 1
                const currentUser = await User.findById(req.user.id);
                const userPostCount = currentUser.posts + 1;
                await User.findByIdAndUpdate(req.user.id, { posts: userPostCount })

                res.status(201).json(newPost)
            }
        })

    } catch (error) {
        return next(new HttpError(error))
    }
}

// const createPost = async (req, res, next) => {
//     try {
//         let { title, category, description } = req.body;
//         if (!title || !category || !description || !req.files) {
//             return next(new HttpError("Fill in all fields and choose thumbnail", 422));
//         }
//         const { thumbnail } = req.files;

//         // Check file size
//         if (thumbnail.size > 2000000) {
//             return next(new HttpError("Thumbnail is too big. File size should be less than 2mb.", 422));
//         }

//         let fileName = thumbnail.name;
//         let splittedFileName = fileName.split('.');
//         let newFileName = splittedFileName[0] + uniqueId() + "." + splittedFileName[splittedFileName.length - 1];

//         // Log file path for debugging
//         const uploadPath = path.join(__dirname, '..', 'uploads', newFileName);
//         console.log("Uploading to: ", uploadPath);

//         // Handle file upload
//         try {
//             await thumbnail.mv(uploadPath);

//             // Create post
//             const newPost = await Post.create({
//                 title,
//                 category,
//                 description,
//                 thumbnail: newFileName,
//                 creator: req.user.id,
//             });

//             if (!newPost) {
//                 return next(new HttpError("Post couldn't be created", 422));
//             }

//             // Find user and increase post count by 1
//             const currentUser = await User.findById(req.user.id);
//             const userPostCount = currentUser.posts + 1;
//             await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });

//             res.status(201).json(newPost);

//         } catch (err) {
//             console.log("File upload error: ", err); // Log the error
//             return next(new HttpError(err.message, 500)); // Handle mv file upload error
//         }

//     } catch (error) {
//         console.log("Unexpected error: ", error); // Log the unexpected error
//         return next(new HttpError(error.message, 500)); // Catch all for any unexpected errors
//     }
// };






// Get All Post
// GET : api/posts
const getPosts = async (req, res, next) => {
    try {

        const posts = await Post.find().sort({ updatedAt: -1 })
        res.status(200).json(posts)

    } catch (error) {
        return next(new HttpError(error))
    }
}

// Get Single Post
// GET : api/posts/:id
const getPost = async (req, res, next) => {
    try {

        const postId = req.params.id
        const post = await Post.findById(postId)
        if (!post) {
            return next(new HttpError("Post not found.", 404))
        }
        res.status(200).json(post)

    } catch (error) {
        return next(new HttpError(error))
    }
}


// Get Posts by Category
// GET : api/posts/categories/:category
const getCatPosts = async (req, res, next) => {
    try {

        const { category } = req.params;
        const catPosts = await Post.find({ category }).sort({ createdAt: -1 })
        res.status(200).json(catPosts)

    } catch (error) {
        return next(new HttpError(error))
    }
}




// Get Author Posts
// GET : api/posts/users/:id
const getUserPosts = async (req, res, next) => {
    try {

        const { id } = req.params
        const posts = await Post.find({ creator: id }).sort({ createdAt: -1 })
        res.status(200).json(posts)

    } catch (error) {
        return next(new HttpError(error))
    }
}




// Edit Post
// PATCH : api/posts/:id
const editPost = async (req, res, next) => {
    try {

        let fileName;
        let newFileName;
        let updatedPost;
        const postId = req.params.id;
        let { title, category, description } = req.body;

        /* ReactQuill has a paragraph opening and closing tag with a break tag in between so 
        there are 11 characters in there already */
        if (!title || !category || description.length < 12) {
            return next(new HttpError("Fill in all fields.", 422))
        }

        //get old post from database
        const oldPost = await Post.findById(postId);
        if (req.user.id == oldPost.creator) {
            if (!req.files) {
                updatedPost = await Post.findByIdAndUpdate(postId, { title, category, description }, { new: true })
            }
            else {

                //delete old thumbnail from upload
                fs.unlink(path.join(__dirname, '..', 'uploads', oldPost.thumbnail), async (err) => {
                    if (err) {
                        return next(new HttpError(err))
                    }
                })

                //upload new thumbnail
                const { thumbnail } = req.files;
                //check file size
                if (thumbnail.size > 2000000) {
                    return next(new HttpError("Thumbnail is too big. Should be less than 2mb"))
                }
                fileName = thumbnail.name;
                let splittedFileName = fileName.split('.')
                newFileName = splittedFileName[0] + uniqueId() + "." + splittedFileName[splittedFileName.length - 1]
                thumbnail.mv(path.join(__dirname, '..', 'uploads', newFileName), async (err) => {
                    if (err) {
                        return next(new HttpError(err))
                    }
                })

                updatedPost = await Post.findByIdAndUpdate(postId, { title, category, description, thumbnail: newFileName }, { new: true })

            }
        }

        if (!updatedPost) {
            return next(new HttpError("Couldn't update post.", 400))
        }

        res.status(200).json(updatedPost)

    } catch (error) {
        return next(new HttpError(error))
    }
}




// Delete Post
// DELETE : api/posts/:id
const deletePost = async (req, res, next) => {
    try {

        const postId = req.params.id;
        if (!postId) {
            return next(new HttpError("Post unavailable.", 400))
        }
        const post = await Post.findById(postId);
        const fileName = post?.thumbnail;

        if (req.user.id == post.creator) {
            //delete thumbnail from uploads folder
            fs.unlink(path.join(__dirname, '..', 'uploads', fileName), async (err) => {
                if (err) {
                    return next(new HttpError(err))
                } else {
                    await Post.findByIdAndDelete(postId)
                    //find user and reduce post count by 1
                    const currentUser = await User.findById(req.user.id);
                    const userPostCount = currentUser?.posts - 1;
                    await User.findByIdAndUpdate(req.user.id, { posts: userPostCount })
                    res.json(`Post ${postId} deleted successfully.`)
                }
            })
        } else {
            return next(new HttpError("Post couldn't be deleted", 403))
        }

    } catch (error) {
        return next(new HttpError(error))
    }
}








export {createPost , getPosts , getPost , getCatPosts , getUserPosts , editPost , deletePost }