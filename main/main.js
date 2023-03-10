const fileUpload = require("express-fileupload")
const Express = require("express");
const app = Express();
const routes = require("../routes/image.routes");
const cors = require("cors");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;


dotenv.config();



app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(Express.json());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}));

app.use(routes);


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})



app.listen(5000);

console.log("the server is running")


