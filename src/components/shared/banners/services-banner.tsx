import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container } from '../ui';

interface Props {
  className?: string;
}

export const ServicesBanner: FC<Props> = ({ className }) => {
  return (
    <Container className={clsx('px-4 py-6', className)}>
      <h2 className="mb-4 text-xl font-bold">Сервисы и услуги Авито</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-start">
          <div className="mr-3 rounded-lg bg-orange-100 p-2">
            <span className="text-2xl">🚚</span>
          </div>
          <div>
            <h3 className="font-bold">Доставка</h3>
            <p className="text-sm text-gray-600">
              Проверка при получении и возможность бесплатно вернуть товар
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-3 rounded-lg bg-orange-100 p-2">
            <span className="text-2xl">🚗</span>
          </div>
          <div>
            <h3 className="font-bold">Автотека</h3>
            <p className="text-sm text-gray-600">
              Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-3 rounded-lg bg-orange-100 p-2">
            <span className="text-2xl">🏠</span>
          </div>
          <div>
            <h3 className="font-bold">Путешествия</h3>
            <p className="text-sm text-gray-600">
              Выбор свободных дат в календаре и оплата онлайн для гарантии заселения
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
