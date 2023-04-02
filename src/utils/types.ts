
export type NewsArticle = {
    image?: {
        src: string,
        alt: string
    };
    title: string;
    content: string;
  };

export type ArticleProp = {
    article: NewsArticle
}

export type ArticlePropList = {
    article: NewsArticle,
    index: number
}


export type RecentArticlesProp = {
    articles: NewsArticle[]
}

export type ListArticlesProp = {
    articles: NewsArticle[]
}
