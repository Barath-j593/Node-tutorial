const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))
//express.static is a built-in middleware function in Express. It serves static files and is based on serve-static. The function signature is express.static(root, [options]). The root argument specifies the root directory from which to serve static assets. In this case, we are serving static files from the 'public' directory. This means that any file in the 'public' directory can be accessed directly via the URL. For example, if there is an image file called 'logo.png' in the 'public' directory, it can be accessed via http://localhost:5000/logo.png.
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
//SSR stands for Server Side Rendering, it is a technique where the server renders the HTML and sends it to the client. This is useful for SEO and for faster initial load times. In this case, we are using express.static to serve the static files, so we don't need to use res.sendFile to serve the index.html file. express.static will automatically look for index.html in the public folder and serve it as the home page.

//express will look for index.html in the public folder and serve it as the home page.
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
