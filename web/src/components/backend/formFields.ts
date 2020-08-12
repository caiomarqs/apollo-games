import { InputField } from '../InputField';
import { SelectField } from './SelectField';
import { FileInputField } from './FileInputField';

export const formFields = [
  {
    label: 'Selecione uma equipe',
    name: 'team',
    type: 'select',
    renderField: SelectField,
    items: [
      { value: 'dev', text: 'Desenvolvimento' },
      { value: 'sound', text: 'Áudio' },
      { value: 'prod', text: 'Produção' },
      { value: 'art', text: 'Arte' },
      { value: 'game', text: 'Game Design' },
    ],
    noValueError: '',
  },
  {
    label: 'Nome do membro',
    name: 'name',
    type: 'text',
    renderField: InputField,
    noValueError: 'O nome é obrigatório',
  },
  {
    label: 'Função',
    name: 'desc',
    type: 'text',
    renderField: InputField,
    noValueError: 'A função é obrigatória',
  },
  {
    label: 'Imagem para perfil',
    name: 'img',
    type: 'file',
    renderField: FileInputField,
  },
  {
    label: 'Contatos',
    name: 'contacts',
    items: [
      {
        label: 'Linkedin',
        name: 'linkedin',
        type: 'text',
        renderField: InputField,
      },
      {
        label: 'SoundCloud',
        name: 'soundcloud',
        type: 'text',
        renderField: InputField,
      },
      {
        label: 'WebSite',
        name: 'site',
        type: 'text',
        renderField: InputField,
      },
      {
        label: 'GitHub',
        name: 'git',
        type: 'text',
        renderField: InputField,
      },
      {
        label: 'Twitter',
        name: 'twitter',
        type: 'text',
        renderField: InputField,
      },
      {
        label: 'ArtStation',
        name: 'artstation',
        type: 'text',
        renderField: InputField,
      },
      {
        label: 'Instagram',
        name: 'instagram',
        type: 'text',
        renderField: InputField,
      },
    ],
  },
];
