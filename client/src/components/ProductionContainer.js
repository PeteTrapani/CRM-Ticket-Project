import styled from 'styled-components'
import ProductionCard from './ProductionCard'


function ProductionContainer({productions}) {

    return (
     <div>
         
         <CardContainer CardContainer>
             {productions.map(production => <ProductionCard  key={production.id} production={production}  />)}
         </CardContainer>
     </div>
    );
  }
  
export default ProductionContainer




const CardContainer = styled.ul`
    display: ;
    margin: auto
    flex-direction:column;
    flexDirection: 'column'
    justifyContent: 'right'
    alignItems: 'right'
    height: '100%'
`