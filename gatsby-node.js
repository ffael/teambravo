const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const servicePath = path.resolve(`src/templates/page.js`)
  const servicesPath = path.resolve(`src/templates/serviceDetail.js`)
  const projectPath = path.resolve(`src/templates/projectDetail.js`)

  const res = await graphql(`
    query Project {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const response = await graphql(`
    query Page {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const r = await graphql(`
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

  r.data.allContentfulServices.edges.forEach(service => {
    createPage({
      component: servicesPath,
      path: `/services/${service.node.slug}`,
      context: {
        slug: service.node.slug,
      },
    })
  })

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: projectPath,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
