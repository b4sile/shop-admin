import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  SimpleForm,
  ReferenceInput,
  Create,
  ReferenceField,
  SelectInput,
  BooleanField,
  ImageInput,
  ImageField,
  BooleanInput,
  Edit,
  Filter,
  TextInput,
} from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';

const useImageFieldStyles = makeStyles((theme) => ({
  image: {
    width: 50,
    height: 50,
  },
}));

const ImageFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="filename" alwaysOn />
    <ReferenceInput
      label="productId"
      source="productId"
      reference="products"
      allowEmpty
    >
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);

export const ImageList = (props) => {
  const imageFieldClasses = useImageFieldStyles();
  return (
    <List filters={<ImageFilter />} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="filename" />
        <TextField source="public_id" />
        <ImageField classes={imageFieldClasses} source="url" />
        <NumberField source="size" />
        <TextField source="ext" />
        <BooleanField source="isTitleImage" />
        <ReferenceField source="productId" reference="products">
          <TextField source="title" />
        </ReferenceField>
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
};

export const ImageEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <BooleanInput source="isTitleImage" />
    </SimpleForm>
  </Edit>
);

export const ImageCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="productId" reference="products">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <BooleanInput source="isTitleImage" />
      <ImageInput multiple source="images" accept="image/*">
        <ImageField source="images" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
