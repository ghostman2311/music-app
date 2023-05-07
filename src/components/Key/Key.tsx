import clsx from "clsx";
import styles from "./Key.module.css";
import { NoteType } from "../../domain/note";
import React from "react";

type PressCallback = () => void;

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;

  onUp: PressCallback;
  onDown: PressCallback;
};

const Key: React.FunctionComponent<KeyProps> = (props) => {
  const { type, label, onDown, onUp, ...rest } = props;

  return (
    <button
      className={clsx(styles.key, styles[type])}
      onMouseDown={onDown}
      onMouseUp={onUp}
      type="button"
      {...rest}
    >
      {label}
    </button>
  );
};

export { Key };
