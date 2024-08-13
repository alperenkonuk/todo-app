import express from 'express';
import bodyParser from "body-parser";
import url from "url";
import path from "path";
import taskRouter from './routes/tasks.js'
import listRouter from './routes/lists.js'

const app = express();
const port = 3000;

let lists = []; // by id

let list1 = {
  title: "Shop",
  id: 0,
  tasks: [{text: "apples", completed: true, taskId: 0}, {text: "peaches", completed: false, taskId: 1}, {
    text: "garlic",
    completed: false, taskId: 2
  }, {text: "chocolate", completed: false, taskId: 3}, {text: "sugar", completed: true, taskId: 4}],
}
let list2 = {
  title: "Do Today!",
  id: 1,
  tasks: [{text: "visit grandpa", completed: false, taskId: 0}, {
    text: "exercise minimum 30 minutes.",
    completed: true,
    taskId: 1
  }, {text: "code for 2 hours", completed: false, taskId: 2}, {text: "read a book", completed: false, taskId: 3}],
}

lists.push(list1, list2);

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/list', listRouter({lists}))
app.use('/list/:listId/', taskRouter({lists}));

app.get('/', (req, res) => {
  res.render('home', {lists})
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})





