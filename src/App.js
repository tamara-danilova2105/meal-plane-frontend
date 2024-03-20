import { useEffect, useState } from "react";
import { Meals } from "./Meals";
import { 
  addMeal, 
  deleteMeal, 
  editMeal, 
  getAllMeals, 
  deleteAll, 
  // uploadFile 
} from "./FetchMeal";
// import { UploadFile } from "./UploadFile";

function App() {

  const [meals, setMeals] = useState();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
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
      : addMeal(title, image, setTitle, setImage, setMeals)
  }

  const handleEdit = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setMealId(_id);
  };

  // const uploadFileFromDisk = async e => {
  //   console.log(e.target.files[0]);
  //   const formData = new FormData();
  //   formData.append('image', e.target.files[0]);
  //   uploadFile(formData, setImage);
  // };

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

        {/* <UploadFile
          uploadFileFromDisk={uploadFileFromDisk}
        /> */}

        <button type="submit">
          {editing ? 'Edit' : 'Add'}
        </button>

        <button
          type="button"
          onClick={() => deleteAll(setMeals)}
        >
          Clear
        </button>
      </div>

      {
        meals?.map(meal =>
          <Meals
            key={meal._id}
            text={meal.title}
            // image={meal.image}
            handleEdit={() => handleEdit(meal._id, meal.title)}
            deleteMeal={() => deleteMeal(meal._id, setMeals)}
          />
        )
      }
    </form>
  );
}

export default App;
