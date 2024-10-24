import express from 'express';
const app = express();
app.use(express.json());
import 'dotenv/config';

app.get('/api/product', (req, res) => {
     res.send({
        user:{
            name: "Kalyani",
            age:32,
            contact:12254
        }
    })
})
app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.listen(process.env.PORT,() => {
    console.log("listening to 8000");
})
