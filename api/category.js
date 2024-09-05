import client from "../libs/axios";

const GetCategory = async (eager = "false") => {
  const { data } = await client.get(`category?eager=${eager}`);
  return data;
};

const GetCategoryById = async (id = 1, eager = "false") => {
  const { data } = await client.get(`category/${id}?eager=${eager}`);
  return data;
};

const PostCategory = async (payload) => {
  const { data } = await client.post("category", payload);
  return data;
};

export { GetCategory, GetCategoryById, PostCategory };
