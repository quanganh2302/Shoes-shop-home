import { User } from "@/types";
import https from "@/axios";

export const createUser = async (
  user: User,
  setLoading: (loading: boolean) => void
): Promise<User> => {
  try {
    setLoading(true);
    const res = await https.post(`/api/users`, user);
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return Promise.reject(error);
  } finally {
    setLoading(false);
  }
};
