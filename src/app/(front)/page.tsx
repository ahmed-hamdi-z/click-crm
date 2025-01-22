import { redirect } from "next/navigation";

import { protectRoute } from "@/features/dashboard/auth/actions";


const Home = async () => {

  const user = await protectRoute();

  if(!user) redirect('/login');
  
  return (
    <div>
     front
    </div>
  );
}

export default Home;
