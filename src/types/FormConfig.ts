export type FieldType = 'number' | 'string' | 'multi-line' | 'boolean' | 'date' | 'enum';

export interface FormFieldConfig {
  label: string;
  type: FieldType;
  options?: string[];
}

export interface FormConfig {
  title?: string;
  items: FormFieldConfig[];
  buttons?: { label: string }[];
}
