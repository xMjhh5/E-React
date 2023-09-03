import axios from "axios";
import { useState } from "react";

export default function Login() {


    const [getUserLogin , setUserLogin] = useState({
        username:'',
        password:''
    })

    
    const input = () => {
        try {
            axios.get('https://fakestoreapi.com/users')
            .then((res)=>{
                setUserLogin(res.data) 
            })
        } catch (error) {
            console.log(error);

        }

        // if (getUserLogin.username == ) {
            
        // }
      
    }
    return (
        <>

            <div className="flex flex-col items-center gap-4">
                <div>
                    <p>username</p> <input value={getUserLogin.username} onChange={(e) => setUserLogin({ ...getUserLogin, username: e.target.value })} type="text" />
                    <p>Password</p><input value={getUserLogin.password} onChange={(e) => setUserLogin({ ...getUserLogin, password: e.target.value })} type="text" />
                </div>
                <div>
                    <button onClick={input} className="border border-blue-700 h-10 w-20">SignUp</button>
                </div>
            </div>

        </>
    )
}


