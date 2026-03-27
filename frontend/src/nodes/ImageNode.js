import { BaseNode } from './Basenode';

export const ImageNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Image"
      inputs={[{ id: 'file' }]}
      outputs={[{ id: 'preview' }]}
    >
      <div>Image processor</div>
    </BaseNode>
  );
};