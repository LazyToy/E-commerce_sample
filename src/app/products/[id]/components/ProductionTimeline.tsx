'use client';

import Image from 'next/image';
import {
    Card,
    Timeline,
    Text,
    Badge,
    Group,
    Progress,
    ThemeIcon,
} from '@mantine/core';
import { IconPhoto, IconVideo, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';

interface ProductionLog {
    id: string;
    dayNumber: number;
    title: string;
    content: string;
    mediaType: string;
    mediaUrl: string;
    progressPercentage: number;
    createdAt: string;
}

interface ProductionTimelineProps {
    logs: ProductionLog[];
}

/**
 * 미디어 타입에 따른 아이콘 반환
 */
function getMediaIcon(type: string) {
    switch (type) {
        case 'video':
            return <IconVideo size={16} />;
        case 'instagram':
            return <IconBrandInstagram size={16} />;
        case 'youtube':
            return <IconBrandYoutube size={16} />;
        default:
            return <IconPhoto size={16} />;
    }
}

/**
 * 제작 일지 타임라인 컴포넌트
 * PRD의 "제작 타임라인" 기능 구현
 */
export function ProductionTimeline({ logs }: ProductionTimelineProps) {
    if (!logs || logs.length === 0) {
        return (
            <Card padding="xl" radius="lg" withBorder className="text-center">
                <Text c="dimmed" size="lg" className="py-12">
                    아직 제작 일지가 등록되지 않았습니다.
                </Text>
            </Card>
        );
    }

    // 최신 진행률
    const currentProgress = logs[logs.length - 1]?.progressPercentage || 0;

    return (
        <Card padding="xl" radius="lg" withBorder>
            {/* 전체 진행률 */}
            <div className="mb-8">
                <Group justify="space-between" mb="xs">
                    <Text fw={600}>📸 제작 진행률</Text>
                    <Badge color={currentProgress === 100 ? 'green' : 'brown'} size="lg">
                        {currentProgress}% {currentProgress === 100 && '완성!'}
                    </Badge>
                </Group>
                <Progress
                    value={currentProgress}
                    color={currentProgress === 100 ? 'green' : 'brown'}
                    size="lg"
                    radius="xl"
                    animated={currentProgress < 100}
                />
            </div>

            {/* 타임라인 */}
            <Timeline active={logs.length - 1} bulletSize={32} lineWidth={2} color="brown">
                {logs.map((log, index) => (
                    <Timeline.Item
                        key={log.id}
                        bullet={
                            <ThemeIcon
                                size={32}
                                radius="xl"
                                color={index === logs.length - 1 ? 'brown' : 'gray'}
                                variant={index === logs.length - 1 ? 'filled' : 'light'}
                            >
                                {getMediaIcon(log.mediaType)}
                            </ThemeIcon>
                        }
                        title={
                            <Group gap="sm">
                                <Text fw={600}>{log.title}</Text>
                                <Badge color="gray" variant="light" size="sm">
                                    Day {log.dayNumber}
                                </Badge>
                            </Group>
                        }
                    >
                        <Text size="sm" c="dimmed" mt={4}>
                            {log.createdAt}
                        </Text>
                        <Text size="sm" mt={8} className="leading-relaxed">
                            {log.content}
                        </Text>

                        {/* 미디어 프리뷰 */}
                        {log.mediaUrl && log.mediaType === 'image' && (
                            <Card
                                padding={0}
                                radius="md"
                                mt="sm"
                                className="w-48 h-32 overflow-hidden"
                                withBorder
                            >
                                <Image
                                    src={log.mediaUrl}
                                    alt={log.title}
                                    fill
                                    className="object-cover"
                                    sizes="192px"
                                />
                            </Card>
                        )}

                        {/* 비디오/SNS 링크 */}
                        {(log.mediaType === 'video' ||
                            log.mediaType === 'youtube' ||
                            log.mediaType === 'instagram') && (
                                <Card
                                    padding="sm"
                                    radius="md"
                                    mt="sm"
                                    className="bg-gray-50 w-fit cursor-pointer hover:bg-gray-100"
                                    withBorder
                                    component="a"
                                    href={log.mediaUrl}
                                    target="_blank"
                                >
                                    <Group gap="xs">
                                        {getMediaIcon(log.mediaType)}
                                        <Text size="sm" c="dimmed">
                                            {log.mediaType === 'youtube'
                                                ? 'YouTube 영상 보기'
                                                : log.mediaType === 'instagram'
                                                    ? 'Instagram 게시물 보기'
                                                    : '영상 보기'}
                                        </Text>
                                    </Group>
                                </Card>
                            )}

                        {/* 진행률 표시 */}
                        <Group gap="xs" mt="sm">
                            <Text size="xs" c="dimmed">
                                진행률
                            </Text>
                            <Progress
                                value={log.progressPercentage}
                                color="brown"
                                size="xs"
                                w={100}
                                radius="xl"
                            />
                            <Text size="xs" c="dimmed">
                                {log.progressPercentage}%
                            </Text>
                        </Group>
                    </Timeline.Item>
                ))}
            </Timeline>
        </Card>
    );
}
