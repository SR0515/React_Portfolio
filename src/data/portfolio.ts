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


// 프로젝트 5. 핀테크 UI 솔루션 설계
import pay1 from '@/assets/projects/pay/root_pay1.png';
import pay2 from '@/assets/projects/pay/root_pay2.png';
import pay3 from '@/assets/projects/pay/root_pay3.png';
import pay4 from '@/assets/projects/pay/root_pay4.png';
import pay5 from '@/assets/projects/pay/root_pay5.png';
import pay6 from '@/assets/projects/pay/root_pay6.png';
import pay7 from '@/assets/projects/pay/root_pay7.png';
import payAdmin from '@/assets/projects/pay/root_pay_admin1.png';


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
  role: string;
  stack: string[];
  responsibilities: string[];
  badge?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'projectData.1.title',
    description: 'projectData.1.description',
    overview: 'projectData.1.overview',
    category: 'frontend',
    images: [
      jienemMain,
      jienem1,
      jienemDetail,
      jienemMap1,
      jienemMap2,
    ],
    role: 'projectData.1.role',
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
      'projectData.1.responsibilities.0',
      'projectData.1.responsibilities.1',
      'projectData.1.responsibilities.2',
      'projectData.1.responsibilities.3',
      'projectData.1.responsibilities.4',
      'projectData.1.responsibilities.5',
      'projectData.1.responsibilities.6',
      'projectData.1.responsibilities.7',
    ],
    badge: 'projectData.1.badge',
  },

  {
    id: 2,
    title: 'projectData.2.title',
    description: 'projectData.2.description',
    overview: 'projectData.2.overview',
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
    role: 'projectData.2.role',
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
      'projectData.2.responsibilities.0',
      'projectData.2.responsibilities.1',
      'projectData.2.responsibilities.2',
      'projectData.2.responsibilities.3',
      'projectData.2.responsibilities.4',
      'projectData.2.responsibilities.5',
      'projectData.2.responsibilities.6',
    ],
    badge: 'projectData.2.badge',
  },

  {
    id: 3,
    title: 'projectData.3.title',
    description: 'projectData.3.description',
    overview: 'projectData.3.overview',
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
    role: 'projectData.3.role',
    stack: [
      'SvelteKit',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Python',
      'Tailwind CSS',
    ],
    responsibilities: [
      'projectData.3.responsibilities.0',
      'projectData.3.responsibilities.1',
      'projectData.3.responsibilities.2',
      'projectData.3.responsibilities.3',
      'projectData.3.responsibilities.4',
      'projectData.3.responsibilities.5',
    ],
    badge: 'projectData.3.badge',
  },

  {
    id: 4,
    title: 'projectData.4.title',
    description: 'projectData.4.description',
    overview: 'projectData.4.overview',
    category: 'crawling',
    images: [
      crawling1,
      crawling2,
      crawling3,
    ],
    role: 'projectData.4.role',
    stack: [
      'Python',
      'Selenium',
      'Requests',
      'PostgreSQL',
      'Regular Expression',
      'JSON',
    ],
    responsibilities: [
      'projectData.4.responsibilities.0',
      'projectData.4.responsibilities.1',
      'projectData.4.responsibilities.2',
      'projectData.4.responsibilities.3',
      'projectData.4.responsibilities.4',
      'projectData.4.responsibilities.5',
    ],
    badge: 'projectData.4.badge',
  },

  {
    id: 5,
    title: 'projectData.5.title',
    description: 'projectData.5.description',
    overview: 'projectData.5.overview',
    category: 'publishing',
    images: [
      pay1,
      pay2,
      pay3,
      pay4,
      pay5,
      pay6,
      pay7,
      payAdmin,
    ],
    role: 'projectData.5.role',
    stack: [
      'Classic ASP',
      'HTML5',
      'CSS',
      'JavaScript',
    ],
    responsibilities: [
      'projectData.5.responsibilities.0',
      'projectData.5.responsibilities.1',
      'projectData.5.responsibilities.2',
      'projectData.5.responsibilities.3',
    ],
    badge: 'projectData.5.badge',
  },

  {
    id: 6,
    title: 'projectData.6.title',
    description: 'projectData.6.description',
    overview: 'projectData.6.overview',
    category: 'publishing',
    images: [
      shoppingmall1,
      shoppingmall2,
      shoppingmall3,
      shoppingmall4,
    ],
    role: 'projectData.6.role',
    stack: [
      'GnuBoard',
      'Classic ASP',
      'JavaScript',
      'CSS',
    ],
    responsibilities: [
      'projectData.6.responsibilities.0',
      'projectData.6.responsibilities.1',
      'projectData.6.responsibilities.2',
      'projectData.6.responsibilities.3',
    ],
    badge: 'projectData.6.badge',
  },

  {
    id: 7,
    title: 'projectData.7.title',
    description: 'projectData.7.description',
    overview: 'projectData.7.overview',
    category: 'publishing',
    images: [
      flutterMain,
      flutterLoginDark,
      flutterLoginLight,
      flutterModal,
      flutterSubPage,
    ],
    role: 'projectData.7.role',
    stack: [
      'Flutter',
      'Dart',
      'Android Emulator',
    ],
    responsibilities: [
      'projectData.7.responsibilities.0',
      'projectData.7.responsibilities.1',
      'projectData.7.responsibilities.2',
    ],
    badge: 'projectData.7.badge',
  },

  {
    id: 8,
    title: 'projectData.8.title',
    description: 'projectData.8.description',
    overview: 'projectData.8.overview',
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
      obconBanner,
    ],
    role: 'projectData.8.role',
    stack: [
      'Photoshop',
    ],
    responsibilities: [
      'projectData.8.responsibilities.0',
      'projectData.8.responsibilities.1',
      'projectData.8.responsibilities.2',
    ],
    badge: 'projectData.8.badge',
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
