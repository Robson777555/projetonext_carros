import { render, screen } from '@testing-library/react';
import Contact from './page';
import { describe, it, expect } from 'vitest';

describe('Contact Page', () => {
  it('should render the contact information', () => {
    render(<Contact />);
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/robsonjobim96@hotmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Telefone:/i)).toBeInTheDocument();
    expect(screen.getByText(/\+55 \(51\) 99694-0564/i)).toBeInTheDocument();
  });

  it('should have correct styling for contact information', () => {
    render(<Contact />);
    const emailSpan = screen.getByText(/robsonjobim96@hotmail.com/i);
    const phoneSpan = screen.getByText(/\+55 \(51\) 99694-0564/i);

    expect(emailSpan).toHaveClass('text-[#beff1b]', 'hover:underline');
    expect(phoneSpan).toHaveClass('text-[#beff1b]', 'hover:underline');
  });
});

