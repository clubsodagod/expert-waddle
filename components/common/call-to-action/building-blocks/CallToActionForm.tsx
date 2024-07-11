import { CallToActionFormType, FieldType, FormField, immediateHelpForm } from '@/public/page-data';
import React, { ChangeEvent, useState } from 'react';

const RenderForm:React.FC<{form: CallToActionFormType}> = ({ form }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e:any) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    form.onSubmit(formData);
  };

  const renderField = (field:FormField) => {
    const { id, label, type, placeholder, options } = field;

    switch (type) {
      case 'text':
      case 'email':
      case 'number':
      case 'date':
        return (
          <input
            key={id}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
          />
        );
      case 'textarea':
        return (
          <textarea
            key={id}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
          />
        );
      case 'checkbox':
        return (
          <input
            key={id}
            id={id}
            type="checkbox"
            onChange={handleChange}
          />
        );
      case 'select':
        return (
          <select key={id} id={id} onChange={handleChange}>
            {options!.map((option:string, index:number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div key={id}>
            {options!.map((option:string, index:number) => (
              <label key={index}>
                <input
                  type="radio"
                  name={id}
                  value={option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{form.title}</h1>
      {form.description && <p>{form.description}</p>}
      {form.fields.map((field:FormField) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          {renderField(field)}
        </div>
      ))}
      <button type="submit">{form.submitButtonText}</button>
    </form>
  );
};

const CallToActionForm:React.FC<{form: CallToActionFormType}>  = ({form}) => {
  return (
    <div>
      <RenderForm form={form} />
    </div>
  );
};

export default CallToActionForm;
