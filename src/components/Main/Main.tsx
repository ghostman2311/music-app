import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "../Keyboard";

const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};

export { Main };
