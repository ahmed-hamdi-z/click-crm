import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.dashboard.auth.sginup["$post"]>;
type RequestType = InferRequestType<typeof client.api.dashboard.auth.sginup["$post"]>["json"];

export const useRegister = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (json) => {
            const response = await client.api.dashboard.auth.sginup["$post"]({ json });
                if(!response.ok) {
                    throw new Error("Failed to register");
                }

            return await response.json();
        },
        onSuccess: () => {
            toast.success("Registered");
            router.refresh();
            queryClient.invalidateQueries({ queryKey: ["current"] });
        },
        onError: () => {
            toast.error("Failed to register");
        }
    });
    return mutation;
};
