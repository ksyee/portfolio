interface PeriodProps {
  start: string[];
  end: string[];
}

export function Period({ start, end }: PeriodProps) {
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
