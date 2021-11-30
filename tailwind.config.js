module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        wrap: '1170px',
      },
      fontSize: {
        header: '1.1em',
      },
      height: {
        ftContent: 'fit-content',
      },
      backgrounImage: {
        viewIcon: "url('../../../public/image/footer_icon.png')",
      },
      screens: {
        padpt: '992px',
      },
      boxShadow: {
        headShadow: '0 0.15rem 0.25rem rgb(0 0 0 / 15%)',
      },
      fontFamily: {
        notosan: 'Noto Sans TC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
