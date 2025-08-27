// update data
import axios from "axios";
import { showAlert } from "./alerts";

// type is 'password' or 'data'
export const updateSettings = async (data, type) => {
  console.log("trying update settings");
  try {
    const url =
      type === "password"
        ? "/api/v1/users/updatePassword"
        : "/api/v1/users/updateMe";

    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    // if (data.status === 'fail') throw new Error(data.message);
    if (res.data.status === "success") {
      showAlert("success", `${type.toUpperCase()} updated user successfully!`);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
