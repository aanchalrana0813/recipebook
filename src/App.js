
import './App.css';
import Axios from "axios";
import { useState } from "react";

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = "f09372fb";
const YOUR_APP_KEY ="a5bb860002f44a9a4be78bf5bb2183a7	";

  var url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    var result= await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit= (e) =>{
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Recipes with Love</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text" className= "app__input" placeholder="Enter Ingridient" value={query} onChange={(e) => setquery(e.target.value)}/>
        <input className="app__submit" type ="submit" value = "Search" />

      </form>
      <div>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
