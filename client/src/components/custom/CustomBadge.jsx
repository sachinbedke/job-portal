import React from 'react'
import { Badge } from '../ui/badge'

const CustomBadge = () => {
    return <>
        <Badge variant='default'>default</Badge>
        <Badge variant='destructive'>destructive</Badge>
        <Badge variant='outline'>outline</Badge>
        <Badge variant='secondary'>secondary</Badge>
    </>
}

export default CustomBadge