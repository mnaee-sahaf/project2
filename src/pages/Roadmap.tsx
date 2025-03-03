import ReactFlow, { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import {MachineLearningRoadmap1} from '../components/Roadmap1'

const nodes = [
  { id: "1", type: "customNode", data: { label: "Machine Learning" }, position: { x: 250, y: 10 } },
  { id: "2", type: "customNode", data: { label: "Learn the Basics" }, position: { x: 150, y: 100 } },
  { id: "3", type: "customNode", data: { label: "Python & Libraries" }, position: { x: 350, y: 100 } },
  { id: "4", type: "customNode", data: { label: "Math & Stats" }, position: { x: 150, y: 200 } },
  { id: "5", type: "customNode", data: { label: "Supervised Learning" }, position: { x: 350, y: 200 } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomNode = ({ data }: any) => (
  <div className="bg-yellow-300 text-black px-4 py-2 rounded shadow-md text-center font-bold">
    {data.label}
    <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-black" />
    <Handle type="target" position={Position.Top} className="w-2 h-2 bg-black" />
  </div>
);

const nodeTypes = { customNode: CustomNode };

export default function MachineLearningRoadmap() {
    return (
      <div className="w-full h-screen bg-gray-100 flex flex-col"> {/* Changed flex-1 to flex-row */}
          <div className="flex-1"> {/* Added flex-1 to allow this div to take available space */}
          <MachineLearningRoadmap1/>
          </div>
          <div className="flex-1"> {/* Added flex-1 to allow this div to take available space */}
        <div className="w-full h-full border p-4 rounded-lg shadow-lg bg-white"> {/* Changed width and height to full */}
          <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView />
          </div>
        </div>
      </div>
    );
  }
