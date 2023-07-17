import { getUserProjects } from "@/lib/actions";
import "@/app/globals.css";
import { UserProfile } from "@/common.types";
import { ProfilePage } from "@/components";

type Props = {
  params: {
    id: string;
  };
};

const UserProfile = async ({params}: Props) => {
  const result = await getUserProjects(params.id, 100) as {user: UserProfile};

  if(!result?.user){
    return <p className="no-result-text">Faield to fetch user Info</p>
  }

  return (
    <>12312312</>
  );
};

export default UserProfile;