import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form} from '../styled/Form'
import styled from "styled-components";

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    // const {name, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const {name, password} = formData
        const user = {
            name,
            password
        }
       console.log(user)
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
          
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    // history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <> 
    <Form onSubmit={onSubmit}>
        <Wrapper>
            <Logo>Bounty Hunter</Logo>
        <label>
          Username
          </label>
          
        <input type='text' name='name' value={formData.name} onChange={handleChange} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} />
       
       
        <input type='submit' value='Log in!' />
        </Wrapper>
    </Form>
      
      {errors? <div>{errors}</div>:null}
        </>
    )
}

const Logo = styled.h1`
  font-family: 'Splash', cursive;
  text-align: 'centered';
  font-size: 2rem;
  margin: 10px 0 16px;
  color: gold;
`;

const Wrapper = styled.section`
  max-width: 350px;
  max-height: 400px;
  margin: 40px auto;
  padding: 16px;
  background: grey;

`;

export default Login