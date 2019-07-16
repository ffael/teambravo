const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions


    if(node.internal.type === 'MarkdownRemark'){
        if(node.frontmatter.type==='testimonial'){
            const slug = `testimonial-${path.basename(node.fileAbsolutePath, '.md')}`
            createNodeField({
                node,
                name: 'slug',
                value: slug
            })
        }

        if(node.frontmatter.type==='service'){
            const slug = `${path.basename(node.fileAbsolutePath, '.md')}`
            createNodeField({
                node,
                name: 'slug',
                value: slug
            })
        }
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const serviceTemplate = path.resolve('./src/templates/services-template.js')

    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            type
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        if(edge.node.frontmatter.type === 'service'){
            createPage({
                component: serviceTemplate,
                path: `/services/${edge.node.fields.slug}`,
                context:{
                    slug: edge.node.fields.slug 
                }
            })
        }
    })
    
}