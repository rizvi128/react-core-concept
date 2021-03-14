// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [{ name: 'Iphone 11pro', price: '$1200' }, { name: 'Iphone 11pro', price: '$1200' }, { name: 'Iphone 11pro', price: '$1200' }, { name: 'Iphone 11pro', price: '$1200' }, { name: 'Iphone 11pro', price: '$1200' }, { name: 'Iphone 11pro', price: '$1200' }, { name: 'Iphone 11pro', price: '$1200' },]


  return (
    <div className="App">
      <header className="App-header">


        <Counter></Counter>





<Posts></Posts>

        <Users></Users>
        {products.map(pd => <Product product={pd}></Product>)}
        <Person name="Saiful Islam" email="rizvi07854@gmail.com"></Person>
        <Person name="shakil bhuian" email="shakil@gmail.com"></Person>
        <Person name="shariar kalam udoy" email="udoy@gmail.com"></Person>
        <Person name="Abdullah mamaun" email="mamun@gmail.com"></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUser] = useState([]);
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'skyblue',
    height: '300px',
    width: '250px',
    float: 'left',
    margin: '5px',
    alignItem:'center'
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div>
      {users.map(user =>
        <div style={productStyle}>
          <h1>{user.name}</h1>
          <p>{user.email}{user.phone}</p>
        </div>)}
    </div>

  )

}


function Posts(){
  const [posts, setPost] =useState([])
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => setPost(data))
  },[])
  return(
    <div>{posts.map((post)=><div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <br></br>

      
      </div>)}</div>
  )


}





function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '250px',
    float: 'left'
  }
  const btnStyle = {
    borderRadius: '5px',
    backgroundColor: 'pink',
    width: '80px',
    height: '30px'
  }
  return (
    <div style={productStyle}>
      <h2>Name:{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button style={btnStyle}>BUY</button>

    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid golden'
    , margin: '5px', width: '300px', color: 'black'
  }
  return (
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10)
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>)
}

export default App;
