import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '@/components/shared';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  return (
    <Container className={(clsx('px-4 py-6'), className)}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Link href="/auto" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Авто"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Авто</span>
        </Link>
        <Link href="/nedvizhimost" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Недвижимость"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Недвижимость</span>
        </Link>
        <Link href="/rabota" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Работа"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Работа</span>
        </Link>
        <Link href="/odezhda" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Одежда"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Одежда, обувь, аксессуары</span>
        </Link>
        <Link href="/hobbi" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Хобби"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Хобби и отдых</span>
        </Link>
        <Link href="/zhivotnye" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Животные"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Животные</span>
        </Link>
      </div>
    </Container>
  );
};
