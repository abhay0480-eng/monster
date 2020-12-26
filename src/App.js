import React from 'react';
import './App.css';
import { CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';


class App extends React.Component{
  constructor(){
    super();

    this.state={
      monsters: [],
      searchField: ''

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters:users})).catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    })
  }
  render(){
    const { monsters,searchField }=this.state;
    const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return(
      <div className='App'>
       <h2>Monster Roledex</h2>

        <SearchBox

         placeholder='search monsters'
         handleChange={e => 
          this.setState({searchField: e.target.value} )}

        />
        
        
        <CardList monsters={filterMonster} >
       
        </CardList>
     
      </div>
    ); 
  }
}
 


export default App;
