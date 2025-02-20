import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSession } from "../lib/services/api.js";
import { SESSIONS } from "./useSessions.js";

const useDeleteSession = (sessionId) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: () => deleteSession(sessionId),
    onSuccess: () => {
      queryClient.setQueryData([SESSIONS], (cache) =>
        cache.filter((session) => session._id !== sessionId),
      );
    },
  });

  return { deleteSession: mutate, ...rest };
};

export default useDeleteSession;
