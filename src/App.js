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
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru', {
  allowMissing: true,
});

const App = () => (
  <Admin
    disableTelemetry
    dataProvider={myDataProvider}
    authProvider={authProvider}
    loginPage={MyLoginPage}
    logoutButton={MyLogoutButton}
    i18nProvider={i18nProvider}
  >
    <Resource
      name="users"
      options={{ label: 'Пользователи' }}
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name="categories"
      options={{ label: 'Категории' }}
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource
      name="products"
      options={{ label: 'Описание товаров' }}
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource
      name="carts"
      options={{ label: 'Корзины' }}
      list={CartList}
      edit={CartEdit}
      create={CartCreate}
    />
    <Resource
      name="cart-items"
      options={{ label: 'Товары в корзинах' }}
      list={CartItemsList}
      edit={CartItemsEdit}
      create={CartItemsCreate}
    />
    <Resource
      name="productsMeta"
      options={{ label: 'Товарные единицы' }}
      list={ProductMetaList}
      edit={ProductMetaEdit}
      create={ProductMetaCreate}
    />
    <Resource
      name="orders"
      options={{ label: 'Заказы' }}
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate}
    />
    <Resource
      name="order-items"
      options={{ label: 'Заказанные товары' }}
      list={OrderItemsList}
      edit={OrderItemsEdit}
      create={OrderItemsCreate}
    />
    <Resource
      name="images"
      options={{ label: 'Картинки товаров' }}
      list={ImageList}
      edit={ImageEdit}
      create={ImageCreate}
    />
  </Admin>
);
export default App;
