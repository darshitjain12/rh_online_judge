const express=require('express')
const fs=require('fs');
const { default: mongoose }=require('mongoose');
const Problem=require('./models/problem');
const port=3000;


const app=express();
app.set('view engine', 'ejs');
const dbURI = 'mongodb+srv://dugdeep-mc:powdermilgayi@cluster0.tixsypf.mongodb.net/online-judge?retryWrites=true&w=majority'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => {
            console.log("connected");
            app.listen(port);
        })
        .catch(err=>{
            throw err;
            //console.log(err);
        });
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    Problem.find().
    then(result=>{
        res.render('list',{title:"list",problems:result});
    })
    .catch(err=>{throw err;});
});

app.get('/create', (req, res)=>{
    res.render('create', {title:"create"});
});

app.post('/create',(req, res)=>{
    // req.
    const problem = new Problem(req.body);
    problem.save()
    .then(result=>{
        res.redirect('/')
    })
    .catch(err=>console.log(err));
});

app.get('/problem/:id', (req,res)=>{
    const id = req.params.id;
    Problem.findById(id)
    .then(result=>{
        res.render('ps', {title:"problem_statement", problem:result})
    })
    .catch(err=>{
        throw err
    });
});

app.get('/problem/submit/:id', (req,res)=>{
    const id = req.params.id;
    Problem.findById(id)
    .then(result=>{
        res.render('submit', {title:"Submit Problem", problem:result})
    })
    .catch(err=>{
        throw err
    });
});

app.post('/problem/verdict/:id', (req,res)=>{
    const id = req.params.id;
    Problem.findById(id)
    .then(result=>{
        
    })
});
