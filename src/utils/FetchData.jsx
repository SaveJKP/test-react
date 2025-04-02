import axios from "axios";
import Swal from "sweetalert2";

export async function FetchDataUser() {
  try {
    const response = await axios.get(
      "https://jsd5-mock-backend.onrender.com/members",
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    return [];
  }
}

export async function AddData(payload) {
  try {
    await axios.post("https://jsd5-mock-backend.onrender.com/members", payload);
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: e.message,
      icon: "error",
    });
  }
}

export async function DeleteData(id) {
  try {
    const button = await Swal.fire({
      title: "ยืนยันการลบ",
      text: "คุณต้องการลบใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
    });

    if (button.isConfirmed) {
      await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
    }
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: e.message,
      icon: "error",
    });
  }
}
