'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    Container,
    Group,
    Burger,
    Drawer,
    Stack,
    Button,
    Text,
    ActionIcon,
    Badge,
    Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconShoppingCart,
    IconUser,
    IconSearch,
    IconNeedle,
} from '@tabler/icons-react';

/**
 * 네비게이션 링크 정의
 */
const navLinks = [
    { label: '제품', href: '/products' },
    { label: '제작자 소개', href: '/about' },
    { label: '제작 일지', href: '/logs' },
    { label: '커스텀 오더', href: '/custom' },
];

/**
 * 헤더 컴포넌트
 * 네비게이션, 검색, 장바구니, 로그인 버튼을 포함합니다.
 */
export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [cartCount] = useState(0); // TODO: 장바구니 상태 연동

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <Container size="xl" className="py-4">
                <Group justify="space-between" align="center">
                    {/* 로고 */}
                    <Link href="/" className="flex items-center gap-2 no-underline">
                        <IconNeedle size={32} className="text-[#b08968]" />
                        <Text
                            size="xl"
                            fw={700}
                            className="text-[#b08968] font-serif tracking-tight"
                        >
                            바늘이야기
                        </Text>
                    </Link>

                    {/* 데스크톱 네비게이션 */}
                    <Group gap="xl" visibleFrom="md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-[#b08968] transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Group>

                    {/* 우측 액션 버튼들 */}
                    <Group gap="sm">
                        {/* 검색 */}
                        <ActionIcon
                            variant="subtle"
                            color="gray"
                            size="lg"
                            aria-label="검색"
                        >
                            <IconSearch size={20} />
                        </ActionIcon>

                        {/* 장바구니 */}
                        <Link href="/cart">
                            <ActionIcon
                                variant="subtle"
                                color="gray"
                                size="lg"
                                aria-label="장바구니"
                                className="relative"
                            >
                                <IconShoppingCart size={20} />
                                {cartCount > 0 && (
                                    <Badge
                                        size="xs"
                                        color="red"
                                        circle
                                        className="absolute -top-1 -right-1"
                                    >
                                        {cartCount}
                                    </Badge>
                                )}
                            </ActionIcon>
                        </Link>

                        {/* 로그인/마이페이지 */}
                        <Button
                            component={Link}
                            href="/auth/login"
                            variant="subtle"
                            color="brown"
                            leftSection={<IconUser size={18} />}
                            visibleFrom="sm"
                        >
                            로그인
                        </Button>

                        {/* 모바일 메뉴 버튼 */}
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="md"
                            size="sm"
                            aria-label="메뉴 열기"
                        />
                    </Group>
                </Group>
            </Container>

            {/* 모바일 드로어 메뉴 */}
            <Drawer
                opened={opened}
                onClose={close}
                title={
                    <Group gap="xs">
                        <IconNeedle size={24} className="text-[#b08968]" />
                        <Text fw={700} className="text-[#b08968]">
                            바늘이야기
                        </Text>
                    </Group>
                }
                padding="lg"
                size="xs"
                position="right"
            >
                <Stack gap="md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            className="text-gray-700 hover:text-[#b08968] py-2 text-lg"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Divider my="sm" />
                    <Button
                        component={Link}
                        href="/auth/login"
                        variant="light"
                        color="brown"
                        fullWidth
                        leftSection={<IconUser size={18} />}
                    >
                        로그인
                    </Button>
                </Stack>
            </Drawer>
        </header>
    );
}
