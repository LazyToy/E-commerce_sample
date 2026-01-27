'use client';

import Link from 'next/link';
import {
    Container,
    Group,
    Stack,
    Text,
    Anchor,
    Divider,
    SimpleGrid,
} from '@mantine/core';
import {
    IconBrandInstagram,
    IconBrandYoutube,
    IconMail,
    IconPhone,
    IconMapPin,
    IconNeedle,
} from '@tabler/icons-react';

/**
 * 푸터 링크 그룹
 */
const footerLinks = {
    shop: [
        { label: '전체 제품', href: '/products' },
        { label: '가방', href: '/products?category=bag' },
        { label: '파우치', href: '/products?category=pouch' },
        { label: '소품', href: '/products?category=accessory' },
    ],
    support: [
        { label: '자주 묻는 질문', href: '/faq' },
        { label: 'A/S 안내', href: '/as' },
        { label: '배송 안내', href: '/shipping' },
        { label: '교환/환불', href: '/refund' },
    ],
    about: [
        { label: '제작자 소개', href: '/about' },
        { label: '브랜드 스토리', href: '/story' },
        { label: '작업실 방문', href: '/visit' },
        { label: '제작 일지', href: '/logs' },
    ],
};

/**
 * 푸터 컴포넌트
 * 사이트 정보, 링크, 연락처를 표시합니다.
 */
export function Footer() {
    return (
        <footer className="bg-[#f5ebe0] border-t border-[#dbc9b5] mt-16">
            <Container size="xl" className="py-12">
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
                    {/* 브랜드 정보 */}
                    <Stack gap="md">
                        <Group gap="xs">
                            <IconNeedle size={28} className="text-[#b08968]" />
                            <Text size="lg" fw={700} className="text-[#b08968]">
                                바늘이야기
                            </Text>
                        </Group>
                        <Text size="sm" c="dimmed" className="leading-relaxed">
                            20년 경력 장인이 한 땀 한 땀 정성껏 만드는
                            <br />
                            프리미엄 핸드메이드 가방과 소품
                        </Text>
                        <Group gap="sm" mt="xs">
                            <Anchor
                                href="https://instagram.com"
                                target="_blank"
                                c="dimmed"
                                className="hover:text-[#b08968]"
                            >
                                <IconBrandInstagram size={22} />
                            </Anchor>
                            <Anchor
                                href="https://youtube.com"
                                target="_blank"
                                c="dimmed"
                                className="hover:text-[#b08968]"
                            >
                                <IconBrandYoutube size={22} />
                            </Anchor>
                        </Group>
                    </Stack>

                    {/* 쇼핑 링크 */}
                    <Stack gap="sm">
                        <Text fw={600} size="sm" className="text-[#6e4d3b]">
                            쇼핑
                        </Text>
                        {footerLinks.shop.map((link) => (
                            <Anchor
                                key={link.href}
                                component={Link}
                                href={link.href}
                                size="sm"
                                c="dimmed"
                                className="hover:text-[#b08968]"
                            >
                                {link.label}
                            </Anchor>
                        ))}
                    </Stack>

                    {/* 고객 지원 */}
                    <Stack gap="sm">
                        <Text fw={600} size="sm" className="text-[#6e4d3b]">
                            고객 지원
                        </Text>
                        {footerLinks.support.map((link) => (
                            <Anchor
                                key={link.href}
                                component={Link}
                                href={link.href}
                                size="sm"
                                c="dimmed"
                                className="hover:text-[#b08968]"
                            >
                                {link.label}
                            </Anchor>
                        ))}
                    </Stack>

                    {/* 연락처 */}
                    <Stack gap="sm">
                        <Text fw={600} size="sm" className="text-[#6e4d3b]">
                            연락처
                        </Text>
                        <Group gap="xs" wrap="nowrap">
                            <IconPhone size={16} className="text-[#b08968]" />
                            <Text size="sm" c="dimmed">
                                010-1234-5678
                            </Text>
                        </Group>
                        <Group gap="xs" wrap="nowrap">
                            <IconMail size={16} className="text-[#b08968]" />
                            <Text size="sm" c="dimmed">
                                hello@baneul-iyagi.com
                            </Text>
                        </Group>
                        <Group gap="xs" wrap="nowrap" align="flex-start">
                            <IconMapPin size={16} className="text-[#b08968] flex-shrink-0 mt-1" />
                            <Text size="sm" c="dimmed">
                                서울시 성수동 XX빌딩 3층
                                <br />
                                (방문 예약제)
                            </Text>
                        </Group>
                    </Stack>
                </SimpleGrid>

                <Divider my="xl" color="rgba(176, 137, 104, 0.3)" />

                {/* 하단 저작권 */}
                <Group justify="space-between" align="center">
                    <Text size="xs" c="dimmed">
                        © 2026 바늘이야기. All rights reserved.
                    </Text>
                    <Group gap="md">
                        <Anchor
                            component={Link}
                            href="/privacy"
                            size="xs"
                            c="dimmed"
                            className="hover:text-[#b08968]"
                        >
                            개인정보처리방침
                        </Anchor>
                        <Anchor
                            component={Link}
                            href="/terms"
                            size="xs"
                            c="dimmed"
                            className="hover:text-[#b08968]"
                        >
                            이용약관
                        </Anchor>
                    </Group>
                </Group>
            </Container>
        </footer>
    );
}
