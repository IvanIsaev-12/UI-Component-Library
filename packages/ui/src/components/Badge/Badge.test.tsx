import { render,screen } from "@testing-library/react";
import { Badge } from './Badge';
import { axe } from 'jest-axe';


describe('Badge', () => {
    
    it('renders a Badge', () => {
        render(<Badge>Text</Badge>);
        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it.each([
    ["success", "bg-success-200"],
    ["warning", "bg-warning-200"],
    ["neutral", "bg-neutral-200"],
    ["danger", "bg-danger-200"],
  ])("renders %s variant correctly", (variant, expectedClass) => {
    render(<Badge variant={variant}>{variant}</Badge>);
    expect(screen.getByText(variant)).toHaveClass(expectedClass);
  });

    it('has no a11y violations', async () => {
        const { container } = render(<Badge>Text</Badge>);
        const result = await axe(container);
        expect(result).toHaveNoViolations();
    });

    it('has no a11y violations with danger variant', async () => {
      const { container } = render(<Badge variant="danger">Error</Badge>);
        const result = await axe(container);
        expect(result).toHaveNoViolations();
    });
});