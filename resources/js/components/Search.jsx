import React,{Fragment,useState} from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Search(props) {

    const[search,setSearch]=useState("")

    const changeHandler = (e)=>{
        setSearch(e.target.value)
        props.onSearch(e.target.value)
    }
  return (
    <Fragment>
      <Form>
        <Form.Control value={search} type='text' onChange={changeHandler} name='search' id='search' className='w-50' placeholder='Enter search user' required />
      </Form>
    </Fragment>
  )
}
