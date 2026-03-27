export const SubmitButton = ({ nodes, edges }) => {

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      alert(
        `Pipeline Analysis:

Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? 'Yes ✅' : 'No ❌'}`
      );

    } catch (err) {
      console.error(err);
      alert('Error connecting to backend');
    }
  };

  return (
    <button onClick={handleSubmit}>
      Submit Pipeline
    </button>
  );
};
