"use client";
import { useState } from "react";

function Switch() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="rounded-md bg-[#8080801a] p-8">
        <label htmlFor="toggle-checkbox" className="toggle">
          <input
            className="toggle-checkbox"
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            name="toggle-checkbox"
            id="toggle-checkbox"
          />
          <div className="toggle-switch"></div>
          <span className="toggle-label">Switch</span>
        </label>
      </div>
    </>
  );
}

export default Switch;
