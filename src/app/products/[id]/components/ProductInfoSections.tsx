'use client';

import {
    Stack,
    Title,
    Text,
    Grid,
    Card,
    Group,
    ThemeIcon,
    Table,
    Badge,
    Divider,
    List,
    Box,
    Button,
    Container,
    Paper,
    Avatar,
    ActionIcon,
} from '@mantine/core';
import {
    IconStar,
    IconTarget,
    IconHeart,
    IconInfoCircle,
    IconAlertTriangle,
    IconWashDryclean,
    IconCheck,
    IconPackage,
    IconManualGearbox,
    IconWallet,
    IconDeviceMobile,
    IconBottle,
    IconKey,
    IconChecklist,
    IconGift,
    IconCertificate,
    IconMessageDots,
    IconCalendarCheck,
    IconLeaf,
    IconHanger,
    IconCamera,
    IconQuote,
    IconArrowRight,
} from '@tabler/icons-react';
import Image from 'next/image';

/**
 * 1. [기존-개선] 몰입형 히어로 섹션
 * - 동적이고 감성적인 분위기 강화
 */
function ImmersiveHero() {
    return (
        <Box className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#fdfaf7] -mx-8">
            {/* 배경 요소 */}
            <Box className="absolute inset-0 opacity-30">
                <Image
                    src="/images/linen-texture.jpg"
                    alt="Linen Texture"
                    fill
                    className="object-cover"
                />
            </Box>
            <Box className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfaf7]/50 to-[#fdfaf7]" />

            <Container size="md" className="relative z-10 text-center">
                <Stack align="center" gap="xl">
                    <Badge
                        variant="outline"
                        color="brown"
                        size="lg"
                        radius="xs"
                        className="tracking-[0.5em] px-6 py-3 border-[#b08968] text-[#b08968]"
                    >
                        2026 NEW COLLECTION
                    </Badge>

                    <Title
                        order={1}
                        className="text-4xl md:text-7xl font-serif italic text-[#4a3728] leading-tight px-4"
                    >
                        The Sound of<br />
                        <span className="text-[#b08968]">Linen & Craft</span>
                    </Title>

                    <Text size="xl" className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                        바늘이야기의 장인정신이 깃든 린넨 토트백.<br />
                        시간이 지날수록 깊어지는 당신만의 이야기를 담아보세요.
                    </Text>

                    <Box className="flex flex-col items-center gap-2">
                        <Button
                            variant="light"
                            color="brown"
                            size="xl"
                            radius="xl"
                            className="px-12 h-14 text-lg hover:scale-105 transition-transform duration-300"
                            rightSection={<IconArrowRight size={20} />}
                        >
                            제품 자세히 보기
                        </Button>
                        <Text size="xs" c="dimmed" className="tracking-widest uppercase">Model: 163cm / 48kg</Text>
                    </Box>
                </Stack>
            </Container>

            {/* 스크롤 유도 아이콘 */}
            <Box className="absolute bottom-12 animate-bounce opacity-50">
                <Text size="xs" mb="xs" ta="center">SCROLL</Text>
                <Box className="w-[1px] h-16 bg-[#b08968] mx-auto" />
            </Box>
        </Box>
    );
}

/**
 * 2. [신규] 브랜드 철학 (Brand Philosophy)
 * - 네오 헤리티지 & 시즌 컨셉 전달
 */
function BrandPhilosophy() {
    return (
        <Container size="lg" py={50}>
            <Grid align="center" gutter={60}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Box className="relative">
                        <Box className="aspect-[4/5] max-w-[450px] mx-auto rounded-tr-[100px] rounded-bl-[100px] overflow-hidden relative shadow-2xl">
                            <Image
                                src="/images/brand-story.jpg"
                                alt="Brand Philosophy"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </Box>
                        <Box className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f5ebe0] rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                            <Text className="font-serif italic text-center leading-none text-[#4a3728]">
                                Since<br /><span className="text-2xl font-bold">1998</span>
                            </Text>
                        </Box>
                    </Box>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="xl">
                        <Box>
                            <Text className="text-[#b08968] tracking-widest font-bold mb-4 uppercase">Neo-Heritage</Text>
                            <Title order={2} className="text-4xl md:text-5xl font-serif text-[#4a3728] leading-[1.2]">
                                과거의 따뜻함을<br />
                                현대로 가져오다
                            </Title>
                        </Box>
                        <Text className="text-gray-600 text-lg leading-loose text-justify">
                            우리는 단순히 가방을 만드는 것이 아닙니다. 잊혀져 가는 손바느질의 따뜻함과
                            현대적인 린넨의 자연스러운 멋을 연결합니다.<br /><br />
                            이번 시즌 '체크 앤 돌(Check & Doll)' 컬렉션은 클래식한 체크 패턴 위에
                            장난기 넘치는 입체 인형 디테일을 더해, 성숙하지만 때묻지 않은
                            당신의 순수함을 표현합니다.
                        </Text>
                        <Group>
                            <Box className="h-[1px] w-20 bg-[#b08968]" />
                            <Text className="font-serif italic text-[#4a3728]">Baneul-Iyagi Studio</Text>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

/**
 * 3. [기존] 핵심 구매 포인트
 */
function KeyPoints() {
    const points = [
        {
            title: '독보적 포인트',
            description: '심플한 룩에 확실한 임팩트를 주는 입체 아플리케',
            icon: <IconStar size={32} />,
            color: 'orange',
        },
        {
            title: '프리미엄 텍스처',
            description: '클래식한 결이 살아있는 린넨과 탄탄한 퀼팅의 조화',
            icon: <IconTarget size={32} />,
            color: 'blue',
        },
        {
            title: '타임리스 무드',
            description: '유행을 타지 않는 빈티지 프레피룩의 완성',
            icon: <IconHeart size={32} />,
            color: 'pink',
        },
    ];

    return (
        <Box className="bg-white py-12 relative">
            <Container size="lg">
                <Stack align="center" gap="xl" mb={60}>
                    <Badge color="gray" variant="light" size="lg">WHY THIS BAG?</Badge>
                    <Title order={2} className="text-3xl font-serif text-center">
                        당신의 일상이<br className="md:hidden" /> 특별해지는 이유
                    </Title>
                </Stack>
                <Grid gutter="xl">
                    {points.map((point, index) => (
                        <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                            <Paper
                                p="xl"
                                radius="lg"
                                className="text-center h-full hover:-translate-y-2 transition-transform duration-300 border border-gray-100 shadow-sm hover:shadow-xl bg-gray-50/50"
                            >
                                <ThemeIcon
                                    size={80}
                                    radius="100%"
                                    color={point.color}
                                    variant="light"
                                    mb="lg"
                                    className="mx-auto"
                                >
                                    {point.icon}
                                </ThemeIcon>
                                <Title order={4} mb="md" className="font-serif text-xl">{point.title}</Title>
                                <Text c="dimmed" className="leading-relaxed">{point.description}</Text>
                            </Paper>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

/**
 * 4. [신규] 소재 이야기 (Material Story)
 * - 지속 가능성 & 린넨의 가치
 */
function MaterialStory() {
    return (
        <Box className="bg-[#f2efe9] py-14 overflow-hidden relative">
            <Container size="lg" className="relative z-10">
                <Grid align="center" gutter={80}>
                    <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 2, md: 1 }}>
                        <Stack gap="xl">
                            <Group gap="xs">
                                <IconLeaf size={24} className="text-[#64a98c]" />
                                <Text fw={700} className="text-[#64a98c] tracking-wider uppercase">Eco-Friendly Fabric</Text>
                            </Group>
                            <Title order={2} className="text-4xl text-[#4a3728] font-serif">
                                숨쉬는 원단,<br />자연을 닮은 린넨
                            </Title>
                            <Stack gap="md">
                                <Text className="text-gray-700 leading-relaxed text-lg text-justify">
                                    우리가 사용하는 린넨은 자연에서 와서 다시 자연으로 돌아갈 수 있는
                                    친환경적인 소재입니다. 농약을 거의 사용하지 않고 재배된 아마(Flax)로
                                    만들어져 피부에 닿는 감촉이 부드럽고 안전합니다.
                                </Text>
                                <List
                                    spacing="md"
                                    icon={<ThemeIcon color="green" variant="light" radius="xl" size="sm"><IconCheck size={12} /></ThemeIcon>}
                                    className="text-gray-600"
                                >
                                    <List.Item><b>초정밀 매립 봉제:</b> 수만 번의 마찰 테스트를 통과한 내구성</List.Item>
                                    <List.Item><b>에이징 매력:</b> 100회 세탁 후에도 변함없는 형태와 더 부드러워지는 질감</List.Item>
                                    <List.Item><b>저자극 자연 소재:</b> OEKO-TEX 1등급 인증 원사 사용</List.Item>
                                </List>
                            </Stack>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 1, md: 2 }}>
                        <Grid>
                            <Grid.Col span={6} className="mt-12">
                                <Image
                                    src="/images/material-1.jpg"
                                    alt="Linen raw material"
                                    width={400}
                                    height={500}
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image
                                    src="/images/material-2.jpg"
                                    alt="Linen texture closeup"
                                    width={400}
                                    height={500}
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                                />
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
            {/* 배경 장식 */}
            <IconLeaf size={400} className="absolute -bottom-20 -right-20 text-[#64a98c]/5 rotate-45 z-0" />
        </Box>
    );
}

/**
 * 5. [기존] 장인 인증 (Artisan Certification)
 */
function ArtisanSignature() {
    return (
        <Container size="md" py={60}>
            <Box className="relative">
                <Box className="absolute inset-0 border-[8px] md:border-[12px] border-[#f5ebe0] rotate-1 md:rotate-2" />
                <Paper p={{ base: 'xl', md: 60 }} shadow="xl" radius="sm" className="relative bg-white text-center rotate-0 border border-gray-200">
                    <Stack align="center" gap="lg">
                        <IconCertificate size={48} className="text-[#b08968]" />
                        <Title order={3} className="font-serif italic text-3xl">Handmade Promise</Title>
                        <Text className="text-xl font-light leading-relaxed">
                            "이 가방은 기계가 아닌<br />
                            사람의 손끝에서 완성되었습니다."
                        </Text>
                        <Box className="w-12 h-[2px] bg-gray-200 my-4" />
                        <Text className="text-gray-500 max-w-lg mx-auto">
                            바늘이야기의 모든 제품은 엄격한 품질 관리를 거쳐 제작됩니다.
                            제품 패키지에는 제작 책임자의 실명이 담긴 품질 보증서가 동봉됩니다.
                            이는 단순한 가방이 아닌, 당신을 위한 하나의 작품입니다.
                        </Text>

                        {/* 신규: 작업 공정 이미지 */}
                        <Box className="mt-8 max-w-md w-full">
                            <Box className="aspect-video relative rounded-xl overflow-hidden shadow-lg border-4 border-[#f5ebe0]">
                                <Image
                                    src="/images/process-1.jpg"
                                    alt="Crafting Process"
                                    fill
                                    className="object-contain bg-[#fdfaf7]"
                                />
                                <Box className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
                            </Box>
                            <Text size="xs" c="dimmed" mt="sm" ta="center" className="italic">장인의 손끝에서 한 땀 한 땀 완성되는 과정</Text>
                        </Box>

                        <Box className="mt-8 flex flex-col items-center">
                            <Image
                                src="/images/signature.png"
                                alt="Master Artisan Signature"
                                width={150}
                                height={60}
                                className="opacity-70 mb-2"
                            />
                            <Text size="sm" c="dimmed" className="tracking-widest uppercase">Master Artisan</Text>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </Container>
    );
}

/**
 * 6. [기존] 디테일 하이라이트
 */
function DetailHighlights() {
    const highlights = [
        {
            title: '생동감 넘치는 입체감',
            description: '평면적인 그림이 아닙니다. 볼륨감 있게 채워진 인형의 실루엣을 느껴보세요.',
            image: '/images/detail_1.png',
        },
        {
            title: '섬세한 헤어 & 리본',
            description: '한 가닥 한 가닥 심은 듯한 얀(Yarn) 헤어와 실크 리본의 고급스러운 조화.',
            image: '/images/detail_2.png',
        },
        {
            title: '견고한 마감',
            description: '보이지 않는 안감까지 꼼꼼하게. 오랫동안 함께할 수 있는 탄탄한 봉제.',
            image: '/images/detail_3.png',
        },
    ];

    return (
        <Box className="py-12">
            <Container size="lg">
                <Box className="text-center mb-16">
                    <Text className="text-[#b08968] font-bold tracking-widest uppercase mb-2">High-End Quality</Text>
                    <Title order={2} className="text-4xl font-serif">디테일이 퀄리티를 정의합니다</Title>
                </Box>
                <Grid gutter={40}>
                    {highlights.map((item, index) => (
                        <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                            <Box className="group cursor-pointer">
                                <Box className="scale-100 overflow-hidden rounded-2xl mb-6 shadow-md hover:shadow-2xl transition-all duration-500">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={400}
                                        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </Box>
                                <Title order={4} className="mb-2 text-xl group-hover:text-[#b08968] transition-colors">{item.title}</Title>
                                <Text c="dimmed" className="leading-relaxed">{item.description}</Text>
                            </Box>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

/**
 * 7. [신규] 스타일 가이드 / 룩북 (Style Lookbook)
 */
function StyleLookbook() {
    return (
        <Box className="bg-[#f9f7f4] text-[#4a3728] py-14">
            <Container size="lg">
                <Group justify="space-between" align="end" mb={60}>
                    <Box>
                        <Stack gap={0}>
                            <Group gap="xs" mb="xs">
                                <IconHanger size={24} className="text-[#b08968]" />
                                <Text className="text-[#b08968] tracking-widest font-bold uppercase">Style Guide</Text>
                            </Group>
                            <Title order={2} className="text-4xl font-serif text-[#4a3728]">어떻게 매치할까요?</Title>
                        </Stack>
                    </Box>
                    <Text className="text-gray-500 hidden md:block">어떤 룩에도 자연스럽게 스며드는 토트백</Text>
                </Group>

                <Grid gutter="md">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Box className="relative aspect-[3/4] group overflow-hidden rounded-2xl shadow-lg border border-white/50">
                            <Image
                                src="/images/lookbook-1.jpg"
                                alt="Trench Coat Style"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <Box className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                <Title order={3} className="text-xl md:text-2xl text-white mb-2">Classic Trench</Title>
                            </Box>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack h="100%" gap="md">
                            <Box className="relative h-[300px] md:flex-1 group overflow-hidden rounded-2xl shadow-md border border-white/50">
                                <Image
                                    src="/images/lookbook-2.jpg"
                                    alt="Cozy Knit Style"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <Box className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                    <Title order={4} className="text-lg md:text-xl text-white mb-1">Cozy Knitwear</Title>
                                </Box>
                            </Box>
                            <Box className="relative h-[300px] md:flex-1 group overflow-hidden rounded-2xl shadow-md border border-white/50">
                                <Image
                                    src="/images/lookbook-3.jpg"
                                    alt="Summer Dress Style"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <Box className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                    <Title order={4} className="text-lg md:text-xl text-white mb-1">Summer Breeze</Title>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}

/**
 * 8. [기존] 실사용 수납 가이드
 */
function PracticalStorage() {
    const items = [
        { name: '스마트폰', icon: <IconDeviceMobile size={24} /> },
        { name: '지갑/카드', icon: <IconWallet size={24} /> },
        { name: '파우치', icon: <IconPackage size={24} /> },
        { name: '에어팟/키', icon: <IconKey size={24} /> },
        { name: '텀블러(S)', icon: <IconBottle size={24} /> },
        { name: '다이어리', icon: <IconManualGearbox size={24} /> },
    ];

    return (
        <Container size="md" py={80}>
            <Stack align="center" gap="xl" mb={60}>
                <Title order={2} className="text-3xl font-serif">작지만 알찬 수납력</Title>
                <Text c="dimmed" ta="center">
                    실제 가방 크기를 체감해보세요.<br />
                    일상의 필수품들을 여유롭게 담아내는 컴팩트한 설계입니다.
                </Text>
            </Stack>

            <Grid gutter={40} mb={60} align="center">
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Box className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                        <Image
                            src="/images/size-compare.jpg"
                            alt="Scale Comparison with Smartphone"
                            fill
                            className="object-contain bg-white"
                        />
                        <Box className="absolute top-4 right-4 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                            <Text size="xs" fw={700}>Real Scale View</Text>
                        </Box>
                    </Box>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="lg">
                        <Title order={4} className="font-serif italic text-2xl text-[#b08968]">What fits inside?</Title>
                        <Text className="text-gray-600 leading-relaxed">
                            아이폰 15 프로 맥스, 중단편 소설책, 카드 지갑, 그리고 350ml 텀블러까지.
                            작아 보이지만 입체 패턴 설계로 내부 공간은 놀라울 만큼 넉넉합니다.
                        </Text>
                        <Group gap="xs">
                            <Badge color="brown" variant="light">아이패드 미니 수납 가능</Badge>
                            <Badge color="gray" variant="light">두꺼운 전공서적 불가</Badge>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>

            <Paper p="xl" radius="lg" withBorder className="bg-gray-50 border-dashed border-2 px-8 py-12">
                <Grid gutter="xl" justify="center">
                    {items.map((item, index) => (
                        <Grid.Col key={index} span={{ base: 4, sm: 4, md: 2 }}>
                            <Stack align="center" gap="md" className="group">
                                <ThemeIcon
                                    size={64}
                                    radius="xl"
                                    color="gray"
                                    variant="white"
                                    className="shadow-sm group-hover:scale-110 transition-transform text-gray-400 group-hover:text-[#b08968]"
                                >
                                    {item.icon}
                                </ThemeIcon>
                                <Text size="sm" fw={600} c="gray.7">{item.name}</Text>
                            </Stack>
                        </Grid.Col>
                    ))}
                </Grid>
                <Divider my="xl" label="Check Point" labelPosition="center" />
                <Group justify="center" gap="xl">
                    <Group gap="xs">
                        <Badge color="red" variant="dot">A4 수납 불가</Badge>
                        <Text size="sm" c="dimmed">아이패드 미니 수납 가능</Text>
                    </Group>
                    <Group gap="xs">
                        <Badge color="blue" variant="dot">텀블러 권장</Badge>
                        <Text size="sm" c="dimmed">350ml 사이즈 적합</Text>
                    </Group>
                </Group>
            </Paper>
        </Container>
    );
}

/**
 * 9. [기존] 추천 대상
 */
function Recommendations() {
    return (
        <Box className="py-24 bg-[#fdfaf7]">
            <Container size="lg">
                <Grid align="center" gutter={60}>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Stack gap="xl">
                            <Box>
                                <Badge color="brown" variant="outline" mb="sm">TARGET</Badge>
                                <Title order={2} className="text-4xl font-serif leading-snug">
                                    이런 분들에게<br />
                                    강력 추천합니다
                                </Title>
                            </Box>
                            <List
                                spacing="lg"
                                size="lg"
                                center
                                icon={
                                    <ThemeIcon color="brown" size={24} radius="xl">
                                        <IconCheck size={14} />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>무채색 데일리룩에 <b>확실한 포인트</b>가 필요한 분</List.Item>
                                <List.Item>흔한 명품보다 <b>나만의 취향</b>을 드러내고 싶은 분</List.Item>
                                <List.Item><b>소중한 사람</b>에게 잊지 못할 선물을 하고 싶은 분</List.Item>
                                <List.Item>가볍게 들면서도 <b>고급스러움</b>을 잃고 싶지 않은 분</List.Item>
                            </List>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <Grid>
                            {[1, 2, 3, 4].map((i) => (
                                <Grid.Col key={i} span={6}>
                                    <Image
                                        src={`/images/recommend_${i}.jpg`}
                                        alt={`Recommendation ${i}`}
                                        width={300}
                                        height={300}
                                        className="rounded-2xl shadow-md w-full"
                                    />
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}

/**
 * 10. [기존] 프리미엄 패키징
 */
function PremiumPackaging() {
    return (
        <Container size="md" py={80}>
            <Stack align="center" gap="md" mb={60} className="text-center">
                <IconGift size={40} className="text-[#b08968]" />
                <Title order={2} className="text-3xl font-serif">설렘을 선물하세요</Title>
                <Text c="dimmed">받는 순간 감동이 시작되는 바늘이야기만의 시그니처 패키지</Text>
            </Stack>

            <Box className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src="/images/package-full.jpg"
                    alt="Premium Packaging"
                    width={1200}
                    height={1500}
                    className="w-full h-[600px] md:h-[1500px] object-cover bg-white"
                    priority
                />
                <Box className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-8 md:p-12">
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Group gap="md">
                                <ThemeIcon size="lg" radius="xl" color="brown" variant="light"><IconCheck size={16} /></ThemeIcon>
                                <Text fw={600}>고급 더스트백 기본 포함</Text>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Group gap="md">
                                <ThemeIcon size="lg" radius="xl" color="brown" variant="light"><IconCheck size={16} /></ThemeIcon>
                                <Text fw={600}>감사 메시지 카드 증정</Text>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

/**
 * 11. [신규] 리얼 리뷰 / 소셜 프루프 (Real Reviews)
 */
function RealReviews() {
    const reviews = [
        {
            id: 'sohee_kim',
            text: "실물이 훨씬 예뻐요! 들고 나갔더니 친구들이 다 어디서 샀냐고 물어보네요. 린넨 감촉이 너무 좋습니다.",
            rating: 5,
            image: '/images/review-1.jpg',
        },
        {
            id: 'daily_mood',
            text: "트렌치코트랑 찰떡이에요. 가벼워서 데일리백으로 정착했습니다. 인형 디테일이 진짜 고급스러워요.",
            rating: 5,
            image: '/images/review-2.jpg',
        },
        {
            id: 'gift_gogo',
            text: "여자친구 선물로 줬는데 포장이 너무 예뻐서 놀랐어요. 받는 사람이 정말 좋아해서 뿌듯했습니다.",
            rating: 5,
            image: '/images/review-3.jpg',
        },
    ];

    return (
        <Box className="bg-[#fff9f2] py-14">
            <Container size="lg">
                <Stack align="center" gap="xl" mb={60}>
                    <Group gap="xs">
                        <IconCamera size={24} className="text-[#b08968]" />
                        <Text fw={700} className="text-[#b08968] tracking-widest uppercase">Real Reviews</Text>
                    </Group>
                    <Title order={2} className="text-4xl font-serif text-center">
                        사랑받는 데에는<br />이유가 있습니다
                    </Title>
                    <Group gap="xs">
                        {[1, 2, 3, 4, 5].map((i) => <IconStar key={i} size={20} fill="#fcc419" stroke={0} />)}
                        <Text fw={700} size="lg">4.9/5.0</Text>
                        <Text c="dimmed">(실구매자 리뷰 1,200+)</Text>
                    </Group>
                </Stack>

                <Grid gutter="lg">
                    {reviews.map((review, index) => (
                        <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                            <Paper
                                radius="lg"
                                className="h-[300px] border-none shadow-sm relative overflow-hidden group"
                            >
                                {/* 배경 이미지 (흐릿하게 처리) */}
                                <Box className="absolute inset-0">
                                    <Image
                                        src={review.image}
                                        alt={review.id}
                                        fill
                                        className="object-cover blur-[2px] opacity-40 transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* 오버레이로 텍스트 가독성 확보 */}
                                    <Box className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/60" />
                                </Box>

                                {/* 텍스트 중앙 배치 */}
                                <Stack
                                    align="center"
                                    justify="center"
                                    className="relative z-10 h-full p-8 text-center"
                                    gap="md"
                                >
                                    <IconQuote size={32} className="text-[#b08968]/30" />
                                    <Text className="leading-relaxed font-medium italic text-gray-800 text-lg">
                                        "{review.text}"
                                    </Text>
                                    <Text fw={700} size="sm" className="text-[#b08968] tracking-widest uppercase">
                                        @{review.id}
                                    </Text>
                                </Stack>
                            </Paper>
                        </Grid.Col>
                    ))}
                </Grid>
                <div className="text-center mt-12">
                    <Button variant="subtle" color="gray" rightSection={<IconArrowRight size={16} />}>
                        리뷰 전체보기
                    </Button>
                </div>
            </Container>
        </Box>
    );
}

/**
 * 12. [기존] 스펙 및 고시정보
 */
function SpecsAndLegal() {
    return (
        <Container size="md" py={50}>
            <TabsSection />
        </Container>
    );
}

function TabsSection() {
    return (
        <Stack gap="xl">
            <Box>
                <Title order={3} mb="md" className="flex items-center gap-2">
                    <IconInfoCircle size={24} /> 상세 스펙
                </Title>
                <Box className="overflow-x-auto">
                    <Table withTableBorder verticalSpacing="sm" className="min-w-[600px] md:min-w-full">
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td fw={700} w={150} className="bg-gray-50">상품명</Table.Td>
                                <Table.Td>핸드메이드 입체 인형 체크 토트백</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td fw={700} className="bg-gray-50">소재</Table.Td>
                                <Table.Td>프리미엄 린넨 (겉감), 60수 면 (안감)</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td fw={700} className="bg-gray-50">사이즈</Table.Td>
                                <Table.Td>30 x 22 x 8 cm (핸들 높이 12cm)</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td fw={700} className="bg-gray-50">스트랩 드롭</Table.Td>
                                <Table.Td>12cm (팔에 걸거나 손에 들기 최적화된 높이)</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td fw={700} className="bg-gray-50">무게</Table.Td>
                                <Table.Td>약 285g (장시간 착용 시에도 어깨 부담이 적은 초경량)</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td fw={700} className="bg-gray-50">제조국</Table.Td>
                                <Table.Td>대한민국 (바늘이야기 자체제작)</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </Box>
            </Box>

            <Box>
                <Title order={3} mb="md" className="flex items-center gap-2">
                    <IconAlertTriangle size={24} /> 주의사항
                </Title>
                <Box className="bg-gray-50 p-6 rounded-lg text-sm text-gray-600 leading-loose">
                    <List spacing="xs" icon={<IconAlertTriangle size={14} className="mt-1" />}>
                        <List.Item>핸드메이드 특성상 패턴의 위치나 인형의 표정이 미세하게 다를 수 있습니다.</List.Item>
                        <List.Item>모니터 해상도에 따라 실제 색상과 차이가 있을 수 있습니다.</List.Item>
                        <List.Item>세탁 시 중성세제를 사용하여 찬물에 단독 손세탁 해주세요.</List.Item>
                    </List>
                </Box>
            </Box>

            <Box>
                <Title order={3} mb="md" className="flex items-center gap-2">
                    <IconChecklist size={24} /> 상품정보제공고시
                </Title>
                {/* 간략화된 고시정보 표 */}
                <Table withTableBorder className="text-xs text-gray-500">
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td w={150} className="bg-gray-50">품질보증기준</Table.Td>
                            <Table.Td>관련 법 및 소비자분쟁해결기준에 따름</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="bg-gray-50">A/S 책임자</Table.Td>
                            <Table.Td>바늘이야기 고객센터 (070-1234-5678)</Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </Box>
        </Stack>
    );
}

/**
 * 신규: QuickShopBar - Above the Fold 가격/CTA 요약
 */
function QuickShopBar() {
    return (
        <Box className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50 shadow-sm">
            <Container size="lg">
                <Group justify="space-between" align="center" wrap="nowrap">
                    <Group gap="xl" className="flex-1">
                        <Box>
                            <Text size="sm" c="dimmed" mb={4}>핸드메이드 입체 인형 체크 토트백</Text>
                            <Group gap="md" align="baseline">
                                <Text fw={700} className="text-2xl text-[#b08968]">68,000원</Text>
                                <Text size="sm" c="dimmed" td="line-through">75,000원</Text>
                                <Badge color="pink" variant="filled" size="sm">9% OFF</Badge>
                            </Group>
                        </Box>
                        <Group gap="lg" className="hidden md:flex">
                            <Group gap="xs">
                                <ThemeIcon size="sm" color="green" variant="light" radius="xl">
                                    <IconCheck size={12} />
                                </ThemeIcon>
                                <Text size="xs" c="dimmed">무료 배송</Text>
                            </Group>
                            <Group gap="xs">
                                <ThemeIcon size="sm" color="blue" variant="light" radius="xl">
                                    <IconCheck size={12} />
                                </ThemeIcon>
                                <Text size="xs" c="dimmed">14일 무료 반품</Text>
                            </Group>
                            <Group gap="xs">
                                <ThemeIcon size="sm" color="brown" variant="light" radius="xl">
                                    <IconCheck size={12} />
                                </ThemeIcon>
                                <Text size="xs" c="dimmed">1년 무상 수선</Text>
                            </Group>
                        </Group>
                    </Group>
                    <Button
                        size="lg"
                        color="brown"
                        radius="xl"
                        className="px-8 shadow-md hover:shadow-lg transition-shadow"
                    >
                        장바구니 담기
                    </Button>
                </Group>
            </Container>
        </Box>
    );
}

/**
 * 신규: FAQ - 자주 묻는 질문
 */
function FAQ() {
    const faqs = [
        {
            question: '배송은 얼마나 걸리나요?',
            answer: '주문 제작 상품으로, 영업일 기준 5-7일 내 제작 후 1-2일 내 발송됩니다. 제작 시작 후에는 취소가 어려우니 신중하게 주문해주세요.',
        },
        {
            question: '교환/반품이 가능한가요?',
            answer: '제품 수령 후 14일 이내 무료 반품이 가능합니다. 단, 고객 변심에 의한 반품 시 왕복 배송비가 발생할 수 있습니다. 제품 하자의 경우 100% 무료 교환/환불해 드립니다.',
        },
        {
            question: '세탁은 어떻게 하나요?',
            answer: '린넨 소재 특성상 중성세제를 사용하여 찬물에 단독 손세탁을 권장합니다. 첫 세탁 시 약간의 수축이 있을 수 있으며, 세탁 후 그늘에서 건조해주세요.',
        },
        {
            question: '수선 서비스를 받을 수 있나요?',
            answer: '구매일로부터 1년간 봉제 하자에 대해 무상 수선 서비스를 제공합니다. 그 외 일반적인 마모나 손상의 경우 유상 수선이 가능하니 고객센터로 문의해주세요.',
        },
        {
            question: '선물 포장이 가능한가요?',
            answer: '모든 제품은 시그니처 더스트백과 감사 메시지 카드가 기본 포함되어 있어 선물용으로도 손색없습니다. 추가적인 선물 포장을 원하시면 주문 시 요청사항에 남겨주세요.',
        },
    ];

    return (
        <Box className="bg-gray-50 py-24">
            <Container size="md">
                <Stack align="center" gap="xl" mb={60}>
                    <Group gap="xs">
                        <IconMessageDots size={24} className="text-[#b08968]" />
                        <Text fw={700} className="text-[#b08968] tracking-widest uppercase">FAQ</Text>
                    </Group>
                    <Title order={2} className="text-3xl font-serif text-center">
                        자주 묻는 질문
                    </Title>
                </Stack>

                <Stack gap="md">
                    {faqs.map((faq, index) => (
                        <Paper key={index} p="xl" radius="lg" className="bg-white shadow-sm hover:shadow-md transition-shadow">
                            <Group align="flex-start" gap="md" wrap="nowrap">
                                <ThemeIcon size="lg" color="brown" variant="light" radius="xl" className="mt-1 flex-shrink-0">
                                    <Text fw={700} size="sm">Q</Text>
                                </ThemeIcon>
                                <Box className="flex-1">
                                    <Text fw={700} mb="sm" className="text-lg">{faq.question}</Text>
                                    <Text c="dimmed" className="leading-relaxed">{faq.answer}</Text>
                                </Box>
                            </Group>
                        </Paper>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}

/**
 * 최종 통합 컴포넌트: 14-Section Flow (개선된 순서)
 */
export function ProductInfoSections() {
    return (
        <Stack gap={0} className="bg-white">
            <ImmersiveHero />      {/* 1. 히어로 */}
            <QuickShopBar />       {/* 2. 신규: 가격/CTA 요약 바 */}
            <KeyPoints />          {/* 3. 핵심 포인트 */}
            <DetailHighlights />   {/* 4. 디테일 하이라이트 (↑2칸) */}
            <RealReviews />        {/* 5. 리얼 리뷰 (↑6칸 - 핵심 변경!) */}
            <StyleLookbook />      {/* 6. 스타일 룩북 */}
            <MaterialStory />      {/* 7. 소재 이야기 */}
            <PracticalStorage />   {/* 8. 수납 가이드 */}
            <ArtisanSignature />   {/* 9. 장인 인증 */}
            <BrandPhilosophy />    {/* 10. 브랜드 철학 (↓8칸) */}
            <Recommendations />    {/* 11. 추천 대상 */}
            <PremiumPackaging />   {/* 12. 패키징 */}
            <FAQ />                {/* 13. 신규: 자주 묻는 질문 */}
            <SpecsAndLegal />      {/* 14. 스펙 및 고시 */}

            {/* 최종 CTA 바텀 배너 */}
            <Container size="md" pb={100}>
                <Card
                    padding={60}
                    radius="xl"
                    className="bg-gradient-to-tr from-[#b08968] to-[#8d6e63] text-white text-center shadow-2xl overflow-hidden relative"
                >
                    <Box className="absolute top-0 right-0 opacity-10">
                        <IconHeart size={400} fill="white" />
                    </Box>
                    <Stack align="center" gap="lg" className="relative z-10">
                        <Title order={2} className="text-3xl md:text-4xl font-serif">
                            지금, 당신만의 감성을 만나보세요
                        </Title>
                        <Text className="opacity-90 text-lg">
                            한정 수량 제작으로 조기 품절될 수 있습니다.
                        </Text>
                        <Button
                            variant="white"
                            color="dark"
                            size="xl"
                            radius="xl"
                            className="mt-4 text-[#b08968] font-bold px-12"
                        >
                            구매하기
                        </Button>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    );
}
