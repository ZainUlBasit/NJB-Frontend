import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// export const loginUser = (data) => api.post("/login", data);
// export const logoutUser = () => api.get("/logout");
// export const AutoLogin = () => api.get("/refresh");

// dashboard requests
export const getTopSeller = () => api.get("/get-top-seller");
export const getUnderSeller = () => api.get("/get-under-seller");

// company request
export const AddNewCompany = (data) => api.post("/add_company", data);
export const GetAllCompanies = () => api.get("/get_companies");
export const EditCompany = (id, data) => api.put("/update-company/" + id, data);
export const UpdateCompanyTotal = (id, data) =>
  api.post("/update-company-total/" + id, data);
export const DeleteCompany = (id) => api.delete("./delete-company/" + id);
// company transaction
export const AddCompanyTransaction = (data) =>
  api.post("/company-transaction", data);
export const GetCompanyTransaction = (compInfo) =>
  api.post("/get-company-transaction", compInfo);
// company payments
export const AddCompanyPayment = (data) => api.post("/company-payment", data);
export const GetCompanyPayment = (data) =>
  api.post("/get-company-payment", data);
// id = company name || id1 = company shop
export const UpdateCompanyPayment = (id, id1, data) =>
  api.post("/update-company-payment/" + id + "/" + id1, data);

// item request
export const AddNewItem = (data) => api.post("/add_item", data);
export const GetAllItems = () => api.get("/items");
export const UpdateItem = (id, data) => api.put("/update-item/" + id, data);
export const UpdateItemQty = (id, data) =>
  api.put("/update-item-qty/" + id, data);
export const DeleteItem = (id) => api.delete("./delete-item/" + id);

// category request
export const AddNewCategory = (data) => api.post("/add-category", data);
export const getAllCategories = () => api.get("/category");
export const UpdateCategory = (category, newCategory) =>
  api.put("/update-category/" + category, newCategory);
export const DeleteCategory = (category) =>
  api.delete("/delete-category/" + category);

// sub category request
export const AddNewSubCategory = (data) => api.post("/add-subcategory", data);
export const getAllSubCategories = () => api.get("/subcategory");
export const UpdateSubCategory = (subCat, data) =>
  api.put("/update-subcategory/" + subCat, data);
export const DeleteSubCategory = (subcategory) =>
  api.delete("/delete-subcategory/" + subcategory);
export const getSubCategoriesByCompany = (company) =>
  api.get("/subcategory/" + company);

// ========================
// customer request
// ========================
// custommer Page
export const AddNewCustomer = (data) => api.post("/add-customer", data);
export const GetAllCustomer = () => api.get("/customer");
export const AddCustomerTransaction = (data) =>
  api.post("/customer-transaction", data);
export const GetCustomerTransaction = (cusInfo) =>
  api.post("/get-customer-transaction", cusInfo);
// Item page
export const AddCustomerReturn = (data) => api.post("/customer-return", data);
export const GetReturnsData = () => api.get("/get-returns");
// export const GetCustomerReturn = (id, id1) =>
// api.get("/customer-return/" + id + "/" + id1);
export const UpdateCustomerTotal = (id, data) =>
  api.post("/update-customer-total/" + id, data);
// Cash page
export const AddCustomerPayment = (data) => api.post("/customer-payment", data);
export const GetCustomerPayment = (data) =>
  api.post("/get-customer-payment", data);
export const UpdateCustomerPayment = (id, id1, data) =>
  api.post("/update-customer-payment/" + id + "/" + id1, data);
// ======================
// xxxxxxxxxxxxxxxxxxxxxx
// ======================

// Expense request
export const AddNewExpense = (data) => api.post("/add-expense", data);
export const GetAllExpenses = (Body) => api.post("/get-expense", Body);

// temp request
export const getImgData = () => api.get("/get-temp");

// interceptor
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/refresh`,
          {
            withCredentials: true,
          }
        );
        console.log(response);
        return api.request(originalRequest);
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
    throw error;
  }
);

// export const createUser = (data) => api.post('/api/register', data);

// export const sendOtp = (data) => api.post('/api/send-otp', data);
// export const verifyOtp = (data) => api.post('/api/verify-otp', data);

// export const venueRegistration = (data) => api.post('/api/venue-register', data);
// export const checkVenue = () => api.get('/api/check-venue');
// export const getAllVenues = () => api.get('/api/all-venues');
// export const getVenueById = (data) => api.post('/api/venue-by-serviceId', data);
// export const bookService = (data) => api.post('/api/book/service', data);
// export const getVenueDates = (data) => api.post('/api/venue-dates', data);
// export const getUserOrders = () => api.get('/api/allorders/customer');
// export const getServiceProviderOrder = (data) => api.post('/api/allorders/serviceprovider', data)
// export const getDashbaordData = () => api.get('/api/dashbaord/data/venue')
// export const getOrderDetail = (orderId) => api.post('/api/getOrderDetail', orderId);
