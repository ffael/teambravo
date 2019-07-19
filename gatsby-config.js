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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options:{
                maxWidth: 960,
                linkImagesToOriginal: false,
              }
            }
          ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}
