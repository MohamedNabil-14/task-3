const express = require('express')
const app = express()

const port = process.env.PORT || 3000


const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

   app.get('/data1', (req, res) => {
    res.send({
        name : "mohamed",
        age : 28,
        city : "cairo"
    })
   })

   app.get('/data2', (req, res) => {
    res.send({
        name : "ahmed",
        age : 29,
        city : "Cairo"
    })
   })

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// hbs 

app.set('view engine', 'hbs');

  const viewsDirectory = path.join (__dirname , "../temp1/views" )
  app.set( "views" , viewsDirectory)

  //////////////////////////////////////////////////////////////////

  var hbs = require ('hbs')

  const partialsPath = path.join (__dirname , "../temp1/partials")

  hbs.registerPartials(partialsPath)

  ///////////////////////////////////////////////////////////////////

app.get('/' , (req , res) => {
    res.render('index' , {
        title: "HOME",
        desc : "this is home page",
        imgs1 : "imgs/eee.jpeg",
        imgs2:"imgs/trainer-1.jpg",
        imgs3:"imgs/course-1.jpg", 
        image:"imgs/map.jpg"

    })
})

app.get('/service' , (req , res) => {
    res.render('service' , {
        title : "SERVICE",
        desc : "this is service page",
        name : "Front-End",
        city: "cairo",
        duration: "5 mon",
        img1 : "imgs/fff.jpg",
        image:"imgs/map.jpg"
    })
})

app.get('/team' , (req , res) => {
    res.render('team' , {
        title : "TEAM",
        desc : "this is team page",
        name : "Nabil",
        city: "maddi",
        age: 35,
        img2 : "imgs/trainer-2.jpg",
        image:"imgs/map.jpg",
       

    })
})

app.get('/about' , (req , res) => {
    res.render('about' , {
        title: "ABOUT",
        desc : "this is about page",
        image:"imgs/map.jpg"
        
    })
})


app.get('/summary' , (req , res) => {
    res.render('summary' , {
        title: "summary",
        desc : "this is summary page",
        image:"imgs/map.jpg",
     })
})


app.get('/footer' , (req , res) => {
    res.render('footer' , {
        title: "FOOTER",
        desc : "this is footer page",
      image:"imgs/map.jpg"
    })
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})