// 프로젝트 1. 통합 숙박 예약 시스템
import jienemMain from '@/assets/projects/jienem/main.png';
import jienem1 from '@/assets/projects/jienem/jienem1.png';
import jienemDetail from '@/assets/projects/jienem/detail.png';
import jienemMap1 from '@/assets/projects/jienem/map1.png';
import jienemMap2 from '@/assets/projects/jienem/map2.png';

// 프로젝트 2. 정산 시스템
import v1Main from '@/assets/projects/v1/main.png';
import drag1 from '@/assets/projects/v1/drag1.png';
import drag2 from '@/assets/projects/v1/drag2.png';
import commission from '@/assets/projects/v1/commission.png';
import storeSettlement from '@/assets/projects/v1/store_settlement.png';
import storeSettlementDetail from '@/assets/projects/v1/store_settlement_detail.png';
import setting from '@/assets/projects/v1/setting.png';

// 프로젝트 3. 트루온 멀티도메인
import truonMain from '@/assets/projects/truon/truon_main1.png';
import truonSub from '@/assets/projects/truon/truon_sub1.png';
import truonUser from '@/assets/projects/truon/truon_user1.png';
import truonAdmin1 from '@/assets/projects/truon/truon_admin1.png';
import truonAdmin2 from '@/assets/projects/truon/truon_admin2.png';
import truonAdmin3 from '@/assets/projects/truon/truon_admin3.png';
import truonAdmin4 from '@/assets/projects/truon/truon_admin4.png';
import truonAdmin5 from '@/assets/projects/truon/truon_admin5.png';

// 프로젝트 4. 쇼핑몰 상품 데이터 자동 수집 시스템
import crawling1 from '@/assets/projects/crawling/python_img1.png';
import crawling2 from '@/assets/projects/crawling/python_img2.png';
import crawling3 from '@/assets/projects/crawling/python_img3.png';

// 프로젝트 6. 쇼핑몰 퍼블리싱
import shoppingmall1 from '@/assets/projects/shop/shoppingmall_1.png';
import shoppingmall2 from '@/assets/projects/shop/shoppingmall_2.png';
import shoppingmall3 from '@/assets/projects/shop/shoppingmall_3.png';
import shoppingmall4 from '@/assets/projects/shop/shoppingmall_4.png';

// 프로젝트 7. Flutter 기반 결제 애플리케이션
import flutterMain from '@/assets/projects/flutter/main.png';
import flutterLoginDark from '@/assets/projects/flutter/login_dark.png';
import flutterLoginLight from '@/assets/projects/flutter/login_light.png';
import flutterModal from '@/assets/projects/flutter/modal.png';
import flutterSubPage from '@/assets/projects/flutter/sub_page.png';

// 프로젝트 8. 웹디자인 포토샵 이미지
import ars1 from '@/assets/projects/photoshop/ars_1.jpg';
import ars2 from '@/assets/projects/photoshop/ars_2.jpg';
import ars3 from '@/assets/projects/photoshop/ars_3.jpg';
import ars4 from '@/assets/projects/photoshop/ars_4.jpg';
import dhpay1 from '@/assets/projects/photoshop/dh_pay_1.png';
import dhpay2 from '@/assets/projects/photoshop/dh_pay2.png';
import obconevent1 from '@/assets/projects/photoshop/obcon_event_1.png';
import obconevent2 from '@/assets/projects/photoshop/obcon_event_banner2.png';
import obconevent3 from '@/assets/projects/photoshop/obcon_event_3.png';
import obconevent4 from '@/assets/projects/photoshop/obcon_event_banner4.png';
import obconEventDetail from '@/assets/projects/photoshop/obcon_event_detail.png';
import obconCoupon from '@/assets/projects/photoshop/obcon_cupon.png';
import obconBanner from '@/assets/projects/photoshop/obcon_banner1.png';



export interface Project {
  id: number;
  title: string;
  description: string;
  overview: string;
  category: 'frontend' | 'fullstack' | 'crawling' | 'publishing' | 'design';
  images?: string[];
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
    images: [
        jienemMain,
        jienem1,
        jienemDetail,
        jienemMap1,
        jienemMap2,
    ],
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
    images: [
        v1Main,
        drag1,
        drag2,
        commission,
        storeSettlement,
        storeSettlementDetail,
        setting,
    ],
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
    images: [
        truonMain,
        truonSub,
        truonUser,
        truonAdmin1,
        truonAdmin2,
        truonAdmin3,
        truonAdmin4,
        truonAdmin5,
    ],
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
    category: 'crawling',
    images: [
        crawling1,
        crawling2,
        crawling3,
    ],
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
    id: 6,
    title: '쇼핑몰 구축 및 운영 시스템',
    description:
      '쇼핑몰 주문, 회원, 결제 기능 및 관리자 운영 시스템 개발',
    overview:
      '쇼핑몰 구축 프로젝트에서 주문, 회원, 결제 관련 화면을 개발하고 관리자 기능을 개선했습니다. 기존 쇼핑몰 운영 시스템을 유지보수하고 그누보드 기반 기능을 프로젝트 요구사항에 맞게 커스터마이징했습니다.',
    category: 'publishing',
    images: [
        shoppingmall1,
        shoppingmall2,
        shoppingmall3,
        shoppingmall4,
    ],
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
    id: 7,
    title: 'Flutter 기반 결제 애플리케이션 UI 개발',
    description:
      'Flutter Widget을 활용한 모바일 결제 솔루션 애플리케이션 UI 개발',
    overview:
      'Flutter 기반 결제 솔루션 모바일 애플리케이션 개발에 참여했습니다. Flutter Widget을 활용하여 모바일 UI를 구현하고 Android Emulator 환경에서 화면 동작과 레이아웃을 테스트했습니다.',
    category: 'publishing',
    images: [
        flutterMain,
        flutterLoginDark,
        flutterLoginLight,
        flutterModal,
        flutterSubPage,
    ],
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
  {
    id: 8,
    title: 'Photoshop 기반 웹디자인',
    description:
        'Photoshop을 활용한 웹 디자인 및 시각 콘텐츠 제작',
    overview:
        'Photoshop을 활용하여 웹 서비스에 필요한 디자인 작업을 진행했습니다. 시각적 완성도와 사용자 경험을 고려한 웹 디자인 작업을 수행했습니다.',
    category: 'design',
    images: [
        ars1,
        ars2,
        ars3,
        ars4,
        dhpay1,
        dhpay2,
        obconevent1,
        obconevent2,
        obconevent3,
        obconevent4,
        obconEventDetail,
        obconCoupon,
        obconBanner
    ],
    period: '실제 작업 기간 입력',
    role: 'Web Designer',
    stack: [
        'Photoshop',
    ],
    responsibilities: [
        'Photoshop을 활용한 웹 디자인 작업',
        '웹 화면의 레이아웃 및 시각적 요소 디자인',
        '디자인 요소와 색상, 타이포그래피 구성',
    ],
    badge: 'DESIGN',
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
