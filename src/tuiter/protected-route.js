import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function ProtectedRoute({children}) {
    const { currentUser} = useSelector((state)=> state.user);
    if (!currentUser) {
        return <Navigate to="/tuiter/login" />;
    }
    return children;
}

export default ProtectedRoute;