import { Badge } from '@/components/atoms';

import type { Project } from '@/@types/project';

interface KeywordsProps {
  keywords: Project['keywords'];
}

export function Keywords({ keywords }: KeywordsProps) {
  return (
    <div className="flex gap-6pxr">
      {keywords?.map((keyword) => <Badge key={keyword}>{keyword}</Badge>)}
    </div>
  );
}
