import React from 'react';

const ScanlineOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[45] select-none" aria-hidden="true">
      {/* Calibrated CRT scanline raster — subtle atmospheric depth without obscuring technical typography */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.06)_50%)] bg-[length:100%_4px] opacity-70"></div>
      {/* Subtle analog fractal noise texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20200%20200%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noise%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.65%27%20numOctaves=%273%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23noise)%27/%3E%3C/svg%3E')] animate-[noise_0.2s_infinite] motion-reduce:animate-none"></div>
    </div>
  );
};

export default ScanlineOverlay;
