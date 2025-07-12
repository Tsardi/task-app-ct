import PageLayout from "./PageLayout";
import TaskDashboard from "./TaskDashboard";

const ProtectedPage: React.FC = () =>{
    return(
        <PageLayout>
            <h2>Protected Page</h2>
            <h3 className="Secret">Here is where you can add private tasks. </h3>
            <p>Keep it Secret, Keep it Safe...</p>
            <TaskDashboard />
        </PageLayout>
    )
}
export default ProtectedPage;
