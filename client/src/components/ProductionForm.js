import React, { useState} from 'react'
import { useHistory}  from 'react-router-dom'
import {Form} from '../styled/Form'


function ProductionForm({addProduction}) {
  const [formData, setFormData] = useState({
    title:'',
    genre:'',
    budget:'',
    image:'',
    director:'',
    description:''
  })
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const history = useHistory()
  function onSubmit(e){
    e.preventDefault()
    console.log('form submission')
    fetch('/productions',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          addProduction(data)
          history.push('/')
        })
        
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
    return (
      <div className='App'>
      {errors?errors.map(e => <div>{e}</div>):null}
      <Form onSubmit={onSubmit}>
        <label>Title </label>
        <input type='text' name='title' value={formData.title} onChange={handleChange} />
        
        <label> Software</label>
        <input type='text' name='genre' value={formData.genre} onChange={handleChange} />
      
        <label>Budget</label>
        <input type='number' name='budget' value={formData.budget} onChange={handleChange} />
      
        {/* <label>Image of error</label>
        <input type='text' name='image' value={formData.image} onChange={handleChange} /> */}
      
        <label>Company</label>
        <input type='text' name='director' value={formData.director} onChange={handleChange} />
      
        <label>Contact Information</label>
        <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} />
      
        <input type='submit' value='Update Production' />
      </Form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }
  
  export default ProductionForm