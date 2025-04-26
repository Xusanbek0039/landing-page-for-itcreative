export interface CourseType {
  id: string;
  title: string;
  description: string;
  icon: string;
  codeSnippet: string;
  language: string;
}

export interface FeatureType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatType {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}