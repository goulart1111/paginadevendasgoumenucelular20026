import { useEffect, useMemo, useRef, useState } from "react";
import { Maximize, Minimize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function VideoPlayer({ src, poster, title, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const progress = useMemo(() => {
    if (!duration) return 0;
    return Math.min(1, Math.max(0, currentTime / duration));
  }, [currentTime, duration]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => setDuration(video.duration || 0);
    const onTimeUpdate = () => setCurrentTime(video.currentTime || 0);
    const onPlay = () => {
      setIsPlaying(true);
      setControlsVisible(false);
    };
    const onPause = () => {
      setIsPlaying(false);
      setControlsVisible(true);
    };
    const onCanPlay = () => setIsReady(true);
    const onError = () => setHasError(true);

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
  }, [volume]);

  useEffect(() => {
    const onFullscreenChange = () => {
      const root = rootRef.current;
      if (!root) return;
      setIsFullscreen(document.fullscreenElement === root);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  const onVideoTap = async () => {
    if (isPlaying) {
      setControlsVisible(visible => !visible);
      return;
    }
    await togglePlay();
  };

  const toggleFullscreen = async () => {
    const root = rootRef.current;
    if (!root) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await root.requestFullscreen();
    }
  };

  const onSeek = (value: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    video.currentTime = duration * value;
  };

  return (
    <div
      ref={rootRef}
      className={cn(
        "group relative overflow-hidden rounded-[32px] border border-white/14 bg-white/3 shadow-[0_30px_90px_rgba(0,0,0,0.65)]",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-70 [background:radial-gradient(closest-side_at_30%_0%,rgba(34,211,238,0.18),transparent_60%)]" />
      <div className="absolute inset-0 opacity-60 [background:linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%,rgba(0,0,0,0.18))]" />

      <div className="relative aspect-video">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          preload="metadata"
          playsInline
          poster={poster}
          aria-label={title ?? "Vídeo"}
        >
          <source src={src} />
        </video>

        <button
          type="button"
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          className={cn(
            "absolute inset-0 z-10 grid place-items-center transition",
            isPlaying && !controlsVisible ? "opacity-0" : "opacity-100",
          )}
          onClick={onVideoTap}
        >
          <span
            className={cn(
              "inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15",
              isPlaying && !controlsVisible ? "pointer-events-none" : "",
            )}
          >
            {isPlaying ? <Pause className="h-7 w-7 text-white" /> : <Play className="h-7 w-7 text-white" />}
          </span>
        </button>

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-20 px-4 pb-4 pt-3 transition",
            isPlaying && !controlsVisible ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          <div className="glass rounded-3xl px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/12 transition hover:bg-white/10"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                >
                  {isPlaying ? <Pause className="h-4 w-4 text-white/85" /> : <Play className="h-4 w-4 text-white/85" />}
                </button>
                <div className="hidden items-center gap-2 sm:flex">
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/12 transition hover:bg-white/10"
                    onClick={() => setMuted(v => !v)}
                    aria-label={muted ? "Ativar som" : "Mutar"}
                  >
                    {muted || volume === 0 ? (
                      <VolumeX className="h-4 w-4 text-white/80" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-white/80" />
                    )}
                  </button>
                  <input
                    aria-label="Volume"
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={muted ? 0 : volume}
                    onChange={e => {
                      const next = Number(e.target.value);
                      setMuted(next === 0);
                      setVolume(next);
                    }}
                    className="h-2 w-24 accent-cyan-300"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden text-xs text-white/55 sm:block">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/12 transition hover:bg-white/10"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
                >
                  {isFullscreen ? (
                    <Minimize className="h-4 w-4 text-white/80" />
                  ) : (
                    <Maximize className="h-4 w-4 text-white/80" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-3">
              <input
                aria-label="Progresso"
                type="range"
                min={0}
                max={1}
                step={0.001}
                value={progress}
                onChange={e => onSeek(Number(e.target.value))}
                className="h-2 w-full accent-cyan-300"
              />
            </div>
          </div>
        </div>

        {!isReady && !hasError ? (
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="rounded-2xl bg-white/6 px-4 py-2 text-xs text-white/60 ring-1 ring-white/12">
              carregando vídeo…
            </div>
          </div>
        ) : null}

        {hasError ? (
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
            <div className="max-w-sm rounded-3xl border border-white/14 bg-zinc-950/70 px-5 py-4 text-sm text-white/70 backdrop-blur">
              Não foi possível carregar o vídeo. Confere se o arquivo existe em <span className="text-white/90">public</span>{" "}
              e se o link está correto.
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

