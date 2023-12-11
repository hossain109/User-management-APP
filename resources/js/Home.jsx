import React,{Fragment,useState,useEffect} from 'react';
import useFetch from './components/useFetch'
import { Container } from 'react-bootstrap';
import Users from './components/Users';
import Search from './components/Search';
import axios from 'axios';

export default function Home() {

    const errorMessage ="Data is not loading";
    const message = "Data is loading";

    let url= "https://jsonplaceholder.typicode.com/users";
    const {data,loading,error}=useFetch(url);

    const [newdata,setNewdata]=useState();

//assign  data on first render
    useEffect(()=>{
      setNewdata(data)
    },[data])
   // console.log(newdata)


    const onDelete = (id)=>{
      setNewdata((newdata)=> newdata.filter((user)=>user.id !=id));
    }
    const onSearch = (value)=>{
      console.log(value)
        const searchResult = data.filter((username)=>username.name==value)
        //console.log(searchResult)
    }

  return (
    <Fragment>
      <Container>
        <h1>User Management APP</h1>
        {/* {loading && message}
        {error && errorMessage} */}
        <Search onSearch={onSearch} />
        {newdata &&
            <Users users={newdata} onDelete={onDelete} />
        }
        {!newdata &&
          <b>Have not any data</b>
        }
      </Container>
    </Fragment>
  )
}
