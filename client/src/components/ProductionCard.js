import {Link} from 'react-router-dom'
import styled from 'styled-components'




function ProductionCard({production}) {
    const {title, budget, genre, director, id} = production
   
    return (
      <Card >
      <div>
      <Link to={`/productions/${id}`}> <h2>{title}</h2></Link>
        <p>{genre}</p>
        <p>$ {budget}</p>
        <p>{director}</p>
      </div>
      {/* <img src={image}/> */}
      </Card>
     
    );
  }
  
  export default ProductionCard


  const Card = styled.li`
    display:flex;
    text-align:center;
    flex-direction:row;
    justify-content:start;
    font-family:Arial, sans-serif;
    margin:20px;
    &:hover {
      transform: scale(1.15);
      transform-origin: top left;
    }
    a{
      text-decoration:none;
      color:white;
    }
    img{
      width: 180px;
      margin-left:20%;
      mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
    }
    
  `