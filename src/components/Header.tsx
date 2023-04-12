import React, {FC} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {logoutAction} from "../store/reducers/authReducer";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header:FC = () => {
    const {userInfo} = useTypedSelector(state => state.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const Logout = (): void => {
        localStorage.removeItem('token');
        dispatch(logoutAction({
            isAuth: false,
            userInfo: null
        }))
        navigate('/login');
    }

    return(
        <>
            <div className="w-full">
                <div className="bg-purple-700flex-col h-screen p-3 bg-white shadow">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Welcome {userInfo?.name}</h2>
                        </div>
                        <div className="flex-1">
                            <Link to={"/cabinet"} className="flex items-center hover:underline p-2 space-x-3 rounded-md">
                                        <span>Personal cabinet</span>
                            </Link>
                                   <div className={"text-left p-2 border-t-2 border-gray-500"}>
                                        <ul className="p-2 rounded-md">
                                            <li> <Link className={"hover:underline"} to={"/"}>Clients list </Link></li>
                                            <li><Link className={"hover:underline"} to={"/clients/create"}>Add new client</Link></li>
                                        </ul>
                                   </div>

                            <div className={"text-left p-2 border-t-2 border-gray-500"}>
                                <ul className="p-2 rounded-md">
                                    <li> <Link className={"hover:underline"} to={"/tasks"}>Tasks list </Link></li>
                                    <li><Link className={"hover:underline"} to={"/tasks/create"}>Add new task</Link></li>
                                </ul>
                            </div>

                            <div className={"text-left p-2 border-t-2 border-gray-500"}>
                                <ul className="p-2 rounded-md">
                                    <li> <Link className={"hover:underline"} to={"/users"}>Users list </Link></li>
                                    <li><Link className={"hover:underline"} to={"/users/create"}>Add new user</Link></li>
                                </ul>
                            </div>

                            <div className={"text-left p-2 border-t-2 border-gray-500"}>
                                <ul className="p-2 rounded-md">
                                    <li> <Link className={"hover:underline"} to={"/leads"}>Leads list </Link></li>
                                    <li><Link className={"hover:underline"} to={"/leads/create"}>Add new lead</Link></li>
                                </ul>
                            </div>

                            <div className={"text-left p-2 border-t-2 border-b-2 border-gray-500"}>
                                <ul className="p-2 rounded-md">
                                    <li> <Link className={"hover:underline"} to={"/clients"}>Role settings </Link></li>
                                </ul>
                            </div>

                                    <button onClick={() => Logout()} className="flex items-center p-2 space-x-3 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        <span>Logout</span>
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;