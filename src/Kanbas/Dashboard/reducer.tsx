import { createSlice } from "@reduxjs/toolkit";
import coursesData from "../Database/courses.json";
import enrollmentsData from "../Database/enrollments.json";

const initialState = {
    courses: coursesData,
    enrollments: enrollmentsData,
    currentUser: {}, 
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        enrollCourse: (state, action) => {
            const { userId, courseId } = action.payload;

            const existingEnrollment = state.enrollments.find(
                (enrollment) => enrollment.user === userId && enrollment.course === courseId
            );

            if (!existingEnrollment) {
                const highestId = state.enrollments.reduce((maxId, enrollment) => {
                    const idNumber = parseInt(enrollment._id, 10);
                    return idNumber > maxId ? idNumber : maxId;
                }, 0);

                const newId = (highestId + 1).toString();

                state.enrollments.push({
                    _id: newId,
                    user: userId,
                    course: courseId
                });
            }
        },
        unenrollCourse: (state, action) => {
            const { userId, courseId } = action.payload;
            state.enrollments = state.enrollments.filter(
                (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
            );
        },
    }
});

export const { enrollCourse, unenrollCourse } = dashboardSlice.actions;
export default dashboardSlice.reducer;
