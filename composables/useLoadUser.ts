import { USER_URL } from "@/constants/urls";
import { type IUser, type IUserName, isUserName } from "@/types/user";

export default function useLoadUser() {
  const isUserLoading = ref(true);
  const userInitials = ref("");

  const fetchUser = async () => {
    const { data: userName } = await useFetch(USER_URL, {
      transform: (user: { data: IUser }) => {
        return {
          first_name: user.data.first_name,
          last_name: user.data.last_name,
        } as IUserName;
      },
    });

    if (isUserName(userName.value)) {
      isUserLoading.value = false;
      userInitials.value = `${userName.value.last_name[0]}${userName.value.first_name[0]}`;
    }
  };

  return {
    isUserLoading,
    userInitials,
    fetchUser,
  };
}
