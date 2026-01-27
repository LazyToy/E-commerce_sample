'use client';

import { Tabs, Text, Card, Stack, Group, ThemeIcon, List } from '@mantine/core';
import {
    IconPhoto,
    IconHistory,
    IconShieldCheck,
    IconMessageCircle,
    IconCheck,
} from '@tabler/icons-react';
import { ProductionTimeline } from './ProductionTimeline';

interface ProductTabsClientProps {
    description: string;
    makerNote: string;
    productionLogs: {
        id: string;
        dayNumber: number;
        title: string;
        content: string;
        mediaType: string;
        mediaUrl: string;
        progressPercentage: number;
        createdAt: string;
    }[];
}

/**
 * 제품 상세 탭 (클라이언트 컴포넌트)
 */
export function ProductTabsClient({
    description,
    makerNote,
    productionLogs,
}: ProductTabsClientProps) {
    return (
        <Tabs defaultValue="detail" color="brown" radius="lg" className="mt-12">
            <Tabs.List grow>
                <Tabs.Tab value="detail" leftSection={<IconPhoto size={16} />}>
                    상세 정보
                </Tabs.Tab>
                <Tabs.Tab value="logs" leftSection={<IconHistory size={16} />}>
                    제작 일지
                </Tabs.Tab>
                <Tabs.Tab value="as" leftSection={<IconShieldCheck size={16} />}>
                    A/S 안내
                </Tabs.Tab>
                <Tabs.Tab value="review" leftSection={<IconMessageCircle size={16} />}>
                    리뷰
                </Tabs.Tab>
            </Tabs.List>

            {/* 상세 정보 탭 */}
            <Tabs.Panel value="detail" pt="xl">
                <Card padding="xl" radius="lg" withBorder>
                    <Text className="whitespace-pre-line leading-relaxed">
                        {description}
                    </Text>

                    {makerNote && (
                        <Card
                            padding="lg"
                            radius="md"
                            className="bg-[#f5ebe0] border-l-4 border-[#b08968] mt-8"
                        >
                            <Text size="sm" fw={600} className="text-[#b08968] mb-2">
                                💬 제작자 노트
                            </Text>
                            <Text className="italic text-gray-700">{makerNote}</Text>
                        </Card>
                    )}
                </Card>
            </Tabs.Panel>

            {/* 제작 일지 탭 */}
            <Tabs.Panel value="logs" pt="xl">
                <ProductionTimeline logs={productionLogs} />
            </Tabs.Panel>

            {/* A/S 안내 탭 */}
            <Tabs.Panel value="as" pt="xl">
                <Card padding="xl" radius="lg" withBorder>
                    <Stack gap="lg">
                        <Group gap="md">
                            <ThemeIcon size={48} radius="xl" color="brown" variant="light">
                                <IconShieldCheck size={24} />
                            </ThemeIcon>
                            <div>
                                <Text fw={700} size="lg">
                                    제작자 보증서 포함
                                </Text>
                                <Text c="dimmed" size="sm">
                                    모든 제품에 제작자 서명 보증서가 동봉됩니다
                                </Text>
                            </div>
                        </Group>

                        <Text fw={600} size="lg" className="mt-4">
                            A/S 정책
                        </Text>
                        <List
                            spacing="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl" color="green">
                                    <IconCheck size={12} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>구매일로부터 1년 이내 봉제 하자 무상 수선</List.Item>
                            <List.Item>그 외 수선은 실비로 진행 (상담 후 안내)</List.Item>
                            <List.Item>수선 기간은 약 7-14일 소요</List.Item>
                            <List.Item>택배 왕복 비용은 고객 부담</List.Item>
                        </List>

                        <Card padding="md" radius="md" className="bg-gray-50 mt-4">
                            <Text size="sm" c="dimmed">
                                ※ 고객 부주의로 인한 손상, 자연적인 마모는 유상 수선 대상입니다.
                                <br />
                                ※ A/S 문의: hello@baneul-iyagi.com
                            </Text>
                        </Card>
                    </Stack>
                </Card>
            </Tabs.Panel>

            {/* 리뷰 탭 */}
            <Tabs.Panel value="review" pt="xl">
                <Card padding="xl" radius="lg" withBorder className="text-center">
                    <Text c="dimmed" size="lg" className="py-12">
                        아직 리뷰가 없습니다.
                        <br />
                        첫 번째 리뷰를 작성해주세요!
                    </Text>
                </Card>
            </Tabs.Panel>
        </Tabs>
    );
}
