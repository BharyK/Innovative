import type { ReactNode } from "react";

// Basic Accordion Data
interface BasicType {
    id: string;
    title: string;
    content: ReactNode;

}
export const Basicdata: BasicType[] = [
    {
        id: '1',
        title: "Accordion Item #1",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '2',
        title: "Accordion Item #2",
        content: (
            <>
                <strong>This is the second item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '3',
        title: "Accordion Item #3",
        content: (
            <>
                <strong>This is the third item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
];

//Flush Accordion
export const Flushdata: BasicType[] = [
    {
        id: '1',
        title: "Accordion Item #1",
        content: (
            <>
                {"Placeholder content for this accordion, which is intended to demonstrate the"}
                <code>.accordion-flus</code>
                {" class. This is the first item's accordion body."}
            </>
        ),
    },
    {
        id: '2',
        title: "Accordion Item #2",
        content: (
            <>
                {"Placeholder content for this accordion, which is intended to demonstrate the"}
                <code>.accordion-flus</code>
                {" class. This is the second item's accordion body. Let's imagine this being filled with some actual content."}
            </>
        ),
    },
    {
        id: '3',
        title: "Accordion Item #3",
        content: (
            <>
                {" Placeholder content for this accordion, which is intended to demonstrate the "}
                <code>.accordion-flus</code>
                {"class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."}
            </>
        ),
    },
]


//Custom Accordion
interface BasicType1 {
    id: string;
    title: string;
    content: ReactNode;
    itemClass: string;
}
export const Customdata: BasicType1[] = [
    {
        id: '1',
        title: "Accordion Item #1",
        itemClass: "custom-accordion-primary",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),

    },
    {
        id: '2',
        title: "Accordion Item #2",
        content: (
            <>
                <strong>This is the Second item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
        itemClass: 'custom-accordion-secondary',
    },
    {
        id: '3',
        title: "Accordion Item #3",
        content: (
            <>
                <strong>This is the third item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
        itemClass: 'custom-accordion-danger',
    },
]