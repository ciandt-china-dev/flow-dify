// GENERATE BY script
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
<<<<<<<< HEAD:web/app/components/base/icons/src/vender/line/others/Apps02.tsx
import data from './Apps02.json'
========
import data from './Colors.json'
>>>>>>>> dify/main:web/app/components/base/icons/src/vender/line/others/Colors.tsx
import IconBase from '@/app/components/base/icons/IconBase'
import type { IconBaseProps, IconData } from '@/app/components/base/icons/IconBase'

const Icon = React.forwardRef<React.MutableRefObject<SVGElement>, Omit<IconBaseProps, 'data'>>((
  props,
  ref,
) => <IconBase {...props} ref={ref} data={data as IconData} />)

<<<<<<<< HEAD:web/app/components/base/icons/src/vender/line/others/Apps02.tsx
Icon.displayName = 'Apps02'
========
Icon.displayName = 'Colors'
>>>>>>>> dify/main:web/app/components/base/icons/src/vender/line/others/Colors.tsx

export default Icon
