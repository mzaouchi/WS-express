// // 1 import express


// const express=require('express')


// // 2. instance du express

// const app=express()

// // middleweare

// const logger=(req,res,next)=>{
    
// console.table({method: req.method})
// console.table({url: req.url})

// next()
// }
// app.use(logger)


// // test
// // app.get('/',  (req,res)=>{
// //     res.send('  <h1> hello hamza  </h1> ')
// // }    )

// // reading files 

// app.use(express.static('public'))



// // app.get('/', (req,res)=>{




// //     res.sendFile(__dirname+'/public/index.html')
// // } )




// // app.get('/service', (req,res)=>{

// //     res.sendFile(__dirname+'/public/Services.html')
// // })


// // app.get('/style.css' , (req,res)=>{

// //     res.sendFile(__dirname+'/public/style.css')
// // })
// // 3.port

// const port=5000

// // 4.listener 

// app.listen(port,  console.log("server is running ") )