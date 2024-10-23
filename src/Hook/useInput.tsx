import React, { useState } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onClick: handleChange,
  };
}
