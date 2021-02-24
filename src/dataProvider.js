import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const rootApi = '/api';

const dataProvider = simpleRestProvider(rootApi, httpClient);

const myDataProvider = {
  ...dataProvider,
  create: (resource, params) => {
    if (resource !== 'images' || !params.data.images) {
      return dataProvider.create(resource, params);
    }
    const { images, isTitleImage, productId } = params.data;
    const formData = new FormData();
    images.forEach(({ rawFile }) => formData.append('images', rawFile));

    return httpClient(
      `${rootApi}/${resource}?productId=${productId}&isTitleImage=${
        isTitleImage || false
      }`,
      {
        method: 'POST',
        body: formData,
      }
    ).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
};

export default myDataProvider;
