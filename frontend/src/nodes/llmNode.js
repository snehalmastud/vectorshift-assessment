import { BaseNode } from './Basenode';

export const LLMNode = ({ id }) => {
  return (
<BaseNode
  id={id}
  title="LLM"
  inputs={[{ id: 'system' }, { id: 'prompt' }]}
  outputs={[{ id: 'response' }]}
  type="llm"
>
      <div>This is a LLM.</div>
    </BaseNode>
  );
};