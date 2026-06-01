const auth=(req, res, next) => {
  const { user } = req.query
  if (user === 'barath') {
    req.user = { name: 'barath', id: 3 }
    console.log('Authenticating user');
    next();
  }
  else {
    res.status(401).send('Unauthorized')
  }
  
}

module.exports = auth