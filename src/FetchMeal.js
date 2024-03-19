import axios from "axios";

const baseUrl = {
    local: 'http://localhost:8000',
    server: 'https://meal-plane.onrender.com',
}

const URL = baseUrl.server;

export const getAllMeals = seMeals => {
    axios.get(`${URL}/meals`)
        .then(({ data }) => {
            console.log(data);
            seMeals(data)
        });
}

export const addMeal = (title, setTitle, setMeals) => {
    axios.post(`${URL}/save-meal`, { title })
        .then(() => {
            setTitle('');
            getAllMeals(setMeals);
        });
}

export const editMeal = (mealId, title, setMeals, setTitle, setEditing) => {
    axios.post(`${URL}/edit-meal`, { _id: mealId, title })
        .then(() => {
            setTitle('');
            setEditing(false);
            getAllMeals(setMeals);
        });
}

export const deleteMeal = (_id, setMeals) => {
    axios.post(`${URL}/delete-meal`, { _id })
        .then(() => {
            getAllMeals(setMeals);
        });
}

export const deleteAll = setMeals => {
    axios.post(`${URL}/delete-all`)
        .then(() => {
            getAllMeals(setMeals);
        });
}