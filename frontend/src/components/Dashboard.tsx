import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar ";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <Leaderboard />
      </div>
    </div>
  );
}
export default Dashboard
