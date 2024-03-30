import CollectionCard from '@/components/CollectionCard'

export default function CollectionGrid({ componentItems }:{componentItems:any}) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {componentItems.map((componentData:any) => (
        <li key={componentData.id}>
          <CollectionCard componentData={componentData} />
        </li>
      ))}
    </ul>
  )
}