export interface AppConfigType {
    api: ApiType,
    featureFlags: FeatureFlagType
}

export interface ApiType{
    getCategoryListUrl?: string;
    addProductUrl?: string;
    getProductListUrl?: string;
    deleteProductUrl?: string;
    updateProductUrl?: string;
}

export interface FeatureFlagType {
    isSearchFilterActive?: boolean
    isUpdateProductActive?: boolean
    isDeleteProductActive?: boolean
    isViewProductDetailsActive?: boolean
}