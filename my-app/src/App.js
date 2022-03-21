import './App.css';
import Counter from './Components/Counter';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'
import {fetchData} from './Redux/action'
import SearchBar from './Components/SearchBar';

function App() {
  const store = useSelector((state)=>state)
  // console.log("Store : ",store)
  const dispatch = useDispatch();
  
  useEffect(()=>{
     getData()
  },[])

  const getData = () =>{
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((resp)=>{
        // console.log(resp.data)
        dispatch(fetchData(resp.data))
      })
  }

  return (
    <div className="App">
      <h1>User Application</h1>
      <SearchBar/>
      <Counter/>
    </div>
  );
}

export default App;
