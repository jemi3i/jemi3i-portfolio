
import React from 'react';
import Text from '../atoms/Text';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, ...props }) => {
  return (
    <div className="mb-6">
      <Text variant="label" className="mb-2 block">{label}</Text>
      <Input {...props} />
    </div>
  );
};

export default FormField;
