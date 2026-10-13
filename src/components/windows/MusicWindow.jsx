import Window from '../Window';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music as MusicIcon, Disc } from 'lucide-react';
import { useState, useRef } from 'react';

export default function MusicWindow({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Soundhelix or Pixabay free lofi stream
  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
      setIsMuted(vol === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const nextMute = !isMuted;
      setIsMuted(nextMute);
      audioRef.current.muted = nextMute;
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <Window title="Музыка" isOpen={isOpen} onClose={onClose} width="w-full max-w-2xl">
      <div className="space-y-6">
        {/* Hidden Audio Tag */}
        <audio 
          ref={audioRef} 
          src={audioSrc} 
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Album Artwork & Track Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-purple-500/10 p-4 sm:p-6 rounded-2xl border border-rose-100/80">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-xl group shrink-0">
            <img 
              src="./wallpaper.png" 
              alt="Album Cover" 
              className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`} 
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Disc className={`w-10 h-10 sm:w-12 sm:h-12 text-white/80 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
              <MusicIcon className="w-3 h-3" />
              <span>Lo-Fi Chill Stream</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">Kupets Coding Beats</h2>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Lofi Study & Focus Soundtracks</p>

            {/* Equalizer Bar Animation when Playing */}
            <div className="flex items-end justify-center sm:justify-start gap-1 h-4 sm:h-5 pt-1">
              {[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.3].map((h, i) => (
                <span 
                  key={i} 
                  className={`w-1 bg-rose-500 rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-1 opacity-40'}`} 
                  style={{ 
                    height: isPlaying ? `${Math.max(20, h * 100)}%` : '4px',
                    animationDelay: `${i * 150}ms`
                  }} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar & Counter */}
        <div className="space-y-1.5 px-1 sm:px-2">
          <input 
            type="range" 
            min={0} 
            max={duration || 100} 
            value={currentTime} 
            onChange={handleSeek}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
          <div className="flex justify-between text-[10px] sm:text-[11px] font-semibold text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-between pt-2 px-1 sm:px-4 border-t border-gray-200/80">
          {/* Volume Control */}
          <div className="flex items-center gap-1.5 sm:gap-2 w-28 sm:w-36">
            <button onClick={toggleMute} className="text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input 
              type="range" 
              min={0} 
              max={1} 
              step={0.01} 
              value={isMuted ? 0 : volume} 
              onChange={handleVolume}
              className="w-16 sm:w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-700"
            />
          </div>

          {/* Main Playback Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
              <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={togglePlay}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-white" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />}
            </button>
            <button className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
              <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Spacer */}
          <div className="w-28 sm:w-36 hidden sm:block text-right text-xs font-semibold text-gray-400">
            {isPlaying ? 'Воспроизведение...' : 'Пауза'}
          </div>
        </div>
      </div>
    </Window>
  );
}
