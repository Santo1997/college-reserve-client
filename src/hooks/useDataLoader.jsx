import { useQuery } from "@tanstack/react-query";
import api from "../components/utilities/axiosAccess";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const useDataLoader = (path) => {
  const { user } = useContext(AuthContext);

  const { refetch, data: infoData = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await api.get(`/${path}?user=${user?.email}`);
      return res.data;
    },
  });

  return [infoData, refetch];
};

export default useDataLoader;
