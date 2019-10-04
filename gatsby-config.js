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
    {
      resolve: 'gatsby-plugin-styled-components',
      options:{
        displayName: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
  ]
}
