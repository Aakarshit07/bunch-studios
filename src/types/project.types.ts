export type Project = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  images: string[];
  content: string;
  thumbnail: string;
  similarProjects: string[];
};

export type SimilarProjectsProps = {
  similarProjects: Project[]
}