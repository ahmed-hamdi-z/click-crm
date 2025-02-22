"use client";

// Components
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

// Authentication Layout Props
interface AuthLayoutProps {
    children: React.ReactNode;
}

// Main Layout For Authentication
const AuthLayout = ({ children }: AuthLayoutProps) => {

    const pathname = usePathname();
    const isLogin = pathname === "/login"

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image src="\logo.svg" width={100} height={50} alt="Logo" />

                    <Button asChild variant="secondary">
                        <Link href={isLogin ? "/register" : "/login"}>
                            {isLogin ? "Sign Up" : "Sign In"}
                        </Link>
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout;