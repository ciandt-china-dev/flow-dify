// GENERATE BY script
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
<<<<<<<< HEAD:web/app/components/base/icons/src/vender/line/others/Icon3Dots.tsx
import data from './Icon3Dots.json'
========
import data from './Highlight.json'
>>>>>>>> dify/main:web/app/components/base/icons/src/public/common/Highlight.tsx
import IconBase from '@/app/components/base/icons/IconBase'
import type { IconBaseProps, IconData } from '@/app/components/base/icons/IconBase'

const Icon = React.forwardRef<React.MutableRefObject<SVGElement>, Omit<IconBaseProps, 'data'>>((
  props,
  ref,
) => <IconBase {...props} ref={ref} data={data as IconData} />)

<<<<<<<< HEAD:web/app/components/base/icons/src/vender/line/others/Icon3Dots.tsx
Icon.displayName = 'Icon3Dots'
========
Icon.displayName = 'Highlight'
>>>>>>>> dify/main:web/app/components/base/icons/src/public/common/Highlight.tsx

export default Icon
