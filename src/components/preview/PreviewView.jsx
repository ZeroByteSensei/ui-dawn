import ButtonStyle from '@/components/ButtonStyle'

export default function PreviewView({ showPreview, handleSetShowPreview }) {
  return (
    <button onClick={() => handleSetShowPreview(!showPreview)}>
      <ButtonStyle buttonEmoji="👀" buttonText="View" buttonActive={!showPreview} />
    </button>
  )
}