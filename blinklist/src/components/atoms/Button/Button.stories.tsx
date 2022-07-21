import React, { Children } from "react";
import {Meta, Story} from "@storybook/react";
import {Button, Props} from "./Button"
import { action } from "@storybook/addon-actions";

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes:{
        onClick: {action: 'clicked'},
        children: { 
           defaultValue: 'Default Text'
        },
    },

}

export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

/* export const Default  = () => <Button variant="primary" childeren="Hello Click Me">Click Me</Button>
export const Secondary  = () => <Button variant="secondary" childeren="I am Button">I am Button</Button> */

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Default.args= {

    variant: 'primary',
    children: 'Hello Click Me',

};

Secondary.args= {

    variant: 'secondary',
    children: 'I am Button',
    onClick: action('Secondary Button Clicked'),

};

