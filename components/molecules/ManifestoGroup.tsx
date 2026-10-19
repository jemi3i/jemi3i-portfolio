import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const ManifestoGroup: React.FC = () => {
  return (
    <div className="max-w-md border-l-2 border-brand-red pl-6 md:pl-10 py-2">
      <Text variant="label" className="mb-2">ENGINEERING // SOLIDARITY</Text>
      <Text variant="body" className="text-base md:text-lg text-brand-white mb-6 leading-relaxed font-light">
        "Code is the architecture; human empathy is the compass. Whether building distributed web platforms or coaching beginners on the mat, persistence and precision define the craft."
      </Text>
      <div className="flex flex-wrap gap-4">
        <Button to="/about" variant="outline" className="px-6 py-3 text-[10px] border-white/20 hover:border-brand-red hover:text-brand-red">
          DISCOVER_PROFILE →
        </Button>
        <Button to="/contact" variant="ghost" className="text-[10px] italic pb-1">
          OPEN_TRANSMISSION_
        </Button>
      </div>
    </div>
  );
};

export default ManifestoGroup;
