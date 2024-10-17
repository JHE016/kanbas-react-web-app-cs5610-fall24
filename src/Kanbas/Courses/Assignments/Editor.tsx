import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from 'react-router-dom';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    const assignment = assignments.find((assignment) => assignment._id === aid);

    const formatDate = (date: string | number | Date) => {
        if (!date) return ""; // If the date is null, undefined, or empty, return an empty string
        const parsedDate = new Date(date);
        return isNaN(parsedDate.getTime()) ? "" : parsedDate.toISOString().split('T')[0]; // Check if it's a valid date
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            {assignment && (
                <form>
                    <div className="mb-3">
                        <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="wd-name"
                            value={assignment.title}
                        />
                    </div>
                    <textarea
                        className="form-control"
                        id="wd-description"
                        rows={8}
                        value={assignment.description || "No description available"}
                    />
                    <br />

                    <div className="mb-4 row">
                        <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="wd-points"
                                value={assignment.score.split(' ')[0] || 100}
                            />
                        </div>
                    </div>

                    <div className="mb-4 row">
                        <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="wd-group" defaultValue="assignments">
                                <option value="assignments">ASSIGNMENTS</option>
                                <option value="quizzes">QUIZZES</option>
                                <option value="exams">EXAMS</option>
                                <option value="projects">PROJECTS</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 row">
                        <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="wd-display-grade-as" defaultValue="points">
                                <option value="percentage">PERCENTAGE</option>
                                <option value="points">POINTS</option>
                                <option value="letter">LETTER GRADE</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 row">
                        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                        <div className="col-sm-10 border border-secondary-subtle p-3 rounded-4">
                            <select className="form-control" id="wd-submission-type" defaultValue="online">
                                <option value="online">ONLINE</option>
                                <option value="in-person">IN-PERSON</option>
                            </select>
                            <br />
                            <div className="mb-4">
                                <div className="font fw-bold">Online Entry Options</div>
                                <div className='p-2'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                        <label className="form-check-label" htmlFor="wd-text-entry">
                                            Text Entry
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                        <label className="form-check-label" htmlFor="wd-website-url">
                                            Website URL
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                        <label className="form-check-label" htmlFor="wd-media-recordings">
                                            Media Recordings
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                        <label className="form-check-label" htmlFor="wd-student-annotation">
                                            Student Annotation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                        <label className="form-check-label" htmlFor="wd-file-upload">
                                            File Uploads
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 row">
                        <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign</label>
                        <div className="col-sm-10 border border-secondary-subtle p-3 rounded-4">
                            <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label fw-bold">Assign to</label>
                            <select className="form-control" id="wd-assign-to" defaultValue="everyone">
                                <option value="everyone">Everyone</option>
                            </select>
                            <br />
                            <div>
                                <label htmlFor="wd-due-date">Due</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="wd-due-date"
                                    value={formatDate(assignment.due) || "2024-07-13"} //
                                />
                                <div className="row mt-4">
                                    <div className="col-sm-6">
                                        <label htmlFor="wd-available-from">Available From</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="wd-available-from"
                                            value={formatDate(assignment.notAvailableUntil) || "2024-05-13"}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="wd-available-until">Until</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="wd-available-until"
                                            value={formatDate(assignment.due) || "2024-07-13"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col text-end">
                            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
                                Cancel
                            </Link>
                            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
                                Save
                            </Link>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
