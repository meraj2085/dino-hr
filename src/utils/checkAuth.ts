import { useEffect, useState } from "react";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const userLoggedIn = await isLoggedIn();
      if (!userLoggedIn) {
        router.push("/auth/login");
      }
      setIsUserLoading(false);
    };

    checkAuth();
  }, [router]);

  return isUserLoading;
};
