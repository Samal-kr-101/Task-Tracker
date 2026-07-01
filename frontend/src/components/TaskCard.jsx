function TaskCard({ task, onEdit, onDelete }) {
  const getStatusClass = () => {
    switch (task.status) {
      case "Pending":
        return "status pending";

      case "In Progress":
        return "status progress";

      case "Completed":
        return "status completed";

      default:
        return "status";
    }
  };

  const getPriorityClass = () => {
    switch (task.priority) {
      case "Low":
        return "priority low";

      case "Medium":
        return "priority medium";

      case "High":
        return "priority high";

      default:
        return "priority";
    }
  };

  return (
    <div className="task-card">

      <div className="task-top">

        <h3>{task.title}</h3>

        <span className={getPriorityClass()}>
          {task.priority}
        </span>

      </div>

      <p className="task-description">
        {task.description || "No description provided."}
      </p>

      <div className="task-middle">

        <span className={getStatusClass()}>
          {task.status}
        </span>

        <span className="task-date">
          📅{" "}
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )
            : "No Due Date"}
        </span>

      </div>

      <div className="task-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;