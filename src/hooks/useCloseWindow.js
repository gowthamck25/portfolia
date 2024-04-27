import { useEffect, useRef } from "react";

export function useCloseWindow(setIsOpen) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (
          ref.current &&
          ref.current.contains(e.target) &&
          e.target.classList.contains("sliding-li")
        ) {
          setIsOpen(false);
        }
      }

      document.addEventListener("click", handleClick);
      () => document.removeEventListener("click", handleClick);
    },
    [setIsOpen]
  );

  return ref;
}
