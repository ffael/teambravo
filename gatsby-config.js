/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Bravo | Handyman',
    developer: {
      name: 'Tribeweb.io',
      url: 'https://www.tribeweb.io',
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
  ]
}
