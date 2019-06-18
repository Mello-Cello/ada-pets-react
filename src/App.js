import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

onSelectPet = (petId) => {
  const selectedPet = this.state.petList.find(pet => {
    return pet.id === petId
  });
  this.setState ({
    currentPet: selectedPet,
  })

}




  render() {
    const { currentPet } = this.state;
    const details = currentPet ? <PetDetails currentPet={this.state.currentPet} /> : "no pet selected";
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
        <section className="">
          { /* Wave 2:  Where Pet Details should appear */ }
          {details}
        </section>

        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList pets={pets} onSelectPet={this.onSelectPet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
