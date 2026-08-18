export function ProjectsNavbar({ selected, onSelect }) {
  const items = [
    { key: "iCook", label: "ICook" },
    { key: "GazeTracker", label: "Gaze Tracking Reader" },
    { key: "WAG", label: "Waste Anesthetic Gas Filtration Device" },
    { key: "Souncheck", label: "Probe Health Diagnostic Tool" },
    { key: "Hardware", label: "Hardware Design + CAD Portfolio" },
  ];

  return (
    <ul>
      {items.map(({ key, label }) => (
        <li key={key}>
          <button
            className={selected === key ? "active" : ""}
            onClick={() => onSelect(key)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}