import { getCurrentUser } from "@/lib/session";
import { Modal, ProjectForm } from "@/components";
import { redirect } from "next/navigation";

import "../globals.css";

const CreateProject = async () => {
  const session = await getCurrentUser();

  if(!session?.user) redirect('/');
  
  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>

      <ProjectForm type="create" session={session}/>
    </Modal>
  );
};

export default CreateProject;
