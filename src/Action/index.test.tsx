import * as React from "react"

import { fireEvent, render, screen } from "@testing-library/react"

import Action, { className } from "./"
import ActionType from "../ActionType"

describe("Action", () => {
    it("renders the action with the provided content", () => {
        render(<Action>TF Toolbox Action is the best</Action>)

        const action = screen.getByTestId("action")
        expect(action.textContent).toBe("TF Toolbox Action is the best")
    })

    describe("ActionType", () => {
        it("adds the 'button' modifier to the css-classes if the 'actionType' prop is 'button'", () => {
            const { rerender } = render(
                <Action actionType={ActionType.button}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--btn`)).toBeTruthy()

            rerender(<Action> Content </Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--btn`)).toBeFalsy()
        })

        it("adds the 'icon' modifier to the css-classes if the 'actionType' prop is 'icon'", () => {
            const { rerender } = render(
                <Action actionType={ActionType.icon}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--icon`)).toBeTruthy()

            rerender(<Action> Content </Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--icon`)).toBeFalsy()
        })

        it("adds the 'block' modifier to the css-classes if the 'actionType' prop is 'block'", () => {
            const { rerender } = render(
                <Action actionType={ActionType.block}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--block`),
            ).toBeTruthy()

            rerender(<Action> Content </Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--block`)).toBeFalsy()
        })

        it("adds the 'scriptbtn' modifier to the css-classes if the 'actionType' prop is 'scriptButton'", () => {
            const { rerender } = render(
                <Action actionType={ActionType.scriptButton}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--scriptbtn`),
            ).toBeTruthy()

            rerender(<Action> Content </Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--scriptbtn`),
            ).toBeFalsy()
        })
    })

    describe("classes", () => {
        it("adds the 'center' modifier to the css-classes if the 'isCenter' prop is true", () => {
            const { rerender } = render(
                <Action isCenter={true}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--center`),
            ).toBeTruthy()

            rerender(<Action isCenter={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--center`),
            ).toBeFalsy()
        })

        it("adds the 'link' modifier to the css-classes if the 'isLink' prop is true", () => {
            const { rerender } = render(<Action isLink={true}>Content</Action>)

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--link`)).toBeTruthy()

            rerender(<Action isLink={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--link`)).toBeFalsy()
        })

        it("adds the 'secondary' modifier to the css-classes if the 'isSecondary' prop is true", () => {
            const { rerender } = render(
                <Action isSecondary={true}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--secondary`),
            ).toBeTruthy()

            rerender(<Action isSecondary={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--secondary`),
            ).toBeFalsy()
        })

        it("adds the 'transparent' modifier to the css-classes if the 'isTransparent' prop is true", () => {
            const { rerender } = render(
                <Action isTransparent={true}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--transparent`),
            ).toBeTruthy()

            rerender(<Action isTransparent={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--transparent`),
            ).toBeFalsy()
        })

        it("adds the 'is-readonly' class if the 'isReadOnly' prop is true, no class otherwise", () => {
            const { rerender } = render(
                <Action isReadOnly={true}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("is-readonly")).toBeTruthy()

            rerender(<Action isReadOnly={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("is-readonly")).toBeFalsy()
        })

        it("adds the 'is-loading' class if the 'isLoading' prop is true, no class otherwise", () => {
            const { rerender } = render(
                <Action isLoading={true}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("is-loading")).toBeTruthy()

            rerender(<Action isLoading={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("is-loading")).toBeFalsy()
        })

        it("adds the 'is-disabled' class if the 'isDisabled' prop is true, no class otherwise", () => {
            const { rerender } = render(
                <Action isDisabled={true}>Content</Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("is-disabled")).toBeTruthy()

            rerender(<Action isDisabled={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("is-disabled")).toBeFalsy()
        })

        it("adds the 'label' class if the 'isLabel' prop is true, no class otherwise", () => {
            const { rerender } = render(<Action isLabel={true}>Content</Action>)

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("label")).toBeTruthy()

            rerender(<Action isLabel={false}>Content</Action>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("label")).toBeFalsy()
        })
    })

    it("adds extraClasses", () => {
        const extraClasses = "foobar"

        render(<Action extraClasses={extraClasses}>Content</Action>)

        const action = screen.getByTestId("action")
        expect(action.classList.contains(className)).toBeTruthy()
        expect(action.classList.contains(extraClasses)).toBeTruthy()
    })

    describe("colors", () => {
        it("adds the 'bg-aureolin' class if the 'scriptButtonColor' prop has value 'Aureolin'", () => {
            render(
                <Action
                    scriptButtonColor={"Aureolin"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-aureolin")).toBeTruthy()
        })

        it("adds the 'bg-cadmium-red' class if the 'scriptButtonColor' prop has value 'CadmiumRed'", () => {
            render(
                <Action
                    scriptButtonColor={"CadmiumRed"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-cadmium-red")).toBeTruthy()
        })

        it("adds the 'bg-deepskyblue' class if the 'scriptButtonColor' prop has value 'DeepSkyBlue'", () => {
            render(
                <Action
                    scriptButtonColor={"DeepSkyBlue"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-deepskyblue")).toBeTruthy()
        })

        it("adds the 'bg-eminence' class if the 'scriptButtonColor' prop has value 'Eminence'", () => {
            render(
                <Action
                    scriptButtonColor={"Eminence"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-eminence")).toBeTruthy()
        })

        it("adds the 'bg-goldenrod' class if the 'scriptButtonColor' prop has value 'Goldenrod'", () => {
            render(
                <Action
                    scriptButtonColor={"Goldenrod"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-goldenrod")).toBeTruthy()
        })

        it("adds the 'bg-jade' class if the 'scriptButtonColor' prop has value 'Jade'", () => {
            render(
                <Action
                    scriptButtonColor={"Jade"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-jade")).toBeTruthy()
        })

        it("adds the 'bg-jet' class if the 'scriptButtonColor' prop has value 'Jet'", () => {
            render(
                <Action
                    scriptButtonColor={"Jet"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-jet")).toBeTruthy()
        })

        it("adds the 'bg-nickel' class if the 'scriptButtonColor' prop has value 'Nickel'", () => {
            render(
                <Action
                    scriptButtonColor={"Nickel"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-nickel")).toBeTruthy()
        })

        it("adds the 'bg-platinum' class if the 'scriptButtonColor' prop has value 'Platinum'", () => {
            render(
                <Action
                    scriptButtonColor={"Platinum"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </Action>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-platinum")).toBeTruthy()
        })
    })

    it("adds the 'disabled' attribute if the 'isLoading', 'isReadOnly' or 'isDisabled' prop is true", () => {
        const { rerender } = render(<Action isLoading={true}>Content</Action>)

        const action = screen.getByTestId("action")
        expect(action.getAttribute("disabled")).not.toBeNull()

        rerender(<Action isDisabled={true}>Content</Action>)
        expect(action.getAttribute("disabled")).not.toBeNull()

        rerender(<Action isReadOnly={true}>Content</Action>)
        expect(action.getAttribute("disabled")).not.toBeNull()

        rerender(<Action>Content</Action>)
        expect(action.getAttribute("disabled")).toBeNull()
    })

    it("passes the provided attrs, such as onClick", () => {
        const onClickFunction = jest.fn()

        render(<Action onClick={onClickFunction}> Content </Action>)

        const action = screen.getByTestId("action")
        fireEvent.click(action)
        expect(onClickFunction).toHaveBeenCalled()
    })
})
