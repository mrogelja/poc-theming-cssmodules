import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Button.module.css';
import clsx from 'clsx';
export function Button({ disabled = false, selected = false, size = 'normal', style, children, }) {
    return (_jsx("button", { type: "button", className: clsx(styles.root, disabled && styles.disabled, selected && styles.selected, size === 'mini' && styles.mini), disabled: disabled, style: style, children: children }));
}
//# sourceMappingURL=Button.js.map