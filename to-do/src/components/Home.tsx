"use client";
import { useState } from "react";
import TodoList from "./TodoList";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: inputText.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const handleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>To-Do List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <input
              className="flex-1 border rounded px-3 py-2"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter a task"
            />
            <Button
              size="lg"
              variant="default"
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Add
            </Button>
          </div>
          <TodoList
            tasks={tasks}
            onComplete={handleComplete}
            onRemove={handleRemove}
          />
        </CardContent>
      </Card>
    </div>
  );
}
