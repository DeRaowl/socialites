import React from "react";

function PlanLayouts({ children }) {
  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
      {children}
    </div>
  );
}

export default PlanLayouts;
