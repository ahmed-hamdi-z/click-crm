"use client";

import { Loader } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { DottedSeparator } from "./dotted-separator";

import { useLogout } from "@/features/auth/api/use-logout";
import { useCurrent } from "@/features/auth/api/use-current";

export const UserButton = () => {
    const { data: user, isLoading } = useCurrent();

    if (isLoading) {
        return (
            <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border border-neutral-300">
                <Loader className="size-4 animate-spin text-muted-foreground" />
            </div>
        )
    }

    return (
            <Avatar>
                <AvatarFallback>
                    <AvatarImage>
                        
                    </AvatarImage>
                </AvatarFallback>
            </Avatar>
            )
}