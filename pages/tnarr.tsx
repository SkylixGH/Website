import { useEffect, useRef } from "react";

export default function TNARR() {
    const tnarrRef = useRef<HTMLVideoElement>(null);

    function play() {
        if (tnarrRef.current) {
            tnarrRef.current.play();
        }
    }

    function playIfNotPlaying() {
        if (tnarrRef.current) {
            if (tnarrRef.current.paused) {
                tnarrRef.current.play();

                // tnarrRef.current.muted = false;
            }
        }
    }

    if (typeof document !== "undefined") {
        document.addEventListener("readystatechange", playIfNotPlaying);
    }

    useEffect(() => {
        return () => {
            document.removeEventListener("readystatechange", playIfNotPlaying);
        };
    }, []);

    playIfNotPlaying()

    return (
        <div>
            <button onClick={() => playIfNotPlaying()}>Play</button>
            {typeof window !== "undefined" && (window.location.href = "/Tnarr.mp4")}
        </div>
    );
}
