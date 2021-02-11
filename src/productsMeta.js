import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  NumberInput,
  NumberField,
} from 'react-admin';

export const ProductMetaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="size" />
      <NumberField source="quantity" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ReferenceField source="productId" reference="products">
        <TextField source="title" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const ProductMetaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="productId" reference="products">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextInput source="size" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Edit>
);

export const ProductMetaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="productId" reference="products">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextInput source="size" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Create>
);
