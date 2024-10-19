const {default: client} = require('@/lib/axios');

const PostProduct = async (payload) => {
  const {data} = await client.post('product', payload);
  return data;
};

const UpdateProduct = async (id, payload) => {
  const {data} = await client.put(`product/${id}`, payload);
  return data;
};

const DeleteProductById = async (id) => {
  const {data} = await client.delete(`product/${id}`);
  return data;
};

const PostProductImage = async (id, payload) => {
  const {data} = await client.post(`product/images/${id}`, payload);
  return data;
};

const GetProductImage = async (id) => {
  const {data} = await client.get(`product/images/${id}`);
  return data;
};

const DeleteProductImageById = async (id) => {
  const {data} = await client.delete(`product/images/${id}`);
  return data;
};

export {
  PostProduct,
  UpdateProduct,
  PostProductImage,
  DeleteProductById,
  GetProductImage,
  DeleteProductImageById,
};
