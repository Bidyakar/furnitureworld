import Image, { ImageProps } from "next/image";

export default function BlurImage(props: ImageProps) {
    return (
        <Image
            {...props}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8+p8AAxcBz80UgnYAAAAASUVORK5CYII="
            sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        />
    );
}
