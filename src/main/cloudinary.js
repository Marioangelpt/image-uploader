const cloudinary = require("cloudinary").v2;
const { CLOUD_NAME, API_KEY, API_SECRET } = require("./config.js")

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
})



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
