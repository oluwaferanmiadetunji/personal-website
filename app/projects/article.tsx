import Link from 'next/link'

type Props = {
  project: any
}

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project?.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center"></div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project?.title}
        </h2>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project?.description}
        </p>
      </article>
    </Link>
  )
}
