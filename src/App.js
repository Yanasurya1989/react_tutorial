import './App.css';
import UserClass from './components/items/UserClass';
import UserFunction from './components/items/UserFunction';

function App() {
  const name = "Yana";
  const email = "yanasurya1989@gmail.com";
  const subretber = 6789;
  return (
    <div className="App">
      <main className="Main">    
        <div className='container'>
          <UserClass name = {name} email = {email} subretber = {subretber}/>
          <UserClass name = "Yana-Class" email = "yanasurya@class.com"/>
          <UserClass name = "Two-Class" email = "two@class.com" subretber={4567}/>
          <UserFunction name="Prop One - Function" email="funtionOne@prop.com"/>
          <UserFunction name="Prop Two - Function" email="funtionTwo@prop.com" subretber={1234}/>
        </div>   
      </main>
    </div>
  );
}

export default App;
