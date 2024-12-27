import { protectRoute } from "@/features/auth/server/actions";
import { redirect } from "next/navigation";

import Sidebar from "@/components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const user = await protectRoute();
  if (!user) redirect("/login");
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px]">
          <div className="mx-auto max-w-screen-2xl h-full">
            {/* Navbar */}
            <main>{children}</main>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
