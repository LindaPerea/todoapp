const jwt = require('jsonwebtoken');
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    //de la peticion quiero qu eme muestres todos los headers
    let { authorization: token } = req.headers;
    token = token.replace("Bearer ", "")
    // token = token.split(" ")[1];
    console.log(token);
    jwt.verify(
        token, 
        process.env.JWT_SECRET, 
        {algorithms: "HS512"},
        (err, decoded) => {
            if(err) 
            {res.status(400).json({
                error:"invalid token",
                message: "el token no es valido, o ya expiro"
            });
            }else {
                console.log(decoded);
                next();
            }
        })
}

module.exports = authMiddleware;
//vamos a validar el Token

// si el token es válido 
// lo dejamos pasar a la ruta.

// si es invalido 
// respondemos anda palla
