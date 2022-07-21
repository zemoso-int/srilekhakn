import React from "react";
import IconButtonComponent from './Icon';
import {Meta, Story} from "@storybook/react";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const meta: Meta = {
    title: 'Icons',
    component: IconButtonComponent
}

const Template: Story = (args) => <IconButtonComponent icon={<AccessAlarmIcon />}/>

export const Alarm = Template.bind({});
Alarm.args = {
  icon: <AccessAlarmIcon />,
};

export const ArrowDropDown = Template.bind({});
ArrowDropDown.args = {
  icon: <ArrowDropDownIcon/>
};

export default IconButtonComponent;