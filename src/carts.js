import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  DateField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

import { required } from 'react-admin';

export const CartList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export const CartEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput validate={[required()]} optionText="email" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const CartCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="email" validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
