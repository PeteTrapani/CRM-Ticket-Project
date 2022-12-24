import styled from 'styled-components'
import ProductionContainer from './ProductionContainer'


function Home({productions}){
    return(
    <div>
      <Title><span>B</span>ounty <span>H</span>unter</Title>
        <Image /> 
        <ProductionContainer  productions={productions} />
    </div>
    )
}

export default Home

const Image = styled.img.attrs(() => ({
    src:'https://www.syfy.com/sites/syfy/files/2020/05/bounty-hunters-esb.jpg', 
  }))`
  flexDirection: 'center'
  justifyContent: 'center'
  alignItems: 'center'
  width: 100%
  height: '10%'
    position: right;
    z-index:-1;
  `
  const Title = styled.h1`
  
  text-transform: uppercase;
  font-family:Arial, sans-serif;
  width:100px;
  font-size: 100px;
  line-height: .8;
  text-align: right;
 
  transform: scale(.7, 1.4);
  
  span{
      color:#ffbf00;
  }
`