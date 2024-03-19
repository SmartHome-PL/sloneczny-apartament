export interface regulatoryDocumentItem {
  id: number;
  sortOrder: number;
  description: string;
}

export interface regulatoryDocumentSection {
  id: number;
  sortOrder: number;
  title: string;
  items: regulatoryDocumentItem[];
}
