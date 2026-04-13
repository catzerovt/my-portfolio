import { useRef } from "react";

export function useInputRef() {
  const ref = useRef(null);

  const getValue = () => ref.current?.value || "";
  const clear = () => {
    if (ref.current) ref.current.value = "";
  };

  return {
    ref,
    getValue,
    clear,
  };
}

