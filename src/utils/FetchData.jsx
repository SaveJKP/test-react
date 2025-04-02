import axios from "axios";
import Swal from "sweetalert2";


export async function FetchDataUser() {
  try {
    const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");
    return response.data;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    return [];
  }
}

export async function AddData(payload)  {
  try {
    await axios.post("https://jsd5-mock-backend.onrender.com/members", payload);
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: e.message,
      icon: "error",
    });
  }
};

export async function DeleteData(item)  {
  try {
    const button = await Swal.fire({
      title: "ยืนยันการลบ",
      text: "คุณต้องการลบใช่หรือไม่",
      icon: "question",
      showCancelButton: true,
      showConfirmButton: true,
    });
    if (button.isConfirmed) {
      await axios.delete(
        `https://jsd5-mock-backend.onrender.com/members/${item.id}`,
      );
    }
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: e.message,
      icon: "error",
    });
  }
}
