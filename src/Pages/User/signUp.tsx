import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export default function SignUp() {

    const navigate =  useNavigate()

    const [getUser, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })


    const input = () => {
        try {
            axios.post('https://fakestoreapi.com/users', {
                username:getUser.username,
                email:getUser.email,
                password:getUser.password,
            })
            .then((res)=>{
                console.log(res);
                
            })
        } catch (error) {
            console.log(error);

        }
        localStorage.setItem('username',getUser.username)
        localStorage.setItem('email',getUser.email)
        localStorage.setItem('password',getUser.password)

        navigate('/login')
    }
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <div>
                    <p>username</p> <input value={getUser.username} onChange={(e)=> setUser({...getUser,username:e.target.value})} type="text" />
                    <p>Email</p><input value={getUser.email} onChange={(e)=> setUser({...getUser,email:e.target.value})} type="text" />
                    <p>Password</p><input value={getUser.password} onChange={(e)=> setUser({...getUser,password:e.target.value})} type="text" />
                </div>
                     <div>
                     <button onClick={input} className="border border-blue-700 h-10 w-20">SignUp</button> 
                    </div>   
            </div>

        </>
    )
}
