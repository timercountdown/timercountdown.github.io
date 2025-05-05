// Complete WhiteNoisePlayer.tsx content

'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize } from 'lucide-react';

interface NoiseType {
  id: string;
  name: string;
  description: string;
}

interface WhiteNoisePlayerProps {
  noiseTypes: NoiseType[];
}

export default function WhiteNoisePlayer({ noiseTypes }: WhiteNoisePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedNoise, setSelectedNoise] = useState(noiseTypes[0].id);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create AudioContext when component mounts
    if (typeof window !== 'undefined' && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    // Cleanup on unmount
    return () => {
      stopSound();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    // Handle changes to playing state, selected noise, or volume
    if (isPlaying) {
      stopSound();
      playSound();
    }
  }, [isPlaying, selectedNoise, volume, isMuted]);

  const playSound = () => {
    if (!audioContextRef.current) return;
    
    // Create new nodes
    sourceNodeRef.current = audioContextRef.current.createOscillator();
    gainNodeRef.current = audioContextRef.current.createGain();
    
    // Connect nodes
    sourceNodeRef.current.connect(gainNodeRef.current);
    gainNodeRef.current.connect(audioContextRef.current.destination);
    
    // Configure based on selected noise
    const actualVolume = isMuted ? 0 : volume / 100;
    gainNodeRef.current.gain.value = actualVolume;
    
    // Configure noise type
    if (selectedNoise === "white") {
      createWhiteNoise();
    } else if (selectedNoise === "pink") {
      createPinkNoise();
    } else if (selectedNoise === "brown") {
      createBrownNoise();
    } else if (selectedNoise === "office") {
      createOfficeAmbience();
    }
  };

  const createWhiteNoise = () => {
    if (!audioContextRef.current || !gainNodeRef.current) return;
    
    const bufferSize = 2 * audioContextRef.current.sampleRate;
    const noiseBuffer = audioContextRef.current.createBuffer(1, bufferSize, audioContextRef.current.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    const whiteNoiseSource = audioContextRef.current.createBufferSource();
    whiteNoiseSource.buffer = noiseBuffer;
    whiteNoiseSource.loop = true;
    
    whiteNoiseSource.connect(gainNodeRef.current);
    whiteNoiseSource.start();
    sourceNodeRef.current = whiteNoiseSource as unknown as OscillatorNode;
  };

  const createPinkNoise = () => {
    if (!audioContextRef.current || !gainNodeRef.current) return;
    
    const bufferSize = 2 * audioContextRef.current.sampleRate;
    const noiseBuffer = audioContextRef.current.createBuffer(1, bufferSize, audioContextRef.current.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.11; // Scale to keep in the -1 to 1 range
      
      b6 = white * 0.115926;
    }
    
    const pinkNoiseSource = audioContextRef.current.createBufferSource();
    pinkNoiseSource.buffer = noiseBuffer;
    pinkNoiseSource.loop = true;
    
    pinkNoiseSource.connect(gainNodeRef.current);
    pinkNoiseSource.start();
    sourceNodeRef.current = pinkNoiseSource as unknown as OscillatorNode;
  };

  const createBrownNoise = () => {
    if (!audioContextRef.current || !gainNodeRef.current) return;
    
    const bufferSize = 2 * audioContextRef.current.sampleRate;
    const noiseBuffer = audioContextRef.current.createBuffer(1, bufferSize, audioContextRef.current.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    let lastOut = 0.0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      
      output[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // Scale to make louder
    }
    
    const brownNoiseSource = audioContextRef.current.createBufferSource();
    brownNoiseSource.buffer = noiseBuffer;
    brownNoiseSource.loop = true;
    
    brownNoiseSource.connect(gainNodeRef.current);
    brownNoiseSource.start();
    sourceNodeRef.current = brownNoiseSource as unknown as OscillatorNode;
  };

  const createOfficeAmbience = () => {
    if (!audioContextRef.current || !gainNodeRef.current) return;
    
    // This is a simplified simulation of office ambience using filtered noise
    const bufferSize = 2 * audioContextRef.current.sampleRate;
    const noiseBuffer = audioContextRef.current.createBuffer(1, bufferSize, audioContextRef.current.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    // Create a mix of noise types for office ambience
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      // Base white noise at low volume
      const white = Math.random() * 2 - 1;
      
      // Add some brown noise for background hum
      const brown = (lastOut + (0.02 * white)) / 1.02;
      lastOut = brown;
      
      // Occasional "click" sounds for keyboard typing simulation
      const keyboardClick = (i % 10000 < 50) ? (Math.random() * 0.3) : 0;
      
      // Mix the sounds
      output[i] = (white * 0.03) + (brown * 0.15) + keyboardClick;
    }
    
    const ambienceSource = audioContextRef.current.createBufferSource();
    ambienceSource.buffer = noiseBuffer;
    ambienceSource.loop = true;
    
    // Create a filter to shape the sound
    const filter = audioContextRef.current.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 0.5;
    
    ambienceSource.connect(filter);
    filter.connect(gainNodeRef.current);
    
    ambienceSource.start();
    sourceNodeRef.current = ambienceSource as unknown as OscillatorNode;
  };

  const stopSound = () => {
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop();
      } catch (e) {
        // Ignore errors from stopping already stopped sources
      }
      sourceNodeRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSound();
    } else {
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
      playSound();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNoiseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNoise(e.target.value);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    
    // Update gain if currently playing
    if (gainNodeRef.current && isPlaying) {
      gainNodeRef.current.gain.value = newVolume / 100;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    // Update gain if currently playing
    if (gainNodeRef.current && isPlaying) {
      gainNodeRef.current.gain.value = !isMuted ? 0 : volume / 100;
    }
  };

  const toggleFullScreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
    
    setIsFullScreen(!isFullScreen);
  };

  const getNoiseDescription = () => {
    const noise = noiseTypes.find(n => n.id === selectedNoise);
    return noise ? noise.description : '';
  };

  return (
    <div ref={containerRef} className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex justify-center space-x-4 mb-4">
          <select
            value={selectedNoise}
            onChange={handleNoiseChange}
            className="bg-[#f0f4f8] border border-[#d0d5dd] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
          >
            {noiseTypes.map(noise => (
              <option key={noise.id} value={noise.id}>{noise.name}</option>
            ))}
          </select>
          
          <button
            onClick={togglePlay}
            className={`rounded-full w-12 h-12 flex items-center justify-center ${
              isPlaying ? 'bg-[#3a86ff] text-white' : 'bg-[#f0f4f8] text-[#2b2d42]'
            }`}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button
            onClick={toggleMute}
            className="rounded-full w-12 h-12 flex items-center justify-center bg-[#f0f4f8] text-[#2b2d42]"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          
          <button
            onClick={toggleFullScreen}
            className="rounded-full w-12 h-12 flex items-center justify-center bg-[#f0f4f8] text-[#2b2d42]"
          >
            <Maximize size={24} />
          </button>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Volume2 size={18} className="text-[#555555]" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-64 h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-[#555555] w-8 text-right">{volume}%</span>
        </div>
        
        <p className="text-[#555555] italic">{getNoiseDescription()}</p>
      </div>
      
      <div className="bg-[#f7f9fc] rounded-lg p-4 text-center">
        {isPlaying ? (
          <div className="flex justify-center items-center space-x-2">
            <span className="text-[#3a86ff] font-semibold">Now playing:</span>
            <span className="text-[#555555]">{noiseTypes.find(n => n.id === selectedNoise)?.name}</span>
            <div className="flex space-x-1 ml-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-4 bg-[#3a86ff] rounded-full animate-pulse" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-[#555555]">Select a noise type and press play to begin</p>
        )}
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Tips for Best Results:</h3>
        <ul className="text-[#555555] space-y-2">
          <li>• For open offices, white noise at medium volume works best to mask conversations</li>
          <li>• Pink noise is ideal for deeper concentration and reading tasks</li>
          <li>• Brown noise helps block out low-frequency building noises like HVAC systems</li>
          <li>• Office ambience creates a productive atmosphere when working from home</li>
        </ul>
      </div>
    </div>
  );
}