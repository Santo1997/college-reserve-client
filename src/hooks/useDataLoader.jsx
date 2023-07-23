import { useQuery } from "@tanstack/react-query";
import api from "../components/utilities/axiosAccess";

const useDataLoader = () => {
  const user = "hossain";

  const { refetch, data: clgData = [] } = useQuery({
    queryKey: ["cart", user],
    queryFn: async () => {
      const res = await api.get(`/getAllClg?user=${user}`);
      return res.data;
    },
  });

  return [clgData, refetch];
};

export default useDataLoader;
