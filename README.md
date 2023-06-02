# toolbox-button-push-react

Tenforce toolbox action component.

## Parameters
Accepted parameters are the followings for all components:

- `isLabel`: Boolean, adds label font styling
- `actionType`: `ActionType` enum, adds action styling depending on value. Possible values are the following:
  - `ActionType.action`: plain action style
  - `ActionType.button`: button style
  - `ActionType.icon`: icon style
  - `ActionType.block`: block style
- `isCenter`: Boolean, adds center position styling
- `isTransparent`: Boolean, only available with button `actionType`, adds transparent button styling
- `isSecondary`: Boolean, adds secondary color styling

### Extra parameters for action buttons
- `isDisabled`: Boolean, makes the button disabled and read only
- `isLoading`: Boolean, adds loading animation

### Extra parameters for action anchors
- `target`: Default is `_self`, supports HTML5 anchor target
- `href`: HTML5 anchor href.

## Usage
### Action Button
```
<Action
    content="Action"
    isDisabled={false}
    isLoading={false}
    onClick={this.onClick}
    isLabel={false}
    actionType={ActionType.action}
    isTransparent={false}
    isSecondary={false}
    extraClasses={""}
/>
```

### Action anchor
```
<ActionAnchor
    content="ActionAnchor"
    href="https://www.tenforce.com/"
    isLabel={false}
    actionType={ActionType.action}
    isTransparent={false}
    isSecondary={false}
    extraClasses={""}
/>
```