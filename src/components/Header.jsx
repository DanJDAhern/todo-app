export function Header(props) {

    const {todos, handleTimeOfDay} = props
    const todosLength = todos.length

    const isTasksPlural = todos.Length != 1

    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1> Good {handleTimeOfDay()} </h1>
            <h2 className="text-gradient"> You have {todosLength} open {taskOrTasks}.</h2>
        </header>
    )
}