import { useGetMyUser, useUpdateMyuser } from '@/api/MyUserApi'
import UserProfileForm from '@/forms/user-profile-from/UserProfileForm'

function UserProfilePage() {
    const { currentUser, isLoading: isGetLoading } = useGetMyUser();
    const { updateUser, isLoading: isUpdateLoading } = useUpdateMyuser();

    if (isGetLoading) {
        return <span>Loading....</span>
    }

    if (!currentUser) {
        return <span>Unable to load user profile</span>
    }
    return (
        <UserProfileForm currentUser={currentUser} onSave={updateUser} isloading={isUpdateLoading} />
    );
}

export default UserProfilePage