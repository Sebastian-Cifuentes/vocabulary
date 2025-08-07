import { ReactNode } from "react";

export interface PopupState {
    isOpen?: boolean,
    title?: string,
    content: ReactNode | null,
    size: 'large' | 'medium' | 'small'
};