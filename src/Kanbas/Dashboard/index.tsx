import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/courses/course1.jpg" alt="coursr1" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5100/Home">
                            CS5100 Full Stack Software Developement
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software Developement
                        </p>
                        <Link to="/Kanbas/Courses/5100/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/courses/course2.jpg" alt="coursr2" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5200/Home">
                            CS5200 Database Management
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Database Management
                        </p>
                        <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/courses/course3.jpg" alt="coursr3" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5300/Home">
                            CS5300 CS Foundations
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Computer Science Foundations
                        </p>
                        <Link to="/Kanbas/Courses/5300/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/courses/course4.jpg" alt="coursr4" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5400/Home">
                            CS5400 Discrete Structures
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Discrete Structures
                        </p>
                        <Link to="/Kanbas/Courses/5400/Home"> Go </Link>
                    </div>
                </div>
                 <div className="wd-dashboard-course">
                    <img src="/images/courses/course5.jpg" alt="coursr5" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5500/Home">
                            CS5500 Object-oriented Design
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Object-oriented Design
                        </p>
                        <Link to="/Kanbas/Courses/5500/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/courses/course6.jpg" alt="coursr6" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5600/Home">
                            CS5600 Computer Systems
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Computer Systems
                        </p>
                        <Link to="/Kanbas/Courses/5600/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/courses/course7.jpg" alt="coursr7" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5700/Home">
                            CS5700 Machine Learning
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Machine Learning
                        </p>
                        <Link to="/Kanbas/Courses/5700/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/courses/course8.jpg" alt="coursr8" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5800/Home">
                            CS5800 Algorithms
                        </Link>
                        <p className="wd-dashboard-course-title">
                           Algorithms
                        </p>
                        <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
