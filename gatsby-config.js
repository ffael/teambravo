/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Bravo | Handyman",
    about:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    email: "bravohandymanco@gmail.com",
    developer: {
      name: "Tribeweb.io",
      url: "https://www.tribeweb.io",
    },
    menu: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Services",
        url: "/services",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114693120-2",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTrasitionDelay: 0,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-sharp",
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `files`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Team Bravo",
        short_name: "Bravo",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#570A0A",
        display: "standalone",
        icon: "src/assets/img/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
