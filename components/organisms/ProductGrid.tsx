import React from 'react';
import ProjectGrid from './ProjectGrid';
import { Project } from '../../types';

interface ProductGridProps {
  products: Project[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return <ProjectGrid projects={products} />;
};

export default ProductGrid;
