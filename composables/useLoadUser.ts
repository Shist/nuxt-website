import { USER_URL } from "@/constants/urls";
import { type IUser, type IUserIconData, isUserIconData } from "@/types/user";

export default function useLoadUser() {
  const userInitials = ref("");
  const userAvatarSrc = ref<string | undefined>(undefined);
  const isError = ref(false);

  const fetchUser = async () => {
    const { data: userIconData } = await useFetch(USER_URL, {
      transform: (user: { data: IUser }) => {
        return {
          first_name: user.data.first_name,
          last_name: user.data.last_name,
          avatar: user.data.avatar,
        } as IUserIconData;
      },
    });

    if (isUserIconData(userIconData.value)) {
      userInitials.value = `${userIconData.value.last_name[0]}${userIconData.value.first_name[0]}`;
      userAvatarSrc.value = userIconData.value.avatar;
    } else {
      isError.value = true;
    }
  };

  return {
    fetchUser,
    userInitials,
    userAvatarSrc,
    isError,
  };
}
