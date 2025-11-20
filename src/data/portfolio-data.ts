export interface Project {
  code: string;
  title: string;
  description: string;
  keywords: string[];
  period: {
    start: string[];
    end: string[];
  };
  member: string;
  contribution: number;
  intro: string[];
  features: string[];
  stack: string[];
  contribute: Array<{
    title: string;
    hasLink?: string;
    contents?: string[];
  }>;
  trouble?: Array<{
    title: string;
    contents: {
      problem: string[];
      solution: string[];
    };
  }> | null;
  link: {
    web: string;
    github: string;
  };
  retrospect: string[];
  color: string;
}

export interface Skill {
  id: number;
  title: string;
  level: number;
  description: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    title: 'HTML',
    level: 90,
    description: 'Semantic HTML5',
  },
  {
    id: 2,
    title: 'CSS',
    level: 85,
    description: 'CSS3, Flexbox, Grid',
  },
  {
    id: 3,
    title: 'JavaScript',
    level: 90,
    description: 'ES6+, Async/Await',
  },
  {
    id: 4,
    title: 'Spring',
    level: 40,
    description: 'Backend Framework',
  },
  {
    id: 5,
    title: 'TypeScript',
    level: 85,
    description: 'Type-safe development',
  },
  {
    id: 6,
    title: 'React',
    level: 90,
    description: 'Hooks, Context API',
  },
  {
    id: 7,
    title: 'Tailwind CSS',
    level: 95,
    description: 'Utility-first CSS',
  },
  {
    id: 8,
    title: 'Git',
    level: 85,
    description: 'Version control',
  },
  {
    id: 9,
    title: 'Vite',
    level: 80,
    description: 'Build tool',
  },
];

export const projects: Project[] = [
  {
    code: 'findit',
    title: '분실물 조회 서비스 - 찾아줘',
    description:
      '경찰청 공공데이터 API를 활용한 분실물 및 습득물 통합 조회 플랫폼',
    keywords: ['공공데이터 API', '성능 최적화', '팀 프로젝트'],
    period: {
      start: ['2024', '02', '19'],
      end: ['2024', '03', '14'],
    },
    member: '4인 (프론트엔드 4명)',
    contribution: 45,
    intro: [
      '일상에서 겪는 불편함을 해소할 수 있는 서비스를 만들자는 아이디어로 시작된 프로젝트입니다.',
      '경찰청 공공데이터 API를 활용하여 제작되었습니다.',
      '심플한 디자인으로 구성되어 있으며, 신뢰감과 편안함을 주기 위해 푸른색과 무채색을 사용하였습니다.',
    ],
    features: [
      '경찰청 습득물, 분실물 조회 API를 활용하여 분실물과 습득물 데이터 불러오기',
      '물품 목록의 무한 스크롤 및 캐싱 구현',
      '회원가입 기능과 게시판 글쓰기 기능 구현',
    ],
    stack: [
      'React',
      'Typescript',
      'TailwindCSS',
      'Lodash',
      'Pocketbase',
      'Swiperjs',
      'Tanstack Query',
      'Vite',
      'Spring',
    ],
    contribute: [
      {
        title: 'Typescript 간단 요약 문서를 작성하여 팀원들에게 공유',
        hasLink:
          'https://ksyee.notion.site/Typescript-e9cce252d4f24f9db579ed773b1fb7fd?pvs=4',
        contents: ['노션 링크로 이동: '],
      },
      {
        title: 'Pocketbase SDK를 사용하기 쉬운 형태의 유틸리티 함수로 작성',
        contents: [
          'create, read, update, delete 기능을 함수로 추상화하여 사용하기 쉽게 구현',
        ],
      },
      {
        title:
          '경철청 습득물, 분실물 조회 API를 활용한 데이터 불러오기 유틸리티 함수 작성',
        contents: ['API의 XML반환값을 JSON으로 변경하는 전처리 유틸리티 작성'],
      },
    ],
    trouble: [
      {
        title: '공공데이터 API의 응답 지연 문제',
        contents: {
          problem: [
            '경찰청 공공데이터 API의 응답 속도가 느려 사용자가 데이터를 조회하는 과정에서 대기 시간이 발생',
          ],
          solution: [
            '직접 Spring 서버를 구축하고, API로부터 데이터를 하루 2회 스케줄링하여 미리 수집한 뒤 MySQL에 저장하고, 클라이언트는 이 서버로부터 빠르게 응답받도록 구조를 개선(15초 이상 -> 2초 이내)',
          ],
        },
      },
    ],
    link: {
      web: 'https://find-it-alpha.vercel.app/',
      github: 'https://github.com/ksyee/find-it',
    },
    retrospect: [
      '타입스크립트를 사용하면서 코드 안정성과 개발 생산성을 올려 코드의 품질을 높이는 경험을 하였습니다.',
      '프로젝트에 전반에 사용되는 유틸리티 함수를 작성하면서 코드의 재사용성을 높이는 방법에 대해 고민하게 되었습니다.',
      'RESTful API를 따른 설계와 비동기 통신을 숙달할 수 있는 프로젝트였습니다.',
    ],
    color: '#4785ff',
  },
  {
    code: 'k-type',
    title: '타이핑 사이트 - k-type',
    description:
      '실시간 타이핑 속도와 정확도를 분석하는 한글 타이핑 연습 웹 애플리케이션',
    keywords: ['실시간 분석', '한글 특화', '개인 프로젝트'],
    period: {
      start: ['2024', '10', '12'],
      end: ['2025', '04', '20'],
    },
    member: '1인 (개인 프로젝트)',
    contribution: 100,
    intro: [
      '제 소개글로 타이핑 연습을 할 수 있는 웹 사이트입니다.',
      '타이핑을 하면서 입력 속도(CPM), 정확도 등을 실시간으로 분석해줍니다.',
      '심플한 디자인으로 구성되어 있으며, 집중력과 편안함을 주기 위해 짙은 회색과 흰색을 사용하였습니다.',
    ],
    features: [
      '실시간 타이핑 분석: 입력 속도(CPM), 정확도 등 실시간 분석',
      '다양한 한글 문장 연습: Supabase를 통해 관리되는 다양한 한글 문장 제공',
      '시각적 피드백: 타이핑 오류 시 즉각적인 시각적 피드백 제공',
      '미니멀한 UI/UX: 타이핑에만 집중할 수 있는 직관적인 인터페이스',
    ],
    stack: [
      'React',
      'Typescript',
      'Next.js 14',
      'TailwindCSS',
      'Zustand',
      'Supabase',
    ],
    contribute: [
      {
        title: '실시간 타이핑 분석 시스템 구현',
        contents: ['입력속도(CPM), 정확도 등 실시간 분석 기능 개발'],
      },
      {
        title: '시각적 피드백 컴포넌트 개발',
        contents: ['오타 발생 시 실시간으로 표시되는 색상 피드백 구현'],
      },
      {
        title: '타이핑 정확도 분석 알고리즘 개발',
        contents: ['한글 자모 분리를 통한 정확한 오타율 계산'],
      },
    ],
    trouble: [
      {
        title: '한글 입력 처리 문제',
        contents: {
          problem: ['입력받은 한글의 입력처리 알고리즘이 필요'],
          solution: ['es-hangul 라이브러리를 활용하여 자모 단위 분석 구현'],
        },
      },
    ],
    link: {
      web: 'https://k-type.vercel.app/',
      github: 'https://github.com/ksyee/k-type',
    },
    retrospect: [
      '실시간 타이핑 분석 시스템 구현: 입력 속도(CPM), 정확도 등 실시간 분석 기능 개발',
      'Supabase와 연동하여 한글 문장 데이터 관리 시스템 구축',
      '타이핑 정확도 분석 알고리즘 개발: 한글 자모 분리를 통한 정확한 오타율 계산',
      '시각적 피드백 컴포넌트 개발: 오타 발생 시 실시간으로 표시되는 색상 피드백 구현',
    ],
    color: '#3f3f46',
  },
  {
    code: 'taing',
    title: '티빙 클론코딩 - 타잉',
    description:
      '바닐라 자바스크립트로 구현한 티빙 스트리밍 서비스 클론 프로젝트',
    keywords: ['반응형 웹', '바닐라 JS', '팀 리딩'],
    period: {
      start: ['2024', '01', '04'],
      end: ['2024', '01', '16'],
    },
    member: '4인 (프론트엔드 4명)',
    contribution: 60,
    intro: [
      '반응형 웹에 대한 이해를 높이기 위해 진행한 프로젝트입니다.',
      '바닐라 자바스크립트로 제작되었으며, 회원가입, 로그인 등의 핵심기능을 구현하였습니다.',
    ],
    features: [
      'TailwindCSS를 사용하여 반응형 웹',
      'Swiperjs를 사용하여 캐러셀 다수',
      '회원가입, 로그인, 로그아웃 기능',
      '아이디, 비밀번호 찾기 기능 구현',
    ],
    stack: [
      'Javascript',
      'TailwindCSS',
      'Lodash',
      'Pocketbase',
      'Swiperjs',
      'gsap',
      'Vite',
    ],
    contribute: [
      {
        title: 'TailwindCSS의 설정파일을 커스텀하여 사용하기 쉽도록 구성',
        contents: [
          'w-10pxr과 같이 px을 rem 단위로 변환하는 유틸리티 함수를 작성하여 사용성 향상',
        ],
      },
      {
        title: 'Pocketbase SDK를 사용하기 쉬운 형태의 유틸리티 함수로 작성',
        contents: [
          'create, read, update, delete 기능을 함수로 추상화하여 사용하기 쉽게 구현',
        ],
      },
    ],
    trouble: [
      {
        title: '회원가입시 프로필 기본이미지 삽입',
        contents: {
          problem: [
            '회원가입시 유저 정보에 프로필 이미지가 삽입되지 않아 전체적인 완성도가 떨어지는 느낌을 받음',
          ],
          solution: [
            'formData()를 사용하여 입력받은 유저 정보에 프로필 이미지를 삽입하여 함께 submit함',
          ],
        },
      },
    ],
    link: {
      web: 'https://taaing.netlify.app/',
      github: 'https://github.com/FRONTENDSCHOOL8/taing',
    },
    retrospect: [
      '조장, 스크럼마스터로 프로젝트를 진행하면서 팀원들의 역량을 어떻게 하면 끌어올릴 수 있을까 고민한 기억이 남습니다.',
      '필요한 기능을 직접 유틸리티 함수로 작성하면서 코드의 재사용성을 높이는 방법에 대해 고민하게 되었습니다.',
      '여러 기능들을 구현하며 논리적인 사고를 키워나가는 경험을 하였습니다.',
    ],
    color: '#ff153c',
  },
  {
    code: 'sgi',
    title: 'SGI 서울보증보험 클론코딩',
    description:
      'jQuery와 다양한 애니메이션을 활용한 서울보증보험 웹사이트 클론 프로젝트',
    keywords: ['퍼블리싱', 'jQuery', '애니메이션'],
    period: {
      start: ['2023', '02', ''],
      end: ['2023', '03', ''],
    },
    member: '1인 (개인 프로젝트)',
    contribution: 100,
    intro: [
      '공공기관 사이트인 SGI 서울보증보험 사이트를 클론코딩 했습니다.',
      'jQuery를 사용하여 제작하였으며, 퍼블리싱과 애니메이션에 중점을 두었습니다.',
      '붉은 색 하이라이트가 되어 있는 부분이 구현한 페이지입니다.',
    ],
    features: [
      'jQuery를 사용하여 퍼블리싱',
      'Swiperjs를 커스텀하여 캐러셀 구성',
      '팝업 애니메이션 구현',
    ],
    stack: ['css', 'jQuery', 'Javascript', 'Swiperjs'],
    contribute: [
      {
        title: 'header, footer를 공통 컴포넌트로 구현',
        contents: [
          'jQuery를 사용하여 header, footer를 따로 분리시키고, 비동기통신으로 불러오는 방식으로 구현하여 재사용성을 높임',
        ],
      },
      {
        title: '다양한 애니메이션 효과 구현',
        contents: [
          '이용자가 흥미를 느끼도록 다양한 애니메이션 효과를 적용하여 사용자 경험을 향상',
        ],
      },
    ],
    trouble: null,
    link: {
      web: 'https://clone-sgi.vercel.app/',
      github: 'https://github.com/ksyee/clone_SGI',
    },
    retrospect: [
      'HTML, CSS, Javascript의 기초를 다질 수 있었고, jQuery를 사용하여 레거시 코드에 대한 이해를 높일 수 있었습니다.',
      '데이터는 다루지 않앗지만, 애니메이션이나 케러셀 등 사용자와 상호작용하는 부분들을 직접 만들어 보는 경험이 즐거웠습니다.',
      '접근성, 사용자경험 측면에서 부족함이 많은 프로젝트였지만, 발전 가능한 요소를 찾아보며 공부할 수 있는 계기가 되었습니다.',
    ],
    color: '#3932af',
  },
];
