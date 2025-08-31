import {Tag} from "shared/model/tag";

export type Heritage = {
    id: number;
    documentId: string;
    Title: string;
    Legacy: boolean;
    Slug: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    TitleEn: string | null;
    Summary: string | null;
    Tags: Tag[];
};
