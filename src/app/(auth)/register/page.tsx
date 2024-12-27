
// Components
import { RegisterCard } from "@/features/auth/components/register-card";
import { protectRoute } from "@/features/auth/server/actions";

import { redirect } from "next/navigation";

const Register = async () => {
       const user = await protectRoute();
        if (user) redirect('/');

    return <RegisterCard />
}

export default Register;