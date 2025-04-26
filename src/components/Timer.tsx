'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

interface TimerProps {
  duration: number; // Duration in minutes
}

const Timer: React.FC<TimerProps> = ({ duration }) => {
  const TIMER_DURATION = duration * 60;
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playSoundOnEnd, setPlaySoundOnEnd] = useState(true);
  const [playMusic, setPlayMusic] = useState(true);
  const [notifyOnEnd, setNotifyOnEnd] = useState(true);
  const [showNotificationStatus, setShowNotificationStatus] = useState(false);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const alarmSoundRef = useRef<HTMLAudioElement | null>(null);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio elements
    if (typeof window !== 'undefined') {
      alarmSoundRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      backgroundMusicRef.current = new Audio(
        'https://audio-variant-previews.envatousercontent.com/M4A/38/2c/7e/14/97/v1_E11/E111B876.m4a'
      );
      backgroundMusicRef.current.loop = true;
    }

    // Check notification permission
    checkNotificationPermission();

    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current.currentTime = 0;
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
      const notification = new Notification(`${duration} Minute Timer`, {
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
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
    setTimeLeft(TIMER_DURATION);

    if (playMusic && backgroundMusicRef.current) {
      backgroundMusicRef.current.pause();
      backgroundMusicRef.current.currentTime = 0;
    }
  };

  const progressPercentage = (timeLeft / TIMER_DURATION) * 100;

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

  return (
    <>
      <Head>
        <title>{`${formatTime(timeLeft)} - ${duration} Minute Timer | TimerCountdown`}</title>
      </Head>

      <div className="bg-white rounded-xl shadow-md p-8 my-8 text-center">
        <h1 className="text-3xl font-bold mb-5">{duration} Minute Timer</h1>

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
        <div className="fixed inset-0 bg-[#f7f9fc] flex flex-col items-center justify-center z-50">
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
      )}
    </>
  );
};

export default Timer;