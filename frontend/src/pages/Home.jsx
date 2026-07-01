import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import DashboardStats from "../components/DashboardStats";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  // Search & Filter
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add or Update Task
  const handleSubmit = async (task) => {
    try {
      if (editingTask) {
        const res = await updateTask(editingTask._id, task);

        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t._id === editingTask._id ? res.data : t
          )
        );

        setEditingTask(null);

        toast.success("Task Updated");
      } else {
        const res = await createTask(task);

        setTasks((prevTasks) => [res.data, ...prevTasks]);

        toast.success("Task Added");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Delete Task
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(id);

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== id)
      );

      toast.success("Task Deleted");
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  // Edit Task
  const handleEdit = (task) => {
    setEditingTask(task);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Search + Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Navbar />
      <DashboardStats tasks={tasks} />

      <div className="container">

        <TaskForm
          onSubmit={handleSubmit}
          editingTask={editingTask}
        />

        <div className="toolbar-container">

  <div className="toolbar-header">
    <div>
      <h3>Task Workspace</h3>
      <p>Search and filter your tasks</p>
    </div>

    <span className="task-count">
      {filteredTasks.length} Tasks
    </span>
  </div>

  <div className="toolbar">

    <SearchBar
      search={search}
      setSearch={setSearch}
    />

    <FilterBar
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
    />

  </div>

</div>

        <hr />

       {loading ? (
  <Loader />
) : filteredTasks.length === 0 ? (
  <h2 style={{ textAlign: "center" }}>
    No Tasks Found
  </h2>
) : (
  <div className="task-grid">
    {filteredTasks.map((task) => (
      <TaskCard
        key={task._id}
        task={task}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ))}
  </div>
)}
</div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default Home;