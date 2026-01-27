'use client';

// Mantine Provider 래퍼 컴포넌트
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

// Mantine 스타일 임포트
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';

/**
 * 바늘이야기 커스텀 테마
 * 따뜻하고 자연스러운 핸드메이드 느낌의 색상 팔레트
 */
const theme = createTheme({
    // 기본 색상: 따뜻한 브라운 계열
    primaryColor: 'brown',
    colors: {
        // 커스텀 브라운 색상 팔레트
        brown: [
            '#fdf8f6',  // 0: 가장 밝은
            '#f5ebe7',
            '#ead5cc',
            '#dbbfb0',
            '#c9a68f',
            '#b08968',  // 5: 기본 (primary shade)
            '#9a7559',
            '#84614a',
            '#6e4d3b',
            '#583a2c',  // 9: 가장 어두운
        ],
        // 보조 색상: 따뜻한 베이지
        beige: [
            '#fefcfa',
            '#faf5f0',
            '#f5ebe0',
            '#efe0d0',
            '#e6d5c3',
            '#dbc9b5',
            '#c4b49f',
            '#ad9f89',
            '#968a73',
            '#7f755d',
        ],
    },
    // 기본 테마 설정
    primaryShade: 5,
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
    headings: {
        fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
        fontWeight: '600',
    },
    // 둥근 모서리 - 부드러운 느낌
    radius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
    },
    // 그림자 - 부드러운 그림자
    shadows: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
        md: '0 4px 8px rgba(0, 0, 0, 0.08)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
        xl: '0 16px 32px rgba(0, 0, 0, 0.12)',
    },
    // 기본 컴포넌트 스타일 오버라이드
    components: {
        Button: {
            defaultProps: {
                radius: 'md',
            },
        },
        Card: {
            defaultProps: {
                radius: 'lg',
                shadow: 'sm',
            },
        },
        Input: {
            defaultProps: {
                radius: 'md',
            },
        },
    },
});

interface MantineProviderWrapperProps {
    children: React.ReactNode;
}

/**
 * 앱 전체를 감싸는 Mantine Provider 래퍼
 * 테마, 알림, 모달 등 전역 기능을 제공합니다.
 */
export function MantineProviderWrapper({ children }: MantineProviderWrapperProps) {
    return (
        <MantineProvider theme={theme} defaultColorScheme="light">
            <ModalsProvider>
                <Notifications position="top-right" />
                {children}
            </ModalsProvider>
        </MantineProvider>
    );
}
