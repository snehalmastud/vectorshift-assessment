import { BaseNode } from './Basenode';

export const AddNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Add"
      inputs={[{ id: 'a' }, { id: 'b' }]}
      outputs={[{ id: 'result' }]}
    >
      <div>Add two numbers</div>
    </BaseNode>
  );
};