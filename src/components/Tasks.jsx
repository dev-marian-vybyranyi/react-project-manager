import NewTask from "./NewTask";

const Tasks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="my-4 text-stone-800">No tasks found.</p>
      <ul></ul>
    </section>
  );
};

export default Tasks;
