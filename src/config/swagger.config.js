const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
function SwaggerConfig (app) {
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "divar-backend",
                description: "botostart nodejs course",
                version: "1.0.0",
            },
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    }
                }
            },
            security: [{
                BearerAuth: [],
            }]
        },
        apis: [process.cwd() + "/src/modules/**/*.swagger.js"]
    });
    const swagger = swaggerUi.setup(swaggerDocument);
    app.use("/swagger", swaggerUi.serve, swagger);
}
module.exports = SwaggerConfig;