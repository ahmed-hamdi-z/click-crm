import { UserButton } from "@/features/dashboard/auth/components/user-button";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-4 px-6">
      <div className="flex-col lg:flex hidden">
        <h1 className="text-2xl font-semibold">HOME</h1>
        <p className="text-muted-foreground">
          Monitor all your projects and tasks
        </p>
      </div>
      <MobileSidebar /> 
      <UserButton />
    </nav>
  );
};

export default Navbar;
