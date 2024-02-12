"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
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


export default function Home() {
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
    <>
      <div className="bg-grey">
        <Nav />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-screen">
            <div className="left w-full p-4">
              {select?.slice(0, 1).map((article: any, index: any) => (
                <Link key={index} href={{
                  pathname: `/posts/${index}`, query: {
                    index: index,
                    img: article.urlToImage,
                    title: article.title,
                  }
                }} passHref className="text-[32px] leading-[34px] lg:text-[62px] lg:leading-[74px] text-lightBase">{article?.title}</Link>
              ))}

              <div className="sub-news grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
                {select?.slice(0, 2).map((articles: any, index: any) => (
                  <div key={index} className="hover:bg-lighterShade p-3">
                    <div className="w-[120px] h-[80px] bg-white overflow-hidden ">
                      {articles.urlToImage !== null && (
                        <img className="w-full h-full" src={articles.urlToImage} alt="" />
                      )}
                    </div>
                    <Link href={{
                      pathname: `/posts/${index}`,
                      query: {
                        index: index,
                        img: articles.urlToImage,
                        title: articles.title,

                      }
                    }} passHref className="text-[16px] leading-[19px] font-soThick text-white text-wrap my-3">{articles.title}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="right h-full">
              <div className="popular bg-lighterShade p-3">
                <h2 className="text-white">Popular this week</h2>
                <div>
                  {select?.slice(3, 8).map((popular: any, index: any) => (
                    <div key={index} className="flex items-center gap-4 my-4">
                      <div className="w-[120px] h-[80px] bg-white overflow-hidden ">
                        {popular.urlToImage !== null && (
                          <img className="w-full h-full" src={popular.urlToImage} alt="" />
                        )}
                      </div>
                      <div>
                        <p className="text-white">
                          Author: {popular.author}
                        </p>
                        <Link href={{pathname: `/posts/${index}`, query: {
                          index: index,
                          title: popular.title,
                          author: popular.author,
                          image: popular.urlToImage
                        }}} passHref className="text-white">{popular.title}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="latest_posts px-3 py-[120px] bg-white p-3">
            <div className="title_flex flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
              <h2 className="text-lightText text-[24px] lg:text-[31px] leading-[37px]">Our Latest Post</h2>
              <div className="flex gap-4">
                <select className="border border-mainOrange p-1 rounded-[10px] focus:outline-mainOrange" onChange={handleAuthorChange} value={selectedAuthor || ''}>
                  <option value="">All Sources</option>
                  {select?.map((source: any, index: any) => (
                    <option key={index} value={source.author}>
                      {source.author}
                    </option>
                  ))}
                </select>
                <CustomBtn text="View All" className="hidden lg:block bg-mainOrange text-white py-[18px] px-[24px] rounded-[8px] text-[16px] font-soThick" />
              </div>
            </div>
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
                      index: index,
                      url: post.urlToImage,
                      author: post?.author,
                      title: post.title,
                      source: post?.source?.name
                    }}} passHref className="text-[16px] lg:text-[20px] leading-[18px] lg:leading-[28.8px] font-soThick">{post.title}</Link>
                    <div className="flex items-center gap-3 mt-6">
                      <p className="text-sm font-soThick text-lightGrey">{post?.source?.name}</p>
                      <p className="text-sm font-soThick text-lightGrey">{formatDate(post?.publishedAt)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4 p-4 mt-6">
              {Array.from({ length: totalPages }, (_, i) => (
                <button className="bg-mainOrange text-white rounded-[10px] py-[14px] px-[24px] text-sm" key={i} onClick={() => goToPage(i + 1)}>
                  {i + 1}
                </button>
              ))}
            </div>

          </div>
          <div className="newsletter bg-white px-3 py-[120px]">
            <div className="lg:w-[95%] lg:h-[476px] mx-auto bg-primaBlue p-3 flex flex-col justify-center">
              <div className="lg:w-[95%] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-end p-3">
                <h2 className="text-lightBase text-[30px] leading-[42px] lg:text-[62px] lg:leading-[74.4px] font-soThick">Sign Up for Our Newsletters</h2>
                <p className="text-lightBase text-[16px] leading-[20px] font-lightThin lg:w-[400px]">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod.
                </p>
              </div>
              <div className="formSubmit grid grid-cols-1 lg:grid-cols-3 gap-5 p-3 py-12">
                <input className="lg:col-span-2 w-full rounded-[8px] text-lightGrey p-1 focus:outline-none" type="text" placeholder="Input your email address here" />
                <CustomBtn text="Subscribe Now" className="w-[164px] h-[56px] bg-mainOrange text-lightBase rounded-[8px] py-[18px] px-[24px]" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
