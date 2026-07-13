import { createButton } from "@gluestack-ui/core/button/creator";
import { UIIcon } from "@gluestack-ui/core/icon/creator";
import {
	tva,
	useStyleContext,
	type VariantProps,
	withStyleContext,
} from "@gluestack-ui/utils/nativewind-utils";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { withUniwind } from "uniwind";

const SCOPE = "BUTTON";

const Root = withStyleContext(Pressable, SCOPE);

const StyledUIIcon = withUniwind(UIIcon);

const UIButton = createButton({
	Root: Root,
	Text,
	Group: View,
	Spinner: ActivityIndicator,
	Icon: StyledUIIcon,
});

const buttonStyle = tva({
	base: "rounded-md flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2 h-fit",
	variants: {
		variant: {
			default:
				"bg-primary data-[hover=true]:bg-primary/90 data-[active=true]:bg-primary/90",
			destructive:
				"bg-destructive data-[hover=true]:bg-destructive/90 data-[active=true]:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
			outline:
				"border border-border bg-background shadow-xs data-[hover=true]:bg-accent data-[active=true]:bg-accent dark:bg-input/4.5 dark:border-border/90 dark:data-[hover=true]:bg-input/7.5 dark:data-[active=true]:bg-input/7.5",
			secondary:
				"bg-secondary text-secondary-foreground data-[hover=true]:bg-secondary/80 data-[active=true]:bg-secondary/80",
			ghost:
				"data-[hover=true]:bg-accent data-[active=true]:bg-accent dark:data-[hover=true]:bg-accent/50 dark:data-[active=true]:bg-accent/50",
			link: "text-primary underline-offset-4 data-[hover=true]:underline data-[active=true]:underline",
		},
		size: {
			default: "px-4 py-2",
			sm: "min-h-8 rounded-md px-3 text-xs",
			lg: "min-h-10 rounded-md px-8",
			icon: "min-h-9 min-w-9",
		},
	},
});

const buttonTextStyle = tva({
	base: "web:select-none font-sans",
	parentVariants: {
		variant: {
			default: "text-primary-foreground",
			destructive: "text-white",
			outline:
				"text-foreground data-[hover=true]:text-accent-foreground data-[active=true]:text-accent-foreground",
			secondary: "text-secondary-foreground",
			ghost: "text-foreground ",
			link: "text-primary data-[hover=true]:underline data-[active=true]:underline",
		},
		size: {
			default: "text-sm",
			sm: "text-xs",
			lg: "text-sm",
			icon: "text-sm",
		},
	},
});

const buttonSpinnerStyle = tva({
	base: "",
	parentVariants: {
		size: {
			default: "h-4 w-4",
			sm: "h-3 w-3",
			lg: "h-5 w-5",
			icon: "h-4 w-4",
		},
	},
});

const buttonIconStyle = tva({
	base: "fill-none pointer-events-none shrink-0",
	parentVariants: {
		variant: {
			default: "text-primary-foreground",
			destructive: "text-white",
			outline:
				"text-foreground data-[hover=true]:text-accent-foreground data-[active=true]:text-accent-foreground",
			secondary: "text-secondary-foreground",
			ghost:
				"text-foreground data-[hover=true]:text-accent-foreground data-[active=true]:text-accent-foreground",
			link: "text-primary",
		},
		size: {
			default: "h-4 w-4",
			sm: "h-3 w-3",
			lg: "h-5 w-5",
			icon: "h-4 w-4",
		},
	},
});
const buttonGroupStyle = tva({
	base: "",
	variants: {
		space: {
			xs: "gap-1",
			sm: "gap-2",
			md: "gap-3",
			lg: "gap-4",
			xl: "gap-5",
			"2xl": "gap-6",
			"3xl": "gap-7",
			"4xl": "gap-8",
		},
		isAttached: {
			true: "gap-0",
		},
		flexDirection: {
			row: "flex-row",
			column: "flex-col",
			"row-reverse": "flex-row-reverse",
			"column-reverse": "flex-col-reverse",
		},
	},
});

interface ButtonProps
	extends Omit<React.ComponentProps<typeof UIButton>, "context">,
		VariantProps<typeof buttonStyle> {
	className?: string;
}

function Button({
	className,
	variant = "default",
	size = "default",
	...props
}: ButtonProps) {
	return (
		<UIButton
			{...props}
			className={buttonStyle({ variant, size, class: className })}
			context={{ variant, size }}
		/>
	);
}

interface ButtonTextProps
	extends React.ComponentProps<typeof UIButton.Text>,
		VariantProps<typeof buttonTextStyle> {
	className?: string;
}

function ButtonText({ className, size, ...props }: ButtonTextProps) {
	const { size: parentSize, variant: parentVariant } = useStyleContext(SCOPE);
	return (
		<UIButton.Text
			{...props}
			className={buttonTextStyle({
				parentVariants: {
					size: parentSize,
					variant: parentVariant,
				},
				size,
				class: className,
			})}
		/>
	);
}

function ButtonSpinner({
	className,
	...props
}: React.ComponentProps<typeof UIButton.Spinner>) {
	const { size: parentSize } = useStyleContext(SCOPE);
	return (
		<UIButton.Spinner
			{...props}
			className={buttonSpinnerStyle({
				parentVariants: { size: parentSize },
				class: className,
			})}
		/>
	);
}

type ButtonIconProps = React.ComponentProps<typeof UIButton.Icon> &
	VariantProps<typeof buttonIconStyle> & {
		className?: string | undefined;
		as?: React.ElementType;
		height?: number;
		width?: number;
	};

function ButtonIcon({ className, size, ...props }: ButtonIconProps) {
	const { size: parentSize, variant: parentVariant } = useStyleContext(SCOPE);
	if (typeof size === "number") {
		return (
			<UIButton.Icon
				{...props}
				className={buttonIconStyle({ class: className })}
				size={size}
			/>
		);
	}
	if (
		(props.height !== undefined || props.width !== undefined) &&
		size === undefined
	) {
		return (
			<UIButton.Icon
				{...props}
				className={buttonIconStyle({ class: className })}
			/>
		);
	}
	return (
		<UIButton.Icon
			{...props}
			className={buttonIconStyle({
				parentVariants: {
					size: parentSize,
					variant: parentVariant,
				},
				size,
				class: className,
			})}
		/>
	);
}

interface ButtonGroupProps
	extends React.ComponentProps<typeof UIButton.Group>,
		VariantProps<typeof buttonGroupStyle> {}

function ButtonGroup({
	className,
	space = "md",
	isAttached = false,
	flexDirection = "column",
	...props
}: ButtonGroupProps) {
	return (
		<UIButton.Group
			className={buttonGroupStyle({
				class: className,
				space,
				isAttached,
				flexDirection,
			})}
			{...props}
		/>
	);
}

export { Button, ButtonGroup, ButtonIcon, ButtonSpinner, ButtonText };
