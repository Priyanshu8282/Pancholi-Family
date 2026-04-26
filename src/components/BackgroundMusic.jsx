import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundMusic = ({ isOpen }) => {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const getMusicSrc = (path) => {
    if (path.includes('/event/vinayak-sthapana')) return '/music/vinayak-sthapana.mp3';
    if (path.includes('/event/bhajan-sandhya')) return '/music/bhajan-sandhya.mp3';
    if (path.includes('/event/mundan-sanskar')) return '/music/mundan-sanskar.mp3';
    if (path.includes('/event/sneh-bhoj')) return '/music/sneh-bhoj.mp3';
    return '/music/home-page.mp3';
  };

  const currentSrc = getMusicSrc(location.pathname);

  // Auto-play when splash screen is opened
  useEffect(() => {
    if (isOpen && !hasInteracted) {
      setIsPlaying(true);
      setHasInteracted(true);
    }
  }, [isOpen, hasInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.log("Autoplay prevented, waiting for interaction.");
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSrc]);

  const toggleSound = (e) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  // if (!isOpen) return null; // Removed to allow music on splash screen

  return (
    <div className="music-controls">
      <audio
        ref={audioRef}
        src={currentSrc}
        loop
        preload="auto"
      />
      
      <AnimatePresence>
        <motion.button
          key="music-toggle"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSound}
          className="music-btn music-btn-play"
          title={isPlaying ? "Turn Off Music" : "Turn On Music"}
        >
          {isPlaying ? (
            <Volume2 size={24} />
          ) : (
            <VolumeX size={24} />
          )}
          
          {isPlaying && (
            <motion.div 
              className="music-pulse"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default BackgroundMusic;
