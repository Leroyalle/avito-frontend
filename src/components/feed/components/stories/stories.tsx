import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '@/components/shared';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Stories: FC<Props> = ({ className }) => {
  return (
    <Container className={clsx('px-4 py-6', className)}>
      <div className="flex items-center justify-between overflow-x-auto">
        <Link href="/stories" className="flex flex-col items-center px-2">
          <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Хорошие истории"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-center text-xs">Хорошие истории</span>
        </Link>
        <Link href="/pets" className="flex flex-col items-center px-2">
          <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Питомцы из приюта"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-center text-xs">Питомцы из приюта</span>
        </Link>
        <Link href="/help" className="flex flex-col items-center px-2">
          <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-red-200 bg-red-50">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="#яПомогаю"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-center text-xs">#яПомогаю</span>
        </Link>
        <Link href="/autoteka" className="flex flex-col items-center px-2">
          <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Автотека"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-center text-xs">Автотека подскажет</span>
        </Link>
        <Link href="/autocredit" className="flex flex-col items-center px-2">
          <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Автокредит"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-center text-xs">Автокредит с Авито</span>
        </Link>
        <Link href="/call" className="flex flex-col items-center px-2">
          <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Звоните всех"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-center text-xs">Звоните всех на Авито</span>
        </Link>
        <Link href="/safe" className="flex flex-col items-center px-2">
          <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Безопасно"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-center text-xs">Безопасно продать авто</span>
        </Link>
      </div>
    </Container>
  );
};
