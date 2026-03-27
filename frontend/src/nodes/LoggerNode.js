import { BaseNode } from './Basenode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      inputs={[{ id: 'input' }]}
    >
      <div>Logs data</div>
    </BaseNode>
  );
};