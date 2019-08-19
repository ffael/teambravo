import React from 'react'
import { Container, Content } from './styles'
import { Link } from 'gatsby'

// Images
import room from '../../assets/img/room.jpg'
// import cabinet from '../assets/img/cabinet.jpg'
// import paint from '../assets/img/pant.jpg'
// import general from '../assets/img/general.jpg'

// Icons
import { 
  FaHammer,
  FaPaintRoller,
  FaScrewdriver,
  FaToolbox,
} from 'react-icons/fa'

const Gallery = () =>{
  return (
    <>
      <Container className="section-xl">
        <Content primary className="grid">
          <article>
            <h3>Latest Projects</h3>
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
          </article>
          <div>
            <Link to="" className="backdrop">
              <FaHammer color={"#fff"} size={40}/>
              <h4>Finish Carpentry</h4>
            </Link>
            <figure className="figure">
              <img src={room} />
            </figure>
          </div>
        </Content>
      </Container>
    </>
  )
}

export default Gallery