// src/components/TaskItem.tsx
import React from 'react';
import type { Task } from '../interfaces/Task';

interface TaskItemProps {
  task: Task;
  onDeleteTask: (taskId: number) => void;
  onEditTask: (task: Task) => void;
  onToggleComplete: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask, onEditTask, onToggleComplete }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button className="Complete-btn" onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button className ="Edit-btn" onClick={() => onEditTask(task)}>Edit</button>
      <button className = "Delete-btn" onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;