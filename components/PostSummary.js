//* Dependencies
import Link from 'next/link';
import { formatDate } from '../utils/helpers';

//* Bootstrap and icon imports
import { Card } from 'react-bootstrap';

export default function PostSummary({ post }) {
  const { slug, title, date, author, content } = post;

  return (
    <Card key={slug} className='m-2'>
      <Card.Body>
        <Link href={`/posts/${slug}`}>
          <a>
            <Card.Title>{title}</Card.Title>
          </a>
        </Link>
        <Card.Subtitle className='text-muted p-1'>
          Published on: {formatDate(date)}
        </Card.Subtitle>
        <Card.Subtitle className='text-muted p-1'>
          Author: {author.node.name}
        </Card.Subtitle>
        <div
          className='p-2'
          dangerouslySetInnerHTML={{
            __html: content.substring(0, 200).concat('...'),
          }}
        />
        <Link href={`/posts/${slug}`}>
          <a>
            <Card.Text className='text-muted p-1'>
              Continue reading...
            </Card.Text>
          </a>
        </Link>
      </Card.Body>
    </Card>
  );
}
