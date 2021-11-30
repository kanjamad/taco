import axios from "axios";

export const getPlacesData = async () => {
  try {
    // request
    const { data } = await axios.get(
      "https://my.api.mockaroo.com/locations.json?key=a45f1200"
    );
    // console.log(response.data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
