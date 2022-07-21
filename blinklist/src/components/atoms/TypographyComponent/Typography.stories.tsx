import React, { Children } from "react";
import {Meta, Story} from "@storybook/react";
import TypographyComponent from "./Typography"

const meta: Meta = {
    title: 'Typography',
    component: TypographyComponent
}

export default meta;

const Template: Story = (args) => <TypographyComponent {...args}/>

export const myLibrary = Template.bind({});
export const treanding = Template.bind({});
export const justAdded = Template.bind({});
export const featuredAudioBooks = Template.bind({});

myLibrary.args= {
    children: 'My Library',
    variant: 'header'

};

treanding.args= {
    children: 'Treanding Binks',
    variant: 'header'
};

justAdded.args= {
    children: 'Just added',
    variant: 'header'
};

featuredAudioBooks.args= {
    children: 'Featured audio books',
    variant: 'header'
};


