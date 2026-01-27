'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    AppShell,
    NavLink,
    Group,
    Text,
    Stack,
    Avatar,
    Divider,
    Button,
} from '@mantine/core';
import {
    IconDashboard,
    IconPackage,
    IconShoppingCart,
    IconNotes,
    IconUsers,
    IconSettings,
    IconNeedle,
    IconLogout,
} from '@tabler/icons-react';

/**
 * 관리자 네비게이션 메뉴
 */
const adminNavItems = [
    { label: '대시보드', href: '/admin', icon: IconDashboard },
    { label: '제품 관리', href: '/admin/products', icon: IconPackage },
    { label: '주문 관리', href: '/admin/orders', icon: IconShoppingCart },
    { label: '제작 일지', href: '/admin/logs', icon: IconNotes },
    { label: '고객 관리', href: '/admin/customers', icon: IconUsers },
];

interface AdminLayoutProps {
    children: ReactNode;
}

/**
 * 관리자 페이지 레이아웃
 * 사이드바 네비게이션 포함
 */
export default function AdminLayout({ children }: AdminLayoutProps) {
    const pathname = usePathname();

    return (
        <AppShell
            navbar={{
                width: 260,
                breakpoint: 'sm',
            }}
            padding="lg"
        >
            {/* 사이드바 */}
            <AppShell.Navbar p="md" className="bg-[#faf5f0] border-r border-[#dbc9b5]">
                <Stack justify="space-between" h="100%">
                    <div>
                        {/* 로고 */}
                        <Link href="/admin" className="no-underline">
                            <Group gap="sm" className="mb-8">
                                <Avatar size={40} radius="xl" color="brown">
                                    <IconNeedle size={24} />
                                </Avatar>
                                <div>
                                    <Text fw={700} size="lg" className="text-[#b08968]">
                                        바늘이야기
                                    </Text>
                                    <Text size="xs" c="dimmed">
                                        관리자
                                    </Text>
                                </div>
                            </Group>
                        </Link>

                        {/* 네비게이션 */}
                        <Stack gap="xs">
                            {adminNavItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    component={Link}
                                    href={item.href}
                                    label={item.label}
                                    leftSection={<item.icon size={20} />}
                                    active={pathname === item.href}
                                    color="brown"
                                    variant="filled"
                                    className="rounded-lg"
                                />
                            ))}
                        </Stack>
                    </div>

                    {/* 하단 메뉴 */}
                    <div>
                        <Divider my="sm" />
                        <NavLink
                            component={Link}
                            href="/admin/settings"
                            label="설정"
                            leftSection={<IconSettings size={20} />}
                            className="rounded-lg"
                        />
                        <NavLink
                            component={Link}
                            href="/"
                            label="사이트로 돌아가기"
                            leftSection={<IconLogout size={20} />}
                            className="rounded-lg"
                            c="dimmed"
                        />
                    </div>
                </Stack>
            </AppShell.Navbar>

            {/* 메인 컨텐츠 */}
            <AppShell.Main className="bg-gray-50 min-h-screen">
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
