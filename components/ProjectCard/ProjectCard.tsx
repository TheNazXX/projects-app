"use client"

import { useState, useEffect } from 'react';
import { ProjectCardProps } from './ProjectCard.props';
import Image from 'next/image';
import Link from 'next/link';

import './ProjectCard.css';

export const ProjectCard = ({ id, image, title, description, name, avatarUrl, userId }: ProjectCardProps) => {
  const [randomLikes, setRandomLikes] = useState(0);
  const [randomViews, setRandomViews] = useState('');

  useEffect(() => {
    const randomViewsValue = (Math.floor(Math.random() * 10000) / 1000).toFixed(1) + 'k';
    setRandomViews(randomViewsValue);
    
    const maxLikes = Math.floor(parseFloat(randomViewsValue) * 1000);
    setRandomLikes(Math.floor(Math.random() * maxLikes));
  }, []);

  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
        <Image src={image} className="w-full h-full object-cover rounded-2xl" width={414} height={314} alt="Project image" />

        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full text-center">{title}</p>
        </div>
      </Link>

      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <div className="flexCenter gap-2">
          <Link href={`/profile/${userId}`}>
            <Image src={avatarUrl} width={24} height={24} className="rounded-full" alt="Profile img" />
          </Link>

          <p>{name}</p>
        </div>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" width={13} height={12} alt="Heart" />
            <p className="text-sm">{randomLikes}</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={13} height={12} alt="eye" />
            <p className="text-sm">{randomViews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
