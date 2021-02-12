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
} from 'react-admin';

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
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="role" />
      <BooleanInput source="confirmed" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
