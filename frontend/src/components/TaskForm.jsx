import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function TaskForm({ onSubmit, editingTask }) {
  const initialState = {
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
  };

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "Pending",
        priority: editingTask.priority || "Medium",
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.substring(0, 10)
          : "",
      });
    } else {
      setForm(initialState);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (form.title.trim().length < 3) {
      toast.error("Title should contain at least 3 characters");
      return;
    }

    onSubmit(form);

    if (!editingTask) {
      setForm(initialState);
    }
  };

  return (
    <section className="form-wrapper">

      <div className="form-header">

        <h2>
          {editingTask
            ? "Update Task"
            : "Create New Task"}
        </h2>

        <p>
          Keep your work organized and stay productive.
        </p>

      </div>

      <form
        className="task-form"
        onSubmit={submitHandler}
      >

        <div className="form-group">
          <label>Task Title</label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </div>

        <div className="form-group">
          <label>Due Date</label>

          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Description</label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your task..."
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Priority</label>

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button className="submit-btn">
          {editingTask
            ? "Update Task"
            : "Add Task"}
        </button>

      </form>

    </section>
  );
}

export default TaskForm;