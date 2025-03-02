import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Play, RotateCcw } from 'lucide-react';

interface Parameter {
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
}

interface DataPoint {
  x: number;
  y: number;
  class: number;
}

export default function NeuralnetInt() {
  const [parameters, setParameters] = useState<Parameter[]>([
    { name: 'Learning Rate', min: 0.001, max: 1, step: 0.001, value: 0.01 },
    { name: 'Epochs', min: 1, max: 100, step: 1, value: 10 },
    { name: 'Hidden Layers', min: 1, max: 5, step: 1, value: 2 },
    { name: 'Neurons per Layer', min: 1, max: 10, step: 1, value: 4 },
  ]);
  
  const [running, setRunning] = useState(false);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [loss, setLoss] = useState(1);
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const simulateTrainingTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Generate sample data points
  useEffect(() => {
    generateData();
    // Cleanup function to clear timeouts on unmount
    return () => {
      if (simulateTrainingTimeout.current) {
        clearTimeout(simulateTrainingTimeout.current);
      }
    };
  }, []);

  
  const generateData = () => {
    const newPoints: DataPoint[] = [];
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      // Simple classification rule: points above y = x are class 1, others are class 0
      const classValue = y > x ? 1 : 0;
      newPoints.push({ x, y, class: classValue });
    }
    setDataPoints(newPoints);
    setCurrentEpoch(0);
    setAccuracy(0);
    setLoss(1);
  };
  
  const handleParameterChange = (index: number, newValue: number) => {
    setParameters(prev => 
      prev.map((param, i) => 
        i === index ? { ...param, value: newValue } : param
      )
    );
    
    // Reset if parameters change
    if (running) {
      setRunning(false);
      setCurrentEpoch(0);
      setAccuracy(0);
      setLoss(1);
    }
  };
  
  const runModel = () => {
    if (running) return;
    
    setRunning(true);
    setCurrentEpoch(0);
    setAccuracy(0);
    setLoss(1);
    
    const learningRate = parameters.find(p => p.name === 'Learning Rate')?.value || 0.01;
    const maxEpochs = parameters.find(p => p.name === 'Epochs')?.value || 10;
    
    let epoch = 0;
    
    const simulateTraining = () => {
      if (epoch < maxEpochs) {
        epoch++;
        
        // Simulate accuracy and loss changes
        // Higher learning rate leads to faster initial changes but may be unstable
        const learningFactor = learningRate * 10;
        const newAccuracy = Math.min(0.5 + (epoch / maxEpochs) * 0.5 * (1 + Math.random() * 0.1), 0.98);
        const newLoss = Math.max(1 - (epoch / maxEpochs) * (0.8 + learningFactor * 0.2), 0.05);
        
        setCurrentEpoch(epoch);
        setAccuracy(newAccuracy);
        setLoss(newLoss);
        
        simulateTrainingTimeout.current = setTimeout(simulateTraining, 300); // Update every 300ms
      } else {
        setRunning(false);
      }
    };
    
    simulateTrainingTimeout.current = setTimeout(simulateTraining, 300);
  };
  
  const resetModel = () => {
    setRunning(false);
    setCurrentEpoch(0);
    setAccuracy(0);
    setLoss(1);
    generateData();
  };
  
  // Get parameter values for convenience
  const getLearningRate = () => parameters.find(p => p.name === 'Learning Rate')?.value || 0.01;
  const getEpochs = () => parameters.find(p => p.name === 'Epochs')?.value || 10;
  const getHiddenLayers = () => parameters.find(p => p.name === 'Hidden Layers')?.value || 2;
  const getNeuronsPerLayer = () => parameters.find(p => p.name === 'Neurons per Layer')?.value || 4;
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sliders className="text-indigo-600" size={24} />
          <h3 className="text-xl font-semibold">Model Parameters</h3>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={runModel} 
            disabled={running}
            className={`flex items-center gap-1 px-3 py-1 rounded ${running ? 'bg-gray-200 text-gray-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            <Play size={16} />
            <span>Run</span>
          </button>
          
          <button 
            onClick={resetModel}
            className="flex items-center gap-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Parameters Panel */}
        <div className="space-y-6">
          {parameters.map((param, index) => (
            <div key={param.name} className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">
                  {param.name}
                </label>
                <span className="text-sm text-gray-500">
                  {param.value}
                </span>
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
          
          {/* Model Metrics */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Training Progress</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500">Epoch</p>
                <p className="text-lg font-semibold">{currentEpoch}/{getEpochs()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Accuracy</p>
                <p className="text-lg font-semibold">{(accuracy * 100).toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Loss</p>
                <p className="text-lg font-semibold">{loss.toFixed(3)}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visualization Panel */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Model Visualization</h4>
          
          <div className="bg-white rounded border border-gray-200 p-4 h-80">
            {/* Neural Network Visualization */}
            <div className="flex flex-col items-center h-full">
              {/* Data Scatter Plot */}
              <div className="w-full h-40 mb-4 relative border border-gray-100 rounded">
                {dataPoints.map((point, i) => (
                  <div 
                    key={i} 
                    className={`absolute w-2 h-2 rounded-full ${point.class === 1 ? 'bg-blue-500' : 'bg-red-500'}`} 
                    style={{ 
                      left: `${point.x}%`, 
                      top: `${point.y}%`, 
                      transform: 'translate(-50%, -50%)' 
                    }}
                  />
                ))}
                
                {/* Decision boundary - simplified for visualization */}
                {accuracy > 0 && (
                  <div 
                    className="absolute bg-gray-400 opacity-30" 
                    style={{ 
                      left: '0', 
                      top: '0', 
                      width: '100%', 
                      height: `${100 - Math.min(accuracy * 100, 90)}%`,
                      transformOrigin: 'bottom left',
                      transform: 'skewY(-45deg)'
                    }}
                  />
                )}
              </div>
              
              {/* Neural Network Architecture */}
              <div className="flex justify-between items-center w-full h-48 my-2">
                {/* Input Layer */}
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-xs text-gray-500 mb-2">Input</div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">x₁</div>
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">x₂</div>
                  </div>
                </div>
                
                {/* Hidden Layers */}
                {Array.from({ length: getHiddenLayers() }).map((_, layerIndex) => (
                  <div key={layerIndex} className="flex flex-col items-center justify-center h-full">
                    {layerIndex === Math.floor(getHiddenLayers() / 2) && (
                      <div className="text-xs text-gray-500 mb-2">Hidden</div>
                    )}
                    <div className="space-y-2">
                      {Array.from({ length: getNeuronsPerLayer() }).map((_, neuronIndex) => (
                        <div 
                          key={neuronIndex} 
                          className="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center"
                          style={{
                            opacity: running ? 0.5 + Math.random() * 0.5 : 1
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Output Layer */}
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-xs text-gray-500 mb-2">Output</div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">ŷ</div>
                  </div>
                </div>
              </div>
              
              {/* Learning Information */}
              <div className="mt-2 text-sm text-gray-600 text-center">
                {running ? (
                  <p>Training in progress... (α={getLearningRate()})</p>
                ) : currentEpoch > 0 ? (
                  <p>Training complete with {getHiddenLayers()} hidden layers</p>
                ) : (
                  <p>Click "Run" to start training the model</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}