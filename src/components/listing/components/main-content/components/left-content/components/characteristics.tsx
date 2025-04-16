import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button } from 'antd';

interface Props {
  className?: string;
}

export const Characteristics: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('mt-8', className)}>
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
  );
};
