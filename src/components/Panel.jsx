import './Panel.css';

function Panel({ title, children, icon, color = "default" }) {
  return (
    <div className={`panel panel-${color}`}>
      <div className="panel-header">
        {icon && <span className="panel-icon">{icon}</span>}
        <h2 className="panel-title">{title}</h2>
      </div>
      <div className="panel-content">
        {children}
      </div>
      <div className="panel-overlay">
        <span className="panel-cta">Click to explore →</span>
      </div>
    </div>
  );
}

export default Panel;