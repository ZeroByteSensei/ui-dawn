import { notFound } from 'next/navigation'

import matter from 'gray-matter'
import { join } from 'path'
import { promises as fs } from 'fs'

import { ogMeta, twitterMeta } from '@/content/metadata'
import HeroBanner from '@/components/HeroBanner'
import Container from '@/components/Container'
import CollectionGrid from '@/components/CollectionGrid'

export async function generateMetadata({ params }:any) {
  const { categoryData } = await getCategory(params)

  return {
    title: `Tailwind CSS ${categoryData.title} Components | HyperUI`,
    description: categoryData.description,
    openGraph: {
        ...ogMeta,
      title: `Tailwind CSS ${categoryData.title} Components | HyperUI`,
      description: categoryData.description,
    },
    twitter: {
        ...twitterMeta,
      title: `Tailwind CSS ${categoryData.title} Components | HyperUI`,
      description: categoryData.description,
    },
  }
}

export async function generateStaticParams() {
  return ['application-ui', 'marketing', 'ecommerce']
}

async function getCategory(params:any) {
  try {
    const componentsPath = join(process.cwd(), 'src/content/components')
    const categoriesPath = join(process.cwd(), '/src/content/categories')

    const categorySlug = params.category
    const categoryPath = join(categoriesPath, `${categorySlug}.mdx`)

    const componentSlugs = await fs.readdir(componentsPath)
    const categoryItem = await fs.readFile(categoryPath, 'utf-8')

    // console.log(componentSlugs, "slug here", categorySlug);

    const { data: categoryData } = matter(categoryItem)

    const componentItems = await Promise.all(
      componentSlugs
        .filter((componentSlug) => componentSlug.includes(categorySlug))
        .map(async (componentSlug) => {
          const componentPath = join(componentsPath, componentSlug)
          const componentItem = await fs.readFile(componentPath, 'utf-8')

          const { data: componentData } = matter(componentItem)

          const componentSlugFormatted = componentSlug.replace('.mdx', '')
          const componentSlugTrue = componentSlugFormatted.replace(`${categorySlug}-`, '')
          const componentCount = Object.values(componentData.components).length

          return {
            title: componentData.title,
            slug: componentSlugTrue,
            category: componentData.category,
            emoji: componentData.emoji,
            count: componentCount,
            tag: componentData.tag,
            id: componentSlugFormatted,
          }
        })
    )

    // console.log(componentItems, "item here")

    return {
      categoryData,
      componentItems,
    }
  } catch {
    notFound()
  }
}

export default async function Page({ params }:any) {
  const { categoryData, componentItems} = await getCategory(params)

  console.log(params, "paramss heree")

  return (
    <>
      <HeroBanner title={categoryData.title} subtitle={categoryData.subtitle}>
        {categoryData.description}
      </HeroBanner>

      
      <Container classNames="pb-8 lg:pb-12 space-y-8">
        <CollectionGrid componentItems={componentItems} />
      </Container> 
     
    </>
  )
}