export const TodoFilter = ({ showAll, showDone, showPending }) => {
  return (
    <div className="todo_filter_style">
      <a onClick={showAll}>Show All</a>
      <br />
      <br />
      <a onClick={showPending}>Show Pending</a>
      <br />
      <br />
      <a onClick={showDone}>Show Done</a>
    </div>
  );
};
