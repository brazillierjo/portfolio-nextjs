import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

export default function NightModeSwitch() {
    return (
        <div>
            <Switch onClick={() => !setIsDark(!isDark)} label='night-mode' color='secondary' size='small' />
        </div>
    );
}