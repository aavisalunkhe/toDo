const z= require("zod")

//for /addTodo
const schemaForTodo=z.object({
    title: z.string(),
    description: z.string()
})

//for /listTodos

//for /completed
const schemaForCompleted=z.object({
    uniqueId: z.string()
})

module.exports= {
    comp: schemaForCompleted,
    add: schemaForTodo
}