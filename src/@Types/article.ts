export interface ContentSection {
  title: string;
  content: string;
  imageUrl?: string; // Optionnel, si certaines sections n'ont pas d'images
}

export interface Article {
  id: string;
  date: string;
  urlImageMini: string; // Image principale de l'article
  mainUrlImage: string;
  title: string; // Titre de l'article
  introduction: string;
  contentSections: ContentSection[]; // Sections de contenu détaillé avec titres, textes et images
  conclusion: string; // Conclusion de l'article
}
