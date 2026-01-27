'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { IconArrowRight, IconNeedle } from '@tabler/icons-react';

// 장인 작업 이미지 목록
const artisanImages = [
    { src: '/images/artisan-1.jpg', alt: '가죽 바느질 작업' },
    { src: '/images/artisan-2.jpg', alt: '가죽 재단 작업' },
    { src: '/images/artisan-3.jpg', alt: '스티칭 상세' },
];

/**
 * 히어로 섹션 컴포넌트
 * 영상 재생 후 브랜드 메시지와 CTA 버튼이 페이드인됩니다.
 */
export function HeroSection() {
    const [videoEnded, setVideoEnded] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showSubContent, setShowSubContent] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // 이미지 슬라이드 자동 전환
    useEffect(() => {
        if (showSubContent) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % artisanImages.length);
            }, 4000); // 4초마다 전환
            return () => clearInterval(interval);
        }
    }, [showSubContent]);

    // 영상 종료 시 콘텐츠를 단계적으로 표시
    useEffect(() => {
        if (videoEnded) {
            // 첫 번째 단계: 배경 페이드인 (500ms 후)
            const timer1 = setTimeout(() => {
                setShowContent(true);
            }, 500);

            // 두 번째 단계: 나머지 콘텐츠 (1500ms 후)
            const timer2 = setTimeout(() => {
                setShowSubContent(true);
            }, 1500);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, [videoEnded]);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
        // 영상이 로드되면 처음부터 재생
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    // 영상 스킵 기능 (클릭 시)
    const handleSkipVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setVideoEnded(true);
    };

    return (
        <section
            className="relative min-h-[100vh] flex items-center overflow-hidden"
            style={{
                paddingBottom: '50px',
                backgroundColor: videoEnded ? '#f5ebe0' : '#000',
                transition: 'background-color 1.5s ease-in-out'
            }}
        >
            {/* 배경 영상 */}
            {!videoEnded && (
                <div className="absolute inset-0 z-10">
                    <video
                        ref={videoRef}
                        src="/sample.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover pointer-events-none"
                    />
                    {/* 스킵 버튼 */}
                    <button
                        onClick={handleSkipVideo}
                        className="absolute bottom-8 right-8 z-50 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/40 transition-all text-sm font-medium cursor-pointer"
                        type="button"
                    >
                        건너뛰기 →
                    </button>
                </div>
            )}

            {/* 배경 장식 (영상 종료 후 천천히 페이드인) */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                    opacity: showContent ? 1 : 0,
                    transition: 'opacity 2s ease-in-out',
                }}
            >
                {/* 공방 배경 이미지 */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/images/workshop-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.8,
                        filter: 'blur(2px)'
                    }}
                />
                {/* 그라데이션 오버레이 */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom right, rgba(245,235,224,0.85), rgba(250,245,240,0.9), rgba(255,255,255,0.95))'
                    }}
                />
                {/* 장식 원 */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#dbc9b5]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#c9a68f]/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b08968]/5 rounded-full blur-3xl" />
            </div>

            {/* 콘텐츠 영역 (영상 종료 후 천천히 페이드인) */}
            <Container
                size="xl"
                className="relative z-10"
                style={{
                    opacity: showContent ? 1 : 0,
                    transform: showContent ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'opacity 2s ease-out, transform 2s ease-out'
                }}
            >
                <div className="max-w-2xl">
                    {/* 서브 타이틀 */}
                    <Group
                        gap="xs"
                        className="mb-16"
                        style={{
                            opacity: showSubContent ? 1 : 0,
                            transform: showSubContent ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
                        }}
                    >
                        <IconNeedle size={20} className="text-[#b08968]" />
                        <Text size="sm" fw={600} className="text-[#b08968] tracking-widest uppercase">
                            Premium Handmade
                        </Text>
                    </Group>

                    {/* 메인 타이틀 */}
                    <Title
                        order={1}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10"
                        style={{
                            color: '#3d3d3d',
                            opacity: showSubContent ? 1 : 0,
                            transform: showSubContent ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1.5s ease-out 0.2s, transform 1.5s ease-out 0.2s'
                        }}
                    >
                        20년 경력 장인이
                        <br />
                        만드는{' '}
                        <span className="text-[#b08968]">단 하나뿐인</span>
                        <br />
                        당신의 가방
                    </Title>

                    {/* 설명 */}
                    <Text
                        size="lg"
                        className="text-gray-600 mb-12 leading-relaxed max-w-lg"
                        style={{
                            opacity: showSubContent ? 1 : 0,
                            transform: showSubContent ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1.5s ease-out 0.4s, transform 1.5s ease-out 0.4s'
                        }}
                    >
                        빠르게 만들지 않습니다. 오래 사용될 것을 만듭니다.
                        <br />
                        한 땀 한 땀 정성을 담아 세상에 단 하나뿐인 가방을 만들어 드립니다.
                    </Text>

                    {/* CTA 버튼 */}
                    <Group
                        gap="md"
                        style={{
                            opacity: showSubContent ? 1 : 0,
                            transform: showSubContent ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1.5s ease-out 0.6s, transform 1.5s ease-out 0.6s'
                        }}
                    >
                        <Button
                            component={Link}
                            href="/products"
                            size="lg"
                            color="brown"
                            radius="xl"
                            rightSection={<IconArrowRight size={18} />}
                            className="shadow-lg shadow-[#b08968]/25 hover:shadow-xl hover:shadow-[#b08968]/30 transition-all"
                        >
                            제품 둘러보기
                        </Button>
                        <Button
                            component={Link}
                            href="/about"
                            size="lg"
                            variant="outline"
                            color="brown"
                            radius="xl"
                        >
                            제작자 소개
                        </Button>
                    </Group>

                    {/* 신뢰 지표 */}
                    <Group
                        gap="xl"
                        className="mt-16 pt-10 border-t border-[#dbc9b5]/50"
                        style={{
                            opacity: showSubContent ? 1 : 0,
                            transform: showSubContent ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1.5s ease-out 0.8s, transform 1.5s ease-out 0.8s'
                        }}
                    >
                        <div>
                            <Text size="xl" fw={700} className="text-[#b08968]">
                                20년+
                            </Text>
                            <Text size="sm" c="dimmed">
                                장인 경력
                            </Text>
                        </div>
                        <div>
                            <Text size="xl" fw={700} className="text-[#b08968]">
                                1,200+
                            </Text>
                            <Text size="sm" c="dimmed">
                                누적 고객
                            </Text>
                        </div>
                        <div>
                            <Text size="xl" fw={700} className="text-[#b08968]">
                                4.9★
                            </Text>
                            <Text size="sm" c="dimmed">
                                평균 평점
                            </Text>
                        </div>
                    </Group>
                </div>
            </Container>

            {/* 우측 이미지 영역 - 장인 작업 이미지 슬라이드 */}
            <div
                className="hidden lg:block absolute right-0 top-0 w-1/2 h-full"
                style={{
                    opacity: showSubContent ? 1 : 0,
                    transform: showSubContent ? 'translateX(0)' : 'translateX(80px)',
                    transition: 'opacity 2s ease-out 1s, transform 2s ease-out 1s'
                }}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* 배경 장식 원 */}
                    <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#dbc9b5]/30 to-[#b08968]/20 rounded-full blur-xl" />

                    {/* 이미지 컨테이너 */}
                    <div className="relative w-[420px] h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                        {artisanImages.map((image, index) => (
                            <div
                                key={image.src}
                                className="absolute inset-0"
                                style={{
                                    opacity: currentImageIndex === index ? 1 : 0,
                                    transition: 'opacity 1.5s ease-in-out'
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        ))}

                        {/* 이미지 인디케이터 */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {artisanImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index
                                        ? 'bg-white w-6'
                                        : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
