/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Bravo | Handyman',
    developer: {
      name: 'Tribeweb.io',
      url: 'https://www.tribeweb.io',
    },
    menu: [
      { 
        name: 'Home',
        url: '/'
      },
      { 
        name: 'Services',
        url: '/services'
      },
      { 
        name: 'About',
        url: '/about'
      },
      { 
        name: 'Contact',
        url: '/contact'
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-sharp'
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options:{
        displayName: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Team Bravo",
        short_name: "Bravo",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#570A0A",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/img/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ]
}
