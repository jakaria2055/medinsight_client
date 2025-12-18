import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility";

// const BaseURL = "http://localhost:3000/api/v1";
const BaseURL = "https://medinfo-server-seven.vercel.app/api/v1";

const AdminTaskStore = create((set) => ({
  isAdmin: () => {
    return !!localStorage.getItem("accesstoken");
  },

  AddFormData: {
    image: null,
    name: "",
    price: "",
    group: "",
    effectiveness: "",
    sideeffect: "",
  },
  MedicineFormChange: (name, value) => {
    set((state) => ({
      AddFormData: {
        ...state.AddFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  AddMedicineRequest: async (postBody) => {
    try {
      set({ isFormSubmit: true });

      const formData = new FormData();
      formData.append("image", postBody.image);
      formData.append("name", postBody.name);
      formData.append("price", postBody.price);
      formData.append("group", postBody.group);
      formData.append("effectiveness", postBody.effectiveness);
      formData.append("sideeffect", postBody.sideeffect);

      let res = await axios.post(`${BaseURL}/admin/add-medicine`, formData, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
          "Content-Type": "multipart/form-data",
        },
      });

      set({ isFormSubmit: false });
      return res.data.success === true;
    } catch (error) {
      set({ isFormSubmit: false });
      console.error("Error adding medicine:", error);
      return false;
    }
  },

  MedicineList: null,
  MedicineListRequest: async () => {
    try {
      let res = await axios.get(`${BaseURL}/admin/MedicineListByCompany`, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      if (res.data["data"].length > 0) {
        set({ MedicineList: res.data["data"] });
      } else {
        set({ MedicineList: [] });
      }
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  MedicineFormData: {
    image: null,
    name: "",
    price: "",
    group: "",
    effectiveness: "",
    sideeffect: "",
  },
  MedicineFormDataChange: (name, value) => {
    set((state) => ({
      MedicineFormData: {
        ...state.MedicineFormData,
        [name]: value,
      },
    }));
  },

  MedicineDetails: null,
  MedicineDetailsRequest: async (id) => {
    try {
      const res = await axios.get(`${BaseURL}/admin/MedicineDetails/${id}`, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      if (res.data && res.data.success) {
        set({ MedicineDetails: res.data.data });
        set({
          MedicineFormData: {
            image: res.data.data.image, // Keep existing image URL
            name: res.data.data.name,
            price: res.data.data.price,
            group: res.data.data.group,
            effectiveness: res.data.data.effectiveness,
            sideeffect: res.data.data.sideeffect,
          },
        });
      } else {
        set({ MedicineDetails: null });
      }
    } catch (e) {
      console.error("MedicineDetailsRequest Error:", e);
      set({ MedicineDetails: null });
    }
  },

  MedicineDeleteRequest: async (medicineId) => {
    try {
      const res = await axios.post(
        `${BaseURL}/admin/delete-medicine/${medicineId}`,
        {},
        {
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
          },
        }
      );

      return res.data.success === true;
    } catch (error) {
      console.error("MedicineDeleteRequest Error:", error);
      return false;
    }
  },

  UpdateMedicineRequest: async (postBody, medicineId) => {
    try {
      set({ isFormSubmit: true });
      const formData = new FormData();

      // Only append image if a new file is selected
      if (postBody.image instanceof File) {
        formData.append("image", postBody.image);
      }

      formData.append("name", postBody.name);
      formData.append("price", postBody.price);
      formData.append("group", postBody.group);
      formData.append("effectiveness", postBody.effectiveness);
      formData.append("sideeffect", postBody.sideeffect);

      let res = await axios.post(
        `${BaseURL}/admin/update-medicine/${medicineId}`,
        formData,
        {
          headers: {
            accesstoken: localStorage.getItem("accesstoken"),
            "Content-Type": "multipart/form-data",
          },
        }
      );

      set({ isFormSubmit: false });
      return res.data.success === true;
    } catch (error) {
      set({ isFormSubmit: false });
      console.error("Error update medicine:", error);
      return false;
    }
  },
}));

export default AdminTaskStore;
