import { redirect } from "next/navigation";

import { protectRoute } from "@/features/dashboard/auth/actions";
import { CreateWorkspaceForm } from "@/features/dashboard/workspaces/components/create-workspace-form";

import DashboardLayout from "../layout";


const Dashboard = async () => {

  const user = await protectRoute();

  if(!user) redirect('/login');
  
  return (
      <DashboardLayout>
        <div className="h-full bg-neutral-500 p-4">
           <CreateWorkspaceForm />
        </div>
      </DashboardLayout>

  );
}

export default Dashboard; 
