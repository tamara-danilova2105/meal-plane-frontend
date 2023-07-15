import axios from "axios";

const baseUrl = 'https://meal-plane.onrender.com';

export const getAllMeals = seMeals => {
    axios.get(`${baseUrl}`)
        .then(({ data }) => {
            seMeals(data)
        })
}

export const addMeal = (title, setTitle, setMeals) => {
    axios.post(`${baseUrl}/saveMeals`, { title })
        .then(data => {
            console.log('add');
            setTitle('');
            getAllMeals(setMeals);
        })
}

export const editMeal = (mealId, title, setMeals, setTitle, setEditing) => {
    axios.post(`${baseUrl}/editMeal`, { _id: mealId, title })
        .then(data => {
            console.log('edit');
            setTitle('');
            setEditing(false);
            getAllMeals(setMeals);
        })
}

export const deleteMeal = (_id, setMeals) => {
    axios.post(`${baseUrl}/deleteMeals`, { _id })
        .then(data => {
            console.log('delete');
            getAllMeals(setMeals);
        })
}