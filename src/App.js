
import './App.css';
import RecipeTile from './RecipeTile.js';
import Axios from "axios";
import { useState } from "react";

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "f09372fb";
const YOUR_APP_KEY ="a5bb860002f44a9a4be78bf5bb2183a7	";

  var url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

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
        <select className="app__healthLabels">
        <option onClick= {() => sethealthLabels("vegan")}>Vegan</option>
        <option onClick= {() => sethealthLabels("alcohol_free")}>Alcohol-free</option>
        <option onClick= {() => sethealthLabels("immune_supportive")}>Immune-Supportive</option>
        <option onClick= {() => sethealthLabels("celery_free")}>Celery-free</option>
        <option onClick= {() => sethealthLabels("dairy")}>Dairy</option>
        <option onClick= {() => sethealthLabels("eggs")}>Eggs</option>
        <option onClick= {() => sethealthLabels("fish")}>Fish</option>
        <option onClick= {() => sethealthLabels("keto")}>Keto</option>
        <option onClick= {() => sethealthLabels("sugar_conscious")}>Sugar-conscious</option>
        <option onClick= {() => sethealthLabels("low_potassium")}>Low potassium</option>
        <option onClick= {() => sethealthLabels("no_sugar")}>No-suga</option>
        </select>
      
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
