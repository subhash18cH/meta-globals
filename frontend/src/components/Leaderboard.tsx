const Leaderboard = () => {

  interface UserStat {
    id: number;
    name: string;
    score: number;
    email: string;
    completedTasks: number;
    loginStreak: number;
    badges: number;
  }

  const dummyData: UserStat[] = [
    { id: 1, name: "Alice", score: 95, email: "alice3s@gmail.com", completedTasks: 20, loginStreak: 7, badges: 3 },
    { id: 2, name: "Bob", score: 90, email: "bob12@gmail.com", completedTasks: 18, loginStreak: 5, badges: 2 },
    { id: 3, name: "Charlie", score: 85, email: "charle23@gmail.com", completedTasks: 15, loginStreak: 4, badges: 1 },
    { id: 4, name: "David", score: 80, email: "david12w@gmail.com", completedTasks: 12, loginStreak: 3, badges: 1 },
    { id: 5, name: "Eve", score: 75, email: "eve2s@gmail.com", completedTasks: 10, loginStreak: 2, badges: 0 },
    { id: 6, name: "Frank", score: 72, email: "frank99@gmail.com", completedTasks: 9, loginStreak: 3, badges: 1 },
    { id: 7, name: "Grace", score: 68, email: "grace45@gmail.com", completedTasks: 8, loginStreak: 2, badges: 0 },
    { id: 8, name: "Hannah", score: 65, email: "hannah21@gmail.com", completedTasks: 7, loginStreak: 1, badges: 0 },
    { id: 9, name: "Ian", score: 62, email: "ian77@gmail.com", completedTasks: 6, loginStreak: 2, badges: 0 },
    { id: 10, name: "Jane", score: 60, email: "jane88@gmail.com", completedTasks: 5, loginStreak: 1, badges: 0 },

  ];
  
  return (
    <div className="mt-20  dark:bg-zinc-900 dark:text-white p-4 shadow-lg w-full overflow-x-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#5052ce]">Leaderboard</h2>
      </div>

      <table className="table-auto  w-full border-collapse bg-gray-50 dark:bg-zinc-800">

        <thead>
          <tr className="text-center border-gray-400 dark:bg-zinc-900">
            <th className="px-4  py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Score</th>
            <th className="px-4 py-2">Completed Tasks</th>
            <th className="px-4 py-2">Login Streak</th>
            <th className="px-4 py-2">Badges</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((user, index) => (
            <tr
              key={user.id}
              className=" text-center bg-white  dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-700"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.score}</td>
              <td className="px-4 py-2">{user.completedTasks}</td>
              <td className="px-4 py-2">{user.loginStreak}</td>
              <td className="px-4 py-2">{user.badges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;