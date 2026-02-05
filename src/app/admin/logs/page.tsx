import { Title, Text, Card, Stack, Badge } from '@mantine/core';

export default function AdminLogsPage() {
  return (
    <Stack gap="lg">
      <div>
        <Text size="sm" c="dimmed">
          제작 일지 관리
        </Text>
        <Title order={2}>제작 일지(관리자)</Title>
      </div>
      <Card withBorder padding="xl" radius="lg">
        <Stack gap="sm">
          <Badge color="brown" variant="light" size="lg" w="fit-content">
            준비 중
          </Badge>
          <Text c="dimmed">
            제작 일지 업로드/수정 기능을 곧 추가할 예정입니다. 현재는 프론트엔드 버튼이 동작하도록 자리만 마련했습니다.
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
}
