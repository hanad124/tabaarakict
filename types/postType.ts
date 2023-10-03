export interface Root {
    data: IPost[];
    meta: Meta;
  }
  
  export interface IPost {
    id: number;
    attributes: Attributes;
  }
  
  export interface Attributes {
    title: string;
    date: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: string;
    category: string;
    tags: Tags;
    slug: string;
    thumbnail: Thumbnail;
    author_image: AuthorImage;
  }
  
  export interface Tags {
    tags: string[];
  }
  
  export interface Thumbnail {
    data: IThumbnail[];
  }
  
  export interface IThumbnail {
    id: number;
    attributes: Attributes2;
  }
  
  export interface Attributes2 {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Formats {
    thumbnail: Thumbnail2;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  }
  
  export interface Thumbnail2 extends ImageFormat {}
  
  export interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
  }
  
  export interface AuthorImage {
    data: IAvator[];
  }
  
  export interface IAvator {
    id: number;
    attributes: Attributes3;
  }
  
  export interface Attributes3 {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats2;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Formats2 {
    thumbnail: Thumbnail3;
  }
  
  export interface Thumbnail3 extends ImageFormat {}
  
  export interface Meta {
    pagination: Pagination;
  }
  
  export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }