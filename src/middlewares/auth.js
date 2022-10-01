const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  const { headers:{token} } = req;
  if(!token) return res.status(200).send("no se proporciono token de sesion");
  try{
    const valid= jwt.verify(token,process.env.SECRET)
    req.session= valid;
    console.log(valid)
    return next()
  }catch(Error){
    res.status(401).send("El token no es valido")
  }
};
