import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { Modal, ProjectAction, RelatedProjects } from '@/components';
import { ProjectInterface } from '@/common.types';
import { getProjectDetails } from '@/lib/actions';
import { getCurrentUser } from '@/lib/session';

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  if (!result?.project) {
    <p>Failed to fetch project information</p>;
  }

  const projectDetails = result?.project;

  return (
    <Modal>
      <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
        <div className="flex-1 flex items-start gap-5  max-xs:flex-col">
          <Link href={`/profile/${projectDetails?.createdBy?.id}`}>
            <Image src={projectDetails?.createdBy?.avatarUrl || ''} width={50} height={50} alt="profile" className="rounded-full" />
          </Link>

          <div className="flex-1 flex-col flexStart gap-1">
            <p className="text-lg font-semibold self-start">{projectDetails?.title}</p>

            <div className="user-info">
              <Link href={`/profile/${projectDetails?.createdBy?.id}`}>{projectDetails?.createdBy?.name}</Link>
              <Image src="/dot.svg" width={4} height={4} alt="dot" />
              <Link href={`/?category=${projectDetails?.category}`} className="text-primary-purple font-semibold">
                {projectDetails?.category}
              </Link>
            </div>
          </div>
        </div>

        {session?.user?.email === projectDetails?.createdBy?.email && (
          <div className="flex justify-end items-center gap-2">
            <ProjectAction projectId={projectDetails?.id} />
          </div>
        )}
      </section>

      <section className="mt-14">
        <Image className="rounded-2xl" src={projectDetails?.image || ''} width={1064} height={798} alt="Project Image" />
      </section>

      <section className="flexCenter flex-col mt-14">
        <div className="max-w-5xl text-xl font-normal">{projectDetails?.description}</div>

        <div className="flex flex-wrap mt-3 gap-5">
          <Link className="flexCenter gap-2 font-medium text-primary-purple" href={projectDetails?.githubUrl || '/'} target="_blank" rel="noreferrer">
            🖥 <span className="underline">Github</span>
          </Link>
          <Image src="/dot.svg" width={4} height={4} alt="dot" />
          <Link className="flexCenter gap-2 font-medium text-primary-purple" href={projectDetails?.liveSiteUrl || '/'} target="_blank" rel="noreferrer">
            🚀 <span className="underline">Live Site</span>
          </Link>
        </div>
      </section>

      <section className="flexCenter w-full gap-4 mt-20 mb-10">
        <span className="w-full bg-light-white-200 h-0.5" />
        <Link className="flexCenter min-w-[82px] h-[82px]" href={`/profile/${projectDetails?.createdBy?.id}`}>
          <Image src={projectDetails?.createdBy?.avatarUrl || ''} width={50} height={50} alt="profile" className="rounded-full" />
        </Link>
        <span className="w-full bg-light-white-200 h-0.5" />
      </section>

      <RelatedProjects userId={projectDetails?.createdBy.id}/>
    </Modal>
  );
};

export default Project;
