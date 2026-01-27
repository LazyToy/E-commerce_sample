'use client';

import Link from 'next/link';
import {
    Container,
    Title,
    Text,
    Button,
    Group,
    Stack,
    Card,
    Avatar,
    List,
    ThemeIcon,
} from '@mantine/core';
import {
    IconArrowRight,
    IconAward,
    IconHeart,
    IconCertificate,
    IconQuote,
} from '@tabler/icons-react';

/**
 * 제작자 소개 섹션 컴포넌트
 * 장인의 프로필과 철학을 보여줍니다.
 */
export function MakerSection() {
    return (
        <section className="py-[75px] bg-white">
            <Container size="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* 좌: 이미지/프로필 영역 */}
                    <div className="relative">
                        <Card
                            padding={0}
                            radius="xl"
                            className="overflow-hidden bg-gradient-to-br from-[#f5ebe0] to-[#ead5cc] aspect-[4/5]"
                        >
                            {/* 프로필 이미지 플레이스홀더 */}
                            <div className="w-full h-full flex items-center justify-center">
                                <Avatar
                                    size={200}
                                    radius="xl"
                                    color="brown"
                                    className="border-4 border-white shadow-xl"
                                >
                                    <IconHeart size={80} className="text-[#b08968]" />
                                </Avatar>
                            </div>
                        </Card>

                        {/* 경력 배지 */}
                        <Card
                            padding="md"
                            radius="lg"
                            shadow="lg"
                            className="absolute -bottom-6 -right-6 bg-white"
                            withBorder
                        >
                            <Group gap="sm">
                                <ThemeIcon size={48} radius="xl" color="brown">
                                    <IconAward size={24} />
                                </ThemeIcon>
                                <div>
                                    <Text fw={700} size="xl" className="text-[#b08968]">
                                        20년+
                                    </Text>
                                    <Text size="xs" c="dimmed">
                                        장인 경력
                                    </Text>
                                </div>
                            </Group>
                        </Card>
                    </div>

                    {/* 우: 소개 텍스트 영역 */}
                    <Stack gap="lg">
                        <div>
                            <Text size="sm" fw={600} className="text-[#b08968] mb-2">
                                ABOUT THE MAKER
                            </Text>
                            <Title order={2} className="text-2xl md:text-3xl mb-4">
                                안녕하세요,
                                <br />
                                바느질 장인입니다.
                            </Title>
                        </div>

                        {/* 인용구 */}
                        <Card
                            padding="lg"
                            radius="lg"
                            className="bg-[#f5ebe0] border-l-4 border-[#b08968]"
                        >
                            <Group gap="sm" align="flex-start">
                                <IconQuote size={24} className="text-[#b08968] flex-shrink-0" />
                                <Text size="lg" className="italic leading-relaxed text-gray-700">
                                    "빠르게 만들지 않습니다.
                                    <br />
                                    오래 사용될 것을 만듭니다."
                                </Text>
                            </Group>
                        </Card>

                        <Text c="dimmed" className="leading-relaxed">
                            20년간 바느질 한 길을 걸어왔습니다. 대량생산의 효율성보다
                            한 땀 한 땀의 정성을 믿습니다. 제 손에서 태어나는 가방들이
                            여러분의 일상에 특별한 동반자가 되길 바랍니다.
                        </Text>

                        {/* 경력 하이라이트 */}
                        <List
                            spacing="sm"
                            icon={
                                <ThemeIcon size={24} radius="xl" color="brown" variant="light">
                                    <IconCertificate size={14} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>패션 전문학교 졸업</List.Item>
                            <List.Item>○○백화점 가죽공방 입점 경력 5년</List.Item>
                            <List.Item>개인 고객 누적 1,200명</List.Item>
                            <List.Item>평균 고객 만족도 4.9점</List.Item>
                        </List>

                        <Group gap="md">
                            <Button
                                component={Link}
                                href="/about"
                                size="lg"
                                color="brown"
                                radius="xl"
                                rightSection={<IconArrowRight size={18} />}
                            >
                                더 알아보기
                            </Button>
                            <Button
                                component={Link}
                                href="/visit"
                                size="lg"
                                variant="outline"
                                color="brown"
                                radius="xl"
                            >
                                작업실 방문 예약
                            </Button>
                        </Group>
                    </Stack>
                </div>
            </Container>
        </section>
    );
}
