import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from '../App';

const validJson = `{
  "title": "User Feedback",
  "items": [
    { "label": "Count", "type": "number" },
    { "label": "Is Editable", "type": "boolean" },
    { "label": "Caption", "type": "string" },
    { "label": "Description", "type": "multi-line" },
    { "label": "Birthday", "type": "date" },
    { "label": "Gender", "type": "enum", "options": ["Male", "Female", "Other"] }
  ],
  "buttons": [
    { "label": "Cancel" },
    { "label": "Save" }
  ]
}`;

describe('App integration tests', () => {
  test('renders Config tab and textarea initially', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Apply')).toBeInTheDocument();
  });

  test('applies valid JSON config and renders form fields', () => {
    render(<App />);

    // Change textarea
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: validJson } });

    // Click Apply to render form
    fireEvent.click(screen.getByText('Apply'));

    // Confirm form title
    expect(screen.getByText('User Feedback')).toBeInTheDocument();

    // Confirm presence of all fields
    expect(screen.getByLabelText('Count:')).toBeInTheDocument();
    expect(screen.getByLabelText('Is Editable:')).toBeInTheDocument();
    expect(screen.getByLabelText('Caption:')).toBeInTheDocument();
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday:')).toBeInTheDocument();

    // Radio buttons
    expect(screen.getByLabelText('Male')).toBeInTheDocument();
    expect(screen.getByLabelText('Female')).toBeInTheDocument();
    expect(screen.getByLabelText('Other')).toBeInTheDocument();

    // Buttons
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('switching back to Config tab retains JSON input', () => {
    render(<App />);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: validJson } });

    fireEvent.click(screen.getByText('Apply'));

    // Go back to Config tab
    fireEvent.click(screen.getByText('Config'));

    // Textarea should still have the input
    expect(screen.getByRole('textbox')).toHaveValue(validJson);
  });

  test('shows error modal on invalid JSON', () => {
    render(<App />);
  
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: '{ invalid json' } });
    fireEvent.click(screen.getByText('Apply'));
  
    // Target the modal only
    const modal = screen.getByRole('dialog');
    expect(within(modal).getByText(/Invalid JSON/i)).toBeInTheDocument();
  
    // Close the modal
    fireEvent.click(within(modal).getByText('Close'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
