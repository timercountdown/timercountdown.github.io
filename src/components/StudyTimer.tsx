'use client';

import React, { useState, useEffect, useRef } from 'react';

type TimerMode = 'focus' | 'break';

const StudyTimer: React.FC = () => {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
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
    try {
      const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.value = 600;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch {
      // Audio not supported
    }
    
    if (mode === 'focus') {
      setCompletedSessions((c) => c + 1);
      setMode('break');
      setTimeLeft(breakMinutes * 60);
    } else {
      setMode('focus');
      setTimeLeft(focusMinutes * 60);
    }
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setMode('focus');
    setTimeLeft(focusMinutes * 60);
  };

  const switchMode = (newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(newMode === 'focus' ? focusMinutes * 60 : breakMinutes * 60);
  };

  const applySettings = () => {
    if (!isRunning) {
      setMode('focus');
      setTimeLeft(focusMinutes * 60);
    }
    setShowSettings(false);
  };

  const toggleMusic = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalTime = mode === 'focus' ? focusMinutes * 60 : breakMinutes * 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const modeColor = mode === 'focus' ? '#06d6a0' : '#118ab2';

  return (
    <div className="max-w-md mx-auto">
      {/* Mode Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => switchMode('focus')}
          className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all ${
            mode === 'focus' ? 'text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          style={mode === 'focus' ? { backgroundColor: '#06d6a0' } : {}}
        >
          📚 Study Session
        </button>
        <button
          onClick={() => switchMode('break')}
          className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all ${
            mode === 'break' ? 'text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          style={mode === 'break' ? { backgroundColor: '#118ab2' } : {}}
        >
          ☕ Break Time
        </button>
      </div>

      {/* Timer Display */}
      <div className="text-center mb-6">
        <div className="text-sm text-[#777777] mb-2 uppercase tracking-wide">
          {mode === 'focus' ? '📖 Focus Mode' : '☕ Break Mode'}
        </div>
        <div className="text-7xl md:text-8xl font-bold font-mono mb-2" style={{ color: modeColor }}>
          {formatTime(timeLeft)}
        </div>
        <div className="text-sm text-[#777777]">
          Study sessions completed today: {completedSessions}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-3 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: modeColor }}
        />
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={toggleTimer}
          className="px-6 py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
          style={{ backgroundColor: modeColor }}
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
          onClick={toggleMusic}
          className={`px-4 py-3 rounded-lg font-bold transition-all ${
            isPlayingMusic ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          title={isPlayingMusic ? 'Stop lo-fi beats' : 'Play lo-fi beats'}
        >
          {isPlayingMusic ? '🔊' : '🔈'}
        </button>
      </div>

      {/* Study Session Tracker */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i <= completedSessions ? 'bg-[#06d6a0]' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Background Music Notice */}
      {isPlayingMusic && (
        <div className="bg-purple-50 rounded-lg p-3 text-center text-sm text-purple-700 mb-4">
          🎵 Lo-fi beats playing... Stay focused!
        </div>
      )}

      {/* Settings */}
      <div className="text-center">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="text-sm text-[#777777] hover:text-[#3a86ff] transition-colors"
        >
          ⚙️ Customize durations
        </button>
      </div>

      {showSettings && (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-3">
          <h3 className="font-bold mb-3">⚙️ Study Timer Settings</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-600 block mb-1">Study (min)</label>
              <input
                type="number"
                min="5"
                max="120"
                value={focusMinutes}
                onChange={(e) => setFocusMinutes(parseInt(e.target.value) || 25)}
                className="w-full px-3 py-2 border rounded-lg text-center"
                disabled={isRunning}
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 block mb-1">Break (min)</label>
              <input
                type="number"
                min="1"
                max="30"
                value={breakMinutes}
                onChange={(e) => setBreakMinutes(parseInt(e.target.value) || 5)}
                className="w-full px-3 py-2 border rounded-lg text-center"
                disabled={isRunning}
              />
            </div>
          </div>
          <button
            onClick={applySettings}
            className="w-full mt-3 py-2 bg-[#06d6a0] text-white rounded-lg font-medium hover:bg-green-600 transition-all"
          >
            Apply & Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default StudyTimer;
