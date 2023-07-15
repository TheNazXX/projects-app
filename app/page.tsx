import { ProjectInterface } from "@/common.types";
import { fetchAllProjects } from "@/lib/actions";

import "./globals.css";
import { Categories, ProjctCard } from "@/components";

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
}

type Props = {
  searchParams: SearchParams
}

export default async function Home({searchParams: {category}}: Props){
  const  data = await fetchAllProjects(category) as ProjectsSearch

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if(projectsToDisplay.length === 0){
    return(
      <section className="flexStart flex-col paddings">
        <Categories />

        <p className="no-result-text text-center">No projects found, fo create some first.</p>
      </section>  
    )
  }

  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />
      
      <section className="projects-grid">
        {projectsToDisplay.map(({node}: {node: ProjectInterface}) => (
          <ProjctCard
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

      <h1>Categories</h1>
    </section>
  );
};

// npx grafbase@0.24 dev