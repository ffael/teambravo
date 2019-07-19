const path = require('path');

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
//     console.log(JSON.stringify(node, undefined, 4))
//     if(node.internal.type === 'ContentfulService'){
//         createNodeField({
//             node,
//             name: 'slug',
//             value: node.slug
//         })
//     }
// }

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const serviceTemplate = path.resolve('./src/templates/services-template.js')

    const res = await graphql(`
        query {
            allContentfulService {
            edges {
                node {
                slug
                }
            }
            }
        }
    `)

    res.data.allContentfulService.edges.forEach((edge) => {
        createPage({
            component: serviceTemplate,
            path: `/services/${edge.node.slug}`,
            context:{
                slug: edge.node.slug 
            }
        })
    })
    
}