import './productCard.css'



export const ProductCard = ({ data }) => {
    return (
        <div className="ProCont">
            <img src={data.image} alt={data.title} loading="lazy" />
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
            <h3 className="price-text">${data.price}</h3>
        </div>
    );
};

