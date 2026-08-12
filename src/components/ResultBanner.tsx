import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  priority?: boolean;
};

export default function ResultBanner({ title, subtitle, src, alt, priority = false }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
      <div className="border-b border-brand-100 bg-brand-50 px-6 py-4">
        <h3 className="font-display text-xl font-bold text-brand-900">{title}</h3>
        <p className="mt-1 text-sm text-stone-600">{subtitle}</p>
      </div>
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className="h-auto w-full object-contain"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority={priority}
        />
      </div>
    </div>
  );
}
