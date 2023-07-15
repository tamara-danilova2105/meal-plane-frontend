import axios from "axios"

export const getAllMeals = seMeals => {
    axios.get('http://localhost:8000/')
        .then(({ data }) => {
            seMeals(data)
        })
}

export const addMeal = (title, setTitle, setMeals) => {
    axios.post('http://localhost:8000/saveMeals', { title })
        .then(data => {
            console.log('add');
            setTitle('');
            getAllMeals(setMeals);
        })
}

export const editMeal = (mealId, title, setMeals, setTitle, setEditing) => {
    axios.post('http://localhost:8000/editMeal', { _id: mealId, title })
        .then(data => {
            console.log('edit');
            setTitle('');
            setEditing(false);
            getAllMeals(setMeals);
        })
}

export const deleteMeal = (_id, setMeals) => {
    axios.post('http://localhost:8000/deleteMeals', { _id })
        .then(data => {
            console.log('delete');
            getAllMeals(setMeals);
        })
}