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

// console.log(`Page loaded. Pets: ${pets}`);

onSelectPet = (petId) => {
  const selectedPet = this.state.petList.find(pet => {
    return pet.id === petId
  });
  this.setState ({
    currentPet: selectedPet,
  })
}

onRemovePet = (petId) => {
  // const petToRemove = this.state.petList.find(pet => {
  //   return pet.id === petId;
  // });

  // const removePetIndex = this.state.petList.findIndex(pet => {return pet.id === petId})
  // console.log(`The index to remove is: ${removePetIndex}`);
  // const tempPetList = this.pets.splice(removePetIndex);

  const tempPetList = this.state.petList.filter(pet => pet.id !== petId)
  console.log(tempPetList);



  this.setState ({
    petList: tempPetList
  })
}




  render() {
    const { currentPet } = this.state;
    const details = currentPet ? <PetDetails currentPet={this.state.currentPet} /> : "";
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
          <PetList
            pets={this.state.petList}
            onSelectPet={this.onSelectPet}
            onRemovePet={this.onRemovePet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
          <NewPetForm />
        </section>
      </main>
    );
  }
}

export default App;
