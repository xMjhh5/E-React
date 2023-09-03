import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


interface Data {
  id: number,
  title: string,
  price: string,
  description: string,
  category: string,
  image: string,
  rating: []
}

export default function ProductDetails() {
  
  
  const { id } = useParams()
  const [getItem, setItem] = useState<Data[]>([])
  
  const cuorrantItem = getItem.find((e) => e.id == Number(id))
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`)
    .then((res) => {
      setItem(res.data)
    })
  },[])


  const deleteItem = ()=>{
    axios.delete(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      console.log(res);
      
    })
  }
  return (
    <>


      <div className="flex flex-wrap gap-6 m-4 ">
       
          <div className="flex h-auto w-72 bg-white m-5 justify-center p-3">
            <div className="flex flex-col items-center">
              <p >{cuorrantItem?.title}</p>
              <img src={cuorrantItem?.image} alt="" className="h-72  self-center" />
              <p className="self-start p-4">{cuorrantItem?.description}</p>
              <div className="flex gap-2">
              <p className="self-start p-4 cursor-pointer text-yellow-600 border border-yellow-600 rounded-lg">Add to Cart</p>
              <p className="self-start p-4 cursor-pointer text-red-600 border border-red-600 rounded-lg" onClick={deleteItem} >Delete</p>
              </div>
              <p className="text-3xl">Price : {cuorrantItem?.price}</p>
            </div>
            <hr />
          </div>
      </div>
      <div>


      </div>


    </>
  )
}
