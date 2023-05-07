import { useAudioContext } from "../AudioContextProvider";
import { useSoundfont } from "../../adapters/Soundfont";
import { Keyboard } from "./Keyboard";
import { useMount } from "../../utils/useMount/useMount";

const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });
  useMount(() => load());
  return <Keyboard loading={loading} play={play} stop={stop} />;
};

export { KeyboardWithInstrument };
