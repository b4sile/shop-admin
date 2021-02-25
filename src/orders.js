import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  Create,
  ReferenceField,
  NumberInput,
  SelectInput,
} from 'react-admin';

import { required } from 'react-admin';

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="status" />
      <NumberField source="amount" />
      <ReferenceField source="userId" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="status" validate={[required()]} />
      <NumberInput source="amount" validate={[required()]} />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="email" validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="email" validate={[required()]} />
      </ReferenceInput>
      <TextInput source="status" validate={[required()]} />
      <NumberInput source="amount" validate={[required()]} />
    </SimpleForm>
  </Create>
);
