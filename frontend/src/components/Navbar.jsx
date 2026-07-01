function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="navbar">
      <div className="navbar-content">

        <div className="logo">
          <div className="logo-icon">📋</div>

          <div>
            <h1>Task Tracker</h1>
            <p>Organize your work. Stay productive.</p>
          </div>
        </div>

        <div className="date-box">
          <span>Today</span>
          <h3>{today}</h3>
        </div>

      </div>
    </header>
  );
}

export default Navbar;