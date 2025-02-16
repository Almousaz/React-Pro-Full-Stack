import ImageGalleryModel from "../models/ImageModel.js"

const uploadImage = async (req , res) => {


    try {
        console.log("---- files ---", JSON.stringify(req.files));
        const images = req.files.map((file) => (
            {
                mimeType: file.mimetype,
                originalName: file.originalname,
                imageURL: file.path,
                size: file.size
            }
        ));
        console.log(images);
        await ImageGalleryModel.insertMany(images);
        res.status(200)
            .json({
                message: "Files uploaded successfully",
                success: true,
                files: req.files,
            });
    } catch (err) {
        console.log('Error ', err);
        res.status(500).json({
            message: 'Image: Internal server error',
            success: false,
            error: err
        })
    }

}


const getAllImages = async (req, res) => {

    try {
        const data = await ImageGalleryModel.find().sort({ createdAt: -1 });

        console.log('<--- data --> ', data);
        res.status(200)
            .json({
                message: "Images",
                success: true,
                data: data
            })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: err
        })
    }
}



const getImageDetailById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ImageGalleryModel.findOne({ _id: id });
        console.log('<--- data --> ', data);
        res.status(200)
            .json({
                message: "Image Details",
                success: true,
                data: data
            })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: err
        })
    }
}





export {uploadImage , getAllImages , getImageDetailById}