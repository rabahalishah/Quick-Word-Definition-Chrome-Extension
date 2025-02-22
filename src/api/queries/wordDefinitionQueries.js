import axios from "axios";
import { API_URL } from "../../constants/index.js";

export async function getWordDefinition(selectedWord) {
  const url = `${API_URL}/${selectedWord}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return { error: "Word not found!", status: 404 };
  }
}
