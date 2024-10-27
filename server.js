import express from 'express';
const app = express();
app.use(express.json());
import 'dotenv/config';

app.get('/api', () =>{
    res.send("Hello World");
});
app.get('/api/product', (req, res) => {
     res.send({
        user:{
            name: "Kalyani Pawar",
            age:32,
            contact: 77758906
        }
    })
})
app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.listen(process.env.PORT,() => {
    console.log("listening to 8000");
})
