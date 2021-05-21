import React from "react";
import styles from "./styles.module.css";

function YoutubeEmbedVideo({ id }) {
  const [videoOpened, setVideoOpened] = React.useState(false);

  if (!videoOpened) {
    return (
      <div class={styles.videoContainer}>
        <div class={styles.imgContainer}>
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            class=""
          />
          <div class={styles.playButton} onClick={() => setVideoOpened(true)} />
        </div>
      </div>
    );
  }

  return (
    <div class={styles.youtubeVideoContainer}>
      <iframe
        class={styles.youtubeVideo}
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeEmbedVideo;
