import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  // "Bearer TOKEN_HERE"

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();  // pasar el control al siguiente middleware/ruta
    } catch (ex) {
        res.status(400).json({ message: "Invalid token." });
    }
};

export default auth;