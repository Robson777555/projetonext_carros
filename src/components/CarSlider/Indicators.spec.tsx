import { render, screen, fireEvent } from '@testing-library/react';
import Indicators from './Indicators';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('Indicators', () => {
  const mockOnDotClick = vi.fn();
  const count = 3;
  const activeIndex = 0;

  beforeEach(() => {
    mockOnDotClick.mockClear();
  });

  it('should render the current slide number', () => {
    render(<Indicators count={count} activeIndex={activeIndex} onDotClick={mockOnDotClick} />);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('should render the correct number of indicator dots', () => {
    render(<Indicators count={count} activeIndex={activeIndex} onDotClick={mockOnDotClick} />);
    const dots = screen.getAllByRole('listitem');
    expect(dots).toHaveLength(count);
  });

  it('should call onDotClick with the correct index when a dot is clicked', () => {
    render(<Indicators count={count} activeIndex={activeIndex} onDotClick={mockOnDotClick} />);
    const secondDot = screen.getByLabelText('Ir para slide 2'); // Assuming 1-based indexing for aria-label
    fireEvent.click(secondDot);
    expect(mockOnDotClick).toHaveBeenCalledTimes(1);
    expect(mockOnDotClick).toHaveBeenCalledWith(1); // 0-based index
  });

  it('should update the displayed slide number when activeIndex changes', () => {
    const { rerender } = render(<Indicators count={count} activeIndex={0} onDotClick={mockOnDotClick} />);
    expect(screen.getByText('01')).toBeInTheDocument();

    rerender(<Indicators count={count} activeIndex={1} onDotClick={mockOnDotClick} />);
    expect(screen.getByText('02')).toBeInTheDocument();

    rerender(<Indicators count={count} activeIndex={2} onDotClick={mockOnDotClick} />);
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('should have correct styling classes for the slide number and highlight bar', () => {
    render(<Indicators count={count} activeIndex={activeIndex} onDotClick={mockOnDotClick} />);
    const slideNumber = screen.getByText('01');
    expect(slideNumber).toHaveClass('text-white', 'font-bold', 'leading-none');

    // Seleciona o highlight bar pelo index ou por classe
    const highlightBars = screen.getAllByRole('generic');
    const highlightBar = highlightBars.find(el =>
      el.className.includes('bg-[#beff1b]')
    );
    expect(highlightBar).toHaveClass('w-[50px]', 'h-[3px]', 'bg-[#beff1b]', 'rounded');
  });
});

