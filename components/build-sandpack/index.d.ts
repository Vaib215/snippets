import * as react_resizable_panels from 'react-resizable-panels';
import * as next_image from 'next/image';
import * as next_dist_shared_lib_get_img_props from 'next/dist/shared/lib/get-img-props';
import * as sonner from 'sonner';
import * as _radix_ui_react_toast from '@radix-ui/react-toast';
import * as _radix_ui_react_switch from '@radix-ui/react-switch';
import * as _radix_ui_react_tabs from '@radix-ui/react-tabs';
import * as _radix_ui_react_label from '@radix-ui/react-label';
import * as react from 'react';
import * as _radix_ui_react_select from '@radix-ui/react-select';
import * as _radix_ui_react_dropdown_menu from '@radix-ui/react-dropdown-menu';
import * as _radix_ui_react_checkbox from '@radix-ui/react-checkbox';
import * as _radix_ui_react_avatar from '@radix-ui/react-avatar';
import * as _radix_ui_react_aspect_ratio from '@radix-ui/react-aspect-ratio';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _radix_ui_react_alert_dialog from '@radix-ui/react-alert-dialog';
import * as class_variance_authority from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as _radix_ui_react_accordion from '@radix-ui/react-accordion';
import * as _radix_ui_react_radio_group from '@radix-ui/react-radio-group';
import { DayPicker } from 'react-day-picker';

interface TextareaProps extends react.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

interface InputProps extends react.InputHTMLAttributes<HTMLInputElement> {
}

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends react.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends react.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

type CalendarProps = react.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const componentsList: {
    RadioGroup: react.ForwardRefExoticComponent<Omit<_radix_ui_react_radio_group.RadioGroupProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    RadioGroupItem: react.ForwardRefExoticComponent<Omit<_radix_ui_react_radio_group.RadioGroupItemProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;
    Accordion: react.ForwardRefExoticComponent<(_radix_ui_react_accordion.AccordionSingleProps | _radix_ui_react_accordion.AccordionMultipleProps) & react.RefAttributes<HTMLDivElement>>;
    AccordionContent: react.ForwardRefExoticComponent<Omit<_radix_ui_react_accordion.AccordionContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    AccordionItem: react.ForwardRefExoticComponent<Omit<_radix_ui_react_accordion.AccordionItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    AccordionTrigger: react.ForwardRefExoticComponent<Omit<_radix_ui_react_accordion.AccordionTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Alert: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & class_variance_authority.VariantProps<(props?: ({
        variant?: "default" | "destructive" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string> & react.RefAttributes<HTMLDivElement>>;
    AlertDescription: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
    AlertTitle: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLParagraphElement>>;
    AlertDialog: react.FC<_radix_ui_react_alert_dialog.AlertDialogProps>;
    AlertDialogContent: react.ForwardRefExoticComponent<Omit<_radix_ui_react_alert_dialog.AlertDialogContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    AlertDialogFooter: {
        ({ className, ...props }: react.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    AlertDialogHeader: {
        ({ className, ...props }: react.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    AlertDialogTitle: react.ForwardRefExoticComponent<Omit<_radix_ui_react_alert_dialog.AlertDialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
    AlertDialogTrigger: react.ForwardRefExoticComponent<_radix_ui_react_alert_dialog.AlertDialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
    AlertDialogAction: react.ForwardRefExoticComponent<Omit<_radix_ui_react_alert_dialog.AlertDialogActionProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    AlertDialogCancel: react.ForwardRefExoticComponent<Omit<_radix_ui_react_alert_dialog.AlertDialogCancelProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    AlertDialogDescription: react.ForwardRefExoticComponent<Omit<_radix_ui_react_alert_dialog.AlertDialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
    AlertDialogOverlay: react.ForwardRefExoticComponent<Omit<_radix_ui_react_alert_dialog.AlertDialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    AlertDialogPortal: react.FC<_radix_ui_react_alert_dialog.AlertDialogPortalProps>;
    AspectRatio: react.ForwardRefExoticComponent<_radix_ui_react_aspect_ratio.AspectRatioProps & react.RefAttributes<HTMLDivElement>>;
    Avatar: react.ForwardRefExoticComponent<Omit<_radix_ui_react_avatar.AvatarProps & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
    AvatarFallback: react.ForwardRefExoticComponent<Omit<_radix_ui_react_avatar.AvatarFallbackProps & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
    AvatarImage: react.ForwardRefExoticComponent<Omit<_radix_ui_react_avatar.AvatarImageProps & react.RefAttributes<HTMLImageElement>, "ref"> & react.RefAttributes<HTMLImageElement>>;
    Badge: typeof Badge;
    Calendar: typeof Calendar;
    Card: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
    CardContent: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
    CardDescription: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
    CardFooter: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
    CardHeader: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
    CardTitle: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLParagraphElement>>;
    Checkbox: react.ForwardRefExoticComponent<Omit<_radix_ui_react_checkbox.CheckboxProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Pagination: {
        ({ className, ...props }: react.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    PaginationItem: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & react.RefAttributes<HTMLLIElement>>;
    DropdownMenu: react.FC<_radix_ui_react_dropdown_menu.DropdownMenuProps>;
    DropdownMenuContent: react.ForwardRefExoticComponent<Omit<_radix_ui_react_dropdown_menu.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    DropdownMenuItem: react.ForwardRefExoticComponent<Omit<_radix_ui_react_dropdown_menu.DropdownMenuItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    DropdownMenuTrigger: react.ForwardRefExoticComponent<_radix_ui_react_dropdown_menu.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
    Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;
    Select: react.FC<_radix_ui_react_select.SelectProps>;
    SelectContent: react.ForwardRefExoticComponent<Omit<_radix_ui_react_select.SelectContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    SelectGroup: react.ForwardRefExoticComponent<_radix_ui_react_select.SelectGroupProps & react.RefAttributes<HTMLDivElement>>;
    SelectItem: react.ForwardRefExoticComponent<Omit<_radix_ui_react_select.SelectItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    SelectLabel: react.ForwardRefExoticComponent<Omit<_radix_ui_react_select.SelectLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    SelectScrollDownButton: react.ForwardRefExoticComponent<Omit<_radix_ui_react_select.SelectScrollDownButtonProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    SelectScrollUpButton: react.ForwardRefExoticComponent<Omit<_radix_ui_react_select.SelectScrollUpButtonProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    SelectSeparator: react.ForwardRefExoticComponent<Omit<_radix_ui_react_select.SelectSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    SelectTrigger: react.ForwardRefExoticComponent<Omit<_radix_ui_react_select.SelectTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    SelectValue: react.ForwardRefExoticComponent<_radix_ui_react_select.SelectValueProps & react.RefAttributes<HTMLSpanElement>>;
    Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;
    Label: react.ForwardRefExoticComponent<Omit<_radix_ui_react_label.LabelProps & react.RefAttributes<HTMLLabelElement>, "ref"> & class_variance_authority.VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & react.RefAttributes<HTMLLabelElement>>;
    Tabs: react.ForwardRefExoticComponent<_radix_ui_react_tabs.TabsProps & react.RefAttributes<HTMLDivElement>>;
    TabsContent: react.ForwardRefExoticComponent<Omit<_radix_ui_react_tabs.TabsContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    TabsList: react.ForwardRefExoticComponent<Omit<_radix_ui_react_tabs.TabsListProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    TabsTrigger: react.ForwardRefExoticComponent<Omit<_radix_ui_react_tabs.TabsTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Skeleton: typeof Skeleton;
    Switch: react.ForwardRefExoticComponent<Omit<_radix_ui_react_switch.SwitchProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Table: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLTableElement> & react.RefAttributes<HTMLTableElement>>;
    TableBody: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLTableSectionElement> & react.RefAttributes<HTMLTableSectionElement>>;
    TableCell: react.ForwardRefExoticComponent<react.TdHTMLAttributes<HTMLTableCellElement> & react.RefAttributes<HTMLTableCellElement>>;
    TableHead: react.ForwardRefExoticComponent<react.ThHTMLAttributes<HTMLTableCellElement> & react.RefAttributes<HTMLTableCellElement>>;
    TableHeader: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLTableSectionElement> & react.RefAttributes<HTMLTableSectionElement>>;
    TableRow: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLTableRowElement> & react.RefAttributes<HTMLTableRowElement>>;
    TableCaption: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLTableCaptionElement> & react.RefAttributes<HTMLTableCaptionElement>>;
    TableFooter: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLTableSectionElement> & react.RefAttributes<HTMLTableSectionElement>>;
    Toast: react.ForwardRefExoticComponent<Omit<_radix_ui_react_toast.ToastProps & react.RefAttributes<HTMLLIElement>, "ref"> & class_variance_authority.VariantProps<(props?: ({
        variant?: "default" | "destructive" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string> & react.RefAttributes<HTMLLIElement>>;
    ToastAction: react.ForwardRefExoticComponent<Omit<_radix_ui_react_toast.ToastActionProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    ToastClose: react.ForwardRefExoticComponent<Omit<_radix_ui_react_toast.ToastCloseProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    ToastDescription: react.ForwardRefExoticComponent<Omit<_radix_ui_react_toast.ToastDescriptionProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    ToastProvider: react.FC<_radix_ui_react_toast.ToastProviderProps>;
    ToastTitle: react.ForwardRefExoticComponent<Omit<_radix_ui_react_toast.ToastTitleProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    ToastViewport: react.ForwardRefExoticComponent<Omit<_radix_ui_react_toast.ToastViewportProps & react.RefAttributes<HTMLOListElement>, "ref"> & react.RefAttributes<HTMLOListElement>>;
    Toaster: ({ ...props }: sonner.ToasterProps) => react_jsx_runtime.JSX.Element;
    Image: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref" | "height" | "width" | "alt" | "loading" | "src" | "srcSet"> & {
        src: string | next_dist_shared_lib_get_img_props.StaticImport;
        alt: string;
        width?: number | `${number}` | undefined;
        height?: number | `${number}` | undefined;
        fill?: boolean | undefined;
        loader?: next_image.ImageLoader | undefined;
        quality?: number | `${number}` | undefined;
        priority?: boolean | undefined;
        loading?: "eager" | "lazy" | undefined;
        placeholder?: next_dist_shared_lib_get_img_props.PlaceholderValue | undefined;
        blurDataURL?: string | undefined;
        unoptimized?: boolean | undefined;
        overrideSrc?: string | undefined;
        onLoadingComplete?: next_dist_shared_lib_get_img_props.OnLoadingComplete | undefined;
        layout?: string | undefined;
        objectFit?: string | undefined;
        objectPosition?: string | undefined;
        lazyBoundary?: string | undefined;
        lazyRoot?: string | undefined;
    } & react.RefAttributes<HTMLImageElement | null>>;
    ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof react_resizable_panels.PanelResizeHandle> & {
        withHandle?: boolean;
    }) => react_jsx_runtime.JSX.Element;
    ResizablePanel: react.ForwardRefExoticComponent<Omit<react.HTMLAttributes<keyof HTMLElementTagNameMap>, "id" | "onResize"> & {
        className?: string | undefined;
        collapsedSize?: number | undefined;
        collapsible?: boolean | undefined;
        defaultSize?: number | undefined;
        id?: string | undefined;
        maxSize?: number | undefined;
        minSize?: number | undefined;
        onCollapse?: react_resizable_panels.PanelOnCollapse | undefined;
        onExpand?: react_resizable_panels.PanelOnExpand | undefined;
        onResize?: react_resizable_panels.PanelOnResize | undefined;
        order?: number | undefined;
        style?: object | undefined;
        tagName?: keyof HTMLElementTagNameMap | undefined;
    } & {
        children?: react.ReactNode;
    } & react.RefAttributes<react_resizable_panels.ImperativePanelHandle>>;
    ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof react_resizable_panels.PanelGroup>) => react_jsx_runtime.JSX.Element;
};

export { componentsList as default };
