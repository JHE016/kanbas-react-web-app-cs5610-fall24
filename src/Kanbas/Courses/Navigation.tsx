import { Link, useLocation } from "react-router-dom";
import "../style.css";

export default function CoursesNavigation() {

    const location = useLocation(); 
    const isActive = (path: string): boolean => location.pathname.startsWith(path);

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/Home") ? "active" : "text-danger"}`}>Home</Link>
            <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/Modules") ? "active" : "text-danger"}`}>Modules</Link>
            <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/Piazza") ? "active" : "text-danger"}`}>Piazza</Link>
            <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/Zoom") ? "active" : "text-danger"}`}>Zoom</Link>
            <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/Assignments") ? "active" : "text-danger"}`}>Assignments</Link>
            <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/Quizzes") ? "active" : "text-danger"}`}>Quizzes</Link>
            <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/Grades") ? "active" : "text-danger"}`}>Grades</Link>
            <Link id="wd-course-people-link" to="/Kanbas/Courses/1234/People"
                className={`list-group-item border border-0 ${isActive("/Kanbas/Courses/1234/People") ? "active" : "text-danger"}`}>People</Link>
        </div>
    );
}