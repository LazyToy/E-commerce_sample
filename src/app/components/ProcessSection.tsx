'use client';

import Link from 'next/link';
import {
    Container,
    Title,
    Text,
    Button,
    Card,
    ThemeIcon,
} from '@mantine/core';
import {
    IconArrowRight,
    IconScissors,
    IconNeedle,
    IconRuler,
    IconPackage,
} from '@tabler/icons-react';

/**
 * 제작 과정 단계 데이터
 */
const processSteps = [
    {
        iconName: 'ruler',
        title: '패턴 재단',
        description: '정확한 치수로 원단을 재단합니다. 1mm의 오차도 허용하지 않습니다.',
        day: 'Day 1-2',
    },
    {
        iconName: 'scissors',
        title: '원단 가공',
        description: '접착심을 부착하고 가장자리를 깔끔하게 정리합니다.',
        day: 'Day 3',
    },
    {
        iconName: 'needle',
        title: '손바느질',
        description: '한 땀 한 땀 정성을 담아 봉제합니다. 핸드스티치로 마무리합니다.',
        day: 'Day 4-6',
    },
    {
        iconName: 'package',
        title: '검수 및 포장',
        description: '꼼꼼한 검수 후 보증서와 함께 정성껏 포장합니다.',
        day: 'Day 7',
    },
];

/**
 * 아이콘 이름에 따른 아이콘 컴포넌트 반환
 */
function getIcon(iconName: string) {
    switch (iconName) {
        case 'ruler':
            return <IconRuler size={32} />;
        case 'scissors':
            return <IconScissors size={32} />;
        case 'needle':
            return <IconNeedle size={32} />;
        case 'package':
            return <IconPackage size={32} />;
        default:
            return <IconNeedle size={32} />;
    }
}

/**
 * 제작 과정 섹션 컴포넌트
 */
export function ProcessSection() {
    return (
        <section className="py-[75px] bg-[#faf5f0]">
            <Container size="xl">
                {/* 섹션 헤더 */}
                <div className="text-center mb-12">
                    <Text size="sm" fw={600} className="text-[#b08968] mb-2">
                        MAKING PROCESS
                    </Text>
                    <Title order={2} className="text-2xl md:text-3xl mb-4">
                        정성이 담긴 제작 과정
                    </Title>
                    <Text c="dimmed" className="max-w-lg mx-auto">
                        하나의 가방이 완성되기까지 약 7일의 시간이 필요합니다.
                        <br />
                        모든 과정은 숙련된 장인의 손에서 진행됩니다.
                    </Text>
                </div>

                {/* 제작 과정 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {processSteps.map((step, index) => (
                        <Card
                            key={step.title}
                            padding="xl"
                            radius="lg"
                            className="text-center group hover:shadow-lg transition-shadow"
                            withBorder
                        >
                            <div className="relative mb-4">
                                <ThemeIcon
                                    size={64}
                                    radius="xl"
                                    color="brown"
                                    variant="light"
                                    className="mx-auto group-hover:scale-110 transition-transform"
                                >
                                    {getIcon(step.iconName)}
                                </ThemeIcon>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#b08968] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <Text size="xs" c="dimmed" mb={8}>
                                {step.day}
                            </Text>
                            <Text fw={600} size="lg" mb={8}>
                                {step.title}
                            </Text>
                            <Text size="sm" c="dimmed" className="leading-relaxed">
                                {step.description}
                            </Text>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                    <Button
                        component={Link}
                        href="/logs"
                        size="lg"
                        color="brown"
                        variant="outline"
                        radius="xl"
                        rightSection={<IconArrowRight size={18} />}
                    >
                        제작 일지 둘러보기
                    </Button>
                </div>
            </Container>
        </section>
    );
}
