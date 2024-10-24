import React, { useMemo, useState } from "react";

const useMousePosition = (): [
  number,
  number,
  { onMouseMove: (event: React.MouseEvent) => void }
] => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const bind = useMemo(
    () => ({
      onMouseMove: (event: React.MouseEvent) => {
        setX(event.nativeEvent.offsetX);
        setY(event.nativeEvent.offsetY);
      },
    }),
    []
  );

  return [x, y, bind];
};

export default useMousePosition;
