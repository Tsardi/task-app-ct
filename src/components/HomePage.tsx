import { Col, Container } from "react-bootstrap";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import NavBar from "./NavBar";
// import TaskDashboard from "./TaskDashboard";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
        <NavBar />
        <h1>Task Management Dashboard</h1>
        <p>Here is where you can choose to log in or if you are already logged in, you can log out below.</p>
        {/* <TaskDashboard /> */}
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;
