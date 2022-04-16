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
  NumberField,
  Filter,
  NumberInput,
} from 'react-admin';

import { required } from 'react-admin';

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
    <ReferenceInput
      label="Category"
      source="categoryId"
      reference="categories"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const ProductList = (props) => (
  <List filters={<ProductFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <NumberField source="price" />
      <NumberField source="discount" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ReferenceField source="categoryId" reference="categories">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" validate={[required()]} />
      </ReferenceInput>
      <TextInput source="title" validate={[required()]} />
      <TextInput
        source="description"
        validate={[required()]}
        fullWidth
        multiline
      />
      <NumberInput source="price" validate={[required()]} />
      <NumberInput source="discount" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" validate={[required()]} />
      </ReferenceInput>
      <TextInput source="title" validate={[required()]} />
      <TextInput
        source="description"
        validate={[required()]}
        fullWidth
        multiline
      />
      <NumberInput source="price" validate={[required()]} />
      <NumberInput source="discount" defaultValue={0} validate={[required()]} />
    </SimpleForm>
  </Create>
);
