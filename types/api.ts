export interface ApiStructure {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Article {
  author: String;
  content: String;
  description: String;
  publishedAt: String;
  source: { id: String; name: String };
  title: String;
  url: String;
  urlToImage: String;
}
