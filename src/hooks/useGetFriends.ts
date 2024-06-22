import { Friend } from "@/pages/ratingPage/RatingPage";
import { useQuery } from "@tanstack/react-query";

export const useGetFriends = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["friends"],
    queryFn: (): Promise<Friend[]> => {
      return fetch("http://localhost:3000/friends").then((res) => res.json());
    },
  });

  return { data, isLoading, error };
};
