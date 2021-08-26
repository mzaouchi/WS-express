const express=require('express')

const app=express()


var users=[{name:'norhen' , age:24, id:0  }, {name:'ilen' , age:26, id:1  }  ]


app.use(express.json())

//  method get
app.get('/users', (req,res)=>{



    res.send({msg:'list of users' , users})
}  )
// method post 
// req.body


app.post('/Adduser' , (req,res)=>{

users=[...users,req.body]
    res.send(  {msg:'user added', users }    )
} )

//method delete 
//req.params


app.delete('/deleteuser/:ID'   , (req,res) =>{
    const {ID} =req.params

users=users.filter(el=>  el.id !=ID   )

res.send({msg:'user deleted', users})

}  )

// method put 
// req.params req.body


app.put('/editUser/:ID' , (req,res)=>{
    const {ID}= req.params

users=users.map(el=>  el.id ==ID?   {...el, ...req.body } :el  )
res.send({msg:'user updated ', users})

}   )
const port=5000

app.listen(port,  console.log(` port running in ${port}  `))
