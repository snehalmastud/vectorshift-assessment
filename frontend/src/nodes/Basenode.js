import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  type = 'default'
}) => {
  return (
    <div className={`node ${type}`}>
      {/* Inputs */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      <div className="node-title">{title}</div>

      <div>{children}</div>

      {/* Outputs */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};