import ButtonStyle from '@/components/ButtonStyle'

export default function PreviewInteractive({ isInteractive, handleSetIsInteractive }) {
  return (
    <button onClick={() => handleSetIsInteractive(!isInteractive)}>
      <ButtonStyle
        buttonEmoji={isInteractive ? '🙋‍♀️' : '🙅‍♀️'}
        buttonText="Alpine JS"
        buttonActive={isInteractive}
      />
    </button>
  )
}