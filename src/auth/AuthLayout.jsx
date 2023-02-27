import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        // layout for login, sign up and forgot password 
        <div className="w-full auth h-full flex flex-col justify-center items-center py-24">
            <Outlet />
        </div>
    )
}

export default AuthLayout;