import React, { useEffect, useRef } from "react";
import { noise } from "@chriscourses/perlin-noise";

const TopoMap = () => {
  const canvasRef = useRef(null);

  const res = 8;
  const thresholdIncrement = 5;
  const baseZOffset = 0.0001;

  const inputValues = useRef([]);
  const zBoostValues = useRef([]);
  const zOffset = useRef(0);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const cols = Math.floor(canvas.width / res) + 1;
      const rows = Math.floor(canvas.height / res) + 1;
      colsRef.current = cols;
      rowsRef.current = rows;

      zBoostValues.current = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0)
      );
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      zOffset.current += baseZOffset;

      generateNoise();

      const flatValues = inputValues.current.flat();
      const min = Math.min(...flatValues);
      const max = Math.max(...flatValues);

      for (let threshold = min; threshold < max; threshold += thresholdIncrement) {
        renderAtThreshold(threshold, min, max);
      }

      requestAnimationFrame(animate);
    };

    const generateNoise = () => {
      const rows = rowsRef.current;
      const cols = colsRef.current;
      for (let y = 0; y < rows; y++) {
        inputValues.current[y] = [];
        for (let x = 0; x < cols; x++) {
          const val = noise(x * 0.02, y * 0.02, zOffset.current + zBoostValues.current[y]?.[x]) * 100;
          inputValues.current[y][x] = val;
        }
      }
    };

    const renderAtThreshold = (threshold, min, max) => {
      ctx.beginPath();
      const colorRatio = (threshold - min) / (max - min);
      const lineOpacity = 0.3 + colorRatio * 0.4; // 0.3–0.7
      const lineHue = 120 - colorRatio * 60; // green to yellowish
      ctx.strokeStyle = `hsla(${lineHue}, 40%, 50%, ${lineOpacity})`;
      ctx.lineWidth = 1 + colorRatio * 1.5; // slightly thicker for higher values

      const rows = rowsRef.current;
      const cols = colsRef.current;

      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols - 1; x++) {
          const nw = inputValues.current[y][x];
          const ne = inputValues.current[y][x + 1];
          const se = inputValues.current[y + 1][x + 1];
          const sw = inputValues.current[y + 1][x];

          if (
            (nw > threshold && ne > threshold && se > threshold && sw > threshold) ||
            (nw < threshold && ne < threshold && se < threshold && sw < threshold)
          ) continue;

          const gridValue = [nw > threshold ? 1 : 0, ne > threshold ? 1 : 0, se > threshold ? 1 : 0, sw > threshold ? 1 : 0]
            .reduce((res, x) => (res << 1) | x);

          placeLines(gridValue, x, y, threshold);
        }
      }
      ctx.stroke();
    };

    const placeLines = (gridValue, x, y, threshold) => {
      const nw = inputValues.current[y][x];
      const ne = inputValues.current[y][x + 1];
      const se = inputValues.current[y + 1][x + 1];
      const sw = inputValues.current[y + 1][x];

      const linInterpolate = (x0, x1, y0 = 0, y1 = 1) =>
        x0 === x1 ? 0 : y0 + ((y1 - y0) * (threshold - x0)) / (x1 - x0);

      const line = (from, to) => {
        ctx.moveTo(from[0], from[1]);
        ctx.lineTo(to[0], to[1]);
      };

      let a, b, c, d;

      switch (gridValue) {
        case 1:
        case 14:
          c = [x * res + res * linInterpolate(sw, se), y * res + res];
          d = [x * res, y * res + res * linInterpolate(nw, sw)];
          line(d, c);
          break;
        case 2:
        case 13:
          b = [x * res + res, y * res + res * linInterpolate(ne, se)];
          c = [x * res + res * linInterpolate(sw, se), y * res + res];
          line(b, c);
          break;
        case 3:
        case 12:
          b = [x * res + res, y * res + res * linInterpolate(ne, se)];
          d = [x * res, y * res + res * linInterpolate(nw, sw)];
          line(d, b);
          break;
        case 4:
        case 11:
          a = [x * res + res * linInterpolate(nw, ne), y * res];
          b = [x * res + res, y * res + res * linInterpolate(ne, se)];
          line(a, b);
          break;
        case 5:
          a = [x * res + res * linInterpolate(nw, ne), y * res];
          b = [x * res + res, y * res + res * linInterpolate(ne, se)];
          c = [x * res + res * linInterpolate(sw, se), y * res + res];
          d = [x * res, y * res + res * linInterpolate(nw, sw)];
          line(d, a);
          line(c, b);
          break;
        case 6:
        case 9:
          a = [x * res + res * linInterpolate(nw, ne), y * res];
          c = [x * res + res * linInterpolate(sw, se), y * res + res];
          line(c, a);
          break;
        case 7:
        case 8:
          a = [x * res + res * linInterpolate(nw, ne), y * res];
          d = [x * res, y * res + res * linInterpolate(nw, sw)];
          line(d, a);
          break;
        case 10:
          a = [x * res + res * linInterpolate(nw, ne), y * res];
          b = [x * res + res, y * res + res * linInterpolate(ne, se)];
          c = [x * res + res * linInterpolate(sw, se), y * res + res];
          d = [x * res, y * res + res * linInterpolate(nw, sw)];
          line(a, b);
          line(c, d);
          break;
        default:
          break;
      }
    };

    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <canvas style={{ width: "100%", height: "100%", display: "block" }} ref={canvasRef} />
    </div>
  );
};

export default TopoMap;
