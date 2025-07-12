// src/components/TaskDashboard.tsx
import React, { useState, useEffect } from 'react';
import type { Task } from '../interfaces/Task';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';

const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task: Omit<Task, 'id' | 'completed'>) => {
    const newTask: Task = {
      id: Date.now(),
      ...task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div>
      <h3>Add your tasks below</h3>
      {editingTask ? (
        <EditTaskForm
          task={editingTask}
          onUpdateTask={handleUpdateTask}
          onCancel={handleCancelEdit}
        />
      ) : (
        <AddTaskForm onAddTask={handleAddTask} />
      )}
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onToggleComplete={(taskId) => {
          setTasks(
            tasks.map(task =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          );
        }}
      />
    </div>
  );
};

export default TaskDashboard;