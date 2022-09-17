import Head from 'next/head'
import { siteMeta } from 'lib/siteMeta'

const { siteTitle, fontUrl } = siteMeta

type Props = {
  pageTitle?: string
}
const Meta = ({ pageTitle }: Props) => {
  const title = pageTitle ? `${pageTitle} ｜ ${siteTitle}` : siteTitle
  return (
    <Head>
      <title>{title}</title>
      <link rel='stylesheet' href={fontUrl} />
    </Head>
  )
}

export default Meta
