export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-class-rename": {
      rename: (className) => {
        return `_${Math.random().toString(36).substr(2, 8)}`;
      },
      ignore: [],
    },
  },
};
