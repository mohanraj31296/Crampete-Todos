const mongoose = require("mongoose")

let todoSchema = new mongoose.Schema(
    {
        "title":String,
        "completed":Boolean
    }
)

let Todo = mongoose.model('Todos', todoSchema);

module.exports = Todo