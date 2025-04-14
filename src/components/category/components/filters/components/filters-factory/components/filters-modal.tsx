'use client';

import { filtersAtom } from '@/store/filters-atom';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, Modal, Slider } from 'antd';
import { useAtom } from 'jotai';
import type React from 'react';

import { FC, useState } from 'react';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = false }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between font-medium"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? <UpOutlined size={16} /> : <DownOutlined size={16} />}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FiltersModal: FC<Props> = ({ isOpen, onClose }) => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const [prices, setPrices] = useState([filters.minPrice, filters.maxPrice]);

  const onSubmit = () => {
    setFilters({ ...filters, minPrice: prices[0], maxPrice: prices[1] });
    onClose();
  };

  return (
    <Modal
      title="Фильтры"
      open={isOpen}
      onClose={onClose}
      onOk={onSubmit}
      onCancel={onClose}
      footer={
        <div className="mt-6 flex items-center justify-between">
          <Button key="back" variant="outlined" onClick={onClose}>
            Сбросить всё
          </Button>
          <Button key="submit" variant="filled" type="primary" onClick={onSubmit}>
            Применить фильтры
          </Button>
        </div>
      }>
      <div className="relative mx-auto h-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <FilterSection title="Цена, ₽" defaultOpen>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Input
                  type="number"
                  value={prices[0]}
                  onChange={(e) =>
                    setPrices((prev) =>
                      prev.map((price, i) => (i === 0 ? Number(e.target.value) : price)),
                    )
                  }
                  className="w-[45%]"
                  placeholder="от"
                />
                <span className="text-gray-400">—</span>
                <Input
                  type="number"
                  value={prices[1]}
                  onChange={(e) =>
                    setPrices((prev) =>
                      prev.map((price, i) => (i === 0 ? Number(e.target.value) : price)),
                    )
                  }
                  className="w-[45%]"
                  placeholder="до"
                />
              </div>
              <Slider
                range
                value={prices}
                defaultValue={prices}
                onChange={setPrices}
                onChangeComplete={() => console.log('')}
              />
            </div>
          </FilterSection>

          <FilterSection title="Состояние">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="condition-new" />
                <label htmlFor="condition-new" className="text-sm">
                  Новое
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="condition-used" />
                <label htmlFor="condition-used" className="text-sm">
                  Б/у
                </label>
              </div>
            </div>
          </FilterSection>
        </div>
      </div>
    </Modal>
  );
};
