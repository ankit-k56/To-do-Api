const express = require('express')
const router = express.Router()
const {getAllTasks,postTasks,getTask,updateTasks,deleteTasks} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(postTasks)
router.route('/:id').patch(updateTasks).delete(deleteTasks).get(getTask)

module.exports = router