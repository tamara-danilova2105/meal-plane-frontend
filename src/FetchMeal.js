import axios from "axios";

const baseUrl = {
    local: 'http://localhost:8000',
    server: 'https://meal-plane.onrender.com',
}

const URL = baseUrl.server;

export const getAllMeals = seMeals => {
    axios.get(`${URL}`)
        .then(({ data }) => {
            console.log(data);
            seMeals(data)
        })
}

export const addMeal = (title, setTitle, setMeals) => {
    axios.post(`${URL}/saveMeals`, { title })
        .then(() => {
            setTitle('');
            getAllMeals(setMeals);
        })
}

export const editMeal = (mealId, title, setMeals, setTitle, setEditing) => {
    axios.post(`${URL}/editMeal`, { _id: mealId, title })
        .then(() => {
            setTitle('');
            setEditing(false);
            getAllMeals(setMeals);
        })
}

export const deleteMeal = (_id, setMeals) => {
    axios.post(`${URL}/deleteMeals`, { _id })
        .then(() => {
            getAllMeals(setMeals);
        })
}