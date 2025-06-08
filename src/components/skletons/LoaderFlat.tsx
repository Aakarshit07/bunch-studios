import React from "react";

function LoaderFlat() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle cx="20" cy="40" r="6" fill="#10b981">
        <animate
          attributeName="cy"
          values="40;20;40"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      <circle cx="40" cy="40" r="6" fill="#3b82f6">
        <animate
          attributeName="cy"
          values="40;20;40"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </circle>
      <circle cx="60" cy="40" r="6" fill="#8b5cf6">
        <animate
          attributeName="cy"
          values="40;20;40"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.6s"
        />
      </circle>
    </svg>
  );
}

export default LoaderFlat;
