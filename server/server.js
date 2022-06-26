const express=require('express')
const app= express()

app.use(express.json())

app.use(express.static('/home/aditya/Desktop/WEB-TryOuts/Calculator/html'))

app.get('/calc/:op',(req,res)=>{

let op=req.params.op
let var1=parseInt(req.query.var1)
let var2=parseInt(req.query.var2)
let result=0

switch(op)
{
    case "add":
        result=var1+var2
        break
    
    case "minus":
        result=var1-var2
        break

    case "multiply":
        result=var1*var2
        break

    case "divide":
        result=var1/var2
        break


}

res.send(`<html>
    <body>
        <h1>Result=${result}</h1>
    </body>
</html>`)

})

app.listen(3232,(err)=>{

    if(err)
    throw err
    
    console.log("Server started at 3232")
   

})