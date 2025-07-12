import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import { Col } from "react-bootstrap";
import TaskDashboard from "./TaskDashboard";

const ProfilePage: React.FC = () =>{

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    if(!isAuthenticated){
        return <div>Not authenticated</div>
    }

    if(!user){
        return <div>No user profile</div>
    }

    getAccessTokenSilently().then(token => console.log('token', token))

    return(
        <PageLayout>
            <h2>Profile Page</h2>
            <Col>
                {user?.picture && <img src={user.picture} alt={user.name} className="Profile-img" />}
                <h3 className="User-name">{user.name}</h3>
                <div>
                    <TaskDashboard />
                </div>
            </Col>
        </PageLayout>
    )
}

export default ProfilePage;