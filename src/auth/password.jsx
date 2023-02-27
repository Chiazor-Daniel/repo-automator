import { AiOutlineGithub } from "react-icons/ai"
import { DiGitCommit } from "react-icons/di"
// import { Link } from "react-router-dom"
import { useState } from "react"
import { PulseLoader } from "react-spinners"
const ForgetPassword = () => {
    const [reset, setReset] = useState(false)

    function handleReset() {
            setReset(true)
    }
    return (
        // form for forgot passowrd 
        <form className="h4 py-4 px-10 flex login gap-12  flex-col justify-center items-center bg-white rounded-xl shadow-lg">
            <h1 className='text-3xl blue w-ful text-center cursor-pointer font-bold font-sans'>GIT<DiGitCommit className='inline-block mb-1' />HUB REP<AiOutlineGithub className='inline-block mb-1 lg:mb-2 text-center' /> <br />AUTOMATOR</h1>
            <div className="flex flex-col justify-center gap-4 w-full px-6">
                <h3 className="text-gray-500 text-lg text-left">Forgot Password</h3>
                <input type="email" placeholder="Email" className="login-focus w-full h-10 p-2 text-primary3 outline-none border-2 border-primary3 rounded-md" />
            </div>
                {
                    reset ?
                        <button className="blue-background text-white w-32 blue-hover3 h-8 px-2 py-2 rounded-full font-bold shadow-md text-center"><PulseLoader className="h-full w-full" color="white" /></button> :
                        <button onClick={handleReset} className="blue-background text-white w-32 blue-hover3 h-8 px-2 rounded-full font-bold shadow-md">RESET</button>

                }
        </form>
    )
}

export default ForgetPassword;