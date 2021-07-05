var data = []

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', { todos : data })
    })

    app.post('/todo', (req,res) =>{
        data.push(req.body)
        res.json(data)
    })

    app.delete('/todo/:item', (req,res) =>{
        data = data.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item)
        res.json(data)
    })
}