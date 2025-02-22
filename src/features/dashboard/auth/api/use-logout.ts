import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.dashboard.auth.logout["$post"]>;

export const useLogout = () => {

    const router = useRouter();

    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error>({
        mutationFn: async () => {
            const response = await client.api.dashboard.auth.logout["$post"]();
            if(!response.ok) {
                throw new Error("Failed to Logout");
            }
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Logged out");
            router.refresh();
            queryClient.invalidateQueries({ queryKey: ["current"] });
        },
        onError: () => {
            toast.error("Failed to log out");
        }
    });
    return mutation;
};
