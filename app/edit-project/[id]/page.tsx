import { getCurrentUser } from "@/lib/session";
import { Modal, ProjectForm } from "@/components";
import { redirect } from "next/navigation";

import "@/app/globals.css";
import { getProjectDetails } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";

const EditProject = async ({params: {id}}: {params: {id: string}}) => {
  const session = await getCurrentUser();

  if(!session?.user) redirect('/');

  const result = await getProjectDetails(id) as {
    project?: ProjectInterface 
  };
  
  return (
    <Modal>
      <h3 className="modal-head-text">Edit a Project</h3>

      <ProjectForm type="edit" session={session} project={result?.project}/>
    </Modal>
  );
};

export default EditProject;
