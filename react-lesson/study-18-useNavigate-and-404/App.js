import './App.css';
  import Props from './Props';
  import RenderingLists  from './RenderingLists';
 import EventControlled from './EventControlled';
 import UseStateHook from './UseStateHook';
import { FormControlledInputs } from './FormControlledInputs';
import FormswithMultipleInputs from './FormswithMultipleInputs';
import ArrayStateImmutability from './ArrayStateImmutability';
import UseEffectfetch from './UseEffectfetch';
import ArrayFetchingUser from './ArrayFetchingUser'
import Crud from './Crud';
import TodoList1 from './TodoList1';
import GroceryList from './GroceryList';
import PostList from './PostList';

import UserDirectory from './UserDirectory';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import UserDetails from './UserDetails';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link> 
      <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/users/:id" element={<UserDetails/>} />
           <Route path="/users/" element={<UserDirectory/>} />
        <Route path="/about" element={<About />} />

       <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>

        {/*
     <Props name="Burger" price={50} availablevailable={true} />
     <hr></hr>
     <RenderingLists />
     <hr></hr>
     <EventControlled/>
     <hr></hr>
     <UseStateHook/>
     <hr></hr>
     <FormControlledInputs/>
     <hr></hr>
     <FormswithMultipleInputs/>
     <hr></hr>
     <ArrayStateImmutability/>
<hr></hr>
    <UseEffectfetch/>
    <hr></hr>
    <ArrayFetchingUser/>
    <hr></hr>
    <Crud/>
    <hr></hr>
    <TodoList1/>
    <hr></hr>
    <GroceryList/>
    <hr></hr>
    <PostList/>
    <hr></hr>
    <UserDirectory/>
      */}
    </div>
 

  );
}

export default App;
