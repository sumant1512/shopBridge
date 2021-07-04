import { AppConfigType } from "./config.type";

const host = "https://fakestoreapi.com";

export const AppConfigurations: AppConfigType = {
  api: {
    getCategoryListUrl: host + "/products/categories",
    addProductUrl: host + "/products",
    getProductListUrl: host + "/products",
    deleteProductUrl: host + "/products/",
    updateProductUrl: host + "/products/",
  },
  featureFlags: {
    isSearchFilterActive: true,
    isUpdateProductActive: true,
    isDeleteProductActive: true,
    isViewProductDetailsActive: true,
  },
};
