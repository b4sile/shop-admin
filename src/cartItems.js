import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  DateInput,
  DateField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  NumberField,
  NumberInput,
} from 'react-admin';

export const CartItemsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="cartId" reference="carts">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="productMetumId" reference="productsMeta">
        <TextField source="id" />
      </ReferenceField>
      <NumberField source="quantity" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export const CartItemsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="cartId" reference="carts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="productMetumId" reference="productsMeta">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <NumberInput source="quantity" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);

export const CartItemsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="cartId" reference="carts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="product_metaId" reference="productsMeta">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <NumberInput source="quantity" />
    </SimpleForm>
  </Create>
);
