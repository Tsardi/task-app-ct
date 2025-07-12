// src/components/EditTaskForm.tsx
import React, { useState, useEffect } from 'react';
import type { Task } from '../interfaces/Task';

interface EditTaskFormProps {
  task: Task;
  onUpdateTask: (task: Task) => void;
  onCancel: () => void;
}

// Interface for our errors state (can be shared or redefined)
interface FormErrors {
  title?: string;
  description?: string;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, onUpdateTask, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [errors, setErrors] = useState<FormErrors>({}); // State to hold validation errors

  // Effect to reset form state when the task to edit changes
  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setErrors({}); // Clear previous errors
  }, [task]);

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
      onUpdateTask({ ...task, title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Edit Task</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Display error message if it exists */}
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>
      <button type="submit">Update Task</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditTaskForm;