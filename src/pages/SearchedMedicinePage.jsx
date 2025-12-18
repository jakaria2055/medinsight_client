import UserStore from "../store/UserStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchedMedicineGrid from "../components/SearchedMedicineGrid";

const SearchedMedicinePage = () => {
  const { KeywordProductList, ListByKeywordRequest } = UserStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  }, [keyword, ListByKeywordRequest]);

  if (KeywordProductList === null) {
    return (
      <section className="bg-green-900">
        <div className="container bg-green-900">
          <h2>No Data Matched</h2>
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-blue-50">
        <div className="container bg-blue-50">
          <SearchedMedicineGrid medicineList={KeywordProductList} />
        </div>
      </section>
    );
  }
};

export default SearchedMedicinePage;
