import { useState } from 'react';
import { BaseNode } from './Basenode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id);
  const [type, setType] = useState(data?.outputType || 'Text');

  return (
   <BaseNode
  id={id}
  title="Output"
  inputs={[{ id: 'value' }]}
  type="output"
>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};