import React from 'react';
import {
  List,
  Datagrid,
  TextField,
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

const OrderItemFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
    <ReferenceInput
      label="OrderId"
      source="orderId"
      reference="orders"
      allowEmpty
    >
      <SelectInput optionText="id" />
    </ReferenceInput>
  </Filter>
);

export const OrderItemsList = (props) => (
  <List filters={<OrderItemFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="size" />
      <TextField source="description" />
      <NumberField source="quantity" />
      <NumberField source="price" />
      <NumberField source="discount" />
      <ReferenceField source="orderId" reference="orders">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="productMetumId" reference="productsMeta">
        <TextField source="id" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const OrderItemsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="orderId" reference="orders">
        <SelectInput optionText="id" validate={[required()]} />
      </ReferenceInput>
      <ReferenceInput source="productMetumId" reference="productsMeta">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="size" validate={[required()]} />
      <TextInput source="title" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
      <NumberInput source="quantity" validate={[required()]} />
      <NumberInput source="price" validate={[required()]} />
      <NumberInput source="discount" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export const OrderItemsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="orderId" reference="orders">
        <SelectInput optionText="id" validate={[required()]} />
      </ReferenceInput>
      <ReferenceInput source="productMetumId" reference="productsMeta">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="size" validate={[required()]} />
      <TextInput source="title" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
      <NumberInput source="quantity" validate={[required()]} />
      <NumberInput source="price" validate={[required()]} />
      <NumberInput source="discount" validate={[required()]} />
    </SimpleForm>
  </Create>
);
