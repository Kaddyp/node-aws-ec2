import express from 'express';
const app = express();
app.use(express.json());
import 'dotenv/config';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Node js server deployed on amazon ec2 instance!');
})
app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.listen(port,() => {
    console.log("listening to 3000");
})