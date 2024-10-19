import React from 'react'
// import categoriesData from '../../../shared/constants/categories'
import { categoriesData } from '../../../shared/constants/categories';
import { Link, useNavigate } from 'react-router-dom';
import './Categories.css';
import { useDispatch } from 'react-redux';
import { setChooseCategory } from '../../../store/productsSlice';


const Categories = () => {
    console.log(categoriesData);
    // const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChooseCategory = (id) => {
        // debugger
        dispatch(setChooseCategory(id))
        // navigate()
    }
    return (
        <div className="categories">
            <ul className="cat-common">
                {categoriesData.map((item) => (
                    <li className={item.code} key={item.id} onClick={() => item.catId && handleChooseCategory(item.catId)}>
                        <div className="img-cat">
                            <img src={item.img} alt="" />
                        </div>
                        <span>{item.name}</span>
                        {item.altCat &&
                            (<ul className='alt-cat'>
                                {item.altCat?.map(altCategory => (
                                    <li key={altCategory.catId} onClick={() => handleChooseCategory(altCategory.catId)}>{altCategory.name}</li>
                                    // <li key={altCategory.catId}><Link to='/'>{altCategory.name}</Link></li>
                                ))}
                            </ul>
                            )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories