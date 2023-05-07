import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";
import { KeyboardWithInstrument } from "../Keyboard";

const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};

export { Main };
