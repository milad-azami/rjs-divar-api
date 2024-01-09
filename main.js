const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.routes");
const NotFoundHandler = require("./src/common/exception/not-found.handler");
const AllExceptionHandler = require("./src/common/exception/all-exception.handler");
const cors = require("cors");
dotenv.config();
async function main () {
    const app = express();
    const port = process.env.PORT;
    require("./src/config/mongoose.config");
    app.use(cors({
        origin: "*"
    }));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
    app.use(mainRouter);
    SwaggerConfig(app);
    NotFoundHandler(app);
    AllExceptionHandler(app);
    app.listen(port, () => {
        console.log(`server: http://localhost:${port}`);
    });
}
main();
