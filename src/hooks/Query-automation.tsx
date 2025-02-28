import { getallAutomation } from "@/actions/automations";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomation = () => {
    return useQuery({
      queryKey: ["user-automations"],
      queryFn: getallAutomation,
      select: (data) => data || { status: 0 }, // Ensure data is always defined
    });
  };
  