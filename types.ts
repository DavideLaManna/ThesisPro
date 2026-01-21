
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'primary' | 'secondary' | 'additional';
}

export interface ContactFormData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  request: string;
}
