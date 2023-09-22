import "./SelectionsPlayer.css";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { SelectionPrevIconDark } from "../../icons/SelectionsIcons/SelectionPrevIcon";
import { SelectionNextIconDark } from "../../icons/SelectionsIcons/SelectionNextIcon";
import { FiShare2, FiShuffle, FiRefreshCw } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp } from "react-icons/hi";

export const SelectionsPlayer = ({ isPlaying, setIsPlaying }) => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const playStopToggle = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="selections-player">
      <div
        className={classNames("selections-player-navigation-wrapper", {
          "selections-player-navigation-wrapper-light": isLightTheme,
        })}
      >
        <FiShare2 className="selections-player-share-button" />
        <div className="selections-player-primary-buttons-group">
          <FiShuffle className="selections-player-shuffle-button" />
          <button
            className={classNames("selections-player-previous-button", {
              "selections-player-previous-button-light": isLightTheme,
            })}
          >
            <BsFillSkipStartFill />
          </button>
          <button
            className={classNames("selections-player-play-pause-button", {
              "selections-player-play-pause-button-light": isLightTheme,
            })}
            onClick={playStopToggle}
          >
            {!isPlaying ? <BsPlayFill /> : <BsPauseFill style={{ fill: "var(--red-700)" }} />}
          </button>
          <button
            className={classNames("selections-player-next-button", {
              "selections-player-next-button-light": isLightTheme,
            })}
          >
            <BsFillSkipEndFill />
          </button>
          <FiRefreshCw className="selections-player-refresh-button" />
        </div>
        <div className="selections-player-volume-wrapper">
          <HiVolumeUp className="selections-player-volume-button" />
          <input type="range" id="selectionsVolumeInputId" />
        </div>
      </div>
    </div>
  );
};
