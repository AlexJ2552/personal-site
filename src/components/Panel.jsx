import './Panel.css';

function Panel({ title, children }) {
  return (
    <div className="panel">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Panel;
