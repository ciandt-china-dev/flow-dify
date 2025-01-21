// GENERATE BY script
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
<<<<<<<< HEAD:web/app/components/base/icons/src/vender/line/others/Colors.tsx
import data from './Colors.json'
========
import data from './Apps02.json'
>>>>>>>> dify/main:web/app/components/base/icons/src/vender/line/others/Apps02.tsx
import IconBase from '@/app/components/base/icons/IconBase'
import type { IconBaseProps, IconData } from '@/app/components/base/icons/IconBase'

const Icon = React.forwardRef<React.MutableRefObject<SVGElement>, Omit<IconBaseProps, 'data'>>((
  props,
  ref,
) => <IconBase {...props} ref={ref} data={data as IconData} />)

<<<<<<<< HEAD:web/app/components/base/icons/src/vender/line/others/Colors.tsx
Icon.displayName = 'Colors'
========
Icon.displayName = 'Apps02'
>>>>>>>> dify/main:web/app/components/base/icons/src/vender/line/others/Apps02.tsx

export default Icon
