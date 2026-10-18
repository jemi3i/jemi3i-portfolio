import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';

interface ProductCardProps {
  product: Project;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return <ProjectCard project={product} />;
};

export default ProductCard;
