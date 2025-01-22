"use client";
import { ReactFlow, Controls, Background, Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const edges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    animated: true,
    label: "Start to Process",
  },
  { id: "2-3", source: "2", target: "3", animated: true },
  {
    id: "3-4",
    source: "3",
    target: "4",
    animated: true,
    label: "End to Process",
  },
  {
    id: "3-5",
    source: "3",
    target: "5",
    animated: true,
    label: "Branch to New Process",
  },
];

const proOptions = { hideAttribution: true };

const nodes: Node[] = [
  {
    id: "1",
    data: {
      label: "Start Node",
    },
    position: { x: 100, y: 70 },
    type: "input",
    style: {
      background: "#e0f7fa",
      border: "2px solid #004d40",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    draggable: true,
  },
  {
    id: "2",
    data: {
      label: "Processing Node",
    },
    position: { x: 100, y: 200 },
    style: {
      background: "#c8e6c9",
      color: "#388e3c",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },
    sourcePosition: "right",
  },
  {
    id: "3",
    data: {
      label: "Transition Node",
    },
    position: { x: 300, y: 200 },
    style: {
      background: "#ffe0b2",
      color: "#f57c00",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    targetPosition: "left",
  },
  {
    id: "4",
    data: {
      label: "End Node",
    },
    position: { x: 400, y: 330 },
    style: {
      background: "#f3e5f5",
      color: "#9c27b0",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
  },
  {
    id: "5",
    data: {
      label: "New Branch Node",
    },
    position: { x: 175, y: 330 },
    style: {
      background: "#ffeb3b",
      color: "#f57c00",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    targetPosition: "top",
  },
];

export default function Home() {
  return (
    <main className="h-screen bg-slate-100 flex justify-center items-center">
      <div
        style={{
          height: "80%",
          width: "80%",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ReactFlow nodes={nodes} edges={edges} proOptions={proOptions}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </main>
  );
}
