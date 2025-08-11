import { render, screen } from '@testing-library/react';
import Arrows from './Arrows';
import { describe, it, expect } from 'vitest';

describe('Arrows', () => {
  it('should render arrow images with correct attributes', () => {
    render(<Arrows onPrev={() => {}} onNext={() => {}} />);
    const prevImage = screen.getByAltText(/previous/i);
    const nextImage = screen.getByAltText(/next/i);

    expect(prevImage).toBeInTheDocument();
    expect(nextImage).toBeInTheDocument();

    expect(prevImage.getAttribute('src')).toMatch(/arrow\.png/);
    expect(nextImage.getAttribute('src')).toMatch(/arrow\.png/);

    expect(prevImage).toHaveAttribute('width', '25');
    expect(prevImage).toHaveAttribute('height', '25');
    expect(nextImage).toHaveAttribute('width', '25');
    expect(nextImage).toHaveAttribute('height', '25');
  });
});

