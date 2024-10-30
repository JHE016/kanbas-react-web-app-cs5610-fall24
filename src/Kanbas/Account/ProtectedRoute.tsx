import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.dashboard.enrollments);
  const { cid } = useParams<{ cid: string }>();

  if (!currentUser) {
    // Redirect to Sign-in if user is not signed in
    return <Navigate to="/Kanbas/Account/Signin" />;
}

// Check if this is a course route and verify enrollment
if (cid) {
    const enrolledCourseIds = new Set(
        enrollments
            .filter((enrollment: any) => enrollment.user === currentUser._id)
            .map((enrollment: any) => enrollment.course)
    );

    if (!enrolledCourseIds.has(cid)) {
        return <Navigate to="/Kanbas/Dashboard"/>;
    }
}

return children;

}
