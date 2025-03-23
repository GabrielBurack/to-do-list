const { complete } = require("../controllers/taskListController")

let taskLists = [
    { id: '1', title: 'Estudos', tasks: [{ id: '1', title: 'Estudar Node', completed: false }] },
    { id: '2', title: 'Tarefas de casa', tasks: [] },
    { id: '3', title: 'Coisas do trabalho', tasks: [] }
  ]

  module.exports = {
    getAllTaskLists: () => {
        return taskLists
    },

    getTaskListById: (id) => {
        return taskLists.find(list => list.id === id)
    },

    createList: (title) => {
        const newList = {
            id: Math.floor(Math.random() * 99999999).toString(),
            title: title,
            tasks: []
        }
        return newList
    },

    saveList: (list) => {
        if (list.title === '') throw new Error('Título da lista não pode ficar vazio.')
        taskLists.push(list)
    },

    deleteList: (id) => {
        taskLists = taskLists.filter(list => list.id !== id)
    },
    
    addTask:(listId, title) => {
        const newTask = {
            id: Math.floor(Math.random() * 99999999).toString(),
            title: title,
            completed: false
        }
        taskLists.find(list => list.id === listId).tasks.push(newTask)
    },

    completeTask: (listId, taskId) =>{
        const taskList = taskLists.find(list => list.id === listId)
        const task = taskList.tasks.find(task => task.id === taskId)

        task.completed = true
    },
    
    undoTask: (listId, taskId) =>{
        const taskList = taskLists.find(list => list.id === listId)
        const task = taskList.tasks.find(task => task.id === taskId)

        task.completed = false
    }
  }