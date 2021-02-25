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
  NumberField,
  NumberInput,
  Filter,
} from 'react-admin';

import { required } from 'react-admin';

const CartItemFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="id" alwaysOn />
    <ReferenceInput label="CartId" source="cartId" reference="carts" allowEmpty>
      <SelectInput optionText="id" />
    </ReferenceInput>
  </Filter>
);

export const CartItemsList = (props) => (
  <List filters={<CartItemFilter />} {...props}>
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
        <SelectInput optionText="id" validate={[required()]} />
      </ReferenceInput>
      <ReferenceInput source="productMetumId" reference="productsMeta">
        <SelectInput optionText="id" validate={[required()]} />
      </ReferenceInput>
      <NumberInput validate={[required()]} source="quantity" />
    </SimpleForm>
  </Edit>
);

export const CartItemsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="cartId" reference="carts">
        <SelectInput optionText="id" validate={[required()]} />
      </ReferenceInput>
      <ReferenceInput source="product_metaId" reference="productsMeta">
        <SelectInput optionText="id" validate={[required()]} />
      </ReferenceInput>
      <NumberInput source="quantity" validate={[required()]} />
    </SimpleForm>
  </Create>
);
