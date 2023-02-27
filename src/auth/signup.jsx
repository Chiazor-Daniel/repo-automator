import { AiOutlineGithub } from "react-icons/ai"
import { DiGitCommit } from "react-icons/di"
import { Link } from "react-router-dom"
const SignUp = () => {
    return (
        // form for sign up 
        <form className="h4 py-4 flex px-10 login gap-12  flex-col justify-center items-center bg-white rounded-xl shadow-lg">
            <h1 className='text-3xl blue w-ful text-center cursor-pointer font-bold font-sans'>GIT<DiGitCommit className='inline-block mb-1' />HUB REP<AiOutlineGithub className='inline-block mb-1 lg:mb-2 text-center'/> <br />AUTOMATOR</h1>
            <div className="flex flex-col justify-center gap-4 w-full px-6">
                <h3 className="text-gray-500 text-lg font-bold text-left">Register</h3>
                <input type="email" placeholder="Full Name" className="login-focus w-full h-10 p-2 text-primary3 outline-none border-2 border-primary3 rounded-md" />
                <input type="email" placeholder="Email" className="login-focus w-full h-10 p-2 text-primary3 outline-none border-2 border-primary3 rounded-md" />
                <input type="text" placeholder="Password" className="login-focus w-full h-10 p-2 border-2 text-primary3 outline-none border-primary3 rounded-md" />
            </div>
                <Link to="/">
                <button className="blue-background text-white w-32 blue-hover3 h-8 px-2 rounded-full font-bold shadow-md">Submit</button>
                </Link>
        </form>
    )
}

export default SignUp;