'use client';

import { useSearchParams, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from "@/store/store";
import { useSelector } from 'react-redux';
import blueLogo from '@/app/assets/blue_logo.svg';
import Image from 'next/image';
import Nav from '@/components/Nav';


type Article = {
    title: string;
    urlToImage: string | null;
    author: string;
    content: string;
    source: {
        name: string;
    };
    publishedAt: string;
};

function Details({ index}: any) {
    const [article, setArticle] = useState<Article | null>(null);
    const searchParams = useSearchParams();
    // const index = router.get(params);

    console.log('params: ', index)

    const allArticles = useSelector((state: RootState) => state.articles.article);

    console.log('article: ', article);
    useEffect(() => {
        // Find the article with the matching index
        const selectedArticle = allArticles.find((a:any) => a.index === index);
        setArticle(selectedArticle || null);
    }, [index, allArticles]);


    if (!article) {
        return <div className='h-screen flex justify-center items-center'><Image className='animate-pulse' src={blueLogo} alt='loader image' /></div>;
    }

    return (
        <>
            <Nav />
            <div className="container mx-auto bg-white mt-12 p-4">
                <div>
                    <div className="w-[320px] h-[180px] bg-grey overflow-hidden ">
                        {article.urlToImage !== null && (
                            <img className="w-full h-full" src={article.urlToImage} alt="" />
                        )}
                    </div>
                    <h1 className='text-lightText text-[24px] lg:text-[36px] font-soThick my-3'>{searchParams.get("title")}</h1>
                    {article.content === null ? (
                        <p className='text-grey my-3 text-xs lg:text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit animi tenetur culpa
                            ullam molestiae! Minus, maxime itaque. Eveniet tempora, modi labore possimus eius sed
                            et veniam quo inventore harum excepturi neque exercitationem cupiditate molestiae animi
                            repudiandae explicabo voluptate voluptates corrupti itaque illum? Iure vero quasi
                            rerum, dignissimos ut, odit temporibus sequi, voluptate natus doloremque voluptatem
                            nobis optio magni dicta hic in dolores ipsum nihil. Odit earum eum qui mollitia
                            praesentium. Quia odio suscipit quidem iste voluptate, corrupti error distinctio ab
                            consequatur quae id consequuntur cum a sapiente laudantium eveniet. Dolor quisquam
                            itaque, corporis asperiores delectus facere fugiat laudantium aperiam. Maxime!
                        </p>
                    ) : (
                        <p className='text-grey my-3 text text-xs lg:text-lg'>{article.content}</p>
                    )}
                    <p className='text-lightGrey text-xs lg:text-base'>{searchParams.get("author")}</p>
                </div>
            </div>
        </>
    )
}

export default Details