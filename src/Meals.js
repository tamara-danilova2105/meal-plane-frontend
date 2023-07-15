import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

export const Meals = ({ text, handleEdit, deleteMeal }) => {
    return (
        <div className='container_meal'>
            <p>{text}</p>
            <div>
                <AiFillEdit onClick={handleEdit} />
                <AiFillDelete onClick={deleteMeal} />
            </div>
        </div>
    )
}