import userEvent from '@testing-library/user-event';
import { Dialog, DialogFooter, DialogHeader, DialogTrigger, DialogContent, DialogTitle } from './Dialog';
import { screen, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { DialogDescription } from '@radix-ui/react-dialog';

describe('Dialog', () => {

    it('renders the dialog', async () => {
        const userAction = userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>
                    Open
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>
                        Title
                    </DialogTitle>
                    <DialogHeader>
                        Test
                    </DialogHeader>
                    <DialogDescription>
                        Description
                    </DialogDescription>
                    <DialogFooter>
                        Footer
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
        await userAction.click(screen.getByText('Open'));

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    it('closes on button click', async () => {
        const userAction= userEvent.setup();
        render(
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogTitle>
                        Title
                    </DialogTitle>
                    <DialogHeader>
                        Test
                    </DialogHeader>
                    <DialogDescription>
                        Description
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        );
        await userAction.click(screen.getByText('Open'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        await userAction.click(screen.getByLabelText('Close'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('has no a11y violations', async () => {
        const { container } = render(
            <Dialog>
                <DialogTrigger>
                    Open
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>
                        Title
                    </DialogTitle>
                    <DialogHeader>
                        Test
                    </DialogHeader>
                    <DialogDescription>
                        Description
                    </DialogDescription>
                    <DialogFooter>
                        Footer
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
        expect(await axe(container)).toHaveNoViolations();
   });
    
});