'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';


interface TimerProps {
  days?: number;       // Duration in days
  hours?: number;      // Duration in hours
  minutes?: number;    // Duration in minutes
  seconds?: number;    // Duration in seconds
  duration?: number;   // Legacy parameter (in minutes) for backward compatibility
  start?:boolean;
}

const Timer: React.FC<TimerProps> = ({ 
  days = 0, 
  hours = 0, 
  minutes = 0, 
  seconds = 0, 
  duration = 0 ,
  start = false
}) => {
  // Calculate total seconds from all time units
  // If legacy duration is provided, use it for minutes
  const totalSeconds = 
    (days * 24 * 60 * 60) + 
    (hours * 60 * 60) + 
    ((minutes || duration) * 60) + 
    seconds;
  
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playSoundOnEnd, setPlaySoundOnEnd] = useState(!start);
  const [playMusic, setPlayMusic] = useState(!start);
  const [notifyOnEnd, setNotifyOnEnd] = useState(!start);
  const [showNotificationStatus, setShowNotificationStatus] = useState(false);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const alarmSoundRef = useRef<HTMLAudioElement | null>(null);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    // Initialize audio elements
    if (typeof window !== 'undefined') {
      alarmSoundRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      backgroundMusicRef.current = new Audio(
        'https://audio-variant-previews.envatousercontent.com/M4A/38/2c/7e/14/97/v1_E11/E111B876.m4a'
      );
      backgroundMusicRef.current.loop = true;
      backgroundMusicRef.current.muted = true;
    }

    const checkOrientation = () => {
      setIsLandscape(window.innerWidth < window.innerHeight);
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);

    // Check notification permission
    checkNotificationPermission();

    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current.currentTime = 0;
      }
      window.removeEventListener('resize', checkOrientation);
      if(start){
        toggleTimer();
      }
    };
  }, []);

  const checkNotificationPermission = () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        setShowNotificationStatus(false);
      } else if (Notification.permission === 'denied') {
        setNotifyOnEnd(false);
        setShowNotificationStatus(true);
      } else {
        setShowNotificationStatus(true);
      }
    } else {
      setNotifyOnEnd(false);
    }
  };

  const requestNotificationPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setShowNotificationStatus(false);
      } else {
        setNotifyOnEnd(false);
      }
    }
  };

  const sendNotification = () => {
    if (
      typeof window !== 'undefined' &&
      'Notification' in window &&
      Notification.permission === 'granted' &&
      notifyOnEnd
    ) {
      // Create a formatted time string for notification
      let timerDescription = "";
      if (days > 0) timerDescription += `${days} day${days > 1 ? 's' : ''} `;
      if (hours > 0) timerDescription += `${hours} hour${hours > 1 ? 's' : ''} `;
      if (minutes > 0 || duration > 0) timerDescription += `${minutes || duration} minute${(minutes > 1 || duration > 1) ? 's' : ''} `;
      if (seconds > 0) timerDescription += `${seconds} second${seconds > 1 ? 's' : ''} `;
      
      // If using legacy duration parameter
      if (timerDescription.trim() === "" && duration > 0) {
        timerDescription = `${duration} Minute`;
      }
      
      // Fallback for empty description
      if (timerDescription.trim() === "") {
        timerDescription = "Custom";
      }
      
      const notification = new Notification(`${timerDescription}Timer`, {
        body: "Time's up!",
        icon: "/favicon.ico"
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      setTimeout(() => notification.close(), 5000);
    }
  };

  // Format time to display days, hours, minutes, seconds
  const formatTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const mins = Math.floor((totalSeconds % (60 * 60)) / 60);
    const secs = totalSeconds % 60;
    
    // Only show days and hours if they are non-zero or were specified in props
    const showDays = days > 0;
    const showHours = hours > 0 || showDays;
    
    let formattedTime = '';
    
    if (showDays) {
      formattedTime += `${days.toString()}:`;
    }
    
    if (showHours) {
      formattedTime += `${hours.toString().padStart(2, '0')}:`;
    }
    
    formattedTime += `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    return formattedTime;
  };

  // Create a descriptive timer title
  const getTimerTitle = () => {
    const parts = [];
    
    if (days > 0) parts.push(`${days} Day${days !== 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} Hour${hours !== 1 ? 's' : ''}`);
    if (minutes > 0) parts.push(`${minutes} Minute${minutes !== 1 ? 's' : ''}`);
    if (seconds > 0) parts.push(`${seconds} Second${seconds !== 1 ? 's' : ''}`);
    
    // If using legacy duration parameter
    if (parts.length === 0 && duration > 0) {
      parts.push(`${duration} Minute${duration !== 1 ? 's' : ''}`);
    }
    
    // Fallback for empty description
    if (parts.length === 0) {
      return "Custom Timer";
    }
    
    return parts.join(', ') + " Timer";
  };

  const updateButtonState = () => {
    return isRunning ? 'Pause' : 'Start';
  };

  const toggleTimer = () => {
    if (isRunning) {
      // Pause timer
      if (timerIdRef.current) clearInterval(timerIdRef.current);
      if (playMusic && backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
      }
      setIsRunning(false);
    } else {
      // Start timer
      if (notifyOnEnd) {
        checkNotificationPermission();
      }

      setIsRunning(true);

      if (playMusic && backgroundMusicRef.current) {
        
        backgroundMusicRef.current.play().catch(error => {
          console.error('Error playing background music:', error);
        });
      }

      timerIdRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            if (timerIdRef.current) clearInterval(timerIdRef.current);
            setIsRunning(false);

            if (playMusic && backgroundMusicRef.current) {
              backgroundMusicRef.current.pause();
              backgroundMusicRef.current.currentTime = 0;
            }

            if (playSoundOnEnd && alarmSoundRef.current) {
              alarmSoundRef.current.play().catch(error => {
                console.error('Error playing alarm sound:', error);
              });
            }

            if (notifyOnEnd) {
              sendNotification();
            }

            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    if (timerIdRef.current) clearInterval(timerIdRef.current);
    setIsRunning(false);
    setTimeLeft(totalSeconds);

    if (playMusic && backgroundMusicRef.current) {
      backgroundMusicRef.current.pause();
      backgroundMusicRef.current.currentTime = 0;
    }
  };

  const progressPercentage = (timeLeft / totalSeconds) * 100;

  const handleMusicToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayMusic(e.target.checked);
    if (isRunning) {
      if (e.target.checked) {
        backgroundMusicRef.current?.play().catch(error => {
          console.error('Error playing background music:', error);
        });
      } else {
        if (backgroundMusicRef.current) {
          backgroundMusicRef.current.pause();
          backgroundMusicRef.current.currentTime = 0;
        }
      }
    }
  };

  // Get the timer title for display
  const timerTitle = getTimerTitle();

  return (
    <>
      <Head>
        <title>{`${formatTime(timeLeft)} - ${timerTitle} | TimerCountdown`}</title>
      </Head>

      <div className="bg-white rounded-xl shadow-md p-8 my-8 text-center">
        <h1 className="text-3xl font-bold mb-5">{timerTitle}</h1>

        <div className="h-2 bg-[#e5e5e5] rounded-full mb-8">
          <div
            className="h-full bg-[#3a86ff] rounded-full transition-all duration-1000"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="text-7xl font-bold text-[#3a86ff] my-8 font-mono">
          {formatTime(timeLeft)}
        </div>

        <div className="flex items-center justify-center mb-3">
          <input
            type="checkbox"
            id="soundToggle"
            className="mr-2"
            checked={playSoundOnEnd}
            onChange={(e) => setPlaySoundOnEnd(e.target.checked)}
          />
          <label htmlFor="soundToggle" className="font-medium">
            Play sound when timer ends
          </label>
        </div>

        <div className="flex items-center justify-center mb-3">
          <input
            type="checkbox"
            id="musicToggle"
            className="mr-2"
            checked={playMusic}
            onChange={handleMusicToggle}
          />
          <label htmlFor="musicToggle" className="font-medium">
            Play music during countdown
          </label>
        </div>

        <div className="flex items-center justify-center mb-3">
          <Link href="/white-noise/office" className="text-[#3a86ff] hover:underline flex items-center" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
            Open white noise player for office
          </Link>
        </div>

        <div className="flex items-center justify-center mb-5">
          <input
            type="checkbox"
            id="notificationToggle"
            className="mr-2"
            checked={notifyOnEnd}
            onChange={(e) => {
              setNotifyOnEnd(e.target.checked);
              if (e.target.checked) {
                checkNotificationPermission();
              } else {
                setShowNotificationStatus(false);
              }
            }}
          />
          <label htmlFor="notificationToggle" className="font-medium">
            Show notification when timer ends
          </label>
        </div>

        {showNotificationStatus && (
          <div className="text-sm text-orange-500 mb-5">
            Notification permission is required to receive alerts when the timer ends
            <button
              onClick={requestNotificationPermission}
              className="ml-2 bg-orange-500 text-white py-1 px-3 rounded-full text-sm"
            >
              Allow Notifications
            </button>
          </div>
        )}

        <div className="flex justify-center gap-4 mb-8 md:flex-row flex-col">
          <button
            onClick={toggleTimer}
            className={`${
              isRunning ? 'bg-[#e5e5e5] text-[#555555]' : 'bg-[#3a86ff] text-white'
            } font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300`}
          >
            {updateButtonState()}
          </button>
          <button
            onClick={resetTimer}
            className="bg-[#e5e5e5] text-[#555555] font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
          >
            Reset
          </button>
          <button
            onClick={() => setIsFullscreen(true)}
            className="bg-[#3a86ff] text-white font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
          >
            Full Screen
          </button>
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-[#f7f9fc] flex items-center justify-center z-50">
          <div 
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              isLandscape ? 'transform rotate-90 w-screen h-screen' : ''
            }`}
            style={isLandscape ? { width: '100vh', height: '100vw' } : {}}
          >
            <div className="text-9xl font-bold text-[#3a86ff] font-mono">
              {formatTime(timeLeft)}
            </div>
            
            <div className="w-4/5 max-w-3xl h-4 bg-[#e5e5e5] rounded-full mt-10">
              <div
                className="h-full bg-[#3a86ff] rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            
            <div className="flex justify-center gap-6 mt-10">
              <button
                onClick={toggleTimer}
                className={`${
                  isRunning ? 'bg-[#e5e5e5] text-[#555555]' : 'bg-[#3a86ff] text-white'
                } font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300`}
              >
                {updateButtonState()}
              </button>
              <button
                onClick={resetTimer}
                className="bg-[#e5e5e5] text-[#555555] font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
              >
                Reset
              </button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="bg-[#e5e5e5] text-[#555555] font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
              >
                Exit Full Screen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;