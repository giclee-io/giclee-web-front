'use client'

import * as RadixForm from '@radix-ui/react-form'

import Button from '@/components/atoms/Button'
import EditableCardItem from '@/components/atoms/EditableCardItem'

import type { PlatformItems } from '@/components/atoms/PlatformItem'

type Props = {
  items: PlatformItems[]
}

const EditableCardItemsList: React.FC<Props> = ({ items }) => {
  return (
    <RadixForm.Root className='mt-4 max-w-md'>
      <ol className='min-h-[320px]'>
        {items.map((item, key) => {
          return <EditableCardItem {...item} key={key} />
        })}
      </ol>
      <RadixForm.Submit asChild>
        <Button className='mx-auto mt-8 block' href='' type='primary'>
          保存
        </Button>
      </RadixForm.Submit>
    </RadixForm.Root>
  )
}

export default EditableCardItemsList