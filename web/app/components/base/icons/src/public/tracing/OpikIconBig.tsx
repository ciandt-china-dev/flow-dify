// GENERATE BY script
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
<<<<<<<< HEAD:web/app/components/base/icons/src/public/tracing/TracingIcon.tsx
import data from './TracingIcon.json'
========
import data from './OpikIconBig.json'
>>>>>>>> dify/main:web/app/components/base/icons/src/public/tracing/OpikIconBig.tsx
import IconBase from '@/app/components/base/icons/IconBase'
import type { IconBaseProps, IconData } from '@/app/components/base/icons/IconBase'

const Icon = React.forwardRef<React.MutableRefObject<SVGElement>, Omit<IconBaseProps, 'data'>>((
  props,
  ref,
) => <IconBase {...props} ref={ref} data={data as IconData} />)

<<<<<<<< HEAD:web/app/components/base/icons/src/public/tracing/TracingIcon.tsx
Icon.displayName = 'TracingIcon'
========
Icon.displayName = 'OpikIconBig'
>>>>>>>> dify/main:web/app/components/base/icons/src/public/tracing/OpikIconBig.tsx

export default Icon
