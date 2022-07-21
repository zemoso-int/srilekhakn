import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWithTextComponent } from './IconWithText';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default {
    title: 'IconWithText',
    component: IconWithTextComponent,
    parameters: {
     
    },
  } as ComponentMeta<typeof IconWithTextComponent>;

  const Template: ComponentStory<typeof IconWithTextComponent> = (args) => <IconWithTextComponent {...args} />;

  export const ReadingTime = Template.bind({});

  ReadingTime.args={
    icon: <AccessAlarmIcon />,
    disabled: true,
    variant: 'primary',
    children: '15 min read'
  }
