const { user } = require("../controllers/auth-controller")

const adminMiddleware = (req, res, next) => {
    try {
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({ msg: 'Access denied, admin only' });
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;