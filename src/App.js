import './App.css';
import {User} from './User';
import {Question} from './Question';
/* This shows how to map a list using react. 
function App() {
  const names = ["Tom","Jessia","jack","tomas","judy"]
  
  return (
    <div>
      {names.map((name, key) => {    ---explanation: you map to names function which takes the name and the key (position in list) then it passes it into the return function to print the names. key is in h1 element otherwises causes errors. ignore for now
        return <h1 key={key}> {name} </h1>
      })}
  </div>
  );

}
*/
/*object within react and using above example
function App() {    
  const users = [
    {name: "Tom", age: 21},
    {name: "Jess", age: 54},
    {name: "Mark", age: 34},
    {name: "Derrick", age: 12},

  ];
  /*this section of code uses the object list created above and also FUNCTIONAL components. the <user> component is JSX code that creates a <USer> like <p> for example and it populates it with the info from user.name sequentially through the list
  return ( 
    <div> 
      {users.map((user, key) => {
        return (<User name={user.name} age={user.age}/>
          );
      })}
  </div>
  );

};
*/
/*
function App() {
  const Planets  = [
    {name: "Mercury", isGas: false},
    {name: "Venus", isGas: true},
    {name: "Earth", isGas: false},
    {name: "GasMars", isGas: true},
    {name: "Uranus", isGas: true},

  ];
  /*using ternary operators for the example*/
  /*
  return(
    <div>
       {Planets.map (
        (planets, key)=>  !planets.isGas && ( <h1>{planets.name}</h1> 
       ))}

    </div>

  );
};
*/

function App() {    

  const quiz = [
    {Question: "What is the first day of the week?", Answer: "Monday"},
    {Question: "What is the 2nd day of the week?", Answer: "tues"},
    {Question: "What is the 3rd day of the week?", Answer: "wed"}

  ];
return(
<div>
  {quiz.map((quiz,key)=> {
  return (<Question Question={quiz.Question} Answer={quiz.Answer}/>
  
  );
})}
</div>
);


};


export default App;
 