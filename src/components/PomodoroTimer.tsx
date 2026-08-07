'use client';

import React, { useState, useEffect, useRef } from 'react';

type TimerMode = 'work' | 'shortBreak' | 'longBreak';

const PomodoroTimer: React.FC = () => {
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [customWork, setCustomWork] = useState(25);
  const [customShortBreak, setCustomShortBreak] = useState(5);
  const [customLongBreak, setCustomLongBreak] = useState(15);
  const [showSettings, setShowSettings] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimerEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleTimerEnd = () => {
    setIsRunning(false);
    playNotificationSound();
    
    if (mode === 'work') {
      const newCycles = completedCycles + 1;
      setCompletedCycles(newCycles);
      if (newCycles % 4 === 0) {
        setMode('longBreak');
        setTimeLeft(customLongBreak * 60);
      } else {
        setMode('shortBreak');
        setTimeLeft(customShortBreak * 60);
      }
    } else {
      setMode('work');
      setTimeLeft(customWork * 60);
    }
  };

  const playNotificationSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch {
      // Audio not supported
    }
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (mode === 'work') {
      setTimeLeft(customWork * 60);
    } else if (mode === 'shortBreak') {
      setTimeLeft(customShortBreak * 60);
    } else {
      setTimeLeft(customLongBreak * 60);
    }
  };

  const switchMode = (newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
    if (newMode === 'work') {
      setTimeLeft(customWork * 60);
    } else if (newMode === 'shortBreak') {
      setTimeLeft(customShortBreak * 60);
    } else {
      setTimeLeft(customLongBreak * 60);
    }
  };

  const applySettings = () => {
    if (!isRunning) {
      switchMode('work');
    }
    setShowSettings(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const modeColors = {
    work: '#ff6b6b',
    shortBreak: '#06d6a0',
    longBreak: '#118ab2'
  };

  const modeLabels = {
    work: 'Focus Time',
    shortBreak: 'Short Break',
    longBreak: 'Long Break'
  };

  const totalTime = mode === 'work' 
    ? customWork * 60 
    : mode === 'shortBreak' 
    ? customShortBreak * 60 
    : customLongBreak * 60;
  
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="max-w-md mx-auto">
      {/* Mode Tabs */}
      <div className="flex gap-2 mb-6">
        {(['work', 'shortBreak', 'longBreak'] as TimerMode[]).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all ${
              mode === m 
                ? 'text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            style={mode === m ? { backgroundColor: modeColors[m] } : {}}
          >
            {modeLabels[m]}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="text-center mb-6">
        <div className="text-7xl md:text-8xl font-bold font-mono mb-2" style={{ color: modeColors[mode] }}>
          {formatTime(timeLeft)}
        </div>
        <div className="text-sm text-[#777777]">
          Cycles completed: {completedCycles} / 4
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-3 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: modeColors[mode] }}
        />
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={toggleTimer}
          className="px-6 py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
          style={{ backgroundColor: modeColors[mode] }}
        >
          {isRunning ? '⏸ Pause' : '▶ Start'}
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-3 rounded-lg font-bold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
        >
          🔄 Reset
        </button>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="px-4 py-3 rounded-lg font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
        >
          ⚙️
        </button>
      </div>

      {/* Cycle Indicator */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i <= (completedCycles % 4 || (completedCycles === 0 ? 0 : completedCycles))
                ? 'bg-[#ff6b6b]'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold mb-3">⚙️ Customize Intervals</h3>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-gray-600 block mb-1">Work (min)</label>
              <input
                type="number"
                min="1"
                max="120"
                value={customWork}
                onChange={(e) => setCustomWork(parseInt(e.target.value) || 25)}
                className="w-full px-3 py-2 border rounded-lg text-center"
                disabled={isRunning}
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 block mb-1">Short Break</label>
              <input
                type="number"
                min="1"
                max="30"
                value={customShortBreak}
                onChange={(e) => setCustomShortBreak(parseInt(e.target.value) || 5)}
                className="w-full px-3 py-2 border rounded-lg text-center"
                disabled={isRunning}
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 block mb-1">Long Break</label>
              <input
                type="number"
                min="1"
                max="60"
                value={customLongBreak}
                onChange={(e) => setCustomLongBreak(parseInt(e.target.value) || 15)}
                className="w-full px-3 py-2 border rounded-lg text-center"
                disabled={isRunning}
              />
            </div>
          </div>
          <button
            onClick={applySettings}
            className="w-full mt-3 py-2 bg-[#3a86ff] text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
          >
            Apply Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
