import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const Products = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () =>{
    axios
    .get(`https://api.escuelajs.co/api/v1/products?offset=${index}&limit=12`)
    .then((res)=>{
        setItems((prevItems)=>[...prevItems,...res.data]);
        res.data.length > 0 ? setHasMore(true) : setHasMore(false)
    })
    .catch((err)=>console.log(err))
    setIndex((prevIndex)=> prevIndex+1);
  }
  // console.log(items);
  return (
    <InfiniteScroll
    dataLength={items.length}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<Loader/>}
    >
        <div className=" flex gap-10 flex-wrap justify-center mt-10">
            {
                items?.map((item,index)=>{
                    return <ProductCard data={item} key={index}/>
                })
            }
            
        </div>
    </InfiniteScroll>
  )
};

export default Products;
