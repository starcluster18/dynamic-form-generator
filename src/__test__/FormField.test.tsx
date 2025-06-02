import React from 'react';
import { render, screen } from '@testing-library/react';
import FormField from '../components/FormField';
import { FormFieldConfig } from '../types/FormConfig';

describe('FormField', () => {
  it('renders string input', () => {
    const field: FormFieldConfig = { label: 'Username', type: 'string' };
    render(<FormField field={field} />);
    expect(screen.getByLabelText('Username:')).toBeInTheDocument();
  });

  it('renders textarea for multi-line type', () => {
    const field: FormFieldConfig = { label: 'Description', type: 'multi-line' };
    render(<FormField field={field} />);
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
  });

  it('renders checkbox for boolean type', () => {
    const field: FormFieldConfig = { label: 'Accept Terms', type: 'boolean' };
    render(<FormField field={field} />);
    expect(screen.getByLabelText('Accept Terms:')).toBeInTheDocument();
  });

  it('renders radio buttons for enum type', () => {
    const field: FormFieldConfig = {
      label: 'Color',
      type: 'enum',
      options: ['Red', 'Green', 'Blue'],
    };
    render(<FormField field={field} />);
    expect(screen.getByText('Red')).toBeInTheDocument();
    expect(screen.getByText('Green')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
  });
});
