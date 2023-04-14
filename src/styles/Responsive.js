const breakpoint = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const responsive = {
  sm: `(min-width: ${breakpoint.sm})`,
  md: `(min-width: ${breakpoint.md})`,
  lg: `(min-width: ${breakpoint.lg})`,
  xl: `(min-width: ${breakpoint.xl})`,
  "2xl": `(min-width: ${breakpoint["2xl"]})`,
};

export default responsive;
