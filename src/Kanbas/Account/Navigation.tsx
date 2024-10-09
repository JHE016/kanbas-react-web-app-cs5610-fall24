import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const location = useLocation(); 
    const isActive = (path: string): boolean => location.pathname.startsWith(path);
    
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link to={`/Kanbas/Account/Signin`} 
            className={`list-group-item border border-0 mb-2 ${isActive("/Kanbas/Account/Signin") ? "active" : "text-danger"}`}> Signin </Link>
            <Link to={`/Kanbas/Account/Signup`} 
            className={`list-group-item border border-0 mb-2 ${isActive("/Kanbas/Account/Signup") ? "active" : "text-danger"}`}> Signup </Link>
            <Link to={`/Kanbas/Account/Profile`} 
            className={`list-group-item border border-0 mb-2 ${isActive("/Kanbas/Account/Profile") ? "active" : "text-danger"}`}> Profile </Link>
        </div>
    );
}
