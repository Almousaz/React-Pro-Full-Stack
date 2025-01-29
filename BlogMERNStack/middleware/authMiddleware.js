import jwt from 'jsonwebtoken';
import { HttpError } from '../models/errorModel.js'; 


// const authMiddleware = async (req, res, next) => {

//     const Authorization = req.headers.authorization || req.headers.authorization;

//     if (Authorization && Authorization.startsWith("Bearer")) {
//         const token = Authorization.split(' ')[1]
//         jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
            
//             if (err) {
//                 return next(new HttpError("Unathorized. Invalid token.", 403))
//             }

//             req.user = info;
//             next()
//         })
//     } else {
//         return next(new HttpError("Unathorized. No token", 401))
//     }

// }

const authMiddleware = async (req, res, next) => {
    const Authorization = req.headers.Authorization || req.headers.authorization;
    console.log(Authorization)
    if (Authorization && Authorization.startsWith("Bearer")) {
        const token = Authorization.split(' ')[1]; // Extract token
        
        jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
            console.log(info)
            
            if (err) {
                return next(new HttpError("Unauthorized. Invalid token.", 403)); // 403 Forbidden for invalid token
            }

            req.user = info; // Attach user info to request object
            next(); // Proceed to the next middleware or route handler
        });
    } else {
        return next(new HttpError("Unauthorized. No token", 401)); // 401 for missing token
    }
};


export { authMiddleware } 