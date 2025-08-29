import axios from "axios";
import { showAlert } from "./alerts";

export const logGame = async (args) => {
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
    if (res.status === 204 || res.data.status === "success") {
      location.reload();
      showAlert("success", `${rest} successfully!`);
    } else {
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const editLog = async (review, rating, relationship, game) => {
  const url = `/api/v1/relationships/${relationship}`;
  try {
    const res = await axios({
      method: "PATCH",
      url,
      data: { review, rating },
    });
    if (res.data.status === "success") {
      showAlert("success", `PATCH successfully!`);
      window.location.href = `/game/${game}`;
    } else {
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
