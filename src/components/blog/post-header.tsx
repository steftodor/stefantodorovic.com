import Avatar from './avatar'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0" >
        <CoverImage title={title} src={coverImage} />
      </div>
      {/* Post Title */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      {/* End of Post Title */}

      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} dateString={date} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} dateString={date} />
        </div>

      </div>
    </>
  )
}

export default PostHeader
