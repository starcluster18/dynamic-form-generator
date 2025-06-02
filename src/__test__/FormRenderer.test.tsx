import React from 'react';
import { render, screen } from '@testing-library/react';
import FormRenderer from '../components/FormRenderer';
import { FormConfig } from '../types/FormConfig';

describe('FormRenderer', () => {
  const mockConfig: FormConfig = {
    title: 'Test Form',
    items: [
      { label: 'Name', type: 'string' },
      { label: 'Agree', type: 'boolean' },
    ],
    buttons: [
      { label: 'Save' },
      { label: 'Cancel' },
    ],
  };

  it('renders the form title', () => {
    render(<FormRenderer config={mockConfig} />);
    expect(screen.getByText('Test Form')).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<FormRenderer config={mockConfig} />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Agree:')).toBeInTheDocument();
  });

  it('renders all buttons', () => {
    render(<FormRenderer config={mockConfig} />);
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('does not render buttons if config.buttons is undefined', () => {
    const configWithoutButtons: FormConfig = {
      title: 'No Button Form',
      items: [{ label: 'Email', type: 'string' }],
    };
    render(<FormRenderer config={configWithoutButtons} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
