import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'

// Components
import Layout from "../components/Layouts/"
import Head from "../components/Layouts/head.js"
import MainHero from "../components/Hero/"
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
// Images
import room from '../assets/img/room.jpg'
import cabinet from '../assets/img/cabinet.jpg'
import paint from '../assets/img/pant.jpg'
import general from '../assets/img/general.jpg'

// Styled Components
import { Card, CardContainer, SectionTitle, Services } from './styles'

// Icons
import { 
  FaHammer,
  FaPaintRoller,
  FaScrewdriver,
  FaToolbox,
} from 'react-icons/fa'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              description
              image_path
              image_alt
            }
            fields{
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <MainHero />
      
      <Services className={"grid section-xl"}>
        <SectionTitle>
          <h3>Our Services</h3>
          <p>Bravo Handyman has a complete team of professionals that can handle any project. With years of experience and expertise, you can rest assured that you will get nothing else than a well done job!</p>
        </SectionTitle>
        {data.allMarkdownRemark.edges.map((edge, index)=>{
          return(
            <CardContainer>
              <Card reverse={(index%2===0)}>
                <div>
                  <header>
                    <h3>{edge.node.frontmatter.title}</h3>
                  </header>
                  <p>{edge.node.frontmatter.description}</p>
                  <p><Link to={`/services/${edge.node.fields.slug}`}>See More</Link></p>
                </div>
                <figure>
                  <img src={`${edge.node.frontmatter.image_path}.jpg`} alt={edge.node.frontmatter.image_alt}/>
                </figure>
              </Card>
            </CardContainer>
          )
        })}
        {/* <CardContainer>
          <Card>
            <div>
              <header>
                <h3>Finish Carpentry</h3> <FaHammer size={30} color={"#ABAEBE"}/>
              </header>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.</p>
            </div>

            <figure>
              <img src={room} alt="Finish Carpentry Room"/>
            </figure>
          </Card>
        </CardContainer>
        <hr/>
        <CardContainer>
          <Card reverse={true}>
            <div>
              <header>
                <h3>Residential Painting</h3> <FaPaintRoller size={30} color={"#ABAEBE"}/>
              </header>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.</p>
            </div>
            <figure>
              <img src={paint} alt="Freshly Painted Room"/>
            </figure>
          </Card>
        </CardContainer>
        <hr/>
        <CardContainer>
          <Card>
            <div>
              <header>
                <h3>Cabinet Installation</h3> <FaScrewdriver size={30} color={"#ABAEBE"}/>
              </header>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.</p>
            </div>
            <figure>
              <img src={cabinet} alt="Kitchen Cabinets"/>
            </figure>
          </Card>
        </CardContainer>
        <hr/>
        <CardContainer>
          <Card reverse={true}>
            <div>
              <header>
                <h3>General Carpentry</h3> <FaToolbox size={30} color={"#ABAEBE"}/>
              </header>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.</p>
            </div>
            <figure>
              <img src={general} alt="Brand New Room"/>
            </figure>
          </Card>
        </CardContainer> */}

      </Services>

      <Testimonials />
      <Gallery />
      <Footer />
    </Layout>
  )
}

export default IndexPage
