import { AiOutlineGithub } from "react-icons/ai"
import { DiGitCommit } from "react-icons/di"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        // form for login 
        <form className="h8 md:h4 py-4 flex login gap-12 flex-col justify-center items-center bg-white rounded-xl shadow-lg">
            <h1 className='text-3xl blue w-ful text-center cursor-pointer pt-2 font-bold font-sans'>GIT<DiGitCommit className='inline-block mb-1' />HUB REP<AiOutlineGithub className='inline-block mb-1 lg:mb-2 text-center' /> <br />AUTOMATOR</h1>
            <div className="flex flex-col justify-center gap-4 w-full px-10">
                <h3 className="text-gray-500 text-lg font-bold text-left">Login</h3>
                <input type="email" placeholder="Email" className="login-focus w-full h-10 p-2 text-primary3 outline-none border-2 border-primary3 rounded-md" />
                <input type="text" placeholder="Password" className="login-focus w-full h-10 p-2 border-2 text-primary3 outline-none border-primary3 rounded-md" />
            </div>
            <div className="flex justify-between w-full px-10">
                <Link to="/forgetpassword">
                    <p className="text-primary3 text-xs cursor-pointer password">Forget password ?</p>
                </Link>
                <Link to="/dashboard">
                    <button className="blue-background text-white w-32 blue-hover3 h-8 px-2 rounded-full font-bold shadow-md">Login</button>
                </Link>
            </div>
            <Link to="/signup">
                <button className="blue-background text-white w-32 blue-hover3 h-8 px-2 rounded-full font-bold shadow-md">Register</button>
            </Link>
        </form>
    )
}

export default Login;