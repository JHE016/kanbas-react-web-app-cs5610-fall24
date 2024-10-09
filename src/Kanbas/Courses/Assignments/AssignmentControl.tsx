import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControl() {
    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="input-group" style={{ width: "250px" }}>
                <span className="input-group-text bg-white border-end-0">
                    <CiSearch className="text-muted me-1 fs-5" />
                </span>
                <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search..."
                    aria-label="Search"
                />
            </div>
            <div>
                <button
                    id="wd-add-assignment-group"
                    className="btn bg-secondary-subtle text-black me-2 btn-outline-secondary-subtle"
                > 
                    <FaPlus className="me-1" />Group
                </button>
                <button
                    id="wd-add-assignment"
                    className="btn btn-danger text-white btn-outline-danger"
                >
                    <FaPlus className="me-1" />Assignment
                </button>
            </div>
        </div>
    );
}
