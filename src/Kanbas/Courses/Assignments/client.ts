import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api`;

// Update an assignment
export const updateAssignment = async (assignment: any) => {
    const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/assignments/${assignment._id}`, assignment);
    return response.data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
    await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/assignments/${assignmentId}`);
};
