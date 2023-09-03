import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>

            <div className="bg-black w-full h-16 ">
                <div className="flex  justify-around items-center h-full text-white">
                    <Link to='/'>
                    <img className="h-16 w-32" src='https://i0.wp.com/www.fontshut.com/wp-content/uploads/2023/02/Amazon-Logo-Font-1-scaled-1.jpg?fit=2560%2C1578&ssl=1'></img>

                    </Link>
                    <div className="flex flex-col">
                        <p className="text-xs">Deliver to</p>
                        <p>& Saudi arabia</p>
                    </div>

                    <input type="text" placeholder="Search Amazon" className="w-6/12 p-2 rounded" />

                    <p>EN</p>
                    <Link to='/signUp'>
                    <div className="flex flex-col">
                        <p className="text-xs">hello Sign in</p>
                        <p>Account & Lists</p>
                    </div>
                    </Link>
                    <div className="flex flex-col">
                        <p className="text-xs">Returns</p>
                        <p>& Orders</p>
                    </div>
                    <p className="text-3xl">Card</p>
                </div>
            </div>


        </>
    )
}
