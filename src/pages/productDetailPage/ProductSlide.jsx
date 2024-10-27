import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../productsPage/products/Product";
import { useDispatch, useSelector } from "react-redux";
import { addProductsData } from "../../store/productsSlice";
import './ProductDetail.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlide() {
  const [display, setDisplay] = useState(true);
//   const [width, setWidth] = useState(90);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true
  };
  const [filteredData, setFilteredData] = useState([])
  const dispatch = useDispatch()
  const productsData = useSelector(state => state.products.products)
  const choosenId = useSelector(state => state.products.choosenCategory)
  

  useEffect(() => {
      fetch("http://localhost:5000/products")
      .then(response => response.json())   
      .then(data => {
          dispatch(addProductsData(data))
          setFilteredData(data)
          // setProducts(data)
      })
      .catch(error => console.error(error));
      // console.log(response);
      
  }, [])
  return (
    <div className="slider-container">
      {/* <h2> Resizable Collapsible </h2>
      <button className="button" onClick={() => setWidth(width + 100)}>
        {" "}
        increase{" "}
      </button>
      <button className="button" onClick={() => setWidth(width - 100)}>
        {" "}
        decrease{" "}
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
        {" "}
        toggle{" "}
      </button> */}
      <div
        style={{
            margin: "auto",
        //   width: width + "%",
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings}>
        {
                filteredData.map(item => {
                    return <Product product={item} key={item.id} />
                })
            }
        </Slider>
      </div>
    </div>
  );
}

export default ProductSlide;