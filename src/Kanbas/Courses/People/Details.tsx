import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "../../Account/client";
export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [editingName, setEditingName] = useState(false);
    const [editingEmail, setEditingEmail] = useState(false);
    const [editingRole, setEditingRole] = useState(false);

    const saveUser = async () => {
        const updatedUser = { ...user };
        if (editingName) {
            const [firstName, lastName] = name.split(" ");
            updatedUser.firstName = firstName;
            updatedUser.lastName = lastName;
        }
        if (editingEmail) {
            updatedUser.email = email;
        }
        if (editingRole) {
            updatedUser.role = role;
        }

        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditingName(false);
        setEditingEmail(false);
        setEditingRole(false);
    };
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        navigate(-1);
    };
    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setName(`${user.firstName} ${user.lastName}`);
        setEmail(user.email);
        setRole(user.role);
    };

    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
            <div className="text-danger fs-4 wd-name">
                {!editingName && (
                    <FaPencil onClick={() => setEditingName(true)}
                        className="float-end fs-5 mt-2 wd-edit" />)}
                {editingName && (
                    <FaCheck onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 wd-save" />)}
                {!editingName && (
                    <div className="wd-name"
                        onClick={() => setEditingName(true)}>
                        {user.firstName} {user.lastName}</div>)}
                {user && editingName && (
                    <input className="form-control w-50 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveUser(); }
                        }} />)}
            </div>
            <b>Email:</b>
            {!editingEmail && (
                <FaPencil
                    onClick={() => setEditingEmail(true)}
                    className="float-end fs-5 mt-2 wd-edit"
                />
            )}
            {editingEmail && (
                <FaCheck
                    onClick={() => saveUser()}
                    className="float-end fs-5 mt-2 me-2 wd-save"
                />
            )}
            {!editingEmail && (
                <div className="wd-email" onClick={() => setEditingEmail(true)}>
                    {user.email}
                </div>
            )}
            {editingEmail && (
                <input
                    type="email"
                    className="form-control w-50 wd-edit-email"
                    defaultValue={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            saveUser();
                        }
                    }}
                />
            )}
            <b>Role:</b>
            {!editingRole && (
                <FaPencil
                    onClick={() => setEditingRole(true)}
                    className="float-end fs-5 mt-2 wd-edit"
                />
            )}
            {editingRole && (
                <FaCheck
                    onClick={() => saveUser()}
                    className="float-end fs-5 mt-2 me-2 wd-save"
                />
            )}
            {!editingRole && (
                <div className="wd-role" onClick={() => setEditingRole(true)}>
                    {user.role}
                </div>
            )}
            {editingRole && (
                <select
                    className="form-control w-50 wd-edit-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            saveUser();
                        }
                    }}
                >
                    <option value="STUDENT">STUDENT</option>
                    <option value="FACULTY">FACULTY</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="USER">USER</option>
                </select>
            )}
            <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
            <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
            <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
            <hr />
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
            <button onClick={() => navigate(-1)}
                className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
        </div>);
}

