import { useState, useMemo } from 'react';
import { BaseNode } from './Basenode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  // ✅ 1. Extract variables like {{variable}}
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      matches.add(match[1]);
    }

    return Array.from(matches).map((v) => ({ id: v }));
  }, [text]);

  // ✅ 2. Auto resize textarea
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables}              // 👈 dynamic handles
      outputs={[{ id: 'output' }]}
      type="text"
    >
      <label>Text:</label>

      <textarea
        value={text}
        onChange={handleChange}
        rows={Math.max(3, text.split('\n').length)}
        style={{
          width: '100%',
          resize: 'none',
          overflow: 'hidden',
        }}
      />
    </BaseNode>
  );
};