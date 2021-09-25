export default function getSearchMulti(req, res) {
  try {
    return res.status(200).json({ result: "List movies" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
