import express from 'express';

const createTasksRouter = ({lists}) => {
  const router = express.Router({mergeParams: true});

  router.get('/mark/:taskId', (req, res) => {
    let listId = parseInt(req.params.listId);
    let taskId = parseInt(req.params.taskId);
    let tasks = lists[listId].tasks;
    let i = tasks.findIndex((task, index) => task.taskId === taskId)
    lists[listId].tasks[i].completed = !lists[listId].tasks[i].completed;
    res.redirect('/list/' + listId)
    //also change completed parameter on database
  })

  router.get('/confirm/:taskId/:newText', (req, res) => {
    let listId = parseInt(req.params.listId);
    let taskId = parseInt(req.params.taskId);
    let newText = req.params.newText;
    let tasks = lists[listId].tasks;
    let i = tasks.findIndex((task, index) => task.taskId === taskId)
    lists[listId].tasks[i].text = newText;
    res.redirect('/list/' + listId);
  })

  router.get('/delete/:taskId', (req, res) => {
    let listId = parseInt(req.params.listId);
    let taskId = parseInt(req.params.taskId);
    let tasks = lists[listId].tasks;
    let i = tasks.findIndex((task, index) => task.taskId === taskId)
    lists[listId].tasks.splice(i, 1);

    res.redirect('/list/' + listId)
    //also delete the task from database
  })

  router.get('/edit/:taskId', (req, res) => {
    let listId = parseInt(req.params.listId);
    let taskId = parseInt(req.params.taskId);
    res.render(`edit`, {lists: lists, list: lists[listId], id: taskId})
  })

  router.post('/', (req, res) => {
    // create a new task
  })

  router.put('/', (req, res) => {

  })

  router.delete('/', (req, res) => {
    //delete task, method='delete'
    // splice from list
  });

  return router;
};

export default createTasksRouter;
