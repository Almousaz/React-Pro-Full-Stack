import { upload } from "../middleware/multerConfig.js";
import { Product } from "../models/Product.js";

const UploadImageProduct = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      // If there's an error during the upload (e.g., file type not allowed, size too large)
      return res.status(400).json({ success: false, error: err.message });
    }
    // If file is uploaded successfully, return the file's path and filename
    return res.status(200).json({
      success: true,
      image: req.file.path, // Access the file path
      fileName: req.file.filename, // Access the file's name
    });
  });
};

const UploadProduct = async (req, res) => {
  // Make sure the image path is included if the file is uploaded
  const { image } = req.body; // Get other product data from the request body
  const productData = { ...req.body, image: req.file ? req.file.path : image }; // If file exists, set image path, otherwise, use provided path

  // Create a new product object with the data from the client
  const product = new Product(productData);

  // Save the product to the database
  product.save((err) => {
    if (err) {
      // If there's an error during save, return an error response
      return res.status(400).json({ success: false, err });
    }

    // If the product is saved successfully, return a success response
    return res.status(200).json({ success: true });
  });
};

const getProducts = async (req, res) => {
  let order = req.body.order || "desc";
  let sortBy = req.body.sortBy || "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;

  let findArgs = {};
  let term = req.body.searchTerm;

  // Handle filters
  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  console.log(findArgs);

  // Building the query
  let query = Product.find(findArgs).populate("writer");

  // If search term exists, add text search to query
  if (term) {
    query = query.find({ $text: { $search: term } });
  }

  // Sorting, skipping, and limiting results
  query = query
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit);

  // Execute query
  try {
    const products = await query.exec();
    res
      .status(200)
      .json({ success: true, products, postSize: products.length });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array

const getProductById = async (req, res) => {
  try {
    let { type, id: productIds } = req.query;

    // Handle 'type' being 'array' and split ids
    if (type === "array") {
      productIds = productIds.split(",");
    }

    // Find products by their IDs
    const products = await Product.find({ _id: { $in: productIds } })
      .populate("writer")
      .exec();

    return res.status(200).send(products);
  } catch (err) {
    console.error(err); // For debugging purposes
    return res.status(400).send(err);
  }
};

export { UploadImageProduct, UploadProduct, getProducts, getProductById };
