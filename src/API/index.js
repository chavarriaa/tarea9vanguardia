import axios from "axios";

const API = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
});

export class CharacterAPI {
  static get = async (limit = 10, offset = 10) => {
    try {
      const result = await API.get(
        `characters?limit=${limit}&offset=${offset}`
      );
      return result.data;
    } catch (e) {
      return JSON.stringify(e);
    }
  };
  static searchByName=async (name) => {
    try {
      const result = await API.get(
        `characters?name=${name}`
      );
      return result.data;
    } catch (e) {
      return JSON.stringify(e);
    }
  };
}

export class SpoilerAPI {
    static get = async () => {
      try {
        const result = await API.get(
          `/random-death`
        );
        return result.data;
      } catch (e) {
        return JSON.stringify(e);
      }
    };
  }



