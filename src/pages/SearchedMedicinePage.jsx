import UserStore from "../store/UserStore";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SearchedMedicineGrid from "../components/SearchedMedicineGrid";
import {
  Search,
  Filter,
  Package,
  AlertCircle,
  Loader2,
  ChevronRight,
  Grid,
  List,
} from "lucide-react";

const SearchedMedicinePage = () => {
  const { KeywordProductList, ListByKeywordRequest } = UserStore();
  const { keyword } = useParams();

  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await ListByKeywordRequest(keyword);
      setLoading(false);
    })();
  }, [keyword, ListByKeywordRequest]);

  useEffect(() => {
    if (KeywordProductList) {
      setFilteredProducts(KeywordProductList);
    }
  }, [KeywordProductList]);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto" />
            <div className="absolute inset-0 bg-blue-600/10 blur-xl rounded-full"></div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Searching Medicines
            </h3>
            <p className="text-gray-500 max-w-sm">
              Finding medicines matching your search criteria...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <main className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Search Results
                </h1>
                <p className="text-gray-600">
                  No medicines found matching your search
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No Medicines Found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any medicines matching{" "}
                <span className="font-semibold text-blue-600">"{keyword}"</span>
                . Try adjusting your search terms or browse our full catalog.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
                >
                  Go Back
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Browse All Medicines
                </Link>
              </div>
            </div>
          </div>

          {/* Alternative Suggestions */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Popular Medicine Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Antibiotics", "Pain Relief", "Vitamins", "Allergy"].map(
                (category) => (
                  <Link
                    key={category}
                    to={`/MedicineByKeyword/${category.toLowerCase()}`}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Package className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{category}</p>
                        <p className="text-sm text-gray-500">
                          Browse medicines
                        </p>
                      </div>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 font-medium">
                  Search Results
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Search Results for{" "}
                <span className="text-blue-600">"{keyword}"</span>
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  Found{" "}
                  <span className="font-semibold text-blue-700">
                    {filteredProducts.length}
                  </span>{" "}
                  medicines
                </p>
                <span className="hidden md:inline text-gray-300">•</span>
                <p className="text-gray-500 text-sm hidden md:block">
                  Click on any medicine for detailed information
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search within results..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    defaultValue={keyword}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* View Mode Toggle */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid"
                        ? "bg-white shadow-sm"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list"
                        ? "bg-white shadow-sm"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>

                <div className="hidden md:block">
                  <select className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none">
                    <option>Sort by: Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name: A to Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Applied Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm">
                <span>Keyword: {keyword}</span>
                <button className="ml-1 hover:text-blue-900">×</button>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
                <span>Results: {filteredProducts.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Results Header */}
            <div className="bg-linear-to-r from-blue-50 to-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Medicine Results
                    </h3>
                    <p className="text-sm text-gray-600">
                      Showing {viewMode === "grid" ? "grid" : "list"} view
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>All medicines are verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medicine Grid */}
            <div className="p-6">
              <SearchedMedicineGrid
                medicineList={filteredProducts}
                viewMode={viewMode}
              />
            </div>

            {/* Results Footer */}
            <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>
                    Displaying{" "}
                    <span className="font-semibold">
                      {filteredProducts.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold">
                      {filteredProducts.length}
                    </span>{" "}
                    results
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <span className="text-gray-700">Page 1 of 1</span>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Tips */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Search Tips
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                    Try using more general terms if you don't find what you're
                    looking for
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                    Check spelling or try alternative spellings
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                    Browse by category using the filter options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Searches */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Related Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              "Antibiotic",
              "Painkiller",
              "Vitamin",
              "Supplement",
              "Cold",
              "Fever",
            ].map((term) => (
              <Link
                key={term}
                to={`/MedicineByKeyword/${term.toLowerCase()}`}
                className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-3 text-center transition-all duration-200 group"
              >
                <p className="text-gray-700 group-hover:text-blue-700 font-medium">
                  {term}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchedMedicinePage;
