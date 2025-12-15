import axios from "axios";
import { create } from "zustand";

// const BaseURL = "http://localhost:3000/api/v1";
const BaseURL = "https://medinfo-server-seven.vercel.app/api/v1";

const UserStore = create((set) => ({
  SearchKeyword: "",
  SetSearchKeyword: (Keyword) => {
    set({ SearchKeyword: Keyword });
  },

  KeywordProductList: null,
  ListByKeywordRequest: async (Keyword) => {
    set({ KeywordProductList: null });
    let res = await axios.get(
      `${BaseURL}/user/MedicineListByKeyWord/${Keyword}`
    );
    if (res.data.success === true) {
      set({ KeywordProductList: res.data["data"] });
    }
  },

  SearchedMedicineDetails: null,
  SearchedMedicineDetailsRequest: async (id) => {
    try {
      const res = await axios.get(`${BaseURL}/user/MedicineDetails/${id}`);
      if (res.data && res.data.success) {
        set({ SearchedMedicineDetails: res.data.data });
      } else {
        set({ SearchedMedicineDetails: null });
      }
    } catch (e) {
      console.error("MedicineDetailsRequest Error:", e);
      set({ SearchedMedicineDetails: null });
    }
  },
}));

export default UserStore;
