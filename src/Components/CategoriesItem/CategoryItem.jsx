import './categoryItem.scss';

const CategoryItem = ({category}) => {
    const {imageUrl,type} = category;
    return(
        <div className="category-container">
            <div className='background-image' 
                style={{backgroundImage:`url(${imageUrl})`}}
            />
            <img src='' alt=''/>
            <div className='category-body-container'>
                <h2>{type}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )



}

export default CategoryItem