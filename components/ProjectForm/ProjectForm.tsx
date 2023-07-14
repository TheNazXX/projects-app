'use client';
import { ChangeEvent, useState } from 'react';

import { FormField } from '../FormField/FormField';
import { CustomMenu } from '../CustomMenu/CustomMenu';
import { Button } from '../Button/Button';

import { ProjectFormProps } from './ProjectFromProps';
import { categoryFilters } from '@/constants/CategoryFilters';
import { FormState } from '@/common.types';
import Image from 'next/image';

import './ProjectForm.css';
import { createNewProject, fetchToken } from '@/lib/actions';
import { useRouter } from 'next/navigation';



export const ProjectForm = ({ type, session }: ProjectFormProps) => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    title: '',
    description: '',
    image: '',
    liveSiteUrl: '',
    githubUrl: '',
    category: ''
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const {token} = await fetchToken(); 

    try{
      if(type === 'create'){
        await createNewProject(form, session?.user?.id, token);
        router.push('/');
      }
    }catch(error){
      throw error;
    }finally{
      setIsSubmitting(false);
    };
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes('image')) {
        alert('Please upload an image!');

        return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        const result = reader.result as string;
        handleStateChange("image", result)
    };
};


  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && 'Choose a poster for  your project'}
        </label>

        <input id="image" type="file" accept="image/*" required={type === 'create'} className="form_image-input" onChange={handleChangeImage} />

        {form.image && <Image className="sm:p-10 object-contain z-20" src={form.image} alt="image" fill />}
      </div>

      <FormField title="Title" state={form.title} placeholder="Flexibble" setState={(value) => handleStateChange('title', value)} />

      <FormField title="Description" state={form.description} placeholder="Show case and discover remakable developer projets" setState={(value) => handleStateChange('description', value)} />

      <FormField type="url" title="Web Site Url" state={form.liveSiteUrl} placeholder="http://example.com" setState={(value) => handleStateChange('liveSiteUrl', value)} />

      <FormField type="url" title="GitHub Url" state={form.githubUrl} placeholder="http://github.com/example" setState={(value) => handleStateChange('githubUrl', value)} />


      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange('category', value)}
      />

      <div className="flexStart w-full">
        <Button 
          title={isSubmitting ? `${type === 'create' ? 'Creating' : 'Editing'}`: `${type === 'create' ? 'Create' : 'Edit'}`}
          type="submit"
          leftIcon={isSubmitting ? "" : "/plus.svg"}
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  );
};
