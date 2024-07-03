import type { Period } from '@/types/project';

export function Period({ period }: { period: Period }) {
  const start = period.start;
  const end = period.end;

  if (!start && !end) {
    return <span>기간 정보가 없습니다.</span>;
  }

  if (start && !end) {
    return (
      <>
        <time dateTime={`${start[0]}-${start[1]}-${start[2]}`}>
          {start[0]}.{start[1]}.{start[2]}
        </time>{' '}
        - <span>진행중</span>
      </>
    );
  }

  return (
    <div>
      <time dateTime={`${start[0]}-${start[1]}-${start[2]}`}>
        {start[0]}.{start[1]}.{start[2]}
      </time>{' '}
      -{' '}
      <time dateTime={`${end[0]}-${end[1]}-${end[2]}`}>
        {end[0]}.{end[1]}.{end[2]}
      </time>
    </div>
  );
}
