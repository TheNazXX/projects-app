import '@/app/globals.css';
import { Modal } from '@/components';
import { ProjectInterface } from '@/common.types';
import { getProjectDetails } from '@/lib/actions';
import { getCurrentUser } from '@/lib/session';

const Project = async ({params: {id}}: {params: {id: string}}) => {
  const session = await getCurrentUser();
  const result = await getProjectDetails(id) as {
    project?: ProjectInterface
  };

  if(!result?.project){
    <p>Failed to fetch project information</p>
  };

  const projectDetails = result?.project;

  return (
    <Modal>
      <section>
        
      </section>
    </Modal>
  );
};

export default Project;