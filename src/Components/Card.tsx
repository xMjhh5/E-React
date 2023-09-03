import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


interface Data {
    id: number,
    title: string,
    price: string,
    description: string,
    category: string,
    image: string,
    rating: []
}

export default function Card() {


    // arr = ['']
    const [getItems, setItems] = useState<Data[]>([])
    const [getCategory, setCategory] = useState<Data[]>([])

    useEffect(() => {
        try {
            axios.get('https://fakestoreapi.com/products')
                .then((res) => {
                    setItems(res.data)
                })
        } catch (error) {
            console.log(error);

        }
    }, [])
    const flag = false
    // const inputCata = () => {
    //      flag = true
    //         axios.get('https://fakestoreapi.com/products/category/jewelery')
    //         .then((res)=>{
    //             setCategory(res.data)
    //         })
    // }
    return (
        <>
          
            
            { flag ?   getCategory.map(item => (
                    <div className="flex flex-wrap gap-6 m-4 ">
                        <Link to={`/product/${item.id}`}>
                            <div className="flex h-auto w-72 bg-white m-5 justify-center p-3 ">
                                <div className="flex flex-col items-center gap-4 h-auto">
                                    <p >{item.title}</p>
                                    <img src={item.image} alt="" className="h-72  self-center" />
                                    <div className="flex gap-2">
                                        <p className="self-start p-4 cursor-pointer text-yellow-600 border border-yellow-600 rounded-lg">Add to Cart</p>
                                    </div>
                                    <p className="text-3xl">Price : {item.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
                :
                getItems.map(item => (
                    <div key={item.id} className="flex flex-wrap gap-6 m-4 ">
                        <Link to={`/product/${item.id}`}>
                            <div className="flex h-auto w-72 bg-white m-5 justify-center p-3 ">
                                <div className="flex flex-col items-center gap-4 h-auto">
                                    <p >{item.title}</p>
                                    <img src={item.image} alt="" className="h-72  self-center" />
                                    <div className="flex gap-2">
                                        <p className="self-start p-4 cursor-pointer text-yellow-600 border border-yellow-600 rounded-lg">Add to Cart</p>
                                    </div>
                                    <p className="text-3xl">Price : {item.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))



            }




        </>
    )
}

