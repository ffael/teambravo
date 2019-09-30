import React from 'react'
import { Container, Content } from './styles'
import { Link } from 'gatsby'

// Images
import room from '../../assets/img/room.jpg'
import cabinet from '../../assets/img/cabinet.jpg'
import paint from '../../assets/img/pant.jpg'
import general from '../../assets/img/general.jpg'

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
      <Container>
        <Content>
          <div>
            <Link to="" className="backdrop">
              <FaHammer color={"#fff"} size={40}/>
              <h4>Finish Carpentry</h4>
            </Link>
            <figure className="figure">
              <img src={room} />
            </figure>
          </div>
          <div>
            <Link to="" className="backdrop">
              <FaScrewdriver color={"#fff"} size={40}/>
              <h4>Cabinet Install</h4>
            </Link>
            <figure className="figure">
              <img src={cabinet} />
            </figure>
          </div>
          <div>
            <Link to="" className="backdrop">
              <FaPaintRoller color={"#fff"} size={40}/>
              <h4>Finish Painting</h4>
            </Link>
            <figure className="figure">
              <img src={paint} />
            </figure>
          </div>
          <div>
            <Link to="" className="backdrop">
              <FaToolbox color={"#fff"} size={40}/>
              <h4>General Carpentry</h4>
            </Link>
            <figure className="figure">
              <img src={general} />
            </figure>
          </div>
          <div>
            <Link to="" className="backdrop">
              <FaScrewdriver color={"#fff"} size={40}/>
              <h4>Cabinet Install</h4>
            </Link>
            <figure className="figure">
              <img src={cabinet} />
            </figure>
          </div>
          <div>
            <Link to="" className="backdrop">
              <FaHammer color={"#fff"} size={40}/>
              <h4>Finish Carpentry</h4>
            </Link>
            <figure className="figure">
              <img src={room} />
            </figure>
          </div>
          <div>
            <Link to="" className="backdrop">
              <FaToolbox color={"#fff"} size={40}/>
              <h4>General Carpentry</h4>
            </Link>
            <figure className="figure">
              <img src={general} />
            </figure>
          </div>
          <div>
            <Link to="" className="backdrop">
              <FaPaintRoller color={"#fff"} size={40}/>
              <h4>Finish Painting</h4>
            </Link>
            <figure className="figure">
              <img src={paint} />
            </figure>
          </div>
          
        </Content>
      </Container>
    </>
  )
}

export default Gallery