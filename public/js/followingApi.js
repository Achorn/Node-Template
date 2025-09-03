import axios from "axios";
import { showAlert } from "./alerts";

export const followUser = async (userId) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/followers",
      data: {
        following: userId,
      },
    });

    if (res.data.status === "success") {
      location.reload();
      showAlert("success", "Followed user");
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const unfollowUser = async (followId) => {
  const url = "/api/v1/followers/" + followId;
  try {
    const res = await axios({
      method: "DELETE",
      url,
    });
    if (res.status === 204) {
      location.reload();
      showAlert("success", "Unfollowed user");
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
