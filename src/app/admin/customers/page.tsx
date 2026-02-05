import { Title, Text, Card, Stack, Badge } from '@mantine/core';

export default function AdminCustomersPage() {
  return (
    <Stack gap="lg">
      <div>
        <Text size="sm" c="dimmed">
          고객 관리
        </Text>
        <Title order={2}>고객 목록</Title>
      </div>
      <Card withBorder padding="xl" radius="lg">
        <Stack gap="sm">
          <Badge color="brown" variant="light" size="lg" w="fit-content">
            준비 중
          </Badge>
          <Text c="dimmed">
            고객 리스트 및 상세 보기 기능을 연결하기 전까지 임시 페이지로 버튼 동작을 보장합니다.
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
}
