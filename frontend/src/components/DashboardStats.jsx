function DashboardStats({ tasks }) {
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: total,
      color: "primary",
    },
    {
      title: "Pending",
      value: pending,
      color: "warning",
    },
    {
      title: "In Progress",
      value: progress,
      color: "info",
    },
    {
      title: "Completed",
      value: completed,
      color: "success",
    },
  ];

  return (
    <section className="stats-section">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`stats-card ${item.color}`}
        >
          <div className="stats-top">
            <p>{item.title}</p>

            <div className="stats-dot"></div>
          </div>

          <h2>{item.value}</h2>
        </div>
      ))}
    </section>
  );
}

export default DashboardStats;