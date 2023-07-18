import { ProjectInterface } from "@/common.types";
import { fetchAllProjects } from "@/lib/actions";

import { Categories, LoadMore, ProjectCard } from "@/components";
import "./globals.css";

type ProjectsSearch = {
  projectSearch: {
    edges: {
      node: ProjectInterface
    }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    }
  }
}

type SearchParams = {
  category?: string;
  endcursor?: string;
};

type Props = {
  searchParams: SearchParams
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home({searchParams: {category, endcursor}}: Props){
  const  data = await fetchAllProjects(category, endcursor) as ProjectsSearch
  const projectsToDisplay = data?.projectSearch?.edges || [];


  if(projectsToDisplay.length === 0){
    return(
      <section className="flexStart flex-col paddings">
        <Categories />

        <p className="no-result-text text-center">No projects found, fo create some first.</p>
      </section>  
    )
  }

  const pagination = data?.projectSearch?.pageInfo;

  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />
      
      <section className="projects-grid">
        {projectsToDisplay.map(({node}: {node: ProjectInterface}) => (
          <ProjectCard
            key={node?.id}
            title={node?.title}
            id={node?.id}
            image={node?.image}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
            description={node?.description}
          />
        ))}
      </section>

      <LoadMore 
        startCursor={pagination.startCursor}
        endCursor={pagination.endCursor}
        hasPreviousPage={pagination.hasPreviousPage}
        hasNextPage={pagination.hasNextPage}
      />
    </section>
  );
};

// npx grafbase@0.24 dev