import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Parameter {
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
}

export function InteractiveVisualization() {
  const [parameters, setParameters] = useState<Parameter[]>([
    { name: 'Learning Rate', min: 0.001, max: 1, step: 0.001, value: 0.01 },
    { name: 'Epochs', min: 1, max: 100, step: 1, value: 10 },
  ]);

  const handleParameterChange = (index: number, newValue: number) => {
    setParameters((prev) =>
      prev.map((param, i) => (i === index ? { ...param, value: newValue } : param))
    );
  };

  // Simulate model performance based on parameters
  const calculatePerformance = () => {
    const learningRate = parameters.find((p) => p.name === 'Learning Rate')?.value || 0.01;
    const epochs = parameters.find((p) => p.name === 'Epochs')?.value || 10;

    // Simulate a simple performance metric (e.g., accuracy)
    const performance = Math.min(100, (learningRate * 50 + epochs * 0.5));
    return performance;
  };

  const performance = calculatePerformance();

  // Chart data
  const chartData = {
    labels: ['Model Performance'],
    datasets: [
      {
        label: 'Accuracy (%)',
        data: [performance],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="text-indigo-600" size={24} />
        <h3 className="text-xl font-semibold">Model Parameters</h3>
      </div>

      {/* Parameter Sliders */}
      <div className="space-y-6">
        {parameters.map((param, index) => (
          <div key={param.name} className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-700">
                {param.name}
              </label>
              <span className="text-sm text-gray-500">{param.value}</span>
            </div>
            <input
              type="range"
              min={param.min}
              max={param.max}
              step={param.step}
              value={param.value}
              onChange={(e) => handleParameterChange(index, parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        ))}
      </div>

      {/* Visualization Section */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Model Output</h4>
        <div className="h-64">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}