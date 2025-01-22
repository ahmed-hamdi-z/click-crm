import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";


type ResponseType = InferResponseType<typeof client.api.dashboard.workspaces["$post"]>;
type RequestType = InferRequestType<typeof client.api.dashboard.workspaces["$post"]>["json"];

export const useCreateWorkspace = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (json) => {
            const response = await client.api.dashboard.workspaces["$post"]({ json });
            if(!response.ok) {
                throw new Error("Failed to create workspace");
            }
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Workspace Created")
            queryClient.invalidateQueries({ queryKey: ["workspaces"] });
        },
        onError: () => {
            toast.error("Faild to create workspace");
        },
    });
    return mutation;
};
