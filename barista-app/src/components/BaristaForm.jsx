import { useState } from 'react'
import RecipeChoices from './RecipeChoices';
import drinksJson from '../../drinks.json';

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    'temp': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });
  const [correctIngredients, setCorrectIngredients] = useState({
    'temp': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });
  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});
  const ingredients = {
    'temp' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  }

  const onCheckAnswer = () => {
    if (Object.keys(trueRecipe).length == 0) return;

    for (const key in trueRecipe) {
      let checker = trueRecipe[key] === inputs[key] ? 'correct' : 'incorrect'
      setCorrectIngredients((prevState) => ({
        ...prevState,
        [key]: checker
      }))
    }
  }

  const onNewDrink = () => {
    setInputs({
      'temp': '',
      'milk': '',
      'syrup': '',
      'blended': '' 
    });
    setCorrectIngredients({
      'temp': '',
      'milk': '',
      'syrup': '',
      'blended': '' 
    });
      
    getNextDrink();
  }

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  }

  const handleSetInputs = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setCorrectIngredients((prevState) => ({
      ...prevState,
      [e.target.name]: ''
    }))
  }

  return (
    <div>
        <h2>Hi, I&apos;d like to order a:</h2>
        <div className="drink-container">
          <h2 className="mini-header">{currentDrink}</h2>
          <button className="button new-drink" type="new-drink-button" onClick={() => onNewDrink()}>🔄</button>
        </div>
        <form className="container">
          <div className="mini-container">
            <h3>Temperature</h3>
            <div className="answer-space" id={correctIngredients['temp']}>
              {inputs["temp"]} 
            </div>
            <RecipeChoices
              handleChange={(e) => handleSetInputs(e)}
              label="temp"
              choices={ingredients["temp"]}
              checked={inputs["temp"]}
            />
          </div>
          <div className="mini-container">
            <h3>Syrup</h3>
            <div className="answer-space" id={correctIngredients['syrup']}>
              {inputs["syrup"]} 
            </div>
            <RecipeChoices
              handleChange={(e) => handleSetInputs(e)}
              label="syrup"
              choices={ingredients["syrup"]}
              checked={inputs["syrup"]}
            />
          </div>
          <div className="mini-container">
            <h3>Milk</h3>
            <div className="answer-space" id={correctIngredients['milk']}>
              {inputs["milk"]} 
            </div>
            <RecipeChoices
              handleChange={(e) => handleSetInputs(e)}
              label="milk"
              choices={ingredients["milk"]}
              checked={inputs["milk"]}
            />
          </div>
          <div className="mini-container">
            <h3>Blended</h3>
            <div className="answer-space" id={correctIngredients['blended']}>
              {inputs["blended"]} 
            </div>
            <RecipeChoices
              handleChange={(e) => handleSetInputs(e)}
              label="blended"
              choices={ingredients["blended"]}
              checked={inputs["blended"]}
            />
          </div>
        </form>
        <button className="button submit" onClick={() => onCheckAnswer()}>
          Check Answer
        </button>
        <button className="button submit" type="new-drink-button" onClick={() => onNewDrink()}>
          New Drink
        </button>
    </div>
  )
}

export default BaristaForm