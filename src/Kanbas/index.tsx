import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import './style.css';
import { useEffect, useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import * as EnrollmentClient from"./Dashboard/client";
import { setEnrollments, enrollCourse, unenrollCourse } from "./Dashboard/reducer";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const enrollments = useSelector((state: any) => state.dashboard.enrollments);
    const [isDataReady, setIsDataReady] = useState(false);

    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            if (!courses || courses.length === 0) {
                console.warn("No courses found for the user.");
                return;
            }

            setCourses(courses);
            const enrollments = courses.map((course: any) => ({
                user: currentUser._id,
                course: course._id,
            }));
            dispatch(setEnrollments(enrollments)); // Update Redux state
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };
    
    const fetchAllCourses = async () => {
        try {
            const availableCourses = await courseClient.fetchAllCourses(); 
            if (!availableCourses || availableCourses.length === 0) {
                console.warn("No available courses found.");
                return;
            }
            setAllCourses(availableCourses);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        if (currentUser) {
            fetchCourses();
            fetchAllCourses();
        }
    }, [currentUser]);


    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", image: "/images/reactjs.png", description: "New Description",
    });

    const addNewCourse = async () => {
        try {
            // Create the new course
            const newCourse = await courseClient.createCourse(course);
            
            // Update both courses and allCourses lists
            setCourses(prev => [...prev, newCourse]);
            setAllCourses(prev => [...prev, newCourse]);

            // If the user is faculty, automatically create enrollment
            if (currentUser.role === "FACULTY") {
                const newEnrollment = await EnrollmentClient.enrollInCourse(currentUser._id, newCourse._id);
                
                // Update Redux state with new enrollment
                dispatch(enrollCourse({ 
                    userId: currentUser._id, 
                    courseId: newCourse._id 
                }));

                // Update enrollments list
                dispatch(setEnrollments([
                    ...enrollments,
                    { 
                        _id: newEnrollment._id, 
                        user: currentUser._id, 
                        course: newCourse._id 
                    }
                ]));
            }
            // Reset the course form
            setCourse({
                _id: Date.now().toString(),
                name: "New Course",
                number: "New Number",
                startDate: "2023-09-10",
                endDate: "2023-12-15",
                image: "/images/reactjs.png",
                description: "New Description"
            });

        } catch (error) {
            console.error("Error adding new course:", error);
        }
    };

    const deleteCourse = async (courseId: string) => {
        try {
            await courseClient.deleteCourse(courseId);
            
            setCourses(prev => prev.filter(course => course._id !== courseId));
            setAllCourses(prev => prev.filter(course => course._id !== courseId));
            
            dispatch(unenrollCourse({ 
                userId: currentUser._id, 
                courseId 
            }));
            
            const updatedEnrollments = enrollments.filter(
                (enrollment: any) => enrollment.course !== courseId
            );
            dispatch(setEnrollments(updatedEnrollments));
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };

    const updateCourse = async () => {
        try {
            await courseClient.updateCourse(course);
            setCourses(prev => prev.map(c => c._id === course._id ? course : c));
            setAllCourses(prev => prev.map(c => c._id === course._id ? course : c));
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    const handleEnrollToggle = async (courseId: string, isEnrolled: boolean) => {
        try {
            console.log("Attempting to toggle enrollment:", { 
                userId: currentUser._id, 
                courseId, 
                isEnrolled 
            });
            if (isEnrolled) {
                await EnrollmentClient.unenrollFromCourse(currentUser._id, courseId);
                dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    
                // Update local courses based on enrollments
                const updatedEnrollments = enrollments.filter(
                    (enrollment: any) => enrollment.course !== courseId
                );
                dispatch(setEnrollments(updatedEnrollments)); // Sync Redux state
                setCourses(courses.filter((course) => course._id !== courseId)); // Update local state
            } else {
                const newEnrollment = await EnrollmentClient.enrollInCourse(currentUser._id, courseId);
                console.log("Enrollment response:", newEnrollment);
                dispatch(enrollCourse({ userId: currentUser._id, courseId })); // Update Redux state
    
                // Update local courses based on enrollments
                const updatedEnrollments = [
                    ...enrollments,
                    { _id: newEnrollment._id, user: currentUser._id, course: courseId },
                ];
                dispatch(setEnrollments(updatedEnrollments)); // Sync Redux state
                setCourses([...courses, allCourses.find((course) => course._id === courseId)]); // Update local state
            }
        } catch (error) {
            console.error("Enrollment error:", error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            Promise.all([fetchCourses(), fetchAllCourses()]).then(() => setIsDataReady(true));
        }
    }, [currentUser]);

    return (
            <Session>
                <div id="wd-kanbas" className="kanbas-container">
                    <nav>
                        <KanbasNavigation />
                    </nav>
                    <div className="kanbas-content wd-main-content-offset p-3">
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={
                                <ProtectedRoute isDataReady={isDataReady}>
                                    <Dashboard
                                        courses={courses}
                                        course={course}
                                        allCourses={allCourses}
                                        setCourse={setCourse}
                                        addNewCourse={addNewCourse}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                        handleEnrollToggle={handleEnrollToggle} />
                                </ProtectedRoute>
                            } />
                            <Route path="/Courses/:cid/*" element={
                                <ProtectedRoute isDataReady={isDataReady}><Courses courses={courses} /></ProtectedRoute>} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </div>
                </div>
            </Session>
    );
}