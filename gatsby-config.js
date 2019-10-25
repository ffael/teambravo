/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Bravo | Handyman',
    about: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
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
        name: 'Projects',
        url: '/projects'
      },
      // { 
      //   name: 'Contact',
      //   url: '/contact'
      // },
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
        name: `files`,
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
        icons: [
          {
            "src": "src/assets/img/favicon-512.png",
            "type": "image/png",
            "sizes": "512x512"
          },
          {
            "src": "src/assets/img/favicon-384.png",
            "type": "image/png",
            "sizes": "384x384"
          },
          {
            "src": "src/assets/img/favicon-256.png",
            "type": "image/png",
            "sizes": "256x256"
          },
          {
            "src": "src/assets/img/favicon-192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "src/assets/img/favicon-144.png",
            "type": "image/png",
            "sizes": "144x144"
          },
          {
            "src": "src/assets/img/favicon-96.png",
            "type": "image/png",
            "sizes": "96x96"
          },
          {
            "src": "src/assets/img/favicon-72.png",
            "type": "image/png",
            "sizes": "72x72"
          },
          {
            "src": "src/assets/img/favicon-48.png",
            "type": "image/png",
            "sizes": "48x48"
          },
        ],
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114693120-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-NLRSPV7",
        // Enables Google Optimize Experiment ID
        experimentId: "UA-114693120-2",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "UA-114693120-2",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "teambravo.com",
    }
  ``}
  ]
}
