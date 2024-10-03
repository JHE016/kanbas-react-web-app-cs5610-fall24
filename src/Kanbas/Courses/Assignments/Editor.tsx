import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor " className="container mt-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input type="text" className="form-control" id="wd-name" value="A1" />
                </div>

                <textarea
                    className="form-control"
                    id="wd-description"
                    rows={12}
                    value={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
                    readOnly
                />
                <br />

                <div className="mb-4 row">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="wd-points" value="100" />
                    </div>
                </div>

                <div className="mb-4 row">
                    <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="wd-group">
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
                        <select className="form-control" id="wd-display-grade-as">
                            <option value="percentage">PERCENTAGE</option>
                            <option value="points">POINTS</option>
                            <option value="letter">LETTER GRADE</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 row">
                    <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                    <div className="col-sm-10 border border-secondary-subtle p-3 rounded-4">
                        <select className="form-control" id="wd-submission-type">
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
                        <select className="form-control" id="wd-assign-to">
                            <option value="everyone">Everyone</option>
                        </select>
                        <br />
                        <div>
                            <label htmlFor="wd-due-date">Due</label>
                            <input type="date" className="form-control" id="wd-due-date" value="2024-05-13" />
                            <div className="row mt-4">
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-from">Available From</label>
                                    <input type="date" className="form-control" id="wd-available-from" value="2024-05-06" />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-until">Until</label>
                                    <input type="date" className="form-control" id="wd-available-until" value="2024-05-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col text-end">
                        <button type="button" className="btn btn-secondary me-2">Cancel</button>
                        <button type="submit" className="btn btn-danger">Save</button>
                    </div>
                </div>

            </form>
        </div>
    );
}