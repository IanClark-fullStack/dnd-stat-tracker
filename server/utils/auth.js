const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhhhh';
// Longer Expiration due to how long DnD may take
const expiration = '4h';

module.exports = {
    authMiddleware: function ({ req }) {
        // Send token with each request
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            // In the case we recieve 'Bearer afjosf333rjfhjfd', remove 'Bearer '
            token = token.split(' ').pop().trim(); 
        }
        // If we don't have a token, let the route determine what to do nexr
        if (!token) {
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    }, 
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};