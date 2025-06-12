import { ActionButton, ActionButtonProps } from '@/components'

export const DeleteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton onClick={() => console.log('Add button clicked')} {...props}>
      Eliminar
    </ActionButton>
  )
}
