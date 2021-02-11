import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate } from './users';
import { CategoryCreate, CategoryList, CategoryEdit } from './categories';
import { ProductCreate, ProductList, ProductEdit } from './products';
import {
  ProductMetaCreate,
  ProductMetaList,
  ProductMetaEdit,
} from './productsMeta';
import { CartList, CartEdit, CartCreate } from './carts';
import { CartItemsList, CartItemsEdit, CartItemsCreate } from './cartItems';

const dataProvider = simpleRestProvider('/api');

const App = () => (
  <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource
      name="carts"
      list={CartList}
      edit={CartEdit}
      create={CartCreate}
    />
    <Resource
      name="items"
      list={CartItemsList}
      edit={CartItemsEdit}
      create={CartItemsCreate}
    />
    <Resource
      name="productsMeta"
      list={ProductMetaList}
      edit={ProductMetaEdit}
      create={ProductMetaCreate}
    />
  </Admin>
);
export default App;
