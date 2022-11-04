import { render, screen, cleanup, fireEvent, renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

// @ts-ignore
import Card from '../Card.tsx'
// @ts-ignore
import { getUsersApi } from '../api/featch.tsx'
// @vitest-environment happy-dom



describe('Card', () => {

  it('Deberia renderizar el componente Card', async () => {
    render(<Card />);
    const value = await screen.findByText('FullStack Developer');
    expect(value).toBeTruthy();
  })
})