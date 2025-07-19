import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const nodes = [
  {
    id: '1',
    position: { x: 250, y: 5 },
    data: { label: 'Start Node' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'Second Node' },
  },
  {
    id: '3',
    position: { x: 400, y: 100 },
    data: { label: 'Third Node' },
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
];

const Flow = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
};

export default Flow;
