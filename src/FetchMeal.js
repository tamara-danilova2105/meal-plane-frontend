import axios from "axios";

const baseUrl = {
    local: 'http://localhost:8000',
    server: 'https://meal-plane.onrender.com',
}

export const URL = baseUrl.local;

export const getAllMeals = seMeals => {
    axios.get(`${URL}/meals`)
        .then(({ data }) => {
            seMeals(data)
        });
}

export const addMeal = (title, image, setTitle, setImage, setMeals) => {
    axios.post(`${URL}/save-meal`, { title, image })
        .then(() => {
            setTitle('');
            setImage(null);
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

export const uploadFile = (formData, setImage) => {
    axios.post(`${URL}/upload`, formData)
        .then(({ data }) => {
            setImage(data.url);
        });
}