import axios from "axios";
import { useState } from "react";

export default function AddProduct() {

    const [getPrudect, setPrudect] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: [],
    })


    const input = () => {
        try {
            axios.post('https://fakestoreapi.com/users', {
                title: getPrudect.title,
                price: getPrudect.price,
                description: getPrudect.description,
                category: getPrudect.category,
                image: getPrudect.image,

            })
                .then((res) => {
                    console.log(res);

                })
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>

            <div className="flex flex-col items-center gap-4">
                <div>
                    <p>Titel</p> <input value={getPrudect.title} onChange={(e) => setPrudect({ ...getPrudect, title: e.target.value })} type="text" />
                    <p>price</p><input value={getPrudect.price} onChange={(e) => setPrudect({ ...getPrudect, price: e.target.value })} type="text" />
                    <p>description</p><input value={getPrudect.description} onChange={(e) => setPrudect({ ...getPrudect, description: e.target.value })} type="text" />
                    <p>category</p><input value={getPrudect.category} onChange={(e) => setPrudect({ ...getPrudect, category: e.target.value })} type="text" />
                </div>
                <div>
                    <button onClick={input} className="border border-blue-700 h-10 w-20">SignUp</button>
                </div>
            </div>


        </>
    )
}
