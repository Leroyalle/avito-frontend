import type { FC } from 'react';
import { Image } from 'antd';

interface Props {
  items: string[];
  name: string;
  className?: string;
}

export const ImageGallery: FC<Props> = ({ items, name, className }) => {
  if (!items.length) return null;

  const [mainImage, ...galleryItems] = items;
  const fallbackSrc =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmg==';

  return (
    <div className={className}>
      <div className="mb-4">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image
            src={mainImage}
            alt={name}
            className="h-full w-full object-cover object-center"
            fallback={fallbackSrc}
          />
        </div>
      </div>

      {galleryItems.length > 0 && (
        <div className="grid grid-cols-6 gap-2">
          {galleryItems.map((src, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-md border border-gray-200">
              <Image
                src={src}
                alt={`${name} ${index + 1}`}
                className="h-full w-full object-cover"
                fallback={fallbackSrc}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
