import React,{Fragment} from 'react'
import { Button, Card } from 'react-bootstrap';

export default function User(props) {
    
    const {id,name,username,phone,email,website} = props.items;

    const handleDelete = (id)=>{
      props.onDelete(id)
    }

  return (
    <Fragment>
      <Card className='bg-dark bg-gradient text-white forHover' style={{width:250,display:'inline-flex',margin:10}}>
        <Card.Body>
          <b>{id}</b>
          <p className='text-info fs-5'>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{website}</p>
          <Button className='w-100 bg-white text-black' onClick={()=>handleDelete(id)} type='submit'>Delete</Button>
        </Card.Body>
      </Card>
    </Fragment>
  )
}
