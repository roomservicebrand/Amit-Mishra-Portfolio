import React, { useState, useRef, lazy, Suspense } from 'react';
const Lightbox = lazy(() => import('./Lightbox'));

const allImages = [
  'https://lh3.googleusercontent.com/pw/AP1GczOkap3k52m5ojG6FGwOHX55aIMxSJ2rP-Kgs5CUHz7tdRO_YaPgCjUw1Q3aH0VB9B-UWJylaDWG8oRZC-TN77lJ0tKVj3I1wivZHQiLL1n3EgkxO1LA=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczPERO1eniWQPw1Bmim0kRcE1P8JQ11HYae437im9jPfY-FGCiu-oZst_0lRRjp2_8e6Q_j1kV7dVOCql20d4UC8jT5h4QlltuOb4ydgrCIgkIwi2x7u=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczMwGRjA3RLe7tpfdx9sZCrVcIFUS8jSuN_vD-tdeG1C9McXMx3JbGR63fxDNAnyTYD2Qmda_VJHfdkTqnL1-UtTd-GmTNmHR3euok-Op9ps4cNgWFSX=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczOt4vMotA4jJpp5s3kFeF2E8ZQu0AtFwUAyM0AHiJSw0n7hYSkmVUnz_WfRdyzyY-tVKcAaGA4xDg47j2ujKn3Gvf8NYab8hh_uZdnwjynC0YqvIOFO=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczNGaHPsFiJCLJzQ5BrPpPTYqL6THYV6CKRcGIm1nU_OH958xKY0YSJtt5RUKOpHrmXbX3RbsdecQZsO30HiTMOFqvL5TDFpNESQPph5UN4ZzPIqHYaL=w1920-h1101',
  'https://lh3.googleusercontent.com/pw/AP1GczMu3e3iaz8PTuoYQg5kMktD3y0cCKwoUxLDUbjVSTQ2qZ7lY0GtumDhtDLK55LW8_ok5k06PvQa97lU9l_P-mmzzY1Akd-NapF5RZsxu55hun0Ppmij=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczPWTMZmzfJclDo_KBBWt9zfEPlHfGYJBGMn_3NNSZ_2bYu0vR4ZyjoUuZxtb_I0cCkoUfFwutxxY_qU3e_BspR2kHyt9Cj-CGIyLhqB7pMTlzygQS0O=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczPaL3qF74teIOBUZTqoiBtXjOmfj0ygoZW1eJWkyQT4e-iPidEeogX_HCTxplsH2wDE5yzWIsu18CZTPjPurpxUvB8p8bLoeVn-AmBndoi5BGZT7_sj=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczM7M_f5tFRo0mUcKNqzN_smlLmBq5lRzk0Lewvu_7u7suTGeZdhJRqeMTb_4KIc6loDheIW64p5cXX_YbWZzpjlh4sVsfLA9ZcxsNCmXAGfGRDN6grw=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczNHZjIJ6qB4EivJNXb0z7rJx_WvF4gfnB2C0LDiwDF-qRPkHIRgyhwV9se5vGwej1pcEHY_NIG88Fzqf4P2cKzt8tVLBTQfLGbQmvkxroQlRriZD-pi=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczNcycEMQL0wPcnh-xJSbvh6tQSNUeUC70ULB2IFgePOVMrTaGBHRwRSyFsjWE31z1fhbmGfAWPag08__2uOe4oq_AP9OlNVZEY1MNZa31JEubHF71Tm=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczNCMzdbc4mP51UPKwLkl--FPB3EfTWSY-qbNtneftoYBwt64zEDmumBuirXAT3_nzQPoOyrIpgWn7Xo9-RB1hbZcdrGWko7MfeA4BLHgFXMm7iy16XO=w1920-h1080',
  'https://lh3.googleusercontent.com/pw/AP1GczM7fyR8bs7KKnM3-nNAfeljulwsri5Cn9Psp7K-8yxPoq_BPflRAj_alVoU5W1JgfIdvLWZMqSln2-tQ_AEwbJACIPk3iQWVtyqwXI--JL-cMUB3MmO=w1920-h1080'
];

const imagesToRemove = [
  'https://lh3.googleusercontent.com/pw/AP1GczOt4vMotA4jJpp5s3kFeF2E8ZQu0AtFwUAyM0AHiJSw0n7hYSkmVUnz_WfRdyzyY-tVKcAaGA4xDg47j2ujKn3Gvf8NYab8hh_uZdnwjynC0YqvIOFO=w1920-h1080', // Image 4
  'https://lh3.googleusercontent.com/pw/AP1GczNGaHPsFiJCLJzQ5BrPpPTYqL6THYV6CKRcGIm1nU_OH958xKY0YSJtt5RUKOpHrmXbX3RbsdecQZsO30HiTMOFqvL5TDFpNESQPph5UN4ZzPIqHYaL=w1920-h1101', // Image 5
  'https://lh3.googleusercontent.com/pw/AP1GczMu3e3iaz8PTuoYQg5kMktD3y0cCKwoUxLDUbjVSTQ2qZ7lY0GtumDhtDLK55LW8_ok5k06PvQa97lU9l_P-mmzzY1Akd-NapF5RZsxu55hun0Ppmij=w1920-h1080', // Image 6
  'https://lh3.googleusercontent.com/pw/AP1GczPaL3qF74teIOBUZTqoiBtXjOmfj0ygoZW1eJWkyQT4e-iPidEeogX_HCTxplsH2wDE5yzWIsu18CZTPjPurpxUvB8p8bLoeVn-AmBndoi5BGZT7_sj=w1920-h1080', // Image 8
];

const images = allImages.filter(img => !imagesToRemove.includes(img));

const Gallery: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const openLightbox = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
        triggerRef.current = e.currentTarget;
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Gallery</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A collection of professional photos.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <button
                            key={index}
                            className="overflow-hidden rounded-lg cursor-pointer group block focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
                            data-aos="zoom-in"
                            data-aos-delay={index * 50}
                            onClick={(e) => openLightbox(index, e)}
                            aria-label={`View gallery image ${index + 1}`}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            </div>
            {selectedImageIndex !== null && (
                 <Suspense fallback={null}>
                    <Lightbox
                        images={images}
                        selectedIndex={selectedImageIndex}
                        onClose={closeLightbox}
                        onNext={nextImage}
                        onPrev={prevImage}
                        triggerRef={triggerRef as React.RefObject<HTMLButtonElement>}
                    />
                </Suspense>
            )}
        </section>
    );
};

export default Gallery;