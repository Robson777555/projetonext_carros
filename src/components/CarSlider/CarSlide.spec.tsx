import { render, screen } from '@testing-library/react';
import CarSlide from './CarSlide';
import { describe, it, expect } from 'vitest';

const mockCar = {
  id: 1,
  title: 'Test Car',
  description: 'This is a test car description',
  image: '/img/test-car.png',
};

describe('CarSlide', () => {
  it('should render the car slide when active', () => {
    render(<CarSlide car={mockCar} isActive={true} />);
    
    expect(screen.getByText('Test Car')).toBeInTheDocument();
    expect(screen.getByText('This is a test car description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Car')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver mais' })).toBeInTheDocument();
  });

  it('should not render when not active', () => {
    render(<CarSlide car={mockCar} isActive={false} />);
    
    expect(screen.queryByText('Test Car')).not.toBeInTheDocument();
    expect(screen.queryByText('This is a test car description')).not.toBeInTheDocument();
  });

  it('should have correct link to car details page', () => {
    render(<CarSlide car={mockCar} isActive={true} />);
    
    const link = screen.getByRole('link', { name: 'Ver mais' });
    expect(link).toHaveAttribute('href', '/cars/1');
  });

  it('should render image with correct attributes', () => {
    render(<CarSlide car={mockCar} isActive={true} />);
    const image = screen.getByAltText('Test Car');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toMatch(/test-car\.png/);
    expect(image).toHaveClass('-rotate-12', 'drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)]');
  });

  it('should have correct styling classes', () => {
    render(<CarSlide car={mockCar} isActive={true} />);
    
    const title = screen.getByText('Test Car');
    expect(title).toHaveClass('text-white', 'font-extrabold', 'leading-none');
    
    const description = screen.getByText('This is a test car description');
    expect(description).toHaveClass('text-[#e0e0e0]', 'leading-snug');
    
    const button = screen.getByRole('link', { name: 'Ver mais' });
    expect(button).toHaveClass('bg-[#91ba28]', 'hover:bg-[#791fd3]', 'text-black', 'hover:text-white');
  });
});

