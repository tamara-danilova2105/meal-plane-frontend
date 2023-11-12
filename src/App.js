import { useEffect, useState } from "react";
import { Meals } from "./Meals";
import { addMeal, deleteMeal, editMeal, getAllMeals } from "./FetchMeal";

function App() {

  const [meals, setMeals] = useState();
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState();

  useEffect(() => {
    getAllMeals(setMeals)
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (title.length === 0) return false
    editing
      ? editMeal(mealId, title, setMeals, setTitle, setEditing)
      : addMeal(title, setTitle, setMeals)
  }

  const handleEdit = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setMealId(_id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Meal Plane</h1>
      <div className="container_input">
        <input
          type='text'
          placeholder='Meal Plane'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button>
          {editing ? 'Edit' : 'Add'}
        </button>
      </div>
      {
        meals?.map(meal =>
          <Meals
            key={meal._id}
            text={meal.title}
            handleEdit={() => handleEdit(meal._id, meal.title)}
            deleteMeal={() => deleteMeal(meal._id, setMeals)}
          />
        )
      }
    </form>
  );
}

export default App;
