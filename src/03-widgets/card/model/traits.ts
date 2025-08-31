import {Tag} from "shared/model/tag";
export type Trait = {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Title: string;
    Legacy: boolean;
    Lvl: string | number;
    Slug: string;
    Frequency: string | null;
    Condition: string | null;
    Prerequisite: string | null;
    Description: string;
    TitleEn: string | null;
    Summary: string | null;
    Tags: Tag[];
};