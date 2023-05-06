import clsx from "clsx";
import styles from "./Key.module.css";
import { NoteType } from "../../domain/note";
import React from "react";

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
};

const Key: React.FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest } = props;

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};

export { Key };
