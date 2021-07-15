const fontTypes = {
  title: "Space Grotesk, sans-serif",
  main: "Space Grotesk, sans-serif",
};

const breakpoints = {
  sm: "screen and (max-width: 640px)",
  md: "screen and (max-width: 768px)",
  lg: "screen and (max-width: 1024px)",
  xl: "screen and (max-width: 1280px)",
};

const themeLight = {
  // Temp fonts
  fonts: fontTypes,
  // Colors for layout
  colors: {
    primary: "#505BA4",
    secondary: "#63A6C1",
    tertiary: "#8edecd",
    background1: "#F3F3F4",
    accent1: "#A2725B",
    button1: "#6FCEE7",
    button2: "#8edecd",
    background2: "#A7A8B1",
    black: "#101017",
    error: "#C35A90",
    error1: "#c35a909e",
    white: "#FFF"
  },
  // Breakpoints for responsive design
  breakpoints,
};

export type Theme = {
  theme: typeof themeLight;
};

export default themeLight;
