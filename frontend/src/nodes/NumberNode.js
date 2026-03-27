import { useState } from 'react';
import { BaseNode } from './Basenode';

export const NumberNode = ({ id }) => {
  const [num, setNum] = useState(0);

  return (
    <BaseNode id={id} title="Number" outputs={[{ id: 'value' }]}>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
    </BaseNode>
  );
};
