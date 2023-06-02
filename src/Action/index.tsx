import React, { ForwardedRef, forwardRef } from "react"

import { Colors } from "@tenforce/toolbox-default-style"

import bem from "../bem"
import classNames from "classnames"
export const className = "toolbox-action"
const b = bem(className)
import ActionType from "../ActionType"

type ColorName =
    keyof typeof import("@tenforce/toolbox-default-style/utils/colors/Palette").Colors

// See reason:
// https://github.com/ant-design/ant-design/issues/15700
// https://github.com/DefinitelyTyped/DefinitelyTyped/commit/4d371be185ddd77264a8d7f30a7f7f8912738ed8#commitcomment-33286182
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isDisabled?: boolean
    isLoading?: boolean
    isLabel?: boolean
    isReadOnly?: boolean
    actionType?: ActionType
    isCenter?: boolean
    isTransparent?: boolean
    isSecondary?: boolean
    isLink?: boolean
    extraClasses?: string
    scriptButtonColor?: ColorName
}

const Action = forwardRef(
    (
        {
            isDisabled,
            isLoading,
            isLabel,
            isReadOnly,
            actionType = ActionType.action,
            isCenter,
            isTransparent,
            isLink,
            isSecondary,
            scriptButtonColor,
            extraClasses = "",
            children,
            ...attrs
        }: Props,
        ref: ForwardedRef<HTMLButtonElement>,
    ): JSX.Element => {
        let bgColor: string | undefined = undefined

        if (actionType == ActionType.scriptButton) {
            bgColor = Colors[scriptButtonColor ?? "Nickel"].background
        }

        // Add modifiers
        const modifiers = {
            label: isLabel,
            "is-disabled": isDisabled,
            "is-readonly": isReadOnly,
            "is-loading": isLoading,
        }
        // Add bem modifiers
        const bemModifiers = {
            btn: actionType == ActionType.button,
            scriptbtn: actionType == ActionType.scriptButton,
            icon: actionType == ActionType.icon,
            block: actionType == ActionType.block,
            center: isCenter,
            link: isLink,
            secondary: isSecondary,
            transparent: isTransparent,
        }
        // Generate fullClassName based on base className, eventual modifiers (BEM or not) and possible extra classes
        const fullClassName = classNames(
            b(bemModifiers),
            modifiers,
            extraClasses,
            bgColor,
        )

        return (
            <button
                ref={ref}
                className={fullClassName}
                disabled={!!isDisabled || !!isLoading || !!isReadOnly}
                data-testid="action"
                {...attrs}
            >
                {children}
            </button>
        )
    },
)

Action.displayName = Action.name

export default Action
