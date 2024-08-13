import express from "express";

const createListsRouter = ({lists}) => {
  const router = express.Router();

  router.get('/create', (req, res) => {
    let ida = lists.length;
    lists.push({id: lists.length, title: "List " + lists.length, tasks: []})
    res.redirect('/list/' + ida);
    //create a new list
    //otomatik olarak New List ${lists.length} diye liste olusturur ve onu acar
    // daha sonra redirect -> o listeye
  })

  router.get('/changeTitle/:listId/:newTitle', (req, res) => {
    let listId = parseInt(req.params.listId);
    let newTitle = req.params.newTitle;
    let i = lists.findIndex((list) => listId === list.id)
    lists[i].title = newTitle
    res.redirect('/list/' + listId)
  })

  router.get('/editTitle/:listId', (req, res) => {
    let listId = parseInt(req.params.listId);
    res.render('editTitle.ejs', {lists: lists, list: lists[listId]})
  })

  router.get('/:listId/createTask', (req, res) => {
    let listId = req.params.listId;
    lists[listId].tasks.push({text: " ", completed: false, taskId: lists[listId].tasks.length});
    res.redirect('/list/' + listId)
  })

  router.get('/:listId', (req, res) => {
    let listId = parseInt(req.params.listId);
    res.render('home', {lists: lists, list: lists[listId]})
  })

  router.delete('/:listId', (req, res) => {
    //delete the list with the list id also we should ask if they confirm deletion
  })

  router.put('/save', (req, res) => {
    //update the list with listId
  })

  return router;
};

export default createListsRouter
