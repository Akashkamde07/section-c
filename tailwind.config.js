module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ani: 'ani 1.5s forwards',
      },
      keyframes: {
        ani: {
          '0%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem', // Add custom spacing as needed
      },
    },
  },
  plugins: [],
};
