import api from "../../services/api";

export default async function getSearchMulti(req, res) {
  const { searchInput } = req.body;

  try {
    const res = await api.get(`/search/multi`, {
      params: {
        api_key: "786b9a46aa4a85bcb9938a204bbe76a5",
        query: searchInput,
        language: "pt-BR",
        page: 1,
        include_adult: false
      }
    });
    console.log(res.data);
    return res.status(200).json({ result: res.data });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
