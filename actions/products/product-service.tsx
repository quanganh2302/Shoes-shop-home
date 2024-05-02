import {
  Product,
  ProductItem,
  Category,
  Promotion,
  Gender,
  Size,
  Color,
  Brand,
  Style,
  Collection,
  ProductCollection,
} from "@/types";
import https from "@/axios";

export const getCategories = async (
  setLoading: (loading: boolean) => void
): Promise<Category[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/categories`);
    return res as unknown as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getACategory = async (
  categoryId: string,
  setLoading: (loading: boolean) => void
): Promise<Category> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/categories/${categoryId}`);
    return res as unknown as Category;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return Promise.reject(error);
  } finally {
    setLoading(false);
  }
};

export const getProducts = async (
  setLoading: (loading: boolean) => void
): Promise<Product[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/products`);
    return res as unknown as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getProductsByCategory = async (
  categoryName: string,
  setLoading: (loading: boolean) => void
): Promise<Product[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/products-by-category`, {
      params: {
        categoryName,
      },
    });
    return res as unknown as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getAProduct = async (
  productId: string,
  setLoading: (loading: boolean) => void
): Promise<Product> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/products/${productId}`);
    return res as unknown as Product;
  } catch (error) {
    console.error("Error fetching products:", error);
    return Promise.reject(error);
  } finally {
    setLoading(false);
  }
};

export const getProductItems = async (
  setLoading: (loading: boolean) => void
): Promise<ProductItem[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/product-items`);
    return res as unknown as ProductItem[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getProductCollection = async (
  setLoading: (loading: boolean) => void
): Promise<ProductCollection[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/products-collections`);
    return res as unknown as ProductCollection[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getProductSize = async (
  productId: string,
  setLoading: (loading: boolean) => void
): Promise<ProductItem[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/product-sizes/${productId}`);
    return res as unknown as ProductItem[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getProductsFeature = async (
  setLoading: (loading: boolean) => void
): Promise<Product[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/product-features`);
    return res as unknown as Product[];
  } catch (error) {
    console.error("Error fetching products feature:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getPromotions = async (
  setLoading: (loading: boolean) => void
): Promise<Promotion[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/promotions`);
    return res as unknown as Promotion[];
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getAPromotion = async (
  promotionId: string,
  setLoading: (loading: boolean) => void
): Promise<Promotion> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/promotions/${promotionId}`);
    return res as unknown as Promotion;
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return Promise.reject(error);
  } finally {
    setLoading(false);
  }
};

export const getGender = async (
  setLoading: (loading: boolean) => void
): Promise<Gender[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/genders`);
    return res as unknown as Gender[];
  } catch (error) {
    console.error("Error fetching gender:", error);
    return [];
  } finally {
    setLoading(false);
  }
};
export const getBrand = async (
  setLoading: (loading: boolean) => void
): Promise<Brand[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/brands`);
    return res as unknown as Brand[];
  } catch (error) {
    console.error("Error fetching Brand:", error);
    return [];
  } finally {
    setLoading(false);
  }
};
export const getStyle = async (
  setLoading: (loading: boolean) => void
): Promise<Style[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/styles`);
    return res as unknown as Style[];
  } catch (error) {
    console.error("Error fetching Style:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getCollection = async (
  setLoading: (loading: boolean) => void
): Promise<Collection[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/collections`);
    return res as unknown as Collection[];
  } catch (error) {
    console.error("Error fetching Collection:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getSize = async (
  setLoading: (loading: boolean) => void
): Promise<Size[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/sizes`);
    return res as unknown as Size[];
  } catch (error) {
    console.error("Error fetching size:", error);
    return [];
  } finally {
    setLoading(false);
  }
};

export const getColor = async (
  setLoading: (loading: boolean) => void
): Promise<Color[]> => {
  try {
    setLoading(true);
    const res = await https.get(`/api/colors`);
    return res as unknown as Color[];
  } catch (error) {
    console.error("Error fetching color:", error);
    return [];
  } finally {
    setLoading(false);
  }
};
