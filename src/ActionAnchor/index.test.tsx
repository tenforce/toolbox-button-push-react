import * as React from "react"
import { render, screen } from "@testing-library/react"

import ActionAnchor, { className } from "./"
import ActionType from "../ActionType"

describe("ActionAnchor", () => {
    it("renders the anchor with the provided content", () => {
        render(
            <ActionAnchor href="www.tf.test">
                TF Toolbox ActionAnchor is the best
            </ActionAnchor>,
        )

        const action = screen.getByTestId("action")
        expect(action.textContent).toBe("TF Toolbox ActionAnchor is the best")
    })

    it("renders the anchor with the provided target or with the default value", () => {
        const { rerender } = render(
            <ActionAnchor href="www.tf.test" target="_blank">
                Content
            </ActionAnchor>,
        )

        const action = screen.getByTestId("action")
        expect(action.getAttribute("target")).toBe("_blank")

        rerender(<ActionAnchor href="www.tf.test"> Content </ActionAnchor>)
        expect(action.getAttribute("target")).toBe("_self")
    })

    describe("ActionType", () => {
        it("adds the 'button' modifier to the css-classes if the 'actionType' prop is 'button'", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" actionType={ActionType.button}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--btn`)).toBeTruthy()

            rerender(<ActionAnchor href="www.tf.test"> Content </ActionAnchor>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--btn`)).toBeFalsy()
        })

        it("adds the 'icon' modifier to the css-classes if the 'actionType' prop is 'icon'", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" actionType={ActionType.icon}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--icon`)).toBeTruthy()

            rerender(<ActionAnchor href="www.tf.test"> Content </ActionAnchor>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--icon`)).toBeFalsy()
        })

        it("adds the 'block' modifier to the css-classes if the 'actionType' prop is 'block'", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" actionType={ActionType.block}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--block`),
            ).toBeTruthy()

            rerender(<ActionAnchor href="www.tf.test"> Content </ActionAnchor>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--block`)).toBeFalsy()
        })

        it("adds the 'scriptbtn' modifier to the css-classes if the 'actionType' prop is 'scriptButton'", () => {
            const { rerender } = render(
                <ActionAnchor actionType={ActionType.scriptButton}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--scriptbtn`),
            ).toBeTruthy()

            rerender(<ActionAnchor> Content </ActionAnchor>)
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--scriptbtn`),
            ).toBeFalsy()
        })
    })

    describe("classes", () => {
        it("adds the 'center' modifier to the css-classes if the 'isCenter' prop is true", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" isCenter={true}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--center`),
            ).toBeTruthy()

            rerender(
                <ActionAnchor href="www.tf.test" isCenter={false}>
                    Content
                </ActionAnchor>,
            )
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--center`),
            ).toBeFalsy()
        })

        it("adds the 'link' modifier to the css-classes if the 'isLink' prop is true", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" isLink={true}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--link`)).toBeTruthy()

            rerender(
                <ActionAnchor href="www.tf.test" isLink={false}>
                    Content
                </ActionAnchor>,
            )
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains(`${className}--link`)).toBeFalsy()
        })

        it("adds the 'secondary' modifier to the css-classes if the 'isSecondary' prop is true", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" isSecondary={true}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--secondary`),
            ).toBeTruthy()

            rerender(
                <ActionAnchor href="www.tf.test" isSecondary={false}>
                    Content
                </ActionAnchor>,
            )
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--secondary`),
            ).toBeFalsy()
        })

        it("adds the 'transparent' modifier to the css-classes if the 'isTransparent' prop is true", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" isTransparent={true}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--transparent`),
            ).toBeTruthy()

            rerender(
                <ActionAnchor href="www.tf.test" isTransparent={false}>
                    Content
                </ActionAnchor>,
            )
            expect(action.classList.contains(className)).toBeTruthy()
            expect(
                action.classList.contains(`${className}--transparent`),
            ).toBeFalsy()
        })

        it("adds the 'label' class if the 'isLabel' prop is true, no class otherwise", () => {
            const { rerender } = render(
                <ActionAnchor href="www.tf.test" isLabel={true}>
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("label")).toBeTruthy()

            rerender(
                <ActionAnchor href="www.tf.test" isLabel={false}>
                    Content
                </ActionAnchor>,
            )
            expect(action.classList.contains(className)).toBeTruthy()
            expect(action.classList.contains("label")).toBeFalsy()
        })
    })

    it("adds extraClasses", () => {
        const extraClasses = "foobar"

        render(
            <ActionAnchor href="www.tf.test" extraClasses={extraClasses}>
                Content
            </ActionAnchor>,
        )

        const action = screen.getByTestId("action")
        expect(action.classList.contains(className)).toBeTruthy()
        expect(action.classList.contains(extraClasses)).toBeTruthy()
    })

    describe("colors", () => {
        it("adds the 'bg-aureolin' class if the 'scriptButtonColor' prop has value 'Aureolin'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"Aureolin"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-aureolin")).toBeTruthy()
        })

        it("adds the 'bg-cadmium-red' class if the 'scriptButtonColor' prop has value 'CadmiumRed'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"CadmiumRed"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-cadmium-red")).toBeTruthy()
        })

        it("adds the 'bg-deepskyblue' class if the 'scriptButtonColor' prop has value 'DeepSkyBlue'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"DeepSkyBlue"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-deepskyblue")).toBeTruthy()
        })

        it("adds the 'bg-eminence' class if the 'scriptButtonColor' prop has value 'Eminence'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"Eminence"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-eminence")).toBeTruthy()
        })

        it("adds the 'bg-goldenrod' class if the 'scriptButtonColor' prop has value 'Goldenrod'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"Goldenrod"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-goldenrod")).toBeTruthy()
        })

        it("adds the 'bg-jade' class if the 'scriptButtonColor' prop has value 'Jade'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"Jade"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-jade")).toBeTruthy()
        })

        it("adds the 'bg-jet' class if the 'scriptButtonColor' prop has value 'Jet'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"Jet"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-jet")).toBeTruthy()
        })

        it("adds the 'bg-nickel' class if the 'scriptButtonColor' prop has value 'Nickel'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"Nickel"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-nickel")).toBeTruthy()
        })

        it("adds the 'bg-platinum' class if the 'scriptButtonColor' prop has value 'Platinum'", () => {
            render(
                <ActionAnchor
                    scriptButtonColor={"Platinum"}
                    actionType={ActionType.scriptButton}
                >
                    Content
                </ActionAnchor>,
            )

            const action = screen.getByTestId("action")
            expect(action.classList.contains("bg-platinum")).toBeTruthy()
        })
    })
})
