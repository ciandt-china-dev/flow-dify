// GENERATE BY script
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
<<<<<<<< HEAD:web/app/components/base/icons/src/vender/workflow/Jinja.tsx
import data from './Jinja.json'
========
import data from './Env.json'
>>>>>>>> dify/main:web/app/components/base/icons/src/vender/line/others/Env.tsx
import IconBase from '@/app/components/base/icons/IconBase'
import type { IconBaseProps, IconData } from '@/app/components/base/icons/IconBase'

const Icon = React.forwardRef<React.MutableRefObject<SVGElement>, Omit<IconBaseProps, 'data'>>((
  props,
  ref,
) => <IconBase {...props} ref={ref} data={data as IconData} />)

<<<<<<<< HEAD:web/app/components/base/icons/src/vender/workflow/Jinja.tsx
Icon.displayName = 'Jinja'
========
Icon.displayName = 'Env'
>>>>>>>> dify/main:web/app/components/base/icons/src/vender/line/others/Env.tsx

export default Icon
