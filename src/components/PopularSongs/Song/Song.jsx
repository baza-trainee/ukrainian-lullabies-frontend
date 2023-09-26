import { PlayButton } from './PlayButton/PlayButton';
import './Song.css';

export function Song({ backgroundUrl, songName, width = "200px", height = "226px", isPlaying, onClick }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    height: height,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div onClick={onClick} style={{ width: width }} className="song">
      <p className="songName">{songName}</p>
      <div style={backgroundImageStyle} className="songBackground">
        {isPlaying && <PlayButton />}
      </div>
    </div>
  );
}
