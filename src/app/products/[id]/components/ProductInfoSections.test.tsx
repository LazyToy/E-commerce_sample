import { render } from '@testing-library/react';
import { ProductInfoSections } from './ProductInfoSections';
import { describe, it, expect } from 'vitest';
import { MantineProvider } from '@mantine/core';

describe('ProductInfoSections', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <MantineProvider>
                <ProductInfoSections />
            </MantineProvider>
        );
        expect(container).toBeDefined();
    });
});
