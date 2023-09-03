import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Header from "../Components/Header";

export default function Home() {
    return (
        <>
            <div className="flex items-center p-3 w-full bg-slate-700 h-10 text-white">
                <div className="flex justify-around w-4/12">
                    <p>All</p>
                    <p>Today Deals</p>
                    <p>Customer Service</p>
                    <p>Registry</p>
                    <p>Gift Card</p>
                    <Link to='/addProduct'>
                    <p className="border ">Add Product</p>
                    </Link>
                </div>
            </div>

            <div className="h-60">
            <Header></Header>
            </div>
            <div className="flex flex-wrap justify-center w-full ">
                <Card></Card>
            </div>

        </>
    )
}
