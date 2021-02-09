module.exports = {
  siteMetadata: {
    title: "Peppe's Love Calculator",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Oleo Script Swash Caps:400,700',
          'Lora'
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
