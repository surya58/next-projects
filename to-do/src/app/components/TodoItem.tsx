import { Checkbox } from "../../components/ui/checkbox";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  task: Task;
  onComplete: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem({ task, onComplete, onRemove }: Props) {
  return (
    <li className="bg-blue-50 shadow rounded px-4 py-2 flex justify-between items-center">
      <div>
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onComplete(task.id)}
          className="mr-2 border-2 border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white data-[state=checked]:border-blue-600"
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onRemove(task.id)}
        className="text-red-500 hover:text-red-700 text-lg"
      >
        🗑
      </button>
    </li>
  );
}
