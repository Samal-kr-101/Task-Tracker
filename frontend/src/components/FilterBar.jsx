function FilterBar({ statusFilter, setStatusFilter }) {
  return (
    <div className="filter-box">

      <label className="filter-label">
        Filter
      </label>

      <select
        className="filter-select"
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
      >
        <option value="All">
          All Tasks
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="In Progress">
          In Progress
        </option>

        <option value="Completed">
          Completed
        </option>

      </select>

    </div>
  );
}

export default FilterBar;