const { default: client } = require("@/libs/axios");

const PostProduct = async (payload) => {
  const { data } = await client.post("product", payload);
  return data;
};

const PostProductImage = async (id, payload) => {
  const { data } = await client.post(`product/images/${id}`, payload);
  return data;
};

const DeleteProductById = async (id) => {
  const { data } = await client.delete(`product/${id}`);
  return data;
};

export { PostProduct, PostProductImage, DeleteProductById };
