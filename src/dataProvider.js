import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const httpClient = fetchUtils.fetchJson;

const rootApi = '/api';

const dataProvider = simpleRestProvider(rootApi);

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
