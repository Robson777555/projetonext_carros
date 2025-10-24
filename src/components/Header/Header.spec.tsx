import { render, screen } from '@testing-library/react';

import { describe, it, expect } from 'vitest';
import Header from '.';

describe('Header', () => {
  it('should render the header with logo', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('Esplayer Cars Logo');
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute('src')).toMatch(/logo\.png/);
    expect(logo).toHaveAttribute('width', '180');
    expect(logo).toHaveAttribute('height', '50');
  });

  it('should render navigation links', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const carsLink = screen.getByRole('link', { name: 'Carros' });
    const contactLink = screen.getByRole('link', { name: 'Fale conosco' });
    
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    
    expect(carsLink).toBeInTheDocument();
    expect(carsLink).toHaveAttribute('href', '/cars');
    
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('should have correct CSS classes for responsive design', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('fixed', 'w-[90%]', 'left-1/2', '-translate-x-1/2');
  });

  it('should render navigation as a list', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');
    
    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});

