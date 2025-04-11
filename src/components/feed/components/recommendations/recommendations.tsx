import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { HeartOutlined } from '@ant-design/icons';
import { Container } from '@/components/shared';

interface Props {
  className?: string;
}

export const Recommendations: FC<Props> = ({ className }) => {
  return (
    <Container className={clsx('px-4 py-6', className)}>
      <h2 className="mb-4 text-2xl font-bold">Рекомендации для вас</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <Link
            href={`/item/${item}`}
            key={item}
            className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Chevrolet"
                width={300}
                height={200}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 opacity-80 hover:opacity-100">
                <HeartOutlined className="h-5 w-5" />
              </button>
            </div>
            <div className="p-3">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="font-bold text-cyan-600">
                  Chevrolet Lacetti 1.6 MT, 2011, 259 760 км
                </h3>
              </div>
              <p className="text-lg font-bold">475 000 ₽</p>
              <p className="text-sm text-gray-500">Москва, Новокосино</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
