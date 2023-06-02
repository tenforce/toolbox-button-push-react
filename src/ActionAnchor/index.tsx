import React, { ForwardedRef, forwardRef } from "react"

import { Colors } from "@tenforce/toolbox-default-style"

import bem from "../bem"
import classNames from "classnames"
export const className = "toolbox-action"
const b = bem(className)
import ActionType from "../ActionType"

type ColorName =
    keyof typeof import("@tenforce/toolbox-default-style/utils/colors/Palette").Colors

export interface ActionAnchorProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isLabel?: boolean
    actionType?: ActionType
    isCenter?: boolean
    isTransparent?: boolean
    isSecondary?: boolean
    isLink?: boolean
    extraClasses?: string
    scriptButtonColor?: ColorName
}

const ActionAnchor = forwardRef(
    (
        {
            isLabel,
            actionType = ActionType.action,
            isCenter,
            isTransparent,
            isSecondary,
            isLink,
            extraClasses = "",
            scriptButtonColor,
            children,
            target = "_self",
            ...attrs
        }: ActionAnchorProps,
        ref: ForwardedRef<HTMLAnchorElement>,
    ): JSX.Element => {
        let bgColor: string | undefined = undefined

        if (actionType == ActionType.scriptButton) {
            bgColor = Colors[scriptButtonColor ?? "Nickel"].background
        }

        // Add modifiers
        const modifiers = {
            label: isLabel,
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
            <a
                ref={ref}
                className={fullClassName}
                data-testid="action"
                target={target}
                {...attrs}
            >
                {children}
            </a>
        )
    },
)

ActionAnchor.displayName = ActionAnchor.name

export default ActionAnchor
