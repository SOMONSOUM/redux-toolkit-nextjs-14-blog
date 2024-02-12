"use client";

import { useEffect, useState } from "react";
import Nav from '@/components/Nav'
import { allArticles } from "@/store/slices/allArtclesSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import CustomBtn from "@/customs/CustomBtn";
import usePagination from "@/customs/usePagination";
import Footer from "@/components/Footer";
import Link from "next/link";

type Article = {
    title: string;
    urlToImage: string | null;
    author: string;
    source: {
        name: string;
    };
    publishedAt: string;
};

function Blog() {
    const dispatch = useDispatch<AppDispatch>();
    const select = useSelector((state: RootState) => state.articles.article);
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

    // usePagination hook for filtering the articles by pages
    const { currentPage, totalPages, currentData, nextPage, prevPage, goToPage } = usePagination<Article>({
        items: selectedAuthor ? select?.filter((post: any) => post.author === selectedAuthor) : select || [],
        itemsPerPage: 10,
    });

    const [filteredPosts, setFilteredPosts] = useState<Article[]>(currentData);


    console.log('articles: ', select)

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString();
    };


    // fetch articles function
    const getArticles = async () => {
        await dispatch(allArticles())
    }

    // useEffect calling the articles fetch
    useEffect(() => {
        getArticles();
    }, [])

    useEffect(() => {
        // Set filtered posts whenever the selected source changes
        if (selectedAuthor) {
            const filtered = select?.filter((post: any) => post.author === selectedAuthor);
            setFilteredPosts(filtered || []);
        } else {
            setFilteredPosts(select || []);
        }
    }, [select, selectedAuthor, currentPage]);


    // function that handles the changing of the dropdown author value
    const handleAuthorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAuthor(event.target.value);
    };

    return (
        <div className='bg-white'>
            <Nav />
            <div className="container mx-auto p-4">
                <div className="posts_latest_post grid grid-cols-1 lg:grid-cols-4 gap-5">
                    {currentData?.map((post: any, index: any) => (
                        <div key={index} className="w-full mt-12">
                            <div className="w-[296px] h-[312px] bg-grey relative">
                                {post.urlToImage !== null && (
                                    <img className="w-full h-full" src={post.urlToImage} alt="" />
                                )}
                                <p className="bg-lightBase text-lightGrey text-xs p-1 absolute bottom-0">{post?.author}</p>
                            </div>
                            <div className="bg-lightBase mt-8">
                                <Link href={{pathname: `/posts/${index}`, query: {
                                    index,
                                    image: post.urlToImage,
                                    authour: post.author,
                                    title: post.title
                                }}} className="text-[16px] lg:text-[20px] leading-[18px] lg:leading-[28.8px] font-soThick">{post.title}</Link>
                                <div className="flex items-center gap-3 mt-6">
                                    <p className="text-sm font-soThick text-lightGrey">{post?.source?.name}</p>
                                    <p className="text-sm font-soThick text-lightGrey">{formatDate(post?.publishedAt)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end gap-4 p-4 mt-6 mb-12">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button className="bg-mainOrange text-white rounded-[10px] py-[14px] px-[24px] text-sm" key={i} onClick={() => goToPage(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Blog