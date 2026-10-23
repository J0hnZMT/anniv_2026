
import { useCallback, useEffect, useRef, useState } from "react";

export function useNoButtonMovement() {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState(null);
  const [isFloating, setIsFloating] = useState(false);

  const moveButton = useCallback(() => {
    const button = buttonRef.current;
    const wrapper = document.querySelector(".invitation-wrap");

    if (!button || !wrapper) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const padding = 8;
    const range = 80;

    // Keep the button within 100px of the invitation wrapper.
    const minX = Math.max(
      padding,
      wrapperRect.left - range
    );
    const maxX = Math.min(
      window.innerWidth - buttonRect.width - padding,
      wrapperRect.right + range - buttonRect.width
    );

    const minY = Math.max(
      padding,
      wrapperRect.top - range
    );
    const maxY = Math.min(
      window.innerHeight - buttonRect.height - padding,
      wrapperRect.bottom + range - buttonRect.height
    );

    // If the wrapper is close to a screen edge, use the available space.
    const safeMaxX = Math.max(minX, maxX);
    const safeMaxY = Math.max(minY, maxY);

    const randomX = minX + Math.random() * (safeMaxX - minX);
    const randomY = minY + Math.random() * (safeMaxY - minY);

    setPosition({
      x: randomX,
      y: randomY,
    });
    setIsFloating(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (isFloating) moveButton();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isFloating, moveButton]);

  return {
    buttonRef,
    position,
    isFloating,
    moveButton,
  };
}
