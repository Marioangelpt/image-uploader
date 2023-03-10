const pool = require("../main/configDb.js");
const { saveImageCloudinary } = require("../main/cloudinary.js")
const fs = require("fs/promises")


const getImage = async (req, res)=>{
    const { name } = req.params;

    try {
        const result = await pool.query("SELECT * FROM image WHERE name=$1", [name]);

        res.send({ url: result.rows[0].image_url});

    } catch (error) {
       console.log(error);
        
    }
}

const saveImage = async (req, res)=>{

    let name;

    let complete

    if(req.files?.image){
        complete = await saveImageCloudinary(req.files.image.tempFilePath);
        name = req.files.image.name.split(" ").join("").split(".")[0];
    }

    let result = await pool.query("INSERT INTO image(name, image_url, image_id) VALUES($1, $2, $3)", [ name, complete.secure_url, complete.public_id ]);

    await fs.unlink(req.files.image.tempFilePath);


    res.send({name: name , url: complete.secure_url})
}

module.exports = {
    saveImage,
    getImage
}
