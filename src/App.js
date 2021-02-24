import { Admin, Resource } from 'react-admin';
import myDataProvider from './dataProvider';
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
import { OrderList, OrderEdit, OrderCreate } from './orders';
import { OrderItemsList, OrderItemsEdit, OrderItemsCreate } from './orderItems';
import { ImageList, ImageEdit, ImageCreate } from './images';
import { authProvider } from './authProvider';
import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton';

const App = () => (
  <Admin
    disableTelemetry
    dataProvider={myDataProvider}
    authProvider={authProvider}
    loginPage={MyLoginPage}
    logoutButton={MyLogoutButton}
  >
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
      name="cart-items"
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
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate}
    />
    <Resource
      name="order-items"
      list={OrderItemsList}
      edit={OrderItemsEdit}
      create={OrderItemsCreate}
    />
    <Resource
      name="images"
      list={ImageList}
      edit={ImageEdit}
      create={ImageCreate}
    />
  </Admin>
);
export default App;
