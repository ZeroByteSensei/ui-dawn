import ButtonStyle from '@/components/ButtonStyle'

export default function PreviewView({ showPreview, handleSetShowPreview }) {
  return (
    <button onClick={() => handleSetShowPreview(!showPreview)}>
      {showPreview?<ButtonStyle buttonEmoji="</>" buttonText="View Code" buttonActive={!showPreview} />:
        <ButtonStyle buttonEmoji="</>" buttonText="Hide Code" buttonActive={!showPreview} />}
    </button>
  )
}