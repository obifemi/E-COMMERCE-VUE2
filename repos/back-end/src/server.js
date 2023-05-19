import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {    
    res.send('Hello World!');
})


app.post('/', (req, res) => {    
    res.send('my name is:' + req.body.name);
})


app.listen(3000, () => {    
    console.log('Example app listening on port 3000!');
} 
);