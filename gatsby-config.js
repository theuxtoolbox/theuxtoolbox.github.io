/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `The UX Toolbox`,
    siteUrl: `https://www.theuxtoolbox.com`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Catalogue",
        link: "/catalogue",
      },
      {
        name: "About",
        link: "/about",
      },
      // {
      //   name: "Shop",
      //   link: "#",
      // },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
