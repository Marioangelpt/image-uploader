const fileUpload = require("express-fileupload")
const Express = require("express");
const app = Express();
const routes = require("../routes/image.routes");
const cors = require("cors");
require("./config.js")


app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(Express.json());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}));

app.use(routes);




app.listen(5000);

console.log("the server is running")


