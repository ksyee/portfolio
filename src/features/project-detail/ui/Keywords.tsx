import { Badge } from '@/shared/ui';

import type { Project } from '@/entities/project';

interface KeywordsProps {
  keywords: Project['keywords'];
}

export function Keywords({ keywords }: KeywordsProps) {
  return (
    <div className="flex gap-[6px]">
      {keywords?.map((keyword) => <Badge key={keyword}>{keyword}</Badge>)}
    </div>
  );
}
