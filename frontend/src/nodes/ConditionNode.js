import { BaseNode } from './Basenode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={[{ id: 'value' }]}
      outputs={[{ id: 'true' }, { id: 'false' }]}
    >
      <div>Condition check</div>
    </BaseNode>
  );
};