import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

export default function NightModeSwitch() {
    const [isDark, setIsDark] = useState(false)

    return (
        <div>
            <Switch onClick={() => !setIsDark(!isDark)} label='night-mode' color='secondary' size='small' />
        </div>
    );
}