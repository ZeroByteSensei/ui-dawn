import { notFound } from 'next/navigation'

import matter from 'gray-matter'
import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

import { ogMeta, twitterMeta } from '@/content/metadata'

import Container from '@/components/Container'
import MdxRemoteRender from '@/components/MdxRemoteRender'
import CollectionLinks from '@/components/CollectionLinks'
import CollectionList from '@/components/CollectionList'

const mdxComponents = {
  CollectionList,
}

const componentsDirectory = join(process.cwd(), '/src/content/components')

export async function generateMetadata({ params }) {
  const { collectionData } = await getCollection(params)
  
  console.log(collectionData, "data here")

  return {
    title: `Tailwind CSS ${collectionData.seo.title} | HyperUI`,
    description: collectionData.seo.description,
    openGraph: {
      title: `Tailwind CSS ${collectionData.seo.title} | HyperUI`,
      description: collectionData.seo.description,
      ...ogMeta,
    },
    twitter: {
        ...twitterMeta,
      title: `Tailwind CSS ${collectionData.seo.title} | HyperUI`,
      description: collectionData.seo.description,
    },
  }
}

export async function generateStaticParams() {
  return await fs.readdir(componentsDirectory)
}

async function getCollection(params) {
  try {
    const componentPath = join(componentsDirectory, `${params.category}-${params.collection}.mdx`)

    // console.log(componentPath, "compopath")
    
    const postItem = await fs.readFile(componentPath, 'utf-8')
    
    const { content, data: frontmatter } = matter(postItem)
    
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: frontmatter,
    })
    console.log(mdxSource, "compopath2")

    return {
      collectionData: {
        ...frontmatter,
        slug: params.collection,
      },
      collectionContent: mdxSource,
    }
  } catch {
    notFound()
  }
}

export default async function Page({ params }) {
  const { collectionData, collectionContent } = await getCollection(params)

  // console.log(collectionContent, "collecData here!")

  const componentsData = {
    componentContainer: {
      previewInner: collectionData.container || '',
      previewHeight: collectionData.wrapper || '',
    },
    componentsData: Object.entries(collectionData.components).map(
      ([componentId, componentItem]) => {
        return {
          id: componentId,
          title: componentItem.title,
          slug: collectionData.slug,
          category: collectionData.category,
          container: componentItem.container || '',
          wrapper: componentItem.wrapper || '',
          creator: componentItem.creator || '',
          dark: !!componentItem.dark,
          interactive: !!componentItem.interactive,
        }
      }
    ),
  }
  // console.log(componentsData, "compoData")

  return (
    <Container classNames="py-8 lg:py-12 space-y-8 lg:space-y-12">
      <CollectionLinks activeCollection={params.collection} activeCategory={params.category} />

      <div className="prose max-w-none">
        <MdxRemoteRender
          mdxSource={collectionContent}
          mdxComponents={mdxComponents}
          mdxScope={componentsData}
        />
      </div>
    </Container>
  )
}