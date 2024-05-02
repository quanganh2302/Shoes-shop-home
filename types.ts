export interface Gender {
  id: string;
  name: string;
}

export interface User {
  roleKey: string;
  userName?: string;
  email: string;
  password: string;
}

export interface Product {
  id: string;
  name: string;
  colorId: string;
  brandId: string;
  styleId: string;
  SKU: number;
  qty_in_stoke: number;
  images: string[];
  avatarURL: string;
  price: number;
  newPrice: number;
  promotionId: string;
  categoryId: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: Date;
}

export interface ProductItem {
  id: string;
  qty_in_stoke: number;
  productId: string;
  sizeValue: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Promotion {
  id: string;
  name: string;
  description: string;
  discountRate: number;
  startDate: string;
  endDate: string;
}

export interface Category {
  id: string;
  name: string;
  genderName: string;
}

export interface Size {
  id: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Collection {
  id: string;
  name: string;
}

export interface ProductCollection {
  id: string;
  productId: string;
  collectionId: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Style {
  id: string;
  name: string;
}
