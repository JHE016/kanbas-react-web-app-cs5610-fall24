export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> <br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
                your web application running on Netlify. The landing page should include
                the following: Your full name and section Links to each of the lab assignments
                Link to the Kanbas applicaton Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                {/* Complete on your own */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="quizzes">QUIZZES</option>
                            <option value="exams">EXAMS</option>
                            <option value="projects">PROJECTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="assignments">Percentage</option>
                            <option value="points">Points</option>
                            <option value="letter">Letter Grade</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="online">Online</option>
                            <option value="in-person">In-person</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <label>Online Entry Options</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-text-entry" /> Text Entry<br />
                        <input type="checkbox" name="online-entry-options" id="wd-website-url" /> Website URL<br />
                        <input type="checkbox" name="online-entry-options" id="wd-media-recordings" /> Media Recordings<br />
                        <input type="checkbox" name="online-entry-options" id="wd-student-annotation" /> Student Annotation<br />
                        <input type="checkbox" name="online-entry-options" id="wd-file-upload" /> File Uploads <br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label> <br />
                        <select id="wd-assign-to">
                            <option value="everyone">Everyone</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label> <br />
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <td>
                            <label htmlFor="wd-available-from">Available From</label> <br />
                            <input type="date" id="wd-available-from" value="2024-05-06" />
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label> <br />
                            <input type="date" id="wd-available-until" value="2024-05-20" />
                        </td>
                    </td>
                </tr>
            </table>
            <hr />
            <table width="100%">
                <tr>
                    <td align="right">
                        <button>Cancel</button>&nbsp;&nbsp;
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}