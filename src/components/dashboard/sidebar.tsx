import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "../dotted-separator";
import Navigation from "./sidebar-navigation";

const Sidebar = () => {
    return (
        <aside className=" w-full h-full bg-neutral-100 p-4 ">
            <Link href='/'>
                <Image src='/logo.svg' alt="logo" width={100} height={48} />
            </Link>
            <DottedSeparator className="my-4" />
            <Navigation />
        </aside>
    )
}

export default Sidebar;