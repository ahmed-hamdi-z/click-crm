// Components 
import { LoginCard } from "@/features/auth/components/login-card";
import { protectRoute } from "@/features/auth/server/actions";

import { redirect } from "next/navigation";

const Login = async () => {
    const user = await protectRoute();
    if (user) redirect('/');

    return  <LoginCard />
    
};

export default Login;