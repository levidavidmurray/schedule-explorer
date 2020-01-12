export enum Workflow {
  ScheduleSelect,
  PersonalData,
}

export interface UserInfo {
  fullName: string;
  email: string;
  phone: string;
}

export interface InputAttrs {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  id: string;
}

export const userDataInputs: InputAttrs[] = [
  {
    placeholder: 'Please enter your full name',
    label: 'Your name',
    type: 'text',
    name: 'name',
    id: 'name',
  },
  {
    placeholder: 'Please enter your e-mail address',
    label: 'Your e-mail address',
    type: 'email',
    name: 'email',
    id: 'email',
  },
  {
    placeholder: 'Please enter your phone number',
    label: 'Phone number',
    type: 'phone',
    name: 'phone',
    id: 'phone',
  },
];
