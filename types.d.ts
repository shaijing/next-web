type PostMatter = {
    id: string;
    title: string;
    date: string;
    tags: string[];
    category: string[];
    draft: boolean;
};

type BlogPost = {
    id: string;
    title: string;
    date: string;
    tags: string[];
    category: string[];
    draft: boolean;
};
export type Views = {
    total: number;
};

export type Slug = {
    slug: string;
    method: string;
};
