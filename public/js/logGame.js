import axios from "axios";
import { showAlert } from "./alerts";

export default logGame = async (args) => {
  const { game, relationship, experience, rest } = args;

  const url = relationship
    ? `/api/v1/relationships/${relationship}`
    : `/api/v1/relationships`;
  try {
    const res = await axios({
      method: rest,
      url,
      data: { game, experience, relationship },
    });
    if (res.data.status === "success") {
      location.reload();
      showAlert("success", `${rest} successfully!`);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
