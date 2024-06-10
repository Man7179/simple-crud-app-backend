const Product =require('../model/product.model.js')

// Get All Products
const getProducts=async (req,res)=>{
    try {
        const product = await Product.find({});  //find({})=> finds all the products in the DB
        res.status(200).json(product)

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// Get Products by Id
const getProduct=async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create product
const createProduct=async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update Product
const updateProduct=async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Delete Product
const deleteProduct=async (req,res)=>{
    try {
        const { id } = req.params;
        const product=await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        res.status(200).json({ message: "Product Deleted Succesfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}