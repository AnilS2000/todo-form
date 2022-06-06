export const TodoForm =({text,taskValueChange,addTask}) => {
    return(
        // <div className="todo-form"</div>
        <>
        <h1 id="Heading_style">To do List</h1>
            <div className="todo_form">
                
                <input type="text" className="checkbox_style" placeholder="Enter Task" value={text} 
                onChange={(e) => taskValueChange(e.target.value)} />
                <button className="button_style" onClick={() => addTask()}>Add</button>
            </div>
            </>

    );
};