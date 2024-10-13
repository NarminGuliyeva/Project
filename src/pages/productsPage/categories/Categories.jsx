import React from 'react'
// import categoriesData from '../../../shared/constants/categories'
import { categoriesData } from '../../../shared/constants/categories';
import { Link } from 'react-router-dom';
import './Categories.css';


const Categories = () => {
    console.log(categoriesData);

    return (
        <div className="categories">
            <ul className="cat-common">
                {categoriesData.map((item) => (
                    <li className={item.code} key={item.id} >
                        <div className="img-cat">
                            <img src={item.img} alt="" />
                        </div>
                        <Link to='/'>{item.name}</Link>
                        {item.altCat &&
                            (<ul className='alt-cat'>
                                {item.altCat.map(altCat =>
                                    <li><Link to='/'>{altCat.name}</Link></li>
                                )}
                            </ul>)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories