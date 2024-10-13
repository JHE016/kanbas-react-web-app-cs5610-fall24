import { BsGripVertical } from "react-icons/bs";
import AssignmentControl from "./AssignmentControl";
import ControlButtons from "./ControlButtons";
import { PiNotePencil } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div id="wd-assignments" className="p-3">
            <AssignmentControl />
            <div id="wd-assignments-title" className="wd-title p-3 ps-1 bg-secondary-subtle d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="fw-bold fs-5">ASSIGNMENTS</span>
                </div>
                <ControlButtons />
            </div>
            <ul id="wd-assignment-list" className="list-group rounded-0">
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
                            <div className="d-flex align-items-start">
                                <BsGripVertical className="me-3 fs-3" />
                                <PiNotePencil className="me-3 fs-4 text-success" />
                                <div>
                                    <a className="wd-assignment-link"
                                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        style={{ color: "black", fontWeight: "bold", textDecoration: "none", fontSize: "20px" }}>
                                        {assignment.title}
                                    </a>
                                    <div>
                                        <span className="text-danger me-2"> {assignment.modules}</span> |
                                        <span className="text-dark fw-bold me-2"> Not available until</span>
                                        <span className="text-dark">{assignment.notAvailableUntil}</span> |
                                    </div>
                                    <div className="text-dark">
                                        <span className="fw-bold text-dark me-2">Due</span>
                                        {assignment.due} | {assignment.score}
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <LessonControlButtons />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
