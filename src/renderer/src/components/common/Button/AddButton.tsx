import { ActionButton, ActionButtonProps } from '@/components'

export const AddButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton onClick={() => console.log('Add button clicked')} {...props}>
      Nuevo
    </ActionButton>
  )
}
