const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const servicesPath = path.resolve(`src/templates/serviceDetail.js`)
  const response = await graphql(`
    query {
      allContentfulServices {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulServices.edges.forEach(service => {
    createPage({
      component: servicesPath,
      path: `/services/${service.node.slug}`,
      context: {
        slug: service.node.slug,
      },
    })
  })
}
