import { useToast } from "@/hooks/use-toast";
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(
                (toast: {
                    id: string;
                    title?: string;
                    description?: string;
                    action?: React.ReactNode;
                    [key: string]: unknown;
                }) => {
                    const { id, title, description, action, ...props } = toast;
                    return (
                        <Toast key={id} {...props}>
                            <div className="grid gap-1">
                                {title && <ToastTitle>{title}</ToastTitle>}
                                {description && (
                                    <ToastDescription>
                                        {description}
                                    </ToastDescription>
                                )}
                            </div>
                            {action}
                            <ToastClose />
                        </Toast>
                    );
                }
            )}
            <ToastViewport />
        </ToastProvider>
    );
}
