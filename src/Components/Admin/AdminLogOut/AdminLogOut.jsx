import { useNavigate } from "react-router-dom";
import "./AdminLogOut.css";
import axios from "axios";
import { BASE_URL } from "../../../../config.js";

export default function AdminLogOut() {
    const navigate = useNavigate();

    // TODO - test logout functionality for consistency

    const handleLogOut = async () => {
        try {
            const response = await axios.post(
                `${BASE_URL}admin/logout`,
                {},
                {
                    withCredentials: true,
                },
            );
            if (response.status === 200) {
                navigate("/home");
            }
        } catch (error) {
            console.error("There was an error logging out:", error);
        }
    };

    return (
        <>
            <div className="admin-logout-wrapper">
                <button className="admin-logout-button" onClick={handleLogOut}>
                    Log Out Admin
                </button>
            </div>
        </>
    );
}
