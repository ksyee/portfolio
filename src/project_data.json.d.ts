// src/project_data.json.d.ts

declare module '@/project_data.json' {
  import { Project } from '@/types/project';
  const value: Project[];
  export default value;
}
