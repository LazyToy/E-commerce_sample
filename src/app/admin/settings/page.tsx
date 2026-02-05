import { Title, Text, Card, Stack, Badge } from '@mantine/core';

export default function AdminSettingsPage() {
  return (
    <Stack gap="lg">
      <div>
        <Text size="sm" c="dimmed">
          관리자 설정
        </Text>
        <Title order={2}>설정</Title>
      </div>
      <Card withBorder padding="xl" radius="lg">
        <Stack gap="sm">
          <Badge color="brown" variant="light" size="lg" w="fit-content">
            준비 중
          </Badge>
          <Text c="dimmed">
            환경설정 및 접근 제어 기능을 연결하기 전까지 임시 페이지입니다. 모든 버튼이 404 없이 동작합니다.
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
}
