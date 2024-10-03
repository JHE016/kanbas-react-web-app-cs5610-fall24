import { BsGripVertical } from "react-icons/bs";
import AssignmentControl from "./AssignmentControl";
import ControlButtons from "./ControlButtons";
import { PiNotePencil } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                        <BsGripVertical className="me-3 fs-3" />
                        <PiNotePencil className="me-3 fs-4 text-success" />
                        <div>
                            {/* <h5 className="fw-bold mb-1">A1</h5> */}
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123"
                                style={{ color: "black", fontWeight: "bold", textDecoration: "none", fontSize: "20px" }}>
                                A1
                            </a>
                            <div>
                                <span className="text-danger me-2"> Multiple Modules</span> |
                                <span className="text-dark fw-bold me-2"> Not available until</span>
                                <span className="text-dark">May 6 at 12:00am</span> |
                            </div>
                            <div className="text-dark">
                                <span className="fw-bold text-dark me-2">Due</span>
                                May 13 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <LessonControlButtons />
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                        <BsGripVertical className="me-3 fs-3" />
                        <PiNotePencil className="me-3 fs-4 text-success" />
                        <div>
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123"
                                style={{ color: "black", fontWeight: "bold", textDecoration: "none", fontSize: "20px" }}>
                                A2
                            </a>
                            <div>
                                <span className="text-danger me-2"> Multiple Modules</span> |
                                <span className="text-dark fw-bold me-2"> Not available until</span>
                                <span className="text-dark">June 6 at 12:00am</span> |
                            </div>
                            <div className="text-dark">
                                <span className="fw-bold text-dark me-2">Due</span>
                                June 13 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <LessonControlButtons />
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                        <BsGripVertical className="me-3 fs-3" />
                        <PiNotePencil className="me-3 fs-4 text-success" />
                        <div>
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123"
                                style={{ color: "black", fontWeight: "bold", textDecoration: "none", fontSize: "20px" }}>
                                A3
                            </a>
                            <div>
                                <span className="text-danger me-2"> Multiple Modules</span> |
                                <span className="text-dark fw-bold me-2"> Not available until</span>
                                <span className="text-dark">July 6 at 12:00am</span> |
                            </div>
                            <div className="text-dark">
                                <span className="fw-bold text-dark me-2">Due</span>
                                July 13 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <LessonControlButtons />
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                        <BsGripVertical className="me-3 fs-3" />
                        <PiNotePencil className="me-3 fs-4 text-success" />
                        <div>
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123"
                                style={{ color: "black", fontWeight: "bold", textDecoration: "none", fontSize: "20px" }}>
                                A4
                            </a>
                            <div>
                                <span className="text-danger me-2"> Multiple Modules</span> |
                                <span className="text-dark fw-bold me-2"> Not available until</span>
                                <span className="text-dark">August 6 at 12:00am</span> |
                            </div>
                            <div className="text-dark">
                                <span className="fw-bold text-dark me-2">Due</span>
                                August 13 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <LessonControlButtons />
                    </div>
                </li>
            </ul>
        </div>
    );
}