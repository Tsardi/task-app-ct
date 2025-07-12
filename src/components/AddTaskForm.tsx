// src/components/AddTaskForm.tsx
import React, { useState } from 'react';
import type { Task } from '../interfaces/Task';

interface AddTaskFormProps {
  onAddTask: (task: Omit<Task, 'id' | 'completed'>) => void;
}

// An interface for our errors state
interface FormErrors {
  title?: string;
  description?: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<FormErrors>({}); // State to hold validation errors

  // Validation logic
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required.';
    } else if (title.trim().length > 50) {
      newErrors.title = 'Title cannot be longer than 50 characters.';
    }

    if (description.trim().length > 200) {
        newErrors.description = 'Description cannot be longer than 200 characters.';
    }

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Only submit if the form is valid
    if (validateForm()) {
      onAddTask({ title, description });
      setTitle('');
      setDescription('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate> {/* noValidate disables default browser validation */}
      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Display error message if it exists */}
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>
      <div>
        <textarea
          placeholder="Task Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;