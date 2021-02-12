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
  Filter,
} from 'react-admin';

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
      <TextField source="price" />
      <TextField source="discount" />
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
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="discount" />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="discount" />
    </SimpleForm>
  </Create>
);
