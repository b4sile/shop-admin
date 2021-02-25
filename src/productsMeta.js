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
  Filter,
} from 'react-admin';

import { required } from 'react-admin';

const ProductMetaFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="size" alwaysOn />
    <ReferenceInput
      label="Product"
      source="productId"
      reference="products"
      allowEmpty
    >
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);

export const ProductMetaList = (props) => (
  <List filters={<ProductMetaFilter />} {...props}>
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
        <SelectInput validate={[required()]} optionText="title" />
      </ReferenceInput>
      <TextInput validate={[required()]} source="size" />
      <NumberInput defaultValue={0} validate={[required()]} source="quantity" />
    </SimpleForm>
  </Edit>
);

export const ProductMetaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="productId" reference="products">
        <SelectInput optionText="title" validate={[required()]} />
      </ReferenceInput>
      <TextInput validate={[required()]} source="size" />
      <NumberInput source="quantity" defaultValue={0} validate={[required()]} />
    </SimpleForm>
  </Create>
);
