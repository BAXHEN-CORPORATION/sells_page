//** External Imports */
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
//** Local Imports */

//** Typings */
export interface VideoProps {
  videoId: string;
}

export type PlayModes = "playing" | "stop" | "first";

//** Default Props */
const defaultProps: Partial<VideoProps> = {};

/**
 * Component for rendering custom youtube video player
 *
 * @component
 */
const Video: React.FC<VideoProps> = ({ videoId }) => {
  const videoRef = React.useRef<YouTubeEvent<any> | null>(null);

  const [play, setPlay] = React.useState<PlayModes>("first");

  const onReady: (event: YouTubeEvent<any>) => void = (e) => {
    e.target.playVideo();
    e.target.hideVideoInfo();

    videoRef.current = e;
  };
  const onEnd: (event: YouTubeEvent<any>) => void = (e) => {
    const target = videoRef.current!.target;

    target.seekTo(0);
    target.pauseVideo();
    setPlay("stop");
  };

  return (
    <Box
      height="388px"
      width="630px"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      sx={{ cursor: "pointer" }}
    >
      <Box
        onClick={() => {
          if (videoRef.current) {
            const target = videoRef.current.target;

            const isMuted = target.isMuted();

            if (isMuted) {
              target.unMute();
              target.seekTo(0);
              target.playVideo();

              setPlay("playing");
              return;
            }

            target.pauseVideo();
            setPlay("stop");
          }
        }}
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {play === "playing" ? null : play === "first" ? (
          <Stack
            height="200px"
            width="300px"
            sx={{
              bgcolor: ({ functions: { rgba }, palette: { secondary } }) =>
                rgba(secondary.main, 0.7),

              borderRadius: "10px",
              border: "solid 3px white",
              display: "flex",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                const target = videoRef.current.target;

                target.unMute();
                target.seekTo(0);
                target.playVideo();

                setPlay("playing");
              }
            }}
            justifyContent="center"
            alignItems="center"
            gap="1rem"
          >
            <Typography variant="h3">Seu vídeo já começou</Typography>
            <VolumeOffIcon sx={{ fontSize: "4rem" }} htmlColor="white" />
            <Typography variant="h3">Clique para ouvir</Typography>
          </Stack>
        ) : (
          <IconButton
            size="large"
            color="secondary"
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                const target = videoRef.current.target;

                target.playVideo();
                setPlay("playing");
              }
            }}
          >
            <PlayArrowIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
      <YouTube
        videoId={videoId}
        opts={{
          width: "700",
          height: "1000",
          playerVars: {
            disablekb: 1,
            fs: 0,
            mute: 1,
            controls: 0,
            wmode: "transparent",
          },
          hl: "pt",
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        }}
        onReady={onReady}
        onEnd={onEnd}
      />
    </Box>
  );
};

Video.defaultProps = defaultProps;

export default Video;
