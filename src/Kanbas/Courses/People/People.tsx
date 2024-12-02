import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import * as client from "../client";

function People() {
    const [users, setUsers] = useState<any[]>([]);
    const { cid } = useParams<{ cid: string }>();
    
    const fetchUsers = async () => {
        if (!cid) {
            console.error("No course ID provided");
            return;
        }
        try {
            const users = await client.findUsersForCourse(cid);
            setUsers(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]);
        }
    };

    useEffect(() => {
        if (cid) {
            fetchUsers();
        }
    }, [cid]);

    return (
        <div>
            <PeopleTable users={users} />
        </div>
    );
}

export default People;