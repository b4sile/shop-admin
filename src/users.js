import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,
  Create,
  Filter,
  SelectInput,
} from 'react-admin';

import { required, minLength, email } from 'react-admin';

const validateEmail = [required(), email()];
const validateField = [required(), minLength(4)];

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="email" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <TextField source="password" />
      <TextField source="role" />
      <BooleanField source="confirmed" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="firstName" validate={validateField} />
      <TextInput source="lastName" validate={validateField} />
      <TextInput source="email" type="email" validate={validateEmail} />
      <TextInput source="password" validate={validateField} />
      <SelectInput
        source="role"
        choices={[
          { id: 'Admin', name: 'Admin' },
          { id: 'User', name: 'User' },
        ]}
      />
      <BooleanInput source="confirmed" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" validate={validateField} />
      <TextInput source="lastName" validate={validateField} />
      <TextInput source="email" type="email" validate={validateEmail} />
      <TextInput source="password" validate={validateField} />
    </SimpleForm>
  </Create>
);
