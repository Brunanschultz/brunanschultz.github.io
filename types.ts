
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  architectureType: 'Batch' | 'Streaming' | 'Hybrid' | 'Lakehouse';
}

export interface Skill {
  name: string;
  category: 'Cloud' | 'ETL' | 'Databases' | 'Languages' | 'Orchestration';
  level: number; // 0 to 100
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
