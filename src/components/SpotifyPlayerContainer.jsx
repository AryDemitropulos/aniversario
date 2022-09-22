import SpotifyPlayer from "react-spotify-player";

export const SpotifyPlayerContainer = () => {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: 300,
    height: 80,
  };
  const view = "coverart"; //  list or 'coverart'
  const theme = "black"; // black or 'white'
  return (
    <>
      <div style={{ opacity: 0, position:"absolute", top:"-50%", left:"-50%"  }}>
        <iframe
          width={1111 * 3}
          height={625 * 3}
          src="https://www.youtube.com/embed/-BjZmE2gtdo?list=RD-BjZmE2gtdo"
          title="Taylor Swift - Lover"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};
