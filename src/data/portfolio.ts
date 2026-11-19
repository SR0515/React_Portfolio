
export interface Project {
  id: number;
  title: string;
  description: string;
  overview: string;
  category: 'frontend' | 'fullstack' | 'design';
  image?: string;
  period: string;
  role: string;
  stack: string[];
  responsibilities: string[];
  badge?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '통합 숙박 예약 시스템',
    description:
      '다양한 숙박 시설을 통합 검색하고 예약할 수 있는 모바일 중심 숙박 예약 플랫폼',
    overview:
      '다양한 숙박 시설을 통합 검색하고 예약할 수 있는 플랫폼의 프론트엔드 개발을 담당했습니다. Figma 디자인을 기반으로 모바일 중심의 반응형 UI를 구현하고, REST API 연동, 전역 상태 관리, 다국어 환경을 구축하여 사용자 중심의 예약 경험을 제공했습니다.',
    category: 'frontend',
    period: '실제 프로젝트 기간 입력',
    role: 'Frontend Developer',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS 4',
      'Zustand',
      'React Router',
      'i18next',
      'Kakao Map API',
    ],
    responsibilities: [
      'React 19 + TypeScript + Vite 기반 SPA 아키텍처 설계 및 개발',
      '공통 API 호출 구조 및 재사용 UI 컴포넌트 설계',
      'Figma 디자인 기반 모바일 중심 반응형 UI 구현',
      'Tailwind CSS 4를 활용한 터치 인터랙션, 슬라이드 UI, Bottom Sheet 개발',
      'Zustand 기반 사용자 인증, 숙소 선택, 날짜 및 인원 전역 상태 관리',
      '검색 필터, 숙소 상세 정보, 찜, 쿠폰, 포인트, 예약 내역 REST API 연동',
      'Kakao Map API 기반 지도 탐색 및 마커 인터랙션 구현',
      'i18next 기반 한국어, 영어, 일본어, 중국어 4개국어 환경 구축',
    ],
    badge: 'LATEST',
  },

  {
    id: 2,
    title: '정산 시스템 고도화 및 Full-stack 개발',
    description:
      '관리자, 파트너, 가맹점별 정산 데이터를 관리하는 통합 정산 시스템',
    overview:
      '기존 Classic ASP 기반 정산 시스템을 SvelteKit 및 Node.js 기반으로 고도화하는 프로젝트에 참여했습니다. 관리자, 파트너, 가맹점 시스템의 프론트엔드와 백엔드를 개발하고, TypeScript 기반의 구조 개선과 데이터 관리 기능을 구현했습니다.',
    category: 'fullstack',
    period: '실제 프로젝트 기간 입력',
    role: 'Full-stack Developer',
    stack: [
      'SvelteKit',
      'TypeScript',
      'Node.js',
      'Express',
      'Sequelize',
      'MySQL',
      'Swagger',
      'Git',
    ],
    responsibilities: [
      'Classic ASP 기반 레거시 시스템을 SvelteKit + TypeScript 환경으로 마이그레이션',
      '정산 및 권한 관련 컴포넌트와 API 데이터 타입 정의',
      'Express + Sequelize 기반 CRUD API 개발',
      'MySQL 데이터베이스 연동 및 데이터 처리 로직 구현',
      '관리자, 파트너, 가맹점별 권한 관리 및 데이터 조회 기능 개발',
      '검색 및 페이지네이션 기능 구현',
      'Swagger(OpenAPI) 기반 API 명세서 작성',
    ],
    badge: 'FULL STACK',
  },

  {
    id: 3,
    title: '멀티 도메인 통합 플랫폼 및 관리자 시스템',
    description:
      '단일 소스 코드로 여러 도메인을 운영하는 웹 플랫폼과 QR 유입 분석 시스템',
    overview:
      '단일 소스 코드 기반으로 여러 도메인을 운영할 수 있는 홈페이지와 관리자 시스템을 구축했습니다. 도메인별 유입 분석을 위한 라우팅 구조를 설계하고, QR 유입 로그 수집 및 통계 대시보드와 리소스 생성 자동화 기능을 개발했습니다.',
    category: 'fullstack',
    period: '실제 프로젝트 기간 입력',
    role: 'Full-stack Developer',
    stack: [
      'SvelteKit',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Python',
      'Tailwind CSS',
    ],
    responsibilities: [
      'SvelteKit SSR 기반 도메인별 라우팅 구조 설계',
      '단일 애플리케이션 기반 멀티 도메인 홈페이지 구축',
      'PostgreSQL 데이터베이스 연동',
      'QR 유입 분석 로그 수집 알고리즘 구현',
      '관리자 통계 대시보드 개발',
      'Python 기반 QR 코드 및 SVG 리소스 생성 자동화',
    ],
    badge: 'PLATFORM',
  },

  {
    id: 4,
    title: '쇼핑몰 상품 데이터 자동 수집 시스템',
    description:
      'Selenium과 Requests를 활용한 쇼핑몰 상품 정보 자동 수집 및 데이터 적재 시스템',
    overview:
      '여러 쇼핑몰의 상품 정보를 자동으로 수집하고 데이터베이스에 적재하는 데이터 수집 시스템을 구축했습니다. Selenium을 통한 로그인 및 세션 관리와 Requests 기반 데이터 수집을 조합하고, 수집 데이터를 정제하여 PostgreSQL에 저장하는 프로세스를 개발했습니다.',
    category: 'fullstack',
    period: '실제 프로젝트 기간 입력',
    role: 'Backend Developer',
    stack: [
      'Python',
      'Selenium',
      'Requests',
      'PostgreSQL',
      'Regular Expression',
      'JSON',
    ],
    responsibilities: [
      'Selenium 기반 쇼핑몰 로그인 및 세션 관리 구현',
      'Requests를 활용한 상품 데이터 수집 구조 개발',
      'Selenium과 Requests를 조합한 하이브리드 크롤러 구축',
      'Regular Expression 기반 상품 데이터 파싱',
      'JSON 데이터 정제 및 가공 프로세스 구현',
      'PostgreSQL 데이터베이스 자동 적재 기능 개발',
    ],
    badge: 'AUTOMATION',
  },

  {
    id: 5,
    title: '반응형 웹 서비스 구축',
    description:
      '기업 홈페이지 및 웹 플랫폼의 반응형 UI와 다국어 서비스 개발',
    overview:
      '기업 홈페이지 및 웹 플랫폼 구축 프로젝트에 참여하여 다양한 디바이스에 대응하는 반응형 UI와 다국어 서비스를 개발했습니다. 공통 컴포넌트를 구성하고 Google Translation API와 react-i18next를 연동하여 다국어 환경을 구현했습니다.',
    category: 'frontend',
    period: '실제 프로젝트 기간 입력',
    role: 'Frontend Developer',
    stack: [
      'React',
      'JavaScript',
      'Node.js',
      'CSS',
      'react-i18next',
      'Google Translation API',
    ],
    responsibilities: [
      'React 기반 웹 UI 및 공통 컴포넌트 개발',
      'Mobile, Tablet, PC 대응 반응형 레이아웃 구현',
      'react-i18next 기반 다국어 환경 구축',
      'Google Translation API 연동',
      '실시간 다국어 콘텐츠 처리 기능 개발',
    ],
    badge: 'WEB',
  },

  {
    id: 6,
    title: '결제 솔루션 관리자 시스템',
    description:
      '관리자, 파트너, 가맹점용 결제 및 정산 관리 웹 시스템',
    overview:
      '결제 솔루션의 관리자, 파트너, 가맹점용 웹 시스템에서 화면 개발을 담당했습니다. 데이터 조회와 입력을 위한 관리 화면을 구현하고 공통 UI 컴포넌트와 반응형 레이아웃을 개발했습니다.',
    category: 'frontend',
    period: '실제 프로젝트 기간 입력',
    role: 'Frontend Developer',
    stack: [
      'Classic ASP',
      'HTML5',
      'CSS',
      'JavaScript',
    ],
    responsibilities: [
      '관리자 시스템 UI 개발',
      '검색 및 데이터 입력 화면 구현',
      '공통 UI 컴포넌트 개발',
      '반응형 레이아웃 구현',
    ],
    badge: 'ADMIN',
  },

  {
    id: 7,
    title: '쇼핑몰 구축 및 운영 시스템',
    description:
      '쇼핑몰 주문, 회원, 결제 기능 및 관리자 운영 시스템 개발',
    overview:
      '쇼핑몰 구축 프로젝트에서 주문, 회원, 결제 관련 화면을 개발하고 관리자 기능을 개선했습니다. 기존 쇼핑몰 운영 시스템을 유지보수하고 그누보드 기반 기능을 프로젝트 요구사항에 맞게 커스터마이징했습니다.',
    category: 'frontend',
    period: '실제 프로젝트 기간 입력',
    role: 'Web Developer',
    stack: [
      'PHP',
      'GnuBoard',
      'Classic ASP',
      'JavaScript',
      'CSS',
    ],
    responsibilities: [
      '쇼핑몰 웹 화면 개발 및 유지보수',
      '주문, 회원, 결제 관련 UI 개발',
      '관리자 주문 및 매출 관리 화면 개선',
      '그누보드 기반 기능 커스터마이징',
    ],
    badge: 'E-COMMERCE',
  },

  {
    id: 8,
    title: 'Flutter 기반 결제 애플리케이션 UI 개발',
    description:
      'Flutter Widget을 활용한 모바일 결제 솔루션 애플리케이션 UI 개발',
    overview:
      'Flutter 기반 결제 솔루션 모바일 애플리케이션 개발에 참여했습니다. Flutter Widget을 활용하여 모바일 UI를 구현하고 Android Emulator 환경에서 화면 동작과 레이아웃을 테스트했습니다.',
    category: 'frontend',
    period: '실제 프로젝트 기간 입력',
    role: 'Mobile UI Developer',
    stack: [
      'Flutter',
      'Dart',
      'Android Emulator',
    ],
    responsibilities: [
      'Flutter Widget 기반 모바일 UI 개발',
      '모바일 화면 레이아웃 및 반응형 UI 구현',
      'Android Emulator 환경에서 화면 테스트',
    ],
    badge: 'MOBILE',
  },
];

export const skills = [
  {
    category: 'Frontend',
    items: [
      'React',
      'React 19',
      'Svelte',
      'SvelteKit',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Sequelize',
      'REST API',
      'Classic ASP',
      'PHP',
    ],
  },
  {
    category: 'Database',
    items: [
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    category: 'Mobile & Tools',
    items: [
      'Flutter',
      'Dart',
      'Python',
      'Selenium',
      'Git',
      'GitHub',
      'Vite',
      'Figma',
      'Swagger',
    ],
  },
];

export const journals = [
  {
    id: 1,
    category: 'DEVELOPMENT',
    title: 'React 컴포넌트 설계와 재사용성',
    description: '유지보수하기 좋은 컴포넌트 구조에 대한 개발 기록',
    date: '2026.11',
    emoji: '💻',
  },
  {
    id: 2,
    category: 'TROUBLESHOOTING',
    title: '카카오 지도 API 연동과 지도 상태 관리',
    description: '지도 마커, 검색 영역 및 상태 동기화 구현 과정',
    date: '2026.11',
    emoji: '🗺️',
  },
  {
    id: 3,
    category: 'UI / UX',
    title: '사용자 경험을 고려한 UI 구현',
    description: '디자인에서 개발까지 고민한 과정',
    date: '2026.10',
    emoji: '🎨',
  },
];
