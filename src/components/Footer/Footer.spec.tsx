import { render, screen } from '@testing-library/react';

import { describe, it, expect } from 'vitest';
import Footer from '.';

describe('Footer', () => {
  it('should render the footer with copyright text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/2025\s*Esplayer Cars\. Todos os direitos reservados\./i)
    ).toBeInTheDocument();
  });

  it('should render the footer with correct styling', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('bg-[#ffffff0d]', 'text-[#e0e0e0]', 'w-full', 'py-6', 'px-4', 'mt-10');
  });
});

