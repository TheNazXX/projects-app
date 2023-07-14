import { ProjectCardProps } from "./ProjectCard.props";
import Image from "next/image";
import Link from "next/link";

import "./ProjectCard.css";


export const ProjctCard = ({id, image, title, description, name, avatarUrl, userId}: ProjectCardProps) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">

        <Image src={image} className="w-full h-full object-cover rounded-2xl" width={414} height={314} alt="Project image"/>

        <div className="hidden group-hover:flex profile_card-title">
         <p className="w-full text-center">{title}</p>
        </div>
      </Link>

      
    </div>
  );
};