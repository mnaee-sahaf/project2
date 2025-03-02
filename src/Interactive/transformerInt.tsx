import React, { useState, useEffect } from 'react';
import { Sliders, Play, Book, ChevronDown, ChevronUp } from 'lucide-react';

export default function TransformerInt() {
  // Input & processing state
  const [inputText, setInputText] = useState("The cat sat on the mat.");
  const [tokens, setTokens] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Model parameters
  const [params, setParams] = useState({
    numHeads: 4,
    modelDimension: 64,
    usePositionalEncoding: true,
    maskFutureTokens: false,
    scalingFactor: 1 // 1/√dk will be computed based on modelDimension
  });
  
  // Visualization state
  const [attentionWeights, setAttentionWeights] = useState<number[][][]>([]);
  const [selectedToken, setSelectedToken] = useState<number | null>(null);
  const [selectedHead, setSelectedHead] = useState<number | null>(null);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [comparisonMode, setComparisonMode] = useState<'rnn' | 'cnn' | null>(null);
  
  // Positional encodings
  const [positionalEncodings, setPositionalEncodings] = useState<number[][]>([]);
  
  // When input changes, tokenize the text
  useEffect(() => {
    // Simple tokenization by spaces and punctuation
    const simpleTokenize = (text: string) => {
      // Split by spaces and keep punctuation as separate tokens
      return text.trim().split(/(\s+|[,.!?;:])/).filter(t => t.trim() !== '');
    };
    
    setTokens(simpleTokenize(inputText));
  }, [inputText]);
  
  // Process the tokens and compute attention when parameters change or tokens change
  useEffect(() => {
    if (tokens.length === 0) return;
    
    const processTokens = async () => {
      setIsProcessing(true);
      
      // Generate random positional encodings (simplified version of sinusoidal encodings)
      const newPositionalEncodings = tokens.map((_, i) => {
        const pos = Array(Math.min(16, params.modelDimension)).fill(0).map((_, j) => {
          // Simplified sinusoidal positional encoding
          return j % 2 === 0 
            ? Math.sin(i / Math.pow(10000, j / params.modelDimension))
            : Math.cos(i / Math.pow(10000, (j-1) / params.modelDimension));
        });
        return pos;
      });
      setPositionalEncodings(newPositionalEncodings);
      
      // Simulate attention computation
      // In reality, this would involve computing Q, K, V matrices and their dot products
      const newAttentionWeights = [];
      
      for (let h = 0; h < params.numHeads; h++) {
        const headWeights = [];
        
        for (let i = 0; i < tokens.length; i++) {
          const weights = [];
          
          for (let j = 0; j < tokens.length; j++) {
            // If masking future tokens (for decoder self-attention) and j > i, set weight to 0
            if (params.maskFutureTokens && j > i) {
              weights.push(0);
              continue;
            }
            
            // Simulate different attention patterns for different heads
            let weight = 0;
            
            if (h === 0) {
              // Head 0: Focuses on adjacent tokens (local relationships)
              weight = Math.max(0, 1 - Math.abs(i - j) * 0.5);
            } else if (h === 1) {
              // Head 1: Focus on semantic similarities (just a simulation)
              // Words of similar types might attend to each other
              const isCat = (tokens[i] as string).toLowerCase() === "cat" || (tokens[j] as string).toLowerCase() === "cat";
              const isMat = (tokens[i] as string).toLowerCase() === "mat" || (tokens[j] as string).toLowerCase() === "mat";
              weight = (isCat && isMat) ? 0.8 : Math.random() * 0.5;
            } else if (h === 2) {
              // Head 2: Focus on syntactic relationships
              // Articles attend to nouns
              const isArticle = ["the", "a", "an"].includes((tokens[i] as string).toLowerCase());
              const isPotentialNoun = !["the", "a", "an", "on", "in", "at"].includes((tokens[j] as string).toLowerCase());
              weight = (isArticle && isPotentialNoun && i < j && j - i <= 2) ? 0.9 : Math.random() * 0.4;
            } else {
              // Other heads with more random patterns
              weight = Math.random() * 0.7;
            }
            
            // Apply positional bias if enabled
            if (params.usePositionalEncoding) {
              // Add some positional bias - closer tokens get slightly higher weights
              weight += (1 - Math.abs(i - j) / tokens.length) * 0.3;
            }
            
            // Apply scaling factor
            const scaleFactor = params.scalingFactor / Math.sqrt(params.modelDimension / params.numHeads);
            weight = weight * scaleFactor;
            
            // Ensure weight is between 0 and 1
            weight = Math.max(0, Math.min(1, weight));
            weights.push(weight);
          }
          
          // Normalize weights (softmax)
          const maxWeight = Math.max(...weights);
          const expWeights = weights.map(w => Math.exp(w - maxWeight));
          const sumExpWeights = expWeights.reduce((a, b) => a + b, 0);
          const normalizedWeights = expWeights.map(w => w / sumExpWeights);
          
          headWeights.push(normalizedWeights);
        }
        
        newAttentionWeights.push(headWeights);
      }
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setAttentionWeights(newAttentionWeights);
      setIsProcessing(false);
    };
    
    processTokens();
  }, [tokens, params]);
  
  // Handle parameter changes
  const handleParamChange = (paramName: string, value: number | boolean) => {
    setParams(prev => ({
      ...prev,
      [paramName]: value
    }));
  };
  
  // Process the input text
  const processInput = () => {
    // Reset selections
    setSelectedToken(null);
    setSelectedHead(null);
    setComparisonMode(null);
  };
  
  // Get color for attention weight cell
  const getHeatmapColor = (weight: number) => {
    // From light yellow to deep orange/red
    const r = 255;
    const g = Math.max(0, Math.floor(255 * (1 - weight)));
    const b = Math.max(0, Math.floor(255 * (1 - weight * 1.5)));
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
      <div className="flex items-center gap-2 mb-6">
        <Book className="text-indigo-600" size={24} />
        <h3 className="text-xl font-semibold">Transformer Self-Attention Visualization</h3>
      </div>
      
      {/* Input Section */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Input Text
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter a sentence..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="flex items-end">
            <button
              onClick={processInput}
              disabled={isProcessing}
              className={`flex items-center gap-1 px-4 py-2 rounded-md ${
                isProcessing ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              <Play size={16} />
              <span>{isProcessing ? 'Processing...' : 'Process'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Parameters Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sliders className="text-indigo-600" size={20} />
            <h4 className="text-lg font-medium">Model Parameters</h4>
          </div>
          
          <button
            onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
            className="text-sm text-indigo-600 flex items-center"
          >
            {showAdvancedSettings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAdvancedSettings ? 'Hide Advanced' : 'Show Advanced'}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-700">
                Number of Attention Heads
              </label>
              <span className="text-sm text-gray-500">{params.numHeads}</span>
            </div>
            <input
              type="range"
              min={1}
              max={8}
              step={1}
              value={params.numHeads}
              onChange={(e) => handleParamChange('numHeads', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
          
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={params.usePositionalEncoding}
                onChange={(e) => handleParamChange('usePositionalEncoding', e.target.checked)}
                id="posEnc"
                className="h-4 w-4 text-indigo-600 rounded"
              />
              <label htmlFor="posEnc" className="text-sm font-medium text-gray-700">
                Use Positional Encoding
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={params.maskFutureTokens}
                onChange={(e) => handleParamChange('maskFutureTokens', e.target.checked)}
                id="mask"
                className="h-4 w-4 text-indigo-600 rounded"
              />
              <label htmlFor="mask" className="text-sm font-medium text-gray-700">
                Mask Future Tokens
              </label>
            </div>
          </div>
          
          {showAdvancedSettings && (
            <>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Model Dimension (d_model)
                  </label>
                  <span className="text-sm text-gray-500">{params.modelDimension}</span>
                </div>
                <input
                  type="range"
                  min={16}
                  max={512}
                  step={16}
                  value={params.modelDimension}
                  onChange={(e) => handleParamChange('modelDimension', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Attention Scaling Factor
                  </label>
                  <span className="text-sm text-gray-500">{params.scalingFactor.toFixed(2)} × (1/√d<sub>k</sub>)</span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={2}
                  step={0.1}
                  value={params.scalingFactor}
                  onChange={(e) => handleParamChange('scalingFactor', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Token Display */}
      {tokens.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Tokenized Input</h4>
          <div className="flex flex-wrap gap-2">
            {tokens.map((token, idx) => (
              <div
                key={idx}
                className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
                  selectedToken === idx 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                onClick={() => setSelectedToken(selectedToken === idx ? null : idx)}
              >
                {token}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Attention Heads Selection */}
      {attentionWeights.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Attention Heads</h4>
          <div className="flex flex-wrap gap-2">
            <div
              className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
                selectedHead === null 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedHead(null)}
            >
              Combined
            </div>
            
            {Array.from({ length: params.numHeads }).map((_, idx) => (
              <div
                key={idx}
                className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
                  selectedHead === idx 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                onClick={() => setSelectedHead(selectedHead === idx ? null : idx)}
              >
                Head {idx + 1}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Visualization Mode Selection */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Comparison Mode</h4>
        <div className="flex flex-wrap gap-2">
          <div
            className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
              comparisonMode === null 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => setComparisonMode(null)}
          >
            Transformer
          </div>
          
          <div
            className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
              comparisonMode === 'rnn' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => setComparisonMode('rnn')}
          >
            RNN Comparison
          </div>
          
          <div
            className={`px-3 py-1 rounded-md cursor-pointer transition-colors ${
              comparisonMode === 'cnn' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => setComparisonMode('cnn')}
          >
            CNN Comparison
          </div>
        </div>
      </div>
      
      {/* Main Visualization Area */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-lg font-medium mb-4">
          {comparisonMode === 'rnn' 
            ? 'RNN Sequential Processing' 
            : comparisonMode === 'cnn'
              ? 'CNN Sliding Window Processing'
              : selectedHead === null 
                ? 'Multi-Head Attention Overview' 
                : `Attention Head ${selectedHead + 1} Focus`}
        </h4>
        
        {/* Visualization Content */}
        <div className="bg-white rounded border border-gray-200 p-4">
          {isProcessing ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Processing...</p>
            </div>
          ) : comparisonMode === 'rnn' ? (
            <RNNVisualization tokens={tokens} />
          ) : comparisonMode === 'cnn' ? (
            <CNNVisualization tokens={tokens} />
          ) : attentionWeights.length > 0 ? (
            <div>
              {/* Selected Token Attention Pattern */}
              {selectedToken !== null && (
                <div className="mb-6">
                  <h5 className="text-md font-medium mb-2">
                    Attention from "{tokens[selectedToken]}" to other tokens
                  </h5>
                  <div className="flex flex-wrap gap-1 items-center justify-center">
                    {tokens.map((token, idx) => {
                      // Calculate the combined attention weight or use the selected head
                      let weight = 0;
                      if (selectedHead === null) {
                        // Average across all heads
                        for (let h = 0; h < attentionWeights.length; h++) {
                          weight += attentionWeights[h][selectedToken][idx];
                        }
                        weight /= attentionWeights.length;
                      } else {
                        weight = attentionWeights[selectedHead][selectedToken][idx];
                      }
                      
                      return (
                        <div 
                          key={idx}
                          className="relative flex flex-col items-center"
                        >
                          <div 
                            className="px-3 py-1 rounded-md border"
                            style={{
                              borderColor: getHeatmapColor(weight),
                              backgroundColor: `${getHeatmapColor(weight)}40`
                            }}
                          >
                            {token}
                          </div>
                          <div className="text-xs font-medium mt-1">
                            {(weight * 100).toFixed(1)}%
                          </div>
                          {weight > 0.1 && (
                            <div 
                              className="absolute top-0 left-0 w-full h-full pointer-events-none"
                              style={{
                                borderWidth: `${Math.max(1, Math.floor(weight * 5))}px`,
                                borderStyle: 'solid',
                                borderColor: getHeatmapColor(weight),
                                borderRadius: '0.375rem',
                                opacity: 0.7
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Attention Heatmap */}
              <div>
                <h5 className="text-md font-medium mb-2">
                  Attention Weight Heatmap
                  {selectedHead !== null ? ` (Head ${selectedHead + 1})` : ' (Combined)'}
                </h5>
                
                <div className="overflow-x-auto">
                  <div className="grid" style={{ gridTemplateColumns: `auto ${tokens.map(() => '1fr').join(' ')}` }}>
                    {/* Header row */}
                    <div className="p-2"></div>
                    {tokens.map((token, idx) => (
                      <div 
                        key={idx} 
                        className="p-2 font-medium text-center"
                        style={{ 
                          maxWidth: '80px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {token}
                      </div>
                    ))}
                    
                    {/* Data rows */}
                    {tokens.map((rowToken, i) => (
                      <React.Fragment key={i}>
                        <div className="p-2 font-medium">{rowToken}</div>
                        {tokens.map((colToken, j) => {
                          // Calculate the attention weight
                          let weight = 0;
                          if (selectedHead === null) {
                            // Average across all heads
                            for (let h = 0; h < attentionWeights.length; h++) {
                              weight += attentionWeights[h][i][j];
                            }
                            weight /= attentionWeights.length;
                          } else {
                            weight = attentionWeights[selectedHead][i][j];
                          }
                          
                          return (
                            <div 
                              key={j}
                              className="w-8 h-8 flex items-center justify-center text-xs"
                              style={{ 
                                backgroundColor: getHeatmapColor(weight),
                                color: weight > 0.5 ? 'white' : 'black'
                              }}
                              title={`From "${rowToken}" to "${colToken}": ${(weight * 100).toFixed(1)}%`}
                            >
                              {(weight * 100).toFixed(0)}
                            </div>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Positional Encoding Visualization */}
              {params.usePositionalEncoding && (
                <div className="mt-6">
                  <h5 className="text-md font-medium mb-2">Positional Encoding Patterns</h5>
                  <div className="overflow-x-auto">
                    <div className="flex">
                      {positionalEncodings.map((encoding, idx) => (
                        <div key={idx} className="flex flex-col items-center mr-2">
                          <div className="text-xs font-medium mb-1">{tokens[idx]}</div>
                          <div className="w-8 h-16 relative">
                            {encoding.slice(0, 8).map((value, i) => (
                              <div 
                                key={i} 
                                className="absolute w-full h-2"
                                style={{
                                  top: `${i * 2}px`,
                                  backgroundColor: value > 0 ? 'rgb(79, 70, 229)' : 'rgb(239, 68, 68)',
                                  opacity: Math.abs(value) * 0.8 + 0.2,
                                  transform: `scaleX(${Math.abs(value) * 0.8 + 0.2})`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Enter a sentence and press "Process" to begin</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Explanation Section */}
      <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium mb-2">What You're Seeing</h4>
        
        {comparisonMode === 'rnn' ? (
          <p className="text-sm text-gray-700">
            In RNNs, tokens are processed sequentially one at a time, with information passing from earlier tokens to later ones. This creates a bottleneck where token 1 must be processed before token 2, and so on. In contrast, the Transformer processes all tokens in parallel through self-attention.
          </p>
        ) : comparisonMode === 'cnn' ? (
          <p className="text-sm text-gray-700">
            CNNs use sliding windows (e.g., 3-5 tokens wide) to capture local patterns. While they can process in parallel like Transformers, they're limited to fixed context windows and struggle with long-range dependencies. Transformers can attend to any position regardless of distance.
          </p>
        ) : selectedHead === null ? (
          <p className="text-sm text-gray-700">
            This visualization shows the combined attention pattern across all heads. Each cell in the heatmap represents how much one token (row) attends to another token (column). Darker colors indicate stronger attention. Select a token to see its specific attention pattern, or select an individual head to see its specialized focus.
          </p>
        ) : (
          <p className="text-sm text-gray-700">
            {selectedHead === 0 ? (
              "This head seems to focus on local relationships between adjacent words."
            ) : selectedHead === 1 ? (
              "This head appears to capture semantic relationships between related concepts (e.g., 'cat' and 'mat')."
            ) : selectedHead === 2 ? (
              "This head focuses on syntactic patterns, such as how articles ('the', 'a') relate to nouns."
            ) : (
              "Each attention head learns different patterns during training. Some may focus on grammar, others on semantics, or positional relationships."
            )}
          </p>
        )}
      </div>
    </div>
  );
}

// Helper component for RNN visualization
interface VisualizationProps {
  tokens: string[];
}

function RNNVisualization({ tokens }: VisualizationProps) {
  const [activeToken, setActiveToken] = useState(0);
  const [hiddenState, setHiddenState] = useState<number[]>([]);
  
  useEffect(() => {
    // Initialize hidden state
    setHiddenState([]);
    setActiveToken(0);
    
    // Simulate RNN processing
    let currentToken = 0;
    const interval = setInterval(() => {
      if (currentToken < tokens.length) {
        setActiveToken(currentToken);
        setHiddenState(prev => [...prev, currentToken]);
        currentToken++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setActiveToken(-1); // Mark as done
        }, 1000);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, [tokens]);
  
  return (
    <div className="h-64 flex flex-col items-center justify-center">
      <div className="flex gap-2 mb-6">
        {tokens.map((token, idx) => (
          <div
            key={idx}
            className={`px-3 py-1 rounded-md transition-all duration-200 ${
              idx === activeToken 
                ? 'bg-indigo-600 text-white transform scale-110' 
                : idx < activeToken
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-400'
            }`}
          >
            {token}
          </div>
        ))}
      </div>
      
      {/* Hidden state representation */}
      <div className="bg-gray-100 p-3 rounded-lg w-full max-w-md">
        <div className="text-sm font-medium mb-2">RNN Hidden State:</div>
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-indigo-100 border-2 border-indigo-400 flex items-center justify-center text-indigo-600 font-medium">
            h<sub>t</sub>
          </div>
          <div className="flex-grow px-4">
            <div className="h-2 bg-indigo-200 rounded-full">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${(hiddenState.length / tokens.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          {activeToken === -1 
            ? "Processing complete" 
            : activeToken === 0 
              ? "Starting to process sequence..." 
              : `Processed ${activeToken} of ${tokens.length} tokens sequentially`}
        </div>
      </div>
    </div>
  );
}

// Helper component for CNN visualization
function CNNVisualization({ tokens }: VisualizationProps) {
    const [windowPosition, setWindowPosition] = useState(0);
    const windowSize = 3; // 3-token window
    
    useEffect(() => {
      // Simulate CNN sliding window
      if (tokens.length < windowSize) return;
      
      let position = 0;
      const interval = setInterval(() => {
        if (position <= tokens.length - windowSize) {
          setWindowPosition(position);
          position++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setWindowPosition(-1); // Mark as done
          }, 1000);
        }
      }, 800);
      
      return () => clearInterval(interval);
    }, [tokens]);
    
    return (
      <div className="h-64 flex flex-col items-center justify-center">
        <div className="flex gap-2 mb-6 relative">
          {tokens.map((token, idx) => (
            <div
              key={idx}
              className={`px-3 py-1 rounded-md transition-all duration-200 ${
                (idx >= windowPosition && idx < windowPosition + windowSize)
                  ? 'bg-indigo-600 text-white transform scale-110' 
                  : idx < windowPosition
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-400'
              }`}
            >
              {token}
            </div>
          ))}
          
          {/* Sliding window frame */}
          {windowPosition >= 0 && tokens.length >= windowSize && (
            <div 
              className="absolute h-full top-0 border-2 border-indigo-400 rounded-lg pointer-events-none"
              style={{
                width: `${(windowSize * 100) / tokens.length}%`,
                left: `${(windowPosition * 100) / tokens.length}%`,
                transition: 'left 0.8s ease-in-out'
              }}
            >
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-indigo-600 font-medium">
                Current Window
              </div>
            </div>
          )}
        </div>
        
        {/* CNN explanation */}
        <div className="bg-gray-100 p-3 rounded-lg w-full max-w-md">
          <div className="text-sm font-medium mb-2">CNN Processing:</div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-indigo-100 border-2 border-indigo-400 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">Kernel</span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              {windowPosition === -1 ? (
                "Finished processing all windows"
              ) : (
                <>
                  Processing {windowSize}-token window at position {windowPosition + 1}
                  <div className="text-xs text-gray-500 mt-1">
                    Each window processed independently, but limited to local context
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            CNNs capture local patterns but require multiple layers for long-range dependencies
          </div>
        </div>
      </div>
    );
  }