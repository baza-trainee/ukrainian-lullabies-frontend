import YouTube from "react-youtube";
import "./Song.css";

export function Song({
    backgroundUrl,
    songName,
    width,
    height,
    isPlaying,
    onClick,
    videoID,
    isCenterSlide, 
  }) {
    const backgroundImageStyle = {
      backgroundImage: `url(${backgroundUrl})`,
      height: height,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  
    const opts = {
      height: "226px",
      width: "200px",
      playerVars: {
        autoplay: 1,
      },
    };
  
    const activeOpts = {
      height: "304px",
      width: "264px",
      playerVars: {
        autoplay: 1,
      },
    };
  
    const songBackgroundStyle = {
      ...backgroundImageStyle,
      height: isCenterSlide ? "304px" : "230px", 
      width: isCenterSlide ? "264px" : "200px",
      backgroundImage: isPlaying ? "inherit" : backgroundImageStyle.backgroundImage,
      
    };
  
    return (
      <div
        style={{
          width: isCenterSlide ? "264px" : width, 
          height: isCenterSlide ? "352px" : "274px", 
          marginRight: isCenterSlide ? "30px" : "0px",
          marginTop:(isCenterSlide || isPlaying) ? "0px" : "78px",
        }}
        className="song"
      >
        <p className="songName">{songName}</p>
        <div
          style={songBackgroundStyle}
          onClick={onClick}
          className="songBackground"
        >
          {isPlaying && (
            <YouTube videoId={videoID} opts={isPlaying ? activeOpts : opts} />
          )}
        </div>
      </div>
    );
  }
