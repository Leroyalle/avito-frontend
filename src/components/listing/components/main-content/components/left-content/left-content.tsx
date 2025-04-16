import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from 'antd';
import Link from 'next/link';
import { ImageGallery, ListingActions } from './components';

interface Props {
  className?: string;
}

export const LeftContent: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('lg:col-span-2', className)}>
      <ImageGallery />
      <ListingActions />

      {/* Characteristics */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Характеристики</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Год выпуска:</span>
              <span className="font-medium">2013</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Поколение:</span>
              <span className="font-medium text-[var(--avito-primary)]">II (2011—2020)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Пробег:</span>
              <span className="font-medium">1 200 км</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">История пробега:</span>
              <span className="font-medium text-[var(--avito-primary)]">
                2 записи в отчёте Автотеки
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">ПТС:</span>
              <span className="font-medium">Электронный</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Владельцев по ПТС:</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Состояние:</span>
              <span className="font-medium">Не битый</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Модификация:</span>
              <span className="font-medium">1.4 MT (100 л.с.)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Объём двигателя:</span>
              <span className="font-medium">1.4 л</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Тип двигателя:</span>
              <span className="font-medium">Бензин</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Коробка передач:</span>
              <span className="font-medium">Механика</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Привод:</span>
              <span className="font-medium">Передний</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Комплектация:</span>
              <span className="font-medium">Базовая</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Тип кузова:</span>
              <span className="font-medium">Седан</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Цвет:</span>
              <span className="font-medium">Серебряный</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Руль:</span>
              <span className="font-medium">Левый</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">VIN или номер кузова:</span>
              <span className="font-medium">KLT***************</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Обмен:</span>
              <span className="font-medium">Возможен</span>
            </div>
          </div>
        </div>
        <Button
          variant="link"
          className="mt-2 text-[var(--avito-primary)] hover:text-[var(--avito-primary-hover)]">
          Все характеристики
        </Button>
      </div>

      {/* History check */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Проверка истории</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-6 w-6 rounded-full bg-blue-500"></div>
            <span className="font-medium">Автотекс</span>
          </div>
          <span className="text-sm text-gray-500">Отчет от 7 апреля 2025 года</span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-start">
            <svg
              className="mr-2 h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div>
              <p className="font-medium">1 владелец по ПТС</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg
              className="mr-2 h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="font-medium">ДТП не найдены</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg
              className="mr-2 h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div>
              <p className="font-medium">
                Проверка безопасности: повреждения, стоимость ремонтов и страховые выплаты
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <svg
              className="mr-2 h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
            <div>
              <p className="font-medium">
                Проверка юридической чистоты: залог, розыск и ограничения
              </p>
            </div>
          </div>
        </div>

        <Button className="mt-4 bg-gray-900 hover:bg-black">Купить полный отчёт от 86 ₽</Button>

        <div className="mt-4 flex flex-col space-y-2 text-sm text-[var(--avito-primary)]">
          <Link href="#" className="flex items-center hover:underline">
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Посмотреть пример отчёта
          </Link>
          <Link href="#" className="flex items-center hover:underline">
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Использовать пакет на autoteka.ru
          </Link>
        </div>
      </div>
    </div>
  );
};
