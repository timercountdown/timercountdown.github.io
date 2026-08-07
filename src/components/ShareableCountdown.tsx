'use client';

import React, { useState, useEffect, useCallback } from 'react';

const ShareableCountdown: React.FC = () => {
  const [eventName, setEventName] = useState('My Special Event');
  const [targetDate, setTargetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });
  const [targetTime, setTargetTime] = useState('00:00');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [isEventPast, setIsEventPast] = useState(false);

  const updateCountdown = useCallback(() => {
    const target = new Date(`${targetDate}T${targetTime}`).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      setIsEventPast(true);
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    setIsEventPast(false);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  }, [targetDate, targetTime]);

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [updateCountdown]);

  const generateShareUrl = () => {
    const baseUrl = window.location.origin;
    const params = new URLSearchParams();
    params.set('event', encodeURIComponent(eventName));
    params.set('date', targetDate);
    params.set('time', targetTime);
    return `${baseUrl}/shareable-countdown?${params.toString()}`;
  };

  const handleGenerate = () => {
    const url = generateShareUrl();
    setShareUrl(url);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  const countUpYears = Math.floor((Date.now() - new Date(`${targetDate}T${targetTime}`).getTime()) / (1000 * 60 * 60 * 24 * 365));

  return (
    <div className="max-w-lg mx-auto">
      {/* Event Configurator */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <h3 className="font-bold mb-3">⚙️ Configure Your Countdown</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3a86ff] focus:border-transparent"
              placeholder="e.g., Sarah's Birthday"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Date</label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3a86ff] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Time</label>
              <input
                type="time"
                value={targetTime}
                onChange={(e) => setTargetTime(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#3a86ff] focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={handleGenerate}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            🔗 Generate Share Link
          </button>
        </div>
      </div>

      {/* Countdown Display */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-[#3a86ff] mb-4">{eventName}</h2>
        
        {isEventPast ? (
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-4xl mb-2">🎉</div>
            <div className="text-2xl font-bold text-green-700 mb-1">The event has passed!</div>
            {countUpYears > 0 && (
              <div className="text-lg text-green-600">
                {countUpYears} year{countUpYears !== 1 ? 's' : ''} ago
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-center gap-2 md:gap-4 mb-2">
              {[
                { value: countdown.days, label: 'Days' },
                { value: countdown.hours, label: 'Hours' },
                { value: countdown.minutes, label: 'Minutes' },
                { value: countdown.seconds, label: 'Seconds' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-lg shadow p-3 md:p-4 min-w-[60px] border border-gray-100">
                  <div className="text-2xl md:text-4xl font-bold font-mono text-[#3a86ff]">
                    {formatNumber(item.value)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Share Link Display */}
      {shareUrl && (
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h3 className="font-bold mb-2 text-center">📋 Share This Link</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 border rounded-lg bg-white text-sm text-gray-600"
            />
            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 rounded-lg font-medium text-white transition-all ${
                copied ? 'bg-green-500' : 'bg-[#3a86ff] hover:bg-blue-700'
              }`}
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`${eventName} countdown!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-all"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all"
            >
              Share on Facebook
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${eventName} countdown! ${shareUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-all"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Preview Note */}
      <div className="mt-6 text-center text-sm text-[#777777]">
        <p>💡 Anyone who opens this link will see the same live countdown automatically.</p>
      </div>
    </div>
  );
};

export default ShareableCountdown;
