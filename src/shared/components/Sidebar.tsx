import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Zone Management", path: "/zones" },
  { name: "Meter Management", path: "/meters" },
  { name: "User & Role Management", path: "/users" },
  { name: "Reports & Analytics", path: "/reports" },
  { name: "Alerts", path: "/alerts" },
  { name: "Audit Logs", path: "/audit-logs" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>MDMS</h2>

      <p className="sidebar-subtitle">Meter Data Management</p>

      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
