import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

type ResourceCardProps = {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
};

const ResourceCard = ({
  id,
  title,
  image,
  downloadNumber,
}: ResourceCardProps) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${id}`}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              alt={title}
              className="h-full rounded-md object-center"
              width={384}
              height={440}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" alt="downlaod" width={20} height={20} />
          {downloadNumber}
        </div>
        <Link
          href={`/resource/${id}`}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download now
          <Image src="/arrow-blue.svg" alt="" height={10} width={13} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
