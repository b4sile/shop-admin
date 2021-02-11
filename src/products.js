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
  ArrayField,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
} from 'react-admin';

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="price" />
      <TextField source="discount" />
      <ArrayField source="product_meta">
        <Datagrid>
          <TextField source="size" />
          <TextField source="quantity" />
        </Datagrid>
      </ArrayField>
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
      <ArrayInput source="product_meta">
        <SimpleFormIterator>
          <TextInput disabled source="id" />
          <TextInput disabled source="productId" />
          <TextInput source="size" />
          <NumberInput source="quantity" />
        </SimpleFormIterator>
      </ArrayInput>
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
      <ArrayInput source="product_meta">
        <SimpleFormIterator>
          <TextInput source="size" />
          <NumberInput source="quantity" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="discount" />
    </SimpleForm>
  </Create>
);
