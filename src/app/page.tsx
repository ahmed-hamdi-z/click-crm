import { protectRoute } from "@/features/dashboard/auth/actions";

import Dashboard from "./(dashboard)/dashboard/page";

import Front from "./(front)/front/page";

const Home = async () => {
  const user = await protectRoute();

  return <div>{user ? <Dashboard /> : <Front />}</div>;
};

export default Home;
