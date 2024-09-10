import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./components/CoverArt";
import SongTitle from "./components/SongTitle";
import PlayControls from "./components/PlayControls";
import VolumeControl from "./components/VolumeControl";
import PlayListItem from "./components/PlayListItem";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
      <PlayListItem />
      <CurrentlyPlaying />
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;
