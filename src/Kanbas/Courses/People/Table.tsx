import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Wayne</span>
                        </td>
                        <td className="wd-login-id">001234562W</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-02</td>
                        <td className="wd-total-activity">09:15:30</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Steve</span>{" "}
                            <span className="wd-last-name">Rogers</span>
                        </td>
                        <td className="wd-login-id">001234563R</td>
                        <td className="wd-section">S103</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-03</td>
                        <td className="wd-total-activity">08:22:45</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Natasha</span>{" "}
                            <span className="wd-last-name">Romanoff</span>
                        </td>
                        <td className="wd-login-id">001234564R</td>
                        <td className="wd-section">S104</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-04</td>
                        <td className="wd-total-activity">07:11:25</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Thor</span>{" "}
                            <span className="wd-last-name">Odinson</span>
                        </td>
                        <td className="wd-login-id">001234565O</td>
                        <td className="wd-section">S105</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-05</td>
                        <td className="wd-total-activity">06:45:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Banner</span>
                        </td>
                        <td className="wd-login-id">001234566B</td>
                        <td className="wd-section">S106</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-06</td>
                        <td className="wd-total-activity">12:35:48</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Peter</span>{" "}
                            <span className="wd-last-name">Parker</span>
                        </td>
                        <td className="wd-login-id">001234567P</td>
                        <td className="wd-section">S107</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-07</td>
                        <td className="wd-total-activity">05:23:11</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Clint</span>{" "}
                            <span className="wd-last-name">Barton</span>
                        </td>
                        <td className="wd-login-id">001234568B</td>
                        <td className="wd-section">S108</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-08</td>
                        <td className="wd-total-activity">03:19:14</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
