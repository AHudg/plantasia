const jwt = require("jsonwebtoken");

const secret = "thesecret";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent from req.body, req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // if headers, separates "Bearer" from token
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // if no token, return request object
    if (!token) {
      return req;
    }

    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    // return updated request object
    return req;
  },
  signToken: function ({ username, email, _id , type}) {
    const payload = { username, email, _id, type };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
