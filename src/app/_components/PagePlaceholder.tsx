"use client";

import Link from "next/link";
import { Container, Stack, Group, Badge, Title, Text, Button } from "@mantine/core";

export interface PagePlaceholderProps {
  badge?: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

export function PagePlaceholder({ badge, title, description, cta }: PagePlaceholderProps) {
  return (
    <main className="min-h-screen bg-white py-16">
      <Container size="xl">
        <Stack gap="lg" align="flex-start">
          <Group gap="sm">
            {badge ? (
              <Badge color="brown" variant="light" size="md">
                {badge}
              </Badge>
            ) : null}
            <Title order={1}>{title}</Title>
          </Group>
          <Text size="lg" c="dimmed" className="max-w-3xl leading-relaxed">
            {description}
          </Text>
          {cta ? (
            <Button component={Link} href={cta.href} color="brown" radius="xl" size="md">
              {cta.label}
            </Button>
          ) : null}
        </Stack>
      </Container>
    </main>
  );
}
