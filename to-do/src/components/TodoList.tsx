import TodoItem from './TodoItem'

interface Task {
  id: number
  text: string
  completed: boolean
}

interface Props {
  tasks: Task[]
  onComplete: (id: number) => void
  onRemove: (id: number) => void
}

export default function TodoList({ tasks, onComplete, onRemove }: Props) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onComplete={onComplete} onRemove={onRemove} />
      ))}
    </ul>
  )
}
