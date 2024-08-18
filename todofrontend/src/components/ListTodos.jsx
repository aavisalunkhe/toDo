export function ListTodos({todoarray}){
    return <div>
        <div>
            {todoarray.map(function(resp){
                return <div>
                    <h1>{resp.title}</h1>
                    <h2> {resp.description}</h2>
                    <button>{resp.completed== true? "Done": "Mark as Completed"}</button>
                </div>
            })}
        </div>
    </div>
}