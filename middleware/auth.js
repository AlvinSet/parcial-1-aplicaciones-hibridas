import jwt from 'jsonwebtoken';


const auth = (req, res, next) => {
    // Extrae el token del encabezado de autorización
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Verifica si el token está presente
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verifica y decodifica el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Asigna el usuario decodificado a req.user
        next(); // Pasa el control al siguiente middleware/ruta
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid.' });
    }
};

export default auth;