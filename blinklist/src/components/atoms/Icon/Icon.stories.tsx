import React from "react";
import IconButtonComponent from './Icon';
import {ComponentMeta, ComponentStory, Meta, Story} from "@storybook/react";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/*const meta: Meta = {
    title: 'Icons',
    component: IconButtonComponent
}*/

export default {
  title: 'Icon',
  component: IconButtonComponent,
  parameters: {
  icon: <AccessAlarmIcon /> ,
  disabled: false ,
  onClick: {function (): void {
    throw new Error("Function not implemented.");
  } } 
}
} as ComponentMeta<typeof IconButtonComponent>;


const Template: ComponentStory<typeof IconButtonComponent> = (args) => <IconButtonComponent  {...args}/>

export const Alarm = Template.bind({});
Alarm.args = {
  icon: <AccessAlarmIcon />,
};

export const ArrowDropDown = Template.bind({});
ArrowDropDown.args = {
  icon: <ArrowDropDownIcon/>
};