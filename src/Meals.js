import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
// import { URL } from './FetchMeal'

export const Meals = ({ 
    text, 
    // image, 
    handleEdit, 
    deleteMeal 
}) => {
    return (
        <div className='container_meal'>
            <p>{text}</p>
            {/* {image &&
                <img src={`${URL}${image}`} alt="meal" />
            } */}
            <div>
                <AiFillEdit onClick={handleEdit} />
                <AiFillDelete onClick={deleteMeal} />
            </div>
        </div>
    )
}