import client from "../libs/axios";

const GetCategory = async (eager = "false") => {
  const { data } = await client.get(`category?eager=${eager}`);
  return data;
};

const GetCategoryById = async (id, eager = "false") => {
  const { data } = await client.get(`category/${id}?eager=${eager}`);
  return data;
};

const PostCategory = async (payload) => {
  const { data } = await client.post("category", payload);
  return data;
};

const DeleteCategoryById = async (id) => {
  const { data } = await client.delete(`category/${id}`);
  return data;
};

export { GetCategory, GetCategoryById, PostCategory, DeleteCategoryById };
