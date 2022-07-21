import React, { Children } from "react";
import {Meta, Story} from "@storybook/react";
import TextFieldComponent from "./TextFields"

const meta: Meta = {
    title: 'TextField',
    component: TextFieldComponent
}

export default meta;

const Template: Story = (args) => <TextFieldComponent  label={"Add your label here"} {...args}/>

export const bookTitle = Template.bind({});
export const authorName = Template.bind({});
export const minutesRead = Template.bind({});
export const bookCategory = Template.bind({});

bookTitle.args = {
    label: 'Book Title',
    type: 'text'
}

authorName.args = {
    label: 'Author Name',
    type: 'text'
}

minutesRead.args = {
    label: 'Minutes Read',
    type: 'text'
}

bookCategory.args = {
    label: 'Category',
    type: 'dropdown'
}