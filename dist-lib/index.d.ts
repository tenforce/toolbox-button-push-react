// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../react

declare module '@tenforce/toolbox-button-push-react' {
    import Action from "@tenforce/toolbox-button-push-react/Action";
    import ActionAnchor from "@tenforce/toolbox-button-push-react/ActionAnchor";
    import ActionType from "@tenforce/toolbox-button-push-react/ActionType";
    export { Action, ActionAnchor, ActionType };
}

declare module '@tenforce/toolbox-button-push-react/Action' {
    import React from "react";
    export const className = "toolbox-action";
    import ActionType from "@tenforce/toolbox-button-push-react/ActionType";
    type ColorName = keyof typeof import("@tenforce/toolbox-default-style/utils/colors/Palette").Colors;
    export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        isDisabled?: boolean;
        isLoading?: boolean;
        isLabel?: boolean;
        isReadOnly?: boolean;
        actionType?: ActionType;
        isCenter?: boolean;
        isTransparent?: boolean;
        isSecondary?: boolean;
        isLink?: boolean;
        extraClasses?: string;
        scriptButtonColor?: ColorName;
    }
    const Action: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
    export default Action;
}

declare module '@tenforce/toolbox-button-push-react/ActionAnchor' {
    import React from "react";
    export const className = "toolbox-action";
    import ActionType from "@tenforce/toolbox-button-push-react/ActionType";
    type ColorName = keyof typeof import("@tenforce/toolbox-default-style/utils/colors/Palette").Colors;
    export interface ActionAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
        isLabel?: boolean;
        actionType?: ActionType;
        isCenter?: boolean;
        isTransparent?: boolean;
        isSecondary?: boolean;
        isLink?: boolean;
        extraClasses?: string;
        scriptButtonColor?: ColorName;
    }
    const ActionAnchor: React.ForwardRefExoticComponent<ActionAnchorProps & React.RefAttributes<HTMLAnchorElement>>;
    export default ActionAnchor;
}

declare module '@tenforce/toolbox-button-push-react/ActionType' {
    enum ActionType {
        action = "",
        button = "button",
        block = "block",
        icon = "icon",
        scriptButton = "scriptButton"
    }
    export default ActionType;
}

