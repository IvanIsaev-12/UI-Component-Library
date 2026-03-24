import { useState, createContext, useContext } from "react";
import * as UUID from "uuid";
import { Toast } from "./Toast";

type ToastVariant = "default" | "success" | "error" | "warning";

interface ToastType {
    id: string;
    message: string;
    variant: ToastVariant;
}

interface ToastContextType {
    toasts: ToastType[];
    displayToast: (message: string, variant?: ToastVariant) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast is used outside ToastProvider")
    }
    return context;
}

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const displayToast = (message: string, variant: ToastVariant = "default") => {
        const id = UUID.v4();

        const newToast = { id, message, variant };

        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }

    return (
        <ToastContext.Provider value={{toasts, displayToast, removeToast}}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        variant={toast.variant}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export { ToastProvider, useToast };
export type { ToastType, ToastVariant };
