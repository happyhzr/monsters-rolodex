import React from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json()
    this.setState({ monsters: users });
  }
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
