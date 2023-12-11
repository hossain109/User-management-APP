import React,{Fragment} from 'react'
import User from './User';

export default function Users(props) {
    const myUsers = props.users;

  return (
    <Fragment>
      {myUsers.map((items,id)=>{
        return <User items={items} key={id} onDelete={props.onDelete} />
      })}
    </Fragment>
  )
}
