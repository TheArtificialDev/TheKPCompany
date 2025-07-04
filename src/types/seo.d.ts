export interface Meta {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  canonical: string;
  og: {
    site_name: string;
    type: string;
    image: string;
  };
  twitter: {
    card: string;
    image: string;
  };
}
