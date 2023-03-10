const cloudinary = require("cloudinary").v2;



const saveImageCloudinary = async (filepath)=>{
    try {
        let result = await cloudinary.uploader.upload(filepath, {folder: "image uploader"});
        return result;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    saveImageCloudinary,
};