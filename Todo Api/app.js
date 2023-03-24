
console.log('Task Manager App')
const express =  require('express')
const app = express()
const task = require('./routes/task')
const connectDb = require('./MongoDB/connect')

app.use(express.static('./public'))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hoya")
})
app.use('/api/tasks', task)
const port =  3000

const start = async()=>{
    try {
        await connectDb()
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`)      
        })
    } catch(err) {
        console.log(err)
    }
}
start()