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
  DateInput,
  ReferenceInput,
  Create,
  ReferenceField,
  NumberInput,
  SelectInput,
} from 'react-admin';

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
      <TextInput source="status" />
      <NumberInput source="amount" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);

export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <TextInput source="status" />
      <NumberInput source="amount" />
    </SimpleForm>
  </Create>
);
